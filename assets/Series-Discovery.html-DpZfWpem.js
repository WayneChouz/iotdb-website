import{_ as s,c as n,b as a,o as i}from"./app-B280G6gL.js";const t={};function l(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="series-discovery" tabindex="-1"><a class="header-anchor" href="#series-discovery"><span>Series Discovery</span></a></h1><h2 id="consecutivesequences" tabindex="-1"><a class="header-anchor" href="#consecutivesequences"><span>ConsecutiveSequences</span></a></h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><p>This function is used to find locally longest consecutive subsequences in strictly equispaced multidimensional data.</p><p>Strictly equispaced data is the data whose time intervals are strictly equal. Missing data, including missing rows and missing values, is allowed in it, while data redundancy and timestamp drift is not allowed.</p><p>Consecutive subsequence is the subsequence that is strictly equispaced with the standard time interval without any missing data. If a consecutive subsequence is not a proper subsequence of any consecutive subsequence, it is locally longest.</p><p><strong>Name:</strong> CONSECUTIVESEQUENCES</p><p><strong>Input Series:</strong> Support multiple input series. The type is arbitrary but the data is strictly equispaced.</p><p><strong>Parameters:</strong></p><ul><li><code>gap</code>: The standard time interval which is a positive number with an unit. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. By default, it will be estimated by the mode of time intervals.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is INT32. Each data point in the output series corresponds to a locally longest consecutive subsequence. The output timestamp is the starting timestamp of the subsequence and the output value is the number of data points in the subsequence.</p><p><strong>Note:</strong> For input series that is not strictly equispaced, there is no guarantee on the output.</p><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3><h4 id="manually-specify-the-standard-time-interval" tabindex="-1"><a class="header-anchor" href="#manually-specify-the-standard-time-interval"><span>Manually Specify the Standard Time Interval</span></a></h4><p>It&#39;s able to manually specify the standard time interval by the parameter <code>gap</code>. It&#39;s notable that false parameter leads to false output.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|root.test.d1.s2|</span>
<span class="line">+-----------------------------+---------------+---------------+</span>
<span class="line">|2020-01-01T00:00:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:05:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:10:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:20:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:25:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:30:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:35:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:40:00.000+08:00|            1.0|           null|</span>
<span class="line">|2020-01-01T00:45:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:50:00.000+08:00|            1.0|            1.0|</span>
<span class="line">+-----------------------------+---------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> consecutivesequences<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">,</span><span class="token string">&#39;gap&#39;</span><span class="token operator">=</span><span class="token string">&#39;5m&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+------------------------------------------------------------------+</span>
<span class="line">|                         Time|consecutivesequences(root.test.d1.s1, root.test.d1.s2, &quot;gap&quot;=&quot;5m&quot;)|</span>
<span class="line">+-----------------------------+------------------------------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:00.000+08:00|                                                                 3|</span>
<span class="line">|2020-01-01T00:20:00.000+08:00|                                                                 4|</span>
<span class="line">|2020-01-01T00:45:00.000+08:00|                                                                 2|</span>
<span class="line">+-----------------------------+------------------------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="automatically-estimate-the-standard-time-interval" tabindex="-1"><a class="header-anchor" href="#automatically-estimate-the-standard-time-interval"><span>Automatically Estimate the Standard Time Interval</span></a></h4><p>When <code>gap</code> is default, this function estimates the standard time interval by the mode of time intervals and gets the same results. Therefore, this usage is more recommended.</p><p>Input series is the same as above, the SQL for query is shown below:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> consecutivesequences<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+------------------------------------------------------+</span>
<span class="line">|                         Time|consecutivesequences(root.test.d1.s1, root.test.d1.s2)|</span>
<span class="line">+-----------------------------+------------------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:00.000+08:00|                                                     3|</span>
<span class="line">|2020-01-01T00:20:00.000+08:00|                                                     4|</span>
<span class="line">|2020-01-01T00:45:00.000+08:00|                                                     2|</span>
<span class="line">+-----------------------------+------------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="consecutivewindows" tabindex="-1"><a class="header-anchor" href="#consecutivewindows"><span>ConsecutiveWindows</span></a></h2><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><p>This function is used to find consecutive windows of specified length in strictly equispaced multidimensional data.</p><p>Strictly equispaced data is the data whose time intervals are strictly equal. Missing data, including missing rows and missing values, is allowed in it, while data redundancy and timestamp drift is not allowed.</p><p>Consecutive window is the subsequence that is strictly equispaced with the standard time interval without any missing data.</p><p><strong>Name:</strong> CONSECUTIVEWINDOWS</p><p><strong>Input Series:</strong> Support multiple input series. The type is arbitrary but the data is strictly equispaced.</p><p><strong>Parameters:</strong></p><ul><li><code>gap</code>: The standard time interval which is a positive number with an unit. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. By default, it will be estimated by the mode of time intervals.</li><li><code>length</code>: The length of the window which is a positive number with an unit. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. This parameter cannot be lacked.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is INT32. Each data point in the output series corresponds to a consecutive window. The output timestamp is the starting timestamp of the window and the output value is the number of data points in the window.</p><p><strong>Note:</strong> For input series that is not strictly equispaced, there is no guarantee on the output.</p><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|root.test.d1.s2|</span>
<span class="line">+-----------------------------+---------------+---------------+</span>
<span class="line">|2020-01-01T00:00:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:05:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:10:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:20:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:25:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:30:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:35:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:40:00.000+08:00|            1.0|           null|</span>
<span class="line">|2020-01-01T00:45:00.000+08:00|            1.0|            1.0|</span>
<span class="line">|2020-01-01T00:50:00.000+08:00|            1.0|            1.0|</span>
<span class="line">+-----------------------------+---------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> consecutivewindows<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">,</span><span class="token string">&#39;length&#39;</span><span class="token operator">=</span><span class="token string">&#39;10m&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------------------------------------------------------+</span>
<span class="line">|                         Time|consecutivewindows(root.test.d1.s1, root.test.d1.s2, &quot;length&quot;=&quot;10m&quot;)|</span>
<span class="line">+-----------------------------+--------------------------------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:00.000+08:00|                                                                   3|</span>
<span class="line">|2020-01-01T00:20:00.000+08:00|                                                                   3|</span>
<span class="line">|2020-01-01T00:25:00.000+08:00|                                                                   3|</span>
<span class="line">+-----------------------------+--------------------------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45)]))}const p=s(t,[["render",l],["__file","Series-Discovery.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.0.x/Operators-Functions/Series-Discovery.html","title":"Series Discovery","lang":"en-US","frontmatter":{"description":"Series Discovery ConsecutiveSequences Usage This function is used to find locally longest consecutive subsequences in strictly equispaced multidimensional data. Strictly equispa...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operators-Functions/Series-Discovery.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Operators-Functions/Series-Discovery.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Series Discovery"}],["meta",{"property":"og:description","content":"Series Discovery ConsecutiveSequences Usage This function is used to find locally longest consecutive subsequences in strictly equispaced multidimensional data. Strictly equispa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Series Discovery\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"ConsecutiveSequences","slug":"consecutivesequences","link":"#consecutivesequences","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]},{"level":2,"title":"ConsecutiveWindows","slug":"consecutivewindows","link":"#consecutivewindows","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":3,"title":"Examples","slug":"examples-1","link":"#examples-1","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.18,"words":954},"filePathRelative":"UserGuide/V1.0.x/Operators-Functions/Series-Discovery.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,d as data};
