(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{809:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"syntax-conventions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax-conventions"}},[s._v("#")]),s._v(" Syntax Conventions")]),s._v(" "),t("h2",{attrs:{id:"literal-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#literal-values"}},[s._v("#")]),s._v(" Literal Values")]),s._v(" "),t("p",[s._v("This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL.")]),s._v(" "),t("h3",{attrs:{id:"string-literals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string-literals"}},[s._v("#")]),s._v(" String Literals")]),s._v(" "),t("p",[s._v("A string is a sequence of characters, enclosed within either single quote ("),t("code",[s._v("'")]),s._v(") or double quote ("),t("code",[s._v('"')]),s._v(") characters. Examples:")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a string'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"another string"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("Usages of string literals:")]),s._v(" "),t("ul",[t("li",[s._v("Values of  "),t("code",[s._v("TEXT")]),s._v(" type data in "),t("code",[s._v("INSERT")]),s._v(" or "),t("code",[s._v("SELECT")]),s._v(" statements")]),s._v(" "),t("li",[s._v("Full Java class names in UDF and trigger management statements")]),s._v(" "),t("li",[s._v("Attribute fields (including attribute keys and attribute values) in UDF / trigger execution or management statements")]),s._v(" "),t("li",[s._v("File paths in "),t("code",[s._v("LOAD")]),s._v(" / "),t("code",[s._v("REMOVE")]),s._v(" / "),t("code",[s._v("SETTLE")]),s._v(" statements")]),s._v(" "),t("li",[s._v("Password fields in user management statements")])]),s._v(" "),t("p",[s._v("There are several ways to include quote characters within a string:")]),s._v(" "),t("ul",[t("li",[s._v("Precede the quote character by an escape character (\\).")]),s._v(" "),t("li",[t("code",[s._v("'")]),s._v(" inside a string quoted with "),t("code",[s._v('"')]),s._v(" needs no special treatment and need not be doubled or escaped. In the same way, "),t("code",[s._v('"')]),s._v(" inside a string quoted with "),t("code",[s._v("'")]),s._v(" needs no special treatment.")])]),s._v(" "),t("p",[s._v("The following examples demonstrate how quoting and escaping work:")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"string\"'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "string"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'""string""\'')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ""string""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'str\\'ing'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// str'ing")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\'string'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"'string'\"")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'string'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"''string''\"")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ''string''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"str\\"ing"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// str"ing')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\"string"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "string')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"numeric-literals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numeric-literals"}},[s._v("#")]),s._v(" Numeric Literals")]),s._v(" "),t("p",[s._v("Number literals include integer (exact-value) literals and floating-point (approximate-value) literals.")]),s._v(" "),t("p",[s._v("Integers are represented as a sequence of digits. Numbers may be preceded by "),t("code",[s._v("-")]),s._v(" or "),t("code",[s._v("+")]),s._v(" to indicate a negative or positive value, respectively. Examples: "),t("code",[s._v("1")]),s._v(", "),t("code",[s._v("-1")]),s._v(".")]),s._v(" "),t("p",[s._v("Numbers with fractional part or represented in scientific notation with a mantissa and exponent are approximate-value numbers. Examples: "),t("code",[s._v(".1")]),s._v(", "),t("code",[s._v("3.14")]),s._v(", "),t("code",[s._v("-2.23")]),s._v(", "),t("code",[s._v("+1.70")]),s._v(", "),t("code",[s._v("1.2E3")]),s._v(", "),t("code",[s._v("1.2E-3")]),s._v(", "),t("code",[s._v("-1.2E3")]),s._v(", "),t("code",[s._v("-1.2E-3")]),s._v(".")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("INT32")]),s._v(" and "),t("code",[s._v("INT64")]),s._v(" data types are integer types and calculations are exact.")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("FLOAT")]),s._v(" and "),t("code",[s._v("DOUBLE")]),s._v(" data types are floating-point types and calculations are approximate.")]),s._v(" "),t("p",[s._v("An integer may be used in floating-point context; it is interpreted as the equivalent floating-point number.")]),s._v(" "),t("h3",{attrs:{id:"timestamp-literals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timestamp-literals"}},[s._v("#")]),s._v(" Timestamp Literals")]),s._v(" "),t("p",[s._v("The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps in IoTDB. For information about timestamp support in IoTDB, see "),t("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Data-Concept/Data-Type.html"}},[s._v("Data Type Doc")]),s._v(".")],1),s._v(" "),t("p",[s._v("Specially, "),t("code",[s._v("NOW()")]),s._v(" represents a constant timestamp that indicates the system time at which the statement began to execute.")]),s._v(" "),t("h3",{attrs:{id:"boolean-literals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boolean-literals"}},[s._v("#")]),s._v(" Boolean Literals")]),s._v(" "),t("p",[s._v("The constants "),t("code",[s._v("TRUE")]),s._v(" and "),t("code",[s._v("FALSE")]),s._v(" evaluate to 1 and 0, respectively. The constant names can be written in any lettercase.")]),s._v(" "),t("h3",{attrs:{id:"null-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#null-values"}},[s._v("#")]),s._v(" NULL Values")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("NULL")]),s._v(" value means “no data.” "),t("code",[s._v("NULL")]),s._v(" can be written in any lettercase.")]),s._v(" "),t("h2",{attrs:{id:"identifiers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#identifiers"}},[s._v("#")]),s._v(" Identifiers")]),s._v(" "),t("p",[s._v("Certain objects within IoTDB, including "),t("code",[s._v("TRIGGER")]),s._v(", "),t("code",[s._v("FUNCTION")]),s._v("(UDF), "),t("code",[s._v("CONTINUOUS QUERY")]),s._v(", "),t("code",[s._v("SCHEMA TEMPLATE")]),s._v(", "),t("code",[s._v("USER")]),s._v(", "),t("code",[s._v("ROLE")]),s._v(" and other object names are known as identifiers.")]),s._v(" "),t("p",[s._v("What you need to know about identifiers:")]),s._v(" "),t("ul",[t("li",[s._v("Permitted characters in unquoted identifiers:\n"),t("ul",[t("li",[s._v("[0-9 a-z A-Z _ : @ # $ { }] (letters, digits, some special characters)")]),s._v(" "),t("li",[s._v("['\\u2E80'..'\\u9FFF'] (UNICODE Chinese characters)")])])]),s._v(" "),t("li",[s._v("Identifiers may begin with a digit and consist solely of digits, "),t("strong",[s._v("which is not recommended!")])]),s._v(" "),t("li",[s._v("Identifiers are case sensitive.")]),s._v(" "),t("li",[s._v("Note: User and role names are not case-sensitive, and special characters are not allowed to be escaped.")])]),s._v(" "),t("p",[s._v("If an identifier contains special characters or is a keyword, you must quote it whenever you refer to it.\nThe identifier quote character is the backtick (`):")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("id  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parsed as id")]),s._v("\nID  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parsed as ID")]),s._v("\nid0  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parsed as id0")]),s._v("\n_id  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parsed as _id")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("id  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parsed as 0id")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("233")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parsed as 233 (not recommended!)")]),s._v("\nab"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// invalid")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("ab!"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// parsed as ab!")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v('"ab"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// parsed as "ab"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("b"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("  // invalid\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("a\\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("  // parsed as a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("b\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"node-names-in-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-names-in-path"}},[s._v("#")]),s._v(" Node Names in Path")]),s._v(" "),t("p",[s._v("We call the part of a path divided by "),t("code",[s._v(".")]),s._v(" as a "),t("code",[s._v("node")]),s._v(".")]),s._v(" "),t("p",[s._v("The constraints of node names are almost the same as the identifiers, but you should note the following points:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("root")]),s._v(" is a reserved word, and it is only allowed to appear at the beginning layer of the time series. If "),t("code",[s._v("root")]),s._v(" appears in other layers, it cannot be parsed and an error will be reported.")]),s._v(" "),t("li",[s._v("Character "),t("code",[s._v(".")]),s._v(" is not permitted in unquoted or quoted node names. If you must do it (even if it is not recommended), you can enclose it within either single quote ("),t("code",[s._v("'")]),s._v(") or double quote ("),t("code",[s._v('"')]),s._v("). In this case, quotes are recognized as part of the node name to avoid ambiguity.")]),s._v(" "),t("li",[s._v("Among the node name enclosed in the reverse quota, single quotes and double quotes need to use a backslash to escape.")]),s._v(" "),t("li",[s._v("In particular, if the system is deployed on a Windows machine, the storage group layer name will be "),t("strong",[s._v("case-insensitive")]),s._v(". For example, creating both "),t("code",[s._v("root.ln")]),s._v(" and "),t("code",[s._v("root.LN")]),s._v(" at the same time is not allowed.")])]),s._v(" "),t("p",[s._v("Examples:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// invalid!")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("s1+s2/s3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// root.a.b.`s1+s2/s3`.c will be parsed as Path[root, a, b, s1+s2/s3, c]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// invalid!")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// root.a.b.`select` will be parsed as Path[root, a, b, `select`]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("s1.s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// invalid!")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s1.s2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// root.a.b."s1.s2".c will be parsed as Path[root, a, b, "s1.s2", c]')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v('s1"s2'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// invalid!")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v('s1\\"s2'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// root.a.b.`s1\\"s2`.c be parsed as Path[root, a, b, s1\\"s2, c]')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"keywords-and-reserved-words"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords-and-reserved-words"}},[s._v("#")]),s._v(" Keywords and Reserved Words")]),s._v(" "),t("p",[s._v("Keywords are words that have significance in SQL require special treatment for use as identifiers and node names, and need to be escaped with backticks.\nCertain keywords, such as TIME and ROOT, are reserved and cannot use as identifiers and node names (even after escaping).")]),s._v(" "),t("p",[t("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Reference/Keywords.html"}},[s._v("Keywords and Reserved Words")]),s._v(" shows the keywords and reserved words in IoTDB 0.13.")],1),s._v(" "),t("h2",{attrs:{id:"expressions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#expressions"}},[s._v("#")]),s._v(" Expressions")]),s._v(" "),t("p",[s._v("IoTDB supports the execution of arbitrary nested expressions consisting of numbers, time series, arithmetic expressions, and time series generating functions (including user-defined functions) in the "),t("code",[s._v("select")]),s._v(" clause.")]),s._v(" "),t("p",[s._v("Note: Node names that consist solely of digits, "),t("code",[s._v("'")]),s._v(" and "),t("code",[s._v('"')]),s._v(" in an expression must be enclosed in backticks (`).")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- There exists timeseries: root.sg.d.0, root.sg.d.'a' and root.sg.\"d\".b")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- ambiguity exists, parsing failed")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- ambiguity exists, parsing failed")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- ambiguity exists, parsing failed")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- query from root.sg.d.0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- valid expression, add number 0 to each point of root.sg.d.0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" myudf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("'a'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- valid expression, call function myudf with timeseries root.sg.d.'a' as the 1st parameter, and a string constant 'x' as the 2nd parameter")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"quote-symbol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quote-symbol"}},[s._v("#")]),s._v(" Quote Symbol")]),s._v(" "),t("h3",{attrs:{id:"double-quotes-single-quotes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#double-quotes-single-quotes"}},[s._v("#")]),s._v(" Double quotes (\"), single quotes (')")]),s._v(" "),t("p",[s._v("Double quotes and single quotes are used in the following scenarios:")]),s._v(" "),t("ol",[t("li",[s._v("String literals are represented by strings enclosed in single or double quotes.")]),s._v(" "),t("li",[s._v("If you want to use the path separator ("),t("code",[s._v(".")]),s._v(") in the path node name, you need to enclose the node name in single or double quotes. In this case, to avoid ambiguity, the quotes are treated as part of the node name by the system.")])]),s._v(" "),t("h3",{attrs:{id:"backticks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backticks"}},[s._v("#")]),s._v(" Backticks (`)")]),s._v(" "),t("p",[s._v("Backticks are used in the following scenarios:")]),s._v(" "),t("ol",[t("li",[s._v("When using special characters in an identifier, the identifier needs to be enclosed in backticks.")]),s._v(" "),t("li",[s._v("When using special characters other than path separators in the path node name, the path node name needs to be enclosed in backticks. In this case, the backticks are not considered part of the node name by the system.")])]),s._v(" "),t("h3",{attrs:{id:"backslash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backslash"}},[s._v("#")]),s._v(" Backslash (\\)")]),s._v(" "),t("p",[s._v("backslashes are used in the following scenarios:")]),s._v(" "),t("ul",[t("li",[s._v("In string literals, double or single quote should be escaped with a backslash.\n"),t("ul",[t("li",[s._v("e.g. \"str\\\"ing\" is parsed as str\"ing, 'str\\'ing' is parsed as str'ing.")])])]),s._v(" "),t("li",[s._v("In an identifier, backtick should be escaped with a backslash.\n"),t("ul",[t("li",[s._v("e.g. `na\\`me` is parsed as na`me.")])])]),s._v(" "),t("li",[s._v("In path node names, double or single quote should be escaped with a backslash. To avoid ambiguity, backslashes are recognized as part of the node name.\n"),t("ul",[t("li",[s._v("e.g. root.sg1.d1.\"a\\\"b\" is parsed as Path[root, sg1, d1, \"a\\\"b\"], root.sg1.d1.'a\\'b' is parsed as Path[ root, sg1, d1, 'a\\'b'], root.sg1.d1.`a\\\"b` is parsed as Path[root, sg1, d1, a\\\"b], root.sg1.d1.`a\\'b` is parsed as Path[root, sg1, d1, a\\'b].")])])])]),s._v(" "),t("h2",{attrs:{id:"learn-more"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#learn-more"}},[s._v("#")]),s._v(" Learn More")]),s._v(" "),t("p",[s._v("Please read the lexical and grammar description files in our code repository:")]),s._v(" "),t("p",[s._v("Lexical file: "),t("code",[s._v("antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlLexer.g4")])]),s._v(" "),t("p",[s._v("Grammer file: "),t("code",[s._v("antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlParser.g4")])])])}),[],!1,null,null,null);t.default=n.exports}}]);