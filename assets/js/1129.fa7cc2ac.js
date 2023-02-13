(window.webpackJsonp=window.webpackJsonp||[]).push([[1129],{1535:function(t,o,a){"use strict";a.r(o);var s=a(19),e=Object(s.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"系统架构"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#系统架构"}},[t._v("#")]),t._v(" 系统架构")]),t._v(" "),o("p",[t._v("IoTDB 套件由若干个组件构成，共同形成“数据收集-数据写入-数据存储-数据查询-数据可视化-数据分析”等一系列功能。")]),t._v(" "),o("p",[t._v("如下图展示了使用 IoTDB 套件全部组件后形成的整体应用架构。下文称所有组件形成 IoTDB 套件，而 IoTDB 特指其中的时间序列数据库组件。")]),t._v(" "),o("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://gitbox.apache.org/repos/asf?p=iotdb-bin-resources.git;a=blob_plain;f=docs/UserGuide/IoTDB-Introduction/Architecture/Structure%20of%20Apache%20IoTDB%20cn.png"}}),t._v(" "),o("p",[t._v("在上图中，用户可以通过 JDBC 将来自设备上传感器采集的时序数据、服务器负载和 CPU 内存等系统状态数据、消息队列中的时序数据、应用程序的时序数据或者其他数据库中的时序数据导入到本地或者远程的 IoTDB 中。用户还可以将上述数据直接写成本地（或位于 HDFS 上）的 TsFile 文件。")]),t._v(" "),o("p",[t._v("可以将 TsFile 文件写入到 HDFS 上，进而实现在 Hadoop 或 Spark 的数据处理平台上的诸如异常检测、机器学习等数据处理任务。")]),t._v(" "),o("p",[t._v("对于写入到 HDFS 或者本地的 TsFile 文件，可以利用 TsFile-Hadoop 或 TsFile-Spark 连接器允许 Hadoop 或 Spark 进行数据处理。")]),t._v(" "),o("p",[t._v("对于分析的结果，可以写回成 TsFile 文件。")]),t._v(" "),o("p",[t._v("IoTDB 和 TsFile 还提供了相应的客户端工具，满足用户查看和写入数据的 SQL 形式、脚本形式和图形化形式等多种需求。")])])}),[],!1,null,null,null);o.default=e.exports}}]);