---
sidebar_label: FUSE Pod清理策略
sidebar_position: 2
---

# FUSE Pod清理策略

<span className="badge badge--secondary runtime-compatibility">功能适用于：AlluxioRuntime, JindoRuntime, JuiceFSRuntime, ThinRuntime</span>

在MountPod挂载模式下（参见[挂载数据集](/tutorials/data-accessing/mount-datasets.mdx)），应用Pod被调度到某个节点上时，Fluid会自动在该节点上按需创建FUSE Pod。默认情况下，FUSE Pod创建后将会持续存在，直至与FUSE Pod相关的Runtime资源被删除。如果挂载相同Dataset的其他应用Pod调度到该节点，这些应用Pod将会复用已经存在的FUSE Pod。

常驻的FUSE Pod本质上创建了一个常驻的文件系统挂载点。该文件系统的状态（如高频访问的热点数据元信息、[内核页缓存](https://en.wikipedia.org/wiki/Page_cache)等）可以被不同的应用Pod重用。但常驻的FUSE Pod意味着它会长时间占用所在节点的更多资源，为此，Fluid支持通过Runtime的`spec.fuse.cleanPolicy`为FUSE Pod配置清理策略：

| 清理策略 | 说明 |
| ------------ | ----------- |
| `OnRuntimeDeleted`（默认） | 仅在Runtime被删除时清理FUSE Pod。 |
| `OnDemand` | 当所在节点上不再有应用Pod使用FUSE Pod时，即清理该FUSE Pod。 |
| `OnFuseChanged` | 仅JuiceFSRuntime支持。与`OnRuntimeDeleted`一样保留FUSE Pod，但当所在节点上不再有应用Pod使用某个FUSE Pod时，如果Runtime的`spec.fuse`在该FUSE Pod创建之后发生过更新，则清理该FUSE Pod。再次需要FUSE Pod时，将使用更新后的配置创建新的FUSE Pod。 |

使用`OnDemand`清理策略的Runtime示例如下：

```yaml title="runtime.yaml"
apiVersion: data.fluid.io/v1alpha1
kind: XXXRuntime  # Replace with your Runtime Kind.
metadata:
  name: mydataset # MUST be same as Dataset's name
  namespace: default
spec:
  ...
  fuse:
    # highlight-next-line
    cleanPolicy: OnDemand # defaults to OnRuntimeDeleted
```

配置`spec.fuse.cleanPolicy`为`OnDemand`后，仅在同节点上有需要挂载文件系统的应用Pod时保留FUSE Pod。已有Runtime的清理策略同样可以修改，例如使用`kubectl apply`更新Runtime。

## 验证清理策略 {#verify-the-clean-policy}

以下步骤以一个名为`mydataset`、清理策略为`OnDemand`的AlluxioRuntime为例，展示清理策略的工作方式。

创建应用Pod并挂载名为`mydataset`的PVC（参见[挂载数据集](/tutorials/data-accessing/mount-datasets.mdx)），然后查看Pod：

```shell
$ kubectl get pods
NAME                   READY   STATUS    RESTARTS   AGE
mydataset-fuse-4ncs2   1/1     Running   0          85s
mydataset-master-0     2/2     Running   0          4m31s
mydataset-worker-0     2/2     Running   0          4m2s
mydataset-worker-1     2/2     Running   0          4m1s
nginx                  1/1     Running   0          85s
```

可以看到，应用Pod所在的节点上创建了一个FUSE Pod。删除该应用Pod，并再次查看Pod：

```shell
$ kubectl delete pod nginx
pod "nginx" deleted
$ kubectl get pods
NAME                 READY   STATUS    RESTARTS   AGE
mydataset-master-0   2/2     Running   0          5m
mydataset-worker-0   2/2     Running   0          4m31s
mydataset-worker-1   2/2     Running   0          4m30s
```

由于节点上已经没有应用Pod使用该FUSE Pod，该FUSE Pod被清理。如果使用默认的`OnRuntimeDeleted`清理策略，删除应用Pod后FUSE Pod将会继续运行，直至AlluxioRuntime被删除。
