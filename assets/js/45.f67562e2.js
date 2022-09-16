(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{406:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"demo-alluxio-tieredstore-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo-alluxio-tieredstore-configuration"}},[t._v("#")]),t._v(" Demo - Alluxio Tieredstore Configuration")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/Alluxio/alluxio",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alluxio"),e("OutboundLink")],1),t._v(" is one of the distributed cache engines leveraged by Fluid.\nIt supports tieredstores to store cached data in different location, for example different directories with different storage types.\nBy appropriate configurations on tieredstores, users can get better I/O throughput from Fluid and eliminate bottlenecks when accessing data.")]),t._v(" "),e("p",[t._v("The guide introduces you how to configure Alluxio's tieredstore in a declarative way in Fluid.")]),t._v(" "),e("p",[t._v("To get more tech detail about Alluxio's tieredstore, please refer to "),e("a",{attrs:{href:"https://docs.alluxio.io/ee/user/stable/en/core-services/Caching.html?q=tieredstore#configuring-alluxio-storage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cache-related docs offered by Alluxio"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fluid"),e("OutboundLink")],1),t._v("(version >= 0.3.0)")])]),t._v(" "),e("p",[t._v("Please refer to "),e("a",{attrs:{href:"https://github.com/fluid-cloudnative/fluid/blob/master/docs/en/userguide/install.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fluid installation documentation"),e("OutboundLink")],1),t._v(" to complete installation.")]),t._v(" "),e("h2",{attrs:{id:"single-tier-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-tier-configuration"}},[t._v("#")]),t._v(" Single-Tier Configuration")]),t._v(" "),e("p",[t._v("Here is an typical example for an AlluxioRuntime:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dataset\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /dev/shm\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MEM\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quota")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2Gi\n")])])]),e("p",[e("code",[t._v("spec.tieredstore.levels")]),t._v(" contains only one level, so Alluxio will run with single tieredstore.")]),t._v(" "),e("p",[t._v("A brief description for each property involved in the above-mentioned example is as follows:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("path")]),t._v(": where data cache actually stores")]),t._v(" "),e("li",[e("code",[t._v("mediumtype")]),t._v(": one of the three values("),e("code",[t._v("MEM")]),t._v(", "),e("code",[t._v("SSD")]),t._v(", "),e("code",[t._v("HDD")]),t._v("), used to specify medium for "),e("code",[t._v("path")])]),t._v(" "),e("li",[e("code",[t._v("quota")]),t._v(": maximium cache capacity for the level")])]),t._v(" "),e("h2",{attrs:{id:"single-tier-multi-directory-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-tier-multi-directory-configuration"}},[t._v("#")]),t._v(" Single-Tier Multi-Directory Configuration")]),t._v(" "),e("p",[t._v("The best way to demonstrate such configuration is to give an example like this:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dataset\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /mnt/ssd0/cache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("/mnt/ssd1/cache\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SSD\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quota")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 4Gi\n")])])]),e("p",[t._v("To use multiple directories as  Alluxio's tieredstore,\nthe only difference is to add more directories in "),e("code",[t._v("path")]),t._v(' with comma(",") as their separator.\nTake the yaml above as an example, with '),e("code",[t._v("path")]),t._v(' containing both "/mnt/ssd0/cache" and "/mnt/ssd1/cache",\nAlluxio will use these two directories as its cache store in the meantime.')]),t._v(" "),e("p",[t._v('The example also implies some best practices about when you might want to use such configuration: If there is a bottleneck\nintroduced by storage device itself(e.g. limited by Hard disk I/O throughput), using multiple storage devices("/mnt/ssd0" and "/mnt/ssd1" in the example above) as Alluxio\'s tieredstore\ncan reduce load on each device and get a higher I/O throughput.')]),t._v(" "),e("blockquote",[e("p",[t._v("Note: For now, Fluid only support tieredstores with homogeneous medium type.\nThat is, it is not allowed to use different hybrid storages in a tieredstore in Fluid.")])]),t._v(" "),e("p",[t._v("Also please note that, if multi-directory tieredstore is enabled, "),e("code",[t._v("quota")]),t._v(" will be divided equally to each directory.\nTake the yaml above as an example, with "),e("code",[t._v("quota")]),t._v(' setting to "4Gi", each directory in '),e("code",[t._v("path")]),t._v(' will have a cache capacity of "2Gi"(i.e. 4Gi / 2)')]),t._v(" "),e("p",[t._v("If that's not your desired way, Fluid also provides "),e("code",[t._v("quotaList")]),t._v(" to configure cache capacity for each directory:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dataset\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("properties")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [default property in fluid]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# alluxio.worker.allocator.class: alluxio.worker.block.allocator.MaxFreeAllocator")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /mnt/ssd0/cache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("/mnt/ssd1/cache\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SSD\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#quota: 4Gi")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quotaList")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3Gi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("2Gi\n")])])]),e("p",[e("code",[t._v("quotaList")]),t._v(" allows you to set maximum cache capacity for each directory.\nThe "),e("code",[t._v("quotaList")]),t._v(" will distributed its values into directories in the same order you defined in "),e("code",[t._v("path")]),t._v(",\nso the number of "),e("code",[t._v("quotaList")]),t._v(" must be in consistent with the number of "),e("code",[t._v("path")]),t._v('. For example, with the yaml above,\n"/mnt/ssd0/cache" has a maximum cache capacity of "3Gi", while "/mnt/ssd1/cache" has capacity of "2Gi".')]),t._v(" "),e("p",[t._v("Another Alluxio property related to multi-directory tieredstore is "),e("code",[t._v("alluxio.worker.allocator.class")]),t._v(".\nAll the supported values are described as follows:")]),t._v(" "),e("ul",[e("li",[t._v('"MaxFreeAllocator": Always try to allocate the cache to the storage directory that currently has the most availability')]),t._v(" "),e("li",[t._v('"RoundRobinAllocator": On each tier, maintain a Round Robin order of storage directories. Try to allocate the new cache into a directory following the Round Robin order, and if that does not work, go to the next lower tier.')]),t._v(" "),e("li",[t._v('"GreedyAllocator": Always try to put the new cache into the first directory that can contain it.')])]),t._v(" "),e("p",[t._v('By default, Fluid uses "MaxFreeAllocator" to decide where to store a new cache. Users can feel free to change this behavior by setting corresponding allocator to the Alluxio property.\nFor example, users can change '),e("code",[t._v("alluxio.worker.allocator.class")]),t._v(' to "alluxio.worker.block.allocator.RoundRobinAllocator" to choose round robin strategy.')]),t._v(" "),e("h2",{attrs:{id:"multi-tier-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-tier-configuration"}},[t._v("#")]),t._v(" Multi-Tier Configuration")]),t._v(" "),e("p",[t._v("Here is an example for multi-tier configuration:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" data.fluid.io/v1alpha1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" AlluxioRuntime\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dataset\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tieredstore")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("levels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /dev/shm\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MEM\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quota")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2Gi\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /mnt/ssd0/cache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("/mnt/ssd1/cache\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("mediumtype")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SSD\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("quotaList")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3Gi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("2Gi\n")])])]),e("p",[t._v("Multiple tieredstores are just tieredstores with some order. Take the yaml above as an example,\nwe specify two tieredstores: the first level uses memory for high-speed data access and the second one uses\nSSD to get bigger cache capacity.")]),t._v(" "),e("p",[t._v("Level order defined in "),e("code",[t._v("spec.tieredstore.levels")]),t._v(" will not affect the actual level order used by Alluxio.\nBefore Alluxio launched, Fluid will firstly sort the levels according to "),e("code",[t._v("mediumtype")]),t._v(', and storages with higher I/O throughput will get higher priority.\nThat is, Fluid will sort tieredstores in the following orders: "MEM" < "SSD" < "HDD".')]),t._v(" "),e("blockquote",[e("p",[t._v("Note: Alluxio uses a different way to report its capacity usage when using multi-tier configuration.\nFor now, this will lead to some inaccuracy when showing "),e("code",[t._v("Dataset.Cached")]),t._v(" and "),e("code",[t._v("Dataset.CachedPercentage")]),t._v(" in Fluid.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);