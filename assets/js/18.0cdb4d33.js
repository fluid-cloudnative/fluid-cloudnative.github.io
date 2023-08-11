(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{382:function(e,t,a){"use strict";a.r(t);var n=a(19),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fluid-0-5-release-open-the-way-of-online-elastic-expansion-of-dataset-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid-0-5-release-open-the-way-of-online-elastic-expansion-of-dataset-cache"}},[e._v("#")]),e._v(" Fluid 0.5 release: open the way of online elastic expansion of dataset cache")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-0.5-index.webp",alt:"0.5-img"}})]),e._v(" "),t("p",[t("strong",[e._v("Guide:")]),e._v("  in order to solve the problems of heterogeneous data source access, slow I/O speed of storage and calculation separation, low efficiency of scenario perception and low scheduling, the open source project fluid was jointly launched by pasalab, Alibaba and alluxio of Nanjing University in june2020 in order to solve the problems of heterogeneous data source access, slow storage / computing separation I/O speed, low efficiency of scenario perception and scheduling.")]),e._v(" "),t("p",[e._v("Fluid is an efficient support platform for data intensive applications in cloud native environment. Since the open source release, the project has attracted the attention of experts and engineers in many related fields. The community has been evolving with the positive feedback of all. Recently, fluid 0.5 version has been officially released. In this version, fluid mainly adds three aspects to improve:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("It is rich in the operation functions of data sets, and supports online elastic expansion, metadata backup and recovery.")])]),e._v(" "),t("li",[t("p",[e._v("Support the deployment of various environments and meet the user's personalized deployment and configuration requirements.")])]),e._v(" "),t("li",[t("p",[e._v("Add data cache engine implementation, and increase the engine selection of users on the public cloud.")])])]),e._v(" "),t("p",[t("strong",[e._v("Fluid open source project address")]),e._v(" : https://github.com/fluid-cloudnative/fluid")]),e._v(" "),t("p",[e._v("The development requirements of these three main functions come from the actual production feedback of many community users. In addition, fluid v0.5 has also carried out some bug fixes and document updates. Welcome to experience fluid v0.5!")]),e._v(" "),t("p",[t("strong",[e._v("Fluidv0.5 download link")]),e._v(" : https://github.com/fluid-cloudnative/fluid/releases")]),e._v(" "),t("p",[e._v("The following is a further introduction to the release features of this new version.")]),e._v(" "),t("h2",{attrs:{id:"enrich-the-operation-function-of-data-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enrich-the-operation-function-of-data-set"}},[e._v("#")]),e._v(" Enrich the operation function of data set")]),e._v(" "),t("p",[e._v("In this version, fluid focuses on enriching the relevant operation functions of the core abstract object, dataset, so that data intensive applications can better utilize the basic functions of elasticity and observability provided by cloud natively, and enhance the user's flexibility in data set management.")]),e._v(" "),t("h3",{attrs:{id:"_1-data-set-online-elastic-cache-expansion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-data-set-online-elastic-cache-expansion"}},[e._v("#")]),e._v(" 1. data set online elastic cache expansion")]),e._v(" "),t("p",[e._v("This is the function that community users have been looking forward to! Before fluid v0.5, if the user wants to adjust the cache capability of the dataset, it needs to be done by uninstalling the cache engine and redeploying it all. This approach is time-consuming and must also consider the high cost of all data cache loss. Therefore, in the new version, we provide the support for the data set to expand the cache elasticity. Users can increase the cache capacity of a dataset on-the-fly in a non-stop manner according to their own scenario requirements to accelerate data access (expansion) or reduce the cache capacity (shrink) of a dataset that is not frequently used, Thus, more precise elastic resource allocation can be realized and resource utilization rate can be improved. The built-in controller of fluid selects the appropriate expansion node according to the policy, for example, when scaling, it will take the task situation on the node and the node cache ratio as the filter condition.")]),e._v(" "),t("p",[e._v("To perform the elastic data set cache capacity elastic expansion, the user only needs to run the following command:")]),e._v(" "),t("blockquote",[t("p",[e._v("kubectl scale alluxioruntimes.data.fluid.io {datasetName} --replicas={num}")])]),e._v(" "),t("p",[e._v("Where dataset name corresponds to the name of the dataset, replica specifies the number of cache nodes.")]),e._v(" "),t("p",[e._v("The video of manual expansion and its effect of data set is as follows:")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/on-the-fly.mp4",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/on-the-fly.jfif",alt:"fly-demo"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("For more details on manual scaling of datasets, refer to "),t("RouterLink",{attrs:{to:"/samples/dataset_scaling.html"}},[e._v("documentation")])],1),e._v(" "),t("h3",{attrs:{id:"_2-backup-and-recovery-of-metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-backup-and-recovery-of-metadata"}},[e._v("#")]),e._v(" 2. backup and recovery of metadata")]),e._v(" "),t("p",[e._v("This feature enhances the flexibility of fluid dataset metadata management. Previous fluid v0.4 has supported loading metadata for datasets (for example, file system inode tree) to the local and records some key statistics (for example, the size of the data volume and the number of files) of the dataset. However, once the user destroys the local dataset, all the metadata information will be lost, and the data set needs to be retrieved from the underlying storage system again when rebuilding the dataset.")]),e._v(" "),t("p",[e._v("Therefore, in fluid v0.5, we add a k8s custom resource object, DataBackup, which provides the user with a declarative API interface to control the related behavior of data backup. A simple example of building a DataBackup custom resource object is as follows:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" data.fluid.io/v1alpha1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" DataBackup\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hbase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("backup\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("dataset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hbase\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("backupPath")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" pvc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//<pvcName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("/subpath1/subpath2/\n")])])]),t("p",[e._v("When you create the dataset again, you need to add a field that specifies the location of the backup file:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[e._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" data.fluid.io/v1alpha1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" Dataset\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" hbase\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("dataRestoreLocation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" pvc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//pvc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("local/subpath1/\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("mounts")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("mountPoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("//mirrors.tuna.tsinghua.edu.cn/apache/hbase/2.2.6/\n\n")])])]),t("p",[e._v("At this point, fluid will first load metadata and dataset statistics from the backup file, thus greatly improving the loading speed of metadata.")]),e._v(" "),t("h3",{attrs:{id:"_3-observability-optimization-of-data-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-observability-optimization-of-data-set"}},[e._v("#")]),e._v(" 3. observability optimization of data set")]),e._v(" "),t("p",[e._v("Fluid v0.5 also further enhances the observability of the dataset, which includes two parts:")]),e._v(" "),t("h4",{attrs:{id:"_1-combination-with-prometheus"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-combination-with-prometheus"}},[e._v("#")]),e._v(" 1) combination with Prometheus")]),e._v(" "),t("p",[e._v('This feature supports the collection of data set availability and performance indicators and is visualized through grafana. At present, the implementation of alloxioruntime is supported. Users can easily understand the performance indicators such as current cache node, cache space, existing cache ratio, remote reading, short-circuit reading and so on. The whole configuration process is very simple, and it achieves the effect of "out of the box" for the data set monitoring system.')]),e._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-elastic-04.webp",alt:"图片"}})]),e._v(" "),t("h4",{attrs:{id:"_2-hit-rate-index-of-new-dataset-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-hit-rate-index-of-new-dataset-cache"}},[e._v("#")]),e._v(" 2) hit rate index of new dataset cache")]),e._v(" "),t("p",[e._v("This feature can identify how many of the access to the dataset in the last 1 minute has hit the distributed cache. On the one hand, the indicator can help users analyze the performance bottleneck in their data intensive applications, and quantitatively check the effect of fluid in the workflow of the whole application; On the other hand, it can help users to balance the application performance and cache resource occupation, and make reasonable expansion decision.")]),e._v(" "),t("p",[e._v("This indicator is added to the dataset CRD resource status of 'dataset.status.cachestates' in the future v0.5, specifically including:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Cache hit ratio: the percentage of access to distributed cache hits in the past minute.")])]),e._v(" "),t("li",[t("p",[e._v("Local hit ratio: the percentage of access hit by the local cache in the past minute.")])]),e._v(" "),t("li",[t("p",[e._v("Remote hit ratio: the percentage of access to remote cache hits in the past minute.")])])]),e._v(" "),t("blockquote",[t("p",[e._v("Note: for distributed cache, there are two different cache hits for data hits "),t("strong",[e._v("Local cache hit")]),e._v(" refers to the access initiator can access the cache data directly at the same node "),t("strong",[e._v("Remote cache hit")]),e._v(" refers to the access to cache data on other nodes through the network by the initiator.")])]),e._v(" "),t("p",[e._v("In fluid v0.5, users can easily view cache hit indicators using the following command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("\nkubectl get dataset "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dataset-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-o")]),e._v(" wide\n\nNAME "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". CACHE HIT RATIO AGE\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dataset-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("86.2")]),e._v("% 16m\n\n")])])]),t("h2",{attrs:{id:"support-deployment-of-diverse-environment-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support-deployment-of-diverse-environment-configuration"}},[e._v("#")]),e._v(" Support deployment of diverse environment configuration")]),e._v(" "),t("p",[e._v("Since the release of fluid 0.4, we have increased support for fluid deployment configuration in a variety of environments according to the problems and requirements of community users' actual deployment feedback.")]),e._v(" "),t("h3",{attrs:{id:"_1-support-fuse-global-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-support-fuse-global-mode"}},[e._v("#")]),e._v(" 1. support fuse global mode")]),e._v(" "),t("p",[e._v("In fluid, the remote files defined in the dataset resource object are schedulable, which means that you can manage the remote file cache to the location on the kubernetes cluster as you do managing pod. The calculated pod can access the data file through the fuse client. In previous versions of fluid, fuse clients always schedule to the nodes where the cache is located, but users are not free to control the dispatch of fuse.")]),e._v(" "),t("p",[e._v("In fluid v0.5, we added a global deployment pattern to fuse. In this mode, fuse is deployed globally to all nodes by default. Users can also influence the scheduling results of fuse by specifying the nodeselector of fuse. At the same time, cache will be deployed on nodes with a large number of calculated pods.")]),e._v(" "),t("h3",{attrs:{id:"_2-support-hdfs-user-level-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-support-hdfs-user-level-configuration"}},[e._v("#")]),e._v(" 2. support HDFS user level configuration")]),e._v(" "),t("p",[e._v("Many community users use the distributed cache system, alloxo, as the cache engine for fluid data sets. In the case of data set persistence stored in HDFS file system, to make aluxo access to the underlying HDFS, the aluxo cluster needs to obtain all kinds of configuration information of the HDFS in advance.")]),e._v(" "),t("p",[e._v("In fluid v0.5, we use kubernetes' native resources to support the above scenarios. Users need to create the relevant configuration files (e.g. ` HDFS site.xml 'and' core site.xml ') in the kubernetes environment in the form of' configmap ', and then reference the' configmap 'created above in the created' alloxioruntime 'resource object to achieve the above functions.")]),e._v(" "),t("p",[t("code",[e._v("An example of the alloxioruntime")]),e._v(" resource object is as follows:")]),e._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" data.fluid.io/v1alpha1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" AlluxioRuntime\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" my"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("hdfs\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("hadoopConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" <configmap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("...")]),e._v("\n\n")])])]),t("p",[e._v("At this point, the created cluster of aluxo will be able to access the data in the HDFS cluster normally. For more information, refer to the sample documentation")]),e._v(" "),t("h2",{attrs:{id:"implementation-of-new-data-cache-engine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation-of-new-data-cache-engine"}},[e._v("#")]),e._v(" Implementation of new data cache engine")]),e._v(" "),t("p",[e._v("The default distributed cache runtime used by fluid is alluxioruntime. In order to support the needs of users in different environments for the cache system, fluid has made the distributed cache runtime access framework into a pluggable architecture in the previous version. In fluid v0.5, community contributors from Alibaba cloud developed jindoruntime based on the framework and added an execution engine implementation to support fluid dataset data management and caching. Users can use the cache mode of jindofs to access and cache remote files in fluid through jindoruntime. Using and deploying jindoruntime on fluid is simple, compatible with the native k8s environment and out of the box.")]),e._v(" "),t("h2",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("p",[e._v("In fluid v0.5, we have enriched and enhanced the functional features and user experience of fluid.\n"),t("strong",[e._v("First of all")]),e._v(" , fluid v0.5 further adds the function operation of dataset:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Provide online elastic capacity expansion and contraction of data sets, and realize more flexible and fine cluster resource allocation control.")])]),e._v(" "),t("li",[t("p",[e._v("The new DataBackup CRD realizes the backup and recovery of dataset file metadata and other information, and helps complete the rapid restart of dataset caching system.")])]),e._v(" "),t("li",[t("p",[e._v("A cache hit rate indicator is added to help users better quantify and analyze the acceleration effect provided by fluid.")])])]),e._v(" "),t("p",[t("strong",[e._v("Secondly")]),e._v(" , fluid supports more environment modes and configurations to meet the deployment requirements of more real scenarios.")]),e._v(" "),t("p",[t("strong",[e._v("Finally")]),e._v(" , fluid adds a distributed cache runtime based on jindofs - jindoruntime, which provides users with different cache engine choices in diversified deployment environments.")]),e._v(" "),t("p",[e._v("We will continue to pay extensive attention to and adopt community suggestions to promote the long-term development of the fluid project, and look forward to hearing more feedback from you. If you have any questions or suggestions, welcome to join the fluid user group to participate in communication or discuss with us on GitHub:")]),e._v(" "),t("FluidCommunity"),e._v(" "),t("h2",{attrs:{id:"acknowledge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acknowledge"}},[e._v("#")]),e._v(" Acknowledge")]),e._v(" "),t("p",[e._v("Thanks to the community partners who contributed to this version, including Wang Tao from Alibaba cloud, Xie Yuandong from Tencent cloud, Qiu Lingwei from China Telecom, Xu Zhihao, Hou Haojun, Chen Guowang, Chen Yuquan and other students from pasalab of Nanjing University.")]),e._v(" "),t("h2",{attrs:{id:"introduction-to-the-author"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-the-author"}},[e._v("#")]),e._v(" Introduction to the author")]),e._v(" "),t("p",[e._v("Dr. Gu Rong, associate researcher of Computer Department of Nanjing University, member of PMC of fluid open source project co founder and alluxio open source project, research direction of big data processing system, has published more than 30 papers in Frontier Journal conferences in TPDS, ICDE, jpdc, IPDPS, ICPP and other fields, and presided over general projects / youth projects of National Natural Science Foundation of China There are a number of projects specially funded by China Postdoctoral Science Foundation. The research results have been applied to Alibaba, Baidu, byte beat, Sinopec, Huatai Securities and other companies and open source projects Apache spark and alluxio, and won the first prize of Jiangsu Science and technology in 2018 and the youth science and technology award of Jiangsu computer society in 2019, Served as a member of the system software special committee of China Computer Society / communication member of the big data special committee and Secretary General of the big data special committee of Jiangsu computer society.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);