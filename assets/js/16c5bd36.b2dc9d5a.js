"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[9824],{5816:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=s(7624),i=s(2172);const a={sidebar_label:"Using Fluid on ARM64 Platform",sidebar_position:9},d="Using Fluid on ARM64 Platform",l={id:"tutorials/advanced/using-fluid-on-arm64-platform",title:"Using Fluid on ARM64 Platform",description:"Prerequisites",source:"@site/versioned_docs/version-v0.9/tutorials/advanced/using-fluid-on-arm64-platform.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/using-fluid-on-arm64-platform",permalink:"/docs/v0.9/tutorials/advanced/using-fluid-on-arm64-platform",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v0.9/tutorials/advanced/using-fluid-on-arm64-platform.md",tags:[],version:"v0.9",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714041983,formattedLastUpdatedAt:"Apr 25, 2024",sidebarPosition:9,frontMatter:{sidebar_label:"Using Fluid on ARM64 Platform",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"How to Ensure the Completion of Serverless Tasks",permalink:"/docs/v0.9/tutorials/advanced/serverless/how-to-ensure-the-completion-of-serverless-tasks"},next:{title:"Support Image Pull Secrets",permalink:"/docs/v0.9/tutorials/advanced/support-image-pull-secrets"}},r={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Get the latest code of Fluid",id:"get-the-latest-code-of-fluid",level:3},{value:"Build AMD64 and ARM64 container images",id:"build-amd64-and-arm64-container-images",level:3},{value:"Change the image version in helm chart",id:"change-the-image-version-in-helm-chart",level:3},{value:"Create an ARM64 based Kubernetes cluster and install helm chart",id:"create-an-arm64-based-kubernetes-cluster-and-install-helm-chart",level:3},{value:"View ARM64 based nodes",id:"view-arm64-based-nodes",level:4},{value:"Installation",id:"installation",level:4},{value:"Example",id:"example",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"using-fluid-on-arm64-platform",children:"Using Fluid on ARM64 Platform"}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.h3,{id:"get-the-latest-code-of-fluid",children:"Get the latest code of Fluid"}),"\n",(0,t.jsxs)(n.p,{children:["The official image for multiple platforms is provided by Fluid community. You can refer to the ",(0,t.jsx)(n.a,{href:"/docs/get-started/quick-start",children:"document"})," to deploy Fluid diretly and jump to the step of ",(0,t.jsx)(n.em,{children:"Example"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ mkdir -p $GOPATH/src/github.com/fluid-cloudnative/\n$ cd $GOPATH/src/github.com/fluid-cloudnative\n$ git clone https://github.com/fluid-cloudnative/fluid.git\n$ cd $GOPATH/src/github.com/fluid-cloudnative/fluid\n"})}),"\n",(0,t.jsx)(n.h3,{id:"build-amd64-and-arm64-container-images",children:"Build AMD64 and ARM64 container images"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ export DOCKER_CLI_EXPERIMENTAL=enabled\n$ docker run --rm --privileged docker/binfmt:66f9012c56a8316f9244ffd7622d7c21c1f6f28d\n$ docker buildx create --use --name mybuilder\n$ export IMG_REPO=<your docker image repo>\n$ make docker-buildx-all-push\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Get the built image address and image version"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"change-the-image-version-in-helm-chart",children:"Change the image version in helm chart"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ cd $GOPATH/src/github.com/fluid-cloudnative/fluid/charts/fluid/fluid\n$ vim values.yaml\n"})}),"\n",(0,t.jsx)(n.h3,{id:"create-an-arm64-based-kubernetes-cluster-and-install-helm-chart",children:"Create an ARM64 based Kubernetes cluster and install helm chart"}),"\n",(0,t.jsx)(n.h4,{id:"view-arm64-based-nodes",children:"View ARM64 based nodes"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl get no -l kubernetes.io/arch=arm64\nNAME                       STATUS   ROLES    AGE    VERSION\ncn-beijing.192.168.3.183   Ready    <none>   6d3h   v1.22.10\ncn-beijing.192.168.3.184   Ready    <none>   6d3h   v1.22.10\ncn-beijing.192.168.3.185   Ready    <none>   6d3h   v1.22.10\n"})}),"\n",(0,t.jsx)(n.h4,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl create ns fluid-system\n$ helm install fluid fluid\nNAME: fluid\nLAST DEPLOYED: Sat Aug 20 21:43:27 2022\nNAMESPACE: default\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"This example is based on JuiceFSRuntime"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Creating an ARM64 based Kubernetes cluster"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid/blob/master/docs/en/samples/juicefs_setup.md",children:"document"})," to prepare JuiceFS Community Edition"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Before using JuiceFS, you need to provide parameters for metadata services (such as Redis) and object storage services (such as MinIO), and create corresponding secrets:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"kubectl create secret generic jfs-secret \\\n    --from-literal=metaurl=redis://redis:6379/0 \\\n    --from-literal=access-key=minioadmin \\\n    --from-literal=secret-key=minioadmin\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"metaurl"}),": Connection URL for metadata engine (e.g. Redis). Read ",(0,t.jsx)(n.a,{href:"https://juicefs.com/docs/community/databases_for_metadata/",children:"this document"})," for more information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"access-key"}),": Access key of object storage."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"secret-key"}),": Secret key of object storage."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Check ",(0,t.jsx)(n.code,{children:"Dataset"})," to be created"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: jfsdemo\nspec:\n  mounts:\n    - name: minio\n      mountPoint: "juicefs:///"\n      options:\n        bucket: "http://minio:9000/minio/test"\n        storage: "minio"\n      encryptOptions:\n        - name: metaurl\n          valueFrom:\n            secretKeyRef:\n              name: jfs-secret\n              key: metaurl\n        - name: access-key\n          valueFrom:\n            secretKeyRef:\n              name: jfs-secret\n              key: access-key\n        - name: secret-key\n          valueFrom:\n            secretKeyRef:\n              name: jfs-secret\n              key: secret-key\nEOF\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mountPoint"}),": Refers to the subdirectory of JuiceFS, which is the directory where users store data in the JuiceFS file system, starts with ",(0,t.jsx)(n.code,{children:"juicefs://"}),". For example, ",(0,t.jsx)(n.code,{children:"juicefs:///demo"})," is the ",(0,t.jsx)(n.code,{children:"/demo"})," subdirectory of the JuiceFS file system."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bucket"}),"\uff1aBucket URL\u3002For example, using S3 as object storage, and the name of the bucket is test."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"storage"}),": Specify the type of storage to be used by the file system, e.g. ",(0,t.jsx)(n.code,{children:"s3"}),", ",(0,t.jsx)(n.code,{children:"gs"}),", ",(0,t.jsx)(n.code,{children:"oss"}),". Read ",(0,t.jsx)(n.a,{href:"https://juicefs.com/docs/community/how_to_setup_object_storage/",children:"this document"})," for more details."]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Attention"}),": Only ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"metaurl"})," are required. If the JuiceFS has been formatted, you only need to fill in the ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"metaurl"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Since JuiceFS uses local cache, the corresponding ",(0,t.jsx)(n.code,{children:"Dataset"})," supports only one mount, and JuiceFS does not have UFS, you can specify subdirectory in ",(0,t.jsx)(n.code,{children:"mountPoint"})," (",(0,t.jsx)(n.code,{children:"juicefs:///"})," represents root directory), and it will be mounted as the root directory into the container."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Create ",(0,t.jsx)(n.code,{children:"Dataset"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f dataset.yaml\ndataset.data.fluid.io/jfsdemo created\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Check ",(0,t.jsx)(n.code,{children:"Dataset"})," status"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset jfsdemo\nNAME      UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE      AGE\njfsdemo                                                                  NotBound   44s\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As shown above, the value of the ",(0,t.jsx)(n.code,{children:"phase"})," in ",(0,t.jsx)(n.code,{children:"status"})," is ",(0,t.jsx)(n.code,{children:"NotBound"}),", which means that the ",(0,t.jsx)(n.code,{children:"Dataset"})," resource is not currently bound to any ",(0,t.jsx)(n.code,{children:"JuiceFSRuntime"})," resource. Next, we will create ",(0,t.jsx)(n.code,{children:"JuiceFSRuntime"})," resource."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Check ",(0,t.jsx)(n.code,{children:"JuiceFSRuntime"})," resource to be create"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'$ cat<<EOF >runtime.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: JuiceFSRuntime\nmetadata:\n  name: jfsdemo\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 4Gi\n        low: "0.1"\nEOF\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Create ",(0,t.jsx)(n.code,{children:"JuiceFSRuntime"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f runtime.yaml\njuicefsruntime.data.fluid.io/jfsdemo created\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["Check ",(0,t.jsx)(n.code,{children:"JuiceFSRuntime"})]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get juicefsruntime\nNAME      AGE\njfsdemo   34s\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Wait a while for the various components of ",(0,t.jsx)(n.code,{children:"JuiceFSRuntime"})," to start smoothly, and you will see status similar to the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get juicefs jfsdemo\nNAME      WORKER PHASE   FUSE PHASE   AGE\njfsdemo   Ready          Ready        2m15s\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then, check the ",(0,t.jsx)(n.code,{children:"Dataset"})," status again and find that it has been bound with ",(0,t.jsx)(n.code,{children:"JuiceFSRuntime"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get dataset jfsdemo\nNAME      UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\njfsdemo   0.00B            0.00B    4.00GiB          0.0%                Bound   3m16s\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Check Pod to be create"}),", the Pod uses the ",(0,t.jsx)(n.code,{children:"Dataset"})," created above to specify the PVC with the same name."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"$ cat<<EOF >sample.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: demo-app\nspec:\n  containers:\n    - name: demo\n      image: nginx\n      volumeMounts:\n        - mountPath: /data\n          name: demo\n  volumes:\n    - name: demo\n      persistentVolumeClaim:\n        claimName: jfsdemo\nEOF\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create Pod"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f sample.yaml\npod/demo-app created\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Check Pod"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get po |grep demo\ndemo-app                                                       1/1     Running   0          31s\njfsdemo-fuse-fx7np                                             1/1     Running   0          31s\njfsdemo-worker-0                                               1/1     Running   0          10m\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can see that the pod has been created successfully, and the FUSE component of JuiceFS has also started successfully."})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},2172:(e,n,s)=>{s.d(n,{I:()=>l,M:()=>d});var t=s(1504);const i={},a=t.createContext(i);function d(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);