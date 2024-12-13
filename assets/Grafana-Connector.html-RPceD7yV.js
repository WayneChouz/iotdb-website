import{_ as n,c as e,b as s,o as t}from"./app-i6u37es5.js";const i={};function o(r,a){return t(),e("div",null,a[0]||(a[0]=[s(`<h1 id="grafana-iotdb" tabindex="-1"><a class="header-anchor" href="#grafana-iotdb"><span>Grafana(IoTDB)</span></a></h1><p>Grafana is an open source volume metrics monitoring and visualization tool, which can be used to display time series data and application runtime analysis. Grafana supports Graphite, InfluxDB and other major time series databases as data sources. IoTDB-Grafana-Connector is a connector which we developed to show time series data in IoTDB by reading data from IoTDB and sends to Grafana(<a href="https://grafana.com/" target="_blank" rel="noopener noreferrer">https://grafana.com/</a>). Before using this tool, make sure Grafana and IoTDB are correctly installed and started.</p><h2 id="installation-and-deployment" tabindex="-1"><a class="header-anchor" href="#installation-and-deployment"><span>Installation and deployment</span></a></h2><h3 id="install-grafana" tabindex="-1"><a class="header-anchor" href="#install-grafana"><span>Install Grafana</span></a></h3><ul><li>Download url: <a href="https://grafana.com/grafana/download" target="_blank" rel="noopener noreferrer">https://grafana.com/grafana/download</a></li><li>Version &gt;= 4.4.1</li></ul><h3 id="install-data-source-plugin" tabindex="-1"><a class="header-anchor" href="#install-data-source-plugin"><span>Install data source plugin</span></a></h3><ul><li>Plugin name: simple-json-datasource</li><li>Download url: <a href="https://github.com/grafana/simple-json-datasource" target="_blank" rel="noopener noreferrer">https://github.com/grafana/simple-json-datasource</a></li></ul><p>After downloading this plugin, use the grafana-cli tool to install SimpleJson from the commandline:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">grafana-cli plugins install grafana-simple-json-datasource</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Alternatively, manually download the .zip file and unpack it into grafana plugins directory.</p><ul><li><code>{grafana-install-directory}\\data\\plugins\\</code> (Windows)</li><li><code>/var/lib/grafana/plugins</code> (Linux)</li><li><code>/usr/local/var/lib/grafana/plugins</code>(Mac)</li></ul><p>Then you need to restart grafana server, then you can use browser to visit grafana.</p><p>If you see &quot;SimpleJson&quot; in &quot;Type&quot; of &quot;Add data source&quot; pages, then it is install successfully.</p><p>Or, if you meet following errors:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins.</span>
<span class="line">The following plugins are disabled and not shown in the list below:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Please try to find config file of grafana(eg. customer.ini in windows, and /etc/grafana/grafana.ini in linux), then add following configuration:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">allow_loading_unsigned_plugins = &quot;grafana-simple-json-datasource&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="start-grafana" tabindex="-1"><a class="header-anchor" href="#start-grafana"><span>Start Grafana</span></a></h3><p>If Unix is used, Grafana will start automatically after installing, or you can run <code>sudo service grafana-server start</code> command. See more information <a href="http://docs.grafana.org/installation/debian/" target="_blank" rel="noopener noreferrer">here</a>.</p><p>If Mac and <code>homebrew</code> are used to install Grafana, you can use <code>homebrew</code> to start Grafana.<br> First make sure homebrew/services is installed by running <code>brew tap homebrew/services</code>, then start Grafana using: <code>brew services start grafana</code>.<br> See more information <a href="http://docs.grafana.org/installation/mac/" target="_blank" rel="noopener noreferrer">here</a>.</p><p>If Windows is used, start Grafana by executing grafana-server.exe, located in the bin directory, preferably from the command line. See more information <a href="http://docs.grafana.org/installation/windows/" target="_blank" rel="noopener noreferrer">here</a>.</p><h2 id="iotdb-installation" tabindex="-1"><a class="header-anchor" href="#iotdb-installation"><span>IoTDB installation</span></a></h2><p>See <a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb</a></p><h2 id="iotdb-grafana-connector-installation" tabindex="-1"><a class="header-anchor" href="#iotdb-grafana-connector-installation"><span>IoTDB-Grafana-Connector installation</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> clone https://github.com/apache/iotdb.git</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="start-iotdb-grafana-connector" tabindex="-1"><a class="header-anchor" href="#start-iotdb-grafana-connector"><span>Start IoTDB-Grafana-Connector</span></a></h2><ul><li>Option one</li></ul><p>Import the entire project, after the maven dependency is installed, directly run<code>iotdb/grafana-connector/rc/main/java/org/apache/iotdb/web/grafana</code>directory<code> TsfileWebDemoApplication.java</code>, this grafana connector is developed by springboot</p><ul><li>Option two</li></ul><p>In <code>/grafana/target/</code>directory</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> iotdb</span>
<span class="line">mvn clean package <span class="token parameter variable">-pl</span> iotdb-connector/grafana-connector <span class="token parameter variable">-am</span> <span class="token parameter variable">-Dmaven.test.skip</span><span class="token operator">=</span>true</span>
<span class="line"><span class="token builtin class-name">cd</span> iotdb-connector/grafana-connector/target</span>
<span class="line"><span class="token function">java</span> <span class="token parameter variable">-jar</span> iotdb-grafana-connector-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>.war</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If following output is displayed, then iotdb-grafana-connector connector is successfully activated.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">$ <span class="token function">java</span> <span class="token parameter variable">-jar</span> iotdb-grafana-connector-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>.war</span>
<span class="line"></span>
<span class="line">  <span class="token builtin class-name">.</span>   ____          _            __ _ _</span>
<span class="line"> /<span class="token punctuation">\\</span><span class="token punctuation">\\</span> / ___<span class="token string">&#39;_ __ _ _(_)_ __  __ _ \\ \\ \\ \\</span>
<span class="line">( ( )\\___ | &#39;</span>_ <span class="token operator">|</span> <span class="token string">&#39;_| | &#39;</span>_ <span class="token punctuation">\\</span>/ _\` <span class="token operator">|</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span></span>
<span class="line"> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>/  ___<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">||</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span>  <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span></span>
<span class="line">  &#39;  <span class="token operator">|</span>____<span class="token operator">|</span> .__<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">\\</span>__, <span class="token operator">|</span> / / / /</span>
<span class="line"> <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>_<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">|</span>___/<span class="token operator">=</span>/_/_/_/</span>
<span class="line"> :: Spring Boot ::        <span class="token punctuation">(</span>v1.5.4.RELEASE<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">..</span>.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To configure properties, move the <code>grafana-connector/src/main/resources/application.properties</code> to the same directory as the war package (<code>grafana/target</code>)</p><h2 id="explore-in-grafana" tabindex="-1"><a class="header-anchor" href="#explore-in-grafana"><span>Explore in Grafana</span></a></h2><p>The default port of Grafana is 3000, see <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">http://localhost:3000/</a></p><p>Username and password are both &quot;admin&quot; by default.</p><h3 id="add-data-source" tabindex="-1"><a class="header-anchor" href="#add-data-source"><span>Add data source</span></a></h3><p>Select <code>Data Sources</code> and then <code>Add data source</code>, select <code>SimpleJson</code> in <code>Type</code> and <code>URL</code> is <a href="http://localhost:8888" target="_blank" rel="noopener noreferrer">http://localhost:8888</a>.<br> After that, make sure IoTDB has been started, click &quot;Save &amp; Test&quot;, and &quot;Data Source is working&quot; will be shown to indicate successful configuration.<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"></p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"><h3 id="design-in-dashboard" tabindex="-1"><a class="header-anchor" href="#design-in-dashboard"><span>Design in dashboard</span></a></h3><p>Add diagrams in dashboard and customize your query. See <a href="http://docs.grafana.org/guides/getting_started/" target="_blank" rel="noopener noreferrer">http://docs.grafana.org/guides/getting_started/</a></p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"><h2 id="config-grafana" tabindex="-1"><a class="header-anchor" href="#config-grafana"><span>config grafana</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># ip and port of IoTDB </span>
<span class="line">spring.datasource.url=jdbc:iotdb://127.0.0.1:6667/</span>
<span class="line">spring.datasource.username=root</span>
<span class="line">spring.datasource.password=root</span>
<span class="line">spring.datasource.driver-class-name=org.apache.iotdb.jdbc.IoTDBDriver</span>
<span class="line">server.port=8888</span>
<span class="line"># Use this value to set timestamp precision as &quot;ms&quot;, &quot;us&quot; or &quot;ns&quot;, which must to be same with the timestamp</span>
<span class="line"># precision of Apache IoTDB engine.</span>
<span class="line">timestamp_precision=ms</span>
<span class="line"></span>
<span class="line"># Use this value to set down sampling true/false</span>
<span class="line">isDownSampling=true</span>
<span class="line"># defaut sampling intervals</span>
<span class="line">interval=1m</span>
<span class="line"># aggregation function to use to downsampling the data (int, long, float, double)</span>
<span class="line"># COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MAX_VALUE, AVG, MIN_TIME, MIN_VALUE, NOW, SUM</span>
<span class="line">continuous_data_function=AVG</span>
<span class="line"># aggregation function to use to downsampling the data (boolean, string)</span>
<span class="line"># COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MIN_TIME, NOW</span>
<span class="line">discrete_data_function=LAST_VALUE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The specific configuration information of interval is as follows</p><p>&lt;1h: no sampling</p><p>1h~1d : intervals = 1m</p><p>1d~30d:intervals = 1h</p><p>&gt;30d：intervals = 1d</p><p>After configuration, please re-run war package</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">java -jar iotdb-grafana-connector-{version}.war</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,52)]))}const p=n(i,[["render",o],["__file","Grafana-Connector.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.3.0-2/Ecosystem-Integration/Grafana-Connector.html","title":"Grafana(IoTDB)","lang":"en-US","frontmatter":{"description":"Grafana(IoTDB) Grafana is an open source volume metrics monitoring and visualization tool, which can be used to display time series data and application runtime analysis. Grafan...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Ecosystem-Integration/Grafana-Connector.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Ecosystem-Integration/Grafana-Connector.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Grafana(IoTDB)"}],["meta",{"property":"og:description","content":"Grafana(IoTDB) Grafana is an open source volume metrics monitoring and visualization tool, which can be used to display time series data and application runtime analysis. Grafan..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Grafana(IoTDB)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Installation and deployment","slug":"installation-and-deployment","link":"#installation-and-deployment","children":[{"level":3,"title":"Install Grafana","slug":"install-grafana","link":"#install-grafana","children":[]},{"level":3,"title":"Install data source plugin","slug":"install-data-source-plugin","link":"#install-data-source-plugin","children":[]},{"level":3,"title":"Start Grafana","slug":"start-grafana","link":"#start-grafana","children":[]}]},{"level":2,"title":"IoTDB installation","slug":"iotdb-installation","link":"#iotdb-installation","children":[]},{"level":2,"title":"IoTDB-Grafana-Connector installation","slug":"iotdb-grafana-connector-installation","link":"#iotdb-grafana-connector-installation","children":[]},{"level":2,"title":"Start IoTDB-Grafana-Connector","slug":"start-iotdb-grafana-connector","link":"#start-iotdb-grafana-connector","children":[]},{"level":2,"title":"Explore in Grafana","slug":"explore-in-grafana","link":"#explore-in-grafana","children":[{"level":3,"title":"Add data source","slug":"add-data-source","link":"#add-data-source","children":[]},{"level":3,"title":"Design in dashboard","slug":"design-in-dashboard","link":"#design-in-dashboard","children":[]}]},{"level":2,"title":"config grafana","slug":"config-grafana","link":"#config-grafana","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.06,"words":918},"filePathRelative":"UserGuide/V1.3.0-2/Ecosystem-Integration/Grafana-Connector.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,c as data};
