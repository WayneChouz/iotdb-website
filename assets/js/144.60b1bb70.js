(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{552:function(t,e,i){"use strict";i.r(e);var a=i(19),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"confignode-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#confignode-configuration"}},[t._v("#")]),t._v(" ConfigNode Configuration")]),t._v(" "),e("p",[t._v("IoTDB ConfigNode files are under "),e("code",[t._v("conf")]),t._v(".")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("confignode-env.sh/bat")]),t._v("：Environment configurations, in which we could set the memory allocation of ConfigNode.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("iotdb-confignode.properties")]),t._v("：IoTDB ConfigNode system configurations.")])])]),t._v(" "),e("h2",{attrs:{id:"environment-configuration-file-confignode-env-sh-bat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-configuration-file-confignode-env-sh-bat"}},[t._v("#")]),t._v(" Environment Configuration File（confignode-env.sh/bat）")]),t._v(" "),e("p",[t._v("The environment configuration file is mainly used to configure the Java environment related parameters when ConfigNode is running, such as JVM related configuration. This part of the configuration is passed to the JVM when the ConfigNode starts.")]),t._v(" "),e("p",[t._v("The details of each parameter are as follows:")]),t._v(" "),e("ul",[e("li",[t._v("MAX_HEAP_SIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("MAX_HEAP_SIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The maximum heap memory size that IoTDB can use")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("On Linux or MacOS, the default is one quarter of the memory. On Windows, the default value for 32-bit systems is 512M, and the default for 64-bit systems is 2G.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("HEAP_NEWSIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("HEAP_NEWSIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The minimum heap memory size that IoTDB will use when startup")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("On Linux or MacOS, the default is min{cores * 100M, one quarter of MAX_HEAP_SIZE}. On Windows, the default value for 32-bit systems is 512M, and the default for 64-bit systems is 2G.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("MAX_DIRECT_MEMORY_SIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("MAX_DIRECT_MEMORY_SIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The max direct memory that IoTDB could use")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Equal to the MAX_HEAP_SIZE")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h2",{attrs:{id:"confignode-configuration-file-iotdb-confignode-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#confignode-configuration-file-iotdb-confignode-properties"}},[t._v("#")]),t._v(" ConfigNode Configuration File (iotdb-confignode.properties)")]),t._v(" "),e("p",[t._v("The global configuration of cluster is in ConfigNode.")]),t._v(" "),e("h3",{attrs:{id:"config-node-rpc-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-node-rpc-configuration"}},[t._v("#")]),t._v(" Config Node RPC Configuration")]),t._v(" "),e("ul",[e("li",[t._v("cn_internal_address")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_internal_address")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode internal service address")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_internal_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_internal_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode internal service port")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("22277")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h3",{attrs:{id:"consensus"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consensus"}},[t._v("#")]),t._v(" Consensus")]),t._v(" "),e("ul",[e("li",[t._v("cn_consensus_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_consensus_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode data Consensus Port")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("22278")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h3",{attrs:{id:"target-config-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#target-config-nodes"}},[t._v("#")]),t._v(" Target Config Nodes")]),t._v(" "),e("ul",[e("li",[t._v("cn_target_config_node_list")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_target_config_node_list")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Target ConfigNode address, for current ConfigNode to join the cluster")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1:22277")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h3",{attrs:{id:"directory-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#directory-configuration"}},[t._v("#")]),t._v(" Directory configuration")]),t._v(" "),e("ul",[e("li",[t._v("cn_system_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_system_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode system data dir")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/system（Windows：data\\system）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_consensus_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_consensus_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode Consensus protocol data dir")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/confignode/consensus（Windows：data\\confignode\\consensus）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h3",{attrs:{id:"thrift-rpc-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thrift-rpc-configuration"}},[t._v("#")]),t._v(" Thrift RPC configuration")]),t._v(" "),e("ul",[e("li",[t._v("cn_rpc_thrift_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_rpc_thrift_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Whether enable thrift's compression (using GZIP).")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_rpc_thrift_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_rpc_thrift_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Whether enable thrift's compression (using GZIP).")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_rpc_advanced_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_rpc_advanced_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Whether enable thrift's advanced compression.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_rpc_max_concurrent_client_num")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_rpc_max_concurrent_client_num")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Max concurrent rpc connections")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("65535")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_thrift_max_frame_size")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_thrift_max_frame_size")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Max size of bytes of each thrift RPC request/response")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Unit")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Byte")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("536870912")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_thrift_init_buffer_size")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_thrift_init_buffer_size")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Initial size of bytes of buffer that thrift used")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1024")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_connection_timeout_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_connection_timeout_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Thrift socket and connection timeout between raft nodes")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("20000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_selector_thread_nums_of_client_manager")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_selector_thread_nums_of_client_manager")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("selector thread (TAsyncClientManager) nums for async thread in a clientManager")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h3",{attrs:{id:"metric-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metric-configuration"}},[t._v("#")]),t._v(" Metric Configuration")])])}),[],!1,null,null,null);e.default=n.exports}}]);