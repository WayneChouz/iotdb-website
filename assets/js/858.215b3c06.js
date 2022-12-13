(window.webpackJsonp=window.webpackJsonp||[]).push([[858],{1258:function(a,s,t){"use strict";t.r(s);var r=t(19),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"csv-工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csv-工具"}},[a._v("#")]),a._v(" CSV 工具")]),a._v(" "),s("p",[a._v("CSV工具可帮您将CSV格式的数据导入到IoTDB或者将数据从IoTDB导出到CSV文件。")]),a._v(" "),s("h2",{attrs:{id:"使用-import-csv-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-import-csv-sh"}},[a._v("#")]),a._v(" 使用 import-csv.sh")]),a._v(" "),s("h3",{attrs:{id:"创建元数据-可选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建元数据-可选"}},[a._v("#")]),a._v(" 创建元数据（可选）")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" STORAGE "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GROUP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" STORAGE "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GROUP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" STORAGE "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GROUP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("INT32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEXT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PLAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("INT32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s3 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("INT32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("INT32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("IoTDB具有类型推断的能力，因此在数据导入前创建元数据不是必须的。但我们仍然推荐在使用CSV导入工具导入数据前创建元数据，因为这可以避免不必要的类型转换错误。")]),a._v(" "),s("h3",{attrs:{id:"待导入-csv-文件示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#待导入-csv-文件示例"}},[a._v("#")]),a._v(" 待导入 CSV 文件示例")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("world"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("700")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("800")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("900")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello, \\"world\\""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1200")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"运行方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行方法"}},[a._v("#")]),a._v(" 运行方法")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix/OS X")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/import-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("xxx.csv"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("import-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("xxx.csv"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"运行示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行示例"}},[a._v("#")]),a._v(" 运行示例")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix/OS X")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/import-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" example-filename.csv\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("import-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" example-filename.csv\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),s("p",[a._v("注意，在导入数据前，需要特殊处理下列的字符：")]),a._v(" "),s("ol",[s("li",[s("code",[a._v(",")]),a._v(" : 包含"),s("code",[a._v(",")]),a._v("的字段需要使用单引号或者双引号括起来")]),a._v(" "),s("li",[s("code",[a._v('"')]),a._v(' : "字段中的'),s("code",[a._v('"')]),a._v("需要被替换成转义字符"),s("code",[a._v('\\"')]),a._v("或者用"),s("code",[a._v("\\'")]),a._v("将字段括起来。")]),a._v(" "),s("li",[s("code",[a._v("'")]),a._v(' : "字段中的'),s("code",[a._v("'")]),a._v("需要被替换成转义字符"),s("code",[a._v("\\'")]),a._v("或者用"),s("code",[a._v('\\"')]),a._v("将字段括起来。")]),a._v(" "),s("li",[a._v("你可以输入时间格式像"),s("code",[a._v("yyyy-MM-dd'T'HH:mm:ss")]),a._v(", "),s("code",[a._v("yyy-MM-dd HH:mm:ss")]),a._v(", 或者"),s("code",[a._v("yyyy-MM-dd'T'HH:mm:ss.SSSZ")]),a._v(".")])]),a._v(" "),s("h2",{attrs:{id:"使用-export-csv-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-export-csv-sh"}},[a._v("#")]),a._v(" 使用 export-csv.sh")]),a._v(" "),s("h3",{attrs:{id:"运行方法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行方法-2"}},[a._v("#")]),a._v(" 运行方法")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix/OS X")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-tf "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("time-format"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sqlfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("export-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-tf "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("time-format"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sqlfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("在运行导出脚本之后，您需要输入一些查询或指定一些SQL文件。如果在一个SQL文件中有多个SQL，SQL应该被换行符分割。")]),a._v(" "),s("h3",{attrs:{id:"sql文件示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql文件示例"}},[a._v("#")]),a._v(" SQL文件示例")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"运行示例-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行示例-2"}},[a._v("#")]),a._v(" 运行示例")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix/OS X")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tf")]),a._v(" yyyy-MM-dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" HH:mm:ss\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" sql.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tf")]),a._v(" yyyy-MM-dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" HH:mm:ss "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" sql.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tf")]),a._v(" yyyy-MM-dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" HH:mm:ss\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" sql.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tf")]),a._v(" yyyy-MM-dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" HH:mm:ss "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" sql.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("h3",{attrs:{id:"注意事项-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项-2"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),s("p",[a._v("注意，如果导出字段存在如下特殊字符：")]),a._v(" "),s("ol",[s("li",[s("code",[a._v(",")]),a._v(" : 整个字段会被用"),s("code",[a._v('"')]),a._v("括起来。")]),a._v(" "),s("li",[s("code",[a._v('"')]),a._v(" : 整个字段会被用"),s("code",[a._v('"')]),a._v("括起来且"),s("code",[a._v('"')]),a._v("会被替换为"),s("code",[a._v('\\"')]),a._v("。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);