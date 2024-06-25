import{_ as o,r as i,o as r,c as l,b as a,d as n,a as t,e as s}from"./app-vSSc7VXH.js";const c={},d=a("h1",{id:"grafana-iotdb-connector",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#grafana-iotdb-connector"},[a("span",null,"Grafana-IoTDB-Connector")])],-1),p={href:"https://grafana.com/",target:"_blank",rel:"noopener noreferrer"},u=a("h2",{id:"installation-and-deployment",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#installation-and-deployment"},[a("span",null,"Installation and deployment")])],-1),g=a("h3",{id:"install-grafana",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#install-grafana"},[a("span",null,"Install Grafana")])],-1),h={href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"},m=a("li",null,"Version >= 4.4.1",-1),f=a("h3",{id:"install-data-source-plugin",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#install-data-source-plugin"},[a("span",null,"Install data source plugin")])],-1),b=a("li",null,"Plugin name: simple-json-datasource",-1),_={href:"https://github.com/grafana/simple-json-datasource",target:"_blank",rel:"noopener noreferrer"},v=s(`<p>After downloading this plugin, use the grafana-cli tool to install SimpleJson from the commandline:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>grafana-cli plugins install grafana-simple-json-datasource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Alternatively, manually download the .zip file and unpack it into grafana plugins directory.</p><ul><li><code>{grafana-install-directory}\\data\\plugins\\</code> (Windows)</li><li><code>/var/lib/grafana/plugins</code> (Linux)</li><li><code>/usr/local/var/lib/grafana/plugins</code>(Mac)</li></ul><p>Then you need to restart grafana server, then you can use browser to visit grafana.</p><p>If you see &quot;SimpleJson&quot; in &quot;Type&quot; of &quot;Add data source&quot; pages, then it is install successfully.</p><p>Or, if you meet following errors:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins.
The following plugins are disabled and not shown in the list below:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Please try to find config file of grafana(eg. customer.ini in windows, and /etc/grafana/grafana.ini in linux), then add following configuration:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>allow_loading_unsigned_plugins = &quot;grafana-simple-json-datasource&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="start-grafana" tabindex="-1"><a class="header-anchor" href="#start-grafana"><span>Start Grafana</span></a></h3>`,11),k=a("code",null,"sudo service grafana-server start",-1),x={href:"http://docs.grafana.org/installation/debian/",target:"_blank",rel:"noopener noreferrer"},y=a("code",null,"homebrew",-1),w=a("code",null,"homebrew",-1),I=a("br",null,null,-1),T=a("code",null,"brew tap homebrew/services",-1),G=a("code",null,"brew services start grafana",-1),D=a("br",null,null,-1),S={href:"http://docs.grafana.org/installation/mac/",target:"_blank",rel:"noopener noreferrer"},A={href:"http://docs.grafana.org/installation/windows/",target:"_blank",rel:"noopener noreferrer"},B=a("h2",{id:"iotdb-installation",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#iotdb-installation"},[a("span",null,"IoTDB installation")])],-1),E={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},C=s(`<h2 id="iotdb-grafana-connector-installation" tabindex="-1"><a class="header-anchor" href="#iotdb-grafana-connector-installation"><span>IoTDB-Grafana-Connector installation</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="start-iotdb-grafana-connector" tabindex="-1"><a class="header-anchor" href="#start-iotdb-grafana-connector"><span>Start IoTDB-Grafana-Connector</span></a></h2><ul><li>Option one</li></ul><p>Import the entire project, after the maven dependency is installed, directly run<code>iotdb/grafana-connector/rc/main/java/org/apache/iotdb/web/grafana</code>directory<code> TsfileWebDemoApplication.java</code>, this grafana connector is developed by springboot</p><ul><li>Option two</li></ul><p>In <code>/grafana/target/</code>directory</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> iotdb
mvn clean package <span class="token parameter variable">-pl</span> iotdb-connector/grafana-connector <span class="token parameter variable">-am</span> <span class="token parameter variable">-Dmaven.test.skip</span><span class="token operator">=</span>true
<span class="token builtin class-name">cd</span> iotdb-connector/grafana-connector/target
<span class="token function">java</span> <span class="token parameter variable">-jar</span> iotdb-grafana-connector-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If following output is displayed, then iotdb-grafana-connector connector is successfully activated.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">java</span> <span class="token parameter variable">-jar</span> iotdb-grafana-connector-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>.war

  <span class="token builtin class-name">.</span>   ____          _            __ _ _
 /<span class="token punctuation">\\</span><span class="token punctuation">\\</span> / ___<span class="token string">&#39;_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | &#39;</span>_ <span class="token operator">|</span> <span class="token string">&#39;_| | &#39;</span>_ <span class="token punctuation">\\</span>/ _\` <span class="token operator">|</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span>
 <span class="token punctuation">\\</span><span class="token punctuation">\\</span>/  ___<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">||</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span>  <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span>
  &#39;  <span class="token operator">|</span>____<span class="token operator">|</span> .__<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">\\</span>__, <span class="token operator">|</span> / / / /
 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>_<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">|</span>___/<span class="token operator">=</span>/_/_/_/
 :: Spring Boot ::        <span class="token punctuation">(</span>v1.5.4.RELEASE<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To configure properties, move the <code>grafana-connector/src/main/resources/application.properties</code> to the same directory as the war package (<code>grafana/target</code>)</p><h2 id="explore-in-grafana" tabindex="-1"><a class="header-anchor" href="#explore-in-grafana"><span>Explore in Grafana</span></a></h2>`,12),U={href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"},j=a("p",null,'Username and password are both "admin" by default.',-1),L=a("h3",{id:"add-data-source",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#add-data-source"},[a("span",null,"Add data source")])],-1),q=a("code",null,"Data Sources",-1),M=a("code",null,"Add data source",-1),V=a("code",null,"SimpleJson",-1),N=a("code",null,"Type",-1),z=a("code",null,"URL",-1),O={href:"http://localhost:8888",target:"_blank",rel:"noopener noreferrer"},W=a("br",null,null,-1),J=a("br",null,null,-1),R=a("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/github/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"},null,-1),F=a("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/github/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"},null,-1),P=a("h3",{id:"design-in-dashboard",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#design-in-dashboard"},[a("span",null,"Design in dashboard")])],-1),X={href:"http://docs.grafana.org/guides/getting_started/",target:"_blank",rel:"noopener noreferrer"},Z=s(`<img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"><h2 id="config-grafana" tabindex="-1"><a class="header-anchor" href="#config-grafana"><span>config grafana</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># ip and port of IoTDB 
spring.datasource.url=jdbc:iotdb://127.0.0.1:6667/
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=org.apache.iotdb.jdbc.IoTDBDriver
server.port=8888
# Use this value to set timestamp precision as &quot;ms&quot;, &quot;us&quot; or &quot;ns&quot;, which must to be same with the timestamp
# precision of Apache IoTDB engine.
timestamp_precision=ms

# Use this value to set down sampling true/false
isDownSampling=true
# defaut sampling intervals
interval=1m
# aggregation function to use to downsampling the data (int, long, float, double)
# COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MAX_VALUE, AVG, MIN_TIME, MIN_VALUE, NOW, SUM
continuous_data_function=AVG
# aggregation function to use to downsampling the data (boolean, string)
# COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MIN_TIME, NOW
discrete_data_function=LAST_VALUE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The specific configuration information of interval is as follows</p><p>&lt;1h: no sampling</p><p>1h~1d : intervals = 1m</p><p>1d~30d:intervals = 1h</p><p>&gt;30d：intervals = 1d</p><p>After configuration, please re-run war package</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>java -jar iotdb-grafana-connector-{version}.war
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function $(H,K){const e=i("ExternalLinkIcon");return r(),l("div",null,[d,a("p",null,[n("Grafana is an open source volume metrics monitoring and visualization tool, which can be used to display time series data and application runtime analysis. Grafana supports Graphite, InfluxDB and other major time series databases as data sources. IoTDB-Grafana-Connector is a connector which we developed to show time series data in IoTDB by reading data from IoTDB and sends to Grafana("),a("a",p,[n("https://grafana.com/"),t(e)]),n("). Before using this tool, make sure Grafana and IoTDB are correctly installed and started.")]),u,g,a("ul",null,[a("li",null,[n("Download url: "),a("a",h,[n("https://grafana.com/grafana/download"),t(e)])]),m]),f,a("ul",null,[b,a("li",null,[n("Download url: "),a("a",_,[n("https://github.com/grafana/simple-json-datasource"),t(e)])])]),v,a("p",null,[n("If Unix is used, Grafana will start automatically after installing, or you can run "),k,n(" command. See more information "),a("a",x,[n("here"),t(e)]),n(".")]),a("p",null,[n("If Mac and "),y,n(" are used to install Grafana, you can use "),w,n(" to start Grafana."),I,n(" First make sure homebrew/services is installed by running "),T,n(", then start Grafana using: "),G,n("."),D,n(" See more information "),a("a",S,[n("here"),t(e)]),n(".")]),a("p",null,[n("If Windows is used, start Grafana by executing grafana-server.exe, located in the bin directory, preferably from the command line. See more information "),a("a",A,[n("here"),t(e)]),n(".")]),B,a("p",null,[n("See "),a("a",E,[n("https://github.com/apache/iotdb"),t(e)])]),C,a("p",null,[n("The default port of Grafana is 3000, see "),a("a",U,[n("http://localhost:3000/"),t(e)])]),j,L,a("p",null,[n("Select "),q,n(" and then "),M,n(", select "),V,n(" in "),N,n(" and "),z,n(" is "),a("a",O,[n("http://localhost:8888"),t(e)]),n("."),W,n(' After that, make sure IoTDB has been started, click "Save & Test", and "Data Source is working" will be shown to indicate successful configuration.'),J,R]),F,P,a("p",null,[n("Add diagrams in dashboard and customize your query. See "),a("a",X,[n("http://docs.grafana.org/guides/getting_started/"),t(e)])]),Z])}const Y=o(c,[["render",$],["__file","Grafana-Connector.html.vue"]]),aa=JSON.parse('{"path":"/UserGuide/latest/Ecosystem-Integration/Grafana-Connector.html","title":"Grafana-IoTDB-Connector","lang":"en-US","frontmatter":{"description":"Grafana-IoTDB-Connector Grafana is an open source volume metrics monitoring and visualization tool, which can be used to display time series data and application runtime analysi...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Ecosystem-Integration/Grafana-Connector.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Ecosystem-Integration/Grafana-Connector.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Grafana-IoTDB-Connector"}],["meta",{"property":"og:description","content":"Grafana-IoTDB-Connector Grafana is an open source volume metrics monitoring and visualization tool, which can be used to display time series data and application runtime analysi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-17T06:56:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-17T06:56:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Grafana-IoTDB-Connector\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-17T06:56:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Installation and deployment","slug":"installation-and-deployment","link":"#installation-and-deployment","children":[{"level":3,"title":"Install Grafana","slug":"install-grafana","link":"#install-grafana","children":[]},{"level":3,"title":"Install data source plugin","slug":"install-data-source-plugin","link":"#install-data-source-plugin","children":[]},{"level":3,"title":"Start Grafana","slug":"start-grafana","link":"#start-grafana","children":[]}]},{"level":2,"title":"IoTDB installation","slug":"iotdb-installation","link":"#iotdb-installation","children":[]},{"level":2,"title":"IoTDB-Grafana-Connector installation","slug":"iotdb-grafana-connector-installation","link":"#iotdb-grafana-connector-installation","children":[]},{"level":2,"title":"Start IoTDB-Grafana-Connector","slug":"start-iotdb-grafana-connector","link":"#start-iotdb-grafana-connector","children":[]},{"level":2,"title":"Explore in Grafana","slug":"explore-in-grafana","link":"#explore-in-grafana","children":[{"level":3,"title":"Add data source","slug":"add-data-source","link":"#add-data-source","children":[]},{"level":3,"title":"Design in dashboard","slug":"design-in-dashboard","link":"#design-in-dashboard","children":[]}]},{"level":2,"title":"config grafana","slug":"config-grafana","link":"#config-grafana","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1705474606000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.06,"words":919},"filePathRelative":"UserGuide/latest/Ecosystem-Integration/Grafana-Connector.md","localizedDate":"July 10, 2023","autoDesc":true}');export{Y as comp,aa as data};
