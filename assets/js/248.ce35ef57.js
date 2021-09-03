(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{814:function(t,e,s){"use strict";s.r(e);var a=s(70),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"maintenance-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maintenance-command"}},[t._v("#")]),t._v(" Maintenance Command")]),t._v(" "),s("h3",{attrs:{id:"flush"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flush"}},[t._v("#")]),t._v(" FLUSH")]),t._v(" "),s("p",[t._v("Persist all the data points in the memory table of the storage group to the disk, and seal the data file.")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" FLUSH \nIoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" FLUSH root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln\nIoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" FLUSH root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" MERGE")]),t._v(" "),s("p",[t._v("Merge sequence and unsequence data. Currently IoTDB supports the following two types of SQL to manually trigger the merge process of data files:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("MERGE")]),t._v(" Only rewrite overlapped Chunks, the merge speed is quick, while there will be redundant data on the disk eventually.")]),t._v(" "),s("li",[s("code",[t._v("FULL MERGE")]),t._v(" Rewrite all data in overlapped files, the merge speed is slow, but there will be no redundant data on the disk eventually.")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MERGE")]),t._v("\nIoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("MERGE")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"clear-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clear-cache"}},[t._v("#")]),t._v(" CLEAR CACHE")]),t._v(" "),s("p",[t._v("Clear the cache of chunk, chunk metadata and timeseries metadata to release the memory footprint.")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" CLEAR CACHE\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"set-ststem-to-readonly-writable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-ststem-to-readonly-writable"}},[t._v("#")]),t._v(" SET STSTEM TO READONLY / WRITABLE")]),t._v(" "),s("p",[t._v("Manually set IoTDB system to read-only or writable mode.")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" SYSTEM "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" READONLY\nIoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" SYSTEM "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TO")]),t._v(" WRITABLE\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"schema-snapshot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema-snapshot"}},[t._v("#")]),t._v(" SCHEMA SNAPSHOT")]),t._v(" "),s("p",[t._v("To speed up restarting of IoTDB, users can create snapshot of schema and avoid recovering schema from mlog file.")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SNAPSHOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FOR")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SCHEMA")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"kill-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kill-query"}},[t._v("#")]),t._v(" Kill Query")]),t._v(" "),s("p",[t._v("When using IoTDB, you may encounter the following situations: you have entered a query statement, but can not get the result for a long time, as this query contains too much data or some other reasons, and have to wait until the query ends.\nSince version 0.12, IoTDB has provided two solutions for queries with long execution time: query timeout and query abort.")]),t._v(" "),s("h4",{attrs:{id:"query-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-timeout"}},[t._v("#")]),t._v(" Query timeout")]),t._v(" "),s("p",[t._v("For queries that take too long to execute, IoTDB will forcibly interrupt the query and throw a timeout exception, as shown in the figure:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nMsg: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("701")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Current")]),t._v(" query "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("out")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" please "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("check")]),t._v(" your statement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("or")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("modify")]),t._v(" timeout parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("The default timeout of the system is 60000 ms，which can be customized in the configuration file through the "),s("code",[t._v("query_timeout_threshold")]),t._v(" parameter.")]),t._v(" "),s("p",[t._v("If you use JDBC or Session, we also support setting a timeout for a single query（Unit: ms）：")]),t._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IoTDBStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" statement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" timeoutInMS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nsession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("executeQueryStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("If the timeout parameter is not configured or with value 0, the default timeout time will be used.")]),t._v(" "),s("h4",{attrs:{id:"query-abort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-abort"}},[t._v("#")]),t._v(" Query abort")]),t._v(" "),s("p",[t._v("In addition to waiting for the query to time out passively, IoTDB also supports stopping the query actively:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KILL")]),t._v(" QUERY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("queryId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("You can abort the specified query by specifying "),s("code",[t._v("queryId")]),t._v(". If "),s("code",[t._v("queryId")]),t._v(" is not specified, all executing queries will be killed.")]),t._v(" "),s("p",[t._v("To get the executing "),s("code",[t._v("queryId")]),t._v("，you can use the "),s("code",[t._v("show query processlist")]),t._v(" command，which will show the list of all executing queries，with the following result set：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Time")]),t._v(" "),s("th",[t._v("queryId")]),t._v(" "),s("th",[t._v("statement")])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("p",[t._v("The maximum display length of statement is 64 characters. For statements with more than 64 characters, the intercepted part will be displayed.")])])}),[],!1,null,null,null);e.default=r.exports}}]);