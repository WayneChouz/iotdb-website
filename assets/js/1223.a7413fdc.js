(window.webpackJsonp=window.webpackJsonp||[]).push([[1223],{1627:function(t,s,a){"use strict";a.r(s);var r=a(19),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"管理触发器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理触发器"}},[t._v("#")]),t._v(" 管理触发器")]),t._v(" "),s("p",[t._v("您可以通过 SQL 语句注册和卸载一个触发器实例，您也可以通过 SQL 语句查询到所有已经注册的触发器。")]),t._v(" "),s("p",[s("strong",[t._v("我们建议您在注册触发器时停止写入。")])]),t._v(" "),s("h2",{attrs:{id:"注册触发器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册触发器"}},[t._v("#")]),t._v(" 注册触发器")]),t._v(" "),s("p",[t._v("触发器可以注册在任意路径模式上。被注册有触发器的序列将会被触发器侦听，当序列上有数据变动时，触发器中对应的触发方法将会被调用。")]),t._v(" "),s("p",[t._v("注册一个触发器可以按如下流程进行：")]),t._v(" "),s("ol",[s("li",[t._v("按照编写触发器章节的说明，实现一个完整的 Trigger 类，假定这个类的全类名为 "),s("code",[t._v("org.apache.iotdb.trigger.ClusterAlertingExample")])]),t._v(" "),s("li",[t._v("将项目打成 JAR 包。")]),t._v(" "),s("li",[t._v("使用 SQL 语句注册该触发器。注册过程中会仅只会调用一次触发器的 "),s("code",[t._v("validate")]),t._v(" 和 "),s("code",[t._v("onCreate")]),t._v(" 接口，具体请参考编写触发器章节。")])]),t._v(" "),s("p",[t._v("完整 SQL 语法如下：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create Trigger")]),t._v("\ncreateTrigger\n    : "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" triggerType "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" triggerName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("identifier triggerEventClause "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" pathPattern "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("STRING_LITERAL uriClause? triggerAttributeClause?\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntriggerType\n    : STATELESS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" STATEFUL\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntriggerEventClause\n    : "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BEFORE "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AFTER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nuriClause\n    : "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" URI uri\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nuri\n    : STRING_LITERAL\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntriggerAttributeClause\n    : "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" LR_BRACKET triggerAttribute "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COMMA triggerAttribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" RR_BRACKET\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntriggerAttribute\n    : "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("attributeKey operator_eq "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("attributeValue\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br")])]),s("p",[t._v("下面对 SQL 语法进行说明，您可以结合使用说明章节进行理解：")]),t._v(" "),s("ul",[s("li",[t._v("triggerName：触发器 ID，该 ID 是全局唯一的，用于区分不同触发器，大小写敏感。")]),t._v(" "),s("li",[t._v("triggerType：触发器类型，分为无状态（STATELESS）和有状态（STATEFUL）两类。")]),t._v(" "),s("li",[t._v("triggerEventClause：触发时机，目前仅支持写入前（BEFORE INSERT）和写入后（AFTER INSERT）两种。")]),t._v(" "),s("li",[t._v("pathPattern：触发器侦听的路径模式，可以包含通配符 * 和 **。")]),t._v(" "),s("li",[t._v("className：触发器实现类的类名。")]),t._v(" "),s("li",[t._v("uriClause：可选项，当不指定该选项时，我们默认 DBA 已经在各个 DataNode 节点的 trigger_root_dir 目录（配置项，默认为 IOTDB_HOME/ext/trigger）下放置好创建该触发器需要的 JAR 包。当指定该选项时，我们会将该 URI 对应的文件资源下载并分发到各 DataNode 的 trigger_root_dir/install 目录下。")]),t._v(" "),s("li",[t._v("triggerAttributeClause：用于指定触发器实例创建时需要设置的参数，SQL 语法中该部分是可选项。")])]),t._v(" "),s("p",[t._v("下面是一个帮助您理解的 SQL 语句示例：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" STATELESS "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" triggerTest\nBEFORE "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.apache.iotdb.trigger.ClusterAlertingExample'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" URI "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://jar/ClusterAlertingExample.jar'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"limit"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("上述 SQL 语句创建了一个名为 triggerTest 的触发器：")]),t._v(" "),s("ul",[s("li",[t._v("该触发器是无状态的（STATELESS）")]),t._v(" "),s("li",[t._v("在写入前触发（BEFORE INSERT）")]),t._v(" "),s("li",[t._v("该触发器侦听路径模式为 root.sg.**")]),t._v(" "),s("li",[t._v("所编写的触发器类名为 org.apache.iotdb.trigger.ClusterAlertingExample")]),t._v(" "),s("li",[t._v("JAR 包的 URI 为 http://jar/ClusterAlertingExample.jar")]),t._v(" "),s("li",[t._v("创建该触发器实例时会传入 name 和 limit 两个参数。")])]),t._v(" "),s("h2",{attrs:{id:"卸载触发器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载触发器"}},[t._v("#")]),t._v(" 卸载触发器")]),t._v(" "),s("p",[t._v("可以通过指定触发器 ID 的方式卸载触发器，卸载触发器的过程中会且仅会调用一次触发器的 "),s("code",[t._v("onDrop")]),t._v(" 接口。")]),t._v(" "),s("p",[t._v("卸载触发器的 SQL 语法如下：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Drop Trigger")]),t._v("\ndropTrigger\n  : "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" triggerName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("identifier\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("下面是示例语句：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" triggerTest1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("上述语句将会卸载 ID 为 triggerTest1 的触发器。")]),t._v(" "),s("h2",{attrs:{id:"查询触发器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询触发器"}},[t._v("#")]),t._v(" 查询触发器")]),t._v(" "),s("p",[t._v("可以通过 SQL 语句查询集群中存在的触发器的信息。SQL 语法如下：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" TRIGGERS\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("该语句的结果集格式如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("TriggerName")]),t._v(" "),s("th",[t._v("Event")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("State")]),t._v(" "),s("th",[t._v("PathPattern")]),t._v(" "),s("th",[t._v("ClassName")]),t._v(" "),s("th",[t._v("NodeId")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("triggerTest1")]),t._v(" "),s("td",[t._v("BEFORE_INSERT / AFTER_INSERT")]),t._v(" "),s("td",[t._v("STATELESS / STATEFUL")]),t._v(" "),s("td",[t._v("INACTIVE / ACTIVE / DROPPING / TRANSFFERING")]),t._v(" "),s("td",[t._v("root.**")]),t._v(" "),s("td",[t._v("org.apache.iotdb.trigger.TriggerExample")]),t._v(" "),s("td",[t._v("ALL(STATELESS) / DATA_NODE_ID(STATEFUL)")])])])]),t._v(" "),s("h2",{attrs:{id:"触发器状态说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触发器状态说明"}},[t._v("#")]),t._v(" 触发器状态说明")]),t._v(" "),s("p",[t._v("在集群中注册以及卸载触发器的过程中，我们维护了触发器的状态，下面是对这些状态的说明：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("状态")]),t._v(" "),s("th",[t._v("描述")]),t._v(" "),s("th",[t._v("是否建议写入进行")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("INACTIVE")]),t._v(" "),s("td",[t._v("执行 "),s("code",[t._v("CREATE TRIGGER")]),t._v(" 的中间状态，集群刚在 ConfigNode 上记录该触发器的信息，还未在任何 DataNode 上激活该触发器")]),t._v(" "),s("td",[t._v("否")])]),t._v(" "),s("tr",[s("td",[t._v("ACTIVE")]),t._v(" "),s("td",[t._v("执行 "),s("code",[t._v("CREATE TRIGGE")]),t._v(" 成功后的状态，集群所有 DataNode 上的该触发器都已经可用")]),t._v(" "),s("td",[t._v("是")])]),t._v(" "),s("tr",[s("td",[t._v("DROPPING")]),t._v(" "),s("td",[t._v("执行 "),s("code",[t._v("DROP TRIGGER")]),t._v(" 的中间状态，集群正处在卸载该触发器的过程中")]),t._v(" "),s("td",[t._v("否")])]),t._v(" "),s("tr",[s("td",[t._v("TRANSFERRING")]),t._v(" "),s("td",[t._v("集群正在进行该触发器实例位置的迁移")]),t._v(" "),s("td",[t._v("否")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);