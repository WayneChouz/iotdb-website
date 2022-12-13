(window.webpackJsonp=window.webpackJsonp||[]).push([[684],{1087:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"zeppelin-iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zeppelin-iotdb"}},[t._v("#")]),t._v(" Zeppelin-IoTDB")]),t._v(" "),s("h3",{attrs:{id:"zeppelin-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zeppelin-简介"}},[t._v("#")]),t._v(" Zeppelin 简介")]),t._v(" "),s("p",[t._v("Apache Zeppelin 是一个基于网页的交互式数据分析系统。用户可以通过 Zeppelin 连接数据源并使用 SQL、Scala 等进行交互式操作。操作可以保存为文档（类似于 Jupyter）。Zeppelin 支持多种数据源，包括 Spark、ElasticSearch、Cassandra 和 InfluxDB 等等。现在，IoTDB 已经支持使用 Zeppelin 进行操作。样例如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png",alt:"iotdb-note-snapshot"}})]),t._v(" "),s("h3",{attrs:{id:"zeppelin-iotdb-解释器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zeppelin-iotdb-解释器"}},[t._v("#")]),t._v(" Zeppelin-IoTDB 解释器")]),t._v(" "),s("h4",{attrs:{id:"系统环境需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统环境需求"}},[t._v("#")]),t._v(" 系统环境需求")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("IoTDB 版本")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Java 版本")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Zeppelin 版本")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v(">="),s("code",[t._v("0.12.0")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v(">="),s("code",[t._v("1.8.0_271")])]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("code",[t._v(">=0.9.0")])])])])]),t._v(" "),s("p",[t._v("安装 IoTDB：参考 "),s("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/QuickStart/QuickStart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速上手"),s("OutboundLink")],1),t._v(". 假设 IoTDB 安装在 "),s("code",[t._v("$IoTDB_HOME")]),t._v(".")]),t._v(" "),s("p",[t._v("安装 Zeppelin：")]),t._v(" "),s("blockquote",[s("p",[t._v("方法 1 直接下载：下载 "),s("a",{attrs:{href:"https://zeppelin.apache.org/download.html#",target:"_blank",rel:"noopener noreferrer"}},[t._v("Zeppelin"),s("OutboundLink")],1),t._v(" 并解压二进制文件。推荐下载 "),s("a",{attrs:{href:"http://www.apache.org/dyn/closer.cgi/zeppelin/zeppelin-0.9.0/zeppelin-0.9.0-bin-netinst.tgz",target:"_blank",rel:"noopener noreferrer"}},[t._v("netinst"),s("OutboundLink")],1),t._v(" 二进制包，此包由于未编译不相关的 interpreter，因此大小相对较小。")]),t._v(" "),s("p",[t._v("方法 2 源码编译：参考 "),s("a",{attrs:{href:"https://zeppelin.apache.org/docs/latest/setup/basics/how_to_build.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("从源码构建 Zeppelin"),s("OutboundLink")],1),t._v(" ，使用命令为 "),s("code",[t._v("mvn clean package -pl zeppelin-web,zeppelin-server -am -DskipTests")]),t._v("。")])]),t._v(" "),s("p",[t._v("假设 Zeppelin 安装在 "),s("code",[t._v("$Zeppelin_HOME")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"编译解释器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译解释器"}},[t._v("#")]),t._v(" 编译解释器")]),t._v(" "),s("p",[t._v("运行如下命令编译 IoTDB Zeppelin 解释器。")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$IoTDB_HOME")]),t._v("\nmvn clean package "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-pl")]),t._v(" zeppelin-interpreter "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-am")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DskipTests")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" get-jar-with-dependencies\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("编译后的解释器位于如下目录：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$IoTDB_HOME")]),t._v("/zeppelin-interpreter/target/zeppelin-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("-SNAPSHOT-jar-with-dependencies.jar\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"安装解释器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装解释器"}},[t._v("#")]),t._v(" 安装解释器")]),t._v(" "),s("p",[t._v("当你编译好了解释器，在 Zeppelin 的解释器目录下创建一个新的文件夹"),s("code",[t._v("iotdb")]),t._v("，并将 IoTDB 解释器放入其中。")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$IoTDB_HOME")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Zeppelin_HOME")]),t._v("/interpreter/iotdb\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$IoTDB_HOME")]),t._v("/zeppelin-interpreter/target/zeppelin-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("-SNAPSHOT-jar-with-dependencies.jar "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$Zeppelin_HOME")]),t._v("/interpreter/iotdb\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h4",{attrs:{id:"启动-zeppelin-和-iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-zeppelin-和-iotdb"}},[t._v("#")]),t._v(" 启动 Zeppelin 和 IoTDB")]),t._v(" "),s("p",[t._v("进入 "),s("code",[t._v("$Zeppelin_HOME")]),t._v(" 并运行 Zeppelin：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unix/OS X")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./bin/zeppelin-daemon.sh start\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("bin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("zeppelin.cmd\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("进入 "),s("code",[t._v("$IoTDB_HOME")]),t._v(" 并运行 IoTDB：")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unix/OS X")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" sbin/start-server.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\nor\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" sbin/start-server.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("conf_path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rpc_port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rpc_port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null "),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("start-server.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("conf_path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-rpc_port")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("rpc_port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"使用-zeppelin-iotdb-解释器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-zeppelin-iotdb-解释器"}},[t._v("#")]),t._v(" 使用 Zeppelin-IoTDB 解释器")]),t._v(" "),s("p",[t._v("当 Zeppelin 启动后，访问 "),s("a",{attrs:{href:"http://127.0.0.1:8080/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8080/"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("通过如下步骤创建一个新的笔记本页面：")]),t._v(" "),s("ol",[s("li",[t._v("点击 "),s("code",[t._v("Create new node")]),t._v(" 按钮")]),t._v(" "),s("li",[t._v("设置笔记本名")]),t._v(" "),s("li",[t._v("选择解释器为 iotdb")])]),t._v(" "),s("p",[t._v("现在可以开始使用 Zeppelin 操作 IoTDB 了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752945-5171a800-43a5-11eb-8614-53b3276a3ce2.png",alt:"iotdb-create-note"}})]),t._v(" "),s("p",[t._v("我们提供了一些简单的 SQL 来展示 Zeppelin-IoTDB 解释器的使用：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATABASE")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BOOLEAN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PLAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("temperature "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FLOAT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PLAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hardware "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("INT32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("PLAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("44")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("55")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf01"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])]),s("p",[t._v("样例如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752948-52a2d500-43a5-11eb-9156-0c55667eb4cd.png",alt:"iotdb-note-snapshot2"}})]),t._v(" "),s("p",[t._v("用户也可以参考 "),s("a",{attrs:{href:"https://zeppelin.apache.org/docs/0.9.0/usage/display_system/basic.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("[1]"),s("OutboundLink")],1),t._v(" 编写更丰富多彩的文档。")]),t._v(" "),s("p",[t._v("以上样例放置于 "),s("code",[t._v("$IoTDB_HOME/zeppelin-interpreter/Zeppelin-IoTDB-Demo.zpln")])]),t._v(" "),s("h3",{attrs:{id:"解释器配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解释器配置项"}},[t._v("#")]),t._v(" 解释器配置项")]),t._v(" "),s("p",[t._v("进入页面 "),s("a",{attrs:{href:"http://127.0.0.1:8080/#/interpreter",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://127.0.0.1:8080/#/interpreter"),s("OutboundLink")],1),t._v(" 并配置 IoTDB 的连接参数：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/5548915/102752940-50407b00-43a5-11eb-94fb-3e3be222183c.png",alt:"iotdb-configuration"}})]),t._v(" "),s("p",[t._v("可配置参数默认值和解释如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("iotdb.host")]),t._v(" "),s("td",[t._v("127.0.0.1")]),t._v(" "),s("td",[t._v("IoTDB 主机名")])]),t._v(" "),s("tr",[s("td",[t._v("iotdb.port")]),t._v(" "),s("td",[t._v("6667")]),t._v(" "),s("td",[t._v("IoTDB 端口")])]),t._v(" "),s("tr",[s("td",[t._v("iotdb.username")]),t._v(" "),s("td",[t._v("root")]),t._v(" "),s("td",[t._v("用户名")])]),t._v(" "),s("tr",[s("td",[t._v("iotdb.password")]),t._v(" "),s("td",[t._v("root")]),t._v(" "),s("td",[t._v("密码")])]),t._v(" "),s("tr",[s("td",[t._v("iotdb.fetchSize")]),t._v(" "),s("td",[t._v("10000")]),t._v(" "),s("td",[t._v("查询结果分批次返回时，每一批数量")])]),t._v(" "),s("tr",[s("td",[t._v("iotdb.zoneId")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("时区 ID")])]),t._v(" "),s("tr",[s("td",[t._v("iotdb.enable.rpc.compression")]),t._v(" "),s("td",[t._v("FALSE")]),t._v(" "),s("td",[t._v("是否允许 rpc 压缩")])]),t._v(" "),s("tr",[s("td",[t._v("iotdb.time.display.type")]),t._v(" "),s("td",[t._v("default")]),t._v(" "),s("td",[t._v("时间戳的展示格式")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);