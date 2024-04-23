import{_ as a,r as n,o as r,c as i,b as t,d as e,a as s,e as l}from"./app-DrPcRZG6.js";const y={},g=l('<h1 id="datanode-配置参数" tabindex="-1"><a class="header-anchor" href="#datanode-配置参数"><span>DataNode 配置参数</span></a></h1><p>IoTDB DataNode 与 Standalone 模式共用一套配置文件，均位于 IoTDB 安装目录：<code>conf</code>文件夹下。</p><ul><li><p><code>datanode-env.sh/bat</code>：环境配置项的配置文件，可以配置 DataNode 的内存大小。</p></li><li><p><code>iotdb-datanode.properties</code>：IoTDB DataNode 和单机版的配置文件。</p></li></ul><h2 id="热修改配置项" tabindex="-1"><a class="header-anchor" href="#热修改配置项"><span>热修改配置项</span></a></h2><p>为方便用户使用，IoTDB 为用户提供了热修改功能，即在系统运行过程中修改 <code>iotdb-datanode.properties</code> 和 <code>iotdb-common.properties</code> 中部分配置参数并即时应用到系统中。下面介绍的参数中，改后 生效方式为<code>热加载</code><br> 的均为支持热修改的配置参数。</p><p>通过 Session 或 Cli 发送 <code>load configuration</code> 命令（SQL）至 IoTDB 可触发配置热加载。</p>',6),o={id:"环境配置项-datanode-env-sh-bat",tabindex:"-1"},c={class:"header-anchor",href:"#环境配置项-datanode-env-sh-bat"},x={href:"http://datanode-env.sh/bat%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},h=l(`<p>环境配置项主要用于对 DataNode 运行的 Java 环境相关参数进行配置，如 JVM 相关配置。DataNode/Standalone 启动时，此部分配置会被传给 JVM，详细配置项说明如下：</p><ul><li>MEMORY_SIZE</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">MEMORY_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB DataNode 启动时分配的内存大小</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">取决于操作系统和机器配置。默认为机器内存的二分之一。</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>ON_HEAP_MEMORY</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">ON_HEAP_MEMORY</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB DataNode 能使用的堆内内存大小, 曾用名: MAX_HEAP_SIZE</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">取决于MEMORY_SIZE的配置。</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>OFF_HEAP_MEMORY</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">OFF_HEAP_MEMORY</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB DataNode 能使用的堆外内存大小, 曾用名: MAX_DIRECT_MEMORY_SIZE</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">取决于MEMORY_SIZE的配置</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>JMX_LOCAL</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">JMX_LOCAL</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">JMX 监控模式，配置为 true 表示仅允许本地监控，设置为 false 的时候表示允许远程监控。如想在本地通过网络连接JMX Service，比如nodeTool.sh会尝试连接127.0.0.1:31999，请将JMX_LOCAL设置为false。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">枚举 String : “true”, “false”</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>JMX_PORT</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">JMX_PORT</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">JMX 监听端口。请确认该端口是不是系统保留端口并且未被占用。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int: [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">31999</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h2 id="系统配置项-iotdb-datanode-properties" tabindex="-1"><a class="header-anchor" href="#系统配置项-iotdb-datanode-properties"><span>系统配置项（iotdb-datanode.properties）</span></a></h2><p>系统配置项是 IoTDB DataNode/Standalone 运行的核心配置，它主要用于设置 DataNode/Standalone 数据库引擎的参数。</p><h3 id="data-node-rpc-服务配置" tabindex="-1"><a class="header-anchor" href="#data-node-rpc-服务配置"><span>Data Node RPC 服务配置</span></a></h3><ul><li>dn_rpc_address</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_rpc_address</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">客户端 RPC 服务监听地址</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">0.0.0.0</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_rpc_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">Client RPC 服务监听端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">6667</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_internal_address</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_internal_address</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">DataNode 内网通信地址</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">string</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">仅允许在第一次启动服务前修改</td></tr></tbody></table><ul><li>dn_internal_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_internal_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">DataNode 内网通信端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10730</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">仅允许在第一次启动服务前修改</td></tr></tbody></table><ul><li>dn_mpp_data_exchange_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_mpp_data_exchange_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">MPP 数据交换端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10740</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">仅允许在第一次启动服务前修改</td></tr></tbody></table><ul><li>dn_schema_region_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_schema_region_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">DataNode 元数据副本的共识协议通信端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10750</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">仅允许在第一次启动服务前修改</td></tr></tbody></table><ul><li>dn_data_region_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_data_region_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">DataNode 数据副本的共识协议通信端口</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10760</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">仅允许在第一次启动服务前修改</td></tr></tbody></table><ul><li>dn_join_cluster_retry_interval_ms</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_join_cluster_retry_interval_ms</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">DataNode 再次重试加入集群等待时间</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">5000</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="ssl-配置" tabindex="-1"><a class="header-anchor" href="#ssl-配置"><span>SSL 配置</span></a></h3><ul><li>enable_thrift_ssl</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">enable_thrift_ssl</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">当enable_thrift_ssl配置为true时，将通过dn_rpc_port使用 SSL 加密进行通信</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>enable_https</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">enable_https</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">REST Service 是否开启 SSL 配置</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table><ul><li>key_store_path</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">key_store_path</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">ssl证书路径</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">&quot;&quot;</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>key_store_pwd</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">key_store_pwd</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">ssl证书密码</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">&quot;&quot;</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="目标-config-nodes-配置" tabindex="-1"><a class="header-anchor" href="#目标-config-nodes-配置"><span>目标 Config Nodes 配置</span></a></h3><ul><li>dn_seed_config_node</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_seed_config_node</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">ConfigNode 地址，DataNode 启动时通过此地址加入集群</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">127.0.0.1:10710</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">仅允许在第一次启动服务前修改</td></tr></tbody></table><h3 id="连接配置" tabindex="-1"><a class="header-anchor" href="#连接配置"><span>连接配置</span></a></h3><ul><li>dn_session_timeout_threshold</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_session_timeout_threshold</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">最大的会话空闲时间</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">0</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_thrift_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">是否启用 thrift 的压缩机制</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_advanced_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_rpc_advanced_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">是否启用 thrift 的自定制压缩机制</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_selector_thread_count</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">rpc_selector_thread_count</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">rpc 选择器线程数量</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_min_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">rpc_min_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">最小连接数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_rpc_max_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_rpc_max_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">最大连接数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">65535</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_thrift_max_frame_size</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_thrift_max_frame_size</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">RPC 请求/响应的最大字节数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">536870912 （默认值512MB，应大于等于 512 * 1024 * 1024)</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_thrift_init_buffer_size</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_thrift_init_buffer_size</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">字节数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">1024</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_connection_timeout_ms</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_connection_timeout_ms</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">节点连接超时时间</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">60000</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_core_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_core_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">单 ClientManager 中路由到每个节点的核心 Client 个数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">200</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_max_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_max_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">单 ClientManager 中路由到每个节点的最大 Client 个数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">300</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="目录配置" tabindex="-1"><a class="header-anchor" href="#目录配置"><span>目录配置</span></a></h3><ul><li>dn_system_dir</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_system_dir</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 元数据存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/datanode/system（Windows：data\\datanode\\system）</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_data_dirs</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_data_dirs</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 数据存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/datanode/data（Windows：data\\datanode\\data）</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_multi_dir_strategy</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_multi_dir_strategy</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 在 data_dirs 中为 TsFile 选择目录时采用的策略。可使用简单类名或类名全称。系统提供以下三种策略：<br>1. SequenceStrategy：IoTDB 按顺序选择目录，依次遍历 data_dirs 中的所有目录，并不断轮循；<br>2. MaxDiskUsableSpaceFirstStrategy：IoTDB 优先选择 data_dirs 中对应磁盘空余空间最大的目录；<br>您可以通过以下方法完成用户自定义策略：<br>1. 继承 org.apache.iotdb.db.storageengine.rescon.disk.strategy.DirectoryStrategy 类并实现自身的 Strategy 方法；<br>2. 将实现的类的完整类名（包名加类名，UserDefineStrategyPackage）填写到该配置项；<br>3. 将该类 jar 包添加到工程中。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">SequenceStrategy</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">热加载</td></tr></tbody></table><ul><li>dn_consensus_dir</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_consensus_dir</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 共识层日志存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/datanode/consensus（Windows：data\\datanode\\consensus）</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_wal_dirs</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_wal_dirs</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 写前日志存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/datanode/wal（Windows：data\\datanode\\wal）</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_tracing_dir</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_tracing_dir</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 追踪根目录路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">datanode/tracing</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>dn_sync_dir</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">dn_sync_dir</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB sync 存储路径，默认存放在和 sbin 目录同级的 data 目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">data/datanode/sync</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="metric-配置" tabindex="-1"><a class="header-anchor" href="#metric-配置"><span>Metric 配置</span></a></h3><h2 id="开启-gc-日志" tabindex="-1"><a class="header-anchor" href="#开启-gc-日志"><span>开启 GC 日志</span></a></h2><p>GC 日志默认是关闭的。为了性能调优，用户可能会需要收集 GC 信息。<br> 若要打开 GC 日志，则需要在启动 IoTDB Server 的时候加上&quot;printgc&quot;参数：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">nohup</span> sbin/start-datanode.sh printgc <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>sbin<span class="token punctuation">\\</span>start-datanode.bat printgc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GC 日志会被存储在<code>IOTDB_HOME/logs/gc.log</code>. 至多会存储 10 个 gc.log 文件，每个文件最多 10MB。</p><h4 id="rest-服务配置" tabindex="-1"><a class="header-anchor" href="#rest-服务配置"><span>REST 服务配置</span></a></h4><ul><li>enable_rest_service</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">enable_rest_service</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">是否开启Rest服务。</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table><ul><li>rest_service_port</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">rest_service_port</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">Rest服务监听端口号</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">18080</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table><ul><li>enable_swagger</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">enable_swagger</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">是否启用swagger来展示rest接口信息</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table><ul><li>rest_query_default_row_size_limit</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">rest_query_default_row_size_limit</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">一次查询能返回的结果集最大行数</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10000</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table><ul><li>cache_expire</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cache_expire</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">缓存客户登录信息的过期时间</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">28800</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table><ul><li>cache_max_num</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cache_max_num</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">缓存中存储的最大用户数量</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">100</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table><ul><li>cache_init_num</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">cache_init_num</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">缓存初始容量</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">10</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table><ul><li>trust_store_path</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">trust_store_path</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">keyStore 密码（非必填）</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">&quot;&quot;</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table><ul><li>trust_store_pwd</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">trust_store_pwd</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">trustStore 密码（非必填）</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">&quot;&quot;</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table><ul><li>idle_timeout</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">idle_timeout</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">SSL 超时时间，单位为秒</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">5000</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启生效</td></tr></tbody></table>`,108);function f(_,b){const d=n("ExternalLinkIcon");return r(),i("div",null,[g,t("h2",o,[t("a",c,[t("span",null,[e("环境配置项（"),t("a",x,[e("datanode-env.sh/bat）"),s(d)])])])]),h])}const p=a(y,[["render",f],["__file","DataNode-Config-Manual.html.vue"]]),m=JSON.parse('{"path":"/zh/UserGuide/latest/Reference/DataNode-Config-Manual.html","title":"DataNode 配置参数","lang":"zh-CN","frontmatter":{"description":"DataNode 配置参数 IoTDB DataNode 与 Standalone 模式共用一套配置文件，均位于 IoTDB 安装目录：conf文件夹下。 datanode-env.sh/bat：环境配置项的配置文件，可以配置 DataNode 的内存大小。 iotdb-datanode.properties：IoTDB DataNode 和单机版的配...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Reference/DataNode-Config-Manual.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Reference/DataNode-Config-Manual.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"DataNode 配置参数"}],["meta",{"property":"og:description","content":"DataNode 配置参数 IoTDB DataNode 与 Standalone 模式共用一套配置文件，均位于 IoTDB 安装目录：conf文件夹下。 datanode-env.sh/bat：环境配置项的配置文件，可以配置 DataNode 的内存大小。 iotdb-datanode.properties：IoTDB DataNode 和单机版的配..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-21T09:34:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T09:34:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DataNode 配置参数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-21T09:34:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"热修改配置项","slug":"热修改配置项","link":"#热修改配置项","children":[]},{"level":2,"title":"环境配置项（datanode-env.sh/bat）","slug":"环境配置项-datanode-env-sh-bat","link":"#环境配置项-datanode-env-sh-bat","children":[]},{"level":2,"title":"系统配置项（iotdb-datanode.properties）","slug":"系统配置项-iotdb-datanode-properties","link":"#系统配置项-iotdb-datanode-properties","children":[{"level":3,"title":"Data Node RPC 服务配置","slug":"data-node-rpc-服务配置","link":"#data-node-rpc-服务配置","children":[]},{"level":3,"title":"SSL 配置","slug":"ssl-配置","link":"#ssl-配置","children":[]},{"level":3,"title":"目标 Config Nodes 配置","slug":"目标-config-nodes-配置","link":"#目标-config-nodes-配置","children":[]},{"level":3,"title":"连接配置","slug":"连接配置","link":"#连接配置","children":[]},{"level":3,"title":"目录配置","slug":"目录配置","link":"#目录配置","children":[]},{"level":3,"title":"Metric 配置","slug":"metric-配置","link":"#metric-配置","children":[]}]},{"level":2,"title":"开启 GC 日志","slug":"开启-gc-日志","link":"#开启-gc-日志","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1711013644000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":9.86,"words":2957},"filePathRelative":"zh/UserGuide/latest/Reference/DataNode-Config-Manual.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,m as data};
