(window.webpackJsonp=window.webpackJsonp||[]).push([[899],{1303:function(t,e,a){"use strict";a.r(e);var s=a(19),_=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"监控工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#监控工具"}},[t._v("#")]),t._v(" 监控工具")]),t._v(" "),e("h3",{attrs:{id:"系统监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统监控"}},[t._v("#")]),t._v(" 系统监控")]),t._v(" "),e("p",[t._v("当前用户可以使用Java的JConsole工具对正在运行的IoTDB进程进行系统状态监控，或使用IoTDB为用户开放的接口查看数据统计量。")]),t._v(" "),e("h4",{attrs:{id:"系统状态监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统状态监控"}},[t._v("#")]),t._v(" 系统状态监控")]),t._v(" "),e("p",[t._v("进入Jconsole监控页面后，首先看到的是IoTDB各类运行情况的概览。在这里，您可以看到堆内存信息、线程信息、类信息以及服务器的CPU使用情况。")]),t._v(" "),e("h4",{attrs:{id:"jmx-mbean监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmx-mbean监控"}},[t._v("#")]),t._v(" JMX MBean监控")]),t._v(" "),e("p",[t._v('通过使用JConsole工具并与JMX连接，您可以查看一些系统统计信息和参数。\n本节描述如何使用JConsole的 "Mbean" 选项卡来监视IoTDB的一些系统配置、写入数据统计等等。 连接到JMX后，您可以通过 "MBeans" 标签找到名为 "org.apache.iotdb.service" 的 "MBean"，如下图所示。')]),t._v(" "),e("p",[e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/112428223-ce7e3600-8d75-11eb-8e50-04f04571925b.png"}}),t._v(" "),e("br")]),t._v(" "),e("p",[t._v("Monitor下有几个属性，包括数据文件目录，写入数据统计信息以及某些系统参数的值。 通过双击与属性对应的值，它还可以显示该属性的折线图。有关Monitor属性的具体介绍，请参见以下部分。")]),t._v(" "),e("ul",[e("li",[t._v("MBean监视器属性列表")])]),t._v(" "),e("ul",[e("li",[t._v("SystemDirectory")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("SystemDirectory")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("数据系统文件的绝对目录")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])])])]),t._v(" "),e("ul",[e("li",[t._v("DataSizeInByte")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("DataSizeInByte")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("数据文件的总大小")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("单元")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Byte")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),e("ul",[e("li",[t._v("EnableStatMonitor")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名称")]),t._v(" "),e("th",[t._v("EnableStatMonitor")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("描述")]),t._v(" "),e("td",[t._v("系统监控模块是否开启")])]),t._v(" "),e("tr",[e("td",[t._v("类型")]),t._v(" "),e("td",[t._v("Boolean")])])])]),t._v(" "),e("ul",[e("li",[t._v("WriteAheadLogStatus")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("WriteAheadLogStatus")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("预写日志（WAL）的状态。 True表示启用WAL。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])])])]),t._v(" "),e("ul",[e("li",[t._v("GlobalTotalPointsNum")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("GlobalTotalPointsNum")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("总点数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),e("ul",[e("li",[t._v("GlobalReqSuccessNum")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("GlobalReqSuccessNum")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("成功的请求数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),e("ul",[e("li",[t._v("GlobalReqFailNum")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("GlobalReqFailNum")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("失败的请求数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),e("h3",{attrs:{id:"数据统计监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据统计监控"}},[t._v("#")]),t._v(" 数据统计监控")]),t._v(" "),e("p",[t._v("本模块对数据写入操作提供一些统计信息的监控，包括：")]),t._v(" "),e("ul",[e("li",[t._v("IoTDB 中数据文件的大小 (以字节为单位) ，数据写入的总点数")]),t._v(" "),e("li",[t._v("写入操作成功和失败的次数")])]),t._v(" "),e("h4",{attrs:{id:"开启-关闭监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启-关闭监控"}},[t._v("#")]),t._v(" 开启/关闭监控")]),t._v(" "),e("p",[t._v("用户可以选择开启或关闭数据统计监控功能（您可以设定配置文件中的"),e("code",[t._v("enable_stat_monitor")]),t._v("项，详细信息参见"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.12.x/Server/Config Manual.html"}},[t._v("第3.4节")]),t._v("）。")],1),t._v(" "),e("h3",{attrs:{id:"统计数据存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#统计数据存储"}},[t._v("#")]),t._v(" 统计数据存储")]),t._v(" "),e("p",[t._v("默认情况下，统计数据只储存在内存中，可以使用 Jconsole 进行访问。")]),t._v(" "),e("p",[t._v("统计数据还支持以时间序列的格式写入磁盘，可以通过设置配置文件中的"),e("code",[t._v("enable_monitor_series_write")]),t._v("开启。开启后，可以使用 "),e("code",[t._v("select")]),t._v(" 命令来对这些统计数据进行查询。")]),t._v(" "),e("blockquote",[e("p",[t._v("请注意：")]),t._v(" "),e("p",[t._v("如果 "),e("code",[t._v("enable_monitor_series_write=true")]),t._v(", 当 IoTDB 重启时，之前的统计数据会被重新载入内存。\n如果 "),e("code",[t._v("enable_monitor_series_write=false")]),t._v(", IoTDB 关闭时内存中所有的统计信息会被清空。")])]),t._v(" "),e("h4",{attrs:{id:"写入数据统计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写入数据统计"}},[t._v("#")]),t._v(" 写入数据统计")]),t._v(" "),e("p",[t._v("系统目前对写入数据的统计可分为两大模块： 全局（Global） 写入数据统计和存储组（Storage Group） 写入数据统计。全局统计量记录了所有写入数据的点数、请求数统计，存储组统计量对每一个存储组的写入数据进行了统计。")]),t._v(" "),e("p",[t._v("系统设定监控模块的采集粒度为"),e("strong",[t._v("每个数据文件刷入磁盘时更新一次统计信息")]),t._v("，因此数据精度可能和实际有所出入。如需获取准确信息，"),e("strong",[t._v("请先调用 flush 方法后再查询")]),t._v("。")]),t._v(" "),e("p",[t._v("写入数据统计项列表（括号内为统计量支持的范围）：")]),t._v(" "),e("ul",[e("li",[t._v("TOTAL_POINTS (全局，存储组)")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("写入总点数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('root.stats.{"global" | "storageGroupName"}.TOTAL_POINTS')])])])]),t._v(" "),e("ul",[e("li",[t._v("TOTAL_REQ_SUCCESS (全局)")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_SUCCESS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("写入请求成功次数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('root.stats."global".TOTAL_REQ_SUCCESS')])])])]),t._v(" "),e("ul",[e("li",[t._v("TOTAL_REQ_FAIL (全局)")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_FAIL")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("写入请求失败次数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("时间序列名称")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('root.stats."global".TOTAL_REQ_FAIL')])])])]),t._v(" "),e("p",[t._v("以上属性同样支持在 Jconsole 中进行可视化显示。对于每个存储组的统计信息，为了避免存储组过多造成显示混乱，用户可以在 Monitor Mbean 下的操作方法中输入存储组名进行相应的统计信息查询。")]),t._v(" "),e("p",[e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/34242296/92922942-34a20c00-f469-11ea-8dc2-8229d454583c.png"}}),t._v(" "),e("br")]),t._v(" "),e("h4",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("p",[t._v("下面为您展示两个具体的例子。用户可以通过"),e("code",[t._v("SELECT")]),t._v("语句查询自己所需要的写入数据统计项。（查询方法与普通的时间序列查询方式一致）")]),t._v(" "),e("p",[t._v("我们以查询全局统计量总点数（"),e("code",[t._v("TOTAL_POINTS")]),t._v("）为例，用IoTDB SELECT语句查询它的值。SQL语句如下：")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" TOTAL_POINTS "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stats"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("我们以查询存储组root.ln的统计量总点数（"),e("code",[t._v("TOTAL_POINTS")]),t._v("）为例，用IoTDB SELECT语句查询它的值。SQL语句如下：")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" TOTAL_POINTS "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stats"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root.ln"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("若您需要查询当前系统的最新信息，您可以使用最新数据查询，SQL语句如下：")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[t._v("flush\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("last")]),t._v(" TOTAL_POINTS "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stats"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"性能监控"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能监控"}},[t._v("#")]),t._v(" 性能监控")]),t._v(" "),e("h4",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),e("p",[t._v("性能监控模块用来监控IOTDB每一个操作的耗时，以便用户更好的了解数据库的整体性能。此模块会统计每一种操作的平均耗时，以及耗时在一定时间区间内（1ms，4ms，16ms，64ms，256ms，1024ms，以上）的操作的比例。输出文件在log_measure.log中。输出样例如下：")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/60937461-14296f80-a303-11e9-9602-a7bed624bfb3.png"}}),t._v(" "),e("h4",{attrs:{id:"配置参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),e("p",[t._v("配置文件位置：conf/iotdb-engine.properties")]),t._v(" "),e("center",[t._v("**表 -配置参数以及描述项**\n"),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("enable_performance_stat")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启性能监控模块")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_display_interval")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("60000")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("打印统计结果的时间延迟，以毫秒为单位")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_memory_in_kb")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("性能监控模块使用的内存阈值，单位为KB")])])])])]),t._v(" "),e("h4",{attrs:{id:"利用jmx-mbean动态调节参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#利用jmx-mbean动态调节参数"}},[t._v("#")]),t._v(" 利用JMX MBean动态调节参数")]),t._v(" "),e("p",[t._v("通过端口31999连接jconsole，并在上方菜单项中选择"),e("code",[t._v("MBean")]),t._v(". 展开侧边框并选择 "),e("code",[t._v("org.apache.iotdb.db.cost.statistic")]),t._v(". 将会得到如下图所示结果：")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/112426751-721a1700-8d73-11eb-871c-db2e9c13cf99.png"}}),t._v(" "),e("p",[e("strong",[t._v("属性")])]),t._v(" "),e("ol",[e("li",[t._v("EnableStat：是否开启性能监控模块，如果被设置为true，则性能监控模块会记录每个操作的耗时并打印结果。这个参数不能直接通过jconsole直接更改，但可通过下方的函数来进行动态设置。")]),t._v(" "),e("li",[t._v("DisplayIntervalInMs：相邻两次打印结果的时间间隔。这个参数可以直接设置，但它要等性能监控模块重启才会生效。重启性能监控模块可以通过先调用 stopStatistic()然后调用startContinuousStatistics()或者直接调用 startOneTimeStatistics()实现。")]),t._v(" "),e("li",[t._v("OperationSwitch：这个属性用来展示针对每一种操作是否开启了监控统计，map的键为操作的名字，值为是否针对这种操作开启性能监控。这个参数不能直接通过jconsole直接更改，但可通过下方的 'changeOperationSwitch()'函数来进行动态设置。")])]),t._v(" "),e("p",[e("strong",[t._v("操作")])]),t._v(" "),e("ol",[e("li",[t._v("startStatistics：开启性能监控。")]),t._v(" "),e("li",[t._v("startContinuousPrintStatistics：开启性能监控并以‘DisplayIntervalInMs’的时间间隔打印统计结果。")]),t._v(" "),e("li",[t._v("startPrintStatisticsOnce：开启性能监控并以‘DisplayIntervalInMs’的时间延迟打印一次统计结果。")]),t._v(" "),e("li",[t._v("stopPrintStatistic：关闭打印性能监控的统计结果。")]),t._v(" "),e("li",[t._v("stopStatistic：关闭性能监控。")]),t._v(" "),e("li",[t._v("clearStatisticalState(): 清除以统计的结果，从新开始统计。")]),t._v(" "),e("li",[t._v("changeOperationSwitch(String operationName, Boolean operationState):设置是否针对每一种不同的操作开启监控。参数‘operationName是操作的名称，在OperationSwitch属性中展示了所有操作的名称。参数 ‘operationState’是操作的状态，打开或者关闭。如果状态设置成功则此函数会返回true，否则返回false。")])]),t._v(" "),e("h3",{attrs:{id:"自定义操作类型监控其他区域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义操作类型监控其他区域"}},[t._v("#")]),t._v(" 自定义操作类型监控其他区域")]),t._v(" "),e("p",[e("strong",[t._v("增加操作项")])]),t._v(" "),e("p",[t._v("在org.apache.iotdb.db.cost.statistic.Operation类中增加一个枚举项来表示新增的操作.")]),t._v(" "),e("p",[e("strong",[t._v("在监控区域增加监控代码")])]),t._v(" "),e("p",[t._v("在监控开始区域增加计时代码:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("long t0 = System. currentTimeMillis();\n")])])]),e("p",[t._v("在监控结束区域增加记录代码:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("Measurement.INSTANCE.addOperationLatency(Operation, t0);\n")])])]),e("h3",{attrs:{id:"cache命中率统计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache命中率统计"}},[t._v("#")]),t._v(" cache命中率统计")]),t._v(" "),e("h4",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("为了提高查询性能，IOTDB对ChunkMetaData和TsFileMetaData进行了缓存。用户可以通过debug级别的日志以及MXBean两种方式来查看缓存的命中率，并根据缓存命中率以及系统内存来调节缓存所使用的内存大小。使用MXBean查看缓存命中率的方法为：")]),t._v(" "),e("ol",[e("li",[t._v("通过端口31999连接jconsole，并在上方菜单项中选择‘MBean’.")]),t._v(" "),e("li",[t._v("展开侧边框并选择 'org.apache.iotdb.db.service'. 将会得到如下图所示结果：")])]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/112426760-73e3da80-8d73-11eb-9a8f-9232d1f2033b.png"}}),t._v(" "),e("h2",{attrs:{id:"系统日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统日志"}},[t._v("#")]),t._v(" 系统日志")]),t._v(" "),e("p",[t._v("IoTDB支持用户通过修改日志配置文件的方式对IoTDB系统日志（如日志输出级别等）进行配置，系统日志配置文件默认位置在$IOTDB_HOME/conf文件夹下，默认的日志配置文件名为logback.xml。用户可以通过增加或更改其中的xml树型节点参数对系统运行日志的相关配置进行修改。详细配置说明参看本文日志文件配置说明。")]),t._v(" "),e("p",[t._v("同时，为了方便在系统运行过程中运维人员对系统的调试，我们为系统运维人员提供了动态修改日志配置的JMX接口，能够在系统不重启的前提下实时对系统的Log模块进行配置。详细使用方法参看动态系统日志配置说明)。")]),t._v(" "),e("h3",{attrs:{id:"动态系统日志配置说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态系统日志配置说明"}},[t._v("#")]),t._v(" 动态系统日志配置说明")]),t._v(" "),e("h4",{attrs:{id:"连接jmx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接jmx"}},[t._v("#")]),t._v(" 连接JMX")]),t._v(" "),e("p",[t._v("本节以Jconsole为例介绍连接JMX并进入动态系统日志配置模块的方法。启动Jconsole控制页面，在新建连接处建立与IoTDB Server的JMX连接（可以选择本地进程或给定IoTDB的IP及PORT进行远程连接，IoTDB的JMX服务默认运行端口为31999），如下图使用远程进程连接Localhost下运行在31999端口的IoTDB JMX服务。")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577195-f94d7500-1ef3-11e9-999a-b4f67055d80e.png"}}),t._v(" "),e("p",[t._v("连接到JMX后，您可以通过MBean选项卡找到名为"),e("code",[t._v("ch.qos.logback.classic")]),t._v("的"),e("code",[t._v("MBean")]),t._v("，如下图所示。")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577204-fe122900-1ef3-11e9-9e89-2eb1d46e24b8.png"}}),t._v(" "),e("p",[t._v("在"),e("code",[t._v("ch.qos.logback.classic")]),t._v("的MBean操作（Operations）选项中，可以看到当前动态系统日志配置支持的6种接口，您可以通过使用相应的方法，来执行相应的操作，操作页面如图。")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577216-09fdeb00-1ef4-11e9-9005-542ad7d9e9e0.png"}}),t._v(" "),e("h4",{attrs:{id:"动态系统日志接口说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动态系统日志接口说明"}},[t._v("#")]),t._v(" 动态系统日志接口说明")]),t._v(" "),e("ul",[e("li",[t._v("reloadDefaultConfiguration接口")])]),t._v(" "),e("p",[t._v("该方法为重新加载默认的logback配置文件，用户可以先对默认的配置文件进行修改，然后调用该方法将修改后的配置文件重新加载到系统中，使其生效。")]),t._v(" "),e("ul",[e("li",[t._v("reloadByFileName接口")])]),t._v(" "),e("p",[t._v("该方法为加载一个指定路径的logback配置文件，并使其生效。该方法接受一个名为p1的String类型的参数，该参数为需要指定加载的配置文件路径。")]),t._v(" "),e("ul",[e("li",[t._v("getLoggerEffectiveLevel接口")])]),t._v(" "),e("p",[t._v("该方法为获取指定Logger当前生效的日志级别。该方法接受一个名为p1的String类型的参数，该参数为指定Logger的名称。该方法返回指定Logger当前生效的日志级别。")]),t._v(" "),e("ul",[e("li",[t._v("getLoggerLevel接口")])]),t._v(" "),e("p",[t._v("该方法为获取指定Logger的日志级别。该方法接受一个名为p1的String类型的参数，该参数为指定Logger的名称。该方法返回指定Logger的日志级别。")]),t._v(" "),e("p",[t._v("需要注意的是，该方法与"),e("code",[t._v("getLoggerEffectiveLevel")]),t._v("方法的区别在于，该方法返回的是指定Logger在配置文件中被设定的日志级别，如果用户没有对该Logger进行日志级别的设定，则返回空。按照Logback的日志级别继承机制，如果一个Logger没有被显示地设定日志级别，其将会从其最近的祖先继承日志级别的设定。这时，调用"),e("code",[t._v("getLoggerEffectiveLevel")]),t._v("方法将返回该Logger生效的日志级别；而调用本节所述方法，将返回空。")]),t._v(" "),e("ul",[e("li",[t._v("setLoggerLevel接口")])]),t._v(" "),e("p",[t._v("该方法为设置指定Logger的日志级别。该方法接受一个名为p1的String类型的参数和一个名为p2的String类型的参数，分别指定Logger的名称和目标的日志等级。")])],1)}),[],!1,null,null,null);e.default=_.exports}}]);