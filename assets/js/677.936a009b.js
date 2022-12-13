(window.webpackJsonp=window.webpackJsonp||[]).push([[677],{1081:function(a,t,e){"use strict";e.r(t);var s=e(19),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"系统集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统集成"}},[a._v("#")]),a._v(" 系统集成")]),a._v(" "),t("h2",{attrs:{id:"grafana-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana-插件"}},[a._v("#")]),a._v(" Grafana 插件")]),a._v(" "),t("p",[a._v("Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。")]),a._v(" "),t("p",[a._v("在 IoTDB 项目中，我们开发了 Grafana 插件，该插件通过调用 IoTDB REST 服务来展现 IoTDB 中时序数据 ，提供了众多时序数据的可视化方法。Grafana 插件相较于 IoTDB-Grafana-Connector 连接器执行效率更高、支持的查询种类更多。只要在您部署环境允许的情况下，"),t("em",[a._v("我们都推荐直接使用 Grafana 插件而不使用 IoTDB-Grafana-Connector 连接器")]),a._v("。")]),a._v(" "),t("h3",{attrs:{id:"部署-grafana-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-grafana-插件"}},[a._v("#")]),a._v(" 部署 Grafana 插件")]),a._v(" "),t("h4",{attrs:{id:"安装-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-grafana"}},[a._v("#")]),a._v(" 安装 Grafana")]),a._v(" "),t("ul",[t("li",[a._v("Grafana 组件下载地址：https://grafana.com/grafana/download")]),a._v(" "),t("li",[a._v("版本 >= 7.0.0")])]),a._v(" "),t("h4",{attrs:{id:"grafana-plugin-获取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana-plugin-获取"}},[a._v("#")]),a._v(" grafana-plugin 获取")]),a._v(" "),t("h5",{attrs:{id:"方案一-grafana-plugin-下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案一-grafana-plugin-下载"}},[a._v("#")]),a._v(" 方案一 grafana-plugin 下载")]),a._v(" "),t("p",[a._v("二进制文件下载地址：https://iotdb.apache.org/zh/Download/")]),a._v(" "),t("h5",{attrs:{id:"方案二-grafana-plugin-单独编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案二-grafana-plugin-单独编译"}},[a._v("#")]),a._v(" 方案二 grafana-plugin 单独编译")]),a._v(" "),t("p",[a._v("我们需要编译 IoTDB 仓库 "),t("code",[a._v("grafana-plugin")]),a._v(" 目录下的前端工程并生成 "),t("code",[a._v("dist")]),a._v(" 目标目录，具体执行流程如下。")]),a._v(" "),t("p",[a._v("源码下载")]),a._v(" "),t("ul",[t("li",[a._v("插件名称: grafana-plugin")]),a._v(" "),t("li",[a._v("下载地址: https://github.com/apache/iotdb.git")])]),a._v(" "),t("p",[a._v("执行下面的命令：")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/iotdb.git\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("您可以采取下面任意一种编译方式：")]),a._v(" "),t("ul",[t("li",[a._v("使用 maven 编译，在 "),t("code",[a._v("grafana-plugin")]),a._v(" 目录下执行：")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("mvn "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" compile-grafana-plugin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("或使用命令编译，在 "),t("code",[a._v("grafana-plugin")]),a._v(" 目录下执行：")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" build\ngo get "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" github.com/grafana/grafana-plugin-sdk-go\ngo mod tidy\nmage "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("在使用go get -u 命令时有可能会报如下错误，这时我们需要执行"),t("code",[a._v("go env -w GOPROXY=https://goproxy.cn")]),a._v("，再执行"),t("code",[a._v("go get -u github.com/grafana/grafana-plugin-sdk-go")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('go get: module github.com/grafana/grafana-plugin-sdk-go: Get "https://proxy.golang.org/github.com/grafana/grafana-plugin-sdk-go/@v/list": dial tcp 142.251.42.241:443: i/o timeout\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果编译成功，我们将看到生成的目标文件夹 "),t("code",[a._v("dist")]),a._v("，它包含了编译好的 Grafana 前端插件：")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"333px","max-height":"545px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/grafana-plugin-build.png?raw=true"}}),a._v(" "),t("h5",{attrs:{id:"方案三-iotdb-的分发包完整编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方案三-iotdb-的分发包完整编译"}},[a._v("#")]),a._v(" 方案三 IoTDB 的分发包完整编译")]),a._v(" "),t("p",[a._v("我们也可以通过执行 IoTDB 项目的"),t("strong",[a._v("打包指令")]),a._v("获取 "),t("code",[a._v("grafana-plugin")]),a._v(" 的前端工程和其他配套的 IoTDB 可执行文件。")]),a._v(" "),t("p",[a._v("源码下载")]),a._v(" "),t("ul",[t("li",[a._v("插件名称: grafana-plugin")]),a._v(" "),t("li",[a._v("下载地址: https://github.com/apache/iotdb.git")])]),a._v(" "),t("p",[a._v("执行下面的命令：")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/iotdb.git\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("在 IoTDB 仓库的根目录下执行：")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v(" mvn clean package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pl")]),a._v(" distribution "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-am")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DskipTests")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" compile-grafana-plugin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果编译成功，我们将看到 "),t("code",[a._v("distribution/target")]),a._v(" 路径下包含了编译好的 Grafana 前端插件：")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"333px","max-height":"545px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/distribution.png?raw=true"}}),a._v(" "),t("h4",{attrs:{id:"grafana-plugin-插件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana-plugin-插件安装"}},[a._v("#")]),a._v(" grafana-plugin 插件安装")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("拷贝上述生成的前端工程目标文件夹到 Grafana 的插件目录中 "),t("code",[a._v("${Grafana文件目录}\\data\\plugins\\")]),a._v("。如果没有此目录可以手动建或者启动grafana会自动建立，当然也可以修改plugins的位置,具体请查看下面的修改Grafana 的插件目录位置说明。")])]),a._v(" "),t("li",[t("p",[a._v("修改Grafana的配置文件：找到配置文件（"),t("code",[a._v("${Grafana文件目录}\\conf\\defaults.ini")]),a._v("），并进行如下的修改：")]),a._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("allow_loading_unsigned_plugins")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("apache-iotdb-datasource")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("修改Grafana 的插件目录位置:找到配置文件（"),t("code",[a._v("${Grafana文件目录}\\conf\\defaults.ini")]),a._v("），并进行如下的修改：")]),a._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("plugins")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("data/plugins")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("如果 Grafana 服务已启动，则需要重启服务。")])])]),a._v(" "),t("p",[a._v("更多详情，请点 "),t("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/plugins/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),t("OutboundLink")],1)]),a._v(" "),t("h4",{attrs:{id:"启动-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-grafana"}},[a._v("#")]),a._v(" 启动 Grafana")]),a._v(" "),t("p",[a._v("进入 Grafana 的安装目录，使用以下命令启动 Grafana：")]),a._v(" "),t("ul",[t("li",[a._v("Windows 系统：")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("grafana-server.exe\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("Linux 系统：")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" grafana-server start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("ul",[t("li",[a._v("MacOS 系统：")])]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("brew services start grafana\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("更多详情，请点 "),t("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),t("OutboundLink")],1)]),a._v(" "),t("h4",{attrs:{id:"配置-iotdb-rest-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-iotdb-rest-服务"}},[a._v("#")]),a._v(" 配置 IoTDB REST 服务")]),a._v(" "),t("p",[a._v("进入 "),t("code",[a._v("{iotdb 目录}/conf")]),a._v("，打开 "),t("code",[a._v("iotdb-common.properties")]),a._v(" 文件，并作如下修改：")]),a._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Is the REST service enabled")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("enable_rest_service")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("true")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# the binding port of the REST service")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("rest_service_port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("18080")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("启动（重启）IoTDB 使配置生效，此时 IoTDB REST 服务处于运行状态。")]),a._v(" "),t("h3",{attrs:{id:"使用-grafana-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-grafana-插件"}},[a._v("#")]),a._v(" 使用 Grafana 插件")]),a._v(" "),t("h4",{attrs:{id:"访问-grafana-dashboard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问-grafana-dashboard"}},[a._v("#")]),a._v(" 访问 Grafana dashboard")]),a._v(" "),t("p",[a._v("Grafana 以网页的 dashboard 形式为您展示数据，在使用时请您打开浏览器，访问 "),t("code",[a._v("http://<ip>:<port>")]),a._v("。")]),a._v(" "),t("p",[a._v("注：IP 为您的 Grafana 所在的服务器 IP，Port 为 Grafana 的运行端口（默认 3000）。")]),a._v(" "),t("p",[a._v("在本地试用时，Grafana  dashboard 的默认地址为 "),t("code",[a._v("http://localhost:3000/")]),a._v("。")]),a._v(" "),t("p",[a._v("默认登录的用户名和密码都是 "),t("code",[a._v("admin")]),a._v("。")]),a._v(" "),t("h4",{attrs:{id:"添加-iotdb-数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加-iotdb-数据源"}},[a._v("#")]),a._v(" 添加 IoTDB 数据源")]),a._v(" "),t("p",[a._v("点击左侧的 "),t("code",[a._v("设置")]),a._v(" 图标，选择 "),t("code",[a._v("Data Source")]),a._v(" 选项，然后再点击 "),t("code",[a._v("Add data source")]),a._v("。")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/datasource_1.png?raw=true"}}),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/datasource_2.png?raw=true"}}),a._v(" "),t("p",[a._v("选择 "),t("code",[a._v("Apache IoTDB")]),a._v(" 数据源，"),t("code",[a._v("URL")]),a._v(" 一栏填写  "),t("code",[a._v("http://<ip>:<port>")]),a._v("。")]),a._v(" "),t("p",[a._v("Ip 为您的 IoTDB 服务器所在的宿主机 IP，port 为 REST 服务的运行端口（默认 18080）。")]),a._v(" "),t("p",[a._v("输入 IoTDB 服务器的 username 和 password，点击 "),t("code",[a._v("Save & Test")]),a._v("，出现 "),t("code",[a._v("Success")]),a._v(" 则提示配置成功。")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/datasource_3.png?raw=true"}}),a._v(" "),t("h4",{attrs:{id:"创建一个新的-panel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新的-panel"}},[a._v("#")]),a._v(" 创建一个新的 Panel")]),a._v(" "),t("p",[a._v("点击左侧的 "),t("code",[a._v("Dashboards")]),a._v(" 图标，选择 "),t("code",[a._v("Manage")]),a._v("，如下图所示：")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/manage.png?raw=true"}}),a._v(" "),t("p",[a._v("点击右上方的 "),t("code",[a._v("New Dashboard")]),a._v("  图标，选择 "),t("code",[a._v("Add an empty panel")]),a._v("，如下图所示：")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/add%20empty%20panel.png?raw=true"}}),a._v(" "),t("p",[a._v("Grafana Plugin 支持SQL: Full Customized和SQL: Drop-down List 两种方式，默认是SQL: Full Customized方式。")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/grafana_input_style.png?raw=true"}}),a._v(" "),t("h5",{attrs:{id:"sql-full-customized-输入方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-full-customized-输入方式"}},[a._v("#")]),a._v(" SQL: Full Customized 输入方式")]),a._v(" "),t("p",[a._v("在 SELECT 输入框、FROM 输入框、WHERE输入框、CONTROL输入框中输入内容，其中 WHERE 和 CONTROL 输入框为非必填。")]),a._v(" "),t("p",[a._v("如果一个查询涉及多个表达式，我们可以点击 SELECT 输入框右侧的 "),t("code",[a._v("+")]),a._v(" 来添加 SELECT 子句中的表达式，也可以点击 FROM 输入框右侧的 "),t("code",[a._v("+")]),a._v(" 来添加路径前缀，如下图所示：")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/grafana_input.png?raw=true"}}),a._v(" "),t("p",[a._v("SELECT 输入框中的内容可以是时间序列的后缀，可以是函数或自定义函数，可以是算数表达式，也可以是它们的嵌套表达式。您还可以使用 as 子句来重命名需要显示的结果序列名字。")]),a._v(" "),t("p",[a._v("下面是 SELECT 输入框中一些合法的输入举例：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("s1")])]),a._v(" "),t("li",[t("code",[a._v("top_k(s1, 'k'='1') as top")])]),a._v(" "),t("li",[t("code",[a._v("sin(s1) + cos(s1 + s2)")])]),a._v(" "),t("li",[t("code",[a._v('udf(s1) as "中文别名"')])])]),a._v(" "),t("p",[a._v("FROM 输入框中的内容必须是时间序列的前缀路径，比如 "),t("code",[a._v("root.sg.d")]),a._v("。")]),a._v(" "),t("p",[a._v("WHERE 输入框为非必须填写项目，填写内容应当是查询的过滤条件，比如 "),t("code",[a._v("time > 0")]),a._v("  或者 "),t("code",[a._v("s1 < 1024 and s2 > 1024")]),a._v("。")]),a._v(" "),t("p",[a._v("CONTROL 输入框为非必须填写项目，填写内容应当是控制查询类型、输出格式的特殊子句。其中GROUP BY 输入框支持使用grafana的全局变量来获取当前时间区间变化$__from(起始时间)、$__to(结束时间)，下面是 CONTROL 输入框中一些合法的输入举例：")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("GROUP BY ([$__from, $__to), 1d)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([$__from, $__to),3h,1d)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([$__from, $__to), 1m) FILL (PREVIOUSUNTILLAST)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), LEVEL=1")])]),a._v(" "),t("li",[t("code",[a._v("GROUP BY ([0, 20), 2ms, 3ms), LEVEL=1")])])]),a._v(" "),t("p",[a._v("提示：为了避免OOM问题，不推荐使用select * from root.xx.** 这种语句在Grafana plugin中使用。")]),a._v(" "),t("h5",{attrs:{id:"sql-drop-down-list-输入方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-drop-down-list-输入方式"}},[a._v("#")]),a._v(" SQL: Drop-down List 输入方式")]),a._v(" "),t("p",[a._v("在 TIME-SERIES 选择框中选择一条时间序列、FUNCTION 选择一个函数、SAMPLING INTERVAL、SLIDING STEP、LEVEL、FILL 输入框中输入内容，其中 TIME-SERIESL 为必填项其余为非必填项。")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/grafana_input2.png?raw=true"}}),a._v(" "),t("h4",{attrs:{id:"变量与模板功能的支持"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量与模板功能的支持"}},[a._v("#")]),a._v(" 变量与模板功能的支持")]),a._v(" "),t("p",[a._v("SQL: Full Customized和SQL: Drop-down List两种输入方式都支持 Grafana 的变量与模板功能，下面示例中使用SQL: Full Customized输入方式，SQL: Drop-down List与之类似。")]),a._v(" "),t("p",[a._v("创建一个新的 Panel 后，点击右上角的设置按钮，如下图所示：")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/setconf.png?raw=true"}}),a._v(" "),t("p",[a._v("选择 "),t("code",[a._v("Variables")]),a._v("，点击 "),t("code",[a._v("Add variable")]),a._v(" ，如下图所示：")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/addvaribles.png?raw=true"}}),a._v(" "),t("p",[a._v("示例一：输入 "),t("code",[a._v("Name")]),a._v("，"),t("code",[a._v("Label")]),a._v("，选择Type的"),t("code",[a._v("Query")]),a._v("、在Query 中输入show child paths xx ， 点击 "),t("code",[a._v("Update")]),a._v(" 按钮，如下图所示：")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variblesinput.png?raw=true"}}),a._v(" "),t("p",[a._v("应用 Variables，在 "),t("code",[a._v("grafana panel")]),a._v(" 中输入变量点击 "),t("code",[a._v("save")]),a._v(" 按钮，如下图所示")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/applyvariables.png?raw=true"}}),a._v(" "),t("p",[a._v("示例二：变量嵌套使用，如下图所示\n"),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variblesinput2.png?raw=true"}})]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variblesinput2-1.png?raw=true"}}),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variblesinput2-2.png?raw=true"}}),a._v(" "),t("p",[a._v("示例三：函数变量使用，如下图所示\n"),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variablesinput3.png?raw=true"}})]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variablesinput3-1.png?raw=true"}}),a._v(" "),t("p",[a._v("上图中Name 是变量名称也是将来我们在panel中使用的变量名称，Label是变量的展示名称如果为空就显示Name的变量反之则显示Label的名称，\nType下拉中有Query、Custom、Text box、Constant、DataSource、Interval、Ad hoc filters等这些都可以在IoTDB的Grafana Plugin 中使用\n更加详细介绍用法请查看官方手册(https://grafana.com/docs/grafana/latest/variables/)")]),a._v(" "),t("p",[a._v("除了上面的示例外，还支持下面这些语句:")]),a._v(" "),t("ul",[t("li",[t("p",[t("code",[a._v("show databases")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("show timeseries")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("show child nodes")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("show all ttl")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("show latest timeseries")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("show devices")])])]),a._v(" "),t("li",[t("p",[t("code",[a._v("select xx from root.xxx limit xx 等sql 查询")])])]),a._v(" "),t("li",[t("p",[a._v("提示：如果查询的字段中有布尔类型的数据，会将true转化成1，false转化成0结果值进行显示。")])])]),a._v(" "),t("h4",{attrs:{id:"告警功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#告警功能"}},[a._v("#")]),a._v(" 告警功能")]),a._v(" "),t("p",[a._v("本插件支持 Grafana alert功能。")]),a._v(" "),t("p",[a._v("1、在 Grafana 侧栏中，将光标悬停在"),t("code",[a._v("Alerting")]),a._v("图标上，然后单击"),t("code",[a._v("Notification channels")]),a._v("。")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alerting1.png?raw=true"}}),a._v(" "),t("p",[a._v("2、单击添加频道。")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alerting2.png?raw=true"}}),a._v(" "),t("p",[a._v("3、填写下面描述的字段或选择选项，Type有好多种类型包括DingDing、Email、Slack、WebHook、Prometheus Alertmanager等。\n本次示例Type使用"),t("code",[a._v("Prometheus Alertmanager")]),a._v("，需要提前安装好Prometheus Alertmanager，更多详细的配置及参数介绍请参考官方文档：https://grafana.com/docs/grafana/v8.0/alerting/old-alerting/notifications/。")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alerting3.png?raw=true"}}),a._v(" "),t("p",[a._v("4、点击"),t("code",[a._v("Test")]),a._v("按钮，出现"),t("code",[a._v("Test notification sent")]),a._v("点击"),t("code",[a._v("Save")]),a._v("按钮保存")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alerting4.png?raw=true"}}),a._v(" "),t("p",[a._v("5、创建一个新的 Panel 后，输入查询参数后点击保存然后选择"),t("code",[a._v("Alert")]),a._v("点击"),t("code",[a._v("Create Alert")]),a._v("，如下图所示：")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertpanle1.png?raw=true"}}),a._v(" "),t("p",[a._v("6、填写下面描述的字段或选择选项， 其中"),t("code",[a._v("Name")]),a._v("是规则名称，"),t("code",[a._v("Evaluate every")]),a._v(" 指定调度程序评估警报规则的频率，称为评估间隔，\n"),t("code",[a._v("FOR")]),a._v(" 指定在触发警报通知之前查询需要在多长时间内违反配置的阈值。"),t("code",[a._v("Conditions")]),a._v(" 表示查询条件，可以配置多个组合查询条件。")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertpanle2.jpg?raw=true"}}),a._v(" "),t("p",[a._v("图中的查询条件：avg() OF query(A,5m,now) IS ABOVE -1")]),a._v(" "),t("p",[a._v("avg()控制如何将每个系列的值减少到可以与阈值进行比较的值。单击该函数可将其更改为另一个聚合函数。\nquery(A, 15m, now)，表示从A选项卡执行查询，后两个参数定义时间范围15m，now 表示从15分钟前到现在。\nIS ABOVE -1 定义阈值的类型和阈值。IS ABOVE表示在-1之上，可以单击IS ABOVE更改阈值类型。")]),a._v(" "),t("p",[a._v("提示:警报规则中使用的查询不能包含任何模板变量。目前我们只支持条件之间的AND和OR运算符，它们是串行执行的。\n例如，我们按以下顺序有 3 个条件： 条件：A（计算为：TRUE）或条件：B（计算为：FALSE）和条件：C（计算为：TRUE） 所以结果将计算为（（对或错）和对）=对。\n更多详细的告警规则可以查看官方文档:https://grafana.com/docs/grafana/latest/alerting/old-alerting/create-alerts/")]),a._v(" "),t("p",[a._v("7、点击"),t("code",[a._v("Test rule")]),a._v(" 按钮出现"),t("code",[a._v("firing: true")]),a._v("则配置成功，点击"),t("code",[a._v("save")]),a._v(" 按钮")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertpanel3.png?raw=true"}}),a._v(" "),t("p",[a._v("8、下图为grafana panel 中显示告警")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertpanel4.png?raw=true"}}),a._v(" "),t("p",[a._v("9、查看告警规则")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertPanel5.png?raw=true"}}),a._v(" "),t("p",[a._v("10、在promehthus alertmanager 中查看告警记录")]),a._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/alertpanel6.png?raw=true"}}),a._v(" "),t("h3",{attrs:{id:"更多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更多"}},[a._v("#")]),a._v(" 更多")]),a._v(" "),t("p",[a._v("更多关于 Grafana 操作详情可参看 Grafana 官方文档：http://docs.grafana.org/guides/getting_started/。")])])}),[],!1,null,null,null);t.default=r.exports}}]);