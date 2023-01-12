(window.webpackJsonp=window.webpackJsonp||[]).push([[665],{1069:function(t,v,_){"use strict";_.r(v);var e=_(19),s=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"nifi-iotdb-bundle"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nifi-iotdb-bundle"}},[t._v("#")]),t._v(" nifi-iotdb-bundle")]),t._v(" "),v("h2",{attrs:{id:"apache-nifi简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#apache-nifi简介"}},[t._v("#")]),t._v(" Apache NiFi简介")]),t._v(" "),v("p",[t._v("Apache NiFi 是一个易用的、功能强大的、可靠的数据处理和分发系统。")]),t._v(" "),v("p",[t._v("Apache NiFi 支持强大的、可伸缩的数据路由、转换和系统中介逻辑的有向图。")]),t._v(" "),v("p",[t._v("Apache NiFi 包含以下功能：")]),t._v(" "),v("ul",[v("li",[t._v("基于浏览器的用户接口：\n"),v("ul",[v("li",[t._v("设计、控制、反馈和监控的无缝体验")])])]),t._v(" "),v("li",[t._v("数据起源跟踪\n"),v("ul",[v("li",[t._v("从头到尾完整的信息族谱")])])]),t._v(" "),v("li",[t._v("丰富的配置\n"),v("ul",[v("li",[t._v("丢失容忍和保证交付")]),t._v(" "),v("li",[t._v("低延迟和高吞吐")]),t._v(" "),v("li",[t._v("动态优先级策略")]),t._v(" "),v("li",[t._v("运行时可以修改流配置")]),t._v(" "),v("li",[t._v("反向压力控制")])])]),t._v(" "),v("li",[t._v("扩展设计\n"),v("ul",[v("li",[t._v("用于定制 processors 和 services 的组件体系结构")]),t._v(" "),v("li",[t._v("快速开发和迭代测试")])])]),t._v(" "),v("li",[t._v("安全会话\n"),v("ul",[v("li",[t._v("带有可配置认证策略的 HTTPS 协议")]),t._v(" "),v("li",[t._v("多租户授权和策略管理")]),t._v(" "),v("li",[t._v("包括TLS和SSH的加密通信的标准协议")])])])]),t._v(" "),v("h2",{attrs:{id:"putiotdbrecord"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#putiotdbrecord"}},[t._v("#")]),t._v(" PutIoTDBRecord")]),t._v(" "),v("p",[t._v("这是一个用于数据写入的处理器。它使用配置的 Record Reader 将传入 FlowFile 的内容读取为单独的记录，并使用本机接口将它们写入 Apache IoTDB。")]),t._v(" "),v("h3",{attrs:{id:"putiotdbrecord的配置项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#putiotdbrecord的配置项"}},[t._v("#")]),t._v(" PutIoTDBRecord的配置项")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("是否必填")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Host")]),t._v(" "),v("td",[t._v("IoTDB 的主机名")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("Port")]),t._v(" "),v("td",[t._v("IoTDB 的端口")]),t._v(" "),v("td",[t._v("6667")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("Username")]),t._v(" "),v("td",[t._v("IoTDB 的用户名")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("Password")]),t._v(" "),v("td",[t._v("IoTDB 的密码")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("Prefix")]),t._v(" "),v("td",[t._v("将被写入IoTDB的数据的tsName前缀 以root. 开头 "),v("br"),t._v(" 可以使用Nifi expression language做动态替换.")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("Record Reader")]),t._v(" "),v("td",[t._v("指定一个 Record Reader controller service 来解析数据，并且推断数据格式。")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("Schema")]),t._v(" "),v("td",[t._v("IoTDB 需要的 schema 不能很好的被 NiFi 支持，因此你可以在这里自定义 schema。"),v("br"),t._v("除此之外，你可以通过这个方式设置编码和压缩类型。如果你没有设置这个配置，就会使用 Record Reader 推断的 schema。"),v("br"),t._v("这个配置可以通过 Attributes 的表达式来更新。")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("Aligned")]),t._v(" "),v("td",[t._v("是否使用 aligned 接口？"),v("br"),t._v("这个配置可以通过 Attributes 的表达式来更新。")]),t._v(" "),v("td",[t._v("false")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("MaxRowNumber")]),t._v(" "),v("td",[t._v("指定 tablet 的最大行数。"),v("br"),t._v("这个配置可以通过 Attributes 的表达式来更新。")]),t._v(" "),v("td",[t._v("1024")]),t._v(" "),v("td",[t._v("false")])])])]),t._v(" "),v("h3",{attrs:{id:"flowfile-的推断数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flowfile-的推断数据类型"}},[t._v("#")]),t._v(" Flowfile 的推断数据类型")]),t._v(" "),v("p",[t._v("如果要使用推断类型，需要注意以下几点：")]),t._v(" "),v("ol",[v("li",[t._v("输入的 flowfile 需要能被 "),v("code",[t._v("Record Reader")]),t._v(" 读取。")]),t._v(" "),v("li",[t._v("flowfile的 schema 中必须包含 "),v("code",[t._v("Time")]),t._v(" 列，而且 "),v("code",[t._v("Time")]),t._v(" 列必须是第一列。")]),t._v(" "),v("li",[v("code",[t._v("Time")]),t._v("的数据类型只能是 "),v("code",[t._v("STRING")]),t._v("  或者  "),v("code",[t._v("LONG")]),t._v("。")]),t._v(" "),v("li",[t._v("除"),v("code",[t._v("Time")]),t._v(" 以外的列必须以 "),v("code",[t._v("root.")]),t._v(" 开头。")]),t._v(" "),v("li",[t._v("支持的数据类型有： "),v("code",[t._v("INT")]),t._v("，"),v("code",[t._v("LONG")]),t._v("， "),v("code",[t._v("FLOAT")]),t._v("， "),v("code",[t._v("DOUBLE")]),t._v("， "),v("code",[t._v("BOOLEAN")]),t._v("， "),v("code",[t._v("TEXT")]),t._v("。")])]),t._v(" "),v("h3",{attrs:{id:"通过配置项自定义-schema"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#通过配置项自定义-schema"}},[t._v("#")]),t._v(" 通过配置项自定义 schema")]),t._v(" "),v("p",[t._v("如上所述，通过配置项来自定义 schema 比起推断的 schema来说，是一种更加灵活和强大的方式。")]),t._v(" "),v("p",[v("code",[t._v("Schema")]),t._v(" 配置项的解构如下:")]),t._v(" "),v("div",{staticClass:"language-json line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-json"}},[v("code",[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeType"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LONG"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fields"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tsName"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s1"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dataType"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INT32"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encoding"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RLE"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compressionType"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GZIP"')]),t._v("\n   "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tsName"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s2"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dataType"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INT64"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encoding"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RLE"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compressionType"')]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GZIP"')]),t._v("\n   "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br"),v("span",{staticClass:"line-number"},[t._v("10")]),v("br"),v("span",{staticClass:"line-number"},[t._v("11")]),v("br"),v("span",{staticClass:"line-number"},[t._v("12")]),v("br"),v("span",{staticClass:"line-number"},[t._v("13")]),v("br"),v("span",{staticClass:"line-number"},[t._v("14")]),v("br")])]),v("p",[v("strong",[t._v("注意")])]),t._v(" "),v("ol",[v("li",[t._v("flowfile 的第一列数据必须为 "),v("code",[t._v("Time")]),t._v("。剩下的必须与 "),v("code",[t._v("fields")]),t._v(" 配置中保持一样的顺序。")]),t._v(" "),v("li",[t._v("定义 shema 的 JSON 中必须包含 "),v("code",[t._v("timeType")]),t._v(" and "),v("code",[t._v("fields")]),t._v(" 这两项。")]),t._v(" "),v("li",[v("code",[t._v("timeType")]),t._v(" 只支持 "),v("code",[t._v("LONG")]),t._v(" 和 "),v("code",[t._v("STRING")]),t._v(" 这两个选项。")]),t._v(" "),v("li",[v("code",[t._v("tsName")]),t._v(" 和 "),v("code",[t._v("dataType")]),t._v(" 这两项必须被设置。")]),t._v(" "),v("li",[t._v("当数据插入IoTDB时，Prefix属性会被添加到 tsName以作为插入的字段名。")]),t._v(" "),v("li",[t._v("支持的 "),v("code",[t._v("dataTypes")]),t._v(" 有："),v("code",[t._v("INT32")]),t._v("， "),v("code",[t._v("INT64")]),t._v("， "),v("code",[t._v("FLOAT")]),t._v("， "),v("code",[t._v("DOUBLE")]),t._v("， "),v("code",[t._v("BOOLEAN")]),t._v("， "),v("code",[t._v("TEXT")]),t._v("。")]),t._v(" "),v("li",[t._v("支持的 "),v("code",[t._v("encoding")]),t._v(" 有： "),v("code",[t._v("PLAIN")]),t._v("， "),v("code",[t._v("DICTIONARY")]),t._v("， "),v("code",[t._v("RLE")]),t._v("， "),v("code",[t._v("DIFF")]),t._v("， "),v("code",[t._v("TS_2DIFF")]),t._v("， "),v("code",[t._v("BITMAP")]),t._v("， "),v("code",[t._v("GORILLA_V1")]),t._v("， "),v("code",[t._v("REGULAR")]),t._v("， "),v("code",[t._v("GORILLA")]),t._v("。")]),t._v(" "),v("li",[t._v("支持的 "),v("code",[t._v("compressionType")]),t._v(" 有： "),v("code",[t._v("UNCOMPRESSED")]),t._v("， "),v("code",[t._v("SNAPPY")]),t._v("， "),v("code",[t._v("GZIP")]),t._v("， "),v("code",[t._v("LZO")]),t._v("， "),v("code",[t._v("SDT")]),t._v("， "),v("code",[t._v("PAA")]),t._v("， "),v("code",[t._v("PLA")]),t._v("， "),v("code",[t._v("LZ4")]),t._v("。")])]),t._v(" "),v("h2",{attrs:{id:"relationships"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#relationships"}},[t._v("#")]),t._v(" Relationships")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("relationship")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("success")]),t._v(" "),v("td",[t._v("数据能被正确的写入。")])]),t._v(" "),v("tr",[v("td",[t._v("failure")]),t._v(" "),v("td",[t._v("schema 或者数据有异常。")])])])]),t._v(" "),v("h2",{attrs:{id:"queryiotdbrecord"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#queryiotdbrecord"}},[t._v("#")]),t._v(" QueryIoTDBRecord")]),t._v(" "),v("p",[t._v("这是一个用于数据读取的处理器。它通过读取 FlowFile 的内容中的SQL 查询来对IoTDB的原生接口进行访问，并将查询结果用Record Writer写入 flowfile。")]),t._v(" "),v("h3",{attrs:{id:"queryiotdbrecord的配置项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#queryiotdbrecord的配置项"}},[t._v("#")]),t._v(" QueryIoTDBRecord的配置项")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("配置项")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("默认值")]),t._v(" "),v("th",[t._v("是否必填")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Host")]),t._v(" "),v("td",[t._v("IoTDB 的主机名")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("Port")]),t._v(" "),v("td",[t._v("IoTDB 的端口")]),t._v(" "),v("td",[t._v("6667")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("Username")]),t._v(" "),v("td",[t._v("IoTDB 的用户名")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("Password")]),t._v(" "),v("td",[t._v("IoTDB 的密码")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("Record Writer")]),t._v(" "),v("td",[t._v("指定一个 Record Writer controller service 来写入数据。")]),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[t._v("iotdb-query")]),t._v(" "),v("td",[t._v("需要执行的IoTDB query "),v("bbr",[t._v("。 Note: 如果有连入侧的连接那么查询会从FlowFile的内容中提取，否则使用当前配置的属性")])],1),t._v(" "),v("td",[t._v("null")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("iotdb-query-chunk-size")]),t._v(" "),v("td",[t._v("返回的结果可以进行分块，数据流中会返回一批按设置大小切分的数据，而不是一个单一的响应. 分块查询可以返回无限量的行。 注意: 数据分块只有在设置不为0时启用")]),t._v(" "),v("td",[t._v("0")]),t._v(" "),v("td",[t._v("false")])])])]),t._v(" "),v("h2",{attrs:{id:"relationships-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#relationships-2"}},[t._v("#")]),t._v(" Relationships")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("relationship")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("success")]),t._v(" "),v("td",[t._v("数据能被正确的写入。")])]),t._v(" "),v("tr",[v("td",[t._v("failure")]),t._v(" "),v("td",[t._v("schema 或者数据有异常。")])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);