(window.webpackJsonp=window.webpackJsonp||[]).push([[1058],{1378:function(t,e,a){"use strict";a.r(e);var s=a(1),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("In IoTDB, there are many kinds of data needed to be storage. In this section, we will introduce IoTDB's data storage strategy in order to give you an intuitive understanding of IoTDB's data management.")]),t._v(" "),a("p",[t._v("The data that IoTDB stores is divided into three categories, namely data files, system files, and pre-write log files.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the "),a("code",[t._v("data_dirs")]),t._v(" configuration item (see "),a("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("file layer")]),t._v(" for details). Other files can be configured through "),a("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("data_dirs")]),t._v(" configuration item (see "),a("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("Engine Layer")]),t._v(" for details).")],1),t._v(" "),a("p",[t._v("In order to better support users' storage requirements such as disk space expansion, IoTDB supports multiple file directories storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see "),a("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("data_dirs")]),t._v(" configuration item), and you can specify or customize the directory selection policy (see "),a("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("multi_dir_strategy")]),t._v(" configuration item for details).")],1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("System files include schema files, which store metadata information of data in IoTDB. It can be configured through the "),a("code",[t._v("base_dir")]),t._v(" configuration item (see "),a("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("System Layer")]),t._v(" for details).")],1),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Pre-write log files store WAL files. It can be configured through the "),a("code",[t._v("wal_dir")]),t._v(" configuration item (see "),a("router-link",{attrs:{to:"./../3-Server/2-Single Node Setup.html"}},[t._v("System Layer")]),t._v(" for details).")],1),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("For a clearer understanding of configuring the data storage directory, we will give an example in this section.")]),t._v(" "),a("p",[t._v("All data directory paths involved in storage directory setting are: base_dir, data_dirs, multi_dir_strategy, and wal_dir, which refer to system files, data folders, storage strategy, and pre-write log files.")]),t._v(" "),a("p",[t._v("An example of the configuration items are as follows:")]),t._v(" "),t._m(5),a("p",[t._v("After setting the configuration, the system will:")]),t._v(" "),t._m(6)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[this._v("#")]),this._v(" Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"data-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-files"}},[this._v("#")]),this._v(" Data Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"system-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-files"}},[this._v("#")]),this._v(" System files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pre-write-log-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pre-write-log-files"}},[this._v("#")]),this._v(" Pre-write Log Files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example-of-setting-data-storage-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-of-setting-data-storage-directory"}},[this._v("#")]),this._v(" Example of Setting Data storage Directory")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("base_dir = $IOTDB_HOME/data\ndata_dirs = /data1/data, /data2/data, /data3/data \nmulti_dir_strategy=MaxDiskUsableSpaceFirstStrategy\nwal_dir= $IOTDB_HOME/data/wal\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br"),e("span",{staticClass:"line-number"},[this._v("3")]),e("br"),e("span",{staticClass:"line-number"},[this._v("4")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Save all system files in $IOTDB_HOME/data")]),this._v(" "),e("li",[this._v("Save TsFile in /data1/data, /data2/data, /data3/data. And the choosing strategy is "),e("code",[this._v("MaxDiskUsableSpaceFirstStrategy")]),this._v(", that is every time data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.")]),this._v(" "),e("li",[this._v("Save WAL data in $IOTDB_HOME/data/wal")])])}],!1,null,null,null);e.default=i.exports}}]);