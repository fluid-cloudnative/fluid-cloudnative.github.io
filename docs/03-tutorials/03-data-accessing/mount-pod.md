---
sidebar_label: Access Dataset via Mount Pod
sidebar_position: 1
---

# 访问Dataset中的数据(MountPod挂载模式)

Fluid将会为绑定的Dataset自动创建持久卷声明（PersistentVolumeClaim，PVC），应用Pod可以使用Kubernetes标准的API，指定Fluid创建的PVC作为容器中需要使用的数据卷，从而将运行时引擎的文件系统挂载到容器中的指定目录上。这样，容器可以像访问本地文件一样，经由运行时引擎访问到Dataset中定义的底层存储系统中的文件数据。

Fluid支持两种挂载模式：MountPod挂载模式和Sidecar挂载模式。本章介绍如何使用MountPod挂载模式访问Dataset中的数据。如果需要使用Sidecar挂载模式，请参考[访问Dataset中的数据（Sidecar挂载模式）](./sidecar)