(window.webpackJsonp=window.webpackJsonp||[]).push([[1178],{1579:function(t,s,a){"use strict";a.r(s);var e=a(19),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"逻辑运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[t._v("#")]),t._v(" 逻辑运算符")]),t._v(" "),s("h2",{attrs:{id:"一元逻辑运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一元逻辑运算符"}},[t._v("#")]),t._v(" 一元逻辑运算符")]),t._v(" "),s("ul",[s("li",[t._v("支持运算符："),s("code",[t._v("!")])]),t._v(" "),s("li",[t._v("输入数据类型："),s("code",[t._v("BOOLEAN")]),t._v("。")]),t._v(" "),s("li",[t._v("输出数据类型："),s("code",[t._v("BOOLEAN")]),t._v("。")]),t._v(" "),s("li",[t._v("注意："),s("code",[t._v("!")]),t._v("的优先级很高，记得使用括号调整优先级。")])]),t._v(" "),s("h2",{attrs:{id:"二元逻辑运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二元逻辑运算符"}},[t._v("#")]),t._v(" 二元逻辑运算符")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("支持运算符")]),t._v(" "),s("ul",[s("li",[t._v("AND:"),s("code",[t._v("and")]),t._v(","),s("code",[t._v("&")]),t._v(", "),s("code",[t._v("&&")])]),t._v(" "),s("li",[t._v("OR:"),s("code",[t._v("or")]),t._v(","),s("code",[t._v("|")]),t._v(","),s("code",[t._v("||")])])])]),t._v(" "),s("li",[s("p",[t._v("输入数据类型："),s("code",[t._v("BOOLEAN")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("返回类型 "),s("code",[t._v("BOOLEAN")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("注意：当某个时间戳下左操作数和右操作数都为"),s("code",[t._v("BOOLEAN")]),t._v("类型时，二元逻辑操作才会有输出结果。")])])]),t._v(" "),s("p",[s("strong",[t._v("示例：")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("运行结果")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB> select a, b, a > 10, a <= b, !(a <= b), a > 10 && a > b from root.test;\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n|                         Time|root.test.a|root.test.b|root.test.a > 10|root.test.a <= root.test.b|!root.test.a <= root.test.b|(root.test.a > 10) & (root.test.a > root.test.b)|\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n|1970-01-01T08:00:00.001+08:00|         23|       10.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.002+08:00|         33|       21.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.004+08:00|         13|       15.0|            true|                      true|                      false|                                           false|\n|1970-01-01T08:00:00.005+08:00|         26|        0.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.008+08:00|          1|       22.0|           false|                      true|                      false|                                           false|\n|1970-01-01T08:00:00.010+08:00|         23|       12.0|            true|                     false|                       true|                                            true|\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);