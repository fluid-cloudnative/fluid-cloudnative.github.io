---
sidebar_label: 使用ThinRuntime接入存储
sidebar_position: 1
---

# 使用ThinRuntime接入任意底层存储

Fluid原生集成的运行时引擎仅支持特定的数据源类型。对于其他暂未支持的底层存储系统（例如：自研或自建的存储），Fluid提供了ThinRuntime以支持任意存储系统接入到Fluid框架中。使用ThinRuntime接入后，用户既可以复用Fluid框架的编排能力，也可以使用标准统一的API（即Dataset、Runtime、PVC等）访问底层存储系统。

## ThinRuntime使用场景 {#use-cases}

当业务进行容器化改造时，往往意味着业务依赖的存储系统也需要与Kubernetes进行适配。这种适配的目的是让业务容器能够以Kubernetes标准的API（PersistentVolume和PersistentVolumeClaim）的方式访问存储系统中的数据。一种流行的适配方案是基于[CSI存储插件接口](https://github.com/container-storage-interface/spec)开发存储插件，而ThinRuntime为存储系统与Kubernetes集群的适配提供了一种简化的替代方案。我们将两种方案的差异整理为如下表格：

| 适配方案 | 代码开发 | 使用接口 | StorageClass和卷动态分配 | MountPod挂载模式 | Sidecar挂载模式 | 支持的存储客户端 |
| -------- | ----------- | --------- | ------------------------------------- | ------------- | ------------ | ------------------------- |
| CSI Plugin | **需要**，参考CSI Spec实现 | PVC | 支持 | 支持，需开发 | 不支持 | 块设备、分布式存储客户端等 |
| ThinRuntime | **不需要**，仅需构建存储客户端镜像 | PVC | 暂不支持 | 支持，直接复用 | 支持，直接复用 | 限于基于FUSE的客户端 |

## 使用ThinRuntime访问MinIO中的数据 {#access-data-in-minio-with-thinruntime}

:::info[前提条件]

本节假设你已经有了一个集群内可访问的MinIO存储服务，并且其中已有一个名为`my-first-bucket`的存储桶。如果你还没有这样的MinIO存储，可以通过以下YAML在集群中快速地创建一个：

<details>
<summary>minio.yaml</summary>

```yaml
apiVersion: v1
kind: Service
metadata:
  name: minio
spec:
  type: ClusterIP
  ports:
    - port: 9000
      targetPort: 9000
      protocol: TCP
  selector:
    app: minio
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: minio
spec:
  selector:
    matchLabels:
      app: minio
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: minio
    spec:
      containers:
      - name: minio
        image: minio/minio
        args:
        - server
        - /data
        env:
        # MinIO access key and secret key
        - name: MINIO_ROOT_USER
          value: "minioadmin"
        - name: MINIO_ROOT_PASSWORD
          value: "minioadmin"
        ports:
        - containerPort: 9000
```

</details>

MinIO Pod运行后，使用MinIO镜像中自带的MinIO客户端（`mc`）创建存储桶`my-first-bucket`：

```shell
$ kubectl exec deploy/minio -- sh -c '
mc alias set local http://127.0.0.1:9000 minioadmin minioadmin &&
mc mb --ignore-existing local/my-first-bucket'
```

:::

### 准备包含MinIO FUSE客户端（goofys）的容器镜像 {#prepare-an-image-with-the-minio-fuse-client-goofys}

Fluid将会把ThinRuntime中FUSE所需的运行参数、Dataset中描述数据路径的挂载点等参数传入到ThinRuntime FUSE Pod容器中。在容器内部，用户需要执行参数解析脚本，并将解析完的运行时参数传递给FUSE客户端程序，由客户端程序完成FUSE文件系统在容器内的挂载。

因此，使用ThinRuntime描述存储系统时，需要使用特制的容器镜像，镜像中需要包括以下两个程序：

- FUSE客户端程序。
- FUSE客户端程序所需的运行时参数解析脚本。

对于FUSE客户端程序，本示例选择S3协议兼容的goofys客户端连接并挂载MinIO存储系统。

对于运行时所需的参数解析脚本，定义如下Python脚本`fluid-config-parse.py`：

```python title="fluid-config-parse.py"
import json

with open("/etc/fluid/config/config.json", "r") as f:
    lines = f.readlines()

rawStr = lines[0]
print(rawStr)


script = """
#!/bin/sh
set -e
export AWS_ACCESS_KEY_ID=`cat $akId`
export AWS_SECRET_ACCESS_KEY=`cat $akSecret`

mkdir -p $targetPath

exec goofys -f --endpoint "$url" "$bucket" $targetPath
"""

obj = json.loads(rawStr)

with open("mount-minio.sh", "w") as f:
    f.write("targetPath=\"%s\"\n" % obj['targetPath'])
    f.write("url=\"%s\"\n" % obj['mounts'][0]['options']['minio-url'])
    if obj['mounts'][0]['mountPoint'].startswith("minio://"):
      f.write("bucket=\"%s\"\n" % obj['mounts'][0]['mountPoint'][len("minio://"):])
    else:
      f.write("bucket=\"%s\"\n" % obj['mounts'][0]['mountPoint'])
    f.write("akId=\"%s\"\n" % obj['mounts'][0]['options']['minio-access-key'])
    f.write("akSecret=\"%s\"\n" % obj['mounts'][0]['options']['minio-access-secret'])

    f.write(script)
```

上述Python脚本的含义是：

1. 读取`/etc/fluid/config/config.json`文件中的JSON字符串。Fluid会将FUSE客户端挂载所需的参数存储在该文件中，并将该文件挂载到FUSE容器中。
2. 解析JSON字符串，从中提取FUSE客户端挂载所需的参数，例如上述示例中的`url`、`bucket`、`minio-access-key`、`minio-access-secret`等参数。
3. 提取出所需参数后，输出挂载脚本到文件`mount-minio.sh`。

:::warning

从Fluid v1.0.0版本开始，`dataset.spec.mounts[*].encryptOptions`定义的加密参数的值不会直接存储在配置文件中。配置文件仅提供各个加密参数具体值所在文件的路径，因此参数解析脚本需要额外执行文件读取操作以获取加密参数的实际值（例如：上面Python脚本中的``export AWS_ACCESS_KEY_ID=`cat $akId` ``）。

:::

:::warning

从Fluid v1.1版本开始，Fluid使用`/etc/fluid/config/config.json`作为配置文件，而不是更早版本中使用的`/etc/fluid/config.json`文件。

:::

接着，构建镜像。这里我们直接选择包含goofys客户端程序的镜像（`cloudposse/goofys`）作为Dockerfile的基础镜像：

```dockerfile title="Dockerfile"
FROM cloudposse/goofys

RUN apk add python3 bash

COPY ./fluid-config-parse.py /fluid-config-parse.py
```

使用以下命令构建并推送镜像到镜像仓库：

```shell
$ IMG_REPO=<your image repo>

$ docker build -t $IMG_REPO/fluid-minio-goofys:demo .

$ docker push $IMG_REPO/fluid-minio-goofys:demo
```

### 创建ThinRuntimeProfile {#create-a-thinruntimeprofile}

在创建Dataset和ThinRuntime以挂载MinIO存储系统前，首先需要创建ThinRuntimeProfile资源。ThinRuntimeProfile是一种集群级别（Cluster-level）的Fluid资源，它描述了一类需要与Fluid对接的存储系统的基础配置（例如：容器镜像信息、Pod Spec描述信息等）。集群管理员需提前在集群中定义若干ThinRuntimeProfile资源，在这之后，集群用户在创建ThinRuntime时需要显式声明使用哪一个ThinRuntimeProfile，从而完成对应存储系统的挂载。

下面展示了一个MinIO存储系统的ThinRuntimeProfile示例：

```yaml title="profile.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: ThinRuntimeProfile
metadata:
  name: minio-profile
spec:
  fileSystemType: fuse
  fuse:
    image: $IMG_REPO/fluid-minio-goofys  # replace with your image repo
    imageTag: demo
    imagePullPolicy: IfNotPresent
    command:
    - sh
    - -c
    - "python3 /fluid-config-parse.py && chmod u+x ./mount-minio.sh && ./mount-minio.sh"
```

- `fileSystemType`描述了ThinRuntime FUSE所挂载的文件系统类型（fsType），需要根据使用的存储系统FUSE客户端程序填写。例如，goofys挂载的挂载点fsType为`fuse`，s3fs挂载的挂载点fsType为`fuse.s3fs`。
- `fuse`描述了ThinRuntime FUSE的容器信息，包括镜像信息（`image`、`imageTag`、`imagePullPolicy`）以及容器启动命令（`command`）等。

在Kubernetes集群中创建ThinRuntimeProfile `minio-profile`：

```shell
$ kubectl create -f profile.yaml
```

### 创建Dataset和ThinRuntime {#create-a-dataset-and-a-thinruntime}

首先将访问MinIO所需的访问凭证存储于Secret中：

```shell
$ kubectl create secret generic minio-secret \
  --from-literal=minio-access-key=minioadmin \
  --from-literal=minio-access-secret=minioadmin
```

集群用户可通过创建Dataset和ThinRuntime来挂载并访问MinIO存储系统中的数据。下面展示了Dataset和ThinRuntime的一个示例：

```yaml title="dataset.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: minio-demo
spec:
  mounts:
  - mountPoint: minio://my-first-bucket   # minio://<bucket name>
    name: minio
    options:
      minio-url: "http://minio:9000" # minio service <url>:<port>
    encryptOptions:
      - name: minio-access-key
        valueFrom:
          secretKeyRef:
            name: minio-secret
            key: minio-access-key
      - name: minio-access-secret
        valueFrom:
          secretKeyRef:
            name: minio-secret
            key: minio-access-secret
---
apiVersion: data.fluid.io/v1alpha1
kind: ThinRuntime
metadata:
  name: minio-demo
spec:
  profileName: minio-profile  # specify the profile name
```

- `Dataset.spec.mounts[*].mountPoint`指定所需访问的存储桶（例如：`my-first-bucket`）。
- `Dataset.spec.mounts[*].options.minio-url`指定MinIO在集群内可访问的URL（例如：`http://minio:9000`）。
- `ThinRuntime.spec.profileName`指定上文已创建的ThinRuntimeProfile（例如：`minio-profile`）。

创建Dataset和ThinRuntime：

```shell
$ kubectl create -f dataset.yaml
```

检查Dataset状态，一段时间后，可发现Dataset的Phase状态变为`Bound`，代表数据集已准备就绪：

```shell
$ kubectl get dataset minio-demo
NAME         UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE
minio-demo                    N/A      N/A              N/A                 Bound   2m18s
```

接下来可以参考[挂载数据集](/tutorials/data-accessing/mount-datasets.mdx)，在Pod中挂载数据集并访问MinIO存储系统中的数据。

:::tip

除了通过ThinRuntimeProfile接入存储系统外，未指定`profileName`的ThinRuntime还可以引用其他命名空间下的Dataset（挂载点形如`dataset://<namespace>/<dataset-name>`），参考[跨命名空间共享数据（CSI模式）](/tutorials/advanced/share-data-across-namespace-csi.md)。

:::
