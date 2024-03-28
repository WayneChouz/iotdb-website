import{_ as s,o as a,c as e,a as n,f as o}from"./app-dNeAgOFp.js";const t={},r=o(`<h1 id="元数据模板" tabindex="-1"><a class="header-anchor" href="#元数据模板" aria-hidden="true">#</a> 元数据模板</h1><p>IoTDB 支持元数据模板功能，实现同类型不同实体的物理量元数据共享，减少元数据内存占用，同时简化同类型实体的管理。</p><p>注：以下语句中的 <code>schema</code> 关键字可以省略。</p><h2 id="创建元数据模板" tabindex="-1"><a class="header-anchor" href="#创建元数据模板" aria-hidden="true">#</a> 创建元数据模板</h2><p>创建元数据模板的 SQL 语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">SCHEMA</span> TEMPLATE <span class="token operator">&lt;</span>templateName<span class="token operator">&gt;</span> ALIGNED? <span class="token string">&#39;(&#39;</span> <span class="token operator">&lt;</span>measurementId<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>attributeClauses<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;,&#39;</span> <span class="token operator">&lt;</span>measurementId<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>attributeClauses<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">+</span> <span class="token string">&#39;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例1：</strong> 创建包含两个非对齐序列的元数据模板</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create schema template t1 <span class="token punctuation">(</span>temperature FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>RLE, status BOOLEAN <span class="token assign-left variable">encoding</span><span class="token operator">=</span>PLAIN <span class="token assign-left variable">compression</span><span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例2：</strong> 创建包含一组对齐序列的元数据模板</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create schema template t2 aligned <span class="token punctuation">(</span>lat FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>Gorilla, lon FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>Gorilla<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，物理量 <code>lat</code> 和 <code>lon</code> 是对齐的。</p><h2 id="挂载元数据模板" tabindex="-1"><a class="header-anchor" href="#挂载元数据模板" aria-hidden="true">#</a> 挂载元数据模板</h2><p>元数据模板在创建后，需执行挂载操作，方可用于相应路径下的序列创建与数据写入。</p><p><strong>挂载模板前，需确保相关数据库已经创建。</strong></p><p><strong>推荐将模板挂载在 database 节点上，不建议将模板挂载到 database 上层的节点上。</strong></p><p><strong>模板挂载路径下禁止创建普通序列，已创建了普通序列的前缀路径上不允许挂载模板。</strong></p><p>挂载元数据模板的 SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> schema template t1 to root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="激活元数据模板" tabindex="-1"><a class="header-anchor" href="#激活元数据模板" aria-hidden="true">#</a> 激活元数据模板</h2><p>挂载好元数据模板后，且系统开启自动注册序列功能的情况下，即可直接进行数据的写入。例如 database 为 root.sg1，模板 t1 被挂载到了节点 root.sg1.d1，那么可直接向时间序列（如 root.sg1.d1.temperature 和 root.sg1.d1.status）写入时间序列数据，该时间序列已可被当作正常创建的序列使用。</p><p><strong>注意</strong>：在插入数据之前或系统未开启自动注册序列功能，模板定义的时间序列不会被创建。可以使用如下SQL语句在插入数据前创建时间序列即激活模板：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create timeseries using schema template on root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例：</strong> 执行以下语句</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> schema template t1 to root.sg1.d1
IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> schema template t2 to root.sg1.d2
IoTDB<span class="token operator">&gt;</span> create timeseries using schema template on root.sg1.d1
IoTDB<span class="token operator">&gt;</span> create timeseries using schema template on root.sg1.d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看此时的时间序列：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
<span class="token operator">|</span>             timeseries<span class="token operator">|</span><span class="token builtin class-name">alias</span><span class="token operator">|</span>     database<span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span>tags<span class="token operator">|</span>attributes<span class="token operator">|</span>deadband<span class="token operator">|</span>deadband parameters<span class="token operator">|</span>
+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
<span class="token operator">|</span>root.sg1.d1.temperature<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span>     RLE<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
<span class="token operator">|</span>     root.sg1.d1.status<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span> BOOLEAN<span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
<span class="token operator">|</span>        root.sg1.d2.lon<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span> GORILLA<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
<span class="token operator">|</span>        root.sg1.d2.lat<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span> GORILLA<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看此时的设备：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> devices root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+---------------+---------+---------+
<span class="token operator">|</span>        devices<span class="token operator">|</span>isAligned<span class="token operator">|</span> Template<span class="token operator">|</span>
+---------------+---------+---------+
<span class="token operator">|</span>    root.sg1.d1<span class="token operator">|</span>    <span class="token boolean">false</span><span class="token operator">|</span>     null<span class="token operator">|</span>
<span class="token operator">|</span>    root.sg1.d2<span class="token operator">|</span>     <span class="token boolean">true</span><span class="token operator">|</span>     null<span class="token operator">|</span>
+---------------+---------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看元数据模板" tabindex="-1"><a class="header-anchor" href="#查看元数据模板" aria-hidden="true">#</a> 查看元数据模板</h2><ul><li>查看所有元数据模板</li></ul><p>SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show schema templates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-------------+
<span class="token operator">|</span>template name<span class="token operator">|</span>
+-------------+
<span class="token operator">|</span>           t2<span class="token operator">|</span>
<span class="token operator">|</span>           t1<span class="token operator">|</span>
+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看某个元数据模板下的物理量</li></ul><p>SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show nodes <span class="token keyword">in</span> schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------+--------+--------+-----------+
<span class="token operator">|</span>child nodes<span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span>
+-----------+--------+--------+-----------+
<span class="token operator">|</span>temperature<span class="token operator">|</span>   FLOAT<span class="token operator">|</span>     RLE<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>
<span class="token operator">|</span>     status<span class="token operator">|</span> BOOLEAN<span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>
+-----------+--------+--------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看挂载了某个元数据模板的路径</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show paths <span class="token builtin class-name">set</span> schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------+
<span class="token operator">|</span>child paths<span class="token operator">|</span>
+-----------+
<span class="token operator">|</span>root.sg1.d1<span class="token operator">|</span>
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看使用了某个元数据模板的路径（即模板在该路径上已激活，序列已创建）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show paths using schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>+-----------+
<span class="token operator">|</span>child paths<span class="token operator">|</span>
+-----------+
<span class="token operator">|</span>root.sg1.d1<span class="token operator">|</span>
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解除元数据模板" tabindex="-1"><a class="header-anchor" href="#解除元数据模板" aria-hidden="true">#</a> 解除元数据模板</h2><p>若需删除模板表示的某一组时间序列，可采用解除模板操作，SQL语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> delete timeseries of schema template t1 from root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> deactivate schema template t1 from root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解除操作支持批量处理，SQL语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> delete timeseries of schema template t1 from root.sg1.*, root.sg2.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> deactivate schema template t1 from root.sg1.*, root.sg2.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若解除命令不指定模板名称，则会将给定路径涉及的所有模板使用情况均解除。</p><h2 id="卸载元数据模板" tabindex="-1"><a class="header-anchor" href="#卸载元数据模板" aria-hidden="true">#</a> 卸载元数据模板</h2><p>卸载元数据模板的 SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">unset</span> schema template t1 from root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意</strong>：不支持卸载仍处于激活状态的模板，需保证执行卸载操作前解除对该模板的所有使用，即删除所有该模板表示的序列。</p><h2 id="删除元数据模板" tabindex="-1"><a class="header-anchor" href="#删除元数据模板" aria-hidden="true">#</a> 删除元数据模板</h2><p>删除元数据模板的 SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> drop schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意</strong>：不支持删除已经挂载的模板，需在删除操作前保证该模板卸载成功。</p><h2 id="修改元数据模板" tabindex="-1"><a class="header-anchor" href="#修改元数据模板" aria-hidden="true">#</a> 修改元数据模板</h2><p>在需要新增物理量的场景中，可以通过修改元数据模板来给所有已激活该模板的设备新增物理量。</p><p>修改元数据模板的 SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> alter schema template t1 <span class="token function">add</span> <span class="token punctuation">(</span>speed FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>RLE, FLOAT TEXT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>PLAIN <span class="token assign-left variable">compression</span><span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>向已挂载模板的路径下的设备中写入数据，若写入请求中的物理量不在模板中，将自动扩展模板。</strong></p>`,72);function p(l,i){return a(),e("div",null,[n(`

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

`),r])}const c=s(t,[["render",p],["__file","Template.html.vue"]]);export{c as default};
