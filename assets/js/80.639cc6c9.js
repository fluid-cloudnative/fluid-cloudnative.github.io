(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{441:function(a,e,s){"use strict";s.r(e);var t=s(19),n=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"示例-数据缓存亲和性调度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例-数据缓存亲和性调度"}},[a._v("#")]),a._v(" 示例 - 数据缓存亲和性调度")]),a._v(" "),e("p",[a._v("在Fluid中，"),e("code",[a._v("Dataset")]),a._v("资源对象中所定义的远程文件是可被调度的，这意味着你能够像管理你的Pod一样管理远程文件缓存在Kubernetes集群上的存放位置。另外，Fluid同样支持对于应用的数据缓存亲和性调度，这种调度方式将应用(e.g. 数据分析任务、机器学习任务等)与所需要的数据缓存放置在一起，以尽可能地减少额外的开销。")]),a._v(" "),e("p",[a._v("本文档将向你简单地展示上述特性")]),a._v(" "),e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),e("p",[a._v("在运行该示例之前，请参考"),e("RouterLink",{attrs:{to:"/zh/userguide/install.html"}},[a._v("安装文档")]),a._v("完成安装，并检查Fluid各组件正常运行：")],1),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl get pod "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v(" fluid-system\nalluxioruntime-controller-5b64fdbbb-84pc6   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          8h\ncsi-nodeplugin-fluid-fwgjh                  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          8h\ncsi-nodeplugin-fluid-ll8bq                  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          8h\ndataset-controller-5b7848dbbb-n44dj         "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          8h\n")])])]),e("p",[a._v("通常来说，你会看到一个名为"),e("code",[a._v("dataset-controller")]),a._v("的Pod、一个名为"),e("code",[a._v("alluxioruntime-controller")]),a._v("的Pod和多个名为"),e("code",[a._v("csi-nodeplugin")]),a._v("的Pod正在运行。其中，"),e("code",[a._v("csi-nodeplugin")]),a._v("这些Pod的数量取决于你的Kubernetes集群中结点的数量。")]),a._v(" "),e("h2",{attrs:{id:"新建工作环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建工作环境"}},[a._v("#")]),a._v(" 新建工作环境")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("any-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/co-locality\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("any-path"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("/co-locality\n")])])]),e("h2",{attrs:{id:"运行示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行示例"}},[a._v("#")]),a._v(" 运行示例")]),a._v(" "),e("p",[e("strong",[a._v("查看全部结点")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl get nodes\nNAME                       STATUS   ROLES    AGE     VERSION\ncn-beijing.192.168.1.146   Ready    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   7d14h   v1.16.9-aliyun.1\ncn-beijing.192.168.1.147   Ready    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   7d14h   v1.16.9-aliyun.1\n")])])]),e("p",[e("strong",[a._v("使用标签标识结点")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl label nodes cn-beijing.192.168.1.146 hbase-cache"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),e("p",[a._v("在接下来的步骤中，我们将使用"),e("code",[a._v("NodeSelector")]),a._v("来管理集群中存放数据的位置，所以在这里标记期望的结点")]),a._v(" "),e("p",[e("strong",[a._v("再次查看结点")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl get "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" hbase-cache\nNAME                       STATUS   ROLES    AGE     VERSION            HBASE-CACHE\ncn-beijing.192.168.1.146   Ready    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   7d14h   v1.16.9-aliyun.1   "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\ncn-beijing.192.168.1.147   Ready    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   7d14h   v1.16.9-aliyun.1   \n")])])]),e("p",[a._v("目前，在全部2个结点中，仅有一个结点添加了"),e("code",[a._v("hbase-cache=true")]),a._v("的标签，接下来，我们希望数据缓存仅会被放置在该结点之上")]),a._v(" "),e("p",[e("strong",[a._v("检查待创建的Dataset资源对象")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ cat"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),e("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("dataset.yaml")]),a._v('\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: hbase-cache\n              operator: In\n              values:\n                - "true"\nEOF')]),a._v("\n")])])]),e("p",[a._v("在该"),e("code",[a._v("Dataset")]),a._v("资源对象的"),e("code",[a._v("spec")]),a._v("属性中，我们定义了一个"),e("code",[a._v("nodeSelectorTerm")]),a._v("的子属性，该子属性要求数据缓存必须被放置在具有"),e("code",[a._v("hbase-cache=true")]),a._v("标签的结点之上")]),a._v(" "),e("p",[e("strong",[a._v("创建Dataset资源对象")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl create "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" dataset.yaml\ndataset.data.fluid.io/hbase created\n")])])]),e("p",[e("strong",[a._v("检查待创建的AlluxioRuntime资源对象")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ cat"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),e("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("runtime.yaml")]),a._v('\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF')]),a._v("\n")])])]),e("p",[a._v("该配置文件片段中，包含了许多与Alluxio相关的配置信息，这些信息将被Fluid用来启动一个Alluxio实例。上述配置片段中的"),e("code",[a._v("spec.replicas")]),a._v("属性被设置为2,这表明Fluid将会启动一个包含1个Alluxio Master和2个Alluxio Worker的Alluxio实例")]),a._v(" "),e("p",[e("strong",[a._v("创建AlluxioRuntime资源并查看状态")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl create "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n\n$ kubectl get pod "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" wide\nNAME                 READY   STATUS    RESTARTS   AGE    IP              NODE                       NOMINATED NODE   READINESS GATES\nhbase-fuse-42csf     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          104s   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.146   cn-beijing.192.168.1.146   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-master-0       "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          3m3s   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.147   cn-beijing.192.168.1.147   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-worker-l62m4   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          104s   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.146   cn-beijing.192.168.1.146   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("在此处可以看到，尽管我们期望看见两个AlluxioWorker被启动，但仅有一组Alluxio Worker成功启动，并且运行在具有指定标签（即"),e("code",[a._v("hbase-cache=true")]),a._v("）的结点之上。")]),a._v(" "),e("p",[e("strong",[a._v("检查AlluxioRuntime状态")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl get alluxioruntime hbase "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE     AGE\nhbase   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("               "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("                 Ready          "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("               "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("                 PartialReady   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("             "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("               PartialReady   4m3s\n")])])]),e("p",[a._v("与预想一致，"),e("code",[a._v("Worker Phase")]),a._v("状态此时为"),e("code",[a._v("PartialReady")]),a._v("，并且"),e("code",[a._v("Ready Workers: 1")]),a._v("小于"),e("code",[a._v("Desired Workers: 2")])]),a._v(" "),e("p",[e("strong",[a._v("查看待创建的应用")])]),a._v(" "),e("p",[a._v("我们提供了一个样例应用来演示Fluid是如何进行数据缓存亲和性调度的，首先查看该应用：")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ cat"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),e("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("app.yaml")]),a._v('\napiVersion: apps/v1beta1\nkind: StatefulSet\nmetadata:\n  name: nginx\n  labels:\n    app: nginx\nspec:\n  replicas: 2\n  serviceName: "nginx"\n  podManagementPolicy: "Parallel"\n  selector: # define how the deployment finds the pods it manages\n    matchLabels:\n      app: nginx\n  template: # define the pods specifications\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      affinity:\n        # prevent two Nginx Pod from being scheduled at the same Node\n        # just for demonstrating co-locality demo\n        podAntiAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n          - labelSelector:\n              matchExpressions:\n              - key: app\n                operator: In\n                values:\n                - nginx\n            topologyKey: "kubernetes.io/hostname"\n      containers:\n        - name: nginx\n          image: nginx\n          volumeMounts:\n            - mountPath: /data\n              name: hbase-vol\n      volumes:\n        - name: hbase-vol\n          persistentVolumeClaim:\n            claimName: hbase\nEOF')]),a._v("\n")])])]),e("p",[a._v("其中的"),e("code",[a._v("podAntiAffinity")]),a._v("可能会让人有一点疑惑，关于这个属性的解释如下："),e("code",[a._v("podAntiAffinity")]),a._v("属性将会确保属于相同应用的多个Pod被分散到多个不同的结点，这样的配置能够让我们更加清晰的观察到Fluid的数据缓存亲和性调度是怎么进行的。所以简单来说，这只是一个专用于演示的属性，你不必太过在意它")]),a._v(" "),e("p",[e("strong",[a._v("运行应用")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl create "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" app.yaml\nstatefulset.apps/nginx created\n")])])]),e("p",[e("strong",[a._v("查看应用运行状态")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl get pod "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" wide "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nginx\nNAME      READY   STATUS    RESTARTS   AGE    IP              NODE                       NOMINATED NODE   READINESS GATES\nnginx-0   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          2m5s   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.146   cn-beijing.192.168.1.146   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nnginx-1   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("/1     Pending   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          2m5s   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("          "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("                     "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("仅有一个Nginx Pod成功启动，并且运行在满足"),e("code",[a._v("nodeSelectorTerm")]),a._v("的结点之上")]),a._v(" "),e("p",[e("strong",[a._v("查看应用启动失败原因")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl describe pod nginx-1\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nEvents:\n  Type     Reason            Age        From               Message\n  ----     ------            ----       ----               -------\n  Warning  FailedScheduling  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("unknown"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  default-scheduler  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("/2 nodes are available: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" didn"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'t match pod affinity/anti-affinity, 1 node(s) didn'")]),a._v("t satisfy existing pods anti-affinity rules, "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" had volume "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" affinity conflict.\n  Warning  FailedScheduling  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("unknown"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  default-scheduler  "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("/2 nodes are available: "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" didn"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'t match pod affinity/anti-affinity, 1 node(s) didn'")]),a._v("t satisfy existing pods anti-affinity rules, "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" node"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" had volume "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" affinity conflict.\n")])])]),e("p",[a._v("如上所示，一方面，为了满足"),e("code",[a._v("PodAntiAffinity")]),a._v("属性的要求，使得两个Nginx Pod无法被调度到同一节点。另一方面，由于目前满足Dataset资源对象亲和性要求的结点仅有一个，因此仅有一个Nginx Pod被成功调度")]),a._v(" "),e("p",[e("strong",[a._v("为另一个结点添加标签")])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl label "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" cn-beijing.192.168.1.147 hbase-cache"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),e("p",[a._v("现在全部两个结点都具有相同的标签了，此时重新检查各个组件的运行状态")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl get pod "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" wide\nNAME                 READY   STATUS    RESTARTS   AGE   IP              NODE                       NOMINATED NODE   READINESS GATES\nhbase-fuse-42csf     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          44m   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.146   cn-beijing.192.168.1.146   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-fuse-kth4g     "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          10m   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.147   cn-beijing.192.168.1.147   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-master-0       "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          46m   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.147   cn-beijing.192.168.1.147   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-worker-l62m4   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          44m   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.146   cn-beijing.192.168.1.146   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-worker-rvncl   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          10m   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.147   cn-beijing.192.168.1.147   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("两个Alluxio Worker都成功启动，并且分别运行在两个结点上")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl get alluxioruntime hbase "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE   AGE\nhbase   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("               "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("                 Ready          "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("               "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("                 Ready          "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("             "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("               Ready        46m43s\n")])])]),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl get pod "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("app")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("nginx "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" wide\nNAME      READY   STATUS    RESTARTS   AGE   IP              NODE                       NOMINATED NODE   READINESS GATES\nnginx-0   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          21m   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.146   cn-beijing.192.168.1.146   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nnginx-1   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          21m   "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.147   cn-beijing.192.168.1.147   "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),e("p",[a._v("另一个nginx Pod不再处于"),e("code",[a._v("Pending")]),a._v("状态，已经成功启动并运行在另一个结点上")]),a._v(" "),e("p",[a._v("可见，可调度的数据缓存以及对应用的数据缓存亲和性调度都是被Fluid所支持的特性。在绝大多数情况下，这两个特性协同工作，为用户提供了一种更灵活更便捷的方式在Kubernetes集群中管理数据。")]),a._v(" "),e("p",[a._v("可见，Fluid支持数据缓存的调度策略，这些调度策略为用户提供了更加灵活的数据缓存管理能力")]),a._v(" "),e("h2",{attrs:{id:"环境清理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境清理"}},[a._v("#")]),a._v(" 环境清理")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ kubectl delete "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n\n$ kubectl label "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" cn-beijing.192.168.1.146 hbase-cache-\n$ kubectl label "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("node")]),a._v(" cn-beijing.192.168.1.147 hbase-cache-\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);