---
sidebar_label: Deploy JindoFS
sidebar_position: 3
---

# Deploy JindoFS with JindoRuntime

<span className="badge badge--secondary runtime-compatibility">Applies to: JindoRuntime</span>

[JindoFS](https://aliyun.github.io/alibabacloud-jindodata/) is a data lake storage system developed by the Alibaba Cloud open source big data team. Designed for the big data and AI ecosystems, it provides comprehensive data access acceleration with distributed caching. In Fluid, you can deploy a JindoFS distributed cache system with JindoRuntime, and access the data in Alibaba Cloud OSS and OSS-HDFS through JindoFS.

This document shows an example of JindoRuntime, and describes how to deploy a JindoFS distributed cache system.

## JindoRuntime Example

A simple JindoRuntime example:

```yaml title="runtime.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: JindoRuntime
metadata:
  name: mydataset # MUST be same as Dataset's name
  namespace: default
spec:
  replicas: 2
  tieredstore:
    levels:
      - volumeType: emptyDir
        mediumtype: MEM
        path: /dev/shm
        quota: 2Gi
        high: "0.99"
        low: "0.95"
```

<details>
<summary>Fields in the JindoRuntime</summary>

| Field | Description | Details |
| ----- | ----------- | ------- |
| `replicas` | The number of worker pods of the distributed cache system. | With the default [placement strategy](/tutorials/datasets/placement-strategy.md) of Datasets (`spec.placement=Exclusive`), at most one worker pod runs on a node, so the number of replicas also equals the number of nodes that the distributed cache system needs. |
| `volumeType` | The type of the volume that stores cached data. | `emptyDir` or `hostPath`. Defaults to `hostPath`. With `hostPath`, Fluid mounts the `path` directories of the node into the container to store cached data. With `emptyDir`, Fluid creates an emptyDir volume according to the medium type in `mediumtype`, and uses it to store cached data. |
| `mediumtype` | The medium that stores cached data. | `MEM` (memory), `SSD` or `HDD`. This field only provides information for Fluid to order multiple cache tiers, from the highest performance to the lowest: MEM, SSD and HDD. |
| `path` | The paths that store cached data. | A single path such as `/dev/shm`, or multiple paths separated by commas such as `/mnt/disk1,/mnt/disk2`. With `volumeType: hostPath`, the paths of the node are mounted into the container at the same locations to store cached data. With `volumeType: emptyDir`, `path` only specifies where cached data is stored in the container. |
| `quota` | The cache capacity of a single worker pod. | If `path` has multiple paths, the quota is equally divided among them. To set a quota for each path, use `quotaList` instead. |
| `high` | The high watermark of the cache space. | When the used ratio of the cache space reaches the high watermark, the cache system starts to evict cached data. |
| `low` | The low watermark of the cache space. | The cache system evicts cached data until the used ratio of the cache space drops below the low watermark. |

</details>

This JindoRuntime creates a distributed cache cluster with 2 nodes, which run 2 worker pods (`replicas: 2`). Each worker pod provides a cache capacity of 2Gi (`quota: 2Gi`), and stores cached data in the `/dev/shm` directory of its container (`path: /dev/shm`), where an emptyDir volume (`volumeType: emptyDir`) backed by memory (`mediumtype: MEM`) is mounted. The low and high watermarks of the cache system are 0.95 (`low: "0.95"`) and 0.99 (`high: "0.99"`) respectively.

Before the JindoFS distributed cache system is deployed, the JindoRuntime must be bound to a Dataset. Fluid automatically binds a Dataset and a Runtime **that have the same name in the same namespace**. For example, the JindoRuntime above is named `mydataset` in the `default` namespace, so it will be bound to the Dataset named `mydataset` in the `default` namespace.

## Bind JindoRuntime to a Dataset

:::info[Prerequisites]

This section assumes that you have created an **unbound Dataset (`status.phase==NotBound`)** in the cluster, and the Dataset defines data sources supported by JindoFS. For how to define data sources in a Dataset, see [Configure Data Sources](/tutorials/datasets/data-sources.md).

The example Dataset in this section uses an OSS data source supported by JindoFS:

<details>
<summary>dataset.yaml</summary>

```yaml
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: mydataset
spec:
  mounts:
    - mountPoint: oss://myossbucket/path/to/mydata/
      name: example-bucket
      path: /
      options:
        fs.oss.endpoint: oss-cn-beijing-internal.aliyuncs.com
      encryptOptions:
        - name: fs.oss.accessKeyId
          valueFrom:
            secretKeyRef:
              name: access-key
              key: fs.oss.accessKeyId
        - name: fs.oss.accessKeySecret
          valueFrom:
            secretKeyRef:
              name: access-key
              key: fs.oss.accessKeySecret
```

</details>

:::

Create the JindoRuntime in the [example](#jindoruntime-example) above:

```shell
$ kubectl create -f runtime.yaml
```

Then run the following command to watch the status of the Dataset while the JindoRuntime is being bound to it:

```shell
$ kubectl get dataset mydataset -w
```

The output is similar to:

```
NAME        UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE
mydataset                                                                  NotBound   4s
mydataset   [Calculating]                                                  NotBound   36s
mydataset   95.09MiB                                                       NotBound   36s
mydataset   95.09MiB                                                       Bound      38s
mydataset   95.09MiB         0.00B    4.00GiB          0.0%                Bound      38s
mydataset   95.09MiB         0.00B    4.00GiB          0.0%                Bound      38s
```

The Dataset `mydataset` changes from `NotBound` to `Bound`, and shows the total size of the files in its data sources (UFS TOTAL SIZE), the size of cached data (CACHED), the total cache capacity (CACHE CAPACITY), and the percentage of cached data in the total size (CACHED PERCENTAGE).

Now the JindoFS distributed cache system has been deployed in the cluster, and you can read its data through the file access interfaces supported by JindoFS. After the Dataset is bound to the JindoRuntime, Fluid automatically creates a PersistentVolumeClaim (PVC) and a PersistentVolume (PV) for them. The PVC has the same name as the Dataset and the JindoRuntime. You can mount the PVC in application pods to access the data in JindoFS through the POSIX interface, see [Mount Datasets](/tutorials/data-accessing/mount-datasets.mdx).

```shell
$ kubectl get pvc mydataset
```

The output is similar to:

```
NAME        STATUS   VOLUME              CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
mydataset   Bound    default-mydataset   100Pi      ROX            fluid          <unset>                 10m
```

## How Fluid Deploys JindoFS

This section describes some details of binding a JindoRuntime to a Dataset, and the Kubernetes resources that Fluid creates to deploy JindoFS. These details help you troubleshoot problems of the Runtime, and operate the JindoFS cluster deployed by Fluid just like a JindoFS cluster running on bare metal. Feel free to skip this section if you are not interested in them.

JindoFS is a distributed system with a master-worker architecture. Fluid creates 3 Kubernetes workloads for a JindoRuntime: a *master StatefulSet*, a *worker StatefulSet* and a *FUSE client DaemonSet*. They are prefixed with the name of the bound Dataset:

```shell
$ kubectl get statefulset,daemonset
```

The output is similar to:

```
NAME                                        READY   AGE
statefulset.apps/mydataset-jindofs-master   1/1     81s
statefulset.apps/mydataset-jindofs-worker   2/2     81s

NAME                                    DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                       AGE
daemonset.apps/mydataset-jindofs-fuse   0         0         0       0            0           fluid.io/f-default-mydataset=true   81s
```

* The JindoFS master manages the whole JindoFS cluster and caches file metadata. It has 1 replica if high availability is not enabled.
* JindoFS workers manage cached data, and evict cached data when the cache space reaches its high watermark. The number of workers equals `JindoRuntime.spec.replicas`.
* The JindoFS FUSE client provides the POSIX interface to access data in JindoFS. The FUSE client DaemonSet has 0 replicas initially:
    - In the MountPod mode, a FUSE client pod is created on a node only when an application pod that mounts the PVC is scheduled to the node, which changes the number of replicas of the DaemonSet.
    - In the Sidecar mode, the DaemonSet always has 0 replicas, because FUSE clients are injected into application pods as sidecar containers.

After the JindoRuntime is bound to the Dataset (that is, after the JindoFS distributed cache system is ready), Fluid automatically creates a statically bound pair of PVC and PV in the cluster. The PVC has the same name as the Dataset and the JindoRuntime, and the PV is named `<namespace>-<dataset_name>`:

```shell
$ kubectl get pvc,pv
```

The output is similar to:

```
NAME                              STATUS   VOLUME              CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
persistentvolumeclaim/mydataset   Bound    default-mydataset   100Pi      ROX            fluid          <unset>                 85s

NAME                                 CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM               STORAGECLASS   VOLUMEATTRIBUTESCLASS   REASON   AGE
persistentvolume/default-mydataset   100Pi      ROX            Retain           Bound    default/mydataset   fluid          <unset>                          85s
```

To operate the JindoFS cluster just like a bare-metal one, log in to the JindoFS master container with the following command:

```shell
$ kubectl exec -it mydataset-jindofs-master-0 -- bash
```

In the JindoFS master container, use the [`jindo` and `jindocache` CLIs](https://aliyun.github.io/alibabacloud-jindodata/oss/usages/oss_jindo_cli/) to check the status of the JindoFS cluster and operate it:

```shell
# in the jindofs-master container
$ jindocache -report  # report JindoFS status
```

The output is similar to:

```
Namespace Address: mydataset-jindofs-master-0.default:19923
Rpc Port: 19923
Started: Sat Feb  1 08:48:11 2025
Version: 6.4.0
Live Nodes: 2
Decommission Nodes: 0
Total Disk Capacity: 4GB
Used Disk Capacity: 8.07031MB
Total MEM Capacity: 4GB
Used MEM Capacity: 0B
```
