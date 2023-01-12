(window.webpackJsonp=window.webpackJsonp||[]).push([[915],{1319:function(s,e,n){"use strict";n.r(e);var t=n(19),a=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"通信服务协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通信服务协议"}},[s._v("#")]),s._v(" 通信服务协议")]),s._v(" "),e("h3",{attrs:{id:"thrift-rpc-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thrift-rpc-接口"}},[s._v("#")]),s._v(" Thrift rpc 接口")]),s._v(" "),e("h4",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),e("p",[s._v("Thrift 是一个远程方法调用软件框架，用来进行可扩展且跨语言的服务的开发。\n它结合了功能强大的软件堆栈和代码生成引擎，\n以构建在 C++, Java, Go,Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, and OCaml 这些编程语言间无缝结合的、高效的服务。")]),s._v(" "),e("p",[s._v("IoTDB 服务端和客户端之间使用 thrift 进行通信，实际使用中建议使用 IoTDB 提供的原生客户端封装：\nSession 或 Session Pool。如有特殊需要，您也可以直接针对 RPC 接口进行编程")]),s._v(" "),e("p",[s._v("默认 IoTDB 服务端使用 6667 端口作为 RPC 通信端口，可修改配置项中的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("rpc_port=6667\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("更改默认接口")]),s._v(" "),e("h4",{attrs:{id:"rpc-接口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rpc-接口"}},[s._v("#")]),s._v(" rpc 接口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 打开一个 session\nTSOpenSessionResp openSession(1:TSOpenSessionReq req);\n\n// 关闭一个 session\nTSStatus closeSession(1:TSCloseSessionReq req);\n\n// 执行一条 SQL 语句\nTSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);\n\n// 批量执行 SQL 语句\nTSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);\n\n// 执行查询 SQL 语句\nTSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);\n\n// 执行插入、删除 SQL 语句\nTSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);\n\n// 向服务器取下一批查询结果\nTSFetchResultsResp fetchResults(1:TSFetchResultsReq req)\n\n// 获取元数据\nTSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)\n\n// 取消某次查询操作\nTSStatus cancelOperation(1:TSCancelOperationReq req);\n\n// 关闭查询操作数据集，释放资源\nTSStatus closeOperation(1:TSCloseOperationReq req);\n\n// 获取时区信息\nTSGetTimeZoneResp getTimeZone(1:i64 sessionId);\n\n// 设置时区\nTSStatus setTimeZone(1:TSSetTimeZoneReq req);\n\n// 获取服务端配置\nServerProperties getProperties();\n\n// 设置存储组\nTSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);\n\n// 创建时间序列\nTSStatus createTimeseries(1:TSCreateTimeseriesReq req);\n\n// 创建多条时间序列\nTSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);\n\n// 删除时间序列\nTSStatus deleteTimeseries(1:i64 sessionId, 2:list<string> path)\n\n// 删除存储组\nTSStatus deleteStorageGroups(1:i64 sessionId, 2:list<string> storageGroup);\n\n// 按行插入数据\nTSStatus insertRecord(1:TSInsertRecordReq req);\n\n// 按 String 格式插入一条数据\nTSStatus insertStringRecord(1:TSInsertStringRecordReq req);\n\n// 按列插入数据\nTSStatus insertTablet(1:TSInsertTabletReq req);\n\n// 按列批量插入数据\nTSStatus insertTablets(1:TSInsertTabletsReq req);\n\n// 按行批量插入数据\nTSStatus insertRecords(1:TSInsertRecordsReq req);\n\n// 按行批量插入同属于某个设备的数据\nTSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);\n\n// 按 String 格式批量按行插入数据\nTSStatus insertStringRecords(1:TSInsertStringRecordsReq req);\n\n// 测试按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertTablet(1:TSInsertTabletReq req);\n\n// 测试批量按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertTablets(1:TSInsertTabletsReq req);\n\n// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertRecord(1:TSInsertRecordReq req);\n\n// 测试按 String 格式按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);\n\n// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertRecords(1:TSInsertRecordsReq req);\n\n// 测试按行批量插入同属于某个设备的数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);\n\n// 测试按 String 格式批量按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟\nTSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);\n\n// 删除数据\nTSStatus deleteData(1:TSDeleteDataReq req);\n\n// 执行原始数据查询\nTSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);\n\n// 向服务器申请一个查询语句 ID\ni64 requestStatementId(1:i64 sessionId);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br"),e("span",{staticClass:"line-number"},[s._v("94")]),e("br"),e("span",{staticClass:"line-number"},[s._v("95")]),e("br"),e("span",{staticClass:"line-number"},[s._v("96")]),e("br"),e("span",{staticClass:"line-number"},[s._v("97")]),e("br"),e("span",{staticClass:"line-number"},[s._v("98")]),e("br"),e("span",{staticClass:"line-number"},[s._v("99")]),e("br"),e("span",{staticClass:"line-number"},[s._v("100")]),e("br"),e("span",{staticClass:"line-number"},[s._v("101")]),e("br"),e("span",{staticClass:"line-number"},[s._v("102")]),e("br"),e("span",{staticClass:"line-number"},[s._v("103")]),e("br"),e("span",{staticClass:"line-number"},[s._v("104")]),e("br")])]),e("h4",{attrs:{id:"idl-定义文件位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#idl-定义文件位置"}},[s._v("#")]),s._v(" IDL 定义文件位置")]),s._v(" "),e("p",[s._v("IDL 定义文件的路径是 thrift/src/main/thrift/rpc.thrift，其中包括了结构体定义与函数定义")]),s._v(" "),e("h4",{attrs:{id:"生成文件位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成文件位置"}},[s._v("#")]),s._v(" 生成文件位置")]),s._v(" "),e("p",[s._v("在 mvn 编译过程中，会调用 thrift 编译 IDL 文件，生成最终的。class 文件\n生成的文件夹路径为 thrift/target/classes/org/apache/iotdb/service/rpc/thrift")])])}),[],!1,null,null,null);e.default=a.exports}}]);