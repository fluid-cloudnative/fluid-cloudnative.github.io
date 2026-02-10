---
sidebar_label: Amazon's Case Study
sidebar_position: 6
---

# Amazon's Case Study

*By Amazon EKS User Guide*

> This topic describes how to configure and use Amazon EKS with P6e-GB200 UltraServers. The p6e-gb200.36xlarge instance type with 4 NVIDIA Blackwell GPUs is only available as P6e-GB200 UltraServers. There are two types of P6e-GB200 UltraServers. The u-p6e-gb200x36 UltraServer has 9 p6e-gb200.36xlarge instances and the u-p6e-gb200x72 UltraServer has 18 p6e-gb200.36xlarge instances.

## Considerations

- Amazon EKS supports P6e-GB200 UltraServers for Kubernetes versions 1.33 and above. This Kubernetes version release provides support for [Dynamic Resource Allocation](https://kubernetes.io/docs/concepts/scheduling-eviction/dynamic-resource-allocation/) (DRA), enabled by default in EKS and in the [AL2023 EKS-optimized accelerated AMIs](https://docs.aws.amazon.com/eks/latest/userguide/ml-eks-optimized-ami.html). DRA is a requirement to use the P6e-GB200 UltraServers with EKS. DRA is not supported in Karpenter or EKS Auto Mode, and it is recommended to use EKS self-managed node groups or EKS managed node groups when using the P6e-GB200 UltraServers with EKS.
- P6e-GB200 UltraServers are made available through [EC2 Capacity Blocks for ML](https://aws.amazon.com/ec2/capacityblocks/). See [Manage compute resources for AI/ML workloads on Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/ml-compute-management.html) for information on how to launch EKS nodes with Capacity Blocks.
- When using EKS managed node groups with Capacity Blocks, you must use custom launch templates. When upgrading EKS managed node groups with P6e-GB200 UltraServers, you must set the desired size of the node group to 0 before upgrading.
- It is recommended to use the AL2023 ARM NVIDIA variant of the EKS-optimized accelerated AMIs. This AMI includes the required node components and configuration to work with P6e-GB200 UltraServers. If you decide to build your own AMI, you are responsible for installing and validating the compatibility of the node and system software, including drivers. For more information, see [Use EKS-optimized accelerated AMIs for GPU instances](https://docs.aws.amazon.com/eks/latest/userguide/ml-eks-optimized-ami.html).
- It is recommended to use EKS-optimized AMI release v20251103 or later, which includes NVIDIA driver version 580. This NVIDIA driver version enables Coherent Driver-Based Memory Memory (CDMM) to address potential memory over-reporting. When CDMM is enabled, the following capabilities are not supported: NVIDIA Multi-Instance GPU (MIG) and vGPU. For more information on CDMM, see [NVIDIA Coherent Driver-based Memory Management (CDMM)](https://nvdam.widen.net/s/gpqp6wmz7s/cuda-whitepaper%E2%80%94%E2%80%8Bcdmm-pdf).
- When using the [NVIDIA GPU operator](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/overview.html) with the EKS-optimized AL2023 NVIDIA AMI, you must disable the operator installation of the driver and toolkit, as these are already included in the AMI. The EKS-optimized AL2023 NVIDIA AMIs do not include the NVIDIA Kubernetes device plugin or the NVIDIA DRA driver, and these must be installed separately.
- Each p6e-gb200.36xlarge instance can be configured with up to 17 network cards and can leverage EFA for communication between UltraServers. Workload network traffic can cross UltraServers, but for highest performance it is recommended to schedule workloads in the same UltraServer leveraging IMEX for intra-UltraServer GPU communication. For more information, see [EFA configuration for P6e-GB200 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa-acc-inst-types.html#efa-for-p6e).
- Each p6e-gb200.36xlarge instance has 3x 7.5TB [instance store storage](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html). By default, the EKS-optimized AMI does not format and mount the instance stores. The node’s ephemeral storage can be shared among pods that request ephemeral storage and container images that are downloaded to the node. If using the AL2023 EKS-optimized AMI, this can be configured as part of the nodes bootstrap in the user data by setting the instance local storage policy in [NodeConfig](https://docs.aws.amazon.com/eks/latest/eksctl/node-bootstrapping.html#configuring-the-bootstrapping-process) to RAID0. Setting to RAID0 stripes the instance stores and configures the container runtime and kubelet to make use of this ephemeral storage.

## Components

The following components are recommended for running workloads on EKS with the P6e-GB200 UltraServers. You can optionally use the [NVIDIA GPU operator](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/overview.html) to install the NVIDIA node components. When using the NVIDIA GPU operator with the EKS-optimized AL2023 NVIDIA AMI, you must disable the operator installation of the driver and toolkit, as these are already included in the AMI.

<table>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>Stack</td>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>Component</td>
  </tr>

  <tr>
    <td rowSpan="8" style={{ padding: '8px', verticalAlign: 'middle' }}>EKS-optimized accelerated AMI</td>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>Kernel 6.12</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>NVIDIA GPU driver</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>NVIDIA CUDA user mode driver</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>NVIDIA container toolkit</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>NVIDIA fabric manager</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>NVIDIA IMEX driver</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>NVIDIA NVLink Subnet Manager</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>EFA driver</td>
  </tr>

  <tr>
    <td rowSpan="6" style={{ padding: '8px', verticalAlign: 'middle' }}>Components running on node</td>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>VPC CNI</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>EFA device plugin</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>NVIDIA K8s device plugin</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>NVIDIA DRA driver</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>NVIDIA Node Feature Discovery (NFD)</td>
  </tr>
  <tr>
    <td style={{ padding: '8px', verticalAlign: 'middle' }}>NVIDIA GPU Feature Discovery (GFD)</td>
  </tr>
</table>

The node components in the table above perform the following functions:

- **VPC CNI**: Allocates VPC IPs as the primary network interface for pods running on EKS
- **EFA device plugin**: Allocates EFA devices as secondary networks for pods running on EKS. Responsible for network traffic across P6e-GB200 UltraServers. For multi-node workloads, for GPU-to-GPU within an UltraServer can flow over multi-node NVLink.
- **NVIDIA Kubernetes device plugin**: Allocates GPUs as devices for pods running on EKS. It is recommended to use the NVIDIA Kubernetes device plugin until the NVIDIA DRA driver GPU allocation functionality graduates from experimental. See the [NVIDIA DRA driver releases](https://github.com/NVIDIA/k8s-dra-driver-gpu/releases) for updated information.
- **NVIDIA DRA driver**: Enables ComputeDomain custom resources that facilitate creation of IMEX domains that follow workloads running on P6e-GB200 UltraServers.
  - The ComputeDomain resource describes an Internode Memory Exchange (IMEX) domain. When workloads with a ResourceClaim for a ComputeDomain are deployed to the cluster, the NVIDIA DRA driver automatically creates an IMEX DaemonSet that runs on matching nodes and establishes the IMEX channel(s) between the nodes before the workload is started. To learn more about IMEX, see [overview of NVIDIA IMEX for multi-node NVLink systems](https://docs.nvidia.com/multi-node-nvlink-systems/imex-guide/overview.html).
  - The NVIDIA DRA driver uses a clique ID label (nvidia.com/gpu.clique) applied by NVIDIA GFD that relays the knowledge of the network topology and NVLink domain.
  - It is a best practice to create a ComputeDomain per workload job.
- **NVIDIA Node Feature Discovery (NFD)**: Required dependency for GFD to apply node labels based on discovered node-level attributes.
- **NVIDIA GPU Feature Discovery (GFD)**: Applies an NVIDIA standard topology label called nvidia.com/gpu.clique to the nodes. Nodes within the same nvidia.com/gpu.clique have multi-node NVLink-reachability, and you can use pod affinities in your application to schedule pods to the same NVlink domain.

## Procedure

The following section assumes you have an EKS cluster running Kubernetes version 1.33 or above with one or more node groups with P6e-GB200 UltraServers running the AL2023 ARM NVIDIA EKS-optimized accelerated AMI. See the links in [Manage compute resources for AI/ML workloads on Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/ml-compute-management.html) for the prerequisite steps for EKS self-managed nodes and managed node groups.

The following procedure uses the components below.

<table style={{borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif'}}>

  <tr>
    <th style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>Name</th>
    <th style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>Version</th>
    <th style={{padding: '10px', textAlign: 'center', border: '1px solid #ddd'}}>Description</th>
  </tr>

  <tr>
    <td style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>NVIDIA GPU Operator</td>
    <td style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>25.3.4+</td>
    <td style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>For lifecycle management of required plugins such as NVIDIA Kubernetes device plugin and NFD/GFD.</td>
  </tr>

  <tr>
    <td style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>NVIDIA DRA Drivers</td>
    <td style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>25.8.0+</td>
    <td style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>For ComputeDomain CRDs and IMEX domain management.</td>
  </tr>

  <tr>
    <td style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>EFA Device Plugin</td>
    <td style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>0.5.14+</td>
    <td style={{padding: '10px', textAlign: 'left', border: '1px solid #ddd'}}>For cross-UltraServer communication.</td>
  </tr>
</table>

## Install NVIDIA GPU Operator

The NVIDIA GPU operator simplifies the management of components required to use GPUs in Kubernetes clusters. As the NVIDIA GPU driver and container toolkit are installed as part of the EKS-optimized accelerated AMI, these must be set to false in the Helm values configuration.

1. Create a Helm values file named gpu-operator-values.yaml with the following configuration.

```yaml
devicePlugin:
  enabled: true
nfd:
  enabled: true
gfd:
  enabled: true
driver:
  enabled: false
toolkit:
  enabled: false
migManager:
  enabled: false
```

2. Install the NVIDIA GPU operator for your cluster using the gpu-operator-values.yaml file you created in the previous step.

```shell
helm repo add nvidia https://helm.ngc.nvidia.com/nvidia
helm repo update
```

```shell
helm install gpu-operator nvidia/gpu-operator \
 --namespace gpu-operator \
 --create-namespace \
 --version v25.3.4 \
 --values gpu-operator-values.yaml
```

## Install NVIDIA DRA driver

As of NVIDIA GPU operator version v25.3.4, the NVIDIA DRA driver must be installed separately. It is recommended to track the NVIDIA GPU operator [release notes](https://github.com/NVIDIA/gpu-operator/releases) as this may change in a future release.

1. Create a Helm values file named dra-values.yaml with the following configuration. Note the nodeAffinity and tolerations that configures the DRA driver to deploy only on nodes with an NVIDIA GPU.

```yaml
resources:
  gpus:
    enabled: false # set to false to disable experimental gpu support
  computeDomains:
    enabled: true

controller:
  nodeSelector: null
  affinity: null
  tolerations: []

kubeletPlugin:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
        - matchExpressions:
          - key: "nvidia.com/gpu.present"
            operator: In
            values:
            - "true"
  tolerations:
    - key: "nvidia.com/gpu"
      operator: Exists
      effect: NoSchedule
```

2. Install the NVIDIA DRA driver for your cluster using the dra-values.yaml file you created in the previous step.

```shell
helm repo add nvidia https://helm.ngc.nvidia.com/nvidia
helm repo update
```

```shell
helm install nvidia-dra-driver-gpu nvidia/nvidia-dra-driver-gpu \
  --version="25.8.0" \
  --namespace nvidia-dra-driver-gpu \
  --create-namespace \
  -f dra-values.yaml
```

3. After installation, the DRA driver creates DeviceClass resources that enable Kubernetes to understand and allocate ComputeDomain resources, making the IMEX management possible for distributed GPU workloads on P6e-GB200 UltraServers.
Confirm the DRA resources are available with the following commands.

```shell
kubectl api-resources | grep resource.k8s.io
```

```shell
deviceclasses           resource.k8s.io/v1  false        DeviceClass
resourceclaims          resource.k8s.io/v1  true         ResourceClaim
resourceclaimtemplates  resource.k8s.io/v1  true         ResourceClaimTemplate
resourceslices          resource.k8s.io/v1  false        ResourceSlice
```

```shell
kubectl get deviceclasses
```

```shell
NAME
compute-domain-daemon.nvidia.com
compute-domain-default-channel.nvidia.com
```

## Install the EFA device plugin

To use EFA communication between UltraServers, you must install the Kubernetes device plugin for EFA. P6e-GB200 instances can be configured with up to [17 network cards](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa-acc-inst-types.html#efa-for-p6e) and the primary NCI (index 0) must be of type interface and supports up to 100 Gbps of ENA bandwidth. Configure your EFA and ENA interfaces as per your requirements during node provisioning. Review the [EFA configuration for a P6e-GB200 instances AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa-acc-inst-types.html#efa-for-p6e) for more details on EFA configuration.

1. Create a Helm values file named efa-values.yaml with the following configuration.

```yaml
tolerations:
  - key: nvidia.com/gpu
    operator: Exists
    effect: NoSchedule
```

2. Install the NVIDIA DRA operator for your cluster using the dra-values.yaml file you created in the previous step.

```shell
helm repo add eks https://aws.github.io/eks-charts
helm repo update
```

```shell
helm install efa eks/aws-efa-k8s-device-plugin -n kube-system \
  --version="0.5.14" \
  -f efa-values.yaml
```

As an example, if you configured your instances with 1 efa-only interface in each [NCI group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa-acc-inst-types.html#efa-for-p6e), when describing a node, it is expected to see 4 allocatable EFA devices per node.

```shell
kubectl describe node/<gb200-node-name>
```

```yaml
Capacity:
  ...
  vpc.amazonaws.com/efa:  4
Allocatable:
  ...
  vpc.amazonaws.com/efa:  4
```

## Validate IMEX over Multi-Node NVLink

For a multi-node NVLINK NCCL test and other micro-benchmarks review the [awesome-distributed-training](https://github.com/aws-samples/awsome-distributed-training/tree/main/micro-benchmarks/nccl-tests) GitHub repository. The following steps show how to run a multi-node NVLink test with nvbandwidth.

1. To run a multi-node bandwidth test across two nodes in the NVL72 domain, first install the MPI operator:

```shell
kubectl create -f https://github.com/kubeflow/mpi-operator/releases/download/v0.7.0/mpi-operator.yaml
```

2. Create a Helm values file named nvbandwidth-test-job.yaml that defines the test manifest. Note the nvidia.com/gpu.clique pod affinity to schedule the workers in the same NVLink domain which has Multi-Node NVLink reachability.
As of NVIDIA DRA Driver version v25.8.0 ComputeDomains are elastic and .spec.numNodes can be set to 0 in the ComputeDomain definition. Review the latest [NVIDIA DRA Driver release notes](https://github.com/NVIDIA/k8s-dra-driver-gpu) for updates.

```yaml
---
apiVersion: resource.nvidia.com/v1beta1
kind: ComputeDomain
metadata:
  name: nvbandwidth-test-compute-domain
spec:
  numNodes: 0 # This can be set to 0 from NVIDIA DRA Driver version v25.8.0+
  channel:
    resourceClaimTemplate:
      name: nvbandwidth-test-compute-domain-channel

---
apiVersion: kubeflow.org/v2beta1
kind: MPIJob
metadata:
  name: nvbandwidth-test
spec:
  slotsPerWorker: 4 # 4 GPUs per worker node
  launcherCreationPolicy: WaitForWorkersReady
  runPolicy:
    cleanPodPolicy: Running
  sshAuthMountPath: /home/mpiuser/.ssh
  mpiReplicaSpecs:
    Launcher:
      replicas: 1
      template:
        metadata:
          labels:
            nvbandwidth-test-replica: mpi-launcher
        spec:
          containers:
          - image: ghcr.io/nvidia/k8s-samples:nvbandwidth-v0.7-8d103163
            name: mpi-launcher
            securityContext:
              runAsUser: 1000
            command:
            - mpirun
            args:
            - --bind-to
            - core
            - --map-by
            - ppr:4:node
            - -np
            - "8"
            - --report-bindings
            - -q
            - nvbandwidth
            - -t
            - multinode_device_to_device_memcpy_read_ce
    Worker:
      replicas: 2 # 2 worker nodes
      template:
        metadata:
          labels:
            nvbandwidth-test-replica: mpi-worker
        spec:
          affinity:
            podAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
              - labelSelector:
                  matchExpressions:
                  - key: nvbandwidth-test-replica
                    operator: In
                    values:
                    - mpi-worker
                topologyKey: nvidia.com/gpu.clique
          containers:
          - image: ghcr.io/nvidia/k8s-samples:nvbandwidth-v0.7-8d103163
            name: mpi-worker
            securityContext:
              runAsUser: 1000
            env:
            command:
            - /usr/sbin/sshd
            args:
            - -De
            - -f
            - /home/mpiuser/.sshd_config
            resources:
              limits:
                nvidia.com/gpu: 4  # Request 4 GPUs per worker
              claims:
              - name: compute-domain-channel # Link to IMEX channel
          resourceClaims:
          - name: compute-domain-channel
            resourceClaimTemplateName: nvbandwidth-test-compute-domain-channel
```

3. Create the ComputeDomain and start the job with the following command.

```shell
kubectl apply -f nvbandwidth-test-job.yaml
```

4. ComputeDomain creation, you can see the workload’s ComputeDomain has two nodes:

```shell
kubectl get computedomains.resource.nvidia.com -o yaml
```

```yaml
status:
  nodes:
  - cliqueID: <ClusterUUID>.<Clique ID>
    ipAddress: <node-ip>
    name: <node-hostname>
  - cliqueID: <ClusterUUID>.<Clique ID>
    ipAddress: <node-ip>
    name: <node-hostname>
  status: Ready
```

5. Review the results of the job with the following command.

```shell
kubectl logs --tail=-1 -l job-name=nvbandwidth-test-launcher
```

6. When the test is complete, delete it with the following command.

```shell
kubectl delete -f nvbandwidth-test-job.yaml
```
