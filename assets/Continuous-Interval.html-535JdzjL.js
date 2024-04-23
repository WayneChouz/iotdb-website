import{_ as t,o as e,c as n,e as a}from"./app-DrPcRZG6.js";const o={},s=a(`<h1 id="continuous-interval-functions" tabindex="-1"><a class="header-anchor" href="#continuous-interval-functions"><span>Continuous Interval Functions</span></a></h1><p>The continuous interval functions are used to query all continuous intervals that meet specified conditions.<br> They can be divided into two categories according to return value:</p><ol><li>Returns the start timestamp and time span of the continuous interval that meets the conditions (a time span of 0 means that only the start time point meets the conditions)</li><li>Returns the start timestamp of the continuous interval that meets the condition and the number of points in the interval (a number of 1 means that only the start time point meets the conditions)</li></ol><table><thead><tr><th>Function Name</th><th>Input TSDatatype</th><th>Parameters</th><th>Output TSDatatype</th><th>Function Description</th></tr></thead><tbody><tr><td>ZERO_DURATION</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:Optional with default value <code>0L</code><br><code>max</code>:Optional with default value <code>Long.MAX_VALUE</code></td><td>Long</td><td>Return intervals&#39; start times and duration times in which the value is always 0(false), and the duration time <code>t</code> satisfy <code>t &gt;= min &amp;&amp; t &lt;= max</code>. The unit of <code>t</code> is ms</td></tr><tr><td>NON_ZERO_DURATION</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:Optional with default value <code>0L</code><br><code>max</code>:Optional with default value <code>Long.MAX_VALUE</code></td><td>Long</td><td>Return intervals&#39; start times and duration times in which the value is always not 0, and the duration time <code>t</code> satisfy <code>t &gt;= min &amp;&amp; t &lt;= max</code>. The unit of <code>t</code> is ms</td></tr><tr><td>ZERO_COUNT</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:Optional with default value <code>1L</code><br><code>max</code>:Optional with default value <code>Long.MAX_VALUE</code></td><td>Long</td><td>Return intervals&#39; start times and the number of data points in the interval in which the value is always 0(false). Data points number <code>n</code> satisfy <code>n &gt;= min &amp;&amp; n &lt;= max</code></td></tr><tr><td>NON_ZERO_COUNT</td><td>INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN</td><td><code>min</code>:Optional with default value <code>1L</code><br><code>max</code>:Optional with default value <code>Long.MAX_VALUE</code></td><td>Long</td><td>Return intervals&#39; start times and the number of data points in the interval in which the value is always not 0(false). Data points number <code>n</code> satisfy <code>n &gt;= min &amp;&amp; n &lt;= max</code></td></tr></tbody></table><h5 id="demonstrate" tabindex="-1"><a class="header-anchor" href="#demonstrate"><span>Demonstrate</span></a></h5><p>Example data:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select s1,s2,s3,s4,s5 from root.sg.d2;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sql:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> zero_count<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> non_zero_count<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> zero_duration<span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span> non_zero_duration<span class="token punctuation">(</span>s4<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------+-------------------------+-----------------------------+----------------------------+--------------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),i=[s];function d(l,r){return e(),n("div",null,i)}const u=t(o,[["render",d],["__file","Continuous-Interval.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V1.1.x/Operators-Functions/Continuous-Interval.html","title":"Continuous Interval Functions","lang":"en-US","frontmatter":{"description":"Continuous Interval Functions The continuous interval functions are used to query all continuous intervals that meet specified conditions. They can be divided into two categorie...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Continuous-Interval.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Continuous-Interval.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Continuous Interval Functions"}],["meta",{"property":"og:description","content":"Continuous Interval Functions The continuous interval functions are used to query all continuous intervals that meet specified conditions. They can be divided into two categorie..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Continuous Interval Functions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.2,"words":660},"filePathRelative":"UserGuide/V1.1.x/Operators-Functions/Continuous-Interval.md","localizedDate":"July 10, 2023","autoDesc":true}');export{u as comp,p as data};
