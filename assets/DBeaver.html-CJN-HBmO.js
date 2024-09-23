import{_ as t,c as a,b as i,o}from"./app-CYbL30xh.js";const n={};function r(s,e){return o(),a("div",null,e[0]||(e[0]=[i(`<h1 id="dbeaver" tabindex="-1"><a class="header-anchor" href="#dbeaver"><span>DBeaver</span></a></h1><p>DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB via the JDBC driver.</p><h2 id="dbeaver-installation" tabindex="-1"><a class="header-anchor" href="#dbeaver-installation"><span>DBeaver Installation</span></a></h2><ul><li>From DBeaver site: <a href="https://dbeaver.io/download/" target="_blank" rel="noopener noreferrer">https://dbeaver.io/download/</a></li></ul><h2 id="iotdb-installation" tabindex="-1"><a class="header-anchor" href="#iotdb-installation"><span>IoTDB Installation</span></a></h2><ul><li>Download binary version <ul><li>From IoTDB site: <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/Download/</a></li><li>Version &gt;= 0.13.0</li></ul></li><li>Or compile from source code <ul><li>See <a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb</a></li></ul></li></ul><h2 id="connect-iotdb-and-dbeaver" tabindex="-1"><a class="header-anchor" href="#connect-iotdb-and-dbeaver"><span>Connect IoTDB and DBeaver</span></a></h2><ol><li><p>Start IoTDB server</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./sbin/start-server.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Start DBeaver</p></li><li><p>Open Driver Manager</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Create a new driver type for IoTDB</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Download <code>iotdb-jdbc</code> ， from <a href="https://maven.proxy.ustclug.org/maven2/org/apache/iotdb/iotdb-jdbc/1.2.1/iotdb-jdbc-1.2.1-jar-with-dependencies.jar" target="_blank" rel="noopener noreferrer">source1</a> or <a href="https://repo1.maven.org/maven2/org/apache/iotdb/iotdb-jdbc/1.2.1/iotdb-jdbc-1.2.1-jar-with-dependencies.jar" target="_blank" rel="noopener noreferrer">source2</a>.</p></li><li><p>Add the downloaded jar file， then select <code>Find Class</code>.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit the driver Settings</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Open New DataBase Connection and select iotdb</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit JDBC Connection Settings</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">JDBC URL: jdbc:iotdb://127.0.0.1:6667/</span>
<span class="line">Username: root</span>
<span class="line">Password: root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>Test Connection</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>Enjoy IoTDB with DBeaver</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,14)]))}const c=t(n,[["render",r],["__file","DBeaver.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.2.x/Ecosystem-Integration/DBeaver.html","title":"DBeaver","lang":"en-US","frontmatter":{"description":"DBeaver DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB via t...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"DBeaver"}],["meta",{"property":"og:description","content":"DBeaver DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB via t..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-03T06:20:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-03T06:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DBeaver\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png\\"],\\"dateModified\\":\\"2024-09-03T06:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"DBeaver Installation","slug":"dbeaver-installation","link":"#dbeaver-installation","children":[]},{"level":2,"title":"IoTDB Installation","slug":"iotdb-installation","link":"#iotdb-installation","children":[]},{"level":2,"title":"Connect IoTDB and DBeaver","slug":"connect-iotdb-and-dbeaver","link":"#connect-iotdb-and-dbeaver","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1725344413000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1},{"name":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"UserGuide/V1.2.x/Ecosystem-Integration/DBeaver.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,d as data};
