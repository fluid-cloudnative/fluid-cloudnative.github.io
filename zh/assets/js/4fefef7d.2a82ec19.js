"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[8704],{3548:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=a(7624),n=a(2172);const s={sidebar_label:"What is Fluid",sidebar_position:1,slug:"/"},o="What is Fluid",r={id:"core-concepts/what-is-fluid",title:"What is Fluid",description:"Fluid is an open source Kubernetes-native Distributed Dataset Orchestrator and Accelerator for data-intensive applications, such as big data and AI applications. It is hosted by the Cloud Native Computing Foundation (CNCF) as a sandbox project. Fluid is can  convert distributed caching systems (such as Alluxio and JuiceFS) into observable caching services with self-management, elastic scaling, and self-healing capabilities, and it does so by supporting dataset operations. At the same time, through the data caching location information, Fluid can provide data-affinity scheduling for applications using datasets.",source:"@site/docs/core-concepts/what-is-fluid.md",sourceDirName:"core-concepts",slug:"/",permalink:"/zh/docs/next/",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/docs/core-concepts/what-is-fluid.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1713345055,formattedLastUpdatedAt:"2024\u5e744\u670817\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"What is Fluid",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Key Features",permalink:"/zh/docs/next/core-concepts/key-features"}},c={},d=[{value:"Target Scenario and  Values",id:"target-scenario-and--values",level:2},{value:"Why  Fluid",id:"why--fluid",level:2},{value:"System Characteristics",id:"system-characteristics",level:2},{value:"Publication",id:"publication",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"what-is-fluid",children:"What is Fluid"}),"\n",(0,i.jsxs)(t.p,{children:["Fluid is an open source Kubernetes-native Distributed Dataset Orchestrator and Accelerator for data-intensive applications, such as big data and AI applications. It is hosted by the ",(0,i.jsx)(t.a,{href:"https://cncf.io",children:"Cloud Native Computing Foundation"})," (CNCF) as a sandbox project. Fluid is can  convert distributed caching systems (such as Alluxio and JuiceFS) into observable caching services with self-management, elastic scaling, and self-healing capabilities, and it does so by supporting dataset operations. At the same time, through the data caching location information, Fluid can provide data-affinity scheduling for applications using datasets."]}),"\n",(0,i.jsx)(t.h2,{id:"target-scenario-and--values",children:"Target Scenario and  Values"}),"\n",(0,i.jsx)(t.p,{children:"In the treand of computation and stroage separation, the goal of Fluid is to enable AI/Big Data Applications to use data from any storage more efficiently with a high-level abstraction manner  and without changes to the applications themselves."}),"\n",(0,i.jsx)(t.p,{children:"Unlike traditional PVC-based storage abstraction, Fluid takes an Application-oriented perspective to abstract the \u201cprocess of using data on Kubernetes\u201d. It introduces the concept of elastic Dataset and implements it as a first-class citizen in Kubernetes to enable Dataset CRUD operation, permission control, and access acceleration."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(1316).c+"",width:"1832",height:"656"})}),"\n",(0,i.jsx)(t.p,{children:"Through the data abstraction layer powered by Fluid on Kubernetes, the data will just be like the fluid, waving across the storage sources (such as HDFS, OSS, Ceph) and the cloud native applications on Kubernetes. It can be moved, copied, evicted, transformed and managed flexibly. Besides, All the data operations are transparent to users. Users do not need to worry about the efficiency of remote data access nor the convenience of data source management. User only need to access the data abstracted from the Kubernetes native data volume, and all the left tasks and details are handled by Fluid."}),"\n",(0,i.jsx)(t.p,{children:"Fluid aims to turn different distributed cache systems (Alluxio, JuiceFS, Vineyard,  CubeFS and so on) into self-managing, self-scaling, self-healing and observable cache services inside of Kubernetes by providing the common framework of Fluid."}),"\n",(0,i.jsx)(t.p,{children:"Fluid enables Kubernetes schedulers to make intelligent, topology-aware scheduling plans regarding where the distributed data cache system is located.  It focuses on the dataset orchestration and application orchestration  scenarios. The dataset orchestration can arrange the cached dataset to the specific Kubernetes node, while the application orchestration can arrange the the applications to nodes with the pre-loaded datasets. These two can work together to form the co-orchestration scenario, which take both the dataset specifications and application characteristics into consideration during resouce scheduling."}),"\n",(0,i.jsx)(t.p,{children:"Fluid presents its value in the following two aspects:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Use the power of Kubernetes platform to deliver its services via a Kubernetes Operator for each distributed cache provider, and automate the tasks of the administrator: deployment, bootstrapping, configuration, provisioning, scaling, upgrading, monitoring, data prefetch, data migration and resource management."}),"\n",(0,i.jsx)(t.li,{children:"Help the users make the most of distributed caching by combining third-party caching systems with Kubernetes scheduling and elasticity, also aligning them with specific application data usage scenarios and methods."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"why--fluid",children:"Why  Fluid"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Running AI, big data and other tasks on the cloud through a cloud-native architecture can take advantage of the elasticity of computing resources, but at the same time, it also faces data access latency and large bandwidth overhead due to the separated computing and storage architecture. Especially deep learning training with GPUs, iterative remote access to large amounts of training data will significantly slow down the computing efficiency."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Kubernetes provides heterogeneous storage service access and management standard interface (CSI, Container Storage Interface), but it does not define how the application uses and manages data. When running machine learning tasks, data scientists need to be able to define file features of the dataset, manage versions of the dataset, control access permissions, pre-process the dataset, accelerate heterogeneous data reading, etc. However, there is no such standard scheme in Kubernetes, which is one of the important missing capabilities of Kubernetes."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Kubernetes supports a variety of forms, such as native Kubernetes, edge Kubernetes and Serverless Kubernetes. However, for different forms of Kubernetes, the support for CSI plug-ins is also different, for example, many Serverless Kubernetes do not support the deployment of third-party CSI plug-ins."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In summary, to resolve the issue that Kubernetes lacks the awareness and optimization for application data, Fluid put forward a series of innovative methods such as co-orchestration, intelligent awareness, joint-optimization, to form an efficient supporting platform for data-intensive applications in cloud native environment."}),"\n",(0,i.jsx)(t.h2,{id:"system-characteristics",children:"System Characteristics"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Application-oriented DataSet Unified Abstraction"}),"\uff1aDataSet not only consolidates data from multiple storage sources, but also describes the data's portablity and features, also providing observability, such as total data volume of the DataSet, current cache space size, and cache hit rate. Users can evaluate whether a cache system needs to be scaled up or down according to this information."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Lightweight but highly extensible Runtime Plugins"}),"\uff1aDataset is an abstract concept, and the data operation needs to be implemented by the Runtime. According to the different storages, there will be different Runtime interfaces. Fluid's Runtime is divided into two categories: CacheRuntime to accelerate data access, such as AlluxioRuntime for S3, HDFS and JuiceFSRuntime for JuiceFS; the other category is ThinRuntime, which provides a unified access interface to facilitate the access to third-party storage."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Automated data operation"}),"\uff1aProviding data prefetch, migration, backup and other operations via CRDs, and supporting various trigger modes such as one-time, scheduled, and event-driven, to facilitate users to integrate them into the automated operation and maintenance system."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Data elasticity and scheduling"}),"\uff1aBy combining distributed data caching technology with autoscaling, portability, observability, and affinity scheduling capabilities, data access performance can be improved through the provision of observable, elastic scaling cache capabilities and data affinity scheduling capabilities."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Runtime platform Agnostic"}),"\uff1aSupport diverse environments such as native, edge, Serverless Kubernetes cluster, Kubernetes multi-cluster, and can run in various environments such as cloud platform, edge, Kubernetes multi-cluster. It can run storage client in different modes by choosing CSI Plugin and sidecar according to the differences in environments."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"publication",children:"Publication"}),"\n",(0,i.jsx)(t.p,{children:"For more information of our key ideas, please refer to our papers:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Rong Gu, Kai Zhang, Zhihao Xu, et al. ",(0,i.jsx)(t.a,{href:"https://ieeexplore.ieee.org/abstract/document/9835158",children:"Fluid: Dataset Abstraction and Elastic Acceleration for Cloud-native Deep Learning Training Jobs"}),". IEEE ICDE, pp. 2183-2196, May, 2022. (Conference Version)"]})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsxs)(t.strong,{children:["Rong Gu, Zhihao Xu, Yang Che, et al. ",(0,i.jsx)(t.a,{href:"https://ieeexplore.ieee.org/document/10249214",children:"High-level Data Abstraction and Elastic Data Caching for Data-intensive AI Applications on Cloud-native Platforms"}),". IEEE TPDS, pp. 2946-2964, Vol 34(11), 2023. (Journal Version)"]})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1316:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/perspective-c9c04f773f63a419208a5bf08bdabbb4.png"},2172:(e,t,a)=>{a.d(t,{I:()=>r,M:()=>o});var i=a(1504);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);