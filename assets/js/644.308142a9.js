(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{1048:function(t,n,a){"use strict";a.r(n);var e=a(19),s=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"_1-目标"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-目标"}},[t._v("#")]),t._v(" 1. 目标")]),t._v(" "),n("p",[t._v("本文档为 IoTDB 集群版（1.0.0）的安装及启动教程。")]),t._v(" "),n("h1",{attrs:{id:"_2-前置检查"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-前置检查"}},[t._v("#")]),t._v(" 2. 前置检查")]),t._v(" "),n("ol",[n("li",[t._v("JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。")]),t._v(" "),n("li",[t._v("设置最大文件打开数为 65535。")]),t._v(" "),n("li",[t._v("关闭交换内存。")]),t._v(" "),n("li",[t._v("首次启动ConfigNode节点时，确保已清空ConfigNode节点的data/confignode目录；首次启动DataNode节点时，确保已清空DataNode节点的data/datanode目录。")]),t._v(" "),n("li",[t._v("如果整个集群处在可信环境下，可以关闭机器上的防火墙选项。")]),t._v(" "),n("li",[t._v("在集群默认配置中，ConfigNode 会占用端口 10710 和 10720，DataNode 会占用端口 6667、10730、10740、10750 和 10760，\n请确保这些端口未被占用，或者手动修改配置文件中的端口配置。")])]),t._v(" "),n("h1",{attrs:{id:"_3-安装包获取"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装包获取"}},[t._v("#")]),t._v(" 3. 安装包获取")]),t._v(" "),n("p",[t._v("你可以选择下载二进制文件（见 3.1）或从源代码编译（见 3.2）。")]),t._v(" "),n("h2",{attrs:{id:"_3-1-下载二进制文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-下载二进制文件"}},[t._v("#")]),t._v(" 3.1 下载二进制文件")]),t._v(" "),n("ol",[n("li",[t._v("打开官网"),n("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download Page"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("li",[t._v("下载 IoTDB 1.0.0 版本的二进制文件。")]),t._v(" "),n("li",[t._v("解压得到 apache-iotdb-1.0.0-all-bin 目录。")])]),t._v(" "),n("h2",{attrs:{id:"_3-2-使用源码编译"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-使用源码编译"}},[t._v("#")]),t._v(" 3.2 使用源码编译")]),t._v(" "),n("h3",{attrs:{id:"_3-2-1-下载源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-下载源码"}},[t._v("#")]),t._v(" 3.2.1 下载源码")]),t._v(" "),n("p",[n("strong",[t._v("Git")])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("git clone https://github.com/apache/iotdb.git\ngit checkout v1.0.0\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[n("strong",[t._v("官网下载")])]),t._v(" "),n("ol",[n("li",[t._v("打开官网"),n("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download Page"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("li",[t._v("下载 IoTDB 1.0.0 版本的源码。")]),t._v(" "),n("li",[t._v("解压得到 apache-iotdb-1.0.0 目录。")])]),t._v(" "),n("h3",{attrs:{id:"_3-2-2-编译源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-编译源码"}},[t._v("#")]),t._v(" 3.2.2 编译源码")]),t._v(" "),n("p",[t._v("在 IoTDB 源码根目录下:")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("mvn clean package -pl distribution -am -DskipTests\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("编译成功后，可在目录\n"),n("strong",[t._v("distribution/target/apache-iotdb-1.0.0-SNAPSHOT-all-bin/apache-iotdb-1.0.0-SNAPSHOT-all-bin")]),t._v("\n找到集群版本的二进制文件。")]),t._v(" "),n("h1",{attrs:{id:"_4-安装包说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-安装包说明"}},[t._v("#")]),t._v(" 4. 安装包说明")]),t._v(" "),n("p",[t._v("打开 apache-iotdb-1.0.0-SNAPSHOT-all-bin，可见以下目录：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("目录")])]),t._v(" "),n("th",[n("strong",[t._v("说明")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("conf")]),t._v(" "),n("td",[t._v("配置文件目录，包含 ConfigNode、DataNode、JMX 和 logback 等配置文件")])]),t._v(" "),n("tr",[n("td",[t._v("data")]),t._v(" "),n("td",[t._v("数据文件目录，包含 ConfigNode 和 DataNode 的数据文件")])]),t._v(" "),n("tr",[n("td",[t._v("lib")]),t._v(" "),n("td",[t._v("库文件目录")])]),t._v(" "),n("tr",[n("td",[t._v("licenses")]),t._v(" "),n("td",[t._v("证书文件目录")])]),t._v(" "),n("tr",[n("td",[t._v("logs")]),t._v(" "),n("td",[t._v("日志文件目录，包含 ConfigNode 和 DataNode 的日志文件")])]),t._v(" "),n("tr",[n("td",[t._v("sbin")]),t._v(" "),n("td",[t._v("脚本目录，包含 ConfigNode 和 DataNode 的启停移除脚本，以及 Cli 的启动脚本等")])]),t._v(" "),n("tr",[n("td",[t._v("tools")]),t._v(" "),n("td",[t._v("系统工具目录")])])])]),t._v(" "),n("h1",{attrs:{id:"_5-集群安装配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-集群安装配置"}},[t._v("#")]),t._v(" 5. 集群安装配置")]),t._v(" "),n("h2",{attrs:{id:"_5-1-集群安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-集群安装"}},[t._v("#")]),t._v(" 5.1 集群安装")]),t._v(" "),n("p",[n("code",[t._v("apache-iotdb-1.0.0-SNAPSHOT-all-bin")]),t._v(" 包含 ConfigNode 和 DataNode，\n请将安装包部署于你目标集群的所有机器上，推荐将安装包部署于所有服务器的相同目录下。")]),t._v(" "),n("p",[t._v("如果你希望先在一台服务器上尝试部署 IoTDB 集群，请参考\n"),n("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/QuickStart/ClusterQuickStart.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cluster Quick Start"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"_5-2-集群配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-集群配置"}},[t._v("#")]),t._v(" 5.2 集群配置")]),t._v(" "),n("p",[t._v("接下来需要修改每个服务器上的配置文件，登录服务器，\n并将工作路径切换至 "),n("code",[t._v("apache-iotdb-1.0.0-SNAPSHOT-all-bin")]),t._v("，\n配置文件在 "),n("code",[t._v("./conf")]),t._v(" 目录内。")]),t._v(" "),n("p",[t._v("对于所有部署 ConfigNode 的服务器，需要修改通用配置（见 5.2.1）和 ConfigNode 配置（见 5.2.2）。")]),t._v(" "),n("p",[t._v("对于所有部署 DataNode 的服务器，需要修改通用配置（见 5.2.1）和 DataNode 配置（见 5.2.3）。")]),t._v(" "),n("h3",{attrs:{id:"_5-2-1-通用配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1-通用配置"}},[t._v("#")]),t._v(" 5.2.1 通用配置")]),t._v(" "),n("p",[t._v("打开通用配置文件 ./conf/iotdb-common.properties，\n可根据 "),n("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/Cluster/Deployment-Recommendation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署推荐"),n("OutboundLink")],1),t._v("\n设置以下参数：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("配置项")])]),t._v(" "),n("th",[n("strong",[t._v("说明")])]),t._v(" "),n("th",[n("strong",[t._v("默认")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("cluster_name")]),t._v(" "),n("td",[t._v("节点希望加入的集群的名称")]),t._v(" "),n("td",[t._v("defaultCluster")])]),t._v(" "),n("tr",[n("td",[t._v("config_node_consensus_protocol_class")]),t._v(" "),n("td",[t._v("ConfigNode 使用的共识协议")]),t._v(" "),n("td",[t._v("org.apache.iotdb.consensus.ratis.RatisConsensus")])]),t._v(" "),n("tr",[n("td",[t._v("schema_replication_factor")]),t._v(" "),n("td",[t._v("元数据副本数，DataNode 数量不应少于此数目")]),t._v(" "),n("td",[t._v("1")])]),t._v(" "),n("tr",[n("td",[t._v("schema_region_consensus_protocol_class")]),t._v(" "),n("td",[t._v("元数据副本组的共识协议")]),t._v(" "),n("td",[t._v("org.apache.iotdb.consensus.ratis.RatisConsensus")])]),t._v(" "),n("tr",[n("td",[t._v("data_replication_factor")]),t._v(" "),n("td",[t._v("数据副本数，DataNode 数量不应少于此数目")]),t._v(" "),n("td",[t._v("1")])]),t._v(" "),n("tr",[n("td",[t._v("data_region_consensus_protocol_class")]),t._v(" "),n("td",[t._v("数据副本组的共识协议。注：RatisConsensus 目前不支持多数据目录")]),t._v(" "),n("td",[t._v("org.apache.iotdb.consensus.iot.IoTConsensus")])])])]),t._v(" "),n("p",[n("strong",[t._v("注意：上述配置项在集群启动后即不可更改，且务必保证所有节点的通用配置完全一致，否则节点无法启动。")])]),t._v(" "),n("h3",{attrs:{id:"_5-2-2-confignode-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2-confignode-配置"}},[t._v("#")]),t._v(" 5.2.2 ConfigNode 配置")]),t._v(" "),n("p",[t._v("打开 ConfigNode 配置文件 ./conf/iotdb-confignode.properties，根据服务器/虚拟机的 IP 地址和可用端口，设置以下参数：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("配置项")])]),t._v(" "),n("th",[n("strong",[t._v("说明")])]),t._v(" "),n("th",[n("strong",[t._v("默认")])]),t._v(" "),n("th",[n("strong",[t._v("用法")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("cn_internal_address")]),t._v(" "),n("td",[t._v("ConfigNode 在集群内部通讯使用的地址")]),t._v(" "),n("td",[t._v("127.0.0.1")]),t._v(" "),n("td",[t._v("设置为服务器的 IPV4 地址或域名")])]),t._v(" "),n("tr",[n("td",[t._v("cn_internal_port")]),t._v(" "),n("td",[t._v("ConfigNode 在集群内部通讯使用的端口")]),t._v(" "),n("td",[t._v("10710")]),t._v(" "),n("td",[t._v("设置为任意未占用端口")])]),t._v(" "),n("tr",[n("td",[t._v("cn_consensus_port")]),t._v(" "),n("td",[t._v("ConfigNode 副本组共识协议通信使用的端口")]),t._v(" "),n("td",[t._v("10720")]),t._v(" "),n("td",[t._v("设置为任意未占用端口")])]),t._v(" "),n("tr",[n("td",[t._v("cn_target_config_node_list")]),t._v(" "),n("td",[t._v("节点注册加入集群时连接的 ConfigNode 的地址。注：只能配置一个")]),t._v(" "),n("td",[t._v("127.0.0.1:10710")]),t._v(" "),n("td",[t._v("对于 Seed-ConfigNode，设置为自己的 cn_internal_address:cn_internal_port；对于其它 ConfigNode，设置为另一个正在运行的 ConfigNode 的 cn_internal_address:cn_internal_port")])])])]),t._v(" "),n("p",[n("strong",[t._v("注意：上述配置项在节点启动后即不可更改，且务必保证所有端口均未被占用，否则节点无法启动。")])]),t._v(" "),n("h3",{attrs:{id:"_5-2-3-datanode-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3-datanode-配置"}},[t._v("#")]),t._v(" 5.2.3 DataNode 配置")]),t._v(" "),n("p",[t._v("打开 DataNode 配置文件 ./conf/iotdb-datanode.properties，根据服务器/虚拟机的 IP 地址和可用端口，设置以下参数：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("配置项")])]),t._v(" "),n("th",[n("strong",[t._v("说明")])]),t._v(" "),n("th",[n("strong",[t._v("默认")])]),t._v(" "),n("th",[n("strong",[t._v("用法")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("dn_rpc_address")]),t._v(" "),n("td",[t._v("客户端 RPC 服务的地址")]),t._v(" "),n("td",[t._v("127.0.0.1")]),t._v(" "),n("td",[t._v("设置为服务器的 IPV4 地址或域名")])]),t._v(" "),n("tr",[n("td",[t._v("dn_rpc_port")]),t._v(" "),n("td",[t._v("客户端 RPC 服务的端口")]),t._v(" "),n("td",[t._v("6667")]),t._v(" "),n("td",[t._v("设置为任意未占用端口")])]),t._v(" "),n("tr",[n("td",[t._v("dn_internal_address")]),t._v(" "),n("td",[t._v("DataNode 在集群内部接收控制流使用的地址")]),t._v(" "),n("td",[t._v("127.0.0.1")]),t._v(" "),n("td",[t._v("设置为服务器的 IPV4 地址或域名")])]),t._v(" "),n("tr",[n("td",[t._v("dn_internal_port")]),t._v(" "),n("td",[t._v("DataNode 在集群内部接收控制流使用的端口")]),t._v(" "),n("td",[t._v("10730")]),t._v(" "),n("td",[t._v("设置为任意未占用端口")])]),t._v(" "),n("tr",[n("td",[t._v("dn_mpp_data_exchange_port")]),t._v(" "),n("td",[t._v("DataNode 在集群内部接收数据流使用的端口")]),t._v(" "),n("td",[t._v("10740")]),t._v(" "),n("td",[t._v("设置为任意未占用端口")])]),t._v(" "),n("tr",[n("td",[t._v("dn_data_region_consensus_port")]),t._v(" "),n("td",[t._v("DataNode 的数据副本间共识协议通信的端口")]),t._v(" "),n("td",[t._v("10750")]),t._v(" "),n("td",[t._v("设置为任意未占用端口")])]),t._v(" "),n("tr",[n("td",[t._v("dn_schema_region_consensus_port")]),t._v(" "),n("td",[t._v("DataNode 的元数据副本间共识协议通信的端口")]),t._v(" "),n("td",[t._v("10760")]),t._v(" "),n("td",[t._v("设置为任意未占用端口")])]),t._v(" "),n("tr",[n("td",[t._v("dn_target_config_node_list")]),t._v(" "),n("td",[t._v("集群中正在运行的 ConfigNode 地址")]),t._v(" "),n("td",[t._v("127.0.0.1:10710")]),t._v(" "),n("td",[t._v('设置为任意正在运行的 ConfigNode 的 cn_internal_address:cn_internal_port，可设置多个，用逗号（","）隔开')])])])]),t._v(" "),n("p",[n("strong",[t._v("注意：上述配置项在节点启动后即不可更改，且务必保证所有端口均未被占用，否则节点无法启动。")])]),t._v(" "),n("h1",{attrs:{id:"_6-集群操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-集群操作"}},[t._v("#")]),t._v(" 6. 集群操作")]),t._v(" "),n("h2",{attrs:{id:"_6-1-启动集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-启动集群"}},[t._v("#")]),t._v(" 6.1 启动集群")]),t._v(" "),n("p",[t._v("本小节描述如何启动包括若干 ConfigNode 和 DataNode 的集群。\n集群可以提供服务的标准是至少启动一个 ConfigNode 且启动 不小于（数据/元数据）副本个数 的 DataNode。")]),t._v(" "),n("p",[t._v("总体启动流程分为三步：")]),t._v(" "),n("ol",[n("li",[t._v("启动种子 ConfigNode")]),t._v(" "),n("li",[t._v("增加 ConfigNode（可选）")]),t._v(" "),n("li",[t._v("增加 DataNode")])]),t._v(" "),n("h3",{attrs:{id:"_6-1-1-启动-seed-confignode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-1-启动-seed-confignode"}},[t._v("#")]),t._v(" 6.1.1 启动 Seed-ConfigNode")]),t._v(" "),n("p",[n("strong",[t._v("集群第一个启动的节点必须是 ConfigNode，第一个启动的 ConfigNode 必须遵循本小节教程。")])]),t._v(" "),n("p",[t._v("第一个启动的 ConfigNode 是 Seed-ConfigNode，标志着新集群的创建。\n在启动 Seed-ConfigNode 前，请打开通用配置文件 ./conf/iotdb-common.properties，并检查如下参数：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("配置项")])]),t._v(" "),n("th",[n("strong",[t._v("检查")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("cluster_name")]),t._v(" "),n("td",[t._v("已设置为期望的集群名称")])]),t._v(" "),n("tr",[n("td",[t._v("config_node_consensus_protocol_class")]),t._v(" "),n("td",[t._v("已设置为期望的共识协议")])]),t._v(" "),n("tr",[n("td",[t._v("schema_replication_factor")]),t._v(" "),n("td",[t._v("已设置为期望的元数据副本数")])]),t._v(" "),n("tr",[n("td",[t._v("schema_region_consensus_protocol_class")]),t._v(" "),n("td",[t._v("已设置为期望的共识协议")])]),t._v(" "),n("tr",[n("td",[t._v("data_replication_factor")]),t._v(" "),n("td",[t._v("已设置为期望的数据副本数")])]),t._v(" "),n("tr",[n("td",[t._v("data_region_consensus_protocol_class")]),t._v(" "),n("td",[t._v("已设置为期望的共识协议")])])])]),t._v(" "),n("p",[n("strong",[t._v("注意：")]),t._v(" 请根据"),n("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/Cluster/Deployment-Recommendation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("部署推荐"),n("OutboundLink")],1),t._v("配置合适的通用参数，这些参数在首次配置后即不可修改。")]),t._v(" "),n("p",[t._v("接着请打开它的配置文件 ./conf/iotdb-confignode.properties，并检查如下参数：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("配置项")])]),t._v(" "),n("th",[n("strong",[t._v("检查")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("cn_internal_address")]),t._v(" "),n("td",[t._v("已设置为服务器的 IPV4 地址或域名")])]),t._v(" "),n("tr",[n("td",[t._v("cn_internal_port")]),t._v(" "),n("td",[t._v("该端口未被占用")])]),t._v(" "),n("tr",[n("td",[t._v("cn_consensus_port")]),t._v(" "),n("td",[t._v("该端口未被占用")])]),t._v(" "),n("tr",[n("td",[t._v("cn_target_config_node_list")]),t._v(" "),n("td",[t._v("已设置为自己的内部通讯地址，即 cn_internal_address:cn_internal_port")])])])]),t._v(" "),n("p",[t._v("检查完毕后，即可在服务器上运行启动脚本：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# Linux 前台启动\nbash ./sbin/start-confignode.sh\n\n# Linux 后台启动\nnohup bash ./sbin/start-confignode.sh >/dev/null 2>&1 &\n\n# Windows\n.\\sbin\\start-confignode.bat\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("ConfigNode 的其它配置参数可参考\n"),n("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/Reference/ConfigNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConfigNode 配置参数"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"_6-1-2-增加更多-confignode-可选"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-2-增加更多-confignode-可选"}},[t._v("#")]),t._v(" 6.1.2 增加更多 ConfigNode（可选）")]),t._v(" "),n("p",[n("strong",[t._v("只要不是第一个启动的 ConfigNode 就必须遵循本小节教程。")])]),t._v(" "),n("p",[t._v("可向集群添加更多 ConfigNode，以保证 ConfigNode 的高可用。常用的配置为额外增加两个 ConfigNode，使集群共有三个 ConfigNode。")]),t._v(" "),n("p",[t._v("新增的 ConfigNode 需要保证 ./conf/iotdb-common.properites 中的所有配置参数与 Seed-ConfigNode 完全一致，否则可能启动失败或产生运行时错误。\n因此，请着重检查通用配置文件中的以下参数：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("配置项")])]),t._v(" "),n("th",[n("strong",[t._v("检查")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("cluster_name")]),t._v(" "),n("td",[t._v("与 Seed-ConfigNode 保持一致")])]),t._v(" "),n("tr",[n("td",[t._v("config_node_consensus_protocol_class")]),t._v(" "),n("td",[t._v("与 Seed-ConfigNode 保持一致")])]),t._v(" "),n("tr",[n("td",[t._v("schema_replication_factor")]),t._v(" "),n("td",[t._v("与 Seed-ConfigNode 保持一致")])]),t._v(" "),n("tr",[n("td",[t._v("schema_region_consensus_protocol_class")]),t._v(" "),n("td",[t._v("与 Seed-ConfigNode 保持一致")])]),t._v(" "),n("tr",[n("td",[t._v("data_replication_factor")]),t._v(" "),n("td",[t._v("与 Seed-ConfigNode 保持一致")])]),t._v(" "),n("tr",[n("td",[t._v("data_region_consensus_protocol_class")]),t._v(" "),n("td",[t._v("与 Seed-ConfigNode 保持一致")])])])]),t._v(" "),n("p",[t._v("接着请打开它的配置文件 ./conf/iotdb-confignode.properties，并检查以下参数：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("配置项")])]),t._v(" "),n("th",[n("strong",[t._v("检查")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("cn_internal_address")]),t._v(" "),n("td",[t._v("已设置为服务器的 IPV4 地址或域名")])]),t._v(" "),n("tr",[n("td",[t._v("cn_internal_port")]),t._v(" "),n("td",[t._v("该端口未被占用")])]),t._v(" "),n("tr",[n("td",[t._v("cn_consensus_port")]),t._v(" "),n("td",[t._v("该端口未被占用")])]),t._v(" "),n("tr",[n("td",[t._v("cn_target_config_node_list")]),t._v(" "),n("td",[t._v("已设置为另一个正在运行的 ConfigNode 的内部通讯地址，推荐使用 Seed-ConfigNode 的内部通讯地址")])])])]),t._v(" "),n("p",[t._v("检查完毕后，即可在服务器上运行启动脚本：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# Linux 前台启动\nbash ./sbin/start-confignode.sh\n\n# Linux 后台启动\nnohup bash ./sbin/start-confignode.sh >/dev/null 2>&1 &\n\n# Windows\n.\\sbin\\start-confignode.bat\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("ConfigNode 的其它配置参数可参考\n"),n("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/Reference/ConfigNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConfigNode配置参数"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h3",{attrs:{id:"_6-1-3-增加-datanode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-3-增加-datanode"}},[t._v("#")]),t._v(" 6.1.3 增加 DataNode")]),t._v(" "),n("p",[n("strong",[t._v("确保集群已有正在运行的 ConfigNode 后，才能开始增加 DataNode。")])]),t._v(" "),n("p",[t._v("可以向集群中添加任意个 DataNode。\n在添加新的 DataNode 前，请先打开通用配置文件 ./conf/iotdb-common.properties 并检查以下参数：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("配置项")])]),t._v(" "),n("th",[n("strong",[t._v("检查")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("cluster_name")]),t._v(" "),n("td",[t._v("与 Seed-ConfigNode 保持一致")])])])]),t._v(" "),n("p",[t._v("接着打开它的配置文件 ./conf/iotdb-datanode.properties 并检查以下参数：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[n("strong",[t._v("配置项")])]),t._v(" "),n("th",[n("strong",[t._v("检查")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("dn_rpc_address")]),t._v(" "),n("td",[t._v("已设置为服务器的 IPV4 地址或域名")])]),t._v(" "),n("tr",[n("td",[t._v("dn_rpc_port")]),t._v(" "),n("td",[t._v("该端口未被占用")])]),t._v(" "),n("tr",[n("td",[t._v("dn_internal_address")]),t._v(" "),n("td",[t._v("已设置为服务器的 IPV4 地址或域名")])]),t._v(" "),n("tr",[n("td",[t._v("dn_internal_port")]),t._v(" "),n("td",[t._v("该端口未被占用")])]),t._v(" "),n("tr",[n("td",[t._v("dn_mpp_data_exchange_port")]),t._v(" "),n("td",[t._v("该端口未被占用")])]),t._v(" "),n("tr",[n("td",[t._v("dn_data_region_consensus_port")]),t._v(" "),n("td",[t._v("该端口未被占用")])]),t._v(" "),n("tr",[n("td",[t._v("dn_schema_region_consensus_port")]),t._v(" "),n("td",[t._v("该端口未被占用")])]),t._v(" "),n("tr",[n("td",[t._v("dn_target_config_node_list")]),t._v(" "),n("td",[t._v("已设置为正在运行的 ConfigNode 的内部通讯地址，推荐使用 Seed-ConfigNode 的内部通讯地址")])])])]),t._v(" "),n("p",[t._v("检查完毕后，即可在服务器上运行启动脚本：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# Linux 前台启动\nbash ./sbin/start-datanode.sh\n\n# Linux 后台启动\nnohup bash ./sbin/start-datanode.sh >/dev/null 2>&1 &\n\n# Windows\n.\\sbin\\start-datanode.bat\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[t._v("DataNode 的其它配置参数可参考\n"),n("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/Reference/DataNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DataNode配置参数"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("p",[n("strong",[t._v("注意：当且仅当集群拥有不少于副本个数（max{schema_replication_factor, data_replication_factor}）的 DataNode 后，集群才可以提供服务")])]),t._v(" "),n("h2",{attrs:{id:"_6-2-启动-cli"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-启动-cli"}},[t._v("#")]),t._v(" 6.2 启动 Cli")]),t._v(" "),n("p",[t._v("若搭建的集群仅用于本地调试，可直接执行 ./sbin 目录下的 Cli 启动脚本：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# Linux\n./sbin/start-cli.sh\n\n# Windows\n.\\sbin\\start-cli.bat\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("若希望通过 Cli 连接生产环境的集群，\n请阅读 "),n("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/QuickStart/Command-Line-Interface.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cli 使用手册"),n("OutboundLink")],1),t._v("。")]),t._v(" "),n("h2",{attrs:{id:"_6-3-验证集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-验证集群"}},[t._v("#")]),t._v(" 6.3 验证集群")]),t._v(" "),n("p",[t._v("以在6台服务器上启动的3C3D（3个ConfigNode 和 3个DataNode）集群为例，\n这里假设3个ConfigNode的IP地址依次为192.168.1.10、192.168.1.11、192.168.1.12，且3个ConfigNode启动时均使用了默认的端口10710与10720；\n3个DataNode的IP地址依次为192.168.1.20、192.168.1.21、192.168.1.22，且3个DataNode启动时均使用了默认的端口6667、10730、10740、10750与10760。")]),t._v(" "),n("p",[t._v("当按照6.1步骤成功启动集群后，在 Cli 执行 "),n("code",[t._v("show cluster details")]),t._v("，看到的结果应当如下：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("IoTDB> show cluster details\n+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+\n|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|  RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|\n+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+\n|     0|ConfigNode|Running|   192.168.1.10|       10710|              10720|            |       |       |                   |                 |\n|     2|ConfigNode|Running|   192.168.1.11|       10710|              10720|            |       |       |                   |                 |\n|     3|ConfigNode|Running|   192.168.1.12|       10710|              10720|            |       |       |                   |                 |\n|     1|  DataNode|Running|   192.168.1.20|       10730|                   |192.168.1.20|   6667|  10740|              10750|            10760|\n|     4|  DataNode|Running|   192.168.1.21|       10730|                   |192.168.1.21|   6667|  10740|              10750|            10760|\n|     5|  DataNode|Running|   192.168.1.22|       10730|                   |192.168.1.22|   6667|  10740|              10750|            10760|\n+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+\nTotal line number = 6\nIt costs 0.012s\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("p",[t._v("若所有节点的状态均为 "),n("strong",[t._v("Running")]),t._v("，则说明集群部署成功；\n否则，请阅读启动失败节点的运行日志，并检查对应的配置参数。")]),t._v(" "),n("h2",{attrs:{id:"_6-4-停止-iotdb-进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-停止-iotdb-进程"}},[t._v("#")]),t._v(" 6.4 停止 IoTDB 进程")]),t._v(" "),n("p",[t._v("本小节描述如何手动关闭 IoTDB 的 ConfigNode 或 DataNode 进程。")]),t._v(" "),n("h3",{attrs:{id:"_6-4-1-使用脚本停止-confignode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-1-使用脚本停止-confignode"}},[t._v("#")]),t._v(" 6.4.1 使用脚本停止 ConfigNode")]),t._v(" "),n("p",[t._v("执行停止 ConfigNode 脚本：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# Linux\n./sbin/stop-confignode.sh\n\n# Windows\n.\\sbin\\stop-confignode.bat\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h3",{attrs:{id:"_6-4-2-使用脚本停止-datanode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-2-使用脚本停止-datanode"}},[t._v("#")]),t._v(" 6.4.2 使用脚本停止 DataNode")]),t._v(" "),n("p",[t._v("执行停止 DataNode 脚本：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# Linux\n./sbin/stop-datanode.sh\n\n# Windows\n.\\sbin\\stop-datanode.bat\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("h3",{attrs:{id:"_6-4-3-停止节点进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-3-停止节点进程"}},[t._v("#")]),t._v(" 6.4.3 停止节点进程")]),t._v(" "),n("p",[t._v("首先获取节点的进程号：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("jps\n\n# 或\n\nps aux | grep iotdb\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("结束进程：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("kill -9 <pid>\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("strong",[t._v("注意：有些端口的信息需要 root 权限才能获取，在此情况下请使用 sudo")])]),t._v(" "),n("h2",{attrs:{id:"_6-5-集群缩容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-集群缩容"}},[t._v("#")]),t._v(" 6.5 集群缩容")]),t._v(" "),n("p",[t._v("本小节描述如何将 ConfigNode 或 DataNode 移出集群。")]),t._v(" "),n("h3",{attrs:{id:"_6-5-1-移除-confignode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-1-移除-confignode"}},[t._v("#")]),t._v(" 6.5.1 移除 ConfigNode")]),t._v(" "),n("p",[t._v("在移除 ConfigNode 前，请确保移除后集群至少还有一个活跃的 ConfigNode。\n在活跃的 ConfigNode 上执行 remove-confignode 脚本：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# Linux\n## 根据 confignode_id 移除节点\n./sbin/remove-confignode.sh <confignode_id>\n\n## 根据 ConfigNode 内部通讯地址和端口移除节点\n./sbin/remove-confignode.sh <cn_internal_address>:<cn_internal_port>\n\n\n# Windows\n## 根据 confignode_id 移除节点\n.\\sbin\\remove-confignode.bat <confignode_id>\n\n## 根据 ConfigNode 内部通讯地址和端口移除节点\n.\\sbin\\remove-confignode.bat <cn_internal_address>:<cn_internal_port>\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("h3",{attrs:{id:"_6-5-2-移除-datanode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-5-2-移除-datanode"}},[t._v("#")]),t._v(" 6.5.2 移除 DataNode")]),t._v(" "),n("p",[t._v("在移除 DataNode 前，请确保移除后集群至少还有不少于（数据/元数据）副本个数的 DataNode。\n在活跃的 DataNode 上执行 remove-datanode 脚本：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# Linux\n## 根据 datanode_id 移除节点\n./sbin/remove-datanode.sh <datanode_id>\n\n## 根据 DataNode RPC 服务地址和端口移除节点\n./sbin/remove-datanode.sh <dn_rpc_address>:<dn_rpc_port>\n\n\n# Windows\n## 根据 datanode_id 移除节点\n.\\sbin\\remove-datanode.bat <datanode_id>\n\n## 根据 DataNode RPC 服务地址和端口移除节点\n.\\sbin\\remove-datanode.bat <dn_rpc_address>:<dn_rpc_port>\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("h1",{attrs:{id:"_7-常见问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-常见问题"}},[t._v("#")]),t._v(" 7. 常见问题")]),t._v(" "),n("p",[t._v("请参考 "),n("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/Master/FAQ/FAQ-for-cluster-setup.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式部署FAQ"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=s.exports}}]);