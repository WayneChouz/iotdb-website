import{_ as o,r as i,o as r,c as l,b as a,d as n,a as t,e as s}from"./app-BZ7vU6A9.js";const c={},d=a("h1",{id:"ecosystem-integration",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ecosystem-integration"},[a("span",null,"Ecosystem Integration")])],-1),p=a("h2",{id:"grafana-iotdb-connector",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#grafana-iotdb-connector"},[a("span",null,"Grafana-IoTDB-Connector")])],-1),u={href:"https://grafana.com/",target:"_blank",rel:"noopener noreferrer"},h=a("h3",{id:"installation-and-deployment",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#installation-and-deployment"},[a("span",null,"Installation and deployment")])],-1),g=a("h4",{id:"install-grafana",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#install-grafana"},[a("span",null,"Install Grafana")])],-1),m={href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"},f=a("li",null,"Version >= 4.4.1",-1),b=a("h4",{id:"install-data-source-plugin",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#install-data-source-plugin"},[a("span",null,"Install data source plugin")])],-1),_=a("li",null,"Plugin name: simple-json-datasource",-1),v={href:"https://github.com/grafana/simple-json-datasource",target:"_blank",rel:"noopener noreferrer"},k=s(`<p>After downloading this plugin, use the grafana-cli tool to install SimpleJson from the commandline:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>grafana-cli plugins install grafana-simple-json-datasource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Alternatively, manually download the .zip file and unpack it into grafana plugins directory.</p><ul><li><code>{grafana-install-directory}\\data\\plugins\\</code> (Windows)</li><li><code>/var/lib/grafana/plugins</code> (Linux)</li><li><code>/usr/local/var/lib/grafana/plugins</code>(Mac)</li></ul><p>Then you need to restart grafana server, then you can use browser to visit grafana.</p><p>If you see &quot;SimpleJson&quot; in &quot;Type&quot; of &quot;Add data source&quot; pages, then it is install successfully.</p><p>Or, if you meet following errors:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins.
The following plugins are disabled and not shown in the list below:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Please try to find config file of grafana(eg. customer.ini in windows, and /etc/grafana/grafana.ini in linux), then add following configuration:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>allow_loading_unsigned_plugins = &quot;grafana-simple-json-datasource&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="start-grafana" tabindex="-1"><a class="header-anchor" href="#start-grafana"><span>Start Grafana</span></a></h4>`,11),x=a("code",null,"sudo service grafana-server start",-1),y={href:"http://docs.grafana.org/installation/debian/",target:"_blank",rel:"noopener noreferrer"},w=a("code",null,"homebrew",-1),I=a("code",null,"homebrew",-1),T=a("br",null,null,-1),G=a("code",null,"brew tap homebrew/services",-1),D=a("code",null,"brew services start grafana",-1),E=a("br",null,null,-1),S={href:"http://docs.grafana.org/installation/mac/",target:"_blank",rel:"noopener noreferrer"},A={href:"http://docs.grafana.org/installation/windows/",target:"_blank",rel:"noopener noreferrer"},B=a("h3",{id:"iotdb-installation",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#iotdb-installation"},[a("span",null,"IoTDB installation")])],-1),U={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},C=s(`<h3 id="iotdb-grafana-connector-installation" tabindex="-1"><a class="header-anchor" href="#iotdb-grafana-connector-installation"><span>IoTDB-Grafana-Connector installation</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="start-iotdb-grafana-connector" tabindex="-1"><a class="header-anchor" href="#start-iotdb-grafana-connector"><span>Start IoTDB-Grafana-Connector</span></a></h3><ul><li>Option one</li></ul><p>Import the entire project, after the maven dependency is installed, directly run<code>iotdb/grafana-connector/rc/main/java/org/apache/iotdb/web/grafana</code>directory<code> TsfileWebDemoApplication.java</code>, this grafana connector is developed by springboot</p><ul><li>Option two</li></ul><p>In <code>/grafana/target/</code>directory</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> iotdb
mvn clean package <span class="token parameter variable">-pl</span> grafana-connector <span class="token parameter variable">-am</span> <span class="token parameter variable">-Dmaven.test.skip</span><span class="token operator">=</span>true
<span class="token builtin class-name">cd</span> grafana/target
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To configure properties, move the <code>grafana-connector/src/main/resources/application.properties</code> to the same directory as the war package (<code>grafana/target</code>)</p><h3 id="explore-in-grafana" tabindex="-1"><a class="header-anchor" href="#explore-in-grafana"><span>Explore in Grafana</span></a></h3>`,12),j={href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"},V=a("p",null,'Username and password are both "admin" by default.',-1),L=a("h4",{id:"add-data-source",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#add-data-source"},[a("span",null,"Add data source")])],-1),q=a("code",null,"Data Sources",-1),M=a("code",null,"Add data source",-1),N=a("code",null,"SimpleJson",-1),z=a("code",null,"Type",-1),O=a("code",null,"URL",-1),W={href:"http://localhost:8888",target:"_blank",rel:"noopener noreferrer"},J=a("br",null,null,-1),R=a("br",null,null,-1),F=a("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/github/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"},null,-1),P=a("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/github/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"},null,-1),X=a("h4",{id:"design-in-dashboard",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#design-in-dashboard"},[a("span",null,"Design in dashboard")])],-1),Z={href:"http://docs.grafana.org/guides/getting_started/",target:"_blank",rel:"noopener noreferrer"},$=s(`<img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"><h3 id="config-grafana" tabindex="-1"><a class="header-anchor" href="#config-grafana"><span>config grafana</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># ip and port of IoTDB 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10);function H(K,Q){const e=i("ExternalLinkIcon");return r(),l("div",null,[d,p,a("p",null,[n("Grafana is an open source volume metrics monitoring and visualization tool, which can be used to display time series data and application runtime analysis. Grafana supports Graphite, InfluxDB and other major time series databases as data sources. IoTDB-Grafana-Connector is a connector which we developed to show time series data in IoTDB by reading data from IoTDB and sends to Grafana("),a("a",u,[n("https://grafana.com/"),t(e)]),n("). Before using this tool, make sure Grafana and IoTDB are correctly installed and started.")]),h,g,a("ul",null,[a("li",null,[n("Download url: "),a("a",m,[n("https://grafana.com/grafana/download"),t(e)])]),f]),b,a("ul",null,[_,a("li",null,[n("Download url: "),a("a",v,[n("https://github.com/grafana/simple-json-datasource"),t(e)])])]),k,a("p",null,[n("If Unix is used, Grafana will start automatically after installing, or you can run "),x,n(" command. See more information "),a("a",y,[n("here"),t(e)]),n(".")]),a("p",null,[n("If Mac and "),w,n(" are used to install Grafana, you can use "),I,n(" to start Grafana."),T,n(" First make sure homebrew/services is installed by running "),G,n(", then start Grafana using: "),D,n("."),E,n(" See more information "),a("a",S,[n("here"),t(e)]),n(".")]),a("p",null,[n("If Windows is used, start Grafana by executing grafana-server.exe, located in the bin directory, preferably from the command line. See more information "),a("a",A,[n("here"),t(e)]),n(".")]),B,a("p",null,[n("See "),a("a",U,[n("https://github.com/apache/iotdb"),t(e)])]),C,a("p",null,[n("The default port of Grafana is 3000, see "),a("a",j,[n("http://localhost:3000/"),t(e)])]),V,L,a("p",null,[n("Select "),q,n(" and then "),M,n(", select "),N,n(" in "),z,n(" and "),O,n(" is "),a("a",W,[n("http://localhost:8888"),t(e)]),n("."),J,n(' After that, make sure IoTDB has been started, click "Save & Test", and "Data Source is working" will be shown to indicate successful configuration.'),R,F]),P,X,a("p",null,[n("Add diagrams in dashboard and customize your query. See "),a("a",Z,[n("http://docs.grafana.org/guides/getting_started/"),t(e)])]),$])}const aa=o(c,[["render",H],["__file","Grafana-Connector.html.vue"]]),na=JSON.parse('{"path":"/UserGuide/V1.1.x/Ecosystem-Integration/Grafana-Connector.html","title":"Ecosystem Integration","lang":"en-US","frontmatter":{"description":"Ecosystem Integration Grafana-IoTDB-Connector Grafana is an open source volume metrics monitoring and visualization tool, which can be used to display time series data and appli...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Ecosystem-Integration/Grafana-Connector.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Ecosystem-Integration/Grafana-Connector.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Ecosystem Integration"}],["meta",{"property":"og:description","content":"Ecosystem Integration Grafana-IoTDB-Connector Grafana is an open source volume metrics monitoring and visualization tool, which can be used to display time series data and appli..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ecosystem Integration\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Grafana-IoTDB-Connector","slug":"grafana-iotdb-connector","link":"#grafana-iotdb-connector","children":[{"level":3,"title":"Installation and deployment","slug":"installation-and-deployment","link":"#installation-and-deployment","children":[]},{"level":3,"title":"IoTDB installation","slug":"iotdb-installation","link":"#iotdb-installation","children":[]},{"level":3,"title":"IoTDB-Grafana-Connector installation","slug":"iotdb-grafana-connector-installation","link":"#iotdb-grafana-connector-installation","children":[]},{"level":3,"title":"Start IoTDB-Grafana-Connector","slug":"start-iotdb-grafana-connector","link":"#start-iotdb-grafana-connector","children":[]},{"level":3,"title":"Explore in Grafana","slug":"explore-in-grafana","link":"#explore-in-grafana","children":[]},{"level":3,"title":"config grafana","slug":"config-grafana","link":"#config-grafana","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.06,"words":918},"filePathRelative":"UserGuide/V1.1.x/Ecosystem-Integration/Grafana-Connector.md","localizedDate":"July 10, 2023","autoDesc":true}');export{aa as comp,na as data};
