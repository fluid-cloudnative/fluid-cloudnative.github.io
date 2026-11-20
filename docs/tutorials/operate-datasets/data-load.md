---
sidebar_label: Data Load
sidebar_position: 1
---

# Data Load

Fluid provides the data load operation (DataLoad) to describe data flowing tasks between the data sources defined in a Dataset and the Runtime. For most Runtimes, it has two meanings:

- **Cache warm-up**: Pull the specified data from the underlying storage systems into the (distributed) cache of the Runtime, to improve the performance of the first access.
- **Data change sync**: Sync the data changes in the underlying storage systems (such as files that are added, deleted or modified) to the Runtime to keep data consistent.

This document describes how to use DataLoad for cache warm-up and data change sync, as well as some advanced configurations of DataLoad, such as running DataLoad periodically and loading one or more subdirectories.

## Cache Warm-up

<span className="badge badge--secondary runtime-compatibility">Applies to: AlluxioRuntime, JindoRuntime, JuiceFSRuntime</span>

When data is accessed through the client of a Runtime, the client first checks whether the data is in the cache. If a data access request misses the cache, the client reads the data from the underlying storage system. Therefore, to make sure that data access requests hit the cache, you can load the data to be read into the (distributed) cache of the Runtime before applications start. In this way, applications enjoy the acceleration of the distributed cache even when they access the data for the first time.

In Fluid, a data operation named DataLoad triggers **active cache warm-up** tasks. An example of DataLoad:

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

The example above describes a DataLoad named `dataload-example`, where `spec.dataset.name` and `spec.dataset.namespace` specify the Dataset (`mydataset`) to warm up. `spec.dataset.namespace` **must** be the same as `metadata.namespace`, that is, a DataLoad can only work on a Dataset in the same namespace.

:::tip

By default, the DataLoad above tries to warm up all the data in the Dataset. To load only some subdirectories of the Dataset (which is strongly recommended), see [Load One or More Subdirectories](#load-one-or-more-subdirectories).

:::

Run the following command to create the DataLoad:

```shell
$ kubectl create -f dataload.yaml
```

Check the status of the DataLoad:

```shell
$ kubectl get dataload dataload-example -w
```

The output is similar to:

```
NAME               DATASET     PHASE       AGE   DURATION
dataload-example   mydataset   Executing   11s   Unfinished
dataload-example   mydataset   Complete    21s   11s
```

After the DataLoad is created, Fluid submits an active cache warm-up task to the cluster. After the task succeeds, the phase of the DataLoad (`.status.phase`) changes to `Complete`, and `.status.duration` shows how long the task took.

After the DataLoad succeeds, check the status of the Dataset:

```shell
$ kubectl get dataset mydataset
```

The output is similar to:

```
NAME        UFS TOTAL SIZE   CACHED     CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE
mydataset   95.09MiB         95.09MiB   4.00GiB          100.0%              Bound   4d21h
```

The size of cached data (`.status.cacheStates.cached`) and the percentage of cached data (`.status.cacheStates.cachedPercentage`) of the Runtime have been updated, which means that all the data in the Dataset has been loaded into the cache of the Runtime.

## Data Change Sync

<span className="badge badge--secondary runtime-compatibility">Applies to: AlluxioRuntime, JindoRuntime</span>

The cache of some Runtimes cannot detect the data changes in the underlying storage systems, such as files that are added, deleted or modified. To make sure that the file lists and file contents read by applications are consistent with the underlying storage systems, the data changes in the underlying storage systems need to be synced to the Runtime.

In Fluid, a DataLoad can perform a **data change sync** task before the active cache warm-up task. An example of such a DataLoad:

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

Syncing metadata from the underlying storage systems is usually expensive. Do not enable `loadMetadata` unless necessary.

:::

## Advanced Configurations

### Load One or More Subdirectories

A DataLoad can load only the specified subdirectories (or files) instead of the whole Dataset, for example:

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

The DataLoad above only loads all the files under the `/directory1/` directory and the `/directory2/model.pkl` file.

:::tip

The paths to load (`spec.target[*].path`) are paths in the Dataset to load (`spec.dataset`). For example, if `mydataset` mounts `s3://mybucket/` to the root directory of the Dataset (that is, `spec.mounts[0].path=='/'`), the DataLoad above actually loads the directory `s3://mybucket/directory1/` and the file `s3://mybucket/directory2/model.pkl`.

:::

### Set the Number of Cache Replicas

The number of cache replicas is the number of copies of each loaded file stored in the Runtime, which defaults to 1. Increasing the number of cache replicas of hot files helps balance the load of the distributed cache system, but multiple replicas take up more cache space. Because Runtimes usually split files into smaller chunks (or blocks), you can get good load balance without changing the number of cache replicas in most cases.

An example of a DataLoad that specifies the number of cache replicas:

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

### Load Data Periodically

DataLoad supports running data load tasks periodically according to a schedule in the [Cron format](https://en.wikipedia.org/wiki/Cron).

An example of a DataLoad that loads data periodically:

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

To run a DataLoad after other data operations, see [Configuring Affinity for Data Operations in DataFlow](/tutorials/operate-datasets/configuring-affinity-for-data-operations-in-dataflow.md). To clean up finished DataLoads automatically, see [Automatic Cleanup Data Operation](/tutorials/operate-datasets/automatic-cleanup-data-operation.md).
