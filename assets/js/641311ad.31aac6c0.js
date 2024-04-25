"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[7716],{4028:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=n(7624),s=n(2172);const d={sidebar_label:"Data Preloading",sidebar_position:1},i="Data Preloading",o={id:"tutorials/dataset-operation/data-preloading",title:"Data Preloading",description:"In order to ensure the performance of the application when accessing the data,",source:"@site/versioned_docs/version-v1.0/tutorials/dataset-operation/data-preloading.md",sourceDirName:"tutorials/dataset-operation",slug:"/tutorials/dataset-operation/data-preloading",permalink:"/docs/tutorials/dataset-operation/data-preloading",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0/tutorials/dataset-operation/data-preloading.md",tags:[],version:"v1.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714050288,formattedLastUpdatedAt:"Apr 25, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"Data Preloading",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Share Data across Namespace (Sidecar mode)",permalink:"/docs/tutorials/dataset-creation/share-data-across-namespace-sidecar"},next:{title:"Cache Runtime Manually Scaling",permalink:"/docs/tutorials/dataset-operation/cache-runtime-manually-scaling"}},r={},l=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Set Up Workspace",id:"set-up-workspace",level:2},{value:"DataLoad Quick Usage",id:"dataload-quick-usage",level:2},{value:"DataLoad Advanced Configurations",id:"dataload-advanced-configurations",level:2},{value:"Preload data under some specified path only",id:"preload-data-under-some-specified-path-only",level:3},{value:"Set cache replicas when preloading data",id:"set-cache-replicas-when-preloading-data",level:3},{value:"Sync metadata before preloading data",id:"sync-metadata-before-preloading-data",level:3},{value:"Clean up",id:"clean-up",level:2}];function c(e){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"data-preloading",children:"Data Preloading"}),"\n",(0,t.jsxs)(a.p,{children:["In order to ensure the performance of the application when accessing the data,\nthe data in the remote storage system can be pulled to the distributed cache engine\nthat is close to the computing node through ",(0,t.jsx)(a.strong,{children:"data preloading"})," beofre the application starts.\nThen the application that consumes the data can enjoy the acceleration effect brought by distributed cache even at the first time."]}),"\n",(0,t.jsxs)(a.p,{children:["For the great benefit mentioned above, we provide ",(0,t.jsx)(a.strong,{children:"DataLoad CRD"}),". This is a CRD which offers you a clear and easy way to controll data preloading behaviors."]}),"\n",(0,t.jsx)(a.p,{children:"This document will introduce you two different ways about how to use DataLoad CRD:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#dataload-quick-usage",children:"DataLoad Quick Usage"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.a,{href:"#dataload-advanced-configurations",children:"DataLoad Advanced Configurations"})}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"prerequisite",children:"Prerequisite"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"https://github.com/fluid-cloudnative/fluid",children:"Fluid"}),"(version >= 0.4.0)"]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Please refer to the ",(0,t.jsx)(a.a,{href:"/docs/get-started/installation",children:"installation guide"})," to complete the installation of fluid."]}),"\n",(0,t.jsx)(a.h2,{id:"set-up-workspace",children:"Set Up Workspace"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"$ mkdir <any-path>/warmup\n$ cd <any-path>/warmup\n"})}),"\n",(0,t.jsx)(a.h2,{id:"dataload-quick-usage",children:"DataLoad Quick Usage"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Check the Dataset and AlluxioRuntime objects to be created"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:'cat << EOF > dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: spark\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/spark/\n      name: spark\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: spark\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["Notes: Here, we use THU's tuna Apache mirror site as our ",(0,t.jsx)(a.code,{children:"mountPoint"}),". If your environment isn't in Chinese mainland, please replace it with ",(0,t.jsx)(a.code,{children:"https://downloads.apache.org/spark/"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Here, we'd like to create a resource object with kind ",(0,t.jsx)(a.code,{children:"Dataset"}),". ",(0,t.jsx)(a.code,{children:"Dataset"})," is a Custom Resource Definition(CRD) defined by Fluid and used to tell Fluid where to find all the data you'd like to access.\nIn this guide, we'll use ",(0,t.jsx)(a.a,{href:"https://docs.alluxio.io/os/user/stable/en/ufs/WEB.html",children:"WebUFS"})," for its simplicity."]}),"\n",(0,t.jsxs)(a.p,{children:["For more information about UFS, please refer to ",(0,t.jsx)(a.a,{href:"https://docs.alluxio.io/os/user/stable/en/ufs/HDFS.html",children:"Alluxio Docs - Storage Integrations"})]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["We use Apache Spark on a mirror site of Apache downloads as an example of remote file. It's nothing special, you can change it to any remote file you like. But please note that, if you are going to use WebUFS like we do, files on Apache sites are highly recommended because you might need some ",(0,t.jsx)(a.a,{href:"https://docs.alluxio.io/os/user/stable/en/ufs/WEB.html#configuring-alluxio",children:"advanced configurations"})," due to current implementation of WebUFS."]}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Create the Dataset and AlluxioRuntime"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"kubectl create -f dataset.yaml\n"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Wait for the Dataset and AlluxioRuntime to be ready"})}),"\n",(0,t.jsx)(a.p,{children:"You can check their status by running:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"kubectl get datasets spark\n"})}),"\n",(0,t.jsx)(a.p,{children:"Dataset and Runtime are all ready if you see something like this:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"NAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nspark   1.92GiB          0.00B    4.00GiB          0.0%                Bound   4m4s\n"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Check the DataLoad object to be created"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:"cat <<EOF > dataload.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: DataLoad\nmetadata:\n  name: spark-dataload\nspec:\n  dataset:\n    name: spark\n    namespace: default\nEOF\n"})}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"spec.dataset"})," specifies the target dataset that needs to be preloaded. In this example, our target is the Dataset named ",(0,t.jsx)(a.code,{children:"spark"})," under the ",(0,t.jsx)(a.code,{children:"default"})," namespace.\nFeel free to change the configuration above if it doesn't match your actual environment. ** note ** The namespace of your DataLoad must be consistent with the namespace of your dataset."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"By default, it'll preload all the data in the target dataset"}),". If you'd like to controll the data preloading behaviors in a more find-grained way(e.g. preload data under some specified path only),\nplease refer to ",(0,t.jsx)(a.a,{href:"#dataload-advanced-configurations",children:"DataLoad Advanced Configurations"})]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Create the DataLoad object"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"kubectl create -f dataload.yaml\n"})}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Check DataLoad's status"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"kubectl get dataload spark-dataload\n"})}),"\n",(0,t.jsx)(a.p,{children:"You shall see something like:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"NAME             DATASET   PHASE     AGE\nspark-dataload   spark     Loading   2m13s\n"})}),"\n",(0,t.jsx)(a.p,{children:"In addition, you can get detailed info about the DataLoad object by:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"kubectl describe dataload spark-dataload\n"})}),"\n",(0,t.jsx)(a.p,{children:"and you shall see something like this:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"Name:         spark-dataload\nNamespace:    default\nLabels:       <none>\nAnnotations:  <none>\nAPI Version:  data.fluid.io/v1alpha1\nKind:         DataLoad\n...\nSpec:\n  Dataset:\n    Name:       spark\n    Namespace:  default\nStatus:\n  Conditions:\n  Phase:  Loading\nEvents:\n  Type    Reason              Age   From      Message\n  ----    ------              ----  ----      -------\n  Normal  DataLoadJobStarted  80s   DataLoad  The DataLoad job spark-dataload-loader-job started\n"})}),"\n",(0,t.jsx)(a.p,{children:"The data preloading process may take serveral minutes according to your network environment."}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Wait for the data preloading to complete"})}),"\n",(0,t.jsx)(a.p,{children:"Check its status by running:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"kubectl get dataload spark-dataload\n"})}),"\n",(0,t.jsxs)(a.p,{children:["If the data preloading is already done, you should find that the ",(0,t.jsx)(a.code,{children:"Phase"})," of the DataLoad has turned to ",(0,t.jsx)(a.code,{children:"Complete"}),":"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"NAME             DATASET   PHASE      AGE\nspark-dataload   spark     Complete   5m17s\n"})}),"\n",(0,t.jsx)(a.p,{children:"Now check the status of the dataset again:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"kubectl get dataset spark\n"})}),"\n",(0,t.jsx)(a.p,{children:"You'll find that all data in the remote file storage has already been preloaded into the distributed cache engine:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"NAME    UFS TOTAL SIZE   CACHED    CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nspark   1.92GiB          1.92GiB   4.00GiB          100.0%              Bound   7m41s\n"})}),"\n",(0,t.jsx)(a.h2,{id:"dataload-advanced-configurations",children:"DataLoad Advanced Configurations"}),"\n",(0,t.jsx)(a.p,{children:"Besides the basic data preloading feature showed in the above example,\nwith a little bit more configurations, you can enable some advanced features that the DataLoad CRD offers, including:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Preload data under some specified path only"}),"\n",(0,t.jsx)(a.li,{children:"Set cache replicas when preloading data"}),"\n",(0,t.jsx)(a.li,{children:"Sync metadata before preloading data"}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"preload-data-under-some-specified-path-only",children:"Preload data under some specified path only"}),"\n",(0,t.jsx)(a.p,{children:"With some extra configurations, DataLoad will only preload data under some specified path (or file) instead of the whole dataset. For example:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:"apiVersion: data.fluid.io/v1alpha1\nkind: DataLoad\nmetadata:\n  name: spark-dataload\nspec:\n  dataset:\n    name: spark\n    namespace: default\n  target:\n    - path: /spark/spark-2.4.7\n    - path: /spark/spark-3.0.1/pyspark-3.0.1.tar.gz\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Instead of the whole dataset, the above DataLoad will only preload ",(0,t.jsx)(a.code,{children:"/spark/spark-2.4.7"})," and ",(0,t.jsx)(a.code,{children:"/spark/spark-3.0.1/pyspark-3.0.1.tar.gz"})]}),"\n",(0,t.jsx)(a.h3,{id:"set-cache-replicas-when-preloading-data",children:"Set cache replicas when preloading data"}),"\n",(0,t.jsx)(a.p,{children:"When preloading data, you can set cache replicas by simple configuration. For example:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:"apiVersion: data.fluid.io/v1alpha1\nkind: DataLoad\nmetadata:\n  name: spark-dataload\nspec:\n  dataset:\n    name: spark\n    namespace: default\n  target:\n    - path: /spark/spark-2.4.7\n      replicas: 1\n    - path: /spark/spark-3.0.1/pyspark-3.0.1.tar.gz\n      replicas: 2\n"})}),"\n",(0,t.jsxs)(a.p,{children:["The above DataLoad will preload all the files under ",(0,t.jsx)(a.code,{children:"/spark/spark-2.4.7"})," with ",(0,t.jsx)(a.strong,{children:"only one"})," cache replicas in the distributed cache engine, while it will\npreload the file ",(0,t.jsx)(a.code,{children:"/spark/spark-3.0.1/pyspark-3.0.1.tar.gz"})," with ",(0,t.jsx)(a.strong,{children:"two"})," cache replicas."]}),"\n",(0,t.jsx)(a.h3,{id:"sync-metadata-before-preloading-data",children:"Sync metadata before preloading data"}),"\n",(0,t.jsx)(a.p,{children:"Under many circumstances, files in the remote storage system has changed.\nDistributed cache engine like Alluxio needs to sync metadata to update its view of the remote file storage.\nIt is very common to sync metadata before preloading data from remote file storage, DataLoad CRD offers you a simple way to do this:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-yaml",children:"apiVersion: data.fluid.io/v1alpha1\nkind: DataLoad\nmetadata:\n  name: spark-dataload\nspec:\n  dataset:\n    name: spark\n    namespace: default\n  loadMetadata: true\n  target:\n    - path: /\n      replicas: 1\n"})}),"\n",(0,t.jsxs)(a.p,{children:["By setting ",(0,t.jsx)(a.code,{children:"loadMetadata"})," to true, you can sync metadata before the data preload starts."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsx)(a.p,{children:"Notes: Syncing metadata from remote under storage is usually expensive. We do not suggest you enable it if it's not necessary."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"clean-up",children:"Clean up"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"$ kubectl delete -f .\n"})})]})}function h(e={}){const{wrapper:a}={...(0,s.M)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,a,n)=>{n.d(a,{I:()=>o,M:()=>i});var t=n(1504);const s={},d=t.createContext(s);function i(e){const a=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:a},e.children)}}}]);