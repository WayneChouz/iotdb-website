(window.webpackJsonp=window.webpackJsonp||[]).push([[1182],{1583:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"选择函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择函数"}},[s._v("#")]),s._v(" 选择函数")]),s._v(" "),t("p",[s._v("目前 IoTDB 支持如下选择函数：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("函数名")]),s._v(" "),t("th",[s._v("输入序列类型")]),s._v(" "),t("th",[s._v("必要的属性参数")]),s._v(" "),t("th",[s._v("输出序列类型")]),s._v(" "),t("th",[s._v("功能描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("TOP_K")]),s._v(" "),t("td",[s._v("INT32 / INT64 / FLOAT / DOUBLE / TEXT")]),s._v(" "),t("td",[t("code",[s._v("k")]),s._v(": 最多选择的数据点数，必须大于 0 小于等于 1000")]),s._v(" "),t("td",[s._v("与输入序列的实际类型一致")]),s._v(" "),t("td",[s._v("返回某时间序列中值最大的"),t("code",[s._v("k")]),s._v("个数据点。若多于"),t("code",[s._v("k")]),s._v("个数据点的值并列最大，则返回时间戳最小的数据点。")])]),s._v(" "),t("tr",[t("td",[s._v("BOTTOM_K")]),s._v(" "),t("td",[s._v("INT32 / INT64 / FLOAT / DOUBLE / TEXT")]),s._v(" "),t("td",[t("code",[s._v("k")]),s._v(": 最多选择的数据点数，必须大于 0 小于等于 1000")]),s._v(" "),t("td",[s._v("与输入序列的实际类型一致")]),s._v(" "),t("td",[s._v("返回某时间序列中值最小的"),t("code",[s._v("k")]),s._v("个数据点。若多于"),t("code",[s._v("k")]),s._v("个数据点的值并列最小，则返回时间戳最小的数据点。")])])])]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" top_k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'k'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" bottom_k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'k'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("T20:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.530")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('+-----------------------------+--------------------+------------------------------+---------------------------------+\n|                         Time|      root.sg1.d2.s1|top_k(root.sg1.d2.s1, "k"="2")|bottom_k(root.sg1.d2.s1, "k"="2")|\n+-----------------------------+--------------------+------------------------------+---------------------------------+\n|2020-12-10T20:36:15.531+08:00| 1531604122307244742|           1531604122307244742|                             null|\n|2020-12-10T20:36:15.532+08:00|-7426070874923281101|                          null|                             null|\n|2020-12-10T20:36:15.533+08:00|-7162825364312197604|          -7162825364312197604|                             null|\n|2020-12-10T20:36:15.534+08:00|-8581625725655917595|                          null|             -8581625725655917595|\n|2020-12-10T20:36:15.535+08:00|-7667364751255535391|                          null|             -7667364751255535391|\n+-----------------------------+--------------------+------------------------------+---------------------------------+\nTotal line number = 5\nIt costs 0.006s\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);