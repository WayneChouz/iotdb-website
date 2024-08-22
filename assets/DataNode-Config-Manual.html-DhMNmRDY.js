import{_ as a,r,o as i,c as d,b as t,d as e,a as s,e as l}from"./app-BZ7vU6A9.js";const o={},c=l('<h1 id="datanode-configuration-parameters" tabindex="-1"><a class="header-anchor" href="#datanode-configuration-parameters"><span>DataNode Configuration Parameters</span></a></h1><p>We use the same configuration files for IoTDB DataNode and Standalone version, all under the <code>conf</code>.</p><ul><li><p><code>datanode-env.sh/bat</code>：Environment configurations, in which we could set the memory allocation of DataNode and Standalone.</p></li><li><p><code>iotdb-system.properties</code>：IoTDB system configurations.</p></li></ul><h2 id="hot-modification-configuration" tabindex="-1"><a class="header-anchor" href="#hot-modification-configuration"><span>Hot Modification Configuration</span></a></h2><p>For the convenience of users, IoTDB provides users with hot modification function, that is, modifying some configuration parameters in <code>iotdb-system.properties</code> during the system operation and applying them to the system immediately.<br> In the parameters described below, these parameters whose way of <code>Effective</code> is <code>hot-load</code> support hot modification.</p><p>Trigger way: The client sends the command(sql) <code>load configuration</code> or <code>set configuration</code> to the IoTDB server.</p>',6),g={id:"environment-configuration-file-datanode-env-sh-bat",tabindex:"-1"},y={class:"header-anchor",href:"#environment-configuration-file-datanode-env-sh-bat"},f={href:"http://datanode-env.sh/bat%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},h=l('<p>The environment configuration file is mainly used to configure the Java environment related parameters when DataNode is running, such as JVM related configuration. This part of the configuration is passed to the JVM when the DataNode starts.</p><p>The details of each parameter are as follows:</p><ul><li>MEMORY_SIZE</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">MEMORY_SIZE</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The minimum heap memory size that IoTDB DataNode will use when startup</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">The default is a half of the memory.</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>ON_HEAP_MEMORY</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">ON_HEAP_MEMORY</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The heap memory size that IoTDB DataNode can use, Former Name: MAX_HEAP_SIZE</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">Calculate based on MEMORY_SIZE.</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>OFF_HEAP_MEMORY</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">OFF_HEAP_MEMORY</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The direct memory that IoTDB DataNode can use, Former Name: MAX_DIRECT_MEMORY_SIZE</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">Calculate based on MEMORY_SIZE.</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>JMX_LOCAL</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">JMX_LOCAL</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">JMX monitoring mode, configured as yes to allow only local monitoring, no to allow remote monitoring</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Enum String: &quot;true&quot;, &quot;false&quot;</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>JMX_PORT</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">JMX_PORT</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">JMX listening port. Please confirm that the port is not a system reserved port and is not occupied</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int: [0,65535]</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">31999</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>JMX_IP</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">JMX_IP</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">JMX listening address. Only take effect if JMX_LOCAL=false. 0.0.0.0 is never allowed</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h2 id="jmx-authorization" tabindex="-1"><a class="header-anchor" href="#jmx-authorization"><span>JMX Authorization</span></a></h2><p>We <strong>STRONGLY RECOMMENDED</strong> you CHANGE the PASSWORD for the JMX remote connection.</p><p>The user and passwords are in ${IOTDB_CONF}/conf/jmx.password.</p><p>The permission definitions are in ${IOTDB_CONF}/conf/jmx.access.</p><h2 id="datanode-standalone-configuration-file-iotdb-system-properties" tabindex="-1"><a class="header-anchor" href="#datanode-standalone-configuration-file-iotdb-system-properties"><span>DataNode/Standalone Configuration File (iotdb-system.properties)</span></a></h2><h3 id="data-node-rpc-configuration" tabindex="-1"><a class="header-anchor" href="#data-node-rpc-configuration"><span>Data Node RPC Configuration</span></a></h3><ul><li>dn_rpc_address</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_address</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The client rpc service listens on the address.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">0.0.0.0</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_rpc_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The client rpc service listens on the port.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">6667</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_internal_address</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_internal_address</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">DataNode internal service host/IP</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">string</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><ul><li>dn_internal_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_internal_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">DataNode internal service port</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10730</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><ul><li>dn_mpp_data_exchange_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">mpp_data_exchange_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">MPP data exchange port</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10740</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><ul><li>dn_schema_region_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_schema_region_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">DataNode Schema replica communication port for consensus</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10750</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><ul><li>dn_data_region_consensus_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_data_region_consensus_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">DataNode Data replica communication port for consensus</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10760</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><ul><li>dn_join_cluster_retry_interval_ms</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_join_cluster_retry_interval_ms</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The time of data node waiting for the next retry to join into the cluster</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">5000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="ssl-configuration" tabindex="-1"><a class="header-anchor" href="#ssl-configuration"><span>SSL Configuration</span></a></h3><ul><li>enable_thrift_ssl</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">enable_thrift_ssl</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">When enable_thrift_ssl is configured as true, SSL encryption will be used for communication through dn_rpc_port</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>enable_https</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">enable_https</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">REST Service Specifies whether to enable SSL configuration</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>key_store_path</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">key_store_path</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">SSL certificate path</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">&quot;&quot;</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>key_store_pwd</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">key_store_pwd</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">SSL certificate password</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">&quot;&quot;</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="target-config-nodes" tabindex="-1"><a class="header-anchor" href="#target-config-nodes"><span>Target Config Nodes</span></a></h3><ul><li>dn_seed_config_node</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_seed_config_node</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">ConfigNode Address for DataNode to join cluster</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">127.0.0.1:10710</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><h3 id="connection-configuration" tabindex="-1"><a class="header-anchor" href="#connection-configuration"><span>Connection Configuration</span></a></h3><ul><li>dn_rpc_thrift_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether enable thrift&#39;s compression (using GZIP).</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_rpc_advanced_compression_enable</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_advanced_compression_enable</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether enable thrift&#39;s advanced compression.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_rpc_selector_thread_count</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_selector_thread_count</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The number of rpc selector thread.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_rpc_min_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_min_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Minimum concurrent rpc connections</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Description</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_rpc_max_concurrent_client_num</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_rpc_max_concurrent_client_num</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Max concurrent rpc connections</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Short Int : [0,65535]</td></tr><tr><td style="text-align:center;">Description</td><td style="text-align:left;">65535</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_thrift_max_frame_size</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_thrift_max_frame_size</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Max size of bytes of each thrift RPC request/response</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Long</td></tr><tr><td style="text-align:center;">Unit</td><td style="text-align:left;">Byte</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">536870912</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_thrift_init_buffer_size</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_thrift_init_buffer_size</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Initial size of bytes of buffer that thrift used</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">long</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">1024</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_connection_timeout_ms</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_connection_timeout_ms</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Thrift socket and connection timeout between nodes</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">60000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_core_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_core_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Number of core clients routed to each node in a ClientManager</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">200</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_max_client_count_for_each_node_in_client_manager</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_max_client_count_for_each_node_in_client_manager</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Number of max clients routed to each node in a ClientManager</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">300</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="dictionary-configuration" tabindex="-1"><a class="header-anchor" href="#dictionary-configuration"><span>Dictionary Configuration</span></a></h3><ul><li>dn_system_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_system_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The directories of system files. It is recommended to use an absolute path.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/datanode/system (Windows: data\\datanode\\system)</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_data_dirs</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_data_dirs</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The directories of data files. Multiple directories are separated by comma. The starting directory of the relative path is related to the operating system. It is recommended to use an absolute path. If the path does not exist, the system will automatically create it.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String[]</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/datanode/data (Windows: data\\datanode\\data)</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_multi_dir_strategy</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_multi_dir_strategy</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">IoTDB&#39;s strategy for selecting directories for TsFile in tsfile_dir. You can use a simple class name or a full name of the class. The system provides the following three strategies: <br>1. SequenceStrategy: IoTDB selects the directory from tsfile_dir in order, traverses all the directories in tsfile_dir in turn, and keeps counting;<br>2. MaxDiskUsableSpaceFirstStrategy: IoTDB first selects the directory with the largest free disk space in tsfile_dir;<br>You can complete a user-defined policy in the following ways:<br>1. Inherit the org.apache.iotdb.db.storageengine.rescon.disk.strategy.DirectoryStrategy class and implement its own Strategy method;<br>2. Fill in the configuration class with the full class name of the implemented class (package name plus class name, UserDfineStrategyPackage);<br>3. Add the jar file to the project.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">SequenceStrategy</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">hot-load</td></tr></tbody></table><ul><li>dn_consensus_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_consensus_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The directories of consensus files. It is recommended to use an absolute path.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/datanode/consensus</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_wal_dirs</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_wal_dirs</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Write Ahead Log storage path. It is recommended to use an absolute path.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/datanode/wal</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_tracing_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_tracing_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The tracing root directory path. It is recommended to use an absolute path.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">datanode/tracing</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>dn_sync_dir</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">dn_sync_dir</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The directories of sync files. It is recommended to use an absolute path.</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">data/datanode/sync</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><h3 id="metric-configuration" tabindex="-1"><a class="header-anchor" href="#metric-configuration"><span>Metric Configuration</span></a></h3><h2 id="enable-gc-log" tabindex="-1"><a class="header-anchor" href="#enable-gc-log"><span>Enable GC log</span></a></h2><p>GC log is off by default.<br> For performance tuning, you may want to collect the GC info.</p><p>To enable GC log, just add a parameter &quot;printgc&quot; when you start the DataNode.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">nohup</span> sbin/start-datanode.sh printgc <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Or</p><div class="language-cmd line-numbers-mode" data-ext="cmd" data-title="cmd"><pre class="language-cmd"><code>sbin\\start-datanode.bat printgc\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GC log is stored at <code>IOTDB_HOME/logs/gc.log</code>.<br> There will be at most 10 gc.log.* files and each one can reach to 10MB.</p><h3 id="rest-service-configuration" tabindex="-1"><a class="header-anchor" href="#rest-service-configuration"><span>REST Service Configuration</span></a></h3><ul><li>enable_rest_service</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">enable_rest_service</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether to enable the Rest service</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>rest_service_port</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">rest_service_port</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The Rest service listens to the port number</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">18080</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>enable_swagger</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">enable_swagger</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Whether to enable swagger to display rest interface information</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>rest_query_default_row_size_limit</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">rest_query_default_row_size_limit</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The maximum number of rows in a result set that can be returned by a query</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cache_expire</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cache_expire</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Expiration time for caching customer login information</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">28800</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cache_max_num</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cache_max_num</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">The maximum number of users stored in the cache</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">100</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>cache_init_num</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">cache_init_num</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Initial cache capacity</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">10</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>trust_store_path</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">trust_store_path</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">keyStore Password (optional)</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">&quot;&quot;</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>trust_store_pwd</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">trust_store_pwd</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">trustStore Password (Optional)</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">&quot;&quot;</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>idle_timeout</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">idle_timeout</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">SSL timeout duration, expressed in seconds</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int32</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">5000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table>',113);function x(u,p){const n=r("ExternalLinkIcon");return i(),d("div",null,[c,t("h2",g,[t("a",y,[t("span",null,[e("Environment Configuration File（"),t("a",f,[e("datanode-env.sh/bat）"),s(n)])])])]),h])}const b=a(o,[["render",x],["__file","DataNode-Config-Manual.html.vue"]]),_=JSON.parse('{"path":"/UserGuide/latest/Reference/DataNode-Config-Manual.html","title":"DataNode Configuration Parameters","lang":"en-US","frontmatter":{"description":"DataNode Configuration Parameters We use the same configuration files for IoTDB DataNode and Standalone version, all under the conf. datanode-env.sh/bat：Environment configuratio...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Reference/DataNode-Config-Manual.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Reference/DataNode-Config-Manual.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"DataNode Configuration Parameters"}],["meta",{"property":"og:description","content":"DataNode Configuration Parameters We use the same configuration files for IoTDB DataNode and Standalone version, all under the conf. datanode-env.sh/bat：Environment configuratio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-19T09:58:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-19T09:58:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DataNode Configuration Parameters\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-19T09:58:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Hot Modification Configuration","slug":"hot-modification-configuration","link":"#hot-modification-configuration","children":[]},{"level":2,"title":"Environment Configuration File（datanode-env.sh/bat）","slug":"environment-configuration-file-datanode-env-sh-bat","link":"#environment-configuration-file-datanode-env-sh-bat","children":[]},{"level":2,"title":"JMX Authorization","slug":"jmx-authorization","link":"#jmx-authorization","children":[]},{"level":2,"title":"DataNode/Standalone Configuration File (iotdb-system.properties)","slug":"datanode-standalone-configuration-file-iotdb-system-properties","link":"#datanode-standalone-configuration-file-iotdb-system-properties","children":[{"level":3,"title":"Data Node RPC Configuration","slug":"data-node-rpc-configuration","link":"#data-node-rpc-configuration","children":[]},{"level":3,"title":"SSL Configuration","slug":"ssl-configuration","link":"#ssl-configuration","children":[]},{"level":3,"title":"Target Config Nodes","slug":"target-config-nodes","link":"#target-config-nodes","children":[]},{"level":3,"title":"Connection Configuration","slug":"connection-configuration","link":"#connection-configuration","children":[]},{"level":3,"title":"Dictionary Configuration","slug":"dictionary-configuration","link":"#dictionary-configuration","children":[]},{"level":3,"title":"Metric Configuration","slug":"metric-configuration","link":"#metric-configuration","children":[]}]},{"level":2,"title":"Enable GC log","slug":"enable-gc-log","link":"#enable-gc-log","children":[{"level":3,"title":"REST Service Configuration","slug":"rest-service-configuration","link":"#rest-service-configuration","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1721383100000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.15,"words":1845},"filePathRelative":"UserGuide/latest/Reference/DataNode-Config-Manual.md","localizedDate":"July 10, 2023","autoDesc":true}');export{b as comp,_ as data};
