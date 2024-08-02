import{_ as s,r as o,o as l,c as r,b as e,d as n,a as i,w as d,e as t}from"./app-CVD6HEOl.js";const c={},p=t(`<h1 id="continuous-query-cq" tabindex="-1"><a class="header-anchor" href="#continuous-query-cq"><span>Continuous Query, CQ</span></a></h1><p>We can create, drop a CQ, and query all registered CQ configuration information through SQL statements.</p><p>Note that the current distributed version of IoTDB does not support continuous queries. Please stay tuned.</p><h2 id="sql-statements" tabindex="-1"><a class="header-anchor" href="#sql-statements"><span>SQL statements</span></a></h2><h3 id="create-cq" tabindex="-1"><a class="header-anchor" href="#create-cq"><span>Create CQ</span></a></h3><h4 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token punctuation">(</span>CONTINUOUS QUERY <span class="token operator">|</span> CQ<span class="token punctuation">)</span> <span class="token operator">&lt;</span>cq_id<span class="token operator">&gt;</span> 
<span class="token punctuation">[</span>RESAMPLE EVERY <span class="token operator">&lt;</span>every_interval<span class="token operator">&gt;</span> <span class="token keyword">FOR</span> <span class="token operator">&lt;</span>for_interval<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token keyword">BEGIN</span>
<span class="token keyword">SELECT</span> <span class="token operator">&lt;</span><span class="token keyword">function</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>path_suffix<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token keyword">INTO</span> <span class="token operator">&lt;</span>full_path<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>node_name<span class="token operator">&gt;</span>
<span class="token keyword">FROM</span> <span class="token operator">&lt;</span>path_prefix<span class="token operator">&gt;</span>
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>group_by_interval<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token keyword">level</span> <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token keyword">level</span><span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),u=t("<li><p><code>&lt;cq_id&gt;</code> specifies the globally unique id of CQ.</p></li><li><p><code>&lt;every_interval&gt;</code> specifies the query execution time interval. We currently support the units of ns, us, ms, s, m, h, d, w, and its value should not be lower than the minimum threshold configured by the user.</p></li><li><p><code>&lt;for_interval&gt;</code> specifies the time range of each query as <code>[now()-&lt;for_interval&gt;, now())</code>. We currently support the units of ns, us, ms, s, m, h, d, w.</p></li><li><p><code>&lt;execution_boundary_time&gt;</code> is a date that represents <strong>the start time of the first window</strong>.</p><ul><li><code>&lt;execution_boundary_time&gt;</code> can be earlier than, equals to, later than <strong>current time</strong>.</li><li>This parameter is optional. If not specified, it is equivalent to <code>BOUNDARY now()</code>.</li><li><strong>The end time of the first window</strong> is <code>&lt;execution_boundary_time&gt; + &lt;for_interval&gt;</code>.</li><li>The <strong>start time</strong> of the <code>i (1 &lt;= i)</code>th window is <code>&lt;execution_boundary_time&gt; + &lt;for_interval&gt; + (i - 1) * &lt;every_interval&gt;</code>.</li><li>The <strong>end time</strong> of the <code>i (1 &lt;= i)</code>th window is<code>&lt;execution_boundary_time&gt; + &lt;for_interval&gt; + i * &lt;every_interval&gt;</code>.</li><li>If <strong>current time</strong> is earlier than or equal to <strong>the end time of the first window</strong>, then the first execution moment of the continuous query is <strong>the end time of the first window</strong>.</li><li>If <strong>current time</strong> is later than <strong>the end time of the first window</strong>, then the first execution moment of the continuous query is the <strong>end time of the first window whose end time is later than or equal to the current time</strong> .</li><li>The <strong>query time range</strong> at each execution moment is <code>[now() - &lt;for_interval&gt;, now())</code>.</li></ul></li><li><p><code>&lt;function&gt;</code> specifies the aggregate function.</p></li><li><p><code>&lt;path_prefix&gt;</code> and <code>&lt;path_suffix&gt;</code> are spliced into the queried time series path.</p></li><li><p><code>&lt;full_path&gt;</code> or <code>&lt;node_name&gt;</code> specifies the result time series path.</p></li><li><p><code>&lt;group_by_interval&gt;</code> specifies the time grouping length. We currently support the units of ns, us, ms, s, m, h, d, w, mo, y.</p></li>",8),m=e("code",null,"<level>",-1),v=e("code",null,"<level>",-1),h=e("code",null,"<level>",-1),g=e("code",null,"<level>",-1),b=t(`<p>Note:</p><ul><li><code>&lt;for_interval&gt;</code>,<code>&lt;every_interval&gt;</code> can optionally be specified. If the user does not specify one of them, the value of the unspecified item will be processed equal to <code>&lt;group_by_interval&gt;</code>. <ul><li>The values of <code>&lt;every_interval&gt;</code>, <code>&lt;for_interval&gt;</code> and <code>&lt;group_by_interval&gt;</code> should all be greater than 0.</li><li>The value of <code>&lt;group_by_interval&gt;</code> should be less than the value of <code>&lt;for_interval&gt;</code>, otherwise the system will process the value equal to <code>&lt;for_interval&gt;</code>.</li><li>The user should specify the appropriate <code>&lt;for_interval&gt;</code> and <code>&lt;every_interval&gt;</code> according to actual needs. <ul><li>If <code>&lt;for_interval&gt;</code> is greater than <code>&lt;every_interval&gt;</code>, there will be partial data overlap in each query window. This configuration is not recommended from the perspective of query performance.</li><li>If <code>&lt;for_interval&gt;</code> is less than <code>&lt;every_interval&gt;</code>, there may be uncovered data between each query window.</li></ul></li></ul></li><li>For the result series path <ul><li>The user can choose to specify <code>&lt;full_path&gt;</code>, which is the complete time series path starting with <code>root</code>. The user can use the <code>\${x}</code> variable in the path to represent the node name of <code>level = x</code> in the original time series. <code>x</code> should be greater than or equal to 0 and less than or equal to the value of <code>&lt;level&gt;</code><br> (If <code>level</code> is not specified, it should be less than or equal to the level, i.e. length, of <code>&lt;path_prefix&gt;</code>).</li><li>The user can also specify only <code>&lt;node_name&gt;</code>, which is the last node name of the result time series path. <ul><li>If the user specifies <code>&lt;level&gt; = l</code>, the result time series path generated by the system is <code>root.\${1}. ... .\${l}.&lt;node_name&gt;</code></li><li>If the user does not specify <code>&lt;level&gt;</code>, let the maximum level of the original time series be <code>L</code>,<br> Then the result time series path generated by the system is <code>root.\${1}. ... .\${L-1}.&lt;node_name&gt;</code>.</li></ul></li></ul></li></ul><h4 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h4><h5 id="original-data" tabindex="-1"><a class="header-anchor" href="#original-data"><span>Original Data</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+
|                   timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|
+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+
|root.ln.wf02.wt02.temperature| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|
|root.ln.wf02.wt01.temperature| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|
|root.ln.wf01.wt02.temperature| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|
|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|
+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+
|                         Time|root.ln.wf02.wt02.temperature|root.ln.wf02.wt01.temperature|root.ln.wf01.wt02.temperature|root.ln.wf01.wt01.temperature|
+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+
|2021-05-11T22:18:14.598+08:00|                        121.0|                         72.0|                        183.0|                        115.0|
|2021-05-11T22:18:19.941+08:00|                          0.0|                         68.0|                         68.0|                        103.0|
|2021-05-11T22:18:24.949+08:00|                        122.0|                         45.0|                         11.0|                         14.0|
|2021-05-11T22:18:29.967+08:00|                         47.0|                         14.0|                         59.0|                        181.0|
|2021-05-11T22:18:34.979+08:00|                        182.0|                        113.0|                         29.0|                        180.0|
|2021-05-11T22:18:39.990+08:00|                         42.0|                         11.0|                         52.0|                         19.0|
|2021-05-11T22:18:44.995+08:00|                         78.0|                         38.0|                        123.0|                         52.0|
|2021-05-11T22:18:49.999+08:00|                        137.0|                        172.0|                        135.0|                        193.0|
|2021-05-11T22:18:55.003+08:00|                         16.0|                        124.0|                        183.0|                         18.0|
+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="result-time-series-path-configuration-example" tabindex="-1"><a class="header-anchor" href="#result-time-series-path-configuration-example"><span>Result time series path configuration example</span></a></h5><p>For the above original time series, if the user specifies that the query aggregation level is <code>2</code>, the aggregation function is <code>avg</code>,<br> The user can specify only the last node name of the generated time series in the <code>INTO</code> clause. If the user specifies it as <code>temperature_avg</code>, the full path generated by the system will be <code>root.\${1}.\${2}.temperature_avg</code> .<br> The user can also specify the full path in the <code>INTO</code> clause, and the user can specify it as <code>root.\${1}.\${2}.temperature_avg</code>, <code>root.ln_cq.\${2}.temperature_avg</code>, <code>root.\${1}_cq.\${2}.temperature_avg</code>, <code>root.\${1}.\${2}_cq.temperature_avg</code> etc.,<br> It can also be specified as <code>root.\${2}.\${1}.temperature_avg</code> and others as needed.<br> It should be noted that the <code>x</code> in <code>\${x}</code> should be greater than or equal to <code>1</code> and less than or equal to the value of <code>&lt;level&gt;</code><br> (If <code>&lt;level&gt;</code> is not specified, it should be less than or equal to the length of <code>&lt;path_prefix&gt;</code>). In the above example, <code>x</code> should be less than or equal to <code>2</code>.</p><h5 id="create-cq1" tabindex="-1"><a class="header-anchor" href="#create-cq1"><span>Create <code>cq1</code></span></a></h5><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> CONTINUOUS QUERY cq1 
<span class="token keyword">BEGIN</span> 
  <span class="token keyword">SELECT</span> max_value<span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> 
  <span class="token keyword">INTO</span> temperature_max 
  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> 
  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span> 
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Query the maximum value of <code>root.ln.*.*.temperature</code> in the previous 10s every 10s (the results are grouped by 10s),<br> and the results will be written to <code>root.\${1}.\${2}.\${3}.temperature_max</code>,<br> As a result, 4 new time series will be generated.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+---------------------------------+-----+-------------+--------+--------+-----------+----+----------+
|                       timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|
+---------------------------------+-----+-------------+--------+--------+-----------+----+----------+
|root.ln.wf02.wt02.temperature_max| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|
|root.ln.wf02.wt01.temperature_max| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|
|root.ln.wf01.wt02.temperature_max| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|
|root.ln.wf01.wt01.temperature_max| null|      root.ln|   FLOAT| GORILLA|     SNAPPY|null|      null|
+---------------------------------+-----+-------------+--------+--------+-----------+----+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------------------------+---------------------------------+---------------------------------+---------------------------------+
|                         Time|root.ln.wf02.wt02.temperature_max|root.ln.wf02.wt01.temperature_max|root.ln.wf01.wt02.temperature_max|root.ln.wf01.wt01.temperature_max|
+-----------------------------+---------------------------------+---------------------------------+---------------------------------+---------------------------------+
|2021-05-11T22:18:16.964+08:00|                            122.0|                             68.0|                             68.0|                            103.0|
|2021-05-11T22:18:26.964+08:00|                            182.0|                            113.0|                             59.0|                            181.0|
|2021-05-11T22:18:36.964+08:00|                             78.0|                             38.0|                            123.0|                             52.0|
|2021-05-11T22:18:46.964+08:00|                            137.0|                            172.0|                            183.0|                            193.0|
+-----------------------------+---------------------------------+---------------------------------+---------------------------------+---------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="create-cq2" tabindex="-1"><a class="header-anchor" href="#create-cq2"><span>Create <code>cq2</code></span></a></h5><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> CONTINUOUS QUERY cq2 
RESAMPLE EVERY <span class="token number">20</span>s <span class="token keyword">FOR</span> <span class="token number">20</span>s 
<span class="token keyword">BEGIN</span> 
  <span class="token keyword">SELECT</span> <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> 
  <span class="token keyword">INTO</span> temperature_avg 
  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> 
  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">2</span> 
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Query the average value of <code>root.ln.*.*.temperature</code> in the previous 20s every 20s (the results are grouped by 10s),<br> and the results will be written to <code>root.\${1}.\${2}.temperature_avg</code>,<br> As a result, 2 new time series will be generated.<br> Among them, <code>root.ln.wf02.temperature_avg</code> is generated by the aggregation calculation of <code>root.ln.wf02.wt02.temperature</code> and <code>root.ln.wf02.wt01.temperature</code>,<br> and <code>root.ln.wf01.temperature_avg</code> is generated by the aggregation calculation of <code>root.ln.wf01.wt02.temperature</code> and <code>root.ln.wf01.wt01.temperature</code>.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+----------------------------+-----+-------------+--------+--------+-----------+----+----------+
|                  timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|
+----------------------------+-----+-------------+--------+--------+-----------+----+----------+
|root.ln.wf02.temperature_avg| null|      root.ln|  DOUBLE| GORILLA|     SNAPPY|null|      null|
|root.ln.wf01.temperature_avg| null|      root.ln|  DOUBLE| GORILLA|     SNAPPY|null|      null|
+----------------------------+-----+-------------+--------+--------+-----------+----+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+----------------------------+----------------------------+
|                         Time|root.ln.wf02.temperature_avg|root.ln.wf01.temperature_avg|
+-----------------------------+----------------------------+----------------------------+
|2021-05-11T22:18:16.969+08:00|                       58.75|                        49.0|
|2021-05-11T22:18:26.969+08:00|                        89.0|                      112.25|
|2021-05-11T22:18:36.969+08:00|                       42.25|                        61.5|
|2021-05-11T22:18:46.969+08:00|                      112.25|                      132.25|
+-----------------------------+----------------------------+----------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="create-cq3" tabindex="-1"><a class="header-anchor" href="#create-cq3"><span>Create <code>cq3</code></span></a></h5><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> CONTINUOUS QUERY cq3 
RESAMPLE EVERY <span class="token number">20</span>s <span class="token keyword">FOR</span> <span class="token number">20</span>s 
<span class="token keyword">BEGIN</span> 
  <span class="token keyword">SELECT</span> <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> 
  <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln_cq<span class="token punctuation">.</span>\${<span class="token number">2</span>}<span class="token punctuation">.</span>temperature_avg 
  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> 
  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">2</span> 
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The query mode is the same as <code>cq2</code>,<br> and the results will be written to <code>root.ln_cq.\${2}.temperature_avg</code>.<br> As a result, 2 new time series will be generated.<br> Among them, <code>root.ln_cq.wf02.temperature_avg</code> is generated by the aggregation calculation of <code>root.ln.wf02.wt02.temperature</code> and <code>root.ln.wf02.wt01.temperature</code>,<br> and <code>root.ln_cq.wf01.temperature_avg</code> is generated by the aggregation calculation of <code>root.ln.wf01.wt02.temperature</code> and <code>root.ln.wf01.wt01.temperature</code>.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-------------------------------+-----+-------------+--------+--------+-----------+----+----------+
|                     timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|
+-------------------------------+-----+-------------+--------+--------+-----------+----+----------+
|root.ln_cq.wf02.temperature_avg| null|   root.ln_cq|  DOUBLE| GORILLA|     SNAPPY|null|      null|
|root.ln_cq.wf01.temperature_avg| null|   root.ln_cq|  DOUBLE| GORILLA|     SNAPPY|null|      null|
+-------------------------------+-----+-------------+--------+--------+-----------+----+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+-------------------------------+
|                         Time|root.ln_cq.wf02.temperature_avg|root.ln_cq.wf01.temperature_avg|
+-----------------------------+-------------------------------+-------------------------------+
|2021-05-11T22:18:16.971+08:00|                          58.75|                           49.0|
|2021-05-11T22:18:26.971+08:00|                           89.0|                         112.25|
|2021-05-11T22:18:36.971+08:00|                          42.25|                           61.5|
|2021-05-11T22:18:46.971+08:00|                         112.25|                         132.25|
+-----------------------------+-------------------------------+-------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="创建-cq4" tabindex="-1"><a class="header-anchor" href="#创建-cq4"><span>创建 <code>cq4</code></span></a></h5><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> CONTINUOUS QUERY cq4 
RESAMPLE EVERY <span class="token number">20</span>s <span class="token keyword">FOR</span> <span class="token number">20</span>s BOUNDARY <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">14</span>T23:<span class="token number">00</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span> 
<span class="token keyword">BEGIN</span> 
  <span class="token keyword">SELECT</span> <span class="token function">avg</span><span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> 
  <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>ln_cq<span class="token punctuation">.</span>\${<span class="token number">2</span>}<span class="token punctuation">.</span>temperature_avg 
  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">2</span> 
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This example is almost identical to creating cq3. The difference is that in this example the user specified <code>BOUNDARY 2022-01-14T23:00:00.000+08:00 </code>.</p><p>Note that the first execution time of this CQ is later than the time in the example, so <code>2022-01-14T23:00:20.000+08:00</code> is the first execution time. Recursively, <code>2022-01-14T23:00:40.000+08:00</code> is the second execution moment, <code>2022-01-14T23:01:00.000+08:00</code> is the third execution moment...</p><p>The SQL statement executed at the first execution moment is <code>select avg(temperature) from root.ln.*.* group by ([2022-01-14T23:00:00.000+08:00, 2022-01-14T23:00: 20.000+08:00), 10s), level = 2</code>.</p><p>The SQL statement executed at the second execution moment is <code>select avg(temperature) from root.ln.*.* group by ([2022-01-14T23:00:20.000+08:00, 2022-01-14T23:00: 40.000+08:00), 10s), level = 2</code>.</p><p>The SQL statement executed at the third execution moment is <code>select avg(temperature) from root.ln.*.* group by ([2022-01-14T23:00:40.000+08:00, 2022-01-14T23:01: 00.000+08:00), 10s), level = 2</code>.</p><p>...</p><h3 id="show-cq-information" tabindex="-1"><a class="header-anchor" href="#show-cq-information"><span>Show CQ Information</span></a></h3><h4 id="syntax-1" tabindex="-1"><a class="header-anchor" href="#syntax-1"><span>Syntax</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> <span class="token punctuation">(</span>CONTINUOUS QUERIES <span class="token operator">|</span> CQS<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="example-result" tabindex="-1"><a class="header-anchor" href="#example-result"><span>Example Result</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-------+--------------+------------+-------------+----------------------------------------------------------------------------------------+-----------------------------------+
|cq name|every interval|for interval|     boundary|                                                                               query sql|                        target path|
+-------+--------------+------------+-------------+----------------------------------------------------------------------------------------+-----------------------------------+
|    cq1|         10000|       10000|1642166102238|     select max_value(temperature) from root.ln.*.* group by ([now() - 10s, now()), 10s)|root.\${1}.\${2}.\${3}.temperature_max|
|    cq3|         20000|       20000|1642166118339|select avg(temperature) from root.ln.*.* group by ([now() - 20s, now()), 10s), level = 2|    root.ln_cq.\${2}.temperature_avg|
|    cq2|         20000|       20000|1642166111493|select avg(temperature) from root.ln.*.* group by ([now() - 20s, now()), 10s), level = 2|     root.\${1}.\${2}.temperature_avg|
|    cq4|         20000|       20000|1642172400000|select avg(temperature) from root.ln.*.* group by ([now() - 20s, now()), 10s), level = 2|    root.ln_cq.\${2}.temperature_avg|
+-------+--------------+------------+-------------+----------------------------------------------------------------------------------------+-----------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="drop-cq" tabindex="-1"><a class="header-anchor" href="#drop-cq"><span>Drop CQ</span></a></h3><h4 id="syntax-2" tabindex="-1"><a class="header-anchor" href="#syntax-2"><span>Syntax</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token punctuation">(</span>CONTINUOUS QUERY <span class="token operator">|</span> CQ<span class="token punctuation">)</span> <span class="token operator">&lt;</span>cq_id<span class="token operator">&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h4><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> CONTINUOUS QUERY cq3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> CQ cq3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="system-parameter-configuration" tabindex="-1"><a class="header-anchor" href="#system-parameter-configuration"><span>System Parameter Configuration</span></a></h2><table><thead><tr><th style="text-align:left;">Name</th><th>Description</th><th>Data Type</th><th>Default Value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>continuous_query_execution_thread</code></td><td>The number of threads in the thread pool that executes continuous query tasks</td><td>int</td><td>max(1, CPU core number / 2)</td></tr><tr><td style="text-align:left;"><code>max_pending_continuous_query_tasks</code></td><td>The maximum number of continuous query tasks pending in queue</td><td>int</td><td>64</td></tr><tr><td style="text-align:left;"><code>continuous_query_min_every_interval</code></td><td>The minimum value of the continuous query execution time interval</td><td>duration</td><td>1s</td></tr></tbody></table>`,44);function k(f,y){const a=o("RouteLink");return l(),r("div",null,[p,e("ul",null,[u,e("li",null,[e("p",null,[m,n(" refers to grouping according to the "),v,n(" level of the time series, and grouping the aggregation result of time series with the same name below the "),h,n(" level. For the specific semantics of the Group By Level statement and the definition of "),g,n(", see "),i(a,{to:"/UserGuide/V0.13.x/Write-And-Delete-Data/Delete-Data.html"},{default:d(()=>[n("aggregation-by-level")]),_:1})])])]),b])}const x=s(c,[["render",k],["__file","Continuous-Query.html.vue"]]),_=JSON.parse('{"path":"/UserGuide/V0.13.x/Process-Data/Continuous-Query.html","title":"Continuous Query, CQ","lang":"en-US","frontmatter":{"description":"Continuous Query, CQ We can create, drop a CQ, and query all registered CQ configuration information through SQL statements. Note that the current distributed version of IoTDB d...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Process-Data/Continuous-Query.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Process-Data/Continuous-Query.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Continuous Query, CQ"}],["meta",{"property":"og:description","content":"Continuous Query, CQ We can create, drop a CQ, and query all registered CQ configuration information through SQL statements. Note that the current distributed version of IoTDB d..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Continuous Query, CQ\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SQL statements","slug":"sql-statements","link":"#sql-statements","children":[{"level":3,"title":"Create CQ","slug":"create-cq","link":"#create-cq","children":[]},{"level":3,"title":"Show CQ Information","slug":"show-cq-information","link":"#show-cq-information","children":[]},{"level":3,"title":"Drop CQ","slug":"drop-cq","link":"#drop-cq","children":[]}]},{"level":2,"title":"System Parameter Configuration","slug":"system-parameter-configuration","link":"#system-parameter-configuration","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.74,"words":2021},"filePathRelative":"UserGuide/V0.13.x/Process-Data/Continuous-Query.md","localizedDate":"July 10, 2023","autoDesc":true}');export{x as comp,_ as data};
