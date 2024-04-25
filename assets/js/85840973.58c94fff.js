"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[2088],{6460:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(7624),s=t(2172);const a={sidebar_label:"Accelerate Different Storage with Fluid",sidebar_position:3},o="Accelerate Different Storage with Fluid",r={id:"tutorials/storage-acceleration/accelerate-different-storage-with-fluid",title:"Accelerate Different Storage with Fluid",description:"We need to add additional configuration to Alluxio for accessing the storage normally, when using different underlying storage services as the underlying storage system of Alluxio.",source:"@site/versioned_docs/version-v1.0/tutorials/storage-acceleration/accelerate-different-storage-with-fluid.md",sourceDirName:"tutorials/storage-acceleration",slug:"/tutorials/storage-acceleration/accelerate-different-storage-with-fluid",permalink:"/docs/tutorials/storage-acceleration/accelerate-different-storage-with-fluid",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0/tutorials/storage-acceleration/accelerate-different-storage-with-fluid.md",tags:[],version:"v1.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714050288,formattedLastUpdatedAt:"Apr 25, 2024",sidebarPosition:3,frontMatter:{sidebar_label:"Accelerate Different Storage with Fluid",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Accelerate PVC with Fluid",permalink:"/docs/tutorials/storage-acceleration/accelerate-pvc-with-fluid"},next:{title:"Machine Learning Workload",permalink:"/docs/tutorials/advanced/machine-learning-workload"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"accelerate-different-storage-with-fluid",children:"Accelerate Different Storage with Fluid"}),"\n",(0,i.jsxs)(n.p,{children:["We need to add additional configuration to Alluxio for accessing the storage normally, when using different ",(0,i.jsx)(n.strong,{children:"underlying storage services"})," as the underlying storage system of Alluxio."]}),"\n",(0,i.jsxs)(n.p,{children:["This document shows how to declaratively complete the special configuration required by Alluxio in Fluid to access different storage services such as S3, HDFS, Ceph S3, PV, and MinIo. Please visit ",(0,i.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/en/ufs/S3.html",children:"Amazon AWS S3 - Alluxio v2.8.1 (stable) Documentation"})," for more  information."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Before everything we are going to do, please refer to ",(0,i.jsx)(n.a,{href:"/docs/get-started/installation",children:"Installation Guide"})," to install Fluid on your Kubernetes Cluster, and make sure all the components used by Fluid are ready like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ kubectl get pod -n fluid-system\nNAME                                  READY   STATUS    RESTARTS   AGE\nalluxioruntime-controller-5b64fdbbb-84pc6   1/1     Running   0          8h\ncsi-nodeplugin-fluid-fwgjh                  2/2     Running   0          8h\ncsi-nodeplugin-fluid-ll8bq                  2/2     Running   0          8h\ndataset-controller-5b7848dbbb-n44dj         1/1     Running   0          8h\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The Storage which can be visited."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create Dataset Resource Object"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"$ cat << EOF > dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: my-hdfs\nspec:\n  mounts:\n    - mountPoint: hdfs://<namenode>:<port>/path1\n      name: hdfs-file1\n    - mountPoint: hdfs://<namenode>:<port>/path2\n      name: hdfs-file2\nEOF\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ kubectl create -f dataset.yaml\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Fluid mounts the ",(0,i.jsx)(n.code,{children:"mountPoint"})," attribute defined in the CRD object to Alluxio, so this attribute can be any legal ",(0,i.jsx)(n.strong,{children:"UFS address"})," that can be recognized by Alluxio."]}),"\n",(0,i.jsxs)(n.p,{children:["In addition, multiple ",(0,i.jsx)(n.code,{children:"mountPoint"})," can be set for each ",(0,i.jsx)(n.code,{children:"Dataset"}),", so that you can mount all of the ",(0,i.jsx)(n.code,{children:"mountPoint"})," to the specified directory. At the same time, you can also set ",(0,i.jsx)(n.code,{children:"subPath"})," when mounting ",(0,i.jsx)(n.code,{children:"PVC"})," to specify a ",(0,i.jsx)(n.code,{children:"mountPoint"})," or its subdirectory set in the mount dataset. For example, in the above example, when mounting ",(0,i.jsx)(n.code,{children:"PVC"})," to your pod, you can set ",(0,i.jsx)(n.code,{children:"subPath: hdfs-file1"}),", so that only the ",(0,i.jsx)(n.code,{children:"hdfs://<namenode>:<port>/path1"})," directory will be mounted."]}),"\n",(0,i.jsxs)(n.p,{children:["You can modify the ",(0,i.jsx)(n.code,{children:"spec.mounts"})," field as required. It is generally set to the access path of the underlying storage, for example:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["HDFS\uff1a",(0,i.jsx)(n.code,{children:"- mountPoint: hdfs://<namenode>:<port>"}),"\uff1b"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"AWS S3\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"apiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: my-s3\nspec:\n  mounts:\n    - mountPoint: s3://<bucket-name>/<path-to-data>/\n      name: s3\n      options:\n        alluxio.underfs.s3.region: <s3-bucket-region>\n        alluxio.underfs.s3.endpoint: <s3-endpoint>\n        encryptOptions:\n        - name: aws.accessKeyId\n          valueFrom:\n            secretKeyRef:\n              name: mysecret\n              key: aws.accessKeyId\n        - name: aws.secretKey\n          valueFrom:\n            secretKeyRef:\n              name: mysecret\n              key: aws.secretKey\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["PVC\uff1a",(0,i.jsx)(n.code,{children:"- mountPoint: pvc://nfs-imagenet"}),"\uff1b"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["local path\uff1a",(0,i.jsx)(n.code,{children:"- mountPoint: local:///mnt/nfs-imagenet"}),"\uff1b"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["GCS\uff1a",(0,i.jsx)(n.code,{children:"- mountPoint: gs://<bucket-name>/<path-to-data>"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You need to specify the storage location in ",(0,i.jsx)(n.code,{children:"spec.mounts.mountPoint"}),"; In ",(0,i.jsx)(n.code,{children:"spec.mounts.options"}),", specify the region, endpoint, and key required to access the storage\uff08Refer to ",(0,i.jsx)(n.a,{href:"https://docs.alluxio.io/os/user/stable/en/reference/Properties-List.html",children:"List of Configuration Properties - Alluxio v2.8.1 (stable) Documentation"})," for more options\uff09"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create AlluxioRuntime Resource Object"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"$ cat << EOF > runtime.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: my-hdfs\nspec:\n  ...\nEOF\n"})}),"\n",(0,i.jsxs)(n.p,{children:["No additional configuration required in ",(0,i.jsx)(n.strong,{children:"AlluxioRuntime"})," for different underlying storage(Except HDFS\uff0cPlease refer ",(0,i.jsx)(n.a,{href:"/docs/tutorials/dataset-creation/accelerate-data-accessing-hdfs",children:"HDFS"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ kubectl create -f runtime.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"So far, Alluxio can normally access different types of underlying storage according to the user specified configuration file."}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid/blob/master/docs/en/samples/s3_configuration.md",children:"AWS S3"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/tutorials/dataset-creation/accelerate-data-accessing-hdfs",children:"HDFS"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/next/tutorials/storage-acceleration/accelerate-pvc-with-fluid",children:"PVC"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid/blob/master/docs/en/samples/accelerate_s3_minio.md",children:"Minio"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid/blob/master/docs/en/samples/gcs_configuration.md",children:"GCS"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>o});var i=t(1504);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);