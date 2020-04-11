(window.webpackJsonp=window.webpackJsonp||[]).push([[2101],{2422:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),e("h2",{attrs:{id:"关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关键字"}},[s._v("#")]),s._v(" 关键字")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Keywords for IoTDB (case insensitive):\nADD, BY, COMPRESSOR, CREATE, DATATYPE, DELETE, DESCRIBE, DROP, ENCODING, EXIT, FROM, GRANT, GROUP, LABLE, LINK, INDEX, INSERT, INTO, LOAD, MAX_POINT_NUMBER, MERGE, METADATA, ON, ORDER, PASSWORD, PRIVILEGES, PROPERTY, QUIT, REVOKE, ROLE, ROOT, SELECT, SET, SHOW, STORAGE, TIME, TIMESERIES, TIMESTAMP, TO, UNLINK, UPDATE, USER, USING, VALUE, VALUES, WHERE, WITH\n\nKeywords with special meanings (case sensitive):\n* Data Types: BOOLEAN, DOUBLE, FLOAT, INT32, INT64, TEXT (Only capitals is acceptable)\n* Encoding Methods: BITMAP, DFT, GORILLA, PLAIN, RLE, TS_2DIFF (Only capitals is acceptable)\n* Compression Methods: UNCOMPRESSED, SNAPPY (Only capitals is acceptable)\n* Logical symbol: AND, &, &&, OR, | , ||, NOT, !, TRUE, FALSE\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h2",{attrs:{id:"标识符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标识符"}},[s._v("#")]),s._v(" 标识符")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("QUOTE := '\\'';\nDOT := '.';\nCOLON : ':' ;\nCOMMA := ',' ;\nSEMICOLON := ';' ;\nLPAREN := '(' ;\nRPAREN := ')' ;\nLBRACKET := '[';\nRBRACKET := ']';\nEQUAL := '=' | '==';\nNOTEQUAL := '<>' | '!=';\nLESSTHANOREQUALTO := '<=';\nLESSTHAN := '<';\nGREATERTHANOREQUALTO := '>=';\nGREATERTHAN := '>';\nDIVIDE := '/';\nPLUS := '+';\nMINUS := '-';\nSTAR := '*';\nLetter := 'a'..'z' | 'A'..'Z';\nHexDigit := 'a'..'f' | 'A'..'F';\nDigit := '0'..'9';\nBoolean := TRUE | FALSE | 0 | 1 (case insensitive)\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("StringLiteral := ( '\\'' ( ~('\\'') )* '\\'' | '\\\"' ( ~('\\\"') )* '\\\"');\neg. ‘abc’\neg. “abc”\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Integer := ('-' | '+')? Digit+;\neg. 123\neg. -222\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Float := ('-' | '+')? Digit+ DOT Digit+ (('e' | 'E') ('-' | '+')? Digit+)?;\neg. 3.1415\neg. 1.2E10\neg. -1.33\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Identifier := (Letter | '_') (Letter | Digit | '_' | MINUS)*;\neg. a123\neg. _abc123\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"常量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[s._v("#")]),s._v(" 常量")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("PointValue : Integer | Float | StringLiteral | Boolean\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("TimeValue : Integer | DateTime | ISO8601 | NOW()\nNote: Integer means timestamp type.\n\nDateTime : \neg. 2016-11-16T16:22:33+08:00\neg. 2016-11-16 16:22:33+08:00\neg. 2016-11-16T16:22:33.000+08:00\neg. 2016-11-16 16:22:33.000+08:00\nNote: DateTime Type can support several types, see Chapter 3 Datetime section for details.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("PrecedenceEqualOperator : EQUAL | NOTEQUAL | LESSTHANOREQUALTO | LESSTHAN | GREATERTHANOREQUALTO | GREATERTHAN\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Timeseries : ROOT [DOT <LayerName>]* DOT <SensorName>\nLayerName : Identifier\nSensorName : Identifier\neg. root.ln.wf01.wt01.status\neg. root.sgcc.wf03.wt01.temperature\nNote: Timeseries must be start with `root`(case insensitive) and end with sensor name.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("PrefixPath : ROOT (DOT <LayerName>)*\nLayerName : Identifier | STAR\neg. root.sgcc\neg. root.*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Path: (ROOT | <LayerName>) (DOT <LayerName>)* \nLayerName: Identifier | STAR\neg. root.ln.wf01.wt01.status\neg. root.*.wf01.wt01.status\neg. root.ln.wf01.wt01.*\neg. *.wt01.*\neg. *\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])])}],!1,null,null,null);a.default=t.exports}}]);