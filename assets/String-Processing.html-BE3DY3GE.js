import{_ as e,o as s,c as n,e as a}from"./app-DJKa25Tg.js";const t={},i=a(`<h2 id="字符串处理" tabindex="-1"><a class="header-anchor" href="#字符串处理"><span>字符串处理</span></a></h2><h3 id="regexmatch" tabindex="-1"><a class="header-anchor" href="#regexmatch"><span>RegexMatch</span></a></h3><h4 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介"><span>函数简介</span></a></h4><p>本函数用于正则表达式匹配文本中的具体内容并返回。</p><p><strong>函数名：</strong> REGEXMATCH</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 TEXT。</p><p><strong>参数：</strong></p><ul><li><code>regex</code>: 匹配的正则表达式，支持所有 Java 正则表达式语法，比如<code>\\d+\\.\\d+\\.\\d+\\.\\d+</code>将会匹配任意 IPv4 地址.</li><li><code>group</code>: 输出的匹配组序号，根据 java.util.regex 规定，第 0 组为整个正则表达式，此后的组按照左括号出现的顺序依次编号。<br> 如<code>A(B(CD))</code>中共有三个组，第 0 组<code>A(B(CD))</code>，第 1 组<code>B(CD)</code>和第 2 组<code>CD</code>。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为 TEXT。</p><p><strong>提示：</strong> 空值或无法匹配给定的正则表达式的数据点没有输出结果。</p><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+
|                         Time|                root.test.d1.s1|
+-----------------------------+-------------------------------+
|2021-01-01T00:00:01.000+08:00|        [192.168.0.1] [SUCCESS]|
|2021-01-01T00:00:02.000+08:00|       [192.168.0.24] [SUCCESS]|
|2021-01-01T00:00:03.000+08:00|           [192.168.0.2] [FAIL]|
|2021-01-01T00:00:04.000+08:00|        [192.168.0.5] [SUCCESS]|
|2021-01-01T00:00:05.000+08:00|      [192.168.0.124] [SUCCESS]|
+-----------------------------+-------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> regexmatch<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;\\d+\\.\\d+\\.\\d+\\.\\d+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group&quot;</span><span class="token operator">=</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+----------------------------------------------------------------------+
|                         Time|regexmatch(root.test.d1.s1, &quot;regex&quot;=&quot;\\d+\\.\\d+\\.\\d+\\.\\d+&quot;, &quot;group&quot;=&quot;0&quot;)|
+-----------------------------+----------------------------------------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                                           192.168.0.1|
|2021-01-01T00:00:02.000+08:00|                                                          192.168.0.24|
|2021-01-01T00:00:03.000+08:00|                                                           192.168.0.2|
|2021-01-01T00:00:04.000+08:00|                                                           192.168.0.5|
|2021-01-01T00:00:05.000+08:00|                                                         192.168.0.124|
+-----------------------------+----------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regexreplace" tabindex="-1"><a class="header-anchor" href="#regexreplace"><span>RegexReplace</span></a></h3><h4 id="函数简介-1" tabindex="-1"><a class="header-anchor" href="#函数简介-1"><span>函数简介</span></a></h4><p>本函数用于将文本中符合正则表达式的匹配结果替换为指定的字符串。</p><p><strong>函数名：</strong> REGEXREPLACE</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 TEXT。</p><p><strong>参数：</strong></p><ul><li><code>regex</code>: 需要替换的正则表达式，支持所有 Java 正则表达式语法。</li><li><code>replace</code>: 替换后的字符串，支持 Java 正则表达式中的后向引用，<br> 形如&#39;$1&#39;指代了正则表达式<code>regex</code>中的第一个分组，并会在替换时自动填充匹配到的子串。</li><li><code>limit</code>: 替换次数，大于等于 -1 的整数，默认为 -1 表示所有匹配的子串都会被替换。</li><li><code>offset</code>: 需要跳过的匹配次数，即前<code>offset</code>次匹配到的字符子串并不会被替换，默认为 0。</li><li><code>reverse</code>: 是否需要反向计数，默认为 false 即按照从左向右的次序。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为 TEXT。</p><h4 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1"><span>使用示例</span></a></h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+
|                         Time|                root.test.d1.s1|
+-----------------------------+-------------------------------+
|2021-01-01T00:00:01.000+08:00|        [192.168.0.1] [SUCCESS]|
|2021-01-01T00:00:02.000+08:00|       [192.168.0.24] [SUCCESS]|
|2021-01-01T00:00:03.000+08:00|           [192.168.0.2] [FAIL]|
|2021-01-01T00:00:04.000+08:00|        [192.168.0.5] [SUCCESS]|
|2021-01-01T00:00:05.000+08:00|      [192.168.0.124] [SUCCESS]|
+-----------------------------+-------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> regexreplace<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;192\\.168\\.0\\.(\\d+)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token operator">=</span><span class="token string">&quot;cluster-$1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;limit&quot;</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------------------------+
|                         Time|regexreplace(root.test.d1.s1, &quot;regex&quot;=&quot;192\\.168\\.0\\.(\\d+)&quot;,|
|                             |                       &quot;replace&quot;=&quot;cluster-$1&quot;, &quot;limit&quot;=&quot;1&quot;)|
+-----------------------------+-----------------------------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                      [cluster-1] [SUCCESS]|
|2021-01-01T00:00:02.000+08:00|                                     [cluster-24] [SUCCESS]|
|2021-01-01T00:00:03.000+08:00|                                         [cluster-2] [FAIL]|
|2021-01-01T00:00:04.000+08:00|                                      [cluster-5] [SUCCESS]|
|2021-01-01T00:00:05.000+08:00|                                    [cluster-124] [SUCCESS]|
+-----------------------------+-----------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="regexsplit" tabindex="-1"><a class="header-anchor" href="#regexsplit"><span>RegexSplit</span></a></h3><h4 id="函数简介-2" tabindex="-1"><a class="header-anchor" href="#函数简介-2"><span>函数简介</span></a></h4><p>本函数用于使用给定的正则表达式切分文本，并返回指定的项。</p><p><strong>函数名：</strong> REGEXSPLIT</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 TEXT。</p><p><strong>参数：</strong></p><ul><li><code>regex</code>: 用于分割文本的正则表达式，支持所有 Java 正则表达式语法，比如<code>[&#39;&quot;]</code>将会匹配任意的英文引号<code>&#39;</code>和<code>&quot;</code>。</li><li><code>index</code>: 输出结果在切分后数组中的序号，需要是大于等于 -1 的整数，默认值为 -1 表示返回切分后数组的长度，其它非负整数即表示返回数组中对应位置的切分结果（数组的秩从 0 开始计数）。</li></ul><p><strong>输出序列：</strong> 输出单个序列，在<code>index</code>为 -1 时输出数据类型为 INT32，否则为 TEXT。</p><p><strong>提示：</strong> 如果<code>index</code>超出了切分后结果数组的秩范围，例如使用<code>,</code>切分<code>0,1,2</code>时输入<code>index</code>为 3，则该数据点没有输出结果。</p><h4 id="使用示例-2" tabindex="-1"><a class="header-anchor" href="#使用示例-2"><span>使用示例</span></a></h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|
|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|
|2021-01-01T00:00:03.000+08:00|         B+,B,B|
|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|
|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> regexsplit<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;index&quot;</span><span class="token operator">=</span><span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------+
|                         Time|regexsplit(root.test.d1.s1, &quot;regex&quot;=&quot;,&quot;, &quot;index&quot;=&quot;-1&quot;)|
+-----------------------------+------------------------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                                     4|
|2021-01-01T00:00:02.000+08:00|                                                     4|
|2021-01-01T00:00:03.000+08:00|                                                     3|
|2021-01-01T00:00:04.000+08:00|                                                     4|
|2021-01-01T00:00:05.000+08:00|                                                     4|
+-----------------------------+------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> regexsplit<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;index&quot;</span><span class="token operator">=</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------------------+
|                         Time|regexsplit(root.test.d1.s1, &quot;regex&quot;=&quot;,&quot;, &quot;index&quot;=&quot;3&quot;)|
+-----------------------------+-----------------------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                                   B-|
|2021-01-01T00:00:02.000+08:00|                                                   B+|
|2021-01-01T00:00:04.000+08:00|                                                    A|
|2021-01-01T00:00:05.000+08:00|                                                    B|
+-----------------------------+-----------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="strreplace" tabindex="-1"><a class="header-anchor" href="#strreplace"><span>StrReplace</span></a></h3><h4 id="函数简介-3" tabindex="-1"><a class="header-anchor" href="#函数简介-3"><span>函数简介</span></a></h4><p>本函数用于将文本中的子串替换为指定的字符串。</p><p><strong>函数名：</strong> STRREPLACE</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 TEXT。</p><p><strong>参数：</strong></p><ul><li><code>target</code>: 需要替换的字符子串</li><li><code>replace</code>: 替换后的字符串。</li><li><code>limit</code>: 替换次数，大于等于 -1 的整数，默认为 -1 表示所有匹配的子串都会被替换。</li><li><code>offset</code>: 需要跳过的匹配次数，即前<code>offset</code>次匹配到的字符子串并不会被替换，默认为 0。</li><li><code>reverse</code>: 是否需要反向计数，默认为 false 即按照从左向右的次序。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为 TEXT。</p><h4 id="使用示例-3" tabindex="-1"><a class="header-anchor" href="#使用示例-3"><span>使用示例</span></a></h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|
|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|
|2021-01-01T00:00:03.000+08:00|         B+,B,B|
|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|
|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> strreplace<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;target&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;limit&quot;</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------+
|                         Time|strreplace(root.test.d1.s1, &quot;target&quot;=&quot;,&quot;,|
|                             |              &quot;replace&quot;=&quot;/&quot;, &quot;limit&quot;=&quot;2&quot;)|
+-----------------------------+-----------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                A/B/A+,B-|
|2021-01-01T00:00:02.000+08:00|                                A/A+/A,B+|
|2021-01-01T00:00:03.000+08:00|                                   B+/B/B|
|2021-01-01T00:00:04.000+08:00|                                A+/A/A+,A|
|2021-01-01T00:00:05.000+08:00|                                 A/B-/B,B|
+-----------------------------+-----------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">select</span> strreplace<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;target&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;limit&quot;</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;offset&quot;</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;reverse&quot;</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------------------+
|                         Time|strreplace(root.test.d1.s1, &quot;target&quot;=&quot;,&quot;, &quot;replace&quot;= | 
|                             |    &quot;|&quot;, &quot;limit&quot;=&quot;1&quot;, &quot;offset&quot;=&quot;1&quot;, &quot;reverse&quot;=&quot;true&quot;)|
+-----------------------------+-----------------------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                            A,B/A+,B-|
|2021-01-01T00:00:02.000+08:00|                                            A,A+/A,B+|
|2021-01-01T00:00:03.000+08:00|                                               B+/B,B|
|2021-01-01T00:00:04.000+08:00|                                            A+,A/A+,A|
|2021-01-01T00:00:05.000+08:00|                                             A,B-/B,B|
+-----------------------------+-----------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,71),l=[i];function o(d,r){return s(),n("div",null,l)}const p=e(t,[["render",o],["__file","String-Processing.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/UDF-Library/String-Processing.html","title":"","lang":"zh-CN","frontmatter":{"description":"字符串处理 RegexMatch 函数简介 本函数用于正则表达式匹配文本中的具体内容并返回。 函数名： REGEXMATCH 输入序列： 仅支持单个输入序列，类型为 TEXT。 参数： regex: 匹配的正则表达式，支持所有 Java 正则表达式语法，比如\\\\d+\\\\.\\\\d+\\\\.\\\\d+\\\\.\\\\d+将会匹配任意 IPv4 地址. group: 输出的匹配组序...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/UDF-Library/String-Processing.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/UDF-Library/String-Processing.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"字符串处理 RegexMatch 函数简介 本函数用于正则表达式匹配文本中的具体内容并返回。 函数名： REGEXMATCH 输入序列： 仅支持单个输入序列，类型为 TEXT。 参数： regex: 匹配的正则表达式，支持所有 Java 正则表达式语法，比如\\\\d+\\\\.\\\\d+\\\\.\\\\d+\\\\.\\\\d+将会匹配任意 IPv4 地址. group: 输出的匹配组序..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"字符串处理","slug":"字符串处理","link":"#字符串处理","children":[{"level":3,"title":"RegexMatch","slug":"regexmatch","link":"#regexmatch","children":[]},{"level":3,"title":"RegexReplace","slug":"regexreplace","link":"#regexreplace","children":[]},{"level":3,"title":"RegexSplit","slug":"regexsplit","link":"#regexsplit","children":[]},{"level":3,"title":"StrReplace","slug":"strreplace","link":"#strreplace","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":5.59,"words":1677},"filePathRelative":"zh/UserGuide/V0.13.x/UDF-Library/String-Processing.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,u as data};
