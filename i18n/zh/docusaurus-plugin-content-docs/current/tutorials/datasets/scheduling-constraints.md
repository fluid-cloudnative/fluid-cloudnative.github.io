---
sidebar_label: 调度约束
sidebar_position: 3
---

# 配置数据集调度约束

Fluid将数据集对应的缓存数据看作可被调度的资源，你可以在数据集上增加调度约束，控制缓存数据在Kubernetes集群中的部署位置和拓扑。如果你集群中的节点从属于不同的拓扑域（例如：交换机、可用区、地域等），配置数据集的调度约束可以帮助你将缓存数据与业务应用放在相同的拓扑域中，缩短数据访问链路，提升数据访问性能。本文介绍如何在Dataset上配置调度约束。

## 配置节点亲和性 {#node-affinity}

包含节点亲和性的Dataset配置示例如下：

```yaml title="dataset.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: mydataset-affinity
spec:
  nodeAffinity:
    required:
      nodeSelectorTerms:
      - matchExpressions:
        - key: topology.kubernetes.io/region
          operator: In
          values:
          - cn-beijing
        - key: nodepool
          operator: In
          values:
          - model-training
          - model-developing
  mounts:
    - mountPoint: <MOUNT_POINT>
```

上述示例为Dataset添加了`spec.nodeAffinity`字段以控制缓存数据在Kubernetes集群中的分布。`spec.nodeAffinity.required`遵循Kubernetes[节点选择器](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity)的格式。在上述配置示例中，缓存数据（本质上是分布式缓存系统的Worker Pod）会被强制调度到**同时满足**以下两个条件的节点上：

1. 节点包含标签`topology.kubernetes.io/region=cn-beijing`。
2. 节点包含标签`nodepool`，且标签值等于`model-training`或`model-developing`。

通过数据集调度约束，你可以对Kubernetes集群内不同节点的资源进行划分管理，并确保不同业务访问数据的过程互相隔离。

## 配置容忍度 {#tolerations}

如果用于放置缓存数据的节点上设置了[污点（Taint）](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/)，需要在Dataset的`spec.tolerations`中添加相应的容忍度（Toleration）。Fluid会将这些容忍度应用到与该Dataset绑定的Runtime的Pod上，使缓存数据能够被放置到这些节点上。示例如下：

```yaml title="dataset.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: mydataset-toleration
spec:
  tolerations:
  - key: dedicated
    operator: Equal
    value: fluid-cache
    effect: NoSchedule
  mounts:
    - mountPoint: <MOUNT_POINT>
```

Dataset中配置的容忍度仅作用于其Runtime的Pod。如果希望使用该Dataset的应用也运行在这些节点上，需要为应用Pod添加相同的容忍度。

有关同时调度缓存数据与应用的端到端示例，参考[数据缓存亲和性调度](/tutorials/advanced/cache-co-locality.md)。
