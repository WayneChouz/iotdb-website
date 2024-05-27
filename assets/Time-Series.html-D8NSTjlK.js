import{_ as e,o as n,c as t,e as s}from"./app-D_cz5DM4.js";const a={},i=s(`<h1 id="time-series-processing" tabindex="-1"><a class="header-anchor" href="#time-series-processing"><span>Time Series Processing</span></a></h1><h2 id="change-points" tabindex="-1"><a class="header-anchor" href="#change-points"><span>CHANGE_POINTS</span></a></h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><p>This function is used to remove consecutive identical values from an input sequence.<br> For example, input:<code>1，1，2，2，3</code> output:<code>1，2，3</code>.</p><p><strong>Name：</strong> CHANGE_POINTS</p><p><strong>Input Series：</strong> Support only one input series.</p><p><strong>Parameters：</strong> No parameters.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><p>Raw data：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
|                         Time|root.testChangePoints.d1.s1|root.testChangePoints.d1.s2|root.testChangePoints.d1.s3|root.testChangePoints.d1.s4|root.testChangePoints.d1.s5|root.testChangePoints.d1.s6|
+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
|1970-01-01T08:00:00.001+08:00|                       true|                          1|                          1|                        1.0|                        1.0|                     1test1|
|1970-01-01T08:00:00.002+08:00|                       true|                          2|                          2|                        2.0|                        1.0|                     2test2|
|1970-01-01T08:00:00.003+08:00|                      false|                          1|                          2|                        1.0|                        1.0|                     2test2|
|1970-01-01T08:00:00.004+08:00|                       true|                          1|                          3|                        1.0|                        1.0|                     1test1|
|1970-01-01T08:00:00.005+08:00|                       true|                          1|                          3|                        1.0|                        1.0|                     1test1|
+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> change_points<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s5<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s6<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>testChangePoints<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+
|                         Time|change_points(root.testChangePoints.d1.s1)|change_points(root.testChangePoints.d1.s2)|change_points(root.testChangePoints.d1.s3)|change_points(root.testChangePoints.d1.s4)|change_points(root.testChangePoints.d1.s5)|change_points(root.testChangePoints.d1.s6)|
+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                      true|                                         1|                                         1|                                       1.0|                                       1.0|                                    1test1|
|1970-01-01T08:00:00.002+08:00|                                      null|                                         2|                                         2|                                       2.0|                                      null|                                    2test2|
|1970-01-01T08:00:00.003+08:00|                                     false|                                         1|                                      null|                                       1.0|                                      null|                                      null|
|1970-01-01T08:00:00.004+08:00|                                      true|                                      null|                                         3|                                      null|                                      null|                                    1test1|
+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[i];function r(c,l){return n(),t("div",null,o)}const u=e(a,[["render",r],["__file","Time-Series.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.1.x/Operators-Functions/Time-Series.html","title":"Time Series Processing","lang":"en-US","frontmatter":{"description":"Time Series Processing CHANGE_POINTS Usage This function is used to remove consecutive identical values from an input sequence. For example, input:1，1，2，2，3 output:1，2，3. Name： ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Time-Series.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Time-Series.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Time Series Processing"}],["meta",{"property":"og:description","content":"Time Series Processing CHANGE_POINTS Usage This function is used to remove consecutive identical values from an input sequence. For example, input:1，1，2，2，3 output:1，2，3. Name： ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Time Series Processing\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CHANGE_POINTS","slug":"change-points","link":"#change-points","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.06,"words":318},"filePathRelative":"UserGuide/V1.1.x/Operators-Functions/Time-Series.md","localizedDate":"July 10, 2023","autoDesc":true}');export{u as comp,d as data};
