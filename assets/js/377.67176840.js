(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{779:function(s,e,n){"use strict";n.r(e);var t=n(19),a=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"node-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-management"}},[s._v("#")]),s._v(" Node Management")]),s._v(" "),e("h2",{attrs:{id:"show-child-paths"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-child-paths"}},[s._v("#")]),s._v(" Show Child Paths")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SHOW CHILD PATHS pathPattern ? limitClause\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Return all child paths of all the paths matching pathPattern.")]),s._v(" "),e("p",[s._v("The default size of result set is 10000000. To query more child paths, please use "),e("code",[s._v("limit")]),s._v(" and "),e("code",[s._v("offset")]),s._v(".")]),s._v(" "),e("p",[s._v("Example：")]),s._v(" "),e("ul",[e("li",[s._v("return the child paths of root.ln：show child paths root.ln")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+------------+\n| child paths|\n+------------+\n|root.ln.wf01|\n|root.ln.wf02|\n+------------+\nTotal line number = 2\nIt costs 0.002s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("blockquote",[e("p",[s._v("get all paths in form of root.xx.xx.xx：show child paths root.xx.xx")])]),s._v(" "),e("h2",{attrs:{id:"show-child-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-child-nodes"}},[s._v("#")]),s._v(" Show Child Nodes")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SHOW CHILD NODES pathPattern ? limitClause\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Return all child nodes of the pathPattern.")]),s._v(" "),e("p",[s._v("The default size of result set is 10000000. To query more child paths, please use "),e("code",[s._v("limit")]),s._v(" and "),e("code",[s._v("offset")]),s._v(".")]),s._v(" "),e("p",[s._v("Example：")]),s._v(" "),e("ul",[e("li",[s._v("return the child nodes of root：show child nodes root")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+------------+\n| child nodes|\n+------------+\n|          ln|\n+------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("return the child nodes of root.ln：show child nodes root.ln")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+------------+\n| child nodes|\n+------------+\n|        wf01|\n|        wf02|\n+------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"count-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#count-nodes"}},[s._v("#")]),s._v(" Count Nodes")]),s._v(" "),e("p",[s._v("IoTDB is able to use "),e("code",[s._v("COUNT NODES <PathPattern> LEVEL=<INTEGER>")]),s._v(" to count the number of nodes at\nthe given level in current Metadata Tree considering a given pattern. IoTDB will find paths that\nmatch the pattern and counts distinct nodes at the specified level among the matched paths.\nThis could be used to query the number of devices with specified measurements. The usage are as\nfollows:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB > COUNT NODES root.** LEVEL=2\nIoTDB > COUNT NODES root.ln.** LEVEL=2\nIoTDB > COUNT NODES root.ln.wf01.** LEVEL=3\nIoTDB > COUNT NODES root.**.temperature LEVEL=3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("As for the above mentioned example and Metadata tree, you can get following results:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----+\n|count|\n+-----+\n|    4|\n+-----+\nTotal line number = 1\nIt costs 0.003s\n\n+-----+\n|count|\n+-----+\n|    2|\n+-----+\nTotal line number = 1\nIt costs 0.002s\n\n+-----+\n|count|\n+-----+\n|    1|\n+-----+\nTotal line number = 1\nIt costs 0.002s\n\n+-----+\n|count|\n+-----+\n|    2|\n+-----+\nTotal line number = 1\nIt costs 0.002s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br")])]),e("blockquote",[e("p",[s._v("Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.")])]),s._v(" "),e("h2",{attrs:{id:"show-devices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-devices"}},[s._v("#")]),s._v(" Show Devices")]),s._v(" "),e("ul",[e("li",[s._v("SHOW DEVICES pathPattern? (WITH STORAGE GROUP)? limitClause? #showDevices")])]),s._v(" "),e("p",[s._v("The default size of result set is 10000000. To query more child paths, please use "),e("code",[s._v("limit")]),s._v(" and "),e("code",[s._v("offset")]),s._v(".")]),s._v(" "),e("p",[s._v("Similar to "),e("code",[s._v("Show Timeseries")]),s._v(", IoTDB also supports two ways of viewing devices:")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("SHOW DEVICES")]),s._v(" statement presents all devices' information, which is equal to "),e("code",[s._v("SHOW DEVICES root.**")]),s._v(".")]),s._v(" "),e("li",[e("code",[s._v("SHOW DEVICES <PathPattern>")]),s._v(" statement specifies the "),e("code",[s._v("PathPattern")]),s._v(" and returns the devices information matching the pathPattern and under the given level.")])]),s._v(" "),e("p",[s._v("SQL statement is as follows:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show devices\nIoTDB> show devices root.ln.**\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("You can get results below:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-------------------+---------+\n|            devices|isAligned|\n+-------------------+---------+\n|  root.ln.wf01.wt01|    false|\n|  root.ln.wf02.wt02|    false|\n|root.sgcc.wf03.wt01|    false|\n|    root.turbine.d1|    false|\n+-------------------+---------+\nTotal line number = 4\nIt costs 0.002s\n\n+-----------------+---------+\n|          devices|isAligned|\n+-----------------+---------+\n|root.ln.wf01.wt01|    false|\n|root.ln.wf02.wt02|    false|\n+-----------------+---------+\nTotal line number = 2\nIt costs 0.001s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[e("code",[s._v("isAligned")]),s._v(" indicates whether the timeseries under the device are aligned.")]),s._v(" "),e("p",[s._v("To view devices' information with storage group, we can use "),e("code",[s._v("SHOW DEVICES WITH STORAGE GROUP")]),s._v(" statement.")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("SHOW DEVICES WITH STORAGE GROUP")]),s._v(" statement presents all devices' information with their storage group.")]),s._v(" "),e("li",[e("code",[s._v("SHOW DEVICES <PathPattern> WITH STORAGE GROUP")]),s._v(" statement specifies the "),e("code",[s._v("PathPattern")]),s._v(" and returns the\ndevices' information under the given level with their storage group information.")])]),s._v(" "),e("p",[s._v("SQL statement is as follows:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show devices with storage group\nIoTDB> show devices root.ln.** with storage group\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("You can get results below:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-------------------+-------------+---------+\n|            devices|storage group|isAligned|\n+-------------------+-------------+---------+\n|  root.ln.wf01.wt01|      root.ln|    false|\n|  root.ln.wf02.wt02|      root.ln|    false|\n|root.sgcc.wf03.wt01|    root.sgcc|    false|\n|    root.turbine.d1| root.turbine|    false|\n+-------------------+-------------+---------+\nTotal line number = 4\nIt costs 0.003s\n\n+-----------------+-------------+---------+\n|          devices|storage group|isAligned|\n+-----------------+-------------+---------+\n|root.ln.wf01.wt01|      root.ln|    false|\n|root.ln.wf02.wt02|      root.ln|    false|\n+-----------------+-------------+---------+\nTotal line number = 2\nIt costs 0.001s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);