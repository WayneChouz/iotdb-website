import{_ as o,c as l,b as s,d as t,e as n,a as i,w as d,r,o as c}from"./app-ED5DzO24.js";const p={};function h(u,e){const a=r("RouteLink");return c(),l("div",null,[e[9]||(e[9]=s('<h1 id="cluster-deployment" tabindex="-1"><a class="header-anchor" href="#cluster-deployment"><span>Cluster Deployment</span></a></h1><p>This section will take the IoTDB classic cluster deployment architecture 3C3D (3 ConfigNodes and 3 DataNodes) as an example to introduce how to deploy a cluster, commonly known as the 3C3D cluster. The architecture diagram of the 3C3D cluster is as follows:</p><div align="center"><img src="https://alioss.timecho.com/docs/img/20240705141552.png" alt="" style="width:60%;"></div><h2 id="note" tabindex="-1"><a class="header-anchor" href="#note"><span>Note</span></a></h2>',4)),t("ol",null,[t("li",null,[t("p",null,[e[1]||(e[1]=n("Before installation, ensure that the system is complete by referring to ")),i(a,{to:"/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html"},{default:d(()=>e[0]||(e[0]=[n("System configuration")])),_:1})])]),e[2]||(e[2]=s(`<li><p>It is recommended to prioritize using <code>hostname</code> for IP configuration during deployment, which can avoid the problem of modifying the host IP in the later stage and causing the database to fail to start. To set the host name, you need to configure /etc/hosts on the target server. For example, if the local IP is 192.168.1.3 and the host name is iotdb-1, you can use the following command to set the server&#39;s host name and configure the <code>cn_internal_address</code> and <code>dn_internal_address</code> of IoTDB using the host name.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.1.3  iotdb-1&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Some parameters cannot be modified after the first startup. Please refer to the &quot;Parameter Configuration&quot; section below for settings.</p></li><li><p>Whether in linux or windows, ensure that the IoTDB installation path does not contain Spaces and Chinese characters to avoid software exceptions.</p></li><li><p>Please note that when installing and deploying IoTDB, it is necessary to use the same user for operations. You can:</p></li>`,4))]),e[10]||(e[10]=t("ul",null,[t("li",null,"Using root user (recommended): Using root user can avoid issues such as permissions."),t("li",null,[n("Using a fixed non root user: "),t("ul",null,[t("li",null,"Using the same user operation: Ensure that the same user is used for start, stop and other operations, and do not switch users."),t("li",null,"Avoid using sudo: Try to avoid using sudo commands as they execute commands with root privileges, which may cause confusion or security issues.")])])],-1)),e[11]||(e[11]=t("h2",{id:"preparation-steps",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#preparation-steps"},[t("span",null,"Preparation Steps")])],-1)),t("ol",null,[t("li",null,[t("p",null,[e[4]||(e[4]=n("Prepare the IoTDB database installation package:：apache-iotdb-{version}-all-bin.zip（Please refer to the installation package for details：")),i(a,{to:"/UserGuide/latest/Deployment-and-Maintenance/IoTDB-Package_apache.html"},{default:d(()=>e[3]||(e[3]=[n("IoTDB-Package")])),_:1}),e[5]||(e[5]=n("）"))])]),t("li",null,[t("p",null,[e[7]||(e[7]=n("Configure the operating system environment according to environmental requirements (system environment configuration can be found in:")),i(a,{to:"/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html"},{default:d(()=>e[6]||(e[6]=[n("Environment Requirements")])),_:1}),e[8]||(e[8]=n(")"))])])]),e[12]||(e[12]=s(`<h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><p>Assuming there are three Linux servers now, the IP addresses and service roles are assigned as follows:</p><table><thead><tr><th>Node IP</th><th>Host Name</th><th>Service</th></tr></thead><tbody><tr><td>192.168.1.3</td><td>iotdb-1</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.4</td><td>iotdb-2</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.5</td><td>iotdb-3</td><td>ConfigNode、DataNode</td></tr></tbody></table><h3 id="set-host-name" tabindex="-1"><a class="header-anchor" href="#set-host-name"><span>Set Host Name</span></a></h3><p>On three machines, configure the host names separately. To set the host names, configure <code>/etc/hosts</code> on the target server. Use the following command:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">echo &quot;192.168.1.3  iotdb-1&quot;  &gt;&gt; /etc/hosts</span>
<span class="line">echo &quot;192.168.1.4  iotdb-2&quot;  &gt;&gt; /etc/hosts</span>
<span class="line">echo &quot;192.168.1.5  iotdb-3&quot;  &gt;&gt; /etc/hosts </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h3><p>Unzip the installation package and enter the installation directory</p><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">unzip  apache-iotdb-{version}-all-bin.zip </span>
<span class="line">cd  apache-iotdb-{version}-all-bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="environment-script-configuration" tabindex="-1"><a class="header-anchor" href="#environment-script-configuration"><span>Environment Script Configuration</span></a></h4><ul><li><code>./conf/confignode-env.sh</code> configuration</li></ul><table><thead><tr><th style="text-align:left;"><strong>Configuration</strong></th><th style="text-align:left;"><strong>Description</strong></th><th style="text-align:left;"><strong>Default</strong></th><th style="text-align:left;"><strong>Recommended value</strong></th><th style="text-align:left;"><strong>Note</strong></th></tr></thead><tbody><tr><td style="text-align:left;">MEMORY_SIZE</td><td style="text-align:left;">The total amount of memory that IoTDB ConfigNode nodes can use</td><td style="text-align:left;">-</td><td style="text-align:left;">Can be filled in as needed, and the system will allocate memory based on the filled in values</td><td style="text-align:left;">Restarting the service takes effect</td></tr></tbody></table><ul><li><code>./conf/datanode-env.sh</code> configuration</li></ul><table><thead><tr><th style="text-align:left;"><strong>Configuration</strong></th><th style="text-align:left;"><strong>Description</strong></th><th style="text-align:left;"><strong>Default</strong></th><th style="text-align:left;"><strong>Recommended value</strong></th><th style="text-align:left;"><strong>Note</strong></th></tr></thead><tbody><tr><td style="text-align:left;">MEMORY_SIZE</td><td style="text-align:left;">The total amount of memory that IoTDB DataNode nodes can use</td><td style="text-align:left;">-</td><td style="text-align:left;">Can be filled in as needed, and the system will allocate memory based on the filled in values</td><td style="text-align:left;">Restarting the service takes effect</td></tr></tbody></table><h4 id="general-configuration" tabindex="-1"><a class="header-anchor" href="#general-configuration"><span>General Configuration</span></a></h4><p>Open the general configuration file <code>./conf/iotdb-common.properties</code>， The following parameters can be set according to the deployment method:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th></tr></thead><tbody><tr><td>cluster_name</td><td>Cluster Name</td><td>defaultCluster</td><td>defaultCluster</td><td>defaultCluster</td></tr><tr><td>schema_replication_factor</td><td>The number of metadata replicas, the number of DataNodes should not be less than this number</td><td>3</td><td>3</td><td>3</td></tr><tr><td>data_replication_factor</td><td>The number of data replicas should not be less than this number of DataNodes</td><td>2</td><td>2</td><td>2</td></tr></tbody></table><h4 id="confignode-configuration" tabindex="-1"><a class="header-anchor" href="#confignode-configuration"><span>ConfigNode Configuration</span></a></h4><p>Open the ConfigNode configuration file <code>./conf/iotdb-confignode.properties</code>， Set the following parameters</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th><th><strong>Recommended value</strong></th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th><th>Note</th></tr></thead><tbody><tr><td>cn_internal_address</td><td>The address used by ConfigNode for communication within the cluster</td><td>127.0.0.1</td><td>The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td>iotdb-1</td><td>iotdb-2</td><td>iotdb-3</td><td>Cannot be modified after initial startup</td></tr><tr><td>cn_internal_port</td><td>The port used by ConfigNode for communication within the cluster</td><td>10710</td><td>10710</td><td>10710</td><td>10710</td><td>10710</td><td>Cannot be modified after initial startup</td></tr><tr><td>cn_consensus_port</td><td>The port used for ConfigNode replica group consensus protocol communication</td><td>10720</td><td>10720</td><td>10720</td><td>10720</td><td>10720</td><td>Cannot be modified after initial startup</td></tr><tr><td>cn_seed_config_node</td><td>TThe address of the ConfigNode that the node connects to when registering to join the cluster, <code>cn_internal_address:cn_internal_port</code></td><td>127.0.0.1:10710</td><td>The first CongfigNode&#39;s <code>cn_internal-address: cn_internal_port</code></td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>Cannot be modified after initial startup</td></tr></tbody></table><h4 id="datanode-configuration" tabindex="-1"><a class="header-anchor" href="#datanode-configuration"><span>DataNode Configuration</span></a></h4><p>Open DataNode Configuration File <code>./conf/iotdb-datanode.properties</code>,Set the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th><th><strong>Recommended value</strong></th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th><th>Note</th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>The address of the client RPC service</td><td>127.0.0.1</td><td>Recommend using the <strong>IPV4 address or hostname</strong> of the server where it is located</td><td>iotdb-1</td><td>iotdb-2</td><td>iotdb-3</td><td>Restarting the service takes effect</td></tr><tr><td>dn_rpc_port</td><td>The port of the client RPC service</td><td>6667</td><td>6667</td><td>6667</td><td>6667</td><td>6667</td><td>Restarting the service takes effect</td></tr><tr><td>dn_internal_address</td><td>The address used by DataNode for communication within the cluster</td><td>127.0.0.1</td><td>The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td>iotdb-1</td><td>iotdb-2</td><td>iotdb-3</td><td>Cannot be modified after initial startup</td></tr><tr><td>dn_internal_port</td><td>The port used by DataNode for communication within the cluster</td><td>10730</td><td>10730</td><td>10730</td><td>10730</td><td>10730</td><td>Cannot be modified after initial startup</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>The port used by DataNode to receive data streams</td><td>10740</td><td>10740</td><td>10740</td><td>10740</td><td>10740</td><td>Cannot be modified after initial startup</td></tr><tr><td>dn_data_region_consensus_port</td><td>The port used by DataNode for data replica consensus protocol communication</td><td>10750</td><td>10750</td><td>10750</td><td>10750</td><td>10750</td><td>Cannot be modified after initial startup</td></tr><tr><td>dn_schema_region_consensus_port</td><td>The port used by DataNode for metadata replica consensus protocol communication</td><td>10760</td><td>10760</td><td>10760</td><td>10760</td><td>10760</td><td>Cannot be modified after initial startup</td></tr><tr><td>dn_seed_config_node</td><td>The address of the ConfigNode that the node connects to when registering to join the cluster, i.e. <code>cn_internal-address: cn_internal_port</code></td><td>127.0.0.1:10710</td><td>The first CongfigNode&#39;s cn_internal-address: cn_internal_port</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>Cannot be modified after initial startup</td></tr></tbody></table><blockquote><p>❗️Attention: Editors such as VSCode Remote do not have automatic configuration saving function. Please ensure that the modified files are saved persistently, otherwise the configuration items will not take effect</p></blockquote><h3 id="start-confignode" tabindex="-1"><a class="header-anchor" href="#start-confignode"><span>Start ConfigNode</span></a></h3><p>Start the first confignode of IoTDB-1 first, ensuring that the seed confignode node starts first, and then start the second and third confignode nodes in sequence</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">cd sbin</span>
<span class="line">./start-confignode.sh    -d      #&quot;- d&quot; parameter will start in the background</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>If the startup fails, please refer to <a href="#common-questions">Common Questions</a> for solutions.</p><h3 id="start-datanode" tabindex="-1"><a class="header-anchor" href="#start-datanode"><span>Start DataNode</span></a></h3><p>Enter the <code>sbin</code> directory of iotdb and start three datanode nodes in sequence:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">cd sbin</span>
<span class="line">./start-datanode.sh   -d   #&quot;- d&quot; parameter will start in the background</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="verify-deployment" tabindex="-1"><a class="header-anchor" href="#verify-deployment"><span>Verify Deployment</span></a></h3><p>Can be executed directly Cli startup script in <code>./sbin</code> directory:</p><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">./start-cli.sh  -h  ip(local IP or domain name)  -p  port(6667)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After successful startup, the following interface will appear displaying successful installation of IOTDB.</p><figure><img src="https://alioss.timecho.com/docs/img/开源成功.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>You can use the <code>show cluster</code> command to view cluster information:</p><figure><img src="https://alioss.timecho.com/docs/img/开源版 show cluter.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>The appearance of <code>ACTIVATED (W)</code> indicates passive activation, which means that this Configurable Node does not have a license file (or has not issued the latest license file with a timestamp), and its activation depends on other Activated Configurable Nodes in the cluster. At this point, it is recommended to check if the license file has been placed in the license folder. If not, please place the license file. If a license file already exists, it may be due to inconsistency between the license file of this node and the information of other nodes. Please contact Timecho staff to reapply.</p></blockquote><h2 id="node-maintenance-steps" tabindex="-1"><a class="header-anchor" href="#node-maintenance-steps"><span>Node Maintenance Steps</span></a></h2><h3 id="confignode-node-maintenance" tabindex="-1"><a class="header-anchor" href="#confignode-node-maintenance"><span>ConfigNode Node Maintenance</span></a></h3><p>ConfigNode node maintenance is divided into two types of operations: adding and removing ConfigNodes, with two common use cases:</p><ul><li>Cluster expansion: For example, when there is only one ConfigNode in the cluster, and you want to increase the high availability of ConfigNode nodes, you can add two ConfigNodes, making a total of three ConfigNodes in the cluster.</li><li>Cluster failure recovery: When the machine where a ConfigNode is located fails, making the ConfigNode unable to run normally, you can remove this ConfigNode and then add a new ConfigNode to the cluster.</li></ul><blockquote><p>❗️Note, after completing ConfigNode node maintenance, you need to ensure that there are 1 or 3 ConfigNodes running normally in the cluster. Two ConfigNodes do not have high availability, and more than three ConfigNodes will lead to performance loss.</p></blockquote><h4 id="adding-confignode-nodes" tabindex="-1"><a class="header-anchor" href="#adding-confignode-nodes"><span>Adding ConfigNode Nodes</span></a></h4><p>Script command:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Linux / MacOS</span></span>
<span class="line"><span class="token comment"># First switch to the IoTDB root directory</span></span>
<span class="line">sbin/start-confignode.sh</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Windows</span></span>
<span class="line"><span class="token comment"># First switch to the IoTDB root directory</span></span>
<span class="line">sbin/start-confignode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Parameter introduction:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Description</th><th style="text-align:left;">Is it required</th></tr></thead><tbody><tr><td style="text-align:left;">-v</td><td style="text-align:left;">Show version information</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-f</td><td style="text-align:left;">Run the script in the foreground, do not put it in the background</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-d</td><td style="text-align:left;">Start in daemon mode, i.e. run in the background</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">Specify a file to store the process ID for process management</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;">Specify the path to the configuration file folder, the script will load the configuration file from here</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-g</td><td style="text-align:left;">Print detailed garbage collection (GC) information</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-H</td><td style="text-align:left;">Specify the path of the Java heap dump file, used when JVM memory overflows</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-E</td><td style="text-align:left;">Specify the path of the JVM error log file</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-D</td><td style="text-align:left;">Define system properties, in the format key=value</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-X</td><td style="text-align:left;">Pass -XX parameters directly to the JVM</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-h</td><td style="text-align:left;">Help instruction</td><td style="text-align:left;">No</td></tr></tbody></table><h4 id="removing-confignode-nodes" tabindex="-1"><a class="header-anchor" href="#removing-confignode-nodes"><span>Removing ConfigNode Nodes</span></a></h4><p>First connect to the cluster through the CLI and confirm the internal address and port number of the ConfigNode you want to remove by using <code>show confignodes</code>:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">IoTDB&gt; show confignodes</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">|NodeID| Status|InternalAddress|InternalPort|    Role|</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">|     0|Running|      127.0.0.1|       10710|  Leader|</span>
<span class="line">|     1|Running|      127.0.0.1|       10711|Follower|</span>
<span class="line">|     2|Running|      127.0.0.1|       10712|Follower|</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.030s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use the script to remove the DataNode. Script command:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Linux / MacOS </span>
<span class="line">sbin/remove-confignode.sh [confignode_id]</span>
<span class="line">or</span>
<span class="line">./sbin/remove-confignode.sh [cn_internal_address:cn_internal_port]</span>
<span class="line"></span>
<span class="line">#Windows</span>
<span class="line">sbin/remove-confignode.bat [confignode_id]</span>
<span class="line">or</span>
<span class="line">./sbin/remove-confignode.bat [cn_internal_address:cn_internal_port]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datanode-node-maintenance" tabindex="-1"><a class="header-anchor" href="#datanode-node-maintenance"><span>DataNode Node Maintenance</span></a></h3><p>There are two common scenarios for DataNode node maintenance:</p><ul><li>Cluster expansion: For the purpose of expanding cluster capabilities, add new DataNodes to the cluster</li><li>Cluster failure recovery: When a machine where a DataNode is located fails, making the DataNode unable to run normally, you can remove this DataNode and add a new DataNode to the cluster</li></ul><blockquote><p>❗️Note, in order for the cluster to work normally, during the process of DataNode node maintenance and after the maintenance is completed, the total number of DataNodes running normally should not be less than the number of data replicas (usually 2), nor less than the number of metadata replicas (usually 3).</p></blockquote><h4 id="adding-datanode-nodes" tabindex="-1"><a class="header-anchor" href="#adding-datanode-nodes"><span>Adding DataNode Nodes</span></a></h4><p>Script command:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Linux / MacOS </span>
<span class="line"># First switch to the IoTDB root directory</span>
<span class="line">sbin/start-datanode.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line"># First switch to the IoTDB root directory</span>
<span class="line">sbin/start-datanode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Parameter introduction:</p><table><thead><tr><th style="text-align:left;">Abbreviation</th><th style="text-align:left;">Description</th><th style="text-align:left;">Is it required</th></tr></thead><tbody><tr><td style="text-align:left;">-v</td><td style="text-align:left;">Show version information</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-f</td><td style="text-align:left;">Run the script in the foreground, do not put it in the background</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-d</td><td style="text-align:left;">Start in daemon mode, i.e. run in the background</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">Specify a file to store the process ID for process management</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;">Specify the path to the configuration file folder, the script will load the configuration file from here</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-g</td><td style="text-align:left;">Print detailed garbage collection (GC) information</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-H</td><td style="text-align:left;">Specify the path of the Java heap dump file, used when JVM memory overflows</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-E</td><td style="text-align:left;">Specify the path of the JVM error log file</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-D</td><td style="text-align:left;">Define system properties, in the format key=value</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-X</td><td style="text-align:left;">Pass -XX parameters directly to the JVM</td><td style="text-align:left;">No</td></tr><tr><td style="text-align:left;">-h</td><td style="text-align:left;">Help instruction</td><td style="text-align:left;">No</td></tr></tbody></table><p>Note: After adding a DataNode, as new writes arrive (and old data expires, if TTL is set), the cluster load will gradually balance towards the new DataNode, eventually achieving a balance of storage and computation resources on all nodes.</p><h4 id="removing-datanode-nodes" tabindex="-1"><a class="header-anchor" href="#removing-datanode-nodes"><span>Removing DataNode Nodes</span></a></h4><p>First connect to the cluster through the CLI and confirm the RPC address and port number of the DataNode you want to remove with <code>show datanodes</code>:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">IoTDB&gt; show datanodes</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">|NodeID| Status|RpcAddress|RpcPort|DataRegionNum|SchemaRegionNum|</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">|     1|Running|   0.0.0.0|   6667|            0|              0|</span>
<span class="line">|     2|Running|   0.0.0.0|   6668|            1|              1|</span>
<span class="line">|     3|Running|   0.0.0.0|   6669|            1|              0|</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.110s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use the script to remove the DataNode. Script command:</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Linux / MacOS </span>
<span class="line">sbin/remove-datanode.sh [dn_rpc_address:dn_rpc_port]</span>
<span class="line"></span>
<span class="line">#Windows</span>
<span class="line">sbin/remove-datanode.bat [dn_rpc_address:dn_rpc_port]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="common-questions" tabindex="-1"><a class="header-anchor" href="#common-questions"><span>Common Questions</span></a></h2><ol><li><p>After starting the confignode command, does the node fail to start multiple times or receive prompts for running errors?</p><p>Step 1: Please check the startup log to see if any parameters that cannot be changed after the first startup have been modified.</p><p>Step 2: Please check the startup log for any other abnormalities. If there are any abnormal phenomena in the log, please contact Timecho Technical Support personnel for consultation on solutions.</p><p>Step 3: If it is the first deployment or data can be deleted, you can also clean up the environment according to the following steps, redeploy, and restart.</p><p>Clean up the environment:</p><p>​ Execute the following on all nodes:</p><ol><li>Terminate all ConfigNode Node and DataNode processes.</li></ol><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">  # 1. Stop the ConfigNode and DataNode services</span>
<span class="line">  sbin/stop-standalone.sh</span>
<span class="line"></span>
<span class="line">  # 2. Check for any remaining processes</span>
<span class="line">  jps</span>
<span class="line">  # Or</span>
<span class="line">  ps -ef|gerp iotdb</span>
<span class="line"></span>
<span class="line">  # 3. If there are any remaining processes, manually kill the</span>
<span class="line">  kill -9 &lt;pid&gt;</span>
<span class="line">  # If you are sure there is only one iotdb on the machine, you can use the following command to clean up residual processes</span>
<span class="line">  ps -ef|grep iotdb|grep -v grep|tr -s &#39;  &#39; &#39; &#39; |cut -d &#39; &#39; -f2|xargs kill -9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Delete the data and logs directories.</li></ol><p>Explanation: Deleting the data directory is necessary, deleting the logs directory is for clean logs and is not mandatory.</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">  cd /data/iotdb</span>
<span class="line">  rm -rf data logs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,71))])}const g=o(p,[["render",h],["__file","Cluster-Deployment_apache.html.vue"]]),f=JSON.parse('{"path":"/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_apache.html","title":"Cluster Deployment","lang":"en-US","frontmatter":{"description":"Cluster Deployment This section will take the IoTDB classic cluster deployment architecture 3C3D (3 ConfigNodes and 3 DataNodes) as an example to introduce how to deploy a clust...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_apache.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_apache.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Cluster Deployment"}],["meta",{"property":"og:description","content":"Cluster Deployment This section will take the IoTDB classic cluster deployment architecture 3C3D (3 ConfigNodes and 3 DataNodes) as an example to introduce how to deploy a clust..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E6%88%90%E5%8A%9F.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T12:01:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-06T12:01:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cluster Deployment\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E6%88%90%E5%8A%9F.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E7%89%88%20show%20cluter.png\\"],\\"dateModified\\":\\"2024-11-06T12:01:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Note","slug":"note","link":"#note","children":[]},{"level":2,"title":"Preparation Steps","slug":"preparation-steps","link":"#preparation-steps","children":[]},{"level":2,"title":"Installation Steps","slug":"installation-steps","link":"#installation-steps","children":[{"level":3,"title":"Set Host Name","slug":"set-host-name","link":"#set-host-name","children":[]},{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"Start ConfigNode","slug":"start-confignode","link":"#start-confignode","children":[]},{"level":3,"title":"Start DataNode","slug":"start-datanode","link":"#start-datanode","children":[]},{"level":3,"title":"Verify Deployment","slug":"verify-deployment","link":"#verify-deployment","children":[]}]},{"level":2,"title":"Node Maintenance Steps","slug":"node-maintenance-steps","link":"#node-maintenance-steps","children":[{"level":3,"title":"ConfigNode Node Maintenance","slug":"confignode-node-maintenance","link":"#confignode-node-maintenance","children":[]},{"level":3,"title":"DataNode Node Maintenance","slug":"datanode-node-maintenance","link":"#datanode-node-maintenance","children":[]}]},{"level":2,"title":"Common Questions","slug":"common-questions","link":"#common-questions","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1730894510000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":6},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":2},{"name":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":8.08,"words":2425},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_apache.md","localizedDate":"July 10, 2023","autoDesc":true}');export{g as comp,f as data};
