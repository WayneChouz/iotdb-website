(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{1139:function(s,t,e){"use strict";e.r(t);var a=e(19),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"查询对齐模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询对齐模式"}},[s._v("#")]),s._v(" 查询对齐模式")]),s._v(" "),t("p",[s._v("在 IoTDB 中，查询结果集"),t("strong",[s._v("默认按照时间对齐")]),s._v("，包含一列时间列和若干个值列，每一行数据各列的时间戳相同。")]),s._v(" "),t("p",[s._v("除按照时间对齐外，还支持以下对齐模式：")]),s._v(" "),t("ul",[t("li",[s._v("按设备对齐 "),t("code",[s._v("ALIGN BY DEVICE")])])]),s._v(" "),t("h2",{attrs:{id:"按设备对齐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按设备对齐"}},[s._v("#")]),s._v(" 按设备对齐")]),s._v(" "),t("p",[s._v("在按设备对齐模式下，设备名会单独作为一列出现，查询结果集包含一列时间列、一列设备列和若干个值列。如果 "),t("code",[s._v("SELECT")]),s._v(" 子句中选择了 "),t("code",[s._v("N")]),s._v(" 列，则结果集包含 "),t("code",[s._v("N + 2")]),s._v(" 列（时间列和设备名字列）。")]),s._v(" "),t("p",[s._v("在默认情况下，结果集按照 "),t("code",[s._v("Device")]),s._v(" 进行排列，在每个 "),t("code",[s._v("Device")]),s._v(" 内按照 "),t("code",[s._v("Time")]),s._v(" 列升序排序。")]),s._v(" "),t("p",[s._v("当查询多个设备时，要求设备之间同名的列数据类型相同。")]),s._v(" "),t("p",[s._v("为便于理解，可以按照关系模型进行对应。设备可以视为关系模型中的表，选择的列可以视为表中的列，"),t("code",[s._v("Time + Device")]),s._v(" 看做其主键。")]),s._v(" "),t("p",[t("strong",[s._v("示例：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" align "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------------+-----------+------+--------+\n|                         Time|           Device|temperature|status|hardware|\n+-----------------------------+-----------------+-----------+------+--------+\n|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|      25.96|  true|    null|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|      24.36|  true|    null|\n|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|       null|  true|      v1|\n|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|       null| false|      v2|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|\n+-----------------------------+-----------------+-----------+------+--------+\nTotal line number = 6\nIt costs 0.012s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"设备对齐模式下的排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设备对齐模式下的排序"}},[s._v("#")]),s._v(" 设备对齐模式下的排序")]),s._v(" "),t("p",[s._v("在设备对齐模式下，默认按照设备名的字典序升序排列，每个设备内部按照时间戳大小升序排列，可以通过 "),t("code",[s._v("ORDER BY")]),s._v(" 子句调整设备列和时间列的排序优先级。")]),s._v(" "),t("p",[s._v("详细说明及示例见文档 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Query-Data/Order-By.html"}},[s._v("结果集排序")]),s._v("。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);