---
sidebar_label: Troubleshooting
sidebar_position: 1
---

# Troubleshooting

You may encounter various problems during installation or development in Fluid. Usually, logs are useful for debugging. But the Runtime containers where Fluid's underlying Distributed Cache Engine is running, are distributed on different hosts under distributed environment, so it's quite annoying to collect these logs one by one. 
To make this troublesome work easier, we provided a shell script to help users collect logs more quickly. This document describes how to use that script.


Alluxio:

```wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-alluxio.sh```

JuiceFS:

```wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-juicefs.sh```

GooseFS:

```wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-goosefs.sh```

JindoFS:

```wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-jindo.sh```


## Diagnose Fluid using Script

1. Fluid provides different diagnostic scripts for different Runtimes, but the usage is the same. You can download the runtime diagnostic scripts you use:

   ```shell
   # Alluxio:
   wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-alluxio.sh
   # JuiceFS:
   wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-juicefs.sh
   # GooseFS:
   wget https://raw.githubusercontent.com/fluid-cloudnative/fluid/master/tools/diagnose-fluid-goosefs.sh
   ```

2. Make sure that script is executable, take `diagnose-fluid-alluxio.sh` as an example:
   
   ```shell
   $ chmod a+x diagnose-fluid-alluxio.sh
   ```

3. Get help message

   ```shell
   $ ./diagnose-fluid-alluxio.sh
   Usage:
       ./diagnose-fluid-alluxio.sh COMMAND [OPTIONS]
   COMMAND:
       help
           Display this help message.
       collect
           Collect pods logs of controller and runtime.
   OPTIONS:
       -r, --name name
           Set the name of runtime.
       -n, --namespace name
           Set the namespace of runtime.
   ```

4. Collect logs

   You can collect all the Runtime container logs for given name and namespace with:

   ```shell
   $ ./diagnose-fluid-alluxio.sh collect --name cifar10 --namespace default
   ```

   > **NOTES**:
   >
   > As you can see from above command and help message, option `--name` and `--namespace` specified the name and namespace of Alluxio Runtime respectively.

   All the logs will be packed in a package under execution path.

## Debug Fuse Pod

If the application Pod is in the `ContainerCreating` or `Pending` state for a long time and cannot be created due to the CSI Plugin issue, it is usually caused by the state of the Fuse Pod in the same node is not correct. You can follow these steps to troubleshoot.

###  Check Application Pods Events

The first step in debugging Fuse is to check the application Pod information. Use the following command to check the current status and recent events of the Pod.

```shell
kubectl describe pods ${POD_NAME}
```

Similar to the following information, but may not be identical, but all point to the reason for FailedMount.

```shell
kubectl describe po nginx-0
...
Events:
  Type     Reason       Age   From               Message
  ----     ------       ----  ----               -------
  Normal   Scheduled    30s   default-scheduler  Successfully assigned default/nginx-0 to testnode
  Warning  FailedMount  1s    kubelet            MountVolume.MountDevice failed for volume "default-shared-data" : rpc error: code = Unknown desc = fuse pod on node testnode is not ready
```

###  Get the information of the Fuse Pod corresponding to this application Pod

At this point you need to check the status of the Fuse Pod of this node, first use the following command to get the information of the node where the current application Pod is located, the output corresponding to the NODE column is the node where the application Pod is located.


```shell
kubectl get pods ${POD_NAME} -owide
```

For example, the following node where Fuse Pod is located is testnode:

```shell
kubectl get pods  nginx-0 -owide
NAME      READY   STATUS              RESTARTS   AGE   IP       NODE                       NOMINATED NODE   READINESS GATES
nginx-0   0/1     ContainerCreating   0          17m   <none>   testnode   <none>           <none>
```


Get this Fuse Pod's detail information:

```shell
 kubectl get po -owide | grep ${NODE_NAME} | grep -i fuse
```


In the following example, the Fuse Pod is `shared-data-alluxio-fuse-w6lcp`, and you can see that the Pod is in a failed state:

```shell
kubectl get po -owide | grep testnode | grep fuse
shared-data-alluxio-fuse-w6lcp   0/1     CrashLoopBackOff    10         29m   192.168.0.233   testnode   <none>           <none>
```

### Troubleshoot the Fuse Pod

You can follow the [Kubernetes documentation](https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/) to troubleshoot the issue with this Fuse Pod.
