(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{376:function(e,t,a){"use strict";a.r(t);var s=a(19),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fluid-0-3-release-official-accelerating-data-generalization-for-cloud-native-scenes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid-0-3-release-official-accelerating-data-generalization-for-cloud-native-scenes"}},[e._v("#")]),e._v(" Fluid 0.3 Release Official: Accelerating data generalization for cloud native scenes")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-0.3-index.webp",alt:"0.3-img"}})]),e._v(" "),t("p",[t("strong",[e._v("Guidance:")]),e._v(" In order to solve the painful points of data "),t("strong",[e._v("high access delay, difficult joint analysis, multidimensional management")]),e._v(" in the separate scenario of data-intensive applications such as big data and AI, etc. In September 1920, Nanjing University PASALab, Alibaba and Alluxio jointly launched Open Source Project Fluid.")]),e._v(" "),t("p",[e._v("Fluid is an efficient support platform for data-intensive applications in the cloud native environment. Since the release of open source, the project has attracted the attention of many interested field experts and engineers, and the development of the community is progressing rapidly with positive feedback from everyone.Recently, Fluid version 0.3 was officially released with three new key features:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Accelerate universal data storage, provide Kubernetes data volume access acceleration")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Enhance data access security and provide fine-grained privilege control for datasets")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Simplify user complex parameter configuration, provide internal parameter configuration optimization function of biochemical system")])])])]),e._v(" "),t("p",[e._v("Fluid project address:https://github.com/fluid-cloudnative/fluid")]),e._v(" "),t("p",[e._v("The development needs of these three main functions come from the actual production feedback of many community users. In addition, Fluid v0.3 has made some bug fixes and document updates. Welcome to experience Fluid v0.3!Thank you for contributing to this release. We will continue to follow and adopt community recommendations extensively to promote the development of the Fluid project. We look forward to hearing more from you!")]),e._v(" "),t("p",[e._v("Fluid v0.3 Download Link:https://github.com/fluid-cloudnative/fluid/releases")]),e._v(" "),t("p",[e._v("The following is a further description of the new release functionality.")]),e._v(" "),t("h2",{attrs:{id:"_1-supports-kubernetes-data-volume-access-acceleration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-supports-kubernetes-data-volume-access-acceleration"}},[e._v("#")]),e._v(" 1. Supports Kubernetes data volume access acceleration")]),e._v(" "),t("p",[e._v("Although previous versions of Fluid already support many underlying storage systems (such as HDFS, OSS, and so on), in real production environments, enterprise-wide storage systems tend to be more diverse, and the inability to connect to Fluid due to incompatible storage systems still exists.For example, if a user uses the Lustre distributed file system, he or she will not be able to use Fluid properly because the distributed cache engine used by Fluid before is not compatible with the Lustre system.")]),e._v(" "),t("p",[e._v("To improve the versatility of Fluid in cloud native data access acceleration scenarios, Fluid v0.3.Added "),t("strong",[e._v("acceleration support for data volume Persistent Volume Claim (PVC) and host directory (Host Path)")]),e._v(" to provide a versatile acceleration scheme for linking various storage systems to Fluid, regardless of the underlying storage system used. "),t("strong",[e._v("As long as the storage system can be mapped to a native data volume PVC resource object of Kubernetes or a host directory on a cluster node, it can enjoy the benefits of features such as distributed data caching, data affinity scheduling, and so on through Fluid")]),e._v(". The basic concepts are as follows:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-0.3-01.webp",alt:"0.3-img"}})]),e._v(" "),t("p",[e._v("It's easy to use, and the user only needs to specify it in mountPointpvc://nfs-imagenetWhere nfs-imagenet is an existing data volume in the Kubernetes cluster.")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" data.fluid.io/v1alpha1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Dataset\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("Name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" fluid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("imagenet\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("mounts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("mountPoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" pvc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//nfs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("imagenet\n\t\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" nfs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("imagenet\n")])])]),t("p",[e._v("This part of the system demonstration video is as follows:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/accelerate_pvc.mp4",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/accelerate_pvc.jfif",alt:"03-demo"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("We trained resnet-50 model through tensorflow benchmark as a test scenario to verify the PVC access acceleration ability. The following are the speed improvement results:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th"),e._v(" "),t("th",[t("strong",[e._v("use PVC data volume directly")])]),e._v(" "),t("th",[e._v("accelerate PVC data volume with fluid")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("training time")]),e._v(" "),t("td",[e._v("2h15m59s")]),e._v(" "),t("td",[e._v("1h43m43s")])]),e._v(" "),t("tr",[t("td",[e._v("1000 step speed(images/second)")]),e._v(" "),t("td",[e._v("3,136")]),e._v(" "),t("td",[e._v("8,889")])]),e._v(" "),t("tr",[t("td",[e._v("final speed(images/second)")]),e._v(" "),t("td",[e._v("15,024")]),e._v(" "),t("td",[e._v("20,506")])]),e._v(" "),t("tr",[t("td",[e._v("Accuracy @ 5")]),e._v(" "),t("td",[e._v("0.9228")]),e._v(" "),t("td",[e._v("0.9204")])])])]),e._v(" "),t("p",[e._v("From the perspective of distributed training, the overall training speed provided by fluid can be reduced by more than 20%. For more test related details, please refer to the relevant sample documents on GitHub:")]),e._v(" "),t("ul",[t("li",[t("p",[t("RouterLink",{attrs:{to:"/samples/accelerate_pvc.html"}},[e._v("PVC acceleration document")])],1)]),e._v(" "),t("li",[t("p",[t("RouterLink",{attrs:{to:"/samples/hostpath.html"}},[e._v("Host Path acceleration document")])],1)])]),e._v(" "),t("h2",{attrs:{id:"_2-access-control-of-data-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-access-control-of-data-set"}},[e._v("#")]),e._v(" 2. Access control of data set")]),e._v(" "),t("p",[e._v("Many enterprises providing machine learning platform services have multi-user shared storage systems and scenarios. For security reasons, machine learning platform service providers need to strictly control access rights to "),t("strong",[e._v("ensure data isolation between users")]),e._v(", that is, any unauthorized user shall not access other people's data sets at will.")]),e._v(" "),t("p",[e._v("Fluid provides support for the above scenarios in v0.3: after the underlying storage system shared by multiple users is mounted to fluid, the file permission information exposed by fluid (such as the user, file mode, etc.) will be consistent with the underlying storage system, that is, the "),t("strong",[e._v("transparent transmission")]),e._v(" of files from the underlying storage system to the node where fluid is deployed is realized. This means that the access control in the underlying storage system will also take effect on each node deploying fluid, so as to ensure that the data isolation between users will not be damaged.")]),e._v(" "),t("p",[e._v('In addition, fluid v0.3 also provides the feature of "temporary borrowing" of datasets“ Temporary borrowing means that a user needs to have temporary access to a dataset of another user. In fluid v0.3, administrators can complete the conversion of dataset ownership on the node where fluid is deployed through flexible configuration, so as to give designated users the ability to "temporarily borrow" other people\'s datasets, which can '),t("strong",[e._v("help cluster administrators achieve finer grained and flexible data centralized authority management")]),e._v(".")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/samples/nonroot_access.html"}},[e._v("usage documents for accessing non root user data")])],1),e._v(" "),t("h2",{attrs:{id:"_3-default-parameter-configuration-optimization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-default-parameter-configuration-optimization"}},[e._v("#")]),e._v(" 3. Default parameter configuration optimization")]),e._v(" "),t("p",[e._v("Fluid provides many parameter configurations for users to customize their own applications. Before fluid version 0.3, users need to manually configure according to the actual environment and business objectives. However, it is difficult and heavy workload for most users to manually complete configuration optimization.")]),e._v(" "),t("p",[e._v("Fluid v0.3 has built-in a large number of default parameter configuration optimization for internal components such as alluxio and fuse. Users no longer need to focus a lot on parameter configuration optimization. According to our experience, the optimized default parameter settings can achieve better performance in most common fluid usage scenarios.")]),e._v(" "),t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("p",[e._v("Fluid v0.3 mainly solves the problems and needs fed back by community users in the actual production environment. The support of host directory and PVC mount provides a general solution for compatibility with different underlying storage systems; The access control of data sets enables fluid to truly meet the needs of the actual production environment shared by multiple users; The optimized default parameter configuration increases the ease of use of fluid and maintains stable performance in most scenarios.")]),e._v(" "),t("p",[e._v("If you have any questions, please join the nail exchange group to participate and discuss:")]),e._v(" "),t("FluidCommunity")],1)}),[],!1,null,null,null);t.default=o.exports}}]);