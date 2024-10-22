import{_ as a,c as t,b as i,o}from"./app-D6rlonH6.js";const n={};function s(r,e){return o(),t("div",null,e[0]||(e[0]=[i(`<h1 id="monitoring-board-install-and-deploy" tabindex="-1"><a class="header-anchor" href="#monitoring-board-install-and-deploy"><span>Monitoring Board Install and Deploy</span></a></h1><p>From the Apache IoTDB 1.0 version, we introduced the system monitoring module, you can complete the Apache IoTDB important operational indicators for monitoring, this article describes how to open the system monitoring module in the Apache IoTDB distribution, and the use of Prometheus + Grafana way to complete the visualisation of the system monitoring indicators.</p><h2 id="pre-preparation" tabindex="-1"><a class="header-anchor" href="#pre-preparation"><span>pre-preparation</span></a></h2><h3 id="software-requirement" tabindex="-1"><a class="header-anchor" href="#software-requirement"><span>software requirement</span></a></h3><ol><li>Apache IoTDB: version 1.0 and above, download from the official website: <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/Download/</a></li><li>Prometheus: version 2.30.3 and above, download from the official website: <a href="https://prometheus.io/download/" target="_blank" rel="noopener noreferrer">https://prometheus.io/download/</a></li><li>Grafana: version 8.4.2 and above, download from the official website: <a href="https://grafana.com/grafana/download" target="_blank" rel="noopener noreferrer">https://grafana.com/grafana/download</a></li><li>IoTDB-Grafana installer: Grafana Dashboards is an TimechoDB(Enterprise Edition based on IoTDB) tool, and you may contact your sales for the relevant installer.</li></ol><h3 id="cluster-requirement" tabindex="-1"><a class="header-anchor" href="#cluster-requirement"><span>cluster requirement</span></a></h3><p>Make sure that the IoTDB cluster is started before doing the following.</p><h3 id="clarification" tabindex="-1"><a class="header-anchor" href="#clarification"><span>clarification</span></a></h3><p>This doc will build the monitoring dashboard on one machine (1 ConfigNode and 1 DataNode) environment, other cluster configurations are similar, users can adjust the configuration according to their own cluster situation (the number of ConfigNode and DataNode). The basic configuration information of the cluster built in this paper is shown in the table below.</p><table><thead><tr><th>NODETYPE</th><th>NODEIP</th><th>Monitor Pusher</th><th>Monitor Level</th><th>Monitor Port</th></tr></thead><tbody><tr><td>ConfigNode</td><td>127.0.0.1</td><td>PROMETHEUS</td><td>IMPORTANT</td><td>9091</td></tr><tr><td>DataNode</td><td>127.0.0.1</td><td>PROMETHEUS</td><td>IMPORTANT</td><td>9093</td></tr></tbody></table><h2 id="configure-prometheus-capture-monitoring-metrics" tabindex="-1"><a class="header-anchor" href="#configure-prometheus-capture-monitoring-metrics"><span>configure Prometheus capture monitoring metrics</span></a></h2><ol><li>Download the installation package. Download the Prometheus binary package locally, unzip it and go to the corresponding folder:</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">tar xvfz prometheus-*.tar.gz</span>
<span class="line">cd prometheus-*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Modify the configuration. Modify the Prometheus configuration file prometheus.yml as follows:<br> a. Added confignode task to collect monitoring data from ConfigNode<br> b. Add datanode task to collect monitoring data from DataNode</li></ol><div class="language-YAML line-numbers-mode" data-highlighter="prismjs" data-ext="YAML" data-title="YAML"><pre><code><span class="line">global:</span>
<span class="line">  scrape_interval: 15s</span>
<span class="line"></span>
<span class="line">scrape_configs:</span>
<span class="line">  - job_name: &quot;prometheus&quot;</span>
<span class="line">    static_configs:</span>
<span class="line">    - targets: [&quot;localhost:9090&quot;]</span>
<span class="line">  - job_name: &quot;confignode&quot;</span>
<span class="line">    static_configs:</span>
<span class="line">    - targets: [&quot;localhost:9091&quot;]</span>
<span class="line">    honor_labels: true</span>
<span class="line">  - job_name: &quot;datanode&quot;</span>
<span class="line">    static_configs:</span>
<span class="line">    - targets: [&quot;localhost:9093&quot;]</span>
<span class="line">    honor_labels: true</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Start Promethues. the default expiration time for Prometheus monitoring data is 15d. in production environments, it is recommended to adjust the expiration time to 180d or more in order to track historical monitoring data for a longer period of time, as shown in the following startup command:</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">./prometheus --config.file=prometheus.yml --storage.tsdb.retention.time=180d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="4"><li>Confirm the startup is successful. Enter <a href="http://localhost:9090" target="_blank" rel="noopener noreferrer">http://localhost:9090</a> in the browser to enter Prometheus, click to enter the Target interface under Status (Figure 1 below), when you see State are Up, it means the configuration is successful and connected (Figure 2 below), click the link on the left side to jump to the webpage monitoring.</li></ol><p><img src="https://alioss.timecho.com/docs/img/1a.PNG" alt="" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/2a.PNG" alt="" loading="lazy"></p><h2 id="using-grafana-to-view-monitoring-data" tabindex="-1"><a class="header-anchor" href="#using-grafana-to-view-monitoring-data"><span>Using Grafana to View Monitoring Data</span></a></h2><h3 id="step1-grafana-installation-configuration-and-startup" tabindex="-1"><a class="header-anchor" href="#step1-grafana-installation-configuration-and-startup"><span>Step1：Grafana Installation, Configuration and Startup</span></a></h3><ol><li>Download the binary package of Grafana locally, unzip it and go to the corresponding folder:</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">tar -zxvf grafana-*.tar.gz</span>
<span class="line">cd grafana-*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Start Grafana and enter:</li></ol><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">./bin/grafana-server web </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="3"><li>Enter <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">http://localhost:3000</a> in your browser to access Grafana, the default initial username and password are both admin.</li><li>First we configure the Data Source in Configuration to be Prometheus.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/3a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>When configuring the Data Source, pay attention to the URL where Prometheus is located, and click Save &amp; Test after configuration, the Data source is working prompt appears, then the configuration is successful.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/4a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="step2-use-the-official-grafana-dashboard-provided-by-iotdb" tabindex="-1"><a class="header-anchor" href="#step2-use-the-official-grafana-dashboard-provided-by-iotdb"><span>Step2：Use the official Grafana dashboard provided by IoTDB</span></a></h3><ol><li>Enter Grafana，click Browse of Dashboards</li></ol><figure><img src="https://alioss.timecho.com/docs/img/5a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>Click the Import button on the right</li></ol><figure><img src="https://alioss.timecho.com/docs/img/6a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>Select a way to import Dashboard<br> a. Upload the Json file of the downloaded Dashboard locally<br> b. Enter the URL or ID of the Dashboard obtained from the Grafana website<br> c. Paste the contents of the Dashboard&#39;s Json file</li></ol><figure><img src="https://alioss.timecho.com/docs/img/7a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>Select Prometheus in the Dashboard as the Data Source you just configured and click Import</li></ol><figure><img src="https://alioss.timecho.com/docs/img/8a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>Then enter Dashboard，select job to be ConfigNode，then following monitoring dashboard will be seen:</li></ol><figure><img src="https://alioss.timecho.com/docs/img/9a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>Similarly, we can import the Apache DataNode Dashboard, select job as DataNode,then following monitoring dashboard will be seen:</li></ol><figure><img src="https://alioss.timecho.com/docs/img/10a.pngA" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="step3-creating-a-new-dashboard-for-data-visualisation" tabindex="-1"><a class="header-anchor" href="#step3-creating-a-new-dashboard-for-data-visualisation"><span>Step3：Creating a new Dashboard for data visualisation</span></a></h3><ol><li>First create the Dashboard, then create the Panel.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/11a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>After that, you can visualize the monitoring-related data in the panel according to your needs (all relevant monitoring metrics can be filtered by selecting confignode/datanode in the job first).</li></ol><figure><img src="https://alioss.timecho.com/docs/img/12a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>Once the visualisation of the monitoring metrics selected for attention is complete, we get a panel like this:</li></ol><figure><img src="https://alioss.timecho.com/docs/img/13a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,49)]))}const d=a(n,[["render",s],["__file","Monitoring-Board-Install-and-Deploy.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.2.x/Deployment-and-Maintenance/Monitoring-Board-Install-and-Deploy.html","title":"Monitoring Board Install and Deploy","lang":"en-US","frontmatter":{"description":"Monitoring Board Install and Deploy From the Apache IoTDB 1.0 version, we introduced the system monitoring module, you can complete the Apache IoTDB important operational indica...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Monitoring-Board-Install-and-Deploy.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/Deployment-and-Maintenance/Monitoring-Board-Install-and-Deploy.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Monitoring Board Install and Deploy"}],["meta",{"property":"og:description","content":"Monitoring Board Install and Deploy From the Apache IoTDB 1.0 version, we introduced the system monitoring module, you can complete the Apache IoTDB important operational indica..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/1a.PNG"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-12T08:18:47.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-12T08:18:47.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Monitoring Board Install and Deploy\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/1a.PNG\\",\\"https://alioss.timecho.com/docs/img/2a.PNG\\",\\"https://alioss.timecho.com/docs/img/3a.png\\",\\"https://alioss.timecho.com/docs/img/4a.png\\",\\"https://alioss.timecho.com/docs/img/5a.png\\",\\"https://alioss.timecho.com/docs/img/6a.png\\",\\"https://alioss.timecho.com/docs/img/7a.png\\",\\"https://alioss.timecho.com/docs/img/8a.png\\",\\"https://alioss.timecho.com/docs/img/9a.png\\",\\"https://alioss.timecho.com/docs/img/10a.pngA\\",\\"https://alioss.timecho.com/docs/img/11a.png\\",\\"https://alioss.timecho.com/docs/img/12a.png\\",\\"https://alioss.timecho.com/docs/img/13a.png\\"],\\"dateModified\\":\\"2024-01-12T08:18:47.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"pre-preparation","slug":"pre-preparation","link":"#pre-preparation","children":[{"level":3,"title":"software requirement","slug":"software-requirement","link":"#software-requirement","children":[]},{"level":3,"title":"cluster requirement","slug":"cluster-requirement","link":"#cluster-requirement","children":[]},{"level":3,"title":"clarification","slug":"clarification","link":"#clarification","children":[]}]},{"level":2,"title":"configure Prometheus capture monitoring metrics","slug":"configure-prometheus-capture-monitoring-metrics","link":"#configure-prometheus-capture-monitoring-metrics","children":[]},{"level":2,"title":"Using Grafana to View Monitoring Data","slug":"using-grafana-to-view-monitoring-data","link":"#using-grafana-to-view-monitoring-data","children":[{"level":3,"title":"Step1：Grafana Installation, Configuration and Startup","slug":"step1-grafana-installation-configuration-and-startup","link":"#step1-grafana-installation-configuration-and-startup","children":[]},{"level":3,"title":"Step2：Use the official Grafana dashboard provided by IoTDB","slug":"step2-use-the-official-grafana-dashboard-provided-by-iotdb","link":"#step2-use-the-official-grafana-dashboard-provided-by-iotdb","children":[]},{"level":3,"title":"Step3：Creating a new Dashboard for data visualisation","slug":"step3-creating-a-new-dashboard-for-data-visualisation","link":"#step3-creating-a-new-dashboard-for-data-visualisation","children":[]}]}],"git":{"createdTime":1692104943000,"updatedTime":1705047527000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.84,"words":852},"filePathRelative":"UserGuide/V1.2.x/Deployment-and-Maintenance/Monitoring-Board-Install-and-Deploy.md","localizedDate":"August 15, 2023","autoDesc":true}');export{d as comp,c as data};
