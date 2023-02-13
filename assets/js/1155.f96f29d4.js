(window.webpackJsonp=window.webpackJsonp||[]).push([[1155],{1561:function(_,v,t){"use strict";t.r(v);var d=t(19),r=Object(d.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"聚合函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#聚合函数"}},[_._v("#")]),_._v(" 聚合函数")]),_._v(" "),v("p",[_._v("聚合函数是多对一函数。它们对一组值进行聚合计算，得到单个聚合结果。")]),_._v(" "),v("p",[_._v("除了 "),v("code",[_._v("COUNT()")]),_._v(" 之外，其他所有聚合函数都忽略空值，并在没有输入行或所有值为空时返回空值。 例如，"),v("code",[_._v("SUM()")]),_._v(" 返回 null 而不是零，而 "),v("code",[_._v("AVG()")]),_._v(" 在计数中不包括 null 值。")]),_._v(" "),v("p",[_._v("IoTDB 支持的聚合函数如下：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("功能描述")]),_._v(" "),v("th",[_._v("允许的输入类型")]),_._v(" "),v("th",[_._v("输出类型")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("SUM")]),_._v(" "),v("td",[_._v("求和。")]),_._v(" "),v("td",[_._v("INT32 INT64 FLOAT DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")])]),_._v(" "),v("tr",[v("td",[_._v("COUNT")]),_._v(" "),v("td",[_._v("计算数据点数。")]),_._v(" "),v("td",[_._v("所有类型")]),_._v(" "),v("td",[_._v("INT")])]),_._v(" "),v("tr",[v("td",[_._v("AVG")]),_._v(" "),v("td",[_._v("求平均值。")]),_._v(" "),v("td",[_._v("INT32 INT64 FLOAT DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")])]),_._v(" "),v("tr",[v("td",[_._v("EXTREME")]),_._v(" "),v("td",[_._v("求具有最大绝对值的值。如果正值和负值的最大绝对值相等，则返回正值。")]),_._v(" "),v("td",[_._v("INT32 INT64 FLOAT DOUBLE")]),_._v(" "),v("td",[_._v("与输入类型一致")])]),_._v(" "),v("tr",[v("td",[_._v("MAX_VALUE")]),_._v(" "),v("td",[_._v("求最大值。")]),_._v(" "),v("td",[_._v("INT32 INT64 FLOAT DOUBLE")]),_._v(" "),v("td",[_._v("与输入类型一致")])]),_._v(" "),v("tr",[v("td",[_._v("MIN_VALUE")]),_._v(" "),v("td",[_._v("求最小值。")]),_._v(" "),v("td",[_._v("INT32 INT64 FLOAT DOUBLE")]),_._v(" "),v("td",[_._v("与输入类型一致")])]),_._v(" "),v("tr",[v("td",[_._v("FIRST_VALUE")]),_._v(" "),v("td",[_._v("求时间戳最小的值。")]),_._v(" "),v("td",[_._v("所有类型")]),_._v(" "),v("td",[_._v("与输入类型一致")])]),_._v(" "),v("tr",[v("td",[_._v("LAST_VALUE")]),_._v(" "),v("td",[_._v("求时间戳最大的值。")]),_._v(" "),v("td",[_._v("所有类型")]),_._v(" "),v("td",[_._v("与输入类型一致")])]),_._v(" "),v("tr",[v("td",[_._v("MAX_TIME")]),_._v(" "),v("td",[_._v("求最大时间戳。")]),_._v(" "),v("td",[_._v("所有类型")]),_._v(" "),v("td",[_._v("Timestamp")])]),_._v(" "),v("tr",[v("td",[_._v("MIN_TIME")]),_._v(" "),v("td",[_._v("求最小时间戳。")]),_._v(" "),v("td",[_._v("所有类型")]),_._v(" "),v("td",[_._v("Timestamp")])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);