(window.webpackJsonp=window.webpackJsonp||[]).push([[703],{1109:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"比较运算符和函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符和函数"}},[s._v("#")]),s._v(" 比较运算符和函数")]),s._v(" "),t("h2",{attrs:{id:"基本比较运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本比较运算符"}},[s._v("#")]),s._v(" 基本比较运算符")]),s._v(" "),t("ul",[t("li",[s._v("输入数据类型： "),t("code",[s._v("INT32")]),s._v(", "),t("code",[s._v("INT64")]),s._v(", "),t("code",[s._v("FLOAT")]),s._v(", "),t("code",[s._v("DOUBLE")]),s._v("。")]),s._v(" "),t("li",[s._v("注意：会将所有数据转换为"),t("code",[s._v("DOUBLE")]),s._v("类型后进行比较。"),t("code",[s._v("==")]),s._v("和"),t("code",[s._v("!=")]),s._v("可以直接比较两个"),t("code",[s._v("BOOLEAN")]),s._v("。")]),s._v(" "),t("li",[s._v("返回类型："),t("code",[s._v("BOOLEAN")]),s._v("。")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("运算符")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v(">")])]),s._v(" "),t("td",[s._v("大于")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v(">=")])]),s._v(" "),t("td",[s._v("大于等于")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("<")])]),s._v(" "),t("td",[s._v("小于")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("<=")])]),s._v(" "),t("td",[s._v("小于等于")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("==")])]),s._v(" "),t("td",[s._v("等于")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("!=")]),s._v(" / "),t("code",[s._v("<>")])]),s._v(" "),t("td",[s._v("不等于")])])])]),s._v(" "),t("p",[t("strong",[s._v("示例：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("运行结果")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select a, b, a > 10, a <= b, !(a <= b), a > 10 && a > b from root.test;\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n|                         Time|root.test.a|root.test.b|root.test.a > 10|root.test.a <= root.test.b|!root.test.a <= root.test.b|(root.test.a > 10) & (root.test.a > root.test.b)|\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n|1970-01-01T08:00:00.001+08:00|         23|       10.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.002+08:00|         33|       21.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.004+08:00|         13|       15.0|            true|                      true|                      false|                                           false|\n|1970-01-01T08:00:00.005+08:00|         26|        0.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.008+08:00|          1|       22.0|           false|                      true|                      false|                                           false|\n|1970-01-01T08:00:00.010+08:00|         23|       12.0|            true|                     false|                       true|                                            true|\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"between-and-运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#between-and-运算符"}},[s._v("#")]),s._v(" "),t("code",[s._v("BETWEEN ... AND ...")]),s._v(" 运算符")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("运算符")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("BETWEEN ... AND ...")])]),s._v(" "),t("td",[s._v("在指定范围内")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("NOT BETWEEN ... AND ...")])]),s._v(" "),t("td",[s._v("不在指定范围内")])])])]),s._v(" "),t("p",[t("strong",[s._v("示例：")]),s._v(" 选择区间 [36.5,40] 内或之外的数据：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"模糊匹配运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模糊匹配运算符"}},[s._v("#")]),s._v(" 模糊匹配运算符")]),s._v(" "),t("p",[s._v("对于 TEXT 类型的数据，支持使用 "),t("code",[s._v("Like")]),s._v(" 和 "),t("code",[s._v("Regexp")]),s._v(" 运算符对数据进行模糊匹配")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("运算符")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("LIKE")])]),s._v(" "),t("td",[s._v("匹配简单模式")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("NOT LIKE")])]),s._v(" "),t("td",[s._v("无法匹配简单模式")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("REGEXP")])]),s._v(" "),t("td",[s._v("匹配正则表达式")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("NOT REGEXP")])]),s._v(" "),t("td",[s._v("无法匹配正则表达式")])])])]),s._v(" "),t("p",[s._v("输入数据类型："),t("code",[s._v("TEXT")])]),s._v(" "),t("p",[s._v("返回类型："),t("code",[s._v("BOOLEAN")])]),s._v(" "),t("h3",{attrs:{id:"使用-like-进行模糊匹配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-like-进行模糊匹配"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("Like")]),s._v(" 进行模糊匹配")]),s._v(" "),t("p",[t("strong",[s._v("匹配规则：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("%")]),s._v(" 表示任意0个或多个字符。")]),s._v(" "),t("li",[t("code",[s._v("_")]),s._v(" 表示任意单个字符。")])]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")]),s._v(" 查询 "),t("code",[s._v("root.sg.d1")]),s._v(" 下 "),t("code",[s._v("value")]),s._v(" 含有"),t("code",[s._v("'cc'")]),s._v("的数据。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from root.sg.d1 where value like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%cc%'")]),s._v("\n+-----------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         Time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg.d1.value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:00.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        aabbccdd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:01.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("              cc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\nTotal line number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nIt costs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")]),s._v(" 查询 "),t("code",[s._v("root.sg.d1")]),s._v(" 下 "),t("code",[s._v("value")]),s._v(" 中间为 "),t("code",[s._v("'b'")]),s._v("、前后为任意单个字符的数据。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from root.sg.device where value like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_b_'")]),s._v("\n+-----------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         Time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg.d1.value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:02.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             abc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" \n+-----------------------------+----------------+\nTotal line number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nIt costs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"使用-regexp-进行模糊匹配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-regexp-进行模糊匹配"}},[s._v("#")]),s._v(" 使用 "),t("code",[s._v("Regexp")]),s._v(" 进行模糊匹配")]),s._v(" "),t("p",[s._v("需要传入的过滤条件为 "),t("strong",[s._v("Java 标准库风格的正则表达式")]),s._v("。")]),s._v(" "),t("p",[t("strong",[s._v("常见的正则匹配举例：")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("长度为3-20的所有字符：^.{3,20}$\n大写英文字符：^[A-Z]+$\n数字和英文字符：^[A-Za-z0-9]+$\n以a开头的：^a.*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("strong",[s._v("示例 1：")]),s._v(" 查询 root.sg.d1 下 value 值为26个英文字符组成的字符串。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from root.sg.d1 where value regexp "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^[A-Za-z]+$'")]),s._v("\n+-----------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         Time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg.d1.value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:00.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        aabbccdd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:01.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("              cc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\nTotal line number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nIt costs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")]),s._v(" 查询 root.sg.d1 下 value 值为26个小写英文字符组成的字符串且时间大于100的。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from root.sg.d1 where value regexp "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^[a-z]+$'")]),s._v(" and "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n+-----------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         Time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg.d1.value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:00.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        aabbccdd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:01.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("              cc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\nTotal line number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nIt costs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("示例 3：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("regexp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[0-2]'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("运行结果")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------+-------------------------+--------------------------+\n|                         Time|root.test.b|root.test.b LIKE '^1.*?$'|root.test.b REGEXP '[0-2]'|\n+-----------------------------+-----------+-------------------------+--------------------------+\n|1970-01-01T08:00:00.001+08:00| 111test111|                     true|                      true|\n|1970-01-01T08:00:00.003+08:00| 333test333|                    false|                     false|\n+-----------------------------+-----------+-------------------------+--------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"is-null-运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#is-null-运算符"}},[s._v("#")]),s._v(" "),t("code",[s._v("IS NULL")]),s._v(" 运算符")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("运算符")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("IS NULL")])]),s._v(" "),t("td",[s._v("是空值")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("IS NOT NULL")])]),s._v(" "),t("td",[s._v("不是空值")])])])]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")]),s._v(" 选择值为空的数据:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")]),s._v(" 选择值为非空的数据:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"in-运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-运算符"}},[s._v("#")]),s._v(" "),t("code",[s._v("IN")]),s._v(" 运算符")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("运算符")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("IN")]),s._v(" / "),t("code",[s._v("CONTAINS")])]),s._v(" "),t("td",[s._v("是指定列表中的值")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("NOT IN")]),s._v(" / "),t("code",[s._v("NOT CONTAINS")])]),s._v(" "),t("td",[s._v("不是指定列表中的值")])])])]),s._v(" "),t("p",[s._v("输入数据类型："),t("code",[s._v("All Types")])]),s._v(" "),t("p",[s._v("返回类型 "),t("code",[s._v("BOOLEAN")])]),s._v(" "),t("p",[t("strong",[s._v("注意：请确保集合中的值可以被转为输入数据的类型。")])]),s._v(" "),t("blockquote",[t("p",[s._v("例如：")]),s._v(" "),t("p",[t("code",[s._v("s1 in (1, 2, 3, 'test')")]),s._v("，"),t("code",[s._v("s1")]),s._v("的数据类型是"),t("code",[s._v("INT32")])]),s._v(" "),t("p",[s._v("我们将会抛出异常，因为"),t("code",[s._v("'test'")]),s._v("不能被转为"),t("code",[s._v("INT32")]),s._v("类型")])]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")]),s._v(" 选择值在特定范围内的数据：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'300'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'400'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'500'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")]),s._v(" 选择值在特定范围外的数据：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'300'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'400'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'500'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("示例 3：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出2:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------+--------------------+\n|                         Time|root.test.a|root.test.a IN (1,2)|\n+-----------------------------+-----------+--------------------+\n|1970-01-01T08:00:00.001+08:00|          1|                true|\n|1970-01-01T08:00:00.003+08:00|          3|               false|\n+-----------------------------+-----------+--------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"条件函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条件函数"}},[s._v("#")]),s._v(" 条件函数")]),s._v(" "),t("p",[s._v("条件函数针对每个数据点进行条件判断，返回布尔值。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("函数名")]),s._v(" "),t("th",[s._v("可接收的输入序列类型")]),s._v(" "),t("th",[s._v("必要的属性参数")]),s._v(" "),t("th",[s._v("输出序列类型")]),s._v(" "),t("th",[s._v("功能类型")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ON_OFF")]),s._v(" "),t("td",[s._v("INT32 / INT64 / FLOAT / DOUBLE")]),s._v(" "),t("td",[t("code",[s._v("threshold")]),s._v(":DOUBLE类型")]),s._v(" "),t("td",[s._v("BOOLEAN 类型")]),s._v(" "),t("td",[s._v("返回"),t("code",[s._v("ts_value >= threshold")]),s._v("的bool值")])]),s._v(" "),t("tr",[t("td",[s._v("IN_RANGE")]),s._v(" "),t("td",[s._v("INT32 / INT64 / FLOAT / DOUBLE")]),s._v(" "),t("td",[t("code",[s._v("lower")]),s._v(":DOUBLE类型"),t("br"),t("code",[s._v("upper")]),s._v(":DOUBLE类型")]),s._v(" "),t("td",[s._v("BOOLEAN类型")]),s._v(" "),t("td",[s._v("返回"),t("code",[s._v("ts_value >= lower && ts_value <= upper")]),s._v("的bool值")])])])]),s._v(" "),t("p",[s._v("测试数据：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select ts from root.test;\n+-----------------------------+------------+\n|                         Time|root.test.ts|\n+-----------------------------+------------+\n|1970-01-01T08:00:00.001+08:00|           1|\n|1970-01-01T08:00:00.002+08:00|           2|\n|1970-01-01T08:00:00.003+08:00|           3|\n|1970-01-01T08:00:00.004+08:00|           4|\n+-----------------------------+------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("示例 1：")])]),s._v(" "),t("p",[s._v("SQL语句：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" ts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" on_off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'threshold'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select ts, on_off(ts, 'threshold'='2') from root.test;\n+-----------------------------+------------+-------------------------------------+\n|                         Time|root.test.ts|on_off(root.test.ts, \"threshold\"=\"2\")|\n+-----------------------------+------------+-------------------------------------+\n|1970-01-01T08:00:00.001+08:00|           1|                                false|\n|1970-01-01T08:00:00.002+08:00|           2|                                 true|\n|1970-01-01T08:00:00.003+08:00|           3|                                 true|\n|1970-01-01T08:00:00.004+08:00|           4|                                 true|\n+-----------------------------+------------+-------------------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")])]),s._v(" "),t("p",[s._v("Sql语句：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" ts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" in_range"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lower'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'upper'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select ts, in_range(ts, 'lower'='2', 'upper'='3.1') from root.test;\n+-----------------------------+------------+--------------------------------------------------+\n|                         Time|root.test.ts|in_range(root.test.ts, \"lower\"=\"2\", \"upper\"=\"3.1\")|\n+-----------------------------+------------+--------------------------------------------------+\n|1970-01-01T08:00:00.001+08:00|           1|                                             false|\n|1970-01-01T08:00:00.002+08:00|           2|                                              true|\n|1970-01-01T08:00:00.003+08:00|           3|                                              true|\n|1970-01-01T08:00:00.004+08:00|           4|                                             false|\n+-----------------------------+------------+--------------------------------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);