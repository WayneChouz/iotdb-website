import{_ as a,c as s,b as e,o as t}from"./app-D6rlonH6.js";const p={};function o(l,n){return t(),s("div",null,n[0]||(n[0]=[e(`<h2 id="zeppelin-iotdb" tabindex="-1"><a class="header-anchor" href="#zeppelin-iotdb"><span>Zeppelin-IoTDB</span></a></h2><h3 id="zeppelin-简介" tabindex="-1"><a class="header-anchor" href="#zeppelin-简介"><span>Zeppelin 简介</span></a></h3><p>Apache Zeppelin 是一个基于网页的交互式数据分析系统。用户可以通过 Zeppelin 连接数据源并使用 SQL、Scala 等进行交互式操作。操作可以保存为文档（类似于 Jupyter）。Zeppelin 支持多种数据源，包括 Spark、ElasticSearch、Cassandra 和 InfluxDB 等等。现在，IoTDB 已经支持使用 Zeppelin 进行操作。样例如下：</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png" alt="iotdb-note-snapshot" tabindex="0" loading="lazy"><figcaption>iotdb-note-snapshot</figcaption></figure><h3 id="zeppelin-iotdb-解释器" tabindex="-1"><a class="header-anchor" href="#zeppelin-iotdb-解释器"><span>Zeppelin-IoTDB 解释器</span></a></h3><h4 id="系统环境需求" tabindex="-1"><a class="header-anchor" href="#系统环境需求"><span>系统环境需求</span></a></h4><table><thead><tr><th style="text-align:center;">IoTDB 版本</th><th style="text-align:center;">Java 版本</th><th style="text-align:center;">Zeppelin 版本</th></tr></thead><tbody><tr><td style="text-align:center;">&gt;=<code>0.12.0</code></td><td style="text-align:center;">&gt;=<code>1.8.0_271</code></td><td style="text-align:center;"><code>&gt;=0.9.0</code></td></tr></tbody></table><p>安装 IoTDB：参考 <a href="https://iotdb.apache.org/zh/UserGuide/Master/QuickStart/QuickStart.html" target="_blank" rel="noopener noreferrer">快速上手</a>. 假设 IoTDB 安装在 <code>$IoTDB_HOME</code>.</p><p>安装 Zeppelin：</p><blockquote><p>方法 1 直接下载：下载 <a href="https://zeppelin.apache.org/download.html#" target="_blank" rel="noopener noreferrer">Zeppelin</a> 并解压二进制文件。推荐下载 <a href="http://www.apache.org/dyn/closer.cgi/zeppelin/zeppelin-0.9.0/zeppelin-0.9.0-bin-netinst.tgz" target="_blank" rel="noopener noreferrer">netinst</a> 二进制包，此包由于未编译不相关的 interpreter，因此大小相对较小。</p><p>方法 2 源码编译：参考 <a href="https://zeppelin.apache.org/docs/latest/setup/basics/how_to_build.html" target="_blank" rel="noopener noreferrer">从源码构建 Zeppelin</a> ，使用命令为 <code>mvn clean package -pl zeppelin-web,zeppelin-server -am -DskipTests</code>。</p></blockquote><p>假设 Zeppelin 安装在 <code>$Zeppelin_HOME</code>.</p><h4 id="编译解释器" tabindex="-1"><a class="header-anchor" href="#编译解释器"><span>编译解释器</span></a></h4><p>运行如下命令编译 IoTDB Zeppelin 解释器。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> <span class="token variable">$IoTDB_HOME</span></span>
<span class="line">mvn clean package <span class="token parameter variable">-pl</span> zeppelin-interpreter <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译后的解释器位于如下目录：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token variable">$IoTDB_HOME</span>/zeppelin-interpreter/target/zeppelin-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-SNAPSHOT-jar-with-dependencies.jar</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="安装解释器" tabindex="-1"><a class="header-anchor" href="#安装解释器"><span>安装解释器</span></a></h4><p>当你编译好了解释器，在 Zeppelin 的解释器目录下创建一个新的文件夹<code>iotdb</code>，并将 IoTDB 解释器放入其中。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> <span class="token variable">$IoTDB_HOME</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$Zeppelin_HOME</span>/interpreter/iotdb</span>
<span class="line"><span class="token function">cp</span> <span class="token variable">$IoTDB_HOME</span>/zeppelin-interpreter/target/zeppelin-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-SNAPSHOT-jar-with-dependencies.jar <span class="token variable">$Zeppelin_HOME</span>/interpreter/iotdb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改-zeppelin-配置" tabindex="-1"><a class="header-anchor" href="#修改-zeppelin-配置"><span>修改 Zeppelin 配置</span></a></h4><p>进入 <code>$Zeppelin_HOME/conf</code>，使用 template 创建 Zeppelin 配置文件：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cp</span> zeppelin-site.xml.template zeppelin-site.xml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>打开 zeppelin-site.xml 文件，将 <code>zeppelin.server.addr</code> 项修改为 <code>0.0.0.0</code></p><h4 id="启动-zeppelin-和-iotdb" tabindex="-1"><a class="header-anchor" href="#启动-zeppelin-和-iotdb"><span>启动 Zeppelin 和 IoTDB</span></a></h4><p>进入 <code>$Zeppelin_HOME</code> 并运行 Zeppelin：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Unix/OS X</span></span>
<span class="line"><span class="token operator">&gt;</span> ./bin/zeppelin-daemon.sh start</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Windows</span></span>
<span class="line"><span class="token operator">&gt;</span> .<span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>zeppelin.cmd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>进入 <code>$IoTDB_HOME</code> 并运行 IoTDB：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Unix/OS X</span></span>
<span class="line"><span class="token operator">&gt;</span> <span class="token function">nohup</span> sbin/start-server.sh <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span></span>
<span class="line">or</span>
<span class="line"><span class="token operator">&gt;</span> <span class="token function">nohup</span> sbin/start-server.sh <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>conf_path<span class="token operator">&gt;</span> <span class="token parameter variable">-rpc_port</span> <span class="token operator">&lt;</span>rpc_port<span class="token operator">&gt;</span> <span class="token operator">&gt;</span>/dev/null <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Windows</span></span>
<span class="line"><span class="token operator">&gt;</span> sbin<span class="token punctuation">\\</span>start-server.bat <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>conf_path<span class="token operator">&gt;</span> <span class="token parameter variable">-rpc_port</span> <span class="token operator">&lt;</span>rpc_port<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-zeppelin-iotdb-解释器" tabindex="-1"><a class="header-anchor" href="#使用-zeppelin-iotdb-解释器"><span>使用 Zeppelin-IoTDB 解释器</span></a></h3><p>当 Zeppelin 启动后，访问 <a href="http://127.0.0.1:8080/" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8080/</a></p><p>通过如下步骤创建一个新的笔记本页面：</p><ol><li>点击 <code>Create new node</code> 按钮</li><li>设置笔记本名</li><li>选择解释器为 iotdb</li></ol><p>现在可以开始使用 Zeppelin 操作 IoTDB 了。</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752945-5171a800-43a5-11eb-8614-53b3276a3ce2.png" alt="iotdb-create-note" tabindex="0" loading="lazy"><figcaption>iotdb-create-note</figcaption></figure><p>我们提供了一些简单的 SQL 来展示 Zeppelin-IoTDB 解释器的使用：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span><span class="token keyword">BOOLEAN</span><span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span>temperature <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span>hardware <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1.1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2.2</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3.3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4.4</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5.5</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span></span>
<span class="line"><span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01</span>
<span class="line"><span class="token keyword">WHERE</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">1</span></span>
<span class="line">	<span class="token operator">AND</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>样例如下：</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752948-52a2d500-43a5-11eb-9156-0c55667eb4cd.png" alt="iotdb-note-snapshot2" tabindex="0" loading="lazy"><figcaption>iotdb-note-snapshot2</figcaption></figure><p>用户也可以参考 <a href="https://zeppelin.apache.org/docs/0.9.0/usage/display_system/basic.html" target="_blank" rel="noopener noreferrer">[1]</a> 编写更丰富多彩的文档。</p><p>以上样例放置于 <code>$IoTDB_HOME/zeppelin-interpreter/Zeppelin-IoTDB-Demo.zpln</code></p><h3 id="解释器配置项" tabindex="-1"><a class="header-anchor" href="#解释器配置项"><span>解释器配置项</span></a></h3><p>进入页面 <a href="http://127.0.0.1:8080/#/interpreter" target="_blank" rel="noopener noreferrer">http://127.0.0.1:8080/#/interpreter</a> 并配置 IoTDB 的连接参数：</p><figure><img src="https://alioss.timecho.com/docs/img/github/102752940-50407b00-43a5-11eb-94fb-3e3be222183c.png" alt="iotdb-configuration" tabindex="0" loading="lazy"><figcaption>iotdb-configuration</figcaption></figure><p>可配置参数默认值和解释如下：</p><table><thead><tr><th>属性</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>iotdb.host</td><td>127.0.0.1</td><td>IoTDB 主机名</td></tr><tr><td>iotdb.port</td><td>6667</td><td>IoTDB 端口</td></tr><tr><td>iotdb.username</td><td>root</td><td>用户名</td></tr><tr><td>iotdb.password</td><td>root</td><td>密码</td></tr><tr><td>iotdb.fetchSize</td><td>10000</td><td>查询结果分批次返回时，每一批数量</td></tr><tr><td>iotdb.zoneId</td><td></td><td>时区 ID</td></tr><tr><td>iotdb.enable.rpc.compression</td><td>FALSE</td><td>是否允许 rpc 压缩</td></tr><tr><td>iotdb.time.display.type</td><td>default</td><td>时间戳的展示格式</td></tr></tbody></table>`,45)]))}const c=a(p,[["render",o],["__file","Zeppelin-IoTDB.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Ecosystem-Integration/Zeppelin-IoTDB.html","title":"","lang":"zh-CN","frontmatter":{"description":"Zeppelin-IoTDB Zeppelin 简介 Apache Zeppelin 是一个基于网页的交互式数据分析系统。用户可以通过 Zeppelin 连接数据源并使用 SQL、Scala 等进行交互式操作。操作可以保存为文档（类似于 Jupyter）。Zeppelin 支持多种数据源，包括 Spark、ElasticSearch、Cassandra...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Ecosystem-Integration/Zeppelin-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Ecosystem-Integration/Zeppelin-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Zeppelin-IoTDB Zeppelin 简介 Apache Zeppelin 是一个基于网页的交互式数据分析系统。用户可以通过 Zeppelin 连接数据源并使用 SQL、Scala 等进行交互式操作。操作可以保存为文档（类似于 Jupyter）。Zeppelin 支持多种数据源，包括 Spark、ElasticSearch、Cassandra..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/github/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-16T03:27:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-16T03:27:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/github/102752947-520a3e80-43a5-11eb-8fb1-8fac471c8c7e.png\\",\\"https://alioss.timecho.com/docs/img/github/102752945-5171a800-43a5-11eb-8614-53b3276a3ce2.png\\",\\"https://alioss.timecho.com/docs/img/github/102752948-52a2d500-43a5-11eb-9156-0c55667eb4cd.png\\",\\"https://alioss.timecho.com/docs/img/github/102752940-50407b00-43a5-11eb-94fb-3e3be222183c.png\\"],\\"dateModified\\":\\"2024-08-16T03:27:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Zeppelin-IoTDB","slug":"zeppelin-iotdb","link":"#zeppelin-iotdb","children":[{"level":3,"title":"Zeppelin 简介","slug":"zeppelin-简介","link":"#zeppelin-简介","children":[]},{"level":3,"title":"Zeppelin-IoTDB 解释器","slug":"zeppelin-iotdb-解释器","link":"#zeppelin-iotdb-解释器","children":[]},{"level":3,"title":"使用 Zeppelin-IoTDB 解释器","slug":"使用-zeppelin-iotdb-解释器","link":"#使用-zeppelin-iotdb-解释器","children":[]},{"level":3,"title":"解释器配置项","slug":"解释器配置项","link":"#解释器配置项","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1723778874000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Peng Junzhi","email":"78788603+Pengzna@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.11,"words":932},"filePathRelative":"zh/UserGuide/V1.0.x/Ecosystem-Integration/Zeppelin-IoTDB.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,r as data};
