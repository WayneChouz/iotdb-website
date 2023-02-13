(window.webpackJsonp=window.webpackJsonp||[]).push([[882],{1288:function(t,e,a){"use strict";a.r(e);var l=a(19),i=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"hdfs集成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hdfs集成"}},[t._v("#")]),t._v(" HDFS集成")]),t._v(" "),e("h3",{attrs:{id:"存储共享架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储共享架构"}},[t._v("#")]),t._v(" 存储共享架构")]),t._v(" "),e("p",[t._v("当前，TSFile（包括TSFile文件和相关的数据文件）支持存储在本地文件系统和Hadoop分布式文件系统（HDFS）。配置使用HDFS存储TSFile十分容易。")]),t._v(" "),e("h4",{attrs:{id:"系统架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统架构"}},[t._v("#")]),t._v(" 系统架构")]),t._v(" "),e("p",[t._v("当你配置使用HDFS存储TSFile之后，你的数据文件将会被分布式存储。系统架构如下：")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"700px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/66922722-35180400-f05a-11e9-8ff0-7dd51716e4a8.png"}}),t._v(" "),e("h4",{attrs:{id:"config-and-usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-and-usage"}},[t._v("#")]),t._v(" Config and usage")]),t._v(" "),e("p",[t._v("如果你希望将TSFile存储在HDFS上，可以遵循以下步骤：")]),t._v(" "),e("p",[t._v("首先下载对应版本的源码发布版或者下载 github 仓库")]),t._v(" "),e("p",[t._v("使用maven打包server和Hadoop模块："),e("code",[t._v("mvn clean package -pl server,hadoop -am -Dmaven.test.skip=true -P get-jar-with-dependencies")])]),t._v(" "),e("p",[t._v("然后，将Hadoop模块的target jar包"),e("code",[t._v("hadoop-tsfile-X.X.X-jar-with-dependencies.jar")]),t._v("复制到server模块的target lib文件夹 "),e("code",[t._v(".../server/target/iotdb-server-X.X.X/lib")]),t._v("下。")]),t._v(" "),e("p",[t._v("编辑"),e("code",[t._v("iotdb-engine.properties")]),t._v("中的用户配置。相关配置项包括：")]),t._v(" "),e("ul",[e("li",[t._v("tsfile_storage_fs")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("tsfile_storage_fs")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Tsfile和相关数据文件的存储文件系统。目前支持LOCAL（本地文件系统）和HDFS两种")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("LOCAL")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("仅允许在第一次启动服务器前修改")])])])]),t._v(" "),e("ul",[e("li",[t._v("core_site_path")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("core_site_path")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在Tsfile和相关数据文件存储到HDFS的情况下用于配置core-site.xml的绝对路径")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/etc/hadoop/conf/core-site.xml")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("hdfs_site_path")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_site_path")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在Tsfile和相关数据文件存储到HDFS的情况下用于配置hdfs-site.xml的绝对路径")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/etc/hadoop/conf/hdfs-site.xml")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("hdfs_ip")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_ip")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在Tsfile和相关数据文件存储到HDFS的情况下用于配置HDFS的IP。"),e("strong",[t._v("如果配置了多于1个hdfs_ip，则表明启用了Hadoop HA")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("localhost")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("hdfs_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在Tsfile和相关数据文件存储到HDFS的情况下用于配置HDFS的端口")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("9000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dfs_nameservices")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_nameservices")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在使用Hadoop HA的情况下用于配置HDFS的nameservices")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("hdfsnamespace")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dfs_ha_namenodes")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_ha_namenodes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在使用Hadoop HA的情况下用于配置HDFS的nameservices下的namenodes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("nn1,nn2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dfs_ha_automatic_failover_enabled")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dfs_ha_automatic_failover_enabled")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在使用Hadoop HA的情况下用于配置是否使用失败自动切换")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("dfs_client_failover_proxy_provider")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dfs_client_failover_proxy_provider")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在使用Hadoop HA且使用失败自动切换的情况下配置失败自动切换的实现方式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("hdfs_use_kerberos")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_use_kerberos")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否使用kerberos验证访问hdfs")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("kerberos_keytab_file_path")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("kerberos_keytab_file_path")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("kerberos keytab file 的完整路径")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("/path")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("kerberos_principal")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("kerberos_principal")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Kerberos 认证原则")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("your principal")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),e("p",[t._v("启动server, Tsfile将会被存储到HDFS上。")]),t._v(" "),e("p",[t._v("如果你想要恢复将TSFile存储到本地文件系统，只需编辑配置项"),e("code",[t._v("tsfile_storage_fs")]),t._v("为"),e("code",[t._v("LOCAL")]),t._v("。在这种情况下，如果你已经在HDFS上存储了一些数据文件，你需要将它们下载到本地，并移动到你所配置的数据文件文件夹（默认为"),e("code",[t._v("../server/target/iotdb-server-X.X.X/data/data")]),t._v("）， 或者重新开始你的整个导入数据过程。")]),t._v(" "),e("h4",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("ol",[e("li",[t._v("这个功能支持哪些Hadoop版本?")])]),t._v(" "),e("p",[t._v("A: Hadoop 2.x and Hadoop 3.x均可以支持。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("当启动服务器或创建时间序列时，我遇到了如下错误：")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ERROR org.apache.iotdb.tsfile.fileSystem.fsFactory.HDFSFactory:62 - Failed to get Hadoop file system. Please check your dependency of Hadoop module.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("A: 这表明你没有将Hadoop模块的以来放到IoTDB server中。你可以这样解决：")]),t._v(" "),e("ul",[e("li",[t._v("使用Maven打包Hadoop模块: "),e("code",[t._v("mvn clean package -pl hadoop -am -Dmaven.test.skip=true -P get-jar-with-dependencies")])]),t._v(" "),e("li",[t._v("将Hadoop模块的target jar包"),e("code",[t._v("hadoop-tsfile-X.X.X-jar-with-dependencies.jar")]),t._v("复制到server模块的target lib文件夹 "),e("code",[t._v(".../server/target/iotdb-server-X.X.X/lib")]),t._v("下。")])])])}),[],!1,null,null,null);e.default=i.exports}}]);