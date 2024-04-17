"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[2176],{3876:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>r});var n=t(7624),i=t(2172);const s={sidebar_label:"Automatic Cleanup Data Operation",sidebar_position:3},o="Automatic Cleanup Data Operation",l={id:"tutorials/dataset-operation/automatic-cleanup-data-operation",title:"Automatic Cleanup Data Operation",description:"Background",source:"@site/docs/tutorials/dataset-operation/automatic-cleanup-data-operation.md",sourceDirName:"tutorials/dataset-operation",slug:"/tutorials/dataset-operation/automatic-cleanup-data-operation",permalink:"/zh/docs/next/tutorials/dataset-operation/automatic-cleanup-data-operation",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/docs/tutorials/dataset-operation/automatic-cleanup-data-operation.md",tags:[],version:"current",lastUpdatedBy:"ZhangXiaozheng",lastUpdatedAt:1712661563,formattedLastUpdatedAt:"2024\u5e744\u67089\u65e5",sidebarPosition:3,frontMatter:{sidebar_label:"Automatic Cleanup Data Operation",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Cache Runtime Manually Scaling",permalink:"/zh/docs/next/tutorials/dataset-operation/cache-runtime-manually-scaling"},next:{title:"Encrypted Options for Dataset",permalink:"/zh/docs/next/tutorials/dataset-security/encrypted-options-for-dataset"}},d={},r=[{value:"Background",id:"background",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Automatic cleanup data operation",id:"automatic-cleanup-data-operation-1",level:2},{value:"1.Set up demo dataset",id:"1set-up-demo-dataset",level:3},{value:"2.Set up data operation",id:"2set-up-data-operation",level:3},{value:"Caution: Time skew",id:"caution-time-skew",level:2}];function c(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"automatic-cleanup-data-operation",children:"Automatic Cleanup Data Operation"}),"\n",(0,n.jsx)(a.h2,{id:"background",children:"Background"}),"\n",(0,n.jsx)(a.p,{children:"Fluid's universal data operations describe operations such as data prefetch, data migration, elastic scaling, cache cleaning, metadata backup, and recovery.\nSimilar to the Kubernetes Job's automatic cleaning mechanism, Fluid also provides automatic cleanup data operation, leveraging the Time-to-Live (TTL) mechanism to limit the lifecycle of data operations that have finished execution. This document will briefly demonstrate the utilization of these features."}),"\n",(0,n.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsxs)(a.p,{children:["Before we start, please refer to ",(0,n.jsx)(a.a,{href:"/docs/get-started/installation",children:"Installation Guide"})," to install Fluid on your Kubernetes Cluster.\n",(0,n.jsx)(a.strong,{children:"Make sure that all the components required by Fluid are set up correctly like this"}),":"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nalluxioruntime-controller-5b64fdbbb-84pc6   1/1     Running   0          8h\ncsi-nodeplugin-fluid-fwgjh                  2/2     Running   0          8h\ncsi-nodeplugin-fluid-ll8bq                  2/2     Running   0          8h\ndataset-controller-5b7848dbbb-n44dj         1/1     Running   0          8h\n"})}),"\n",(0,n.jsx)(a.h2,{id:"automatic-cleanup-data-operation-1",children:"Automatic cleanup data operation"}),"\n",(0,n.jsx)(a.h3,{id:"1set-up-demo-dataset",children:"1.Set up demo dataset"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Check the Dataset and AlluxioRuntime objects to be created"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Create the Dataset and AlluxioRuntime"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"$ kubectl create -f dataset.yaml\n"})}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Wait for the Dataset and AlluxioRuntime to be ready"}),"\nYou can check their status by running:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"$ kubectl get datasets hbase\n"})}),"\n",(0,n.jsx)(a.p,{children:"Dataset and Runtime are all ready if you see something like this:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"NAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase   1.21GiB          0.00B    2.00GiB          0.0%                Bound      75s\n"})}),"\n",(0,n.jsx)(a.h3,{id:"2set-up-data-operation",children:"2.Set up data operation"}),"\n",(0,n.jsx)(a.p,{children:"We use Dataload to show the automatic cleanup of data operations here."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Check the Dataload objects to be created"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"$ cat <<EOF > dataload.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: DataLoad\nmetadata:\n  name: hbase-dataload\nspec:\n  dataset:\n    name: hbase\n    namespace: default\n  ttlSecondsAfterFinished: 300\nEOF\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Here, we use the ",(0,n.jsx)(a.code,{children:"spec.ttlSecondsAfterFinished"})," field to indicate how many seconds the data operation will be cleaned up after the job is Complete or Failed, in seconds."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Create the Dataload"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:"$ kubectl apply -f dataload.yaml\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Watch the Dataload status"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'$ kubectl get dataload -w \nNAME             DATASET   PHASE       AGE   DURATION\nhbase-dataload   hbase     Executing   7s    Unfinished\nhbase-dataload   hbase     Complete    29s   7s\nhbase-dataload   hbase     Complete    5m29s   7s\n\n$ kubectl get dataload hbase-dataload\nError from server (NotFound): dataloads.data.fluid.io "hbase-dataload" not found\n'})}),"\n",(0,n.jsxs)(a.p,{children:["It can be seen that 300s after the execution of ",(0,n.jsx)(a.code,{children:"hbase-dataload"})," is completed, the dataload will be automatically cleaned."]}),"\n",(0,n.jsx)(a.h2,{id:"caution-time-skew",children:"Caution: Time skew"}),"\n",(0,n.jsxs)(a.p,{children:["Because the TTL-after-finished controller (Fluid dataset-controller) uses timestamps stored in the Data Operation to determine whether the TTL has expired or not, this feature is sensitive to time skew in your cluster, which might lead to premature or delayed cleanup of Job objects. ",(0,n.jsx)(a.strong,{children:"Be cautious when setting a non-zero TTL"}),"."]})]})}function u(e={}){const{wrapper:a}={...(0,i.M)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2172:(e,a,t)=>{t.d(a,{I:()=>l,M:()=>o});var n=t(1504);const i={},s=n.createContext(i);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);