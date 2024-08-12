import{_ as i,r as o,o as s,c as l,b as t,d as e,a,e as d}from"./app-XaimuxhO.js";const r={},c=d(`<h1 id="cluster-deployment" tabindex="-1"><a class="header-anchor" href="#cluster-deployment"><span>Cluster Deployment</span></a></h1><p>This section will take the IoTDB classic cluster deployment architecture 3C3D (3 ConfigNodes and 3 DataNodes) as an example to introduce how to deploy a cluster, commonly known as the 3C3D cluster. The architecture diagram of the 3C3D cluster is as follows:</p><div align="center"><img src="https://alioss.timecho.com/docs/img/20240705141552.png" alt="" style="width:60%;"></div><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note"><span>Note</span></a></h2><ol><li><p>It is recommended to prioritize using <code>hostname</code> for IP configuration during deployment, which can avoid the problem of modifying the host IP in the later stage and causing the database to fail to start. To set the host name, you need to configure /etc/hosts on the target server. For example, if the local IP is 192.168.1.3 and the host name is iotdb-1, you can use the following command to set the server&#39;s host name and configure the <code>cn_internal_address</code> and <code>dn_internal_address</code> of IoTDB using the host name.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.1.3  iotdb-1&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Some parameters cannot be modified after the first startup. Please refer to the &quot;Parameter Configuration&quot; section below for settings.</p></li></ol><h2 id="preparation-steps" tabindex="-1"><a class="header-anchor" href="#preparation-steps"><span>Preparation Steps</span></a></h2>`,6),h={href:"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/IoTDB-Package.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html",target:"_blank",rel:"noopener noreferrer"},u=d(`<h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><p>Assuming there are three Linux servers now, the IP addresses and service roles are assigned as follows:</p><table><thead><tr><th>Node IP</th><th>Host Name</th><th>Service</th></tr></thead><tbody><tr><td>192.168.1.3</td><td>iotdb-1</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.4</td><td>iotdb-2</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.5</td><td>iotdb-3</td><td>ConfigNode、DataNode</td></tr></tbody></table><h3 id="_1-set-host-name" tabindex="-1"><a class="header-anchor" href="#_1-set-host-name"><span>1. Set Host Name</span></a></h3><p>On three machines, configure the host names separately. To set the host names, configure <code>/etc/hosts</code> on the target server. Use the following command:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>echo &quot;192.168.1.3  iotdb-1&quot;  &gt;&gt; /etc/hosts
echo &quot;192.168.1.4  iotdb-2&quot;  &gt;&gt; /etc/hosts
echo &quot;192.168.1.5  iotdb-3&quot;  &gt;&gt; /etc/hosts 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-configuration" tabindex="-1"><a class="header-anchor" href="#_2-configuration"><span>2. Configuration</span></a></h3><p>Unzip the installation package and enter the installation directory</p><div class="language-Plain line-numbers-mode" data-ext="Plain" data-title="Plain"><pre class="language-Plain"><code>unzip  apache-iotdb-{version}-all-bin.zip 
cd  apache-iotdb-{version}-all-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="environment-script-configuration" tabindex="-1"><a class="header-anchor" href="#environment-script-configuration"><span>Environment Script Configuration</span></a></h4><ul><li><code>./conf/confignode-env.sh</code> configuration</li></ul><table><thead><tr><th style="text-align:left;"><strong>配置项</strong></th><th style="text-align:left;"><strong>Description</strong></th><th style="text-align:left;"><strong>Default</strong></th><th style="text-align:left;"><strong>Recommended value</strong></th><th style="text-align:left;"><strong>Note</strong></th></tr></thead><tbody><tr><td style="text-align:left;">MEMORY_SIZE</td><td style="text-align:left;">The total amount of memory that IoTDB ConfigNode nodes can use</td><td style="text-align:left;">-</td><td style="text-align:left;">Can be filled in as needed, and the system will allocate memory based on the filled in values</td><td style="text-align:left;">Restarting the service takes effect</td></tr></tbody></table><ul><li><code>./conf/datanode-env.sh</code> configuration</li></ul><table><thead><tr><th style="text-align:left;"><strong>Configuration</strong></th><th style="text-align:left;"><strong>Description</strong></th><th style="text-align:left;"><strong>Default</strong></th><th style="text-align:left;"><strong>Recommended value</strong></th><th style="text-align:left;"><strong>Note</strong></th></tr></thead><tbody><tr><td style="text-align:left;">MEMORY_SIZE</td><td style="text-align:left;">The total amount of memory that IoTDB DataNode nodes can use</td><td style="text-align:left;">-</td><td style="text-align:left;">Can be filled in as needed, and the system will allocate memory based on the filled in values</td><td style="text-align:left;">Restarting the service takes effect</td></tr></tbody></table><h4 id="general-configuration" tabindex="-1"><a class="header-anchor" href="#general-configuration"><span>General Configuration</span></a></h4><p>Open the general configuration file <code>./conf/iotdb-system.properties</code>， The following parameters can be set according to the deployment method:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th></tr></thead><tbody><tr><td>cluster_name</td><td>Cluster Name</td><td>defaultCluster</td><td>defaultCluster</td><td>defaultCluster</td></tr><tr><td>schema_replication_factor</td><td>The number of metadata replicas, the number of DataNodes should not be less than this number</td><td>3</td><td>3</td><td>3</td></tr><tr><td>data_replication_factor</td><td>The number of data replicas should not be less than this number of DataNodes</td><td>2</td><td>2</td><td>2</td></tr></tbody></table><h4 id="confignode-configuration" tabindex="-1"><a class="header-anchor" href="#confignode-configuration"><span>ConfigNode Configuration</span></a></h4><p>Open the ConfigNode configuration file <code>./conf/iotdb-system.properties</code>， Set the following parameters</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th><th><strong>Recommended value</strong></th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th><th>Note</th></tr></thead><tbody><tr><td>cn_internal_address</td><td>The address used by ConfigNode for communication within the cluster</td><td>127.0.0.1</td><td>The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td>iotdb-1</td><td>iotdb-2</td><td>iotdb-3</td><td>Cannot be modified after initial startup</td></tr><tr><td>cn_internal_port</td><td>The port used by ConfigNode for communication within the cluster</td><td>10710</td><td>10710</td><td>10710</td><td>10710</td><td>10710</td><td>Cannot be modified after initial startup</td></tr><tr><td>cn_consensus_port</td><td>The port used for ConfigNode replica group consensus protocol communication</td><td>10720</td><td>10720</td><td>10720</td><td>10720</td><td>10720</td><td>Cannot be modified after initial startup</td></tr><tr><td>cn_seed_config_node</td><td>The address of the ConfigNode that the node connects to when registering to join the cluster, <code>cn_internal_address:cn_internal_port</code></td><td>127.0.0.1:10710</td><td>The first CongfigNode&#39;s <code>cn_internal-address: cn_internal_port</code></td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>Cannot be modified after initial startup</td></tr></tbody></table><h4 id="datanode-configuration" tabindex="-1"><a class="header-anchor" href="#datanode-configuration"><span>DataNode Configuration</span></a></h4><p>Open DataNode Configuration File <code>./conf/iotdb-system.properties</code>,Set the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th><th><strong>Recommended value</strong></th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th><th>Note</th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>The address of the client RPC service</td><td>0.0.0.0</td><td>0.0.0.0</td><td>0.0.0.0</td><td>0.0.0.0</td><td>0.0.0.0</td><td>Restarting the service takes effect</td></tr><tr><td>dn_rpc_port</td><td>The port of the client RPC service</td><td>6667</td><td>6667</td><td>6667</td><td>6667</td><td>6667</td><td>Restarting the service takes effect</td></tr><tr><td>dn_internal_address</td><td>The address used by DataNode for communication within the cluster</td><td>127.0.0.1</td><td>The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td>iotdb-1</td><td>iotdb-2</td><td>iotdb-3</td><td>Cannot be modified after initial startup</td></tr><tr><td>dn_internal_port</td><td>The port used by DataNode for communication within the cluster</td><td>10730</td><td>10730</td><td>10730</td><td>10730</td><td>10730</td><td>Cannot be modified after initial startup</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>The port used by DataNode to receive data streams</td><td>10740</td><td>10740</td><td>10740</td><td>10740</td><td>10740</td><td>Cannot be modified after initial startup</td></tr><tr><td>dn_data_region_consensus_port</td><td>The port used by DataNode for data replica consensus protocol communication</td><td>10750</td><td>10750</td><td>10750</td><td>10750</td><td>10750</td><td>Cannot be modified after initial startup</td></tr><tr><td>dn_schema_region_consensus_port</td><td>The port used by DataNode for metadata replica consensus protocol communication</td><td>10760</td><td>10760</td><td>10760</td><td>10760</td><td>10760</td><td>Cannot be modified after initial startup</td></tr><tr><td>dn_seed_config_node</td><td>The ConfigNode address that the node connects to when registering to join the cluster, i.e. <code>cn_internal-address: cn_internal_port</code></td><td>127.0.0.1:10710</td><td>The first CongfigNode&#39;s cn_internal-address: cn_internal_port</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>Cannot be modified after initial startup</td></tr></tbody></table><h3 id="_3-start-confignode" tabindex="-1"><a class="header-anchor" href="#_3-start-confignode"><span>3. Start ConfigNode</span></a></h3><p>Start the first confignode of IoTDB-1 first, ensuring that the seed confignode node starts first, and then start the second and third confignode nodes in sequence</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>cd sbin
./start-confignode.sh    -d      #&quot;- d&quot; parameter will start in the background
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-start-datanode" tabindex="-1"><a class="header-anchor" href="#_4-start-datanode"><span>4. Start DataNode</span></a></h3><p>Enter the <code>sbin</code> directory of iotdb and start three datanode nodes in sequence:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>cd sbin
./start-datanode.sh   -d   #&quot;- d&quot; parameter will start in the background
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-verify-deployment" tabindex="-1"><a class="header-anchor" href="#_5-verify-deployment"><span>5. Verify Deployment</span></a></h3><p>Can be executed directly Cli startup script in <code>./sbin</code> directory:</p><div class="language-Plain line-numbers-mode" data-ext="Plain" data-title="Plain"><pre class="language-Plain"><code>./start-cli.sh  -h  ip(local IP or domain name)  -p  port(6667)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After successful startup, the following interface will appear displaying successful installation of IOTDB.</p><figure><img src="https://alioss.timecho.com/docs/img/开源成功.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>You can use the <code>show cluster</code> command to view cluster information:</p><figure><img src="https://alioss.timecho.com/docs/img/开源版 show cluter.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>The appearance of <code>ACTIVATED (W)</code> indicates passive activation, which means that this Configurable Node does not have a license file (or has not issued the latest license file with a timestamp), and its activation depends on other Activated Configurable Nodes in the cluster. At this point, it is recommended to check if the license file has been placed in the license folder. If not, please place the license file. If a license file already exists, it may be due to inconsistency between the license file of this node and the information of other nodes. Please contact Tianmu staff to reapply.</p></blockquote><h2 id="node-maintenance-steps" tabindex="-1"><a class="header-anchor" href="#node-maintenance-steps"><span>Node Maintenance Steps</span></a></h2><h3 id="confignode-node-maintenance" tabindex="-1"><a class="header-anchor" href="#confignode-node-maintenance"><span>ConfigNode Node Maintenance</span></a></h3><p>ConfigNode node maintenance is divided into two types of operations: adding and removing ConfigNodes, with two common use cases:</p><ul><li>Cluster expansion: For example, when there is only one ConfigNode in the cluster, and you want to increase the high availability of ConfigNode nodes, you can add two ConfigNodes, making a total of three ConfigNodes in the cluster.</li><li>Cluster failure recovery: When the machine where a ConfigNode is located fails, making the ConfigNode unable to run normally, you can remove this ConfigNode and then add a new ConfigNode to the cluster.</li></ul><blockquote><p>❗️Note, after completing ConfigNode node maintenance, you need to ensure that there are 1 or 3 ConfigNodes running normally in the cluster. Two ConfigNodes do not have high availability, and more than three ConfigNodes will lead to performance loss.</p></blockquote><h4 id="adding-confignode-nodes" tabindex="-1"><a class="header-anchor" href="#adding-confignode-nodes"><span>Adding ConfigNode Nodes</span></a></h4><p>Script command:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Linux / MacOS</span>
<span class="token comment"># First switch to the IoTDB root directory</span>
sbin/start-confignode.sh

<span class="token comment"># Windows</span>
<span class="token comment"># First switch to the IoTDB root directory</span>
sbin/start-confignode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Parameter introduction:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Description</th><th style="text-align:left;">Is it required</th></tr></thead><tbody><tr><td style="text-align:left;">-v</td><td style="text-align:left;">Show version information</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-f</td><td style="text-align:left;">Run the script in the foreground, do not put it in the background</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-d</td><td style="text-align:left;">Start in daemon mode, i.e. run in the background</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">Specify a file to store the process ID for process management</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;">Specify the path to the configuration file folder, the script will load the configuration file from here</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-g</td><td style="text-align:left;">Print detailed garbage collection (GC) information</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-H</td><td style="text-align:left;">Specify the path of the Java heap dump file, used when JVM memory overflows</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-E</td><td style="text-align:left;">Specify the path of the JVM error log file</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-D</td><td style="text-align:left;">Define system properties, in the format key=value</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-X</td><td style="text-align:left;">Pass -XX parameters directly to the JVM</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-h</td><td style="text-align:left;">Help instruction</td><td style="text-align:left;">No</td></tr></tbody></table><h4 id="removing-confignode-nodes" tabindex="-1"><a class="header-anchor" href="#removing-confignode-nodes"><span>Removing ConfigNode Nodes</span></a></h4><p>First connect to the cluster through the CLI and confirm the internal address and port number of the ConfigNode you want to remove by using <code>show confignodes</code>:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>IoTDB&gt; show confignodes
+------+-------+---------------+------------+--------+
|NodeID| Status|InternalAddress|InternalPort|    Role|
+------+-------+---------------+------------+--------+
|     0|Running|      127.0.0.1|       10710|  Leader|
|     1|Running|      127.0.0.1|       10711|Follower|
|     2|Running|      127.0.0.1|       10712|Follower|
+------+-------+---------------+------------+--------+
Total line number = 3
It costs 0.030s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use the script to remove the DataNode. Script command:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code># Linux / MacOS 
sbin/remove-confignode.sh [confignode_id]
or
./sbin/remove-confignode.sh [cn_internal_address:cn_internal_port]

#Windows
sbin/remove-confignode.bat [confignode_id]
or
./sbin/remove-confignode.bat [cn_internal_address:cn_internal_port]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datanode-node-maintenance" tabindex="-1"><a class="header-anchor" href="#datanode-node-maintenance"><span>DataNode Node Maintenance</span></a></h3><p>There are two common scenarios for DataNode node maintenance:</p><ul><li>Cluster expansion: For the purpose of expanding cluster capabilities, add new DataNodes to the cluster</li><li>Cluster failure recovery: When a machine where a DataNode is located fails, making the DataNode unable to run normally, you can remove this DataNode and add a new DataNode to the cluster</li></ul><blockquote><p>❗️Note, in order for the cluster to work normally, during the process of DataNode node maintenance and after the maintenance is completed, the total number of DataNodes running normally should not be less than the number of data replicas (usually 2), nor less than the number of metadata replicas (usually 3).</p></blockquote><h4 id="adding-datanode-nodes" tabindex="-1"><a class="header-anchor" href="#adding-datanode-nodes"><span>Adding DataNode Nodes</span></a></h4><p>Script command:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code># Linux / MacOS 
# First switch to the IoTDB root directory
sbin/start-datanode.sh

# Windows
# First switch to the IoTDB root directory
sbin/start-datanode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Parameter introduction:</p><table><thead><tr><th style="text-align:left;">Abbreviation</th><th style="text-align:left;">Description</th><th style="text-align:left;">Is it required</th></tr></thead><tbody><tr><td style="text-align:left;">-v</td><td style="text-align:left;">Show version information</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-f</td><td style="text-align:left;">Run the script in the foreground, do not put it in the background</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-d</td><td style="text-align:left;">Start in daemon mode, i.e. run in the background</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">Specify a file to store the process ID for process management</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;">Specify the path to the configuration file folder, the script will load the configuration file from here</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-g</td><td style="text-align:left;">Print detailed garbage collection (GC) information</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-H</td><td style="text-align:left;">Specify the path of the Java heap dump file, used when JVM memory overflows</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-E</td><td style="text-align:left;">Specify the path of the JVM error log file</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-D</td><td style="text-align:left;">Define system properties, in the format key=value</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-X</td><td style="text-align:left;">Pass -XX parameters directly to the JVM</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-h</td><td style="text-align:left;">Help instruction</td><td style="text-align:left;">No</td></tr></tbody></table><p>Note: After adding a DataNode, as new writes arrive (and old data expires, if TTL is set), the cluster load will gradually balance towards the new DataNode, eventually achieving a balance of storage and computation resources on all nodes.</p><h4 id="removing-datanode-nodes" tabindex="-1"><a class="header-anchor" href="#removing-datanode-nodes"><span>Removing DataNode Nodes</span></a></h4><p>First connect to the cluster through the CLI and confirm the RPC address and port number of the DataNode you want to remove with <code>show datanodes</code>:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>IoTDB&gt; show datanodes
+------+-------+----------+-------+-------------+---------------+
|NodeID| Status|RpcAddress|RpcPort|DataRegionNum|SchemaRegionNum|
+------+-------+----------+-------+-------------+---------------+
|     1|Running|   0.0.0.0|   6667|            0|              0|
|     2|Running|   0.0.0.0|   6668|            1|              1|
|     3|Running|   0.0.0.0|   6669|            1|              0|
+------+-------+----------+-------+-------------+---------------+
Total line number = 3
It costs 0.110s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use the script to remove the DataNode. Script command:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code># Linux / MacOS 
sbin/remove-datanode.sh [dn_rpc_address:dn_rpc_port]

#Windows
sbin/remove-datanode.bat [dn_rpc_address:dn_rpc_port]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,67);function m(p,f){const n=o("ExternalLinkIcon");return s(),l("div",null,[c,t("ol",null,[t("li",null,[t("p",null,[e("Prepare the IoTDB database installation package:：apache-iotdb-{version}-all-bin.zip（Please refer to the installation package for details："),t("a",h,[e("IoTDB-Package"),a(n)]),e("）")])]),t("li",null,[t("p",null,[e("Configure the operating system environment according to environmental requirements (system environment configuration can be found in:"),t("a",g,[e("Environment Requirements"),a(n)]),e(")")])])]),u])}const v=i(r,[["render",m],["__file","Cluster-Deployment.html.vue"]]),y=JSON.parse('{"path":"/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment.html","title":"Cluster Deployment","lang":"en-US","frontmatter":{"description":"Cluster Deployment This section will take the IoTDB classic cluster deployment architecture 3C3D (3 ConfigNodes and 3 DataNodes) as an example to introduce how to deploy a clust...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Cluster Deployment"}],["meta",{"property":"og:description","content":"Cluster Deployment This section will take the IoTDB classic cluster deployment architecture 3C3D (3 ConfigNodes and 3 DataNodes) as an example to introduce how to deploy a clust..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E6%88%90%E5%8A%9F.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-10T03:15:05.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-10T03:15:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cluster Deployment\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E6%88%90%E5%8A%9F.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E7%89%88%20show%20cluter.png\\"],\\"dateModified\\":\\"2024-08-10T03:15:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Note","slug":"note","link":"#note","children":[]},{"level":2,"title":"Preparation Steps","slug":"preparation-steps","link":"#preparation-steps","children":[]},{"level":2,"title":"Installation Steps","slug":"installation-steps","link":"#installation-steps","children":[{"level":3,"title":"1. Set Host Name","slug":"_1-set-host-name","link":"#_1-set-host-name","children":[]},{"level":3,"title":"2. Configuration","slug":"_2-configuration","link":"#_2-configuration","children":[]},{"level":3,"title":"3. Start ConfigNode","slug":"_3-start-confignode","link":"#_3-start-confignode","children":[]},{"level":3,"title":"4. Start DataNode","slug":"_4-start-datanode","link":"#_4-start-datanode","children":[]},{"level":3,"title":"5. Verify Deployment","slug":"_5-verify-deployment","link":"#_5-verify-deployment","children":[]}]},{"level":2,"title":"Node Maintenance Steps","slug":"node-maintenance-steps","link":"#node-maintenance-steps","children":[{"level":3,"title":"ConfigNode Node Maintenance","slug":"confignode-node-maintenance","link":"#confignode-node-maintenance","children":[]},{"level":3,"title":"DataNode Node Maintenance","slug":"datanode-node-maintenance","link":"#datanode-node-maintenance","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1723259705000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":4},{"name":"Li Yu Heng","email":"liyuheng55555@126.com","commits":1},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.74,"words":2021},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment.md","localizedDate":"July 10, 2023","autoDesc":true}');export{v as comp,y as data};
