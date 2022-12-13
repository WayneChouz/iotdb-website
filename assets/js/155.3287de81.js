(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{557:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"node-name-in-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-name-in-path"}},[s._v("#")]),s._v(" Node Name in Path")]),s._v(" "),t("p",[s._v("Node name is a special identifier, it can also be wildcard "),t("code",[s._v("*")]),s._v(" and "),t("code",[s._v("**")]),s._v(". When creating timeseries, node name can not be wildcard. In query statment, you can use wildcard to match one or more nodes of path.")]),s._v(" "),t("h2",{attrs:{id:"wildcard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wildcard"}},[s._v("#")]),s._v(" Wildcard")]),s._v(" "),t("p",[t("code",[s._v("*")]),s._v(" represents one node. For example, "),t("code",[s._v("root.vehicle.*.sensor1")]),s._v(" represents a 4-node path which is prefixed with "),t("code",[s._v("root.vehicle")]),s._v(" and suffixed with "),t("code",[s._v("sensor1")]),s._v(".")]),s._v(" "),t("p",[t("code",[s._v("**")]),s._v(" represents ("),t("code",[s._v("*")]),s._v(")+, which is one or more nodes of "),t("code",[s._v("*")]),s._v(". For example, "),t("code",[s._v("root.vehicle.device1.**")]),s._v(" represents all paths prefixed by "),t("code",[s._v("root.vehicle.device1")]),s._v(" with nodes num greater than or equal to 4, like "),t("code",[s._v("root.vehicle.device1.*")]),s._v(", "),t("code",[s._v("root.vehicle.device1.*.*")]),s._v(", "),t("code",[s._v("root.vehicle.device1.*.*.*")]),s._v(", etc; "),t("code",[s._v("root.vehicle.**.sensor1")]),s._v(" represents a path which is prefixed with "),t("code",[s._v("root.vehicle")]),s._v(" and suffixed with "),t("code",[s._v("sensor1")]),s._v(" and has at least 4 nodes.")]),s._v(" "),t("p",[s._v("As "),t("code",[s._v("*")]),s._v(" can also be used in expressions of select clause to represent multiplication, below are examples to help you better understand the usage of "),t("code",[s._v("*")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create timeseries root.sg.`a*b`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" timeseries root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("a*b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" datatype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# As described in Identifier part, a*b should be quoted.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "create timeseries root.sg.a*b with datatype=FLOAT,encoding=PLAIN" is wrong. ')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create timeseries root.sg.a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" timeseries root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" datatype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create timeseries root.sg.b")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" timeseries root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" datatype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# query data of root.sg.`a*b`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("a*b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Header of result dataset")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# multiplication of root.sg.a and root.sg.b")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Header of result dataset")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h2",{attrs:{id:"identifier"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#identifier"}},[s._v("#")]),s._v(" Identifier")]),s._v(" "),t("p",[s._v("When node name is not wildcard, it is a identifier, which means the constraints on it is the same as described in Identifier part.")]),s._v(" "),t("ul",[t("li",[s._v("Create timeseries statement:")])]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# Node name contains special characters like ` and .,all nodes of this timeseries are: ["root","sg","www.`baidu.com"]')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" timeseries root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("www.``baidu.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" datatype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Node name is a real number.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" timeseries root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" datatype"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v('After executing above statments, execute "show timeseries"，below is the result：')]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------+-----+-------------+--------+--------+-----------+----+----------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                 timeseries"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("alias"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("dataType"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("encoding"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("compression"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("tags"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("attributes"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------+-----+-------------+--------+--------+-----------+----+----------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("            root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   PLAIN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("www.``baidu.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   PLAIN"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("---------------------------+-----+-------------+--------+--------+-----------+----+----------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("ul",[t("li",[s._v("Insert statment:")])]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Node name contains special characters like . and `")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("www.``baidu.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Node name is a real number.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("Query statement:")])]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Node name contains special characters like . and `")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("www.``baidu.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Node name is a real number.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("111"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("Results:")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# select a from root.sg.`www.``baidu.com`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+---------------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("www.``baidu.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+---------------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1970")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T08:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.001")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+---------------------------+")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# select `111` from root.sg")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+-----------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("111")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+-----------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1970")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T08:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.001")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+-----------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);