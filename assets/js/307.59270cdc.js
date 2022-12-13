(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{709:function(e,t,a){"use strict";a.r(t);var i=a(19),s=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[e._v("#")]),e._v(" Files")]),e._v(" "),t("p",[e._v("In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data management.")]),e._v(" "),t("p",[e._v("The data in IoTDB is divided into three categories, namely data files, system files, and pre-write log files.")]),e._v(" "),t("h3",{attrs:{id:"data-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-files"}},[e._v("#")]),e._v(" Data Files")]),e._v(" "),t("p",[e._v("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the "),t("code",[e._v("data_dirs")]),e._v(" configuration item (see "),t("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/Config-Manual.html"}},[e._v("file layer")]),e._v(" for details). Other files can be configured through "),t("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/Config-Manual.html"}},[e._v("data_dirs")]),e._v(" configuration item (see "),t("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/Config-Manual.html"}},[e._v("Engine Layer")]),e._v(" for details).")],1),e._v(" "),t("p",[e._v("In order to support users' storage requirements such as disk space expansion better, IoTDB supports multiple file directories storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see "),t("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/Config-Manual.html"}},[e._v("data_dirs")]),e._v(" configuration item), and you can specify or customize the directory selection strategy (see "),t("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/Config-Manual.html"}},[e._v("multi_dir_strategy")]),e._v(" configuration item for details).")],1),e._v(" "),t("h3",{attrs:{id:"system-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-files"}},[e._v("#")]),e._v(" System files")]),e._v(" "),t("p",[e._v("System files include schema files, which store metadata information of data in IoTDB. It can be configured through the "),t("code",[e._v("base_dir")]),e._v(" configuration item (see "),t("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/Config-Manual.html"}},[e._v("System Layer")]),e._v(" for details).")],1),e._v(" "),t("h3",{attrs:{id:"pre-write-log-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-write-log-files"}},[e._v("#")]),e._v(" Pre-write Log Files")]),e._v(" "),t("p",[e._v("Pre-write log files store WAL files. It can be configured through the "),t("code",[e._v("wal_dir")]),e._v(" configuration item (see "),t("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/Config-Manual.html"}},[e._v("System Layer")]),e._v(" for details).")],1),e._v(" "),t("h3",{attrs:{id:"example-of-setting-data-storage-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-of-setting-data-storage-directory"}},[e._v("#")]),e._v(" Example of Setting Data storage Directory")]),e._v(" "),t("p",[e._v("For a clearer understanding of configuring the data storage directory, we will give an example in this section.")]),e._v(" "),t("p",[e._v("The data directory path included in storage directory setting are: base_dir, data_dirs, multi_dir_strategy, and wal_dir, which refer to system files, data folders, storage strategy, and pre-write log files.")]),e._v(" "),t("p",[e._v("An example of the configuration items are as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("base_dir = $IOTDB_HOME/data\ndata_dirs = /data1/data, /data2/data, /data3/data \nmulti_dir_strategy=MaxDiskUsableSpaceFirstStrategy\nwal_dir= $IOTDB_HOME/data/wal\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("After setting the configuration, the system will:")]),e._v(" "),t("ul",[t("li",[e._v("Save all system files in $IOTDB_HOME/data")]),e._v(" "),t("li",[e._v("Save TsFile in /data1/data, /data2/data, /data3/data. And the choosing strategy is "),t("code",[e._v("MaxDiskUsableSpaceFirstStrategy")]),e._v(", when data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.")]),e._v(" "),t("li",[e._v("Save WAL data in $IOTDB_HOME/data/wal")])])])}),[],!1,null,null,null);t.default=s.exports}}]);