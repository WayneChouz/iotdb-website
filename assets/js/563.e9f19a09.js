(window.webpackJsonp=window.webpackJsonp||[]).push([[563],{969:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"lambda-expression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lambda-expression"}},[s._v("#")]),s._v(" Lambda Expression")]),s._v(" "),t("h2",{attrs:{id:"jexl-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jexl-function"}},[s._v("#")]),s._v(" JEXL Function")]),s._v(" "),t("p",[s._v("Java Expression Language (JEXL) is an expression language engine. We use JEXL to extend UDFs, which are implemented on the command line with simple lambda expressions. See the link for "),t("a",{attrs:{href:"https://commons.apache.org/proper/commons-jexl/apidocs/org/apache/commons/jexl3/package-summary.html#customization",target:"_blank",rel:"noopener noreferrer"}},[s._v("operators supported in jexl lambda expressions"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Function Name")]),s._v(" "),t("th",[s._v("Allowed Input Series Data Types")]),s._v(" "),t("th",[s._v("Required Attributes")]),s._v(" "),t("th",[s._v("Output Series Data Type")]),s._v(" "),t("th",[s._v("Series Data Type  Description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("JEXL")]),s._v(" "),t("td",[s._v("INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN")]),s._v(" "),t("td",[t("code",[s._v("expr")]),s._v(" is a lambda expression that supports standard one or multi arguments in the form "),t("code",[s._v("x -> {...}")]),s._v(" or "),t("code",[s._v("(x, y, z) -> {...}")]),s._v(", e.g. "),t("code",[s._v("x -> {x * 2}")]),s._v(", "),t("code",[s._v("(x, y, z) -> {x + y * z}")])]),s._v(" "),t("td",[s._v("INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN")]),s._v(" "),t("td",[s._v("Returns the input time series transformed by a lambda expression")])])])]),s._v(" "),t("h4",{attrs:{id:"demonstrate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demonstrate"}},[s._v("#")]),s._v(" Demonstrate")]),s._v(" "),t("p",[s._v("Example data: "),t("code",[s._v("root.ln.wf01.wt01.temperature")]),s._v(", "),t("code",[s._v("root.ln.wf01.wt01.st")]),s._v(", "),t("code",[s._v("root.ln.wf01.wt01.str")]),s._v(" a total of "),t("code",[s._v("11")]),s._v(" data.")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select * from root.ln.wf01.wt01;\n+-----------------------------+---------------------+--------------------+-----------------------------+\n|                         Time|root.ln.wf01.wt01.str|root.ln.wf01.wt01.st|root.ln.wf01.wt01.temperature|\n+-----------------------------+---------------------+--------------------+-----------------------------+\n|1970-01-01T08:00:00.000+08:00|                  str|                10.0|                          0.0|\n|1970-01-01T08:00:00.001+08:00|                  str|                20.0|                          1.0|\n|1970-01-01T08:00:00.002+08:00|                  str|                30.0|                          2.0|\n|1970-01-01T08:00:00.003+08:00|                  str|                40.0|                          3.0|\n|1970-01-01T08:00:00.004+08:00|                  str|                50.0|                          4.0|\n|1970-01-01T08:00:00.005+08:00|                  str|                60.0|                          5.0|\n|1970-01-01T08:00:00.006+08:00|                  str|                70.0|                          6.0|\n|1970-01-01T08:00:00.007+08:00|                  str|                80.0|                          7.0|\n|1970-01-01T08:00:00.008+08:00|                  str|                90.0|                          8.0|\n|1970-01-01T08:00:00.009+08:00|                  str|               100.0|                          9.0|\n|1970-01-01T08:00:00.010+08:00|                  str|               110.0|                         10.0|\n+-----------------------------+---------------------+--------------------+-----------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("Sql:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" jexl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'expr'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x -> {x + x}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" jexl1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" jexl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'expr'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x -> {x * 3}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" jexl2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" jexl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'expr'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x -> {x * x}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" jexl3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" jexl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'expr'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x -> {multiply(x, 100)}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" jexl4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" jexl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" st"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'expr'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(x, y) -> {x + y}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" jexl5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" jexl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" st"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'expr'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'(x, y, z) -> {x + y + z}'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" jexl6 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Result:")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----+-----+-----+------+-----+--------+\n|                         Time|jexl1|jexl2|jexl3| jexl4|jexl5|   jexl6|\n+-----------------------------+-----+-----+-----+------+-----+--------+\n|1970-01-01T08:00:00.000+08:00|  0.0|  0.0|  0.0|   0.0| 10.0| 10.0str|\n|1970-01-01T08:00:00.001+08:00|  2.0|  3.0|  1.0| 100.0| 21.0| 21.0str|\n|1970-01-01T08:00:00.002+08:00|  4.0|  6.0|  4.0| 200.0| 32.0| 32.0str|\n|1970-01-01T08:00:00.003+08:00|  6.0|  9.0|  9.0| 300.0| 43.0| 43.0str|\n|1970-01-01T08:00:00.004+08:00|  8.0| 12.0| 16.0| 400.0| 54.0| 54.0str|\n|1970-01-01T08:00:00.005+08:00| 10.0| 15.0| 25.0| 500.0| 65.0| 65.0str|\n|1970-01-01T08:00:00.006+08:00| 12.0| 18.0| 36.0| 600.0| 76.0| 76.0str|\n|1970-01-01T08:00:00.007+08:00| 14.0| 21.0| 49.0| 700.0| 87.0| 87.0str|\n|1970-01-01T08:00:00.008+08:00| 16.0| 24.0| 64.0| 800.0| 98.0| 98.0str|\n|1970-01-01T08:00:00.009+08:00| 18.0| 27.0| 81.0| 900.0|109.0|109.0str|\n|1970-01-01T08:00:00.010+08:00| 20.0| 30.0|100.0|1000.0|120.0|120.0str|\n+-----------------------------+-----+-----+-----+------+-----+--------+\nTotal line number = 11\nIt costs 0.118s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);