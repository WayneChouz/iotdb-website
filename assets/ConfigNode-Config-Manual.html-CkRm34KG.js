import{_ as e,c as l,b as n,o as d}from"./app-B8hNZQx1.js";const i={};function r(a,t){return d(),l("div",null,t[0]||(t[0]=[n('<h1 id="confignode-配置参数" tabindex="-1"><a class="header-anchor" href="#confignode-配置参数"><span>ConfigNode 配置参数</span></a></h1><p>IoTDB ConfigNode 配置文件均位于 IoTDB 安装目录：<code>conf</code>文件夹下。</p><ul><li><p><code>confignode-env.sh/bat</code>：环境配置项的配置文件，可以配置 ConfigNode 的内存大小。</p></li><li><p><code>iotdb-confignode.properties</code>：IoTDB ConfigNode 的配置文件。</p></li></ul><h2 id="环境配置项-confignode-env-sh-bat" tabindex="-1"><a class="header-anchor" href="#环境配置项-confignode-env-sh-bat"><span>环境配置项（<a href="http://confignode-env.sh/bat%EF%BC%89" target="_blank" rel="noopener noreferrer">confignode-env.sh/bat）</a></span></a></h2><p>环境配置项主要用于对 ConfigNode 运行的 Java 环境相关参数进行配置，如 JVM 相关配置。ConfigNode 启动时，此部分配置会被传给 JVM，详细配置项说明如下：</p><ul><li>MAX_HEAP_SIZE</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">MAX_HEAP_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 能使用的最大堆内存大小</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">取决于操作系统和机器配置。在 Linux 或 MacOS 系统下默认为机器内存的四分之一。在 Windows 系统下，32 位系统的默认值是 512M，64 位系统默认值是 2G。</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>HEAP_NEWSIZE</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">HEAP_NEWSIZE</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 启动时分配的最小堆内存大小</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">取决于操作系统和机器配置。在 Linux 或 MacOS 系统下默认值为机器 CPU 核数乘以 100M 的值与 MAX_HEAP_SIZE 四分之一这二者的最小值。在 Windows 系统下，32 位系统的默认值是 512M，64 位系统默认值是 2G。</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>MAX_DIRECT_MEMORY_SIZE</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">MAX_DIRECT_MEMORY_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 能使用的最大堆外内存大小</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">默认与最大堆内存相等</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h2 id="系统配置项-iotdb-confignode-properties" tabindex="-1"><a class="header-anchor" href="#系统配置项-iotdb-confignode-properties"><span>系统配置项（iotdb-confignode.properties）</span></a></h2><p>IoTDB 集群的全局配置通过 ConfigNode 配置。</p><h3 id="config-node-rpc-配置" tabindex="-1"><a class="header-anchor" href="#config-node-rpc-配置"><span>Config Node RPC 配置</span></a></h3><ul><li>cn_internal_address</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_internal_address</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">ConfigNode 集群内部地址</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>cn_internal_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_internal_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">ConfigNode 集群服务监听端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10710</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="共识协议" tabindex="-1"><a class="header-anchor" href="#共识协议"><span>共识协议</span></a></h3><ul><li>cn_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">ConfigNode 的共识协议通信端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10720</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="目标-config-node-配置" tabindex="-1"><a class="header-anchor" href="#目标-config-node-配置"><span>目标 Config Node 配置</span></a></h3><ul><li>cn_target_config_node_list</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_target_config_node_list</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">目标 ConfigNode 地址，ConfigNode 通过此地址加入集群</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">127.0.0.1:10710</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="数据目录" tabindex="-1"><a class="header-anchor" href="#数据目录"><span>数据目录</span></a></h3><ul><li>cn_system_dir</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_system_dir</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">ConfigNode 系统数据存储路径</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/confignode/system（Windows：data\\configndoe\\system）</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>cn_consensus_dir</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_consensus_dir</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">ConfigNode 共识协议数据存储路径</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/confignode/consensus（Windows：data\\configndoe\\consensus）</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="thrift-rpc-配置" tabindex="-1"><a class="header-anchor" href="#thrift-rpc-配置"><span>Thrift RPC 配置</span></a></h3><ul><li>cn_rpc_thrift_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">是否启用 thrift 的压缩机制。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>cn_rpc_advanced_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_rpc_advanced_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">是否启用 thrift 的自定制压缩机制。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>cn_rpc_max_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_rpc_max_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">最大连接数。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">65535</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>cn_thrift_max_frame_size</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_thrift_max_frame_size</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">RPC 请求/响应的最大字节数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">536870912 （默认值512MB，应大于等于 512 * 1024 * 1024)</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>cn_thrift_init_buffer_size</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_thrift_init_buffer_size</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">字节数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Long</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">1024</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>cn_connection_timeout_ms</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_connection_timeout_ms</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">节点连接超时时间</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">20000</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>cn_selector_thread_nums_of_client_manager</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_selector_thread_nums_of_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">客户端异步线程管理的选择器线程数量</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>cn_core_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_core_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">单 ClientManager 中路由到每个节点的核心 Client 个数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">200</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>cn_max_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cn_max_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">单 ClientManager 中路由到每个节点的最大 Client 个数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">300</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="metric-监控配置" tabindex="-1"><a class="header-anchor" href="#metric-监控配置"><span>Metric 监控配置</span></a></h3>',49)]))}const s=e(i,[["render",r],["__file","ConfigNode-Config-Manual.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Reference/ConfigNode-Config-Manual.html","title":"ConfigNode 配置参数","lang":"zh-CN","frontmatter":{"description":"ConfigNode 配置参数 IoTDB ConfigNode 配置文件均位于 IoTDB 安装目录：conf文件夹下。 confignode-env.sh/bat：环境配置项的配置文件，可以配置 ConfigNode 的内存大小。 iotdb-confignode.properties：IoTDB ConfigNode 的配置文件。 环境配置项（c...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Reference/ConfigNode-Config-Manual.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Reference/ConfigNode-Config-Manual.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"ConfigNode 配置参数"}],["meta",{"property":"og:description","content":"ConfigNode 配置参数 IoTDB ConfigNode 配置文件均位于 IoTDB 安装目录：conf文件夹下。 confignode-env.sh/bat：环境配置项的配置文件，可以配置 ConfigNode 的内存大小。 iotdb-confignode.properties：IoTDB ConfigNode 的配置文件。 环境配置项（c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ConfigNode 配置参数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"环境配置项（confignode-env.sh/bat）","slug":"环境配置项-confignode-env-sh-bat","link":"#环境配置项-confignode-env-sh-bat","children":[]},{"level":2,"title":"系统配置项（iotdb-confignode.properties）","slug":"系统配置项-iotdb-confignode-properties","link":"#系统配置项-iotdb-confignode-properties","children":[{"level":3,"title":"Config Node RPC 配置","slug":"config-node-rpc-配置","link":"#config-node-rpc-配置","children":[]},{"level":3,"title":"共识协议","slug":"共识协议","link":"#共识协议","children":[]},{"level":3,"title":"目标 Config Node 配置","slug":"目标-config-node-配置","link":"#目标-config-node-配置","children":[]},{"level":3,"title":"数据目录","slug":"数据目录","link":"#数据目录","children":[]},{"level":3,"title":"Thrift RPC 配置","slug":"thrift-rpc-配置","link":"#thrift-rpc-配置","children":[]},{"level":3,"title":"Metric 监控配置","slug":"metric-监控配置","link":"#metric-监控配置","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.09,"words":1228},"filePathRelative":"zh/UserGuide/V1.0.x/Reference/ConfigNode-Config-Manual.md","localizedDate":"2023年7月10日","autoDesc":true}');export{s as comp,c as data};
