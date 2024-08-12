import{_ as p,r as t,o as i,c,b as s,d as n,a,w as o,e as r}from"./app-XaimuxhO.js";const d={},u=s("h1",{id:"cluster-quick-start",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cluster-quick-start"},[s("span",null,"Cluster Quick Start")])],-1),h=s("p",null,"The purpose of this article is to show how to start, expand, and shrink an IoTDB cluster in an easy way.",-1),k=s("br",null,null,-1),m=s("h2",{id:"_1-installation-and-deployment",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-installation-and-deployment"},[s("span",null,"1. Installation and deployment")])],-1),b=s("p",null,"As an example, we'd like to start an IoTDB cluster with 3 ConfigNodes and 3 DataNodes(3C3D) with minimum modifications. Thus,",-1),v=s("ul",null,[s("li",null,"the cluster name is defaultCluster"),s("li",null,"data/schema replica is 1"),s("li",null,"the max heap size of ConfigNode take the 1/4 of the computer"),s("li",null,"the max heap size of DataNode take the 1/4 of the computer")],-1),g=s("code",null,"/data/iotdb",-1),x=s("br",null,null,-1),f=r('<table><thead><tr><th>Node IP</th><th style="text-align:left;">192.168.132.10</th><th style="text-align:left;">192.168.132.11</th><th style="text-align:left;">192.168.132.12</th></tr></thead><tbody><tr><td>service</td><td style="text-align:left;">ConfigNode</td><td style="text-align:left;">ConfigNode</td><td style="text-align:left;">ConfigNode</td></tr><tr><td>service</td><td style="text-align:left;">DataNode</td><td style="text-align:left;">DataNode</td><td style="text-align:left;">DataNode</td></tr></tbody></table><p>Port:</p><table><thead><tr><th>Service</th><th>ConfigNode</th><th>DataNode</th></tr></thead><tbody><tr><td>port</td><td>10710, 10720</td><td>6667, 10730, 10740, 10750, 10760</td></tr></tbody></table><p><strong>illustration：</strong></p><ul><li>We could use IP address or hostname/domain to set up an IoTDB cluster, then we would take IP address. If using hostname/domain, <code>/etc/hosts</code> must be set well.</li><li>JVM memory configuration: <code>MAX_HEAP_SIZE</code> in <code>confignode-env.sh</code> and <code>datanode-env.sh</code>, equal to or greater than 1G is recommended. It&#39;s enough for ConfigNode taking 1~2G. The memory taking of DataNode is decided by the inputing and querying data.</li></ul><h3 id="_1-1-download" tabindex="-1"><a class="header-anchor" href="#_1-1-download"><span>1.1 download</span></a></h3>',6),_={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,"/data/iotdb",-1),N=s("br",null,null,-1),w=r(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/data/iotdb/
├── conf    <span class="token comment"># configuration files</span>
├── lib     <span class="token comment"># jar library</span>
├── sbin    <span class="token comment"># start/stop shell etc.</span>
└── tools   <span class="token comment"># other tools</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-configuration" tabindex="-1"><a class="header-anchor" href="#_1-2-configuration"><span>1.2. configuration</span></a></h3><p>Configuration files are in <code>/data/iotdb/conf</code>.<br> Modify the specified configuration file according to the table below:</p><table><thead><tr><th>Configuration</th><th style="text-align:left;">Configuration Option</th><th>IP:192.168.132.10</th><th>IP:192.168.132.11</th><th style="text-align:left;">IP:192.168.132.12</th></tr></thead><tbody><tr><td>iotdb-confignode.properties</td><td style="text-align:left;">cn_internal_address</td><td>192.168.132.10</td><td>192.168.132.11</td><td style="text-align:left;">192.168.132.12</td></tr><tr><td></td><td style="text-align:left;">cn_target_config_node_list</td><td>192.168.132.10:10710</td><td>192.168.132.10:10710</td><td style="text-align:left;">192.168.132.10:10710</td></tr><tr><td>iotdb-datanode.properties</td><td style="text-align:left;">dn_rpc_address</td><td>192.168.132.10</td><td>192.168.132.11</td><td style="text-align:left;">192.168.132.12</td></tr><tr><td></td><td style="text-align:left;">dn_internal_address</td><td>192.168.132.10</td><td>192.168.132.11</td><td style="text-align:left;">192.168.132.12</td></tr><tr><td></td><td style="text-align:left;">dn_target_config_node_list</td><td>192.168.132.10:10710</td><td>192.168.132.10:10710</td><td style="text-align:left;">192.168.132.10:10710</td></tr></tbody></table><p><strong>Notice:</strong><br> It&#39;s recommended that the configurations of iotdb-common.properties and the heap size of JVM in all nodes are the same.</p><h3 id="_1-3-start-iotdb-cluster" tabindex="-1"><a class="header-anchor" href="#_1-3-start-iotdb-cluster"><span>1.3. start IoTDB cluster</span></a></h3><p>Before starting the IoTDB cluster, make sure the configurations are correct and there is no any data in the working directory.</p><h4 id="_1-3-1-start-the-first-node" tabindex="-1"><a class="header-anchor" href="#_1-3-1-start-the-first-node"><span>1.3.1. start the first node</span></a></h4><p>That is <code>cn_target_config_node_list</code> in above configuration table.<br> Execute these commands below in node of <code>192.168.132.10</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token comment"># start ConfigNode and DataNode services</span>
sbin/start-standalone.sh
    
<span class="token comment"># check DataNode logs to see whether starting successfully or not</span>
<span class="token function">tail</span> <span class="token parameter variable">-f</span> logs/log_datanode_all.log
<span class="token comment"># expecting statements like below</span>
<span class="token comment"># 2023-07-21 20:26:01,881 [main] INFO  o.a.i.db.service.DataNode:192 - Congratulation, IoTDB DataNode is set up successfully. Now, enjoy yourself!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If there is no such logs mentioned abolve or there are some <code>Exception</code>s in log files, it&#39;s failed. Then please check <code>log_confignode_all.log</code> and <code>log_datanode_all.log</code> in directory of <code>/data/iotdb/logs</code>.</p><p><strong>Notice</strong>：</p><ul><li>Make sure the first node, especially the first ConfigNode that <code>cn_target_config_node_list</code> specified, starting successfully, and then start the other services.</li><li>If starting failed，it&#39;s necessary to do <a href="#%E3%80%90reference%E3%80%91cleanup">cleanup</a> before starting again.</li><li>How to start service ConfigNode or DataNode alone:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># start ConfigNode alone in daemon</span>
sbin/start-confignode.sh <span class="token parameter variable">-d</span>
<span class="token comment"># start DataNode alone in daemon</span>
sbin/start-datanode.sh <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-3-2-start-service-confignode-and-datanode-in-other-nodes" tabindex="-1"><a class="header-anchor" href="#_1-3-2-start-service-confignode-and-datanode-in-other-nodes"><span>1.3.2. start service ConfigNode and DataNode in other nodes</span></a></h4><p>Execute commands below in both 192.168.132.11 and 192.168.132.12:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token comment"># start service ConfigNode and DataNode</span>
sbin/start-standalone.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If starting failed, it&#39;s necessary to do <a href="#%E3%80%90reference%E3%80%91cleanup">cleanup</a> in all nodes, and then doging all again from starting the first node.</p><h4 id="_1-3-3-check-the-cluster-status" tabindex="-1"><a class="header-anchor" href="#_1-3-3-check-the-cluster-status"><span>1.3.3. check the cluster status</span></a></h4><p>If everything goes well, the cluster will start successfully. Then, we can start the Cli for verification.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/data/iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.132.10
IoTDB<span class="token operator">&gt;</span>show cluster<span class="token punctuation">;</span>
<span class="token comment"># example result:</span>
+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>NodeID<span class="token operator">|</span>  NodeType<span class="token operator">|</span> Status<span class="token operator">|</span>InternalAddress<span class="token operator">|</span>InternalPort<span class="token operator">|</span>Version<span class="token operator">|</span>BuildInfo<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>     <span class="token number">0</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">1</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">2</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">3</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">4</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">5</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>illustration:</strong><br> The IP address of <code>start-cli.sh -h</code> could be any IP address of DataNode service.</p><h3 id="【reference】cleanup" tabindex="-1"><a class="header-anchor" href="#【reference】cleanup"><span>【reference】Cleanup</span></a></h3><p>Execute commands in every node:</p><ol><li>End processes of ConfigNode and DataNode</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1. Stop services ConfigNode and DataNode</span>
sbin/stop-standalone.sh

<span class="token comment"># 2. Check whether there are IoTDB processes left or not</span>
jps
<span class="token comment"># 或者</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span>gerp iotdb

<span class="token comment"># 3. If there is any IoTDB process left, kill it</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>
<span class="token comment"># If there is only 1 IoTDB instance, execue command below to remove all IoTDB process</span>
<span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> iotdb<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">tr</span> <span class="token parameter variable">-s</span> <span class="token string">&#39;  &#39;</span> <span class="token string">&#39; &#39;</span> <span class="token operator">|</span><span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&#39; &#39;</span> -f2<span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">kill</span> <span class="token parameter variable">-9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Remove directories of data and logs</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> data logs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>illustration:</strong><br> It&#39;s necessary to remove directory of <code>data</code> but it&#39;s not necessary to remove directory of <code>logs</code>, only for convenience.</p><h2 id="_2-expand" tabindex="-1"><a class="header-anchor" href="#_2-expand"><span>2. Expand</span></a></h2><p><code>Expand</code> means add services of ConfigNode or DataNode into an existing IoTDB cluster.</p><p>It&#39;s the same as starting the other nodes mentioned above. That is downloading IoTDB install package, extracting, configurating and then starting. The new node here is <code>192.168.132.13</code>.<br><strong>Notice</strong></p><ul><li>It&#39;s must be cleaned up, in other words doing <a href="#cleanup">cleanup</a> in it.</li><li><code>cluster_name</code> of <code>iotdb-common.properties</code> must be the same to the cluster.</li><li><code>cn_target_config_node_list</code> and <code>dn_target_config_node_list</code> must be the same to the cluster.</li><li>The old data wouldn&#39;t be moved to the new node but the new data would be.</li></ul><h3 id="_2-1-configuration" tabindex="-1"><a class="header-anchor" href="#_2-1-configuration"><span>2.1. configuration</span></a></h3><p>Modify the specified configuration file according to the table below:</p><table><thead><tr><th>Configuration</th><th style="text-align:left;">Configuration Option</th><th style="text-align:left;">IP:192.168.132.13</th></tr></thead><tbody><tr><td>iotdb-confignode.properties</td><td style="text-align:left;">cn_internal_address</td><td style="text-align:left;">192.168.132.13</td></tr><tr><td></td><td style="text-align:left;">cn_target_config_node_list</td><td style="text-align:left;">192.168.132.10:10710</td></tr><tr><td>iotdb-datanode.properties</td><td style="text-align:left;">dn_rpc_address</td><td style="text-align:left;">192.168.132.13</td></tr><tr><td></td><td style="text-align:left;">dn_internal_address</td><td style="text-align:left;">192.168.132.13</td></tr><tr><td></td><td style="text-align:left;">dn_target_config_node_list</td><td style="text-align:left;">192.168.132.10:10710</td></tr></tbody></table><h3 id="_2-2-expand" tabindex="-1"><a class="header-anchor" href="#_2-2-expand"><span>2.2. expand</span></a></h3><p>Execute commands below in new node of <code>192.168.132.13</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token comment"># start service ConfigNode and DataNode</span>
sbin/start-standalone.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-check-the-result" tabindex="-1"><a class="header-anchor" href="#_2-3-check-the-result"><span>2.3. check the result</span></a></h3><p>Execute <code>show cluster</code> through Cli and the result like below:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/data/iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.132.10
IoTDB<span class="token operator">&gt;</span>show cluster<span class="token punctuation">;</span>
<span class="token comment"># example result：</span>
+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>NodeID<span class="token operator">|</span>  NodeType<span class="token operator">|</span> Status<span class="token operator">|</span>InternalAddress<span class="token operator">|</span>InternalPort<span class="token operator">|</span>Version<span class="token operator">|</span>BuildInfo<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>     <span class="token number">0</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">1</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">2</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">3</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">4</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">5</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">6</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.13<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">7</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.13<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-remove-service" tabindex="-1"><a class="header-anchor" href="#_3-remove-service"><span>3. Remove service</span></a></h2><p><code>Shrink</code> means removing a service from the IoTDB cluster.<br><strong>Notice:</strong></p><ul><li><code>Shrink</code> could be done in any node within the cluster</li><li>Any service could be shrinked within cluster. But the DataNode service of the cluster must greater than the data replica of iotdb-common.properties.</li><li>Be patient to wait for the end of shrinking, and then read the guide in logs carefully.</li></ul><h3 id="_3-1-shrink-service-confignode" tabindex="-1"><a class="header-anchor" href="#_3-1-shrink-service-confignode"><span>3.1 shrink service ConfigNode</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token comment"># way 1: shrink with ip:port</span>
sbin/remove-confignode.sh <span class="token number">192.168</span>.132.13:10710

<span class="token comment"># way 2: shrink with NodeID of \`show cluster\`</span>
sbin/remove-confignode.sh <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-shrink-service-datanode" tabindex="-1"><a class="header-anchor" href="#_3-2-shrink-service-datanode"><span>3.2 shrink service DataNode</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /data/iotdb
<span class="token comment"># way 1: shrink with ip:port</span>
sbin/remove-datanode.sh <span class="token number">192.168</span>.132.13:6667

<span class="token comment"># way 2: shrink with NodeID of \`show cluster\`</span>
sbin/remove-confignode.sh <span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-check-the-result" tabindex="-1"><a class="header-anchor" href="#_3-3-check-the-result"><span>3.3 check the result</span></a></h3><p>Execute <code>show cluster</code> through Cli, the result is like below:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>NodeID<span class="token operator">|</span>  NodeType<span class="token operator">|</span> Status<span class="token operator">|</span>InternalAddress<span class="token operator">|</span>InternalPort<span class="token operator">|</span>Version<span class="token operator">|</span>BuildInfo<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
<span class="token operator">|</span>     <span class="token number">0</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">1</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.10<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">2</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">3</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.11<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">4</span><span class="token operator">|</span>ConfigNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10710</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
<span class="token operator">|</span>     <span class="token number">5</span><span class="token operator">|</span>  DataNode<span class="token operator">|</span>Running<span class="token operator">|</span> <span class="token number">192.168</span>.132.12<span class="token operator">|</span>       <span class="token number">10730</span><span class="token operator">|</span><span class="token number">1</span>.x.x  <span class="token operator">|</span>  xxxxxxx<span class="token operator">|</span>
+------+----------+-------+---------------+------------+-------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,52);function I(D,C){const e=t("RouteLink"),l=t("ExternalLinkIcon");return i(),c("div",null,[u,h,s("p",null,[n("See also:"),k,a(e,{to:"/UserGuide/V1.0.x/FAQ/Frequently-asked-questions.html"},{default:o(()=>[n("FAQ")]),_:1})]),m,b,v,s("p",null,[n("Suppose there are 3 computers(3 nodes we called here) with Linux OS and JDK installed(detail see "),a(e,{to:"/UserGuide/V1.0.x/QuickStart/QuickStart.html"},{default:o(()=>[n("Prerequisites")]),_:1}),n(") and IoTDB working directory is "),g,n("."),x,n(" IP address and configurations is like below:")]),f,s("p",null,[n("In every computer, "),s("a",_,[n("Download"),a(l)]),n(" the IoTDB install package and extract it to working directory of "),y,n("."),N,n(" Then get the directory tree:")]),w])}const S=p(d,[["render",I],["__file","ClusterQuickStart.html.vue"]]),B=JSON.parse('{"path":"/UserGuide/V1.0.x/QuickStart/ClusterQuickStart.html","title":"Cluster Quick Start","lang":"en-US","frontmatter":{"description":"Cluster Quick Start The purpose of this article is to show how to start, expand, and shrink an IoTDB cluster in an easy way. See also: 1. Installation and deployment As an examp...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/QuickStart/ClusterQuickStart.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/QuickStart/ClusterQuickStart.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Cluster Quick Start"}],["meta",{"property":"og:description","content":"Cluster Quick Start The purpose of this article is to show how to start, expand, and shrink an IoTDB cluster in an easy way. See also: 1. Installation and deployment As an examp..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-15T04:43:47.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-15T04:43:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cluster Quick Start\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-15T04:43:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. Installation and deployment","slug":"_1-installation-and-deployment","link":"#_1-installation-and-deployment","children":[{"level":3,"title":"1.1 download","slug":"_1-1-download","link":"#_1-1-download","children":[]},{"level":3,"title":"1.2. configuration","slug":"_1-2-configuration","link":"#_1-2-configuration","children":[]},{"level":3,"title":"1.3. start IoTDB cluster","slug":"_1-3-start-iotdb-cluster","link":"#_1-3-start-iotdb-cluster","children":[]},{"level":3,"title":"【reference】Cleanup","slug":"【reference】cleanup","link":"#【reference】cleanup","children":[]}]},{"level":2,"title":"2. Expand","slug":"_2-expand","link":"#_2-expand","children":[{"level":3,"title":"2.1. configuration","slug":"_2-1-configuration","link":"#_2-1-configuration","children":[]},{"level":3,"title":"2.2. expand","slug":"_2-2-expand","link":"#_2-2-expand","children":[]},{"level":3,"title":"2.3. check the result","slug":"_2-3-check-the-result","link":"#_2-3-check-the-result","children":[]}]},{"level":2,"title":"3. Remove service","slug":"_3-remove-service","link":"#_3-remove-service","children":[{"level":3,"title":"3.1 shrink service ConfigNode","slug":"_3-1-shrink-service-confignode","link":"#_3-1-shrink-service-confignode","children":[]},{"level":3,"title":"3.2 shrink service DataNode","slug":"_3-2-shrink-service-datanode","link":"#_3-2-shrink-service-datanode","children":[]},{"level":3,"title":"3.3 check the result","slug":"_3-3-check-the-result","link":"#_3-3-check-the-result","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1692074627000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"changxue2022","email":"115675618+changxue2022@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.5,"words":1349},"filePathRelative":"UserGuide/V1.0.x/QuickStart/ClusterQuickStart.md","localizedDate":"July 10, 2023","autoDesc":true}');export{S as comp,B as data};
