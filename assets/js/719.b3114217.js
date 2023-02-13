(window.webpackJsonp=window.webpackJsonp||[]).push([[719],{1126:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"序列发现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#序列发现"}},[s._v("#")]),s._v(" 序列发现")]),s._v(" "),t("h2",{attrs:{id:"consecutivesequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consecutivesequences"}},[s._v("#")]),s._v(" ConsecutiveSequences")]),s._v(" "),t("h3",{attrs:{id:"函数简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),t("p",[s._v("本函数用于在多维严格等间隔数据中发现局部最长连续子序列。")]),s._v(" "),t("p",[s._v("严格等间隔数据是指数据的时间间隔是严格相等的，允许存在数据缺失（包括行缺失和值缺失），但不允许存在数据冗余和时间戳偏移。")]),s._v(" "),t("p",[s._v("连续子序列是指严格按照标准时间间隔等距排布，不存在任何数据缺失的子序列。如果某个连续子序列不是任何连续子序列的真子序列，那么它是局部最长的。")]),s._v(" "),t("p",[t("strong",[s._v("函数名：")]),s._v(" CONSECUTIVESEQUENCES")]),s._v(" "),t("p",[t("strong",[s._v("输入序列：")]),s._v(" 支持多个输入序列，类型可以是任意的，但要满足严格等间隔的要求。")]),s._v(" "),t("p",[t("strong",[s._v("参数：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("gap")]),s._v("：标准时间间隔，是一个有单位的正数。目前支持五种单位，分别是'ms'（毫秒）、's'（秒）、'm'（分钟）、'h'（小时）和'd'（天）。在缺省情况下，函数会利用众数估计标准时间间隔。")])]),s._v(" "),t("p",[t("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型为 INT32。输出序列中的每一个数据点对应一个局部最长连续子序列，时间戳为子序列的起始时刻，值为子序列包含的数据点个数。")]),s._v(" "),t("p",[t("strong",[s._v("提示：")]),s._v(" 对于不符合要求的输入，本函数不对输出做任何保证。")]),s._v(" "),t("h3",{attrs:{id:"使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),t("h4",{attrs:{id:"手动指定标准时间间隔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动指定标准时间间隔"}},[s._v("#")]),s._v(" 手动指定标准时间间隔")]),s._v(" "),t("p",[s._v("本函数可以通过"),t("code",[s._v("gap")]),s._v("参数手动指定标准时间间隔。需要注意的是，错误的参数设置会导致输出产生严重错误。")]),s._v(" "),t("p",[s._v("输入序列：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d1.s1|root.test.d1.s2|\n+-----------------------------+---------------+---------------+\n|2020-01-01T00:00:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:05:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:10:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:20:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:25:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:30:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:35:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:40:00.000+08:00|            1.0|           null|\n|2020-01-01T00:45:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:50:00.000+08:00|            1.0|            1.0|\n+-----------------------------+---------------+---------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("用于查询的SQL语句：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" consecutivesequences"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gap'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5m'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出序列：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('+-----------------------------+------------------------------------------------------------------+\n|                         Time|consecutivesequences(root.test.d1.s1, root.test.d1.s2, "gap"="5m")|\n+-----------------------------+------------------------------------------------------------------+\n|2020-01-01T00:00:00.000+08:00|                                                                 3|\n|2020-01-01T00:20:00.000+08:00|                                                                 4|\n|2020-01-01T00:45:00.000+08:00|                                                                 2|\n+-----------------------------+------------------------------------------------------------------+\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h4",{attrs:{id:"自动估计标准时间间隔"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动估计标准时间间隔"}},[s._v("#")]),s._v(" 自动估计标准时间间隔")]),s._v(" "),t("p",[s._v("当"),t("code",[s._v("gap")]),s._v("参数缺省时，本函数可以利用众数估计标准时间间隔，得到同样的结果。因此，这种用法更受推荐。")]),s._v(" "),t("p",[s._v("输入序列同上，用于查询的SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" consecutivesequences"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出序列：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+------------------------------------------------------+\n|                         Time|consecutivesequences(root.test.d1.s1, root.test.d1.s2)|\n+-----------------------------+------------------------------------------------------+\n|2020-01-01T00:00:00.000+08:00|                                                     3|\n|2020-01-01T00:20:00.000+08:00|                                                     4|\n|2020-01-01T00:45:00.000+08:00|                                                     2|\n+-----------------------------+------------------------------------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"consecutivewindows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consecutivewindows"}},[s._v("#")]),s._v(" ConsecutiveWindows")]),s._v(" "),t("h3",{attrs:{id:"函数简介-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数简介-2"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),t("p",[s._v("本函数用于在多维严格等间隔数据中发现指定长度的连续窗口。")]),s._v(" "),t("p",[s._v("严格等间隔数据是指数据的时间间隔是严格相等的，允许存在数据缺失（包括行缺失和值缺失），但不允许存在数据冗余和时间戳偏移。")]),s._v(" "),t("p",[s._v("连续窗口是指严格按照标准时间间隔等距排布，不存在任何数据缺失的子序列。")]),s._v(" "),t("p",[t("strong",[s._v("函数名：")]),s._v(" CONSECUTIVEWINDOWS")]),s._v(" "),t("p",[t("strong",[s._v("输入序列：")]),s._v(" 支持多个输入序列，类型可以是任意的，但要满足严格等间隔的要求。")]),s._v(" "),t("p",[t("strong",[s._v("参数：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("gap")]),s._v("：标准时间间隔，是一个有单位的正数。目前支持五种单位，分别是 'ms'（毫秒）、's'（秒）、'm'（分钟）、'h'（小时）和'd'（天）。在缺省情况下，函数会利用众数估计标准时间间隔。")]),s._v(" "),t("li",[t("code",[s._v("length")]),s._v("：序列长度，是一个有单位的正数。目前支持五种单位，分别是 'ms'（毫秒）、's'（秒）、'm'（分钟）、'h'（小时）和'd'（天）。该参数不允许缺省。")])]),s._v(" "),t("p",[t("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型为 INT32。输出序列中的每一个数据点对应一个指定长度连续子序列，时间戳为子序列的起始时刻，值为子序列包含的数据点个数。")]),s._v(" "),t("p",[t("strong",[s._v("提示：")]),s._v(" 对于不符合要求的输入，本函数不对输出做任何保证。")]),s._v(" "),t("h3",{attrs:{id:"使用示例-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-2"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),t("p",[s._v("输入序列：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d1.s1|root.test.d1.s2|\n+-----------------------------+---------------+---------------+\n|2020-01-01T00:00:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:05:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:10:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:20:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:25:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:30:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:35:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:40:00.000+08:00|            1.0|           null|\n|2020-01-01T00:45:00.000+08:00|            1.0|            1.0|\n|2020-01-01T00:50:00.000+08:00|            1.0|            1.0|\n+-----------------------------+---------------+---------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("用于查询的SQL语句：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" consecutivewindows"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'length'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10m'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("输出序列：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('+-----------------------------+--------------------------------------------------------------------+\n|                         Time|consecutivewindows(root.test.d1.s1, root.test.d1.s2, "length"="10m")|\n+-----------------------------+--------------------------------------------------------------------+\n|2020-01-01T00:00:00.000+08:00|                                                                   3|\n|2020-01-01T00:20:00.000+08:00|                                                                   3|\n|2020-01-01T00:25:00.000+08:00|                                                                   3|\n+-----------------------------+--------------------------------------------------------------------+\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);