---
sidebar_label: FUSE Pod Clean Policy
sidebar_position: 2
---

# FUSE Pod Clean Policy

<span className="badge badge--secondary runtime-compatibility">Applies to: AlluxioRuntime, JindoRuntime, JuiceFSRuntime, ThinRuntime</span>

In the MountPod mode (see [Mount Datasets](/tutorials/data-accessing/mount-datasets.mdx)), when an application pod is scheduled to a node, Fluid creates a FUSE pod on the node on demand. By default, a FUSE pod keeps running after it is created, until the Runtime that it belongs to is deleted. Other application pods that mount the same Dataset and are scheduled to the node reuse the existing FUSE pod.

A long-running FUSE pod is essentially a long-running file system mount point. The state of the file system (such as the metadata of hot data and the [kernel page cache](https://en.wikipedia.org/wiki/Page_cache)) can be reused by different application pods. However, a long-running FUSE pod also occupies more resources of its node for a long time. Therefore, Fluid lets you configure the clean policy of FUSE pods in `spec.fuse.cleanPolicy` of a Runtime:

| Clean Policy | Description |
| ------------ | ----------- |
| `OnRuntimeDeleted` (default) | FUSE pods are cleaned up only when the Runtime is deleted. |
| `OnDemand` | A FUSE pod is cleaned up once no application pod on its node uses it. |
| `OnFuseChanged` | Only supported by JuiceFSRuntime. FUSE pods are kept like `OnRuntimeDeleted`, except that once no application pod on its node uses a FUSE pod, the FUSE pod is cleaned up if `spec.fuse` of the Runtime has been updated since the FUSE pod was created. A FUSE pod with the updated configuration is created when it is needed again. |

An example of a Runtime with the `OnDemand` clean policy:

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

With `spec.fuse.cleanPolicy: OnDemand`, a FUSE pod is kept only while there are application pods on its node that need to mount the file system. The clean policy of an existing Runtime can be changed as well, for example, with `kubectl apply`.

## Verify the Clean Policy

The following steps use an AlluxioRuntime named `mydataset` with the `OnDemand` clean policy to show how a clean policy works.

Create an application pod that mounts the PVC `mydataset` (see [Mount Datasets](/tutorials/data-accessing/mount-datasets.mdx)), and check the pods:

```shell
$ kubectl get pods
NAME                   READY   STATUS    RESTARTS   AGE
mydataset-fuse-4ncs2   1/1     Running   0          85s
mydataset-master-0     2/2     Running   0          4m31s
mydataset-worker-0     2/2     Running   0          4m2s
mydataset-worker-1     2/2     Running   0          4m1s
nginx                  1/1     Running   0          85s
```

A FUSE pod is created on the node of the application pod. Delete the application pod and check the pods again:

```shell
$ kubectl delete pod nginx
pod "nginx" deleted
$ kubectl get pods
NAME                 READY   STATUS    RESTARTS   AGE
mydataset-master-0   2/2     Running   0          5m
mydataset-worker-0   2/2     Running   0          4m31s
mydataset-worker-1   2/2     Running   0          4m30s
```

Because no application pod on the node uses the FUSE pod anymore, the FUSE pod is cleaned up. With the default `OnRuntimeDeleted` clean policy, the FUSE pod would keep running after the application pod is deleted, until the AlluxioRuntime is deleted.
