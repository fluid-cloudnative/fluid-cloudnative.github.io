---
sidebar_label: 放置策略
sidebar_position: 4
---

# 配置数据集放置策略

Fluid鼓励用户为不同的业务场景创建彼此独立的Dataset，而与Dataset绑定的运行时引擎通常是一个分布式缓存系统。应用访问数据时，缓存系统将会占用所在节点的带宽资源，因此多个分布式缓存系统是否能够“放置”在相同的节点上对于整体性能有很大影响。本文介绍如何配置数据集放置策略。

## 配置示例 {#example}

数据集放置策略（Placement Strategy）决定了Dataset对应的分布式缓存系统能否与其他分布式缓存系统运行在相同的节点上。Fluid目前支持`Exclusive`和`Shared`两种数据集放置策略，分别表示一个节点只能被一个分布式缓存系统使用，或者允许被多个分布式缓存系统共享。数据集放置策略的默认值为`Exclusive`。

包含放置策略的Dataset配置示例如下：

```yaml title="dataset.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: mydataset1
spec:
  placement: "Shared" # defaults to Exclusive
  mounts:
    - mountPoint: <MOUNT_POINT>
```

数据集放置策略是通过在分布式缓存系统的Worker Pod上添加`spec.affinity.podAntiAffinity`调度约束实现的。放置策略为`Exclusive`的Dataset，其Worker Pod不能运行在已存在任何其他Dataset的Worker Pod的节点上。放置策略为`Shared`的Dataset，其Worker Pod不能运行在已存在放置策略为`Exclusive`的Dataset的Worker Pod的节点上，并且会优先选择不存在其他Dataset的Worker Pod的节点。因此，假设集群中的某个节点上已经存在Dataset A的缓存Worker Pod，那么Dataset B的Worker Pod能否调度到该节点如下表所示：

| Dataset A的放置策略 \ Dataset B的放置策略 | Exclusive | Shared |
| ----------- | ---------| ------ |
| **Exclusive** | 不可调度 | 不可调度 |
| **Shared** | 不可调度 | 可调度 |

在默认的`Exclusive`放置策略下，一个分布式缓存系统在每个节点上最多只运行一个Worker Pod，因此Runtime的Worker副本数也等于其缓存系统所需的节点数。
