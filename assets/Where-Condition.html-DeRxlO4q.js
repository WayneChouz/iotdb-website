import{_ as t,c as p,b as a,d as l,e as n,a as o,w as i,r,o as c}from"./app-CYbL30xh.js";const d={};function u(m,s){const e=r("RouteLink");return c(),p("div",null,[s[3]||(s[3]=a('<h1 id="查询过滤条件" tabindex="-1"><a class="header-anchor" href="#查询过滤条件"><span>查询过滤条件</span></a></h1><p><code>WHERE</code> 子句指定了对数据行的筛选条件，由一个 <code>whereCondition</code> 组成。</p><p><code>whereCondition</code> 是一个逻辑表达式，对于要选择的每一行，其计算结果为真。如果没有 <code>WHERE</code> 子句，将选择所有行。<br> 在 <code>whereCondition</code> 中，可以使用除聚合函数之外的任何 IOTDB 支持的函数和运算符。</p><p>根据过滤条件的不同，可以分为时间过滤条件和值过滤条件。时间过滤条件和值过滤条件可以混合使用。</p><h2 id="时间过滤条件" tabindex="-1"><a class="header-anchor" href="#时间过滤条件"><span>时间过滤条件</span></a></h2>',5)),l("p",null,[s[1]||(s[1]=n("使用时间过滤条件可以筛选特定时间范围的数据。对于时间戳支持的格式，请参考 ")),o(e,{to:"/zh/UserGuide/V1.0.x/Data-Concept/Data-Type.html"},{default:i(()=>s[0]||(s[0]=[n("时间戳类型")])),_:1}),s[2]||(s[2]=n(" 。"))]),s[4]||(s[4]=a(`<p>示例如下：</p><ol><li><p>选择时间戳大于 2022-01-01T00:05:00.000 的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择时间戳等于 2022-01-01T00:05:00.000 的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择时间区间 [2017-11-01T00:05:00.000, 2017-11-01T00:12:00.000) 内的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><p>注：在上述示例中，<code>time</code> 也可写做 <code>timestamp</code>。</p><h2 id="值过滤条件" tabindex="-1"><a class="header-anchor" href="#值过滤条件"><span>值过滤条件</span></a></h2><p>使用值过滤条件可以筛选数据值满足特定条件的数据。<br><strong>允许</strong>使用 select 子句中未选择的时间序列作为值过滤条件。</p><p>示例如下：</p><ol><li><p>选择值大于 36.5 的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">&gt;</span> <span class="token number">36.5</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择值等于 true 的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">status</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>选择区间 [36.5,40] 内或之外的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">between</span> <span class="token number">36.5</span> <span class="token operator">and</span> <span class="token number">40</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">not</span> <span class="token operator">between</span> <span class="token number">36.5</span> <span class="token operator">and</span> <span class="token number">40</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择值在特定范围内的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择值在特定范围外的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择值为空的数据:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>选择值为非空的数据:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询"><span>模糊查询</span></a></h2><p>对于 TEXT 类型的数据，支持使用 <code>Like</code> 和 <code>Regexp</code> 运算符对数据进行模糊匹配</p><h3 id="使用-like-进行模糊匹配" tabindex="-1"><a class="header-anchor" href="#使用-like-进行模糊匹配"><span>使用 <code>Like</code> 进行模糊匹配</span></a></h3><p><strong>匹配规则：</strong></p><ul><li><code>%</code> 表示任意0个或多个字符。</li><li><code>_</code> 表示任意单个字符。</li></ul><p><strong>示例 1：</strong> 查询 <code>root.sg.d1</code> 下 <code>value</code> 含有<code>&#39;cc&#39;</code>的数据。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select * from root.sg.d1 where value like &#39;%cc%&#39;</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|                         Time|root.sg.d1.value|</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|2017-11-01T00:00:00.000+08:00|        aabbccdd| </span>
<span class="line">|2017-11-01T00:00:01.000+08:00|              cc|</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 查询 <code>root.sg.d1</code> 下 <code>value</code> 中间为 <code>&#39;b&#39;</code>、前后为任意单个字符的数据。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select * from root.sg.device where value like &#39;_b_&#39;</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|                         Time|root.sg.d1.value|</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|2017-11-01T00:00:02.000+08:00|             abc| </span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-regexp-进行模糊匹配" tabindex="-1"><a class="header-anchor" href="#使用-regexp-进行模糊匹配"><span>使用 <code>Regexp</code> 进行模糊匹配</span></a></h3><p>需要传入的过滤条件为 <strong>Java 标准库风格的正则表达式</strong>。</p><p><strong>常见的正则匹配举例：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">长度为3-20的所有字符：^.{3,20}$</span>
<span class="line">大写英文字符：^[A-Z]+$</span>
<span class="line">数字和英文字符：^[A-Za-z0-9]+$</span>
<span class="line">以a开头的：^a.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 1：</strong> 查询 root.sg.d1 下 value 值为26个英文字符组成的字符串。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.d1 where value regexp <span class="token string">&#39;^[A-Za-z]+$&#39;</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span>                         Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:00.000+08:00<span class="token operator">|</span>        aabbccdd<span class="token operator">|</span> </span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:01.000+08:00<span class="token operator">|</span>              cc<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">It costs <span class="token number">0</span>.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 查询 root.sg.d1 下 value 值为26个小写英文字符组成的字符串且时间大于100的。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.d1 where value regexp <span class="token string">&#39;^[a-z]+$&#39;</span> and <span class="token function">time</span> <span class="token operator">&gt;</span> <span class="token number">100</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span>                         Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:00.000+08:00<span class="token operator">|</span>        aabbccdd<span class="token operator">|</span> </span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:01.000+08:00<span class="token operator">|</span>              cc<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">It costs <span class="token number">0</span>.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24))])}const v=t(d,[["render",u],["__file","Where-Condition.html.vue"]]),b=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Query-Data/Where-Condition.html","title":"查询过滤条件","lang":"zh-CN","frontmatter":{"description":"查询过滤条件 WHERE 子句指定了对数据行的筛选条件，由一个 whereCondition 组成。 whereCondition 是一个逻辑表达式，对于要选择的每一行，其计算结果为真。如果没有 WHERE 子句，将选择所有行。 在 whereCondition 中，可以使用除聚合函数之外的任何 IOTDB 支持的函数和运算符。 根据过滤条件的不同，可...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Query-Data/Where-Condition.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Query-Data/Where-Condition.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"查询过滤条件"}],["meta",{"property":"og:description","content":"查询过滤条件 WHERE 子句指定了对数据行的筛选条件，由一个 whereCondition 组成。 whereCondition 是一个逻辑表达式，对于要选择的每一行，其计算结果为真。如果没有 WHERE 子句，将选择所有行。 在 whereCondition 中，可以使用除聚合函数之外的任何 IOTDB 支持的函数和运算符。 根据过滤条件的不同，可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"查询过滤条件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"时间过滤条件","slug":"时间过滤条件","link":"#时间过滤条件","children":[]},{"level":2,"title":"值过滤条件","slug":"值过滤条件","link":"#值过滤条件","children":[]},{"level":2,"title":"模糊查询","slug":"模糊查询","link":"#模糊查询","children":[{"level":3,"title":"使用 Like 进行模糊匹配","slug":"使用-like-进行模糊匹配","link":"#使用-like-进行模糊匹配","children":[]},{"level":3,"title":"使用 Regexp 进行模糊匹配","slug":"使用-regexp-进行模糊匹配","link":"#使用-regexp-进行模糊匹配","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.31,"words":992},"filePathRelative":"zh/UserGuide/V1.0.x/Query-Data/Where-Condition.md","localizedDate":"2023年7月10日","autoDesc":true}');export{v as comp,b as data};
