import{_ as t,c as a,b as s,o as i}from"./app-B8hNZQx1.js";const l={};function o(n,e){return i(),a("div",null,e[0]||(e[0]=[s(`<h1 id="dataease" tabindex="-1"><a class="header-anchor" href="#dataease"><span>DataEase</span></a></h1><h2 id="产品概述" tabindex="-1"><a class="header-anchor" href="#产品概述"><span>产品概述</span></a></h2><ol><li><p>DataEase 简介</p><p>DataEase 是一个开源的数据可视化与分析工具，提供拖拽式的界面，使得用户能够轻松创建图表和仪表板，已支持 MySQL、SQL Server、Hive、ClickHouse、达梦等多种数据源，并且可以集成到其他应用程序中。能帮助用户快速洞察数据，做出决策。更多介绍详情请参考<a href="https://www.fit2cloud.com/dataease/index.html" target="_blank" rel="noopener noreferrer">DataEase 官网</a></p><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase1.png" alt="" style="width:45%;"><img src="https://alioss.timecho.com/docs/img/DataEase2.png" alt="" style="width:40%;"></div></li><li><p>DataEase-IoTDB 连接器介绍</p><p>IoTDB 可以通过API数据源的形式与DataEase实现高效集成，利用API数据源插件通过Session接口访问IoTDB数据。该插件支持定制化的数据处理功能，为用户提供了更大的灵活性和更多样化的数据操作选项。</p><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase3.png" alt="" style="width:70%;"></div></li></ol><h2 id="安装要求" tabindex="-1"><a class="header-anchor" href="#安装要求"><span>安装要求</span></a></h2><table><thead><tr><th style="text-align:left;"><strong>准备内容</strong></th><th style="text-align:left;"><strong>版本要求</strong></th></tr></thead><tbody><tr><td style="text-align:left;">IoTDB</td><td style="text-align:left;">版本无要求，安装请参考 IoTDB <a href="https://www.timecho.com/docs/zh/UserGuide/latest/Deployment-and-Maintenance/IoTDB-Package_timecho.html" target="_blank" rel="noopener noreferrer">部署指导</a></td></tr><tr><td style="text-align:left;">JDK</td><td style="text-align:left;">建议 JDK11 及以上版本（推荐部署 JDK17 及以上版本）</td></tr><tr><td style="text-align:left;">DataEase</td><td style="text-align:left;">要求 v1 系列 v1.18 版本，安装请参考 DataEase 官网<a href="https://dataease.io/docs/v2/installation/offline_INSTL_and_UPG/" target="_blank" rel="noopener noreferrer">安装指导</a>（暂不支持 v2.x，其他版本适配请联系天谋商务）</td></tr><tr><td style="text-align:left;">DataEase-IoTDB 连接器</td><td style="text-align:left;">请联系天谋商务获取</td></tr></tbody></table><h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><p>步骤一：请联系商务获取压缩包，解压缩安装包（ iotdb-api-source-1.0.0.zip ）</p><p>步骤二：解压后，修改<code>config</code>文件夹中的配置文件<code>application.properties</code></p><ul><li>端口<code>server.port</code>可以按需进行修改</li><li><code>iotdb.nodeUrls</code>需配置为待连接的 IoTDB 的实例的地址和端口</li><li><code>iotdb.user</code>需配置为 IoTDB 的用户名</li><li><code>iotdb.password</code>需配置为 IoTDB 的密码</li></ul><div class="language-Properties line-numbers-mode" data-highlighter="prismjs" data-ext="Properties" data-title="Properties"><pre><code><span class="line"># 启动 IoTDB API Source 监听的端口</span>
<span class="line">server.port=8097</span>
<span class="line"># IoTDB 的实例地址，多个 nodeUrls 用 ; 分割</span>
<span class="line">iotdb.nodeUrls=127.0.0.1:6667</span>
<span class="line"># IoTDB 用户名</span>
<span class="line">iotdb.user=root</span>
<span class="line"># IoTDB 密码</span>
<span class="line">iotdb.password=root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>步骤三：启动 DataEase-IoTDB 连接器</p><ul><li>前台启动</li></ul><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">./sbin/start.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>后台启动（增加 -d 参数）</li></ul><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">./sbin/start.sh -d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>步骤四：启动后可以通过日志来查看是否启动成功。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line"> lsof -i:8097  // config 里启动 IoTDB API Source 监听的端口</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2><h3 id="登录-dataease" tabindex="-1"><a class="header-anchor" href="#登录-dataease"><span>登录 DataEase</span></a></h3><ol><li>登录 DataEase，访问地址 : <code>http://目标服务器IP地址:80</code></li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase4.png" alt="" style="width:70%;"></div><h3 id="配置数据源" tabindex="-1"><a class="header-anchor" href="#配置数据源"><span>配置数据源</span></a></h3><ol><li>在导航条中跳转【数据源】界面</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase5.png" alt="" style="width:70%;"></div><ol start="2"><li>点击左上角 【 + 】，滑动到底部，选择【API】数据源</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase6.png" alt="" style="width:70%;"></div><ol start="3"><li>新建 API 数据源，自行设置基本信息中的【显示名称】，在数据表位置点击【添加】</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase7.png" alt="" style="width:70%;"></div><ol start="4"><li>在数据表名称字段中输入自定义的【名称】，请求类型选择 <code>Post</code>，地址填写 <code>http://[IoTDB API Source]:[port]/getData</code>，如果在本机操作且使用的是默认端口，地址应填写<code>http://127.0.0.1:8097/getData</code></li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase8.png" alt="" style="width:70%;"></div><ol start="5"><li><p>在【请求参数】部分，选择【请求体】标签页，并确保格式设置为 JSON。请按照以下示例填写参数，其中：<br> timeseries：要查询的序列的完整路径（目前只支持查询一条序列）<br> limit：需要查询的条数（有效范围为 大于 0 且 小于 100000）</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{ </span>
<span class="line">    &quot;timeseries&quot;: &quot;root.ln.wf03.wt03.speed&quot;,</span>
<span class="line">    &quot;limit&quot;: 1000</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase9.png" alt="" style="width:70%;"></div><ol start="6"><li>点击【认证配置】标签页，选择【Basic Auth】作为认证方式，并准确输入 IoTDB 的用户名和密码</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase10.png" alt="" style="width:70%;"></div><ol start="7"><li>点击【下一步】，将在<code>data</code>部分看到接口返回结果。如下图展示接口中，返回了<code>time</code>、 <code>rownumber</code>和<code>value</code>信息，同时需要指定各字段数据类型。完成设置后，点击界面右下角的【保存】按钮。</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase11.png" alt="" style="width:70%;"></div><ol start="8"><li>保存后进入新建 API 数据源页面，点击右上角【保存】按钮。</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase12.png" alt="" style="width:70%;"></div><ol start="9"><li>保存数据源：保存后，可在 API 分类菜单下查看该数据源及其详细信息，或编辑该数据源。</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase13.png" alt="" style="width:70%;"></div><h3 id="配置数据集" tabindex="-1"><a class="header-anchor" href="#配置数据集"><span>配置数据集</span></a></h3><ol><li>创建 API 数据集：在导航条中跳转至数据集页面，点击页面左上角的 【 + 】 符号，选择【API 数据集】类型，选择此数据集所在的目录，即可进入新建 API 数据集页面。</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase14.png" alt="" style="width:49%;"><img src="https://alioss.timecho.com/docs/img/DataEase15.png" alt="" style="width:49%;"></div><ol start="2"><li>在新建 API 数据集页面，选择刚才新建的 API 数据源和包含在数据集中的对应数据表（下图左），并设置数据集名称（下图右）。设置完毕后，点击页面右上角的【保存】按钮以完成数据集的创建。</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase16.png" alt="" style="width:49%;"><img src="https://alioss.timecho.com/docs/img/DataEase17.png" alt="" style="width:49%;"></div><ol start="3"><li>选择刚刚创建的数据集，进入【字段管理】标签页，然后将所需的字段（如 rowNum）标记为维度。</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase18.png" alt="" style="width:70%;"></div><ol start="4"><li><p>配置更新频率：在【更新信息】页面上点击【添加任务】，设置以下信息：</p><p>任务名称：根据实际情况填写</p><p>更新方式：选择【全量更新】</p><p>执行频率：根据实际情况设置（考虑DataEase获取速度，建议设置为大于 5 秒更新一次），例如需要设置为每 5 秒更新，则可以选择【表达式设定】并在【cron 表达式】中设置为<code>0/5 * * * * ? *</code><br> 配置完成后，点击页面右下角的【确认】按钮保存设置。</p></li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase19.png" alt="" style="width:70%;"></div><ol start="5"><li>任务已成功添加。可以通过点击页面左上角的【执行记录】选项查看执行记录。</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase20.png" alt="" style="width:70%;"></div><h3 id="配置仪表板" tabindex="-1"><a class="header-anchor" href="#配置仪表板"><span>配置仪表板</span></a></h3><ol><li>在导航条中跳转至仪表板页面，可以点击【 + 】符号新建目录，并且在对应目录，点击【 + 】符号，然后从弹出的菜单中选择【新建仪表板】</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase21.png" alt="" style="width:70%;"></div><ol start="2"><li>按需进行设置后点击【确定】，以自定义设置为例，确定后进入新建仪表板页面</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase22.png" alt="" style="width:70%;"></div><ol start="3"><li>在新建仪表板页面，点击【视图】按钮以打开添加视图的弹窗。在弹窗中，选择之前创建的数据集，然后点击【下一步】继续操作。</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase23.png" alt="" style="width:70%;"></div><ol start="4"><li>在选择图表类型的步骤中，根据展示需求，选择一个合适的图表类型，如【基础折线图】。选择完毕后，点击【确认】按钮应用选择。</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase24.png" alt="" style="width:70%;"></div><ol start="5"><li>在图表配置界面，通过拖放操作将<code>rowNum</code>字段拖拽到类别轴（通常是 X 轴），将<code>value</code>字段拖拽到值轴（通常是 Y 轴）。</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase25.png" alt="" style="width:70%;"></div><ol start="6"><li>在图表的类别轴设置中，选择将排序方式设定为升序，这样数据将按照从小到大的顺序展示。设置数据刷新频率以确定图表更新的频率。完成这些设置后，您可以进一步调整图表的其他格式和样式选项，比如颜色、大小等，以满足展示需求。调整完后，点击页面右上角的【保存】按钮来保存图表配置。</li></ol><blockquote><p>由于 DataEase 在自动更新数据集后可能会导致原本按升序返回的 API 数据顺序错乱，所以需要在图表配置中手动指定排序方式。</p></blockquote><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase26.png" alt="" style="width:70%;"></div><ol start="7"><li>退出编辑后查看效果</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase27.png" alt="" style="width:70%;"></div>`,67)]))}const r=t(l,[["render",o],["__file","DataEase.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/latest/Ecosystem-Integration/DataEase.html","title":"DataEase","lang":"zh-CN","frontmatter":{"description":"DataEase 产品概述 DataEase 简介 DataEase 是一个开源的数据可视化与分析工具，提供拖拽式的界面，使得用户能够轻松创建图表和仪表板，已支持 MySQL、SQL Server、Hive、ClickHouse、达梦等多种数据源，并且可以集成到其他应用程序中。能帮助用户快速洞察数据，做出决策。更多介绍详情请参考DataEase 官网 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Ecosystem-Integration/DataEase.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Ecosystem-Integration/DataEase.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"DataEase"}],["meta",{"property":"og:description","content":"DataEase 产品概述 DataEase 简介 DataEase 是一个开源的数据可视化与分析工具，提供拖拽式的界面，使得用户能够轻松创建图表和仪表板，已支持 MySQL、SQL Server、Hive、ClickHouse、达梦等多种数据源，并且可以集成到其他应用程序中。能帮助用户快速洞察数据，做出决策。更多介绍详情请参考DataEase 官网 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DataEase\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"产品概述","slug":"产品概述","link":"#产品概述","children":[]},{"level":2,"title":"安装要求","slug":"安装要求","link":"#安装要求","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[]},{"level":2,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[{"level":3,"title":"登录 DataEase","slug":"登录-dataease","link":"#登录-dataease","children":[]},{"level":3,"title":"配置数据源","slug":"配置数据源","link":"#配置数据源","children":[]},{"level":3,"title":"配置数据集","slug":"配置数据集","link":"#配置数据集","children":[]},{"level":3,"title":"配置仪表板","slug":"配置仪表板","link":"#配置仪表板","children":[]}]}],"git":{"createdTime":1726639795000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":7.18,"words":2153},"filePathRelative":"zh/UserGuide/latest/Ecosystem-Integration/DataEase.md","localizedDate":"2024年9月18日","autoDesc":true}');export{r as comp,c as data};
