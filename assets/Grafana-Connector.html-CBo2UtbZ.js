import{_ as n,c as s,b as e,o as t}from"./app-D6rlonH6.js";const r={};function i(l,a){return t(),s("div",null,a[0]||(a[0]=[e(`<h2 id="grafana-连接器" tabindex="-1"><a class="header-anchor" href="#grafana-连接器"><span>Grafana 连接器</span></a></h2><p>Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。Grafana 支持 Graphite，InfluxDB 等国际主流时序数据库作为数据源。在 IoTDB 项目中，我们开发了 Grafana 展现 IoTDB 中时序数据的连接器 IoTDB-Grafana-Connector，为您提供使用 Grafana 展示 IoTDB 数据库中的时序数据的可视化方法。</p><h3 id="grafana-的安装与部署" tabindex="-1"><a class="header-anchor" href="#grafana-的安装与部署"><span>Grafana 的安装与部署</span></a></h3><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h4><ul><li>Grafana 组件下载地址：<a href="https://grafana.com/grafana/download" target="_blank" rel="noopener noreferrer">https://grafana.com/grafana/download</a></li><li>版本 &gt;= 4.4.1</li></ul><h4 id="simple-json-datasource-数据源插件安装" tabindex="-1"><a class="header-anchor" href="#simple-json-datasource-数据源插件安装"><span>simple-json-datasource 数据源插件安装</span></a></h4><ul><li>插件名称: simple-json-datasource</li><li>下载地址: <a href="https://github.com/grafana/simple-json-datasource" target="_blank" rel="noopener noreferrer">https://github.com/grafana/simple-json-datasource</a></li></ul><h5 id="windows系统" tabindex="-1"><a class="header-anchor" href="#windows系统"><span>windows系统</span></a></h5><p>具体下载方法是：到Grafana的插件目录中：<code>{Grafana文件目录}\\data\\plugins\\</code>（Windows系统，启动Grafana后会自动创建<code>data\\plugins</code>目录）或<code>/var/lib/grafana/plugins</code> （Linux系统，plugins目录需要手动创建）或<code>/usr/local/var/lib/grafana/plugins</code>（MacOS系统，具体位置参看使用<code>brew install</code>安装Grafana后命令行给出的位置提示。</p><p>执行下面的命令：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; git clone https://github.com/grafana/simple-json-datasource.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h5 id="linux系统" tabindex="-1"><a class="header-anchor" href="#linux系统"><span>linux系统</span></a></h5><p>建议使用grafana-cli安装该插件，具体安装命令如下</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo grafana-cli plugins install grafana-simple-json-datasource</span>
<span class="line">sudo service grafana-server restart</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="后续操作" tabindex="-1"><a class="header-anchor" href="#后续操作"><span>后续操作</span></a></h5><p>然后重启Grafana服务器，在浏览器中登录Grafana，在“Add data source”页面中“Type”选项出现“SimpleJson”即为安装成功。</p><p>如果出现如下报错</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins.</span>
<span class="line">The following plugins are disabled and not shown in the list below:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>请找到相关的grafana的配置文件（例如windows下的customer.ini，linux下rpm安装后为/etc/grafana/grafana.ini），并进行如下的配置</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">allow_loading_unsigned_plugins = &quot;grafana-simple-json-datasource&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="启动-grafana" tabindex="-1"><a class="header-anchor" href="#启动-grafana"><span>启动 Grafana</span></a></h4><p>进入 Grafana 的安装目录，使用以下命令启动 Grafana：</p><ul><li>Windows 系统：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; bin\\grafana-server.exe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Linux 系统：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; sudo service grafana-server start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>MacOS 系统：</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Shell &gt; grafana-server --config=/usr/local/etc/grafana/grafana.ini --homepath /usr/local/share/grafana cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>更多安装详情，请点 <a href="https://grafana.com/docs/grafana/latest/installation/" target="_blank" rel="noopener noreferrer">这里</a></p><h3 id="iotdb-安装" tabindex="-1"><a class="header-anchor" href="#iotdb-安装"><span>IoTDB 安装</span></a></h3><p>参见 <a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb</a></p><h3 id="grafana-iotdb-connector-连接器安装" tabindex="-1"><a class="header-anchor" href="#grafana-iotdb-connector-连接器安装"><span>Grafana-IoTDB-Connector 连接器安装</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://github.com/apache/iotdb.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="启动-grafana-iotdb-connector" tabindex="-1"><a class="header-anchor" href="#启动-grafana-iotdb-connector"><span>启动 Grafana-IoTDB-Connector</span></a></h3><ul><li>方案一（适合开发者）</li></ul><p>导入整个项目，maven 依赖安装完后，直接运行<code>iotdb/grafana-connector/rc/main/java/org/apache/iotdb/web/grafana</code>目录下<code>TsfileWebDemoApplication.java</code>，这个 grafana 连接器采用 springboot 开发</p><ul><li>方案二（适合使用者）</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> iotdb</span>
<span class="line">mvn clean package <span class="token parameter variable">-pl</span> grafana-connector <span class="token parameter variable">-am</span> <span class="token parameter variable">-Dmaven.test.skip</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token builtin class-name">cd</span> grafana/target</span>
<span class="line"><span class="token function">java</span> <span class="token parameter variable">-jar</span> iotdb-grafana-connector-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>.war</span>
<span class="line">  <span class="token builtin class-name">.</span>   ____          _            __ _ _</span>
<span class="line"> /<span class="token punctuation">\\</span><span class="token punctuation">\\</span> / ___<span class="token string">&#39;_ __ _ _(_)_ __  __ _ \\ \\ \\ \\</span>
<span class="line">( ( )\\___ | &#39;</span>_ <span class="token operator">|</span> <span class="token string">&#39;_| | &#39;</span>_ <span class="token punctuation">\\</span>/ _\` <span class="token operator">|</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>/  ___<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">||</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span>  <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span></span>
<span class="line">  &#39;  <span class="token operator">|</span>____<span class="token operator">|</span> .__<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">\\</span>__, <span class="token operator">|</span> / / / /</span>
<span class="line"> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>_<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">|</span>___/<span class="token operator">=</span>/_/_/_/</span>
<span class="line"> :: Spring Boot ::        <span class="token punctuation">(</span>v1.5.4.RELEASE<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您需要配置属性，将<code>grafana/src/main/resources/application.properties</code>移动到 war 包同级目录下（<code>grafana/target</code>）</p><h3 id="使用-grafana" tabindex="-1"><a class="header-anchor" href="#使用-grafana"><span>使用 Grafana</span></a></h3><p>Grafana 以网页的 dashboard 形式为您展示数据，在使用时请您打开浏览器，访问 http://&lt;ip&gt;:&lt;port&gt;</p><p>默认地址为 <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">http://localhost:3000/</a></p><p>注：IP 为您的 Grafana 所在的服务器 IP，Port 为 Grafana 的运行端口（默认 3000）。默认登录的用户名和密码都是“admin”。</p><h4 id="添加-iotdb-数据源" tabindex="-1"><a class="header-anchor" href="#添加-iotdb-数据源"><span>添加 IoTDB 数据源</span></a></h4><p>点击左上角的“Grafana”图标，选择<code>Data Source</code>选项，然后再点击<code>Add data source</code>。<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"></p><p>在编辑数据源的时候，<code>Type</code>一栏选择<code>Simplejson</code>，<code>URL</code>一栏填写 http://&lt;ip&gt;:&lt;port&gt;，IP 为您的 IoTDB-Grafana-Connector 连接器所在的服务器 IP，Port 为运行端口（默认 8888）。之后确保 IoTDB 已经启动，点击“Save &amp; Test”，出现“Data Source is working”提示表示配置成功。<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"></p><h4 id="操作-grafana" tabindex="-1"><a class="header-anchor" href="#操作-grafana"><span>操作 Grafana</span></a></h4><p>进入 Grafana 可视化页面后，可以选择添加时间序列，如下图。您也可以按照 Grafana 官方文档进行相应的操作，详情可参看 Grafana 官方文档：<a href="http://docs.grafana.org/guides/getting_started/%E3%80%82" target="_blank" rel="noopener noreferrer">http://docs.grafana.org/guides/getting_started/。</a></p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"><h3 id="配置-grafana" tabindex="-1"><a class="header-anchor" href="#配置-grafana"><span>配置 grafana</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># IoTDB 的 IP 和端口</span>
<span class="line">spring.datasource.url=jdbc:iotdb://127.0.0.1:6667/</span>
<span class="line">spring.datasource.username=root</span>
<span class="line">spring.datasource.password=root</span>
<span class="line">spring.datasource.driver-class-name=org.apache.iotdb.jdbc.IoTDBDriver</span>
<span class="line">server.port=8888</span>
<span class="line"># Use this value to set timestamp precision as &quot;ms&quot;, &quot;us&quot; or &quot;ns&quot;, which must to be same with the timestamp</span>
<span class="line"># precision of Apache IoTDB engine.</span>
<span class="line">timestamp_precision=ms</span>
<span class="line"></span>
<span class="line"># 是否开启降采样</span>
<span class="line">isDownSampling=true</span>
<span class="line"># 默认采样 interval</span>
<span class="line">interval=1m</span>
<span class="line"># 用于对连续数据 (int, long, float, double) 进行降采样的聚合函数</span>
<span class="line"># COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MAX_VALUE, AVG, MIN_TIME, MIN_VALUE, NOW, SUM</span>
<span class="line">continuous_data_function=AVG</span>
<span class="line"># 用于对离散数据 (boolean, string) 进行降采样的聚合函数</span>
<span class="line"># COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MIN_TIME, NOW</span>
<span class="line">discrete_data_function=LAST_VALUE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 interval 具体配置信息如下</p><p>&lt;1h: no sampling</p><p>1h~1d : intervals = 1m</p><p>1d~30d:intervals = 1h</p><p>&gt;30d：intervals = 1d</p><p>配置完后，请重新运行 war 包</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">java -jar iotdb-grafana-connector-{version}.war</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,58)]))}const p=n(r,[["render",i],["__file","Grafana-Connector.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Connector.html","title":"","lang":"zh-CN","frontmatter":{"description":"Grafana 连接器 Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。Grafana 支持 Graphite，InfluxDB 等国际主流时序数据库作为数据源。在 IoTDB 项目中，我们开发了 Grafana 展现 IoTDB 中时序数据的连接器 IoTDB-Grafana-Connector，为您提供使用 G...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Connector.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Connector.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Grafana 连接器 Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。Grafana 支持 Graphite，InfluxDB 等国际主流时序数据库作为数据源。在 IoTDB 项目中，我们开发了 Grafana 展现 IoTDB 中时序数据的连接器 IoTDB-Grafana-Connector，为您提供使用 G..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Grafana 连接器","slug":"grafana-连接器","link":"#grafana-连接器","children":[{"level":3,"title":"Grafana 的安装与部署","slug":"grafana-的安装与部署","link":"#grafana-的安装与部署","children":[]},{"level":3,"title":"IoTDB 安装","slug":"iotdb-安装","link":"#iotdb-安装","children":[]},{"level":3,"title":"Grafana-IoTDB-Connector 连接器安装","slug":"grafana-iotdb-connector-连接器安装","link":"#grafana-iotdb-connector-连接器安装","children":[]},{"level":3,"title":"启动 Grafana-IoTDB-Connector","slug":"启动-grafana-iotdb-connector","link":"#启动-grafana-iotdb-connector","children":[]},{"level":3,"title":"使用 Grafana","slug":"使用-grafana","link":"#使用-grafana","children":[]},{"level":3,"title":"配置 grafana","slug":"配置-grafana","link":"#配置-grafana","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.15,"words":1245},"filePathRelative":"zh/UserGuide/V1.0.x/Ecosystem-Integration/Grafana-Connector.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,c as data};
