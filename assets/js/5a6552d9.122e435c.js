"use strict";(self.webpackChunkfluid_website_demo=self.webpackChunkfluid_website_demo||[]).push([[9789],{676:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7624),i=n(2172);const r={sidebar_label:"How to Create and Delete Fluid Resources using Go Client",sidebar_position:1},s="How to Create and Delete Fluid Resources using Go Client",o={id:"developer-guide/client-usage/how-to-create-and-delete-fluid-resources-using-go-client",title:"How to Create and Delete Fluid Resources using Go Client",description:"The following is an example of creating and deleting Dataset and AlluxioRuntime, showing how to create and delete fluid resources by using the Go client.",source:"@site/versioned_docs/version-v0.9/developer-guide/client-usage/how-to-create-and-delete-fluid-resources-using-go-client.md",sourceDirName:"developer-guide/client-usage",slug:"/developer-guide/client-usage/how-to-create-and-delete-fluid-resources-using-go-client",permalink:"/docs/v0.9/developer-guide/client-usage/how-to-create-and-delete-fluid-resources-using-go-client",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-cloudnative/fluid-cloudnative.github.io/tree/master/versioned_docs/version-v0.9/developer-guide/client-usage/how-to-create-and-delete-fluid-resources-using-go-client.md",tags:[],version:"v0.9",lastUpdatedBy:"chenqiming",lastUpdatedAt:1714041983,formattedLastUpdatedAt:"Apr 25, 2024",sidebarPosition:1,frontMatter:{sidebar_label:"How to Create and Delete Fluid Resources using Go Client",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Performance Analyze with pprof",permalink:"/docs/v0.9/developer-guide/performance-analyze-with-pprof"},next:{title:"How to Use Client other than Go Client",permalink:"/docs/v0.9/developer-guide/client-usage/how-to-use-client-other-than-go-client"}},l={},c=[{value:"The yaml file corresponding to the object to be created",id:"the-yaml-file-corresponding-to-the-object-to-be-created",level:2},{value:"go client code",id:"go-client-code",level:2},{value:"Create Dataset and AlluxioRuntime manifest with the help of fluid api",id:"create-dataset-and-alluxioruntime-manifest-with-the-help-of-fluid-api",level:3},{value:"Create Dataset and AlluxioRuntime manifest by formatted string",id:"create-dataset-and-alluxioruntime-manifest-by-formatted-string",level:3}];function d(t){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"how-to-create-and-delete-fluid-resources-using-go-client",children:"How to Create and Delete Fluid Resources using Go Client"}),"\n",(0,a.jsx)(e.p,{children:"The following is an example of creating and deleting Dataset and AlluxioRuntime, showing how to create and delete fluid resources by using the Go client."}),"\n",(0,a.jsx)(e.h2,{id:"the-yaml-file-corresponding-to-the-object-to-be-created",children:"The yaml file corresponding to the object to be created"}),"\n",(0,a.jsxs)(e.p,{children:["Suppose we want to create and delete the corresponding Dataset and AlluxioRuntime objects based on ",(0,a.jsx)(e.code,{children:"dataset.yaml"})," and ",(0,a.jsx)(e.code,{children:"runtime.yaml"}),"."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"dataset.yaml file corresponding to the Dataset"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:"apiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: spark\nspec:\n  mounts:\n    - mountPoint: https://mirrors.bit.edu.cn/apache/spark/\n      name: spark\n"})}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"runtime.yaml file corresponding to the AlluxioRuntime"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-yaml",children:'apiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: spark\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 8Gi\n        high: "0.95"\n        low: "0.7"\n'})}),"\n",(0,a.jsx)(e.h2,{id:"go-client-code",children:"go client code"}),"\n",(0,a.jsx)(e.p,{children:"There are two ways to create Dataset and AlluxioRuntime with go client, one is to create Dataset and AlluixoRuntime manifest through structs with the help of fluid api, and the other is to create Dataset and AlluxioRuntime manifest directly through formatted strings."}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.p,{children:["Note: Only some of the necessary properties to create Dataset and Runtime objects are listed here. Dataset and AlluxioRuntime can be configured with much more than these properties. If you want to configure more properties, you can follow the example below, combined with ",(0,a.jsx)(e.code,{children:"api/v1alpha1/dataset_types.go"})," and ",(0,a.jsx)(e.code,{children:"api /v1alpha1/alluxioruntime_types.go"})," files, which contain code detailing the names and types of the Dataset and AlluxioRuntime properties."]}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"create-dataset-and-alluxioruntime-manifest-with-the-help-of-fluid-api",children:"Create Dataset and AlluxioRuntime manifest with the help of fluid api"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"github.com/fluid-cloudnative/fluid/api/v1alpha1"\n\t"k8s.io/apimachinery/pkg/api/resource"\n\tmetav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n\t"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"\n\t"k8s.io/apimachinery/pkg/runtime"\n\t"k8s.io/apimachinery/pkg/runtime/schema"\n\t"k8s.io/apimachinery/pkg/runtime/serializer/yaml"\n\t"k8s.io/apimachinery/pkg/util/json"\n\t"k8s.io/client-go/dynamic"\n\t"k8s.io/client-go/tools/clientcmd"\n\t"time"\n)\n\nfunc createObject(dynamicClient dynamic.Interface, gvr schema.GroupVersionResource, gvk schema.GroupVersionKind, namespace string, manifest []byte) error{\n\tobj := &unstructured.Unstructured{}\n\tdecoder := yaml.NewDecodingSerializer(unstructured.UnstructuredJSONScheme)\n\n\tif _, _, err := decoder.Decode(manifest, &gvk, obj); err != nil {\n\t\treturn err\n\t}\n\t_, err := dynamicClient.Resource(gvr).Namespace(namespace).Create(context.TODO(), obj, metav1.CreateOptions{})\n\tif err != nil {\n\t\treturn err\n\t}\n\treturn nil\n}\n\nfunc deleteObject(dynamicClient dynamic.Interface, gvr schema.GroupVersionResource, namespace string, name string) error{\n\treturn dynamicClient.Resource(gvr).Namespace(namespace).Delete(context.TODO(), name, metav1.DeleteOptions{})\n}\n\nfunc getObject(dynamicClient dynamic.Interface, gvr schema.GroupVersionResource, namespace string, name string, obj runtime.Object) error {\n\tdata, err := dynamicClient.Resource(gvr).Namespace(namespace).Get(context.TODO(), name, metav1.GetOptions{})\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tdataJson, err := data.MarshalJSON()\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tif err = json.Unmarshal(dataJson, obj); err != nil {\n\t\treturn err\n\t}\n\treturn nil\n}\n\nfunc main() {\n\t// uses the current context in kubeconfig\n\t// path-to-kubeconfig -- for example, /root/.kube/config\n\tconfig, _ := clientcmd.BuildConfigFromFlags("", "/root/.kube/config")\n\n\t// creates the client\n\tdynamicClient, err := dynamic.NewForConfig(config)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tdatasetGVR := schema.GroupVersionResource{\n\t\tGroup: "data.fluid.io",\n\t\tVersion: "v1alpha1",\n\t\tResource: "datasets",\n\t}\n\tdatasetGVK := schema.GroupVersionKind{\n\t\tGroup:   "data.fluid.io",\n\t\tVersion: "v1alpha1",\n\t\tKind:    "Dataset",\n\t}\n\n\t// Dataset manifest\n\tdsManifest:= &v1alpha1.Dataset{\n\t\tTypeMeta: metav1.TypeMeta{\n\t\t\tKind:       "Dataset",\n\t\t\tAPIVersion: "data.fluid.io/v1alpha1",\n\t\t},\n\t\tObjectMeta: metav1.ObjectMeta{\n\t\t\tName: "spark",\n\t\t\tNamespace: "default",\n\t\t},\n\t\tSpec: v1alpha1.DatasetSpec{\n\t\t\tMounts: [] v1alpha1.Mount{\n\t\t\t\t{\n\t\t\t\t\tMountPoint:     "https://mirrors.bit.edu.cn/apache/spark/",\n\t\t\t\t\tName:           "spark",\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t}\n\n\truntimeGVR := schema.GroupVersionResource{\n\t\tGroup:    "data.fluid.io",\n\t\tVersion:  "v1alpha1",\n\t\tResource: "alluxioruntimes",\n\t}\n\n\truntimeGVK := schema.GroupVersionKind{\n\t\tGroup:   "data.fluid.io",\n\t\tVersion: "v1alpha1",\n\t\tKind:    "AlluxioRuntime",\n\t}\n\n\t// AlluxioRuntime manifest\n\tquantity := resource.MustParse("8Gi")\n\tarManifest := &v1alpha1.AlluxioRuntime{\n\t\tTypeMeta: metav1.TypeMeta{\n\t\t\tKind:       "AlluxioRuntime",\n\t\t\tAPIVersion: "data.fluid.io/v1alpha1",\n\t\t},\n\t\tObjectMeta: metav1.ObjectMeta{\n\t\t\tName: "spark",\n\t\t\tNamespace: "default",\n\t\t},\n\t\tSpec: v1alpha1.AlluxioRuntimeSpec{\n\t\t\tReplicas: 1,\n\t\t\tTieredStore: v1alpha1.TieredStore{\n\t\t\t\tLevels: []v1alpha1.Level{\n\t\t\t\t\t{\n\t\t\t\t\t\tMediumType: "MEM",\n\t\t\t\t\t\tPath:       "/dev/shm",\n\t\t\t\t\t\tQuota:      &quantity,\n\t\t\t\t\t\tHigh:       "0.95",\n\t\t\t\t\t\tLow:        "0.7",\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t}\n\n\tmanifest, err := json.Marshal(dsManifest)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// create the dataset\n\tif err = createObject(dynamicClient, datasetGVR, datasetGVK, "default", manifest); err != nil{\n\t\tpanic(err)\n\t} else {\n\t\tfmt.Println("create the dataset successfully!")\n\t}\n\n\tmanifest, err = json.Marshal(arManifest)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\t// create the runtime\n\tif err = createObject(dynamicClient, runtimeGVR, runtimeGVK, "default", manifest); err != nil {\n\t\tpanic(err)\n\t} else {\n\t\tfmt.Println("create the runtime successfully!")\n\t}\n\n\t// check whether the dataset is ready\n\tvar ready bool = false\n\tvar dataset v1alpha1.Dataset\n\tfor !ready {\n\t\t// get the dataset\n\t\tif err = getObject(dynamicClient, datasetGVR, "default", "spark", &dataset); err != nil {\n\t\t\tpanic(err)\n\t\t} else {\n\t\t\tstatus := dataset.Status.Phase\n\t\t\tif status == v1alpha1.BoundDatasetPhase {\n\t\t\t\tfmt.Println("the dataset is bound.")\n\t\t\t\tready = true\n\t\t\t} else {\n\t\t\t\tfmt.Println("the dataset is not bound, wait 10 seconds.")\n\t\t\t\ttime.Sleep(10 * time.Second)\n\t\t\t}\n\t\t}\n\t}\n\n\t// delete the runtime\n\tif err = deleteObject(dynamicClient, runtimeGVR, "default", "spark"); err != nil{\n\t\tpanic(err)\n\t} else {\n\t\tfmt.Println("delete the runtime successfully!")\n\t}\n\n\t// delete the dataset\n\tif err = deleteObject(dynamicClient, datasetGVR, "default", "spark"); err != nil{\n\t\tpanic(err)\n\t} else {\n\t\tfmt.Println("delete the dataset successfully!")\n\t}\n}\n'})}),"\n",(0,a.jsx)(e.h3,{id:"create-dataset-and-alluxioruntime-manifest-by-formatted-string",children:"Create Dataset and AlluxioRuntime manifest by formatted string"}),"\n",(0,a.jsxs)(e.p,{children:["Note that the format of the ",(0,a.jsx)(e.code,{children:"dsManifest"})," and ",(0,a.jsx)(e.code,{children:"rtManifest"})," strings should be the same as the format of the yaml file, and spaces cannot be replaced by tabs!"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"github.com/fluid-cloudnative/fluid/api/v1alpha1"\n\tmetav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n\t"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"\n\t"k8s.io/apimachinery/pkg/runtime"\n\t"k8s.io/apimachinery/pkg/runtime/schema"\n\t"k8s.io/apimachinery/pkg/runtime/serializer/yaml"\n\t"k8s.io/apimachinery/pkg/util/json"\n\t"k8s.io/client-go/dynamic"\n\t"k8s.io/client-go/tools/clientcmd"\n\t"time"\n)\n\n// dataset manifest\nconst dsManifest = `\napiVersion: data.fluid.io/v1alpha1\nkind: Dataset\nmetadata:\n  name: spark\nspec:\n  mounts:\n    - mountPoint: https://mirrors.bit.edu.cn/apache/spark/\n      name: spark\n`\n\n// runtime manifest\nconst rtManifest = `\napiVersion: data.fluid.io/v1alpha1\nkind: AlluxioRuntime\nmetadata:\n  name: spark\nspec:\n  replicas: 1\n  tieredstore:\n    levels:\n      - mediumtype: MEM\n        path: /dev/shm\n        quota: 8Gi\n        high: "0.95"\n        low: "0.7"\n`\n\nfunc createObject(dynamicClient dynamic.Interface, gvr schema.GroupVersionResource, gvk schema.GroupVersionKind, namespace string, manifest []byte) error{\n\tobj := &unstructured.Unstructured{}\n\tdecoder := yaml.NewDecodingSerializer(unstructured.UnstructuredJSONScheme)\n\n\tif _, _, err := decoder.Decode(manifest, &gvk, obj); err != nil {\n\t\treturn err\n\t}\n\t_, err := dynamicClient.Resource(gvr).Namespace(namespace).Create(context.TODO(), obj, metav1.CreateOptions{})\n\tif err != nil {\n\t\treturn err\n\t}\n\treturn nil\n}\n\nfunc deleteObject(dynamicClient dynamic.Interface, gvr schema.GroupVersionResource, namespace string, name string) error{\n\treturn dynamicClient.Resource(gvr).Namespace(namespace).Delete(context.TODO(), name, metav1.DeleteOptions{})\n}\n\nfunc getObject(dynamicClient dynamic.Interface, gvr schema.GroupVersionResource, namespace string, name string, obj runtime.Object) error {\n\tdata, err := dynamicClient.Resource(gvr).Namespace(namespace).Get(context.TODO(), name, metav1.GetOptions{})\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tdataJson, err := data.MarshalJSON()\n\tif err != nil {\n\t\treturn err\n\t}\n\n\tif err = json.Unmarshal(dataJson, obj); err != nil {\n\t\treturn err\n\t}\n\treturn nil\n}\n\nfunc main() {\n\t// uses the current context in kubeconfig\n\t// path-to-kubeconfig -- for example, /root/.kube/config\n\tconfig, _ := clientcmd.BuildConfigFromFlags("", "/root/.kube/config")\n\n\t// creates the client\n\tdynamicClient, err := dynamic.NewForConfig(config)\n\tif err != nil {\n\t\tpanic(err)\n\t}\n\n\tdatasetGVR := schema.GroupVersionResource{\n\t\tGroup: "data.fluid.io",\n\t\tVersion: "v1alpha1",\n\t\tResource: "datasets",\n\t}\n\tdatasetGVK := schema.GroupVersionKind{\n\t\tGroup:   "data.fluid.io",\n\t\tVersion: "v1alpha1",\n\t\tKind:    "Dataset",\n\t}\n\t\n\truntimeGVR := schema.GroupVersionResource{\n\t\tGroup:    "data.fluid.io",\n\t\tVersion:  "v1alpha1",\n\t\tResource: "alluxioruntimes",\n\t}\n\n\truntimeGVK := schema.GroupVersionKind{\n\t\tGroup:   "data.fluid.io",\n\t\tVersion: "v1alpha1",\n\t\tKind:    "AlluxioRuntime",\n\t}\n\n\t// create the dataset\n\tif err = createObject(dynamicClient, datasetGVR, datasetGVK, "default", []byte(dsManifest)); err != nil{\n\t\tpanic(err)\n\t} else {\n\t\tfmt.Println("create the dataset successfully!")\n\t}\n\n\t// create the runtime\n\tif err = createObject(dynamicClient, runtimeGVR, runtimeGVK, "default", []byte(rtManifest)); err != nil {\n\t\tpanic(err)\n\t} else {\n\t\tfmt.Println("create the runtime successfully!")\n\t}\n\n\t// check whether the dataset is ready\n\tvar ready bool = false\n\tvar dataset v1alpha1.Dataset\n\tfor !ready {\n\t\t// get the dataset\n\t\tif err = getObject(dynamicClient, datasetGVR, "default", "spark", &dataset); err != nil {\n\t\t\tpanic(err)\n\t\t} else {\n\t\t\tstatus := dataset.Status.Phase\n\t\t\tif status == v1alpha1.BoundDatasetPhase {\n\t\t\t\tfmt.Println("the dataset is bound.")\n\t\t\t\tready = true\n\t\t\t} else {\n\t\t\t\tfmt.Println("the dataset is not bound, wait 10 seconds.")\n\t\t\t\ttime.Sleep(10 * time.Second)\n\t\t\t}\n\t\t}\n\t}\n\n\t// delete the runtime\n\tif err = deleteObject(dynamicClient, runtimeGVR, "default", "spark"); err != nil{\n\t\tpanic(err)\n\t} else {\n\t\tfmt.Println("delete the runtime successfully!")\n\t}\n\n\t// delete the dataset\n\tif err = deleteObject(dynamicClient, datasetGVR, "default", "spark"); err != nil{\n\t\tpanic(err)\n\t} else {\n\t\tfmt.Println("delete the dataset successfully!")\n\t}\n}\n'})})]})}function u(t={}){const{wrapper:e}={...(0,i.M)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},2172:(t,e,n)=>{n.d(e,{I:()=>o,M:()=>s});var a=n(1504);const i={},r=a.createContext(i);function s(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);