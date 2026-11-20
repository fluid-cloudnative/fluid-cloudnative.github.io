---
sidebar_label: Scheduling Constraints
sidebar_position: 3
---

# Configure Scheduling Constraints

Fluid treats the cached data of a Dataset as a schedulable resource. You can add scheduling constraints to a Dataset to control where and in which topology its cached data is deployed in the Kubernetes cluster. If the nodes in your cluster belong to different topology domains (such as switches, zones and regions), scheduling constraints help you place the cached data in the same topology domain as your applications, which shortens the data access path and improves data access performance. This document describes how to configure scheduling constraints on a Dataset.

## Node Affinity

An example of a Dataset with node affinity:

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

The example above adds `spec.nodeAffinity` to the Dataset to control where its cached data is placed in the cluster. `spec.nodeAffinity.required` follows the format of the [node selector](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity) of Kubernetes. In this example, the cached data (which is essentially the worker pods of the distributed cache system) is forced to be scheduled to the nodes that meet **both** of the following conditions:

1. The node has the label `topology.kubernetes.io/region=cn-beijing`.
2. The node has the label `nodepool`, and the label value is `model-training` or `model-developing`.

With scheduling constraints of Datasets, you can partition the nodes of a Kubernetes cluster and make sure that different workloads access their data in isolation from each other.

## Tolerations

If the nodes for the cached data have [taints](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/), add the corresponding tolerations to `spec.tolerations` of the Dataset. Fluid applies them to the pods of the Runtime bound to the Dataset, so that the cached data can be placed on these nodes. For example:

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

The tolerations of a Dataset only apply to the pods of its Runtime. To run the applications that use the Dataset on these nodes, add the same tolerations to the application pods.

For an end-to-end example that schedules cached data and applications together, see [Cache Co-locality](/tutorials/advanced/cache-co-locality.md).
