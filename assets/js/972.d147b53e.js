(window.webpackJsonp=window.webpackJsonp||[]).push([[972],{1378:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"查询写回-select-into"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询写回-select-into"}},[s._v("#")]),s._v(" 查询写回（SELECT ... INTO ...）")]),s._v(" "),t("p",[t("code",[s._v("SELECT ... INTO ...")]),s._v(" 语句允许您将查询结果集写回到指定序列上。")]),s._v(" "),t("h3",{attrs:{id:"sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[s._v("#")]),s._v(" SQL")]),s._v(" "),t("h4",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("p",[t("strong",[s._v("下面是 "),t("code",[s._v("select")]),s._v(" 语句的语法定义：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("selectClause \nintoClause? \nfromClause \nwhereClause? \nspecialClause?\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("如果去除 "),t("code",[s._v("intoClause")]),s._v(" 子句，那么 "),t("code",[s._v("select")]),s._v(" 语句即是单纯的查询语句。")]),s._v(" "),t("p",[t("code",[s._v("intoClause")]),s._v(" 子句是写回功能的标记语句。")]),s._v(" "),t("p",[t("strong",[s._v("下面是 "),t("code",[s._v("intoClause")]),s._v(" 子句的定义：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("intoClause\n  : "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" ALIGNED? intoPath "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("COMMA intoPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nintoPath\n  : fullPath\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" nodeNameWithoutStar "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DOT nodeNameWithoutStar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("code",[s._v("intoPath")]),s._v("（目标序列）支持两种方式指定：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("以 "),t("code",[s._v("root")]),s._v(" 开头的完整序列名指定")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("例子：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t2 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])])]),s._v(" "),t("li",[t("p",[s._v("不以 "),t("code",[s._v("root")]),s._v(" 开头的部分序列名指定，此时目标序列由 "),t("code",[s._v("from")]),s._v(" 子句中的序列前缀和"),t("code",[s._v("intoPath")]),s._v("拼接而成")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("例子：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这等价于")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t2 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])])])]),s._v(" "),t("p",[t("strong",[s._v("在"),t("code",[s._v("intoPath")]),s._v(" 中，您还可以使用 "),t("code",[s._v("${i}")]),s._v("风格的路径匹配符来表示"),t("code",[s._v("from")]),s._v("子句中的部分路径。")])]),s._v(" "),t("p",[s._v("比如，对于路径"),t("code",[s._v("root.sg1.d1.v1")]),s._v("而言，"),t("code",[s._v("${1}")]),s._v("表示"),t("code",[s._v("sg1")]),s._v("，"),t("code",[s._v("${2}")]),s._v("表示"),t("code",[s._v("d1")]),s._v("，"),t("code",[s._v("${3}")]),s._v("表示"),t("code",[s._v("v1")]),s._v("。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("例子：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" ${"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("}_t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ${"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("${"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("${"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("}"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t2\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这等价于")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg_t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t2\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])]),s._v(" "),t("p",[t("strong",[s._v("您可以通过关键词  "),t("code",[s._v("ALIGNED")]),s._v(" 指定 "),t("code",[s._v("intoPath")]),s._v("（目标序列）是否为一个对齐时间序列。")])]),s._v(" "),t("p",[s._v("当目标序列存在时，您需要保证源序列和目标时间序列的类型匹配。")]),s._v(" "),t("p",[s._v("当目标序列不存在时，系统将自动创建一个新的目标对齐时间序列。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("例子：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s3\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" aligned root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("t3\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])]),s._v(" "),t("h4",{attrs:{id:"支持写回的查询类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持写回的查询类型"}},[s._v("#")]),s._v(" 支持写回的查询类型")]),s._v(" "),t("p",[t("strong",[s._v("注意，除了下述类型的查询，其余类型的查询（如"),t("code",[s._v("LAST")]),s._v("查询和原始聚合查询）都不被支持。")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("原始序列查询")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("时间序列生成函数查询（UDF查询）")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("数学表达式查询")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" s3 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t3 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("嵌套查询")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("tan"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" s3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" cos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" top_k"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" s3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'k'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t3 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Fill 查询")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" fill_s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" \nfill"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("linear"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Group By 查询")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" group_by_s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Group By Fill 查询")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" last_value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" group_by_fill_s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("ms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \nfill "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("float")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PREVIOUS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])]),s._v(" "),t("h4",{attrs:{id:"支持写回的查询子句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#支持写回的查询子句"}},[s._v("#")]),s._v(" 支持写回的查询子句")]),s._v(" "),t("p",[t("strong",[s._v("注意，除了下述子句，其余查询子句（如 "),t("code",[s._v("DESC")]),s._v(" / "),t("code",[s._v("SOFFSET")]),s._v(" 等）都不被支持。")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("支持值过滤")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" s1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("支持时间过滤")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("LIMIT / OFFSET")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" t1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" t2 \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("offset")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])]),s._v(" "),t("h4",{attrs:{id:"其他限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他限制"}},[s._v("#")]),s._v(" 其他限制")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("select")]),s._v("子句中的源序列和"),t("code",[s._v("into")]),s._v("子句中的目标序列数量必须相同")]),s._v(" "),t("li",[t("code",[s._v("select")]),s._v("子句不支持带 "),t("code",[s._v("*")]),s._v("/"),t("code",[s._v("**")]),s._v(" 查询")]),s._v(" "),t("li",[t("code",[s._v("into")]),s._v("子句中的目标序列不必预先创建（可使用自动创建schema功能），但是当"),t("code",[s._v("into")]),s._v("子句中的目标序列已存在时，您需要保证"),t("code",[s._v("select")]),s._v("子句中的源序列和"),t("code",[s._v("into")]),s._v("子句中的目标序列的数据类型一致")]),s._v(" "),t("li",[t("code",[s._v("into")]),s._v("子句中的目标序列必须是互不相同的")]),s._v(" "),t("li",[t("code",[s._v("from")]),s._v("子句只允许有一列序列前缀")]),s._v(" "),t("li",[t("code",[s._v("from")]),s._v("子句不支持带 "),t("code",[s._v("*")]),s._v("/"),t("code",[s._v("**")])]),s._v(" "),t("li",[s._v("由于时间序列生成函数查询（UDF查询）/ 数学表达式查询 / 嵌套查询 尚不支持对齐时间序列（Aligned Timeseries），所以如果您在"),t("code",[s._v("select")]),s._v("子句中使用了上述查询，并且对应操作数包含对齐时间序列，会提示错误")])]),s._v(" "),t("h3",{attrs:{id:"权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#权限"}},[s._v("#")]),s._v(" 权限")]),s._v(" "),t("p",[s._v("用户必须有下列权限才能正常执行查询写回语句：")]),s._v(" "),t("ul",[t("li",[s._v("所有 "),t("code",[s._v("select")]),s._v(" 子句中源序列的 "),t("code",[s._v("READ_TIMESERIES")]),s._v(" 权限")]),s._v(" "),t("li",[s._v("所有 "),t("code",[s._v("into")]),s._v(" 子句中目标序列 "),t("code",[s._v("INSERT_TIMESERIES")]),s._v(" 权限")])]),s._v(" "),t("p",[s._v("更多用户权限相关的内容，请参考"),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Administration-Management/Administration.html"}},[s._v("权限管理语句")]),s._v("。")],1),s._v(" "),t("h3",{attrs:{id:"配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[s._v("#")]),s._v(" 配置参数")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("select_into_insert_tablet_plan_row_limit")]),s._v("：执行 select-into 语句时，一个 insert-tablet-plan 中可以处理的最大行数。 默认为 10000。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);