import{_ as a,r as s,o as r,c as l,b as t,d as e,a as o,e as i}from"./app-XaimuxhO.js";const d={},c=i('<h1 id="workbench-deployment" tabindex="-1"><a class="header-anchor" href="#workbench-deployment"><span>Workbench Deployment</span></a></h1><p>The visualization console is one of the supporting tools for IoTDB. It is an official application tool system used in various stages of database deployment, operation and maintenance management, and application development, making the use, operation and management of databases simpler and more efficient, truly achieving low-cost management and operation of databases. This document will help you install Workbench.</p><div style="display:flex;justify-content:space-between;"><img src="https://alioss.timecho.com/docs/img/首页.PNG" alt=" " style="width:50%;"><img src="https://alioss.timecho.com/docs/img/测点列表.PNG" alt="" style="width:50%;"></div><h2 id="installation-preparation" tabindex="-1"><a class="header-anchor" href="#installation-preparation"><span>Installation Preparation</span></a></h2>',4),p=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"Preparation Content"),t("th",{style:{"text-align":"center"}},"Name"),t("th",{style:{"text-align":"center"}},"Version Requirements"),t("th",{style:{"text-align":"center"}},"Link")])],-1),h=t("tr",null,[t("td",{style:{"text-align":"center"}},"Operating System"),t("td",{style:{"text-align":"center"}},"Windows or Linux"),t("td",{style:{"text-align":"center"}},"-"),t("td",{style:{"text-align":"center"}},"-")],-1),m=t("td",{style:{"text-align":"center"}},"Installation Environment",-1),u=t("td",{style:{"text-align":"center"}},"JDK",-1),g=t("td",{style:{"text-align":"center"}},"Need>=V1.8.0_162 (recommended to use 11 or 17, please choose ARM or x64 installation package according to machine configuration when downloading)",-1),f={style:{"text-align":"center"}},b={href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"},y=t("td",{style:{"text-align":"center"}},"Related Software",-1),v=t("td",{style:{"text-align":"center"}},"Prometheus",-1),_=t("td",{style:{"text-align":"center"}},"Requires installation of V2.30.3 and above.",-1),k={style:{"text-align":"center"}},x={href:"https://prometheus.io/download/",target:"_blank",rel:"noopener noreferrer"},w=t("tr",null,[t("td",{style:{"text-align":"center"}},"Database"),t("td",{style:{"text-align":"center"}},"IoTDB"),t("td",{style:{"text-align":"center"}},"Requires V1.2.0 Enterprise Edition and above"),t("td",{style:{"text-align":"center"}},"You can contact business or technical support to obtain")],-1),I=t("tr",null,[t("td",{style:{"text-align":"center"}},"Console"),t("td",{style:{"text-align":"center"}},[e("IoTDB-Workbench-"),t("code",null,"<version>")]),t("td",{style:{"text-align":"center"}},"-"),t("td",{style:{"text-align":"center"}},"You can choose according to the appendix version comparison table and contact business or technical support to obtain it")],-1),T=i(`<h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><h3 id="step-1-iotdb-enables-monitoring-indicator-collection" tabindex="-1"><a class="header-anchor" href="#step-1-iotdb-enables-monitoring-indicator-collection"><span>Step 1: IoTDB enables monitoring indicator collection</span></a></h3><ol><li><p>Open the monitoring configuration item. The configuration items related to monitoring in IoTDB are disabled by default. Before deploying the monitoring panel, you need to open the relevant configuration items (note that the service needs to be restarted after enabling monitoring configuration).</p><table><tr><th>Configuration</th><th>Located in the configuration file</th><th>Description</th></tr><tr><td>cn_metric_reporter_list</td><td rowspan="3">conf/iotdb-system.properties</td><td>Uncomment the configuration item and set the value to PROMETHEUS</td></tr><tr><td>cn_metric_level</td><td>Uncomment the configuration item and set the value to IMPORTANT</td></tr><tr><td>cn_metric_prometheus_reporter_port</td><td>Uncomment the configuration item to maintain the default setting of 9091. If other ports are set, they will not conflict with each other</td></tr><tr><td>dn_metric_reporter_list</td><td rowspan="4">conf/iotdb-system.properties</td><td>Uncomment the configuration item and set the value to PROMETHEUS</td></tr><tr><td>dn_metric_level</td><td>Uncomment the configuration item and set the value to IMPORTANT</td></tr><tr><td>dn_metric_prometheus_reporter_port</td><td>Uncomment the configuration item and set it to 9092 by default. If other ports are set, they will not conflict with each other</td></tr><tr><td>dn_metric_internal_reporter_type</td><td>Uncomment the configuration item and set the value to IOTDB</td></tr><tr><td>enable_audit_log</td><td rowspan="3">conf/iotdb-system.properties</td><td>Uncomment the configuration item and set the value to true</td></tr><tr><td>audit_log_storage</td><td>Uncomment configuration items</td></tr><tr><td>audit_log_operation</td><td>Uncomment configuration items</td></tr></table></li><li><p>Restart all nodes. After modifying the monitoring indicator configuration of three nodes, the confignode and datanode services of all nodes can be restarted:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./sbin/stop-standalone.sh      <span class="token comment">#Stop confignode and datanode first</span>
./sbin/start-confignode.sh  <span class="token parameter variable">-d</span> <span class="token comment">#Start confignode</span>
./sbin/start-datanode.sh  <span class="token parameter variable">-d</span>   <span class="token comment">#Start datanode </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>After restarting, confirm the running status of each node through the client. If the status is Running, it indicates successful configuration:</p><figure><img src="https://alioss.timecho.com/docs/img/启动.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><h3 id="step-2-install-and-configure-prometheus" tabindex="-1"><a class="header-anchor" href="#step-2-install-and-configure-prometheus"><span>Step 2: Install and configure Prometheus</span></a></h3>`,4),q={href:"https://prometheus.io/download%EF%BC%89",target:"_blank",rel:"noopener noreferrer"},P=i(`<li><p>Unzip the installation package and enter the unzipped folder:</p><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>tar xvfz prometheus-*.tar.gz
cd prometheus-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Modify the configuration. Modify the configuration file prometheus.yml as follows</p><ol><li>Add configNode task to collect monitoring data for ConfigNode</li><li>Add a datanode task to collect monitoring data for DataNodes</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>global:
scrape_interval: 15s 
evaluation_interval: 15s 
scrape_configs:
- job_name: <span class="token string">&quot;prometheus&quot;</span>
    static_configs:
    - targets: <span class="token punctuation">[</span><span class="token string">&quot;localhost:9090&quot;</span><span class="token punctuation">]</span>
- job_name: <span class="token string">&quot;confignode&quot;</span>
    static_configs:
    - targets: <span class="token punctuation">[</span><span class="token string">&quot;iotdb-1:9091&quot;</span>,<span class="token string">&quot;iotdb-2:9091&quot;</span>,<span class="token string">&quot;iotdb-3:9091&quot;</span><span class="token punctuation">]</span>
    honor_labels: <span class="token boolean">true</span>
- job_name: <span class="token string">&quot;datanode&quot;</span>
    static_configs:
    - targets: <span class="token punctuation">[</span><span class="token string">&quot;iotdb-1:9092&quot;</span>,<span class="token string">&quot;iotdb-2:9092&quot;</span>,<span class="token string">&quot;iotdb-3:9092&quot;</span><span class="token punctuation">]</span>
    honor_labels: <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Start Prometheus. The default expiration time for Prometheus monitoring data is 15 days. In production environments, it is recommended to adjust it to 180 days or more to track historical monitoring data for a longer period of time. The startup command is as follows:</p><div class="language-Shell line-numbers-mode" data-ext="Shell" data-title="Shell"><pre class="language-Shell"><code>./prometheus --config.file=prometheus.yml --storage.tsdb.retention.time=180d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,3),S={href:"http://IP",target:"_blank",rel:"noopener noreferrer"},D=t("div",{style:{display:"flex","justify-content":"space-between"}},[t("img",{src:"https://alioss.timecho.com/docs/img/启动_1.png",alt:"",style:{width:"50%"}}),t("img",{src:"https://alioss.timecho.com/docs/img/启动_2.png",alt:"",style:{width:"48%"}})],-1),V=t("h3",{id:"step-3-install-workbench",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#step-3-install-workbench"},[t("span",null,"Step 3: Install Workbench")])],-1),W=t("h4",{id:"windows",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#windows"},[t("span",null,"Windows：")])],-1),N=i(`<li><p>Enter the config directory of iotdb Workbench -<code>&lt;version&gt;</code></p></li><li><p>Modify Workbench configuration file: Go to the <code>config</code> folder and modify the configuration file <code>application-prod.properties</code>. If you are installing it locally, there is no need to modify it. If you are deploying it on a server, you need to modify the IP address</p><table><thead><tr><th>Configuration</th><th>Before Modification</th><th>After modification</th></tr></thead><tbody><tr><td>pipe.callbackUrl</td><td>pipe.callbackUrl=<code>http://127.0.0.1</code></td><td>pipe.callbackUrl=<code>http://&lt;Workbench&#39;s IP address&gt;</code></td></tr></tbody></table><figure><img src="https://alioss.timecho.com/docs/img/windows.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Startup program: Please execute the startup command in the sbin folder of IoTDB Workbench -<code>&lt;version&gt;</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Start Workbench in the background</span>
start.bat <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can use the <code>jps</code> command to check if the startup was successful, as shown in the figure:</p><figure><img src="https://alioss.timecho.com/docs/img/windows-jps.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),z={href:"http://Server",target:"_blank",rel:"noopener noreferrer"},U={href:"http://127.0.0.1:9190",target:"_blank",rel:"noopener noreferrer"},B=t("figure",null,[t("img",{src:"https://alioss.timecho.com/docs/img/workbench-en.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),A=t("h4",{id:"linux",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#linux"},[t("span",null,"Linux：")])],-1),E=i(`<li><p>Enter the IoTDB Workbench -<code>&lt;version&gt;</code> directory</p></li><li><p>Modify Workbench configuration: Go to the <code>config</code> folder and modify the configuration file <code>application-prod.properties</code>. If you are installing it locally, there is no need to modify it. If you are deploying it on a server, you need to modify the IP address</p><table><thead><tr><th>Configuration</th><th>Before Modification</th><th>After modification</th></tr></thead><tbody><tr><td>pipe.callbackUrl</td><td>pipe.callbackUrl=<code>http://127.0.0.1</code></td><td>pipe.callbackUrl=<code>http://&lt;Workbench&#39;s IP address&gt;</code></td></tr></tbody></table><figure><img src="https://alioss.timecho.com/docs/img/linux.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Startup program: Please execute the startup command in the sbin folder of IoTDB Workbench -<code>&lt;version&gt;</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Start Workbench in the background</span>
./start.sh <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can use the <code>jps</code> command to check if the startup was successful, as shown in the figure:</p><figure><img src="https://alioss.timecho.com/docs/img/linux-jps.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),j={href:"http://Server",target:"_blank",rel:"noopener noreferrer"},M={href:"http://127.0.0.1:9190",target:"_blank",rel:"noopener noreferrer"},C=t("figure",null,[t("img",{src:"https://alioss.timecho.com/docs/img/workbench-en.png",alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),R=i('<h3 id="step-4-configure-instance-information" tabindex="-1"><a class="header-anchor" href="#step-4-configure-instance-information"><span>Step 4: Configure Instance Information</span></a></h3><ol><li><p>Configure instance information: You only need to fill in the following information to connect to the instance</p><figure><img src="https://alioss.timecho.com/docs/img/workbench-en-1.jpeg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>Field Name</th><th>Is It A Required Field</th><th>Field Meaning</th><th>Default Value</th></tr></thead><tbody><tr><td>Connection Type</td><td></td><td>The content filled in for different connection types varies, and supports selecting &quot;single machine, cluster, dual active&quot;</td><td>-</td></tr><tr><td>Instance Name</td><td>Yes</td><td>You can distinguish different instances based on their names, with a maximum input of 50 characters</td><td>-</td></tr><tr><td>Instance</td><td>Yes</td><td>Fill in the database address (<code>dn_rpc_address</code> field in the <code>iotdb/conf/iotdb-datanode.properties</code> file) and port number (<code>dn_rpc_port</code> field). Note: For clusters and dual active devices, clicking the &quot;+&quot; button supports entering multiple instance information</td><td>-</td></tr><tr><td>Prometheus</td><td>No</td><td>Fill in <code>http://&lt;Prometheus IP address&gt;:&lt;Prometheus port number&gt;/app/v1/query</code> to view some monitoring information on the homepage. We recommend that you configure and use it</td><td>-</td></tr><tr><td>Username</td><td>Yes</td><td>Fill in the username for IoTDB, supporting input of 4 to 32 characters, including uppercase and lowercase letters, numbers, and special characters (! @ # $% ^&amp;* () _+-=)</td><td>root</td></tr><tr><td>Enter Password</td><td>No</td><td>Fill in the password for IoTDB. To ensure the security of the database, we will not save the password. Please fill in the password yourself every time you connect to the instance or test</td><td>root</td></tr></tbody></table></li><li><p>Test the accuracy of the information filled in: You can perform a connection test on the instance information by clicking the &quot;Test&quot; button</p><figure><img src="https://alioss.timecho.com/docs/img/workbench-en-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><h2 id="appendix-iotdb-and-workbench-version-comparison-table" tabindex="-1"><a class="header-anchor" href="#appendix-iotdb-and-workbench-version-comparison-table"><span>Appendix: IoTDB and Workbench Version Comparison Table</span></a></h2><table><thead><tr><th style="text-align:center;">Workbench Version Number</th><th style="text-align:center;">Release Note</th><th style="text-align:center;">Supports IoTDB Versions</th></tr></thead><tbody><tr><td style="text-align:center;">V1.3.1</td><td style="text-align:center;">New analysis methods have been added to the analysis function, and functions such as optimizing import templates have been optimized</td><td style="text-align:center;">V1.3.2 and above versions</td></tr><tr><td style="text-align:center;">V1.3.0</td><td style="text-align:center;">Add database configuration function</td><td style="text-align:center;">V1.3.2 and above versions</td></tr><tr><td style="text-align:center;">V1.2.6</td><td style="text-align:center;">Optimize the permission control function of each module</td><td style="text-align:center;">V1.3.1 and above versions</td></tr><tr><td style="text-align:center;">V1.2.5</td><td style="text-align:center;">The visualization function has added the concept of &quot;commonly used templates&quot;, and all interface optimization and page caching functions have been supplemented</td><td style="text-align:center;">V1.3.0 and above versions</td></tr><tr><td style="text-align:center;">V1.2.4</td><td style="text-align:center;">The calculation function has added the &quot;import and export&quot; function, and the measurement point list has added the &quot;time alignment&quot; field</td><td style="text-align:center;">V1.2.2 and above versions</td></tr><tr><td style="text-align:center;">V1.2.3</td><td style="text-align:center;">New &quot;activation details&quot; and analysis functions added to the homepage</td><td style="text-align:center;">V1.2.2 and above versions</td></tr><tr><td style="text-align:center;">V1.2.2</td><td style="text-align:center;">Optimize the display content and other functions of &quot;measurement point description&quot;</td><td style="text-align:center;">V1.2.2 and above versions</td></tr><tr><td style="text-align:center;">V1.2.1</td><td style="text-align:center;">New &quot;Monitoring Panel&quot; added to the data synchronization interface to optimize Prometheus prompt information</td><td style="text-align:center;">V1.2.2 and above versions</td></tr><tr><td style="text-align:center;">V1.2.0</td><td style="text-align:center;">New Workbench version upgrade</td><td style="text-align:center;">V1.2.0 and above versions</td></tr></tbody></table>',4);function G(O,F){const n=s("ExternalLinkIcon");return r(),l("div",null,[c,t("table",null,[p,t("tbody",null,[h,t("tr",null,[m,u,g,t("td",f,[t("a",b,[e("https://www.oracle.com/java/technologies/downloads/"),o(n)])])]),t("tr",null,[y,v,_,t("td",k,[t("a",x,[e("https://prometheus.io/download/"),o(n)])])]),w,I])]),T,t("ol",null,[t("li",null,[t("p",null,[e("Download the Prometheus installation package, which requires installation of V2.30.3 and above. You can go to the Prometheus official website to download it（"),t("a",q,[e("https://prometheus.io/download）"),o(n)])])]),P,t("li",null,[t("p",null,[e("Confirm successful startup. Enter in browser "),t("a",S,[e("http://IP"),o(n)]),e(":port Go to Prometheus and click on the Target interface under Status. When you see that all States are Up, it indicates successful configuration and connectivity.")]),D])]),V,W,t("ol",null,[N,t("li",null,[t("p",null,[e('Verification successful: Open "'),t("a",z,[e("http://Server"),o(n)]),e(' IP: Port in configuration file" in the browser to access, for example:“ '),t("a",U,[e("http://127.0.0.1:9190"),o(n)]),e(" ”When the login interface appears, it is considered successful")]),B])]),A,t("ol",null,[E,t("li",null,[t("p",null,[e('Verification successful: Open "'),t("a",j,[e("http://Server"),o(n)]),e(' IP: Port in configuration file" in the browser to access, for example:"'),t("a",M,[e("http://127.0.0.1:9190"),o(n)]),e('" When the login interface appears, it is considered successful')]),C])]),R])}const L=a(d,[["render",G],["__file","workbench-deployment.html.vue"]]),J=JSON.parse('{"path":"/UserGuide/latest/Deployment-and-Maintenance/workbench-deployment.html","title":"Workbench Deployment","lang":"en-US","frontmatter":{"description":"Workbench Deployment The visualization console is one of the supporting tools for IoTDB. It is an official application tool system used in various stages of database deployment,...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/workbench-deployment.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/workbench-deployment.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Workbench Deployment"}],["meta",{"property":"og:description","content":"Workbench Deployment The visualization console is one of the supporting tools for IoTDB. It is an official application tool system used in various stages of database deployment,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%90%AF%E5%8A%A8.PNG"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-09T09:34:12.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-09T09:34:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Workbench Deployment\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%90%AF%E5%8A%A8.PNG\\",\\"https://alioss.timecho.com/docs/img/windows.png\\",\\"https://alioss.timecho.com/docs/img/windows-jps.png\\",\\"https://alioss.timecho.com/docs/img/workbench-en.png\\",\\"https://alioss.timecho.com/docs/img/linux.png\\",\\"https://alioss.timecho.com/docs/img/linux-jps.png\\",\\"https://alioss.timecho.com/docs/img/workbench-en.png\\",\\"https://alioss.timecho.com/docs/img/workbench-en-1.jpeg\\",\\"https://alioss.timecho.com/docs/img/workbench-en-2.png\\"],\\"dateModified\\":\\"2024-08-09T09:34:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Installation Preparation","slug":"installation-preparation","link":"#installation-preparation","children":[]},{"level":2,"title":"Installation Steps","slug":"installation-steps","link":"#installation-steps","children":[{"level":3,"title":"Step 1: IoTDB enables monitoring indicator collection","slug":"step-1-iotdb-enables-monitoring-indicator-collection","link":"#step-1-iotdb-enables-monitoring-indicator-collection","children":[]},{"level":3,"title":"Step 2: Install and configure Prometheus","slug":"step-2-install-and-configure-prometheus","link":"#step-2-install-and-configure-prometheus","children":[]},{"level":3,"title":"Step 3: Install Workbench","slug":"step-3-install-workbench","link":"#step-3-install-workbench","children":[]},{"level":3,"title":"Step 4: Configure Instance Information","slug":"step-4-configure-instance-information","link":"#step-4-configure-instance-information","children":[]}]},{"level":2,"title":"Appendix: IoTDB and Workbench Version Comparison Table","slug":"appendix-iotdb-and-workbench-version-comparison-table","link":"#appendix-iotdb-and-workbench-version-comparison-table","children":[]}],"git":{"createdTime":1719826062000,"updatedTime":1723196052000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":2},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.39,"words":1616},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/workbench-deployment.md","localizedDate":"July 1, 2024","autoDesc":true}');export{L as comp,J as data};
