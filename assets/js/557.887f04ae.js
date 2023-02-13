(window.webpackJsonp=window.webpackJsonp||[]).push([[557],{963:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"data-type-conversion-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-type-conversion-function"}},[s._v("#")]),s._v(" Data Type Conversion Function")]),s._v(" "),t("p",[s._v("The IoTDB currently supports 6 data types, including INT32, INT64 ,FLOAT, DOUBLE, BOOLEAN, TEXT. When we query or evaluate data, we may need to convert data types, such as TEXT to INT32, or improve the accuracy of the data, such as FLOAT to DOUBLE. Therefore, IoTDB supports the use of cast functions to convert data types.")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Function Name")]),s._v(" "),t("th",[s._v("Required Attributes")]),s._v(" "),t("th",[s._v("Output Series Data Type")]),s._v(" "),t("th",[s._v("Series Data Type  Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("CAST")]),s._v(" "),t("td",[t("code",[s._v("type")]),s._v(": the type of the output data point, it can only be INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT")]),s._v(" "),t("td",[s._v("Determined by the required attribute  "),t("code",[s._v("type")])]),s._v(" "),t("td",[s._v("Converts data to the type specified by the "),t("code",[s._v("type")]),s._v(" argument.")])])])]),s._v(" "),t("h4",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[s._v("#")]),s._v(" Notes")]),s._v(" "),t("ol",[t("li",[s._v("The value of type BOOLEAN is "),t("code",[s._v("true")]),s._v(', when data is converted to BOOLEAN if INT32 and INT64 are not 0, FLOAT and DOUBLE are not 0.0, TEXT is not empty string or "false", otherwise '),t("code",[s._v("false")]),s._v(".")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> show timeseries root.sg.d1.*;\n+-------------+-----+-------------+--------+--------+-----------+----+----------+\n|   timeseries|alias|     database|dataType|encoding|compression|tags|attributes|\n+-------------+-----+-------------+--------+--------+-----------+----+----------+\n|root.sg.d1.s3| null|      root.sg|   FLOAT|     RLE|     SNAPPY|null|      null|\n|root.sg.d1.s4| null|      root.sg|  DOUBLE|     RLE|     SNAPPY|null|      null|\n|root.sg.d1.s5| null|      root.sg|    TEXT|   PLAIN|     SNAPPY|null|      null|\n|root.sg.d1.s6| null|      root.sg| BOOLEAN|     RLE|     SNAPPY|null|      null|\n|root.sg.d1.s1| null|      root.sg|   INT32|     RLE|     SNAPPY|null|      null|\n|root.sg.d1.s2| null|      root.sg|   INT64|     RLE|     SNAPPY|null|      null|\n+-------------+-----+-------------+--------+--------+-----------+----+----------+\nTotal line number = 6\nIt costs 0.006s\nIoTDB> select * from root.sg.d1;\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+\n|                         Time|root.sg.d1.s3|root.sg.d1.s4|root.sg.d1.s5|root.sg.d1.s6|root.sg.d1.s1|root.sg.d1.s2|\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+\n|1970-01-01T08:00:00.001+08:00|          1.1|          1.1|         test|        false|            1|            1|\n|1970-01-01T08:00:00.002+08:00|         -2.2|         -2.2|        false|         true|           -2|           -2|\n|1970-01-01T08:00:00.003+08:00|          0.0|          0.0|         true|         true|            0|            0|\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+\nTotal line number = 3\nIt costs 0.009s\nIoTDB> select cast(s1, 'type'='BOOLEAN'), cast(s2, 'type'='BOOLEAN'), cast(s3, 'type'='BOOLEAN'), cast(s4, 'type'='BOOLEAN'), cast(s5, 'type'='BOOLEAN') from root.sg.d1;\n+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+\n|                         Time|cast(root.sg.d1.s1, \"type\"=\"BOOLEAN\")|cast(root.sg.d1.s2, \"type\"=\"BOOLEAN\")|cast(root.sg.d1.s3, \"type\"=\"BOOLEAN\")|cast(root.sg.d1.s4, \"type\"=\"BOOLEAN\")|cast(root.sg.d1.s5, \"type\"=\"BOOLEAN\")|\n+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+\n|1970-01-01T08:00:00.001+08:00|                                 true|                                 true|                                 true|                                 true|                                 true|\n|1970-01-01T08:00:00.002+08:00|                                 true|                                 true|                                 true|                                 true|                                false|\n|1970-01-01T08:00:00.003+08:00|                                false|                                false|                                false|                                false|                                 true|\n+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+\nTotal line number = 3\nIt costs 0.012s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v('The value of type INT32, INT64, FLOAT, DOUBLE are 1 or 1.0 and TEXT is "true", when BOOLEAN data is true, otherwise 0, 0.0 or "false".')])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select cast(s6, 'type'='INT32'), cast(s6, 'type'='INT64'), cast(s6, 'type'='FLOAT'), cast(s6, 'type'='DOUBLE'), cast(s6, 'type'='TEXT') from root.sg.d1;\n+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+\n|                         Time|cast(root.sg.d1.s6, \"type\"=\"INT32\")|cast(root.sg.d1.s6, \"type\"=\"INT64\")|cast(root.sg.d1.s6, \"type\"=\"FLOAT\")|cast(root.sg.d1.s6, \"type\"=\"DOUBLE\")|cast(root.sg.d1.s6, \"type\"=\"TEXT\")|\n+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+\n|1970-01-01T08:00:00.001+08:00|                                  0|                                  0|                                0.0|                                 0.0|                             false|\n|1970-01-01T08:00:00.002+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|\n|1970-01-01T08:00:00.003+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|\n+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+\nTotal line number = 3\nIt costs 0.016s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("When TEXT is converted to INT32, INT64, or FLOAT, the TEXT is first converted to DOUBLE and then to the corresponding type, which may cause loss of precision. It will skip directly if the data can not be converted.")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select cast(s5, 'type'='INT32'), cast(s5, 'type'='INT64'), cast(s5, 'type'='FLOAT') from root.sg.d1;\n+----+-----------------------------------+-----------------------------------+-----------------------------------+\n|Time|cast(root.sg.d1.s5, \"type\"=\"INT32\")|cast(root.sg.d1.s5, \"type\"=\"INT64\")|cast(root.sg.d1.s5, \"type\"=\"FLOAT\")|\n+----+-----------------------------------+-----------------------------------+-----------------------------------+\n+----+-----------------------------------+-----------------------------------+-----------------------------------+\nEmpty set.\nIt costs 0.005s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h4",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),t("p",[s._v("Example data:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select text from root.test;\n+-----------------------------+--------------+\n|                         Time|root.test.text|\n+-----------------------------+--------------+\n|1970-01-01T08:00:00.001+08:00|           1.1|\n|1970-01-01T08:00:00.002+08:00|             1|\n|1970-01-01T08:00:00.003+08:00|   hello world|\n|1970-01-01T08:00:00.004+08:00|         false|\n+-----------------------------+--------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("SQL:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BOOLEAN'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'INT32'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'INT64'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'FLOAT'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DOUBLE'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Result:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+\n|                         Time|cast(root.test.text, "type"="BOOLEAN")|cast(root.test.text, "type"="INT32")|cast(root.test.text, "type"="INT64")|cast(root.test.text, "type"="FLOAT")|cast(root.test.text, "type"="DOUBLE")|\n+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+\n|1970-01-01T08:00:00.001+08:00|                                  true|                                   1|                                   1|                                 1.1|                                  1.1|\n|1970-01-01T08:00:00.002+08:00|                                  true|                                   1|                                   1|                                 1.0|                                  1.0|\n|1970-01-01T08:00:00.003+08:00|                                  true|                                null|                                null|                                null|                                 null|\n|1970-01-01T08:00:00.004+08:00|                                 false|                                null|                                null|                                null|                                 null|\n+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+\nTotal line number = 4\nIt costs 0.078s\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);