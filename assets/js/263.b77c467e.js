(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{669:function(t,e,a){"use strict";a.r(e);var i=a(19),n=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[e("strong",[t._v("NOTICE: CURRENT IoTDB CLUSTER IS FOR TESTING NOW!\nPLEASE BE DELIBERATE IF YOU RUN IT IN PRODUCT ENVIRONMENT.")])]),t._v(" "),e("h1",{attrs:{id:"cluster-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-setup"}},[t._v("#")]),t._v(" Cluster Setup")]),t._v(" "),e("p",[t._v("For installation prerequisites, please refer to "),e("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/QuickStart/QuickStart.html"}},[t._v("QuickStart")])],1),t._v(" "),e("h2",{attrs:{id:"prerequisite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[t._v("#")]),t._v(" Prerequisite")]),t._v(" "),e("p",[t._v("Note: Please install MinGW or WSL or git bash if you are using Windows.")]),t._v(" "),e("h2",{attrs:{id:"start-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-service"}},[t._v("#")]),t._v(" Start Service")]),t._v(" "),e("p",[t._v("Users can build clusters in pseudo-distributed mode or distributed mode.\nThe main difference between pseudo-distributed mode and distributed mode is the difference in "),e("code",[t._v("seed_nodes")]),t._v(" in the configuration file.\nFor detail descriptions, please refer to [Cluster Configuration Items](#Cluster Configuration Items).")]),t._v(" "),e("p",[t._v("To start the service of one of the nodes, you need to execute the following commands:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unix/OS X")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" sbin/start-node.sh "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("printgc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("conf_path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("start-node.bat "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("printgc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("conf_path"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[e("code",[t._v("printgc")]),t._v(" means whether enable the gc and print gc logs when start the node,"),e("br"),t._v(" "),e("code",[t._v("<conf_path>")]),t._v(" use the configuration file in the "),e("code",[t._v("conf_path")]),t._v(" folder to override the default configuration file.")]),t._v(" "),e("h2",{attrs:{id:"overwrite-the-configurations-of-stand-alone-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overwrite-the-configurations-of-stand-alone-node"}},[t._v("#")]),t._v(" OverWrite the configurations of Stand-alone node")]),t._v(" "),e("p",[t._v("Some configurations in the iotdb-engines.properties will be ignored")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("enable_auto_create_schema")]),t._v(" is always considered as "),e("code",[t._v("false")]),t._v(". Use "),e("code",[t._v("enable_auto_create_schema")]),t._v(" in\niotdb-cluster.properties to enable it, instead.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("is_sync_enable")]),t._v(" is always considered as "),e("code",[t._v("false")]),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"cluster-configuration-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-configuration-items"}},[t._v("#")]),t._v(" Cluster Configuration Items")]),t._v(" "),e("p",[t._v("Before starting to use IoTDB, you need to config the configuration files first.\nFor your convenience, we have already set the default config in the files.")]),t._v(" "),e("p",[t._v("In total, we provide users four kinds of configurations module:")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("environment configuration file ("),e("code",[t._v("iotdb-env.bat")]),t._v(", "),e("code",[t._v("iotdb-env.sh")]),t._v(").\nThe default configuration file for the environment configuration item.\nUsers can configure the relevant system configuration items of JAVA-JVM in the file.")])]),t._v(" "),e("li",[e("p",[t._v("system configuration file ("),e("code",[t._v("iotdb-engine.properties")]),t._v("). The default configuration file for the IoTDB engine layer configuration item.\nUsers can configure the IoTDB engine related parameters in the file, such as the precision of timestamp("),e("code",[t._v("timestamp_precision")]),t._v("), etc.\nWhat's more, Users can configure settings of TsFile (the data files), such as the data size written to the disk per time("),e("code",[t._v("group_size_in_byte")]),t._v(").")])]),t._v(" "),e("li",[e("p",[t._v("log configuration file ("),e("code",[t._v("logback.xml")]),t._v("). The default log configuration file, such as the log levels.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("iotdb-cluster.properties")]),t._v(". Some configurations required by IoTDB cluster. Such as replication number("),e("code",[t._v("default_replica_num")]),t._v("), etc.")])])]),t._v(" "),e("p",[t._v("For detailed description of the two configuration files "),e("code",[t._v("iotdb-engine.properties")]),t._v(", "),e("code",[t._v("iotdb-env.sh")]),t._v("/"),e("code",[t._v("iotdb-env.bat")]),t._v(", please refer to "),e("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/Config-Manual.html"}},[t._v("Configuration Manual")]),t._v(".\nThe configuration items described below are in the "),e("code",[t._v("iotdb-cluster.properties")]),t._v(" file, you can also review the comments in the "),e("a",{attrs:{href:"https://github.com/apache/iotdb/blob/master/cluster/src/assembly/resources/conf/iotdb-cluster.properties",target:"_blank",rel:"noopener noreferrer"}},[t._v("configuration file"),e("OutboundLink")],1),t._v(" directly.")],1),t._v(" "),e("ul",[e("li",[t._v("internal_ip")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("internal_ip")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IP address of internal communication between nodes in IOTDB cluster, such as heartbeat, snapshot, raft log, etc")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system, shall NOT change after cluster is up")])])])]),t._v(" "),e("ul",[e("li",[t._v("internal_meta_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("internal_meta_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB meta service port, for meta group's communication, which involves all nodes and manages the cluster configuration and storage groups. "),e("strong",[t._v("IoTDB will automatically create a heartbeat port for each meta service. The default meta service heartbeat port is "),e("code",[t._v("internal_meta_port+1")]),t._v(", please confirm that these two ports are not reserved by the system and are not occupied")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("9003")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system, shall NOT change after cluster is up")])])])]),t._v(" "),e("ul",[e("li",[t._v("internal_data_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("internal_data_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB data service port, for data groups' communication, each consists of one node and its replicas, managing timeseries schemas and data. "),e("strong",[t._v("IoTDB will automatically create a heartbeat port for each data service. The default data service heartbeat port is "),e("code",[t._v("internal_data_port+1")]),t._v(". Please confirm that these two ports are not reserved by the system and are not occupied")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("40010")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system, shall NOT change after cluster is up")])])])]),t._v(" "),e("ul",[e("li",[t._v("open_server_rpc_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("open_server_rpc_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("whether open port for server module (for debug purpose), if true, the single's server rpc_port will be changed to "),e("code",[t._v("rpc_port (in iotdb-engines.properties) + 1")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("False")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("seed_nodes")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("seed_nodes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The address of the nodes in the cluster, "),e("code",[t._v("{IP/DOMAIN}:internal_meta_port")]),t._v(" format, separated by commas; for the pseudo-distributed mode, you can fill in "),e("code",[t._v("localhost")]),t._v(", or "),e("code",[t._v("127.0.0.1")]),t._v(" or mixed, but the real ip address cannot appear; for the distributed mode, real ip or hostname is supported, but "),e("code",[t._v("localhost")]),t._v(" or "),e("code",[t._v("127.0.0.1")]),t._v(" cannot appear. When used by "),e("code",[t._v("start-node.sh(.bat)")]),t._v(", this configuration means the nodes that will form the initial cluster, so every node that use "),e("code",[t._v("start-node.sh(.bat)")]),t._v(" should have the same "),e("code",[t._v("seed_nodes")]),t._v(", or the building of the initial cluster will fail. WARNING: if the initial cluster is built, this should not be changed before the environment is cleaned. When used by "),e("code",[t._v("add-node.sh(.bat)")]),t._v(", this means the nodes to which that the application of joining the cluster will be sent, as all nodes can respond to a request, this configuration can be any nodes that already in the cluster, unnecessary to be the nodes that were used to build the initial cluster by "),e("code",[t._v("start-node.sh(.bat)")]),t._v(". Several nodes will be picked randomly to send the request, the number of nodes picked depends on the number of retries.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("rpc_thrift_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("rpc_thrift_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Whether to enable thrift compression, "),e("strong",[t._v("Note that this parameter should be consistent with each node and with the client, and also consistent with the "),e("code",[t._v("rpc_thrift_compression_enable")]),t._v(" parameter in "),e("code",[t._v("iotdb-engine.properties")])])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system, must be changed with all other nodes")])])])]),t._v(" "),e("ul",[e("li",[t._v("default_replica_num")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("default_replica_num")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number of cluster replicas of timeseries schema and data. Storage group info is always fully replicated in all nodes.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system, shall NOT change after cluster is up")])])])]),t._v(" "),e("ul",[e("li",[t._v("cluster_name")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cluster_name")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Cluster name is used to identify different clusters, "),e("strong",[e("code",[t._v("cluster_name")]),t._v(" of all nodes in a cluster must be the same")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("default")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("connection_timeout_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("connection_timeout_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Heartbeat timeout time period between nodes in the same raft group, in milliseconds")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("20000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("read_operation_timeout_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("read_operation_timeout_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Read operation timeout time period, for internal communication only, not for the entire operation, in milliseconds")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("30000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("write_operation_timeout_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("write_operation_timeout_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The write operation timeout period, for internal communication only, not for the entire operation, in milliseconds")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("30000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("min_num_of_logs_in_mem")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("min_num_of_logs_in_mem")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The minimum number of committed logs in memory, after each log deletion, at most such number of logs will remain in memory. Increasing the number will reduce the chance to use snapshot in catch-ups, but will also increase the memory footprint")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("100")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("max_num_of_logs_in_mem")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("max_num_of_logs_in_mem")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Maximum number of committed logs in memory, when reached, a log deletion will be triggered. Increasing the number will reduce the chance to use snapshot in catch-ups, but will also increase memory footprint")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("log_deletion_check_interval_second")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("log_deletion_check_interval_second")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The interval for checking and deleting the committed log task, which removes oldest in-memory committed logs when their size exceeds "),e("code",[t._v("min\\_num\\_of\\_logs\\_in\\_mem")]),t._v(" , in seconds")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("60")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("enable_auto_create_schema")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("enable_auto_create_schema")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Whether creating schema automatically is enabled, this will replace the one in "),e("code",[t._v("iotdb-engine.properties")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("BOOLEAN")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("consistency_level")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("consistency_level")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Consistency level, now three consistency levels are supported: strong, mid, and weak. Strong consistency means the server will first try to synchronize with the leader to get the newest data, if failed(timeout), directly report an error to the user; While mid consistency means the server will first try to synchronize with the leader, but if failed(timeout), it will give up and just use current data it has cached before; Weak consistency does not synchronize with the leader and simply use the local data")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("strong, mid, weak")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("mid")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("is_enable_raft_log_persistence")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("is_enable_raft_log_persistence")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Whether to enable raft log persistence")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("BOOLEAN")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),e("h2",{attrs:{id:"enable-gc-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-gc-log"}},[t._v("#")]),t._v(" Enable GC log")]),t._v(" "),e("p",[t._v("GC log is off by default.\nFor performance tuning, you may want to collect the GC info.")]),t._v(" "),e("p",[t._v("To enable GC log, just add a parameter "),e("code",[t._v("printgc")]),t._v(" when you start the server.")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" sbin/start-node.sh printgc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Or")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("sbin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("start-node.bat printgc\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("GC log is stored at "),e("code",[t._v("IOTDB_HOME/logs/gc.log")]),t._v(".")])])}),[],!1,null,null,null);e.default=n.exports}}]);