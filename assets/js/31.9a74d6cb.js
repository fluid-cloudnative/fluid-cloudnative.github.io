(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{389:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"faq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),t("h2",{attrs:{id:"_1-why-do-i-fail-to-install-fluid-with-helm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-why-do-i-fail-to-install-fluid-with-helm"}},[e._v("#")]),e._v(" 1. Why do I fail to install fluid with Helm？")]),e._v(" "),t("p",[t("strong",[e._v("Answer")]),e._v(": It is recommended to follow the "),t("RouterLink",{attrs:{to:"/guide/install.html"}},[e._v("Fluid installation document")]),e._v(" to confirm whether the Fluid components are operating normally.")],1),e._v(" "),t("p",[e._v("The Fluid installation document is deployed based on "),t("code",[e._v("Helm 3")]),e._v(" as an example. If you use a version below "),t("code",[e._v("Helm 3")]),e._v(" to deploy Fluid and encounter the situation of "),t("code",[e._v("CRD not starting normally")]),e._v(". This may be because "),t("code",[e._v("Helm 3")]),e._v(" and above versions will automatically install CRD during "),t("code",[e._v("helm install")]),e._v(" but the lower version of Helm will not. See the "),t("a",{attrs:{href:"https://helm.sh/docs/chart_best_practices/custom_resource_definitions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm official documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("In this case, you need to install CRD manually：")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("$ kubectl create "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" fluid/crds\n")])])]),t("h2",{attrs:{id:"_2-why-can-t-i-delete-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-why-can-t-i-delete-runtime"}},[e._v("#")]),e._v(" 2. Why can't I delete Runtime？")]),e._v(" "),t("p",[t("strong",[e._v("Answer")]),e._v(": Please check the related Pod running status and Runtime Events.")]),e._v(" "),t("p",[e._v("As long as any active Pod is still using the Volume created by Fluid, Fluid will not complete the delete operation.")]),e._v(" "),t("p",[e._v("The following commands can quickly find these active Pods. When using it, replace "),t("code",[e._v("<dataset_name>")]),e._v(" and "),t("code",[e._v("<dataset_namespace>")]),e._v(" with yours:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("kubectl describe pvc "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dataset_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("dataset_namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("awk")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/^Mounted/ {flag=1}; /^Events/ {flag=0}; flag'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("awk")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'NR==1 {print $3}; NR!=1 {print $1}'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("xargs")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-I")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" kubectl get po "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-E")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Running|Terminating|Pending"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n\t"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cut")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('" "')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),t("h2",{attrs:{id:"_3-why-do-i-run-the-example-speed-up-accessing-remote-files-and-i-will-encounter-an-input-output-error-when-copying-files-for-the-first-time-similar-to-the-following"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-why-do-i-run-the-example-speed-up-accessing-remote-files-and-i-will-encounter-an-input-output-error-when-copying-files-for-the-first-time-similar-to-the-following"}},[e._v("#")]),e._v(" 3.Why do I run the example "),t("RouterLink",{attrs:{to:"/samples/"}},[e._v("Speed up Accessing Remote Files")]),e._v(", and I will encounter an input/output error when copying files for the first time. Similar to the following:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("time cp ./pyspark-2.4.6.tar.gz /tmp/\ncp: error reading ‘./pyspark-2.4.6.tar.gz’: Input/output error\ncp: failed to extend ‘/tmp/pyspark-2.4.6.tar.gz’: Input/output error\n\nreal\t3m15.795s\nuser\t0m0.001s\nsys\t0m0.092s\n")])])]),t("p",[e._v("What caused this to happen？")]),e._v(" "),t("p",[t("strong",[e._v("Answer")]),e._v(": The purpose of this example is to allow users to use the existing mirror download address of Apache software based on Http protocol to demonstrate the ability of data copy acceleration without building UFS (underlayer file system). However, in actual scenarios, the implementation of WebUFS is generally not used. But there are three limitations in this example：")]),e._v(" "),t("p",[e._v("1.Availability and access speed of Apache software mirror download address.")]),e._v(" "),t("p",[e._v("2.WebUFS is derived from Alluxio's community contribution and it is not the optimal implementation. For example, the implementation is not based on offset-based breakpoint resuming, which leads to the need to trigger WebUFS to read a large number of data blocks for each remote read operation.")]),e._v(" "),t("p",[e._v("3.Since the copy behavior is implemented based on Fuse, the upper limit of each Fuse chunk read is 128KB under the Linux Kernel; The larger the file is, the first copy will trigger a large number of reading operations.")]),e._v(" "),t("p",[e._v("In response to this problem, we proposed an optimized solution:")]),e._v(" "),t("p",[e._v("1.When configuring read, set the block size and chunk size to be larger than the file size, so as to avoid the influence of frequent reading in Fuse implementation.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("alluxio.user.block.size.bytes.default: 256MB\nalluxio.user.streaming.reader.chunk.size.bytes: 256MB\nalluxio.user.local.reader.chunk.size.bytes: 256MB\nalluxio.worker.network.reader.buffer.size: 256MB\n")])])]),t("p",[e._v("2.In order to ensure that the target file can be downloaded successfully, the timeout of the block download can be adjusted. The timeout period in the example is 5 minutes. If your network condition is not good, you can set a longer time as appropriate.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("alluxio.user.streaming.data.timeout: 300sec\n")])])]),t("p",[e._v("3.You can try to load the file manually.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl exec -it hbase-master-0 bash\ntime alluxio fs  distributedLoad --replication 1 /\n")])])]),t("h2",{attrs:{id:"_4-why-does-the-driver-name-fuse-csi-fluid-io-not-found-in-the-list-of-registered-csi-drivers-error-appear-when-i-create-a-task-to-mount-the-pvc-created-by-runtime"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-why-does-the-driver-name-fuse-csi-fluid-io-not-found-in-the-list-of-registered-csi-drivers-error-appear-when-i-create-a-task-to-mount-the-pvc-created-by-runtime"}},[e._v("#")]),e._v(" 4. Why does the "),t("code",[e._v("driver name fuse.csi.fluid.io not found in the list of registered CSI drivers")]),e._v(" error appear when I create a task to mount the PVC created by Runtime?")]),e._v(" "),t("p",[t("strong",[e._v("Answer")]),e._v(": Please check whether the kubelet configuration of the node on which the task is scheduled is the default value "),t("code",[e._v("/var/lib/kubelet")]),e._v(".")]),e._v(" "),t("p",[e._v("First, check whether Fluid's CSI component is normal using the command.")]),e._v(" "),t("p",[e._v("The following command can find the Pod quickly. When using it, replace the "),t("code",[e._v("<node_name>")]),e._v(" and "),t("code",[e._v("<fluid_namespace>")]),e._v(" with yours:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("kubectl get pod "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("fluid_namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("node_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# <pod_name> the pod name of last step")]),e._v("\nkubectl logs "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("pod_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" node-driver-registrar "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("fluid_namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\nkubectl logs "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("pod_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" plugins "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-n")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("fluid_namespace"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("If there is no error in the Log of the above steps, check whether the csidriver object exists:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl get csidriver\n")])])]),t("p",[e._v("If the csidriver object exists, please check if the csi registered node contains "),t("code",[e._v("<node_name>")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("kubectl get csinode | grep <node_name>\n")])])]),t("p",[e._v("If the above command has no output, check whether the kubelet configuration of the node on which the task is scheduled is the default value "),t("code",[e._v("/var/lib/kubelet")]),e._v(". Because Fluid's CSI component is registered to kubelet through a fixed address socket, the default value is "),t("code",[e._v("--csi-address=/var/lib/kubelet/csi-plugins/fuse.csi.fluid.io/csi.sock --kubelet-registration-path=/var/lib/kubelet/csi-plugins/fuse.csi.fluid.io/csi.sock")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"_5-after-upgrading-fluid-why-does-the-dataset-created-in-older-version-miss-some-fields-compared-to-a-newly-created-dataset-when-querying-them-via-kubectl-get-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-after-upgrading-fluid-why-does-the-dataset-created-in-older-version-miss-some-fields-compared-to-a-newly-created-dataset-when-querying-them-via-kubectl-get-command"}},[e._v("#")]),e._v(" 5. After upgrading fluid，why does the dataset created in older version miss some fields compared to a newly created dataset, when querying them via "),t("code",[e._v("kubectl get")]),e._v(" command？")]),e._v(" "),t("p",[t("strong",[e._v("Answer")]),e._v(": During the upgrading, we perhaps have upgraded the CRDs. The dataset created in older version，will set the new fields in the CRDs to null\nFor example, if you upgrade from v0.4 or before, the dataset did not have a 'FileNum' field at that time\nAfter upgrading fluid, if you use the "),t("code",[e._v("kubectl get")]),e._v(" command, you cannot query the FileNum of the dataset")]),e._v(" "),t("p",[e._v("You can recreate the dataset, and the new dataset will display these fields normally")]),e._v(" "),t("h2",{attrs:{id:"_6-why-do-i-run-the-example-nonroot-access-and-i-encounter-mkdir-permission-denied-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-why-do-i-run-the-example-nonroot-access-and-i-encounter-mkdir-permission-denied-error"}},[e._v("#")]),e._v(" 6. Why do I run the example "),t("RouterLink",{attrs:{to:"/samples/nonroot_access.html"}},[e._v("Nonroot access")]),e._v(", and I  encounter mkdir permission denied error")],1),e._v(" "),t("p",[t("strong",[e._v("Answer")]),e._v(": In non-root scenario, you have to check if you pass the right user info to runtime first. Secondly, you should check the alluxio master pod status, and use journalctl to see the kubelet logs in the node of alluxio master pod. The mkdir error was caused when mounting the hostpath to the container and therefor we have to check the root has the right permission to exec the directory. For example in the below root have permission to operator /dir")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ stat /dir\n  File: ‘/dir’\n  Size: 32              Blocks: 0          IO Block: 4096   directory\nDevice: fd00h/64768d    Inode: 83          Links: 3\nAccess: (0755/drwxr-xr-x)  Uid: (    0/    root)   Gid: (    0/    root)\nAccess: 2021-04-14 23:35:47.928805350 +0800\nModify: 2021-01-19 00:16:21.539559082 +0800\nChange: 2021-01-19 00:16:21.539559082 +0800\n Birth: -\n\n")])])]),t("h2",{attrs:{id:"_7-why-does-volume-attachment-timeout-occur-when-pvc-is-used-in-an-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-why-does-volume-attachment-timeout-occur-when-pvc-is-used-in-an-application"}},[e._v("#")]),e._v(" 7. Why does Volume Attachment timeout occur when PVC is used in an application?")]),e._v(" "),t("p",[t("strong",[e._v("Answer")]),e._v(": The Volume Attachment timeout problem is a timeout caused by the Kubelet not\nreceiving a response from the CSI Driver when making a request to it.\nThis problem is caused by the fact that the CSI Driver is not installed, or Kubelet does not have permission to access the CSI Driver.\nSince the CSI Driver is called back by Kubelet, if the CSI Driver is not installed or Kubelet does not have permission to view the CSI Driver, the CSI Plugin will not be triggered correctly.")]),e._v(" "),t("p",[e._v("First, you need to use the command "),t("code",[e._v("kubectl get csidriver")]),e._v(" to check whether the CSI driver is installed.\nIf not, you should use the command "),t("code",[e._v("kubectl apply -f charts/fluid/fluid/templates/CSI/driver.yaml")]),e._v(" to install it, and then observe whether the PVC is successfully mounted into the application.\nIf it is not solved, you shall use the command "),t("code",[e._v("export KUBECONFIG=/etc/kubernetes/kubelet.conf && kubectl get csidriver")]),e._v(" to check Kubelet whether has permission to see the CSI Driver or not.")]),e._v(" "),t("h2",{attrs:{id:"_8-after-creating-dataset-and-alluxioruntime-when-does-alluxio-master-pod-enter-into-crashloopbackoff-state"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-after-creating-dataset-and-alluxioruntime-when-does-alluxio-master-pod-enter-into-crashloopbackoff-state"}},[e._v("#")]),e._v(" 8. After creating Dataset and AlluxioRuntime，When does alluxio master Pod enter into CrashLoopBackOff state？")]),e._v(" "),t("p",[t("strong",[e._v("Answer")]),e._v(":First, use command"),t("code",[e._v("kubectl describe pod <dataset_name>-master-0")]),e._v("to query the reason why did Pod exit by mistake.")]),e._v(" "),t("p",[e._v("Alluxio master Pod consists of two containers, alluxio-master and alluxio-job-master. If one of the containers exits by mistake, you should view the output log before it exits.")]),e._v(" "),t("p",[e._v("For example，alluxio-job-master printed the following logs before exiting:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ kubectl logs imagenet-master-0  -c alluxio-job-master -p\n2021-06-08 12:03:47,611 INFO  MetricsSystem - Starting sinks with config: {}.\n2021-06-08 12:03:47,616 INFO  MetricsHeartbeatContext - Created metrics heartbeat with ID app-1642528563209467270. This ID will be used for identifying info from the client. It can be set manually through the alluxio.user.app.id property\n2021-06-08 12:03:47,656 INFO  TieredIdentityFactory - Initialized tiered identity TieredIdentity(node=132.252.41.86, rack=null)\n2021-06-08 12:03:47,697 INFO  ExtensionFactoryRegistry - Loading core jars from /opt/alluxio-release-2.5.0-2-SNAPSHOT/lib\n2021-06-08 12:03:47,784 INFO  ExtensionFactoryRegistry - Loading extension jars from /opt/alluxio-release-2.5.0-2-SNAPSHOT/extensions\n2021-06-08 12:03:50,767 ERROR AlluxioJobMasterProcess - java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\njava.lang.RuntimeException: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:514)\n        at alluxio.util.network.NetworkAddressUtils.getLocalHostName(NetworkAddressUtils.java:436)\n        at alluxio.util.network.NetworkAddressUtils.getConnectHost(NetworkAddressUtils.java:313)\n        at alluxio.underfs.JobUfsManager.connectUfs(JobUfsManager.java:55)\n        at alluxio.underfs.AbstractUfsManager.getOrAdd(AbstractUfsManager.java:150)\n        at alluxio.underfs.AbstractUfsManager.lambda$addMount$0(AbstractUfsManager.java:171)\n        at alluxio.underfs.UfsManager$UfsClient.acquireUfsResource(UfsManager.java:61)\n        at alluxio.master.journal.ufs.UfsJournal.<init>(UfsJournal.java:150)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:83)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:53)\n        at alluxio.master.AbstractMaster.<init>(AbstractMaster.java:73)\n        at alluxio.master.job.JobMaster.<init>(JobMaster.java:157)\n        at alluxio.master.AlluxioJobMasterProcess.<init>(AlluxioJobMasterProcess.java:92)\n        at alluxio.master.AlluxioJobMasterProcess$Factory.create(AlluxioJobMasterProcess.java:269)\n        at alluxio.master.AlluxioJobMaster.main(AlluxioJobMaster.java:45)\nCaused by: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1506)\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:472)\n        ... 14 more\nCaused by: java.net.UnknownHostException: jfk8snode43: Temporary failure in name resolution\n        at java.net.Inet4AddressImpl.lookupAllHostAddr(Native Method)\n        at java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:929)\n        at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1324)\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1501)\n        ... 15 more\n2021-06-08 12:03:50,773 ERROR AlluxioJobMaster - Failed to create job master process\njava.lang.RuntimeException: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:514)\n        at alluxio.util.network.NetworkAddressUtils.getLocalHostName(NetworkAddressUtils.java:436)\n        at alluxio.util.network.NetworkAddressUtils.getConnectHost(NetworkAddressUtils.java:313)\n        at alluxio.underfs.JobUfsManager.connectUfs(JobUfsManager.java:55)\n        at alluxio.underfs.AbstractUfsManager.getOrAdd(AbstractUfsManager.java:150)\n        at alluxio.underfs.AbstractUfsManager.lambda$addMount$0(AbstractUfsManager.java:171)\n        at alluxio.underfs.UfsManager$UfsClient.acquireUfsResource(UfsManager.java:61)\n        at alluxio.master.journal.ufs.UfsJournal.<init>(UfsJournal.java:150)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:83)\n        at alluxio.master.journal.ufs.UfsJournalSystem.createJournal(UfsJournalSystem.java:53)\n        at alluxio.master.AbstractMaster.<init>(AbstractMaster.java:73)\n        at alluxio.master.job.JobMaster.<init>(JobMaster.java:157)\n        at alluxio.master.AlluxioJobMasterProcess.<init>(AlluxioJobMasterProcess.java:92)\n        at alluxio.master.AlluxioJobMasterProcess$Factory.create(AlluxioJobMasterProcess.java:269)\n        at alluxio.master.AlluxioJobMaster.main(AlluxioJobMaster.java:45)\nCaused by: java.net.UnknownHostException: jfk8snode43: jfk8snode43: Temporary failure in name resolution\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1506)\n        at alluxio.util.network.NetworkAddressUtils.getLocalIpAddress(NetworkAddressUtils.java:472)\n        ... 14 more\nCaused by: java.net.UnknownHostException: jfk8snode43: Temporary failure in name resolution\n        at java.net.Inet4AddressImpl.lookupAllHostAddr(Native Method)\n        at java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:929)\n        at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1324)\n        at java.net.InetAddress.getLocalHost(InetAddress.java:1501)\n        ... 15 more\n2021-06-08 12:03:50,917 INFO  NettyUtils - EPOLL_MODE is available\n2021-06-08 12:03:51,319 WARN  MetricsHeartbeatContext - Failed to heartbeat to the metrics master before exit\n")])])]),t("p",[e._v("This error is generally due to the host where aluxio master Pod is located, does not configure the mapping relationship between the hostname and IP in DNS server or /etc /hosts file, resulting in the failure of aluxio-job-master to resolve the host name.\nAt this time, you need to log in to the host where aluxio master Pod is located, execute the command 'hostname' to query the hostname, and write its mapping relationship with IP to the /etc/hosts file.\nYou can search in the issue of this project to find solutions to the error information you encounter. If there is no issue that can solve your problem, you can also propose a new issue.")])])}),[],!1,null,null,null);t.default=r.exports}}]);