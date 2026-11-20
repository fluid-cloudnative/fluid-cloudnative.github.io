---
sidebar_label: 部署Alluxio
sidebar_position: 1
---

# 使用AlluxioRuntime部署Alluxio

<span className="badge badge--secondary runtime-compatibility">功能适用于：AlluxioRuntime</span>

[Alluxio](https://www.alluxio.io/)是一个分布式的虚拟文件系统，它支持使用分布式缓存技术加速数据访问过程。在Fluid中，你可以使用AlluxioRuntime部署Alluxio分布式缓存系统，并通过Alluxio访问多种底层存储数据源中的数据。本章介绍AlluxioRuntime的配置示例，以及如何部署Alluxio分布式缓存系统。

## AlluxioRuntime配置示例 {#alluxioruntime-example}

一个简单的AlluxioRuntime配置示例如下：

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
<summary>AlluxioRuntime中各配置字段含义</summary>

| 字段 | 含义 | 详细解释 |
| ----- | ----------- | ------- |
| `replicas` | 分布式缓存系统Worker Pod的副本数。 | 在Dataset默认的[放置策略](/tutorials/datasets/placement-strategy.md)（`spec.placement=Exclusive`）下，一个节点上至多运行一个Worker Pod副本，此时副本数也等于分布式缓存系统需要的节点数量。 |
| `volumeType` | 存储缓存数据的数据卷类型。 | 支持`emptyDir`和`hostPath`两种类型，默认为`hostPath`。当设置为`hostPath`时，Fluid将节点上的`path`目录挂载到容器中作为缓存数据的存储空间。当设置为`emptyDir`时，Fluid根据`mediumtype`指定的缓存介质类型生成emptyDir数据卷，并将其作为缓存数据的存储空间。 |
| `mediumtype` | 缓存介质，即缓存的数据会存储在什么样的介质中。 | 支持`MEM`（内存）、`SSD`（固态硬盘）和`HDD`（机械硬盘）三种等级。该字段仅为Fluid提供参考信息，以控制多级缓存的层级关系。Fluid将根据用户指定的`mediumtype`对多级缓存排序，按照MEM、SSD、HDD性能从高到低的顺序排列。 |
| `path` | 缓存数据的存储路径。 | 存储路径可以为单个路径，例如`/dev/shm`；也可以为以逗号分隔的多个路径，例如`/mnt/disk1,/mnt/disk2`。当`volumeType`设置为`hostPath`时，`path`指定的路径会从宿主机挂载到容器中的相同位置，用于存储缓存数据。当`volumeType`设置为`emptyDir`时，`path`仅仅指定了容器中存储缓存数据的路径。 |
| `quota` | 单个分布式缓存Worker Pod的缓存容量。 | 当`path`为多个路径时，`quota`将被平均分配到各个路径上。如需为每个路径分别设置缓存容量，请改用`quotaList`。 |
| `high` | 缓存空间的高水位。 | 当缓存空间的已使用比例达到高水位时，缓存系统开始驱逐缓存数据。 |
| `low` | 缓存空间的低水位。 | 缓存系统会持续驱逐缓存数据，直到缓存空间的已使用比例降至低水位以下。 |

</details>

这个AlluxioRuntime示例将会创建一个包含2个节点（对应两个分布式缓存Worker Pod）的分布式缓存集群（`replicas: 2`）。每个Worker Pod提供2Gi大小的缓存容量（`quota: 2Gi`），缓存数据将会存储在Worker Pod容器内的`/dev/shm`目录下（`path: /dev/shm`），该目录挂载了一个内存介质（`mediumtype: MEM`）的emptyDir数据卷（`volumeType: emptyDir`）。最后，整个缓存系统的低水位和高水位分别为0.7（`low: "0.7"`）和0.95（`high: "0.95"`）。

在部署Alluxio分布式缓存系统之前，AlluxioRuntime必须与某个Dataset绑定。Fluid会自动将**同命名空间下同名**的Dataset和Runtime关联并绑定起来。例如，上述示例中AlluxioRuntime资源名为`mydataset`，命名空间为`default`，这意味着它将会和`default`命名空间下名为`mydataset`的Dataset资源绑定。

## 绑定AlluxioRuntime和Dataset {#bind-alluxioruntime-to-a-dataset}

:::info[前提条件]

本节假设你已经在集群中创建了一个**未绑定的Dataset（`status.phase==NotBound`）**，并且Dataset中定义了Alluxio支持的数据源。关于如何在Dataset中定义底层存储数据源，参考[配置底层存储数据源](/tutorials/datasets/data-sources.md)。

本节使用的示例Dataset指定了Alluxio支持的Web类型的数据源，其配置如下：

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

以[配置示例](#alluxioruntime-example)为例，执行以下命令创建AlluxioRuntime资源：

```shell
$ kubectl create -f runtime.yaml
```

接着执行以下命令，可以看到AlluxioRuntime与Dataset绑定过程中，Dataset的状态变化：

```shell
$ kubectl get dataset mydataset -w
```

输出结果类似如下：

```
NAME        UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE
mydataset                                                                  NotBound   11s
mydataset   [Calculating]                                                  NotBound   42s
mydataset   17.30MiB                                                       NotBound   62s
mydataset   17.30MiB                                                       Bound      67s
mydataset   17.30MiB         0.00B    4.00GiB          0.0%                Bound      67s
```

Dataset `mydataset`从`NotBound`状态最终变为`Bound`状态，并展示了底层存储数据源的文件总大小（UFS TOTAL SIZE）、已缓存数据量（CACHED）、总缓存容量（CACHE CAPACITY）以及缓存数据量占文件总大小的百分比（CACHED PERCENTAGE）。

此时，Alluxio分布式缓存系统已经在集群中成功部署，你可以通过Alluxio自身支持的多种文件访问接口读取其中的数据。Dataset与AlluxioRuntime绑定后，Fluid会自动为其创建持久卷声明（PersistentVolumeClaim，PVC）和持久卷（PersistentVolume，PV），其中PVC与Dataset和AlluxioRuntime同名。你可以在应用Pod中挂载该PVC，以POSIX接口访问Alluxio中的数据，参考[挂载数据集](/tutorials/data-accessing/mount-datasets.mdx)。

```shell
$ kubectl get pvc mydataset
```

输出结果类似如下：

```
NAME        STATUS   VOLUME              CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
mydataset   Bound    default-mydataset   100Pi      ROX            fluid          <unset>                 10m
```

## Fluid如何部署Alluxio {#how-fluid-deploys-alluxio}

本节将会介绍一些AlluxioRuntime与Dataset绑定时发生的细节，并向你介绍Fluid部署Alluxio时实际上创建了哪些Kubernetes资源。了解这些细节可能有助于排查运行时引擎遇到的技术问题，并让你能够像运维裸机上运行的Alluxio集群一样运维由Fluid部署的Alluxio集群。如果你对上述内容不感兴趣，请随意跳过本节内容。

Alluxio是Master-Worker架构的分布式系统，Fluid将会为AlluxioRuntime分别创建3个Kubernetes工作负载：*Master StatefulSet*、*Worker StatefulSet*和*FUSE Client DaemonSet*。它们以绑定的Dataset名字作为前缀命名：

```shell
$ kubectl get statefulset,daemonset
```

输出结果类似如下：

```
NAME                                READY   AGE
statefulset.apps/mydataset-master   1/1     4m8s
statefulset.apps/mydataset-worker   2/2     4m8s

NAME                            DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                       AGE
daemonset.apps/mydataset-fuse   0         0         0       0            0           fluid.io/f-default-mydataset=true   4m8s
```

* Alluxio Master组件负责管理整个Alluxio集群，并承担了缓存文件元数据的职责。在未开启高可用的前提下副本数为1。
* Alluxio Worker组件负责实际管理缓存数据，并在缓存空间达到高水位时执行缓存驱逐。副本数等于`AlluxioRuntime.spec.replicas`指定的副本数。
* Alluxio FUSE Client组件是Alluxio集群的客户端，为应用Pod提供POSIX接口的数据访问链路。初始状态下FUSE Client DaemonSet的副本数为0：
    - 当使用「MountPod挂载模式」时，只有当某个挂载了对应PVC的应用Pod调度到某个节点时，才会在该节点动态创建出FUSE Client的Pod，届时DaemonSet的副本数将发生变化。同一节点上的多个应用Pod将共享同一个FUSE Client Pod。
    - 当使用「Sidecar挂载模式」时，DaemonSet的副本数始终为0，因为FUSE Client组件将以Sidecar容器的形式被动态注入到应用Pod中。

如果希望获得类似运维裸机Alluxio集群的体验，可执行以下命令登录到Alluxio Master组件容器中：

```shell
$ kubectl exec -it mydataset-master-0 -c alluxio-master -- bash
```

在Alluxio Master组件容器中，可以使用[`alluxio` CLI工具](https://docs.alluxio.io/os/user/stable/en/operation/User-CLI.html)查询Alluxio集群状态和运维集群：

```shell
# in the alluxio-master container
$ alluxio fsadmin report summary  # report Alluxio status
```

输出结果类似如下：

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
