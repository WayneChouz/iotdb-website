(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{665:function(e,t,a){"use strict";a.r(t);var s=a(19),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("IoTDB cluster version provides nodetool, a shell tool for users to monitor the working status of the specified cluster.\nUsers can obtain the status of the cluster by running a variety of instructions.")]),e._v(" "),t("p",[e._v("The following describes the usage and examples of each instruction,\nwhere $IOTDB_CLUSTER_HOME indicates the path of the distributed IoTDB installation directory.")]),e._v(" "),t("h1",{attrs:{id:"instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instructions"}},[e._v("#")]),e._v(" Instructions")]),e._v(" "),t("h2",{attrs:{id:"get-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[e._v("#")]),e._v(" Get Started")]),e._v(" "),t("p",[e._v("The nodetool shell tool startup script is located at $IOTDB_CLUSTER_HOME/bin folder,\nyou can specify the IP address and port of the cluster during startup.")]),e._v(" "),t("p",[e._v("IP is the IP (or hostname) of the node that you expect to connect to,\nand port is the JMX service port specified when the IoTDB cluster is started.")]),e._v(" "),t("p",[e._v("The default values are 127.0.0.1 and 31999, respectively.")]),e._v(" "),t("p",[e._v("If you need to monitor the remote cluster or modify the JMX service port number,\nset the actual IP and port with the "),t("code",[e._v("-h")]),e._v(" and "),t("code",[e._v("-p")]),e._v(" options.")]),e._v(" "),t("h2",{attrs:{id:"explains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explains"}},[e._v("#")]),e._v(" Explains")]),e._v(" "),t("p",[e._v("In a distributed system, a node is identified by node IP, metadata port and data port <IP:METAPORT:DATAPORT>.")]),e._v(" "),t("h3",{attrs:{id:"show-the-ring-of-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-the-ring-of-node"}},[e._v("#")]),e._v(" Show The Ring Of Node")]),e._v(" "),t("p",[e._v("Distributed IoTDB uses consistent hash to support data distribution.")]),e._v(" "),t("p",[e._v("You can know each node in the cluster by command "),t("code",[e._v("ring")]),e._v(", which prints node ring information.")]),e._v(" "),t("p",[e._v("1.Input")]),e._v(" "),t("blockquote",[t("p",[e._v("ring")])]),e._v(" "),t("p",[e._v("2.Output")]),e._v(" "),t("blockquote",[t("p",[e._v("The output is a multi-line string, and each line of string is a key value pair,\nwhere the key represents the node identifier, and the value represents the node (IP:METAPORT:DATAPORT), the format is <key -> value>.")])]),e._v(" "),t("p",[e._v("3.Examples")]),e._v(" "),t("blockquote",[t("p",[e._v("Suppose that the current cluster runs on three nodes: 127.0.0.1:9003:40010, 127.0.0.1:9004:40011, and 127.0.0.1:9005:40012.")])]),e._v(" "),t("p",[e._v("Examples of input instructions for different systems are as follows:")]),e._v(" "),t("p",[e._v("Linux and MacOS：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > ./bin/nodetool.sh -h 127.0.0.1 -p 31999 ring\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Windows：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > .\\bin\\nodetool.bat -h 127.0.0.1 -p 31999 ring\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Press enter to execute the command.")]),e._v(" "),t("p",[e._v("The output of the example instruction is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Node Identifier                                 Node \n330411070           ->          127.0.0.1:9003:40010 \n330454032           ->          127.0.0.1:9004:40011 \n330496472           ->          127.0.0.1:9005:40012\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("The above output shows that there are three nodes in the current cluster,\nand the output results are ordered by their identifier ascendant.")]),e._v(" "),t("h3",{attrs:{id:"query-data-partition-and-metadata-partition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-data-partition-and-metadata-partition"}},[e._v("#")]),e._v(" Query data partition and metadata partition")]),e._v(" "),t("p",[e._v("The time series metadata of distributed iotdb is divided into multiple data groups according to their storage groups,\nin which the storage group and data partition are many to one relationship.")]),e._v(" "),t("p",[e._v("That is, all metadata of a storage group only exists in the same data group,\nand a data group may contain multiple storage groups.")]),e._v(" "),t("p",[e._v("The data is divided into multiple data groups according to its storage group and timestamp,\nand the time partition granularity is decided by a configuration (currently unavailable).")]),e._v(" "),t("p",[e._v("The data partition is composed of several replica nodes to ensure high availability of data,\nand one of the nodes plays the role of leader.")]),e._v(" "),t("p",[e._v("Through this instruction, the user can know the metadata of a certain path,\nand the nodes under which the data is stored.")]),e._v(" "),t("p",[e._v("1.Input")]),e._v(" "),t("blockquote",[t("p",[e._v("The instruction for querying data partition information is "),t("code",[e._v("partition")]),e._v(".\nThe parameters are described as follows:")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Parameter")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Examples")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("-m")]),e._v(" "),t("td",[e._v("--metadata\tQuery metadata partition, by default only query data partition")]),e._v(" "),t("td",[e._v("-m")])]),e._v(" "),t("tr",[t("td",[e._v("-path")]),e._v(" "),t("td",[e._v("--path \tRequired parameter, the path to be queried. If the path has no corresponding storage group, the query fails")]),e._v(" "),t("td",[e._v("-path root.guangzhou.d1")])]),e._v(" "),t("tr",[t("td",[e._v("-st")]),e._v(" "),t("td",[e._v("--StartTime\tThe system uses the current partition time by default")]),e._v(" "),t("td",[e._v("-st 1576724778159")])]),e._v(" "),t("tr",[t("td",[e._v("-et")]),e._v(" "),t("td",[e._v("--EndTime\tIt is used when querying data partition."),t("br"),e._v("The end time is the current system time by default. "),t("br"),e._v(" If the end time is less than the start time, the end time is the start time by default")]),e._v(" "),t("td",[e._v("-et 1576724778159")])])])]),e._v(" "),t("p",[e._v("2.Output")]),e._v(" "),t("blockquote",[t("p",[e._v("The output is a multi-line string, and each line of string is a key-value pair, where the key represents the partition,\nand the value represents the data group in the format of < key -> value>.")])]),e._v(" "),t("p",[e._v("3.Examples")]),e._v(" "),t("blockquote",[t("p",[e._v("Suppose that the current cluster runs on three nodes: 127.0.0.1:9003:40010, 127.0.0.1:9004:40011, and 127.0.0.1:9005:40012.")]),e._v(" "),t("p",[e._v("The number of copies is 2 and there are 3 storage groups:{ root.beijing , root.shanghai , root.guangzhou}.")])]),e._v(" "),t("ul",[t("li",[e._v("Partition of query data (default time range, time partition interval is one day)")])]),e._v(" "),t("p",[e._v("Linux and MacOS：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > ./bin/nodetool.sh -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Windows：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > .\\bin\\nodetool.bat -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Press enter to execute the command.")]),e._v(" "),t("p",[e._v("The output of the example instruction is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("DATA<root.guangzhou.d1, 1576723735188, 1576723735188>\t->\t[127.0.0.1:9003:40010, 127.0.0.1:9004:40011]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("Partition of query data (specified time range, time partition interval is one day)")])]),e._v(" "),t("p",[e._v("Linux and MacOS：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > ./bin/nodetool.sh -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -st 1576624778159 -et 1576724778159\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Windows：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > .\\bin\\nodetool.bat -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -st 1576624778159 -et 1576724778159\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Press enter to execute the command.")]),e._v(" "),t("p",[e._v("The output of the example instruction is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("DATA<root.guangzhou.d1, 1576627200000, 1576713599999>\t->\t[127.0.0.1:9005:40012, 127.0.0.1:9003:40010] \nDATA<root.guangzhou.d1, 1576713600000, 1576724778159>\t->\t[127.0.0.1:9003:40010, 127.0.0.1:9004:40011] \nDATA<root.guangzhou.d1, 1576624778159, 1576627199999>\t->\t[127.0.0.1:9004:40011, 127.0.0.1:9005:40012]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("ul",[t("li",[e._v("Query metadata partition")])]),e._v(" "),t("p",[e._v("Linux and MacOS：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > ./bin/nodetool.sh -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -m\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Windows：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > .\\bin\\nodetool.bat -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -m\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Press enter to execute the command.")]),e._v(" "),t("p",[e._v("The output of the example instruction is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("DATA<root.guangzhou.d1, 1576723735188, 1576723735188>\t->\t[127.0.0.1:9003:40010, 127.0.0.1:9004:40011]\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The above output shows that the data group to which root.guangzhou.d1 belongs contains two nodes,\nof which 127.0.0.1:9003:40010 is the header node.")]),e._v(" "),t("h3",{attrs:{id:"query-the-number-of-slots-managed-by-the-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-the-number-of-slots-managed-by-the-node"}},[e._v("#")]),e._v(" Query the number of slots managed by the node")]),e._v(" "),t("p",[e._v("Distributed IoTDB divides data into a fixed number of (10000 by default) slots,\nand the leader of the cluster management group divides the slots among data groups.")]),e._v(" "),t("p",[e._v("Through this instruction, you can know the number of slots managed by each data group.")]),e._v(" "),t("ol",[t("li",[e._v("Input")])]),e._v(" "),t("blockquote",[t("p",[e._v("The command to query the data partition information corresponding to the node is "),t("code",[e._v("host")]),e._v(".")]),e._v(" "),t("p",[e._v("The parameters are described as follows:")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Parameter")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Examples")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("-a or --all")]),e._v(" "),t("td",[e._v("Query the number of slots managed by all data groups. By default only data groups of the query node are shown")]),e._v(" "),t("td",[e._v("-a")])])])]),e._v(" "),t("p",[e._v("2.Output")]),e._v(" "),t("blockquote",[t("p",[e._v("The output is a multi-line string, in which each line is a key-value pair, where the key represents the data group,\nand the value represents the number of slots managed, and the format is <key -> value>.")])]),e._v(" "),t("p",[e._v("3.Examples")]),e._v(" "),t("blockquote",[t("p",[e._v("Suppose that the current cluster runs on three nodes: 127.0.0.1:9003:40010, 127.0.0.1:9004:40011, and 127.0.0.1:9005:40012,\nand the number of copies is 2.")])]),e._v(" "),t("ul",[t("li",[e._v("Default Partition Group")])]),e._v(" "),t("p",[e._v("Linux and MacOS：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > ./bin/nodetool.sh -h 127.0.0.1 -p 31999 host\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Windows：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > .\\bin\\nodetool.bat -h 127.0.0.1 -p 31999 host\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Press enter to execute the command.")]),e._v(" "),t("p",[e._v("The output of the example instruction is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Raft group                                                 Slot Number\n(127.0.0.1:9003:40010, 127.0.0.1:9004:40011)      ->                3333\n(127.0.0.1:9005:40012, 127.0.0.1:9003:40010)      ->                3334\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("ul",[t("li",[e._v("All Partition Groups")])]),e._v(" "),t("p",[e._v("Linux and MacOS：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > ./bin/nodetool.sh -h 127.0.0.1 -p 31999 host -a\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Windows：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > .\\bin\\nodetool.bat -h 127.0.0.1 -p 31999 host -a\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Press enter to execute the command.")]),e._v(" "),t("p",[e._v("The output of the example instruction is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Raft group                                                 Slot Number\n(127.0.0.1:9003:40010, 127.0.0.1:9004:40011)      ->                3333\n(127.0.0.1:9004:40011, 127.0.0.1:9005:40012)      ->                3333\n(127.0.0.1:9005:40012, 127.0.0.1:9003:40010)      ->                3334 \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("h3",{attrs:{id:"query-node-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-node-status"}},[e._v("#")]),e._v(" Query node status")]),e._v(" "),t("p",[e._v("Distributed IoTDB contains multiple nodes.\nFor any node, there is a possibility that it cannot provide services normally due to network or hardware problems.")]),e._v(" "),t("p",[e._v("Through this instruction, you can know the current status of all nodes in the cluster.")]),e._v(" "),t("p",[e._v("1.Input")]),e._v(" "),t("blockquote",[t("p",[e._v("status")])]),e._v(" "),t("p",[e._v("2.Output")]),e._v(" "),t("blockquote",[t("p",[e._v('The output is a multi-line string, where each line is a key-value pair, where the key represents the node (IP: METAPORT:DATAPORT),\nthe value indicates the status of the node, "on" is normal, "off" is abnormal, and the format is < key -> value>.')])]),e._v(" "),t("p",[e._v("3.Examples")]),e._v(" "),t("blockquote",[t("p",[e._v("Suppose that the current cluster runs on three nodes: 127.0.0.1:9003:40010, 127.0.0.1:9004:40011, and 127.0.0.1:9005:40012,\nand the number of copies is 2.")])]),e._v(" "),t("p",[e._v("Linux and MacOS：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > ./bin/nodetool.sh -h 127.0.0.1 -p 31999 status\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Windows：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > .\\bin\\nodetool.bat -h 127.0.0.1 -p 31999 status\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Press enter to execute the command.")]),e._v(" "),t("p",[e._v("The output of the example instruction is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Node                                Status \n127.0.0.1:9003:40010          ->        on \n127.0.0.1:9005:40012          ->        off \n127.0.0.1:9004:40011          ->        on\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("The above output indicates that 127.0.0.1:9003:40010 nodes and 127.0.0.1:9004:40011 nodes are in normal state,\nand 127.0.0.1:9005:40012 nodes cannot provide services.")])])}),[],!1,null,null,null);t.default=n.exports}}]);