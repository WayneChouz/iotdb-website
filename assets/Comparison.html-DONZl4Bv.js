import{_ as e,o as s,c as a,e as n}from"./app-CVD6HEOl.js";const t={},o=n(`<h1 id="comparison-operators-and-functions" tabindex="-1"><a class="header-anchor" href="#comparison-operators-and-functions"><span>Comparison Operators and Functions</span></a></h1><h2 id="basic-comparison-operators" tabindex="-1"><a class="header-anchor" href="#basic-comparison-operators"><span>Basic comparison operators</span></a></h2><p>Supported operators <code>&gt;</code>, <code>&gt;=</code>, <code>&lt;</code>, <code>&lt;=</code>, <code>==</code>, <code>!=</code> (or <code>&lt;&gt;</code> )</p><p>Supported input data types: <code>INT32</code>, <code>INT64</code>, <code>FLOAT</code> and <code>DOUBLE</code></p><p>Note: It will transform all type to <code>DOUBLE</code> then do computation.</p><p>Output data type: <code>BOOLEAN</code></p><p><strong>Example:</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> a <span class="token operator">&lt;=</span> b<span class="token punctuation">,</span> <span class="token operator">!</span><span class="token punctuation">(</span>a <span class="token operator">&lt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> a <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&gt;</span> b <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select a, b, a &gt; 10, a &lt;= b, !(a &lt;= b), a &gt; 10 &amp;&amp; a &gt; b from root.test;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="between-and-operator" tabindex="-1"><a class="header-anchor" href="#between-and-operator"><span><code>BETWEEN ... AND ...</code> operator</span></a></h2><table><thead><tr><th>operator</th><th>meaning</th></tr></thead><tbody><tr><td><code>BETWEEN ... AND ...</code></td><td>within the specified range</td></tr><tr><td><code>NOT BETWEEN ... AND ...</code></td><td>Not within the specified range</td></tr></tbody></table><p><strong>Example:</strong> Select data within or outside the interval [36.5,40]:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">between</span> <span class="token number">36.5</span> <span class="token operator">and</span> <span class="token number">40</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">not</span> <span class="token operator">between</span> <span class="token number">36.5</span> <span class="token operator">and</span> <span class="token number">40</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="fuzzy-matching-operator" tabindex="-1"><a class="header-anchor" href="#fuzzy-matching-operator"><span>Fuzzy matching operator</span></a></h2><p>For TEXT type data, support fuzzy matching of data using <code>Like</code> and <code>Regexp</code> operators.</p><table><thead><tr><th>operator</th><th>meaning</th></tr></thead><tbody><tr><td><code>LIKE</code></td><td>matches simple patterns</td></tr><tr><td><code>NOT LIKE</code></td><td>cannot match simple pattern</td></tr><tr><td><code>REGEXP</code></td><td>Match regular expression</td></tr><tr><td><code>NOT REGEXP</code></td><td>Cannot match regular expression</td></tr></tbody></table><p>Input data type: <code>TEXT</code></p><p>Return type: <code>BOOLEAN</code></p><h3 id="use-like-for-fuzzy-matching" tabindex="-1"><a class="header-anchor" href="#use-like-for-fuzzy-matching"><span>Use <code>Like</code> for fuzzy matching</span></a></h3><p><strong>Matching rules:</strong></p><ul><li><code>%</code> means any 0 or more characters.</li><li><code>_</code> means any single character.</li></ul><p><strong>Example 1:</strong> Query the data under <code>root.sg.d1</code> that contains <code>&#39;cc&#39;</code> in <code>value</code>.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.d1 where value like <span class="token string">&#39;%cc%&#39;</span>
+--------------------------+----------------+
<span class="token operator">|</span> Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span>
+--------------------------+----------------+
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:00.000+08:00<span class="token operator">|</span> aabbccdd<span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:01.000+08:00<span class="token operator">|</span> cc<span class="token operator">|</span>
+--------------------------+----------------+
Total line number <span class="token operator">=</span> <span class="token number">2</span>
It costs <span class="token number">0</span>.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Query the data under <code>root.sg.d1</code> with <code>&#39;b&#39;</code> in the middle of <code>value</code> and any single character before and after.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.device where value like <span class="token string">&#39;_b_&#39;</span>
+--------------------------+----------------+
<span class="token operator">|</span> Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span>
+--------------------------+----------------+
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:02.000+08:00<span class="token operator">|</span>abc<span class="token operator">|</span>
+--------------------------+----------------+
Total line number <span class="token operator">=</span> <span class="token number">1</span>
It costs <span class="token number">0</span>.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-regexp-for-fuzzy-matching" tabindex="-1"><a class="header-anchor" href="#use-regexp-for-fuzzy-matching"><span>Use <code>Regexp</code> for fuzzy matching</span></a></h3><p>The filter condition that needs to be passed in is <strong>Java standard library style regular expression</strong>.</p><p><strong>Common regular matching examples:</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>All characters with a length of 3-20: ^.{3,20}$
Uppercase English characters: ^[A-Z]+$
Numbers and English characters: ^[A-Za-z0-9]+$
Starting with a: ^a.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 1:</strong> Query the string of 26 English characters for value under root.sg.d1.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.d1 where value regexp <span class="token string">&#39;^[A-Za-z]+$&#39;</span>
+--------------------------+----------------+
<span class="token operator">|</span> Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span>
+--------------------------+----------------+
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:00.000+08:00<span class="token operator">|</span> aabbccdd<span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:01.000+08:00<span class="token operator">|</span> cc<span class="token operator">|</span>
+--------------------------+----------------+
Total line number <span class="token operator">=</span> <span class="token number">2</span>
It costs <span class="token number">0</span>.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Query root.sg.d1 where the value is a string consisting of 26 lowercase English characters and the time is greater than 100.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.d1 where value regexp <span class="token string">&#39;^[a-z]+$&#39;</span> and <span class="token function">time</span> <span class="token operator">&gt;</span> <span class="token number">100</span>
+--------------------------+----------------+
<span class="token operator">|</span> Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span>
+--------------------------+----------------+
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:00.000+08:00<span class="token operator">|</span> aabbccdd<span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:01.000+08:00<span class="token operator">|</span> cc<span class="token operator">|</span>
+--------------------------+----------------+
Total line number <span class="token operator">=</span> <span class="token number">2</span>
It costs <span class="token number">0</span>.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 3:</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> b<span class="token punctuation">,</span> b <span class="token operator">like</span> <span class="token string">&#39;1%&#39;</span><span class="token punctuation">,</span> b <span class="token operator">regexp</span> <span class="token string">&#39;[0-2]&#39;</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>operation result</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------+------- ------------------+--------------------------+
| Time|root.test.b|root.test.b LIKE &#39;^1.*?$&#39;|root.test.b REGEXP &#39;[0-2]&#39;|
+-----------------------------+-----------+------- ------------------+--------------------------+
|1970-01-01T08:00:00.001+08:00| 111test111| true| true|
|1970-01-01T08:00:00.003+08:00| 333test333| false| false|
+-----------------------------+-----------+------- ------------------+--------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="is-null-operator" tabindex="-1"><a class="header-anchor" href="#is-null-operator"><span><code>IS NULL</code> operator</span></a></h2><table><thead><tr><th>operator</th><th>meaning</th></tr></thead><tbody><tr><td><code>IS NULL</code></td><td>is a null value</td></tr><tr><td><code>IS NOT NULL</code></td><td>is not a null value</td></tr></tbody></table><p><strong>Example 1:</strong> Select data with empty values:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Select data with non-null values:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="in-operator" tabindex="-1"><a class="header-anchor" href="#in-operator"><span><code>IN</code> operator</span></a></h2><table><thead><tr><th>operator</th><th>meaning</th></tr></thead><tbody><tr><td><code>IN</code> / <code>CONTAINS</code></td><td>are the values ​​in the specified list</td></tr><tr><td><code>NOT IN</code> / <code>NOT CONTAINS</code></td><td>not a value in the specified list</td></tr></tbody></table><p>Input data type: <code>All Types</code></p><p>return type <code>BOOLEAN</code></p><p>**Note: Please ensure that the values ​​in the collection can be converted to the type of the input data. **</p><blockquote><p>For example:</p><p><code>s1 in (1, 2, 3, &#39;test&#39;)</code>, the data type of <code>s1</code> is <code>INT32</code></p><p>We will throw an exception because <code>&#39;test&#39;</code> cannot be converted to type <code>INT32</code></p></blockquote><p><strong>Example 1:</strong> Select data with values ​​within a certain range:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Select data with values ​​outside a certain range:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Example 3:</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> a<span class="token punctuation">,</span> a <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output 2:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------+------- -------------+
| Time|root.test.a|root.test.a IN (1,2)|
+-----------------------------+-----------+------- -------------+
|1970-01-01T08:00:00.001+08:00| 1| true|
|1970-01-01T08:00:00.003+08:00| 3| false|
+-----------------------------+-----------+------- -------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="condition-functions" tabindex="-1"><a class="header-anchor" href="#condition-functions"><span>Condition Functions</span></a></h2><p>Condition functions are used to check whether timeseries data points satisfy some specific condition.</p><p>They return BOOLEANs.</p><p>Currently, IoTDB supports the following condition functions:</p><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Series Data Type Description</th></tr></thead><tbody><tr><td>ON_OFF</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>threshold</code>: a double type variate</td><td>BOOLEAN</td><td>Return <code>ts_value &gt;= threshold</code>.</td></tr><tr><td>IN_RANGR</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>lower</code>: DOUBLE type<br><code>upper</code>: DOUBLE type</td><td>BOOLEAN</td><td>Return <code>ts_value &gt;= lower &amp;&amp; value &lt;= upper</code>.</td></tr></tbody></table><p>Example Data:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select ts from root.test;
+-----------------------------+------------+
|                         Time|root.test.ts|
+-----------------------------+------------+
|1970-01-01T08:00:00.001+08:00|           1|
|1970-01-01T08:00:00.002+08:00|           2|
|1970-01-01T08:00:00.003+08:00|           3|
|1970-01-01T08:00:00.004+08:00|           4|
+-----------------------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="test-1" tabindex="-1"><a class="header-anchor" href="#test-1"><span>Test 1</span></a></h5><p>SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ts<span class="token punctuation">,</span> on_off<span class="token punctuation">(</span>ts<span class="token punctuation">,</span> <span class="token string">&#39;threshold&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select ts, on_off(ts, &#39;threshold&#39;=&#39;2&#39;) from root.test;
+-----------------------------+------------+-------------------------------------+
|                         Time|root.test.ts|on_off(root.test.ts, &quot;threshold&quot;=&quot;2&quot;)|
+-----------------------------+------------+-------------------------------------+
|1970-01-01T08:00:00.001+08:00|           1|                                false|
|1970-01-01T08:00:00.002+08:00|           2|                                 true|
|1970-01-01T08:00:00.003+08:00|           3|                                 true|
|1970-01-01T08:00:00.004+08:00|           4|                                 true|
+-----------------------------+------------+-------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="test-2" tabindex="-1"><a class="header-anchor" href="#test-2"><span>Test 2</span></a></h5><p>Sql:</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ts<span class="token punctuation">,</span> in_range<span class="token punctuation">(</span>ts<span class="token punctuation">,</span> <span class="token string">&#39;lower&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;upper&#39;</span><span class="token operator">=</span><span class="token string">&#39;3.1&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; select ts, in_range(ts,&#39;lower&#39;=&#39;2&#39;, &#39;upper&#39;=&#39;3.1&#39;) from root.test;
+-----------------------------+------------+--------------------------------------------------+
|                         Time|root.test.ts|in_range(root.test.ts, &quot;lower&quot;=&quot;2&quot;, &quot;upper&quot;=&quot;3.1&quot;)|
+-----------------------------+------------+--------------------------------------------------+
|1970-01-01T08:00:00.001+08:00|           1|                                             false|
|1970-01-01T08:00:00.002+08:00|           2|                                              true|
|1970-01-01T08:00:00.003+08:00|           3|                                              true|
|1970-01-01T08:00:00.004+08:00|           4|                                             false|
+-----------------------------+------------+--------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,75),r=[o];function l(p,i){return s(),a("div",null,r)}const c=e(t,[["render",l],["__file","Comparison.html.vue"]]),u=JSON.parse('{"path":"/UserGuide/V1.1.x/Operators-Functions/Comparison.html","title":"Comparison Operators and Functions","lang":"en-US","frontmatter":{"description":"Comparison Operators and Functions Basic comparison operators Supported operators >, >=, <, <=, ==, != (or <> ) Supported input data types: INT32, INT64, FLOAT and DOUBLE Note: ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Comparison.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Comparison.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Comparison Operators and Functions"}],["meta",{"property":"og:description","content":"Comparison Operators and Functions Basic comparison operators Supported operators >, >=, <, <=, ==, != (or <> ) Supported input data types: INT32, INT64, FLOAT and DOUBLE Note: ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Comparison Operators and Functions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Basic comparison operators","slug":"basic-comparison-operators","link":"#basic-comparison-operators","children":[]},{"level":2,"title":"BETWEEN ... AND ... operator","slug":"between-and-operator","link":"#between-and-operator","children":[]},{"level":2,"title":"Fuzzy matching operator","slug":"fuzzy-matching-operator","link":"#fuzzy-matching-operator","children":[{"level":3,"title":"Use Like for fuzzy matching","slug":"use-like-for-fuzzy-matching","link":"#use-like-for-fuzzy-matching","children":[]},{"level":3,"title":"Use Regexp for fuzzy matching","slug":"use-regexp-for-fuzzy-matching","link":"#use-regexp-for-fuzzy-matching","children":[]}]},{"level":2,"title":"IS NULL operator","slug":"is-null-operator","link":"#is-null-operator","children":[]},{"level":2,"title":"IN operator","slug":"in-operator","link":"#in-operator","children":[]},{"level":2,"title":"Condition Functions","slug":"condition-functions","link":"#condition-functions","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.9,"words":1171},"filePathRelative":"UserGuide/V1.1.x/Operators-Functions/Comparison.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,u as data};
