import{_ as i,r,o as a,c as d,b as t,d as e,a as o,e as n}from"./app-D_cz5DM4.js";const s={},c=n('<h1 id="confignode-configuration" tabindex="-1"><a class="header-anchor" href="#confignode-configuration"><span>ConfigNode Configuration</span></a></h1><p>IoTDB ConfigNode files are under <code>conf</code>.</p><ul><li><p><code>confignode-env.sh/bat</code>：Environment configurations, in which we could set the memory allocation of ConfigNode.</p></li><li><p><code>iotdb-confignode.properties</code>：IoTDB ConfigNode system configurations.</p></li></ul>',3),f={id:"environment-configuration-file-confignode-env-sh-bat",tabindex:"-1"},g={class:"header-anchor",href:"#environment-configuration-file-confignode-env-sh-bat"},y={href:"http://confignode-env.sh/bat%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},h=n('<p>The environment configuration file is mainly used to configure the Java environment related parameters when ConfigNode is running, such as JVM related configuration. This part of the configuration is passed to the JVM when the ConfigNode starts.</p><p>The details of each parameter are as follows:</p><ul><li>MAX_HEAP_SIZE</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">MAX_HEAP_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The maximum heap memory size that IoTDB can use</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">On Linux or MacOS, the default is one quarter of the memory. On Windows, the default value for 32-bit systems is 512M, and the default for 64-bit systems is 2G.</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>HEAP_NEWSIZE</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">HEAP_NEWSIZE</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The minimum heap memory size that IoTDB will use when startup</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">On Linux or MacOS, the default is min{cores * 100M, one quarter of MAX_HEAP_SIZE}. On Windows, the default value for 32-bit systems is 512M, and the default for 64-bit systems is 2G.</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>MAX_DIRECT_MEMORY_SIZE</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">MAX_DIRECT_MEMORY_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The max direct memory that IoTDB could use</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">Equal to the MAX_HEAP_SIZE</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h2 id="confignode-configuration-file-iotdb-confignode-properties" tabindex="-1"><a class="header-anchor" href="#confignode-configuration-file-iotdb-confignode-properties"><span>ConfigNode Configuration File (iotdb-confignode.properties)</span></a></h2><p>The global configuration of cluster is in ConfigNode.</p><h3 id="config-node-rpc-configuration" tabindex="-1"><a class="header-anchor" href="#config-node-rpc-configuration"><span>Config Node RPC Configuration</span></a></h3><ul><li>cn_internal_address</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_internal_address</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode internal service address</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_internal_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_internal_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode internal service port</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10710</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="consensus" tabindex="-1"><a class="header-anchor" href="#consensus"><span>Consensus</span></a></h3><ul><li>cn_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode data Consensus Port</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10720</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="target-config-nodes" tabindex="-1"><a class="header-anchor" href="#target-config-nodes"><span>Target Config Nodes</span></a></h3><ul><li>cn_target_config_node_list</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_target_config_node_list</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Target ConfigNode address, for current ConfigNode to join the cluster</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1:10710</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="directory-configuration" tabindex="-1"><a class="header-anchor" href="#directory-configuration"><span>Directory configuration</span></a></h3><ul><li>cn_system_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_system_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode system data dir</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/system（Windows：data\\system）</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_consensus_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_consensus_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode Consensus protocol data dir</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/confignode/consensus（Windows：data\\confignode\\consensus）</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="thrift-rpc-configuration" tabindex="-1"><a class="header-anchor" href="#thrift-rpc-configuration"><span>Thrift RPC configuration</span></a></h3><ul><li>cn_rpc_thrift_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether enable thrift&#39;s compression (using GZIP).</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_rpc_thrift_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether enable thrift&#39;s compression (using GZIP).</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_rpc_advanced_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_rpc_advanced_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether enable thrift&#39;s advanced compression.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_rpc_max_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_rpc_max_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Max concurrent rpc connections</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Description</td><td style="text-align:left;">65535</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_thrift_max_frame_size</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_thrift_max_frame_size</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Max size of bytes of each thrift RPC request/response</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Long</td></tr><tr><td style="text-align:center;">Unit</td><td style="text-align:left;">Byte</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">536870912</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_thrift_init_buffer_size</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_thrift_init_buffer_size</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Initial size of bytes of buffer that thrift used</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">1024</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_connection_timeout_ms</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_connection_timeout_ms</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Thrift socket and connection timeout between raft nodes</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">20000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_selector_thread_nums_of_client_manager</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_selector_thread_nums_of_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">selector thread (TAsyncClientManager) nums for async thread in a clientManager</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_core_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_core_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Number of core clients routed to each node in a ClientManager</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">200</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cn_max_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cn_max_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Number of max clients routed to each node in a ClientManager</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">300</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="metric-configuration" tabindex="-1"><a class="header-anchor" href="#metric-configuration"><span>Metric Configuration</span></a></h3>',48);function x(u,_){const l=r("ExternalLinkIcon");return a(),d("div",null,[c,t("h2",f,[t("a",g,[t("span",null,[e("Environment Configuration File（"),t("a",y,[e("confignode-env.sh/bat）"),o(l)])])])]),h])}const m=i(s,[["render",x],["__file","ConfigNode-Config-Manual.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/V1.1.x/Reference/ConfigNode-Config-Manual.html","title":"ConfigNode Configuration","lang":"en-US","frontmatter":{"description":"ConfigNode Configuration IoTDB ConfigNode files are under conf. confignode-env.sh/bat：Environment configurations, in which we could set the memory allocation of ConfigNode. iotd...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Reference/ConfigNode-Config-Manual.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Reference/ConfigNode-Config-Manual.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"ConfigNode Configuration"}],["meta",{"property":"og:description","content":"ConfigNode Configuration IoTDB ConfigNode files are under conf. confignode-env.sh/bat：Environment configurations, in which we could set the memory allocation of ConfigNode. iotd..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ConfigNode Configuration\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Environment Configuration File（confignode-env.sh/bat）","slug":"environment-configuration-file-confignode-env-sh-bat","link":"#environment-configuration-file-confignode-env-sh-bat","children":[]},{"level":2,"title":"ConfigNode Configuration File (iotdb-confignode.properties)","slug":"confignode-configuration-file-iotdb-confignode-properties","link":"#confignode-configuration-file-iotdb-confignode-properties","children":[{"level":3,"title":"Config Node RPC Configuration","slug":"config-node-rpc-configuration","link":"#config-node-rpc-configuration","children":[]},{"level":3,"title":"Consensus","slug":"consensus","link":"#consensus","children":[]},{"level":3,"title":"Target Config Nodes","slug":"target-config-nodes","link":"#target-config-nodes","children":[]},{"level":3,"title":"Directory configuration","slug":"directory-configuration","link":"#directory-configuration","children":[]},{"level":3,"title":"Thrift RPC configuration","slug":"thrift-rpc-configuration","link":"#thrift-rpc-configuration","children":[]},{"level":3,"title":"Metric Configuration","slug":"metric-configuration","link":"#metric-configuration","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.76,"words":827},"filePathRelative":"UserGuide/V1.1.x/Reference/ConfigNode-Config-Manual.md","localizedDate":"July 10, 2023","autoDesc":true}');export{m as comp,b as data};
