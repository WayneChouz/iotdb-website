import{_ as o,r as s,o as r,c as l,b as a,d as e,a as n,e as i}from"./app-CVD6HEOl.js";const d={},c=i('<h2 id="grafana-plugin" tabindex="-1"><a class="header-anchor" href="#grafana-plugin"><span>Grafana-Plugin</span></a></h2><p>Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status.</p><p>We developed the Grafana-Plugin for IoTDB, using the IoTDB REST service to present time series data and providing many visualization methods for time series data.<br> Compared with previous IoTDB-Grafana-Connector, current Grafana-Plugin performs more efficiently and supports more query types. So, <strong>we recommend using Grafana-Plugin instead of IoTDB-Grafana-Connector</strong>.</p><h3 id="installation-and-deployment" tabindex="-1"><a class="header-anchor" href="#installation-and-deployment"><span>Installation and deployment</span></a></h3><h4 id="install-grafana" tabindex="-1"><a class="header-anchor" href="#install-grafana"><span>Install Grafana</span></a></h4>',5),p={href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"},u=a("li",null,"Version >= 7.0.0",-1),h=a("h4",{id:"install-grafana-plugin",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#install-grafana-plugin"},[a("span",null,"Install Grafana-Plugin")])],-1),g=a("li",null,"Plugin name: grafana-plugin",-1),m={href:"https://github.com/apache/iotdb.git",target:"_blank",rel:"noopener noreferrer"},f=i(`<p>Execute the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="compile-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#compile-grafana-plugin"><span>Compile Grafana-Plugin</span></a></h4><h5 id="compile-method-1" tabindex="-1"><a class="header-anchor" href="#compile-method-1"><span>Compile Method 1</span></a></h5><p>We need to compile the front-end project in the IoTDB <code>grafana-plugin</code> directory and then generate the <code>dist</code> directory. The specific execution process is as follows.</p><ul><li>Option 1 (compile with maven): execute following command in the <code>grafana-plugin</code> directory:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mvn <span class="token function">install</span> package <span class="token parameter variable">-P</span> compile-grafana-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Option 2 (compile with yarn): execute following command in the <code>grafana-plugin</code> directory:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If compiling successful, you can see the <code>dist</code> directory , which contains the compiled Grafana-Plugin:</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana-plugin-build.png?raw=true"><h5 id="compile-method-2" tabindex="-1"><a class="header-anchor" href="#compile-method-2"><span>Compile Method 2</span></a></h5><p>We can also obtain the front-end project of <code>grafana-plugin</code> and other IoTDB executable files by executing the <strong>package instruction</strong> of the IoTDB project.</p><p>Execute following command in the IoTDB root directory:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> mvn clean package <span class="token parameter variable">-pl</span> distribution <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> compile-grafana-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If compiling successful, you can see that the <code>distribution/target</code> directory contains the compiled Grafana-Plugin:</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/distribution.png?raw=true"><h4 id="install-grafana-plugin-1" tabindex="-1"><a class="header-anchor" href="#install-grafana-plugin-1"><span>Install Grafana-Plugin</span></a></h4>`,18),b=i('<li><p>Copy the front-end project target folder generated above to Grafana&#39;s plugin directory <code>${Grafana directory}\\data\\plugins\\</code>.If there is no such directory, you can manually create it or start grafana and it will be created automatically. Of course, you can also modify the location of plugins. For details, please refer to the following instructions for modifying the location of Grafana&#39;s plugin directory.</p></li><li><p>Modify Grafana configuration file: the file is in（<code>${Grafana directory}\\conf\\defaults.ini</code>）, and do the following modifications:</p><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code><span class="token key attr-name">allow_loading_unsigned_plugins</span> <span class="token punctuation">=</span> <span class="token value attr-value">iotdb</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Modify the location of Grafana&#39;s plugin directory: the file is in（<code>${Grafana directory}\\conf\\defaults.ini</code>）, and do the following modifications:</p><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code><span class="token key attr-name">plugins</span> <span class="token punctuation">=</span> <span class="token value attr-value">data/plugins</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>',3),v=a("br",null,null,-1),y={href:"https://grafana.com/docs/grafana/latest/plugins/installation/",target:"_blank",rel:"noopener noreferrer"},x=i(`<h4 id="start-grafana" tabindex="-1"><a class="header-anchor" href="#start-grafana"><span>Start Grafana</span></a></h4><p>Start Grafana with the following command in the Grafana directory:</p><ul><li>Windows:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>bin<span class="token punctuation">\\</span>grafana-server.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Linux:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> grafana-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>MacOS:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>brew services start grafana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),w={href:"https://grafana.com/docs/grafana/latest/installation/",target:"_blank",rel:"noopener noreferrer"},k=i(`<h4 id="configure-iotdb-rest-service" tabindex="-1"><a class="header-anchor" href="#configure-iotdb-rest-service"><span>Configure IoTDB REST Service</span></a></h4><ul><li>Modify <code>{iotdb directory}/conf/iotdb-rest.properties</code> as following:</li></ul><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># Is the REST service enabled</span>
<span class="token key attr-name">enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment"># the binding port of the REST service</span>
<span class="token key attr-name">rest_service_port</span><span class="token punctuation">=</span><span class="token value attr-value">18080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start IoTDB (restart if the IoTDB service is already started)</p><h3 id="how-to-use-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#how-to-use-grafana-plugin"><span>How to use Grafana-Plugin</span></a></h3><h4 id="access-grafana-dashboard" tabindex="-1"><a class="header-anchor" href="#access-grafana-dashboard"><span>Access Grafana dashboard</span></a></h4><p>Grafana displays data in a web page dashboard. Please open your browser and visit <code>http://&lt;ip&gt;:&lt;port&gt;</code> when using it.</p><ul><li><p>IP is the IP of the server where your Grafana is located, and Port is the running port of Grafana (default 3000).</p></li><li><p>The default login username and password are both <code>admin</code>.</p></li></ul><h4 id="add-iotdb-as-data-source" tabindex="-1"><a class="header-anchor" href="#add-iotdb-as-data-source"><span>Add IoTDB as Data Source</span></a></h4><p>Click the <code>Settings</code> icon on the left, select the <code>Data Source</code> option, and then click <code>Add data source</code>.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_2.png?raw=true"><p>Select the <code>Apache IoTDB</code> data source.</p><ul><li>Fill in <code>http://&lt;ip&gt;:&lt;port&gt;</code> in the <code>URL</code> field <ul><li>ip is the host ip where your IoTDB server is located</li><li>port is the running port of the REST service (default 18080).</li></ul></li><li>Enter the username and password of the IoTDB server</li></ul><p>Click <code>Save &amp; Test</code>, and <code>Success</code> will appear.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_3.png?raw=true"><h4 id="create-a-new-panel" tabindex="-1"><a class="header-anchor" href="#create-a-new-panel"><span>Create a new Panel</span></a></h4><p>Click the <code>Dashboards</code> icon on the left, and select <code>Manage</code> option.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/manage.png?raw=true"><p>Click the <code>New Dashboard</code> icon on the top right, and select <code>Add an empty panel</code> option.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/add-empty-panel.png?raw=true"><p>Enter content in the SELECT, FROM , WHERE and CONTROL input box, where the WHERE and CONTROL input boxes are optional.</p><p>If a query involves multiple expressions, we can click <code>+</code> on the right side of the SELECT input box to add expressions in the SELECT clause, or click <code>+</code> on the right side of the FROM input box to add a path prefix:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input.png?raw=true"><p>SELECT input box: contents can be the time series suffix, function, udf, arithmetic expression, or nested expressions. You can also use the as clause to rename the result.</p><p>Here are some examples of valid SELECT content:</p><ul><li><code>s1</code></li><li><code>top_k(s1, &#39;k&#39;=&#39;1&#39;) as top</code></li><li><code>sin(s1) + cos(s1 + s2)</code></li><li><code>udf(s1) as &quot;alias&quot;</code></li></ul><p>FROM input box: contents must be the prefix path of the time series, such as <code>root.sg.d</code>.</p><p>WHERE input box: contents should be the filter condition of the query, such as <code>time &gt; 0</code> or <code>s1 &lt; 1024 and s2 &gt; 1024</code>.</p><p>CONTROL input box: contents should be a special clause that controls the query type and output format.</p><p>Here are some examples of valid CONTROL content:</p><ul><li><code>group by ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)</code></li><li><code>group by ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)</code></li><li><code>GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)</code></li><li><code>GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)</code></li><li><code>group by ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), level=1</code></li><li><code>group by ([0, 20), 2ms, 3ms), level=1</code></li></ul><p>Tip: Statements like <code>select * from root.xx.**</code> are not recommended because those statements may cause OOM.</p><h4 id="support-for-variables-and-template-functions" tabindex="-1"><a class="header-anchor" href="#support-for-variables-and-template-functions"><span>Support for variables and template functions</span></a></h4>`,34),G={href:"https://grafana.com/docs/grafana/v7.0/variables/",target:"_blank",rel:"noopener noreferrer"},_=i('<p>After creating a new Panel, click the Settings button in the upper right corner:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/setconf.png?raw=true"><p>Select <code>Variables</code>, click <code>Add variable</code>:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/addvaribles.png?raw=true"><p>Enter <code>Name</code>, <code>Label</code>, and <code>Query</code>, and then click the <code>Update</code> button:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput.png?raw=true"><p>Apply Variables, enter the variable in the <code>grafana panel</code> and click the <code>save</code> button:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/applyvariables.png?raw=true"><h3 id="more-details-about-grafana" tabindex="-1"><a class="header-anchor" href="#more-details-about-grafana"><span>More Details about Grafana</span></a></h3>',9),T={href:"http://docs.grafana.org/guides/getting_started/",target:"_blank",rel:"noopener noreferrer"};function I(E,P){const t=s("ExternalLinkIcon");return r(),l("div",null,[c,a("ul",null,[a("li",null,[e("Download url: "),a("a",p,[e("https://grafana.com/grafana/download"),n(t)])]),u]),h,a("ul",null,[g,a("li",null,[e("Download url: "),a("a",m,[e("https://github.com/apache/iotdb.git"),n(t)])])]),f,a("ul",null,[b,a("li",null,[a("p",null,[e("Start Grafana (restart if the Grafana service is already started)"),v,e(" For more details，please click "),a("a",y,[e("here"),n(t)])])])]),x,a("p",null,[e("For more details，please click "),a("a",w,[e("here"),n(t)])]),k,a("p",null,[e("This plugin supports Grafana's variables and templates ("),a("a",G,[e("https://grafana.com/docs/grafana/v7.0/variables/"),n(t)]),e(") feature.")]),_,a("p",null,[e("For more details about Grafana operation, please refer to the official Grafana documentation: "),a("a",T,[e("http://docs.grafana.org/guides/getting_started/"),n(t)]),e(".")])])}const D=o(d,[["render",I],["__file","Grafana-Plugin.html.vue"]]),U=JSON.parse('{"path":"/UserGuide/V0.13.x/Ecosystem-Integration/Grafana-Plugin.html","title":"","lang":"en-US","frontmatter":{"description":"Grafana-Plugin Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status. ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Ecosystem-Integration/Grafana-Plugin.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Grafana-Plugin Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Grafana-Plugin","slug":"grafana-plugin","link":"#grafana-plugin","children":[{"level":3,"title":"Installation and deployment","slug":"installation-and-deployment","link":"#installation-and-deployment","children":[]},{"level":3,"title":"How to use Grafana-Plugin","slug":"how-to-use-grafana-plugin","link":"#how-to-use-grafana-plugin","children":[]},{"level":3,"title":"More Details about Grafana","slug":"more-details-about-grafana","link":"#more-details-about-grafana","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.77,"words":1432},"filePathRelative":"UserGuide/V0.13.x/Ecosystem-Integration/Grafana-Plugin.md","localizedDate":"July 10, 2023","autoDesc":true}');export{D as comp,U as data};
