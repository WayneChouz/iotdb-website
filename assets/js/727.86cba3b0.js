(window.webpackJsonp=window.webpackJsonp||[]).push([[727],{1130:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"最新点查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最新点查询"}},[s._v("#")]),s._v(" 最新点查询")]),s._v(" "),t("p",[s._v("最新点查询是时序数据库 Apache IoTDB 中提供的一种特殊查询。它返回指定时间序列中时间戳最大的数据点，即一条序列的最新状态。")]),s._v(" "),t("p",[s._v("在物联网数据分析场景中，此功能尤为重要。为了满足了用户对设备实时监控的需求，Apache IoTDB 对最新点查询进行了"),t("strong",[s._v("缓存优化")]),s._v("，能够提供毫秒级的返回速度。")]),s._v(" "),t("p",[s._v("SQL 语法：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("last")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMA "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("Path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" PrefixPath "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COMMA "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" PrefixPath "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("whereClause"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" TIMESERIES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ASC")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其含义是： 查询时间序列 prefixPath.path 中最近时间戳的数据。")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("whereClause")]),s._v(" 中当前只支持时间过滤条件，任何其他过滤条件都将会返回异常。当缓存的最新点不满足过滤条件时，IoTDB 需要从存储中获取结果，此时性能将会有所下降。")])]),s._v(" "),t("li",[t("p",[s._v("结果集为四列的结构：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+----+----------+-----+--------+\n|Time|timeseries|value|dataType|\n+----+----------+-----+--------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("可以使用 "),t("code",[s._v("ORDER BY TIMESERIES (DESC | ASC)")]),s._v(" 指定结果集按照序列名降序/升序排列。")])])]),s._v(" "),t("p",[t("strong",[s._v("示例 1：")]),s._v(" 查询 root.ln.wf01.wt01.status 的最新数据点")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select last status from root.ln.wf01.wt01\n+-----------------------------+------------------------+-----+--------+\n|                         Time|              timeseries|value|dataType|\n+-----------------------------+------------------------+-----+--------+\n|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.status|false| BOOLEAN|\n+-----------------------------+------------------------+-----+--------+\nTotal line number = 1\nIt costs 0.000s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("strong",[s._v("示例 2：")]),s._v(" 查询 root.ln.wf01.wt01 下 status，temperature 时间戳大于等于 2017-11-07T23:50:00 的最新数据点。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select last status, temperature from root.ln.wf01.wt01 where time >= 2017-11-07T23:50:00\n+-----------------------------+-----------------------------+---------+--------+\n|                         Time|                   timeseries|    value|dataType|\n+-----------------------------+-----------------------------+---------+--------+\n|2017-11-07T23:59:00.000+08:00|     root.ln.wf01.wt01.status|    false| BOOLEAN|\n|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.temperature|21.067368|  DOUBLE|\n+-----------------------------+-----------------------------+---------+--------+\nTotal line number = 2\nIt costs 0.002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("示例 3：")]),s._v(" 查询 root.ln.wf01.wt01 下所有序列的最新数据点，并按照序列名降序排列。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select last * from root.ln.wf01.wt01 order by timeseries desc;\n+-----------------------------+-----------------------------+---------+--------+\n|                         Time|                   timeseries|    value|dataType|\n+-----------------------------+-----------------------------+---------+--------+\n|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.temperature|21.067368|  DOUBLE|\n|2017-11-07T23:59:00.000+08:00|     root.ln.wf01.wt01.status|    false| BOOLEAN|\n+-----------------------------+-----------------------------+---------+--------+\nTotal line number = 2\nIt costs 0.002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);