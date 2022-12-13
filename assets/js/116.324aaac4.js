(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{517:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"variation-trend-calculation-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variation-trend-calculation-functions"}},[t._v("#")]),t._v(" Variation Trend Calculation Functions")]),t._v(" "),e("p",[t._v("Currently, IoTDB supports the following variation trend calculation functions:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Function Name")]),t._v(" "),e("th",[t._v("Allowed Input Series Data Types")]),t._v(" "),e("th",[t._v("Output Series Data Type")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("TIME_DIFFERENCE")]),t._v(" "),e("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT")]),t._v(" "),e("td",[t._v("INT64")]),t._v(" "),e("td",[t._v("Calculates the difference between the time stamp of a data point and the time stamp of the previous data point. There is no corresponding output for the first data point.")])]),t._v(" "),e("tr",[e("td",[t._v("DIFFERENCE")]),t._v(" "),e("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),e("td",[t._v("Same type as the input series")]),t._v(" "),e("td",[t._v("Calculates the difference between the value of a data point and the value of the previous data point. There is no corresponding output for the first data point.")])]),t._v(" "),e("tr",[e("td",[t._v("NON_NEGATIVE_DIFFERENCE")]),t._v(" "),e("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),e("td",[t._v("Same type as the input series")]),t._v(" "),e("td",[t._v("Calculates the absolute value of the difference between the value of a data point and the value of the previous data point. There is no corresponding output for the first data point.")])]),t._v(" "),e("tr",[e("td",[t._v("DERIVATIVE")]),t._v(" "),e("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),e("td",[t._v("DOUBLE")]),t._v(" "),e("td",[t._v("Calculates the rate of change of a data point compared to the previous data point, the result is equals to DIFFERENCE / TIME_DIFFERENCE. There is no corresponding output for the first data point.")])]),t._v(" "),e("tr",[e("td",[t._v("NON_NEGATIVE_DERIVATIVE")]),t._v(" "),e("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE")]),t._v(" "),e("td",[t._v("DOUBLE")]),t._v(" "),e("td",[t._v("Calculates the absolute value of the rate of change of a data point compared to the previous data point, the result is equals to NON_NEGATIVE_DIFFERENCE / TIME_DIFFERENCE. There is no corresponding output for the first data point.")])])])]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time_difference"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" difference"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" non_negative_difference"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" derivative"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" non_negative_derivative"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("limit")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("offset")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Result:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("+-----------------------------+-------------------+-------------------------------+--------------------------+---------------------------------------+--------------------------+---------------------------------------+\n|                         Time|     root.sg1.d1.s1|time_difference(root.sg1.d1.s1)|difference(root.sg1.d1.s1)|non_negative_difference(root.sg1.d1.s1)|derivative(root.sg1.d1.s1)|non_negative_derivative(root.sg1.d1.s1)|\n+-----------------------------+-------------------+-------------------------------+--------------------------+---------------------------------------+--------------------------+---------------------------------------+\n|2020-12-10T17:11:49.037+08:00|7360723084922759782|                              1|      -8431715764844238876|                    8431715764844238876|    -8.4317157648442388E18|                  8.4317157648442388E18|\n|2020-12-10T17:11:49.038+08:00|4377791063319964531|                              1|      -2982932021602795251|                    2982932021602795251|     -2.982932021602795E18|                   2.982932021602795E18|\n|2020-12-10T17:11:49.039+08:00|7972485567734642915|                              1|       3594694504414678384|                    3594694504414678384|     3.5946945044146785E18|                  3.5946945044146785E18|\n|2020-12-10T17:11:49.040+08:00|2508858212791964081|                              1|      -5463627354942678834|                    5463627354942678834|     -5.463627354942679E18|                   5.463627354942679E18|\n|2020-12-10T17:11:49.041+08:00|2817297431185141819|                              1|        308439218393177738|                     308439218393177738|     3.0843921839317773E17|                  3.0843921839317773E17|\n+-----------------------------+-------------------+-------------------------------+--------------------------+---------------------------------------+--------------------------+---------------------------------------+\nTotal line number = 5\nIt costs 0.014s\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);