(window.webpackJsonp=window.webpackJsonp||[]).push([[1738],{2059:function(t,e,s){"use strict";s.r(e);var r=s(1),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("0.8.2版本中暂不支持此功能。")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("IoTDB为用户提供多种插入实时数据的方式，例如在Cli/Shell工具中直接输入插入数据的"),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT语句")]),t._v("，或使用Java API（标准"),s("router-link",{attrs:{to:"./../6-JDBC API/1-JDBC API.html"}},[t._v("Java JDBC")]),t._v("接口）单条或批量执行插入数据的"),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT语句")]),t._v("。")],1),t._v(" "),s("p",[t._v("本节主要为您介绍实时数据接入的"),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT语句")]),t._v("在场景中的实际使用示例，有关INSERT SQL语句的详细语法请参见本文"),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT语句")]),t._v("节。")],1),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("使用"),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT语句")]),t._v("可以向指定的已经创建的一条或多条时间序列中插入数据。对于每一条数据，均由一个时间戳类型的"),s("router-link",{attrs:{to:"./../2-Concept Key Concepts and Terminology/1-Key Concepts and Terminology.html"}},[t._v("时间戳")]),t._v("和一个"),s("router-link",{attrs:{to:"./../2-Concept Key Concepts and Terminology/2-Data Type.html"}},[t._v("数值类型")]),t._v("的传感器采集值组成。")],1),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("单列数据插入示例代码如下：")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("INSERT语句还可以支持在同一个时间点下多列数据的插入，同时向2时间点插入上述两个时间序列的值，多列数据插入示例代码如下：")]),t._v(" "),t._m(8),s("p",[t._v("插入数据后我们可以使用SELECT语句简单查询已插入的数据。")]),t._v(" "),t._m(9),s("p",[t._v("结果如图所示。由查询结果可以看出，单列、多列数据的插入操作正确执行。\n"),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51605021-c2ee1500-1f48-11e9-8f6b-ba9b48875a41.png"}})])],1),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("若用户向一个不存在的时间序列中插入数据，例如执行以下命令：")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),s("p",[t._v("若用户插入的数据类型与该Timeseries对应的数据类型不一致，例如执行以下命令：")]),t._v(" "),t._m(14),s("p",[t._v("系统将会返回以下ERROR告知数据类型有误：")]),t._v(" "),t._m(15)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"数据接入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据接入"}},[this._v("#")]),this._v(" 数据接入")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"历史数据导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#历史数据导入"}},[this._v("#")]),this._v(" 历史数据导入")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"实时数据接入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实时数据接入"}},[this._v("#")]),this._v(" 实时数据接入")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用insert语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用insert语句"}},[this._v("#")]),this._v(" 使用INSERT语句")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在本节的场景实例下，以其中的两个时间序列"),e("code",[this._v("root.ln.wf02.wt02.status")]),this._v("和"),e("code",[this._v("root.ln.wf02.wt02.hardware")]),this._v("为例 ，它们的数据类型分别为BOOLEAN和TEXT。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('IoTDB > insert into root.ln.wf02.wt02(timestamp,status) values(1,true)\nIoTDB > insert into root.ln.wf02.wt02(timestamp,hardware) values(1, "v1")\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("以上示例代码将长整型的timestamp以及值为true的数据插入到时间序列"),e("code",[this._v("root.ln.wf02.wt02.status")]),this._v("中和将长整型的timestamp以及值为”v1”的数据插入到时间序列"),e("code",[this._v("root.ln.wf02.wt02.hardware")]),this._v("中。执行成功后会返回执行时间，代表数据插入已完成。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("注意：在IoTDB中，TEXT类型的数据单双引号都可以来表示,上面的插入语句是用的是双引号表示TEXT类型数据，下面的示例将使用单引号表示TEXT类型数据。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > insert into root.ln.wf02.wt02(timestamp, status, hardware) VALUES (2, false, 'v2')\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > select * from root.ln.wf02 where time < 3\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"insert语句的错误处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insert语句的错误处理"}},[this._v("#")]),this._v(" INSERT语句的错误处理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('IoTDB > insert into root.ln.wf02.wt02(timestamp, temperature) values(1,"v1")\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("由于"),e("code",[this._v("root.ln.wf02.wt02. temperature")]),this._v("时间序列不存在，系统将会返回以下ERROR告知该Timeseries路径不存在：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Msg: Current deviceId[root.ln.wf02.wt02] does not contains measurement:temperature\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > insert into root.ln.wf02.wt02(timestamp,hardware) values(1,100)\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("error: The TEXT data type should be covered by \" or '\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])}],!1,null,null,null);e.default=a.exports}}]);