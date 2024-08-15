import{_ as i,r as o,o as r,c as l,b as t,d as e,a as s,e as n}from"./app-CHHFxD1F.js";const d={},c=n(`<h1 id="stand-alone-deployment" tabindex="-1"><a class="header-anchor" href="#stand-alone-deployment"><span>Stand-Alone Deployment</span></a></h1><h2 id="matters-needing-attention" tabindex="-1"><a class="header-anchor" href="#matters-needing-attention"><span>Matters Needing Attention</span></a></h2><ol><li><p>It is recommended to prioritize using &#39;hostname&#39; for IP configuration during deployment, which can avoid the problem of modifying the host IP in the later stage and causing the database to fail to start. To set the host name, you need to configure/etc/hosts on the target server. For example, if the local IP is 192.168.1.3 and the host name is iotdb-1, you can use the following command to set the server&#39;s host name and configure IoTDB&#39;s&#39; cn_internal-address&#39; using the host name dn_internal_address、dn_rpc_address。</p><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>echo &quot;192.168.1.3  iotdb-1&quot; &gt;&gt; /etc/hosts 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Some parameters cannot be modified after the first startup. Please refer to the &quot;Parameter Configuration&quot; section below for settings</p></li></ol><h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><h3 id="unzip-the-installation-package-and-enter-the-installation-directory" tabindex="-1"><a class="header-anchor" href="#unzip-the-installation-package-and-enter-the-installation-directory"><span>Unzip the installation package and enter the installation directory</span></a></h3><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>unzip  apache-iotdb-{version}-all-bin.zip
cd  apache-iotdb-{version}-all-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parameter-configuration" tabindex="-1"><a class="header-anchor" href="#parameter-configuration"><span>Parameter Configuration</span></a></h3><h4 id="environment-script-configuration" tabindex="-1"><a class="header-anchor" href="#environment-script-configuration"><span>Environment Script Configuration</span></a></h4>`,8),h={href:"http://env.sh",target:"_blank",rel:"noopener noreferrer"},g=n(`<table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">MEMORY_SIZE</td><td style="text-align:center;">The total amount of memory that IoTDB ConfigNode nodes can use</td><td style="text-align:center;">empty</td><td style="text-align:center;">Can be filled in as needed, and the system will allocate memory based on the filled in values</td><td style="text-align:center;">Restarting the service takes effect</td></tr></tbody></table><ul><li>./conf/datanode-env.sh（./conf/datanode-env.bat）configuration</li></ul><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">MEMORY_SIZE</td><td style="text-align:center;">The total amount of memory that IoTDB DataNode nodes can use</td><td style="text-align:center;">empty</td><td style="text-align:center;">Can be filled in as needed, and the system will allocate memory based on the filled in values</td><td style="text-align:center;">Restarting the service takes effect</td></tr></tbody></table><h4 id="system-general-configuration" tabindex="-1"><a class="header-anchor" href="#system-general-configuration"><span>System General Configuration</span></a></h4><p>Open the general configuration file (./conf/iotdb common. properties file) and set the following parameters:</p><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">cluster_name</td><td style="text-align:center;">Cluster Name</td><td style="text-align:center;">defaultCluster</td><td style="text-align:center;">The cluster name can be set as needed, and if there are no special needs, the default can be kept</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">schema_replication_factor</td><td style="text-align:center;">Number of metadata replicas, set to 1 for the standalone version here</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">Default 1, cannot be modified after the first startup</td></tr><tr><td style="text-align:center;">data_replication_factor</td><td style="text-align:center;">Number of data replicas, set to 1 for the standalone version here</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">Default 1, cannot be modified after the first startup</td></tr></tbody></table><h4 id="confignode-configuration" tabindex="-1"><a class="header-anchor" href="#confignode-configuration"><span>ConfigNode Configuration</span></a></h4><p>Open the ConfigNode configuration file (./conf/iotdb configure. properties file) and set the following parameters:</p><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">cn_internal_address</td><td style="text-align:center;">The address used by ConfigNode for communication within the cluster</td><td style="text-align:center;">127.0.0.1</td><td style="text-align:center;">The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">cn_internal_port</td><td style="text-align:center;">The port used by ConfigNode for communication within the cluster</td><td style="text-align:center;">10710</td><td style="text-align:center;">10710</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">cn_consensus_port</td><td style="text-align:center;">The port used for ConfigNode replica group consensus protocol communication</td><td style="text-align:center;">10720</td><td style="text-align:center;">10720</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">cn_seed_config_node</td><td style="text-align:center;">The address of the ConfigNode that the node connects to when registering to join the cluster, cn_internal_address:cn_internal_port</td><td style="text-align:center;">127.0.0.1:10710</td><td style="text-align:center;">cn_internal_address:cn_internal_port</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr></tbody></table><h4 id="datanode-configuration" tabindex="-1"><a class="header-anchor" href="#datanode-configuration"><span>DataNode Configuration</span></a></h4><p>Open the DataNode configuration file/ conf/iotdb-system.properties,Set the following parameters:</p><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:left;"><strong>Note</strong></th></tr></thead><tbody><tr><td style="text-align:center;">dn_rpc_address</td><td style="text-align:center;">The address of the client RPC service</td><td style="text-align:center;">0.0.0.0</td><td style="text-align:center;">The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td style="text-align:left;">Restarting the service takes effect</td></tr><tr><td style="text-align:center;">dn_rpc_port</td><td style="text-align:center;">The port of the client RPC service</td><td style="text-align:center;">6667</td><td style="text-align:center;">6667</td><td style="text-align:left;">Restarting the service takes effect</td></tr><tr><td style="text-align:center;">dn_internal_address</td><td style="text-align:center;">The address used by DataNode for communication within the cluster</td><td style="text-align:center;">127.0.0.1</td><td style="text-align:center;">The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">dn_internal_port</td><td style="text-align:center;">The port used by DataNode for communication within the cluster</td><td style="text-align:center;">10730</td><td style="text-align:center;">10730</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">dn_mpp_data_exchange_port</td><td style="text-align:center;">The port used by DataNode to receive data streams</td><td style="text-align:center;">10740</td><td style="text-align:center;">10740</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">dn_data_region_consensus_port</td><td style="text-align:center;">The port used by DataNode for data replica consensus protocol communication</td><td style="text-align:center;">10750</td><td style="text-align:center;">10750</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">dn_schema_region_consensus_port</td><td style="text-align:center;">The port used by DataNode for metadata replica consensus protocol communication</td><td style="text-align:center;">10760</td><td style="text-align:center;">10760</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">dn_seed_config_node</td><td style="text-align:center;">The ConfigNode address that the node connects to when registering to join the cluster, i.e. cn_internal-address: cn_internal_port</td><td style="text-align:center;">127.0.0.1:10710</td><td style="text-align:center;">cn_internal_address:cn_internal_port</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr></tbody></table><h3 id="start-confignode" tabindex="-1"><a class="header-anchor" href="#start-confignode"><span>Start ConfigNode</span></a></h3><p>Enter the sbin directory of iotdb and start confignode</p><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>./start-confignode.sh    -d      #The &quot;- d&quot; parameter will start in the background 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="start-datanode" tabindex="-1"><a class="header-anchor" href="#start-datanode"><span>Start DataNode</span></a></h3><p>Enter the sbin directory of iotdb and start datanode:</p><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>cd sbin
./start-datanode.sh   -d   #The &quot;- d&quot; parameter will start in the background 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="verify-deployment" tabindex="-1"><a class="header-anchor" href="#verify-deployment"><span>Verify Deployment</span></a></h3><p>Can be executed directly/ Cli startup script in sbin directory:</p><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>./start-cli.sh  -h  ip(local IP or domain name)  -p  port(6667)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After successful startup, the following interface will appear displaying successful installation of IOTDB.</p><figure><img src="https://alioss.timecho.com/docs/img/开源版启动成功.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>After the successful installation interface appears, use the <code>show cluster</code> command to check the service running status</p><p>When the status is all running, it indicates that the service has started successfully</p><figure><img src="https://alioss.timecho.com/docs/img/开源-单机show.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>The appearance of &#39;Activated (W)&#39; indicates passive activation, indicating that this Config Node does not have a license file (or has not issued the latest license file with a timestamp). At this point, it is recommended to check if the license file has been placed in the license folder. If not, please place the license file. If a license file already exists, it may be due to inconsistency between the license file of this node and the information of other nodes. Please contact Tianmu staff to reapply.</p></blockquote>`,27);function p(m,f){const a=o("ExternalLinkIcon");return r(),l("div",null,[c,t("ul",null,[t("li",null,[e("./conf/confignode "),t("a",h,[e("env.sh"),s(a)]),e(" (./conf/confignode env.bat) configuration")])]),g])}const y=i(d,[["render",p],["__file","Stand-Alone-Deployment.html.vue"]]),x=JSON.parse(`{"path":"/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment.html","title":"Stand-Alone Deployment","lang":"en-US","frontmatter":{"description":"Stand-Alone Deployment Matters Needing Attention It is recommended to prioritize using 'hostname' for IP configuration during deployment, which can avoid the problem of modifyin...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Stand-Alone Deployment"}],["meta",{"property":"og:description","content":"Stand-Alone Deployment Matters Needing Attention It is recommended to prioritize using 'hostname' for IP configuration during deployment, which can avoid the problem of modifyin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E7%89%88%E5%90%AF%E5%8A%A8%E6%88%90%E5%8A%9F.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-15T06:41:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-15T06:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Stand-Alone Deployment\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E7%89%88%E5%90%AF%E5%8A%A8%E6%88%90%E5%8A%9F.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90-%E5%8D%95%E6%9C%BAshow.jpeg\\"],\\"dateModified\\":\\"2024-08-15T06:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Matters Needing Attention","slug":"matters-needing-attention","link":"#matters-needing-attention","children":[]},{"level":2,"title":"Installation Steps","slug":"installation-steps","link":"#installation-steps","children":[{"level":3,"title":"Unzip the installation package and enter the installation directory","slug":"unzip-the-installation-package-and-enter-the-installation-directory","link":"#unzip-the-installation-package-and-enter-the-installation-directory","children":[]},{"level":3,"title":"Parameter Configuration","slug":"parameter-configuration","link":"#parameter-configuration","children":[]},{"level":3,"title":"Start ConfigNode","slug":"start-confignode","link":"#start-confignode","children":[]},{"level":3,"title":"Start DataNode","slug":"start-datanode","link":"#start-datanode","children":[]},{"level":3,"title":"Verify Deployment","slug":"verify-deployment","link":"#verify-deployment","children":[]}]}],"git":{"createdTime":1718979523000,"updatedTime":1723704118000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":4},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.47,"words":1042},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment.md","localizedDate":"June 21, 2024","autoDesc":true}`);export{y as comp,x as data};
