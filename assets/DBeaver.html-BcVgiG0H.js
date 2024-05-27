import{_ as n,r as s,o as r,c as l,b as e,d as t,a as i,e as o}from"./app-D_cz5DM4.js";const c={},d=e("h2",{id:"dbeaver-iotdb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-iotdb"},[e("span",null,"DBeaver-IoTDB")])],-1),p=e("p",null,"DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB via the JDBC driver.",-1),g=e("h3",{id:"dbeaver-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-installation"},[e("span",null,"DBeaver Installation")])],-1),m={href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"},h=e("h3",{id:"iotdb-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iotdb-installation"},[e("span",null,"IoTDB Installation")])],-1),u={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"Version >= 0.13.0",-1),b={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"connect-iotdb-and-dbeaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#connect-iotdb-and-dbeaver"},[e("span",null,"Connect IoTDB and DBeaver")])],-1),f=o(`<li><p>Start IoTDB server</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./sbin/start-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Start DBeaver</p></li><li><p>Open Driver Manager</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Create a new driver type for IoTDB</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),B={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},I=o(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),_=o('<li><p>Find and add a lib named <code>apache-iotdb-jdbc-{version}-jar-with-dependencies.jar</code>, which should be under <code>jdbc/target/</code>, then select <code>Find Class</code>.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit the driver Settings</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Open New DataBase Connection and select iotdb</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit JDBC Connection Settings</p></li>',4),y=o(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>JDBC URL: jdbc:iotdb://127.0.0.1:6667/
Username: root
Password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>Test Connection</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="12"><li>Enjoy IoTDB with DBeaver</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,6);function x(E,T){const a=s("ExternalLinkIcon");return r(),l("div",null,[d,p,g,e("ul",null,[e("li",null,[t("From DBeaver site: "),e("a",m,[t("https://dbeaver.io/download/"),i(a)])])]),h,e("ul",null,[e("li",null,[t("Download binary version "),e("ul",null,[e("li",null,[t("From IoTDB site: "),e("a",u,[t("https://iotdb.apache.org/Download/"),i(a)])]),v])]),e("li",null,[t("Or compile from source code "),e("ul",null,[e("li",null,[t("See "),e("a",b,[t("https://github.com/apache/iotdb"),i(a)])])])])]),D,e("ol",null,[f,e("li",null,[e("p",null,[t("Download "),e("a",B,[t("Sources"),i(a)]),t("，unzip it and compile jdbc driver by the following command")]),I]),_]),y])}const w=n(c,[["render",x],["__file","DBeaver.html.vue"]]),G=JSON.parse('{"path":"/UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.html","title":"","lang":"en-US","frontmatter":{"description":"DBeaver-IoTDB DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"DBeaver-IoTDB DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"DBeaver-IoTDB","slug":"dbeaver-iotdb","link":"#dbeaver-iotdb","children":[{"level":3,"title":"DBeaver Installation","slug":"dbeaver-installation","link":"#dbeaver-installation","children":[]},{"level":3,"title":"IoTDB Installation","slug":"iotdb-installation","link":"#iotdb-installation","children":[]},{"level":3,"title":"Connect IoTDB and DBeaver","slug":"connect-iotdb-and-dbeaver","link":"#connect-iotdb-and-dbeaver","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.03,"words":310},"filePathRelative":"UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.md","localizedDate":"July 10, 2023","autoDesc":true}');export{w as comp,G as data};
