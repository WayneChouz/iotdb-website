(window.webpackJsonp=window.webpackJsonp||[]).push([[1088],{1494:function(s,a,n){"use strict";n.r(a);var t=n(19),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"go-原生接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-原生接口"}},[s._v("#")]),s._v(" Go 原生接口")]),s._v(" "),a("h3",{attrs:{id:"依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),a("ul",[a("li",[s._v("golang >= 1.13")]),s._v(" "),a("li",[s._v("make   >= 3.0")]),s._v(" "),a("li",[s._v("curl   >= 7.1.1")]),s._v(" "),a("li",[s._v("thrift 0.13.x")]),s._v(" "),a("li",[s._v("Linux、Macos 或其他类 unix 系统")]),s._v(" "),a("li",[s._v("Windows+bash(WSL、cygwin、Git Bash)")])]),s._v(" "),a("h3",{attrs:{id:"安装方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装方法"}},[s._v("#")]),s._v(" 安装方法")]),s._v(" "),a("ul",[a("li",[s._v("通过 go mod")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到 GOPATH 的 HOME 路径，启用 Go Modules 功能")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("on\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 GOPROXY 环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://goproxy.io\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建命名的文件夹或目录，并切换当前目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" session_example "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" session_example\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存文件，自动跳转到新的地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" session_example.go "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化 go module 环境")]),s._v("\ngo mod init session_example\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载依赖包")]),s._v("\ngo mod tidy\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译并运行程序")]),s._v("\ngo run session_example.go\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("ul",[a("li",[s._v("通过 GOPATH")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# get thrift 0.13.0")]),s._v("\ngo get github.com/apache/thrift@0.13.0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 递归创建目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/iotdb-client-go-example/session_example\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到当前目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/iotdb-client-go-example/session_example\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存文件，自动跳转到新的地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" session_example.go "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化 go module 环境")]),s._v("\ngo mod init\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载依赖包")]),s._v("\ngo mod tidy\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译并运行程序")]),s._v("\ngo run session_example.go\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);