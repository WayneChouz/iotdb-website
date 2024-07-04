import{_ as n,o as e,c as t,e as s}from"./app-nVIpYHtH.js";const a={},o=s(`<h2 id="区间查询函数" tabindex="-1"><a class="header-anchor" href="#区间查询函数"><span>区间查询函数</span></a></h2><h3 id="连续满足区间函数" tabindex="-1"><a class="header-anchor" href="#连续满足区间函数"><span>连续满足区间函数</span></a></h3><p>连续满足条件区间函数用来查询所有满足指定条件的连续区间。</p><p>按返回值可分为两类：</p><ol><li>返回满足条件连续区间的起始时间戳和时间跨度(时间跨度为0表示此处只有起始时间这一个数据点满足条件)</li><li>返回满足条件连续区间的起始时间戳和后面连续满足条件的点的个数（个数为1表示此处只有起始时间这一个数据点满足条件）</li></ol><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>ZERO_DURATION</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值0<br><code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续为0(false)的开始时间与持续时间，持续时间t(单位ms)满足<code>t &gt;= min &amp;&amp; t &lt;= max</code></td></tr><tr><td>NON_ZERO_DURATION</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值0<br><code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续不为0(false)的开始时间与持续时间，持续时间t(单位ms)满足<code>t &gt;= min &amp;&amp; t &lt;= max</code></td></tr><tr><td>ZERO_COUNT</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值1<br><code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续为0(false)的开始时间与其后数据点的个数，数据点个数n满足<code>n &gt;= min &amp;&amp; n &lt;= max</code></td></tr><tr><td>NON_ZERO_COUNT</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:可选，默认值1<br><code>max</code>:可选，默认值<code>Long.MAX_VALUE</code></td><td>Long</td><td>返回时间序列连续不为0(false)的开始时间与其后数据点的个数，数据点个数n满足<code>n &gt;= min &amp;&amp; n &lt;= max</code></td></tr></tbody></table><p>测试数据:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select s1,s2,s3,s4,s5 from root.sg.d2;
+-----------------------------+-------------+-------------+-------------+-------------+-------------+
|                         Time|root.sg.d2.s1|root.sg.d2.s2|root.sg.d2.s3|root.sg.d2.s4|root.sg.d2.s5|
+-----------------------------+-------------+-------------+-------------+-------------+-------------+
|1970-01-01T08:00:00.000+08:00|            0|            0|          0.0|          0.0|        false|
|1970-01-01T08:00:00.001+08:00|            1|            1|          1.0|          1.0|         true|
|1970-01-01T08:00:00.002+08:00|            1|            1|          1.0|          1.0|         true|
|1970-01-01T08:00:00.003+08:00|            0|            0|          0.0|          0.0|        false|
|1970-01-01T08:00:00.004+08:00|            1|            1|          1.0|          1.0|         true|
|1970-01-01T08:00:00.005+08:00|            0|            0|          0.0|          0.0|        false|
|1970-01-01T08:00:00.006+08:00|            0|            0|          0.0|          0.0|        false|
|1970-01-01T08:00:00.007+08:00|            1|            1|          1.0|          1.0|         true|
+-----------------------------+-------------+-------------+-------------+-------------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sql:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> zero_count<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> non_zero_count<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> zero_duration<span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span> non_zero_duration<span class="token punctuation">(</span>s4<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------+-------------------------+-----------------------------+----------------------------+--------------------------------+
|                         Time|root.sg.d2.s1|zero_count(root.sg.d2.s1)|non_zero_count(root.sg.d2.s2)|zero_duration(root.sg.d2.s3)|non_zero_duration(root.sg.d2.s4)|
+-----------------------------+-------------+-------------------------+-----------------------------+----------------------------+--------------------------------+
|1970-01-01T08:00:00.000+08:00|            0|                        1|                         null|                           0|                            null|
|1970-01-01T08:00:00.001+08:00|            1|                     null|                            2|                        null|                               1|
|1970-01-01T08:00:00.002+08:00|            1|                     null|                         null|                        null|                            null|
|1970-01-01T08:00:00.003+08:00|            0|                        1|                         null|                           0|                            null|
|1970-01-01T08:00:00.004+08:00|            1|                     null|                            1|                        null|                               0|
|1970-01-01T08:00:00.005+08:00|            0|                        2|                         null|                           1|                            null|
|1970-01-01T08:00:00.006+08:00|            0|                     null|                         null|                        null|                            null|
|1970-01-01T08:00:00.007+08:00|            1|                     null|                            1|                        null|                               0|
+-----------------------------+-------------+-------------------------+-----------------------------+----------------------------+--------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),d=[o];function l(i,r){return e(),t("div",null,d)}const u=n(a,[["render",l],["__file","Continuous-Interval.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operators-Functions/Continuous-Interval.html","title":"","lang":"zh-CN","frontmatter":{"description":"区间查询函数 连续满足区间函数 连续满足条件区间函数用来查询所有满足指定条件的连续区间。 按返回值可分为两类： 返回满足条件连续区间的起始时间戳和时间跨度(时间跨度为0表示此处只有起始时间这一个数据点满足条件) 返回满足条件连续区间的起始时间戳和后面连续满足条件的点的个数（个数为1表示此处只有起始时间这一个数据点满足条件） 测试数据: sql: 结果:","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Continuous-Interval.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Continuous-Interval.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"区间查询函数 连续满足区间函数 连续满足条件区间函数用来查询所有满足指定条件的连续区间。 按返回值可分为两类： 返回满足条件连续区间的起始时间戳和时间跨度(时间跨度为0表示此处只有起始时间这一个数据点满足条件) 返回满足条件连续区间的起始时间戳和后面连续满足条件的点的个数（个数为1表示此处只有起始时间这一个数据点满足条件） 测试数据: sql: 结果:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"区间查询函数","slug":"区间查询函数","link":"#区间查询函数","children":[{"level":3,"title":"连续满足区间函数","slug":"连续满足区间函数","link":"#连续满足区间函数","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.54,"words":761},"filePathRelative":"zh/UserGuide/V1.1.x/Operators-Functions/Continuous-Interval.md","localizedDate":"2023年7月10日","autoDesc":true}');export{u as comp,p as data};
