---
sidebar_label: Access Modes
sidebar_position: 2
---

# Configure Access Modes

This document describes how to configure the access modes of a Dataset. The access modes supported by Fluid are a subset of the [access modes of PersistentVolumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes). Currently, Fluid supports the following two access modes, which provide read-only and read-write data access respectively:

- `ReadOnlyMany`: The Dataset can be mounted as read-only by many nodes.
- `ReadWriteMany`: The Dataset can be mounted as read-write by many nodes.

The access modes of a Dataset are specified in `spec.accessModes` when the Dataset is created. The PersistentVolume and PersistentVolumeClaim that Fluid creates for the Dataset use the same access modes.

## Read-Only Datasets

Datasets in Fluid are **read-only by default** for two reasons. On the one hand, the ML/AI and big data applications that Fluid targets only need to read files without modifying them in most cases. On the other hand, in read-only scenarios, Fluid automatically configures each Runtime with parameters that are more suitable for read operations, which improves the read performance of applications.

:::warning[Read performance vs. cache consistency]

Optimizations for read-only scenarios may cause **cache consistency issues**. For example, changes in the underlying storage may not be reflected in the cache of the Runtime in time, and file metadata cached by clients may also delay the synchronization with the cache of the Runtime. Ultimate read performance and strong consistency cannot be achieved at the same time. **Choose a balance between read performance and cache consistency according to the characteristics of your workloads.**

:::

An example of a read-only Dataset:

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

## Read-Write Datasets

When a Dataset uses the read-write access mode, Fluid configures each Runtime with parameters that are more suitable for read-write scenarios. This usually means better cache consistency, but reading data from the Dataset may be relatively slower.

An example of a read-write Dataset:

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
