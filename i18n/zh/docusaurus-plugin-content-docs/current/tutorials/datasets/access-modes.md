---
sidebar_label: 访问模式
sidebar_position: 2
---

# 配置访问模式

本文介绍如何为Dataset配置访问模式（Access Modes）。Fluid支持的访问模式为[持久卷（PersistentVolume，PV）访问模式](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes)的子集，目前支持以下两种访问模式，分别对应只读和读写权限的数据访问链路：

- `ReadOnlyMany`：Dataset可以被多个节点以只读方式挂载。
- `ReadWriteMany`：Dataset可以被多个节点以读写方式挂载。

Dataset的访问模式在创建Dataset时通过`spec.accessModes`字段指定。Fluid为Dataset创建的PV和持久卷声明（PersistentVolumeClaim，PVC）也会使用与Dataset相同的访问模式。

## 只读模式的Dataset {#read-only-datasets}

在Fluid中，Dataset是**默认只读**的，这包含两方面的原因。一方面，Fluid面向的ML/AI和大数据类型的数据分析类应用在大多数情况下只需要读取文件集合中的内容，而无需对其进行修改。另一方面，在只读的场景下，Fluid将为各个运行时引擎自动配置更适合读取操作的参数，以提升应用读取数据时的性能表现。

:::warning[读取性能与缓存数据一致性的两难困境]

为只读场景做的性能优化可能导致**缓存数据一致性问题**：例如，底层存储数据源的数据变化不能及时反映到运行时引擎的缓存中，客户端文件元数据缓存的存在也可能导致与运行时引擎缓存数据的同步延迟。极致的读取性能和强一致性不可兼得，**推荐根据自身业务特征，在读取性能与缓存数据一致性之间平衡选择。**

:::

只读模式的Dataset示例配置如下：

```yaml title="dataset-ro.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: dataset-ro
spec:
  # accessModes: ["ReadOnlyMany"] # defaults to ReadOnlyMany
  mounts:
    - mountPoint: <MOUNT_POINT>
      name: demo
```

## 读写模式的Dataset {#read-write-datasets}

当Dataset设置为使用读写模式时，Fluid将为各个运行时引擎选择更适合读写场景的配置参数，这往往意味着更好的缓存数据一致性，但读取该Dataset中的数据时可能会有相对较差的性能。

读写模式的Dataset示例配置如下：

```yaml title="dataset-rw.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: dataset-rw
spec:
  accessModes: ["ReadWriteMany"]
  mounts:
    - mountPoint: <MOUNT_POINT>
      name: demo
```
