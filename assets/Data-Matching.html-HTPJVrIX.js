import{_ as n,o as e,c as s,e as a}from"./app-XaimuxhO.js";const i={},l=a(`<h1 id="数据匹配" tabindex="-1"><a class="header-anchor" href="#数据匹配"><span>数据匹配</span></a></h1><h2 id="cov" tabindex="-1"><a class="header-anchor" href="#cov"><span>Cov</span></a></h2><h3 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介"><span>函数简介</span></a></h3><p>本函数用于计算两列数值型数据的总体协方差。</p><p><strong>函数名：</strong> COV</p><p><strong>输入序列：</strong> 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>输出序列：</strong> 输出单个序列，类型为 DOUBLE。序列仅包含一个时间戳为 0、值为总体协方差的数据点。</p><p><strong>提示：</strong></p><ul><li>如果某行数据中包含空值、缺失值或<code>NaN</code>，该行数据将会被忽略；</li><li>如果数据中所有的行都被忽略，函数将会输出<code>NaN</code>。</li></ul><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h3><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> cov<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------------------------------+
|                         Time|cov(root.test.d2.s1, root.test.d2.s2)|
+-----------------------------+-------------------------------------+
|1970-01-01T08:00:00.000+08:00|                   12.291666666666666|
+-----------------------------+-------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dtw" tabindex="-1"><a class="header-anchor" href="#dtw"><span>Dtw</span></a></h2><h3 id="函数简介-1" tabindex="-1"><a class="header-anchor" href="#函数简介-1"><span>函数简介</span></a></h3><p>本函数用于计算两列数值型数据的 DTW 距离。</p><p><strong>函数名：</strong> DTW</p><p><strong>输入序列：</strong> 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>输出序列：</strong> 输出单个序列，类型为 DOUBLE。序列仅包含一个时间戳为 0、值为两个时间序列的 DTW 距离值。</p><p><strong>提示：</strong></p><ul><li>如果某行数据中包含空值、缺失值或<code>NaN</code>，该行数据将会被忽略；</li><li>如果数据中所有的行都被忽略，函数将会输出 0。</li></ul><h3 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1"><span>使用示例</span></a></h3><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> dtw<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------------------------------+
|                         Time|dtw(root.test.d2.s1, root.test.d2.s2)|
+-----------------------------+-------------------------------------+
|1970-01-01T08:00:00.000+08:00|                                 20.0|
+-----------------------------+-------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pearson" tabindex="-1"><a class="header-anchor" href="#pearson"><span>Pearson</span></a></h2><h3 id="函数简介-2" tabindex="-1"><a class="header-anchor" href="#函数简介-2"><span>函数简介</span></a></h3><p>本函数用于计算两列数值型数据的皮尔森相关系数。</p><p><strong>函数名：</strong> PEARSON</p><p><strong>输入序列：</strong> 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>输出序列：</strong> 输出单个序列，类型为 DOUBLE。序列仅包含一个时间戳为 0、值为皮尔森相关系数的数据点。</p><p><strong>提示：</strong></p><ul><li>如果某行数据中包含空值、缺失值或<code>NaN</code>，该行数据将会被忽略；</li><li>如果数据中所有的行都被忽略，函数将会输出<code>NaN</code>。</li></ul><h3 id="使用示例-2" tabindex="-1"><a class="header-anchor" href="#使用示例-2"><span>使用示例</span></a></h3><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> pearson<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------+
|                         Time|pearson(root.test.d2.s1, root.test.d2.s2)|
+-----------------------------+-----------------------------------------+
|1970-01-01T08:00:00.000+08:00|                       0.5630881927754872|
+-----------------------------+-----------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ptnsym" tabindex="-1"><a class="header-anchor" href="#ptnsym"><span>PtnSym</span></a></h2><h3 id="函数简介-3" tabindex="-1"><a class="header-anchor" href="#函数简介-3"><span>函数简介</span></a></h3><p>本函数用于寻找序列中所有对称度小于阈值的对称子序列。对称度通过 DTW 计算，值越小代表序列对称性越高。</p><p><strong>函数名：</strong> PTNSYM</p><p><strong>输入序列：</strong> 仅支持一个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>window</code>：对称子序列的长度，是一个正整数，默认值为 10。</li><li><code>threshold</code>：对称度阈值，是一个非负数，只有对称度小于等于该值的对称子序列才会被输出。在缺省情况下，所有的子序列都会被输出。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为 DOUBLE。序列中的每一个数据点对应于一个对称子序列，时间戳为子序列的起始时刻，值为对称度。</p><h3 id="使用示例-3" tabindex="-1"><a class="header-anchor" href="#使用示例-3"><span>使用示例</span></a></h3><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ptnsym<span class="token punctuation">(</span>s4<span class="token punctuation">,</span> <span class="token string">&#39;window&#39;</span><span class="token operator">=</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;threshold&#39;</span><span class="token operator">=</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------+
|                         Time|ptnsym(root.test.d1.s4, &quot;window&quot;=&quot;5&quot;, &quot;threshold&quot;=&quot;0&quot;)|
+-----------------------------+------------------------------------------------------+
|2021-01-01T12:00:00.000+08:00|                                                   0.0|
|2021-01-01T12:00:07.000+08:00|                                                   0.0|
+-----------------------------+------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="xcorr" tabindex="-1"><a class="header-anchor" href="#xcorr"><span>XCorr</span></a></h2><h3 id="函数简介-4" tabindex="-1"><a class="header-anchor" href="#函数简介-4"><span>函数简介</span></a></h3><p>本函数用于计算两条时间序列的互相关函数值，<br> 对离散序列而言，互相关函数可以表示为<br> $$CR(n) = \\frac{1}{N} \\sum_{m=1}^N S_1[m]S_2[m+n]$$<br> 常用于表征两条序列在不同对齐条件下的相似度。</p><p><strong>函数名：</strong> XCORR</p><p><strong>输入序列：</strong> 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>输出序列：</strong> 输出单个序列，类型为 DOUBLE。序列中共包含$2N-1$个数据点，<br> 其中正中心的值为两条序列按照预先对齐的结果计算的互相关系数（即等于以上公式的$CR(0)$），<br> 前半部分的值表示将后一条输入序列向前平移时计算的互相关系数，<br> 直至两条序列没有重合的数据点（不包含完全分离时的结果$CR(-N)=0.0$），<br> 后半部分类似。<br> 用公式可表示为（所有序列的索引从1开始计数）：<br> $$OS[i] = CR(-N+i) = \\frac{1}{N} \\sum_{m=1}^{i} S_1[m]S_2[N-i+m],\\ if\\ i &lt;= N$$<br> $$OS[i] = CR(i-N) = \\frac{1}{N} \\sum_{m=1}^{2N-i} S_1[i-N+m]S_2[m],\\ if\\ i &gt; N$$</p><p><strong>提示：</strong></p><ul><li>两条序列中的<code>null</code> 和<code>NaN</code> 值会被忽略，在计算中表现为 0。</li></ul><h3 id="使用示例-4" tabindex="-1"><a class="header-anchor" href="#使用示例-4"><span>使用示例</span></a></h3><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d1.s1|root.test.d1.s2|
+-----------------------------+---------------+---------------+
|2020-01-01T00:00:01.000+08:00|           null|              6|
|2020-01-01T00:00:02.000+08:00|              2|              7|
|2020-01-01T00:00:03.000+08:00|              3|            NaN|
|2020-01-01T00:00:04.000+08:00|              4|              9|
|2020-01-01T00:00:05.000+08:00|              5|             10|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> xcorr<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">05</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,76),t=[l];function d(r,c){return e(),s("div",null,t)}const v=n(i,[["render",d],["__file","Data-Matching.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Operators-Functions/Data-Matching.html","title":"数据匹配","lang":"zh-CN","frontmatter":{"description":"数据匹配 Cov 函数简介 本函数用于计算两列数值型数据的总体协方差。 函数名： COV 输入序列： 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。 输出序列： 输出单个序列，类型为 DOUBLE。序列仅包含一个时间戳为 0、值为总体协方差的数据点。 提示： 如果某行数据中包含空值、缺失值或NaN，该行数据...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Operators-Functions/Data-Matching.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operators-Functions/Data-Matching.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据匹配"}],["meta",{"property":"og:description","content":"数据匹配 Cov 函数简介 本函数用于计算两列数值型数据的总体协方差。 函数名： COV 输入序列： 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。 输出序列： 输出单个序列，类型为 DOUBLE。序列仅包含一个时间戳为 0、值为总体协方差的数据点。 提示： 如果某行数据中包含空值、缺失值或NaN，该行数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据匹配\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Cov","slug":"cov","link":"#cov","children":[{"level":3,"title":"函数简介","slug":"函数简介","link":"#函数简介","children":[]},{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]}]},{"level":2,"title":"Dtw","slug":"dtw","link":"#dtw","children":[{"level":3,"title":"函数简介","slug":"函数简介-1","link":"#函数简介-1","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-1","link":"#使用示例-1","children":[]}]},{"level":2,"title":"Pearson","slug":"pearson","link":"#pearson","children":[{"level":3,"title":"函数简介","slug":"函数简介-2","link":"#函数简介-2","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-2","link":"#使用示例-2","children":[]}]},{"level":2,"title":"PtnSym","slug":"ptnsym","link":"#ptnsym","children":[{"level":3,"title":"函数简介","slug":"函数简介-3","link":"#函数简介-3","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-3","link":"#使用示例-3","children":[]}]},{"level":2,"title":"XCorr","slug":"xcorr","link":"#xcorr","children":[{"level":3,"title":"函数简介","slug":"函数简介-4","link":"#函数简介-4","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-4","link":"#使用示例-4","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.53,"words":1958},"filePathRelative":"zh/UserGuide/V1.0.x/Operators-Functions/Data-Matching.md","localizedDate":"2023年7月10日","autoDesc":true}');export{v as comp,p as data};
