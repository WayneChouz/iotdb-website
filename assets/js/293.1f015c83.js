(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{699:function(e,t,a){"use strict";a.r(t);var r=a(19),i=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("blockquote",[t("p",[e._v("Here are all files generated or used by IoTDB")]),e._v(" "),t("p",[e._v("Continuously Updating...")])]),e._v(" "),t("h1",{attrs:{id:"stand-alone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stand-alone"}},[e._v("#")]),e._v(" Stand-alone")]),e._v(" "),t("h2",{attrs:{id:"configuration-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[e._v("#")]),e._v(" Configuration Files")]),e._v(" "),t("blockquote",[t("p",[e._v("under conf directory")])]),e._v(" "),t("ol",[t("li",[e._v("iotdb-engine.properties")]),e._v(" "),t("li",[e._v("logback.xml")]),e._v(" "),t("li",[e._v("iotdb-env.sh")]),e._v(" "),t("li",[e._v("jmx.access")]),e._v(" "),t("li",[e._v("jmx.password")]),e._v(" "),t("li",[e._v("iotdb-sync-client.properties\n"),t("ul",[t("li",[e._v("only sync tool use it")])])])]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/schema")])]),e._v(" "),t("ol",[t("li",[e._v("system.properties\n"),t("ul",[t("li",[e._v("record all immutable properties, will be checked when starting IoTDB to avoid system errors")])])])]),e._v(" "),t("h2",{attrs:{id:"state-related-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-related-files"}},[e._v("#")]),e._v(" State Related Files")]),e._v(" "),t("h3",{attrs:{id:"metadata-related-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metadata-related-files"}},[e._v("#")]),e._v(" MetaData Related Files")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/schema")])]),e._v(" "),t("h4",{attrs:{id:"meta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#meta"}},[e._v("#")]),e._v(" Meta")]),e._v(" "),t("ol",[t("li",[e._v("mlog.bin\n"),t("ul",[t("li",[e._v("record the meta operation")])])]),e._v(" "),t("li",[e._v("mtree-1.snapshot\n"),t("ul",[t("li",[e._v("snapshot of metadata")])])]),e._v(" "),t("li",[e._v("mtree-1.snapshot.tmp\n"),t("ul",[t("li",[e._v("temp file, to avoid damaging the snapshot when updating it")])])])]),e._v(" "),t("h4",{attrs:{id:"tags-attributes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tags-attributes"}},[e._v("#")]),e._v(" Tags&Attributes")]),e._v(" "),t("ol",[t("li",[e._v("tlog.txt\n"),t("ul",[t("li",[e._v("store tags and attributes of each TimeSeries")]),e._v(" "),t("li",[e._v("about 700 bytes for each TimeSeries")])])])]),e._v(" "),t("h3",{attrs:{id:"data-related-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-related-files"}},[e._v("#")]),e._v(" Data Related Files")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/data/")])]),e._v(" "),t("h4",{attrs:{id:"wal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wal"}},[e._v("#")]),e._v(" WAL")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/wal")])]),e._v(" "),t("ol",[t("li",[e._v("{StorageGroupName}-{TsFileName}/wal1\n"),t("ul",[t("li",[e._v("every storage group has several wal files, and every memtable has one associated wal file before it is flushed into a TsFile")])])])]),e._v(" "),t("h4",{attrs:{id:"tsfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfile"}},[e._v("#")]),e._v(" TsFile")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory data/sequence or unsequence/{StorageGroupName}/{TimePartitionId}/")])]),e._v(" "),t("ol",[t("li",[e._v("{time}-{version}-{mergeCnt}.tsfile\n"),t("ul",[t("li",[e._v("normal data file")])])]),e._v(" "),t("li",[e._v("{TsFileName}.tsfile.mod\n"),t("ul",[t("li",[e._v("modification file")]),e._v(" "),t("li",[e._v("record delete operation")])])])]),e._v(" "),t("h4",{attrs:{id:"tsfileresource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfileresource"}},[e._v("#")]),e._v(" TsFileResource")]),e._v(" "),t("ol",[t("li",[e._v("{TsFileName}.tsfile.resource\n"),t("ul",[t("li",[e._v("descriptor and statistic file of a TsFile")])])]),e._v(" "),t("li",[e._v("{TsFileName}.tsfile.resource.temp\n"),t("ul",[t("li",[e._v("temp file")]),e._v(" "),t("li",[e._v("avoid damaging the tsfile.resource when updating it")])])]),e._v(" "),t("li",[e._v("{TsFileName}.tsfile.resource.closing\n"),t("ul",[t("li",[e._v("close flag file, to mark a tsfile closing so during restarts we can continue to close it or reopen it")])])])]),e._v(" "),t("h4",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" Version")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/storage_groups/{StorageGroupName}/{TimePartitionId} or upgrade")])]),e._v(" "),t("ol",[t("li",[e._v("Version-{version}\n"),t("ul",[t("li",[e._v("version file, record the max version in fileName of a storage group")])])])]),e._v(" "),t("h4",{attrs:{id:"upgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[e._v("#")]),e._v(" Upgrade")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/upgrade")])]),e._v(" "),t("ol",[t("li",[e._v("upgrade.txt\n"),t("ul",[t("li",[e._v("record which files have been upgraded")])])])]),e._v(" "),t("h4",{attrs:{id:"merge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[e._v("#")]),e._v(" Merge")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/storage_groups/{StorageGroup}/")])]),e._v(" "),t("ol",[t("li",[e._v("merge.mods\n"),t("ul",[t("li",[e._v("modification file generated during a merge")])])]),e._v(" "),t("li",[e._v("merge.log\n"),t("ul",[t("li",[e._v("record the progress of a merge")])])]),e._v(" "),t("li",[e._v("tsfile.merge\n"),t("ul",[t("li",[e._v("temporary merge result file, an involved sequence tsfile may have one during a merge")])])])]),e._v(" "),t("h4",{attrs:{id:"authority"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authority"}},[e._v("#")]),e._v(" Authority")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/users/\nunder directory basedir/system/roles/")])]),e._v(" "),t("h4",{attrs:{id:"compressratio"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compressratio"}},[e._v("#")]),e._v(" CompressRatio")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/compression_ration")])]),e._v(" "),t("ol",[t("li",[e._v("Ration-{compressionRatioSum}-{calTimes}\n"),t("ul",[t("li",[e._v("record compression ratio of each tsfile")])])])]),e._v(" "),t("hr"),e._v(" "),t("h1",{attrs:{id:"cluster-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster-mode"}},[e._v("#")]),e._v(" Cluster-Mode")]),e._v(" "),t("blockquote",[t("p",[e._v("Attention: the following files are newly added")])]),e._v(" "),t("h2",{attrs:{id:"configuration-files-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files-2"}},[e._v("#")]),e._v(" Configuration Files")]),e._v(" "),t("ol",[t("li",[e._v("iotdb-cluster.properties")])]),e._v(" "),t("h2",{attrs:{id:"state-related-files-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state-related-files-2"}},[e._v("#")]),e._v(" State Related Files")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/")])]),e._v(" "),t("ol",[t("li",[e._v("node_identifier\n"),t("ul",[t("li",[e._v("the identifier of the local node in a cluster")])])]),e._v(" "),t("li",[e._v("partitions\n"),t("ul",[t("li",[e._v("partition table file, records the distribution of data")])])]),e._v(" "),t("li",[e._v("{time}_{random}.task\n"),t("ul",[t("li",[e._v("pullSnapshotTask file, record the slots and owners. When a node joins a cluster,\nit will create pullSnapshotTask file to track which data to be pulled")]),e._v(" "),t("li",[e._v("under directory basedir/raft/{nodeIdentifier}/snapshot_task/")])])])]),e._v(" "),t("h2",{attrs:{id:"raft-related-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raft-related-files"}},[e._v("#")]),e._v(" Raft Related Files")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/system/raftLog/{nodeIdentifier}/")])]),e._v(" "),t("h3",{attrs:{id:"raft-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raft-log"}},[e._v("#")]),e._v(" Raft Log")]),e._v(" "),t("ol",[t("li",[e._v(".data-{version}\n"),t("ul",[t("li",[e._v("raft committed logs, only save the latest 1000(configurable) committed logs")])])])]),e._v(" "),t("h3",{attrs:{id:"raft-meta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raft-meta"}},[e._v("#")]),e._v(" Raft Meta")]),e._v(" "),t("ol",[t("li",[e._v("logMeta\n"),t("ul",[t("li",[e._v("raft meta, like hardState and Meta\n"),t("ul",[t("li",[e._v("hardState: voteFor, term")]),e._v(" "),t("li",[e._v("Meta: commitLogTerm, commitLogIndex, lastLogTerm, lastLogIndex")]),e._v(" "),t("li",[e._v("...")])])])])]),e._v(" "),t("li",[e._v("logMeta.tmp\n"),t("ul",[t("li",[e._v("temp file, to avoid damaging the logMeta when updating it")])])])]),e._v(" "),t("h3",{attrs:{id:"raft-catch-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#raft-catch-up"}},[e._v("#")]),e._v(" Raft Catch Up")]),e._v(" "),t("blockquote",[t("p",[e._v("under directory basedir/remote/{nodeIdentifier}/{storageGroupName}/{partitionNum}/")])]),e._v(" "),t("ol",[t("li",[e._v("{fileName}.tsfile\n"),t("ul",[t("li",[e._v("remote TsFile, will be loaded during snapshot installation")])])]),e._v(" "),t("li",[e._v("{fileName}.tsfile.mod\n"),t("ul",[t("li",[e._v("remote TsFile modification file, will be loaded during snapshot installation")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);