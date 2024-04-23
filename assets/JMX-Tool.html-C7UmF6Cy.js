import{_ as i,r as n,o as r,c as s,b as e,d as a,a as l,e as t}from"./app-DrPcRZG6.js";const d={},c=t(`<h1 id="jmx-tool" tabindex="-1"><a class="header-anchor" href="#jmx-tool"><span>JMX Tool</span></a></h1><p>Java VisualVM is a tool that provides a visual interface for viewing detailed information about Java applications while they are running on a Java Virtual Machine (JVM), and for troubleshooting and profiling these applications.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><p>Step1: Fetch IoTDB-sever.</p><p>Step2: Edit configuration.</p><ul><li><p>IoTDB is LOCAL<br> View <code>$IOTDB_HOME/conf/jmx.password</code>, and use default user or add new users here.<br> If new users are added, remember to edit <code>$IOTDB_HOME/conf/jmx.access</code> and add new users&#39; access</p></li><li><p>IoTDB is not LOCAL<br> Edit <code>$IOTDB_HOME/conf/datanode-env.sh</code>, and modify config below:</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>JMX_LOCAL=&quot;false&quot;
JMX_IP=&quot;the_real_iotdb_server_ip&quot;  # Write the actual IoTDB IP address
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>View <code>$IOTDB_HOME/conf/jmx.password</code>, and use default user or add new users here.<br> If new users are added, remember to edit <code>$IOTDB_HOME/conf/jmx.access</code> and add new users&#39; access</p><p>Step 3: Start IoTDB-server.</p><p>Step 4: Use jvisualvm</p>`,10),p={href:"https://visualvm.github.io/download.html",target:"_blank",rel:"noopener noreferrer"},u=t('<li><p>Open jvisualvm</p></li><li><p>Right-click at the left navigation area -&gt; Add JMX connection<br><img style="width:100%;max-width:300px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/81464569-725e0200-91f5-11ea-9ff9-49745f4c9ef2.png"></p></li><li><p>Fill in information and log in as below. Remember to check &quot;Do not require SSL connection&quot;.<br> An example is:<br> Connection：192.168.130.15:31999<br> Username：iotdb<br> Password：passw!d<br><img style="width:100%;max-width:300px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/81464639-ed271d00-91f5-11ea-91a0-b4fe9cb8204e.png"></p></li>',3);function m(h,g){const o=n("ExternalLinkIcon");return r(),s("div",null,[c,e("ol",null,[e("li",null,[e("p",null,[a("Make sure jdk 8 is installed. For versions later than jdk 8, you need to "),e("a",p,[a("download visualvm"),l(o)])])]),u])])}const v=i(d,[["render",m],["__file","JMX-Tool.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/V1.0.x/Maintenance-Tools/JMX-Tool.html","title":"JMX Tool","lang":"en-US","frontmatter":{"description":"JMX Tool Java VisualVM is a tool that provides a visual interface for viewing detailed information about Java applications while they are running on a Java Virtual Machine (JVM)...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Maintenance-Tools/JMX-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Maintenance-Tools/JMX-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"JMX Tool"}],["meta",{"property":"og:description","content":"JMX Tool Java VisualVM is a tool that provides a visual interface for viewing detailed information about Java applications while they are running on a Java Virtual Machine (JVM)..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JMX Tool\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.19,"words":356},"filePathRelative":"UserGuide/V1.0.x/Maintenance-Tools/JMX-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{v as comp,b as data};
