import{_ as r,r as s,o as n,c as l,b as e,d as t,a as i,e as a}from"./app-XaimuxhO.js";const c={},d=e("h1",{id:"dbeaver-iotdb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-iotdb"},[e("span",null,"DBeaver-IoTDB")])],-1),g=e("p",null,"DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。",-1),p=e("h2",{id:"dbeaver-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-安装"},[e("span",null,"DBeaver 安装")])],-1),m={href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"iotdb-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iotdb-安装"},[e("span",null,"IoTDB 安装")])],-1),u={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"版本 >= 0.13.0",-1),D={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"连接-iotdb-与-dbeaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#连接-iotdb-与-dbeaver"},[e("span",null,"连接 IoTDB 与 DBeaver")])],-1),b=a(`<li><p>启动 IoTDB 服务</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./sbin/start-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动 DBeaver</p></li><li><p>打开 Driver Manager</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png?raw=true" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>为 IoTDB 新建一个驱动类型</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),f={href:"https://maven.proxy.ustclug.org/maven2/org/apache/iotdb/iotdb-jdbc/",target:"_blank",rel:"noopener noreferrer"},_={href:"https://repo1.maven.org/maven2/org/apache/iotdb/iotdb-jdbc/",target:"_blank",rel:"noopener noreferrer"},I=e("br",null,null,-1),y=e("img",{src:"https://alioss.timecho.com/docs/img/20230920-192746.jpg",alt:"",loading:"lazy"},null,-1),T=a('<li><p>添加刚刚下载的驱动包，点击 Find Class</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>编辑驱动设置</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>新建 DataBase Connection， 选择 iotdb</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>编辑 JDBC 连接设置</p></li>',4),x=a(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>JDBC URL: jdbc:iotdb://127.0.0.1:6667/
Username: root
Password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="10"><li>测试连接</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>可以开始通过 DBeaver 使用 IoTDB</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,6);function E(U,G){const o=s("ExternalLinkIcon");return n(),l("div",null,[d,g,p,e("ul",null,[e("li",null,[t("DBeaver 下载地址："),e("a",m,[t("https://dbeaver.io/download/"),i(o)])])]),h,e("ul",null,[e("li",null,[t("下载 IoTDB 二进制版本 "),e("ul",null,[e("li",null,[t("IoTDB 下载地址："),e("a",u,[t("https://iotdb.apache.org/Download/"),i(o)])]),v])]),e("li",null,[t("或者从源代码中编译 "),e("ul",null,[e("li",null,[t("参考 "),e("a",D,[t("https://github.com/apache/iotdb"),i(o)])])])])]),B,e("ol",null,[b,e("li",null,[e("p",null,[t("下载 jdbc 驱动， 点击下列网址 "),e("a",f,[t("地址1"),i(o)]),t(" 或 "),e("a",_,[t("地址2"),i(o)]),t("，选择对应版本的 jar 包，下载后缀 jar-with-dependencies.jar 的包"),I,y])]),T]),x])}const k=r(c,[["render",E],["__file","DBeaver.html.vue"]]),w=JSON.parse('{"path":"/zh/UserGuide/latest/Ecosystem-Integration/DBeaver.html","title":"DBeaver-IoTDB","lang":"zh-CN","frontmatter":{"description":"DBeaver-IoTDB DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。 DBeaver 安装 DBeaver 下载地址：https://dbeaver.io/download/ IoTDB 安装 下载 IoTDB 二进制版本 IoTDB 下载地址：https...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"DBeaver-IoTDB"}],["meta",{"property":"og:description","content":"DBeaver-IoTDB DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。 DBeaver 安装 DBeaver 下载地址：https://dbeaver.io/download/ IoTDB 安装 下载 IoTDB 二进制版本 IoTDB 下载地址：https..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png?raw=true"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-17T06:56:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-17T06:56:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DBeaver-IoTDB\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png\\",\\"https://alioss.timecho.com/docs/img/20230920-192746.jpg\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png\\"],\\"dateModified\\":\\"2024-01-17T06:56:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"DBeaver 安装","slug":"dbeaver-安装","link":"#dbeaver-安装","children":[]},{"level":2,"title":"IoTDB 安装","slug":"iotdb-安装","link":"#iotdb-安装","children":[]},{"level":2,"title":"连接 IoTDB 与 DBeaver","slug":"连接-iotdb-与-dbeaver","link":"#连接-iotdb-与-dbeaver","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1705474606000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.21,"words":362},"filePathRelative":"zh/UserGuide/latest/Ecosystem-Integration/DBeaver.md","localizedDate":"2023年7月10日","autoDesc":true}');export{k as comp,w as data};
