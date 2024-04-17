"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[3836],{6344:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var t=a(7624),i=a(2172);const s={sidebar_label:"Cache Runtime Manually Scaling",sidebar_position:2},l="Cache Runtime Manually Scaling",r={id:"tutorials/dataset-operation/cache-runtime-manually-scaling",title:"Cache Runtime Manually Scaling",description:"Prerequisites",source:"@site/docs/tutorials/dataset-operation/cache-runtime-manually-scaling.md",sourceDirName:"tutorials/dataset-operation",slug:"/tutorials/dataset-operation/cache-runtime-manually-scaling",permalink:"/zh/docs/next/tutorials/dataset-operation/cache-runtime-manually-scaling",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/docs/tutorials/dataset-operation/cache-runtime-manually-scaling.md",tags:[],version:"current",lastUpdatedBy:"ZhangXiaozheng",lastUpdatedAt:1712661563,formattedLastUpdatedAt:"2024\u5e744\u67089\u65e5",sidebarPosition:2,frontMatter:{sidebar_label:"Cache Runtime Manually Scaling",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Data Preloading",permalink:"/zh/docs/next/tutorials/dataset-operation/data-preloading"},next:{title:"Automatic Cleanup Data Operation",permalink:"/zh/docs/next/tutorials/dataset-operation/automatic-cleanup-data-operation"}},c={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set Up Workspace",id:"set-up-workspace",level:2},{value:"Running",id:"running",level:2},{value:"Clean your environment",id:"clean-your-environment",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cache-runtime-manually-scaling",children:"Cache Runtime Manually Scaling"}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid",children:"Fluid"})," (version >= 0.5.0)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the ",(0,t.jsx)(n.a,{href:"/docs/get-started/installation",children:"Fluid installation"})," to complete the installation"]}),"\n",(0,t.jsx)(n.h2,{id:"set-up-workspace",children:"Set Up Workspace"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ mkdir <any-path>/dataset_scale\n$ cd <any-path>/dataset_scale\n"})}),"\n",(0,t.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create Dataset and AlluxioRuntime resource objects"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'$ cat << EOF > dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://mirrors.tuna.tsinghua.edu.cn/apache/hbase/stable/\n      name: hbase\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the above example, we set ",(0,t.jsx)(n.code,{children:"AlluxioRuntime.spec.replicas"})," to 1, which means we will start an Alluxio cluster with one worker to cache the data in the dataset."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl create -f dataset.yaml\ndataset.data.fluid.io/hbase created\nalluxioruntime.data.fluid.io/hbase created\n"})}),"\n",(0,t.jsx)(n.p,{children:"After the Alluxio cluster has started normally, we can see that the Dataset and AlluxioRuntime created before are in the following state:"}),"\n",(0,t.jsx)(n.p,{children:"Status of the Alluxio components:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl get pod\nNAME                 READY   STATUS    RESTARTS   AGE\nhbase-master-0       2/2     Running   0          3m50s\nhbase-worker-0       2/2     Running   0          3m15s\n"})}),"\n",(0,t.jsx)(n.p,{children:"Status of the Dataset\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase   544.77MiB        0.00B    2.00GiB          0.0%                Bound   3m28s\n"})}),"\n",(0,t.jsx)(n.p,{children:"Status of the AlluxioRuntime:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl get alluxioruntime hbase -o wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE   AGE\nhbase   1               1                 Ready          1               1                 Ready          0             0               Ready        4m55s\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Scale-out Cache Runtime"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl scale alluxioruntime hbase --replicas=2\nalluxioruntime.data.fluid.io/hbase scaled\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Directly use the ",(0,t.jsx)(n.code,{children:"kubectl scale"})," command to complete the scale-out of Cache Runtime. After successfully executing the above command and waiting for a while, you can see that the status of both Dataset and AlluxioRuntime has changed."]}),"\n",(0,t.jsx)(n.p,{children:"A new Alluxio Worker and the corresponding Alluxio Fuse component have been successfully started:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl get pod\nNAME                 READY   STATUS    RESTARTS   AGE\nhbase-master-0       2/2     Running   0          13m\nhbase-worker-1       2/2     Running   0          6m49s\nhbase-worker-0       2/2     Running   0          13m\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Cache Capacity"})," in the Dataset changes from ",(0,t.jsx)(n.code,{children:"2.00GiB"})," to ",(0,t.jsx)(n.code,{children:"4.00GiB"}),", indicating an increase in the available cache capacity of the Dataset:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase   544.77MiB        0.00B    4.00GiB          0.0%                Bound   15m\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl get alluxioruntime hbase -o wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE   AGE\nhbase   1               1                 Ready          2               2                 Ready          0             0               Ready        17m\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check the AlluxioRuntime description for the latest scaling information:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl describe alluxioruntime hbase\n...\n  Conditions:\n    ...\n    Last Probe Time:                2021-04-23T07:54:03Z\n    Last Transition Time:           2021-04-23T07:54:03Z\n    Message:                        The workers are scale out.\n    Reason:                         Workers scaled out\n    Status:                         True\n    Type:                           WorkersScaledOut\n...\nEvents:\n  Type    Reason   Age   From            Message\n  ----    ------   ----  ----            -------\n  Normal  Succeed  2m2s  AlluxioRuntime  Runtime scaled out. current replicas: 2, desired replicas: 2.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Scale-in Cache Runtime"})}),"\n",(0,t.jsxs)(n.p,{children:["Similar to scale-out, the number of workers in the Runtime can also scale-in using ",(0,t.jsx)(n.code,{children:"kubectl scale"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl scale alluxioruntime hbase --replicas=1\nalluxioruntime.data.fluid.io/hbase scaled\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After successful execution of the above command, ",(0,t.jsx)(n.strong,{children:"if no application is trying to access the dataset currently"}),", then the Cache Runtime scale-in will be triggered."]}),"\n",(0,t.jsxs)(n.p,{children:["Runtime Workers that exceed the specified number of ",(0,t.jsx)(n.code,{children:"replicas"})," will be stopped:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"NAME                 READY   STATUS        RESTARTS   AGE\nhbase-master-0       2/2     Running       0          22m\nhbase-worker-1       2/2     Terminating   0          17m32s\nhbase-worker-0       2/2     Running       0          21m\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Dataset's cache capacity (",(0,t.jsx)(n.code,{children:"Cache Capacity"}),") is returned to ",(0,t.jsx)(n.code,{children:"2.00GiB"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl get dataset hbase\nNAME    UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nhbase   544.77MiB        0.00B    2.00GiB          0.0%                Bound   30m\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: In the current version of Fluid, there is a delay of a few minutes in the change of the ",(0,t.jsx)(n.code,{children:"Cache Capacity"})," property when scale-in, so you may not be able to observe the change of this property quickly."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Ready Workers"})," and ",(0,t.jsx)(n.code,{children:"Ready Fuses"})," fields in AlluxioRuntime also become ",(0,t.jsx)(n.code,{children:"1"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl get alluxioruntime hbase -o wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE   AGE\nhbase   1               1                 Ready          1               1                 Ready          0             0               Ready        30m\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check the AlluxioRuntime description for the latest scaling information:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl describe alluxioruntime hbase\n...\n  Conditions:\n    ...\n    Last Probe Time:                2021-04-23T08:00:55Z\n    Last Transition Time:           2021-04-23T08:00:55Z\n    Message:                        The workers scaled in.\n    Reason:                         Workers scaled in\n    Status:                         True\n    Type:                           WorkersScaledIn\n...\nEvents:\n  Type     Reason               Age    From            Message\n  ----     ------               ----   ----            -------\n  Normal   Succeed              6m56s  AlluxioRuntime  Alluxio runtime scaled out. current replicas: 2, desired replicas: 2.\n  Normal   Succeed              4s     AlluxioRuntime  Alluxio runtime scaled in. current replicas: 1, desired replicas: 1.\n"})}),"\n",(0,t.jsx)(n.p,{children:"The scaling capability provided by Fluid helps users or cluster administrators to adjust the resources occupied by the dataset cache in a timely manner, reducing the cache capacity of an infrequently used dataset (scale-in) or increasing the cache capacity of a dataset on demand (scale-out) to achieve a more fine-grained resource allocation and improve resource utilization."}),"\n",(0,t.jsx)(n.h2,{id:"clean-your-environment",children:"Clean your environment"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -f dataset.yaml\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},2172:(e,n,a)=>{a.d(n,{I:()=>r,M:()=>l});var t=a(1504);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);