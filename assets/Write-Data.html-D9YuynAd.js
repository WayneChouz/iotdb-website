import{_ as p,r as o,o as l,c,b as s,d as n,a as t,w as e,e as i}from"./app-CIPkfidu.js";const r={},u=s("h1",{id:"数据写入和删除",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#数据写入和删除"},[s("span",null,"数据写入和删除")])],-1),d=s("h2",{id:"写入数据",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#写入数据"},[s("span",null,"写入数据")])],-1),k=i(`<h3 id="使用-insert-语句" tabindex="-1"><a class="header-anchor" href="#使用-insert-语句"><span>使用 INSERT 语句</span></a></h3><p>使用 INSERT 语句可以向指定的已经创建的一条或多条时间序列中插入数据。对于每一条数据，均由一个时间戳类型的时间戳和一个数值或布尔值、字符串类型的传感器采集值组成。</p><p>在本节的场景实例下，以其中的两个时间序列<code>root.ln.wf02.wt02.status</code>和<code>root.ln.wf02.wt02.hardware</code>为例 ，它们的数据类型分别为 BOOLEAN 和 TEXT。</p><p>单列数据插入示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span><span class="token keyword">status</span><span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>hardware<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上示例代码将长整型的 timestamp 以及值为 true 的数据插入到时间序列<code>root.ln.wf02.wt02.status</code>中和将长整型的 timestamp 以及值为”v1”的数据插入到时间序列<code>root.ln.wf02.wt02.hardware</code>中。执行成功后会返回执行时间，代表数据插入已完成。</p><blockquote><p>注意：在 IoTDB 中，TEXT 类型的数据单双引号都可以来表示，上面的插入语句是用的是双引号表示 TEXT 类型数据，下面的示例将使用单引号表示 TEXT 类型数据。</p></blockquote><p>INSERT 语句还可以支持在同一个时间点下多列数据的插入，同时向 2 时间点插入上述两个时间序列的值，多列数据插入示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，INSERT 语句支持一次性插入多行数据，同时向 2 个不同时间点插入上述时间序列的值，示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;v4&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插入数据后我们可以使用 SELECT 语句简单查询已插入的数据。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果如图所示。由查询结果可以看出，单列、多列数据的插入操作正确执行。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+
|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|
+-----------------------------+--------------------------+------------------------+
|1970-01-01T08:00:00.001+08:00|                        v1|                    true|
|1970-01-01T08:00:00.002+08:00|                        v2|                   false|
|1970-01-01T08:00:00.003+08:00|                        v3|                   false|
|1970-01-01T08:00:00.004+08:00|                        v4|                    true|
+-----------------------------+--------------------------+------------------------+
Total line number = 4
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，我们可以省略 timestamp 列，此时系统将使用当前的系统时间作为该数据点的时间戳，示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：</strong> 当一次插入多行数据时必须指定时间戳。</p><h3 id="向对齐时间序列插入数据" tabindex="-1"><a class="header-anchor" href="#向对齐时间序列插入数据"><span>向对齐时间序列插入数据</span></a></h3><p>向对齐时间序列插入数据只需在SQL中增加<code>ALIGNED</code>关键词，其他类似。</p><p>示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">create</span> aligned timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span>s1 INT32<span class="token punctuation">,</span> s2 <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如图所示。由查询结果可以看出，数据的插入操作正确执行。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+--------------+--------------+
|                         Time|root.sg1.d2.s1|root.sg1.d2.s2|
+-----------------------------+--------------+--------------+
|1970-01-01T08:00:00.001+08:00|             1|           1.0|
|1970-01-01T08:00:00.002+08:00|             2|           2.0|
|1970-01-01T08:00:00.003+08:00|             3|           3.0|
+-----------------------------+--------------+--------------+
Total line number = 3
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function m(v,g){const a=o("RouteLink");return l(),c("div",null,[u,d,s("p",null,[n("IoTDB 为用户提供多种插入实时数据的方式，例如在 "),t(a,{to:"/zh/UserGuide/V0.13.x/QuickStart/Command-Line-Interface.html"},{default:e(()=>[n("Cli/Shell 工具")]),_:1}),n(" 中直接输入插入数据的 INSERT 语句，或使用 Java API（标准 "),t(a,{to:"/zh/UserGuide/V0.13.x/API/Programming-JDBC.html"},{default:e(()=>[n("Java JDBC")]),_:1}),n(" 接口）单条或批量执行插入数据的 INSERT 语句。")]),s("p",null,[n("本节主要为您介绍实时数据接入的 INSERT 语句在场景中的实际使用示例，有关 INSERT SQL 语句的详细语法请参见本文 "),t(a,{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:e(()=>[n("INSERT 语句")]),_:1}),n(" 节。")]),k])}const w=p(r,[["render",m],["__file","Write-Data.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.html","title":"数据写入和删除","lang":"zh-CN","frontmatter":{"description":"数据写入和删除 写入数据 IoTDB 为用户提供多种插入实时数据的方式，例如在 中直接输入插入数据的 INSERT 语句，或使用 Java API（标准 接口）单条或批量执行插入数据的 INSERT 语句。 本节主要为您介绍实时数据接入的 INSERT 语句在场景中的实际使用示例，有关 INSERT SQL 语句的详细语法请参见本文 节。 使用 INS...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据写入和删除"}],["meta",{"property":"og:description","content":"数据写入和删除 写入数据 IoTDB 为用户提供多种插入实时数据的方式，例如在 中直接输入插入数据的 INSERT 语句，或使用 Java API（标准 接口）单条或批量执行插入数据的 INSERT 语句。 本节主要为您介绍实时数据接入的 INSERT 语句在场景中的实际使用示例，有关 INSERT SQL 语句的详细语法请参见本文 节。 使用 INS..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据写入和删除\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"写入数据","slug":"写入数据","link":"#写入数据","children":[{"level":3,"title":"使用 INSERT 语句","slug":"使用-insert-语句","link":"#使用-insert-语句","children":[]},{"level":3,"title":"向对齐时间序列插入数据","slug":"向对齐时间序列插入数据","link":"#向对齐时间序列插入数据","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.23,"words":970},"filePathRelative":"zh/UserGuide/V0.13.x/Write-And-Delete-Data/Write-Data.md","localizedDate":"2023年7月10日","autoDesc":true}');export{w as comp,h as data};
