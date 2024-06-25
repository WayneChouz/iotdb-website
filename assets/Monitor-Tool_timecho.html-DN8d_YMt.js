import{_ as s,r as i,o as l,c as u,b as e,d as o,a,e as n}from"./app-vSSc7VXH.js";const r={},d=n(`<h1 id="prometheus" tabindex="-1"><a class="header-anchor" href="#prometheus"><span>Prometheus</span></a></h1><h2 id="监控指标的-prometheus-映射关系" tabindex="-1"><a class="header-anchor" href="#监控指标的-prometheus-映射关系"><span>监控指标的 Prometheus 映射关系</span></a></h2><blockquote><p>对于 Metric Name 为 name, Tags 为 K1=V1, ..., Kn=Vn 的监控指标有如下映射，其中 value 为具体值</p></blockquote><table><thead><tr><th>监控指标类型</th><th>映射关系</th></tr></thead><tbody><tr><td>Counter</td><td>name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value</td></tr><tr><td>AutoGauge、Gauge</td><td>name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value</td></tr><tr><td>Histogram</td><td>name_max{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_sum{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_count{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.5&quot;} value <br> name{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.99&quot;} value</td></tr><tr><td>Rate</td><td>name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;m1&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;m5&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;m15&quot;} value <br> name_total{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, rate=&quot;mean&quot;} value</td></tr><tr><td>Timer</td><td>name_seconds_max{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_seconds_sum{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_seconds_count{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;} value <br> name_seconds{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.5&quot;} value value <br> name_seconds{cluster=&quot;clusterName&quot;, nodeType=&quot;nodeType&quot;, nodeId=&quot;nodeId&quot;,k1=&quot;V1&quot; , ..., Kn=&quot;Vn&quot;, quantile=&quot;0.99&quot;} value</td></tr></tbody></table><h2 id="修改配置文件" tabindex="-1"><a class="header-anchor" href="#修改配置文件"><span>修改配置文件</span></a></h2><ol><li>以 DataNode 为例，修改 iotdb-datanode.properties 配置文件如下：</li></ol><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">dn_metric_reporter_list</span><span class="token punctuation">=</span><span class="token value attr-value">PROMETHEUS</span>
<span class="token key attr-name">dn_metric_level</span><span class="token punctuation">=</span><span class="token value attr-value">CORE</span>
<span class="token key attr-name">dn_metric_prometheus_reporter_port</span><span class="token punctuation">=</span><span class="token value attr-value">9091</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>启动 IoTDB DataNode</p></li><li><p>打开浏览器或者用<code>curl</code> 访问 <code>http://servier_ip:9091/metrics</code>, 就能得到如下 metric 数据：</p></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>...
# HELP file_count
# TYPE file_count gauge
file_count{name=&quot;wal&quot;,} 0.0
file_count{name=&quot;unseq&quot;,} 0.0
file_count{name=&quot;seq&quot;,} 2.0
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="prometheus-grafana" tabindex="-1"><a class="header-anchor" href="#prometheus-grafana"><span>Prometheus + Grafana</span></a></h2><p>如上所示，IoTDB 对外暴露出标准的 Prometheus 格式的监控指标数据，可以使用 Prometheus 采集并存储监控指标，使用 Grafana<br> 可视化监控指标。</p><p>IoTDB、Prometheus、Grafana三者的关系如下图所示:</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png" alt="iotdb_prometheus_grafana" tabindex="0" loading="lazy"><figcaption>iotdb_prometheus_grafana</figcaption></figure><ol><li>IoTDB在运行过程中持续收集监控指标数据。</li><li>Prometheus以固定的间隔（可配置）从IoTDB的HTTP接口拉取监控指标数据。</li><li>Prometheus将拉取到的监控指标数据存储到自己的TSDB中。</li><li>Grafana以固定的间隔（可配置）从Prometheus查询监控指标数据并绘图展示。</li></ol><p>从交互流程可以看出，我们需要做一些额外的工作来部署和配置Prometheus和Grafana。</p><p>比如，你可以对Prometheus进行如下的配置（部分参数可以自行调整）来从IoTDB获取监控数据</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">job_name</span><span class="token punctuation">:</span> pull<span class="token punctuation">-</span>metrics
<span class="token key atrule">honor_labels</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">honor_timestamps</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 15s
<span class="token key atrule">scrape_timeout</span><span class="token punctuation">:</span> 10s
<span class="token key atrule">metrics_path</span><span class="token punctuation">:</span> /metrics
<span class="token key atrule">scheme</span><span class="token punctuation">:</span> http
<span class="token key atrule">follow_redirects</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> localhost<span class="token punctuation">:</span><span class="token number">9091</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多细节可以参考下面的文档：</p>`,18),c={href:"https://prometheus.io/docs/prometheus/latest/getting_started/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config",target:"_blank",rel:"noopener noreferrer"},m={href:"https://grafana.com/docs/grafana/latest/getting-started/getting-started/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://prometheus.io/docs/visualization/grafana/#grafana-support-for-prometheus",target:"_blank",rel:"noopener noreferrer"},q=n('<h2 id="apache-iotdb-dashboard" tabindex="-1"><a class="header-anchor" href="#apache-iotdb-dashboard"><span>Apache IoTDB Dashboard</span></a></h2><p>我们提供了Apache IoTDB Dashboard，支持统一集中式运维管理，可通过一个监控面板监控多个集群。</p><figure><img src="https://alioss.timecho.com/docs/img/监控 default cluster.png" alt="Apache IoTDB Dashboard" tabindex="0" loading="lazy"><figcaption>Apache IoTDB Dashboard</figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 cluster2.png" alt="Apache IoTDB Dashboard" tabindex="0" loading="lazy"><figcaption>Apache IoTDB Dashboard</figcaption></figure><p>你可以在企业版中获取到 Dashboard 的 Json文件。</p><h3 id="集群概览" tabindex="-1"><a class="header-anchor" href="#集群概览"><span>集群概览</span></a></h3><p>可以监控包括但不限于：</p><ul><li>集群总CPU核数、总内存空间、总硬盘空间</li><li>集群包含多少个ConfigNode与DataNode</li><li>集群启动时长</li><li>集群写入速度</li><li>集群各节点当前CPU、内存、磁盘使用率</li><li>分节点的信息</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 概览.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据写入" tabindex="-1"><a class="header-anchor" href="#数据写入"><span>数据写入</span></a></h3><p>可以监控包括但不限于：</p><ul><li>写入平均耗时、耗时中位数、99%分位耗时</li><li>WAL文件数量与尺寸</li><li>节点 WAL flush SyncBuffer 耗时</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 写入.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="数据查询" tabindex="-1"><a class="header-anchor" href="#数据查询"><span>数据查询</span></a></h3><p>可以监控包括但不限于：</p><ul><li>节点查询加载时间序列元数据耗时</li><li>节点查询读取时间序列耗时</li><li>节点查询修改时间序列元数据耗时</li><li>节点查询加载Chunk元数据列表耗时</li><li>节点查询修改Chunk元数据耗时</li><li>节点查询按照Chunk元数据过滤耗时</li><li>节点查询构造Chunk Reader耗时的平均值</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 查询.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎"><span>存储引擎</span></a></h3><p>可以监控包括但不限于：</p><ul><li>分类型的文件数量、大小</li><li>处于各阶段的TsFile数量、大小</li><li>各类任务的数量与耗时</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 存储引擎.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="系统监控" tabindex="-1"><a class="header-anchor" href="#系统监控"><span>系统监控</span></a></h3><p>可以监控包括但不限于：</p><ul><li>系统内存、交换内存、进程内存</li><li>磁盘空间、文件数、文件尺寸</li><li>JVM GC时间占比、分类型的GC次数、GC数据量、各年代的堆内存占用</li><li>网络传输速率、包发送速率</li></ul><figure><img src="https://alioss.timecho.com/docs/img/监控 系统 内存与硬盘.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 系统jvm.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/监控 系统 网络.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',27);function g(f,b){const t=i("ExternalLinkIcon");return l(),u("div",null,[d,e("p",null,[e("a",c,[o("Prometheus安装使用文档"),a(t)])]),e("p",null,[e("a",p,[o("Prometheus从HTTP接口拉取metrics数据的配置说明"),a(t)])]),e("p",null,[e("a",m,[o("Grafana安装使用文档"),a(t)])]),e("p",null,[e("a",h,[o("Grafana从Prometheus查询数据并绘图的文档"),a(t)])]),q])}const k=s(r,[["render",g],["__file","Monitor-Tool_timecho.html.vue"]]),_=JSON.parse('{"path":"/zh/UserGuide/latest/Tools-System/Monitor-Tool_timecho.html","title":"Prometheus","lang":"zh-CN","frontmatter":{"description":"Prometheus 监控指标的 Prometheus 映射关系 对于 Metric Name 为 name, Tags 为 K1=V1, ..., Kn=Vn 的监控指标有如下映射，其中 value 为具体值 修改配置文件 以 DataNode 为例，修改 iotdb-datanode.properties 配置文件如下： 启动 IoTDB Data...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Tools-System/Monitor-Tool_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Tools-System/Monitor-Tool_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Prometheus"}],["meta",{"property":"og:description","content":"Prometheus 监控指标的 Prometheus 映射关系 对于 Metric Name 为 name, Tags 为 K1=V1, ..., Kn=Vn 的监控指标有如下映射，其中 value 为具体值 修改配置文件 以 DataNode 为例，修改 iotdb-datanode.properties 配置文件如下： 启动 IoTDB Data..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-09T10:21:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-09T10:21:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Prometheus\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Metrics/iotdb_prometheus_grafana.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20default%20cluster.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20cluster2.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E6%A6%82%E8%A7%88.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E5%86%99%E5%85%A5.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E6%9F%A5%E8%AF%A2.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E5%AD%98%E5%82%A8%E5%BC%95%E6%93%8E.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E7%B3%BB%E7%BB%9F%20%E5%86%85%E5%AD%98%E4%B8%8E%E7%A1%AC%E7%9B%98.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E7%B3%BB%E7%BB%9Fjvm.png\\",\\"https://alioss.timecho.com/docs/img/%E7%9B%91%E6%8E%A7%20%E7%B3%BB%E7%BB%9F%20%E7%BD%91%E7%BB%9C.png\\"],\\"dateModified\\":\\"2024-05-09T10:21:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"监控指标的 Prometheus 映射关系","slug":"监控指标的-prometheus-映射关系","link":"#监控指标的-prometheus-映射关系","children":[]},{"level":2,"title":"修改配置文件","slug":"修改配置文件","link":"#修改配置文件","children":[]},{"level":2,"title":"Prometheus + Grafana","slug":"prometheus-grafana","link":"#prometheus-grafana","children":[]},{"level":2,"title":"Apache IoTDB Dashboard","slug":"apache-iotdb-dashboard","link":"#apache-iotdb-dashboard","children":[{"level":3,"title":"集群概览","slug":"集群概览","link":"#集群概览","children":[]},{"level":3,"title":"数据写入","slug":"数据写入","link":"#数据写入","children":[]},{"level":3,"title":"数据查询","slug":"数据查询","link":"#数据查询","children":[]},{"level":3,"title":"存储引擎","slug":"存储引擎","link":"#存储引擎","children":[]},{"level":3,"title":"系统监控","slug":"系统监控","link":"#系统监控","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1715250109000,"contributors":[{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.56,"words":1367},"filePathRelative":"zh/UserGuide/latest/Tools-System/Monitor-Tool_timecho.md","localizedDate":"2023年7月10日","autoDesc":true}');export{k as comp,_ as data};
