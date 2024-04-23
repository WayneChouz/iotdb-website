import{_ as e,o as t,c as a,e as n}from"./app-DrPcRZG6.js";const s={},o=n(`<h1 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符"><span>逻辑运算符</span></a></h1><h2 id="一元逻辑运算符" tabindex="-1"><a class="header-anchor" href="#一元逻辑运算符"><span>一元逻辑运算符</span></a></h2><ul><li>支持运算符：<code>!</code></li><li>输入数据类型：<code>BOOLEAN</code>。</li><li>输出数据类型：<code>BOOLEAN</code>。</li><li>注意：<code>!</code>的优先级很高，记得使用括号调整优先级。</li></ul><h2 id="二元逻辑运算符" tabindex="-1"><a class="header-anchor" href="#二元逻辑运算符"><span>二元逻辑运算符</span></a></h2><ul><li><p>支持运算符</p><ul><li>AND:<code>and</code>,<code>&amp;</code>, <code>&amp;&amp;</code></li><li>OR:<code>or</code>,<code>|</code>,<code>||</code></li></ul></li><li><p>输入数据类型：<code>BOOLEAN</code>。</p></li><li><p>返回类型 <code>BOOLEAN</code>。</p></li><li><p>注意：当某个时间戳下左操作数和右操作数都为<code>BOOLEAN</code>类型时，二元逻辑操作才会有输出结果。</p></li></ul><p><strong>示例：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> a <span class="token operator">&lt;=</span> b<span class="token punctuation">,</span> <span class="token operator">!</span><span class="token punctuation">(</span>a <span class="token operator">&lt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> a <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&gt;</span> b <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select a, b, a &gt; 10, a &lt;= b, !(a &lt;= b), a &gt; 10 &amp;&amp; a &gt; b from root.test;
+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+
|                         Time|root.test.a|root.test.b|root.test.a &gt; 10|root.test.a &lt;= root.test.b|!root.test.a &lt;= root.test.b|(root.test.a &gt; 10) &amp; (root.test.a &gt; root.test.b)|
+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+
|1970-01-01T08:00:00.001+08:00|         23|       10.0|            true|                     false|                       true|                                            true|
|1970-01-01T08:00:00.002+08:00|         33|       21.0|            true|                     false|                       true|                                            true|
|1970-01-01T08:00:00.004+08:00|         13|       15.0|            true|                      true|                      false|                                           false|
|1970-01-01T08:00:00.005+08:00|         26|        0.0|            true|                     false|                       true|                                            true|
|1970-01-01T08:00:00.008+08:00|          1|       22.0|           false|                      true|                      false|                                           false|
|1970-01-01T08:00:00.010+08:00|         23|       12.0|            true|                     false|                       true|                                            true|
+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[o];function i(r,c){return t(),a("div",null,l)}const d=e(s,[["render",i],["__file","Logical.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Operators-Functions/Logical.html","title":"逻辑运算符","lang":"zh-CN","frontmatter":{"description":"逻辑运算符 一元逻辑运算符 支持运算符：! 输入数据类型：BOOLEAN。 输出数据类型：BOOLEAN。 注意：!的优先级很高，记得使用括号调整优先级。 二元逻辑运算符 支持运算符 AND:and,&, && OR:or,|,|| 输入数据类型：BOOLEAN。 返回类型 BOOLEAN。 注意：当某个时间戳下左操作数和右操作数都为BOOLEAN类型...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Operators-Functions/Logical.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operators-Functions/Logical.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"逻辑运算符"}],["meta",{"property":"og:description","content":"逻辑运算符 一元逻辑运算符 支持运算符：! 输入数据类型：BOOLEAN。 输出数据类型：BOOLEAN。 注意：!的优先级很高，记得使用括号调整优先级。 二元逻辑运算符 支持运算符 AND:and,&, && OR:or,|,|| 输入数据类型：BOOLEAN。 返回类型 BOOLEAN。 注意：当某个时间戳下左操作数和右操作数都为BOOLEAN类型..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"逻辑运算符\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"一元逻辑运算符","slug":"一元逻辑运算符","link":"#一元逻辑运算符","children":[]},{"level":2,"title":"二元逻辑运算符","slug":"二元逻辑运算符","link":"#二元逻辑运算符","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.19,"words":358},"filePathRelative":"zh/UserGuide/V1.0.x/Operators-Functions/Logical.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,u as data};
