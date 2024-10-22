import{_ as e,c as n,b as s,o as t}from"./app-D6rlonH6.js";const i={};function r(l,a){return t(),n("div",null,a[0]||(a[0]=[s(`<h1 id="系统集成" tabindex="-1"><a class="header-anchor" href="#系统集成"><span>系统集成</span></a></h1><h2 id="grafana-插件" tabindex="-1"><a class="header-anchor" href="#grafana-插件"><span>Grafana 插件</span></a></h2><p>Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。</p><p>在 IoTDB 项目中，我们开发了 Grafana 插件，该插件通过调用 IoTDB REST 服务来展现 IoTDB 中时序数据 ，提供了众多时序数据的可视化方法。Grafana 插件相较于 IoTDB-Grafana-Connector 连接器执行效率更高、支持的查询种类更多。只要在您部署环境允许的情况下，<em>我们都推荐直接使用 Grafana 插件而不使用 IoTDB-Grafana-Connector 连接器</em>。</p><h3 id="部署-grafana-插件" tabindex="-1"><a class="header-anchor" href="#部署-grafana-插件"><span>部署 Grafana 插件</span></a></h3><h4 id="安装-grafana" tabindex="-1"><a class="header-anchor" href="#安装-grafana"><span>安装 Grafana</span></a></h4><ul><li>Grafana 组件下载地址：<a href="https://grafana.com/grafana/download" target="_blank" rel="noopener noreferrer">https://grafana.com/grafana/download</a></li><li>版本 &gt;= 7.0.0</li></ul><h4 id="grafana-plugin-下载" tabindex="-1"><a class="header-anchor" href="#grafana-plugin-下载"><span>grafana-plugin 下载</span></a></h4><ul><li>插件名称: grafana-plugin</li><li>下载地址: <a href="https://github.com/apache/iotdb.git" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb.git</a></li></ul><p>执行下面的命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://github.com/apache/iotdb.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="grafana-plugin-编译" tabindex="-1"><a class="header-anchor" href="#grafana-plugin-编译"><span>grafana-plugin 编译</span></a></h4><h5 id="方案一" tabindex="-1"><a class="header-anchor" href="#方案一"><span>方案一</span></a></h5><p>我们需要编译 IoTDB 仓库 <code>grafana-plugin</code> 目录下的前端工程并生成 <code>dist</code> 目标目录，具体执行流程如下。</p><p>您可以采取下面任意一种编译方式：</p><ul><li>使用 maven 编译，在 <code>grafana-plugin</code> 目录下执行：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">mvn <span class="token function">install</span> package <span class="token parameter variable">-P</span> compile-grafana-plugin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>或使用 yarn 编译，在 <code>grafana-plugin</code> 目录下执行：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">yarn</span> <span class="token function">install</span></span>
<span class="line"><span class="token function">yarn</span> build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果编译成功，我们将看到生成的目标文件夹 <code>dist</code>，它包含了编译好的 Grafana 前端插件：</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana-plugin-build.png?raw=true"><h5 id="方案二" tabindex="-1"><a class="header-anchor" href="#方案二"><span>方案二</span></a></h5><p>我们也可以通过执行 IoTDB 项目的<strong>打包指令</strong>获取 <code>grafana-plugin </code> 的前端工程和其他配套的 IoTDB 可执行文件。</p><p>在 IoTDB 仓库的根目录下执行：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"> mvn clean package <span class="token parameter variable">-pl</span> distribution <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> compile-grafana-plugin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果编译成功，我们将看到 <code>distribution/target</code> 路径下包含了编译好的 Grafana 前端插件：</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/distribution.png?raw=true"><h4 id="grafana-plugin-插件安装" tabindex="-1"><a class="header-anchor" href="#grafana-plugin-插件安装"><span>grafana-plugin 插件安装</span></a></h4><ul><li><p>拷贝上述生成的前端工程目标文件夹到 Grafana 的插件目录中 <code>\${Grafana文件目录}\\data\\plugins\\</code>。如果没有此目录可以手动建或者启动grafana会自动建立，当然也可以修改plugins的位置,具体请查看下面的修改Grafana 的插件目录位置说明。</p></li><li><p>修改Grafana的配置文件：找到配置文件（<code>\${Grafana文件目录}\\conf\\defaults.ini</code>），并进行如下的修改：</p><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre><code><span class="line"><span class="token key attr-name">allow_loading_unsigned_plugins</span> <span class="token punctuation">=</span> <span class="token value attr-value">iotdb</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>修改Grafana 的插件目录位置:找到配置文件（<code>\${Grafana文件目录}\\conf\\defaults.ini</code>），并进行如下的修改：</p><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre><code><span class="line"><span class="token key attr-name">plugins</span> <span class="token punctuation">=</span> <span class="token value attr-value">data/plugins</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>如果 Grafana 服务已启动，则需要重启服务。<br> 更多详情，请点 <a href="https://grafana.com/docs/grafana/latest/plugins/installation/" target="_blank" rel="noopener noreferrer">这里</a></p></li></ul><h4 id="启动-grafana" tabindex="-1"><a class="header-anchor" href="#启动-grafana"><span>启动 Grafana</span></a></h4><p>进入 Grafana 的安装目录，使用以下命令启动 Grafana：</p><ul><li>Windows 系统：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">bin<span class="token punctuation">\\</span>grafana-server.exe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Linux 系统：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">sudo</span> <span class="token function">service</span> grafana-server start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>MacOS 系统：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">brew services start grafana</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>更多详情，请点 <a href="https://grafana.com/docs/grafana/latest/installation/" target="_blank" rel="noopener noreferrer">这里</a></p><h4 id="配置-iotdb-rest-服务" tabindex="-1"><a class="header-anchor" href="#配置-iotdb-rest-服务"><span>配置 IoTDB REST 服务</span></a></h4><p>进入 <code>{iotdb 目录}/conf</code>，打开 <code>iotdb-rest.properties</code> 文件，并作如下修改：</p><div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties" data-title="properties"><pre><code><span class="line"><span class="token comment"># Is the REST service enabled</span></span>
<span class="line"><span class="token key attr-name">enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># the binding port of the REST service</span></span>
<span class="line"><span class="token key attr-name">rest_service_port</span><span class="token punctuation">=</span><span class="token value attr-value">18080</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动（重启）IoTDB 使配置生效，此时 IoTDB REST 服务处于运行状态。</p><h3 id="使用-grafana-插件" tabindex="-1"><a class="header-anchor" href="#使用-grafana-插件"><span>使用 Grafana 插件</span></a></h3><h4 id="访问-grafana-dashboard" tabindex="-1"><a class="header-anchor" href="#访问-grafana-dashboard"><span>访问 Grafana dashboard</span></a></h4><p>Grafana 以网页的 dashboard 形式为您展示数据，在使用时请您打开浏览器，访问 <code>http://&lt;ip&gt;:&lt;port&gt;</code>。</p><p>注：IP 为您的 Grafana 所在的服务器 IP，Port 为 Grafana 的运行端口（默认 3000）。</p><p>在本地试用时，Grafana dashboard 的默认地址为 <code>http://localhost:3000/</code>。</p><p>默认登录的用户名和密码都是 <code>admin</code>。</p><h4 id="添加-iotdb-数据源" tabindex="-1"><a class="header-anchor" href="#添加-iotdb-数据源"><span>添加 IoTDB 数据源</span></a></h4><p>点击左侧的 <code>设置</code> 图标，选择 <code>Data Source</code> 选项，然后再点击 <code>Add data source</code>。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_2.png?raw=true"><p>选择 <code>Apache IoTDB</code> 数据源，<code>URL</code> 一栏填写 <code>http://&lt;ip&gt;:&lt;port&gt;</code>。</p><p>Ip 为您的 IoTDB 服务器所在的宿主机 IP，port 为 REST 服务的运行端口（默认 18080）。</p><p>输入 IoTDB 服务器的 username 和 password，点击 <code>Save &amp; Test</code>，出现 <code>Success</code> 则提示配置成功。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_3.png?raw=true"><h4 id="创建一个新的-panel" tabindex="-1"><a class="header-anchor" href="#创建一个新的-panel"><span>创建一个新的 Panel</span></a></h4><p>点击左侧的 <code>Dashboards</code> 图标，选择 <code>Manage</code>，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/manage.png?raw=true"><p>点击右上方的 <code>New Dashboard</code> 图标，选择 <code>Add an empty panel</code>，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/add-empty-panel.png?raw=true"><p>在 SELECT 输入框、FROM 输入框、WHERE输入框、CONTROL输入框中输入内容，其中 WHERE 和 CONTROL 输入框为非必填。</p><p>如果一个查询涉及多个表达式，我们可以点击 SELECT 输入框右侧的 <code>+</code> 来添加 SELECT 子句中的表达式，也可以点击 FROM 输入框右侧的 <code>+</code> 来添加路径前缀，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input.png?raw=true"><p>SELECT 输入框中的内容可以是时间序列的后缀，可以是函数或自定义函数，可以是算数表达式，也可以是它们的嵌套表达式。您还可以使用 as 子句来重命名需要显示的结果序列名字。</p><p>下面是 SELECT 输入框中一些合法的输入举例：</p><ul><li><code>s1</code></li><li><code>top_k(s1, &#39;k&#39;=&#39;1&#39;) as top</code></li><li><code>sin(s1) + cos(s1 + s2)</code></li><li><code>udf(s1) as &quot;中文别名&quot;</code></li></ul><p>FROM 输入框中的内容必须是时间序列的前缀路径，比如 <code>root.sg.d</code>。</p><p>WHERE 输入框为非必须填写项目，填写内容应当是查询的过滤条件，比如 <code>time &gt; 0</code> 或者 <code>s1 &lt; 1024 and s2 &gt; 1024</code>。</p><p>CONTROL 输入框为非必须填写项目，填写内容应当是控制查询类型、输出格式的特殊子句，下面是 CONTROL 输入框中一些合法的输入举例：</p><ul><li><code>group by ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)</code></li><li><code>group by ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)</code></li><li><code>GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)</code></li><li><code>GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)</code></li><li><code>group by ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), level=1</code></li><li><code>group by ([0, 20), 2ms, 3ms), level=1</code></li></ul><p>提示：为了避免OOM问题，不推荐使用select * from root.xx.** 这种语句在Grafana plugin中使用。</p><h4 id="变量与模板功能的支持" tabindex="-1"><a class="header-anchor" href="#变量与模板功能的支持"><span>变量与模板功能的支持</span></a></h4><p>本插件支持 Grafana 的变量与模板（ <a href="https://grafana.com/docs/grafana/v7.0/variables/%EF%BC%89%E5%8A%9F%E8%83%BD%E3%80%82" target="_blank" rel="noopener noreferrer">https://grafana.com/docs/grafana/v7.0/variables/）功能。</a></p><p>创建一个新的 Panel 后，点击右上角的设置按钮，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/setconf.png?raw=true"><p>选择 <code>Variables</code>，点击 <code>Add variable</code> ，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/addvaribles.png?raw=true"><p>输入 <code>Name</code>，<code>Label</code>，和 <code>Query</code>， 点击 <code>Update</code> 按钮，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput.png?raw=true"><p>应用 Variables，在 <code>grafana panel</code> 中输入变量点击 <code>save</code> 按钮，如下图所示</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/applyvariables.png?raw=true"><h3 id="更多" tabindex="-1"><a class="header-anchor" href="#更多"><span>更多</span></a></h3><p>更多关于 Grafana 操作详情可参看 Grafana 官方文档：<a href="http://docs.grafana.org/guides/getting_started/%E3%80%82" target="_blank" rel="noopener noreferrer">http://docs.grafana.org/guides/getting_started/。</a></p>`,84)]))}const d=e(i,[["render",r],["__file","Grafana-Plugin.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Ecosystem-Integration/Grafana-Plugin.html","title":"系统集成","lang":"zh-CN","frontmatter":{"description":"系统集成 Grafana 插件 Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。 在 IoTDB 项目中，我们开发了 Grafana 插件，该插件通过调用 IoTDB REST 服务来展现 IoTDB 中时序数据 ，提供了众多时序数据的可视化方法。Grafana 插件相较于 IoTDB-Grafana-Connec...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"系统集成"}],["meta",{"property":"og:description","content":"系统集成 Grafana 插件 Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。 在 IoTDB 项目中，我们开发了 Grafana 插件，该插件通过调用 IoTDB REST 服务来展现 IoTDB 中时序数据 ，提供了众多时序数据的可视化方法。Grafana 插件相较于 IoTDB-Grafana-Connec..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"系统集成\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Grafana 插件","slug":"grafana-插件","link":"#grafana-插件","children":[{"level":3,"title":"部署 Grafana 插件","slug":"部署-grafana-插件","link":"#部署-grafana-插件","children":[]},{"level":3,"title":"使用 Grafana 插件","slug":"使用-grafana-插件","link":"#使用-grafana-插件","children":[]},{"level":3,"title":"更多","slug":"更多","link":"#更多","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.45,"words":1934},"filePathRelative":"zh/UserGuide/V0.13.x/Ecosystem-Integration/Grafana-Plugin.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,p as data};
