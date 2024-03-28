import{_ as o,r as n,o as s,c as l,a as d,d as a,e,b as i,f as r}from"./app-dNeAgOFp.js";const c={},h=r('<h2 id="系统集成" tabindex="-1"><a class="header-anchor" href="#系统集成" aria-hidden="true">#</a> 系统集成</h2><h1 id="grafana-插件" tabindex="-1"><a class="header-anchor" href="#grafana-插件" aria-hidden="true">#</a> Grafana 插件</h1><p>Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。</p><p>在 IoTDB 项目中，我们开发了 Grafana 插件，该插件通过调用 IoTDB REST 服务来展现 IoTDB 中时序数据 ，提供了众多时序数据的可视化方法。Grafana 插件相较于 IoTDB-Grafana-Connector 连接器执行效率更高、支持的查询种类更多。只要在您部署环境允许的情况下，<em>我们都推荐直接使用 Grafana 插件而不使用 IoTDB-Grafana-Connector 连接器</em>。</p><h2 id="部署-grafana-插件" tabindex="-1"><a class="header-anchor" href="#部署-grafana-插件" aria-hidden="true">#</a> 部署 Grafana 插件</h2><h3 id="安装-grafana" tabindex="-1"><a class="header-anchor" href="#安装-grafana" aria-hidden="true">#</a> 安装 Grafana</h3>',6),p={href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"},g=a("li",null,"版本 >= 9.3.0",-1),m=a("h3",{id:"grafana-plugin-获取",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#grafana-plugin-获取","aria-hidden":"true"},"#"),e(" grafana-plugin 获取")],-1),u=a("h4",{id:"grafana官方下载-apache-iotdb-datasource",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#grafana官方下载-apache-iotdb-datasource","aria-hidden":"true"},"#"),e(" Grafana官方下载 apache-iotdb-datasource")],-1),f={href:"https://grafana.com/api/plugins/apache-iotdb-datasource/versions/1.0.0/download",target:"_blank",rel:"noopener noreferrer"},x=r('<h3 id="grafana-plugin-插件安装" tabindex="-1"><a class="header-anchor" href="#grafana-plugin-插件安装" aria-hidden="true">#</a> grafana-plugin 插件安装</h3><h3 id="方式一-使用-grafana-cli-工具安装-推荐" tabindex="-1"><a class="header-anchor" href="#方式一-使用-grafana-cli-工具安装-推荐" aria-hidden="true">#</a> 方式一 使用 grafana-cli 工具安装(推荐)</h3><ul><li>使用 grafana-cli 工具从命令行安装 apache-iotdb-datasource，命令内容如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>grafana-cli plugins <span class="token function">install</span> apache-iotdb-datasource\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方式二-使用grafana-界面安装-推荐" tabindex="-1"><a class="header-anchor" href="#方式二-使用grafana-界面安装-推荐" aria-hidden="true">#</a> 方式二 使用Grafana 界面安装(推荐)</h3><p>从本地 Grafana 点击 Configuration -&gt; Plugins -&gt; 搜索 IoTDB 进行插件安装</p><h3 id="方式三-手动安装grafana-plugin-插件-不推荐" tabindex="-1"><a class="header-anchor" href="#方式三-手动安装grafana-plugin-插件-不推荐" aria-hidden="true">#</a> 方式三 手动安装grafana-plugin 插件(不推荐)</h3><ul><li><p>拷贝上述生成的前端工程目标文件夹到 Grafana 的插件目录中 <code>${Grafana文件目录}\\data\\plugins\\</code>。如果没有此目录可以手动建或者启动grafana会自动建立，当然也可以修改plugins的位置,具体请查看下面的修改Grafana 的插件目录位置说明。</p></li><li><p>启动Grafana服务，如果 Grafana 服务已启动，则需要停止Grafana服务,然后再启动Grafana。</p></li></ul>',8),b={href:"https://grafana.com/docs/grafana/latest/plugins/installation/",target:"_blank",rel:"noopener noreferrer"},w=r(`<h5 id="启动-grafana" tabindex="-1"><a class="header-anchor" href="#启动-grafana" aria-hidden="true">#</a> 启动 Grafana</h5><p>进入 Grafana 的安装目录，使用以下命令启动 Grafana：</p><ul><li>Windows 系统：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin<span class="token punctuation">\\</span>grafana-server.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Linux 系统：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> grafana-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>MacOS 系统：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew services start grafana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),_={href:"https://grafana.com/docs/grafana/latest/installation/",target:"_blank",rel:"noopener noreferrer"},y=r(`<h5 id="配置-iotdb-rest-服务" tabindex="-1"><a class="header-anchor" href="#配置-iotdb-rest-服务" aria-hidden="true">#</a> 配置 IoTDB REST 服务</h5><p>进入 <code>{iotdb 目录}/conf</code>，打开 <code>iotdb-common.properties</code> 文件，并作如下修改：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># Is the REST service enabled</span>
<span class="token key attr-name">enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment"># the binding port of the REST service</span>
<span class="token key attr-name">rest_service_port</span><span class="token punctuation">=</span><span class="token value attr-value">18080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动（重启）IoTDB 使配置生效，此时 IoTDB REST 服务处于运行状态。</p><h4 id="使用-grafana-插件" tabindex="-1"><a class="header-anchor" href="#使用-grafana-插件" aria-hidden="true">#</a> 使用 Grafana 插件</h4><h5 id="访问-grafana-dashboard" tabindex="-1"><a class="header-anchor" href="#访问-grafana-dashboard" aria-hidden="true">#</a> 访问 Grafana dashboard</h5><p>Grafana 以网页的 dashboard 形式为您展示数据，在使用时请您打开浏览器，访问 <code>http://&lt;ip&gt;:&lt;port&gt;</code>。</p><p>注：IP 为您的 Grafana 所在的服务器 IP，Port 为 Grafana 的运行端口（默认 3000）。</p><p>在本地试用时，Grafana dashboard 的默认地址为 <code>http://localhost:3000/</code>。</p><p>默认登录的用户名和密码都是 <code>admin</code>。</p><h5 id="添加-iotdb-数据源" tabindex="-1"><a class="header-anchor" href="#添加-iotdb-数据源" aria-hidden="true">#</a> 添加 IoTDB 数据源</h5><p>点击左侧的 <code>设置</code> 图标，选择 <code>Data Source</code> 选项，然后再点击 <code>Add data source</code>。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_2.png?raw=true"><p>选择 <code>Apache IoTDB</code> 数据源，<code>URL</code> 一栏填写 <code>http://&lt;ip&gt;:&lt;port&gt;</code>。</p><p>Ip 为您的 IoTDB 服务器所在的宿主机 IP，port 为 REST 服务的运行端口（默认 18080）。</p><p>输入 IoTDB 服务器的 username 和 password，点击 <code>Save &amp; Test</code>，出现 <code>Data source is working</code> 则提示配置成功。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_datasource.png?raw=true"><h5 id="创建一个新的-panel" tabindex="-1"><a class="header-anchor" href="#创建一个新的-panel" aria-hidden="true">#</a> 创建一个新的 Panel</h5><p>点击左侧的 <code>Dashboards</code> 图标，选择 <code>Manage</code>，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/manage.png?raw=true"><p>点击右上方的 <code>New Dashboard</code> 图标，选择 <code>Add an empty panel</code>，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/add-empty-panel.png?raw=true"><p>Grafana Plugin 支持SQL: Full Customized和SQL: Drop-down List 两种方式，默认是SQL: Full Customized方式。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input_style.png?raw=true"><h6 id="sql-full-customized-输入方式" tabindex="-1"><a class="header-anchor" href="#sql-full-customized-输入方式" aria-hidden="true">#</a> SQL: Full Customized 输入方式</h6><p>在 SELECT 输入框、FROM 输入框、WHERE输入框、CONTROL输入框中输入内容，其中 WHERE 和 CONTROL 输入框为非必填。</p><p>如果一个查询涉及多个表达式，我们可以点击 SELECT 输入框右侧的 <code>+</code> 来添加 SELECT 子句中的表达式，也可以点击 FROM 输入框右侧的 <code>+</code> 来添加路径前缀，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input.png?raw=true"><p>SELECT 输入框中的内容可以是时间序列的后缀，可以是函数或自定义函数，可以是算数表达式，也可以是它们的嵌套表达式。您还可以使用 as 子句来重命名需要显示的结果序列名字。</p><p>下面是 SELECT 输入框中一些合法的输入举例：</p><ul><li><code>s1</code></li><li><code>top_k(s1, &#39;k&#39;=&#39;1&#39;) as top</code></li><li><code>sin(s1) + cos(s1 + s2)</code></li><li><code>udf(s1) as &quot;中文别名&quot;</code></li></ul><p>FROM 输入框中的内容必须是时间序列的前缀路径，比如 <code>root.sg.d</code>。</p><p>WHERE 输入框为非必须填写项目，填写内容应当是查询的过滤条件，比如 <code>time &gt; 0</code> 或者 <code>s1 &lt; 1024 and s2 &gt; 1024</code>。</p><p>CONTROL 输入框为非必须填写项目，填写内容应当是控制查询类型、输出格式的特殊子句。其中GROUP BY 输入框支持使用grafana的全局变量来获取当前时间区间变化$__from(起始时间)、$__to(结束时间)，下面是 CONTROL 输入框中一些合法的输入举例：</p><ul><li><code>GROUP BY ([$__from, $__to), 1d)</code></li><li><code>GROUP BY ([$__from, $__to),3h,1d)</code></li><li><code>GROUP BY ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)</code></li><li><code>GROUP BY ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)</code></li><li><code>GROUP BY ([$__from, $__to), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)</code></li><li><code>GROUP BY ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), LEVEL=1</code></li><li><code>GROUP BY ([0, 20), 2ms, 3ms), LEVEL=1</code></li></ul><p>提示：为了避免OOM问题，不推荐使用select * from root.xx.** 这种语句在Grafana plugin中使用。</p><h6 id="sql-drop-down-list-输入方式" tabindex="-1"><a class="header-anchor" href="#sql-drop-down-list-输入方式" aria-hidden="true">#</a> SQL: Drop-down List 输入方式</h6><p>在 TIME-SERIES 选择框中选择一条时间序列、FUNCTION 选择一个函数、SAMPLING INTERVAL、SLIDING STEP、LEVEL、FILL 输入框中输入内容，其中 TIME-SERIESL 为必填项其余为非必填项。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input2.png?raw=true"><h5 id="变量与模板功能的支持" tabindex="-1"><a class="header-anchor" href="#变量与模板功能的支持" aria-hidden="true">#</a> 变量与模板功能的支持</h5><p>SQL: Full Customized和SQL: Drop-down List两种输入方式都支持 Grafana 的变量与模板功能，下面示例中使用SQL: Full Customized输入方式，SQL: Drop-down List与之类似。</p><p>创建一个新的 Panel 后，点击右上角的设置按钮，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/setconf.png?raw=true"><p>选择 <code>Variables</code>，点击 <code>Add variable</code> ，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/addvaribles.png?raw=true"><p>示例一：输入 <code>Name</code>，<code>Label</code>，选择Type的<code>Query</code>、在Query 中输入show child paths xx ， 点击 <code>Update</code> 按钮，如下图所示：</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput.png?raw=true"><p>应用 Variables，在 <code>grafana panel</code> 中输入变量点击 <code>save</code> 按钮，如下图所示</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/applyvariables.png?raw=true"><p>示例二：变量嵌套使用，如下图所示<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2.png?raw=true"></p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2-1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2-2.png?raw=true"><p>示例三：函数变量使用，如下图所示<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variablesinput3.png?raw=true"></p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variablesinput3-1.png?raw=true">`,55),G=a("br",null,null,-1),v=a("br",null,null,-1),E={href:"https://grafana.com/docs/grafana/latest/variables/",target:"_blank",rel:"noopener noreferrer"},I=r('<p>除了上面的示例外，还支持下面这些语句:</p><ul><li><p><code>show databases</code></p></li><li><p><code>show timeseries</code></p></li><li><p><code>show child nodes</code></p></li><li><p><code>show all ttl</code></p></li><li><p><code>show latest timeseries</code></p></li><li><p><code>show devices</code></p></li><li><p><code>select xx from root.xxx limit xx 等sql 查询</code></p></li><li><p>提示：如果查询的字段中有布尔类型的数据，会将true转化成1，false转化成0结果值进行显示。</p></li></ul><h5 id="告警功能" tabindex="-1"><a class="header-anchor" href="#告警功能" aria-hidden="true">#</a> 告警功能</h5><p>本插件支持 Grafana alert功能。在Grafana 9告警界面一共有6个Tab，分别是Alert rules、Contact points、Notification policies、Silences、Alert groups、Admin</p><ul><li><code>Alert rules</code> 告警规则列表，用于展示和配置告警规则</li><li><code>Contact points</code> 为通知渠道，包括DingDing、Email、Slack、WebHook、Prometheus Alertmanager等</li><li><code>Notification policies</code> 配置告警发送到哪个通道的路由，以及发送通知的时间和重复频率，静默配置</li><li><code>Silences</code> 为配置告警静默时间段</li><li><code>Alert groups</code> 告警组，配置的告警触发后会在这里显示</li><li><code>Admin</code> 提供通过JSON方式修改告警配置</li></ul><ol><li>在Grafana panel中，点击alerting按钮，如下图所示：</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert1.png?raw=true"><ol start="2"><li>点击<code>Create alert rule from this panel</code>，如下图所示：</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert2.png?raw=true"><ol start="3"><li>在第1步中设置查询和警报条件，Conditions 表示查询条件，可以配置多个组合查询条件。如下图所示：</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert3.png?raw=true"><p>图中的查询条件：min() OF A IS BELOW 0，表示将A选项卡中的最小值在0一下就会触发条件，单击该函数可将其更改为另一个函数。</p><p>提示:警报规则中使用的查询不能包含任何模板变量。目前我们只支持条件之间的AND和OR运算符，它们是串行执行的。<br> 例如，我们按以下顺序有 3 个条件： 条件：B（计算为：TRUE）或条件：C（计算为：FALSE）和条件：D（计算为：TRUE） 所以结果将计算为（（对或错）和对）=对。</p><ol start="4"><li><p>选择完指标及告警规则后点击<code>Preview</code>按钮，进行数据预览如下图所示：<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert4.png?raw=true"></p></li><li><p>在第 2 步中，指定警报评估间隔，对于<code>Evaluate every</code>，指定评估频率。必须是 10 秒的倍数。例如，1m，30s。<br> 对于<code>Evaluate for</code>，指定在警报触发之前的持续时间。如下图所示：<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert5.png?raw=true"></p></li><li><p>在第 3 步中，添加存储位置、规则组以及与规则关联的其他元数据。 其中<code>Rule name</code>指定规则的名称。规则名称必须是唯一的。<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert6.png?raw=true"></p></li><li><p>在第 4 步中，添加自定义标签。 从下拉列表中选择现有键值对添加自定义标签，或通过输入新键或值来添加新标签。如下图所示：</p></li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert7.png?raw=true">',15),L={start:"8"},T=a("li",null,[a("p",null,"单击保存以保存规则或单击保存并退出以保存规则并返回到警报页面。")],-1),k=a("li",null,[a("p",null,[e("告警状态常用的有"),a("code",null,"Normal"),e("、"),a("code",null,"Pending"),e("、"),a("code",null,"Firing"),e("等状态，如下图所示："),a("br"),a("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/grafana9_alert8.png?raw=true"}),a("br"),a("img",{style:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},src:"https://alioss.timecho.com/docs/img/grafana9_alert9.png?raw=true"})])],-1),S=a("code",null,"Contact points",-1),R={href:"https://grafana.com/docs/grafana/latest/alerting/manage-notifications/create-contact-point/",target:"_blank",rel:"noopener noreferrer"},O={href:"https://grafana.com/docs/grafana/latest/alerting/",target:"_blank",rel:"noopener noreferrer"},U=a("h4",{id:"更多",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#更多","aria-hidden":"true"},"#"),e(" 更多")],-1),N={href:"http://docs.grafana.org/guides/getting_started/%E3%80%82",target:"_blank",rel:"noopener noreferrer"};function B(C,A){const t=n("ExternalLinkIcon");return s(),l("div",null,[d(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),h,a("ul",null,[a("li",null,[e("Grafana 组件下载地址："),a("a",p,[e("https://grafana.com/grafana/download"),i(t)])]),g]),m,u,a("p",null,[e("二进制文件下载地址："),a("a",f,[e("https://grafana.com/api/plugins/apache-iotdb-datasource/versions/1.0.0/download"),i(t)])]),x,a("p",null,[e("更多有关Grafana详情，请点 "),a("a",b,[e("这里"),i(t)])]),w,a("p",null,[e("更多详情，请点 "),a("a",_,[e("这里"),i(t)])]),y,a("p",null,[e("上图中Name 是变量名称也是将来我们在panel中使用的变量名称，Label是变量的展示名称如果为空就显示Name的变量反之则显示Label的名称，"),G,e(" Type下拉中有Query、Custom、Text box、Constant、DataSource、Interval、Ad hoc filters等这些都可以在IoTDB的Grafana Plugin 中使用"),v,e(" 更加详细介绍用法请查看官方手册("),a("a",E,[e("https://grafana.com/docs/grafana/latest/variables/"),i(t)]),e(")")]),I,a("ol",L,[T,k,a("li",null,[a("p",null,[e("我们也可以为告警配置"),S,e("用来接收告警通知，更加详细操作可以参考官方文档("),a("a",R,[e("https://grafana.com/docs/grafana/latest/alerting/manage-notifications/create-contact-point/"),i(t)]),e(")。")])])]),a("p",null,[e("想了解alert更多详细的操作可以查看官方文档"),a("a",O,[e("https://grafana.com/docs/grafana/latest/alerting/"),i(t)])]),U,a("p",null,[e("更多关于 Grafana 操作详情可参看 Grafana 官方文档："),a("a",N,[e("http://docs.grafana.org/guides/getting_started/。"),i(t)])])])}const P=o(c,[["render",B],["__file","Grafana-Plugin.html.vue"]]);export{P as default};
