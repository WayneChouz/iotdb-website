(window.webpackJsonp=window.webpackJsonp||[]).push([[1007],{1410:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"语法约定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法约定"}},[s._v("#")]),s._v(" 语法约定")]),s._v(" "),t("h2",{attrs:{id:"字面值常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字面值常量"}},[s._v("#")]),s._v(" 字面值常量")]),s._v(" "),t("p",[s._v("该部分对 IoTDB 中支持的字面值常量进行说明，包括字符串常量、数值型常量、时间戳常量、布尔型常量和空值。")]),s._v(" "),t("h3",{attrs:{id:"字符串常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量"}},[s._v("#")]),s._v(" 字符串常量")]),s._v(" "),t("p",[s._v("字符串是由单引号（"),t("code",[s._v("'")]),s._v("）或双引号（"),t("code",[s._v('"')]),s._v("）字符括起来的字符序列。示例如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a string'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"another string"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("字符串字面值的使用场景：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("INSERT")]),s._v(" 或者 "),t("code",[s._v("SELECT")]),s._v(" 中用于表达 "),t("code",[s._v("TEXT")]),s._v(" 类型数据的场景")]),s._v(" "),t("li",[s._v("SQL 中 UDF 和 Trigger 的 Java 类全类名")]),s._v(" "),t("li",[t("code",[s._v("CREATE TRIGGER")]),s._v(" 语句中描述触发器属性的键值对")]),s._v(" "),t("li",[s._v("UDF 函数输入参数中的属性")]),s._v(" "),t("li",[t("code",[s._v("LOAD")]),s._v(" / "),t("code",[s._v("REMOVE")]),s._v(" / "),t("code",[s._v("SETTLE")]),s._v(" 指令中的文件路径")]),s._v(" "),t("li",[s._v("用户密码")])]),s._v(" "),t("p",[s._v("通过以下几种方式可以在字符串内使用引号：")]),s._v(" "),t("ul",[t("li",[s._v("在引号前使用转义符 (\\)。")]),s._v(" "),t("li",[s._v("在单引号括的的字符串内，双引号无需特殊处理。同理，在双引号括的的字符串内，单引号无需特殊处理。")])]),s._v(" "),t("p",[s._v("关于引号和转义字符的使用示例如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"string\"'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "string"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'""string""\'')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ""string""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'str\\'ing'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// str'ing")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\'string'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"'string'\"")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'string'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"''string''\"")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ''string''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"str\\"ing"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// str"ing')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\"string"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "string')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"数值型常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数值型常量"}},[s._v("#")]),s._v(" 数值型常量")]),s._v(" "),t("p",[s._v("数值型常量包括整型和浮点型。")]),s._v(" "),t("p",[s._v("整型常量是一个数字序列。可以以 "),t("code",[s._v("+")]),s._v(" 或 "),t("code",[s._v("-")]),s._v(" 开头表示正负。例如："),t("code",[s._v("1")]),s._v(", "),t("code",[s._v("-1")]),s._v("。")]),s._v(" "),t("p",[s._v("带有小数部分或由科学计数法表示的为浮点型常量，例如："),t("code",[s._v(".1")]),s._v(", "),t("code",[s._v("3.14")]),s._v(", "),t("code",[s._v("-2.23")]),s._v(", "),t("code",[s._v("+1.70")]),s._v(", "),t("code",[s._v("1.2E3")]),s._v(", "),t("code",[s._v("1.2E-3")]),s._v(", "),t("code",[s._v("-1.2E3")]),s._v(", "),t("code",[s._v("-1.2E-3")]),s._v("。")]),s._v(" "),t("p",[s._v("在 IoTDB 中，"),t("code",[s._v("INT32")]),s._v(" 和 "),t("code",[s._v("INT64")]),s._v(" 表示整数类型（计算是准确的），"),t("code",[s._v("FLOAT")]),s._v(" 和 "),t("code",[s._v("DOUBLE")]),s._v(" 表示浮点数类型（计算是近似的）。")]),s._v(" "),t("p",[s._v("在浮点上下文中可以使用整数，它会被解释为等效的浮点数。")]),s._v(" "),t("h3",{attrs:{id:"时间戳常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间戳常量"}},[s._v("#")]),s._v(" 时间戳常量")]),s._v(" "),t("p",[s._v("时间戳是一个数据到来的时间点，在 IoTDB 中分为绝对时间戳和相对时间戳。详细信息可参考 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Data-Concept/Data-Type.html"}},[s._v("数据类型文档")]),s._v("。")],1),s._v(" "),t("p",[s._v("特别地，"),t("code",[s._v("NOW()")]),s._v("表示语句开始执行时的服务端系统时间戳。")]),s._v(" "),t("h3",{attrs:{id:"布尔型常量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#布尔型常量"}},[s._v("#")]),s._v(" 布尔型常量")]),s._v(" "),t("p",[s._v("布尔值常量 "),t("code",[s._v("TRUE")]),s._v(" 和 "),t("code",[s._v("FALSE")]),s._v(" 分别等价于 "),t("code",[s._v("1")]),s._v(" 和 "),t("code",[s._v("0")]),s._v("，它们对大小写不敏感。")]),s._v(" "),t("h3",{attrs:{id:"空值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#空值"}},[s._v("#")]),s._v(" 空值")]),s._v(" "),t("p",[t("code",[s._v("NULL")]),s._v("值表示没有数据。"),t("code",[s._v("NULL")]),s._v("对大小写不敏感。")]),s._v(" "),t("h2",{attrs:{id:"标识符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标识符"}},[s._v("#")]),s._v(" 标识符")]),s._v(" "),t("p",[s._v("在 IoTDB 中，触发器名称、UDF函数名、元数据模板名称、用户与角色名等被称为标识符。")]),s._v(" "),t("p",[s._v("标识符命名有以下约束：")]),s._v(" "),t("ul",[t("li",[s._v("在不含引用的标识符中，允许出现以下字符：\n"),t("ul",[t("li",[s._v("[0-9 a-z A-Z _ : @ # $ { }] （字母，数字，部分特殊字符）")]),s._v(" "),t("li",[s._v("['\\u2E80'..'\\u9FFF'] （UNICODE 中文字符）")])])]),s._v(" "),t("li",[s._v("标识符允许使用数字开头、允许全部为数字（"),t("strong",[s._v("不推荐！")]),s._v("）。")]),s._v(" "),t("li",[s._v("标识符是大小写敏感的。")]),s._v(" "),t("li",[s._v("注意：用户与角色名对大小写不敏感，并且不允许转义特殊字符。")])]),s._v(" "),t("p",[s._v("如果标识符要包含不允许的特殊字符，或者使用系统关键字，需要用反引号（`）对标识符进行引用。反引号引用的标识符中出现反引号需要反斜杠转义。")]),s._v(" "),t("p",[s._v("示例如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("id  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合法，被解析为 id")]),s._v("\nID  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合法，被解析为 ID，与 id 不同")]),s._v("\nid0  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合法，被解析为 id0")]),s._v("\n_id  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合法，被解析为 _id")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("id  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合法，被解析为 0id")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("233")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合法，被解析为 233 (不推荐！)")]),s._v("\nab"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不合法，包含不被允许的特殊字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("ab!"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 合法，被解析为 ab!")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v('"ab"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// 合法，被解析为 "ab"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("b"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("  // 不合法，反引号应使用反斜杠进行转义\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("a\\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("  // 合法，被解析为 a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("b\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"路径节点名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径节点名"}},[s._v("#")]),s._v(" 路径节点名")]),s._v(" "),t("p",[s._v("我们称一个路径中由 "),t("code",[s._v(".")]),s._v(" 分割的部分叫做节点（node name）。")]),s._v(" "),t("p",[s._v("路径节点名的约束与标识符基本一致，但要额外注意以下几点：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("root")]),s._v(" 只允许出现时间序列的开头，若其他层级出现 "),t("code",[s._v("root")]),s._v("，则无法解析，提示报错。")]),s._v(" "),t("li",[s._v("无论是否使用反引号引用，路径分隔符（"),t("code",[s._v(".")]),s._v("）都不能出现在路径节点名中。 如果路径节点名中一定要出现 "),t("code",[s._v(".")]),s._v(" （不推荐！），需要用单引号或双引号括起。在这种情况下，为避免引发歧义，引号被系统视为节点名的一部分。")]),s._v(" "),t("li",[s._v("在反引号括起的路径节点名中，单引号和双引号需要使用反斜杠进行转义。")]),s._v(" "),t("li",[s._v("特别地，如果系统在 Windows 系统上部署，那么存储组层级名称是"),t("strong",[s._v("大小写不敏感")]),s._v("的。例如，同时创建 "),t("code",[s._v("root.ln")]),s._v(" 和 "),t("code",[s._v("root.LN")]),s._v(" 是不被允许的。")])]),s._v(" "),t("p",[s._v("示例如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("s3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解析失败！")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("s1+s2/s3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// root.a.b.`s1+s2/s3`.c 将被解析为 Path[root, a, b, s1+s2/s3, c]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解析失败！")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("select"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// root.a.b.`select` 将被解析为 Path[root, a, b, select]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("s1.s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解析失败！")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"s1.s2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// root.a.b."s1.s2".c 将被解析为 Path[root, a, b, "s1.s2", c]')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v('s1"s2'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 解析失败！")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v('s1\\"s2'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("c "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// root.a.b.`s1\\"s2`.c 将被解析为 Path[root, a, b, s1\\"s2, c]')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"关键字和保留字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关键字和保留字"}},[s._v("#")]),s._v(" 关键字和保留字")]),s._v(" "),t("p",[s._v("关键字是在 SQL 具有特定含义的词，不能直接用于标识符或路径节点名，需要使用反引号进行转义。保留字是关键字的一个子集，保留字不能用于标识符或路径节点名（即使进行了转义）。")]),s._v(" "),t("p",[s._v("关于 IoTDB 的关键字和保留字列表，可以查看 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Reference/Keywords.html"}},[s._v("关键字和保留字")]),s._v(" 。")],1),s._v(" "),t("h2",{attrs:{id:"表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表达式"}},[s._v("#")]),s._v(" 表达式")]),s._v(" "),t("p",[s._v("IoTDB 支持在 "),t("code",[s._v("select")]),s._v(" 子句中执行由数字常量、时间序列、算数运算表达式和时间序列生成函数（包括用户自定义函数）组成的任意嵌套表达式。")]),s._v(" "),t("p",[s._v("注意：当参与表达式的路径节点名由纯数字、单引号、或双引号组成（不推荐！）时，必须使用反引号（`）括起，以免引起歧义。示例如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 存在时间序列： root.sg.d.0, root.sg.d.'a' 和 root.sg.\"d\".b")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 存在歧义，解析失败")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 存在歧义，解析失败")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("b "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 存在歧义，解析失败")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 对时间序列 root.sg.d.0 进行查询")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表达式，对时间序列 root.sg.d.0 的每一个查询结果加 0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" myudf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("'a'"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'x'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表达式，调用函数 myudf，第一个参数为时间序列 root.sg.d.'a'，第二个参数为字符串常量 'x'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"引用符号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引用符号"}},[s._v("#")]),s._v(" 引用符号")]),s._v(" "),t("h3",{attrs:{id:"双引号-、单引号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#双引号-、单引号"}},[s._v("#")]),s._v(" 双引号（\"）、单引号（'）")]),s._v(" "),t("p",[s._v("双引号、单引号的使用场景如下：")]),s._v(" "),t("ol",[t("li",[s._v("字符串字面值由单引号或双引号括起的字符串表示。")]),s._v(" "),t("li",[s._v("如果要在路径节点名中使用路径分隔符（"),t("code",[s._v(".")]),s._v("），则需要将路径节点名用单引号或双引号括起。在这种情况下，为避免引发歧义，引号被系统视为节点名的一部分。")])]),s._v(" "),t("h3",{attrs:{id:"反引号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反引号"}},[s._v("#")]),s._v(" 反引号（`）")]),s._v(" "),t("p",[s._v("反引号的使用场景如下：")]),s._v(" "),t("ol",[t("li",[s._v("在标识符中使用特殊字符时，标识符需要使用反引号括起。")]),s._v(" "),t("li",[s._v("在路径节点名中使用除路径分隔符之外的特殊字符时，路径节点名需要使用反引号括起。在这种情况下，反引号不会被系统视为节点名的一部分。")])]),s._v(" "),t("h3",{attrs:{id:"反斜杠"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反斜杠"}},[s._v("#")]),s._v(" 反斜杠（\\）")]),s._v(" "),t("p",[s._v("反斜杠的使用场景如下：")]),s._v(" "),t("ul",[t("li",[s._v("在字符串常量中，出现双引号或单引号时，要使用反斜杠进行转义。\n"),t("ul",[t("li",[s._v("如：\"str\\\"ing\" 解析为 str\"ing、'str\\'ing' 解析为 str'ing。")])])]),s._v(" "),t("li",[s._v("在标识符中，出现反引号时，要使用反斜杠进行转义。\n"),t("ul",[t("li",[s._v("如：`na\\`me` 解析为 na`me。")])])]),s._v(" "),t("li",[s._v("在路径节点名中，出现双引号或单引号时，要使用反斜杠进行转义。注意，为了避免歧义，反斜杠会被系统视为节点名的一部分。\n"),t("ul",[t("li",[s._v("如：root.sg1.d1.\"a\\\"b\" 解析为 Path[root, sg1, d1, \"a\\\"b\"]、root.sg1.d1.'a\\'b' 解析为 Path[root, sg1, d1, 'a\\'b']、root.sg1.d1.`a\\\"b` 解析为 Path[root, sg1, d1, a\\\"b]、root.sg1.d1.`a\\'b` 解析为 Path[root, sg1, d1, a\\'b]。")])])])]),s._v(" "),t("h2",{attrs:{id:"了解更多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#了解更多"}},[s._v("#")]),s._v(" 了解更多")]),s._v(" "),t("p",[s._v("请阅读代码仓库中的词法和语法描述文件：")]),s._v(" "),t("p",[s._v("词法文件："),t("code",[s._v("antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlLexer.g4")])]),s._v(" "),t("p",[s._v("语法文件："),t("code",[s._v("antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlParser.g4")])])])}),[],!1,null,null,null);t.default=e.exports}}]);