---
sidebar_label: Data Sources
sidebar_position: 1
---

# Configure Data Sources

Data sources are the most important part of a Fluid Dataset. They specify where the data to be accessed is actually stored, and the credentials that may be needed to access it. This document describes how to define one or more data sources in a Dataset, what the related fields mean, and which data sources are supported by each Runtime in Fluid.

## Single Data Source Example

This section uses [MinIO](https://github.com/minio/minio) as the underlying storage system. When using Fluid in practice, configure the data sources according to the storage system that holds your data and the Runtime that you plan to use. For the data sources supported by each Runtime, see [Data Sources Supported by Runtimes](#data-sources-supported-by-runtimes).

Before following the steps below, you can use the following configuration to create a temporary MinIO service in your Kubernetes cluster:

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

After the MinIO pod is running, create a bucket named `mybucket` and put a file under its `mydirectory/` directory with the MinIO Client (`mc`) shipped in the MinIO image:

```shell
$ kubectl exec deploy/minio -- sh -c '
mc alias set local http://127.0.0.1:9000 minioadmin minioadmin &&
mc mb --ignore-existing local/mybucket &&
echo "hello fluid" | mc pipe local/mybucket/mydirectory/hello.txt'
```

Credentials, such as AccessKey pairs, are usually needed to access a storage system. To avoid leaking them, do not store them in plain text in your Kubernetes cluster. Create a Secret with the following content to store the credentials for accessing MinIO:

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

MinIO is an object storage compatible with the S3 protocol, so define the Dataset as follows to let the Runtime access the MinIO service created above with the S3 protocol:

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

The YAML above defines a Fluid Dataset. Because this example has only one data source (the MinIO storage), everything needed to access the data in MinIO is defined under `Dataset.spec.mounts[0]`. The fields mean:

- `mountPoint`: The path of the data in the underlying storage system, in the format of `<protocol>://<storage-identifier>/<directory>`, where:
  - `<protocol>` is the protocol that the Runtime uses to access the storage system, such as `s3`, `oss`, `juicefs` and `pvc`. Protocols are closely related to Runtime implementations, and some Runtimes only support a limited set of protocols. See [Data Sources Supported by Runtimes](#data-sources-supported-by-runtimes) at the end of this document.
  - `<storage-identifier>` identifies the storage system, and its meaning depends on the protocol. For example, it usually is the name of a bucket for the `s3` protocol, and the name of a PVC in the same namespace for the `pvc` protocol.
  - `<directory>` is a directory in the storage system. To access the root directory of the storage system, leave it empty.
- `name`: The identifier of the data source in the Dataset. A Dataset can define multiple data sources, and `name` is used to tell them apart and to detect whether a data source has changed. It has no practical effect in this example, which has only one data source.
- `path`: The path where the data source is mounted in the Dataset. Defaults to `/{name}`. A Dataset organizes its data sources in the style of the [Linux VFS](https://en.wikipedia.org/wiki/Virtual_file_system), so multiple data sources can be "mounted" on different subdirectories (see [Multiple Data Sources Example](#multiple-data-sources-example)). If a Dataset has only one data source, `path` is usually set to `/`, which maps the directory defined in `mountPoint` to the root directory of the Dataset.
- `options`: Parameters in plain text that are needed to access the data source, such as the region and the endpoint of an S3 object storage.
- `encryptOptions`: Sensitive parameters that are needed to access the data source, such as the AccessKey pair of an S3 object storage. Their values are read from the specified Secrets.

:::tip[About `options` and `encryptOptions` in Datasets]

**A Dataset only records the configuration of its data sources.** Creating a Dataset does not set up any data access path in the cluster. After a Dataset is bound to a Runtime with the same name, the Runtime decides how to mount and access the data sources defined in the Dataset, and the Fluid controllers pass the data source information in the Dataset to the Runtime.

Different Runtimes may accept different `options` and `encryptOptions` (for example, `alluxio.underfs.s3.endpoint` is a parameter of Alluxio), so refer to the documentation of your Runtime when configuring them. For more about `encryptOptions`, see [Encrypted Options for Dataset](/tutorials/datasets/encrypted-options-for-dataset.md).

:::

After the Dataset is created, check its status with the following command:

```shell
$ kubectl get dataset mydataset
```

The expected output is:

```
NAME        UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE
mydataset                                                                  NotBound   4s
```

Because the Dataset is not bound to any Runtime yet, its `PHASE` is `NotBound`, and the other status fields are empty.

## Multiple Data Sources Example

Unlike PersistentVolume (PV), the standard storage volume abstraction in Kubernetes, a Fluid Dataset can map multiple data sources into one Dataset and manage their lifecycle together. This makes Datasets more flexible than PVs in describing data sources, and more suitable for scenarios such as ML/AI and big data, which often need to aggregate and analyze data from multiple data sources. This section shows a Dataset with multiple data sources.

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

Compared with the [single data source example](#single-data-source-example), the Dataset above adds an Alibaba Cloud OSS bucket as a data source, and changes the mount paths of both data sources: the OSS bucket is mounted at `/oss`, and the MinIO storage is mounted at `/minio`. Applications that access the Dataset see two subdirectories under its root directory, which contain the files in `oss://my-oss-bucket/` and `s3://mybucket/mydirectory/` respectively:

```
. /* mount path of the Dataset */
├── minio
│   └── <Files in MinIO>
└── oss
    └── <Files in OSS>
```

## Data Sources Supported by Runtimes

| Runtime Kind | Runtime Engine | Supported Protocols | Number of Data Sources | Add/Remove Data Sources Dynamically | Notes |
| ------------ | -------------- | ------------------- | ---------------------- | ----------------------------------- | ----- |
| AlluxioRuntime | [Alluxio](https://documentation.alluxio.io/os-en) (Community Edition) | `s3`, `hdfs`, `ceph`, `oss`, `gcs`, `pvc`, ...<sup>1</sup> | >= 1 | ✅ | 1. See [Alluxio - Storage Integrations](https://documentation.alluxio.io/os-en/ufs) for all supported data sources. |
| JindoRuntime | [JindoFS](https://aliyun.github.io/alibabacloud-jindodata/) | `oss`, `s3`, `hdfs`, `pvc` | >= 1 | ❌ | |
| JuiceFSRuntime | JuiceFS [Community Edition](https://juicefs.com/docs/community/introduction/) or [Cloud Service](https://juicefs.com/docs/cloud/) | `juicefs`<sup>2</sup> | 1 | ❌ | 2. See [JuiceFS Architecture](https://juicefs.com/docs/community/architecture) for how JuiceFS works. |
| VineyardRuntime | [Vineyard](https://v6d.io/) | None<sup>3</sup> | 0 | ❌ | 3. Vineyard is a runtime engine for sharing intermediate data, and does not access any storage system. |
| ThinRuntime | Custom runtime engines<sup>4</sup> | Decided by the engine<sup>4</sup> | >= 0 | ✅<sup>5</sup> | 4. ThinRuntime integrates custom runtime engines with Fluid. See [Integrate Arbitrary Storage with ThinRuntime](/tutorials/on-premise-storage/thinruntime.md). <br/> 5. Requires the custom runtime engine to be integrated with the dynamic mount framework. |
