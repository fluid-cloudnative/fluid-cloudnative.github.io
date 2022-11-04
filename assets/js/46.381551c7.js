(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{404:function(a,t,s){"use strict";s.r(t);var e=s(19),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"示例-pod-调度优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例-pod-调度优化"}},[a._v("#")]),a._v(" 示例 - Pod 调度优化")]),a._v(" "),t("p",[a._v("为了帮助用户更好的使用fluid，我们提供了一系列调度插件。\n通过为Pod自动注入亲和性相关信息，优化Pod的调度结果，提高集群的整体使用效率。")]),a._v(" "),t("h2",{attrs:{id:"前提条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),t("p",[a._v("您使用的k8s版本需要支持 admissionregistration.k8s.io/v1beta1（ Kubernetes version > 1.14 )")]),a._v(" "),t("h2",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[a._v("#")]),a._v(" 使用方法")]),a._v(" "),t("p",[t("strong",[a._v("查看全部节点")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ kubectl get no\nNAME                      STATUS   ROLES    AGE   VERSION\nnode.172.16.0.16   Ready    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   13d   v1.20.4\nnode.172.16.1.84   Ready    "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("   13d   v1.20.4\n")])])]),t("p",[t("strong",[a._v("检查待创建的Dataset资源对象")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ cat"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("dataset.yaml")]),a._v('\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF')]),a._v("\n")])])]),t("p",[t("strong",[a._v("创建Dataset资源对象")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" dataset.yaml\ndataset.data.fluid.io/hbase created\n")])])]),t("p",[t("strong",[a._v("创建AlluxioRuntime资源并查看状态")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n\n$ kubectl get po "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-owide")]),a._v("\nNAME                 READY   STATUS    RESTARTS   AGE   IP            NODE                      NOMINATED NODE   READINESS GATES\nhbase-fuse-fdjpg     "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("/1     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          94m   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".0.16   node.172.16.0.16   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-master-0       "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          97m   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".0.16   node.172.16.0.16   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\nhbase-worker-ch8k7   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("/2     Running   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("          94m   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("172.16")]),a._v(".0.16   node.172.16.0.16   "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("在此处可以看到，有一个Alluxio Worker成功启动，并且运行在节点172.16.0.16上。Alluixo Fuse的数量为1，也运行在节点172.16.0.16上。")]),a._v(" "),t("h2",{attrs:{id:"运行示例1-创建没有挂载数据集的pod-它将尽量远离部署有数据集的节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行示例1-创建没有挂载数据集的pod-它将尽量远离部署有数据集的节点"}},[a._v("#")]),a._v(" 运行示例1: 创建没有挂载数据集的Pod，它将尽量远离部署有数据集的节点")]),a._v(" "),t("p",[t("strong",[a._v("创建Pod")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ cat"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("nginx.yaml")]),a._v("\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\nEOF")]),a._v("\n$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" nginx.yaml\n")])])]),t("p",[t("strong",[a._v("查看Pod")])]),a._v(" "),t("p",[a._v("查看Pod的yaml文件，发现被注入了如下信息：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("affinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodeAffinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("preferredDuringSchedulingIgnoredDuringExecution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("preference")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("matchExpressions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n              "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" fluid.io/dataset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("num\n                "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" DoesNotExist\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("weight")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("\n")])])]),t("p",[a._v("正如亲和性所影响的，Pod调度到了没有缓存的node.172.16.1.84节点。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ kubectl get pods nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v("  custom-columns"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NAME:metadata.name,NODE:.spec.nodeName\nNAME    NODE\nnginx   node.172.16.1.84\n")])])]),t("h2",{attrs:{id:"运行示例2-创建挂载数据集的pod-可以观测到它被调度到有数据集的节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行示例2-创建挂载数据集的pod-可以观测到它被调度到有数据集的节点"}},[a._v("#")]),a._v(" 运行示例2: 创建挂载数据集的Pod，可以观测到它被调度到有数据集的节点")]),a._v(" "),t("p",[t("strong",[a._v("创建Pod")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ cat"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF"),t("span",{pre:!0,attrs:{class:"token bash punctuation"}},[a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("nginx.yaml")]),a._v("\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: hbase-vol\n  volumes:\n    - name: hbase-vol\n      persistentVolumeClaim:\n        claimName: hbase\nEOF")]),a._v("\n$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" nginx.yaml\n")])])]),t("p",[t("strong",[a._v("查看Pod")])]),a._v(" "),t("p",[a._v("查看Pod的yaml文件，发现被注入了如下信息：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("affinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodeAffinity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("requiredDuringSchedulingIgnoredDuringExecution")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("nodeSelectorTerms")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("matchExpressions")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" fluid.io/s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("hbase\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("operator")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" In\n            "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"true"')]),a._v("\n")])])]),t("p",[a._v("正如亲和性所影响的，Pod会强制调度到了有缓存的node.172.16.0.16节点。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("$ kubectl get pods nginx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v("  custom-columns"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("NAME:metadata.name,NODE:.spec.nodeName\nNAME    NODE\nnginx   node.172.16.0.16\n")])])]),t("blockquote",[t("p",[a._v("注释： K8s默认调度器并不需要配置强制亲和性，但是如果使用一些类似Volcano，Yunikorn等调度器组件并不感知K8s原生数据卷的亲和性，导致应用调度")])])])}),[],!1,null,null,null);t.default=n.exports}}]);