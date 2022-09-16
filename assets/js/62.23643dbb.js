(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{421:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jvm性能分析工具使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jvm性能分析工具使用"}},[t._v("#")]),t._v(" JVM性能分析工具使用")]),t._v(" "),s("p",[t._v("有时需要对Fluid的底层缓存引擎，如Alluxio，进行性能分析，以更加迅速地找到性能瓶颈。\n"),s("a",{attrs:{href:"https://github.com/jvm-profiling-tools/async-profiler",target:"_blank",rel:"noopener noreferrer"}},[t._v("async-profiler"),s("OutboundLink")],1),t._v("是一款非常全面的JVM profiling工具，支持对"),s("code",[t._v("cpu")]),t._v("，"),s("code",[t._v("lock")]),t._v("等多种事件采样。\n在本文档中，我们介绍"),s("code",[t._v("async-profiler")]),t._v("的简单使用方法。\n请参考"),s("a",{attrs:{href:"https://github.com/jvm-profiling-tools/async-profiler",target:"_blank",rel:"noopener noreferrer"}},[t._v("async-profiler官方文档"),s("OutboundLink")],1),t._v("获取更加详细的使用教程。")]),t._v(" "),s("h2",{attrs:{id:"下载并解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载并解压"}},[t._v("#")]),t._v(" 下载并解压")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" https://github.com/jvm-profiling-tools/async-profiler/releases/download/v1.7.1/async-profiler-1.7.1-linux-x64.tar.gz\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-zxf")]),t._v(" async-profiler-1.7.1-linux-x64.tar.gz\n")])])]),s("h2",{attrs:{id:"简单使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单使用"}},[t._v("#")]),t._v(" 简单使用")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("查看Java进程")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ jps\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8576")]),t._v(" AlluxioFuse\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33916")]),t._v(" Jps\n")])])])]),t._v(" "),s("li",[s("p",[t._v("采样占用CPU时间")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ ./profiler.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" cpu "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" 1ms "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" cpu.txt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PID"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[s("strong",[t._v("命令说明")]),t._v(":")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-e <EVENT>")]),t._v("： 指定要采样的时间，支持"),s("code",[t._v("cpu")]),t._v(", "),s("code",[t._v("lock")]),t._v("等")]),t._v(" "),s("li",[s("code",[t._v("-i <INTERVAL>")]),t._v("： 指定采样间隔， 支持最小纳秒级别采样，但不建议设置太小，对会被采样的进程造成较大的性能影响")]),t._v(" "),s("li",[s("code",[t._v("-d <DURATION>")]),t._v(": 指定采样持续时间，以秒为单位")]),t._v(" "),s("li",[s("code",[t._v("-f <FILENAME>")]),t._v(": 指定保存文件名字和格式，文件格式影响最终结果呈现形式，"),s("code",[t._v("txt")]),t._v("文档格式方便在服务器查看，"),s("code",[t._v("svg")]),t._v("矢量图格式可在浏览器打开")]),t._v(" "),s("li",[s("code",[t._v("<PID>")]),t._v(": 所有采样都必须指定一个JVM进程的PID， 如"),s("code",[t._v("jps")]),t._v("命令中的AlluxioFuse进程"),s("code",[t._v("8576")])])])]),t._v(" "),s("li",[s("p",[t._v("采样结果分析")]),t._v(" "),s("p",[t._v("async-profiler会周期性地采样JVM调用栈，并按照被采样次数由高到低排序。\n可认为采样次数越高的函数，花费的CPU时间也是越多的。因此，通过观察排名前几位的函数调用情况，可快速找出Java进程的主要性能瓶颈。")]),t._v(" "),s("p",[t._v("下面是对AlluxioFuse进行cpu采样的结果，由三部分内容组成。")]),t._v(" "),s("p",[t._v("第一部分，介绍采样的次数，GC情况等，其中的"),s("code",[t._v("Frame buffer usage")]),t._v("表示保存采样结果的buffer使用率。\n如果采样间隔太小，或者时间太长，可能会提示"),s("code",[t._v("overflow")]),t._v("，此时可用"),s("code",[t._v("-b N")]),t._v("调大buffer容量。")]),t._v(" "),s("p",[t._v("第二部分，是按照采样次数由高到低排序后的函数调用栈，性能分析时重点关注前几位。")]),t._v(" "),s("p",[t._v("第三部分，在最后，是占用CPU时间由高到低的函数。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" cpu.txt\n--- Execution profile ---\nTotal samples       "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("131152")]),t._v("\nGC_active           "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nunknown_Java        "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("321")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.24")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nnot_walkable_Java   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("234")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.18")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndeoptimization      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nskipped             "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nFrame buffer usage  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23.9887")]),t._v("%\n\n--- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9902352571")]),t._v(" ns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7.48")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9820")]),t._v(" samples\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" copy_user_enhanced_fast_string_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" copyout_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" copy_page_to_iter_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" skb_copy_datagram_iter_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" tcp_recvmsg_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" inet_recvmsg_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" sock_read_iter_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" __vfs_read_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" vfs_read_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" ksys_read_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" do_syscall_64_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" entry_SYSCALL_64_after_hwframe_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.unix.FileDescriptor.readAddress\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.unix.FileDescriptor.readAddress\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.epoll.AbstractEpollChannel.doReadBytes\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.epoll.AbstractEpollStreamChannel"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$EpollStreamUnsafe")]),t._v(".epollInReady\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.epoll.EpollEventLoop.processReady\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.channel.epoll.EpollEventLoop.run\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.util.concurrent.SingleThreadEventExecutor"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$4")]),t._v(".run\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.util.internal.ThreadExecutorMap"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$2")]),t._v(".run\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.lang.Thread.run\n\n--- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6862595502")]),t._v(" ns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.19")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6836")]),t._v(" samples\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" jbyte_disjoint_arraycopy\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.util.internal.PlatformDependent0.copyMemoryWithSafePointPolling\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.util.internal.PlatformDependent0.copyMemory\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.util.internal.PlatformDependent.copyMemory\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.buffer.UnsafeByteBufUtil.getBytes\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.buffer.PooledUnsafeDirectByteBuf.getBytes\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.buffer.AbstractUnpooledSlicedByteBuf.getBytes\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.netty.buffer.AbstractByteBuf.readBytes\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.grpc.netty.NettyReadableBuffer.readBytes\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.grpc.internal.CompositeReadableBuffer"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$3")]),t._v(".readInternal\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.grpc.internal.CompositeReadableBuffer"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ReadOperation")]),t._v(".read\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.grpc.internal.CompositeReadableBuffer.execute\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" io.grpc.internal.CompositeReadableBuffer.readBytes\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.grpc.ReadableDataBuffer.readBytes\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.block.stream.BlockInStream.readInternal\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.block.stream.BlockInStream.read\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.AlluxioFileInStream.read\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheFileInStream.readExternalPage\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheFileInStream.read\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("19")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.fuse.AlluxioJniFuseFileSystem.read\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.jnifuse.AbstractFuseFileSystem.readCallback\n\n--- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6257779616")]),t._v(" ns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.73")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6234")]),t._v(" samples\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" jlong_disjoint_arraycopy\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.HashMap.isEmpty\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.HashSet.isEmpty\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.store.MemoryPageStore.put\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheManager.addPage\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheManager.putInternal\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheManager.lambda"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$put")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" alluxio.client.file.cache.LocalCacheManager"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$$")]),t._v("Lambda"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$324")]),t._v(".504173880.run\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.concurrent.Executors"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$RunnableAdapter")]),t._v(".call\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.concurrent.FutureTask.run\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.concurrent.ThreadPoolExecutor.runWorker\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.util.concurrent.ThreadPoolExecutor"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Worker")]),t._v(".run\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" java.lang.Thread.run\n\n--- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5784713511")]),t._v(" ns "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.37")]),t._v("%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5730")]),t._v(" samples\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" memcpy_erms_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fuse_copy_do?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fuse_copy_page?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fuse_copy_args?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fuse_dev_do_write?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" fuse_dev_write?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" do_iter_readv_writev_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" do_iter_write_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" vfs_writev_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" do_writev_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" do_syscall_64_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" entry_SYSCALL_64_after_hwframe_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" writev\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n         ns  percent  samples  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("top")]),t._v("\n  ----------  -------  -------  ---\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18748768943")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14.17")]),t._v("%    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18618")]),t._v("  jlong_disjoint_arraycopy\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12465418383")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.42")]),t._v("%    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12375")]),t._v("  copy_user_enhanced_fast_string_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11200001765")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.46")]),t._v("%    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11153")]),t._v("  /usr/lib/jvm/java-8-openjdk-amd64/jre/lib/amd64/server/libjvm.so\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8891711765")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6.72")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8863")]),t._v("  jbyte_disjoint_arraycopy\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5934957181")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.48")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5877")]),t._v("  memcpy_erms_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5887736474")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.45")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5766")]),t._v("  _raw_spin_unlock_irqrestore_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5722725002")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.32")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5669")]),t._v("  /lib/x86_64-linux-gnu/libc-2.23.so\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5029972109")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.80")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5024")]),t._v("  jint_disjoint_arraycopy\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3313144887")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.50")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3284")]),t._v("  _raw_spin_lock_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2345730045")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.77")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2341")]),t._v("  jshort_disjoint_arraycopy\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2111075419")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.60")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2098")]),t._v("  java.lang.Long.equals\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1844566888")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.39")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1838")]),t._v("  __do_page_fault_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1493059573")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.13")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1472")]),t._v("  get_user_pages_fast_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1371331539")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.04")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1340")]),t._v("  finish_task_switch_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1333100221")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.01")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1324")]),t._v("  clear_page_erms_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1165108284")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.88")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1155")]),t._v("  io.netty.util.Recycler"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$WeakOrderQueue")]),t._v(".transfer\n  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1010331386")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.76")]),t._v("%     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1004")]),t._v("  __free_pages_ok_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("806598842")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.61")]),t._v("%      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("798")]),t._v("  fuse_copy_do?"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fuse"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("805970066")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.61")]),t._v("%      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("802")]),t._v("  try_charge_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("773960647")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.58")]),t._v("%      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("757")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("660352796")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.50")]),t._v("%      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("656")]),t._v("  get_page_from_freelist_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Tips")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("一般性能分析只需要采样"),s("code",[t._v("cpu")]),t._v("和"),s("code",[t._v("lock")]),t._v("即可，它们的结果是比较有参考意义的")]),t._v(" "),s("li",[t._v("如果是和内存相关的调优，可试着采样"),s("code",[t._v("alloc")]),t._v("事件")]),t._v(" "),s("li",[s("code",[t._v("wall")]),t._v("事件采样墙上时间，"),s("code",[t._v("-t")]),t._v("选项让每个进程分开采样，它俩搭配使用效果比较好")]),t._v(" "),s("li",[t._v("同一进程同时只能采样一种事件")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);