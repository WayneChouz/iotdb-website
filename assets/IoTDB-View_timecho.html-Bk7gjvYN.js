import{_ as l,c as d,b as s,d as n,e as a,a as t,w as r,r as p,o as c}from"./app-B8hNZQx1.js";const o={};function u(v,e){const i=p("RouteLink");return c(),d("div",null,[e[4]||(e[4]=s(`<h1 id="视图" tabindex="-1"><a class="header-anchor" href="#视图"><span>视图</span></a></h1><h2 id="序列视图应用背景" tabindex="-1"><a class="header-anchor" href="#序列视图应用背景"><span>序列视图应用背景</span></a></h2><h3 id="应用场景1-时间序列重命名-pi资产管理" tabindex="-1"><a class="header-anchor" href="#应用场景1-时间序列重命名-pi资产管理"><span>应用场景1 时间序列重命名（PI资产管理）</span></a></h3><p>实际应用中，采集数据的设备可能使用人类难以理解的标识号来命名，这给业务层带来了查询上的困难。</p><p>而序列视图能够重新组织管理这些序列，在不改变原有序列内容、无需新建或拷贝序列的情况下，使用新的模型结构来访问他们。</p><p><strong>例如</strong>：一台云端设备使用自己的网卡MAC地址组成实体编号，存储数据时写入如下时间序列:<code>root.db.0800200A8C6D.xvjeifg</code>.</p><p>对于用户来说，它是难以理解的。但此时，用户能够使用序列视图功能对它重命名，将它映射到一个序列视图中去，使用<code>root.view.device001.temperature</code>来访问采集到的数据。</p><h3 id="应用场景2-简化业务层查询逻辑" tabindex="-1"><a class="header-anchor" href="#应用场景2-简化业务层查询逻辑"><span>应用场景2 简化业务层查询逻辑</span></a></h3><p>有时用户有大量设备，管理着大量时间序列。在进行某项业务时，用户希望仅处理其中的部分序列，此时就可以通过序列视图功能挑选出关注重点，方便反复查询、写入。</p><p><strong>例如</strong>：用户管理一条产品流水线，各环节的设备有大量时间序列。温度检测员仅需要关注设备温度，就可以抽取温度相关的序列，组成序列视图。</p><h3 id="应用场景3-辅助权限管理" tabindex="-1"><a class="header-anchor" href="#应用场景3-辅助权限管理"><span>应用场景3 辅助权限管理</span></a></h3><p>生产过程中，不同业务负责的范围一般不同，出于安全考虑往往需要通过权限管理来限制业务员的访问范围。</p><p><strong>例如</strong>：安全管理部门现在仅需要监控某生产线上各设备的温度，但这些数据与其他机密数据存放在同一数据库。此时，就可以创建若干新的视图，视图中仅含有生产线上与温度有关的时间序列，接着，向安全员只赋予这些序列视图的权限，从而达到权限限制的目的。</p><h3 id="设计序列视图功能的动机" tabindex="-1"><a class="header-anchor" href="#设计序列视图功能的动机"><span>设计序列视图功能的动机</span></a></h3><p>结合上述两类使用场景，设计序列视图功能的动机，主要有：</p><ol><li>时间序列重命名。</li><li>简化业务层查询逻辑。</li><li>辅助权限管理，通过视图向特定用户开放数据。</li></ol><h2 id="序列视图概念" tabindex="-1"><a class="header-anchor" href="#序列视图概念"><span>序列视图概念</span></a></h2><h3 id="术语概念" tabindex="-1"><a class="header-anchor" href="#术语概念"><span>术语概念</span></a></h3><p>约定：若无特殊说明，本文档所指定的视图均是<strong>序列视图</strong>，未来可能引入设备视图等新功能。</p><h3 id="序列视图" tabindex="-1"><a class="header-anchor" href="#序列视图"><span>序列视图</span></a></h3><p>序列视图是一种组织管理时间序列的方式。</p><p>在传统关系型数据库中，数据都必须存放在一个表中，而在IoTDB等时序数据库中，序列才是存储单元。因此，IoTDB中序列视图的概念也是建立在序列上的。</p><p>一个序列视图就是一条虚拟的时间序列，每条虚拟的时间序列都像是一条软链接或快捷方式，映射到某个视图外部的序列或者某种计算逻辑。换言之，一个虚拟序列要么映射到某个确定的外部序列，要么由多个外部序列运算得来。</p><p>用户可以使用复杂的SQL查询创建视图，此时序列视图就像一条被存储的查询语句，当从视图中读取数据时，就把被存储的查询语句作为数据来源，放在FROM子句中。</p><h3 id="别名序列" tabindex="-1"><a class="header-anchor" href="#别名序列"><span>别名序列</span></a></h3><p>在序列视图中，有一类特殊的存在，他们满足如下所有条件：</p><ol><li>数据来源为单一的时间序列</li><li>没有任何计算逻辑</li><li>没有任何筛选条件（例如无WHERE子句的限制）</li></ol><p>这样的序列视图，被称为<strong>别名序列</strong>，或别名序列视图。不完全满足上述所有条件的序列视图，就称为非别名序列视图。他们之间的区别是：只有别名序列支持写入功能。</p><p><strong>所有序列视图包括别名序列目前均不支持触发器功能（Trigger）。</strong></p><h3 id="嵌套视图" tabindex="-1"><a class="header-anchor" href="#嵌套视图"><span>嵌套视图</span></a></h3><p>用户可能想从一个现有的序列视图中选出若干序列，组成一个新的序列视图，就称之为嵌套视图。</p><p><strong>当前版本不支持嵌套视图功能</strong>。</p><h3 id="iotdb中对序列视图的一些约束" tabindex="-1"><a class="header-anchor" href="#iotdb中对序列视图的一些约束"><span>IoTDB中对序列视图的一些约束</span></a></h3><h4 id="限制1-序列视图必须依赖于一个或者若干个时间序列" tabindex="-1"><a class="header-anchor" href="#限制1-序列视图必须依赖于一个或者若干个时间序列"><span>限制1 序列视图必须依赖于一个或者若干个时间序列</span></a></h4><p>一个序列视图有两种可能的存在形式：</p><ol><li>它映射到一条时间序列</li><li>它由一条或若干条时间序列计算得来</li></ol><p>前种存在形式已在前文举例，易于理解；而此处的后一种存在形式，则是因为序列视图允许计算逻辑的存在。</p><p>比如，用户在同一个锅炉安装了两个温度计，现在需要计算两个温度值的平均值作为测量结果。用户采集到的是如下两个序列：<code>root.db.d01.temperature01</code>、<code>root.db.d01.temperature02</code>。</p><p>此时，用户可以使用两个序列求平均值，作为视图中的一条序列：<code>root.db.d01.avg_temperature</code>。</p><p>该例子会3.1.2详细展开。</p><h4 id="限制2-非别名序列视图是只读的" tabindex="-1"><a class="header-anchor" href="#限制2-非别名序列视图是只读的"><span>限制2 非别名序列视图是只读的</span></a></h4><p>不允许向非别名序列视图写入。</p><p>只有别名序列视图是支持写入的。</p><h4 id="限制3-不允许嵌套视图" tabindex="-1"><a class="header-anchor" href="#限制3-不允许嵌套视图"><span>限制3 不允许嵌套视图</span></a></h4><p>不能选定现有序列视图中的某些列来创建序列视图，无论是直接的还是间接的。</p><p>本限制将在3.1.3给出示例。</p><h4 id="限制4-序列视图与时间序列不能重名" tabindex="-1"><a class="header-anchor" href="#限制4-序列视图与时间序列不能重名"><span>限制4 序列视图与时间序列不能重名</span></a></h4><p>序列视图和时间序列都位于同一棵树下，所以他们不能重名。</p><p>任何一条序列的名称（路径）都应该是唯一确定的。</p><h4 id="限制5-序列视图与时间序列的时序数据共用-标签等元数据不共用" tabindex="-1"><a class="header-anchor" href="#限制5-序列视图与时间序列的时序数据共用-标签等元数据不共用"><span>限制5 序列视图与时间序列的时序数据共用，标签等元数据不共用</span></a></h4><p>序列视图是指向时间序列的映射，所以它们完全共用时序数据，由时间序列负责持久化存储。</p><p>但是它们的tag、attributes等元数据不共用。</p><p>这是因为进行业务查询时，面向视图的用户关心的是当前视图的结构，而如果使用group by tag等方式做查询，显然希望是得到视图下含有对应tag的分组效果，而非时间序列的tag的分组效果（用户甚至对那些时间序列毫无感知）。</p><h2 id="序列视图功能介绍" tabindex="-1"><a class="header-anchor" href="#序列视图功能介绍"><span>序列视图功能介绍</span></a></h2><h3 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图"><span>创建视图</span></a></h3><p>创建一个序列视图与创建一条时间序列类似，区别在于需要通过AS关键字指定数据来源，即原始序列。</p><h4 id="创建视图的sql" tabindex="-1"><a class="header-anchor" href="#创建视图的sql"><span>创建视图的SQL</span></a></h4><p>用户可以选取一些序列创建一个视图：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.view.device.status</span>
<span class="line">AS</span>
<span class="line">    SELECT s01  </span>
<span class="line">    FROM root.db.device</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它表示用户从现有设备<code>root.db.device</code>中选出了<code>s01</code>这条序列，创建了序列视图<code>root.view.device.status</code>。</p><p>序列视图可以与时间序列存在于同一实体下，例如：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.db.device.status</span>
<span class="line">AS</span>
<span class="line">    SELECT s01</span>
<span class="line">    FROM root.db.device</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，<code>root.db.device</code>下就有了<code>s01</code>的一份虚拟拷贝，但是使用不同的名字<code>status</code>。</p><p>可以发现，上述两个例子中的序列视图，都是别名序列，我们给用户提供一种针对该序列的更方便的创建方式：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.view.device.status</span>
<span class="line">AS</span>
<span class="line">    root.db.device.s01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建含有计算逻辑的视图" tabindex="-1"><a class="header-anchor" href="#创建含有计算逻辑的视图"><span>创建含有计算逻辑的视图</span></a></h4><p>沿用2.2章节限制1中的例子：</p><blockquote><p>用户在同一个锅炉安装了两个温度计，现在需要计算两个温度值的平均值作为测量结果。用户采集到的是如下两个序列：<code>root.db.d01.temperature01</code>、<code>root.db.d01.temperature02</code>。</p><p>此时，用户可以使用两个序列求平均值，作为视图中的一条序列：<code>root.view.device01.avg_temperature</code>。</p></blockquote><p>如果不使用视图，用户可以这样查询两个温度的平均值：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">SELECT (temperature01 + temperature02) / 2</span>
<span class="line">FROM root.db.d01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果使用序列视图，用户可以这样创建一个视图来简化将来的查询：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.db.d01.avg_temperature</span>
<span class="line">AS</span>
<span class="line">    SELECT (temperature01 + temperature02) / 2</span>
<span class="line">    FROM root.db.d01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后用户可以这样查询：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">SELECT avg_temperature FROM root.db.d01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="不支持嵌套序列视图" tabindex="-1"><a class="header-anchor" href="#不支持嵌套序列视图"><span>不支持嵌套序列视图</span></a></h4><p>继续沿用3.1.2中的例子，现在用户想使用序列视图<code>root.db.d01.avg_temperature</code>创建一个新的视图，这是不允许的。我们目前不支持嵌套视图，无论它是否是别名序列，都不支持。</p><p>比如下列SQL语句会报错：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.view.device.avg_temp_copy</span>
<span class="line">AS</span>
<span class="line">    root.db.d01.avg_temperature                        -- 不支持。不允许嵌套视图</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一次创建多条序列视图" tabindex="-1"><a class="header-anchor" href="#一次创建多条序列视图"><span>一次创建多条序列视图</span></a></h4><p>一次只能指定一个序列视图对用户来说使用不方便，则可以一次指定多条序列，比如：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.db.device.status, root.db.device.sub.hardware</span>
<span class="line">AS</span>
<span class="line">    SELECT s01, s02</span>
<span class="line">    FROM root.db.device</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，上述写法可以做简化：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.db.device(status, sub.hardware)</span>
<span class="line">AS</span>
<span class="line">    SELECT s01, s02</span>
<span class="line">    FROM root.db.device</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述两条语句都等价于如下写法：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.db.device.status</span>
<span class="line">AS</span>
<span class="line">    SELECT s01</span>
<span class="line">    FROM root.db.device;</span>
<span class="line"></span>
<span class="line">CREATE VIEW root.db.device.sub.hardware</span>
<span class="line">AS</span>
<span class="line">    SELECT s02</span>
<span class="line">    FROM root.db.device</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也等价于如下写法</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.db.device.status, root.db.device.sub.hardware</span>
<span class="line">AS</span>
<span class="line">    root.db.device.s01, root.db.device.s02</span>
<span class="line"></span>
<span class="line">-- 或者</span>
<span class="line"></span>
<span class="line">CREATE VIEW root.db.device(status, sub.hardware)</span>
<span class="line">AS</span>
<span class="line">    root.db.device(s01, s02)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="所有序列间的映射关系为静态存储" tabindex="-1"><a class="header-anchor" href="#所有序列间的映射关系为静态存储"><span>所有序列间的映射关系为静态存储</span></a></h5><p>有时，SELECT子句中可能包含运行时才能确定的语句个数，比如如下的语句：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">SELECT s01, s02</span>
<span class="line">FROM root.db.d01, root.db.d02</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>上述语句能匹配到的序列数量是并不确定的，和系统状态有关。即便如此，用户也可以使用它创建视图。</p><p>不过需要特别注意，所有序列间的映射关系为静态存储（创建时固定）！请看以下示例：</p><p>当前数据库中仅含有<code>root.db.d01.s01</code>、<code>root.db.d02.s01</code>、<code>root.db.d02.s02</code>三条序列，接着创建视图：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.view.d(alpha, beta, gamma)</span>
<span class="line">AS</span>
<span class="line">    SELECT s01, s02</span>
<span class="line">    FROM root.db.d01, root.db.d02</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>时间序列之间映射关系如下：</p><table><thead><tr><th>序号</th><th>时间序列</th><th>序列视图</th></tr></thead><tbody><tr><td>1</td><td><code>root.db.d01.s01</code></td><td>root.view.d.alpha</td></tr><tr><td>2</td><td><code>root.db.d02.s01</code></td><td>root.view.d.beta</td></tr><tr><td>3</td><td><code>root.db.d02.s02</code></td><td>root.view.d.gamma</td></tr></tbody></table><p>此后，用户新增了序列<code>root.db.d01.s02</code>，则它不对应到任何视图；接着，用户删除<code>root.db.d01.s01</code>，则查询<code>root.view.d.alpha</code>会直接报错，它也不会对应到<code>root.db.d01.s02</code>。</p><p>请时刻注意，序列间映射关系是静态地、固化地存储的。</p><h4 id="批量创建序列视图" tabindex="-1"><a class="header-anchor" href="#批量创建序列视图"><span>批量创建序列视图</span></a></h4><p>现有若干个设备，每个设备都有一个温度数值，例如：</p><ol><li>root.db.d1.temperature</li><li>root.db.d2.temperature</li><li>...</li></ol><p>这些设备下可能存储了很多其他序列(例如<code>root.db.d1.speed</code>)，但目前可以创建一个视图，只包含这些设备的温度值，而不关系其他序列:</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.db.view(\${2}_temperature）</span>
<span class="line">AS</span>
<span class="line">    SELECT temperature FROM root.db.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,103)),n("p",null,[e[1]||(e[1]=a("这里仿照了查询写回（")),e[2]||(e[2]=n("code",null,"SELECT INTO",-1)),e[3]||(e[3]=a("）对命名规则的约定，使用变量占位符来指定命名规则。可以参考：")),t(i,{to:"/zh/UserGuide/latest/User-Manual/Query-Data.html#%E6%9F%A5%E8%AF%A2%E5%86%99%E5%9B%9E%EF%BC%88INTO-%E5%AD%90%E5%8F%A5%EF%BC%89"},{default:r(()=>e[0]||(e[0]=[a("查询写回（SELECT INTO）")])),_:1})]),e[5]||(e[5]=s(`<p>这里<code>root.db.*.temperature</code>指定了有哪些时间序列会被包含在视图中；<code>\${2}</code>则指定了从时间序列中的哪个节点提取出名字来命名序列视图。</p><p>此处，<code>\${2}</code>指代的是<code>root.db.*.temperature</code>的层级2（从 0 开始），也就是<code>*</code>的匹配结果；<code>\${2}_temperature</code>则是将匹配结果与<code>temperature</code>通过下划线拼接了起来，构成视图下各序列的节点名称。</p><p>上述创建视图的语句，和下列写法是等价的：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.db.view(\${2}_\${3}）</span>
<span class="line">AS</span>
<span class="line">    SELECT temperature from root.db.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终视图中含有这些序列：</p><ol><li>root.db.view.d1_temperature</li><li>root.db.view.d2_temperature</li><li>...</li></ol><p>使用通配符创建，只会存储创建时刻的静态映射关系。</p><h4 id="创建视图时select子句受到一定限制" tabindex="-1"><a class="header-anchor" href="#创建视图时select子句受到一定限制"><span>创建视图时SELECT子句受到一定限制</span></a></h4><p>创建序列视图时，使用的SELECT子句受到一定限制。主要限制如下：</p><ol><li>不能使用<code>WHERE</code>子句。</li><li>不能使用<code>GROUP BY</code>子句。</li><li>不能使用<code>MAX_VALUE</code>等聚合函数。</li></ol><p>简单来说，<code>AS</code>后只能使用<code>SELECT ... FROM ... </code>的结构，且该查询语句的结果必须能构成一条时间序列。</p><h3 id="视图数据查询" tabindex="-1"><a class="header-anchor" href="#视图数据查询"><span>视图数据查询</span></a></h3><p>对于可以支持的数据查询功能，在执行时序数据查询时，序列视图与时间序列可以无差别使用，行为完全一致。</p><p><strong>目前序列视图不支持的查询类型如下：</strong></p><ol><li><strong>align by device 查询</strong></li><li><strong>group by tags 查询</strong></li></ol><p>用户也可以在同一个SELECT语句中混合查询时间序列与序列视图，比如：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">SELECT temperature01, temperature02, avg_temperature</span>
<span class="line">FROM root.db.d01</span>
<span class="line">WHERE temperature01 &lt; temperature02</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果用户想要查询序列的元数据，例如tag、attributes等，则查询到的是序列视图的结果，而并非序列视图所引用的时间序列的结果。</p><p>此外，对于别名序列，如果用户想要得到时间序列的tag、attributes等信息，则需要先查询视图列的映射，找到对应的时间序列，再向时间序列查询tag、attributes等信息。查询视图列的映射的方法将会在3.5部分说明。</p><h3 id="视图修改" tabindex="-1"><a class="header-anchor" href="#视图修改"><span>视图修改</span></a></h3><p>对视图的修改，例如改名、修改计算逻辑、删除等操作，都和创建新的视图类似，需要重新指定整个视图的全部列相关的描述。</p><h4 id="修改视图数据来源" tabindex="-1"><a class="header-anchor" href="#修改视图数据来源"><span>修改视图数据来源</span></a></h4><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">ALTER VIEW root.view.device.status</span>
<span class="line">AS</span>
<span class="line">    SELECT s01</span>
<span class="line">    FROM root.ln.wf.d01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改视图的计算逻辑" tabindex="-1"><a class="header-anchor" href="#修改视图的计算逻辑"><span>修改视图的计算逻辑</span></a></h4><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">ALTER VIEW root.db.d01.avg_temperature</span>
<span class="line">AS</span>
<span class="line">    SELECT (temperature01 + temperature02 + temperature03) / 3</span>
<span class="line">    FROM root.db.d01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="标签点管理" tabindex="-1"><a class="header-anchor" href="#标签点管理"><span>标签点管理</span></a></h4><ul><li>添加新的标签</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">ALTER view root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>添加新的属性</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">ALTER view root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>重命名标签或属性</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">ALTER view root.turbine.d1.s1 RENAME tag1 TO newTag1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>重新设置标签或属性的值</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">ALTER view root.turbine.d1.s1 SET newTag1=newV1, attr1=newV1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>删除已经存在的标签或属性</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">ALTER view root.turbine.d1.s1 DROP tag1, tag2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>更新插入别名，标签和属性</li></ul><blockquote><p>如果该别名，标签或属性原来不存在，则插入，否则，用新值更新原来的旧值</p></blockquote><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">ALTER view root.turbine.d1.s1 UPSERT TAGS(tag2=newV2, tag3=v3) ATTRIBUTES(attr3=v3, attr4=v4)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="删除视图" tabindex="-1"><a class="header-anchor" href="#删除视图"><span>删除视图</span></a></h4><p>因为一个视图就是一条序列，因此可以像删除时间序列一样删除一个视图。</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">DELETE VIEW root.view.device.avg_temperatue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="视图同步" tabindex="-1"><a class="header-anchor" href="#视图同步"><span>视图同步</span></a></h3><p>序列视图的数据总是经由实时的查询获得，因此天然支持数据同步。</p><h4 id="如果依赖的原序列被删除了" tabindex="-1"><a class="header-anchor" href="#如果依赖的原序列被删除了"><span>如果依赖的原序列被删除了</span></a></h4><p>当序列视图查询时（序列解析时），如果依赖的时间序列不存在，则<strong>返回空结果集</strong>。</p><p>这和查询一个不存在的序列的反馈类似，但是有区别：如果依赖的时间序列无法解析，空结果集是包含表头的，以此来提醒用户该视图是存在问题的。</p><p>此外，被依赖的时间序列删除时，不会去查找是否有依赖于该列的视图，用户不会收到任何警告。</p><h4 id="不支持非别名序列的数据写入" tabindex="-1"><a class="header-anchor" href="#不支持非别名序列的数据写入"><span>不支持非别名序列的数据写入</span></a></h4><p>不支持向非别名序列的写入。</p><p>详情请参考前文 2.1.6 限制2</p><h4 id="序列的元数据不共用" tabindex="-1"><a class="header-anchor" href="#序列的元数据不共用"><span>序列的元数据不共用</span></a></h4><p>详情请参考前文2.1.6 限制5</p><h3 id="视图元数据查询" tabindex="-1"><a class="header-anchor" href="#视图元数据查询"><span>视图元数据查询</span></a></h3><p>视图元数据查询，特指查询视图本身的元数据（例如视图有多少列），以及数据库内视图的信息（例如有哪些视图）。</p><h4 id="查看当前的视图列" tabindex="-1"><a class="header-anchor" href="#查看当前的视图列"><span>查看当前的视图列</span></a></h4><p>用户有两种查询方式：</p><ol><li>使用<code>SHOW TIMESERIES</code>进行查询，该查询既包含时间序列，也包含序列视图。但是只能显示视图的部分属性</li><li>使用<code>SHOW VIEW</code>进行查询，该查询只包含序列视图。能完整显示序列视图的属性。</li></ol><p>举例：</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">IoTDB&gt; show timeseries;</span>
<span class="line">+--------------------+-----+--------+--------+--------+-----------+----+----------+--------+------------------+--------+</span>
<span class="line">|          Timeseries|Alias|Database|DataType|Encoding|Compression|Tags|Attributes|Deadband|DeadbandParameters|ViewType|</span>
<span class="line">+--------------------+-----+--------+--------+--------+-----------+----+----------+--------+------------------+--------+</span>
<span class="line">|root.db.device.s01  | null| root.db|   INT32|     RLE|     SNAPPY|null|      null|    null|              null|    BASE|</span>
<span class="line">+--------------------+-----+--------+--------+--------+-----------+----+----------+--------+------------------+--------+</span>
<span class="line">|root.db.view.status | null| root.db|   INT32|     RLE|     SNAPPY|null|      null|    null|              null|    VIEW|</span>
<span class="line">+--------------------+-----+--------+--------+--------+-----------+----+----------+--------+------------------+--------+</span>
<span class="line">|root.db.d01.temp01  | null| root.db|   FLOAT|     RLE|     SNAPPY|null|      null|    null|              null|    BASE|</span>
<span class="line">+--------------------+-----+--------+--------+--------+-----------+----+----------+--------+------------------+--------+</span>
<span class="line">|root.db.d01.temp02  | null| root.db|   FLOAT|     RLE|     SNAPPY|null|      null|    null|              null|    BASE|</span>
<span class="line">+--------------------+-----+--------+--------+--------+-----------+----+----------+--------+------------------+--------+</span>
<span class="line">|root.db.d01.avg_temp| null| root.db|   FLOAT|    null|       null|null|      null|    null|              null|    VIEW|</span>
<span class="line">+--------------------+-----+--------+--------+--------+-----------+----+----------+--------+------------------+--------+</span>
<span class="line">Total line number = 5</span>
<span class="line">It costs 0.789s</span>
<span class="line">IoTDB&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后一列<code>ViewType</code>中显示了该序列的类型，时间序列为BASE，序列视图是VIEW。</p><p>此外，某些序列视图的属性会缺失，比如<code>root.db.d01.avg_temp</code>是由温度均值计算得来，所以<code>Encoding</code>和<code>Compression</code>属性都为空值。</p><p>此外，<code>SHOW TIMESERIES</code>语句的查询结果主要分为两部分:</p><ol><li>时序数据的信息，例如数据类型，压缩方式，编码等</li><li>其他元数据信息，例如tag，attribute，所属database等</li></ol><p>对于序列视图，展示的时序数据信息与其原始序列一致或者为空值（比如计算得到的平均温度有数据类型但是无压缩方式）；展示的元数据信息则是视图的内容。</p><p>如果要得知视图的更多信息，需要使用<code>SHOW \`\`VIEW</code>。<code>SHOW \`\`VIEW</code>中展示视图的数据来源等。</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">IoTDB&gt; show VIEW root.**;</span>
<span class="line">+--------------------+--------+--------+----+----------+--------+-----------------------------------------+</span>
<span class="line">|          Timeseries|Database|DataType|Tags|Attributes|ViewType|                                   SOURCE|</span>
<span class="line">+--------------------+--------+--------+----+----------+--------+-----------------------------------------+</span>
<span class="line">|root.db.view.status | root.db|   INT32|null|      null|    VIEW|                       root.db.device.s01|</span>
<span class="line">+--------------------+--------+--------+----+----------+--------+-----------------------------------------+</span>
<span class="line">|root.db.d01.avg_temp| root.db|   FLOAT|null|      null|    VIEW|(root.db.d01.temp01+root.db.d01.temp02)/2|</span>
<span class="line">+--------------------+--------+--------+----+----------+--------+-----------------------------------------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.789s</span>
<span class="line">IoTDB&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后一列<code>SOURCE</code>显示了该序列视图的数据来源，列出了创建该序列的SQL语句。</p><h5 id="关于数据类型" tabindex="-1"><a class="header-anchor" href="#关于数据类型"><span>关于数据类型</span></a></h5><p>上述两种查询都涉及视图的数据类型。视图的数据类型是根据定义视图的查询语句或别名序列的原始时间序列类型推断出来的。这个数据类型是根据当前系统的状态实时计算出来的，因此在不同时刻查询到的数据类型可能是改变的。</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2><h4 id="q1-我想让视图实现类型转换的功能。例如-原有一个int32类型的时间序列-和其他int64类型的序列被放在了同一个视图中。我现在希望通过视图查询到的数据-都能自动转换为int64类型。" tabindex="-1"><a class="header-anchor" href="#q1-我想让视图实现类型转换的功能。例如-原有一个int32类型的时间序列-和其他int64类型的序列被放在了同一个视图中。我现在希望通过视图查询到的数据-都能自动转换为int64类型。"><span>Q1：我想让视图实现类型转换的功能。例如，原有一个int32类型的时间序列，和其他int64类型的序列被放在了同一个视图中。我现在希望通过视图查询到的数据，都能自动转换为int64类型。</span></a></h4><blockquote><p>Ans：这不是序列视图的职能范围。但是可以使用<code>CAST</code>进行转换，比如：</p></blockquote><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE VIEW root.db.device.int64_status</span>
<span class="line">AS </span>
<span class="line">    SELECT CAST(s1, &#39;type&#39;=&#39;INT64&#39;) from root.db.device</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这样，查询<code>root.view.status</code>时，就会得到int64类型的结果。</p><p>请特别注意，上述例子中，序列视图的数据是通过<code>CAST</code>转换得到的，因此<code>root.db.device.int64_status</code>并不是一条别名序列，也就<strong>不支持写入</strong>。</p></blockquote><h4 id="q2-是否支持默认命名-选择若干时间序列-创建视图-但是我不指定每条序列的名字-由数据库自动命名" tabindex="-1"><a class="header-anchor" href="#q2-是否支持默认命名-选择若干时间序列-创建视图-但是我不指定每条序列的名字-由数据库自动命名"><span>Q2：是否支持默认命名？选择若干时间序列，创建视图；但是我不指定每条序列的名字，由数据库自动命名？</span></a></h4><blockquote><p>Ans：不支持。用户必须明确指定命名。</p></blockquote><h4 id="q3-在原有体系中-创建时间序列root-db-device-s01-可以发现自动创建了databaseroot-db-自动创建了deviceroot-db-device。接着删除时间序列root-db-device-s01-可以发现root-db-device被自动删除-root-db却还是保留的。对于创建视图-会沿用这一机制吗-出于什么考虑呢" tabindex="-1"><a class="header-anchor" href="#q3-在原有体系中-创建时间序列root-db-device-s01-可以发现自动创建了databaseroot-db-自动创建了deviceroot-db-device。接着删除时间序列root-db-device-s01-可以发现root-db-device被自动删除-root-db却还是保留的。对于创建视图-会沿用这一机制吗-出于什么考虑呢"><span>Q3：在原有体系中，创建时间序列<code>root.db.device.s01</code>，可以发现自动创建了database<code>root.db</code>，自动创建了device<code>root.db.device</code>。接着删除时间序列<code>root.db.device.s01</code>，可以发现<code>root.db.device</code>被自动删除，<code>root.db</code>却还是保留的。对于创建视图，会沿用这一机制吗？出于什么考虑呢？</span></a></h4><blockquote><p>Ans：保持原有的行为不变，引入视图功能不会改变原有的这些逻辑。</p></blockquote><h4 id="q4-是否支持序列视图重命名" tabindex="-1"><a class="header-anchor" href="#q4-是否支持序列视图重命名"><span>Q4：是否支持序列视图重命名？</span></a></h4><blockquote><p>A：当前版本不支持重命名，可以自行创建新名称的视图投入使用。</p></blockquote>`,81))])}const b=l(o,[["render",u],["__file","IoTDB-View_timecho.html.vue"]]),m=JSON.parse('{"path":"/zh/UserGuide/latest/User-Manual/IoTDB-View_timecho.html","title":"视图","lang":"zh-CN","frontmatter":{"description":"视图 序列视图应用背景 应用场景1 时间序列重命名（PI资产管理） 实际应用中，采集数据的设备可能使用人类难以理解的标识号来命名，这给业务层带来了查询上的困难。 而序列视图能够重新组织管理这些序列，在不改变原有序列内容、无需新建或拷贝序列的情况下，使用新的模型结构来访问他们。 例如：一台云端设备使用自己的网卡MAC地址组成实体编号，存储数据时写入如下时...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/User-Manual/IoTDB-View_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/IoTDB-View_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"视图"}],["meta",{"property":"og:description","content":"视图 序列视图应用背景 应用场景1 时间序列重命名（PI资产管理） 实际应用中，采集数据的设备可能使用人类难以理解的标识号来命名，这给业务层带来了查询上的困难。 而序列视图能够重新组织管理这些序列，在不改变原有序列内容、无需新建或拷贝序列的情况下，使用新的模型结构来访问他们。 例如：一台云端设备使用自己的网卡MAC地址组成实体编号，存储数据时写入如下时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-15T06:41:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-15T06:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"视图\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-15T06:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"序列视图应用背景","slug":"序列视图应用背景","link":"#序列视图应用背景","children":[{"level":3,"title":"应用场景1 时间序列重命名（PI资产管理）","slug":"应用场景1-时间序列重命名-pi资产管理","link":"#应用场景1-时间序列重命名-pi资产管理","children":[]},{"level":3,"title":"应用场景2 简化业务层查询逻辑","slug":"应用场景2-简化业务层查询逻辑","link":"#应用场景2-简化业务层查询逻辑","children":[]},{"level":3,"title":"应用场景3 辅助权限管理","slug":"应用场景3-辅助权限管理","link":"#应用场景3-辅助权限管理","children":[]},{"level":3,"title":"设计序列视图功能的动机","slug":"设计序列视图功能的动机","link":"#设计序列视图功能的动机","children":[]}]},{"level":2,"title":"序列视图概念","slug":"序列视图概念","link":"#序列视图概念","children":[{"level":3,"title":"术语概念","slug":"术语概念","link":"#术语概念","children":[]},{"level":3,"title":"序列视图","slug":"序列视图","link":"#序列视图","children":[]},{"level":3,"title":"别名序列","slug":"别名序列","link":"#别名序列","children":[]},{"level":3,"title":"嵌套视图","slug":"嵌套视图","link":"#嵌套视图","children":[]},{"level":3,"title":"IoTDB中对序列视图的一些约束","slug":"iotdb中对序列视图的一些约束","link":"#iotdb中对序列视图的一些约束","children":[]}]},{"level":2,"title":"序列视图功能介绍","slug":"序列视图功能介绍","link":"#序列视图功能介绍","children":[{"level":3,"title":"创建视图","slug":"创建视图","link":"#创建视图","children":[]},{"level":3,"title":"视图数据查询","slug":"视图数据查询","link":"#视图数据查询","children":[]},{"level":3,"title":"视图修改","slug":"视图修改","link":"#视图修改","children":[]},{"level":3,"title":"视图同步","slug":"视图同步","link":"#视图同步","children":[]},{"level":3,"title":"视图元数据查询","slug":"视图元数据查询","link":"#视图元数据查询","children":[]}]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[]}],"git":{"createdTime":1689242051000,"updatedTime":1723704118000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":2},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":2},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":16.09,"words":4826},"filePathRelative":"zh/UserGuide/latest/User-Manual/IoTDB-View_timecho.md","localizedDate":"2023年7月13日","autoDesc":true}');export{b as comp,m as data};
