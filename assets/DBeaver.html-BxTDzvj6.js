import{_ as s,r,o as n,c as l,b as e,d as t,a as o,e as i}from"./app-nVIpYHtH.js";const c={},d=e("h2",{id:"dbeaver-iotdb",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-iotdb"},[e("span",null,"DBeaver-IoTDB")])],-1),p=e("p",null,"DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。",-1),g=e("h3",{id:"dbeaver-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dbeaver-安装"},[e("span",null,"DBeaver 安装")])],-1),m={href:"https://dbeaver.io/download/",target:"_blank",rel:"noopener noreferrer"},h=e("h3",{id:"iotdb-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#iotdb-安装"},[e("span",null,"IoTDB 安装")])],-1),u={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"版本 >= 0.13.0",-1),b={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},D=e("h3",{id:"连接-iotdb-与-dbeaver",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#连接-iotdb-与-dbeaver"},[e("span",null,"连接 IoTDB 与 DBeaver")])],-1),B=i(`<li><p>启动 IoTDB 服务</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>./sbin/start-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动 DBeaver</p></li><li><p>打开 Driver Manager</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png?raw=true" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>为 IoTDB 新建一个驱动类型</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li>`,4),f={href:"https://iotdb.apache.org/zh/Download/",target:"_blank",rel:"noopener noreferrer"},I=i(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),_=i('<li><p>在<code>jdbc/target/</code>下找到并添加名为<code>apache-iotdb-jdbc-{version}-jar-with-dependencies.jar</code>的库，点击 <code>Find Class</code>。</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>编辑驱动设置</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>新建 DataBase Connection， 选择 iotdb</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>编辑 JDBC 连接设置</p></li>',4),y=i(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>JDBC URL: jdbc:iotdb://127.0.0.1:6667/
Username: root
Password: root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>测试连接</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="12"><li>可以开始通过 DBeaver 使用 IoTDB</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,6);function T(x,E){const a=r("ExternalLinkIcon");return n(),l("div",null,[d,p,g,e("ul",null,[e("li",null,[t("DBeaver 下载地址："),e("a",m,[t("https://dbeaver.io/download/"),o(a)])])]),h,e("ul",null,[e("li",null,[t("下载 IoTDB 二进制版本 "),e("ul",null,[e("li",null,[t("IoTDB 下载地址："),e("a",u,[t("https://iotdb.apache.org/Download/"),o(a)])]),v])]),e("li",null,[t("或者从源代码中编译 "),e("ul",null,[e("li",null,[t("参考 "),e("a",b,[t("https://github.com/apache/iotdb"),o(a)])])])])]),D,e("ol",null,[B,e("li",null,[e("p",null,[t("下载"),e("a",f,[t("源代码"),o(a)]),t("，解压并运行下面的命令编译 jdbc 驱动")]),I]),_]),y])}const G=s(c,[["render",T],["__file","DBeaver.html.vue"]]),k=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.html","title":"","lang":"zh-CN","frontmatter":{"description":"DBeaver-IoTDB DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。 DBeaver 安装 DBeaver 下载地址：https://dbeaver.io/download/ IoTDB 安装 下载 IoTDB 二进制版本 IoTDB 下载地址：https...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"DBeaver-IoTDB DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。 DBeaver 安装 DBeaver 下载地址：https://dbeaver.io/download/ IoTDB 安装 下载 IoTDB 二进制版本 IoTDB 下载地址：https..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png?raw=true"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"DBeaver-IoTDB","slug":"dbeaver-iotdb","link":"#dbeaver-iotdb","children":[{"level":3,"title":"DBeaver 安装","slug":"dbeaver-安装","link":"#dbeaver-安装","children":[]},{"level":3,"title":"IoTDB 安装","slug":"iotdb-安装","link":"#iotdb-安装","children":[]},{"level":3,"title":"连接 IoTDB 与 DBeaver","slug":"连接-iotdb-与-dbeaver","link":"#连接-iotdb-与-dbeaver","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.2,"words":361},"filePathRelative":"zh/UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.md","localizedDate":"2023年7月10日","autoDesc":true}');export{G as comp,k as data};
