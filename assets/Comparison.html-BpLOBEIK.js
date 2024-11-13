import{_ as n,c as a,b as e,o as t}from"./app-B280G6gL.js";const l={};function p(o,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h2 id="比较运算符和函数" tabindex="-1"><a class="header-anchor" href="#比较运算符和函数"><span>比较运算符和函数</span></a></h2><h3 id="基本比较运算符" tabindex="-1"><a class="header-anchor" href="#基本比较运算符"><span>基本比较运算符</span></a></h3><ul><li>输入数据类型： <code>INT32</code>, <code>INT64</code>, <code>FLOAT</code>, <code>DOUBLE</code>。</li><li>注意：会将所有数据转换为<code>DOUBLE</code>类型后进行比较。<code>==</code>和<code>!=</code>可以直接比较两个<code>BOOLEAN</code>。</li><li>返回类型：<code>BOOLEAN</code>。</li></ul><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>&gt;</code></td><td>大于</td></tr><tr><td><code>&gt;=</code></td><td>大于等于</td></tr><tr><td><code>&lt;</code></td><td>小于</td></tr><tr><td><code>&lt;=</code></td><td>小于等于</td></tr><tr><td><code>==</code></td><td>等于</td></tr><tr><td><code>!=</code> / <code>&lt;&gt;</code></td><td>不等于</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> a <span class="token operator">&lt;=</span> b<span class="token punctuation">,</span> <span class="token operator">!</span><span class="token punctuation">(</span>a <span class="token operator">&lt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> a <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&gt;</span> b <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>运行结果</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select a, b, a &gt; 10, a &lt;= b, !(a &lt;= b), a &gt; 10 &amp;&amp; a &gt; b from root.test;</span>
<span class="line">+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+</span>
<span class="line">|                         Time|root.test.a|root.test.b|root.test.a &gt; 10|root.test.a &lt;= root.test.b|!root.test.a &lt;= root.test.b|(root.test.a &gt; 10) &amp; (root.test.a &gt; root.test.b)|</span>
<span class="line">+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|         23|       10.0|            true|                     false|                       true|                                            true|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|         33|       21.0|            true|                     false|                       true|                                            true|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|         13|       15.0|            true|                      true|                      false|                                           false|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|         26|        0.0|            true|                     false|                       true|                                            true|</span>
<span class="line">|1970-01-01T08:00:00.008+08:00|          1|       22.0|           false|                      true|                      false|                                           false|</span>
<span class="line">|1970-01-01T08:00:00.010+08:00|         23|       12.0|            true|                     false|                       true|                                            true|</span>
<span class="line">+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="between-and-运算符" tabindex="-1"><a class="header-anchor" href="#between-and-运算符"><span><code>BETWEEN ... AND ...</code> 运算符</span></a></h3><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>BETWEEN ... AND ...</code></td><td>在指定范围内</td></tr><tr><td><code>NOT BETWEEN ... AND ...</code></td><td>不在指定范围内</td></tr></tbody></table><p><strong>示例：</strong> 选择区间 [36.5,40] 内或之外的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">between</span> <span class="token number">36.5</span> <span class="token operator">and</span> <span class="token number">40</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">not</span> <span class="token operator">between</span> <span class="token number">36.5</span> <span class="token operator">and</span> <span class="token number">40</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="模糊匹配运算符" tabindex="-1"><a class="header-anchor" href="#模糊匹配运算符"><span>模糊匹配运算符</span></a></h3><p>对于 TEXT 类型的数据，支持使用 <code>Like</code> 和 <code>Regexp</code> 运算符对数据进行模糊匹配</p><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>LIKE</code></td><td>匹配简单模式</td></tr><tr><td><code>NOT LIKE</code></td><td>无法匹配简单模式</td></tr><tr><td><code>REGEXP</code></td><td>匹配正则表达式</td></tr><tr><td><code>NOT REGEXP</code></td><td>无法匹配正则表达式</td></tr></tbody></table><p>输入数据类型：<code>TEXT</code></p><p>返回类型：<code>BOOLEAN</code></p><h4 id="使用-like-进行模糊匹配" tabindex="-1"><a class="header-anchor" href="#使用-like-进行模糊匹配"><span>使用 <code>Like</code> 进行模糊匹配</span></a></h4><p><strong>匹配规则：</strong></p><ul><li><code>%</code> 表示任意0个或多个字符。</li><li><code>_</code> 表示任意单个字符。</li></ul><p><strong>示例 1：</strong> 查询 <code>root.sg.d1</code> 下 <code>value</code> 含有<code>&#39;cc&#39;</code>的数据。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.d1 where value like <span class="token string">&#39;%cc%&#39;</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span>                         Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:00.000+08:00<span class="token operator">|</span>        aabbccdd<span class="token operator">|</span> </span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:01.000+08:00<span class="token operator">|</span>              cc<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">It costs <span class="token number">0</span>.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 查询 <code>root.sg.d1</code> 下 <code>value</code> 中间为 <code>&#39;b&#39;</code>、前后为任意单个字符的数据。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.device where value like <span class="token string">&#39;_b_&#39;</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span>                         Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:02.000+08:00<span class="token operator">|</span>             abc<span class="token operator">|</span> </span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line">It costs <span class="token number">0</span>.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-regexp-进行模糊匹配" tabindex="-1"><a class="header-anchor" href="#使用-regexp-进行模糊匹配"><span>使用 <code>Regexp</code> 进行模糊匹配</span></a></h4><p>需要传入的过滤条件为 <strong>Java 标准库风格的正则表达式</strong>。</p><p><strong>常见的正则匹配举例：</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">长度为3-20的所有字符：^.{3,20}$</span>
<span class="line">大写英文字符：^[A-Z]+$</span>
<span class="line">数字和英文字符：^[A-Za-z0-9]+$</span>
<span class="line">以a开头的：^a.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 1：</strong> 查询 root.sg.d1 下 value 值为26个英文字符组成的字符串。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.d1 where value regexp <span class="token string">&#39;^[A-Za-z]+$&#39;</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span>                         Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:00.000+08:00<span class="token operator">|</span>        aabbccdd<span class="token operator">|</span> </span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:01.000+08:00<span class="token operator">|</span>              cc<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">It costs <span class="token number">0</span>.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 查询 root.sg.d1 下 value 值为26个小写英文字符组成的字符串且时间大于100的。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.d1 where value regexp <span class="token string">&#39;^[a-z]+$&#39;</span> and <span class="token function">time</span> <span class="token operator">&gt;</span> <span class="token number">100</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span>                         Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:00.000+08:00<span class="token operator">|</span>        aabbccdd<span class="token operator">|</span> </span>
<span class="line"><span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:01.000+08:00<span class="token operator">|</span>              cc<span class="token operator">|</span></span>
<span class="line">+-----------------------------+----------------+</span>
<span class="line">Total line number <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line">It costs <span class="token number">0</span>.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> b<span class="token punctuation">,</span> b <span class="token operator">like</span> <span class="token string">&#39;1%&#39;</span><span class="token punctuation">,</span> b <span class="token operator">regexp</span> <span class="token string">&#39;[0-2]&#39;</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>运行结果</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------+-------------------------+--------------------------+</span>
<span class="line">|                         Time|root.test.b|root.test.b LIKE &#39;^1.*?$&#39;|root.test.b REGEXP &#39;[0-2]&#39;|</span>
<span class="line">+-----------------------------+-----------+-------------------------+--------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00| 111test111|                     true|                      true|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00| 333test333|                    false|                     false|</span>
<span class="line">+-----------------------------+-----------+-------------------------+--------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="is-null-运算符" tabindex="-1"><a class="header-anchor" href="#is-null-运算符"><span><code>IS NULL</code> 运算符</span></a></h3><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>IS NULL</code></td><td>是空值</td></tr><tr><td><code>IS NOT NULL</code></td><td>不是空值</td></tr></tbody></table><p><strong>示例 1：</strong> 选择值为空的数据:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 选择值为非空的数据:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="in-运算符" tabindex="-1"><a class="header-anchor" href="#in-运算符"><span><code>IN</code> 运算符</span></a></h3><table><thead><tr><th>运算符</th><th>含义</th></tr></thead><tbody><tr><td><code>IN</code> / <code>CONTAINS</code></td><td>是指定列表中的值</td></tr><tr><td><code>NOT IN</code> / <code>NOT CONTAINS</code></td><td>不是指定列表中的值</td></tr></tbody></table><p>输入数据类型：<code>All Types</code></p><p>返回类型 <code>BOOLEAN</code></p><p><strong>注意：请确保集合中的值可以被转为输入数据的类型。</strong></p><blockquote><p>例如：</p><p><code>s1 in (1, 2, 3, &#39;test&#39;)</code>，<code>s1</code>的数据类型是<code>INT32</code></p><p>我们将会抛出异常，因为<code>&#39;test&#39;</code>不能被转为<code>INT32</code>类型</p></blockquote><p><strong>示例 1：</strong> 选择值在特定范围内的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 选择值在特定范围外的数据：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>示例 3：</strong></p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> a<span class="token punctuation">,</span> a <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出2:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------+--------------------+</span>
<span class="line">|                         Time|root.test.a|root.test.a IN (1,2)|</span>
<span class="line">+-----------------------------+-----------+--------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|          1|                true|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|          3|               false|</span>
<span class="line">+-----------------------------+-----------+--------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="条件函数" tabindex="-1"><a class="header-anchor" href="#条件函数"><span>条件函数</span></a></h3><p>条件函数针对每个数据点进行条件判断，返回布尔值。</p><table><thead><tr><th>函数名</th><th>可接收的输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>ON_OFF</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>threshold</code>:DOUBLE类型</td><td>BOOLEAN 类型</td><td>返回<code>ts_value &gt;= threshold</code>的bool值</td></tr><tr><td>IN_RANGE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td><code>lower</code>:DOUBLE类型<br><code>upper</code>:DOUBLE类型</td><td>BOOLEAN类型</td><td>返回<code>ts_value &gt;= lower &amp;&amp; ts_value &lt;= upper</code>的bool值</td></tr></tbody></table><p>测试数据：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select ts from root.test;</span>
<span class="line">+-----------------------------+------------+</span>
<span class="line">|                         Time|root.test.ts|</span>
<span class="line">+-----------------------------+------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|           1|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|           2|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|           3|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|           4|</span>
<span class="line">+-----------------------------+------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 1：</strong></p><p>SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> ts<span class="token punctuation">,</span> on_off<span class="token punctuation">(</span>ts<span class="token punctuation">,</span> <span class="token string">&#39;threshold&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select ts, on_off(ts, &#39;threshold&#39;=&#39;2&#39;) from root.test;</span>
<span class="line">+-----------------------------+------------+-------------------------------------+</span>
<span class="line">|                         Time|root.test.ts|on_off(root.test.ts, &quot;threshold&quot;=&quot;2&quot;)|</span>
<span class="line">+-----------------------------+------------+-------------------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|           1|                                false|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|           2|                                 true|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|           3|                                 true|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|           4|                                 true|</span>
<span class="line">+-----------------------------+------------+-------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong></p><p>Sql语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> ts<span class="token punctuation">,</span> in_range<span class="token punctuation">(</span>ts<span class="token punctuation">,</span> <span class="token string">&#39;lower&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;upper&#39;</span><span class="token operator">=</span><span class="token string">&#39;3.1&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select ts, in_range(ts, &#39;lower&#39;=&#39;2&#39;, &#39;upper&#39;=&#39;3.1&#39;) from root.test;</span>
<span class="line">+-----------------------------+------------+--------------------------------------------------+</span>
<span class="line">|                         Time|root.test.ts|in_range(root.test.ts, &quot;lower&quot;=&quot;2&quot;, &quot;upper&quot;=&quot;3.1&quot;)|</span>
<span class="line">+-----------------------------+------------+--------------------------------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|           1|                                             false|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|           2|                                              true|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|           3|                                              true|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|           4|                                             false|</span>
<span class="line">+-----------------------------+------------+--------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,72)]))}const r=n(l,[["render",p],["__file","Comparison.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operators-Functions/Comparison.html","title":"","lang":"zh-CN","frontmatter":{"description":"比较运算符和函数 基本比较运算符 输入数据类型： INT32, INT64, FLOAT, DOUBLE。 注意：会将所有数据转换为DOUBLE类型后进行比较。==和!=可以直接比较两个BOOLEAN。 返回类型：BOOLEAN。 示例： 运行结果 BETWEEN ... AND ... 运算符 示例： 选择区间 [36.5,40] 内或之外的数据： ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Comparison.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Comparison.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"比较运算符和函数 基本比较运算符 输入数据类型： INT32, INT64, FLOAT, DOUBLE。 注意：会将所有数据转换为DOUBLE类型后进行比较。==和!=可以直接比较两个BOOLEAN。 返回类型：BOOLEAN。 示例： 运行结果 BETWEEN ... AND ... 运算符 示例： 选择区间 [36.5,40] 内或之外的数据： ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"比较运算符和函数","slug":"比较运算符和函数","link":"#比较运算符和函数","children":[{"level":3,"title":"基本比较运算符","slug":"基本比较运算符","link":"#基本比较运算符","children":[]},{"level":3,"title":"BETWEEN ... AND ... 运算符","slug":"between-and-运算符","link":"#between-and-运算符","children":[]},{"level":3,"title":"模糊匹配运算符","slug":"模糊匹配运算符","link":"#模糊匹配运算符","children":[]},{"level":3,"title":"IS NULL 运算符","slug":"is-null-运算符","link":"#is-null-运算符","children":[]},{"level":3,"title":"IN 运算符","slug":"in-运算符","link":"#in-运算符","children":[]},{"level":3,"title":"条件函数","slug":"条件函数","link":"#条件函数","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.74,"words":1422},"filePathRelative":"zh/UserGuide/V1.1.x/Operators-Functions/Comparison.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,c as data};
