(window.webpackJsonp=window.webpackJsonp||[]).push([[978],{1384:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"数据查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据查询"}},[s._v("#")]),s._v(" 数据查询")]),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("h3",{attrs:{id:"语法定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法定义"}},[s._v("#")]),s._v(" 语法定义")]),s._v(" "),t("p",[s._v("在 IoTDB 中，使用 "),t("code",[s._v("SELECT")]),s._v(" 语句从一条或多条时间序列中查询数据。 下面是 "),t("code",[s._v("SELECT")]),s._v(" 语句的语法定义：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TRACING?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" \n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LAST")]),s._v("?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" selectExpr "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" selectExpr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("fromClause"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" prefixPath "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" prefixPath"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("whereClause?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" queryFilter\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("orderByTimeClause?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TIME")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("paginationClause?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" SLIMIT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("OFFSET")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" SOFFSET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("groupByLevelClause?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("groupByTimeClause?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("startTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" endTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" slidingStep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("fillClause?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FILL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PREVIOUS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" beforeRange "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" LINEAR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" beforeRange"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" afterRange "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" constant"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("withoutNullClause?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" WITHOUT "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ANY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("alignClause?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ALIGN "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" DEVICE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISABLE")]),s._v(" ALIGN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("常用的子句如下：")]),s._v(" "),t("ul",[t("li",[s._v("每个 "),t("code",[s._v("selectExpr")]),s._v(" 对应查询结果的一列，支持时间序列后缀、时间序列生成函数（包括用户自定义函数）、聚合函数、数字常量、算数运算表达式。每个 "),t("code",[s._v("SELECT")]),s._v(" 语句至少应该包含一个 "),t("code",[s._v("selectExpr")]),s._v(" 。关于 "),t("code",[s._v("selectExpr")]),s._v("，详见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Query-Data/Select-Expression.html"}},[s._v("选择表达式")]),s._v(" 。")],1),s._v(" "),t("li",[t("code",[s._v("fromClause")]),s._v(" 包含要查询的一个或多个时间序列的前缀。")]),s._v(" "),t("li",[t("code",[s._v("whereClause")]),s._v("（可选）指定了查询的筛选条件 "),t("code",[s._v("queryFilter")]),s._v("。"),t("code",[s._v("queryFilter")]),s._v(" 是一个逻辑表达式，查询结果返回计算结果为真的数据点。如果没有指定 "),t("code",[s._v("whereClaue")]),s._v("，则返回序列中所有数据点。关于 "),t("code",[s._v("queryFilter")]),s._v("，详见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Query-Data/Query-Filter.html"}},[s._v("查询过滤条件")]),s._v(" 。")],1),s._v(" "),t("li",[s._v("查询结果默认按照时间戳大小升序排列，可以通过 "),t("code",[s._v("ORDER BY TIME DESC")]),s._v(" 指定结果集按照时间戳大小降序排列。")]),s._v(" "),t("li",[s._v("当查询结果数据量很大时，可以使用 "),t("code",[s._v("LIMIT/SLIMIT")]),s._v(" 及 "),t("code",[s._v("OFFSET/SOFFSET")]),s._v(" 对结果集进行分页，详见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Query-Data/Pagination.html"}},[s._v("查询结果分页")]),s._v(" 。")],1),s._v(" "),t("li",[s._v("查询结果集默认按照时间戳进行对齐，即以时间序列为列，每一行数据各列的时间戳相同。其他结果集对齐方式详见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Query-Data/Result-Format.html"}},[s._v("查询结果对齐格式")]),s._v(" 。")],1)]),s._v(" "),t("h3",{attrs:{id:"基本示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本示例"}},[s._v("#")]),s._v(" 基本示例")]),s._v(" "),t("h4",{attrs:{id:"根据一个时间区间选择一列数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据一个时间区间选择一列数据"}},[s._v("#")]),s._v(" 根据一个时间区间选择一列数据")]),s._v(" "),t("p",[s._v("SQL 语句为：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其含义为：")]),s._v(" "),t("p",[s._v("被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为温度传感器（temperature）；该语句要求选择出该设备在 “2017-11-01T00:08:00.000” 时间点以前的所有温度传感器的值。")]),s._v(" "),t("p",[s._v("该 SQL 语句的执行结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------------------------+\n|                         Time|root.ln.wf01.wt01.temperature|\n+-----------------------------+-----------------------------+\n|2017-11-01T00:00:00.000+08:00|                        25.96|\n|2017-11-01T00:01:00.000+08:00|                        24.36|\n|2017-11-01T00:02:00.000+08:00|                        20.09|\n|2017-11-01T00:03:00.000+08:00|                        20.18|\n|2017-11-01T00:04:00.000+08:00|                        21.13|\n|2017-11-01T00:05:00.000+08:00|                        22.72|\n|2017-11-01T00:06:00.000+08:00|                        20.71|\n|2017-11-01T00:07:00.000+08:00|                        21.45|\n+-----------------------------+-----------------------------+\nTotal line number = 8\nIt costs 0.026s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h4",{attrs:{id:"根据一个时间区间选择多列数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据一个时间区间选择多列数据"}},[s._v("#")]),s._v(" 根据一个时间区间选择多列数据")]),s._v(" "),t("p",[s._v("SQL 语句为：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其含义为：")]),s._v(" "),t("p",[s._v("被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为供电状态（status）和温度传感器（temperature）；该语句要求选择出 “2017-11-01T00:05:00.000” 至 “2017-11-01T00:12:00.000” 之间的所选时间序列的值。")]),s._v(" "),t("p",[s._v("该 SQL 语句的执行结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+------------------------+-----------------------------+\n|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------------+------------------------+-----------------------------+\n|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|\n|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|\n|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|\n|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|\n|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|\n|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|\n+-----------------------------+------------------------+-----------------------------+\nTotal line number = 6\nIt costs 0.018s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h4",{attrs:{id:"按照多个时间区间选择同一设备的多列数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按照多个时间区间选择同一设备的多列数据"}},[s._v("#")]),s._v(" 按照多个时间区间选择同一设备的多列数据")]),s._v(" "),t("p",[s._v("IoTDB 支持在一次查询中指定多个时间区间条件，用户可以根据需求随意组合时间区间条件。例如，")]),s._v(" "),t("p",[s._v("SQL 语句为：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其含义为：")]),s._v(" "),t("p",[s._v("被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为“供电状态（status）”和“温度传感器（temperature）”；该语句指定了两个不同的时间区间，分别为“2017-11-01T00:05:00.000 至 2017-11-01T00:12:00.000”和“2017-11-01T16:35:00.000 至 2017-11-01T16:37:00.000”；该语句要求选择出满足任一时间区间的被选时间序列的值。")]),s._v(" "),t("p",[s._v("该 SQL 语句的执行结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+------------------------+-----------------------------+\n|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------------+------------------------+-----------------------------+\n|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|\n|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|\n|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|\n|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|\n|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|\n|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|\n|2017-11-01T16:35:00.000+08:00|                    true|                        23.44|\n|2017-11-01T16:36:00.000+08:00|                   false|                        21.98|\n|2017-11-01T16:37:00.000+08:00|                   false|                        21.93|\n+-----------------------------+------------------------+-----------------------------+\nTotal line number = 9\nIt costs 0.018s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h4",{attrs:{id:"按照多个时间区间选择不同设备的多列数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按照多个时间区间选择不同设备的多列数据"}},[s._v("#")]),s._v(" 按照多个时间区间选择不同设备的多列数据")]),s._v(" "),t("p",[s._v("该系统支持在一次查询中选择任意列的数据，也就是说，被选择的列可以来源于不同的设备。例如，SQL 语句为：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" wf01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" wf02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hardware "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("35")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其含义为：")]),s._v(" "),t("p",[s._v("被选择的时间序列为 “ln 集团 wf01 子站 wt01 设备的供电状态” 以及 “ln 集团 wf02 子站 wt02 设备的硬件版本”；该语句指定了两个时间区间，分别为 “2017-11-01T00:05:00.000 至 2017-11-01T00:12:00.000” 和 “2017-11-01T16:35:00.000 至 2017-11-01T16:37:00.000”；该语句要求选择出满足任意时间区间的被选时间序列的值。")]),s._v(" "),t("p",[s._v("该 SQL 语句的执行结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+------------------------+--------------------------+\n|                         Time|root.ln.wf01.wt01.status|root.ln.wf02.wt02.hardware|\n+-----------------------------+------------------------+--------------------------+\n|2017-11-01T00:06:00.000+08:00|                   false|                        v1|\n|2017-11-01T00:07:00.000+08:00|                   false|                        v1|\n|2017-11-01T00:08:00.000+08:00|                   false|                        v1|\n|2017-11-01T00:09:00.000+08:00|                   false|                        v1|\n|2017-11-01T00:10:00.000+08:00|                    true|                        v2|\n|2017-11-01T00:11:00.000+08:00|                   false|                        v1|\n|2017-11-01T16:35:00.000+08:00|                    true|                        v2|\n|2017-11-01T16:36:00.000+08:00|                   false|                        v1|\n|2017-11-01T16:37:00.000+08:00|                   false|                        v1|\n+-----------------------------+------------------------+--------------------------+\nTotal line number = 9\nIt costs 0.014s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h4",{attrs:{id:"根据时间降序返回结果集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#根据时间降序返回结果集"}},[s._v("#")]),s._v(" 根据时间降序返回结果集")]),s._v(" "),t("p",[s._v("IoTDB 支持 "),t("code",[s._v("order by time")]),s._v(" 语句，用于对结果按照时间进行降序展示。例如，SQL 语句为：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("语句执行的结果为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+\n|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|\n+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+\n|2017-11-07T23:59:00.000+08:00|                        v1|                   false|                        21.07|                   false|\n|2017-11-07T23:58:00.000+08:00|                        v1|                   false|                        22.93|                   false|\n|2017-11-07T23:57:00.000+08:00|                        v2|                    true|                        24.39|                    true|\n|2017-11-07T23:56:00.000+08:00|                        v2|                    true|                        24.44|                    true|\n|2017-11-07T23:55:00.000+08:00|                        v2|                    true|                         25.9|                    true|\n|2017-11-07T23:54:00.000+08:00|                        v1|                   false|                        22.52|                   false|\n|2017-11-07T23:53:00.000+08:00|                        v2|                    true|                        24.58|                    true|\n|2017-11-07T23:52:00.000+08:00|                        v1|                   false|                        20.18|                   false|\n|2017-11-07T23:51:00.000+08:00|                        v1|                   false|                        22.24|                   false|\n|2017-11-07T23:50:00.000+08:00|                        v2|                    true|                         23.7|                    true|\n+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+\nTotal line number = 10\nIt costs 0.016s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h3",{attrs:{id:"使用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[s._v("#")]),s._v(" 使用方式")]),s._v(" "),t("p",[s._v("数据查询语句支持在 SQL 命令行终端、JDBC、JAVA / C++ / Python / Go 等编程语言 API、RESTful API 中使用。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("在 SQL 命令行终端中执行查询语句：启动 SQL 命令行终端，直接输入查询语句执行即可，详见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/QuickStart/Command-Line-Interface.html"}},[s._v("SQL 命令行终端")]),s._v("。")],1)]),s._v(" "),t("li",[t("p",[s._v("在 JDBC 中执行查询语句，详见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/API/Programming-JDBC.html"}},[s._v("JDBC")]),s._v(" 。")],1)]),s._v(" "),t("li",[t("p",[s._v("在 JAVA / C++ / Python / Go 等编程语言 API 中执行查询语句，详见应用编程接口一章相关文档。接口原型如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SessionDataSet")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("executeQueryStatement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("在 RESTful API 中使用，详见 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/API/RestService.html"}},[s._v("HTTP API")]),s._v(" 。")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);