import{_ as t,c as l,b as a,d as i,e as s,a as r,w as o,r as p,o as c}from"./app-CYbL30xh.js";const d={};function u(m,e){const n=p("RouteLink");return c(),l("div",null,[e[3]||(e[3]=a('<h1 id="query-filter" tabindex="-1"><a class="header-anchor" href="#query-filter"><span>Query Filter</span></a></h1><p>In IoTDB query statements, two filter conditions, <strong>time filter</strong> and <strong>value filter</strong>, are supported.</p><p>The supported operators are as follows:</p><ul><li>Comparison operators: greater than (<code>&gt;</code>), greater than or equal ( <code>&gt;=</code>), equal ( <code>=</code> or <code>==</code>), not equal ( <code>!=</code> or <code>&lt;&gt;</code>), less than or equal ( <code>&lt;=</code>), less than ( <code>&lt;</code>).</li><li>Range contains operator: contains ( <code>IN</code> ).</li><li>Logical operators: and ( <code>AND</code> or <code>&amp;</code> or <code>&amp;&amp;</code>), or ( <code>OR</code> or <code>|</code> or <code>||</code>), not ( <code>NOT</code> or <code>!</code>).</li></ul><h2 id="time-filter" tabindex="-1"><a class="header-anchor" href="#time-filter"><span>Time Filter</span></a></h2>',5)),i("p",null,[e[1]||(e[1]=s("Use time filters to filter data for a specific time range. For supported formats of timestamps, please refer to ")),r(n,{to:"/UserGuide/V0.13.x/Data-Concept/Data-Type.html"},{default:o(()=>e[0]||(e[0]=[s("Timestamp")])),_:1}),e[2]||(e[2]=s(" ."))]),e[4]||(e[4]=a(`<p>An example is as follows:</p><ol><li><p>Select data with timestamp greater than 2022-01-01T00:05:00.000:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Select data with timestamp equal to 2022-01-01T00:05:00.000:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Select the data in the time interval [2017-11-01T00:05:00.000, 2017-11-01T00:12:00.000):</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><p>Note: In the above example, <code>time</code> can also be written as <code>timestamp</code>.</p><h2 id="value-filter" tabindex="-1"><a class="header-anchor" href="#value-filter"><span>Value Filter</span></a></h2><p>Use value filters to filter data whose data values meet certain criteria. <strong>Allow</strong> to use a time series not selected in the select clause as a value filter.</p><p>An example is as follows:</p><ol><li><p>Select data with a value greater than 36.5:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">&gt;</span> <span class="token number">36.5</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Select data with value equal to true:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">status</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Select data for the interval (36.5,40]:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">&gt;</span> <span class="token number">36.5</span> <span class="token operator">and</span> temperature <span class="token operator">&lt;</span> <span class="token number">40</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Select data with values within a specific range:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Select data with values outside a certain range:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="fuzzy-query" tabindex="-1"><a class="header-anchor" href="#fuzzy-query"><span>Fuzzy Query</span></a></h2><p>Fuzzy query is divided into Like statement and Regexp statement, both of which can support fuzzy matching of TEXT type data.</p><p>Like statement:</p><h3 id="fuzzy-matching-using-like" tabindex="-1"><a class="header-anchor" href="#fuzzy-matching-using-like"><span>Fuzzy matching using <code>Like</code></span></a></h3><p>In the value filter condition, for TEXT type data, use <code>Like</code> and <code>Regexp</code> operators to perform fuzzy matching on data.</p><p><strong>Matching rules:</strong></p><ul><li>The percentage (<code>%</code>) wildcard matches any string of zero or more characters.</li><li>The underscore (<code>_</code>) wildcard matches any single character.</li></ul><p><strong>Example 1:</strong> Query data containing <code>&#39;cc&#39;</code> in <code>value</code> under <code>root.sg.d1</code>.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select * from root.sg.d1 where value like &#39;%cc%&#39;</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|                         Time|root.sg.d1.value|</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|2017-11-01T00:00:00.000+08:00|        aabbccdd| </span>
<span class="line">|2017-11-01T00:00:01.000+08:00|              cc|</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Query data that consists of 3 characters and the second character is <code>&#39;b&#39;</code> in <code>value</code> under <code>root.sg.d1</code>.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select * from root.sg.device where value like &#39;_b_&#39;</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|                         Time|root.sg.d1.value|</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|2017-11-01T00:00:02.000+08:00|             abc| </span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fuzzy-matching-using-regexp" tabindex="-1"><a class="header-anchor" href="#fuzzy-matching-using-regexp"><span>Fuzzy matching using <code>Regexp</code></span></a></h3><p>The filter conditions that need to be passed in are regular expressions in the Java standard library style.</p><p><strong>Examples of common regular matching:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">All characters with a length of 3-20: ^.{3,20}$</span>
<span class="line">Uppercase english characters: ^[A-Z]+$</span>
<span class="line">Numbers and English characters: ^[A-Za-z0-9]+$</span>
<span class="line">Beginning with a: ^a.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 1:</strong> Query a string composed of 26 English characters for the value under root.sg.d1</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select * from root.sg.d1 where value regexp &#39;^[A-Za-z]+$&#39;</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|                         Time|root.sg.d1.value|</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|2017-11-01T00:00:00.000+08:00|        aabbccdd| </span>
<span class="line">|2017-11-01T00:00:01.000+08:00|              cc|</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Query root.sg.d1 where the value value is a string composed of 26 lowercase English characters and the time is greater than 100</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select * from root.sg.d1 where value regexp &#39;^[a-z]+$&#39; and time &gt; 100</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|                         Time|root.sg.d1.value|</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">|2017-11-01T00:00:00.000+08:00|        aabbccdd| </span>
<span class="line">|2017-11-01T00:00:01.000+08:00|              cc|</span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26))])}const v=t(d,[["render",u],["__file","Query-Filter.html.vue"]]),h=JSON.parse('{"path":"/UserGuide/V0.13.x/Query-Data/Query-Filter.html","title":"Query Filter","lang":"en-US","frontmatter":{"description":"Query Filter In IoTDB query statements, two filter conditions, time filter and value filter, are supported. The supported operators are as follows: Comparison operators: greater...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Query-Filter.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Query-Filter.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Query Filter"}],["meta",{"property":"og:description","content":"Query Filter In IoTDB query statements, two filter conditions, time filter and value filter, are supported. The supported operators are as follows: Comparison operators: greater..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Query Filter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Time Filter","slug":"time-filter","link":"#time-filter","children":[]},{"level":2,"title":"Value Filter","slug":"value-filter","link":"#value-filter","children":[]},{"level":2,"title":"Fuzzy Query","slug":"fuzzy-query","link":"#fuzzy-query","children":[{"level":3,"title":"Fuzzy matching using Like","slug":"fuzzy-matching-using-like","link":"#fuzzy-matching-using-like","children":[]},{"level":3,"title":"Fuzzy matching using Regexp","slug":"fuzzy-matching-using-regexp","link":"#fuzzy-matching-using-regexp","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.53,"words":760},"filePathRelative":"UserGuide/V0.13.x/Query-Data/Query-Filter.md","localizedDate":"July 10, 2023","autoDesc":true}');export{v as comp,h as data};
