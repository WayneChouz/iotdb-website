import{_ as e,o as n,c as t,e as s}from"./app-nVIpYHtH.js";const a={},i=s(`<h2 id="时间序列处理" tabindex="-1"><a class="header-anchor" href="#时间序列处理"><span>时间序列处理</span></a></h2><h3 id="change-points" tabindex="-1"><a class="header-anchor" href="#change-points"><span>CHANGE_POINTS</span></a></h3><h4 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介"><span>函数简介</span></a></h4><p>本函数用于去除输入序列中的连续相同值。如输入序列<code>1，1，2，2，3</code>输出序列为<code>1，2，3</code>。</p><p><strong>函数名：</strong> CHANGE_POINTS</p><p><strong>输入序列：</strong> 仅支持输入1个序列。</p><p><strong>参数：</strong> 无</p><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h4><p>原始数据：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
|                         Time|root.testChangePoints.d1.s1|root.testChangePoints.d1.s2|root.testChangePoints.d1.s3|root.testChangePoints.d1.s4|root.testChangePoints.d1.s5|root.testChangePoints.d1.s6|
+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
|1970-01-01T08:00:00.001+08:00|                       true|                          1|                          1|                        1.0|                        1.0|                     1test1|
|1970-01-01T08:00:00.002+08:00|                       true|                          2|                          2|                        2.0|                        1.0|                     2test2|
|1970-01-01T08:00:00.003+08:00|                      false|                          1|                          2|                        1.0|                        1.0|                     2test2|
|1970-01-01T08:00:00.004+08:00|                       true|                          1|                          3|                        1.0|                        1.0|                     1test1|
|1970-01-01T08:00:00.005+08:00|                       true|                          1|                          3|                        1.0|                        1.0|                     1test1|
+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> change_points<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s5<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s6<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>testChangePoints<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+
|                         Time|change_points(root.testChangePoints.d1.s1)|change_points(root.testChangePoints.d1.s2)|change_points(root.testChangePoints.d1.s3)|change_points(root.testChangePoints.d1.s4)|change_points(root.testChangePoints.d1.s5)|change_points(root.testChangePoints.d1.s6)|
+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                      true|                                         1|                                         1|                                       1.0|                                       1.0|                                    1test1|
|1970-01-01T08:00:00.002+08:00|                                      null|                                         2|                                         2|                                       2.0|                                      null|                                    2test2|
|1970-01-01T08:00:00.003+08:00|                                     false|                                         1|                                      null|                                       1.0|                                      null|                                      null|
|1970-01-01T08:00:00.004+08:00|                                      true|                                      null|                                         3|                                      null|                                      null|                                    1test1|
+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),o=[i];function c(l,r){return n(),t("div",null,o)}const d=e(a,[["render",c],["__file","Time-Series.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operators-Functions/Time-Series.html","title":"","lang":"zh-CN","frontmatter":{"description":"时间序列处理 CHANGE_POINTS 函数简介 本函数用于去除输入序列中的连续相同值。如输入序列1，1，2，2，3输出序列为1，2，3。 函数名： CHANGE_POINTS 输入序列： 仅支持输入1个序列。 参数： 无 使用示例 原始数据： 用于查询的SQL语句： 输出序列：","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Time-Series.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Time-Series.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"时间序列处理 CHANGE_POINTS 函数简介 本函数用于去除输入序列中的连续相同值。如输入序列1，1，2，2，3输出序列为1，2，3。 函数名： CHANGE_POINTS 输入序列： 仅支持输入1个序列。 参数： 无 使用示例 原始数据： 用于查询的SQL语句： 输出序列："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"时间序列处理","slug":"时间序列处理","link":"#时间序列处理","children":[{"level":3,"title":"CHANGE_POINTS","slug":"change-points","link":"#change-points","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.18,"words":354},"filePathRelative":"zh/UserGuide/V1.1.x/Operators-Functions/Time-Series.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,u as data};
