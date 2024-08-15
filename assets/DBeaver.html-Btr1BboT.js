import{_ as n,r as s,o as r,c as l,b as e,d as t,a as i,e as a}from"./app-CHHFxD1F.js";const c={},d=e("h1",{id:"dbeaver-iotdb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-iotdb"},[e("span",null,"DBeaver-IoTDB")])],-1),p=e("p",null,"DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB via the JDBC driver.",-1),g=e("h2",{id:"dbeaver-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-installation"},[e("span",null,"DBeaver Installation")])],-1),m={href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"iotdb-installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iotdb-installation"},[e("span",null,"IoTDB Installation")])],-1),u={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"Version >= 0.13.0",-1),b={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},f=e("h2",{id:"connect-iotdb-and-dbeaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#connect-iotdb-and-dbeaver"},[e("span",null,"Connect IoTDB and DBeaver")])],-1),D=a(`<li><p>Start IoTDB server</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./sbin/start-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Start DBeaver</p></li><li><p>Open Driver Manager</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Create a new driver type for IoTDB</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),B=e("code",null,"iotdb-jdbc",-1),_={href:"https://maven.proxy.ustclug.org/maven2/org/apache/iotdb/iotdb-jdbc/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://repo1.maven.org/maven2/org/apache/iotdb/iotdb-jdbc/",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"jar-with-dependencies.jar",-1),x=e("br",null,null,-1),E=e("img",{src:"https://alioss.timecho.com/docs/img/20230920-192746.jpg",alt:"",loading:"lazy"},null,-1),T=a('<li><p>Add the downloaded jar file， then select <code>Find Class</code>.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit the driver Settings</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Open New DataBase Connection and select iotdb</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit JDBC Connection Settings</p></li>',4),U=a(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>JDBC URL: jdbc:iotdb://127.0.0.1:6667/
Username: root
Password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>Test Connection</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>Enjoy IoTDB with DBeaver</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,6);function G(w,C){const o=s("ExternalLinkIcon");return r(),l("div",null,[d,p,g,e("ul",null,[e("li",null,[t("From DBeaver site: "),e("a",m,[t("https://dbeaver.io/download/"),i(o)])])]),h,e("ul",null,[e("li",null,[t("Download binary version "),e("ul",null,[e("li",null,[t("From IoTDB site: "),e("a",u,[t("https://iotdb.apache.org/Download/"),i(o)])]),v])]),e("li",null,[t("Or compile from source code "),e("ul",null,[e("li",null,[t("See "),e("a",b,[t("https://github.com/apache/iotdb"),i(o)])])])])]),f,e("ol",null,[D,e("li",null,[e("p",null,[t("Download "),B,t("， from "),e("a",_,[t("source1"),i(o)]),t(" or "),e("a",I,[t("source2"),i(o)]),t("，choose the corresponding jar file，download the suffix "),y,t(" file."),x,E])]),T]),U])}const z=n(c,[["render",G],["__file","DBeaver.html.vue"]]),j=JSON.parse('{"path":"/UserGuide/latest/Ecosystem-Integration/DBeaver.html","title":"DBeaver-IoTDB","lang":"en-US","frontmatter":{"description":"DBeaver-IoTDB DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"DBeaver-IoTDB"}],["meta",{"property":"og:description","content":"DBeaver-IoTDB DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-17T06:56:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-17T06:56:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DBeaver-IoTDB\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png\\",\\"https://alioss.timecho.com/docs/img/20230920-192746.jpg\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png\\"],\\"dateModified\\":\\"2024-01-17T06:56:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"DBeaver Installation","slug":"dbeaver-installation","link":"#dbeaver-installation","children":[]},{"level":2,"title":"IoTDB Installation","slug":"iotdb-installation","link":"#iotdb-installation","children":[]},{"level":2,"title":"Connect IoTDB and DBeaver","slug":"connect-iotdb-and-dbeaver","link":"#connect-iotdb-and-dbeaver","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1705474606000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":0.99,"words":298},"filePathRelative":"UserGuide/latest/Ecosystem-Integration/DBeaver.md","localizedDate":"July 10, 2023","autoDesc":true}');export{z as comp,j as data};
