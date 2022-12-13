(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{944:function(e,t,s){"use strict";s.r(t);var a=s(19),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"edge-cloud-collaboration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edge-cloud-collaboration"}},[e._v("#")]),e._v(" Edge-Cloud Collaboration")]),e._v(" "),t("h2",{attrs:{id:"_1-introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-introduction"}},[e._v("#")]),e._v(" 1.Introduction")]),e._v(" "),t("p",[e._v("The Sync Tool is an IoTDB suite tool that continuously uploads the timeseries data from the edge (sender) to the cloud(receiver).")]),e._v(" "),t("p",[e._v("On the sender side of the sync-tool, the sync module is embedded in the IoTDB engine. The receiver side of the sync-tool supports IoTDB (standalone/cluster).")]),e._v(" "),t("p",[e._v("You can use SQL commands to start or close a synchronization task at the sender, and you can check the status of the synchronization task at any time. At the receiving end, you can set the IP white list to specify the access IP address range of sender.")]),e._v(" "),t("h2",{attrs:{id:"_2-model-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-model-definition"}},[e._v("#")]),e._v(" 2.Model definition")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/System%20Tools/Sync-Tool/pipe2.png?raw=true",alt:"pipe2.png"}})]),e._v(" "),t("p",[e._v("Two machines A and B, which are installed with iotdb, we want to continuously synchronize the data from A to B. To better describe this process, we introduce the following concepts.")]),e._v(" "),t("ul",[t("li",[e._v("Pipe\n"),t("ul",[t("li",[e._v("It refers to a synchronization task. In the above case, we can see that there is a data flow pipeline connecting A and B.")]),e._v(" "),t("li",[e._v("A pipe has three states, RUNNING, STOP and DROP, which respectively indicate running, pause and permanent cancellation.")])])]),e._v(" "),t("li",[e._v("PipeSink\n"),t("ul",[t("li",[e._v("It refers to the receiving end. In the above case, pipesink is machine B. At present, the pipesink type only supports IoTDB, that is, the receiver is the IoTDB instance installed on B.")]),e._v(" "),t("li",[e._v("Pipeserver: when the type of pipesink is IoTDB, you need to open the pipeserver service of IoTDB to process the pipe data.")])])])]),e._v(" "),t("h2",{attrs:{id:"_3-precautions-for-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-precautions-for-use"}},[e._v("#")]),e._v(" 3.Precautions for Use")]),e._v(" "),t("ul",[t("li",[e._v("The sender side of the sync-tool currently supports IoTDB version 1.0 "),t("strong",[e._v("only if data_replication_factor is set to 1")]),e._v(". The receiver side supports any IoTDB version 1.0 configuration")]),e._v(" "),t("li",[e._v("A normal Pipe has two states: RUNNING indicates that it is synchronizing data to the receiver, and STOP indicates that synchronization to the receiver is suspended.")]),e._v(" "),t("li",[e._v("When one or more senders send data to a receiver, there should be no intersection between the respective device path sets of these senders and receivers, otherwise unexpected errors may occur.\n"),t("ul",[t("li",[e._v("e.g. When sender A includes path "),t("code",[e._v("root.sg.d.s")]),e._v(", sender B also includes the path "),t("code",[e._v("root.sg.d.s")]),e._v(", sender A deletes database "),t("code",[e._v("root.sg")]),e._v(" will also delete all data of B stored in the path "),t("code",[e._v("root.sg.d.s")]),e._v(" at receiver.")])])]),e._v(" "),t("li",[e._v('The two "ends" do not support synchronization with each other.')]),e._v(" "),t("li",[e._v("The Sync Tool only synchronizes insertions. If no database is created on the receiver, a database of the same level as the sender will be automatically created. Currently, deletion operation is not guaranteed to be synchronized and do not support TTL settings, trigger and other operations.\n"),t("ul",[t("li",[e._v("If TTL is set on the sender side, all unexpired data in the IoTDB and all future data writes and deletions will be synchronized to the receiver side when Pipe is started.")])])]),e._v(" "),t("li",[e._v("When operating a synchronization task, ensure that all DataNode nodes in "),t("code",[e._v("SHOW DATANODES")]),e._v(" that are in the Running state are connected, otherwise the execution will fail.")])]),e._v(" "),t("h2",{attrs:{id:"_4-quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-quick-start"}},[e._v("#")]),e._v(" 4.Quick Start")]),e._v(" "),t("p",[e._v("Execute the following SQL statements at the sender and receiver to quickly start a data synchronization task between two IoTDB. For complete SQL statements and configuration matters, please see the "),t("code",[e._v("parameter configuration")]),e._v("and "),t("code",[e._v("SQL")]),e._v(" sections. For more usage examples, please refer to the "),t("code",[e._v("usage examples")]),e._v(" section.")]),e._v(" "),t("h3",{attrs:{id:"_4-1-receiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-receiver"}},[e._v("#")]),e._v(" 4.1 Receiver")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Start sender IoTDB and receiver IoTDB.")])]),e._v(" "),t("li",[t("p",[e._v("Create a PipeSink with IoTDB type.")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> CREATE PIPESINK central_iotdb AS IoTDB (ip='There is your goal IP', port='There is your goal port')\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Establish a Pipe (before creation, ensure that receiver IoTDB has been started).")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> CREATE PIPE my_pipe TO central_iotDB\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Start this Pipe.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> START PIPE my_pipe\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Show Pipe's status.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> SHOW PIPES\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Stop this Pipe.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> STOP PIPE my_pipe\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Continue this Pipe.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> START PIPE my_pipe\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Drop this Pipe (delete all information about this pipe).")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> DROP PIPE my_pipe\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-parameter-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-parameter-configuration"}},[e._v("#")]),e._v(" 5.Parameter Configuration")]),e._v(" "),t("p",[e._v("All parameters are in "),t("code",[e._v("$IOTDB_ HOME$/conf/iotdb-common.properties")]),e._v(", after all modifications are completed, execute "),t("code",[e._v("load configuration")]),e._v(" and it will take effect immediately.")]),e._v(" "),t("h3",{attrs:{id:"_5-1-sender"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-sender"}},[e._v("#")]),e._v(" 5.1 Sender")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[e._v("Parameter Name")])]),e._v(" "),t("th",[t("strong",[e._v("max_number_of_sync_file_retry")])])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Description")]),e._v(" "),t("td",[e._v("The maximum number of retries when the sender fails to synchronize files to the receiver.")])]),e._v(" "),t("tr",[t("td",[e._v("Data type")]),e._v(" "),t("td",[e._v("Int : [0,2147483647]")])]),e._v(" "),t("tr",[t("td",[e._v("Default value")]),e._v(" "),t("td",[e._v("5")])])])]),e._v(" "),t("h3",{attrs:{id:"_5-2-receiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-receiver"}},[e._v("#")]),e._v(" 5.2 Receiver")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[e._v("Parameter Name")])]),e._v(" "),t("th",[t("strong",[e._v("ip_white_list")])])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Description")]),e._v(" "),t("td",[e._v("Set the white list of IP addresses of the sender of the synchronization, which is expressed in the form of network segments, and multiple network segments are separated by commas. When the sender synchronizes data to the receiver, the receiver allows synchronization only when the IP address of the sender is within the network segment set in the white list. If the whitelist is empty, the receiver does not allow any sender to synchronize data. By default, the receiver rejects the synchronization request of all IP addresses except 127.0.0.1. When configuring this parameter, please ensure that all DataNode addresses on the sender are set.")])]),e._v(" "),t("tr",[t("td",[e._v("Data type")]),e._v(" "),t("td",[e._v("String")])]),e._v(" "),t("tr",[t("td",[e._v("Default value")]),e._v(" "),t("td",[e._v("127.0.0.1/32")])])])]),e._v(" "),t("h2",{attrs:{id:"_6-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-sql"}},[e._v("#")]),e._v(" 6.SQL")]),e._v(" "),t("h3",{attrs:{id:"show-pipesinktype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-pipesinktype"}},[e._v("#")]),e._v(" SHOW PIPESINKTYPE")]),e._v(" "),t("ul",[t("li",[e._v("Show all PipeSink types supported by IoTDB.")])]),e._v(" "),t("div",{staticClass:"language-Plain%20Text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> SHOW PIPESINKTYPE\nIoTDB>\n+-----+\n| type|\n+-----+\n|IoTDB|\n+-----+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h3",{attrs:{id:"create-pipesink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-pipesink"}},[e._v("#")]),e._v(" CREATE PIPESINK")]),e._v(" "),t("ul",[t("li",[e._v("Create a PipeSink with IoTDB type, where IP and port are optional parameters.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> CREATE PIPESINK <PipeSinkName> AS IoTDB [(ip='127.0.0.1',port=6667);]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"drop-pipesink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drop-pipesink"}},[e._v("#")]),e._v(" DROP PIPESINK")]),e._v(" "),t("ul",[t("li",[e._v("Drop the pipesink with PipeSinkName parameter.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> DROP PIPESINK <PipeSinkName>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"show-pipesink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-pipesink"}},[e._v("#")]),e._v(" SHOW PIPESINK")]),e._v(" "),t("ul",[t("li",[e._v("Show all PipeSinks' definition, the results set has three columns, name, PipeSink’s type and PipeSink‘s attributes.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> SHOW PIPESINKS\nIoTDB> SHOW PIPESINK [PipeSinkName]\nIoTDB> \n+-----------+-----+------------------------+\n|       name| type|              attributes|\n+-----------+-----+------------------------+\n|my_pipesink|IoTDB|ip='127.0.0.1',port=6667|\n+-----------+-----+------------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("h3",{attrs:{id:"create-pipe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-pipe"}},[e._v("#")]),e._v(" CREATE PIPE")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Create a pipe.")]),e._v(" "),t("ul",[t("li",[e._v("At present, the SELECT statement only supports "),t("code",[e._v("**")]),e._v(" (i.e. data in all timeseries), the FROM statement only supports "),t("code",[e._v("root")]),e._v(", and the WHERE statement only supports the start time of the specified time. The start time can be specified in the form of yyyy-mm-dd HH:MM:SS or a timestamp.")])])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> CREATE PIPE my_pipe TO my_iotdb [FROM (select ** from root WHERE time>='yyyy-mm-dd HH:MM:SS' )]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"stop-pipe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop-pipe"}},[e._v("#")]),e._v(" STOP PIPE")]),e._v(" "),t("ul",[t("li",[e._v("Stop the Pipe with PipeName.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> STOP PIPE <PipeName>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"start-pipe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-pipe"}},[e._v("#")]),e._v(" START PIPE")]),e._v(" "),t("ul",[t("li",[e._v("Continue the Pipe with PipeName.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> START PIPE <PipeName>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"drop-pipe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drop-pipe"}},[e._v("#")]),e._v(" DROP PIPE")]),e._v(" "),t("ul",[t("li",[e._v("Drop the pipe with PipeName(delete all information about this pipe).")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> DROP PIPE <PipeName>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"show-pipe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-pipe"}},[e._v("#")]),e._v(" SHOW PIPE")]),e._v(" "),t("blockquote",[t("p",[e._v("This statement can be executed on both senders and receivers.")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Show all Pipe's status.")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("create time")]),e._v(": the creation time of this pipe.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("name")]),e._v(": the name of this pipe.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("role")]),e._v(": the current role of this IoTDB in pipe, there are two possible roles.")]),e._v(" "),t("ul",[t("li",[e._v("Sender, the current IoTDB is the synchronous sender")]),e._v(" "),t("li",[e._v("Receiver, the current IoTDB is the synchronous receiver")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("remote")]),e._v(": information about the opposite end of the Pipe.")]),e._v(" "),t("ul",[t("li",[e._v("When role is sender, the value of this field is the PipeSink name.")]),e._v(" "),t("li",[e._v("When role is receiver, the value of this field is the sender's IP.")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("status")]),e._v(": the Pipe's status.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("attributes")]),e._v(": the attributes of Pipe")]),e._v(" "),t("ul",[t("li",[e._v("When role is sender, the value of this field is the synchronization start time of the Pipe and whether to synchronize the delete operation.")]),e._v(" "),t("li",[e._v("When role is receiver, the value of this field is the name of the database corresponding to the synchronization connection created on this DataNode.")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("message")]),e._v(": the status message of this pipe. When pipe runs normally, this column is NORMAL. When an exception occurs, messages may appear in  following two states.")]),e._v(" "),t("ul",[t("li",[e._v("WARN, this indicates that a data loss or other error has occurred, but the pipe will remain running.")]),e._v(" "),t("li",[e._v("ERROR, This indicates a problem where the network connection works but the data cannot be transferred, for example, the IP of the sender is not in the whitelist of the receiver or the version of the sender is not compatible with that of the receiver.")]),e._v(" "),t("li",[e._v("When the ERROR status appears, it is recommended to check the DataNode logs after STOP PIPE, check the receiver configuration or network conditions, and then START PIPE again.")])])])])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> SHOW PIPES\nIoTDB>\n+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+\n|            create time|   name |    role|       remote|   status|                          attributes|message|\n+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+\n|2022-03-30T20:58:30.689|my_pipe1|  sender|  my_pipesink|     STOP|SyncDelOp=false,DataStartTimestamp=0| NORMAL|\n+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+ \n|2022-03-31T12:55:28.129|my_pipe2|receiver|192.168.11.11|  RUNNING|             Database='root.vehicle'| NORMAL|\n+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("ul",[t("li",[e._v("Show the pipe status with PipeName. When the PipeName is empty，it is the same with "),t("code",[e._v("Show PIPES")]),e._v(".")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> SHOW PIPE [PipeName]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"_7-usage-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-usage-examples"}},[e._v("#")]),e._v(" 7. Usage Examples")]),e._v(" "),t("h3",{attrs:{id:"goal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[e._v("#")]),e._v(" Goal")]),e._v(" "),t("ul",[t("li",[e._v("Create a synchronize task from sender IoTDB to receiver IoTDB.")]),e._v(" "),t("li",[e._v("Sender wants to synchronize the data after 2022-3-30 00:00:00.")]),e._v(" "),t("li",[e._v("Sender does not want to synchronize the deletions.")]),e._v(" "),t("li",[e._v("Receiver only wants to receive data from this sender(sender ip 192.168.0.1).")])]),e._v(" "),t("h3",{attrs:{id:"receiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#receiver"}},[e._v("#")]),e._v(" Receiver")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("vi conf/iotdb-common.properties")]),e._v("  to config the parameters，set the IP white list to 192.168.0.1/32 to receive and only receive data from sender.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("####################\n### PIPE Server Configuration\n####################\n# White IP list of Sync client.\n# Please use the form of IPv4 network segment to present the range of IP, for example: 192.168.0.0/16\n# If there are more than one IP segment, please separate them by commas\n# The default is to reject all IP to sync except 0.0.0.0\n# Datatype: String\nip_white_list=192.168.0.1/32\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("h3",{attrs:{id:"sender"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sender"}},[e._v("#")]),e._v(" Sender")]),e._v(" "),t("ul",[t("li",[e._v("Create PipeSink with IoTDB type, input ip address 192.168.0.1, port 6667.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> CREATE PIPESINK my_iotdb AS IoTDB (IP='192.168.0.2'，PORT=6667)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Create Pipe connect to my_iotdb, input the start time 2022-03-30 00:00:00 in WHERE statments. The following two SQL statements are equivalent")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> CREATE PIPE p TO my_iotdb FROM (select ** from root where time>='2022-03-30 00:00:00')\nIoTDB> CREATE PIPE p TO my_iotdb FROM (select ** from root where time>= 1648569600000)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[e._v("Start the Pipe p")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> START PIPE p\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Show the status of pipe p.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> SHOW PIPE p\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"result-verification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#result-verification"}},[e._v("#")]),e._v(" Result Verification")]),e._v(" "),t("p",[e._v("Execute SQL on sender.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CREATE DATABASE root.vehicle;\nCREATE TIMESERIES root.vehicle.d0.s0 WITH DATATYPE=INT32, ENCODING=RLE;\nCREATE TIMESERIES root.vehicle.d0.s1 WITH DATATYPE=TEXT, ENCODING=PLAIN;\nCREATE TIMESERIES root.vehicle.d1.s2 WITH DATATYPE=FLOAT, ENCODING=RLE;\nCREATE TIMESERIES root.vehicle.d1.s3 WITH DATATYPE=BOOLEAN, ENCODING=PLAIN;\ninsert into root.vehicle.d0(timestamp,s0) values(now(),10);\ninsert into root.vehicle.d0(timestamp,s0,s1) values(now(),12,'12');\ninsert into root.vehicle.d0(timestamp,s1) values(now(),'14');\ninsert into root.vehicle.d1(timestamp,s2) values(now(),16.0);\ninsert into root.vehicle.d1(timestamp,s2,s3) values(now(),18.0,true);\ninsert into root.vehicle.d1(timestamp,s3) values(now(),false);\nflush;\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("p",[e._v("Execute SELECT statements, the same results can be found on sender and receiver.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> select ** from root.vehicle\n+-----------------------------+------------------+------------------+------------------+------------------+\n|             Time|root.vehicle.d0.s0|root.vehicle.d0.s1|root.vehicle.d1.s3|root.vehicle.d1.s2|\n+-----------------------------+------------------+------------------+------------------+------------------+\n|2022-04-03T20:08:17.127+08:00|        10|       null|       null|       null|\n|2022-04-03T20:08:17.358+08:00|        12|        12|       null|       null|\n|2022-04-03T20:08:17.393+08:00|       null|        14|       null|       null|\n|2022-04-03T20:08:17.538+08:00|       null|       null|       null|       16.0|\n|2022-04-03T20:08:17.753+08:00|       null|       null|       true|       18.0|\n|2022-04-03T20:08:18.263+08:00|       null|       null|       false|       null|\n+-----------------------------+------------------+------------------+------------------+------------------+\nTotal line number = 6\nIt costs 0.134s\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("h2",{attrs:{id:"_8-q-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-q-a"}},[e._v("#")]),e._v(" 8.Q&A")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Execute "),t("code",[e._v("CREATE PIPESINK demo as IoTDB")]),e._v(" get message "),t("code",[e._v("PIPESINK [demo] already exists in IoTDB.")])]),e._v(" "),t("ul",[t("li",[e._v("Cause by: Current PipeSink already exists")]),e._v(" "),t("li",[e._v("Solution: Execute "),t("code",[e._v("DROP PIPESINK demo")]),e._v(" to drop PipeSink and recreate it.")])])]),e._v(" "),t("li",[t("p",[e._v("Execute "),t("code",[e._v("DROP PIPESINK pipesinkName")]),e._v(" get message "),t("code",[e._v("Can not drop PIPESINK [demo], because PIPE [mypipe] is using it.")])]),e._v(" "),t("ul",[t("li",[e._v("Cause by: It is not allowed to delete PipeSink that is used by a running PIPE.")]),e._v(" "),t("li",[e._v("Solution: Execute "),t("code",[e._v("SHOW PIPE")]),e._v(" on the sender side to stop using the PipeSink's PIPE.")])])]),e._v(" "),t("li",[t("p",[e._v("Execute "),t("code",[e._v("CREATE PIPE p to demo")]),e._v("  get message  "),t("code",[e._v("PIPE [p] is STOP, please retry after drop it.")])]),e._v(" "),t("ul",[t("li",[e._v("Cause by: Current Pipe already exists")]),e._v(" "),t("li",[e._v("Solution: Execute "),t("code",[e._v("DROP PIPE p")]),e._v(" to drop Pipe and recreate it.")])])]),e._v(" "),t("li",[t("p",[e._v("Execute "),t("code",[e._v("CREATE PIPE p to demo")]),e._v(" get message  "),t("code",[e._v("Fail to create PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:9005)}.")])]),e._v(" "),t("ul",[t("li",[e._v("Cause by: There are some DataNodes with the status Running cannot be connected.")]),e._v(" "),t("li",[e._v("Solution: Execute "),t("code",[e._v("SHOW DATANODES")]),e._v(", and check for unreachable DataNode networks, or wait for their status to change to Unknown and re-execute the statement.")])])]),e._v(" "),t("li",[t("p",[e._v("Execute "),t("code",[e._v("START PIPE p")]),e._v("  get message  "),t("code",[e._v("Fail to start PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:9005)}.")])]),e._v(" "),t("ul",[t("li",[e._v("Cause by: There are some DataNodes with the status Running cannot be connected.")]),e._v(" "),t("li",[e._v("Solution: Execute "),t("code",[e._v("SHOW DATANODES")]),e._v(", and check for unreachable DataNode networks, or wait for their status to change to Unknown and re-execute the statement.")])])]),e._v(" "),t("li",[t("p",[e._v("Execute "),t("code",[e._v("STOP PIPE p")]),e._v("  get message  "),t("code",[e._v("Fail to stop PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:9005)}.")])]),e._v(" "),t("ul",[t("li",[e._v("Cause by: There are some DataNodes with the status Running cannot be connected.")]),e._v(" "),t("li",[e._v("Solution: Execute "),t("code",[e._v("SHOW DATANODES")]),e._v(", and check for unreachable DataNode networks, or wait for their status to change to Unknown and re-execute the statement.")])])]),e._v(" "),t("li",[t("p",[e._v("Execute "),t("code",[e._v("DROP PIPE p")]),e._v("  get message  "),t("code",[e._v("Fail to DROP_PIPE because Fail to drop PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:9005)}. Please execute [DROP PIPE p] later to retry.")])]),e._v(" "),t("ul",[t("li",[e._v("Cause by: There are some DataNodes with the status Running cannot be connected. Pipe has been deleted on some nodes and the status has been set to "),t("em",[t("strong",[e._v("DROP")])]),e._v(".")]),e._v(" "),t("li",[e._v("Solution: Execute "),t("code",[e._v("SHOW DATANODES")]),e._v(", and check for unreachable DataNode networks, or wait for their status to change to Unknown and re-execute the statement.")])])]),e._v(" "),t("li",[t("p",[e._v("Sync.log prompts "),t("code",[e._v("org.apache.iotdb.commons.exception.IoTDBException: root.** already been created as database")])]),e._v(" "),t("ul",[t("li",[e._v("Cause by: The synchronization tool attempts to automatically create a database at the sender at the receiver. This is a normal phenomenon.")]),e._v(" "),t("li",[e._v("Solution: No intervention is required.")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);