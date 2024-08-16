import{_ as t,o as e,c as l,e as i}from"./app-CIPkfidu.js";const a={},o=i('<h2 id="集群基本概念" tabindex="-1"><a class="header-anchor" href="#集群基本概念"><span>集群基本概念</span></a></h2><p>Apache IoTDB 集群版包含两种角色的节点，ConfigNode 和 DataNode，分别为不同的进程，可独立部署。</p><p>集群架构示例如下图：</p><img style="width:100%;max-width:500px;max-height:400px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/Architecture.png?raw=true"><p>ConfigNode 是集群的控制节点，管理集群的节点状态、分区信息等，集群所有 ConfigNode 组成一个高可用组，数据全量备份。</p><p>注意：ConfigNode 的副本数是集群当前加入的 ConfigNode 个数，一半以上的 ConfigNode 存活集群才能提供服务。</p><p>DataNode 是集群的数据节点，管理多个数据分片、元数据分片，数据即时间序列中的时间戳和值，元数据为时间序列的路径信息、数据类型等。</p><p>Client 只能通过 DataNode 进行数据读写。</p><h3 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释"><span>名词解释</span></a></h3><table><thead><tr><th style="text-align:left;">名词</th><th style="text-align:left;">类型</th><th style="text-align:left;">解释</th></tr></thead><tbody><tr><td style="text-align:left;">ConfigNode</td><td style="text-align:left;">节点角色</td><td style="text-align:left;">配置节点，管理集群节点信息、分区信息，监控集群状态、控制负载均衡</td></tr><tr><td style="text-align:left;">DataNode</td><td style="text-align:left;">节点角色</td><td style="text-align:left;">数据节点，管理数据、元数据</td></tr><tr><td style="text-align:left;">Database</td><td style="text-align:left;">元数据</td><td style="text-align:left;">数据库，不同数据库的数据物理隔离</td></tr><tr><td style="text-align:left;">DeviceId</td><td style="text-align:left;">设备名</td><td style="text-align:left;">元数据树中从 root 到倒数第二级的全路径表示一个设备名</td></tr><tr><td style="text-align:left;">SeriesSlot</td><td style="text-align:left;">元数据分区</td><td style="text-align:left;">每个 Database 包含多个元数据分区，根据设备名进行分区</td></tr><tr><td style="text-align:left;">SchemaRegion</td><td style="text-align:left;">一组元数据分区</td><td style="text-align:left;">多个 SeriesSlot 的集合</td></tr><tr><td style="text-align:left;">SchemaRegionGroup</td><td style="text-align:left;">逻辑概念</td><td style="text-align:left;">包含元数据副本数个 SchemaRegion，管理相同的元数据，互为备份</td></tr><tr><td style="text-align:left;">SeriesTimeSlot</td><td style="text-align:left;">数据分区</td><td style="text-align:left;">一个元数据分区的一段时间的数据对应一个数据分区，每个元数据分区对应多个数据分区，根据时间范围进行分区</td></tr><tr><td style="text-align:left;">DataRegion</td><td style="text-align:left;">一组数据分区</td><td style="text-align:left;">多个 SeriesTimeSlot 的集合</td></tr><tr><td style="text-align:left;">DataRegionGroup</td><td style="text-align:left;">逻辑概念</td><td style="text-align:left;">包含数据副本数个 DataRegion，管理相同的数据，互为备份</td></tr></tbody></table><h2 id="集群特点" tabindex="-1"><a class="header-anchor" href="#集群特点"><span>集群特点</span></a></h2><ul><li>原生分布式 <ul><li>IoTDB 各模块原生支持分布式。</li><li>Standalone 是分布式的一种特殊的部署形态。</li></ul></li><li>扩展性 <ul><li>支持秒级增加节点，无需进行数据迁移。</li></ul></li><li>大规模并行处理架构 MPP <ul><li>采用大规模并行处理架构及火山模型进行数据处理，具有高扩展性。</li></ul></li><li>可根据不同场景需求选择不同的共识协议 <ul><li>数据副本组和元数据副本组，可以采用不同的共识协议。</li></ul></li><li>可扩展分区策略 <ul><li>集群采用分区表管理数据和元数据分区，自定义灵活的分配策略。</li></ul></li><li>内置监控框架 <ul><li>内置集群监控，可以监控集群节点。</li></ul></li></ul><h2 id="分区策略" tabindex="-1"><a class="header-anchor" href="#分区策略"><span>分区策略</span></a></h2><p>分区策略将数据和元数据划分到不同的 RegionGroup 中，并把 RegionGroup 的 Region 分配到不同的 DataNode。</p><p>推荐设置 1 个 database，集群会根据节点数和核数动态分配资源。</p><p>Database 包含多个 SchemaRegion 和 DataRegion，由 DataNode 管理。</p><ul><li><p>元数据分区策略</p><ul><li>对于一条未使用模板的时间序列的元数据，ConfigNode 会根据设备 ID （从 root 到倒数第二层节点的全路径）映射到一个序列分区，并将此序列分区分配到一组 SchemaRegion 中。</li></ul></li><li><p>数据分区策略</p><ul><li>对于一个时间序列数据点，ConfigNode 会根据设备 ID 映射到一个序列分区（纵向分区），再根据时间戳映射到一个序列时间分区（横向分区），并将此序列时间分区分配到一组 DataRegion 中。</li></ul></li></ul><p>IoTDB 使用了基于槽的分区策略，因此分区信息的大小是可控的，不会随时间序列或设备数无限增长。</p><p>Region 会分配到不同的 DataNode 上，分配 Region 时会保证不同 DataNode 的负载均衡。</p><h2 id="复制策略" tabindex="-1"><a class="header-anchor" href="#复制策略"><span>复制策略</span></a></h2><p>复制策略将数据复制多份，互为副本，多个副本可以一起提供高可用服务，容忍部分副本失效的情况。</p><p>Region 是数据复制的基本单位，一个 Region 的多个副本构成了一个高可用复制组，数据互为备份。</p><ul><li>集群内的副本组 <ul><li>ConfigNodeGroup：由所有 ConfigNode 组成。</li><li>SchemaRegionGroup：集群有多个元数据组，每个 SchemaRegionGroup 内有多个 ID 相同的 SchemaRegion。</li><li>DataRegionGroup：集群有多个数据组，每个 DataRegionGroup 内有多个 ID 相同的 DataRegion。</li></ul></li></ul><p>完整的集群分区复制的示意图如下：</p><img style="width:100%;max-width:500px;max-height:500px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/Data-Partition.png?raw=true"><p>图中包含 1 个 SchemaRegionGroup，元数据采用 3 副本，因此 3 个白色的 SchemaRegion-0 组成了一个副本组。</p><p>图中包含 3 个 DataRegionGroup，数据采用 3 副本，因此一共有 9 个 DataRegion。</p><h2 id="共识协议-一致性协议" tabindex="-1"><a class="header-anchor" href="#共识协议-一致性协议"><span>共识协议（一致性协议）</span></a></h2><p>每个副本组的多个副本之间，都通过一个具体的共识协议保证数据一致性，共识协议会将读写请求应用到多个副本上。</p><ul><li>现有的共识协议 <ul><li>SimpleConsensus：提供强一致性，仅单副本时可用，一致性协议的极简实现，效率最高。</li><li>IoTConsensus：提供最终一致性，任意副本数可用，2 副本时可容忍 1 节点失效，当前仅可用于 DataRegion 的副本上，写入可以在任一副本进行，并异步复制到其他副本。</li><li>RatisConsensus：提供强一致性，Raft 协议的一种实现，任意副本数可用，当前可用于任意副本组上。目前DataRegion使用RatisConsensus时暂不支持多数据目录，预计会在后续版本中支持这一功能。</li></ul></li></ul>',30),n=[o];function d(r,s){return e(),l("div",null,n)}const g=t(a,[["render",d],["__file","Cluster-Concept.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Cluster/Cluster-Concept.html","title":"","lang":"zh-CN","frontmatter":{"description":"集群基本概念 Apache IoTDB 集群版包含两种角色的节点，ConfigNode 和 DataNode，分别为不同的进程，可独立部署。 集群架构示例如下图： ConfigNode 是集群的控制节点，管理集群的节点状态、分区信息等，集群所有 ConfigNode 组成一个高可用组，数据全量备份。 注意：ConfigNode 的副本数是集群当前加入的...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Cluster/Cluster-Concept.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Cluster/Cluster-Concept.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"集群基本概念 Apache IoTDB 集群版包含两种角色的节点，ConfigNode 和 DataNode，分别为不同的进程，可独立部署。 集群架构示例如下图： ConfigNode 是集群的控制节点，管理集群的节点状态、分区信息等，集群所有 ConfigNode 组成一个高可用组，数据全量备份。 注意：ConfigNode 的副本数是集群当前加入的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"集群基本概念","slug":"集群基本概念","link":"#集群基本概念","children":[{"level":3,"title":"名词解释","slug":"名词解释","link":"#名词解释","children":[]}]},{"level":2,"title":"集群特点","slug":"集群特点","link":"#集群特点","children":[]},{"level":2,"title":"分区策略","slug":"分区策略","link":"#分区策略","children":[]},{"level":2,"title":"复制策略","slug":"复制策略","link":"#复制策略","children":[]},{"level":2,"title":"共识协议（一致性协议）","slug":"共识协议-一致性协议","link":"#共识协议-一致性协议","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":5.01,"words":1502},"filePathRelative":"zh/UserGuide/V1.0.x/Cluster/Cluster-Concept.md","localizedDate":"2023年7月10日","autoDesc":true}');export{g as comp,h as data};
