(window.webpackJsonp=window.webpackJsonp||[]).push([[781],{1187:function(a,s,t){"use strict";t.r(s);var r=t(19),n=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"iotdb-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana"}},[a._v("#")]),a._v(" IoTDB-Grafana")]),a._v(" "),s("h2",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[a._v("#")]),a._v(" 概览")]),a._v(" "),s("ul",[s("li",[a._v("IoTDB-Grafana\n"),s("ul",[s("li",[a._v("Grafana的安装与部署\n"),s("ul",[s("li",[a._v("安装")]),a._v(" "),s("li",[a._v("simple-json-datasource数据源插件安装")]),a._v(" "),s("li",[a._v("启动Grafana")])])]),a._v(" "),s("li",[a._v("IoTDB安装")]),a._v(" "),s("li",[a._v("IoTDB-Grafana连接器安装\n"),s("ul",[s("li",[a._v("启动IoTDB-Grafana")])])]),a._v(" "),s("li",[a._v("使用Grafana\n"),s("ul",[s("li",[a._v("添加IoTDB数据源")]),a._v(" "),s("li",[a._v("操作Grafana")])])])])])]),a._v(" "),s("p",[a._v("Grafana是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。Grafana支持Graphite，InfluxDB等国际主流时序时序数据库作为数据源。在IoTDB项目中，我们开发了Grafana展现IoTDB中时序数据的连接器IoTDB-Grafana，为您提供使用Grafana展示IoTDB数据库中的时序数据的可视化方法。")]),a._v(" "),s("h2",{attrs:{id:"grafana的安装与部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grafana的安装与部署"}},[a._v("#")]),a._v(" Grafana的安装与部署")]),a._v(" "),s("h3",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("ul",[s("li",[a._v("Grafana组件下载地址：https://grafana.com/grafana/download")]),a._v(" "),s("li",[a._v("版本 >= 4.4.1")])]),a._v(" "),s("h3",{attrs:{id:"simple-json-datasource数据源插件安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-json-datasource数据源插件安装"}},[a._v("#")]),a._v(" simple-json-datasource数据源插件安装")]),a._v(" "),s("ul",[s("li",[a._v("插件名称: simple-json-datasource")]),a._v(" "),s("li",[a._v("下载地址: https://github.com/grafana/simple-json-datasource")])]),a._v(" "),s("p",[a._v("具体下载方法是：到Grafana的插件目录中："),s("code",[a._v("{Grafana文件目录}\\data\\plugins\\")]),a._v("（Windows系统，启动Grafana后会自动创建"),s("code",[a._v("data\\plugins")]),a._v("目录）或"),s("code",[a._v("/var/lib/grafana/plugins")]),a._v(" （Linux系统，plugins目录需要手动创建）或"),s("code",[a._v("/usr/local/var/lib/grafana/plugins")]),a._v("（MacOS系统，具体位置参看使用"),s("code",[a._v("brew install")]),a._v("安装Grafana后命令行给出的位置提示。")]),a._v(" "),s("p",[a._v("执行下面的命令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > git clone https://github.com/grafana/simple-json-datasource.git\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("然后重启Grafana服务器，在浏览器中登录Grafana，在“Add data source”页面中“Type”选项出现“SimpleJson”即为安装成功。")]),a._v(" "),s("h3",{attrs:{id:"启动grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动grafana"}},[a._v("#")]),a._v(" 启动Grafana")]),a._v(" "),s("p",[a._v("进入Grafana的安装目录，使用以下命令启动Grafana：")]),a._v(" "),s("ul",[s("li",[a._v("Windows系统：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > bin\\grafana-server.exe\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("Linux系统：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > sudo service grafana-server start\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("MacOS系统：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > grafana-server --config=/usr/local/etc/grafana/grafana.ini --homepath /usr/local/share/grafana cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"iotdb安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb安装"}},[a._v("#")]),a._v(" IoTDB安装")]),a._v(" "),s("p",[a._v("参见"),s("a",{attrs:{href:"https://github.com/apache/incubator-iotdb",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/apache/incubator-iotdb"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"iotdb-grafana连接器安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana连接器安装"}},[a._v("#")]),a._v(" IoTDB-Grafana连接器安装")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/incubator-iotdb.git\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"启动iotdb-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动iotdb-grafana"}},[a._v("#")]),a._v(" 启动IoTDB-Grafana")]),a._v(" "),s("h4",{attrs:{id:"方案一-适合开发者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案一-适合开发者"}},[a._v("#")]),a._v(" 方案一（适合开发者）")]),a._v(" "),s("p",[a._v("导入整个项目，maven依赖安装完后，直接运行"),s("code",[a._v("incubatoriotdb/grafana/rc/main/java/org/apache/iotdb/web/grafana")]),a._v("目录下"),s("code",[a._v("TsfileWebDemoApplication.java")]),a._v("，这个grafana连接器采用springboot开发")]),a._v(" "),s("h4",{attrs:{id:"方案二-适合使用者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案二-适合使用者"}},[a._v("#")]),a._v(" 方案二（适合使用者）")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" incubator-iotdb\nmvn clean package "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pl")]),a._v(" grafana "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-am")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dmaven.test.skip")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" grafana/target\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" iotdb-grafana-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".war\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("   ____          _            __ _ _\n /"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / ___"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '")]),a._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_| | '")]),a._v("_ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/ _` "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/  ___"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  '  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("____"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" .__"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("__, "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" / / / /\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("___/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/_/_/_/\n :: Spring Boot ::        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v1.5.4.RELEASE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("如果您需要配置属性，将"),s("code",[a._v("grafana/src/main/resources/application.properties")]),a._v("移动到war包同级目录下（"),s("code",[a._v("grafana/target")]),a._v("）")]),a._v(" "),s("h2",{attrs:{id:"使用grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用grafana"}},[a._v("#")]),a._v(" 使用Grafana")]),a._v(" "),s("p",[a._v("Grafana以网页的dashboard形式为您展示数据，在使用时请您打开浏览器，访问http://<ip>:<port>")]),a._v(" "),s("p",[a._v("默认地址为http://localhost:3000/")]),a._v(" "),s("p",[a._v("注：IP为您的Grafana所在的服务器IP，Port为Grafana的运行端口（默认3000）。默认登录的用户名和密码都是“admin”。")]),a._v(" "),s("h3",{attrs:{id:"添加iotdb数据源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加iotdb数据源"}},[a._v("#")]),a._v(" 添加IoTDB数据源")]),a._v(" "),s("p",[a._v("点击左上角的“Grafana”图标，选择"),s("code",[a._v("Data Source")]),a._v("选项，然后再点击"),s("code",[a._v("Add data source")]),a._v("。\n"),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"}})]),a._v(" "),s("p",[a._v("在编辑数据源的时候，"),s("code",[a._v("Type")]),a._v("一栏选择"),s("code",[a._v("Simplejson")]),a._v("，"),s("code",[a._v("URL")]),a._v("一栏填写http://<ip>:<port>，IP为您的IoTDB-Grafana连接器所在的服务器IP，Port为运行端口（默认8888）。之后确保IoTDB已经启动，点击“Save & Test”，出现“Data Source is working”提示表示配置成功。\n"),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"}})]),a._v(" "),s("h3",{attrs:{id:"操作grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作grafana"}},[a._v("#")]),a._v(" 操作Grafana")]),a._v(" "),s("p",[a._v("进入Grafana可视化页面后，可以选择添加时间序列，如图 6.9。您也可以按照Grafana官方文档进行相应的操作，详情可参看Grafana官方文档：http://docs.grafana.org/guides/getting_started/。")]),a._v(" "),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"}}),a._v(" "),s("h2",{attrs:{id:"配置grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置grafana"}},[a._v("#")]),a._v(" 配置grafana")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('# IoTDB的IP和端口\nspring.datasource.url=jdbc:iotdb://127.0.0.1:6667/\nspring.datasource.username=root\nspring.datasource.password=root\nspring.datasource.driver-class-name=org.apache.iotdb.jdbc.IoTDBDriver\nserver.port=8888\n# Use this value to set timestamp precision as "ms", "us" or "ns", which must to be same with the timestamp\n# precision of Apache IoTDB engine.\ntimestamp_precision=ms\n\n# 是否开启降采样\nisDownSampling=true\n# 默认采样interval\ninterval=1m\n# 用于对连续数据(int, long, float, double)进行降采样的聚合函数\n# COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MAX_VALUE, AVG, MIN_TIME, MIN_VALUE, NOW, SUM\ncontinuous_data_function=AVG\n# 用于对离散数据(boolean, string)进行降采样的聚合函数\n# COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MIN_TIME, NOW\ndiscrete_data_function=LAST_VALUE\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("p",[a._v("其中interval具体配置信息如下")]),a._v(" "),s("p",[a._v("<1h: no sampling")]),a._v(" "),s("p",[a._v("1h~1d : intervals = 1m")]),a._v(" "),s("p",[a._v("1d~30d:intervals = 1h")]),a._v(" "),s("p",[a._v(">30d：intervals = 1d")]),a._v(" "),s("p",[a._v("配置完后，请重新运行war包")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java -jar iotdb-grafana-{version}.war\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);