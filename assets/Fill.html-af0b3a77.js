import{_ as n,o as s,c as e,a,f as t}from"./app-91105029.js";const l={},o=t(`<h2 id="结果集补空值" tabindex="-1"><a class="header-anchor" href="#结果集补空值" aria-hidden="true">#</a> 结果集补空值</h2><h3 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h3><p>当执行一些数据查询时，结果集的某行某列可能没有数据，则此位置结果为空，但这种空值不利于进行数据可视化展示和分析，需要对空值进行填充。</p><p>在 IoTDB 中，用户可以使用 <code>FILL</code> 子句指定数据缺失情况下的填充模式，允许用户按照特定的方法对任何查询的结果集填充空值，如取前一个不为空的值、线性插值等。</p><h3 id="语法定义" tabindex="-1"><a class="header-anchor" href="#语法定义" aria-hidden="true">#</a> 语法定义</h3><p><strong><code>FILL</code> 子句的语法定义如下：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>FILL <span class="token string">&#39;(&#39;</span> PREVIOUS <span class="token operator">|</span> LINEAR <span class="token operator">|</span> constant <span class="token string">&#39;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：</strong></p><ul><li>在 <code>Fill</code> 语句中只能指定一种填充方法，该方法作用于结果集的全部列。</li><li>空值填充不兼容 0.13 版本及以前的语法（即不支持 <code>FILL((&lt;data_type&gt;[&lt;fill_method&gt;(, &lt;before_range&gt;, &lt;after_range&gt;)?])+)</code>）</li></ul><h3 id="填充方式" tabindex="-1"><a class="header-anchor" href="#填充方式" aria-hidden="true">#</a> 填充方式</h3><p><strong>IoTDB 目前支持以下三种空值填充方式：</strong></p><ul><li><code>PREVIOUS</code> 填充：使用该列前一个非空值进行填充。</li><li><code>LINEAR</code> 填充：使用该列前一个非空值和下一个非空值的线性插值进行填充。</li><li>常量填充：使用指定常量填充。</li></ul><p><strong>各数据类型支持的填充方法如下表所示：</strong></p><table><thead><tr><th style="text-align:left;">数据类型</th><th style="text-align:left;">支持的填充方法</th></tr></thead><tbody><tr><td style="text-align:left;">BOOLEAN</td><td style="text-align:left;"><code>PREVIOUS</code>、常量</td></tr><tr><td style="text-align:left;">INT32</td><td style="text-align:left;"><code>PREVIOUS</code>、<code>LINEAR</code>、常量</td></tr><tr><td style="text-align:left;">INT64</td><td style="text-align:left;"><code>PREVIOUS</code>、<code>LINEAR</code>、常量</td></tr><tr><td style="text-align:left;">FLOAT</td><td style="text-align:left;"><code>PREVIOUS</code>、<code>LINEAR</code>、常量</td></tr><tr><td style="text-align:left;">DOUBLE</td><td style="text-align:left;"><code>PREVIOUS</code>、<code>LINEAR</code>、常量</td></tr><tr><td style="text-align:left;">TEXT</td><td style="text-align:left;"><code>PREVIOUS</code>、常量</td></tr></tbody></table><p><strong>注意：</strong> 对于数据类型不支持指定填充方法的列，既不会填充它，也不会报错，只是让那一列保持原样。</p><p><strong>下面通过举例进一步说明。</strong></p><p>如果我们不使用任何填充方式：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">40</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:38:00.000+08:00|                           null|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|
+-----------------------------+-------------------------------+--------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="previous-填充" tabindex="-1"><a class="header-anchor" href="#previous-填充" aria-hidden="true">#</a> <code>PREVIOUS</code> 填充</h4><p><strong>对于查询结果集中的空值，使用该列前一个非空值进行填充。</strong></p><p><strong>注意：</strong> 如果结果集的某一列第一个值就为空，则不会填充该值，直到遇到该列第一个非空值为止。</p><p>例如，使用 <code>PREVIOUS</code> 填充，SQL 语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">40</span>:<span class="token number">00.000</span> fill<span class="token punctuation">(</span>previous<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>PREVIOUS</code> 填充后的结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:38:00.000+08:00|                          21.93|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:39:00.000+08:00|                          22.23|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:40:00.000+08:00|                          23.43|                     false|
+-----------------------------+-------------------------------+--------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="linear-填充" tabindex="-1"><a class="header-anchor" href="#linear-填充" aria-hidden="true">#</a> <code>LINEAR</code> 填充</h4><p><strong>对于查询结果集中的空值，使用该列前一个非空值和下一个非空值的线性插值进行填充。</strong></p><p><strong>注意：</strong></p><ul><li>如果某个值之前的所有值都为空，或者某个值之后的所有值都为空，则不会填充该值。</li><li>如果某列的数据类型为boolean/text，我们既不会填充它，也不会报错，只是让那一列保持原样。</li></ul><p>例如，使用 <code>LINEAR</code> 填充，SQL 语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">40</span>:<span class="token number">00.000</span> fill<span class="token punctuation">(</span>linear<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>LINEAR</code> 填充后的结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:38:00.000+08:00|                          22.08|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|
+-----------------------------+-------------------------------+--------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="常量填充" tabindex="-1"><a class="header-anchor" href="#常量填充" aria-hidden="true">#</a> 常量填充</h4><p><strong>对于查询结果集中的空值，使用指定常量填充。</strong></p><p><strong>注意：</strong></p><ul><li><p>如果某列数据类型与常量类型不兼容，既不填充该列，也不报错，将该列保持原样。对于常量兼容的数据类型，如下表所示：</p><table><thead><tr><th style="text-align:left;">常量类型</th><th style="text-align:left;">能够填充的序列数据类型</th></tr></thead><tbody><tr><td style="text-align:left;"><code>BOOLEAN</code></td><td style="text-align:left;"><code>BOOLEAN</code> <code>TEXT</code></td></tr><tr><td style="text-align:left;"><code>INT64</code></td><td style="text-align:left;"><code>INT32</code> <code>INT64</code> <code>FLOAT</code> <code>DOUBLE</code> <code>TEXT</code></td></tr><tr><td style="text-align:left;"><code>DOUBLE</code></td><td style="text-align:left;"><code>FLOAT</code> <code>DOUBLE</code> <code>TEXT</code></td></tr><tr><td style="text-align:left;"><code>TEXT</code></td><td style="text-align:left;"><code>TEXT</code></td></tr></tbody></table></li><li><p>当常量值大于 <code>INT32</code> 所能表示的最大值时，对于 <code>INT32</code> 类型的列，既不填充该列，也不报错，将该列保持原样。</p></li></ul><p>例如，使用 <code>FLOAT</code> 类型的常量填充，SQL 语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">40</span>:<span class="token number">00.000</span> fill<span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>FLOAT</code> 类型的常量填充后的结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:38:00.000+08:00|                            2.0|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|
+-----------------------------+-------------------------------+--------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再比如，使用 <code>BOOLEAN</code> 类型的常量填充，SQL 语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">40</span>:<span class="token number">00.000</span> fill<span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>BOOLEAN</code> 类型的常量填充后的结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:38:00.000+08:00|                           null|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:39:00.000+08:00|                          22.23|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:40:00.000+08:00|                          23.43|                      true|
+-----------------------------+-------------------------------+--------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function i(r,p){return s(),e("div",null,[a(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),o])}const d=n(l,[["render",i],["__file","Fill.html.vue"]]);export{d as default};
