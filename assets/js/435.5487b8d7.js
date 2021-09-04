(window.webpackJsonp=window.webpackJsonp||[]).push([[435],{1011:function(t,e,a){"use strict";a.r(e);var s=a(71),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("下面是 IoTDB 生成或使用的文件")]),t._v(" "),a("p",[t._v("持续更新中。..")])]),t._v(" "),a("h1",{attrs:{id:"单机模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单机模式"}},[t._v("#")]),t._v(" 单机模式")]),t._v(" "),a("h2",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("blockquote",[a("p",[t._v("conf 目录下")])]),t._v(" "),a("ol",[a("li",[t._v("iotdb-engine.properties")]),t._v(" "),a("li",[t._v("logback.xml")]),t._v(" "),a("li",[t._v("iotdb-env.sh")]),t._v(" "),a("li",[t._v("jmx.access")]),t._v(" "),a("li",[t._v("jmx.password")]),t._v(" "),a("li",[t._v("iotdb-sync-client.properties\n"),a("ul",[a("li",[t._v("只有 Sync 工具会使用")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/system/schema 目录下")])]),t._v(" "),a("ol",[a("li",[t._v("system.properties\n"),a("ul",[a("li",[t._v("记录的是所有不能变动的配置，启动时会检查，防止系统错误")])])])]),t._v(" "),a("h2",{attrs:{id:"状态相关的文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态相关的文件"}},[t._v("#")]),t._v(" 状态相关的文件")]),t._v(" "),a("h3",{attrs:{id:"元数据相关文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元数据相关文件"}},[t._v("#")]),t._v(" 元数据相关文件")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/system/schema 目录下")])]),t._v(" "),a("h4",{attrs:{id:"元数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[t._v("#")]),t._v(" 元数据")]),t._v(" "),a("ol",[a("li",[t._v("mlog.bin\n"),a("ul",[a("li",[t._v("记录的是元数据操作")])])]),t._v(" "),a("li",[t._v("mtree-1.snapshot\n"),a("ul",[a("li",[t._v("元数据快照")])])]),t._v(" "),a("li",[t._v("mtree-1.snapshot.tmp\n"),a("ul",[a("li",[t._v("临时文件，防止快照更新时，损坏旧快照文件")])])])]),t._v(" "),a("h4",{attrs:{id:"标签和属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签和属性"}},[t._v("#")]),t._v(" 标签和属性")]),t._v(" "),a("ol",[a("li",[t._v("tlog.txt\n"),a("ul",[a("li",[t._v("存储每个时序的标签和属性")]),t._v(" "),a("li",[t._v("默认情况下每个时序 700 字节")])])])]),t._v(" "),a("h3",{attrs:{id:"数据相关文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据相关文件"}},[t._v("#")]),t._v(" 数据相关文件")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/data/目录下")])]),t._v(" "),a("h4",{attrs:{id:"wal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wal"}},[t._v("#")]),t._v(" WAL")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/wal 目录下")])]),t._v(" "),a("ol",[a("li",[t._v("{StroageName}-{TsFileName}/wal1\n"),a("ul",[a("li",[t._v("每个 memtable 会对应一个 wal 文件")])])])]),t._v(" "),a("h4",{attrs:{id:"tsfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsfile"}},[t._v("#")]),t._v(" TsFile")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/data/sequence or unsequence/{StorageGroupName}/{TimePartitionId}/目录下")])]),t._v(" "),a("ol",[a("li",[t._v("{time}-{version}-{mergeCnt}.tsfile\n"),a("ul",[a("li",[t._v("数据文件")])])]),t._v(" "),a("li",[t._v("{TsFileName}.tsfile.mod\n"),a("ul",[a("li",[t._v("更新文件，主要记录删除操作")])])])]),t._v(" "),a("h4",{attrs:{id:"tsfileresource"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsfileresource"}},[t._v("#")]),t._v(" TsFileResource")]),t._v(" "),a("ol",[a("li",[t._v("{TsFileName}.tsfile.resource\n"),a("ul",[a("li",[t._v("TsFile 的概要与索引文件")])])]),t._v(" "),a("li",[t._v("{TsFileName}.tsfile.resource.temp\n"),a("ul",[a("li",[t._v("临时文件，用于避免更新 tsfile.resource 时损坏 tsfile.resource")])])]),t._v(" "),a("li",[t._v("{TsFileName}.tsfile.resource.closing\n"),a("ul",[a("li",[t._v("关闭标记文件，用于标记 TsFile 处于关闭状态，重启后可以据此选择是关闭或继续写入该文件")])])])]),t._v(" "),a("h4",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" Version")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/system/storage_groups/{StorageGroupName}/{TimePartitionId} or upgrade 目录下")])]),t._v(" "),a("ol",[a("li",[t._v("Version-{version}\n"),a("ul",[a("li",[t._v("版本号文件，使用文件名来记录当前最大的版本号")])])])]),t._v(" "),a("h4",{attrs:{id:"upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[t._v("#")]),t._v(" Upgrade")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/system/upgrade 目录下")])]),t._v(" "),a("ol",[a("li",[t._v("upgrade.txt\n"),a("ul",[a("li",[t._v("记录升级进度")])])])]),t._v(" "),a("h4",{attrs:{id:"merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[t._v("#")]),t._v(" Merge")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/system/storage_groups/{StorageGroup}/目录下")])]),t._v(" "),a("ol",[a("li",[t._v("merge.mods\n"),a("ul",[a("li",[t._v("记录合并过程中发生的删除等操作")])])]),t._v(" "),a("li",[t._v("merge.log\n"),a("ul",[a("li",[t._v("记录合并进展")])])]),t._v(" "),a("li",[t._v("tsfile.merge\n"),a("ul",[a("li",[t._v("临时文件，每个顺序文件在合并时会产生一个对应的 merge 文件，用于存放临时数据")])])])]),t._v(" "),a("h4",{attrs:{id:"authority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authority"}},[t._v("#")]),t._v(" Authority")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/system/users/目录下是用户信息\n在 basedir/system/roles/目录下是角色信息")])]),t._v(" "),a("h4",{attrs:{id:"compressratio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compressratio"}},[t._v("#")]),t._v(" CompressRatio")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/system/compression_ration 目录下")])]),t._v(" "),a("ol",[a("li",[t._v("Ration-{compressionRatioSum}-{calTimes}\n"),a("ul",[a("li",[t._v("记录每个文件的压缩率")])])])]),t._v(" "),a("hr"),t._v(" "),a("h1",{attrs:{id:"集群模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群模式"}},[t._v("#")]),t._v(" 集群模式")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：下面文件是相对单机新增的文件列表")])]),t._v(" "),a("h2",{attrs:{id:"配置文件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-2"}},[t._v("#")]),t._v(" 配置文件")]),t._v(" "),a("ol",[a("li",[t._v("iotdb-cluster.properties")])]),t._v(" "),a("h2",{attrs:{id:"状态相关文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态相关文件"}},[t._v("#")]),t._v(" 状态相关文件")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir 目录下")])]),t._v(" "),a("ol",[a("li",[t._v("node_identifier\n"),a("ul",[a("li",[t._v("本地节点在集群中的唯一标识")])])]),t._v(" "),a("li",[t._v("partitions\n"),a("ul",[a("li",[t._v("分区表文件，记录数据分布信息")])])]),t._v(" "),a("li",[t._v("{time}_{random}.task\n"),a("ul",[a("li",[t._v("pullSnapshotTask 文件，记录的是 slot 和 owner，当一个节点加入集群时，会创建这个文件来跟踪数据拉取情况")]),t._v(" "),a("li",[t._v("在 basedir/raft/{nodeIdentifier}/snapshot_task/目录下")])])])]),t._v(" "),a("h2",{attrs:{id:"raft-相关文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raft-相关文件"}},[t._v("#")]),t._v(" Raft 相关文件")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/system/raftLog/{nodeIdentifier}/目录下")])]),t._v(" "),a("h3",{attrs:{id:"raft-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raft-log"}},[t._v("#")]),t._v(" Raft Log")]),t._v(" "),a("ol",[a("li",[t._v(".data-{version}\n"),a("ul",[a("li",[t._v("raft committed log, 默认只保留最新的 1000 条日志")])])])]),t._v(" "),a("h3",{attrs:{id:"raft-meta"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raft-meta"}},[t._v("#")]),t._v(" Raft Meta")]),t._v(" "),a("ol",[a("li",[t._v("logMeta\n"),a("ul",[a("li",[t._v("raft 一些相关元数据，例如选举相关信息和日志提交信息\n"),a("ul",[a("li",[t._v("hardState: voteFor, term")]),t._v(" "),a("li",[t._v("Meta: commitLogTerm, commitLogIndex, lastLogTerm, lastLogIndex")]),t._v(" "),a("li",[t._v("...")])])])])]),t._v(" "),a("li",[t._v("logMeta.tmp\n"),a("ul",[a("li",[t._v("临时文件，用于更新 logMeta 时防止损坏旧的 logMeta 文件")])])])]),t._v(" "),a("h3",{attrs:{id:"raft-catch-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raft-catch-up"}},[t._v("#")]),t._v(" Raft Catch Up")]),t._v(" "),a("blockquote",[a("p",[t._v("在 basedir/remote/{nodeIdentifier}/{storageGroupName}/{partitionNum}/目录下")])]),t._v(" "),a("ol",[a("li",[t._v("{fileName}.tsfile\n"),a("ul",[a("li",[t._v("远程 TsFile，拉取完毕会 load 进对应的存储组数据目录下")])])]),t._v(" "),a("li",[t._v("{fileName}.tsfile.mod\n"),a("ul",[a("li",[t._v("远程更新文件 TsFile.mod，拉取完毕会 load 进对应的存储组数据目录下")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);