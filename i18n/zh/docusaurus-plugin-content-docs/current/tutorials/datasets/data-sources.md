---
sidebar_label: 数据源
sidebar_position: 1
---

# 配置底层存储数据源

底层存储数据源是Fluid Dataset中最关键的定义字段，它指定了待访问数据的实际存储位置，以及访问过程中可能需要的访问凭证。本文介绍如何在Dataset中定义单个或多个数据源、数据源中各个相关字段的含义，以及不同底层存储数据源与Fluid中各Runtime（运行时）的兼容关系。

## 单数据源配置示例 {#single-data-source-example}

本节以[MinIO](https://github.com/minio/minio)作为底层存储系统提供一个示例。在实际使用Fluid时，请根据需要访问的底层存储系统和期望使用的Runtime配置数据源。有关各Runtime支持的数据源，参考[数据源与运行时引擎的兼容关系](#data-sources-supported-by-runtimes)。

按照如下步骤操作之前，可以使用以下参考配置，在Kubernetes集群中创建一个临时的MinIO存储服务：

```yaml title="minio.yaml"
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

```shell
$ kubectl create -f minio.yaml
```

待MinIO Pod正常运行后，使用MinIO镜像中自带的MinIO客户端（`mc`）创建一个名为`mybucket`的Bucket，并在该Bucket的`mydirectory/`目录下写入一个文件：

```shell
$ kubectl exec deploy/minio -- sh -c '
mc alias set local http://127.0.0.1:9000 minioadmin minioadmin &&
mc mb --ignore-existing local/mybucket &&
echo "hello fluid" | mc pipe local/mybucket/mydirectory/hello.txt'
```

访问存储服务往往需要提供访问凭证（例如：AccessKey密钥对等），为了避免此类访问凭证泄漏，不推荐在Kubernetes集群中明文存储此类访问凭证。使用如下内容创建Secret资源，用于记录访问MinIO存储的访问凭证：

```yaml title="secret.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: minio-access-key
stringData:
  minio-access-key-id: minioadmin
  minio-access-secret: minioadmin
```

```shell
$ kubectl create -f secret.yaml
```

MinIO是兼容S3访问协议的对象存储，因此使用如下内容定义Dataset，指定Runtime以S3协议访问上述步骤中创建的MinIO存储服务：

```yaml title="dataset.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: mydataset
spec:
  mounts:
    - mountPoint: s3://mybucket/mydirectory/
      name: my-minio-storage
      path: /
      options:
        alluxio.underfs.s3.endpoint: http://minio.default:9000/
        alluxio.underfs.s3.disable.dns.buckets: "true"
        alluxio.underfs.s3.inherit.acl: "false"
      encryptOptions:
        - name: s3a.accessKeyId
          valueFrom:
            secretKeyRef:
              name: minio-access-key
              key: minio-access-key-id
        - name: s3a.secretKey
          valueFrom:
            secretKeyRef:
              name: minio-access-key
              key: minio-access-secret
```

```shell
$ kubectl create -f dataset.yaml
```

上述YAML文件定义了一个Fluid Dataset资源。由于本示例中仅包含单个数据源（即MinIO存储），因此访问MinIO中对应数据的配置信息均定义在`Dataset.spec.mounts[0]`字段下，这些字段的含义如下：

- `mountPoint`：待访问的底层存储系统中的数据路径，其格式为`<protocol>://<storage-identifier>/<directory>`，其中：
  - `<protocol>`表示Runtime在实际访问该存储系统时所采用的访问协议（例如：`s3`、`oss`、`juicefs`、`pvc`等）。访问协议与Runtime实现紧密相关，某些Runtime可能仅支持有限的访问协议，具体参考本文最后的[数据源与运行时引擎的兼容关系](#data-sources-supported-by-runtimes)。
  - `<storage-identifier>`表示存储系统的标识符，在不同的访问协议下该标识符可能会有不同的含义。例如：在`s3`访问协议下，该标识符通常代表对象存储Bucket的名字；在`pvc`访问协议下，该标识符代表同Namespace下的PVC名字。
  - `<directory>`表示存储系统中的路径，需要指定为一个目录。如果需要访问的是存储系统中的根目录，那么`<directory>`可设置为空。
- `name`：数据源在该Dataset中的标识符。Fluid Dataset支持定义多个数据源，`name`字段用于区分不同的数据源，以及判断数据源是否发生变化。由于本示例中仅涉及单一数据源的配置，`name`字段在这种情况下无实际作用。
- `path`：数据源在该Dataset中的挂载路径，如果不设置，默认为`/{name}`。Fluid Dataset支持[Linux VFS](https://en.wikipedia.org/wiki/Virtual_file_system)风格的存储系统组织方式，多个数据源可以“挂载”在不同路径的子目录上（参考[多数据源配置示例](#multiple-data-sources-example)）。如果Dataset中仅涉及单一数据源的配置，通常将`path`设置为`/`，表示将`mountPoint`中定义的数据路径直接映射到Dataset的根目录。
- `options`：以明文方式提供的访问数据源所需的参数。例如：访问S3对象存储时所需提供的地域（region）和端点信息（endpoint）。
- `encryptOptions`：以加密方式提供的访问数据源所需的敏感参数。例如：访问S3对象存储时所需的AccessKey密钥对等。这些参数的值从指定的Secret资源中获取。

:::tip[关于Dataset中的`options`和`encryptOptions`参数]

**Dataset仅仅是数据源相关配置信息的记录**，创建Dataset资源不会在集群中创建任何数据访问链路。在一个Dataset资源与一个同名的Runtime资源绑定之后，对应的运行时引擎将会决定如何挂载并访问Dataset中定义的数据源。这个过程中，Fluid控制器将Dataset中定义的数据源信息传递给运行时引擎。

不同的运行时引擎接受的`options`和`encryptOptions`参数可能是不同的（例如：`alluxio.underfs.s3.endpoint`是一个Alluxio运行时引擎的参数），因此往往需要查阅运行时引擎的相关文档进行配置。有关`encryptOptions`的更多信息，参考[Dataset加密参数](/tutorials/datasets/encrypted-options-for-dataset.md)。

:::

创建Dataset资源后，可以使用以下命令查看Dataset资源状态：

```shell
$ kubectl get dataset mydataset
```

此时，预期输出如下：

```
NAME        UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE
mydataset                                                                  NotBound   4s
```

由于创建的Dataset还没有与任何Runtime绑定，其`PHASE`为`NotBound`，其他状态字段此刻也为空。

## 多数据源配置示例 {#multiple-data-sources-example}

与Kubernetes中标准的存储卷抽象概念持久卷（PersistentVolume，PV）不同，Fluid支持将多个底层存储数据源映射到一个Dataset资源中，统一管理其生命周期。这意味着，Dataset有着比PV更灵活的数据源表达能力，也更加适用于ML/AI、大数据等对多数据源聚合分析有需求的场景。本节提供一个多数据源配置的Dataset示例。

```yaml title="dataset.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: mydataset-multi
spec:
  mounts:
    # highlight-start
    # oss mounted at /oss, minio mounted at /minio
    - mountPoint: oss://my-oss-bucket/
      name: oss-data
      path: /oss
      options:
        fs.oss.endpoint: oss-cn-beijing-internal.aliyuncs.com
      encryptOptions:
        - name: fs.oss.accessKeyId
          valueFrom:
            secretKeyRef:
              name: oss-access-key
              key: oss-access-key-id
        - name: fs.oss.accessKeySecret
          valueFrom:
            secretKeyRef:
              name: oss-access-key
              key: oss-access-key-secret
    # highlight-end
    - mountPoint: s3://mybucket/mydirectory/
      name: my-minio-storage
      # highlight-next-line
      path: /minio
      options:
        alluxio.underfs.s3.endpoint: http://minio.default:9000/
        alluxio.underfs.s3.disable.dns.buckets: "true"
        alluxio.underfs.s3.inherit.acl: "false"
      encryptOptions:
        - name: s3a.accessKeyId
          valueFrom:
            secretKeyRef:
              name: minio-access-key
              key: minio-access-key-id
        - name: s3a.secretKey
          valueFrom:
            secretKeyRef:
              name: minio-access-key
              key: minio-access-secret
```

相比于[单数据源配置示例](#single-data-source-example)，上述Dataset新增了一个阿里云OSS对象存储Bucket作为数据源，并修改了两个数据源的挂载路径：OSS对象存储挂载在`/oss`路径，而MinIO对象存储挂载在`/minio`路径。这意味着应用访问该Dataset时，将会在其根目录下看到两个子目录，子目录中分别是`oss://my-oss-bucket/`和`s3://mybucket/mydirectory/`中的文件：

```
. /* mount path of the Dataset */
├── minio
│   └── <Files in MinIO>
└── oss
    └── <Files in OSS>
```

## 数据源与运行时引擎的兼容关系 {#data-sources-supported-by-runtimes}

| Runtime Kind | 运行时引擎 | 支持的数据源访问协议 | 支持的数据源数量 | 动态增减数据源 | 备注说明 |
| ------------ | -------------- | ------------------- | ---------------------- | ----------------------------------- | ----- |
| AlluxioRuntime | [Alluxio](https://documentation.alluxio.io/os-en)（社区版） | `s3`, `hdfs`, `ceph`, `oss`, `gcs`, `pvc`, ...<sup>1</sup> | >= 1 | ✅ | 1. 支持的数据源列表参考[Alluxio - Storage Integrations](https://documentation.alluxio.io/os-en/ufs)。 |
| JindoRuntime | [JindoFS](https://aliyun.github.io/alibabacloud-jindodata/) | `oss`, `s3`, `hdfs`, `pvc` | >= 1 | ❌ | |
| JuiceFSRuntime | JuiceFS[社区版](https://juicefs.com/docs/zh/community/introduction/)或[云服务版](https://juicefs.com/docs/zh/cloud/) | `juicefs`<sup>2</sup> | 1 | ❌ | 2. 参考[JuiceFS技术架构](https://juicefs.com/docs/zh/community/architecture)了解JuiceFS的工作原理。 |
| VineyardRuntime | [Vineyard](https://v6d.io/) | 无<sup>3</sup> | 0 | ❌ | 3. Vineyard是用于共享中间数据的运行时引擎，不涉及存储系统。 |
| ThinRuntime | 自定义运行时引擎<sup>4</sup> | 由引擎决定<sup>4</sup> | >= 0 | ✅<sup>5</sup> | 4. ThinRuntime支持自定义运行时引擎与Fluid对接，参考[使用ThinRuntime接入任意底层存储](/tutorials/on-premise-storage/thinruntime.md)。 <br/> 5. 需要使用动态挂载框架接入自定义运行时引擎。 |
