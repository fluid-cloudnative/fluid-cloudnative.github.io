---
sidebar_label: Deploy JuiceFS
sidebar_position: 2
---

# Deploy JuiceFS with JuiceFSRuntime

<span className="badge badge--secondary runtime-compatibility">Applies to: JuiceFSRuntime</span>

[JuiceFS](https://juicefs.com/) is an open source, high-performance shared file system designed for the cloud. It is fully POSIX-compatible, turns massive and low-cost cloud storage into local disks, and can be mounted and read/written by many hosts at the same time. In Fluid, you can deploy the cache and client components of JuiceFS with JuiceFSRuntime to access the data in a JuiceFS file system. For more about JuiceFS, see the [JuiceFS Quick Start Guide](https://juicefs.com/docs/community/quick_start_guide).

This document shows example configurations of JuiceFSRuntime, and describes how to deploy the cache and client components of JuiceFS with JuiceFSRuntime.

## Dataset Examples

JuiceFS provides a Community Edition and a Cloud Service. The two editions only differ in the configuration of the Dataset bound to a JuiceFSRuntime, while the configuration of the JuiceFSRuntime is usually much the same. The following sections describe the Dataset configuration for each edition.

### Community Edition

The JuiceFS Community Edition relies on a metadata service and an object storage service, see [JuiceFS Architecture](https://juicefs.com/docs/community/architecture). This section uses Redis as the metadata service and MinIO as the object storage service to show how to configure a Dataset. In practice, change the configuration of the metadata service and the object storage service according to your environment. For details, see the [metadata engines](https://juicefs.com/docs/community/databases_for_metadata) and [object storage services](https://juicefs.com/docs/community/reference/how_to_set_up_object_storage) supported by JuiceFS.

:::info[Prerequisites]

If you have no metadata service or object storage service available, you can use the following configurations to create a temporary Redis metadata service and a temporary MinIO object storage service in your Kubernetes cluster:

<details>
<summary>redis.yaml</summary>

```yaml
apiVersion: v1
kind: Service
metadata:
  name: redis
spec:
  type: ClusterIP
  ports:
    - port: 6379
      targetPort: 6379
      protocol: TCP
  selector:
    app: redis
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: redis
spec:
  selector:
    matchLabels:
      app: redis
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - name: redis
        image: redis
        ports:
        - containerPort: 6379
```

</details>

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

:::

First, create the following Secret to store sensitive information, such as the URL of the metadata service and the AccessKey pair of the object storage:

```yaml title="secret.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: jfs-secret
stringData:
  metaurl: redis://redis:6379/0
  access-key: minioadmin
  secret-key: minioadmin
```

An example of the Dataset that uses Redis as the metadata service and MinIO as the object storage:

```yaml title="dataset.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: jfsdemo
spec:
  mounts:
    - name: myjfs
      mountPoint: "juicefs:///"                  # mount JuiceFS filesystem's root path, change it to "juicefs:///mydir/" to mount subpath
      options:
        bucket: "http://minio:9000/minio/test"   # MinIO bucket url
        storage: "minio"                         # set "minio" for MinIO object storage
      encryptOptions:
        - name: metaurl
          valueFrom:
            secretKeyRef:
              name: jfs-secret
              key: metaurl
        - name: access-key
          valueFrom:
            secretKeyRef:
              name: jfs-secret
              key: access-key
        - name: secret-key
          valueFrom:
            secretKeyRef:
              name: jfs-secret
              key: secret-key
```

### Cloud Service

To deploy the distributed cache system and client components of the JuiceFS Cloud Service with JuiceFSRuntime, first [create a file system](https://juicefs.com/docs/cloud/getting_started#create-file-system) in the JuiceFS Cloud Service console, and get the client token of the file system. Besides the client token, the Dataset also needs to specify the object storage used by the JuiceFS file system. The object storage information (a bucket name or a bucket URL) is passed to the `--bucket` parameter of the [`juicefs auth`](https://juicefs.com/docs/cloud/reference/command_reference#auth) command.

This section uses Alibaba Cloud OSS as the object storage to show an example Dataset.

First, create the following Secret to store the sensitive information needed for data access, such as the client token and the AccessKey pair of the object storage:

```yaml title="secret.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: jfs-secret
  namespace: default
type: Opaque
stringData:
  token: <JUICEFS_TOKEN>
  access-key: <OSS_ACCESS_KEY>
  secret-key: <OSS_ACCESS_SECRET>
```

An example of the Dataset:

```yaml title="dataset.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: jfsdemo
spec:
  mounts:
    - name: <JUICEFS_FILESYSTEM_NAME>      # replace with your JuiceFS filesystem name
      mountPoint: "juicefs:///"            # mount JuiceFS filesystem's root path, change it to "juicefs:///mydir/" to mount subpath
      options:
        storage: oss                       # set "oss" for Aliyun OSS, change it accordingly
        bucket: "<OSS_BUCKET_NAME_OR_URL>" # will be passed to `--bucket` parameter
      encryptOptions:
        - name: token
          valueFrom:
            secretKeyRef:
              name: jfs-secret
              key: token
        - name: access-key
          valueFrom:
            secretKeyRef:
              name: jfs-secret
              key: access-key
        - name: secret-key
          valueFrom:
            secretKeyRef:
              name: jfs-secret
              key: secret-key
```

## JuiceFSRuntime Example

A simple JuiceFSRuntime example:

```yaml title="runtime.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: JuiceFSRuntime
metadata:
  name: jfsdemo
spec:
  replicas: 2
  tieredstore:
    levels:
      - mediumtype: MEM
        volumeType: emptyDir
        path: /dev/shm
        quota: 2Gi
        # high: <no-use>
        low: "0.01"
```

<details>
<summary>Fields in the JuiceFSRuntime</summary>

| Field | Description | Details |
| ----- | ----------- | ------- |
| `replicas` | The number of worker pods of the distributed cache system. | With the default [placement strategy](/tutorials/datasets/placement-strategy.md) of Datasets (`spec.placement=Exclusive`), at most one worker pod runs on a node, so the number of replicas also equals the number of nodes that the distributed cache system needs. |
| `volumeType` | The type of the volume that stores cached data. | `emptyDir` or `hostPath`. Defaults to `hostPath`. With `hostPath`, Fluid mounts the `path` directories of the node into the container to store cached data. With `emptyDir`, Fluid creates an emptyDir volume according to the medium type in `mediumtype`, and uses it to store cached data. |
| `mediumtype` | The medium that stores cached data. | `MEM` (memory), `SSD` or `HDD`. This field only provides information for Fluid to order multiple cache tiers, from the highest performance to the lowest: MEM, SSD and HDD. |
| `path` | The paths that store cached data. | A single path such as `/dev/shm`, or multiple paths separated by commas such as `/mnt/disk1,/mnt/disk2`. With `volumeType: hostPath`, the paths of the node are mounted into the container at the same locations to store cached data. With `volumeType: emptyDir`, `path` only specifies where cached data is stored in the container. |
| `quota` | The cache capacity of a single worker pod. | If `path` has multiple paths, the quota is equally divided among them. To set a quota for each path, use `quotaList` instead. |
| `high` | Has no effect in JuiceFSRuntime. | |
| `low` | The ratio of free cache space that triggers cache eviction. | When the ratio of free cache space is lower than `low`, JuiceFS evicts cached data. It is passed to the `--free-space-ratio` option of JuiceFS. |

</details>

This JuiceFSRuntime creates a cache cluster with 2 JuiceFS worker pods (`replicas: 2`). Each worker pod provides a cache capacity of 2Gi (`quota: 2Gi`), and stores cached data in the `/dev/shm` directory of its container (`path: /dev/shm`), where an emptyDir volume (`volumeType: emptyDir`) backed by memory (`mediumtype: MEM`) is mounted. The cache system evicts cached data when less than 1% of the cache space is free (`low: "0.01"`).

Before the cache system of JuiceFS is deployed, the JuiceFSRuntime must be bound to a Dataset. Fluid automatically binds a Dataset and a Runtime **that have the same name in the same namespace**. For example, the JuiceFSRuntime above is named `jfsdemo` in the `default` namespace, so it will be bound to the Dataset named `jfsdemo` in the `default` namespace.

## Bind JuiceFSRuntime to a Dataset

:::info[Prerequisites]

This section assumes that you have created an **unbound Dataset (`status.phase==NotBound`)** in the cluster. Create the Dataset according to your JuiceFS edition, see [Dataset Examples](#dataset-examples).

:::

Create the JuiceFSRuntime in the [example](#juicefsruntime-example) above:

```shell
$ kubectl create -f runtime.yaml
```

Then run the following command to watch the status of the Dataset while the JuiceFSRuntime is being bound to it:

```shell
$ kubectl get dataset jfsdemo -w
```

The output is similar to:

```
NAME      UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE
jfsdemo                                                                  NotBound   0s
jfsdemo                                                                  NotBound   27s
jfsdemo                                                                  NotBound   28s
jfsdemo                    0.00B    0.00B            0.0%                Bound      41s
jfsdemo   [Calculating]    0.00B    0.00B            0.0%                Bound      42s
jfsdemo   [Calculating]    0.00B    0.00B            0.0%                Bound      42s
jfsdemo   [Calculating]    0.00B    2.00GiB          0.0%                Bound      42s
jfsdemo   [Calculating]    0.00B    2.00GiB          0.0%                Bound      43s
jfsdemo   147.50GiB        0.00B    2.00GiB          0.0%                Bound      2m13s
jfsdemo   147.50GiB        0.00B    2.00GiB          0.0%                Bound      2m13s
```

The Dataset `jfsdemo` changes from `NotBound` to `Bound`, and shows the total size of the files in the JuiceFS file system (UFS TOTAL SIZE), the size of cached data (CACHED), the total cache capacity (CACHE CAPACITY), and the percentage of cached data in the total size (CACHED PERCENTAGE).

Now the cache system of JuiceFS has been deployed in the cluster. After the Dataset is bound to the JuiceFSRuntime, Fluid automatically creates a PersistentVolumeClaim (PVC) and a PersistentVolume (PV) for them. The PVC has the same name as the Dataset and the JuiceFSRuntime. You can mount the PVC in application pods to access the data in JuiceFS through the POSIX interface, see [Mount Datasets](/tutorials/data-accessing/mount-datasets.mdx).

```shell
$ kubectl get pvc jfsdemo
```

The output is similar to:

```
NAME      STATUS   VOLUME            CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
jfsdemo   Bound    default-jfsdemo   100Pi      ROX            fluid          <unset>                 4m48s
```

## How Fluid Deploys JuiceFS

This section describes some details of binding a JuiceFSRuntime to a Dataset, and the Kubernetes resources that Fluid creates to deploy JuiceFS. These details help you troubleshoot problems of the Runtime, and learn more about the JuiceFS processes on each node. Feel free to skip this section if you are not interested in them.

The JuiceFS deployed by Fluid with a JuiceFSRuntime does not include the metadata service needed by JuiceFS. It only includes the cache system and the FUSE client of JuiceFS, which correspond to two Kubernetes workloads: a *worker StatefulSet* and a *FUSE client DaemonSet*. They are prefixed with the name of the bound Dataset:

```shell
$ kubectl get statefulset,daemonset
```

The output is similar to:

```
NAME                              READY   AGE
statefulset.apps/jfsdemo-worker   2/2     10m

NAME                          DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                     AGE
daemonset.apps/jfsdemo-fuse   0         0         0       0            0           fluid.io/f-default-jfsdemo=true   10m
```

* JuiceFS workers store and manage cached data, and evict cached data when the free cache space is insufficient. The number of workers equals `JuiceFSRuntime.spec.replicas`.
* The JuiceFS FUSE client provides the POSIX interface to access data in JuiceFS. The FUSE client DaemonSet has 0 replicas initially:
    - In the MountPod mode, a FUSE client pod is created on a node only when an application pod that mounts the PVC is scheduled to the node, which changes the number of replicas of the DaemonSet.
    - In the Sidecar mode, the DaemonSet always has 0 replicas, because FUSE clients are injected into application pods as sidecar containers.

After the JuiceFSRuntime is bound to the Dataset, Fluid automatically creates a statically bound pair of PVC and PV in the cluster. The PVC has the same name as the Dataset and the JuiceFSRuntime, and the PV is named `<namespace>-<dataset_name>`:

```shell
$ kubectl get pvc,pv
```

The output is similar to:

```
NAME                            STATUS   VOLUME            CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
persistentvolumeclaim/jfsdemo   Bound    default-jfsdemo   100Pi      ROX            fluid          <unset>                 10m

NAME                               CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM             STORAGECLASS   VOLUMEATTRIBUTESCLASS   REASON   AGE
persistentvolume/default-jfsdemo   100Pi      ROX            Retain           Bound    default/jfsdemo   fluid          <unset>                          10m
```

The JuiceFS processes deployed by Fluid are no different from JuiceFS processes running in non-containerized environments. Log in to any JuiceFS worker pod or FUSE pod with the following command:

```shell
$ kubectl exec -it jfsdemo-worker-0 -- bash
```

In the JuiceFS container, use the [`juicefs` CLI](https://juicefs.com/docs/cloud/reference/command_reference) to check more status of the JuiceFS file system, for example:

```shell
# in the juicefs container
$ juicefs status <juicefs-filesystem-name>
```
