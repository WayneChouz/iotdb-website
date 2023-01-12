(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{528:function(s,e,t){"use strict";t.r(e);var a=t(19),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"order-by"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-by"}},[s._v("#")]),s._v(" Order By")]),s._v(" "),e("h2",{attrs:{id:"order-by-in-align-by-time-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-by-in-align-by-time-mode"}},[s._v("#")]),s._v(" order by in ALIGN BY TIME mode")]),s._v(" "),e("p",[s._v("The result set of IoTDB is in ALIGN BY TIME mode by default and "),e("code",[s._v("ORDER BY TIME")]),s._v(" clause can also be used to specify the ordering of timestamp. The SQL statement is:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("执行结果：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+\n|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|\n+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+\n|2017-11-01T00:01:00.000+08:00|                        v2|                    true|                        24.36|                    true|\n|2017-11-01T00:00:00.000+08:00|                        v2|                    true|                        25.96|                    true|\n|1970-01-01T08:00:00.002+08:00|                        v2|                   false|                         null|                    null|\n|1970-01-01T08:00:00.001+08:00|                        v1|                    true|                         null|                    null|\n+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+\nTotal line number = 4\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"order-by-in-align-by-device-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-by-in-align-by-device-mode"}},[s._v("#")]),s._v(" order by in ALIGN BY DEVICE mode")]),s._v(" "),e("p",[s._v("When querying in ALIGN BY DEVICE mode, "),e("code",[s._v("ORDER BY")]),s._v(" clause can be used to specify the ordering of result set.")]),s._v(" "),e("p",[s._v("ALIGN BY DEVICE mode supports four kinds of clauses with two sort keys which are "),e("code",[s._v("Device")]),s._v(" and "),e("code",[s._v("Time")]),s._v(".")]),s._v(" "),e("ol",[e("li",[e("p",[e("code",[s._v("ORDER BY DEVICE")]),s._v(": sort by the alphabetical order of the device name. The devices with the same column names will be clustered in a group view.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("ORDER BY TIME")]),s._v(": sort by the timestamp, the data points from different devices will be shuffled according to the timestamp.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("ORDER BY DEVICE,TIME")]),s._v(": sort by the alphabetical order of the device name. The data points with the same device name will be sorted by timestamp.")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("ORDER BY TIME,DEVICE")]),s._v(": sort by timestamp. The data points with the same time will be sorted by the alphabetical order of the device name.")])])]),s._v(" "),e("blockquote",[e("p",[s._v("To make the result set more legible, when "),e("code",[s._v("ORDER BY")]),s._v(" clause is not used, default settings will be provided.\nThe default ordering clause is "),e("code",[s._v("ORDER BY DEVICE,TIME")]),s._v(" and the default ordering is "),e("code",[s._v("ASC")]),s._v(".")])]),s._v(" "),e("p",[s._v("When "),e("code",[s._v("Device")]),s._v(" is the main sort key, the result set is sorted by device name first, then by timestamp in the group with the same device name, the SQL statement is:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),s._v(" align "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The result shows below:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-----------------+--------+------+-----------+\n|                         Time|           Device|hardware|status|temperature|\n+-----------------------------+-----------------+--------+------+-----------+\n|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|\n|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|\n+-----------------------------+-----------------+--------+------+-----------+\nTotal line number = 6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("When "),e("code",[s._v("Time")]),s._v(" is the main sort key, the result set is sorted by timestamp first, then by device name in data points with the same timestamp. The SQL statement is:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("device "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" align "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The result shows below:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-----------------+--------+------+-----------+\n|                         Time|           Device|hardware|status|temperature|\n+-----------------------------+-----------------+--------+------+-----------+\n|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|\n|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|\n+-----------------------------+-----------------+--------+------+-----------+\nTotal line number = 6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("When "),e("code",[s._v("ORDER BY")]),s._v(" clause is not used, sort in default way, the SQL statement is：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" align "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The result below indicates "),e("code",[s._v("ORDER BY DEVICE ASC,TIME ASC")]),s._v(" is the clause in default situation.\n"),e("code",[s._v("ASC")]),s._v(" can be omitted because it's the default ordering.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-----------------+--------+------+-----------+\n|                         Time|           Device|hardware|status|temperature|\n+-----------------------------+-----------------+--------+------+-----------+\n|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|\n|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|\n|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n+-----------------------------+-----------------+--------+------+-----------+\nTotal line number = 6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("Besides，"),e("code",[s._v("ALIGN BY DEVICE")]),s._v(" and "),e("code",[s._v("ORDER BY")]),s._v(" clauses can be used with aggregate query，the SQL statement is：")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),s._v(" align "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The result shows below:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-----------------+---------------+-------------+------------------+\n|                         Time|           Device|count(hardware)|count(status)|count(temperature)|\n+-----------------------------+-----------------+---------------+-------------+------------------+\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|           null|            1|                 1|\n|2017-11-01T00:02:00.000+08:00|root.ln.wf01.wt01|           null|            0|                 0|\n|2017-11-01T00:03:00.000+08:00|root.ln.wf01.wt01|           null|            0|                 0|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|              1|            1|              null|\n|2017-11-01T00:02:00.000+08:00|root.ln.wf02.wt02|              0|            0|              null|\n|2017-11-01T00:03:00.000+08:00|root.ln.wf02.wt02|              0|            0|              null|\n+-----------------------------+-----------------+---------------+-------------+------------------+\nTotal line number = 6\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);