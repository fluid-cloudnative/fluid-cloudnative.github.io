"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[1892],{340:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=a(7624),n=a(2172);const s={sidebar_label:"Zuoyebang's Case Study",sidebar_position:5},o="Zuoyebang's Case Study",r={id:"case-study/zuoyebang-case-study",title:"Zuoyebang's Case Study",description:"This article introduces the a Fluid use case in Zuoyebang.",source:"@site/docs/case-study/zuoyebang-case-study.md",sourceDirName:"case-study",slug:"/case-study/zuoyebang-case-study",permalink:"/docs/case-study/zuoyebang-case-study",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/docs/case-study/zuoyebang-case-study.md",tags:[],version:"current",lastUpdatedBy:"chenqiming",lastUpdatedAt:1712890746,formattedLastUpdatedAt:"Apr 12, 2024",sidebarPosition:5,frontMatter:{sidebar_label:"Zuoyebang's Case Study",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Metabit Trading's Case Study",permalink:"/docs/case-study/metabit-trading-case-study"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting-and-faq/troubleshooting"}},d={},c=[{value:"Problems Faced by Large-Scale Information Retrieval Systems",id:"problems-faced-by-large-scale-information-retrieval-systems",level:2},{value:"1. Dispersion of Datasets",id:"1-dispersion-of-datasets",level:3},{value:"2. Weak Auto Scaling of Business Resources",id:"2-weak-auto-scaling-of-business-resources",level:3},{value:"3. Insufficient Extensibility for a Single Shard of Data",id:"3-insufficient-extensibility-for-a-single-shard-of-data",level:3},{value:"Compute-Storage Separation Architecture Solves Complexity Issues",id:"compute-storage-separation-architecture-solves-complexity-issues",level:2},{value:"Component Introduction",id:"component-introduction",level:3},{value:"Reasons for Choosing Fluid",id:"reasons-for-choosing-fluid",level:3},{value:"Implementation Practice",id:"implementation-practice",level:3},{value:"Summary",id:"summary",level:2},{value:"Future Work",id:"future-work",level:2},{value:"About the Authors",id:"about-the-authors",level:2}];function l(e){const t={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"zuoyebangs-case-study",children:"Zuoyebang's Case Study"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"This article introduces the a Fluid use case in Zuoyebang."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"By Dong Xiaocong and Zhang Haoran"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Planning by Liu Yan"})}),"\n",(0,i.jsx)(t.p,{children:"Large-scale information retrieval systems have always been the cornerstone of the platform business of enterprises. They often run in the large clusters with thousands of bare metal servers. The data amount is huge, the requirements for performance, throughput, and stability are critical, and the tolerance for failure is low."}),"\n",(0,i.jsx)(t.p,{children:"In addition to the maintenance, data iteration and service governance in ultra-large-scale clusters and massive data scenarios become critical challenges. Incremental and full data distribution efficiency together with the short-term and long-term hot data tracking are all issues that need to be studied in depth."}),"\n",(0,i.jsx)(t.p,{children:"This article will introduce the fluid-based compute-storage separation architecture designed and implemented by Zuoyebang, which can reduce the complexity of large-scale information retrieval system services. Therefore, large-scale information retrieval systems can be managed smoothly like normal online businesses."}),"\n",(0,i.jsx)(t.h2,{id:"problems-faced-by-large-scale-information-retrieval-systems",children:"Problems Faced by Large-Scale Information Retrieval Systems"}),"\n",(0,i.jsx)(t.p,{children:"The intelligent analysis and search function of the course study materials of Zuoyebang rely on large-scale data retrieval systems. The cluster size is more than 1,000 units, and the total data volume is more than 100 TB. The entire system consists of several shards, each of which is loaded with the same datasets by several servers. At the maintenance level, we require performance to reach P991.Xms, throughput peak to 100 GB, and stability to reach more than 99.999%."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"problem",src:a(5432).c+"",width:"2014",height:"1280"})}),"\n",(0,i.jsx)(t.p,{children:"In the earlier environment, more consideration was given to data localization storage to improve the efficiency and stability of data reading. The information retrieval system generates index items every day and needs to update TB-level data. After the data is produced through offline database building services, it needs to be updated to corresponding shards, respectively. This mode brings many other challenges. The critical issues are data iteration and extensibility."}),"\n",(0,i.jsx)(t.h3,{id:"1-dispersion-of-datasets",children:"1. Dispersion of Datasets"}),"\n",(0,i.jsx)(t.p,{children:"In operation, each node of each shard needs to copy all the data of this shard, which brings the problem of synchronous data distribution. In operation, if you want to synchronize data to a single server node, you need to use hierarchical distribution. First, the first level (10 level) is distributed to the second level (100 level) and then to the third level (1,000 level). The distribution cycle is long and requires layer-by-layer verification to ensure data accuracy."}),"\n",(0,i.jsx)(t.h3,{id:"2-weak-auto-scaling-of-business-resources",children:"2. Weak Auto Scaling of Business Resources"}),"\n",(0,i.jsx)(t.p,{children:"The original system architecture adopts a tight coupling between compute and storage. The data storage and compute resources are bundled tightly, and the scaling of resources is not high. Scaling often needs to be carried out on an hourly basis, lacking the ability to cope with sudden peak network traffic scaling."}),"\n",(0,i.jsx)(t.h3,{id:"3-insufficient-extensibility-for-a-single-shard-of-data",children:"3. Insufficient Extensibility for a Single Shard of Data"}),"\n",(0,i.jsx)(t.p,{children:"The cap of a single shard of data is limited by the cap of single storage in a sharded cluster. If the storage capacity reaches the upper limit, you need to split the datasets, which is not driven by business requirements."}),"\n",(0,i.jsx)(t.p,{children:"Problems with data iteration and extensibility lead to cost pressures and weak automated processes."}),"\n",(0,i.jsx)(t.p,{children:"The key problems are caused by the decoupling of compute and storage through the analysis of the information retrieval system operation and data update process. Therefore, we need to consider how to decouple compute and storage. The complexity problem can only be solved fundamentally after introducing the compute-storage separation architecture."}),"\n",(0,i.jsx)(t.p,{children:"The most important thing about compute-storage separation is to split the way each node stores the full data of this shard and store the data in the shard on a logical remote machine. Compute-storage separation brings other problems, such as stability problems, reading methods and speed under large data volume, and the degree of intrusion to the business. However, these problems can be solved. Based on this, we believe that compute-storage separation must be the best way to solve the problem of system complexity."}),"\n",(0,i.jsx)(t.h2,{id:"compute-storage-separation-architecture-solves-complexity-issues",children:"Compute-Storage Separation Architecture Solves Complexity Issues"}),"\n",(0,i.jsx)(t.p,{children:"The new architecture must achieve the following goals to solve the problems that need to be considered in the preceding compute-storage separation:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Reading Stability"})," \u2013 The compute-storage separation is the replacement of the original file read by various components that work together. The data loading method can be replaced, but the stability of data reading still needs to be kept at the same level as the original."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"In the scenario of simultaneous data update of thousands of nodes in each shard, the reading speed needs to be improved to the greatest extent."})," Also, the pressure on the network needs to be controlled to a certain range."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"It supports reading data through the POSIX interface."})," POSIX is the most adaptable approach to various business scenarios. This way, the impact of downstream changes on the upstream is blocked without intruding into the business scenarios."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"The Controllability of the Data Iteration Process"})," \u2013 For online businesses, data iteration can be regarded as CD processes equivalent to service iteration. Then, the controllability of data iteration is important because it is part of the CD processes."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"The Scalability of Datasets"})," \u2013 The new architecture needs to be a set of replicable, expandable models. Therefore, it can be equipped to cope with the scaling of datasets and cluster sizes."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Finally, we chose the Fluid open-source project to achieve the goals as the key link of the new architecture."}),"\n",(0,i.jsx)(t.h3,{id:"component-introduction",children:"Component Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Fluid is an open-source Kubernetes-native distributed dataset orchestration and acceleration engine. It mainly serves data-intensive applications in cloud-native scenarios, such as big data applications and AI applications."}),"\n",(0,i.jsx)(t.p,{children:"The data layer abstraction provided by the Kubernetes service allows data to be moved, replicated, evicted, transformed, and managed flexibly and efficiently between storage sources, such as HDFS, OSS, Ceph, and cloud-native application computing on Kubernetes."}),"\n",(0,i.jsx)(t.p,{children:"Moreover, specific data operations are transparent to users. Users no longer need to worry about the efficiency of accessing remote data, the convenience of managing data sources, and how to help Kubernetes make O&M scheduling decisions. Users only need to access the abstracted data in the most natural Kubernetes native data volume mode. Then, the remaining tasks and underlying details can be processed by Fluid."}),"\n",(0,i.jsx)(t.p,{children:"The Fluid project currently focuses on two important scenarios: dataset orchestration and application orchestration. Dataset orchestration allows you to cache data from a specified dataset to a Kubernetes node with specified attributes, while application orchestration schedules a specified application to a node that can store (or has stored) the specified dataset. The two can also be combined to form a collaborative orchestration scenario; the datasets and application requirements are considered for node resource scheduling."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"fluid",src:a(7980).c+"",width:"619",height:"459"})}),"\n",(0,i.jsx)(t.h3,{id:"reasons-for-choosing-fluid",children:"Reasons for Choosing Fluid"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"The retrieval service has been containerized and naturally suitable for Fluid."}),"\n",(0,i.jsx)(t.li,{children:"Fluid is used as a data orchestration system so that the upper layer can use it directly without knowing the specific data distribution. At the same time, it can realize the nearby scheduling of business and accelerate the data access performance based on the perception and scheduling capability of data."}),"\n",(0,i.jsx)(t.li,{children:"Fluid implements the PVC interface, which allows a business pod to mount into the pod without awareness. Fluid can provide distributed and hierarchical caching of metadata and data and efficient file retrieval function without awareness like when using local disks."}),"\n",(0,i.jsx)(t.li,{children:"Fluid + JindoRuntime has a variety of built-in cache modes (back-to-origin mode and full cache mode), different cache policies (optimization for small file scenarios), and storage methods (disk and memory), which have good adaptability to different scenarios and can meet various business scenarios without too many modifications."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"implementation-practice",children:"Implementation Practice"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Separation of Cache Nodes and Compute Nodes: Fuse and worker can be deployed together to achieve better local data performance. However, we finally chose the separation of cache and compute nodes for online scenarios because it is worthwhile to extend a certain startup time for better elasticity. Also, we do not want the stability of service nodes to be entangled with the stability of cache nodes."}),"\n",(0,i.jsxs)(t.li,{children:["Fluid supports to schedule the datasets. In other words, it supports to schedule cache nodes. We schedule dataset cache nodes by specifying the ",(0,i.jsx)(t.code,{children:"nodeAffinity"})," of the dataset, thus ensuring that cache nodes can provide efficient and flexible cache services."]}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"High Requirements for Online Scenarios"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For online business scenarios, the system has high requirements for data access speed, integrity, and consistency. Therefore, partial data updates and unexpected back-to-origin requests cannot occur. The choice of data caching and update policies will be critical."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Appropriate Data Cache Policy"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Based on the preceding requirements, we use Fluid full cache mode. In full cache mode, all requests only go through the cache instead of back-to-origin data sources. It avoids unexpected long-duration requests. At the same time, the dataload process is controlled by the data update process, which is safer and more standardized."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Combined with the Update Process of the Permission Flow"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The data update of online business is a kind of CD, which also needs the update process to control. The online data distribution is safer and more standardized through the dataload mode combined with the permission flow."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Atomicity of Data Updates"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Since the model is composed of many files, a complete model can only be used when all files are cached. Therefore, on the premise that there is no return origin in the full cache, it is necessary to ensure the atomicity of the dataload process. During the data loading process, the new version data cannot be accessed, and the new version of data can only be read after the data loading is completed."}),"\n",(0,i.jsx)(t.p,{children:"The preceding solutions and policies (together with the automatic database building and data version management functions) improve the security and stability of the overall system significantly. At the same time, it makes the flow of the entire process more intelligent and automatic."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"architecture",src:a(6036).c+"",width:"782",height:"686"})}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"Based on the compute-storage separation architecture of Fluid, we have achieved:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Minute-level 100 T-level data distribution"}),"\n",(0,i.jsx)(t.li,{children:"The atomicity of data version management and data update makes data distribution and update controllable and smarter automatic processes."}),"\n",(0,i.jsx)(t.li,{children:"The information retrieval service can be like a normal stateless service. Therefore, it can realize horizontal expansion using k8s HPA. Also, faster scaling brings higher stability and availability."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"future-work",children:"Future Work"}),"\n",(0,i.jsx)(t.p,{children:"The mode of compute-storage separation allows us to consider that the special services can be stateless and can be incorporated into the DevOps system like normal services. However, the Fluid-based data orchestration and acceleration system is an entry point in the compute-storage separation practice. In addition to the information retrieval system, we are about to exploring the mode of training and distribution of Fluid-based OCR system models."}),"\n",(0,i.jsx)(t.p,{children:"In the future work, we plan to optimize the scheduling policy and execution mode of upper-layer jobs based on Fluid and expand model training and distribution to improve the overall training speed and resource utilization. On the other hand, it helps the community evolve its observability and high availability to help more developers."}),"\n",(0,i.jsx)(t.h2,{id:"about-the-authors",children:"About the Authors"}),"\n",(0,i.jsx)(t.p,{children:"Dong Xiaocong, Head of Zuoyebang Infrastructure, is mainly responsible for architecture research and development, operation and maintenance, DBA, and security. He has been responsible for architecture and technical management for Baidu, Didi Chuxing, and other enterprises, with skills around building and iterating the business middle platform, technology middle platform, and research and development middle platform."}),"\n",(0,i.jsx)(t.p,{children:"Zhang Haoran, who joined Zuoyebang in 2019, is a Senior Architect of Zuoyebang Infrastructure. During his time in Zuoyebang, he has promoted the evolution of Zuoyebang's cloud-native architecture. He is responsible for multi-cloud k8s cluster construction, k8s component research and development, Linux kernel optimization and tuning, and containerization of underlying services."})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},6036:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/zuoyebang-architecture-ba1eb69179cb351dfe63293ca0c5eca1.png"},7980:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/zuoyebang-fluid-44b186d53e6db78e2772e0c6fe7a6f94.png"},5432:(e,t,a)=>{a.d(t,{c:()=>i});const i=a.p+"assets/images/zuoyebang-problem-0e3c53d4aa4a1744c0f179e06202b49c.png"},2172:(e,t,a)=>{a.d(t,{I:()=>r,M:()=>o});var i=a(1504);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);