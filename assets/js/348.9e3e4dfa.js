(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{754:function(e,t,a){"use strict";a.r(t);var s=a(19),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"export-schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-schema"}},[e._v("#")]),e._v(" Export Schema")]),e._v(" "),t("p",[e._v("The schema export operation exports the information about store group, timeseries, and schema template in the current IoTDB in the form of "),t("code",[e._v("mlog.bin")]),e._v(" and "),t("code",[e._v("tlog.txt")]),e._v(" to the specified directory.")]),e._v(" "),t("p",[e._v("The exported "),t("code",[e._v("mlog.bin")]),e._v(" and "),t("code",[e._v("tlog.txt")]),e._v(" files can be incrementally loaded into an IoTDB instance.")]),e._v(" "),t("h3",{attrs:{id:"export-schema-with-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-schema-with-sql"}},[e._v("#")]),e._v(" Export Schema with SQL")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("EXPORT SCHEMA '<path/dir>' \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"export-schema-with-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-schema-with-script"}},[e._v("#")]),e._v(" Export Schema with Script")]),e._v(" "),t("p",[e._v("Linux/MacOS")]),e._v(" "),t("blockquote",[t("p",[e._v("./exportSchema.sh -d /yourpath/data/system/schema -o /yourpath/targetDir")])]),e._v(" "),t("p",[e._v("Windows")]),e._v(" "),t("blockquote",[t("p",[e._v("./exportSchema.bat-d /yourpath/data/system/schema -o /yourpath/targetDir")])]),e._v(" "),t("p",[e._v("Export destination directory on server need to be specified when exporting metadata using scripting. Note that the target directory path must be absolute path.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("usage: ExportSchema -o <target directory path> [-h <host address>] [-p <port>] [-u <user>] [-pw <password>] [-help]\n -o <target directory path>   Need to specify a absolute target directory\n                              path on server（required)\n -h <host address>            Could specify a specify the IoTDB host\n                              address, default is 127.0.0.1 (optional)\n -p <port>                    Could specify a specify the IoTDB port,\n                              default is 6667 (optional)\n -u <user>                    Could specify the IoTDB user name, default\n                              is root (optional)\n -pw <password>               Could specify the IoTDB password, default is\n                              root (optional)\n -help,--help                 Display help information\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("h3",{attrs:{id:"q-a"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[e._v("#")]),e._v(" Q&A")]),e._v(" "),t("ul",[t("li",[e._v("Cannot find or load the main class ExportSchema\n"),t("ul",[t("li",[e._v("It may be because the environment variable $IOTDB_HOME is not set, please set the environment variable and try again")])])]),e._v(" "),t("li",[e._v("Encounter an error, because: File ... already exist.\n"),t("ul",[t("li",[e._v("There is already a mlog.bin or tlog.txt file in the target directory, please check the target directory and try again")])])])]),e._v(" "),t("h3",{attrs:{id:"load-schema"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-schema"}},[e._v("#")]),e._v(" Load Schema")]),e._v(" "),t("p",[e._v("Please refer to "),t("a",{attrs:{href:"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MLogLoad Tool"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);