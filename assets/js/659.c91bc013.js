(window.webpackJsonp=window.webpackJsonp||[]).push([[659],{1061:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"集群设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群设置"}},[t._v("#")]),t._v(" 集群设置")]),t._v(" "),a("p",[t._v("本文档为 IoTDB 集群版（1.0.0）启动教程。")]),t._v(" "),a("h2",{attrs:{id:"安装环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装环境"}},[t._v("#")]),t._v(" 安装环境")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。")])]),t._v(" "),a("li",[a("p",[t._v("设置最大文件打开数为 65535。")])]),t._v(" "),a("li",[a("p",[t._v("关闭交换内存。")])])]),t._v(" "),a("h2",{attrs:{id:"安装包获取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装包获取"}},[t._v("#")]),t._v(" 安装包获取")]),t._v(" "),a("h3",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),a("p",[t._v("可以直接在官网下载二进制版本 "),a("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download Page"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"源码编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码编译"}},[t._v("#")]),t._v(" 源码编译")]),t._v(" "),a("p",[t._v("下载源码:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/apache/iotdb.git\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("默认分支为 master 分支，你可以切换到发布版本的 tag，例如：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git checkout v1.0.0\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在 IoTDB 根目录下:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("mvn clean package -pl distribution -am -DskipTests\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("集群的二进制版本在目录 "),a("strong",[t._v("distribution/target")]),t._v(" 下，其中，all-bin 包含 ConfigNode 和 DataNode，DataNode 内包含 Cli。")]),t._v(" "),a("h2",{attrs:{id:"安装包说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装包说明"}},[t._v("#")]),t._v(" 安装包说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("目录")])]),t._v(" "),a("th",[a("strong",[t._v("说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("conf")]),t._v(" "),a("td",[t._v("配置文件目录，包含 ConfigNode 和 DataNode 的配置文件")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("数据文件目录，包含 ConfigNode 和 DataNode 的数据文件")])]),t._v(" "),a("tr",[a("td",[t._v("lib")]),t._v(" "),a("td",[t._v("库文件目录")])]),t._v(" "),a("tr",[a("td",[t._v("licenses")]),t._v(" "),a("td",[t._v("证书文件目录")])]),t._v(" "),a("tr",[a("td",[t._v("logs")]),t._v(" "),a("td",[t._v("日志文件目录，包含 ConfigNode 和 DataNode 的日志文件")])]),t._v(" "),a("tr",[a("td",[t._v("sbin")]),t._v(" "),a("td",[t._v("脚本目录，包含 ConfigNode 和 DataNode 的启停移除脚本目录，以及 Cli 的启动脚本")])]),t._v(" "),a("tr",[a("td",[t._v("tools")]),t._v(" "),a("td",[t._v("系统工具目录")])])])]),t._v(" "),a("h2",{attrs:{id:"启动集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动集群"}},[t._v("#")]),t._v(" 启动集群")]),t._v(" "),a("p",[t._v("用户可以启动包括若干 ConfigNode 和 DataNode 的集群。\n集群可以提供服务的标准是至少启动一个 ConfigNode 且启动 不小于（数据/元数据）副本个数 的 DataNode。")]),t._v(" "),a("p",[t._v("总体启动流程分为三步：")]),t._v(" "),a("ul",[a("li",[t._v("启动种子 ConfigNode")]),t._v(" "),a("li",[t._v("增加 ConfigNode（可选）")]),t._v(" "),a("li",[t._v("增加 DataNode")])]),t._v(" "),a("h3",{attrs:{id:"启动种子-confignode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动种子-confignode"}},[t._v("#")]),t._v(" 启动种子 ConfigNode")]),t._v(" "),a("p",[t._v("对 confignode/conf/iotdb-confignode.properties 和 conf/iotdb-common.properties 中的重要参数进行配置：\niotdb-confignode.properties：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("配置项")])]),t._v(" "),a("th",[a("strong",[t._v("说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cn_internal_address")]),t._v(" "),a("td",[t._v("ConfigNode 在集群内部通讯使用的地址")])]),t._v(" "),a("tr",[a("td",[t._v("cn_internal_port")]),t._v(" "),a("td",[t._v("ConfigNode 在集群内部通讯使用的端口")])]),t._v(" "),a("tr",[a("td",[t._v("cn_consensus_port")]),t._v(" "),a("td",[t._v("ConfigNode 副本组共识协议通信使用的端口")])]),t._v(" "),a("tr",[a("td",[t._v("cn_target_config_node_list")]),t._v(" "),a("td",[t._v("种子 ConfigNode 地址，第一个 ConfigNode 配置自己的 address:port")])])])]),t._v(" "),a("p",[t._v("iotdb-common.properties：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("配置项")])]),t._v(" "),a("th",[a("strong",[t._v("说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("data_replication_factor")]),t._v(" "),a("td",[t._v("数据副本数，DataNode 数量不应少于此数目")])]),t._v(" "),a("tr",[a("td",[t._v("data_region_consensus_protocol_class")]),t._v(" "),a("td",[t._v("数据副本组的共识协议。注：RatisConsensus目前不支持多数据目录")])]),t._v(" "),a("tr",[a("td",[t._v("schema_replication_factor")]),t._v(" "),a("td",[t._v("元数据副本数，DataNode 数量不应少于此数目")])]),t._v(" "),a("tr",[a("td",[t._v("schema_region_consensus_protocol_class")]),t._v(" "),a("td",[t._v("元数据副本组的共识协议")])])])]),t._v(" "),a("p",[t._v("Linux 启动方式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 前台启动\nbash ./sbin/start-confignode.sh\n\n# 后台启动\nnohup bash ./sbin/start-confignode.sh >/dev/null 2>&1 &\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Windows 启动方式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sbin\\start-confignode.bat\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("具体参考 "),a("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/Reference/ConfigNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConfigNode配置参数"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"增加-confignode-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加-confignode-可选"}},[t._v("#")]),t._v(" 增加 ConfigNode（可选）")]),t._v(" "),a("p",[t._v("增加 ConfigNode 是一个扩容操作，除 IP 和端口不能冲突外，上述其它重要参数需要与集群已有的 ConfigNode 保持一致，并将 cn_target_config_nodes_list 配置为集群活跃的 ConfigNode。")]),t._v(" "),a("p",[t._v("启动方式同上。")]),t._v(" "),a("h3",{attrs:{id:"增加-datanode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加-datanode"}},[t._v("#")]),t._v(" 增加 DataNode")]),t._v(" "),a("p",[t._v("可以向集群中添加任意个 DataNode。")]),t._v(" "),a("p",[t._v("iotdb-datanode.properties 中的重要配置如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("配置项")])]),t._v(" "),a("th",[a("strong",[t._v("说明")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("dn_rpc_address")]),t._v(" "),a("td",[t._v("客户端 RPC 服务的地址")])]),t._v(" "),a("tr",[a("td",[t._v("dn_rpc_port")]),t._v(" "),a("td",[t._v("客户端 RPC 服务的端口")])]),t._v(" "),a("tr",[a("td",[t._v("dn_internal_address")]),t._v(" "),a("td",[t._v("DataNode 在集群内部接收控制流使用的地址")])]),t._v(" "),a("tr",[a("td",[t._v("dn_internal_port")]),t._v(" "),a("td",[t._v("DataNode 在集群内部接收控制流使用的端口")])]),t._v(" "),a("tr",[a("td",[t._v("dn_mpp_data_exchange_port")]),t._v(" "),a("td",[t._v("DataNode 在集群内部接收数据流使用的端口")])]),t._v(" "),a("tr",[a("td",[t._v("dn_data_region_consensus_port")]),t._v(" "),a("td",[t._v("DataNode 的数据副本间共识协议通信的端口")])]),t._v(" "),a("tr",[a("td",[t._v("dn_schema_region_consensus_port")]),t._v(" "),a("td",[t._v("DataNode 的元数据副本间共识协议通信的端口")])]),t._v(" "),a("tr",[a("td",[t._v("dn_target_config_node_list")]),t._v(" "),a("td",[t._v("集群中正在运行的 ConfigNode 地址")])])])]),t._v(" "),a("p",[t._v("Linux 启动方式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 前台启动\nbash ./sbin/start-datanode.sh\n\n# 后台启动\nnohup bash ./sbin/start-datanode.sh >/dev/null 2>&1 &\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Windows 启动方式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sbin\\start-datanode.bat\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("具体参考 "),a("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/Reference/DataNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DataNode配置参数"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"停止-iotdb-进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止-iotdb-进程"}},[t._v("#")]),t._v(" 停止 IoTDB 进程")]),t._v(" "),a("p",[t._v("如果你碰到了问题，希望手动关闭 IoTDB 的 ConfigNode 和 DataNode 进程，可以使用我们的脚本。")]),t._v(" "),a("p",[t._v("在 Windows 上:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sbin\\stop-datanode.bat\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sbin\\stop-confignode.bat\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在 Linux 上:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("bash sbin/stop-datanode.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("bash sbin/stop-confignode.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("注意不要遗漏 ”sudo“ 的标签，因为一些端口信息的获取需要 root 权限。如果无法 sudo 或遇到其他问题，可以使用 jps 或 ps aux | grep iotdb 的命令来获取 IoTDB 的进程，然后使用 kill -9 进程号来结束此进程。")]),t._v(" "),a("h2",{attrs:{id:"启动单机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动单机"}},[t._v("#")]),t._v(" 启动单机")]),t._v(" "),a("p",[t._v("除了集群之外， 我们的脚本也提供了单机 1C1D（也就是1个Confignode + 1个Datanode） 的便捷启动方式。")]),t._v(" "),a("p",[t._v("在不更改配置文件的情况下，该脚本可以成功执行。")]),t._v(" "),a("p",[t._v("Windows 启动方式:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sbin\\start-standalone.bat\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Linux 启动方式:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("bash sbin/start-standalone.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("也可以使用脚本直接关闭这些进程。")]),t._v(" "),a("p",[t._v("Windows 停止方式:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sbin\\stop-standalone.bat\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Linux 停止方式:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("bash sbin/stop-standalone.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("注意： 在 Linux 平台上，1C1D 的两个进程都在后台启动，可以查看 confignode1.log 和 datanode1.log 来找到它们的运行日志。")]),t._v(" "),a("p",[t._v('一般来说，stop-standalone.sh需要sudo权限，因为iotdb的端口信息在非sudo下可能是隐形的。如果 stop-standalone.sh\n出现错误，可以使用“jps”命令或“ps aux | grep iotdb“命令来查看iotdb的进程，再使用" kill -9 <进程号>"的方式来停止它们。')]),t._v(" "),a("h3",{attrs:{id:"启动-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-cli"}},[t._v("#")]),t._v(" 启动 Cli")]),t._v(" "),a("p",[t._v("Cli 启动脚本在 sbin 目录。")]),t._v(" "),a("p",[t._v("Linux 启动方式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./sbin/start-cli.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Windows 启动方式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sbin\\start-cli.bat\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"集群缩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群缩容"}},[t._v("#")]),t._v(" 集群缩容")]),t._v(" "),a("h3",{attrs:{id:"移除-confignode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除-confignode"}},[t._v("#")]),t._v(" 移除 ConfigNode")]),t._v(" "),a("p",[t._v("需要在活跃的 ConfigNode 上执行 remove-confignode 脚本，且保证移除后集群中至少有一个活跃的 ConfigNode。")]),t._v(" "),a("p",[t._v("Linux 移除方式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 根据 confignode_id 移除节点\n./sbin/remove-confignode.sh <confignode_id>\n\n# 根据 ConfigNode 内部通讯地址和端口移除节点\n./sbin/remove-confignode.sh <internal_address>:<internal_port>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Windows 移除方式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 根据 confignode_id 移除节点\nsbin\\remove-confignode.bat <confignode_id>\n\n# 根据 ConfigNode 内部通讯地址和端口移除节点\nsbin\\remove-confignode.bat <internal_address>:<internal_port>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"移除-datanode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除-datanode"}},[t._v("#")]),t._v(" 移除 DataNode")]),t._v(" "),a("p",[t._v("需要在活跃的 DataNode 上执行 remove-datanode 脚本，且保证移除后集群中至少有不少于（数据/元数据）副本个数 的 DataNode。")]),t._v(" "),a("p",[t._v("Linux 移除方式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 根据 datanode_id 移除节点\n./sbin/remove-datanode.sh <datanode_id>\n\n# 根据 DataNode RPC 服务地址和端口移除节点\n./sbin/remove-datanode.sh <rpc_address>:<rpc_port>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("Windows 移除方式：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 根据 datanode_id 移除节点\nsbin\\remove-datanode.bat <datanode_id>\n\n# 根据 DataNode RPC 服务地址和端口移除节点\nsbin\\remove-datanode.bat <rpc_address>:<rpc_port>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h2",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[t._v("#")]),t._v(" 快速上手")]),t._v(" "),a("p",[t._v("以本地环境为例，演示 IoTDB 集群的启动、扩容与缩容：")]),t._v(" "),a("h3",{attrs:{id:"_1-准备启动环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备启动环境"}},[t._v("#")]),t._v(" 1. 准备启动环境")]),t._v(" "),a("p",[t._v("解压 apache-iotdb-1.0.0-all-bin.zip 至 cluster0 目录。")]),t._v(" "),a("h3",{attrs:{id:"_2-启动最小集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动最小集群"}},[t._v("#")]),t._v(" 2. 启动最小集群")]),t._v(" "),a("p",[t._v("在 Linux 环境中，部署 1 个 ConfigNode 和 1 个 DataNode（1C1D）集群版，默认 1 副本：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./cluster0/sbin/start-confignode.sh\n./cluster0/sbin/start-datanode.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"_3-验证最小集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-验证最小集群"}},[t._v("#")]),t._v(" 3. 验证最小集群")]),t._v(" "),a("ul",[a("li",[t._v("最小集群启动成功，启动 Cli 进行验证：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./cluster0/sbin/start-cli.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("在 Cli 执行 "),a("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/Maintenance-Tools/Maintenance-Command.html#%E6%9F%A5%E7%9C%8B%E5%85%A8%E9%83%A8%E8%8A%82%E7%82%B9%E4%BF%A1%E6%81%AF",target:"_blank",rel:"noopener noreferrer"}},[t._v("show cluster"),a("OutboundLink")],1),t._v("\n指令，结果如下所示：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> show cluster\n+------+----------+-------+---------------+------------+\n|NodeID|  NodeType| Status|InternalAddress|InternalPort|\n+------+----------+-------+---------------+------------+\n|     0|ConfigNode|Running|      127.0.0.1|       22277|\n|     1|  DataNode|Running|      127.0.0.1|        9003|\n+------+----------+-------+---------------+------------+\nTotal line number = 2\nIt costs 0.160s\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"_4-准备扩容环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-准备扩容环境"}},[t._v("#")]),t._v(" 4. 准备扩容环境")]),t._v(" "),a("p",[t._v("解压 apache-iotdb-1.0.0-all-bin.zip 至 cluster1 目录和 cluster2 目录")]),t._v(" "),a("h3",{attrs:{id:"_5-修改节点配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-修改节点配置文件"}},[t._v("#")]),t._v(" 5. 修改节点配置文件")]),t._v(" "),a("p",[t._v("对于 cluster1 目录：")]),t._v(" "),a("ul",[a("li",[t._v("修改 ConfigNode 配置：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("配置项")])]),t._v(" "),a("th",[a("strong",[t._v("值")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cn_internal_address")]),t._v(" "),a("td",[t._v("127.0.0.1")])]),t._v(" "),a("tr",[a("td",[t._v("cn_internal_port")]),t._v(" "),a("td",[t._v("22279")])]),t._v(" "),a("tr",[a("td",[t._v("cn_consensus_port")]),t._v(" "),a("td",[t._v("22280")])]),t._v(" "),a("tr",[a("td",[t._v("cn_target_config_node_list")]),t._v(" "),a("td",[t._v("127.0.0.1:22277")])])])]),t._v(" "),a("ul",[a("li",[t._v("修改 DataNode 配置：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("配置项")])]),t._v(" "),a("th",[a("strong",[t._v("值")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("dn_rpc_address")]),t._v(" "),a("td",[t._v("127.0.0.1")])]),t._v(" "),a("tr",[a("td",[t._v("dn_rpc_port")]),t._v(" "),a("td",[t._v("6668")])]),t._v(" "),a("tr",[a("td",[t._v("dn_internal_address")]),t._v(" "),a("td",[t._v("127.0.0.1")])]),t._v(" "),a("tr",[a("td",[t._v("dn_internal_port")]),t._v(" "),a("td",[t._v("9004")])]),t._v(" "),a("tr",[a("td",[t._v("dn_mpp_data_exchange_port")]),t._v(" "),a("td",[t._v("8778")])]),t._v(" "),a("tr",[a("td",[t._v("dn_data_region_consensus_port")]),t._v(" "),a("td",[t._v("40011")])]),t._v(" "),a("tr",[a("td",[t._v("dn_schema_region_consensus_port")]),t._v(" "),a("td",[t._v("50011")])]),t._v(" "),a("tr",[a("td",[t._v("dn_target_config_node_list")]),t._v(" "),a("td",[t._v("127.0.0.1:22277")])])])]),t._v(" "),a("p",[t._v("对于 cluster2 目录：")]),t._v(" "),a("ul",[a("li",[t._v("修改 ConfigNode 配置：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("配置项")])]),t._v(" "),a("th",[a("strong",[t._v("值")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("cn_internal_address")]),t._v(" "),a("td",[t._v("127.0.0.1")])]),t._v(" "),a("tr",[a("td",[t._v("cn_internal_port")]),t._v(" "),a("td",[t._v("22281")])]),t._v(" "),a("tr",[a("td",[t._v("cn_consensus_port")]),t._v(" "),a("td",[t._v("22282")])]),t._v(" "),a("tr",[a("td",[t._v("cn_target_config_node_list")]),t._v(" "),a("td",[t._v("127.0.0.1:22277")])])])]),t._v(" "),a("ul",[a("li",[t._v("修改 DataNode 配置：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[a("strong",[t._v("配置项")])]),t._v(" "),a("th",[a("strong",[t._v("值")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("dn_rpc_address")]),t._v(" "),a("td",[t._v("127.0.0.1")])]),t._v(" "),a("tr",[a("td",[t._v("dn_rpc_port")]),t._v(" "),a("td",[t._v("6669")])]),t._v(" "),a("tr",[a("td",[t._v("dn_internal_address")]),t._v(" "),a("td",[t._v("127.0.0.1")])]),t._v(" "),a("tr",[a("td",[t._v("dn_internal_port")]),t._v(" "),a("td",[t._v("9005")])]),t._v(" "),a("tr",[a("td",[t._v("dn_mpp_data_exchange_port")]),t._v(" "),a("td",[t._v("8779")])]),t._v(" "),a("tr",[a("td",[t._v("dn_data_region_consensus_port")]),t._v(" "),a("td",[t._v("40012")])]),t._v(" "),a("tr",[a("td",[t._v("dn_schema_region_consensus_port")]),t._v(" "),a("td",[t._v("50012")])]),t._v(" "),a("tr",[a("td",[t._v("dn_target_config_node_list")]),t._v(" "),a("td",[t._v("127.0.0.1:22277")])])])]),t._v(" "),a("h3",{attrs:{id:"_6-集群扩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-集群扩容"}},[t._v("#")]),t._v(" 6. 集群扩容")]),t._v(" "),a("p",[t._v("将集群扩容至 3 个 ConfigNode 和 3 个 DataNode（3C3D）集群版，\n指令执行顺序为先启动 ConfigNode，再启动 DataNode：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./cluster1/sbin/start-confignode.sh\n./cluster2/sbin/start-confignode.sh\n./cluster1/sbin/start-datanode.sh\n./cluster2/sbin/start-datanode.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"_7-验证扩容结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-验证扩容结果"}},[t._v("#")]),t._v(" 7. 验证扩容结果")]),t._v(" "),a("p",[t._v("在 Cli 执行 show cluster，结果如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> show cluster\n+------+----------+-------+---------------+------------+\n|NodeID|  NodeType| Status|InternalAddress|InternalPort|\n+------+----------+-------+---------------+------------+\n|     0|ConfigNode|Running|      127.0.0.1|       22277|\n|     2|ConfigNode|Running|      127.0.0.1|       22279|\n|     3|ConfigNode|Running|      127.0.0.1|       22281|\n|     1|  DataNode|Running|      127.0.0.1|        9003|\n|     4|  DataNode|Running|      127.0.0.1|        9004|\n|     5|  DataNode|Running|      127.0.0.1|        9005|\n+------+----------+-------+---------------+------------+\nTotal line number = 6\nIt costs 0.012s\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("h3",{attrs:{id:"_8-集群缩容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-集群缩容"}},[t._v("#")]),t._v(" 8. 集群缩容")]),t._v(" "),a("ul",[a("li",[t._v("缩容一个 ConfigNode：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./cluster0/sbin/remove-confignode.sh 127.0.0.1:22279\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ul",[a("li",[t._v("缩容一个 DataNode：")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./cluster0/sbin/remove-datanode.sh 127.0.0.1:6668\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_9-验证缩容结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-验证缩容结果"}},[t._v("#")]),t._v(" 9. 验证缩容结果")]),t._v(" "),a("p",[t._v("在 Cli 执行 show cluster，结果如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> show cluster\n+------+----------+-------+---------------+------------+\n|NodeID|  NodeType| Status|InternalAddress|InternalPort|\n+------+----------+-------+---------------+------------+\n|     0|ConfigNode|Running|      127.0.0.1|       22277|\n|     3|ConfigNode|Running|      127.0.0.1|       22281|\n|     1|  DataNode|Running|      127.0.0.1|        9003|\n|     5|  DataNode|Running|      127.0.0.1|        9005|\n+------+----------+-------+---------------+------------+\nTotal line number = 4\nIt costs 0.007s\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);