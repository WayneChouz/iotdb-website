import{_ as t,c as a,b as o,o as i}from"./app-Cy-L1ril.js";const r={};function s(l,e){return i(),a("div",null,e[0]||(e[0]=[o(`<h2 id="jmx-工具" tabindex="-1"><a class="header-anchor" href="#jmx-工具"><span>JMX 工具</span></a></h2><p>Java VisualVM 提供了一个可视化的界面，用于查看 Java 应用程序在 Java 虚拟机（JVM）上运行的详细信息，并对这些应用程序进行故障排除和分析。</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3><p>第一步：获得 IoTDB-server。</p><p>第二步：编辑配置文件</p><ul><li><p>IoTDB 在本地<br> 查看<code>$IOTDB_HOME/conf/jmx.password</code>，使用默认用户或者在此添加新用户<br> 若新增用户，编辑<code>$IOTDB_HOME/conf/jmx.access</code>，添加新增用户权限</p></li><li><p>IoTDB 不在本地<br> 编辑<code>$IOTDB_HOME/conf/datanode-env.sh</code><br> 修改以下参数：</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">JMX_LOCAL=&quot;false&quot;</span>
<span class="line">JMX_IP=&quot;the_real_iotdb_server_ip&quot;  # 填写实际 IoTDB 的 IP 地址</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看<code>$IOTDB_HOME/conf/jmx.password</code>，使用默认用户或者在此添加新用户<br> 若新增用户，编辑<code>$IOTDB_HOME/conf/jmx.access</code>，添加新增用户权限</p><p>第三步：启动 IoTDB-server。</p><p>第四步：使用 jvisualvm</p><ol><li><p>确保安装 jdk 8。jdk 8 以上需要 <a href="https://visualvm.github.io/download.html" target="_blank" rel="noopener noreferrer">下载 visualvm</a></p></li><li><p>打开 jvisualvm</p></li><li><p>在左侧导航栏空白处右键 -&gt; 添加 JMX 连接<br><img style="width:100%;max-width:300px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/81462914-5738c580-91e8-11ea-94d1-4ff6607e7e2c.png"></p></li><li><p>填写信息进行登录，按下图分别填写，注意需要勾选”不要求 SSL 连接”。<br> 例如：<br> 连接：192.168.130.15:31999<br> 用户名：iotdb<br> 口令：passw!d<br><img style="width:100%;max-width:300px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/81462909-53a53e80-91e8-11ea-98df-0012380da0b2.png"></p></li></ol>`,11)]))}const c=t(r,[["render",s],["__file","JMX-Tool.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Maintenance-Tools/JMX-Tool.html","title":"","lang":"zh-CN","frontmatter":{"description":"JMX 工具 Java VisualVM 提供了一个可视化的界面，用于查看 Java 应用程序在 Java 虚拟机（JVM）上运行的详细信息，并对这些应用程序进行故障排除和分析。 使用 第一步：获得 IoTDB-server。 第二步：编辑配置文件 IoTDB 在本地 查看$IOTDB_HOME/conf/jmx.password，使用默认用户或者在此...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Maintenance-Tools/JMX-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Maintenance-Tools/JMX-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"JMX 工具 Java VisualVM 提供了一个可视化的界面，用于查看 Java 应用程序在 Java 虚拟机（JVM）上运行的详细信息，并对这些应用程序进行故障排除和分析。 使用 第一步：获得 IoTDB-server。 第二步：编辑配置文件 IoTDB 在本地 查看$IOTDB_HOME/conf/jmx.password，使用默认用户或者在此..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"JMX 工具","slug":"jmx-工具","link":"#jmx-工具","children":[{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.45,"words":434},"filePathRelative":"zh/UserGuide/V1.1.x/Maintenance-Tools/JMX-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,p as data};
