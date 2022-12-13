(window.webpackJsonp=window.webpackJsonp||[]).push([[670],{1071:function(t,e,a){"use strict";a.r(e);var i=a(19),l=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("在IoTDB服务启动时，通过加载日志文件"),e("code",[t._v("mlog.bin")]),t._v("组织元数据信息，并将结果长期持有在内存中；随着元数据的不断增长，内存会持续上涨；为支持海量元数据场景下，内存在可控范围内波动，我们提供了基于rocksDB的元数据存储方式。")]),t._v(" "),e("h1",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("p",[t._v("首先使用下面的命令将 "),e("code",[t._v("schema-engine-rocksdb")]),t._v(" 打包")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("mvn clean package "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-pl")]),t._v(" schema-engine-rocksdb "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-am")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-DskipTests")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("命令运行结束后，在其 target/schema-engine-rocksdb 中会有一个 lib 文件夹和 conf 文件夹。将 conf 文件夹下的文件拷贝到 server 的 conf 文件夹中，将 lib 文件夹下的文件也拷贝到\nserver 的 lib 的文件夹中。")]),t._v(" "),e("p",[t._v("在系统配置文件"),e("code",[t._v("iotdb-datanode.properties")]),t._v("中，将配置项"),e("code",[t._v("schema_engine_mode")]),t._v("修改为"),e("code",[t._v("Rocksdb_based")]),t._v("， 如：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("####################\n### Schema Engine Configuration\n####################\n# Choose the mode of schema engine. The value could be Memory,Schema_File and Rocksdb_based. If the provided value doesn't match any pre-defined value, Memory mode will be used as default.\n# Datatype: string\nschema_engine_mode=Rocksdb_based\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("当指定rocksdb作为元数据的存储方式时，我们开放了rocksdb相关的配置参数，您可以通过修改配置文件"),e("code",[t._v("schema-rocksdb.properties")]),t._v("，根据自己的需求，进行合理的参数调整，例如查询的缓存等。如没有特殊需求，使用默认值即可。")]),t._v(" "),e("h1",{attrs:{id:"功能支持说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能支持说明"}},[t._v("#")]),t._v(" 功能支持说明")]),t._v(" "),e("p",[t._v("该模块仍在不断完善中，部分功能暂不支持，功能模块支持情况如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("支持情况")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("时间序列增删")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("路径通配符（* 及 **）查询")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tag增删")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("对齐时间序列")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("节点名称(*)通配")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("不支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("元数据模板template")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("不支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("tag索引")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("不支持")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("continuous query")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("不支持")])])])]),t._v(" "),e("h1",{attrs:{id:"附-所有接口支持情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附-所有接口支持情况"}},[t._v("#")]),t._v(" 附: 所有接口支持情况")]),t._v(" "),e("p",[t._v("外部接口，即客户端可以感知到，相关sql不支持；")]),t._v(" "),e("p",[t._v("内部接口，即服务内部的其他模块调用逻辑，与外部sql无直接依赖关系；")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("接口名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"right"}},[t._v("接口类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("支持情况")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createTimeseries")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("createAlignedTimeSeries")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("showTimeseries")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("部分支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持LATEST")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("changeAlias")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("upsertTagsAndAttributes")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("addAttributes")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("addTags")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("dropTagsOrAttributes")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("setTagsOrAttributesValue")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("renameTagOrAttributeKey")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("*template")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("*trigger")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("外部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("deleteSchemaRegion")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("autoCreateDeviceMNode")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("isPathExist")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getAllTimeseriesCount")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getDevicesNum")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getNodesCountInGivenLevel")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("有条件支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("路径不支持通配")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getMeasurementCountGroupByLevel")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getNodesListInGivenLevel")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("有条件支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("路径不支持通配")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getChildNodePathInNextLevel")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("有条件支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("路径不支持通配")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getChildNodeNameInNextLevel")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("有条件支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("路径不支持通配")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getBelongedDevices")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getMatchedDevices")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getMeasurementPaths")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getMeasurementPathsWithAlias")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getAllMeasurementByDevicePath")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getDeviceNode")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getMeasurementMNodes")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("getSeriesSchemasAndReadLockDevice")]),t._v(" "),e("td",{staticStyle:{"text-align":"right"}},[t._v("内部接口")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("支持")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])])])}),[],!1,null,null,null);e.default=l.exports}}]);