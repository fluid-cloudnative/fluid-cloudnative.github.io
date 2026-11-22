---
sidebar_label: Deploy Alluxio
sidebar_position: 1
---

# Deploy Alluxio with AlluxioRuntime

<span className="badge badge--secondary runtime-compatibility">Applies to: AlluxioRuntime</span>

[Alluxio](https://www.alluxio.io/) is a distributed virtual file system that accelerates data access with distributed caching. In Fluid, you can deploy an Alluxio distributed cache system with AlluxioRuntime, and access the data in various underlying storage systems through Alluxio. This document shows an example of AlluxioRuntime, and describes how to deploy an Alluxio distributed cache system.

## AlluxioRuntime Example

A simple AlluxioRuntime example:

```yaml title="runtime.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: AlluxioRuntime
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
        high: "0.95"
        low: "0.7"
```

<details>
<summary>Fields in the AlluxioRuntime</summary>

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

This AlluxioRuntime creates a distributed cache cluster with 2 nodes, which run 2 worker pods (`replicas: 2`). Each worker pod provides a cache capacity of 2Gi (`quota: 2Gi`), and stores cached data in the `/dev/shm` directory of its container (`path: /dev/shm`), where an emptyDir volume (`volumeType: emptyDir`) backed by memory (`mediumtype: MEM`) is mounted. The low and high watermarks of the cache system are 0.7 (`low: "0.7"`) and 0.95 (`high: "0.95"`) respectively.

Before the Alluxio distributed cache system is deployed, the AlluxioRuntime must be bound to a Dataset. Fluid automatically binds a Dataset and a Runtime **that have the same name in the same namespace**. For example, the AlluxioRuntime above is named `mydataset` in the `default` namespace, so it will be bound to the Dataset named `mydataset` in the `default` namespace.

## Bind AlluxioRuntime to a Dataset

:::info[Prerequisites]

This section assumes that you have created an **unbound Dataset (`status.phase==NotBound`)** in the cluster, and the Dataset defines data sources supported by Alluxio. For how to define data sources in a Dataset, see [Configure Data Sources](/tutorials/datasets/data-sources.md).

The example Dataset in this section uses a web data source supported by Alluxio:

<details>
<summary>dataset.yaml</summary>

```yaml
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: mydataset
spec:
  mounts:
    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/zookeeper/stable/
      name: zookeeper
```

</details>

:::

Create the AlluxioRuntime in the [example](#alluxioruntime-example) above:

```shell
$ kubectl create -f runtime.yaml
```

Then run the following command to watch the status of the Dataset while the AlluxioRuntime is being bound to it:

```shell
$ kubectl get dataset mydataset -w
```

The output is similar to:

```
NAME        UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE
mydataset                                                                  NotBound   11s
mydataset   [Calculating]                                                  NotBound   42s
mydataset   17.30MiB                                                       NotBound   62s
mydataset   17.30MiB                                                       Bound      67s
mydataset   17.30MiB         0.00B    4.00GiB          0.0%                Bound      67s
```

The Dataset `mydataset` changes from `NotBound` to `Bound`, and shows the total size of the files in its data sources (UFS TOTAL SIZE), the size of cached data (CACHED), the total cache capacity (CACHE CAPACITY), and the percentage of cached data in the total size (CACHED PERCENTAGE).

Now the Alluxio distributed cache system has been deployed in the cluster, and you can read its data through the file access interfaces supported by Alluxio. After the Dataset is bound to the AlluxioRuntime, Fluid automatically creates a PersistentVolumeClaim (PVC) and a PersistentVolume (PV) for them. The PVC has the same name as the Dataset and the AlluxioRuntime. You can mount the PVC in application pods to access the data in Alluxio through the POSIX interface, see [Mount Datasets](/tutorials/data-accessing/mount-datasets.mdx).

```shell
$ kubectl get pvc mydataset
```

The output is similar to:

```
NAME        STATUS   VOLUME              CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
mydataset   Bound    default-mydataset   100Pi      ROX            fluid          <unset>                 10m
```

## How Fluid Deploys Alluxio

This section describes some details of binding an AlluxioRuntime to a Dataset, and the Kubernetes resources that Fluid creates to deploy Alluxio. These details help you troubleshoot problems of the Runtime, and operate the Alluxio cluster deployed by Fluid just like an Alluxio cluster running on bare metal. Feel free to skip this section if you are not interested in them.

Alluxio is a distributed system with a master-worker architecture. Fluid creates 3 Kubernetes workloads for an AlluxioRuntime: a *master StatefulSet*, a *worker StatefulSet* and a *FUSE client DaemonSet*. They are prefixed with the name of the bound Dataset:

```shell
$ kubectl get statefulset,daemonset
```

The output is similar to:

```
NAME                                READY   AGE
statefulset.apps/mydataset-master   1/1     4m8s
statefulset.apps/mydataset-worker   2/2     4m8s

NAME                            DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                       AGE
daemonset.apps/mydataset-fuse   0         0         0       0            0           fluid.io/f-default-mydataset=true   4m8s
```

* The Alluxio master manages the whole Alluxio cluster and caches file metadata. It has 1 replica if high availability is not enabled.
* Alluxio workers manage cached data, and evict cached data when the cache space reaches its high watermark. The number of workers equals `AlluxioRuntime.spec.replicas`.
* The Alluxio FUSE client provides the POSIX interface to access data in Alluxio. The FUSE client DaemonSet has 0 replicas initially:
    - In the MountPod mode, a FUSE client pod is created on a node only when an application pod that mounts the PVC is scheduled to the node, which changes the number of replicas of the DaemonSet. Multiple application pods on the same node share the same FUSE client pod.
    - In the Sidecar mode, the DaemonSet always has 0 replicas, because FUSE clients are injected into application pods as sidecar containers.

To operate the Alluxio cluster just like a bare-metal one, log in to the Alluxio master container with the following command:

```shell
$ kubectl exec -it mydataset-master-0 -c alluxio-master -- bash
```

In the Alluxio master container, use the [`alluxio` CLI](https://docs.alluxio.io/os/user/stable/en/operation/User-CLI.html) to check the status of the Alluxio cluster and operate it:

```shell
# in the alluxio-master container
$ alluxio fsadmin report summary  # report Alluxio status
```

The output is similar to:

```
Alluxio cluster summary:
    Master Address: 192.168.2.252:20513
    Web Port: 20434
    Rpc Port: 20513
    Started: 02-01-2025 07:40:05:479
    Uptime: 0 day(s), 0 hour(s), 15 minute(s), and 18 second(s)
    Version: 2.9.0
    Safe Mode: false
    Zookeeper Enabled: false
    Raft-based Journal: false
    Live Workers: 2
    Lost Workers: 0
    Total Capacity: 4096.00MB
        Tier: MEM  Size: 4096.00MB
    Used Capacity: 0B
        Tier: MEM  Size: 0B
    Free Capacity: 4096.00MB
```
