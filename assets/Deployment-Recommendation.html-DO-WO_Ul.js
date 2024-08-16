import{_ as e,o as t,c as a,e as o}from"./app-CIPkfidu.js";const i={},l=o('<h1 id="iotdb-deployment-recommendation" tabindex="-1"><a class="header-anchor" href="#iotdb-deployment-recommendation"><span>IoTDB Deployment Recommendation</span></a></h1><h2 id="backgrounds" tabindex="-1"><a class="header-anchor" href="#backgrounds"><span>Backgrounds</span></a></h2><p>System Abilities</p><ul><li>Performance: writing and reading performance, compression ratio</li><li>Extensibility: system has the ability to manage data with multiple nodes, and is essentially that data can be managed by partitions</li><li>High availability(HA): system has the ability to tolerate the nodes disconnected, and is essentially that the data has replicas</li><li>Consistency：when data is with multiple copies, whether the replicas are consistent, and is essentially that the system treats the whole database as a single node</li></ul><p>Abbreviations</p><ul><li>C: ConfigNode</li><li>D: DataNode</li><li>nCmD：cluster with n ConfigNodes and m DataNodes</li></ul><h2 id="deployment-mode" tabindex="-1"><a class="header-anchor" href="#deployment-mode"><span>Deployment mode</span></a></h2><table><thead><tr><th style="text-align:center;">mode</th><th style="text-align:left;">Performance</th><th style="text-align:left;">Extensibility</th><th style="text-align:left;">HA</th><th style="text-align:left;">Consistency</th></tr></thead><tbody><tr><td style="text-align:center;">Lightweight standalone mode</td><td style="text-align:left;">Extremely High</td><td style="text-align:left;">None</td><td style="text-align:left;">None</td><td style="text-align:left;">High</td></tr><tr><td style="text-align:center;">Scalable standalone mode (default)</td><td style="text-align:left;">High</td><td style="text-align:left;">High</td><td style="text-align:left;">Medium</td><td style="text-align:left;">High</td></tr><tr><td style="text-align:center;">High performance cluster mode</td><td style="text-align:left;">High</td><td style="text-align:left;">High</td><td style="text-align:left;">High</td><td style="text-align:left;">Medium</td></tr><tr><td style="text-align:center;">Strong consistency cluster mode</td><td style="text-align:left;">Medium</td><td style="text-align:left;">High</td><td style="text-align:left;">High</td><td style="text-align:left;">High</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">Config</th><th style="text-align:left;">Lightweight standalone mode</th><th style="text-align:left;">Scalable single node mode</th><th style="text-align:left;">High performance mode</th><th style="text-align:left;">strong consistency cluster mode</th></tr></thead><tbody><tr><td style="text-align:center;">ConfigNode number</td><td style="text-align:left;">1</td><td style="text-align:left;">≥1 (odd number)</td><td style="text-align:left;">≥1 (odd number)</td><td style="text-align:left;">≥1 (odd number)</td></tr><tr><td style="text-align:center;">DataNode number</td><td style="text-align:left;">1</td><td style="text-align:left;">≥1</td><td style="text-align:left;">≥3</td><td style="text-align:left;">≥3</td></tr><tr><td style="text-align:center;">schema_replication_factor</td><td style="text-align:left;">1</td><td style="text-align:left;">1</td><td style="text-align:left;">3</td><td style="text-align:left;">3</td></tr><tr><td style="text-align:center;">data_replication_factor</td><td style="text-align:left;">1</td><td style="text-align:left;">1</td><td style="text-align:left;">2</td><td style="text-align:left;">3</td></tr><tr><td style="text-align:center;">config_node_consensus_protocol_class</td><td style="text-align:left;">Simple</td><td style="text-align:left;">Ratis</td><td style="text-align:left;">Ratis</td><td style="text-align:left;">Ratis</td></tr><tr><td style="text-align:center;">schema_region_consensus_protocol_class</td><td style="text-align:left;">Simple</td><td style="text-align:left;">Ratis</td><td style="text-align:left;">Ratis</td><td style="text-align:left;">Ratis</td></tr><tr><td style="text-align:center;">data_region_consensus_protocol_class</td><td style="text-align:left;">Simple</td><td style="text-align:left;">IoT</td><td style="text-align:left;">IoT</td><td style="text-align:left;">Ratis</td></tr></tbody></table><h2 id="deployment-recommendation" tabindex="-1"><a class="header-anchor" href="#deployment-recommendation"><span>Deployment Recommendation</span></a></h2><h3 id="upgrade-from-v0-13-to-v1-0" tabindex="-1"><a class="header-anchor" href="#upgrade-from-v0-13-to-v1-0"><span>Upgrade from v0.13 to v1.0</span></a></h3><p>Scenario:<br> Already has some data under v0.13, hope to upgrade to v1.0.</p><p>Options:</p><ol><li>Upgrade to 1C1D standalone mode, allocate 2GB memory to ConfigNode, allocate same memory size with v0.13 to DataNode.</li><li>Upgrade to 3C3D cluster mode, allocate 2GB memory to ConfigNode, allocate same memory size with v0.13 to DataNode.</li></ol><p>Configuration modification:</p><ul><li>Do not point v1.0 data directory to v0.13 data directory</li><li>region_group_extension_strategy=COSTOM</li><li>data_region_group_per_database <ul><li>for 3C3D cluster mode: Cluster CPU total core num / data_replication_factor</li><li>for 1C1D standalone mode: use virtual_storage_group_num in v0.13</li></ul></li></ul><p>Data migration:<br> After modifying the configuration, use load-tsfile tool to load the TsFiles of v0.13 to v1.0.</p><h3 id="use-v1-0-directly" tabindex="-1"><a class="header-anchor" href="#use-v1-0-directly"><span>Use v1.0 directly</span></a></h3><p><strong>Recommend to use 1 Database only</strong></p><h4 id="memory-estimation" tabindex="-1"><a class="header-anchor" href="#memory-estimation"><span>Memory estimation</span></a></h4><h5 id="use-active-series-number-to-estimate-memory-size" tabindex="-1"><a class="header-anchor" href="#use-active-series-number-to-estimate-memory-size"><span>Use active series number to estimate memory size</span></a></h5><p>Cluster DataNode total heap size(GB) = active series number / 100000 * data_replication_factor</p><p>Heap size of each DataNode (GB) = Cluster DataNode total heap size / DataNode number</p><blockquote><p>Example: use 3C3D to manage 1 million timeseries, use 3 data replicas</p><ul><li>Cluster DataNode total heap size: 1,000,000 / 100,000 * 3 = 30G</li><li>每Heap size of each DataNode: 30 / 3 = 10G</li></ul></blockquote><h5 id="use-total-series-number-to-estimate-memory-size" tabindex="-1"><a class="header-anchor" href="#use-total-series-number-to-estimate-memory-size"><span>Use total series number to estimate memory size</span></a></h5><p>Cluster DataNode total heap size（B） = 20 * (180 + 2 * average character num of the series full path) * total series number * schema_replication_factor</p><p>Heap size of each DataNode = Cluster DataNode total heap size / DataNode number</p><blockquote><p>Example: use 3C3D to manage 1 million timeseries, use 3 schema replicas, series name such as root.sg_1.d_10.s_100(20 chars)</p><ul><li>Cluster DataNode total heap size: 20 * (180 + 2 * 20) * 1,000,000 * 3 = 13.2 GB</li><li>Heap size of each DataNode: 13.2 GB / 3 = 4.4 GB</li></ul></blockquote><h4 id="disk-estimation" tabindex="-1"><a class="header-anchor" href="#disk-estimation"><span>Disk estimation</span></a></h4><p>IoTDB storage size = data storage size + schema storage size + temp storage size</p><h5 id="data-storage-size" tabindex="-1"><a class="header-anchor" href="#data-storage-size"><span>Data storage size</span></a></h5><p>Series number * Sampling frequency * Data point size * Storage duration * data_replication_factor / 10 (compression ratio)</p><table><thead><tr><th style="text-align:center;">Data Type \\ Data point size</th><th style="text-align:left;">Timestamp (Byte)</th><th style="text-align:left;">Value (Byte)</th><th style="text-align:left;">Total (Byte)</th></tr></thead><tbody><tr><td style="text-align:center;">Boolean</td><td style="text-align:left;">8</td><td style="text-align:left;">1</td><td style="text-align:left;">9</td></tr><tr><td style="text-align:center;">INT32 / FLOAT</td><td style="text-align:left;">8</td><td style="text-align:left;">4</td><td style="text-align:left;">12</td></tr><tr><td style="text-align:center;">INT64）/ DOUBLE</td><td style="text-align:left;">8</td><td style="text-align:left;">8</td><td style="text-align:left;">16</td></tr><tr><td style="text-align:center;">TEXT</td><td style="text-align:left;">8</td><td style="text-align:left;">Assuming a</td><td style="text-align:left;">8+a</td></tr></tbody></table><blockquote><p>Example: 1000 devices, 100 sensors for one device, 100,000 series total, INT32 data type, 1Hz sampling frequency, 1 year storage duration, 3 replicas, compression ratio is 10<br> Data storage size = 1000 * 100 * 12 * 86400 * 365 * 3 / 10 = 11T</p></blockquote><h5 id="schema-storage-size" tabindex="-1"><a class="header-anchor" href="#schema-storage-size"><span>Schema storage size</span></a></h5><p>One series uses the path character byte size + 20 bytes.<br> If the series has tag, add the tag character byte size.</p><h5 id="temp-storage-size" tabindex="-1"><a class="header-anchor" href="#temp-storage-size"><span>Temp storage size</span></a></h5><p>Temp storage size = WAL storage size + Consensus storage size + Compaction temp storage size</p><ol><li>WAL</li></ol><p>max wal storage size = memtable memory size ÷ wal_min_effective_info_ratio</p><ul><li>memtable memory size is decided by storage_query_schema_consensus_free_memory_proportion, storage_engine_memory_proportion and write_memory_proportion</li><li>wal_min_effective_info_ratio is decided by wal_min_effective_info_ratio configuration</li></ul><blockquote><p>Example: allocate 16G memory for DataNode, config is as below:<br> storage_query_schema_consensus_free_memory_proportion=3:3:1:1:2<br> storage_engine_memory_proportion=8:2<br> write_memory_proportion=19:1<br> wal_min_effective_info_ratio=0.1<br> max wal storage size = 16 * (3 / 10) * (8 / 10) * (19 / 20) ÷ 0.1 = 36.48G</p></blockquote><ol start="2"><li>Consensus</li></ol><p>Ratis consensus</p><p>When using ratis consensus protocol, we need extra storage for Raft Log, which will be deleted after the state machine takes snapshot.<br> We can adjust <code>trigger_snapshot_threshold</code> to control the maximum Raft Log disk usage.</p><p>Raft Log disk size in each Region = average * trigger_snapshot_threshold</p><p>The total Raft Log storage space is proportional to the data replica number</p><blockquote><p>Example: DataRegion, 20kB data for one request, data_region_trigger_snapshot_threshold = 400,000, then max Raft Log disk size = 20K * 400,000 = 8G.<br> Raft Log increases from 0 to 8GB, and then turns to 0 after snapshot. Average size will be 4GB.<br> When replica number is 3, max Raft log size will be 3 * 8G = 24G.</p></blockquote><p>What&#39;s more, we can configure data_region_ratis_log_max_size to limit max log size of a single DataRegion.<br> By default, data_region_ratis_log_max_size=20G, which guarantees that Raft Log size would not exceed 20G.</p><ol start="3"><li>Compaction</li></ol><ul><li><p>Inner space compaction<br> Disk space for temporary files = Total Disk space of origin files</p><blockquote><p>Example: 10 origin files, 100MB for each file<br> Disk space for temporary files = 10 * 100 = 1000M</p></blockquote></li><li><p>Outer space compaction<br> The overlap of out-of-order data = overlapped data amount / total out-of-order data amount</p><p>Disk space for temporary file = Total ordered Disk space of origin files + Total out-of-order disk space of origin files *（1 - overlap）</p><blockquote><p>Example: 10 ordered files, 10 out-of-order files, 100M for each ordered file, 50M for each out-of-order file, half of data is overlapped with sequence file<br> The overlap of out-of-order data = 25M/50M * 100% = 50%<br> Disk space for temporary files = 10 * 100 + 10 * 50 * 50% = 1250M</p></blockquote></li></ul>',51),s=[l];function n(r,d){return t(),a("div",null,s)}const c=e(i,[["render",n],["__file","Deployment-Recommendation.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V1.1.x/Cluster/Deployment-Recommendation.html","title":"IoTDB Deployment Recommendation","lang":"en-US","frontmatter":{"description":"IoTDB Deployment Recommendation Backgrounds System Abilities Performance: writing and reading performance, compression ratio Extensibility: system has the ability to manage data...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Cluster/Deployment-Recommendation.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Cluster/Deployment-Recommendation.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"IoTDB Deployment Recommendation"}],["meta",{"property":"og:description","content":"IoTDB Deployment Recommendation Backgrounds System Abilities Performance: writing and reading performance, compression ratio Extensibility: system has the ability to manage data..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IoTDB Deployment Recommendation\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Backgrounds","slug":"backgrounds","link":"#backgrounds","children":[]},{"level":2,"title":"Deployment mode","slug":"deployment-mode","link":"#deployment-mode","children":[]},{"level":2,"title":"Deployment Recommendation","slug":"deployment-recommendation","link":"#deployment-recommendation","children":[{"level":3,"title":"Upgrade from v0.13 to v1.0","slug":"upgrade-from-v0-13-to-v1-0","link":"#upgrade-from-v0-13-to-v1-0","children":[]},{"level":3,"title":"Use v1.0 directly","slug":"use-v1-0-directly","link":"#use-v1-0-directly","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.54,"words":1061},"filePathRelative":"UserGuide/V1.1.x/Cluster/Deployment-Recommendation.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,p as data};
