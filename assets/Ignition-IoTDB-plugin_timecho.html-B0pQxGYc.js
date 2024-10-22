import{_ as a,c as s,b as o,d as t,e,a as d,w as l,r as c,o as r}from"./app-D6rlonH6.js";const p={},g={style:{"text-align":"center"}};function h(m,i){const n=c("RouteLink");return r(),s("div",null,[i[7]||(i[7]=o('<h1 id="ignition" tabindex="-1"><a class="header-anchor" href="#ignition"><span>Ignition</span></a></h1><h2 id="产品概述" tabindex="-1"><a class="header-anchor" href="#产品概述"><span>产品概述</span></a></h2><ol><li><p>Ignition简介</p><p>Ignition 是一个基于WEB的监控和数据采集工具（SCADA）- 一个开放且可扩展的通用平台。Ignition可以让你更轻松地控制、跟踪、显示和分析企业的所有数据，提升业务能力。更多介绍详情请参考<a href="https://docs.inductiveautomation.com/docs/8.1/getting-started/introducing-ignition" target="_blank" rel="noopener noreferrer">Ignition官网</a></p></li><li><p>Ignition-IoTDB Connector介绍</p><p>Ignition-IoTDB Connector分为两个模块：Ignition-IoTDB连接器、Ignition-IoTDB With JDBC。其中：</p><ul><li>Ignition-IoTDB 连接器：提供了将 Ignition 采集到的数据存入 IoTDB 的能力，也支持在Components中进行数据读取，同时注入了 <code>system.iotdb.insert</code>和<code>system.iotdb.query</code>脚本接口用于方便在Ignition编程使用</li><li>Ignition-IoTDB With JDBC：Ignition-IoTDB With JDBC 可以在 <code>Transaction Groups</code> 模块中使用，不适用于 <code>Tag Historian</code>模块，可以用于自定义写入和查询。</li></ul><p>两个模块与Ignition的具体关系与内容如下图所示。</p><figure><img src="https://alioss.timecho.com/docs/img/Ignition.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ol><h2 id="安装要求" tabindex="-1"><a class="header-anchor" href="#安装要求"><span>安装要求</span></a></h2>',4)),t("table",null,[i[6]||(i[6]=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},[t("strong",null,"准备内容")]),t("th",{style:{"text-align":"center"}},[t("strong",null,"版本要求")])])],-1)),t("tbody",null,[t("tr",null,[i[2]||(i[2]=t("td",{style:{"text-align":"center"}},"IoTDB",-1)),t("td",g,[i[1]||(i[1]=e("要求已安装V1.3.1及以上版本，安装请参考 IoTDB ")),d(n,{to:"/zh/UserGuide/latest/Deployment-and-Maintenance/IoTDB-Package_timecho.html"},{default:l(()=>i[0]||(i[0]=[e("部署指导")])),_:1})])]),i[3]||(i[3]=t("tr",null,[t("td",{style:{"text-align":"center"}},"Ignition"),t("td",{style:{"text-align":"center"}},[e("要求已安装 8.1.x版本（8.1.37及以上）的 8.1 版本，安装请参考 Ignition 官网"),t("a",{href:"https://docs.inductiveautomation.com/docs/8.1/getting-started/installing-and-upgrading",target:"_blank",rel:"noopener noreferrer"},"安装指导"),e("（其他版本适配请联系商务了解）")])],-1)),i[4]||(i[4]=t("tr",null,[t("td",{style:{"text-align":"center"}},"Ignition-IoTDB连接器模块"),t("td",{style:{"text-align":"center"}},"请联系商务获取")],-1)),i[5]||(i[5]=t("tr",null,[t("td",{style:{"text-align":"center"}},"Ignition-IoTDB With JDBC模块"),t("td",{style:{"text-align":"center"}},[e("下载地址："),t("a",{href:"https://repo1.maven.org/maven2/org/apache/iotdb/iotdb-jdbc/",target:"_blank",rel:"noopener noreferrer"},"https://repo1.maven.org/maven2/org/apache/iotdb/iotdb-jdbc/")])],-1))])]),i[8]||(i[8]=o(`<h2 id="ignition-iotdb连接器使用说明" tabindex="-1"><a class="header-anchor" href="#ignition-iotdb连接器使用说明"><span>Ignition-IoTDB连接器使用说明</span></a></h2><h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3><p>Ignition-IoTDB连接器模块可以将数据存入与历史数据库提供程序关联的数据库连接中。数据根据其数据类型直接存储到 SQL 数据库中的表中，以及毫秒时间戳。根据每个标签上的值模式和死区设置，仅在更改时存储数据，从而避免重复和不必要的数据存储。</p><p>Ignition-IoTDB连接器提供了将 Ignition 采集到的数据存入 IoTDB 的能力。</p><h3 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h3><p>步骤一：进入 <code>Config</code> - <code>System</code>- <code>Modules</code> 模块，点击最下方的<code>Install or Upgrade a Module...</code></p><figure><img src="https://alioss.timecho.com/docs/img/Ignition-IoTDB连接器-1.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>步骤二：选择获取到的 <code>modl</code>，选择文件并上传，点击 <code>Install</code>，信任相关证书。</p><figure><img src="https://alioss.timecho.com/docs/img/ignition-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>步骤三：安装完成后可以看到如下内容</p><figure><img src="https://alioss.timecho.com/docs/img/Ignition-IoTDB连接器-3.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>步骤四：进入 <code>Config</code> - <code>Tags</code>- <code>History</code> 模块，点击下方的<code>Create new Historical Tag Provider...</code></p><figure><img src="https://alioss.timecho.com/docs/img/Ignition-IoTDB连接器-4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>步骤五：选择 <code>IoTDB</code>并填写配置信息</p><figure><img src="https://alioss.timecho.com/docs/img/Ignition-IoTDB连接器-5.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>配置内容如下：</p><table><tr><th>名称</th><th>含义</th><th>默认值</th><th>备注</th></tr><tr><th colspan="4">Main</th></tr><tr><td>Provider Name</td><td>Provider 名称</td><td>-</td><td></td></tr><tr><td>Enabled</td><td></td><td>true</td><td>为 true 时才能使用该 Provider</td></tr><tr><td>Description</td><td>备注</td><td>-</td><td></td></tr><tr><th colspan="4">IoTDB Settings</th></tr><tr><td>Host Name</td><td>目标IoTDB实例的地址</td><td>-</td><td></td></tr><tr><td>Port Number</td><td>目标IoTDB实例的端口</td><td>6667</td><td></td></tr><tr><td>Username</td><td>目标IoTDB的用户名</td><td>-</td><td></td></tr><tr><td>Password</td><td>目标IoTDB的密码</td><td>-</td><td></td></tr><tr><td>Database Name</td><td>要存储的数据库名称，以 root 开头，如 root.db</td><td>-</td><td></td></tr><tr><td>Pool Size</td><td>SessionPool 的 Size</td><td>50</td><td>可以按需进行配置</td></tr><tr><th colspan="2">Store and Forward Settings</th><td>保持默认即可</td><td></td></tr></table><h3 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h3><h4 id="配置历史数据存储" tabindex="-1"><a class="header-anchor" href="#配置历史数据存储"><span>配置历史数据存储</span></a></h4><ul><li><p>配置好 <code>Provider</code> 后就可以在 <code>Designer</code> 中使用 <code>IoTDB Tag Historian</code> 了，就跟使用其他的 <code>Provider</code> 一样，右键点击对应 <code>Tag</code> 选择 <code>Edit tag(s)</code>，在 Tag Editor 中选择 History 分类</p><figure><img src="https://alioss.timecho.com/docs/img/ignition-7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>设置 <code>History Enabled</code> 为 <code>true</code>，并选择 <code>Storage Provider</code> 为上一步创建的 <code>Provider</code>，按需要配置其它参数，并点击 <code>OK</code>，然后保存项目。此时数据将会按照设置的内容持续的存入 <code>IoTDB</code> 实例中。</p><figure><img src="https://alioss.timecho.com/docs/img/ignition-8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h4 id="读取数据" tabindex="-1"><a class="header-anchor" href="#读取数据"><span>读取数据</span></a></h4><ul><li><p>也可以在 Report 的 Data 标签下面直接选择存入 IoTDB 的 Tags</p><figure><img src="https://alioss.timecho.com/docs/img/ignition-9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>在 Components 中也可以直接浏览相关数据</p><figure><img src="https://alioss.timecho.com/docs/img/ignition-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h4 id="脚本模块-该功能能够与-iotdb-进行交互" tabindex="-1"><a class="header-anchor" href="#脚本模块-该功能能够与-iotdb-进行交互"><span>脚本模块：该功能能够与 IoTDB 进行交互</span></a></h4><ol><li>system.iotdb.insert：</li></ol><ul><li><p>脚本说明：将数据写入到 IoTDB 实例中</p></li><li><p>脚本定义：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">system.iotdb.insert<span class="token punctuation">(</span>historian, deviceId, timestamps, measurementNames, measurementValues<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>参数：</p><ul><li><code>str historian</code>：对应的 IoTDB Tag Historian Provider 的名称</li><li><code>str deviceId</code>：写入的 deviceId，不含配置的 database，如 Sine</li><li><code>long[] timestamps</code>：写入的数据点对于的时间戳列表</li><li><code>str[] measurementNames</code>：写入的物理量的名称列表</li><li><code>str[][] measurementValues</code>：写入的数据点数据，与时间戳列表和物理量名称列表对应</li></ul></li><li><p>返回值：无</p></li><li><p>可用范围：Client, Designer, Gateway</p></li><li><p>使用示例：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">system.iotdb.insert<span class="token punctuation">(</span><span class="token string">&quot;IoTDB&quot;</span>, <span class="token string">&quot;Sine&quot;</span>, <span class="token punctuation">[</span>system.date.now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token string">&quot;measure1&quot;</span>,<span class="token string">&quot;measure2&quot;</span><span class="token punctuation">]</span>,<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;val1&quot;</span>,<span class="token string">&quot;val2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><ol start="2"><li>system.iotdb.query：</li></ol><ul><li><p>脚本说明：查询写到 IoTDB 实例中的数据</p></li><li><p>脚本定义：</p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"> system.iotdb.query<span class="token punctuation">(</span>historian, sql<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><p>参数：</p><ul><li><code>str historian</code>：对应的 IoTDB Tag Historian Provider 的名称</li><li><code>str sql</code>：待查询的 sql 语句</li></ul></li><li><p>返回值：<br> 查询的结果：<code>List&lt;Map&lt;String, Object&gt;&gt;</code></p></li><li><p>可用范围：Client, Designer, Gateway</p></li><li><p>使用示例：</p></li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">system.iotdb.query<span class="token punctuation">(</span><span class="token string">&quot;IoTDB&quot;</span>, <span class="token string">&quot;select * from root.db.Sine where time &gt; 1709563427247&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="ignition-iotdb-with-jdbc" tabindex="-1"><a class="header-anchor" href="#ignition-iotdb-with-jdbc"><span>Ignition-IoTDB With JDBC</span></a></h2><h3 id="简介-1" tabindex="-1"><a class="header-anchor" href="#简介-1"><span>简介</span></a></h3><p>Ignition-IoTDB With JDBC提供了一个 JDBC 驱动，允许用户使用标准的JDBC API 连接和查询 lgnition-loTDB 数据库</p><h3 id="安装步骤-1" tabindex="-1"><a class="header-anchor" href="#安装步骤-1"><span>安装步骤</span></a></h3><p>步骤一：进入 <code>Config</code> - <code>Databases</code> -<code>Drivers</code> 模块，创建 <code>Translator</code></p><figure><img src="https://alioss.timecho.com/docs/img/Ignition-IoTDB With JDBC-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>步骤二：进入 <code>Config</code> - <code>Databases</code> -<code>Drivers</code> 模块，创建 <code>JDBC Driver</code>，选择上一步配置的 <code>Translator</code>并上传下载的 <code>IoTDB-JDBC</code>，Classname 配置为 <code>org.apache.iotdb.jdbc.IoTDBDriver</code></p><figure><img src="https://alioss.timecho.com/docs/img/Ignition-IoTDB With JDBC-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>步骤三：进入 <code>Config</code> - <code>Databases</code> -<code>Connections</code> 模块，创建新的 <code>Connections</code>，<code>JDBC Driver</code> 选择上一步创建的 <code>IoTDB Driver</code>，配置相关信息后保存即可使用</p><figure><img src="https://alioss.timecho.com/docs/img/Ignition-IoTDB With JDBC-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="使用说明-1" tabindex="-1"><a class="header-anchor" href="#使用说明-1"><span>使用说明</span></a></h3><h4 id="数据写入" tabindex="-1"><a class="header-anchor" href="#数据写入"><span>数据写入</span></a></h4><p>在<code>Transaction Groups</code>中的 <code>Data Source</code>选择之前创建的 <code>Connection</code></p><ul><li><code>Table name</code> 需设置为 root 开始的完整的设备路径</li><li>取消勾选 <code>Automatically create table</code></li><li><code>Store timestame to</code> 配置为 time</li></ul><p>不选择其他项，设置好字段，并 <code>Enabled</code> 后 数据会安装设置存入对应的 IoTDB</p><figure><img src="https://alioss.timecho.com/docs/img/数据写入-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="数据查询" tabindex="-1"><a class="header-anchor" href="#数据查询"><span>数据查询</span></a></h4><ul><li>在 <code>Database Query Browser</code> 中选择<code>Data Source</code>选择之前创建的 <code>Connection</code>，即可编写 SQL 语句查询 IoTDB 中的数据</li></ul><figure><img src="https://alioss.timecho.com/docs/img/数据查询-ponz.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,49))])}const I=a(p,[["render",h],["__file","Ignition-IoTDB-plugin_timecho.html.vue"]]),D=JSON.parse('{"path":"/zh/UserGuide/latest/Ecosystem-Integration/Ignition-IoTDB-plugin_timecho.html","title":"Ignition","lang":"zh-CN","frontmatter":{"description":"Ignition 产品概述 Ignition简介 Ignition 是一个基于WEB的监控和数据采集工具（SCADA）- 一个开放且可扩展的通用平台。Ignition可以让你更轻松地控制、跟踪、显示和分析企业的所有数据，提升业务能力。更多介绍详情请参考Ignition官网 Ignition-IoTDB Connector介绍 Ignition-IoTD...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Ecosystem-Integration/Ignition-IoTDB-plugin_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Ecosystem-Integration/Ignition-IoTDB-plugin_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Ignition"}],["meta",{"property":"og:description","content":"Ignition 产品概述 Ignition简介 Ignition 是一个基于WEB的监控和数据采集工具（SCADA）- 一个开放且可扩展的通用平台。Ignition可以让你更轻松地控制、跟踪、显示和分析企业的所有数据，提升业务能力。更多介绍详情请参考Ignition官网 Ignition-IoTDB Connector介绍 Ignition-IoTD..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/Ignition.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-21T03:21:20.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-21T03:21:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Ignition\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/Ignition.png\\",\\"https://alioss.timecho.com/docs/img/Ignition-IoTDB%E8%BF%9E%E6%8E%A5%E5%99%A8-1.PNG\\",\\"https://alioss.timecho.com/docs/img/ignition-3.png\\",\\"https://alioss.timecho.com/docs/img/Ignition-IoTDB%E8%BF%9E%E6%8E%A5%E5%99%A8-3.PNG\\",\\"https://alioss.timecho.com/docs/img/Ignition-IoTDB%E8%BF%9E%E6%8E%A5%E5%99%A8-4.png\\",\\"https://alioss.timecho.com/docs/img/Ignition-IoTDB%E8%BF%9E%E6%8E%A5%E5%99%A8-5.PNG\\",\\"https://alioss.timecho.com/docs/img/ignition-7.png\\",\\"https://alioss.timecho.com/docs/img/ignition-8.png\\",\\"https://alioss.timecho.com/docs/img/ignition-9.png\\",\\"https://alioss.timecho.com/docs/img/ignition-10.png\\",\\"https://alioss.timecho.com/docs/img/Ignition-IoTDB%20With%20JDBC-1.png\\",\\"https://alioss.timecho.com/docs/img/Ignition-IoTDB%20With%20JDBC-2.png\\",\\"https://alioss.timecho.com/docs/img/Ignition-IoTDB%20With%20JDBC-3.png\\",\\"https://alioss.timecho.com/docs/img/%E6%95%B0%E6%8D%AE%E5%86%99%E5%85%A5-1.png\\",\\"https://alioss.timecho.com/docs/img/%E6%95%B0%E6%8D%AE%E6%9F%A5%E8%AF%A2-ponz.png\\"],\\"dateModified\\":\\"2024-08-21T03:21:20.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"产品概述","slug":"产品概述","link":"#产品概述","children":[]},{"level":2,"title":"安装要求","slug":"安装要求","link":"#安装要求","children":[]},{"level":2,"title":"Ignition-IoTDB连接器使用说明","slug":"ignition-iotdb连接器使用说明","link":"#ignition-iotdb连接器使用说明","children":[{"level":3,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":3,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[]},{"level":3,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[]}]},{"level":2,"title":"Ignition-IoTDB With JDBC","slug":"ignition-iotdb-with-jdbc","link":"#ignition-iotdb-with-jdbc","children":[{"level":3,"title":"简介","slug":"简介-1","link":"#简介-1","children":[]},{"level":3,"title":"安装步骤","slug":"安装步骤-1","link":"#安装步骤-1","children":[]},{"level":3,"title":"使用说明","slug":"使用说明-1","link":"#使用说明-1","children":[]}]}],"git":{"createdTime":1719993846000,"updatedTime":1724210480000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":2},{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.59,"words":1677},"filePathRelative":"zh/UserGuide/latest/Ecosystem-Integration/Ignition-IoTDB-plugin_timecho.md","localizedDate":"2024年7月3日","autoDesc":true}');export{I as comp,D as data};
