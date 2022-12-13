(window.webpackJsonp=window.webpackJsonp||[]).push([[660],{1060:function(t,e,a){"use strict";a.r(e);var _=a(19),l=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"iotdb-部署推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-部署推荐"}},[t._v("#")]),t._v(" IoTDB 部署推荐")]),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("系统能力")]),t._v(" "),e("ul",[e("li",[t._v("性能需求：系统读写速度，压缩比")]),t._v(" "),e("li",[t._v("扩展性：系统能够用多节点管理数据，本质上是数据是否可分区管理")]),t._v(" "),e("li",[t._v("高可用：系统能够容忍节点失效，本质上是数据是否有副本")]),t._v(" "),e("li",[t._v("一致性：当数据有多副本时，不同副本是否一致，本质上用户是否能将数据库当做单机看待")])]),t._v(" "),e("p",[t._v("缩写")]),t._v(" "),e("ul",[e("li",[t._v("C：ConfigNode")]),t._v(" "),e("li",[t._v("D：DataNode")]),t._v(" "),e("li",[t._v("aCbD：a 个 ConfigNode 和 b 个 DataNode")])]),t._v(" "),e("h2",{attrs:{id:"部署模式选型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署模式选型"}},[t._v("#")]),t._v(" 部署模式选型")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("模式")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("性能")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("扩展性")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("高可用")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("一致性")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("轻量单机模式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("无")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("可扩展单节点模式 （默认）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("高性能分布式模式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("强一致分布式模式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("中")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("高")])])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("配置")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("轻量单机模式")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("可扩展单节点模式")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("高性能分布式模式")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("强一致分布式模式")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ConfigNode 个数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥1 （奇数）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥1 （奇数）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥1（奇数）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("DataNode 个数")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥3")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("元数据副本 schema_replication_factor")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("数据副本 data_replication_factor")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ConfigNode 协议 config_node_consensus_protocol_class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Simple")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("SchemaRegion 协议 schema_region_consensus_protocol_class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Simple")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("DataRegion 协议 data_region_consensus_protocol_class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Simple")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoT")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoT")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")])])])]),t._v(" "),e("h2",{attrs:{id:"部署配置推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署配置推荐"}},[t._v("#")]),t._v(" 部署配置推荐")]),t._v(" "),e("h3",{attrs:{id:"从-0-13-版本升级到-1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从-0-13-版本升级到-1-0"}},[t._v("#")]),t._v(" 从 0.13 版本升级到 1.0")]),t._v(" "),e("p",[t._v("场景：\n已在 0.13 版本存储了部分数据，希望迁移到 1.0 版本，并且与 0.13 表现保持一致。")]),t._v(" "),e("p",[t._v("可选方案：")]),t._v(" "),e("ol",[e("li",[t._v("升级到 1C1D 单机版，ConfigNode 分配 2G 内存，DataNode 与 0.13 一致。")]),t._v(" "),e("li",[t._v("升级到 3C3D 高性能分布式，ConfigNode 分配 2G 内存，DataNode 与 0.13 一致。")])]),t._v(" "),e("p",[t._v("配置修改：\n1.0 配置参数修改：")]),t._v(" "),e("ul",[e("li",[t._v("数据目录不要指向0.13原有数据目录")]),t._v(" "),e("li",[t._v("region_group_extension_strategy=COSTOM")]),t._v(" "),e("li",[t._v("data_region_group_per_database\n"),e("ul",[e("li",[t._v("如果是 3C3D 高性能分布式：则改为：集群 CPU 总核数/ 数据副本数")]),t._v(" "),e("li",[t._v('如果是 1C1D，则改为：等于 0.13 的 virtual_storage_group_num 即可 （"database"一词 与 0.13 中的 "sg" 同义）')])])])]),t._v(" "),e("p",[t._v("数据迁移：\n配置修改完成后，通过 load-tsfile 工具将 0.13 的 TsFile 都加载进 1.0 的 IoTDB 中，即可使用。")]),t._v(" "),e("h3",{attrs:{id:"直接使用-1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#直接使用-1-0"}},[t._v("#")]),t._v(" 直接使用 1.0")]),t._v(" "),e("p",[e("strong",[t._v("推荐用户仅设置 1 个 Database")])]),t._v(" "),e("h4",{attrs:{id:"内存设置方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存设置方法"}},[t._v("#")]),t._v(" 内存设置方法")]),t._v(" "),e("h5",{attrs:{id:"根据活跃序列数估计内存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据活跃序列数估计内存"}},[t._v("#")]),t._v(" 根据活跃序列数估计内存")]),t._v(" "),e("p",[t._v("集群 DataNode 总堆内内存（GB） = 活跃序列数/100000 * 数据副本数")]),t._v(" "),e("p",[t._v("每个 DataNode 堆内内存（GB）= 集群DataNode总堆内内存 / DataNode 个数")]),t._v(" "),e("blockquote",[e("p",[t._v("假设需要用3C3D管理100万条序列，数据采用3副本，则：")]),t._v(" "),e("ul",[e("li",[t._v("集群 DataNode 总堆内内存（GB）：1,000,000 / 100,000 * 3 = 30G")]),t._v(" "),e("li",[t._v("每台 DataNode 的堆内内存配置为：30 / 3 = 10G")])])]),t._v(" "),e("h5",{attrs:{id:"根据总序列数估计内存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根据总序列数估计内存"}},[t._v("#")]),t._v(" 根据总序列数估计内存")]),t._v(" "),e("p",[t._v("集群 DataNode 总堆内内存 （B） = 20 * （180 + 2 * 序列的全路径的平均字符数）* 序列总量 * 元数据副本数")]),t._v(" "),e("p",[t._v("每个 DataNode 内存配置推荐：集群 DataNode 总堆内内存 / DataNode 数目")]),t._v(" "),e("blockquote",[e("p",[t._v("假设需要用3C3D管理100万条序列，元数据采用3副本，序列名形如 root.sg_1.d_10.s_100（约20字符），则：")]),t._v(" "),e("ul",[e("li",[t._v("集群 DataNode 总堆内内存：20 * （180 + 2 * 20）* 1,000,000 * 3 = 13.2 GB")]),t._v(" "),e("li",[t._v("每台 DataNode 的堆内内存配置为：13.2 GB / 3 = 4.4 GB")])])]),t._v(" "),e("h4",{attrs:{id:"磁盘估计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘估计"}},[t._v("#")]),t._v(" 磁盘估计")]),t._v(" "),e("p",[t._v("IoTDB 存储空间=数据存储空间 + 元数据存储空间 + 临时存储空间")]),t._v(" "),e("h5",{attrs:{id:"数据磁盘空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据磁盘空间"}},[t._v("#")]),t._v(" 数据磁盘空间")]),t._v(" "),e("p",[t._v("序列数量 * 采样频率 * 每个数据点大小 * 存储时长 * 副本数 /  10 倍压缩比")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("数据类型 \\ 数据点大小")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("时间戳（字节）")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("值（字节）")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("总共（字节）")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("开关量（Boolean）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("9")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("整型（INT32）/单精度浮点数（FLOAT）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("12")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("长整型（INT64）/双精度浮点数（DOUBLE）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("16")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("字符串（TEXT）")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("假设为 a")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8+a")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("示例：1000设备，每个设备100 测点，共 100000 序列。整型。采样频率1Hz（每秒一次），存储1年，3副本，压缩比按 10 算，则数据存储空间占用：")]),t._v(" "),e("ul",[e("li",[t._v("简版：1000 * 100 * 12 * 86400 * 365 * 3 / 10 = 11T")]),t._v(" "),e("li",[t._v("完整版：1000设备 * 100测点 * 12字节每数据点 * 86400秒每天 * 365天每年 * 3副本 / 10压缩比 = 11T")])])]),t._v(" "),e("h5",{attrs:{id:"元数据磁盘空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元数据磁盘空间"}},[t._v("#")]),t._v(" 元数据磁盘空间")]),t._v(" "),e("p",[t._v("每条序列在磁盘日志文件中大约占用 序列字符数 + 20 字节。\n若序列有tag描述信息，则仍需加上约 tag 总字符数字节的空间。")]),t._v(" "),e("h5",{attrs:{id:"临时磁盘空间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#临时磁盘空间"}},[t._v("#")]),t._v(" 临时磁盘空间")]),t._v(" "),e("p",[t._v("临时磁盘空间 = 写前日志 + 共识协议 + 合并临时空间")]),t._v(" "),e("ol",[e("li",[t._v("写前日志")])]),t._v(" "),e("p",[t._v("最大写前日志空间占用 = memtable 总内存占用 ÷ 最小有效信息占比")]),t._v(" "),e("ul",[e("li",[t._v("memtable 总内存占用和 storage_query_schema_consensus_free_memory_proportion、storage_engine_memory_proportion、write_memory_proportion 三个参数有关")]),t._v(" "),e("li",[t._v("最小有效信息占比由 wal_min_effective_info_ratio 决定")])]),t._v(" "),e("blockquote",[e("p",[t._v("示例：为 IoTDB 分配 16G 内存，配置文件如下\nstorage_query_schema_consensus_free_memory_proportion=3:3:1:1:2\nstorage_engine_memory_proportion=8:2\nwrite_memory_proportion=19:1\nwal_min_effective_info_ratio=0.1\n最大写前日志空间占用 = 16 * (3 / 10) * (8 / 10) * (19 / 20)  ÷ 0.1 = 36.48G")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("共识协议")])]),t._v(" "),e("p",[t._v("Ratis共识协议\n采用Ratis共识协议的情况下，需要额外磁盘空间存储Raft Log。Raft Log会在每一次状态机 Snapshot 之后删除，因此可以通过调整 trigger_snapshot_threshold 参数控制Raft Log最大空间占用。")]),t._v(" "),e("p",[t._v("每一个 Region Raft Log占用最大空间 = 平均请求大小 * trigger_snapshot_threshold。\n集群中一个Region总的Raft Log占用空间和Raft数据副本数成正比。")]),t._v(" "),e("blockquote",[e("p",[t._v("示例：DataRegion, 平均每一次插入20k数据，data_region_trigger_snapshot_threshold = 400,000，那么Raft Log最大占用 = 20K * 400,000 = 8G。\nRaft Log会从0增长到8G，接着在snapshot之后重新变成0。平均占用为4G。\n当副本数为3时，集群中这个DataRegion总Raft Log最大占用 3 * 8G = 24G。")])]),t._v(" "),e("p",[t._v("此外，可以通过data_region_ratis_log_max_size规定每一个DataRegion的Raft Log磁盘占用最大值，\n默认为20G，能够保障运行全程中单DataRegion Raft Log总大小不超过20G。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("合并临时空间")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("空间内合并\n临时文件的磁盘空间 = 源文件大小总和")]),t._v(" "),e("blockquote",[e("p",[t._v("示例：10个源文件，每个文件大小为100M\n临时文件的磁盘空间 = 10 * 100 = 1000M")])])]),t._v(" "),e("li",[e("p",[t._v("跨空间合并\n跨空间合并的临时文件大小与源文件大小和顺乱序数据的重叠度有关，当乱序数据与顺序数据有相同的时间戳时，就认为有重叠。\n乱序数据的重叠度 = 重叠的乱序数据量 / 总的乱序数据量")]),t._v(" "),e("p",[t._v("临时文件的磁盘空间 = 源顺序文件总大小 + 源乱序文件总大小 *（1 - 重叠度）")]),t._v(" "),e("blockquote",[e("p",[t._v("示例：10个顺序文件，10个乱序文件，每个顺序文件100M，每个乱序文件50M，每个乱序文件里有一半的数据与顺序文件有相同的时间戳\n乱序数据的重叠度 = 25M/50M * 100% = 50%\n临时文件的磁盘空间 = 10 * 100 + 10 * 50 * 50% = 1250M")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);