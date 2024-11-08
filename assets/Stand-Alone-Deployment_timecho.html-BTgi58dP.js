import{_ as l,c as r,d as e,e as n,a as i,w as s,b as o,r as d,o as c}from"./app-Cy-L1ril.js";const h={},p={start:"6"};function m(g,t){const a=d("RouteLink");return c(),r("div",null,[t[7]||(t[7]=e("h1",{id:"stand-alone-deployment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stand-alone-deployment"},[e("span",null,"Stand-Alone Deployment")])],-1)),t[8]||(t[8]=e("p",null,"This chapter will introduce how to start an IoTDB standalone instance, which includes 1 ConfigNode and 1 DataNode (commonly known as 1C1D).",-1)),t[9]||(t[9]=e("h2",{id:"matters-needing-attention",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#matters-needing-attention"},[e("span",null,"Matters Needing Attention")])],-1)),e("ol",null,[e("li",null,[e("p",null,[t[1]||(t[1]=n("Before installation, ensure that the system is complete by referring to ")),i(a,{to:"/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html"},{default:s(()=>t[0]||(t[0]=[n("System configuration")])),_:1}),t[2]||(t[2]=n("."))])]),t[3]||(t[3]=o(`<li><p>It is recommended to prioritize using &#39;hostname&#39; for IP configuration during deployment, which can avoid the problem of modifying the host IP in the later stage and causing the database to fail to start. To set the host name, you need to configure/etc/hosts on the target server. For example, if the local IP is 192.168.1.3 and the host name is iotdb-1, you can use the following command to set the server&#39;s host name and configure IoTDB&#39;s&#39; cn_internal-address&#39; using the host name dn_internal_address、dn_rpc_address。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.1.3  iotdb-1&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Some parameters cannot be modified after the first startup. Please refer to the &quot;Parameter Configuration&quot; section below for settings</p></li><li><p>Whether in linux or windows, ensure that the IoTDB installation path does not contain Spaces and Chinese characters to avoid software exceptions.</p></li><li><p>Please note that when installing and deploying IoTDB (including activating and using software), it is necessary to use the same user for operations. You can:</p></li>`,4))]),t[10]||(t[10]=e("ul",null,[e("li",null,"Using root user (recommended): Using root user can avoid issues such as permissions."),e("li",null,[n("Using a fixed non root user: "),e("ul",null,[e("li",null,"Using the same user operation: Ensure that the same user is used for start, activation, stop, and other operations, and do not switch users."),e("li",null,"Avoid using sudo: Try to avoid using sudo commands as they execute commands with root privileges, which may cause confusion or security issues.")])])],-1)),e("ol",p,[e("li",null,[t[5]||(t[5]=n("It is recommended to deploy a monitoring panel, which can monitor important operational indicators and keep track of database operation status at any time. The monitoring panel can be obtained by contacting the business department, and the steps for deploying the monitoring panel can be referred to：")),i(a,{to:"/UserGuide/latest/Deployment-and-Maintenance/Monitoring-panel-deployment.html"},{default:s(()=>t[4]||(t[4]=[n("Monitoring Board Install and Deploy")])),_:1}),t[6]||(t[6]=n("."))])]),t[11]||(t[11]=o(`<h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><h3 id="unzip-the-installation-package-and-enter-the-installation-directory" tabindex="-1"><a class="header-anchor" href="#unzip-the-installation-package-and-enter-the-installation-directory"><span>Unzip the installation package and enter the installation directory</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">unzip</span>  iotdb-enterprise-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-bin.zip</span>
<span class="line"><span class="token builtin class-name">cd</span>  iotdb-enterprise-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parameter-configuration" tabindex="-1"><a class="header-anchor" href="#parameter-configuration"><span>Parameter Configuration</span></a></h3><h4 id="environment-script-configuration" tabindex="-1"><a class="header-anchor" href="#environment-script-configuration"><span>Environment Script Configuration</span></a></h4><ul><li>./conf/confignode-env.sh (./conf/confignode-env.bat) configuration</li></ul><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">MEMORY_SIZE</td><td style="text-align:center;">The total amount of memory that IoTDB ConfigNode nodes can use</td><td style="text-align:center;">empty</td><td style="text-align:center;">Can be filled in as needed, and the system will allocate memory based on the filled in values</td><td style="text-align:center;">Restarting the service takes effect</td></tr></tbody></table><ul><li>./conf/datanode-env.sh (./conf/datanode-env.bat) configuration</li></ul><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;"><strong>Note</strong></th></tr></thead><tbody><tr><td style="text-align:center;">MEMORY_SIZE</td><td style="text-align:center;">The total amount of memory that IoTDB DataNode nodes can use</td><td style="text-align:center;">empty</td><td style="text-align:center;">Can be filled in as needed, and the system will allocate memory based on the filled in values</td><td style="text-align:center;">Restarting the service takes effect</td></tr></tbody></table><h4 id="system-general-configuration" tabindex="-1"><a class="header-anchor" href="#system-general-configuration"><span>System General Configuration</span></a></h4><p>Open the general configuration file (./conf/iotdb-common. properties file) and set the following parameters:</p><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">cluster_name</td><td style="text-align:center;">Cluster Name</td><td style="text-align:center;">defaultCluster</td><td style="text-align:center;">The cluster name can be set as needed, and if there are no special needs, the default can be kept</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">schema_replication_factor</td><td style="text-align:center;">Number of metadata replicas, set to 1 for the standalone version here</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">Default 1, cannot be modified after the first startup</td></tr><tr><td style="text-align:center;">data_replication_factor</td><td style="text-align:center;">Number of data replicas, set to 1 for the standalone version here</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">Default 1, cannot be modified after the first startup</td></tr></tbody></table><h4 id="confignode-configuration" tabindex="-1"><a class="header-anchor" href="#confignode-configuration"><span>ConfigNode Configuration</span></a></h4><p>Open the ConfigNode configuration file (./conf/iotdb-confignode. properties file) and set the following parameters:</p><table><thead><tr><th style="text-align:center;"><strong>Configuration</strong></th><th style="text-align:center;"><strong>Description</strong></th><th style="text-align:center;"><strong>Default</strong></th><th style="text-align:center;"><strong>Recommended value</strong></th><th style="text-align:center;">Note</th></tr></thead><tbody><tr><td style="text-align:center;">cn_internal_address</td><td style="text-align:center;">The address used by ConfigNode for communication within the cluster</td><td style="text-align:center;">127.0.0.1</td><td style="text-align:center;">The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">cn_internal_port</td><td style="text-align:center;">The port used by ConfigNode for communication within the cluster</td><td style="text-align:center;">10710</td><td style="text-align:center;">10710</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">cn_consensus_port</td><td style="text-align:center;">The port used for ConfigNode replica group consensus protocol communication</td><td style="text-align:center;">10720</td><td style="text-align:center;">10720</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:center;">cn_seed_config_node</td><td style="text-align:center;">The address of the ConfigNode that the node connects to when registering to join the cluster, cn_internal_address:cn_internal_port</td><td style="text-align:center;">127.0.0.1:10710</td><td style="text-align:center;">cn_internal_address:cn_internal_port</td><td style="text-align:center;">Cannot be modified after initial startup</td></tr></tbody></table><h4 id="datanode-configuration" tabindex="-1"><a class="header-anchor" href="#datanode-configuration"><span>DataNode Configuration</span></a></h4><p>Open the DataNode configuration file (./conf/iotdb-datanode.properties file) and set the following parameters:</p><table><thead><tr><th style="text-align:left;"><strong>Configuration</strong></th><th style="text-align:left;"><strong>Description</strong></th><th style="text-align:left;"><strong>Default</strong></th><th style="text-align:left;"><strong>Recommended value</strong></th><th style="text-align:left;"><strong>Note</strong></th></tr></thead><tbody><tr><td style="text-align:left;">dn_rpc_address</td><td style="text-align:left;">The address of the client RPC service</td><td style="text-align:left;">0.0.0.0</td><td style="text-align:left;">The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td style="text-align:left;">Restarting the service takes effect</td></tr><tr><td style="text-align:left;">dn_rpc_port</td><td style="text-align:left;">The port of the client RPC service</td><td style="text-align:left;">6667</td><td style="text-align:left;">6667</td><td style="text-align:left;">Restarting the service takes effect</td></tr><tr><td style="text-align:left;">dn_internal_address</td><td style="text-align:left;">The address used by DataNode for communication within the cluster</td><td style="text-align:left;">127.0.0.1</td><td style="text-align:left;">The IPV4 address or host name of the server where it is located, and it is recommended to use host name</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:left;">dn_internal_port</td><td style="text-align:left;">The port used by DataNode for communication within the cluster</td><td style="text-align:left;">10730</td><td style="text-align:left;">10730</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:left;">dn_mpp_data_exchange_port</td><td style="text-align:left;">The port used by DataNode to receive data streams</td><td style="text-align:left;">10740</td><td style="text-align:left;">10740</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:left;">dn_data_region_consensus_port</td><td style="text-align:left;">The port used by DataNode for data replica consensus protocol communication</td><td style="text-align:left;">10750</td><td style="text-align:left;">10750</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:left;">dn_schema_region_consensus_port</td><td style="text-align:left;">The port used by DataNode for metadata replica consensus protocol communication</td><td style="text-align:left;">10760</td><td style="text-align:left;">10760</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr><tr><td style="text-align:left;">dn_seed_config_node</td><td style="text-align:left;">The ConfigNode address that the node connects to when registering to join the cluster, i.e. cn_internal-address: cn_internal_port</td><td style="text-align:left;">127.0.0.1:10710</td><td style="text-align:left;">cn_internal_address:cn_internal_port</td><td style="text-align:left;">Cannot be modified after initial startup</td></tr></tbody></table><blockquote><p>❗️Attention: Editors such as VSCode Remote do not have automatic configuration saving function. Please ensure that the modified files are saved persistently, otherwise the configuration items will not take effect</p></blockquote><h3 id="start-confignode" tabindex="-1"><a class="header-anchor" href="#start-confignode"><span>Start ConfigNode</span></a></h3><p>Enter the sbin directory of iotdb and start confignode</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./start-confignode.sh    <span class="token parameter variable">-d</span>      <span class="token comment">#The &quot;- d&quot; parameter will start in the background </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="activate-database" tabindex="-1"><a class="header-anchor" href="#activate-database"><span>Activate Database</span></a></h3><h4 id="method-1-activate-file-copy-activation" tabindex="-1"><a class="header-anchor" href="#method-1-activate-file-copy-activation"><span>Method 1: Activate file copy activation</span></a></h4><ul><li>After starting the confignode node, enter the activation folder and copy the systeminfo file to the Timecho staff</li><li>Received the license file returned by the staff</li><li>Place the license file in the activation folder of the corresponding node;</li></ul><h4 id="method-2-activate-script-activation" tabindex="-1"><a class="header-anchor" href="#method-2-activate-script-activation"><span>Method 2: Activate Script Activation</span></a></h4><ul><li>Obtain the required machine code for activation, enter the sbin directory of the installation directory, and execute the activation script:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"> <span class="token builtin class-name">cd</span> sbin</span>
<span class="line">./start-activate.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>The following information is displayed. Please copy the machine code (i.e. the string of characters) to the Timecho staff:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Please copy the system_info&#39;s content and send it to Timecho:</span>
<span class="line"><span class="token assign-left variable">Y17hFA0xRCE1TmkVxILuCIEPc7uJcr5bzlXWiptw8uZTmTX5aThfypQdLUIhMljw075hNRSicyvyJR9JM7QaNm1gcFZPHVRWVXIiY5IlZkXdxCVc1erXMsbCqUYsR2R2Mw4PSpFJsUF5jHWSoFIIjQ2bmJFW5P52KCccFMVeHTc</span><span class="token operator">=</span></span>
<span class="line">Please enter license:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Enter the activation code returned by the staff into the previous command line prompt &#39;Please enter license:&#39;, as shown below:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Please enter license:</span>
<span class="line">Jw+MmF+AtexsfgNGOFgTm83Bxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxm6pF+APW1CiXLTSijK9Qh3nsLgzrW8OJPh26Vl6ljKUpCvpTiw<span class="token operator">==</span></span>
<span class="line">License has been stored to sbin/<span class="token punctuation">..</span>/activation/license</span>
<span class="line">Import completed. Please start cluster and excute <span class="token string">&#39;show cluster&#39;</span> to verify activation status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="start-datanode" tabindex="-1"><a class="header-anchor" href="#start-datanode"><span>Start DataNode</span></a></h3><p>Enter the sbin directory of iotdb and start datanode:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> sbin</span>
<span class="line">./start-datanode.sh   <span class="token parameter variable">-d</span>   <span class="token comment"># The &quot;- d&quot; parameter will start in the background</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="verify-deployment" tabindex="-1"><a class="header-anchor" href="#verify-deployment"><span>Verify Deployment</span></a></h3><p>Can be executed directly/ Cli startup script in sbin directory:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./start-cli.sh  <span class="token parameter variable">-h</span>  ip<span class="token punctuation">(</span>local IP or domain name<span class="token punctuation">)</span>  <span class="token parameter variable">-p</span>  port<span class="token punctuation">(</span><span class="token number">6667</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After successful startup, the following interface will appear displaying successful installation of IOTDB.</p><figure><img src="https://alioss.timecho.com/docs/img/启动成功.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>After the installation success interface appears, continue to check if the activation is successful and use the <code>show cluster</code>command</p><p>When you see the display &quot;Activated&quot; on the far right, it indicates successful activation</p><figure><img src="https://alioss.timecho.com/docs/img/show cluster.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>The appearance of &#39;Activated (W)&#39; indicates passive activation, indicating that this Config Node does not have a license file (or has not issued the latest license file with a timestamp). At this point, it is recommended to check if the license file has been placed in the license folder. If not, please place the license file. If a license file already exists, it may be due to inconsistency between the license file of this node and the information of other nodes. Please contact Timecho staff to reapply.</p></blockquote><h2 id="common-problem" tabindex="-1"><a class="header-anchor" href="#common-problem"><span>Common Problem</span></a></h2><ol><li>Multiple prompts indicating activation failure during deployment process <ul><li>Use the <code>ls -al</code> command: Use the <code>ls -al</code> command to check if the owner information of the installation package root directory is the current user.</li><li>Check activation directory: Check all files in the <code>./activation</code> directory and whether the owner information is the current user.</li></ul></li></ol>`,46))])}const f=l(h,[["render",m],["__file","Stand-Alone-Deployment_timecho.html.vue"]]),y=JSON.parse('{"path":"/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.html","title":"Stand-Alone Deployment","lang":"en-US","frontmatter":{"description":"Stand-Alone Deployment This chapter will introduce how to start an IoTDB standalone instance, which includes 1 ConfigNode and 1 DataNode (commonly known as 1C1D). Matters Needin...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Stand-Alone Deployment"}],["meta",{"property":"og:description","content":"Stand-Alone Deployment This chapter will introduce how to start an IoTDB standalone instance, which includes 1 ConfigNode and 1 DataNode (commonly known as 1C1D). Matters Needin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%90%AF%E5%8A%A8%E6%88%90%E5%8A%9F.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-28T02:58:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-28T02:58:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Stand-Alone Deployment\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%90%AF%E5%8A%A8%E6%88%90%E5%8A%9F.png\\",\\"https://alioss.timecho.com/docs/img/show%20cluster.png\\"],\\"dateModified\\":\\"2024-10-28T02:58:30.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Matters Needing Attention","slug":"matters-needing-attention","link":"#matters-needing-attention","children":[]},{"level":2,"title":"Installation Steps","slug":"installation-steps","link":"#installation-steps","children":[{"level":3,"title":"Unzip the installation package and enter the installation directory","slug":"unzip-the-installation-package-and-enter-the-installation-directory","link":"#unzip-the-installation-package-and-enter-the-installation-directory","children":[]},{"level":3,"title":"Parameter Configuration","slug":"parameter-configuration","link":"#parameter-configuration","children":[]},{"level":3,"title":"Start ConfigNode","slug":"start-confignode","link":"#start-confignode","children":[]},{"level":3,"title":"Activate Database","slug":"activate-database","link":"#activate-database","children":[]},{"level":3,"title":"Start DataNode","slug":"start-datanode","link":"#start-datanode","children":[]},{"level":3,"title":"Verify Deployment","slug":"verify-deployment","link":"#verify-deployment","children":[]}]},{"level":2,"title":"Common Problem","slug":"common-problem","link":"#common-problem","children":[]}],"git":{"createdTime":1718979523000,"updatedTime":1730084310000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":5},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":4},{"name":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":2},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.94,"words":1481},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.md","localizedDate":"June 21, 2024","autoDesc":true}');export{f as comp,y as data};
