---
sidebar_label: 数据加载
sidebar_position: 1
---

# 数据加载

Fluid提供了数据加载（DataLoad）操作来描述Dataset中定义的底层存储数据源与运行时引擎之间的数据流动任务。对于大部分运行时引擎，这包含了两种含义：

- **缓存预热**：将底层存储系统中的指定数据拉取到运行时引擎的（分布式）缓存中，以提升首次访问的性能。
- **数据变化同步**：将底层存储系统中的数据变化（文件增删、修改等）同步到运行时引擎，确保数据一致性。

本章介绍如何使用DataLoad数据操作执行缓存预热和数据变化同步任务，同时介绍DataLoad的若干进阶配置，涉及定时执行、指定单个或多个子目录执行等。

## 缓存预热 {#cache-warm-up}

<span className="badge badge--secondary runtime-compatibility">功能适用于：AlluxioRuntime, JindoRuntime, JuiceFSRuntime</span>

当通过运行时引擎客户端访问数据时，客户端将首先确定待访问的数据是否在缓存中。如果数据访问请求未命中缓存（Cache Miss），客户端将从底层存储系统中回源读取。因此，为了确保数据访问性能（确保数据访问请求命中缓存），可以在应用启动前将待读数据提前加载到运行时引擎的（分布式）缓存中。这样，即使是首次访问数据，应用也能享受到分布式缓存带来的加速效果。

在Fluid中，我们通过名为DataLoad的数据操作来触发**主动缓存预热**的任务，一个DataLoad示例如下：

```yaml title="dataload.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: DataLoad
metadata:
  name: dataload-example
  namespace: default
spec:
  dataset:
    name: mydataset
    namespace: default
```

上述示例描述了一个名为`dataload-example`的DataLoad数据操作。其中，`spec.dataset.name`和`spec.dataset.namespace`指定了缓存预热任务的对象Dataset（`mydataset`）。`spec.dataset.namespace`**必须**与`metadata.namespace`相同，即DataLoad数据预热任务只能对一个同命名空间下的Dataset生效。

:::tip

默认情况下，上述DataLoad配置将会尝试预热Dataset中的全部数据，如果你希望仅加载Dataset中的指定子路径（我们也强烈推荐这么做），请参考[指定一个或多个子目录进行加载](#load-one-or-more-subdirectories)。

:::

执行以下命令，创建DataLoad数据操作：

```shell
$ kubectl create -f dataload.yaml
```

查看DataLoad运行状态：

```shell
$ kubectl get dataload dataload-example -w
```

输出结果类似如下：

```
NAME               DATASET     PHASE       AGE   DURATION
dataload-example   mydataset   Executing   11s   Unfinished
dataload-example   mydataset   Complete    21s   11s
```

DataLoad创建后，Fluid将会向集群下发主动缓存预热任务。任务运行成功后，DataLoad运行状态（`.status.phase`）将会变为`Complete`，并且`.status.duration`将会输出本次任务的执行耗时。

DataLoad运行成功后，查看Dataset状态：

```shell
$ kubectl get dataset mydataset
```

输出结果类似如下：

```
NAME        UFS TOTAL SIZE   CACHED     CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE
mydataset   95.09MiB         95.09MiB   4.00GiB          100.0%              Bound   4d21h
```

运行时引擎的已缓存数据量（`.status.cacheStates.cached`）以及已缓存数据百分比（`.status.cacheStates.cachedPercentage`）均已更新，这意味着Dataset中的全部数据均已经预热到运行时引擎的缓存中。

## 数据变化同步 {#data-change-sync}

<span className="badge badge--secondary runtime-compatibility">功能适用于：AlluxioRuntime, JindoRuntime</span>

部分运行时引擎的缓存无法主动感知到底层存储系统中的数据变化，例如文件增删、修改等。为了确保应用读取到的文件列表和内容与底层存储系统中展现的一致，我们需要将底层存储系统中的数据变化主动同步到运行时引擎中。

在Fluid中，我们通过DataLoad数据操作，在执行主动缓存预热任务之前，执行**数据变化同步**任务。DataLoad示例如下：

```yaml title="dataload.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: DataLoad
metadata:
  name: dataload-example-load-meta
spec:
  # highlight-next-line
  loadMetadata: true
  dataset:
    name: mydataset
    namespace: default
```

:::note

从底层存储系统同步元数据的开销通常较大，如非必要，请不要开启`loadMetadata`。

:::

## 进阶配置 {#advanced-configurations}

### 指定一个或多个子目录进行加载 {#load-one-or-more-subdirectories}

数据加载时支持仅加载指定的子目录（或文件），而不是Dataset下的整个目录，例如：

```yaml title="dataload.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: DataLoad
metadata:
  name: demo-dataload-subpath
  namespace: default
spec:
  dataset:
    name: mydataset
    namespace: default
  # highlight-start
  target:
    - path: /directory1/
    - path: /directory2/model.pkl
  # highlight-end
```

以上DataLoad仅会加载`/directory1/`目录下的全部文件，以及`/directory2/model.pkl`文件。

:::tip

DataLoad中加载路径（`spec.target[*].path`）指的是待加载Dataset（`spec.dataset`）下的路径。例如，如果`mydataset`中设置了将`s3://mybucket/`挂载到Dataset的根目录下（即`spec.mounts[0].path=='/'`），那么该DataLoad加载的实际文件路径为目录`s3://mybucket/directory1/`和文件`s3://mybucket/directory2/model.pkl`。

:::

### 指定加载的缓存数据副本数 {#set-the-number-of-cache-replicas}

缓存数据副本数指的是对于每一个需要加载的文件，在运行时引擎中存放的副本数，默认为1。提升热点文件的缓存数据副本数有助于提升分布式缓存系统的负载均衡性，但多个副本将占据更多的缓存空间。由于运行时引擎通常会把文件切分为更小的块（Chunk或Block），因此在大部分情况下无需调整缓存数据副本数即可获得较好的负载均衡效果。

数据加载时指定缓存数据副本数的DataLoad示例如下：

```yaml title="dataload.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: DataLoad
metadata:
  name: demo-dataload-subpath
  namespace: default
spec:
  dataset:
    name: mydataset
    namespace: default
  target:
    - path: /directory1/
      # highlight-next-line
      replicas: 1
    - path: /directory2/model.pkl
      # highlight-next-line
      replicas: 2
```

### 定时数据加载 {#load-data-periodically}

DataLoad支持以[Cron格式](https://en.wikipedia.org/wiki/Cron)执行定时数据加载任务。

使用定时数据加载功能的DataLoad示例如下：

```yaml title="dataload.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: DataLoad
metadata:
  name: cron-dataload
spec:
  dataset:
    name: mydataset
    namespace: default
  loadMetadata: true
  # highlight-start
  policy: Cron
  schedule: "0 0 * * 1-5" # Load data at each 00:00 from Monday to Friday
  # highlight-end
  target:
    - path: /
```

如果需要在其他数据操作之后运行DataLoad，请参考[DataFlow中配置数据操作的亲和性](/tutorials/operate-datasets/configuring-affinity-for-data-operations-in-dataflow.md)。如果需要自动清理已完成的DataLoad，请参考[数据操作自动清理](/tutorials/operate-datasets/automatic-cleanup-data-operation.md)。
