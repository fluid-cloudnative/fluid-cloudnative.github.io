(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{437:function(a,t,s){"use strict";s.r(t);var e=s(19),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"示例-使用fluid加速pvc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-使用fluid加速pvc"}},[a._v("#")]),a._v(" 示例 - 使用Fluid加速PVC")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/accelerate_pvc.mp4",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/accelerate_pvc.jfif",alt:""}}),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"测试场景-resnet50-模型训练"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试场景-resnet50-模型训练"}},[a._v("#")]),a._v(" 测试场景：ResNet50 模型训练")]),a._v(" "),t("ul",[t("li",[a._v("测试机型： V100 x8")]),a._v(" "),t("li",[a._v("容量型nfs")])]),a._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),t("h3",{attrs:{id:"硬件配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬件配置"}},[a._v("#")]),a._v(" 硬件配置")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Cluster")]),a._v(" "),t("th",[a._v("Alibaba Cloud Kubernetes. v1.16.9-aliyun.1")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("ECS实例")]),a._v(" "),t("td",[a._v("ECS   规格：ecs.gn6v-c10g1.20xlarge"),t("br"),a._v("    CPU：82核")])]),a._v(" "),t("tr",[t("td",[a._v("分布式存储")]),a._v(" "),t("td",[a._v("容量型NAS")])])])]),a._v(" "),t("h3",{attrs:{id:"软件配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件配置"}},[a._v("#")]),a._v(" 软件配置")]),a._v(" "),t("p",[a._v("软件版本： 0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6")]),a._v(" "),t("h2",{attrs:{id:"前提条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid",target:"_blank",rel:"noopener noreferrer"}},[a._v("Fluid"),t("OutboundLink")],1),a._v(" (version >= 0.3.0)")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/kubeflow/arena",target:"_blank",rel:"noopener noreferrer"}},[a._v("Arena"),t("OutboundLink")],1),a._v("（version >= 0.4.0）")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/horovod/horovod",target:"_blank",rel:"noopener noreferrer"}},[a._v("Horovod"),t("OutboundLink")],1),a._v(" (version=0.18.1)")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/tensorflow/benchmarks/tree/cnn_tf_v1.14_compatible",target:"_blank",rel:"noopener noreferrer"}},[a._v("Benchmark"),t("OutboundLink")],1)])]),a._v(" "),t("h2",{attrs:{id:"数据准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据准备"}},[a._v("#")]),a._v(" 数据准备")]),a._v(" "),t("ol",[t("li",[a._v("下载数据集")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" http://imagenet-tar.oss-cn-shanghai.aliyuncs.com/imagenet.tar.gz\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[a._v("解压数据集")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" pigz "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-xvf")]),a._v(" imagenet.tar.gz\n")])])]),t("h2",{attrs:{id:"nfs-dawnbench测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nfs-dawnbench测试"}},[a._v("#")]),a._v(" NFS dawnbench测试")]),a._v(" "),t("h3",{attrs:{id:"部署数据集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署数据集"}},[a._v("#")]),a._v(" 部署数据集")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("在NFS Server中挂载数据集")])]),a._v(" "),t("li",[t("p",[a._v("使用Kubernetes创建nfs的volume")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" nfs.yaml")]),a._v("\napiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: nfs-imagenet\nspec:\n  capacity:\n    storage: 150Gi\n  volumeMode: Filesystem\n  accessModes:\n  - ReadOnlyMany\n  persistentVolumeReclaimPolicy: Retain\n  storageClassName: nfs\n  mountOptions:\n  - vers=3\n  - nolock\n  - proto=tcp\n  - rsize=1048576\n  - wsize=1048576\n  - hard\n  - timeo=600\n  - retrans=2\n  - noresvport\n  - nfsvers=4.1\n  nfs:\n    path: <YOUR_PATH_TO_DATASET>\n    server: <YOUR_NFS_SERVER>\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: nfs-imagenet\nspec:\n  accessModes:\n  - ReadOnlyMany\n  resources:\n    requests:\n      storage: 150Gi\n  storageClassName: nfs\nEOF")]),a._v("\n")])])]),t("blockquote",[t("p",[t("strong",[a._v("NOTE:")])]),a._v(" "),t("p",[a._v("修改上述yaml文件中的nfs的server和path为您的nfs server地址和挂载路径。")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" nfs.yaml\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("检查Kubernetes是否正常创建volume")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl get pv,pvc\nNAME                            CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                  STORAGECLASS   REASON   AGE\npersistentvolume/nfs-imagenet   150Gi      ROX            Retain           Bound    default/nfs-imagenet   nfs                     45s\n\nNAME                                 STATUS   VOLUME         CAPACITY   ACCESS MODES   STORAGECLASS   AGE\npersistentvolumeclaim/nfs-imagenet   Bound    nfs-imagenet   150Gi      ROX            nfs            45s\n")])])]),t("h3",{attrs:{id:"dawnbench"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dawnbench"}},[a._v("#")]),a._v(" dawnbench")]),a._v(" "),t("h4",{attrs:{id:"单机八卡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单机八卡"}},[a._v("#")]),a._v(" 单机八卡")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("arena submit mpi "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" horovod-resnet50-v2-1x8-nfs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--gpus")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--workers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --working-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/horovod-demo/tensorflow-demo/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--data")]),a._v(" nfs-imagenet:/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DATA_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/imagenet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("num_batch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("datasets_num_private_threads")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    ./launch-example.sh "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n")])])]),t("h4",{attrs:{id:"四机八卡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四机八卡"}},[a._v("#")]),a._v(" 四机八卡")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("arena submit mpi "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" horovod-resnet50-v2-4x8-nfs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--gpus")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--workers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --working-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/horovod-demo/tensorflow-demo/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--data")]),a._v(" nfs-imagenet:/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DATA_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/imagenet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("num_batch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("datasets_num_private_threads")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    ./launch-example.sh "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n")])])]),t("blockquote",[t("p",[t("strong",[a._v("NOTE:")])]),a._v(" "),t("p",[a._v("训练完成后，arena保留了laucher，可能导致nfs删不掉。请在提交nfs删除命令后执行如下命令：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl patch pvc nfs-imagenet  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"metadata":{"finalizers": []}}\'')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("merge\n")])])])]),a._v(" "),t("h2",{attrs:{id:"fluid加速pvc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid加速pvc"}},[a._v("#")]),a._v(" Fluid加速PVC")]),a._v(" "),t("h3",{attrs:{id:"部署数据集-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署数据集-2"}},[a._v("#")]),a._v(" 部署数据集")]),a._v(" "),t("ol",[t("li",[a._v("按照前述步骤创建NFS的volume")]),a._v(" "),t("li",[a._v("部署Fluid加速刚才创建的PVC")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" dataset.yaml")]),a._v('\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: fluid-imagenet\nspec:\n  mounts:\n  - mountPoint: pvc://nfs-imagenet\n    name: nfs-imagenet\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: aliyun.accelerator/nvidia_name\n              operator: In\n              values:\n                - Tesla-V100-SXM2-16GB\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: fluid-imagenet\nspec:\n  replicas: 4\n  data:\n    replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: SSD\n        path: /var/lib/docker/alluxio\n        quota: 150Gi\n        high: "0.99"\n        low: "0.8"\nEOF')]),a._v("\n")])])]),t("blockquote",[t("p",[t("strong",[a._v("NOTE:")])]),a._v(" "),t("ul",[t("li",[t("code",[a._v("spec.replicas")]),a._v("和dawnbench测试的worker数量保持一致。比如：单机八卡为1，四机八卡为4。")]),a._v(" "),t("li",[t("code",[a._v("nodeSelectorTerms")]),a._v("作用是限制在有V100显卡的机器上部署数据集，此处应根据实验环境具体调节。")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" dataset.yaml\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("检查部署")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ kubectl get pv,pvc\nNAME                              CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                    STORAGECLASS   REASON   AGE\npersistentvolume/fluid-imagenet   100Gi      RWX            Retain           Bound    default/fluid-imagenet                           1s\npersistentvolume/nfs-imagenet     150Gi      ROX            Retain           Bound    default/nfs-imagenet     nfs                     16m\n\nNAME                                   STATUS   VOLUME           CAPACITY   ACCESS MODES   STORAGECLASS   AGE\npersistentvolumeclaim/fluid-imagenet   Bound    fluid-imagenet   100Gi      RWX                           0s\npersistentvolumeclaim/nfs-imagenet     Bound    nfs-imagenet     150Gi      ROX            nfs            16m\n")])])]),t("h3",{attrs:{id:"dawnbench-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dawnbench-2"}},[a._v("#")]),a._v(" dawnbench")]),a._v(" "),t("h4",{attrs:{id:"单机八卡-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单机八卡-2"}},[a._v("#")]),a._v(" 单机八卡")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("arena submit mpi "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" horovod-resnet50-v2-1x8-fluid "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--gpus")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--workers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --working-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/horovod-demo/tensorflow-demo/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--data")]),a._v(" fluid-imagenet:/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DATA_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/nfs-imagenet/imagenet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("num_batch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("datasets_num_private_threads")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    ./launch-example.sh "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n")])])]),t("h4",{attrs:{id:"四机八卡-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四机八卡-2"}},[a._v("#")]),a._v(" 四机八卡")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("arena submit mpi "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" horovod-resnet50-v2-4x8-fluid "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--gpus")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--workers")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --working-dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/horovod-demo/tensorflow-demo/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--data")]),a._v(" fluid-imagenet:/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DATA_DIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/nfs-imagenet/imagenet "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("num_batch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("datasets_num_private_threads")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--image")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("registry.cn-hangzhou.aliyuncs.com/tensorflow-samples/horovod-benchmark-dawnbench-v2:0.18.1-tf1.14.0-torch1.2.0-mxnet1.5.0-py3.6 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    ./launch-example.sh "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("4")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v("\n")])])]),t("h2",{attrs:{id:"测试结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试结果"}},[a._v("#")]),a._v(" 测试结果")]),a._v(" "),t("h3",{attrs:{id:"horovod-1x8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#horovod-1x8"}},[a._v("#")]),a._v(" horovod-1x8")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th"),a._v(" "),t("th",[a._v("nfs")]),a._v(" "),t("th",[a._v("fluid (cold)")]),a._v(" "),t("th",[a._v("fluid (warm)")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("训练时间")]),a._v(" "),t("td",[a._v("3h49m10s")]),a._v(" "),t("td",[a._v("3h50m40s")]),a._v(" "),t("td",[a._v("3h34m15s")])]),a._v(" "),t("tr",[t("td",[a._v("1000步速度(images/second)")]),a._v(" "),t("td",[a._v("2400.8")]),a._v(" "),t("td",[a._v("2378.4")]),a._v(" "),t("td",[a._v("9327.6")])]),a._v(" "),t("tr",[t("td",[a._v("最终速度(images/second)")]),a._v(" "),t("td",[a._v("8696.8")]),a._v(" "),t("td",[a._v("8692.8")]),a._v(" "),t("td",[a._v("9301.6")])]),a._v(" "),t("tr",[t("td",[a._v("steps")]),a._v(" "),t("td",[a._v("56300")]),a._v(" "),t("td",[a._v("56300")]),a._v(" "),t("td",[a._v("56300")])]),a._v(" "),t("tr",[t("td",[a._v("Accuracy @ 5")]),a._v(" "),t("td",[a._v("0.9282")]),a._v(" "),t("td",[a._v("0.9286")]),a._v(" "),t("td",[a._v("0.9285")])])])]),a._v(" "),t("h3",{attrs:{id:"horovod-4x8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#horovod-4x8"}},[a._v("#")]),a._v(" horovod-4x8")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th"),a._v(" "),t("th",[a._v("nfs")]),a._v(" "),t("th",[a._v("fluid (cold)")]),a._v(" "),t("th",[a._v("fluid (warm)")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("训练时间")]),a._v(" "),t("td",[a._v("2h15m59s")]),a._v(" "),t("td",[a._v("1h43m43s")]),a._v(" "),t("td",[a._v("1h32m22s")])]),a._v(" "),t("tr",[t("td",[a._v("1000步速度(images/second)")]),a._v(" "),t("td",[a._v("3136")]),a._v(" "),t("td",[a._v("8889.6")]),a._v(" "),t("td",[a._v("20859.5")])]),a._v(" "),t("tr",[t("td",[a._v("最终速度(images/second)")]),a._v(" "),t("td",[a._v("15024")]),a._v(" "),t("td",[a._v("20506.3")]),a._v(" "),t("td",[a._v("21329")])]),a._v(" "),t("tr",[t("td",[a._v("steps")]),a._v(" "),t("td",[a._v("14070")]),a._v(" "),t("td",[a._v("14070")]),a._v(" "),t("td",[a._v("14070")])]),a._v(" "),t("tr",[t("td",[a._v("Accuracy @ 5")]),a._v(" "),t("td",[a._v("0.9228")]),a._v(" "),t("td",[a._v("0.9204")]),a._v(" "),t("td",[a._v("0.9243")])])])]),a._v(" "),t("h2",{attrs:{id:"结果分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果分析"}},[a._v("#")]),a._v(" 结果分析")]),a._v(" "),t("p",[a._v("从测试结果来看，单机八卡通过Fluid加速效果并没有明显的效果，但是在四机八卡的场景下Fluid加速效果非常明显。在热数据的场景下，可以缩短训练时间 (135-92)/135 = 31 %; 在冷数据场景下可以缩短训练时间 （135-103）/135 = 23 % 。 这是由于四机八卡下，NFS的带宽成为了瓶颈；而Fluid基于Alluxio提供了分布式缓存的P2P数据读取能力。")])])}),[],!1,null,null,null);t.default=r.exports}}]);