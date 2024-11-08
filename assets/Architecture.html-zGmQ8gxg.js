import{_ as o,c as r,d as e,o as i}from"./app-ED5DzO24.js";const a={};function n(l,t){return i(),r("div",null,t[0]||(t[0]=[e("h2",{id:"系统架构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#系统架构"},[e("span",null,"系统架构")])],-1),e("p",null,"IoTDB 套件由若干个组件构成，共同形成“数据收集-数据写入-数据存储-数据查询-数据可视化-数据分析”等一系列功能。",-1),e("p",null,"如下图展示了使用 IoTDB 套件全部组件后形成的整体应用架构。下文称所有组件形成 IoTDB 套件，而 IoTDB 特指其中的时间序列数据库组件。",-1),e("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/UserGuide/IoTDB-Introduction/Architecture/Structure-of-Apache-IoTDB-cn.png?raw=true"},null,-1),e("p",null,"在上图中，用户可以通过 JDBC 将来自设备上传感器采集的时序数据、服务器负载和 CPU 内存等系统状态数据、消息队列中的时序数据、应用程序的时序数据或者其他数据库中的时序数据导入到本地或者远程的 IoTDB 中。用户还可以将上述数据直接写成本地（或位于 HDFS 上）的 TsFile 文件。",-1),e("p",null,"可以将 TsFile 文件写入到 HDFS 上，进而实现在 Hadoop 或 Spark 的数据处理平台上的诸如异常检测、机器学习等数据处理任务。",-1),e("p",null,"对于写入到 HDFS 或者本地的 TsFile 文件，可以利用 TsFile-Hadoop 或 TsFile-Spark 连接器允许 Hadoop 或 Spark 进行数据处理。",-1),e("p",null,"对于分析的结果，可以写回成 TsFile 文件。",-1),e("p",null,"IoTDB 和 TsFile 还提供了相应的客户端工具，满足用户查看和写入数据的 SQL 形式、脚本形式和图形化形式等多种需求。",-1)]))}const p=o(a,[["render",n],["__file","Architecture.html.vue"]]),s=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/IoTDB-Introduction/Architecture.html","title":"","lang":"zh-CN","frontmatter":{"description":"系统架构 IoTDB 套件由若干个组件构成，共同形成“数据收集-数据写入-数据存储-数据查询-数据可视化-数据分析”等一系列功能。 如下图展示了使用 IoTDB 套件全部组件后形成的整体应用架构。下文称所有组件形成 IoTDB 套件，而 IoTDB 特指其中的时间序列数据库组件。 在上图中，用户可以通过 JDBC 将来自设备上传感器采集的时序数据、服务...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/IoTDB-Introduction/Architecture.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/IoTDB-Introduction/Architecture.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"系统架构 IoTDB 套件由若干个组件构成，共同形成“数据收集-数据写入-数据存储-数据查询-数据可视化-数据分析”等一系列功能。 如下图展示了使用 IoTDB 套件全部组件后形成的整体应用架构。下文称所有组件形成 IoTDB 套件，而 IoTDB 特指其中的时间序列数据库组件。 在上图中，用户可以通过 JDBC 将来自设备上传感器采集的时序数据、服务..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统架构","slug":"系统架构","link":"#系统架构","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.66,"words":499},"filePathRelative":"zh/UserGuide/V1.0.x/IoTDB-Introduction/Architecture.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,s as data};
