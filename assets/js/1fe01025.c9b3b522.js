"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[3380],{1686:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>r});var s=a(7624),l=a(2172);const t={sidebar_label:"Cache Co-locality",sidebar_position:3},o="Cache Co-locality",i={id:"tutorials/dataset-creation/cache-co-locality",title:"Cache Co-locality",description:"In Fluid, remote files specified in Dataset object are schedulable, which means you are able to control where to put your data in a k8s cluster,",source:"@site/versioned_docs/version-v1.0/tutorials/dataset-creation/cache-co-locality.md",sourceDirName:"tutorials/dataset-creation",slug:"/tutorials/dataset-creation/cache-co-locality",permalink:"/docs/tutorials/dataset-creation/cache-co-locality",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0/tutorials/dataset-creation/cache-co-locality.md",tags:[],version:"v1.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714050288,formattedLastUpdatedAt:"Apr 25, 2024",sidebarPosition:3,frontMatter:{sidebar_label:"Cache Co-locality",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Accelerate Data Accessing (via HDFS interface)",permalink:"/docs/tutorials/dataset-creation/accelerate-data-accessing-hdfs"},next:{title:"Share Data across Namespace (CSI mode)",permalink:"/docs/tutorials/dataset-creation/share-data-across-namespace-csi"}},c={},r=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set Up Workspace",id:"set-up-workspace",level:2},{value:"Install Resources to Kubernetes",id:"install-resources-to-kubernetes",level:2},{value:"Clean Up",id:"clean-up",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"cache-co-locality",children:"Cache Co-locality"}),"\n",(0,s.jsxs)(n.p,{children:["In Fluid, remote files specified in ",(0,s.jsx)(n.code,{children:"Dataset"})," object are schedulable, which means you are able to control where to put your data in a k8s cluster,\njust like what you may have done to Pods. Also, Fluid is able to make cache co-locality scheduling decisions for workloads to minimize overhead costs."]}),"\n",(0,s.jsx)(n.p,{children:"This tutorial will show you an overview about features mentioned above."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["Before everything we are going to do, please refer to ",(0,s.jsx)(n.a,{href:"/docs/get-started/installation",children:"Installation Guide"})," to install Fluid on your Kubernetes Cluster, and make sure all the components used by Fluid are ready like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5b64fdbbb-84pc6   1/1     Running   0          8h\ncsi-nodeplugin-fluid-fwgjh                  2/2     Running   0          8h\ncsi-nodeplugin-fluid-ll8bq                  2/2     Running   0          8h\ndataset-controller-5b7848dbbb-n44dj         1/1     Running   0          8h\n"})}),"\n",(0,s.jsx)(n.p,{children:'Normally, you shall see a Pod named "dataset-controller", a Pod named "alluxioruntime-controller" and several Pods named "csi-nodeplugin".\nThe num of "csi-nodeplugin" Pods depends on how many nodes your Kubernetes cluster have(e.g. 2 in this tutorial), so please make sure all "csi-nodeplugin" Pods are working properly.'}),"\n",(0,s.jsx)(n.h2,{id:"set-up-workspace",children:"Set Up Workspace"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ mkdir <any-path>/co-locality\n$ cd <any-path>/co-locality\n"})}),"\n",(0,s.jsx)(n.h2,{id:"install-resources-to-kubernetes",children:"Install Resources to Kubernetes"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Check all nodes in your Kubernetes cluster"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get nodes\nNAME                       STATUS   ROLES    AGE     VERSION\ncn-beijing.192.168.1.146   Ready    <none>   7d14h   v1.16.9-aliyun.1\ncn-beijing.192.168.1.147   Ready    <none>   7d14h   v1.16.9-aliyun.1\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Label one of the nodes"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl label nodes cn-beijing.192.168.1.146 hbase-cache=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Since we'll use ",(0,s.jsx)(n.code,{children:"NodeSelector"})," to manage where to put our data, we mark the desired node by labeling it."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Check all nodes again"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get node -L hbase-cache\nNAME                       STATUS   ROLES    AGE     VERSION            HBASE-CACHE\ncn-beijing.192.168.1.146   Ready    <none>   7d14h   v1.16.9-aliyun.1   true\ncn-beijing.192.168.1.147   Ready    <none>   7d14h   v1.16.9-aliyun.1   \n"})}),"\n",(0,s.jsxs)(n.p,{children:["Only one of the two nodes holds a label ",(0,s.jsx)(n.code,{children:"hbase-cache=true"}),". In the following steps, we are going to make sure it's the only location the data cache can be put on."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Check the ",(0,s.jsx)(n.code,{children:"Dataset"})," object to be created"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: hbase\nspec:\n  mounts:\n    - mountPoint: https://downloads.apache.org/hbase/stable/\n      name: hbase\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: hbase-cache\n              operator: In\n              values:\n                - "true"\nEOF\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We defined a ",(0,s.jsx)(n.code,{children:"nodeSelectorTerm"})," in ",(0,s.jsx)(n.code,{children:"Dataset"})," object's ",(0,s.jsx)(n.code,{children:"spec"})," to make sure only nodes with label ",(0,s.jsx)(n.code,{children:"hbase-cache=true"})," are considered to be available for the dataset."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create the dataset object"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f dataset.yaml\ndataset.data.fluid.io/hbase created\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Check the ",(0,s.jsx)(n.code,{children:"AlluxioRuntime"})," object to be created"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'$ cat<<EOF >runtime.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: hbase\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this snippet of yaml, there are many specifications used by Fluid to launch an Alluxio instance. The ",(0,s.jsx)(n.code,{children:"spec.replicas"})," in the yaml above is set to 2, which means an Alluxio instance with 1 master and 2 workers is expected to be launched."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Create the ",(0,s.jsx)(n.code,{children:"AlluxioRuntime"})," object"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f runtime.yaml\nalluxioruntime.data.fluid.io/hbase created\n\n$ kubectl get pod -o wide\nNAME                 READY   STATUS    RESTARTS   AGE    IP              NODE                       NOMINATED NODE   READINESS GATES\nhbase-master-0       2/2     Running   0          3m3s   192.168.1.147   cn-beijing.192.168.1.147   <none>           <none>\nhbase-worker-0       2/2     Running   0          104s   192.168.1.146   cn-beijing.192.168.1.146   <none>           <none>\nhbase-worker-1       0/2     Pending   0          104s   <none>          <none>                     <none>           <none>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["While two running workers are expected, only one Alluxio Worker Pod is successfully scheduled and runs on the node with label ",(0,s.jsx)(n.code,{children:"hbase-cache=true"}),". The ",(0,s.jsx)(n.code,{children:"nodeSelectorTerm"})," stops another worker from being deployed."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["Check status of the ",(0,s.jsx)(n.code,{children:"AlluxioRuntime"})," object"]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get alluxioruntime hbase -o wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE     AGE\nhbase   1               1                 Ready          1               2                 PartialReady   0             0               Ready          4m3s\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As expected, ",(0,s.jsx)(n.code,{children:"Worker Phase"})," is ",(0,s.jsx)(n.code,{children:"PartialReady"})," and ",(0,s.jsx)(n.code,{children:"Ready Workers: 1"})," is less than ",(0,s.jsx)(n.code,{children:"Desired Workers: 2"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Label another node"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl label node cn-beijing.192.168.1.147 hbase-cache=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now all of the two nodes hold the same label ",(0,s.jsx)(n.code,{children:"hbase-cache=true"}),", re-check all the pods:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -o wide\nNAME                 READY   STATUS    RESTARTS   AGE   IP              NODE                       NOMINATED NODE   READINESS GATES\nhbase-master-0       2/2     Running   0          46m   192.168.1.147   cn-beijing.192.168.1.147   <none>           <none>\nhbase-worker-0       2/2     Running   0          44m   192.168.1.146   cn-beijing.192.168.1.146   <none>           <none>\nhbase-worker-1       2/2     Running   0          44m   192.168.1.147   cn-beijing.192.168.1.147   <none>           <none>\n"})}),"\n",(0,s.jsx)(n.p,{children:"There're two running Alluxio workers now."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl get alluxioruntime hbase -o wide\nNAME    READY MASTERS   DESIRED MASTERS   MASTER PHASE   READY WORKERS   DESIRED WORKERS   WORKER PHASE   READY FUSES   DESIRED FUSES   FUSE PHASE   AGE\nhbase   1               1                 Ready          2               2                 Ready          0             0               Ready        46m43s\n"})}),"\n",(0,s.jsx)(n.p,{children:"In conclusion, Fluid takes data cache as a schedulable resource in Kubernetes and allow users to define where to put their data cache. Usually, such policy can provide a more flexible way to users who need some data management in Kubernetes."}),"\n",(0,s.jsx)(n.h2,{id:"clean-up",children:"Clean Up"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ kubectl delete -f .\n\n# unlabel nodes\n$ kubectl label node cn-beijing.192.168.1.146 hbase-cache-\n$ kubectl label node cn-beijing.192.168.1.147 hbase-cache-\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,n,a)=>{a.d(n,{I:()=>i,M:()=>o});var s=a(1504);const l={},t=s.createContext(l);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);