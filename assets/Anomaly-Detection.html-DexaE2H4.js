import{_ as e,o as n,c as s,e as i}from"./app-DrPcRZG6.js";const a={},l=i(`<h1 id="anomaly-detection" tabindex="-1"><a class="header-anchor" href="#anomaly-detection"><span>Anomaly Detection</span></a></h1><h2 id="iqr" tabindex="-1"><a class="header-anchor" href="#iqr"><span>IQR</span></a></h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><p>This function is used to detect anomalies based on IQR. Points distributing beyond 1.5 times IQR are selected.</p><p><strong>Name:</strong> IQR</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><ul><li><code>method</code>: When set to &quot;batch&quot;, anomaly test is conducted after importing all data points; when set to &quot;stream&quot;, it is required to provide upper and lower quantiles. The default method is &quot;batch&quot;.</li><li><code>q1</code>: The lower quantile when method is set to &quot;stream&quot;.</li><li><code>q3</code>: The upper quantile when method is set to &quot;stream&quot;.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE.</p><p><strong>Note:</strong> $IQR=Q_3-Q_1$</p><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3><h4 id="batch-computing" tabindex="-1"><a class="header-anchor" href="#batch-computing"><span>Batch computing</span></a></h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------+
|                         Time|root.test.s1|
+-----------------------------+------------+
|1970-01-01T08:00:00.100+08:00|         0.0|
|1970-01-01T08:00:00.200+08:00|         0.0|
|1970-01-01T08:00:00.300+08:00|         1.0|
|1970-01-01T08:00:00.400+08:00|        -1.0|
|1970-01-01T08:00:00.500+08:00|         0.0|
|1970-01-01T08:00:00.600+08:00|         0.0|
|1970-01-01T08:00:00.700+08:00|        -2.0|
|1970-01-01T08:00:00.800+08:00|         2.0|
|1970-01-01T08:00:00.900+08:00|         0.0|
|1970-01-01T08:00:01.000+08:00|         0.0|
|1970-01-01T08:00:01.100+08:00|         1.0|
|1970-01-01T08:00:01.200+08:00|        -1.0|
|1970-01-01T08:00:01.300+08:00|        -1.0|
|1970-01-01T08:00:01.400+08:00|         1.0|
|1970-01-01T08:00:01.500+08:00|         0.0|
|1970-01-01T08:00:01.600+08:00|         0.0|
|1970-01-01T08:00:01.700+08:00|        10.0|
|1970-01-01T08:00:01.800+08:00|         2.0|
|1970-01-01T08:00:01.900+08:00|        -2.0|
|1970-01-01T08:00:02.000+08:00|         0.0|
+-----------------------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> iqr<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------+
|                         Time|iqr(root.test.s1)|
+-----------------------------+-----------------+
|1970-01-01T08:00:01.700+08:00|             10.0|
+-----------------------------+-----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ksigma" tabindex="-1"><a class="header-anchor" href="#ksigma"><span>KSigma</span></a></h2><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><p>This function is used to detect anomalies based on the Dynamic K-Sigma Algorithm.<br> Within a sliding window, the input value with a deviation of more than k times the standard deviation from the average will be output as anomaly.</p><p><strong>Name:</strong> KSIGMA</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><ul><li><code>k</code>: How many times to multiply on standard deviation to define anomaly, the default value is 3.</li><li><code>window</code>: The window size of Dynamic K-Sigma Algorithm, the default value is 10000.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is same as input series.</p><p><strong>Note:</strong> Only when is larger than 0, the anomaly detection will be performed. Otherwise, nothing will be output.</p><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1"><span>Examples</span></a></h3><h4 id="assigning-k" tabindex="-1"><a class="header-anchor" href="#assigning-k"><span>Assigning k</span></a></h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|2020-01-01T00:00:02.000+08:00|            0.0|
|2020-01-01T00:00:03.000+08:00|           50.0|
|2020-01-01T00:00:04.000+08:00|          100.0|
|2020-01-01T00:00:06.000+08:00|          150.0|
|2020-01-01T00:00:08.000+08:00|          200.0|
|2020-01-01T00:00:10.000+08:00|          200.0|
|2020-01-01T00:00:14.000+08:00|          200.0|
|2020-01-01T00:00:15.000+08:00|          200.0|
|2020-01-01T00:00:16.000+08:00|          200.0|
|2020-01-01T00:00:18.000+08:00|          200.0|
|2020-01-01T00:00:20.000+08:00|          150.0|
|2020-01-01T00:00:22.000+08:00|          100.0|
|2020-01-01T00:00:26.000+08:00|           50.0|
|2020-01-01T00:00:28.000+08:00|            0.0|
|2020-01-01T00:00:30.000+08:00|            NaN|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ksigma<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;k&quot;</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------------------------+
|Time                         |ksigma(root.test.d1.s1,&quot;k&quot;=&quot;3.0&quot;)|
+-----------------------------+---------------------------------+
|2020-01-01T00:00:02.000+08:00|                              0.0|
|2020-01-01T00:00:03.000+08:00|                             50.0|
|2020-01-01T00:00:26.000+08:00|                             50.0|
|2020-01-01T00:00:28.000+08:00|                              0.0|
+-----------------------------+---------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lof" tabindex="-1"><a class="header-anchor" href="#lof"><span>LOF</span></a></h2><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2"><span>Usage</span></a></h3><p>This function is used to detect density anomaly of time series. According to k-th distance calculation parameter and local outlier factor (lof) threshold, the function judges if a set of input values is an density anomaly, and a bool mark of anomaly values will be output.</p><p><strong>Name:</strong> LOF</p><p><strong>Input Series:</strong> Multiple input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><ul><li><code>method</code>:assign a detection method. The default value is &quot;default&quot;, when input data has multiple dimensions. The alternative is &quot;series&quot;, when a input series will be transformed to high dimension.</li><li><code>k</code>:use the k-th distance to calculate lof. Default value is 3.</li><li><code>window</code>: size of window to split origin data points. Default value is 10000.</li><li><code>windowsize</code>:dimension that will be transformed into when method is &quot;series&quot;. The default value is 5.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE.</p><p><strong>Note:</strong> Incomplete rows will be ignored. They are neither calculated nor marked as anomaly.</p><h3 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2"><span>Examples</span></a></h3><h4 id="using-default-parameters" tabindex="-1"><a class="header-anchor" href="#using-default-parameters"><span>Using default parameters</span></a></h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d1.s1|root.test.d1.s2|
+-----------------------------+---------------+---------------+
|1970-01-01T08:00:00.100+08:00|            0.0|            0.0|
|1970-01-01T08:00:00.200+08:00|            0.0|            1.0|
|1970-01-01T08:00:00.300+08:00|            1.0|            1.0|
|1970-01-01T08:00:00.400+08:00|            1.0|            0.0|
|1970-01-01T08:00:00.500+08:00|            0.0|           -1.0|
|1970-01-01T08:00:00.600+08:00|           -1.0|           -1.0|
|1970-01-01T08:00:00.700+08:00|           -1.0|            0.0|
|1970-01-01T08:00:00.800+08:00|            2.0|            2.0|
|1970-01-01T08:00:00.900+08:00|            0.0|           null|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> lof<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;</span><span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------------------------------+
|                         Time|lof(root.test.d1.s1, root.test.d1.s2)|
+-----------------------------+-------------------------------------+
|1970-01-01T08:00:00.100+08:00|                   3.8274824267668244|
|1970-01-01T08:00:00.200+08:00|                   3.0117631741126156|
|1970-01-01T08:00:00.300+08:00|                    2.838155437762879|
|1970-01-01T08:00:00.400+08:00|                   3.0117631741126156|
|1970-01-01T08:00:00.500+08:00|                     2.73518261244453|
|1970-01-01T08:00:00.600+08:00|                    2.371440975708148|
|1970-01-01T08:00:00.700+08:00|                     2.73518261244453|
|1970-01-01T08:00:00.800+08:00|                   1.7561416374270742|
+-----------------------------+-------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="diagnosing-1d-timeseries" tabindex="-1"><a class="header-anchor" href="#diagnosing-1d-timeseries"><span>Diagnosing 1d timeseries</span></a></h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|1970-01-01T08:00:00.100+08:00|            1.0|
|1970-01-01T08:00:00.200+08:00|            2.0|
|1970-01-01T08:00:00.300+08:00|            3.0|
|1970-01-01T08:00:00.400+08:00|            4.0|
|1970-01-01T08:00:00.500+08:00|            5.0|
|1970-01-01T08:00:00.600+08:00|            6.0|
|1970-01-01T08:00:00.700+08:00|            7.0|
|1970-01-01T08:00:00.800+08:00|            8.0|
|1970-01-01T08:00:00.900+08:00|            9.0|
|1970-01-01T08:00:01.000+08:00|           10.0|
|1970-01-01T08:00:01.100+08:00|           11.0|
|1970-01-01T08:00:01.200+08:00|           12.0|
|1970-01-01T08:00:01.300+08:00|           13.0|
|1970-01-01T08:00:01.400+08:00|           14.0|
|1970-01-01T08:00:01.500+08:00|           15.0|
|1970-01-01T08:00:01.600+08:00|           16.0|
|1970-01-01T08:00:01.700+08:00|           17.0|
|1970-01-01T08:00:01.800+08:00|           18.0|
|1970-01-01T08:00:01.900+08:00|           19.0|
|1970-01-01T08:00:02.000+08:00|           20.0|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> lof<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;method&quot;</span><span class="token operator">=</span><span class="token string">&quot;series&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;</span><span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+--------------------+
|                         Time|lof(root.test.d1.s1)|
+-----------------------------+--------------------+
|1970-01-01T08:00:00.100+08:00|    3.77777777777778|
|1970-01-01T08:00:00.200+08:00|    4.32727272727273|
|1970-01-01T08:00:00.300+08:00|    4.85714285714286|
|1970-01-01T08:00:00.400+08:00|    5.40909090909091|
|1970-01-01T08:00:00.500+08:00|    5.94999999999999|
|1970-01-01T08:00:00.600+08:00|    6.43243243243243|
|1970-01-01T08:00:00.700+08:00|    6.79999999999999|
|1970-01-01T08:00:00.800+08:00|                 7.0|
|1970-01-01T08:00:00.900+08:00|                 7.0|
|1970-01-01T08:00:01.000+08:00|    6.79999999999999|
|1970-01-01T08:00:01.100+08:00|    6.43243243243243|
|1970-01-01T08:00:01.200+08:00|    5.94999999999999|
|1970-01-01T08:00:01.300+08:00|    5.40909090909091|
|1970-01-01T08:00:01.400+08:00|    4.85714285714286|
|1970-01-01T08:00:01.500+08:00|    4.32727272727273|
|1970-01-01T08:00:01.600+08:00|    3.77777777777778|
+-----------------------------+--------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="missdetect" tabindex="-1"><a class="header-anchor" href="#missdetect"><span>MissDetect</span></a></h2><h3 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3"><span>Usage</span></a></h3><p>This function is used to detect missing anomalies.<br> In some datasets, missing values are filled by linear interpolation.<br> Thus, there are several long perfect linear segments.<br> By discovering these perfect linear segments,<br> missing anomalies are detected.</p><p><strong>Name:</strong> MISSDETECT</p><p><strong>Input Series:</strong> Only support a single input series. The data type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameter:</strong></p><p><code>error</code>: The minimum length of the detected missing anomalies, which is an integer greater than or equal to 10. By default, it is 10.</p><p><strong>Output Series:</strong> Output a single series. The type is BOOLEAN. Each data point which is miss anomaly will be labeled as true.</p><h3 id="examples-3" tabindex="-1"><a class="header-anchor" href="#examples-3"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d2.s2|
+-----------------------------+---------------+
|2021-07-01T12:00:00.000+08:00|            0.0|
|2021-07-01T12:00:01.000+08:00|            1.0|
|2021-07-01T12:00:02.000+08:00|            0.0|
|2021-07-01T12:00:03.000+08:00|            1.0|
|2021-07-01T12:00:04.000+08:00|            0.0|
|2021-07-01T12:00:05.000+08:00|            0.0|
|2021-07-01T12:00:06.000+08:00|            0.0|
|2021-07-01T12:00:07.000+08:00|            0.0|
|2021-07-01T12:00:08.000+08:00|            0.0|
|2021-07-01T12:00:09.000+08:00|            0.0|
|2021-07-01T12:00:10.000+08:00|            0.0|
|2021-07-01T12:00:11.000+08:00|            0.0|
|2021-07-01T12:00:12.000+08:00|            0.0|
|2021-07-01T12:00:13.000+08:00|            0.0|
|2021-07-01T12:00:14.000+08:00|            0.0|
|2021-07-01T12:00:15.000+08:00|            0.0|
|2021-07-01T12:00:16.000+08:00|            1.0|
|2021-07-01T12:00:17.000+08:00|            0.0|
|2021-07-01T12:00:18.000+08:00|            1.0|
|2021-07-01T12:00:19.000+08:00|            0.0|
|2021-07-01T12:00:20.000+08:00|            1.0|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> missdetect<span class="token punctuation">(</span>s2<span class="token punctuation">,</span><span class="token string">&#39;minlen&#39;</span><span class="token operator">=</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------+
|                         Time|missdetect(root.test.d2.s2, &quot;minlen&quot;=&quot;10&quot;)|
+-----------------------------+------------------------------------------+
|2021-07-01T12:00:00.000+08:00|                                     false|
|2021-07-01T12:00:01.000+08:00|                                     false|
|2021-07-01T12:00:02.000+08:00|                                     false|
|2021-07-01T12:00:03.000+08:00|                                     false|
|2021-07-01T12:00:04.000+08:00|                                      true|
|2021-07-01T12:00:05.000+08:00|                                      true|
|2021-07-01T12:00:06.000+08:00|                                      true|
|2021-07-01T12:00:07.000+08:00|                                      true|
|2021-07-01T12:00:08.000+08:00|                                      true|
|2021-07-01T12:00:09.000+08:00|                                      true|
|2021-07-01T12:00:10.000+08:00|                                      true|
|2021-07-01T12:00:11.000+08:00|                                      true|
|2021-07-01T12:00:12.000+08:00|                                      true|
|2021-07-01T12:00:13.000+08:00|                                      true|
|2021-07-01T12:00:14.000+08:00|                                      true|
|2021-07-01T12:00:15.000+08:00|                                      true|
|2021-07-01T12:00:16.000+08:00|                                     false|
|2021-07-01T12:00:17.000+08:00|                                     false|
|2021-07-01T12:00:18.000+08:00|                                     false|
|2021-07-01T12:00:19.000+08:00|                                     false|
|2021-07-01T12:00:20.000+08:00|                                     false|
+-----------------------------+------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="range" tabindex="-1"><a class="header-anchor" href="#range"><span>Range</span></a></h2><h3 id="usage-4" tabindex="-1"><a class="header-anchor" href="#usage-4"><span>Usage</span></a></h3><p>This function is used to detect range anomaly of time series. According to upper bound and lower bound parameters, the function judges if a input value is beyond range, aka range anomaly, and a new time series of anomaly will be output.</p><p><strong>Name:</strong> RANGE</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><ul><li><code>lower_bound</code>:lower bound of range anomaly detection.</li><li><code>upper_bound</code>:upper bound of range anomaly detection.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is the same as the input.</p><p><strong>Note:</strong> Only when <code>upper_bound</code> is larger than <code>lower_bound</code>, the anomaly detection will be performed. Otherwise, nothing will be output.</p><h3 id="examples-4" tabindex="-1"><a class="header-anchor" href="#examples-4"><span>Examples</span></a></h3><h4 id="assigning-lower-and-upper-bound" tabindex="-1"><a class="header-anchor" href="#assigning-lower-and-upper-bound"><span>Assigning Lower and Upper Bound</span></a></h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|2020-01-01T00:00:02.000+08:00|          100.0|
|2020-01-01T00:00:03.000+08:00|          101.0|
|2020-01-01T00:00:04.000+08:00|          102.0|
|2020-01-01T00:00:06.000+08:00|          104.0|
|2020-01-01T00:00:08.000+08:00|          126.0|
|2020-01-01T00:00:10.000+08:00|          108.0|
|2020-01-01T00:00:14.000+08:00|          112.0|
|2020-01-01T00:00:15.000+08:00|          113.0|
|2020-01-01T00:00:16.000+08:00|          114.0|
|2020-01-01T00:00:18.000+08:00|          116.0|
|2020-01-01T00:00:20.000+08:00|          118.0|
|2020-01-01T00:00:22.000+08:00|          120.0|
|2020-01-01T00:00:26.000+08:00|          124.0|
|2020-01-01T00:00:28.000+08:00|          126.0|
|2020-01-01T00:00:30.000+08:00|            NaN|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> range<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;lower_bound&quot;</span><span class="token operator">=</span><span class="token string">&quot;101.0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;upper_bound&quot;</span><span class="token operator">=</span><span class="token string">&quot;125.0&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------------------+
|Time                         |range(root.test.d1.s1,&quot;lower_bound&quot;=&quot;101.0&quot;,&quot;upper_bound&quot;=&quot;125.0&quot;)|
+-----------------------------+------------------------------------------------------------------+
|2020-01-01T00:00:02.000+08:00|                                                             100.0|
|2020-01-01T00:00:28.000+08:00|                                                             126.0|
+-----------------------------+------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="twosidedfilter" tabindex="-1"><a class="header-anchor" href="#twosidedfilter"><span>TwoSidedFilter</span></a></h2><h3 id="usage-5" tabindex="-1"><a class="header-anchor" href="#usage-5"><span>Usage</span></a></h3><p>The function is used to filter anomalies of a numeric time series based on two-sided window detection.</p><p><strong>Name:</strong> TWOSIDEDFILTER</p><p><strong>Input Series:</strong> Only support a single input series. The data type is INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>Output Series:</strong> Output a single series. The type is the same as the input. It is the input without anomalies.</p><p><strong>Parameter:</strong></p><ul><li><p><code>len</code>: The size of the window, which is a positive integer. By default, it&#39;s 5. When <code>len</code>=3, the algorithm detects forward window and backward window with length 3 and calculates the outlierness of the current point.</p></li><li><p><code>threshold</code>: The threshold of outlierness, which is a floating number in (0,1). By default, it&#39;s 0.3. The strict standard of detecting anomalies is in proportion to the threshold.</p></li></ul><h3 id="examples-5" tabindex="-1"><a class="header-anchor" href="#examples-5"><span>Examples</span></a></h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------+
|                         Time|root.test.s0|
+-----------------------------+------------+
|1970-01-01T08:00:00.000+08:00|      2002.0|
|1970-01-01T08:00:01.000+08:00|      1946.0|
|1970-01-01T08:00:02.000+08:00|      1958.0|
|1970-01-01T08:00:03.000+08:00|      2012.0|
|1970-01-01T08:00:04.000+08:00|      2051.0|
|1970-01-01T08:00:05.000+08:00|      1898.0|
|1970-01-01T08:00:06.000+08:00|      2014.0|
|1970-01-01T08:00:07.000+08:00|      2052.0|
|1970-01-01T08:00:08.000+08:00|      1935.0|
|1970-01-01T08:00:09.000+08:00|      1901.0|
|1970-01-01T08:00:10.000+08:00|      1972.0|
|1970-01-01T08:00:11.000+08:00|      1969.0|
|1970-01-01T08:00:12.000+08:00|      1984.0|
|1970-01-01T08:00:13.000+08:00|      2018.0|
|1970-01-01T08:00:37.000+08:00|      1484.0|
|1970-01-01T08:00:38.000+08:00|      1055.0|
|1970-01-01T08:00:39.000+08:00|      1050.0|
|1970-01-01T08:01:05.000+08:00|      1023.0|
|1970-01-01T08:01:06.000+08:00|      1056.0|
|1970-01-01T08:01:07.000+08:00|       978.0|
|1970-01-01T08:01:08.000+08:00|      1050.0|
|1970-01-01T08:01:09.000+08:00|      1123.0|
|1970-01-01T08:01:10.000+08:00|      1150.0|
|1970-01-01T08:01:11.000+08:00|      1034.0|
|1970-01-01T08:01:12.000+08:00|       950.0|
|1970-01-01T08:01:13.000+08:00|      1059.0|
+-----------------------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> TwoSidedFilter<span class="token punctuation">(</span>s0<span class="token punctuation">,</span> <span class="token string">&#39;len&#39;</span><span class="token operator">=</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;threshold&#39;</span><span class="token operator">=</span><span class="token string">&#39;0.3&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------+
|                         Time|root.test.s0|
+-----------------------------+------------+
|1970-01-01T08:00:00.000+08:00|      2002.0|
|1970-01-01T08:00:01.000+08:00|      1946.0|
|1970-01-01T08:00:02.000+08:00|      1958.0|
|1970-01-01T08:00:03.000+08:00|      2012.0|
|1970-01-01T08:00:04.000+08:00|      2051.0|
|1970-01-01T08:00:05.000+08:00|      1898.0|
|1970-01-01T08:00:06.000+08:00|      2014.0|
|1970-01-01T08:00:07.000+08:00|      2052.0|
|1970-01-01T08:00:08.000+08:00|      1935.0|
|1970-01-01T08:00:09.000+08:00|      1901.0|
|1970-01-01T08:00:10.000+08:00|      1972.0|
|1970-01-01T08:00:11.000+08:00|      1969.0|
|1970-01-01T08:00:12.000+08:00|      1984.0|
|1970-01-01T08:00:13.000+08:00|      2018.0|
|1970-01-01T08:01:05.000+08:00|      1023.0|
|1970-01-01T08:01:06.000+08:00|      1056.0|
|1970-01-01T08:01:07.000+08:00|       978.0|
|1970-01-01T08:01:08.000+08:00|      1050.0|
|1970-01-01T08:01:09.000+08:00|      1123.0|
|1970-01-01T08:01:10.000+08:00|      1150.0|
|1970-01-01T08:01:11.000+08:00|      1034.0|
|1970-01-01T08:01:12.000+08:00|       950.0|
|1970-01-01T08:01:13.000+08:00|      1059.0|
+-----------------------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,102),t=[l];function d(r,o){return n(),s("div",null,t)}const c=e(a,[["render",d],["__file","Anomaly-Detection.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V1.0.x/Operators-Functions/Anomaly-Detection.html","title":"Anomaly Detection","lang":"en-US","frontmatter":{"description":"Anomaly Detection IQR Usage This function is used to detect anomalies based on IQR. Points distributing beyond 1.5 times IQR are selected. Name: IQR Input Series: Only support a...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operators-Functions/Anomaly-Detection.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Operators-Functions/Anomaly-Detection.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Anomaly Detection"}],["meta",{"property":"og:description","content":"Anomaly Detection IQR Usage This function is used to detect anomalies based on IQR. Points distributing beyond 1.5 times IQR are selected. Name: IQR Input Series: Only support a..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Anomaly Detection\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"IQR","slug":"iqr","link":"#iqr","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]},{"level":2,"title":"KSigma","slug":"ksigma","link":"#ksigma","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":3,"title":"Examples","slug":"examples-1","link":"#examples-1","children":[]}]},{"level":2,"title":"LOF","slug":"lof","link":"#lof","children":[{"level":3,"title":"Usage","slug":"usage-2","link":"#usage-2","children":[]},{"level":3,"title":"Examples","slug":"examples-2","link":"#examples-2","children":[]}]},{"level":2,"title":"MissDetect","slug":"missdetect","link":"#missdetect","children":[{"level":3,"title":"Usage","slug":"usage-3","link":"#usage-3","children":[]},{"level":3,"title":"Examples","slug":"examples-3","link":"#examples-3","children":[]}]},{"level":2,"title":"Range","slug":"range","link":"#range","children":[{"level":3,"title":"Usage","slug":"usage-4","link":"#usage-4","children":[]},{"level":3,"title":"Examples","slug":"examples-4","link":"#examples-4","children":[]}]},{"level":2,"title":"TwoSidedFilter","slug":"twosidedfilter","link":"#twosidedfilter","children":[{"level":3,"title":"Usage","slug":"usage-5","link":"#usage-5","children":[]},{"level":3,"title":"Examples","slug":"examples-5","link":"#examples-5","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":8.9,"words":2670},"filePathRelative":"UserGuide/V1.0.x/Operators-Functions/Anomaly-Detection.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,p as data};
