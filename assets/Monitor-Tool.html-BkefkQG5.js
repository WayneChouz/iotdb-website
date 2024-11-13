import{_ as t,c as o,b as a,o as n}from"./app-B280G6gL.js";const s={};function i(r,e){return n(),o("div",null,e[0]||(e[0]=[a(`<h1 id="monitor-tool" tabindex="-1"><a class="header-anchor" href="#monitor-tool"><span>Monitor Tool</span></a></h1><h2 id="prometheus" tabindex="-1"><a class="header-anchor" href="#prometheus"><span>Prometheus</span></a></h2><h3 id="the-mapping-from-metric-type-to-prometheus-format" tabindex="-1"><a class="header-anchor" href="#the-mapping-from-metric-type-to-prometheus-format"><span>The mapping from metric type to prometheus format</span></a></h3><blockquote><p>For metrics whose Metric Name is name and Tags are K1=V1, ..., Kn=Vn, the mapping is as follows, where value is a<br> specific value</p></blockquote><table><thead><tr><th>Metric Type</th><th>Mapping</th></tr></thead><tbody><tr><td>Counter</td><td>name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value</td></tr><tr><td>AutoGauge、Gauge</td><td>name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value</td></tr><tr><td>Histogram</td><td>name_max{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_sum{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_count{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, quantile=&quot;0.5&quot;} value <br> name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, quantile=&quot;0.99&quot;} value</td></tr><tr><td>Rate</td><td>name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, rate=&quot;m1&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, rate=&quot;m5&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, rate=&quot;m15&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, rate=&quot;mean&quot;} value</td></tr><tr><td>Timer</td><td>name_seconds_max{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_seconds_sum{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_seconds_count{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;} value <br> name_seconds{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, quantile=&quot;0.5&quot;} value <br> name_seconds{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;, k1=&quot;V1&quot;, ..., Kn=&quot;Vn&quot;, quantile=&quot;0.99&quot;} value</td></tr></tbody></table><h3 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file"><span>Config File</span></a></h3><ol><li>Taking DataNode as an example, modify the iotdb-datanode.properties configuration file as follows:</li></ol><div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties" data-title="properties"><pre><code><span class="line"><span class="token key attr-name">dn_metric_reporter_list</span><span class="token punctuation">=</span><span class="token value attr-value">PROMETHEUS</span></span>
<span class="line"><span class="token key attr-name">dn_metric_level</span><span class="token punctuation">=</span><span class="token value attr-value">CORE</span></span>
<span class="line"><span class="token key attr-name">dn_metric_prometheus_reporter_port</span><span class="token punctuation">=</span><span class="token value attr-value">9091</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can get metrics data as follows</p><ol start="2"><li>Start IoTDB DataNodes</li><li>Open a browser or use <code>curl</code> to visit <code>http://servier_ip:9091/metrics</code>, you can get the following metric<br> data:</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">...</span>
<span class="line"># HELP file_count</span>
<span class="line"># TYPE file_count gauge</span>
<span class="line">file_count{name=&quot;wal&quot;,} 0.0</span>
<span class="line">file_count{name=&quot;unseq&quot;,} 0.0</span>
<span class="line">file_count{name=&quot;seq&quot;,} 2.0</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prometheus-grafana" tabindex="-1"><a class="header-anchor" href="#prometheus-grafana"><span>Prometheus + Grafana</span></a></h3><p>As shown above, IoTDB exposes monitoring metrics data in the standard Prometheus format to the outside world. Prometheus<br> can be used to collect and store monitoring indicators, and Grafana can be used to visualize monitoring indicators.</p><p>The following picture describes the relationships among IoTDB, Prometheus and Grafana</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png" alt="iotdb_prometheus_grafana" tabindex="0" loading="lazy"><figcaption>iotdb_prometheus_grafana</figcaption></figure><ol><li>Along with running, IoTDB will collect its metrics continuously.</li><li>Prometheus scrapes metrics from IoTDB at a constant interval (can be configured).</li><li>Prometheus saves these metrics to its inner TSDB.</li><li>Grafana queries metrics from Prometheus at a constant interval (can be configured) and then presents them on the<br> graph.</li></ol><p>So, we need to do some additional works to configure and deploy Prometheus and Grafana.</p><p>For instance, you can config your Prometheus as follows to get metrics data from IoTDB:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">job_name</span><span class="token punctuation">:</span> pull<span class="token punctuation">-</span>metrics</span>
<span class="line"><span class="token key atrule">honor_labels</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">honor_timestamps</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 15s</span>
<span class="line"><span class="token key atrule">scrape_timeout</span><span class="token punctuation">:</span> 10s</span>
<span class="line"><span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> /metrics</span>
<span class="line"><span class="token key atrule">scheme</span><span class="token punctuation">:</span> http</span>
<span class="line"><span class="token key atrule">follow_redirects</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">static_configs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> localhost<span class="token punctuation">:</span><span class="token number">9091</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following documents may help you have a good journey with Prometheus and Grafana.</p><p><a href="https://prometheus.io/docs/prometheus/latest/getting_started/" target="_blank" rel="noopener noreferrer">Prometheus getting_started</a></p><p><a href="https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config" target="_blank" rel="noopener noreferrer">Prometheus scrape metrics</a></p><p><a href="https://grafana.com/docs/grafana/latest/getting-started/getting-started/" target="_blank" rel="noopener noreferrer">Grafana getting_started</a></p><p><a href="https://prometheus.io/docs/visualization/grafana/#grafana-support-for-prometheus" target="_blank" rel="noopener noreferrer">Grafana query metrics from Prometheus</a></p><h2 id="apache-iotdb-dashboard" tabindex="-1"><a class="header-anchor" href="#apache-iotdb-dashboard"><span>Apache IoTDB Dashboard</span></a></h2><p><code>Apache IoTDB Dashboard</code> is available as a supplement to IoTDB Enterprise Edition, designed for unified centralized operations and management. With it, multiple clusters can be monitored through a single panel. You can access the Dashboard&#39;s Json file by contacting Commerce.</p><figure><img src="https://alioss.timecho.com/docs/img/监控 default cluster.png" alt="Apache IoTDB Dashboard" tabindex="0" loading="lazy"><figcaption>Apache IoTDB Dashboard</figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 cluster2.png" alt="Apache IoTDB Dashboard" tabindex="0" loading="lazy"><figcaption>Apache IoTDB Dashboard</figcaption></figure><h3 id="cluster-overview" tabindex="-1"><a class="header-anchor" href="#cluster-overview"><span>Cluster Overview</span></a></h3><p>Including but not limited to:</p><ul><li>Total cluster CPU cores, memory space, and hard disk space.</li><li>Number of ConfigNodes and DataNodes in the cluster.</li><li>Cluster uptime duration.</li><li>Cluster write speed.</li><li>Current CPU, memory, and disk usage across all nodes in the cluster.</li><li>Information on individual nodes.</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 概览.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="data-writing" tabindex="-1"><a class="header-anchor" href="#data-writing"><span>Data Writing</span></a></h3><p>Including but not limited to:</p><ul><li>Average write latency, median latency, and the 99% percentile latency.</li><li>Number and size of WAL files.</li><li>Node WAL flush SyncBuffer latency.</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 写入.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="data-querying" tabindex="-1"><a class="header-anchor" href="#data-querying"><span>Data Querying</span></a></h3><p>Including but not limited to:</p><ul><li>Node query load times for time series metadata.</li><li>Node read duration for time series.</li><li>Node edit duration for time series metadata.</li><li>Node query load time for Chunk metadata list.</li><li>Node edit duration for Chunk metadata.</li><li>Node filtering duration based on Chunk metadata.</li><li>Average time to construct a Chunk Reader.</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 查询.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="storage-engine" tabindex="-1"><a class="header-anchor" href="#storage-engine"><span>Storage Engine</span></a></h3><p>Including but not limited to:</p><ul><li>File count and sizes by type.</li><li>The count and size of TsFiles at various stages.</li><li>Number and duration of various tasks.</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 存储引擎.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="system-monitoring" tabindex="-1"><a class="header-anchor" href="#system-monitoring"><span>System Monitoring</span></a></h3><p>Including but not limited to:</p><ul><li>System memory, swap memory, and process memory.</li><li>Disk space, file count, and file sizes.</li><li>JVM GC time percentage, GC occurrences by type, GC volume, and heap memory usage across generations.</li><li>Network transmission rate, packet sending rate</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 系统 内存与硬盘.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 系统jvm.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 系统 网络.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,50)]))}const u=t(s,[["render",i],["__file","Monitor-Tool.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.2.x/Tools-System/Monitor-Tool.html","title":"Monitor Tool","lang":"en-US","frontmatter":{"description":"Monitor Tool Prometheus The mapping from metric type to prometheus format For metrics whose Metric Name is name and Tags are K1=V1, ..., Kn=Vn, the mapping is as follows, where ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Tools-System/Monitor-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/Tools-System/Monitor-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Monitor Tool"}],["meta",{"property":"og:description","content":"Monitor Tool Prometheus The mapping from metric type to prometheus format For metrics whose Metric Name is name and Tags are K1=V1, ..., Kn=Vn, the mapping is as follows, where ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-09T10:21:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-09T10:21:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Monitor Tool\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20default%20cluster.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20cluster2.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E6%A6%82%E8%A7%88.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E5%86%99%E5%85%A5.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E6%9F%A5%E8%AF%A2.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E7%B3%BB%E7%BB%9F%20%E5%86%85%E5%AD%98%E4%B8%8E%E7%A1%AC%E7%9B%98.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E7%B3%BB%E7%BB%9Fjvm.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E7%B3%BB%E7%BB%9F%20%E7%BD%91%E7%BB%9C.png\\"],\\"dateModified\\":\\"2024-05-09T10:21:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Prometheus","slug":"prometheus","link":"#prometheus","children":[{"level":3,"title":"The mapping from metric type to prometheus format","slug":"the-mapping-from-metric-type-to-prometheus-format","link":"#the-mapping-from-metric-type-to-prometheus-format","children":[]},{"level":3,"title":"Config File","slug":"config-file","link":"#config-file","children":[]},{"level":3,"title":"Prometheus + Grafana","slug":"prometheus-grafana","link":"#prometheus-grafana","children":[]}]},{"level":2,"title":"Apache IoTDB Dashboard","slug":"apache-iotdb-dashboard","link":"#apache-iotdb-dashboard","children":[{"level":3,"title":"Cluster Overview","slug":"cluster-overview","link":"#cluster-overview","children":[]},{"level":3,"title":"Data Writing","slug":"data-writing","link":"#data-writing","children":[]},{"level":3,"title":"Data Querying","slug":"data-querying","link":"#data-querying","children":[]},{"level":3,"title":"Storage Engine","slug":"storage-engine","link":"#storage-engine","children":[]},{"level":3,"title":"System Monitoring","slug":"system-monitoring","link":"#system-monitoring","children":[]}]}],"git":{"createdTime":1690869728000,"updatedTime":1715250109000,"contributors":[{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1},{"name":"Li Yu Heng","email":"liyuheng55555@126.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.62,"words":1086},"filePathRelative":"UserGuide/V1.2.x/Tools-System/Monitor-Tool.md","localizedDate":"August 1, 2023","autoDesc":true}');export{u as comp,c as data};
