(window.webpackJsonp=window.webpackJsonp||[]).push([[554],{960:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"comparison-operators-and-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comparison-operators-and-functions"}},[s._v("#")]),s._v(" Comparison Operators and Functions")]),s._v(" "),t("h2",{attrs:{id:"basic-comparison-operators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-comparison-operators"}},[s._v("#")]),s._v(" Basic comparison operators")]),s._v(" "),t("p",[s._v("Supported operators "),t("code",[s._v(">")]),s._v(", "),t("code",[s._v(">=")]),s._v(", "),t("code",[s._v("<")]),s._v(", "),t("code",[s._v("<=")]),s._v(", "),t("code",[s._v("==")]),s._v(", "),t("code",[s._v("!=")]),s._v(" (or  "),t("code",[s._v("<>")]),s._v(" )")]),s._v(" "),t("p",[s._v("Supported input data types: "),t("code",[s._v("INT32")]),s._v(", "),t("code",[s._v("INT64")]),s._v(", "),t("code",[s._v("FLOAT")]),s._v(" and "),t("code",[s._v("DOUBLE")])]),s._v(" "),t("p",[s._v("Note: It will transform all type to "),t("code",[s._v("DOUBLE")]),s._v(" then do computation.")]),s._v(" "),t("p",[s._v("Output data type: "),t("code",[s._v("BOOLEAN")])]),s._v(" "),t("p",[t("strong",[s._v("Example:")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select a, b, a > 10, a <= b, !(a <= b), a > 10 && a > b from root.test;\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n|                         Time|root.test.a|root.test.b|root.test.a > 10|root.test.a <= root.test.b|!root.test.a <= root.test.b|(root.test.a > 10) & (root.test.a > root.test.b)|\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n|1970-01-01T08:00:00.001+08:00|         23|       10.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.002+08:00|         33|       21.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.004+08:00|         13|       15.0|            true|                      true|                      false|                                           false|\n|1970-01-01T08:00:00.005+08:00|         26|        0.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.008+08:00|          1|       22.0|           false|                      true|                      false|                                           false|\n|1970-01-01T08:00:00.010+08:00|         23|       12.0|            true|                     false|                       true|                                            true|\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"between-and-operator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#between-and-operator"}},[s._v("#")]),s._v(" "),t("code",[s._v("BETWEEN ... AND ...")]),s._v(" operator")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("operator")]),s._v(" "),t("th",[s._v("meaning")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("BETWEEN ... AND ...")])]),s._v(" "),t("td",[s._v("within the specified range")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("NOT BETWEEN ... AND ...")])]),s._v(" "),t("td",[s._v("Not within the specified range")])])])]),s._v(" "),t("p",[t("strong",[s._v("Example:")]),s._v(" Select data within or outside the interval [36.5,40]:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"fuzzy-matching-operator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fuzzy-matching-operator"}},[s._v("#")]),s._v(" Fuzzy matching operator")]),s._v(" "),t("p",[s._v("For TEXT type data, support fuzzy matching of data using "),t("code",[s._v("Like")]),s._v(" and "),t("code",[s._v("Regexp")]),s._v(" operators.")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("operator")]),s._v(" "),t("th",[s._v("meaning")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("LIKE")])]),s._v(" "),t("td",[s._v("matches simple patterns")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("NOT LIKE")])]),s._v(" "),t("td",[s._v("cannot match simple pattern")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("REGEXP")])]),s._v(" "),t("td",[s._v("Match regular expression")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("NOT REGEXP")])]),s._v(" "),t("td",[s._v("Cannot match regular expression")])])])]),s._v(" "),t("p",[s._v("Input data type: "),t("code",[s._v("TEXT")])]),s._v(" "),t("p",[s._v("Return type: "),t("code",[s._v("BOOLEAN")])]),s._v(" "),t("h3",{attrs:{id:"use-like-for-fuzzy-matching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-like-for-fuzzy-matching"}},[s._v("#")]),s._v(" Use "),t("code",[s._v("Like")]),s._v(" for fuzzy matching")]),s._v(" "),t("p",[t("strong",[s._v("Matching rules:")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("%")]),s._v(" means any 0 or more characters.")]),s._v(" "),t("li",[t("code",[s._v("_")]),s._v(" means any single character.")])]),s._v(" "),t("p",[t("strong",[s._v("Example 1:")]),s._v(" Query the data under "),t("code",[s._v("root.sg.d1")]),s._v(" that contains "),t("code",[s._v("'cc'")]),s._v(" in "),t("code",[s._v("value")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from root.sg.d1 where value like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%cc%'")]),s._v("\n+--------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg.d1.value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:00.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" aabbccdd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:01.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------+\nTotal line number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nIt costs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("Example 2:")]),s._v(" Query the data under "),t("code",[s._v("root.sg.d1")]),s._v(" with "),t("code",[s._v("'b'")]),s._v(" in the middle of "),t("code",[s._v("value")]),s._v(" and any single character before and after.")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from root.sg.device where value like "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_b_'")]),s._v("\n+--------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg.d1.value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:02.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("abc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------+\nTotal line number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nIt costs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"use-regexp-for-fuzzy-matching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-regexp-for-fuzzy-matching"}},[s._v("#")]),s._v(" Use "),t("code",[s._v("Regexp")]),s._v(" for fuzzy matching")]),s._v(" "),t("p",[s._v("The filter condition that needs to be passed in is "),t("strong",[s._v("Java standard library style regular expression")]),s._v(".")]),s._v(" "),t("p",[t("strong",[s._v("Common regular matching examples:")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("All characters with a length of 3-20: ^.{3,20}$\nUppercase English characters: ^[A-Z]+$\nNumbers and English characters: ^[A-Za-z0-9]+$\nStarting with a: ^a.*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("strong",[s._v("Example 1:")]),s._v(" Query the string of 26 English characters for value under root.sg.d1.")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from root.sg.d1 where value regexp "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^[A-Za-z]+$'")]),s._v("\n+--------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg.d1.value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:00.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" aabbccdd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:01.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------+\nTotal line number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nIt costs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("Example 2:")]),s._v(" Query root.sg.d1 where the value is a string consisting of 26 lowercase English characters and the time is greater than 100.")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from root.sg.d1 where value regexp "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^[a-z]+$'")]),s._v(" and "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n+--------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg.d1.value"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:00.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" aabbccdd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),s._v("-11-01T00:00:01.000+08:00"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------------+----------------+\nTotal line number "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nIt costs "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(".002s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[t("strong",[s._v("Example 3:")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("regexp")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[0-2]'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("operation result")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------+------- ------------------+--------------------------+\n| Time|root.test.b|root.test.b LIKE '^1.*?$'|root.test.b REGEXP '[0-2]'|\n+-----------------------------+-----------+------- ------------------+--------------------------+\n|1970-01-01T08:00:00.001+08:00| 111test111| true| true|\n|1970-01-01T08:00:00.003+08:00| 333test333| false| false|\n+-----------------------------+-----------+------- ------------------+--------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"is-null-operator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#is-null-operator"}},[s._v("#")]),s._v(" "),t("code",[s._v("IS NULL")]),s._v(" operator")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("operator")]),s._v(" "),t("th",[s._v("meaning")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("IS NULL")])]),s._v(" "),t("td",[s._v("is a null value")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("IS NOT NULL")])]),s._v(" "),t("td",[s._v("is not a null value")])])])]),s._v(" "),t("p",[t("strong",[s._v("Example 1:")]),s._v(" Select data with empty values:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("Example 2:")]),s._v(" Select data with non-null values:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"in-operator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#in-operator"}},[s._v("#")]),s._v(" "),t("code",[s._v("IN")]),s._v(" operator")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("operator")]),s._v(" "),t("th",[s._v("meaning")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[t("code",[s._v("IN")]),s._v(" / "),t("code",[s._v("CONTAINS")])]),s._v(" "),t("td",[s._v("are the values ​​in the specified list")])]),s._v(" "),t("tr",[t("td",[t("code",[s._v("NOT IN")]),s._v(" / "),t("code",[s._v("NOT CONTAINS")])]),s._v(" "),t("td",[s._v("not a value in the specified list")])])])]),s._v(" "),t("p",[s._v("Input data type: "),t("code",[s._v("All Types")])]),s._v(" "),t("p",[s._v("return type "),t("code",[s._v("BOOLEAN")])]),s._v(" "),t("p",[s._v("**Note: Please ensure that the values ​​in the collection can be converted to the type of the input data. **")]),s._v(" "),t("blockquote",[t("p",[s._v("For example:")]),s._v(" "),t("p",[t("code",[s._v("s1 in (1, 2, 3, 'test')")]),s._v(", the data type of "),t("code",[s._v("s1")]),s._v(" is "),t("code",[s._v("INT32")])]),s._v(" "),t("p",[s._v("We will throw an exception because "),t("code",[s._v("'test'")]),s._v(" cannot be converted to type "),t("code",[s._v("INT32")])])]),s._v(" "),t("p",[t("strong",[s._v("Example 1:")]),s._v(" Select data with values ​​within a certain range:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'300'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'400'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'500'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("Example 2:")]),s._v(" Select data with values ​​outside a certain range:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'300'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'400'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'500'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("Example 3:")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Output 2:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------+------- -------------+\n| Time|root.test.a|root.test.a IN (1,2)|\n+-----------------------------+-----------+------- -------------+\n|1970-01-01T08:00:00.001+08:00| 1| true|\n|1970-01-01T08:00:00.003+08:00| 3| false|\n+-----------------------------+-----------+------- -------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"condition-functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#condition-functions"}},[s._v("#")]),s._v(" Condition Functions")]),s._v(" "),t("p",[s._v("Condition functions are used to check whether timeseries data points satisfy some specific condition.")]),s._v(" "),t("p",[s._v("They return BOOLEANs.")]),s._v(" "),t("p",[s._v("Currently, IoTDB supports the following condition functions:")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Function Name")]),s._v(" "),t("th",[s._v("Allowed Input Series Data Types")]),s._v(" "),t("th",[s._v("Required Attributes")]),s._v(" "),t("th",[s._v("Output Series Data Type")]),s._v(" "),t("th",[s._v("Series Data Type  Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ON_OFF")]),s._v(" "),t("td",[s._v("INT32 / INT64 / FLOAT / DOUBLE")]),s._v(" "),t("td",[t("code",[s._v("threshold")]),s._v(": a double type variate")]),s._v(" "),t("td",[s._v("BOOLEAN")]),s._v(" "),t("td",[s._v("Return "),t("code",[s._v("ts_value >= threshold")]),s._v(".")])]),s._v(" "),t("tr",[t("td",[s._v("IN_RANGR")]),s._v(" "),t("td",[s._v("INT32 / INT64 / FLOAT / DOUBLE")]),s._v(" "),t("td",[t("code",[s._v("lower")]),s._v(": DOUBLE type"),t("br"),t("code",[s._v("upper")]),s._v(": DOUBLE type")]),s._v(" "),t("td",[s._v("BOOLEAN")]),s._v(" "),t("td",[s._v("Return "),t("code",[s._v("ts_value >= lower && value <= upper")]),s._v(".")])])])]),s._v(" "),t("p",[s._v("Example Data:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select ts from root.test;\n+-----------------------------+------------+\n|                         Time|root.test.ts|\n+-----------------------------+------------+\n|1970-01-01T08:00:00.001+08:00|           1|\n|1970-01-01T08:00:00.002+08:00|           2|\n|1970-01-01T08:00:00.003+08:00|           3|\n|1970-01-01T08:00:00.004+08:00|           4|\n+-----------------------------+------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h5",{attrs:{id:"test-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-1"}},[s._v("#")]),s._v(" Test 1")]),s._v(" "),t("p",[s._v("SQL:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" ts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" on_off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'threshold'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select ts, on_off(ts, 'threshold'='2') from root.test;\n+-----------------------------+------------+-------------------------------------+\n|                         Time|root.test.ts|on_off(root.test.ts, \"threshold\"=\"2\")|\n+-----------------------------+------------+-------------------------------------+\n|1970-01-01T08:00:00.001+08:00|           1|                                false|\n|1970-01-01T08:00:00.002+08:00|           2|                                 true|\n|1970-01-01T08:00:00.003+08:00|           3|                                 true|\n|1970-01-01T08:00:00.004+08:00|           4|                                 true|\n+-----------------------------+------------+-------------------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h5",{attrs:{id:"test-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#test-2"}},[s._v("#")]),s._v(" Test 2")]),s._v(" "),t("p",[s._v("Sql:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" ts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" in_range"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lower'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'upper'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Output:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select ts, in_range(ts,'lower'='2', 'upper'='3.1') from root.test;\n+-----------------------------+------------+--------------------------------------------------+\n|                         Time|root.test.ts|in_range(root.test.ts, \"lower\"=\"2\", \"upper\"=\"3.1\")|\n+-----------------------------+------------+--------------------------------------------------+\n|1970-01-01T08:00:00.001+08:00|           1|                                             false|\n|1970-01-01T08:00:00.002+08:00|           2|                                              true|\n|1970-01-01T08:00:00.003+08:00|           3|                                              true|\n|1970-01-01T08:00:00.004+08:00|           4|                                             false|\n+-----------------------------+------------+--------------------------------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);