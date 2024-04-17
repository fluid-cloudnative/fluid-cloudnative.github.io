"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[1416],{4900:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=a(7624),s=a(2172);const i={sidebar_label:"How to Run in Knative Environment",sidebar_position:1},r="How to Run in Knative Environment",l={id:"tutorials/advanced/serverless/how-to-run-in-knative-environment",title:"How to Run in Knative Environment",description:"This example uses the open source framework Knative as an example to demonstrate how to perform unified data acceleration via Fluid in a Serverless environment. This example uses AlluxioRuntime as an example, and in fact Fluid supports all Runtime running in a Serverless environment.",source:"@site/versioned_docs/version-v1.0.0/tutorials/advanced/serverless/how-to-run-in-knative-environment.md",sourceDirName:"tutorials/advanced/serverless",slug:"/tutorials/advanced/serverless/how-to-run-in-knative-environment",permalink:"/docs/tutorials/advanced/serverless/how-to-run-in-knative-environment",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0.0/tutorials/advanced/serverless/how-to-run-in-knative-environment.md",tags:[],version:"v1.0.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1713345055,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"How to Run in Knative Environment",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How to Enable FUSE Auto-recovery",permalink:"/docs/tutorials/advanced/how-to-enable-fuse-auto-recovery"},next:{title:"How to Ensure the Completion of Serverless Tasks",permalink:"/docs/tutorials/advanced/serverless/how-to-ensure-the-completion-of-serverless-tasks"}},o={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Running",id:"running",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-run-in-knative-environment",children:"How to Run in Knative Environment"}),"\n",(0,t.jsx)(n.p,{children:"This example uses the open source framework Knative as an example to demonstrate how to perform unified data acceleration via Fluid in a Serverless environment. This example uses AlluxioRuntime as an example, and in fact Fluid supports all Runtime running in a Serverless environment."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:["1.Install Knative Serving v1.2 according to the ",(0,t.jsx)(n.a,{href:"https://knative.dev/docs/install/serving/install-serving-with-yaml/",children:"Knative documentation"}),", you need to enable the ",(0,t.jsx)(n.a,{href:"https://github.com/knative/serving/blob/main/config/core/configmaps/features.yaml#L156",children:"kubernetes.Deploymentspec-persistent-volume-claim"})," option."]}),"\n",(0,t.jsx)(n.p,{children:"Check if Knative's components are working properly"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl get Deployments -n knative-serving\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: This document is just for demonstration purpose, please refer to the best practices of Knative documentation for Knative deployment in production environment. Also, since the container images of Knative are in the gcr.io image repository, please make sure the images are reachable. If you are using AliCloud, you can also use ",(0,t.jsx)(n.a,{href:"https://help.aliyun.com/document_detail/121508.html",children:"AliCloud ACK"})," hosting service directly to reduce the complexity of configuring Knative."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["2.Please refer to the ",(0,t.jsx)(n.a,{href:"/docs/get-started/installation",children:"installation documentation"})," to install the latest Fluid, and check that the Fluid components are working properly after installation (this document uses AlluxioRuntime as an example):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get deploy -n fluid-system\nNAME                        READY   UP-TO-DATE   AVAILABLE   AGE\nalluxioruntime-controller   1/1     1            1           18m\ndataset-controller          1/1     1            1           18m\nfluid-webhook               1/1     1            1           18m\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Typically, you can see a Deployment named ",(0,t.jsx)(n.code,{children:"dataset-controller"}),", a Deployment named ",(0,t.jsx)(n.code,{children:"alluxioruntime-controller"}),", and a Deployment named ",(0,t.jsx)(n.code,{children:"fluid-webhook"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Create dataset and runtime"})}),"\n",(0,t.jsx)(n.p,{children:"Create Runtime resources for different types of Runtime, as well as a Dataset with the same name. Here is the example of AlluxioRuntime, the following is the Dataset content:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: serverless-data\nspec:\n  mounts:\n    - mountPoint: https://mirrors.bit.edu.cn/apache/hbase/stable/\n      name: hbase\n      path: "/"\n  accessModes:\n    - ReadOnlyMany\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: serverless-data\nspec:\n  replicas: 2\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,t.jsx)(n.p,{children:"Execute the Create Dataset operation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl create -f dataset.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check Dataset Status:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get alluxio\nNAME              MASTER PHASE   WORKER PHASE   FUSE PHASE   AGE\nserverless-data   Ready          Ready          Ready        4m52s\n$ kubectl get dataset\nNAME              UFS TOTAL SIZE   CACHED   CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nserverless-data   566.22MiB        0.00B    4.00GiB          0.0%                Bound   4m52s\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Creating Knative Serving Resource Objects"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'$ cat<<EOF >serving.yaml\napiVersion: serving.knative.dev/v1\nkind: Service\nmetadata:\n  name: model-serving\nspec:\n  template:\n    metadata:\n      labels:\n        app: model-serving\n        serverless.fluid.io/inject: "true"\n      annotations:\n        autoscaling.knative.dev/target: "10"\n        autoscaling.knative.dev/scaleDownDelay: "30m"\n        autoscaling.knative.dev/minScale: "1"\n    spec:\n      containers:\n        - image: fluidcloudnative/serving\n          ports:\n            - name: http1\n              containerPort: 8080\n          env:\n            - name: TARGET\n              value: "World"\n          volumeMounts:\n            - mountPath: /data\n              name: data\n              readOnly: true\n      volumes:\n        - name: data\n          persistentVolumeClaim:\n            claimName: serverless-data\n            readOnly: true\n  EOF\n$ kubectl create -f serving.yaml\nservice.serving.knative.dev/model-serving created\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Please configure ",(0,t.jsx)(n.code,{children:'serverless.fluid.io/inject: "true"'})," in the label of the podSpec or podTemplateSpec."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Check if Knative Serving is created and check if fuse-container is injected"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl get po\nNAME                                              READY   STATUS    RESTARTS   AGE\nmodel-serving-00001-deployment-64d674d75f-46vvf   3/3     Running   0          76s\nserverless-data-master-0                          2/2     Running   0          16m\nserverless-data-worker-0                          2/2     Running   0          16m\nserverless-data-worker-1                          2/2     Running   0          16m\n$ kubectl get po model-serving-00001-deployment-64d674d75f-46vvf -oyaml| grep -i fluid-fuse -B 3\n          - /opt/alluxio/integration/fuse/bin/alluxio-fuse\n          - unmount\n          - /runtime-mnt/alluxio/default/serverless-data/alluxio-fuse\n    name: fluid-fuse\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Checking the Knative Serving startup speed, you can see that the startup data loading time is ",(0,t.jsx)(n.strong,{children:"92s"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl logs model-serving-00001-deployment-64d674d75f-46vvf -c user-container\nBegin loading models at 16:29:02\n\nreal  1m32.639s\nuser  0m0.001s\nsys 0m1.305s\nFinish loading models at 16:29:45\n2022-02-15 16:29:45 INFO Hello world sample started.\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Clean up Knative serving instances"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl delete -f serving.yaml\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Execute data warm-up"})}),"\n",(0,t.jsx)(n.p,{children:"Create the dataload object and check its status:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"$ cat<<EOF >dataload.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: DataLoad\nmetadata:\n  name: serverless-dataload\nspec:\n  dataset:\n    name: serverless-data\n    namespace: default\n  EOF\n$ kubectl create -f dataload.yaml\ndataload.data.fluid.io/serverless-dataload created\n$ kubectl get dataload\nNAME                  DATASET           PHASE      AGE     DURATION\nserverless-dataload   serverless-data   Complete   2m43s   34s\n"})}),"\n",(0,t.jsx)(n.p,{children:"Check the cache status at this point, the data is now fully cached in the cluster."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ kubectl get dataset\nNAME              UFS TOTAL SIZE   CACHED      CACHE CAPACITY   CACHED PERCENTAGE   PHASE   AGE\nserverless-data   566.22MiB        566.22MiB   4.00GiB          100.0%              Bound   33m\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create Knative service again\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ kubectl create -f serving.yaml\nservice.serving.knative.dev/model-serving created\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Checking the boot time at this point reveals that the current boot time for loading data is ",(0,t.jsx)(n.strong,{children:"3.66s"}),", which becomes ",(0,t.jsx)(n.strong,{children:"1/20"})," of the performance without warm-up."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"kubectl logs model-serving-00001-deployment-6cb54f94d7-dbgxf -c user-container\nBegin loading models at 18:38:23\n\nreal  0m3.666s\nuser  0m0.000s\nsys 0m1.367s\nFinish loading models at 18:38:25\n2022-02-15 18:38:25 INFO Hello world sample started.\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note: This example uses Knative serving. If you don't have a Knative environment, you can also experiment with Deployment."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: model-serving\nspec:\n  selector:\n    matchLabels:\n      app: model-serving\n  template:\n    metadata:\n      labels:\n        app: model-serving\n        serverless.fluid.io/inject: "true"\n    spec:\n      containers:\n        - image: fluidcloudnative/serving\n          name: serving\n          ports:\n            - name: http1\n              containerPort: 8080\n          env:\n            - name: TARGET\n              value: "World"\n          volumeMounts:\n            - mountPath: /data\n              name: data\n      volumes:\n        - name: data\n          persistentVolumeClaim:\n            claimName: serverless-data\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Note: The default sidecar injection mode does not enable cached directory short-circuit reads, if you need to enable this capability, you can configure the parameter ",(0,t.jsx)(n.code,{children:"cachedir.sidecar.fluid.io/inject"})," to ",(0,t.jsx)(n.code,{children:"true"})," in the labels."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: model-serving\nspec:\n  selector:\n    matchLabels:\n      app: model-serving\n  template:\n    metadata:\n      labels:\n        app: model-serving\n        serverless.fluid.io/inject: "true"\n        cachedir.sidecar.fluid.io/inject: "true"\n    spec:\n      containers:\n        - image: fluidcloudnative/serving\n          name: serving\n          ports:\n            - name: http1\n              containerPort: 8080\n          env:\n            - name: TARGET\n              value: "World"\n          volumeMounts:\n            - mountPath: /data\n              name: data\n      volumes:\n        - name: data\n          persistentVolumeClaim:\n            claimName: serverless-data\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2172:(e,n,a)=>{a.d(n,{I:()=>l,M:()=>r});var t=a(1504);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);