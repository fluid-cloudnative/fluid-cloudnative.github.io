(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{404:function(a,t,s){"use strict";s.r(t);var v=s(20),_=Object(v.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"fluid-0-4-新版本正式发布-支持数据预热-优化小文件场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fluid-0-4-新版本正式发布-支持数据预热-优化小文件场景"}},[a._v("#")]),a._v(" Fluid 0.4 新版本正式发布：支持数据预热，优化小文件场景")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/fluid-0.4-index.webp",alt:"0.4-img"}})]),a._v(" "),t("p",[t("strong",[a._v("导读：")]),a._v(" 为了解决大数据、AI 等数据密集型应用在云原生计算存储分离场景下，存在的数据访问延时高、联合分析难、多维管理杂等痛点问题，南京大学 PASALab、阿里巴巴、Alluxio 在 2020 年 9 月份联合发起了开源项目 Fluid。")]),a._v(" "),t("p",[a._v("近期 Fluid 0.4 版本正式发布，主要新增了以下四项重要功能，分别是：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("通过 DataLoad 自定义资源，提供简单易用且可定制的数据预热能力")])]),a._v(" "),t("li",[t("p",[a._v("增强海量小文件数据集的支撑能力，扩展 Fluid 对 AI 应用的支持场景")])]),a._v(" "),t("li",[t("p",[a._v("开放 HDFS 文件系统兼容接口，支持 Spark 等框架的数据访问")])]),a._v(" "),t("li",[t("p",[a._v("支持多数据集单节点混合部署，适应生产环境中的共享集群环境")])])]),a._v(" "),t("p",[t("strong",[a._v("Fluid 项目地址")]),a._v("：https://github.com/fluid-cloudnative/fluid")]),a._v(" "),t("p",[a._v("与 "),t("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzUzNzYxNjAzMg==&mid=2247495020&idx=1&sn=0a0c988222ff577ea0465b9d4ea6eff6&chksm=fae6e6a3cd916fb5b22f91fb38039e519fb8a47a8c4aee894053616d44fb3ca4330933468cf6&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("Fluid 0.3"),t("OutboundLink")],1),a._v(" 类似，上述功能的开发需求同样来自众多社区用户的生产实际反馈，此外，Fluid v0.4 还进行了一些 bug 修复和文档更新，欢迎使用体验 Fluid v0.4！感谢为此版本做出贡献的社区小伙伴，在接下来的版本功能迭代中，我们会继续广泛关注和采纳社区建议，推动 Fluid 项目的发展，期待听到大家更多的反馈！")]),a._v(" "),t("p",[a._v("下文是本次新版本发布功能的进一步介绍。")]),a._v(" "),t("h2",{attrs:{id:"支持主动的数据预热"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持主动的数据预热"}},[a._v("#")]),a._v(" 支持主动的数据预热")]),a._v(" "),t("p",[a._v("在进行 AI 应用的模型训练时，数据预热是一种常见的优化手段。数据预热是指在应用运行前，将应用所需要的数据预先从远程存储系统中拉取到本地的计算集群，供之后应用运行时使用。"),t("strong",[a._v("数据预热通过一种顺序的、有规则的并行数据读取模式，避免了数据密集型应用直接消费远程存储系统数据时，因为随机数据读取造成的许多不必要的通信开销")]),a._v("。")]),a._v(" "),t("p",[a._v("因此，在 Fluid 0.4 版本中，"),t("strong",[a._v("我们实现了一个新的 Kubernetes 自定义资源 - DataLoad，以 Kubernetes 资源的方式为用户提供了声明式的 API 接口，以控制数据预热的相关行为")]),a._v("。DataLoad 自定义资源的一个简单示例如下所示：")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" data.fluid.io/v1alpha1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" DataLoad\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" imagenet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("dataload\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dataset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" imagenet\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" default\n")])])]),t("p",[a._v("另外，通过少量的额外配置，DataLoad 还可实现子目录加载、缓存副本数量控制、元数据同步等许多可定制的功能，更多与 DataLoad 使用相关的细节请参考示例文档。")]),a._v(" "),t("p",[a._v("有关 DataLoad 使用与优化效果的演示视频如下：")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/video/dataWarmup.mp4",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://fluid-imgs.oss-cn-shanghai.aliyuncs.com/public/imgs/dataWarmup.jfif",alt:"04-demo"}}),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"增强海量小文件数据集的支撑能力"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增强海量小文件数据集的支撑能力"}},[a._v("#")]),a._v(" 增强海量小文件数据集的支撑能力")]),a._v(" "),t("p",[a._v("Fluid 是云原生环境下数据密集型应用的高效支撑平台，因此我们自始至终都在密切关注着 Fluid 提供的数据集支撑能力在不同场景下的适用性。在 Fluid 0.4 版本之前，Fluid 已经提供了诸如抽象、管理、加速、可观测性等一系列数据集支撑能力，然而，根据社区成员的使用反馈，上述能力在海量小文件场景下的支持还是非常初级。")]),a._v(" "),t("p",[a._v("考虑到海量小文件数据集在真实生产环境，尤其是 AI 应用场景的普遍性，我们对海量小文件带来的问题进行了深入的探究，提出了如"),t("strong",[a._v("异步元数据加载查询、流式数据处理")]),a._v("等**解决方案，**这些解决方案目前均已集成至 Fluid 0.4 版本中，以增强 Fluid 对海量小文件数据集的支撑能力.")]),a._v(" "),t("p",[t("strong",[a._v("以下是 Fluid 使用 Alluxio Runtime 在 400 万小文件场景下的优化后的部分性能对比评估结果")]),a._v("：")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th"),a._v(" "),t("th",[t("strong",[a._v("Fluid 0.3")])]),a._v(" "),t("th",[t("strong",[a._v("Fluid 0.4")])])])]),a._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[a._v("数据集初始化")])]),a._v(" "),t("td",[a._v("60 分钟")]),a._v(" "),t("td",[a._v("22 分钟")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("8 线程并行数据读取")])]),a._v(" "),t("td",[a._v("407 分钟")]),a._v(" "),t("td",[a._v("29 分钟")])]),a._v(" "),t("tr",[t("td",[t("strong",[a._v("深度学习模型训练")])]),a._v(" "),t("td",[a._v("6.5 小时")]),a._v(" "),t("td",[a._v("45 分钟")])])])]),a._v(" "),t("p",[a._v("海量小文件的存储管理是许多存储系统都会遇到的棘手难题，在后续的版本中，我们会继续关注这个场景以及它所带来的问题。")]),a._v(" "),t("h2",{attrs:{id:"方便-spark-等大数据计算框架提供数据访问支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方便-spark-等大数据计算框架提供数据访问支持"}},[a._v("#")]),a._v(" 方便 Spark 等大数据计算框架提供数据访问支持")]),a._v(" "),t("p",[a._v("除了 AI 应用外，Fluid 0.4 同样支持 Spark 等大数据应用在其上运行。通过向用户暴露 Alluxio 分布式缓存引擎的 Hadoop 文件系统兼容接口 (HCFS)，使得 Hadoop MapReduce, Apache Spark 等大数据计算框架编写的数据分析应用，"),t("strong",[a._v("能够在不修改应用代码的情况下，直接运行于 Fluid 之上，并享受到由 Fluid 提供的分布式缓存加速等能力")]),a._v("。")]),a._v(" "),t("p",[a._v("更多关于通过 HCFS 接口访问数据的细节，请参考示例文档。")]),a._v(" "),t("h2",{attrs:{id:"多数据集单节点混合部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多数据集单节点混合部署"}},[a._v("#")]),a._v(" 多数据集单节点混合部署")]),a._v(" "),t("p",[a._v("在真实的生产环境中，用户会在 Kubernetes 集群中的 GPU 节点上训练多个任务使用多个数据集，在 Fluid 0.4 版本之前，单节点无法同时进行多个数据集的混合部署，因此，如果多个用户同时期望在同一个节点访问各自所需的数据集，会出现某个用户的数据集无法创建的情况。")]),a._v(" "),t("p",[a._v("在 Fluid 0.4 版本中，我们为 Fluid 增加了多数据集单节点混合部署的能力，这意味着，只要该节点上的资源足够，来自不同用户的多个数据集部署冲突的问题将不再发生，该能力将使得 Fluid 更加适应实际生产环境的需求。另一方面，混合部署能够有效利用空闲资源，增加集群中各个节点的集群资源利用率，进一步提高 Fluid 带来的成本收益。")]),a._v(" "),t("p",[a._v("有关多数据集单节点混合部署的简单介绍，可参考 Github 上的示例文档。")]),a._v(" "),t("h2",{attrs:{id:"致谢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#致谢"}},[a._v("#")]),a._v(" 致谢")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("徐之浩（南京大学 PASALab）对于支持小文件场景和数据预热功能的贡献")])]),a._v(" "),t("li",[t("p",[a._v("谢远东（云知声）对于多数据集单节点混合部署功能开发和场景验证")])]),a._v(" "),t("li",[t("p",[a._v("仇伶玮（中国电信）对于 Fluid 架构拆分的贡献，他将 runtime 和 dataset 控制器拆分，支持未来两个组件的并行演进")])])]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("Fluid 0.4 版本将继续致力于解决社区用户在实际生产环境中反馈的问题和需求，扩展 Fluid 在各场景的适用性，提升用户体验：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("首先，对海量小文件数据集支撑能力的优化使 Fluid 能够更好地应对不同的使用场景；")])]),a._v(" "),t("li",[t("p",[a._v("其次，全新的 DataLoad 自定义资源为用户提供了一种简单的数据预热解决方案；")])]),a._v(" "),t("li",[t("p",[a._v("再者，对 Spark 等大数据应用数据访问的支持使得 Fluid 能够为不同种类的数据密集型应用提供支撑能力；")])]),a._v(" "),t("li",[t("p",[a._v("最后，多数据集的混合部署使得 Fluid 更能适应实际生产环境的需求。")])])]),a._v(" "),t("p",[a._v("如果您有任何疑问或建议，欢迎加入钉钉交流群参与和讨论：")]),a._v(" "),t("FluidCommunity"),a._v(" "),t("h2",{attrs:{id:"作者简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作者简介"}},[a._v("#")]),a._v(" 作者简介")]),a._v(" "),t("p",[t("strong",[a._v("顾荣")]),a._v(" 博士，南京大学计算机系副研究员，研究方向大数据处理系统，已在 TPDS、ICDE、JPDC、IPDPS、ICPP 等领域前沿期刊会议发表论文 20 余篇，主持国家自然科学基金面上项目/青年项目、中国博士后科学基金特别资助项目多项，研究成果落地应用于阿里巴巴、百度、字节跳动、中国石化、华泰证券等公司和开源项目 Apache Spark、Alluxio，获 2018 年度江苏省科学技术一等奖、2019 年度江苏省计算机学会青年科技奖，担任中国计算机学会系统软件专委会委员/大数据专委会通讯委员、江苏省计算机学会大数据专委会秘书长、Fluid 开源项目 co-founder、Alluxio 开源项目 PMC 成员。")])],1)}),[],!1,null,null,null);t.default=_.exports}}]);