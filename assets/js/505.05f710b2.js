(window.webpackJsonp=window.webpackJsonp||[]).push([[505],{1421:function(e,t,s){"use strict";s.r(t);var n=s(19),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"time-zone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time-zone"}},[e._v("#")]),e._v(" Time zone")]),e._v(" "),t("p",[e._v("When a client connects to the IoTDB server, it can specify the time zone to be used for this connection. If not specified, the default time zone is the one of the client.")]),e._v(" "),t("p",[e._v("The time zone can be set in both JDBC and session native interface connections. The usage is as follows:")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("JDBC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("IoTDBConnection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("setTimeZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"+08:00"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Session")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("setTimeZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"+08:00"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("In the CLI command line tool, the way to manually set the time zone through command is as follows:")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("SET")]),e._v(" time_zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("08")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("00")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The way to view the time zone used by the current connection is as follows:")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token constant"}},[e._v("JDBC")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("IoTDBConnection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getTimeZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Session")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getTimeZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("In CLI:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" time_zone\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"time-zone-usage-scenarios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time-zone-usage-scenarios"}},[e._v("#")]),e._v(" Time zone usage scenarios")]),e._v(" "),t("p",[e._v("The IoTDB server only stores and processes time stamps, and the time zone is only used to interact with clients. The specific scenarios are as follows:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Convert the time format string sent from the client to the corresponding time stamp.")]),e._v(" "),t("p",[e._v("For example，execute "),t("code",[e._v("insert into root.sg.d1(timestamp, s1) values(2021-07-01T08:00:00.000, 3.14)")])]),e._v(" "),t("p",[e._v("Then "),t("code",[e._v("2021-07-01T08:00:00.000")]),e._v(" will be converted to the corresponding timestamp value according to the time zone of the client. If it's in GMT+08:00,  the result will be "),t("code",[e._v("1625097600000")]),e._v(" ，which is equal to the timestamp value of  "),t("code",[e._v("2021-07-01T00:00:00.000")]),e._v(" in GMT+00:00。")]),e._v(" "),t("blockquote",[t("p",[e._v("Note: At the same time, the dates of different time zones are different, but the timestamps are the same.")])])]),e._v(" "),t("li",[t("p",[e._v("Convert the timestamp in the result returned to the client into a time format string.")]),e._v(" "),t("p",[e._v("Take the above situation as an example，execute "),t("code",[e._v("select * from root.sg.d1")]),e._v("，the server will return the time value pair:  "),t("code",[e._v("(1625097600000, 3.14)")]),e._v(". If CLI tool is used，then "),t("code",[e._v("1625097600000")]),e._v(" will be converted into time format string according to time zone, as shown in the figure below：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------------------------+-------------+\n|                         Time|root.sg.d1.s1|\n+-----------------------------+-------------+\n|2021-07-01T08:00:00.000+08:00|         3.14|\n+-----------------------------+-------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("If the query is executed on the client in GMT:+00:00, the result will be as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-----------------------------+-------------+\n|                         Time|root.sg.d1.s1|\n+-----------------------------+-------------+\n|2021-07-01T00:00:00.000+00:00|         3.14|\n+-----------------------------+-------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("Note that the timestamps returned are the same, but the dates shown in different time zones are different.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);