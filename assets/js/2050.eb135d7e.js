(window.webpackJsonp=window.webpackJsonp||[]).push([[2050],{2371:function(s,e,a){"use strict";a.r(e);var t=a(1),n=Object(t.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"编程-原生接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程-原生接口"}},[s._v("#")]),s._v(" 编程 - 原生接口")]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("h2",{attrs:{id:"依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[s._v("#")]),s._v(" 依赖")]),s._v(" "),a("ul",[a("li",[s._v("JDK >= 1.8")]),s._v(" "),a("li",[s._v("Maven >= 3.1")])]),s._v(" "),a("h2",{attrs:{id:"安装到本地-maven-库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装到本地-maven-库"}},[s._v("#")]),s._v(" 安装到本地 maven 库")]),s._v(" "),a("p",[s._v("在根目录下运行:")]),s._v(" "),a("blockquote",[a("p",[s._v("mvn clean install -pl session -am -Dmaven.test.skip=true")])]),s._v(" "),a("h2",{attrs:{id:"在-maven-中使用原生接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-maven-中使用原生接口"}},[s._v("#")]),s._v(" 在 maven 中使用原生接口")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<dependencies>\n    <dependency>\n      <groupId>org.apache.iotdb</groupId>\n      <artifactId>iotdb-session</artifactId>\n      <version>0.10.0</version>\n    </dependency>\n</dependencies>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"原生接口使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原生接口使用示例"}},[s._v("#")]),s._v(" 原生接口使用示例")]),s._v(" "),a("p",[s._v("下面将给出Session对应的接口的简要介绍和对应参数：")]),s._v(" "),a("h3",{attrs:{id:"建立连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立连接"}},[s._v("#")]),s._v(" 建立连接")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("初始化Session\n​\tSession(String host, int port)\n​\tSession(String host, String port, String username, String password)\n​\tSession(String host, int port, String username, String password)")])]),s._v(" "),a("li",[a("p",[s._v("开启Session\n​\tSession.open()")])]),s._v(" "),a("li",[a("p",[s._v("关闭Session\n​\tSession.close()")])])]),s._v(" "),a("h3",{attrs:{id:"数据操作接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据操作接口"}},[s._v("#")]),s._v(" 数据操作接口")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("设置存储组")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("TSStatus setStorageGroup(String storageGroupId)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("删除单个或多个存储组")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\tTSStatus deleteStorageGroup(String storageGroup)\n\tTSStatus deleteStorageGroups(List<String> storageGroups)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("创建单个时间序列")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\tTSStatus createTimeseries(String path, TSDataType dataType, TSEncoding encoding, CompressionType compressor)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("删除一个或多个时间序列")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\tTSStatus deleteTimeseries(String path)\n\tTSStatus deleteTimeseries(List<String> paths)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("删除某一特定时间前的时间序列")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\tTSStatus deleteData(String path, long time)\n\tTSStatus deleteData(List<String> paths, long time)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("插入时序数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("TSStatus insert(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("批量插入时序数据")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\tTSExecuteBatchStatementResp insertBatch(RowBatch rowBatch)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[s._v("#")]),s._v(" 示例代码")]),s._v(" "),a("p",[s._v("浏览上述接口的详细信息，请参阅代码 "),a("code",[s._v("session/src/main/java/org/apache/iotdb/session/Session.java")])]),s._v(" "),a("p",[s._v("使用上述接口的示例代码在 "),a("code",[s._v("example/session/src/main/java/org/apache/iotdb/SessionExample.java")])]),s._v(" "),a("h1",{attrs:{id:"针对原生接口的连接池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#针对原生接口的连接池"}},[s._v("#")]),s._v(" 针对原生接口的连接池")]),s._v(" "),a("p",[s._v("我们提供了一个针对原生接口的连接池("),a("code",[s._v("SessionPool")]),s._v(")，使用该接口时，你只需要指定连接池的大小，就可以在使用时从池中获取连接。\n如果超过60s都没得到一个连接的话，那么会打印一条警告日志，但是程序仍将继续等待。")]),s._v(" "),a("p",[s._v("当一个连接被用完后，他会自动返回池中等待下次被使用；\n当一个连接损坏后，他会从池中被删除，并重建一个连接重新执行用户的操作。")]),s._v(" "),a("p",[s._v("对于查询操作：")]),s._v(" "),a("ol",[a("li",[s._v("使用SessionPool进行查询时，得到的结果集是"),a("code",[s._v("SessionDataSet")]),s._v("的封装类"),a("code",[s._v("SessionDataSetWrapper")]),s._v(";")]),s._v(" "),a("li",[s._v("若对于一个查询的结果集，用户并没有遍历完且不再想继续遍历时，需要手动调用释放连接的操作"),a("code",[s._v("closeResultSet")]),s._v(";")]),s._v(" "),a("li",[s._v("若对一个查询的结果集遍历时出现异常，也需要手动调用释放连接的操作"),a("code",[s._v("closeResultSet")]),s._v(".")]),s._v(" "),a("li",[s._v("可以调用 "),a("code",[s._v("SessionDataSetWrapper")]),s._v(" 的 "),a("code",[s._v("getColumnNames()")]),s._v(" 方法得到结果集列名")])]),s._v(" "),a("p",[s._v("使用示例可以参见 "),a("code",[s._v("session/src/test/java/org/apache/iotdb/session/pool/SessionPoolTest.java")])])])}],!1,null,null,null);e.default=n.exports}}]);