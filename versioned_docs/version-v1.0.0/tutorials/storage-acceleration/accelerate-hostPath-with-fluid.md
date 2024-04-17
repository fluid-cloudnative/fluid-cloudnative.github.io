---
sidebar_label: Accelerate HostPath with Fluid
sidebar_position: 1
---

# Accelerate HostPath with Fluid

## Scenario: training ResNet50

- Device： V100 x8
- NFS Server：38037492dc-pol25.cn-shanghai.nas.aliyuncs.com

## Configuration

### Hardware Configuration

| Cluster | Alibaba Cloud Kubernetes. v1.16.9-aliyun.1             |
| ------- | ------------------------------------------------------ |
| ECS Instance | ECS specifications：ecs.gn6v-c10g1.20xlarge<br />    CPU：82 cores |
| Distributed Storage|    NAS                                          |

### Software Configuration

Software version: 0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6

## Prerequisites

- [Fluid](https://github.com/fluid-cloudnative/fluid) (version >= 0.3.0)
- [Arena](https://github.com/kubeflow/arena)（version >= 0.4.0）
- [Horovod](https://github.com/horovod/horovod) (version=0.18.1)
- [Benchmark](https://github.com/tensorflow/benchmarks/tree/cnn_tf_v1.14_compatible)

## Known Constraints

- Implementing mounts via hostPath is not the recommended way, as it relies on mount point maintenance methods outside of Kubernetes, which are actually unreliable and can trigger data inconsistency issues.

## Data Preparation

1. Download the dataset

```bash
$ wget http://imagenet-tar.oss-cn-shanghai.aliyuncs.com/imagenet.tar.gz
```

2. Extract the dataset

```bash
$ tar -I pigz -xvf imagenet.tar.gz
```

## NFS dawnbench

### Deploy Dataset

1. Mount the dataset on the NFS Server
2. Mount NFS to a host path

```
$ sudo mount -t nfs -o vers=3,nolock,proto=tcp,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2,noresvport <YOUR_NFS_SERVER>:<YOUR_PATH_TO_DATASET> /mnt/nfs-imagenet
```

3. Check if NFS has been successfully mounted

```
$ mount | grep nfs
<YOUR_NFS_SERVER>:<YOUR_PATH_TO_DATASET> on /mnt/nfs-imagenet type nfs (rw,relatime,vers=3,rsize=1048576,wsize=1048576,namlen=255,hard,nolock,noresvport,proto=tcp,timeo=600,retrans=2,sec=sys,mountaddr=192.168.1.28,mountvers=3,mountport=2049,mountproto=tcp,local_lock=all,addr=192.168.1.28)
```

> **NOTE:** \
> Modify `<YOUR_NFS_SERVER>` and `<YOUR_PATH_TO_DATASET>` in the above commands to your nfs server address and mount path.


### Dawnbench

#### Single machine with eight GPUs

```
arena submit mpijob \
--name horovod-v2-nfs-hostpath-1x8-093000 \
--gpus=8 \
--workers=1 \
--working-dir=/horovod-demo/tensorflow-demo/ \
--data-dir /mnt/nfs-imagenet:/data \
-e DATA_DIR=/data/imagenet \
-e num_batch=1000 \
-e datasets_num_private_threads=8 \
--image=registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 \
./launch-example.sh 1 8
```

#### Four machines with eight GPUs
```
arena submit mpi \
--name horovod-v2-nfs-hostpath-4x8-092921 \
--gpus=8 \
--workers=4 \ 
--working-dir=/horovod-demo/tensorflow-demo/ \ 
--data-dir /mnt/nfs-imagenet:/data \
-e DATA_DIR=/data/imagenet \
-e num_batch=1000 \
-e datasets_num_private_threads=8 \
--image=registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 \
./launch-example.sh 4 8
```

## Accelerate hostPath with Fluid

### Deploy Dataset
1. Follow the previous steps to complete NFS mounting
2. Deploy Fluid to accelerate hostPath mounted NFS

```yaml
$ cat <<EOF > dataset.yaml
apiVersion: data.fluid.io/v1alpha1
kind: Dataset
metadata:
  name: imagenet
spec:
  mounts:
  - mountPoint: local:///mnt/nfs-imagenet
    name: imagenet
  nodeAffinity:
    required:
      nodeSelectorTerms:
        - matchExpressions:
            - key: aliyun.accelerator/nvidia_name
              operator: In
              values:
                - Tesla-V100-SXM2-16GB
---
apiVersion: data.fluid.io/v1alpha1
kind: AlluxioRuntime
metadata:
  name: imagenet
spec:
  replicas: 4
  data:
    replicas: 1
  tieredstore:
    levels:
      - mediumtype: MEM
        path: /alluxio/ram 
        quota: 50Gi
        high: "0.99"
        low: "0.8"
EOF
```

> **NOTE:**\
> - `mounts.mountPoint` specifies the host path to be mounted by the `local://` prefix (e.g. `/mnt/nfs-imagenet`)
> - Keep the number of workers for `spec.replicas` and dawnbench consistent. For example: 1 for a single machine with eight GPUs, 4 for four machines with eight GPUs
> - `nodeSelectorTerms` is to restrict the deployment of the dataset to machines with V100, which should be adjusted according to the experimental environment.

```
$ kubectl create -f dataset.yaml
```

3. Check the deployment

```
$ kubectl get pv,pvc
NAME                        CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM              STORAGECLASS   REASON   AGE
persistentvolume/imagenet   100Gi      RWX            Retain           Bound    default/imagenet                           3h28m

NAME                             STATUS   VOLUME     CAPACITY   ACCESS MODES   STORAGECLASS   AGE
persistentvolumeclaim/imagenet   Bound    imagenet   100Gi      RWX                           3h28m
```

### Dawnbench

#### Single machine with eight GPUs

```
arena submit mpi \
--name horovod-v2-nfs-fluid-1x8-093009 \
--gpus=8 \
--workers=1 \
--working-dir=/horovod-demo/tensorflow-demo/ \
--data imagenet:/data \
-e DATA_DIR=/data/imagenet/imagenet \
-e num_batch=1000 \
-e datasets_num_private_threads=8 \
--image=registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 \
./launch-example.sh 1 8
```

#### Four machines with eight GPUs

```
arena submit mpi \
--name horovod-v2-nfs-fluid-4x8-092910 \
--gpus=8 \
--workers=4 \
--working-dir=/horovod-demo/tensorflow-demo/ \
--data imagenet:/data \
-e DATA_DIR=/data/imagenet/imagenet \
-e num_batch=1000 \
-e datasets_num_private_threads=8 \
--image=registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 \
./launch-example.sh 4 8
```



## Experiment Results

### horovod-1x8

|                         | nfs-hostpath | fluid (cold) | fluid (warm) |
| ----------------------- | -------- | ------------ | ------------ |
| Training time                 | 4h20m36s | 4h21m56s     | 4h2m16s     |
| Speed at the 1000 step(images/second) | 2426.4  | 2467.2      | 8959.7      |
| Speed at the last step(images/second) | 8218.1   | 8219.8      | 8275.8      |
| steps                   | 56300    | 56300       | 56300       |
| Accuracy @ 5            | 0.9280   | 0.9288       | 0.9291      |

### horovod-4x8

|                         | nfs-hostpath | fluid (cold) | fluid (warm) |
| ----------------------- | ---------- | ------------ | ------------ |
| Training time                  | 2h9m21s   | 1h40m15s     | 1h29m55s     |
| Speed at the 1000 step(images/second) | 3219.2    | 11067.2      | 21951.3      |
| Speed at the last step(images/second) | 15855.7   | 20964.4      | 21869.8      |
| steps                   | 14070      | 14070        | 14070        |
| Accuracy @ 5            | 0.9227     | 0.9232       | 0.9228       |

## Analysis


From the test results, the Fluid acceleration on 1x8 has no obvious enhancement, 
while in the improvements of 4x8, the effect is very obvious.
In warm data scenario, the training time can be shortened **(129-89)/129 = 31 %**;
In cold data scenario, training time can be shortened **（129-100）/129 = 22 %**.
This is because NFS bandwidth became a bottleneck under 4x8;
Fluid based on Alluxio provides distributed cache data reading capability for P2P data.

