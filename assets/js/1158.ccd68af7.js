(window.webpackJsonp=window.webpackJsonp||[]).push([[1158],{1564:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"常序列生成函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常序列生成函数"}},[s._v("#")]),s._v(" 常序列生成函数")]),s._v(" "),t("p",[s._v("常序列生成函数用于生成所有数据点的值都相同的时间序列。")]),s._v(" "),t("p",[s._v("常序列生成函数接受一个或者多个时间序列输入，其输出的数据点的时间戳集合是这些输入序列时间戳集合的并集。")]),s._v(" "),t("p",[s._v("目前 IoTDB 支持如下常序列生成函数：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("函数名")]),s._v(" "),t("th",[s._v("必要的属性参数")]),s._v(" "),t("th",[s._v("输出序列类型")]),s._v(" "),t("th",[s._v("功能描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("CONST")]),s._v(" "),t("td",[t("code",[s._v("value")]),s._v(": 输出的数据点的值 "),t("br"),t("code",[s._v("type")]),s._v(": 输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT")]),s._v(" "),t("td",[s._v("由输入属性参数 "),t("code",[s._v("type")]),s._v(" 决定")]),s._v(" "),t("td",[s._v("根据输入属性 "),t("code",[s._v("value")]),s._v(" 和 "),t("code",[s._v("type")]),s._v(" 输出用户指定的常序列。")])]),s._v(" "),t("tr",[t("td",[s._v("PI")]),s._v(" "),t("td",[s._v("无")]),s._v(" "),t("td",[s._v("DOUBLE")]),s._v(" "),t("td",[s._v("常序列的值："),t("code",[s._v("π")]),s._v(" 的 "),t("code",[s._v("double")]),s._v(" 值，圆的周长与其直径的比值，即圆周率，等于 "),t("em",[s._v("Java标准库")]),s._v(" 中的"),t("code",[s._v("Math.PI")]),s._v("。")])]),s._v(" "),t("tr",[t("td",[s._v("E")]),s._v(" "),t("td",[s._v("无")]),s._v(" "),t("td",[s._v("DOUBLE")]),s._v(" "),t("td",[s._v("常序列的值："),t("code",[s._v("e")]),s._v(" 的 "),t("code",[s._v("double")]),s._v(" 值，自然对数的底，它等于 "),t("em",[s._v("Java 标准库")]),s._v("  中的 "),t("code",[s._v("Math.E")]),s._v("。")])])])]),s._v(" "),t("p",[s._v("例如：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" const"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'value'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1024'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'INT64'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("select s1, s2, const(s1, 'value'='1024', 'type'='INT64'), pi(s2), e(s1, s2) from root.sg1.d1; \n+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+\n|                         Time|root.sg1.d1.s1|root.sg1.d1.s2|const(root.sg1.d1.s1, \"value\"=\"1024\", \"type\"=\"INT64\")|pi(root.sg1.d1.s2)|e(root.sg1.d1.s1, root.sg1.d1.s2)|\n+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+\n|1970-01-01T08:00:00.000+08:00|           0.0|           0.0|                                                 1024| 3.141592653589793|                2.718281828459045|\n|1970-01-01T08:00:00.001+08:00|           1.0|          null|                                                 1024|              null|                2.718281828459045|\n|1970-01-01T08:00:00.002+08:00|           2.0|          null|                                                 1024|              null|                2.718281828459045|\n|1970-01-01T08:00:00.003+08:00|          null|           3.0|                                                 null| 3.141592653589793|                2.718281828459045|\n|1970-01-01T08:00:00.004+08:00|          null|           4.0|                                                 null| 3.141592653589793|                2.718281828459045|\n+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+\nTotal line number = 5\nIt costs 0.005s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);