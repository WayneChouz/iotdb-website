(window.webpackJsonp=window.webpackJsonp||[]).push([[1188],{1594:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"查询过滤条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询过滤条件"}},[s._v("#")]),s._v(" 查询过滤条件")]),s._v(" "),a("p",[a("code",[s._v("WHERE")]),s._v(" 子句指定了对数据行的筛选条件，由一个 "),a("code",[s._v("whereCondition")]),s._v(" 组成。")]),s._v(" "),a("p",[a("code",[s._v("whereCondition")]),s._v(" 是一个逻辑表达式，对于要选择的每一行，其计算结果为真。如果没有 "),a("code",[s._v("WHERE")]),s._v(" 子句，将选择所有行。\n在 "),a("code",[s._v("whereCondition")]),s._v(" 中，可以使用除聚合函数之外的任何 IOTDB 支持的函数和运算符。")]),s._v(" "),a("p",[s._v("根据过滤条件的不同，可以分为时间过滤条件和值过滤条件。时间过滤条件和值过滤条件可以混合使用。")]),s._v(" "),a("h2",{attrs:{id:"时间过滤条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时间过滤条件"}},[s._v("#")]),s._v(" 时间过滤条件")]),s._v(" "),a("p",[s._v("使用时间过滤条件可以筛选特定时间范围的数据。对于时间戳支持的格式，请参考 "),a("RouterLink",{attrs:{to:"/zh/UserGuide/V1.0.x/Data-Concept/Data-Type.html"}},[s._v("时间戳类型")]),s._v(" 。")],1),s._v(" "),a("p",[s._v("示例如下：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("选择时间戳大于 2022-01-01T00:05:00.000 的数据：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("选择时间戳等于 2022-01-01T00:05:00.000 的数据：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("选择时间区间 [2017-11-01T00:05:00.000, 2017-11-01T00:12:00.000) 内的数据：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("p",[s._v("注：在上述示例中，"),a("code",[s._v("time")]),s._v(" 也可写做 "),a("code",[s._v("timestamp")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"值过滤条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#值过滤条件"}},[s._v("#")]),s._v(" 值过滤条件")]),s._v(" "),a("p",[s._v("使用值过滤条件可以筛选数据值满足特定条件的数据。\n"),a("strong",[s._v("允许")]),s._v("使用 select 子句中未选择的时间序列作为值过滤条件。")]),s._v(" "),a("p",[s._v("示例如下：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("选择值大于 36.5 的数据：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("选择值等于 true 的数据：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("选择区间 [36.5,40] 内或之外的数据：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("选择值在特定范围内的数据：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'300'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'400'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'500'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("选择值在特定范围外的数据：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'300'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'400'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'500'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("选择值为空的数据:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("选择值为非空的数据:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"模糊查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模糊查询"}},[s._v("#")]),s._v(" 模糊查询")]),s._v(" "),a("p",[s._v("对于 TEXT 类型的数据，支持使用 "),a("code",[s._v("Like")]),s._v(" 和 "),a("code",[s._v("Regexp")]),s._v(" 运算符对数据进行模糊匹配")]),s._v(" "),a("h3",{attrs:{id:"使用-like-进行模糊匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-like-进行模糊匹配"}},[s._v("#")]),s._v(" 使用 "),a("code",[s._v("Like")]),s._v(" 进行模糊匹配")]),s._v(" "),a("p",[a("strong",[s._v("匹配规则：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("%")]),s._v(" 表示任意0个或多个字符。")]),s._v(" "),a("li",[a("code",[s._v("_")]),s._v(" 表示任意单个字符。")])]),s._v(" "),a("p",[a("strong",[s._v("示例 1：")]),s._v(" 查询 "),a("code",[s._v("root.sg.d1")]),s._v(" 下 "),a("code",[s._v("value")]),s._v(" 含有"),a("code",[s._v("'cc'")]),s._v("的数据。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> select * from root.sg.d1 where value like '%cc%'\n+-----------------------------+----------------+\n|                         Time|root.sg.d1.value|\n+-----------------------------+----------------+\n|2017-11-01T00:00:00.000+08:00|        aabbccdd| \n|2017-11-01T00:00:01.000+08:00|              cc|\n+-----------------------------+----------------+\nTotal line number = 2\nIt costs 0.002s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("示例 2：")]),s._v(" 查询 "),a("code",[s._v("root.sg.d1")]),s._v(" 下 "),a("code",[s._v("value")]),s._v(" 中间为 "),a("code",[s._v("'b'")]),s._v("、前后为任意单个字符的数据。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> select * from root.sg.device where value like '_b_'\n+-----------------------------+----------------+\n|                         Time|root.sg.d1.value|\n+-----------------------------+----------------+\n|2017-11-01T00:00:02.000+08:00|             abc| \n+-----------------------------+----------------+\nTotal line number = 1\nIt costs 0.002s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"使用-regexp-进行模糊匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-regexp-进行模糊匹配"}},[s._v("#")]),s._v(" 使用 "),a("code",[s._v("Regexp")]),s._v(" 进行模糊匹配")]),s._v(" "),a("p",[s._v("需要传入的过滤条件为 "),a("strong",[s._v("Java 标准库风格的正则表达式")]),s._v("。")]),s._v(" "),a("p",[a("strong",[s._v("常见的正则匹配举例：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("长度为3-20的所有字符：^.{3,20}$\n大写英文字符：^[A-Z]+$\n数字和英文字符：^[A-Za-z0-9]+$\n以a开头的：^a.*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("示例 1：")]),s._v(" 查询 root.sg.d1 下 value 值为26个英文字符组成的字符串。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from root.sg.d1 where value regexp "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^[A-Za-z]+$'")]),s._v("\n+-----------------------------+----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         Time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg.d1.value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:00.000+08:00"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        aabbccdd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:01.000+08:00"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("              cc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\nTotal line number "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nIt costs "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".002s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("示例 2：")]),s._v(" 查询 root.sg.d1 下 value 值为26个小写英文字符组成的字符串且时间大于100的。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from root.sg.d1 where value regexp "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^[a-z]+$'")]),s._v(" and "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n+-----------------------------+----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         Time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg.d1.value"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:00.000+08:00"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        aabbccdd"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:01.000+08:00"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("              cc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------------+----------------+\nTotal line number "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nIt costs "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".002s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);