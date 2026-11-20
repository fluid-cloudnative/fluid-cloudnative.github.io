---
sidebar_label: Integrate Storage with ThinRuntime
sidebar_position: 1
---

# Integrate Arbitrary Storage with ThinRuntime

The runtime engines natively integrated with Fluid only support specific types of data sources. For other storage systems that are not supported yet (such as self-developed or self-built storage systems), Fluid provides ThinRuntime to integrate arbitrary storage systems into Fluid. After a storage system is integrated with ThinRuntime, users can not only reuse the orchestration capabilities of Fluid, but also access the storage system with standard and unified APIs (that is, Datasets, Runtimes, PVCs, and so on).

## Use Cases

When workloads are containerized, the storage systems they depend on usually need to be adapted to Kubernetes as well, so that the containers can access the data in the storage systems with standard Kubernetes APIs (PersistentVolumes and PersistentVolumeClaims). A popular solution is to develop a storage plugin based on the [Container Storage Interface (CSI)](https://github.com/container-storage-interface/spec), and ThinRuntime provides a simpler alternative to adapt storage systems to Kubernetes clusters. The differences between the two solutions are as follows:

| Solution | Development | Interface | StorageClass and Dynamic Provisioning | MountPod Mode | Sidecar Mode | Supported Storage Clients |
| -------- | ----------- | --------- | ------------------------------------- | ------------- | ------------ | ------------------------- |
| CSI Plugin | **Required**, implement the CSI Spec | PVC | Supported | Supported, needs development | Not supported | Block devices, distributed storage clients, etc. |
| ThinRuntime | **Not required**, only build a storage client image | PVC | Not supported yet | Supported, reused directly | Supported, reused directly | FUSE-based clients only |

## Access Data in MinIO with ThinRuntime

:::info[Prerequisites]

This section assumes that you already have a MinIO service that can be accessed in your cluster, which has a bucket named `my-first-bucket`. If you don't have one, you can quickly create one in your cluster with the following YAML:

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

After the MinIO pod is running, create the bucket `my-first-bucket` with the MinIO Client (`mc`) shipped in the MinIO image:

```shell
$ kubectl exec deploy/minio -- sh -c '
mc alias set local http://127.0.0.1:9000 minioadmin minioadmin &&
mc mb --ignore-existing local/my-first-bucket'
```

:::

### Prepare an Image with the MinIO FUSE Client (goofys)

Fluid passes the parameters needed by the FUSE client of a ThinRuntime, such as the runtime parameters of FUSE and the mount points that describe the data paths in the Dataset, to the FUSE pod container of the ThinRuntime. In the container, you need to run a script to parse the parameters, and pass the parsed parameters to the FUSE client program, which mounts the FUSE file system in the container.

Therefore, a ThinRuntime that describes a storage system needs a dedicated container image with the following two programs:

- The FUSE client program.
- The script that parses the runtime parameters needed by the FUSE client program.

For the FUSE client program, this example uses goofys, an S3-compatible client, to connect to and mount the MinIO storage system.

For the script that parses runtime parameters, define the following Python script `fluid-config-parse.py`:

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

The Python script above does the following:

1. Reads the JSON string in the `/etc/fluid/config/config.json` file. Fluid stores the parameters needed to mount the FUSE client in this file, and mounts the file into the FUSE container.
2. Parses the JSON string, and extracts the parameters needed to mount the FUSE client, such as `url`, `bucket`, `minio-access-key` and `minio-access-secret` in the example above.
3. Writes a mount script with the extracted parameters to the file `mount-minio.sh`.

:::warning

Since Fluid v1.0.0, the values of the sensitive parameters defined in `dataset.spec.mounts[*].encryptOptions` are no longer stored in the config file directly. The config file only provides the paths of the files that store the values, so the parameter parsing script needs to read these files to get the actual values (for example, ``export AWS_ACCESS_KEY_ID=`cat $akId` `` in the Python script above).

:::

:::warning

Since Fluid v1.1, Fluid uses `/etc/fluid/config/config.json` as the config file instead of the `/etc/fluid/config.json` file used in earlier versions.

:::

Then build the image. This example uses an image with the goofys client (`cloudposse/goofys`) as the base image in the Dockerfile:

```dockerfile title="Dockerfile"
FROM cloudposse/goofys

RUN apk add python3 bash

COPY ./fluid-config-parse.py /fluid-config-parse.py
```

Build the image and push it to your image registry with the following commands:

```shell
$ IMG_REPO=<your image repo>

$ docker build -t $IMG_REPO/fluid-minio-goofys:demo .

$ docker push $IMG_REPO/fluid-minio-goofys:demo
```

### Create a ThinRuntimeProfile

Before creating a Dataset and a ThinRuntime to mount the MinIO storage system, create a ThinRuntimeProfile first. ThinRuntimeProfile is a cluster-level Fluid resource that describes the basic configurations (such as the container image and the pod specs) of a type of storage system to be integrated with Fluid. Cluster administrators define ThinRuntimeProfiles in the cluster in advance, and then cluster users explicitly declare which ThinRuntimeProfile to use when they create a ThinRuntime to mount the corresponding storage system.

An example of the ThinRuntimeProfile for the MinIO storage system:

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

- `fileSystemType` describes the type of the file system (fsType) mounted by the FUSE of the ThinRuntime. Set it according to the FUSE client program of the storage system. For example, the fsType of the mount point mounted by goofys is `fuse`, and the fsType of the mount point mounted by s3fs is `fuse.s3fs`.
- `fuse` describes the container of the FUSE of the ThinRuntime, including the image (`image`, `imageTag` and `imagePullPolicy`) and the startup command (`command`).

Create the ThinRuntimeProfile `minio-profile` in the Kubernetes cluster:

```shell
$ kubectl create -f profile.yaml
```

### Create a Dataset and a ThinRuntime

First, store the credentials for accessing MinIO in a Secret:

```shell
$ kubectl create secret generic minio-secret \
  --from-literal=minio-access-key=minioadmin \
  --from-literal=minio-access-secret=minioadmin
```

Cluster users mount and access the data in the MinIO storage system by creating a Dataset and a ThinRuntime. An example of them:

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

- `Dataset.spec.mounts[*].mountPoint` specifies the bucket to access (for example, `my-first-bucket`).
- `Dataset.spec.mounts[*].options.minio-url` specifies the URL of MinIO that can be accessed in the cluster (for example, `http://minio:9000`).
- `ThinRuntime.spec.profileName` specifies the ThinRuntimeProfile created above (for example, `minio-profile`).

Create the Dataset and the ThinRuntime:

```shell
$ kubectl create -f dataset.yaml
```

Check the status of the Dataset. After a while, the phase of the Dataset changes to `Bound`, which means that the Dataset is ready:

```shell
$ kubectl get dataset minio-demo
NAME         UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE
minio-demo                    N/A      N/A              N/A                 Bound   2m18s
```

Next, mount the Dataset in pods to access the data in the MinIO storage system, see [Mount Datasets](/tutorials/data-accessing/mount-datasets.mdx).

:::tip

Besides integrating storage systems with a ThinRuntimeProfile, a ThinRuntime without `profileName` can also reference a Dataset in another namespace (with a mount point like `dataset://<namespace>/<dataset-name>`), see [Share Data across Namespace (CSI mode)](/tutorials/advanced/share-data-across-namespace-csi.md).

:::
