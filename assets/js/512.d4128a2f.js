(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{914:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"cluster-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-setup"}},[t._v("#")]),t._v(" Cluster Setup")]),t._v(" "),e("p",[t._v("This article is the setup process of IoTDB Cluster (1.0.0).")]),t._v(" "),e("h2",{attrs:{id:"environments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environments"}},[t._v("#")]),t._v(" Environments")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("JDK>=1.8.")])]),t._v(" "),e("li",[e("p",[t._v("Max open file 65535.")])]),t._v(" "),e("li",[e("p",[t._v("Disable the swap memory.")])])]),t._v(" "),e("h2",{attrs:{id:"get-the-binary-distribution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-the-binary-distribution"}},[t._v("#")]),t._v(" Get the binary distribution")]),t._v(" "),e("h3",{attrs:{id:"download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),e("p",[t._v("Download the binary distribution from website "),e("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download Page"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"compiled-from-source-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compiled-from-source-code"}},[t._v("#")]),t._v(" Compiled from source code")]),t._v(" "),e("p",[t._v("Download the source code:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone https://github.com/apache/iotdb.git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The default branch is master, you should checkout to the release tag:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout v1.0.0\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Under the source root folder:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mvn clean package -pl distribution -am -DskipTests\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Then you will get the binary distribution under "),e("strong",[t._v("distribution/target")]),t._v(", in which the "),e("strong",[t._v("all-bin")]),t._v(" contains ConfigNode and DataNode, and DataNode contains the Cli.")]),t._v(" "),e("h2",{attrs:{id:"binary-distribution-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binary-distribution-content"}},[t._v("#")]),t._v(" Binary Distribution Content")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Folder")])]),t._v(" "),e("th",[e("strong",[t._v("Description")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("conf")]),t._v(" "),e("td",[t._v("Configuration files folder, contains configuration files of ConfigNode and DataNode")])]),t._v(" "),e("tr",[e("td",[t._v("data")]),t._v(" "),e("td",[t._v("Data files folder, contains data files of ConfigNode and DataNode")])]),t._v(" "),e("tr",[e("td",[t._v("lib")]),t._v(" "),e("td",[t._v("Jar files folder")])]),t._v(" "),e("tr",[e("td",[t._v("licenses")]),t._v(" "),e("td",[t._v("Licenses files folder")])]),t._v(" "),e("tr",[e("td",[t._v("logs")]),t._v(" "),e("td",[t._v("Logs files folder, contains logs files of ConfigNode and DataNode")])]),t._v(" "),e("tr",[e("td",[t._v("sbin")]),t._v(" "),e("td",[t._v("Shell files folder, contains start/stop/remove shell of ConfigNode and DataNode, cli shell")])]),t._v(" "),e("tr",[e("td",[t._v("tools")]),t._v(" "),e("td",[t._v("System tools")])])])]),t._v(" "),e("h2",{attrs:{id:"start-the-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-the-cluster"}},[t._v("#")]),t._v(" Start the Cluster")]),t._v(" "),e("p",[t._v("Users could start a cluster which contains multiple ConfigNode and DataNode.\nA cluster need at least one ConfigNode and no less than the number of data/schema_replication_factor DataNodes.")]),t._v(" "),e("p",[t._v("The total process are three steps:")]),t._v(" "),e("ul",[e("li",[t._v("Start the first ConfigNode")]),t._v(" "),e("li",[t._v("Add ConfigNode (Optional)")]),t._v(" "),e("li",[t._v("Add DataNode")])]),t._v(" "),e("h3",{attrs:{id:"start-the-first-confignode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-the-first-confignode"}},[t._v("#")]),t._v(" Start the first ConfigNode")]),t._v(" "),e("p",[t._v("Please set the important parameters in conf/iotdb-confignode.properties and conf/iotdb-common.properties:")]),t._v(" "),e("p",[t._v("iotdb-confignode.properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Description")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cn_internal_address")]),t._v(" "),e("td",[t._v("Internal rpc service address of ConfigNode")])]),t._v(" "),e("tr",[e("td",[t._v("cn_internal_port")]),t._v(" "),e("td",[t._v("Internal rpc service port of ConfigNode")])]),t._v(" "),e("tr",[e("td",[t._v("cn_consensus_port")]),t._v(" "),e("td",[t._v("ConfigNode replication consensus protocol communication port")])]),t._v(" "),e("tr",[e("td",[t._v("cn_target_config_node_list")]),t._v(" "),e("td",[t._v("Target ConfigNode address, if the current ConfigNode is the first one, then set its own address:port")])])])]),t._v(" "),e("p",[t._v("iotdb-common.properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Description")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("data_replication_factor")]),t._v(" "),e("td",[t._v("Data replication factor, no more than DataNode number")])]),t._v(" "),e("tr",[e("td",[t._v("data_region_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Consensus protocol of data replicas. Note that RatisConsensus currently does not support multiple data directories")])]),t._v(" "),e("tr",[e("td",[t._v("schema_replication_factor")]),t._v(" "),e("td",[t._v("Schema replication factor, no more than DataNode number")])]),t._v(" "),e("tr",[e("td",[t._v("schema_region_consensus_protocol_class")]),t._v(" "),e("td",[t._v("Consensus protocol of schema replicas")])])])]),t._v(" "),e("p",[t._v("Start on Linux:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Foreground\nbash ./sbin/start-confignode.sh\n\n# Background\nnohup bash ./sbin/start-confignode.sh >/dev/null 2>&1 &\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Start on Windows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sbin\\start-confignode.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("More details  "),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/Reference/ConfigNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConfigNode Configurations"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"add-confignode-optional"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-confignode-optional"}},[t._v("#")]),t._v(" Add ConfigNode (Optional)")]),t._v(" "),e("p",[t._v("This will add the replication factor of ConfigNode, except for the ports that couldn't conflict with, make sure other configurations are the same with existing ConfigNode in Cluster, and set parameter cn_target_config_nodes_list as an active ConfigNode in Cluster.")]),t._v(" "),e("p",[t._v("The adding ConfigNode also use the start-confignode.sh/bat.")]),t._v(" "),e("h3",{attrs:{id:"start-datanode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-datanode"}},[t._v("#")]),t._v(" Start DataNode")]),t._v(" "),e("p",[t._v("You could add any number of DataNode.")]),t._v(" "),e("p",[t._v("Please set the important parameters in iotdb-datanode.properties:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("Configuration")])]),t._v(" "),e("th",[e("strong",[t._v("Description")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("dn_rpc_address")]),t._v(" "),e("td",[t._v("Client RPC Service address")])]),t._v(" "),e("tr",[e("td",[t._v("dn_rpc_port")]),t._v(" "),e("td",[t._v("Client RPC Service port")])]),t._v(" "),e("tr",[e("td",[t._v("dn_internal_address")]),t._v(" "),e("td",[t._v("Control flow address of DataNode inside cluster")])]),t._v(" "),e("tr",[e("td",[t._v("dn_internal_port")]),t._v(" "),e("td",[t._v("Control flow port of DataNode inside cluster")])]),t._v(" "),e("tr",[e("td",[t._v("dn_mpp_data_exchange_port")]),t._v(" "),e("td",[t._v("Data flow port of DataNode inside cluster")])]),t._v(" "),e("tr",[e("td",[t._v("dn_data_region_consensus_port")]),t._v(" "),e("td",[t._v("Data replicas communication port for consensus")])]),t._v(" "),e("tr",[e("td",[t._v("dn_schema_region_consensus_port")]),t._v(" "),e("td",[t._v("Schema replicas communication port for consensus")])]),t._v(" "),e("tr",[e("td",[t._v("dn_target_config_node_list")]),t._v(" "),e("td",[t._v("Running ConfigNode of the Cluster")])])])]),t._v(" "),e("p",[t._v("Start on Linux:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Foreground\nbash ./sbin/start-datanode.sh\n\n# Background\nnohup bash ./sbin/start-datanode.sh >/dev/null 2>&1 &\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Start on Windows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sbin\\start-datanode.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("More details are in "),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/Reference/DataNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DataNode Configurations"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"stop-iotdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-iotdb"}},[t._v("#")]),t._v(" Stop IoTDB")]),t._v(" "),e("p",[t._v("When you meet problem, and want to stop IoTDB ConfigNode and DataNode directly, our shells can help you do this.")]),t._v(" "),e("p",[t._v("In Windows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sbin\\stop-datanode.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sbin\\stop-confignode.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("In Linux:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bash sbin/stop-datanode.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bash sbin/stop-confignode.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v('Be careful not to miss the "sudo" label, because some port info\'s acquisition may require root authority. If you can\'t sudo, just\nuse "jps" or "ps aux | grep iotdb" to get the process\'s id, then use "kill -9 '),e("process-id",[t._v('" to stop the process.')])],1),t._v(" "),e("h2",{attrs:{id:"start-standalone"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-standalone"}},[t._v("#")]),t._v(" Start StandAlone")]),t._v(" "),e("p",[t._v("If you just want to setup your IoTDB locally,\nYou can quickly init 1C1D (i.e. 1 Confignode and 1 Datanode) environment by our shells.")]),t._v(" "),e("p",[t._v("This will work well if you don't change our default settings.")]),t._v(" "),e("p",[t._v("Start on Windows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sbin\\start-standalone.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Start on Linux:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bash sbin/start-standalone.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Besides, with our shell, you can also directly kill these processes.")]),t._v(" "),e("p",[t._v("Stop on Windows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sbin\\stop-standalone.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Stop on Linux:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bash sbin/stop-standalone.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Note: On Linux, the 1C1D processes both launches in the background, and you can see the logs for details.")]),t._v(" "),e("p",[t._v('The stop-standalone.sh may not work well without sudo, since IoTDB\'s port numbers may be invisible without permission.\nIf stop-standalone.sh meets some error, you can use "jps" or "ps aux | grep iotdb" to obtain the process ids,\nand use "sudo kill -9 '),e("process-id",[t._v('" to manually stop the processes.')])],1),t._v(" "),e("h2",{attrs:{id:"start-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-cli"}},[t._v("#")]),t._v(" Start Cli")]),t._v(" "),e("p",[t._v("Cli shell is in sbin folder.")]),t._v(" "),e("p",[t._v("Start on Linux:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./datanode/sbin/start-cli.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Start on Windows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("datanode\\sbin\\start-cli.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"shrink-the-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shrink-the-cluster"}},[t._v("#")]),t._v(" Shrink the Cluster")]),t._v(" "),e("h3",{attrs:{id:"remove-confignode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove-confignode"}},[t._v("#")]),t._v(" Remove ConfigNode")]),t._v(" "),e("p",[t._v("Execute the remove-confignode shell on an active ConfigNode, and make sure that there is at least one active ConfigNode in Cluster after removing.")]),t._v(" "),e("p",[t._v("Remove on Linux:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Remove the ConfigNode with confignode_id\n./confignode/sbin/remove-confignode.sh <confignode_id>\n\n# Remove the ConfigNode with address:port\n./confignode/sbin/remove-confignode.sh <internal_address>:<internal_port>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Remove on Windows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Remove the ConfigNode with confignode_id\nconfignode\\sbin\\remove-confignode.bat <confignode_id>\n\n# Remove the ConfigNode with address:port\nconfignode\\sbin\\remove-confignode.bat <internal_address>:<internal_port>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h3",{attrs:{id:"remove-datanode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove-datanode"}},[t._v("#")]),t._v(" Remove DataNode")]),t._v(" "),e("p",[t._v("Execute the remove-datanode shell on an active DataNode, and make sure that the number of active DataNodes are no less than the number of data/schema_replication_factor in Cluster after removing.")]),t._v(" "),e("p",[t._v("Remove on Linux:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Remove the DataNode with datanode_id\nbash ./datanode/sbin/remove-datanode.sh <datanode_id>\n\n# Remove the DataNode with rpc address:port\nbash ./datanode/sbin/remove-datanode.sh <rpc_address>:<rpc_port>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Remove on Windows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Remove the DataNode with datanode_id\ndatanode\\sbin\\remove-datanode.bat <datanode_id>\n\n# Remove the DataNode with rpc address:port\ndatanode\\sbin\\remove-datanode.bat <rpc_address>:<rpc_port>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h2",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),e("p",[t._v("This section uses a local environment as an example to\nillustrate how to start, expand, and shrink a IoTDB Cluster.")]),t._v(" "),e("h3",{attrs:{id:"_1-prepare-the-start-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-prepare-the-start-environment"}},[t._v("#")]),t._v(" 1. Prepare the Start Environment")]),t._v(" "),e("p",[t._v("Unzip the apache-iotdb-1.0.0-all-bin.zip file to cluster0 folder.")]),t._v(" "),e("h3",{attrs:{id:"_2-start-a-minimum-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-start-a-minimum-cluster"}},[t._v("#")]),t._v(" 2. Start a Minimum Cluster")]),t._v(" "),e("p",[t._v("Start the Cluster version with one ConfigNode and one DataNode(1C1D), and\nthe default number of replicas is one.")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./cluster0/sbin/start-confignode.sh\n./cluster0/sbin/start-datanode.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"_3-verify-the-minimum-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-verify-the-minimum-cluster"}},[t._v("#")]),t._v(" 3. Verify the Minimum Cluster")]),t._v(" "),e("ul",[e("li",[t._v("If everything goes well, the minimum cluster will start successfully. Then, we can start the Cli for verification.")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./cluster0/sbin/start-cli.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("Execute the "),e("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/Master/Maintenance-Tools/Maintenance-Command.html#show-all-node-information",target:"_blank",rel:"noopener noreferrer"}},[t._v("show cluster"),e("OutboundLink")],1),t._v("\ncommand on the Cli. The result is shown below:")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> show cluster\n+------+----------+-------+---------------+------------+\n|NodeID|  NodeType| Status|InternalAddress|InternalPort|\n+------+----------+-------+---------------+------------+\n|     0|ConfigNode|Running|      127.0.0.1|       22277|\n|     1|  DataNode|Running|      127.0.0.1|        9003|\n+------+----------+-------+---------------+------------+\nTotal line number = 2\nIt costs 0.160s\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h3",{attrs:{id:"_4-prepare-the-expanding-environment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-prepare-the-expanding-environment"}},[t._v("#")]),t._v(" 4. Prepare the Expanding Environment")]),t._v(" "),e("p",[t._v("Unzip the apache-iotdb-1.0.0-all-bin.zip file to cluster1 and cluster2 folder.")]),t._v(" "),e("h3",{attrs:{id:"_5-modify-the-node-configuration-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-modify-the-node-configuration-file"}},[t._v("#")]),t._v(" 5. Modify the Node Configuration file")]),t._v(" "),e("p",[t._v("For folder cluster1:")]),t._v(" "),e("ul",[e("li",[t._v("Modify ConfigNode configurations:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("configuration item")])]),t._v(" "),e("th",[e("strong",[t._v("value")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cn_internal_address")]),t._v(" "),e("td",[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",[t._v("cn_internal_port")]),t._v(" "),e("td",[t._v("22279")])]),t._v(" "),e("tr",[e("td",[t._v("cn_consensus_port")]),t._v(" "),e("td",[t._v("22280")])]),t._v(" "),e("tr",[e("td",[t._v("cn_target_config_node_list")]),t._v(" "),e("td",[t._v("127.0.0.1:22277")])])])]),t._v(" "),e("ul",[e("li",[t._v("Modify DataNode configurations:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("configuration item")])]),t._v(" "),e("th",[e("strong",[t._v("value")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("dn_rpc_address")]),t._v(" "),e("td",[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",[t._v("dn_rpc_port")]),t._v(" "),e("td",[t._v("6668")])]),t._v(" "),e("tr",[e("td",[t._v("dn_internal_address")]),t._v(" "),e("td",[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",[t._v("dn_internal_port")]),t._v(" "),e("td",[t._v("9004")])]),t._v(" "),e("tr",[e("td",[t._v("dn_mpp_data_exchange_port")]),t._v(" "),e("td",[t._v("8778")])]),t._v(" "),e("tr",[e("td",[t._v("dn_data_region_consensus_port")]),t._v(" "),e("td",[t._v("40011")])]),t._v(" "),e("tr",[e("td",[t._v("dn_schema_region_consensus_port")]),t._v(" "),e("td",[t._v("50011")])]),t._v(" "),e("tr",[e("td",[t._v("dn_target_config_node_list")]),t._v(" "),e("td",[t._v("127.0.0.1:22277")])])])]),t._v(" "),e("p",[t._v("For folder cluster2:")]),t._v(" "),e("ul",[e("li",[t._v("Modify ConfigNode configurations:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("configuration item")])]),t._v(" "),e("th",[e("strong",[t._v("value")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("cn_internal_address")]),t._v(" "),e("td",[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",[t._v("cn_internal_port")]),t._v(" "),e("td",[t._v("22281")])]),t._v(" "),e("tr",[e("td",[t._v("cn_consensus_port")]),t._v(" "),e("td",[t._v("22282")])]),t._v(" "),e("tr",[e("td",[t._v("cn_target_config_node_list")]),t._v(" "),e("td",[t._v("127.0.0.1:22277")])])])]),t._v(" "),e("ul",[e("li",[t._v("Modify DataNode configurations:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[e("strong",[t._v("configuration item")])]),t._v(" "),e("th",[e("strong",[t._v("value")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("dn_rpc_address")]),t._v(" "),e("td",[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",[t._v("dn_rpc_port")]),t._v(" "),e("td",[t._v("6669")])]),t._v(" "),e("tr",[e("td",[t._v("dn_internal_address")]),t._v(" "),e("td",[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",[t._v("dn_internal_port")]),t._v(" "),e("td",[t._v("9005")])]),t._v(" "),e("tr",[e("td",[t._v("dn_mpp_data_exchange_port")]),t._v(" "),e("td",[t._v("8779")])]),t._v(" "),e("tr",[e("td",[t._v("dn_data_region_consensus_port")]),t._v(" "),e("td",[t._v("40012")])]),t._v(" "),e("tr",[e("td",[t._v("dn_schema_region_consensus_port")]),t._v(" "),e("td",[t._v("50012")])]),t._v(" "),e("tr",[e("td",[t._v("dn_target_config_node_list")]),t._v(" "),e("td",[t._v("127.0.0.1:22277")])])])]),t._v(" "),e("h3",{attrs:{id:"_6-expanding-the-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-expanding-the-cluster"}},[t._v("#")]),t._v(" 6. Expanding the Cluster")]),t._v(" "),e("p",[t._v("Expanding the Cluster to three ConfigNode and three DataNode(3C3D).\nThe following commands can be executed in arbitrary order.")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./cluster1/sbin/start-confignode.sh\n./cluster1/sbin/start-datanode.sh\n./cluster2/sbin/start-confignode.sh\n./cluster2/sbin/start-datanode.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("h3",{attrs:{id:"_7-verify-cluster-expansion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-verify-cluster-expansion"}},[t._v("#")]),t._v(" 7. Verify Cluster expansion")]),t._v(" "),e("p",[t._v("Execute the show cluster command, then the result is shown below:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> show cluster\n+------+----------+-------+---------------+------------+\n|NodeID|  NodeType| Status|InternalAddress|InternalPort|\n+------+----------+-------+---------------+------------+\n|     0|ConfigNode|Running|      127.0.0.1|       22277|\n|     2|ConfigNode|Running|      127.0.0.1|       22279|\n|     3|ConfigNode|Running|      127.0.0.1|       22281|\n|     1|  DataNode|Running|      127.0.0.1|        9003|\n|     4|  DataNode|Running|      127.0.0.1|        9004|\n|     5|  DataNode|Running|      127.0.0.1|        9005|\n+------+----------+-------+---------------+------------+\nTotal line number = 6\nIt costs 0.012s\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("h3",{attrs:{id:"_8-shrinking-the-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-shrinking-the-cluster"}},[t._v("#")]),t._v(" 8. Shrinking the Cluster")]),t._v(" "),e("ul",[e("li",[t._v("Remove a ConfigNode:")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./cluster0/sbin/remove-confignode.sh 127.0.0.1:22279\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("Remove a DataNode:")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./cluster0/sbin/remove-datanode.sh 127.0.0.1:6668\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"_9-verify-cluster-shrinkage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-verify-cluster-shrinkage"}},[t._v("#")]),t._v(" 9. Verify Cluster shrinkage")]),t._v(" "),e("p",[t._v("Execute the show cluster command, then the result is shown below:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> show cluster\n+------+----------+-------+---------------+------------+\n|NodeID|  NodeType| Status|InternalAddress|InternalPort|\n+------+----------+-------+---------------+------------+\n|     0|ConfigNode|Running|      127.0.0.1|       22277|\n|     3|ConfigNode|Running|      127.0.0.1|       22281|\n|     1|  DataNode|Running|      127.0.0.1|        9003|\n|     5|  DataNode|Running|      127.0.0.1|        9005|\n+------+----------+-------+---------------+------------+\nTotal line number = 4\nIt costs 0.007s\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);