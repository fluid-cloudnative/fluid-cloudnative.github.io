---
sidebar_label: Placement Strategy
sidebar_position: 4
---

# Configure Placement Strategy

Fluid encourages users to create separate Datasets for different workloads, and the Runtime bound to a Dataset is usually a distributed cache system. When applications access data, a cache system consumes the bandwidth of the nodes it runs on, so whether multiple distributed cache systems can be "placed" on the same node has a great impact on the overall performance. This document describes how to configure the placement strategy of Datasets.

## Example

The placement strategy of a Dataset decides whether its distributed cache system can run on the same nodes as other distributed cache systems. Fluid supports two placement strategies, `Exclusive` and `Shared`, which means that a node can only be used by one distributed cache system, or can be shared by multiple distributed cache systems, respectively. The default placement strategy is `Exclusive`.

An example of a Dataset with a placement strategy:

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

Placement strategies are implemented by adding `spec.affinity.podAntiAffinity` to the worker pods of distributed cache systems. The worker pods of an `Exclusive` Dataset cannot run on a node that has a worker pod of any other Dataset. The worker pods of a `Shared` Dataset cannot run on a node that has a worker pod of an `Exclusive` Dataset, and prefer the nodes without worker pods of other Datasets. Therefore, if a node already has a worker pod of Dataset A, whether a worker pod of Dataset B can be scheduled to the node is as follows:

| Placement of Dataset A \ Placement of Dataset B | Exclusive | Shared |
| ----------- | ---------| ------ |
| **Exclusive** | Not schedulable | Not schedulable |
| **Shared** | Not schedulable | Schedulable |

With the default `Exclusive` placement strategy, at most one worker pod of a distributed cache system runs on a node, so the number of worker replicas of a Runtime also equals the number of nodes that its cache system needs.
