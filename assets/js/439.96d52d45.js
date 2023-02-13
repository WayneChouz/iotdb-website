(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{845:function(t,e,r){"use strict";r.r(e);var a=r(19),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"data-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-import"}},[t._v("#")]),t._v(" Data Import")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#chapter-7-system-tools"}},[t._v("Chapter 7: System Tools")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#data-import"}},[t._v("Data Import")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#introduction"}},[t._v("Introduction")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#configuration"}},[t._v("Configuration")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#sync-receiver"}},[t._v("Sync Receiver")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#sync-sender"}},[t._v("Sync Sender")])])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#usage"}},[t._v("Usage")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#start-sync-receiver"}},[t._v("Start Sync Receiver")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#stop-sync-receiver"}},[t._v("Stop Sync Receiver")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#start-sync-sender"}},[t._v("Start Sync Sender")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#stop-sync-sender"}},[t._v("Stop Sync Sender")])])])])]),t._v(" "),e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),e("p",[t._v("The Sync Tool is an IoTDB suite tool that periodically uploads persistent tsfiles from the sender disk to the receiver and loads them.")]),t._v(" "),e("p",[t._v("On the sender side of the sync, the sync module is a separate process, independent of the IoTDB process. It can be started and closed through a separate script (see Sections "),e("code",[t._v("Usage")]),t._v(" for details). The frequency cycle of the sync can be set by the user.")]),t._v(" "),e("p",[t._v("On the receiver side of the sync, the sync module is embedded in the engine of IoTDB and is in the same process with IoTDB. The receiver module listens for a separate port, which can be set by the user (see Section "),e("code",[t._v("Configuration")]),t._v(" for details). Before using it, it needs to set up a whitelist at the sync receiver, which is expressed as a network segment. The receiver only accepts the data transferred from the sender located in the whitelist segment, as detailed in Section "),e("code",[t._v("Configuration")]),t._v(".")]),t._v(" "),e("p",[t._v("The sync tool has a many-to-one sender-receiver mode - that is, one sync receiver can receive data from multiple sync senders simultaneously while one sync sender can only send data to one sync receiver.")]),t._v(" "),e("blockquote",[e("p",[t._v("Note: Before using the sync tool, the client and server need to be configured separately. The configuration is detailed in Sections Configuration.")])]),t._v(" "),e("h1",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("h2",{attrs:{id:"sync-receiver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sync-receiver"}},[t._v("#")]),t._v(" Sync Receiver")]),t._v(" "),e("p",[t._v("The parameter configuration of the sync receiver is located in the configuration file "),e("code",[t._v("iotdb-engine.properties")]),t._v(" of IoTDB, and its directory is "),e("code",[t._v("$IOTDB_HOME/conf/iotdb-engine.properties")]),t._v(". In this configuration file, there are four parameters related to the sync receiver. The configuration instructions are as follows:")]),t._v(" "),e("table",[e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("parameter: is_sync_enable")])]),t._v(" "),e("tr",[e("td",{attrs:{width:"30%"}},[t._v("Description")]),t._v(" "),e("td",[t._v("Sync function switch, which is configured as true to indicate that the receiver is allowed to receive the data from the sender and load it. When set to false, it means that the receiver is not allowed to receive the data from any sender. ")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("Modalities for Entry into Force after Modification")]),t._v(" "),e("td",[t._v("Restart receiver")])])]),t._v(" "),e("table",[e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("parameter: IP_white_list")])]),t._v(" "),e("tr",[e("td",{attrs:{width:"30%"}},[t._v("Description")]),t._v(" "),e("td",[t._v("Set up a white list of sender IP addresses, which is expressed in the form of network segments and separated by commas between multiple network segments. When the sender transfers data to the receiver, only when the IP address of the sender is within the network segment set by the whitelist can the receiver allow the sync operation. If the whitelist is empty, the receiver does not allow any sender to sync data. The default receiver accepts all IP sync requests.")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("0.0.0.0/0")])]),t._v(" "),e("tr",[e("td",[t._v("Modalities for Entry into Force after Modification")]),t._v(" "),e("td",[t._v("Restart receiver")])])]),t._v(" "),e("table",[e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("parameter: update_historical_data_possibility")])]),t._v(" "),e("tr",[e("td",{attrs:{width:"30%"}},[t._v("Description")]),t._v(" "),e("td",[t._v("The processing strategy chosen by the sync receiver when merging the sync data."),e("br"),t._v("\n        1. If the sync data accounts for more than 50% of the update of the historical data (compared with the latest timestamp of the local storage group data),then it is recommended this parameter be set to TRUE, which has a greater impact on the write performance and reduce CPU usage."),e("br"),t._v("\n        2. If the sync data accounts for less than 50% of the update of the historical data (compared with the latest timestamp of the local storage group data),then it is recommended this parameter be set to FALSE,which has little impact on the write performance and takes up a large amount of CPU power."),e("br")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("Modalities for Entry into Force after Modification")]),t._v(" "),e("td",[t._v("Restart receiver")])])]),t._v(" "),e("table",[e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("parameter: sync_server_port")])]),t._v(" "),e("tr",[e("td",{attrs:{width:"30%"}},[t._v("Description")]),t._v(" "),e("td",[t._v("Sync receiver port to listen. Make sure that the port is not a system reserved port and is not occupied. This paramter is valid only when the parameter is_sync_enable is set to TRUE.")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("5555")])]),t._v(" "),e("tr",[e("td",[t._v("Modalities for Entry into Force after Modification")]),t._v(" "),e("td",[t._v("Restart receiver")])])]),t._v(" "),e("h2",{attrs:{id:"sync-sender"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sync-sender"}},[t._v("#")]),t._v(" Sync Sender")]),t._v(" "),e("p",[t._v("The parameters of the sync sender are configured in a separate configuration file iotdb-sync-client.properties with the installation directory of "),e("code",[t._v("$IOTDB_HOME/conf/iotdb-sync-client.properties")]),t._v(". In this configuration file, there are five parameters related to the sync sender. The configuration instructions are as follows:\n"),e("table",[e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("parameter: server_ip")])]),t._v(" "),e("tr",[e("td",{attrs:{width:"30%"}},[t._v("Description")]),t._v(" "),e("td",[t._v("IP address of sync receiver.")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",[t._v("Modalities for Entry into Force after Modification")]),t._v(" "),e("td",[t._v("Restart client")])])])]),t._v(" "),e("table",[e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("parameter: server_port")])]),t._v(" "),e("tr",[e("td",{attrs:{width:"30%"}},[t._v("Description")]),t._v(" "),e("td",[t._v("Listening port of sync receiver, it is necessary to ensure that the port is consistent with the configuration of the listening port set in receiver.")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("5555")])]),t._v(" "),e("tr",[e("td",[t._v("Modalities for Entry into Force after Modification")]),t._v(" "),e("td",[t._v("Restart client")])])]),t._v(" "),e("table",[e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("parameter: sync_period_in_second")])]),t._v(" "),e("tr",[e("td",{attrs:{width:"30%"}},[t._v("Description")]),t._v(" "),e("td",[t._v("The period time of sync process, the time unit is second.")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int : [0,2147483647]")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("600")])]),t._v(" "),e("tr",[e("td",[t._v("Modalities for Entry into Force after Modification")]),t._v(" "),e("td",[t._v("Restart client")])])]),t._v(" "),e("table",[e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("parameter: iotdb_schema_directory")])]),t._v(" "),e("tr",[e("td",{attrs:{width:"30%"}},[t._v("Description")]),t._v(" "),e("td",[t._v("The absolute path of the sender's IoTDB schema file, such as $IOTDB_HOME/data/system/schema/mlog.txt (if the user does not manually set the path of schema metadata, the path is the default path of IoTDB engine). This parameter is not valid by default and is set manually when the user needs it.")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Modalities for Entry into Force after Modification")]),t._v(" "),e("td",[t._v("Restart client")])])]),t._v(" "),e("table",[e("tr",[e("td",{attrs:{colspan:"2"}},[t._v("parameter: iotdb_bufferWrite_directory")])]),t._v(" "),e("tr",[e("td",{attrs:{width:"30%"}},[t._v("Description")]),t._v(" "),e("td",[t._v("The absolute path of the buffer write data (tsfile file) directory of the IoTDB at the sender, such as: $IOTDB_HOME/data/data/settled (if the user does not set the data path manually, the path is the default path of IoTDB engine). This parameter is not valid by default, and is set manually when the user needs it. This parameter needs to be guaranteed to belong to the same IoTDB as the parameter iotdb_schema_directory.")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Modalities for Entry into Force after Modification")]),t._v(" "),e("td",[t._v("Restart client")])])]),t._v(" "),e("h1",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("h2",{attrs:{id:"start-sync-receiver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-sync-receiver"}},[t._v("#")]),t._v(" Start Sync Receiver")]),t._v(" "),e("ol",[e("li",[t._v("Set up parameters of sync receiver. For example:\n"),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/59494502-daaa4380-8ebf-11e9-8bce-363e2433005a.png"}})]),t._v(" "),e("li",[t._v("Start IoTDB engine, and the sync receiver will start at the same time, and the LOG log will start with the sentence "),e("code",[t._v("IoTDB: start SYNC ServerService successfully")]),t._v(" indicating the successful start of the return receiver.\n"),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/59494513-df6ef780-8ebf-11e9-83e1-ee8ae64b76d0.png"}})])]),t._v(" "),e("h2",{attrs:{id:"stop-sync-receiver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-sync-receiver"}},[t._v("#")]),t._v(" Stop Sync Receiver")]),t._v(" "),e("p",[t._v("Stop IoTDB and the sync receiver will be closed at the same time.")]),t._v(" "),e("h2",{attrs:{id:"start-sync-sender"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-sync-sender"}},[t._v("#")]),t._v(" Start Sync Sender")]),t._v(" "),e("ol",[e("li",[t._v("Set up parameters of sync sender. For example:\n"),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/59494559-f9a8d580-8ebf-11e9-875e-355199c1a1e9.png"}})]),t._v(" "),e("li",[t._v("Start sync sender\nUsers can use the scripts under the "),e("code",[t._v("$IOTDB_HOME/bin")]),t._v(" folder to start the sync sender.\nFor Linux and Mac OS X users:")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  Shell >$IOTDB_HOME/bin/start-sync-client.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("For Windows users:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  Shell >$IOTDB_HOME\\bin\\start-sync-client.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/59494951-dc283b80-8ec0-11e9-9575-5d8578c08ceb.png"}}),t._v(" "),e("h2",{attrs:{id:"stop-sync-sender"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-sync-sender"}},[t._v("#")]),t._v(" Stop Sync Sender")]),t._v(" "),e("p",[t._v("Users can use the scripts under the "),e("code",[t._v("$IOTDB_HOME/bin")]),t._v(" folder to stop the sync sender.\nFor Linux and Mac OS X users:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  Shell >$IOTDB_HOME/bin/stop-sync-client.sh\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("For Windows users:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("  Shell >$IOTDB_HOME\\bin\\stop-sync-client.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])])])}),[],!1,null,null,null);e.default=s.exports}}]);