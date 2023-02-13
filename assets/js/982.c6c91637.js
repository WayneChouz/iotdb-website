(window.webpackJsonp=window.webpackJsonp||[]).push([[982],{1388:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"查询结果集格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询结果集格式"}},[s._v("#")]),s._v(" 查询结果集格式")]),s._v(" "),t("p",[s._v("在 IoTDB 中，查询结果集默认按照时间对齐，同时支持另外两种结果返回形式：")]),s._v(" "),t("ul",[t("li",[s._v("设备时间对齐 "),t("code",[s._v("align by device")])]),s._v(" "),t("li",[s._v("时序不对齐 "),t("code",[s._v("disable align")])])]),s._v(" "),t("p",[s._v("注意：对齐方式子句只能用于查询语句句尾。")]),s._v(" "),t("h3",{attrs:{id:"按设备对齐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按设备对齐"}},[s._v("#")]),s._v(" 按设备对齐")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("align by device")]),s._v(" 对齐方式下，设备名会单独作为一列出现。如果 select 子句中有 "),t("code",[s._v("n")]),s._v(" 列，最终结果就会有该 "),t("code",[s._v("n + 2")]),s._v(" 列（时间列和设备名字列）。")]),s._v(" "),t("p",[s._v("SQL 形如：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" align "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------------+-----------+------+--------+\n|                         Time|           Device|temperature|status|hardware|\n+-----------------------------+-----------------+-----------+------+--------+\n|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|      25.96|  true|    null|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|      24.36|  true|    null|\n|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|       null|  true|      v1|\n|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|       null| false|      v2|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|\n+-----------------------------+-----------------+-----------+------+--------+\nTotal line number = 6\nIt costs 0.012s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"时序不对齐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时序不对齐"}},[s._v("#")]),s._v(" 时序不对齐")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("disable align")]),s._v(" 对齐方式下，如果 select 子句中有 "),t("code",[s._v("n")]),s._v(" 列，最终结果就会有该 "),t("code",[s._v("n * 2")]),s._v(" 列（时间序列的时间和值）。")]),s._v(" "),t("p",[s._v("注：时序不对齐方式不能用于聚合查询、空值填充，但可使用 Limit 和 Offset 语句进行分页。")]),s._v(" "),t("p",[s._v("SQL 形如：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("disable")]),s._v(" align\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+\n|                         Time|root.ln.wf02.wt02.hardware|                         Time|root.ln.wf02.wt02.status|                         Time|root.ln.wf01.wt01.temperature|                         Time|root.ln.wf01.wt01.status|\n+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+\n|1970-01-01T08:00:00.001+08:00|                        v1|1970-01-01T08:00:00.001+08:00|                    true|2017-11-01T00:00:00.000+08:00|                        25.96|2017-11-01T00:00:00.000+08:00|                    true|\n|1970-01-01T08:00:00.002+08:00|                        v2|1970-01-01T08:00:00.002+08:00|                   false|2017-11-01T00:01:00.000+08:00|                        24.36|2017-11-01T00:01:00.000+08:00|                    true|\n|2017-11-01T00:00:00.000+08:00|                        v2|2017-11-01T00:00:00.000+08:00|                    true|                         null|                         null|                         null|                    null|\n|2017-11-01T00:01:00.000+08:00|                        v2|2017-11-01T00:01:00.000+08:00|                    true|                         null|                         null|                         null|                    null|\n+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+\nTotal line number = 4\nIt costs 0.018s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);