import{_ as e,c as a,b as s,o as t}from"./app-i6u37es5.js";const l={};function i(o,n){return t(),a("div",null,n[0]||(n[0]=[s(`<h1 id="aggregate-functions" tabindex="-1"><a class="header-anchor" href="#aggregate-functions"><span>Aggregate Functions</span></a></h1><p>Aggregate functions are many-to-one functions. They perform aggregate calculations on a set of values, resulting in a single aggregated result.</p><p>All aggregate functions except <code>COUNT()</code>, <code>COUNT_IF()</code> ignore null values and return null when there are no input rows or all values are null. For example, <code>SUM()</code> returns null instead of zero, and <code>AVG()</code> does not include null values in the count.</p><p>The aggregate functions supported by IoTDB are as follows:</p><table><thead><tr><th>Function Name</th><th>Function Description</th><th>Allowed Input Data Types</th><th>Output Data Types</th></tr></thead><tbody><tr><td>SUM</td><td>Summation.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>DOUBLE</td></tr><tr><td>COUNT</td><td>Counts the number of data points.</td><td>All types</td><td>INT</td></tr><tr><td>AVG</td><td>Average.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>DOUBLE</td></tr><tr><td>EXTREME</td><td>Finds the value with the largest absolute value. Returns a positive value if the maximum absolute value of positive and negative values is equal.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>Consistent with the input data type</td></tr><tr><td>MAX_VALUE</td><td>Find the maximum value.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>Consistent with the input data type</td></tr><tr><td>MIN_VALUE</td><td>Find the minimum value.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>Consistent with the input data type</td></tr><tr><td>FIRST_VALUE</td><td>Find the value with the smallest timestamp.</td><td>All data types</td><td>Consistent with input data type</td></tr><tr><td>LAST_VALUE</td><td>Find the value with the largest timestamp.</td><td>All data types</td><td>Consistent with input data type</td></tr><tr><td>MAX_TIME</td><td>Find the maximum timestamp.</td><td>All data Types</td><td>Timestamp</td></tr><tr><td>MIN_TIME</td><td>Find the minimum timestamp.</td><td>All data Types</td><td>Timestamp</td></tr><tr><td>COUNT_IF</td><td>Find the number of data points that continuously meet a given condition and the number of data points that meet the condition (represented by keep) meet the specified threshold.</td><td>BOOLEAN</td><td><code>[keep &gt;=/&gt;/=/!=/&lt;/&lt;=]threshold</code>：The specified threshold or threshold condition, it is equivalent to <code>keep &gt;= threshold</code> if <code>threshold</code> is used alone, type of <code>threshold</code> is <code>INT64</code><br> <code>ignoreNull</code>：Optional, default value is <code>true</code>；If the value is <code>true</code>, null values are ignored, it means that if there is a null value in the middle, the value is ignored without interrupting the continuity. If the value is <code>true</code>, null values are not ignored, it means that if there are null values in the middle, continuity will be broken</td></tr></tbody></table><h2 id="count" tabindex="-1"><a class="header-anchor" href="#count"><span>COUNT</span></a></h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>example</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------------------+</span>
<span class="line">|count(root.ln.wf01.wt01.status)|</span>
<span class="line">+-------------------------------+</span>
<span class="line">|                          10080|</span>
<span class="line">+-------------------------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.016s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-if" tabindex="-1"><a class="header-anchor" href="#count-if"><span>COUNT_IF</span></a></h2><h3 id="grammar" tabindex="-1"><a class="header-anchor" href="#grammar"><span>Grammar</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">count_if<span class="token punctuation">(</span>predicate<span class="token punctuation">,</span> <span class="token punctuation">[</span>keep <span class="token operator">&gt;=</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">/</span><span class="token operator">=</span><span class="token operator">/</span><span class="token operator">!=</span><span class="token operator">/</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&lt;=</span><span class="token punctuation">]</span>threshold<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&#39;ignoreNull&#39;</span><span class="token operator">=</span><span class="token string">&#39;true/false&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>predicate: legal expression with <code>BOOLEAN</code> return type</p><p>use of threshold and ignoreNull can see above table</p><blockquote><p>Note: count_if is not supported to use with SlidingWindow in group by time now</p></blockquote><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>example</span></a></h3><h4 id="raw-data" tabindex="-1"><a class="header-anchor" href="#raw-data"><span>raw data</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------+-------------+</span>
<span class="line">|                         Time|root.db.d1.s1|root.db.d1.s2|</span>
<span class="line">+-----------------------------+-------------+-------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|            0|            0|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|         null|            0|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|            0|            0|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|            0|            0|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|            1|            0|</span>
<span class="line">|1970-01-01T08:00:00.006+08:00|            1|            0|</span>
<span class="line">|1970-01-01T08:00:00.007+08:00|            1|            0|</span>
<span class="line">|1970-01-01T08:00:00.008+08:00|            0|            0|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|            0|            0|</span>
<span class="line">|1970-01-01T08:00:00.010+08:00|            0|            0|</span>
<span class="line">+-----------------------------+-------------+-------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="not-use-ignorenull-attribute-ignore-null" tabindex="-1"><a class="header-anchor" href="#not-use-ignorenull-attribute-ignore-null"><span>Not use <code>ignoreNull</code> attribute (Ignore Null)</span></a></h4><p>SQL:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+--------------------------------------------------+--------------------------------------------------+</span>
<span class="line">|count_if(root.db.d1.s1 = 0 &amp; root.db.d1.s2 = 0, 3)|count_if(root.db.d1.s1 = 1 &amp; root.db.d1.s2 = 0, 3)|</span>
<span class="line">+--------------------------------------------------+--------------------------------------------------+</span>
<span class="line">|                                                 2|                                                 1|</span>
<span class="line">+--------------------------------------------------+--------------------------------------------------</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="use-ignorenull-attribute" tabindex="-1"><a class="header-anchor" href="#use-ignorenull-attribute"><span>Use <code>ignoreNull</code> attribute</span></a></h4><p>SQL:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;ignoreNull&#39;</span><span class="token operator">=</span><span class="token string">&#39;false&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;ignoreNull&#39;</span><span class="token operator">=</span><span class="token string">&#39;false&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+------------------------------------------------------------------------+------------------------------------------------------------------------+</span>
<span class="line">|count_if(root.db.d1.s1 = 0 &amp; root.db.d1.s2 = 0, 3, &quot;ignoreNull&quot;=&quot;false&quot;)|count_if(root.db.d1.s1 = 1 &amp; root.db.d1.s2 = 0, 3, &quot;ignoreNull&quot;=&quot;false&quot;)|</span>
<span class="line">+------------------------------------------------------------------------+------------------------------------------------------------------------+</span>
<span class="line">|                                                                       1|                                                                       1|</span>
<span class="line">+------------------------------------------------------------------------+------------------------------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29)]))}const r=e(l,[["render",i],["__file","Aggregation.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.1.x/Operators-Functions/Aggregation.html","title":"Aggregate Functions","lang":"en-US","frontmatter":{"description":"Aggregate Functions Aggregate functions are many-to-one functions. They perform aggregate calculations on a set of values, resulting in a single aggregated result. All aggregate...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Aggregation.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Aggregation.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Aggregate Functions"}],["meta",{"property":"og:description","content":"Aggregate Functions Aggregate functions are many-to-one functions. They perform aggregate calculations on a set of values, resulting in a single aggregated result. All aggregate..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Aggregate Functions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"COUNT","slug":"count","link":"#count","children":[{"level":3,"title":"example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"COUNT_IF","slug":"count-if","link":"#count-if","children":[{"level":3,"title":"Grammar","slug":"grammar","link":"#grammar","children":[]},{"level":3,"title":"example","slug":"example-1","link":"#example-1","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.33,"words":700},"filePathRelative":"UserGuide/V1.1.x/Operators-Functions/Aggregation.md","localizedDate":"July 10, 2023","autoDesc":true}');export{r as comp,d as data};
