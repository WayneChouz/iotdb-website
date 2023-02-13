(window.webpackJsonp=window.webpackJsonp||[]).push([[588],{994:function(e,t,a){"use strict";a.r(t);var s=a(19),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[e._v("#")]),e._v(" Files")]),e._v(" "),t("p",[e._v("In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data management.")]),e._v(" "),t("p",[e._v("The data in IoTDB is divided into three categories, namely data files, system files, and pre-write log files.")]),e._v(" "),t("h2",{attrs:{id:"data-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-files"}},[e._v("#")]),e._v(" Data Files")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/data/")])]),e._v(" "),t("p",[e._v("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the "),t("code",[e._v("data_dirs")]),e._v(" configuration item (see "),t("RouterLink",{attrs:{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"}},[e._v("file layer")]),e._v(" for details). Other files can be configured through "),t("RouterLink",{attrs:{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"}},[e._v("data_dirs")]),e._v(" configuration item (see "),t("RouterLink",{attrs:{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"}},[e._v("Engine Layer")]),e._v(" for details).")],1),e._v(" "),t("p",[e._v("In order to support users' storage requirements such as disk space expansion better, IoTDB supports multiple file directories storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see "),t("RouterLink",{attrs:{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"}},[e._v("data_dirs")]),e._v(" configuration item), and you can specify or customize the directory selection strategy (see "),t("RouterLink",{attrs:{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"}},[e._v("multi_dir_strategy")]),e._v(" configuration item for details).")],1),e._v(" "),t("h3",{attrs:{id:"tsfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfile"}},[e._v("#")]),e._v(" TsFile")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory data/sequence or unsequence/{DatabaseName}/{DataRegionId}/{TimePartitionId}/")])]),e._v(" "),t("ol",[t("li",[e._v("{time}-{version}-{inner_compaction_count}-{cross_compaction_count}.tsfile\n"),t("ul",[t("li",[e._v("normal data file")])])]),e._v(" "),t("li",[e._v("{TsFileName}.tsfile.mod\n"),t("ul",[t("li",[e._v("modification file")]),e._v(" "),t("li",[e._v("record delete operation")])])])]),e._v(" "),t("h3",{attrs:{id:"tsfileresource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfileresource"}},[e._v("#")]),e._v(" TsFileResource")]),e._v(" "),t("ol",[t("li",[e._v("{TsFileName}.tsfile.resource\n"),t("ul",[t("li",[e._v("descriptor and statistic file of a TsFile")])])])]),e._v(" "),t("h3",{attrs:{id:"与合并相关的数据文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与合并相关的数据文件"}},[e._v("#")]),e._v(" 与合并相关的数据文件")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/data/sequence or unsequence/{DatabaseName}/")])]),e._v(" "),t("ol",[t("li",[e._v("file suffixe with "),t("code",[e._v(".cross")]),e._v(" or "),t("code",[e._v(".inner")]),e._v(" "),t("ul",[t("li",[e._v("temporary files of metadata generated in a compaction task")])])]),e._v(" "),t("li",[e._v("file suffixe with "),t("code",[e._v(".inner-compaction.log")]),e._v(" or "),t("code",[e._v(".cross-compaction.log")]),e._v(" "),t("ul",[t("li",[e._v("record the progress of a compaction task")])])]),e._v(" "),t("li",[e._v("file suffixe with "),t("code",[e._v(".compaction.mods")]),e._v(" "),t("ul",[t("li",[e._v("modification file generated during a compaction task")])])]),e._v(" "),t("li",[e._v("file suffixe with "),t("code",[e._v(".meta")]),e._v(" "),t("ul",[t("li",[e._v("temporary files of metadata generated during a merge")])])])]),e._v(" "),t("h2",{attrs:{id:"system-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-files"}},[e._v("#")]),e._v(" System files")]),e._v(" "),t("p",[e._v("System files include schema files, which store metadata information of data in IoTDB. It can be configured through the "),t("code",[e._v("base_dir")]),e._v(" configuration item (see "),t("RouterLink",{attrs:{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"}},[e._v("System Layer")]),e._v(" for details).")],1),e._v(" "),t("h3",{attrs:{id:"metadata-related-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metadata-related-files"}},[e._v("#")]),e._v(" MetaData Related Files")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/schema")])]),e._v(" "),t("h4",{attrs:{id:"meta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[e._v("#")]),e._v(" Meta")]),e._v(" "),t("ol",[t("li",[e._v("mlog.bin\n"),t("ul",[t("li",[e._v("record the meta operation")])])]),e._v(" "),t("li",[e._v("mtree-1.snapshot\n"),t("ul",[t("li",[e._v("snapshot of metadata")])])]),e._v(" "),t("li",[e._v("mtree-1.snapshot.tmp\n"),t("ul",[t("li",[e._v("temp file, to avoid damaging the snapshot when updating it")])])])]),e._v(" "),t("h4",{attrs:{id:"tags-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tags-attributes"}},[e._v("#")]),e._v(" Tags&Attributes")]),e._v(" "),t("ol",[t("li",[e._v("tlog.txt\n"),t("ul",[t("li",[e._v("store tags and attributes of each TimeSeries")]),e._v(" "),t("li",[e._v("about 700 bytes for each TimeSeries")])])])]),e._v(" "),t("h3",{attrs:{id:"other-system-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-system-files"}},[e._v("#")]),e._v(" Other System Files")]),e._v(" "),t("h4",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/database/{DatabaseName}/{TimePartitionId} or upgrade")])]),e._v(" "),t("ol",[t("li",[e._v("Version-{version}\n"),t("ul",[t("li",[e._v("version file, record the max version in fileName of a storage group")])])])]),e._v(" "),t("h4",{attrs:{id:"upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[e._v("#")]),e._v(" Upgrade")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/upgrade")])]),e._v(" "),t("ol",[t("li",[e._v("upgrade.txt\n"),t("ul",[t("li",[e._v("record which files have been upgraded")])])])]),e._v(" "),t("h4",{attrs:{id:"authority"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authority"}},[e._v("#")]),e._v(" Authority")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/users/\nunder directory basedir/system/roles/")])]),e._v(" "),t("h4",{attrs:{id:"compressratio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compressratio"}},[e._v("#")]),e._v(" CompressRatio")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/compression_ration")])]),e._v(" "),t("ol",[t("li",[e._v("Ration-{compressionRatioSum}-{calTimes}\n"),t("ul",[t("li",[e._v("record compression ratio of each tsfile")])])])]),e._v(" "),t("h2",{attrs:{id:"pre-write-log-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pre-write-log-files"}},[e._v("#")]),e._v(" Pre-write Log Files")]),e._v(" "),t("p",[e._v("Pre-write log files store WAL files. It can be configured through the "),t("code",[e._v("wal_dir")]),e._v(" configuration item (see "),t("RouterLink",{attrs:{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"}},[e._v("System Layer")]),e._v(" for details).")],1),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/wal")])]),e._v(" "),t("ol",[t("li",[e._v("{DatabaseName}-{TsFileName}/wal1\n"),t("ul",[t("li",[e._v("every storage group has several wal files, and every memtable has one associated wal file before it is flushed into a TsFile")])])])]),e._v(" "),t("h2",{attrs:{id:"example-of-setting-data-storage-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-of-setting-data-storage-directory"}},[e._v("#")]),e._v(" Example of Setting Data storage Directory")]),e._v(" "),t("p",[e._v("For a clearer understanding of configuring the data storage directory, we will give an example in this section.")]),e._v(" "),t("p",[e._v("The data directory path included in storage directory setting are: base_dir, data_dirs, multi_dir_strategy, and wal_dir, which refer to system files, data folders, storage strategy, and pre-write log files.")]),e._v(" "),t("p",[e._v("An example of the configuration items are as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dn_system_dir = $IOTDB_HOME/data/datanode/system\ndn_data_dirs = /data1/datanode/data, /data2/datanode/data, /data3/datanode/data \ndn_multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy\ndn_wal_dir= $IOTDB_HOME/data/datanode/wal\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("After setting the configuration, the system will:")]),e._v(" "),t("ul",[t("li",[e._v("Save all system files in $IOTDB_HOME/data/datanode/system")]),e._v(" "),t("li",[e._v("Save TsFile in /data1/datanode/data, /data2/datanode/data, /data3/datanode/data. And the choosing strategy is "),t("code",[e._v("MaxDiskUsableSpaceFirstStrategy")]),e._v(", when data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.")]),e._v(" "),t("li",[e._v("Save WAL data in $IOTDB_HOME/data/datanode/wal")]),e._v(" "),t("li")])])}),[],!1,null,null,null);t.default=i.exports}}]);