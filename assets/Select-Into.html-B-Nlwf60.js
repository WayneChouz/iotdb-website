import{_ as t,c as l,b as p,d as n,e,a as i,w as o,r as c,o as r}from"./app-CYbL30xh.js";const u={};function d(k,s){const a=c("RouteLink");return r(),l("div",null,[s[3]||(s[3]=p(`<h1 id="query-write-back-select-into" tabindex="-1"><a class="header-anchor" href="#query-write-back-select-into"><span>Query Write-back (SELECT INTO)</span></a></h1><p>The <code>SELECT ... INTO ...</code> statement copies data from query result set into target time series.</p><h2 id="sql" tabindex="-1"><a class="header-anchor" href="#sql"><span>SQL</span></a></h2><h3 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h3><p><strong>The following is the syntax definition of the <code>select</code> statement:</strong></p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">selectClause </span>
<span class="line">intoClause? </span>
<span class="line">fromClause </span>
<span class="line">whereClause? </span>
<span class="line">specialClause?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the <code>intoClause</code> is removed, then the <code>select</code> statement is a simple query statement.</p><p>The <code>intoClause</code> is the mark clause for query write-back.</p><p><strong>The following is the definition of the <code>intoClause</code>:</strong></p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">intoClause</span>
<span class="line">  : <span class="token keyword">INTO</span> ALIGNED? intoPath <span class="token punctuation">(</span>COMMA intoPath<span class="token punctuation">)</span><span class="token operator">*</span></span>
<span class="line">  <span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">intoPath</span>
<span class="line">  : fullPath</span>
<span class="line">  <span class="token operator">|</span> nodeNameWithoutStar <span class="token punctuation">(</span>DOT nodeNameWithoutStar<span class="token punctuation">)</span><span class="token operator">*</span></span>
<span class="line">  <span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are 2 ways to specify target paths (<code>intoPath</code>).</p><ul><li><p>Full target series name starting with <code>root</code>.</p></li><li><p>Example：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 </span>
<span class="line"><span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>t1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>t2 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Suffix path does not start with <code>root</code>. In this case, the target series name equals to the series prefix path in the <code>from</code> clause + the suffix path.</p><ul><li><p>Example:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 </span>
<span class="line"><span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>which equals to:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 </span>
<span class="line"><span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>t1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>t2 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><p>**In <code>intoPath</code>, you can also use <code>\${i}</code> to represent part of the prefix path in the <code>from</code> clause. **</p><p>For example, for the path <code>root.sg1.d1.v1</code>, <code>\${1}</code> means <code>sg1</code>, <code>\${2}</code> means <code>d1</code>, and <code>\${3}</code> means <code>v1</code>.</p><ul><li><p>Example:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s1</span>
<span class="line"><span class="token keyword">into</span> \${<span class="token number">1</span>}_t1<span class="token punctuation">,</span> \${<span class="token number">2</span>}<span class="token punctuation">,</span> root<span class="token punctuation">.</span>\${<span class="token number">2</span>}<span class="token punctuation">.</span>\${<span class="token number">1</span>}<span class="token punctuation">.</span>t2</span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>which equals to:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s1</span>
<span class="line"><span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>sg_t1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>d1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>t2</span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>**You can specify whether the target timeseries are aligned via the keyword <code>ALIGNED</code>. **</p><p>When the target aligned timeseries are existed, you need to ensure that the types of the source and target time series match.</p><p>When the target aligned timeseries are not existed, the system will automatically create the target aligned time series.</p><ul><li><p>Example:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3</span>
<span class="line"><span class="token keyword">into</span> aligned root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d2<span class="token punctuation">.</span>t1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d2<span class="token punctuation">.</span>t2<span class="token punctuation">,</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d2<span class="token punctuation">.</span>t3</span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="supported-query-types" tabindex="-1"><a class="header-anchor" href="#supported-query-types"><span>Supported Query Types</span></a></h3><p>**Note that except for the following types of queries, other types of queries (such as <code>LAST</code> queries and raw aggregation queries) are not supported. **</p><ul><li><p>Raw time series query</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 </span>
<span class="line"><span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Time series generating function query（including UDF query）</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Arithmetic query</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> s1 <span class="token operator">+</span> s3 </span>
<span class="line"><span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2<span class="token punctuation">,</span> t3 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Nested query</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token operator">-</span>s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>cos<span class="token punctuation">(</span>tan<span class="token punctuation">(</span>s1 <span class="token operator">+</span> s2 <span class="token operator">*</span> s3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> cos<span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span> top_k<span class="token punctuation">(</span>s1 <span class="token operator">+</span> s3<span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2<span class="token punctuation">,</span> t3 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Fill query</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1 </span>
<span class="line"><span class="token keyword">into</span> fill_s1 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1 </span>
<span class="line"><span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">10</span> </span>
<span class="line">fill<span class="token punctuation">(</span><span class="token keyword">float</span> <span class="token punctuation">[</span>linear<span class="token punctuation">,</span> <span class="token number">1</span>ms<span class="token punctuation">,</span> <span class="token number">1</span>ms<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Group-by query</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">into</span> group_by_s1 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1 </span>
<span class="line"><span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span>ms<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Group-by-fill query</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> last_value<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">into</span> group_by_fill_s1 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1 </span>
<span class="line"><span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span> </span>
<span class="line">fill <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">[</span>PREVIOUS<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="special-cluases-supported-in-queries" tabindex="-1"><a class="header-anchor" href="#special-cluases-supported-in-queries"><span>Special Cluases Supported in Queries</span></a></h3><p>**Note that except for the following clauses, other query clauses (such as <code>DESC</code>, <code>SOFFSET</code>, etc.) are not supported. **</p><ul><li><p>Value filter</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 </span>
<span class="line"><span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"><span class="token keyword">where</span> s1 <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">and</span> s2 <span class="token operator">&lt;</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Time filter</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 </span>
<span class="line"><span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"><span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>LIMIT / OFFSET</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 </span>
<span class="line"><span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 </span>
<span class="line"><span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1</span>
<span class="line"><span class="token keyword">limit</span> <span class="token number">5</span> <span class="token keyword">offset</span> <span class="token number">1000</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="other-restrictions" tabindex="-1"><a class="header-anchor" href="#other-restrictions"><span>Other Restrictions</span></a></h3><ul><li>The number of source series in the <code>select</code> clause and the number of target series in the <code>into</code> clause must be the same.</li><li>The <code>select *</code> and <code>select **</code> clause are not supported.</li><li>The target series in the <code>into</code> clause do not need to be created in advance. When the target series in the <code>into</code> clause already exist, you need to ensure that the source series in the <code>select</code> clause and the target series in the <code>into</code> clause have the same data types.</li><li>The target series in the <code>into</code> clause must be different from each other.</li><li>Only one prefix path of a series is allowed in the <code>from</code> clause.</li><li><code>*</code> and <code>**</code> are not allowed in the <code>from</code> clause.</li><li>Aligned Timeseries has not been supported in Time series generating function query（including UDF query）/ Arithmetic query / Nested query yet. An error message is expected if you use these types of query with Aligned Timeseries selected in the <code>select</code> clause.</li></ul><h2 id="user-permission-management" tabindex="-1"><a class="header-anchor" href="#user-permission-management"><span>User Permission Management</span></a></h2><p>The user must have the following permissions to execute a query write-back statement:</p><ul><li>All <code>READ_TIMESERIES</code> permissions for the source series in the <code>select</code> clause</li><li>All <code>INSERT_TIMESERIES</code> permissions for the target series in the <code>into</code> clause</li></ul>`,30)),n("p",null,[s[1]||(s[1]=e("For more user permissions related content, please refer to ")),i(a,{to:"/UserGuide/V0.13.x/Administration-Management/Administration.html"},{default:o(()=>s[0]||(s[0]=[e("Account Management Statements")])),_:1}),s[2]||(s[2]=e("."))]),s[4]||(s[4]=n("h2",{id:"configurable-properties",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#configurable-properties"},[n("span",null,"Configurable Properties")])],-1)),s[5]||(s[5]=n("ul",null,[n("li",null,[n("code",null,"select_into_insert_tablet_plan_row_limit"),e(": The maximum number of rows can be processed in one insert-tablet-plan when executing select-into statements. 10000 by default.")])],-1))])}const h=t(u,[["render",d],["__file","Select-Into.html.vue"]]),v=JSON.parse('{"path":"/UserGuide/V0.13.x/Process-Data/Select-Into.html","title":"Query Write-back (SELECT INTO)","lang":"en-US","frontmatter":{"description":"Query Write-back (SELECT INTO) The SELECT ... INTO ... statement copies data from query result set into target time series. SQL Syntax The following is the syntax definition of ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Process-Data/Select-Into.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Process-Data/Select-Into.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Query Write-back (SELECT INTO)"}],["meta",{"property":"og:description","content":"Query Write-back (SELECT INTO) The SELECT ... INTO ... statement copies data from query result set into target time series. SQL Syntax The following is the syntax definition of ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Query Write-back (SELECT INTO)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SQL","slug":"sql","link":"#sql","children":[{"level":3,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":3,"title":"Supported Query Types","slug":"supported-query-types","link":"#supported-query-types","children":[]},{"level":3,"title":"Special Cluases Supported in Queries","slug":"special-cluases-supported-in-queries","link":"#special-cluases-supported-in-queries","children":[]},{"level":3,"title":"Other Restrictions","slug":"other-restrictions","link":"#other-restrictions","children":[]}]},{"level":2,"title":"User Permission Management","slug":"user-permission-management","link":"#user-permission-management","children":[]},{"level":2,"title":"Configurable Properties","slug":"configurable-properties","link":"#configurable-properties","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.88,"words":865},"filePathRelative":"UserGuide/V0.13.x/Process-Data/Select-Into.md","localizedDate":"July 10, 2023","autoDesc":true}');export{h as comp,v as data};
