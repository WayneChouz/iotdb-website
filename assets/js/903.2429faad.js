(window.webpackJsonp=window.webpackJsonp||[]).push([[903],{1309:function(e,s,t){"use strict";t.r(s);var r=t(19),n=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"查询性能追踪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询性能追踪"}},[e._v("#")]),e._v(" 查询性能追踪")]),e._v(" "),s("p",[e._v("IoTDB 支持使用 "),s("code",[e._v("TRACING")]),e._v(" 语句来启用/禁用对查询语句的性能追踪，默认处于禁用状态。用户可以使用性能追踪工具来分析某些查询中存在的潜在性能问题。性能分析的日志文件默认存储在 "),s("code",[e._v("./data/tracing")]),e._v(" 目录下。")]),e._v(" "),s("p",[e._v("启用 Tracing：")]),e._v(" "),s("p",[s("code",[e._v("IoTDB> TRACING ON")])]),e._v(" "),s("p",[e._v("禁用 Tracing：")]),e._v(" "),s("p",[s("code",[e._v("IoTDB> TRACING OFF")])]),e._v(" "),s("p",[e._v("由于一个 IoTDB 查询时间主要取决于查询的时间序列数、涉及访问的 Tsfile 文件数、需要扫描的 chunk 总数以及平均每个 chunk 的大小（指该 chunk 中包含的数据点的个数）。因此，目前性能分析包括的内容如下：")]),e._v(" "),s("ul",[s("li",[e._v("Start time")]),e._v(" "),s("li",[e._v("Query statement")]),e._v(" "),s("li",[e._v("Number of series paths")]),e._v(" "),s("li",[e._v("Number of sequence files")]),e._v(" "),s("li",[e._v("Statistics of each sequence file")]),e._v(" "),s("li",[e._v("Number of unSequence files")]),e._v(" "),s("li",[e._v("Statistics of each unSequence file")]),e._v(" "),s("li",[e._v("Number of chunks")]),e._v(" "),s("li",[e._v("Average size of chunks")]),e._v(" "),s("li",[e._v("Total cost time")])]),e._v(" "),s("h3",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),s("p",[e._v("例如执行 "),s("code",[e._v("select * from root")]),e._v("，则 tracing 日志文件的内容会包括以下内容：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Query Id: 2 - Start time: 2020-06-28 10:53:54.727\nQuery Id: 2 - Query Statement: select * from root\nQuery Id: 2 - Number of series paths: 3\nQuery Id: 2 - Number of sequence files: 1\nQuery Id: 2 - SeqFile_1603336100446-1-0.tsfile root.sg.d1[1, 10000]\nQuery Id: 2 - Number of unsequence files: 1\nQuery Id: 2 - UnSeqFile_1603354798303-2-0.tsfile root.sg.d1[9, 1000]\nQuery Id: 2 - Number of chunks: 3\nQuery Id: 2 - Average size of chunks: 4113\nQuery Id: 2 - Total cost time: 11ms\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("p",[e._v("为了避免多个查询同时执行导致输出信息乱序，在每条输出信息前均增加了该次查询的 Query Id，用户可以使用 "),s("code",[e._v('grep "Query Id: 2" tracing.txt')]),e._v(" 来提取某次查询的所有追踪信息。")])])}),[],!1,null,null,null);s.default=n.exports}}]);