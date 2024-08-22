import{_ as e,o as s,c as n,e as i}from"./app-BZ7vU6A9.js";const a={},t=i(`<h1 id="data-matching" tabindex="-1"><a class="header-anchor" href="#data-matching"><span>Data Matching</span></a></h1><h2 id="cov" tabindex="-1"><a class="header-anchor" href="#cov"><span>Cov</span></a></h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><p>This function is used to calculate the population covariance.</p><p><strong>Name:</strong> COV</p><p><strong>Input Series:</strong> Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE. There is only one data point in the series, whose timestamp is 0 and value is the population covariance.</p><p><strong>Note:</strong></p><ul><li>If a row contains missing points, null points or <code>NaN</code>, it will be ignored;</li><li>If all rows are ignored, <code>NaN</code> will be output.</li></ul><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d2.s1|root.test.d2.s2|
+-----------------------------+---------------+---------------+
|2020-01-01T00:00:02.000+08:00|          100.0|          101.0|
|2020-01-01T00:00:03.000+08:00|          101.0|           null|
|2020-01-01T00:00:04.000+08:00|          102.0|          101.0|
|2020-01-01T00:00:06.000+08:00|          104.0|          102.0|
|2020-01-01T00:00:08.000+08:00|          126.0|          102.0|
|2020-01-01T00:00:10.000+08:00|          108.0|          103.0|
|2020-01-01T00:00:12.000+08:00|           null|          103.0|
|2020-01-01T00:00:14.000+08:00|          112.0|          104.0|
|2020-01-01T00:00:15.000+08:00|          113.0|           null|
|2020-01-01T00:00:16.000+08:00|          114.0|          104.0|
|2020-01-01T00:00:18.000+08:00|          116.0|          105.0|
|2020-01-01T00:00:20.000+08:00|          118.0|          105.0|
|2020-01-01T00:00:22.000+08:00|          100.0|          106.0|
|2020-01-01T00:00:26.000+08:00|          124.0|          108.0|
|2020-01-01T00:00:28.000+08:00|          126.0|          108.0|
|2020-01-01T00:00:30.000+08:00|            NaN|          108.0|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> cov<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------------------------------+
|                         Time|cov(root.test.d2.s1, root.test.d2.s2)|
+-----------------------------+-------------------------------------+
|1970-01-01T08:00:00.000+08:00|                   12.291666666666666|
+-----------------------------+-------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dtw" tabindex="-1"><a class="header-anchor" href="#dtw"><span>DTW</span></a></h2><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><p>This function is used to calculate the DTW distance between two input series.</p><p><strong>Name:</strong> DTW</p><p><strong>Input Series:</strong> Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE. There is only one data point in the series, whose timestamp is 0 and value is the DTW distance.</p><p><strong>Note:</strong></p><ul><li>If a row contains missing points, null points or <code>NaN</code>, it will be ignored;</li><li>If all rows are ignored, <code>0</code> will be output.</li></ul><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d2.s1|root.test.d2.s2|
+-----------------------------+---------------+---------------+
|1970-01-01T08:00:00.001+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.002+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.003+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.004+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.005+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.006+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.007+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.008+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.009+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.010+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.011+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.012+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.013+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.014+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.015+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.016+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.017+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.018+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.019+08:00|            1.0|            2.0|
|1970-01-01T08:00:00.020+08:00|            1.0|            2.0|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> dtw<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------------------------------+
|                         Time|dtw(root.test.d2.s1, root.test.d2.s2)|
+-----------------------------+-------------------------------------+
|1970-01-01T08:00:00.000+08:00|                                 20.0|
+-----------------------------+-------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pearson" tabindex="-1"><a class="header-anchor" href="#pearson"><span>Pearson</span></a></h2><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2"><span>Usage</span></a></h3><p>This function is used to calculate the Pearson Correlation Coefficient.</p><p><strong>Name:</strong> PEARSON</p><p><strong>Input Series:</strong> Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE. There is only one data point in the series, whose timestamp is 0 and value is the Pearson Correlation Coefficient.</p><p><strong>Note:</strong></p><ul><li>If a row contains missing points, null points or <code>NaN</code>, it will be ignored;</li><li>If all rows are ignored, <code>NaN</code> will be output.</li></ul><h3 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d2.s1|root.test.d2.s2|
+-----------------------------+---------------+---------------+
|2020-01-01T00:00:02.000+08:00|          100.0|          101.0|
|2020-01-01T00:00:03.000+08:00|          101.0|           null|
|2020-01-01T00:00:04.000+08:00|          102.0|          101.0|
|2020-01-01T00:00:06.000+08:00|          104.0|          102.0|
|2020-01-01T00:00:08.000+08:00|          126.0|          102.0|
|2020-01-01T00:00:10.000+08:00|          108.0|          103.0|
|2020-01-01T00:00:12.000+08:00|           null|          103.0|
|2020-01-01T00:00:14.000+08:00|          112.0|          104.0|
|2020-01-01T00:00:15.000+08:00|          113.0|           null|
|2020-01-01T00:00:16.000+08:00|          114.0|          104.0|
|2020-01-01T00:00:18.000+08:00|          116.0|          105.0|
|2020-01-01T00:00:20.000+08:00|          118.0|          105.0|
|2020-01-01T00:00:22.000+08:00|          100.0|          106.0|
|2020-01-01T00:00:26.000+08:00|          124.0|          108.0|
|2020-01-01T00:00:28.000+08:00|          126.0|          108.0|
|2020-01-01T00:00:30.000+08:00|            NaN|          108.0|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> pearson<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------+
|                         Time|pearson(root.test.d2.s1, root.test.d2.s2)|
+-----------------------------+-----------------------------------------+
|1970-01-01T08:00:00.000+08:00|                       0.5630881927754872|
+-----------------------------+-----------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ptnsym" tabindex="-1"><a class="header-anchor" href="#ptnsym"><span>PtnSym</span></a></h2><h3 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3"><span>Usage</span></a></h3><p>This function is used to find all symmetric subseries in the input whose degree of symmetry is less than the threshold.<br> The degree of symmetry is calculated by DTW.<br> The smaller the degree, the more symmetrical the series is.</p><p><strong>Name:</strong> PATTERNSYMMETRIC</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>Parameter:</strong></p><ul><li><code>window</code>: The length of the symmetric subseries. It&#39;s a positive integer and the default value is 10.</li><li><code>threshold</code>: The threshold of the degree of symmetry. It&#39;s non-negative. Only the subseries whose degree of symmetry is below it will be output. By default, all subseries will be output.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE. Each data point in the output series corresponds to a symmetric subseries. The output timestamp is the starting timestamp of the subseries and the output value is the degree of symmetry.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s4|
+-----------------------------+---------------+
|2021-01-01T12:00:00.000+08:00|            1.0|
|2021-01-01T12:00:01.000+08:00|            2.0|
|2021-01-01T12:00:02.000+08:00|            3.0|
|2021-01-01T12:00:03.000+08:00|            2.0|
|2021-01-01T12:00:04.000+08:00|            1.0|
|2021-01-01T12:00:05.000+08:00|            1.0|
|2021-01-01T12:00:06.000+08:00|            1.0|
|2021-01-01T12:00:07.000+08:00|            1.0|
|2021-01-01T12:00:08.000+08:00|            2.0|
|2021-01-01T12:00:09.000+08:00|            3.0|
|2021-01-01T12:00:10.000+08:00|            2.0|
|2021-01-01T12:00:11.000+08:00|            1.0|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ptnsym<span class="token punctuation">(</span>s4<span class="token punctuation">,</span> <span class="token string">&#39;window&#39;</span><span class="token operator">=</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;threshold&#39;</span><span class="token operator">=</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------+
|                         Time|ptnsym(root.test.d1.s4, &quot;window&quot;=&quot;5&quot;, &quot;threshold&quot;=&quot;0&quot;)|
+-----------------------------+------------------------------------------------------+
|2021-01-01T12:00:00.000+08:00|                                                   0.0|
|2021-01-01T12:00:07.000+08:00|                                                   0.0|
+-----------------------------+------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xcorr" tabindex="-1"><a class="header-anchor" href="#xcorr"><span>XCorr</span></a></h2><h3 id="usage-4" tabindex="-1"><a class="header-anchor" href="#usage-4"><span>Usage</span></a></h3><p>This function is used to calculate the cross correlation function of given two time series.<br> For discrete time series, cross correlation is given by<br> $$CR(n) = \\frac{1}{N} \\sum_{m=1}^N S_1[m]S_2[m+n]$$<br> which represent the similarities between two series with different index shifts.</p><p><strong>Name:</strong> XCORR</p><p><strong>Input Series:</strong> Only support two input numeric series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Output Series:</strong> Output a single series with DOUBLE as datatype.<br> There are $2N-1$ data points in the series, the center of which represents the cross correlation<br> calculated with pre-aligned series(that is $CR(0)$ in the formula above),<br> and the previous(or post) values represent those with shifting the latter series forward(or backward otherwise)<br> until the two series are no longer overlapped(not included).<br> In short, the values of output series are given by(index starts from 1)<br> $$OS[i] = CR(-N+i) = \\frac{1}{N} \\sum_{m=1}^{i} S_1[m]S_2[N-i+m],\\ if\\ i &lt;= N$$<br> $$OS[i] = CR(i-N) = \\frac{1}{N} \\sum_{m=1}^{2N-i} S_1[i-N+m]S_2[m],\\ if\\ i &gt; N$$</p><p><strong>Note:</strong></p><ul><li><code>null</code> and <code>NaN</code> values in the input series will be ignored and treated as 0.</li></ul><h3 id="examples-3" tabindex="-1"><a class="header-anchor" href="#examples-3"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d1.s1|root.test.d1.s2|
+-----------------------------+---------------+---------------+
|2020-01-01T00:00:01.000+08:00|           null|              6|
|2020-01-01T00:00:02.000+08:00|              2|              7|
|2020-01-01T00:00:03.000+08:00|              3|            NaN|
|2020-01-01T00:00:04.000+08:00|              4|              9|
|2020-01-01T00:00:05.000+08:00|              5|             10|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> xcorr<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">05</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------------------------------+
|                         Time|xcorr(root.test.d1.s1, root.test.d1.s2)|
+-----------------------------+---------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                    0.0|
|1970-01-01T08:00:00.002+08:00|                                    4.0|
|1970-01-01T08:00:00.003+08:00|                                    9.6|
|1970-01-01T08:00:00.004+08:00|                                   13.4|
|1970-01-01T08:00:00.005+08:00|                                   20.0|
|1970-01-01T08:00:00.006+08:00|                                   15.6|
|1970-01-01T08:00:00.007+08:00|                                    9.2|
|1970-01-01T08:00:00.008+08:00|                                   11.8|
|1970-01-01T08:00:00.009+08:00|                                    6.0|
+-----------------------------+---------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76),l=[t];function r(d,o){return s(),n("div",null,l)}const u=e(a,[["render",r],["__file","Data-Matching.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V0.13.x/UDF-Library/Data-Matching.html","title":"Data Matching","lang":"en-US","frontmatter":{"description":"Data Matching Cov Usage This function is used to calculate the population covariance. Name: COV Input Series: Only support two input series. The types are both INT32 / INT64 / F...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/UDF-Library/Data-Matching.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/UDF-Library/Data-Matching.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Data Matching"}],["meta",{"property":"og:description","content":"Data Matching Cov Usage This function is used to calculate the population covariance. Name: COV Input Series: Only support two input series. The types are both INT32 / INT64 / F..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Matching\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Cov","slug":"cov","link":"#cov","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]},{"level":2,"title":"DTW","slug":"dtw","link":"#dtw","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":3,"title":"Examples","slug":"examples-1","link":"#examples-1","children":[]}]},{"level":2,"title":"Pearson","slug":"pearson","link":"#pearson","children":[{"level":3,"title":"Usage","slug":"usage-2","link":"#usage-2","children":[]},{"level":3,"title":"Examples","slug":"examples-2","link":"#examples-2","children":[]}]},{"level":2,"title":"PtnSym","slug":"ptnsym","link":"#ptnsym","children":[{"level":3,"title":"Usage","slug":"usage-3","link":"#usage-3","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]},{"level":2,"title":"XCorr","slug":"xcorr","link":"#xcorr","children":[{"level":3,"title":"Usage","slug":"usage-4","link":"#usage-4","children":[]},{"level":3,"title":"Examples","slug":"examples-3","link":"#examples-3","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":5.28,"words":1583},"filePathRelative":"UserGuide/V0.13.x/UDF-Library/Data-Matching.md","localizedDate":"July 10, 2023","autoDesc":true}');export{u as comp,p as data};
