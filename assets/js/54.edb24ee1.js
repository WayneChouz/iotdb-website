(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{462:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"dbeaver-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dbeaver-iotdb"}},[e._v("#")]),e._v(" DBeaver-IoTDB")]),e._v(" "),t("p",[e._v("DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB via the JDBC driver.")]),e._v(" "),t("h3",{attrs:{id:"dbeaver-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dbeaver-installation"}},[e._v("#")]),e._v(" DBeaver Installation")]),e._v(" "),t("ul",[t("li",[e._v("From DBeaver site: https://dbeaver.io/download/")])]),e._v(" "),t("h3",{attrs:{id:"iotdb-installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-installation"}},[e._v("#")]),e._v(" IoTDB Installation")]),e._v(" "),t("ul",[t("li",[e._v("Download binary version\n"),t("ul",[t("li",[e._v("From IoTDB site: https://iotdb.apache.org/Download/")]),e._v(" "),t("li",[e._v("Version >= 0.13.0")])])]),e._v(" "),t("li",[e._v("Or compile from source code\n"),t("ul",[t("li",[e._v("See https://github.com/apache/iotdb")])])])]),e._v(" "),t("h3",{attrs:{id:"connect-iotdb-and-dbeaver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connect-iotdb-and-dbeaver"}},[e._v("#")]),e._v(" Connect IoTDB and DBeaver")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Start IoTDB server")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("./sbin/start-server.sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Start DBeaver")])]),e._v(" "),t("li",[t("p",[e._v("Open Driver Manager")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitbox.apache.org/repos/asf?p=iotdb-bin-resources.git;a=blob_plain;f=docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2010.56.22%20AM.png",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("Create a new driver type for IoTDB")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitbox.apache.org/repos/asf?p=iotdb-bin-resources.git;a=blob_plain;f=docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2010.56.51%20AM.png",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("Download "),t("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sources"),t("OutboundLink")],1),e._v("，unzip it and compile jdbc driver by the following command")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("mvn clean package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-pl")]),e._v(" jdbc "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-am")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DskipTests")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-P")]),e._v(" get-jar-with-dependencies\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Find and add a lib named "),t("code",[e._v("apache-iotdb-jdbc-{version}-jar-with-dependencies.jar")]),e._v(", which should be under "),t("code",[e._v("jdbc/target/")]),e._v(", then select "),t("code",[e._v("Find Class")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitbox.apache.org/repos/asf?p=iotdb-bin-resources.git;a=blob_plain;f=docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202022-04-26%20at%205.57.32%20PM.png",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("Edit the driver Settings")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitbox.apache.org/repos/asf?p=iotdb-bin-resources.git;a=blob_plain;f=docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.03.03%20AM.png",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("Open New DataBase Connection and select iotdb")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitbox.apache.org/repos/asf?p=iotdb-bin-resources.git;a=blob_plain;f=docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.05.44%20AM.png",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("Edit JDBC Connection Settings")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("JDBC URL: jdbc:iotdb://127.0.0.1:6667/\nUsername: root\nPassword: root\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://gitbox.apache.org/repos/asf?p=iotdb-bin-resources.git;a=blob_plain;f=docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.07.09%20AM.png",alt:""}})]),e._v(" "),t("ol",{attrs:{start:"11"}},[t("li",[e._v("Test Connection")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitbox.apache.org/repos/asf?p=iotdb-bin-resources.git;a=blob_plain;f=docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.07.31%20AM.png",alt:""}})]),e._v(" "),t("ol",{attrs:{start:"12"}},[t("li",[e._v("Enjoy IoTDB with DBeaver")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://gitbox.apache.org/repos/asf?p=iotdb-bin-resources.git;a=blob_plain;f=docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.08.33%20AM.png",alt:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);