import{_ as n,r as l,o as d,c as o,b as e,d as i,a as s,e as t}from"./app-CIPkfidu.js";const r={},c=t('<h1 id="双活版部署" tabindex="-1"><a class="header-anchor" href="#双活版部署"><span>双活版部署</span></a></h1><h2 id="什么是双活版" tabindex="-1"><a class="header-anchor" href="#什么是双活版"><span>什么是双活版？</span></a></h2><p>双活通常是指两个独立的单机(或集群)，实时进行镜像同步，它们的配置完全独立，可以同时接收外界的写入，每一个独立的单机(或集群)都可以将写入到自己的数据同步到另一个单机(或集群)中，两个单机(或集群)的数据可达到最终一致。</p><ul><li>两个单机(或集群)可构成一个高可用组：当其中一个单机(或集群)停止服务时，另一个单机(或集群)不会受到影响。当停止服务的单机(或集群)再次启动时，另一个单机(或集群)会将新写入的数据同步过来。业务可以绑定两个单机(或集群)进行读写，从而达到高可用的目的。</li><li>双活部署方案允许在物理节点少于 3 的情况下实现高可用，在部署成本上具备一定优势。同时可以通过电力、网络的双环网，实现两套单机(或集群)的物理供应隔离，保障运行的稳定性。</li><li>目前双活能力为企业版功能。</li></ul><figure><img src="https://alioss.timecho.com/docs/img/双活同步.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>',6),p=t(`<li><p>部署时推荐优先使用<code>hostname</code>进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置<code>/etc/hosts</code>，如本机ip是192.168.1.3，hostname是iotdb-1，则可以使用以下命令设置服务器的 hostname，并使用hostname配置IoTDB的<code>cn_internal_address</code>、<code>dn_internal_address</code>。</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>echo &quot;192.168.1.3  iotdb-1&quot; &gt;&gt; /etc/hosts 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>有些参数首次启动后不能修改，请参考下方的&quot;安装步骤&quot;章节来进行设置。</p></li>`,2),h={href:"https://www.timecho.com/docs/zh/UserGuide/latest/Deployment-and-Maintenance/Monitoring-panel-deployment.html",target:"_blank",rel:"noopener noreferrer"},m=t('<h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><p>我们以两台单机A和B构建的双活版IoTDB为例，A和B的ip分别是192.168.1.3 和 192.168.1.4 ，这里用hostname来表示不同的主机，规划如下：</p><table><thead><tr><th>机器</th><th>机器ip</th><th>主机名</th></tr></thead><tbody><tr><td>A</td><td>192.168.1.3</td><td>iotdb-1</td></tr><tr><td>B</td><td>192.168.1.4</td><td>iotdb-2</td></tr></tbody></table><h3 id="step1-分别安装两套独立的-iotdb" tabindex="-1"><a class="header-anchor" href="#step1-分别安装两套独立的-iotdb"><span>Step1：分别安装两套独立的 IoTDB</span></a></h3>',4),u={href:"https://www.timecho.com/docs/zh/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.timecho.com/docs/zh/UserGuide/latest/Deployment-and-Maintenance/Cluster-Deployment_timecho.html",target:"_blank",rel:"noopener noreferrer"},v=e("strong",null,"推荐 A、B 集群的各项配置保持一致，以实现最佳的双活效果。",-1),b=t(`<h3 id="step2-在机器a上创建数据同步任务至机器b" tabindex="-1"><a class="header-anchor" href="#step2-在机器a上创建数据同步任务至机器b"><span>Step2：在机器A上创建数据同步任务至机器B</span></a></h3><ul><li><p>在机器A上创建数据同步流程，即机器A上的数据自动同步到机器B，使用sbin目录下的cli工具连接A上的IoTDB数据库：</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>./sbin/start-cli.sh  -h iotdb-1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建并启动数据同步命令，SQL 如下:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>create pipe AB
with source (
&#39;source.forwarding-pipe-requests&#39; = &#39;false&#39; 
)
with sink (
&#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
&#39;sink.ip&#39;=&#39;iotdb-2&#39;,
&#39;sink.port&#39;=&#39;6667&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>注意：为了避免数据无限循环，需要将A和B上的参数<code>source.forwarding-pipe-requests</code> 均设置为 <code>false</code>，表示不转发从另一pipe传输而来的数据。</p></li></ul><h3 id="step3-在机器b上创建数据同步任务至机器a" tabindex="-1"><a class="header-anchor" href="#step3-在机器b上创建数据同步任务至机器a"><span>Step3：在机器B上创建数据同步任务至机器A</span></a></h3><ul><li><p>在机器B上创建数据同步流程，即机器B上的数据自动同步到机器A，使用sbin目录下的cli工具连接B上的IoTDB数据库：</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>./sbin/start-cli.sh  -h iotdb-2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建并启动pipe，SQL 如下:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>create pipe BA
with source (
&#39;source.forwarding-pipe-requests&#39; = &#39;false&#39; 
)
with sink (
&#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,
&#39;sink.ip&#39;=&#39;iotdb-1&#39;,
&#39;sink.port&#39;=&#39;6667&#39;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>注意：为了避免数据无限循环，需要将A和B上的参数<code>source.forwarding-pipe-requests</code> 均设置为 <code>false</code>，表示不转发从另一pipe传输而来的数据。</p></li></ul><h3 id="step4-验证部署" tabindex="-1"><a class="header-anchor" href="#step4-验证部署"><span>Step4：验证部署</span></a></h3><p>上述数据同步流程创建完成后，即可启动双活集群。</p><h4 id="检查集群运行状态" tabindex="-1"><a class="header-anchor" href="#检查集群运行状态"><span>检查集群运行状态</span></a></h4><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>#在2个节点分别执行show cluster命令检查IoTDB服务状态
show  cluster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>机器A</strong>:</p><figure><img src="https://alioss.timecho.com/docs/img/双活-A.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>机器B</strong>:</p><figure><img src="https://alioss.timecho.com/docs/img/双活-B.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>确保每一个 ConfigNode 和 DataNode 都处于 Running 状态。</p><h4 id="检查同步状态" tabindex="-1"><a class="header-anchor" href="#检查同步状态"><span>检查同步状态</span></a></h4><ul><li>机器A上检查同步状态</li></ul><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>show pipes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/show pipes-A.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>机器B上检查同步状态</li></ul><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>show pipes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/show pipes-B.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>确保每一个 pipe 都处于 RUNNING 状态。</p><h3 id="step5-停止双活版-iotdb" tabindex="-1"><a class="header-anchor" href="#step5-停止双活版-iotdb"><span>Step5：停止双活版 IoTDB</span></a></h3><ul><li><p>在机器A的执行下列命令：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>./sbin/start-cli.sh -h iotdb-1  #登录cli
IoTDB&gt; stop pipe AB             #停止数据同步流程
./sbin/stop-standalone.sh       #停止数据库服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>在机器B的执行下列命令：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>./sbin/start-cli.sh -h iotdb-2  #登录cli
IoTDB&gt; stop pipe BA             #停止数据同步流程
./sbin/stop-standalone.sh       #停止数据库服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,23);function B(f,_){const a=l("ExternalLinkIcon");return d(),o("div",null,[c,e("ol",null,[p,e("li",null,[e("p",null,[i("推荐部署监控面板，可以对重要运行指标进行监控，随时掌握数据库运行状态，监控面板可以联系商务获取，部署监控面板步骤可以参考"),e("a",h,[i("文档"),s(a)])])])]),m,e("p",null,[i("在2个机器上分别安装 IoTDB，单机版部署文档可参考"),e("a",u,[i("文档"),s(a)]),i("，集群版部署文档可参考"),e("a",g,[i("文档"),s(a)]),i("。"),v]),b])}const y=n(r,[["render",B],["__file","Dual-Active-Deployment_timecho.html.vue"]]),A=JSON.parse('{"path":"/zh/UserGuide/latest/Deployment-and-Maintenance/Dual-Active-Deployment_timecho.html","title":"双活版部署","lang":"zh-CN","frontmatter":{"description":"双活版部署 什么是双活版？ 双活通常是指两个独立的单机(或集群)，实时进行镜像同步，它们的配置完全独立，可以同时接收外界的写入，每一个独立的单机(或集群)都可以将写入到自己的数据同步到另一个单机(或集群)中，两个单机(或集群)的数据可达到最终一致。 两个单机(或集群)可构成一个高可用组：当其中一个单机(或集群)停止服务时，另一个单机(或集群)不会受到影...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Dual-Active-Deployment_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Dual-Active-Deployment_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"双活版部署"}],["meta",{"property":"og:description","content":"双活版部署 什么是双活版？ 双活通常是指两个独立的单机(或集群)，实时进行镜像同步，它们的配置完全独立，可以同时接收外界的写入，每一个独立的单机(或集群)都可以将写入到自己的数据同步到另一个单机(或集群)中，两个单机(或集群)的数据可达到最终一致。 两个单机(或集群)可构成一个高可用组：当其中一个单机(或集群)停止服务时，另一个单机(或集群)不会受到影..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%8F%8C%E6%B4%BB%E5%90%8C%E6%AD%A5.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-31T03:30:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-31T03:30:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"双活版部署\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%8F%8C%E6%B4%BB%E5%90%8C%E6%AD%A5.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8F%8C%E6%B4%BB-A.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8F%8C%E6%B4%BB-B.png\\",\\"https://alioss.timecho.com/docs/img/show%20pipes-A.png\\",\\"https://alioss.timecho.com/docs/img/show%20pipes-B.png\\"],\\"dateModified\\":\\"2024-07-31T03:30:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"什么是双活版？","slug":"什么是双活版","link":"#什么是双活版","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[{"level":3,"title":"Step1：分别安装两套独立的 IoTDB","slug":"step1-分别安装两套独立的-iotdb","link":"#step1-分别安装两套独立的-iotdb","children":[]},{"level":3,"title":"Step2：在机器A上创建数据同步任务至机器B","slug":"step2-在机器a上创建数据同步任务至机器b","link":"#step2-在机器a上创建数据同步任务至机器b","children":[]},{"level":3,"title":"Step3：在机器B上创建数据同步任务至机器A","slug":"step3-在机器b上创建数据同步任务至机器a","link":"#step3-在机器b上创建数据同步任务至机器a","children":[]},{"level":3,"title":"Step4：验证部署","slug":"step4-验证部署","link":"#step4-验证部署","children":[]},{"level":3,"title":"Step5：停止双活版 IoTDB","slug":"step5-停止双活版-iotdb","link":"#step5-停止双活版-iotdb","children":[]}]}],"git":{"createdTime":1722396633000,"updatedTime":1722396633000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.37,"words":1310},"filePathRelative":"zh/UserGuide/latest/Deployment-and-Maintenance/Dual-Active-Deployment_timecho.md","localizedDate":"2024年7月31日","autoDesc":true}');export{y as comp,A as data};
