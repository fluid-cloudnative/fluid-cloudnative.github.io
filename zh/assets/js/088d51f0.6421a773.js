"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[1208],{1268:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(7624),a=n(2172);const i={sidebar_label:"Encrypted Options for Dataset",sidebar_position:1},o="Encrypted Options for Dataset",r={id:"tutorials/dataset-security/encrypted-options-for-dataset",title:"Encrypted Options for Dataset",description:"When creating a Dataset in Fluid, sometimes we need to configure some sensitive information in the mounts. To ensure security, Fluid provides the ability to configure these sensitive information using Secret. The following takes access to the Aliyun OSS data set as an example to illustrate how to configure.",source:"@site/versioned_docs/version-v1.0/tutorials/dataset-security/encrypted-options-for-dataset.md",sourceDirName:"tutorials/dataset-security",slug:"/tutorials/dataset-security/encrypted-options-for-dataset",permalink:"/zh/docs/tutorials/dataset-security/encrypted-options-for-dataset",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v1.0/tutorials/dataset-security/encrypted-options-for-dataset.md",tags:[],version:"v1.0",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714050288,formattedLastUpdatedAt:"2024\u5e744\u670825\u65e5",sidebarPosition:1,frontMatter:{sidebar_label:"Encrypted Options for Dataset",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Automatic Cleanup Data Operation",permalink:"/zh/docs/tutorials/dataset-operation/automatic-cleanup-data-operation"},next:{title:"Using Fluid to Access Non-root User's Data",permalink:"/zh/docs/tutorials/dataset-security/using-fluid-to-access-non-root-users-data"}},c={},d=[{value:"Deploy Dataset with sensitive information",id:"deploy-dataset-with-sensitive-information",level:2},{value:"Create Dataset and Runtime",id:"create-dataset-and-runtime",level:3},{value:"Create Secret",id:"create-secret",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"encrypted-options-for-dataset",children:"Encrypted Options for Dataset"}),"\n",(0,s.jsxs)(t.p,{children:["When creating a Dataset in Fluid, sometimes we need to configure some sensitive information in the ",(0,s.jsx)(t.code,{children:"mounts"}),". To ensure security, Fluid provides the ability to configure these sensitive information using Secret. The following takes access to the ",(0,s.jsx)(t.a,{href:"https://cn.aliyun.com/product/oss",children:"Aliyun OSS"})," data set as an example to illustrate how to configure."]}),"\n",(0,s.jsx)(t.h2,{id:"deploy-dataset-with-sensitive-information",children:"Deploy Dataset with sensitive information"}),"\n",(0,s.jsx)(t.h3,{id:"create-dataset-and-runtime",children:"Create Dataset and Runtime"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:'$ cat << EOF >> dataset.yaml\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: mydata\nspec:\n  mounts:\n  - mountPoint: oss://<OSS_BUCKET>/<OSS_DIRECTORY>/\n    name: mydata\n    options:\n      fs.oss.endpoint: <OSS_ENDPOINT>\n    encryptOptions:\n      - name: fs.oss.accessKeyId\n        valueFrom:\n          secretKeyRef:\n            name: mysecret\n            key: fs.oss.accessKeyId\n      - name: fs.oss.accessKeySecret\n        valueFrom:\n          secretKeyRef:\n            name: mysecret\n            key: fs.oss.accessKeySecret\n---\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: mydata\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 2Gi\n        high: "0.95"\n        low: "0.7"\nEOF\n'})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, in the above configuration, unlike the direct configuration of ",(0,s.jsx)(t.code,{children:"fs.oss.endpoint"}),", we changed the configuration of ",(0,s.jsx)(t.code,{children:"fs.oss.accessKeyId"})," and ",(0,s.jsx)(t.code,{children:"fs.oss.accessKeySecret"})," to read from Secret to ensure safety."]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["It should be noted that if the same key is configured both in ",(0,s.jsx)(t.code,{children:"options"})," and ",(0,s.jsx)(t.code,{children:"encryptOptions"}),", then the value in ",(0,s.jsx)(t.code,{children:"encryptOptions"})," will override the corresponding value in ",(0,s.jsx)(t.code,{children:"options"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"create-secret",children:"Create Secret"}),"\n",(0,s.jsx)(t.p,{children:"In the Secret to be created, you need to specify the sensitive information that needs to be configured in the above Dataset."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"$ cat<<EOF >mysecret.yaml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: mysecret\nstringData:\n  fs.oss.accessKeyId: <OSS_ACCESS_KEY_ID>\n  fs.oss.accessKeySecret: <OSS_ACCESS_KEY_SECRET>\nEOF\n"})}),"\n",(0,s.jsxs)(t.p,{children:["As you can see, the specific contents of ",(0,s.jsx)(t.code,{children:"fs.oss.accessKeySecret"})," and ",(0,s.jsx)(t.code,{children:"fs.oss.accessKeyId"})," are written in Secret, and Dataset reads the corresponding value by looking for the Secret and key accroding to its configuration, instead of reading them in its configuration directly. So the security of some data is guaranteed."]})]})}function u(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>o});var s=n(1504);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);