"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[5080],{4600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(7624),r=t(2172);const o={sidebar_label:"Using Fluid to Access Non-root User's Data",sidebar_position:2},i="Using Fluid to Access Non-root User's Data",a={id:"tutorials/dataset-security/using-fluid-to-access-non-root-users-data",title:"Using Fluid to Access Non-root User's Data",description:"If the user data could only be access by specific uid, Runtime's 'RunAs' parameter should be set to let specific user run distributed data caching engine, to access underlying data.",source:"@site/versioned_docs/version-v1.0.0/tutorials/dataset-security/using-fluid-to-access-non-root-users-data.md",sourceDirName:"tutorials/dataset-security",slug:"/tutorials/dataset-security/using-fluid-to-access-non-root-users-data",permalink:"/docs/tutorials/dataset-security/using-fluid-to-access-non-root-users-data",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0.0/tutorials/dataset-security/using-fluid-to-access-non-root-users-data.md",tags:[],version:"v1.0.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1713345055,formattedLastUpdatedAt:"Apr 17, 2024",sidebarPosition:2,frontMatter:{sidebar_label:"Using Fluid to Access Non-root User's Data",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Encrypted Options for Dataset",permalink:"/docs/tutorials/dataset-security/encrypted-options-for-dataset"},next:{title:"Set Access Mode",permalink:"/docs/tutorials/dataset-security/set-access-mode"}},d={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running Example",id:"running-example",level:2},{value:"Environment Cleanup",id:"environment-cleanup",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"using-fluid-to-access-non-root-users-data",children:"Using Fluid to Access Non-root User's Data"}),"\n",(0,s.jsx)(n.p,{children:"If the user data could only be access by specific uid, Runtime's 'RunAs' parameter should be set to let specific user run distributed data caching engine, to access underlying data."}),"\n",(0,s.jsx)(n.p,{children:"This document demonstrates the above features with a simple example."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/fluid-cloudnative/fluid",children:"Fluid"})," (version >= 0.3.0)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"/docs/get-started/installation",children:"Fluid installation documentation"})," to complete installation."]}),"\n",(0,s.jsx)(n.h2,{id:"running-example",children:"Running Example"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create a non-root user"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ groupadd -g 1201 fluid-user-1 && \\\nuseradd -u 1201 -g fluid-user-1 fluid-user-1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The above command creates a non-root user",(0,s.jsx)(n.code,{children:"fluid-user-1"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create a directory that belongs to the user"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ mkdir -p /mnt/nonroot/user1_data && \\\necho "This is fluid-user-1\'s data" > /mnt/nonroot/user1_data/data1 && \\\nchown -R fluid-user-1:fluid-user-1 /mnt/nonroot/user1_data && \\\nchmod -R 0750 /mnt/nonroot/user1_data\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The above command creates a directory ",(0,s.jsx)(n.code,{children:"user1_data"})," belonging to ",(0,s.jsx)(n.code,{children:"fluid-user-1"})," in the ",(0,s.jsx)(n.code,{children:"/mnt/nonroot"})," directory, We will use the ",(0,s.jsx)(n.code,{children:"data1"})," file in the ",(0,s.jsx)(n.code,{children:"user1_data"})," directory to represent the data owned by ",(0,s.jsx)(n.code,{children:"fluid-user-1"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ ls -ltR /mnt/nonroot\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using the above command, you will see the following results"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/mnt/nonroot/:\ntotal 4\ndrwxr-x--- 2 fluid-user-1 fluid-user-1 4096 9\u6708  27 16:45 user1_data\n\n/mnt/nonroot/user1_data:\ntotal 4\n-rwxr-x--- 1 fluid-user-1 fluid-user-1 28 9\u6708  27 16:45 data1\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Create Dataset and AlluxioRuntime resource object"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'$ cat<<EOF >dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: nonroot\nspec:\n  mounts:\n    # Specify the directory you just created as the mount point\n    - mountPoint: local:///mnt/nonroot/\n      name: nonroot\n  # Ensure that the data cache is placed at the node where the /mnt/nonroot directory exists\n  nodeAffinity:\n    required:\n      nodeSelectorTerms:\n        - matchExpressions:\n            - key: nonroot\n              operator: In\n              values:\n                - "true"\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: nonroot\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: SSD\n        path: /var/lib/docker/alluxio\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\n  # start Alluxio as the fluid-user-1 user\n  runAs:\n    uid: 1201\n    gid: 1201\n    user: fluid-user-1\n    group: fluid-user-1\n  fuse:\n    args:\n    - fuse\n    - --fuse-opts=kernel_cache,ro,max_read=131072,attr_timeout=7200,entry_timeout=7200,max_readahead=0\nEOF\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In the above yaml configuration file, we will mount the directory we just created (/mnt/nonroot ') in the same way as the Fluid host directory. For more information about Fluid mount host directory, please refer to ",(0,s.jsx)(n.a,{href:"/docs/tutorials/storage-acceleration/accelerate-hostPath-with-fluid",children:"example - use Fluid to accelerate host directory"})]}),"\n",(0,s.jsxs)(n.p,{children:["In addition, in ",(0,s.jsx)(n.code,{children:"spec.runAs"})," we have set user information such as ",(0,s.jsx)(n.code,{children:"uid"}),", which means that we are going to start the caching engine as a ",(0,s.jsx)(n.code,{children:"fluid-user-1"})," user to provide distributed caching capabilities"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Log into the Application"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ kubectl exec -it nginx -- bash\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ id\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using the above command, you will see the following results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"uid=1201 gid=1201 groups=1201\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This indicates that we started the application as a user with ",(0,s.jsx)(n.code,{children:"uid"})," of 1201"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Access Data"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ ls -ltR /data\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using the above command, you will see the following results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"/data/:\ntotal 1\ndrwxr-xr-x 1 root root 1 Sep 27 08:45 nonroot\n\n/data/nonroot:\ntotal 1\ndrwxr-x--- 1 1201 1201 1 Sep 27 08:45 user1_data\n\n/data/nonroot/user1_data:\ntotal 1\n-rwxr-x--- 1 1201 1201 28 Sep 27 08:45 data1\n"})}),"\n",(0,s.jsxs)(n.p,{children:["As you can see, Fluid exposes data belonging to a non-root user to applications that require it in the manner of ",(0,s.jsx)(n.strong,{children:"passthrough"}),", and the file information for the user's data does not change"]}),"\n",(0,s.jsx)(n.p,{children:"Of course, the user is free to access the data:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ cat /data/nonroot/user1_data/data1\n"})}),"\n",(0,s.jsx)(n.p,{children:"Using the above command, you will see the following results:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"This is fluid-user-1's data\n"})}),"\n",(0,s.jsx)(n.h2,{id:"environment-cleanup",children:"Environment Cleanup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ kubectl delete -f .\n$ rm -rf /mnt/nonroot\n$ userdel fluid-user-1\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>i});var s=t(1504);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);