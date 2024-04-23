import{_ as a,o as s,c as e,e as n}from"./app-DrPcRZG6.js";const t={},o=n(`<h2 id="元数据模板" tabindex="-1"><a class="header-anchor" href="#元数据模板"><span>元数据模板</span></a></h2><p>IoTDB 支持元数据模板功能，实现同类型不同实体的物理量元数据共享，减少元数据内存占用，同时简化同类型实体的管理。</p><p>注：以下语句中的 <code>schema</code> 关键字可以省略。</p><h3 id="创建元数据模板" tabindex="-1"><a class="header-anchor" href="#创建元数据模板"><span>创建元数据模板</span></a></h3><p>创建元数据模板的 SQL 语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">SCHEMA</span>? TEMPLATE <span class="token operator">&lt;</span>templateName<span class="token operator">&gt;</span> ALIGNED? <span class="token string">&#39;(&#39;</span> <span class="token operator">&lt;</span>measurementId<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>attributeClauses<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;,&#39;</span> <span class="token operator">&lt;</span>measurementId<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>attributeClauses<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">+</span> <span class="token string">&#39;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例1：</strong> 创建包含两个非对齐序列的元数据模板</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create schema template t1 <span class="token punctuation">(</span>temperature FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>RLE, status BOOLEAN <span class="token assign-left variable">encoding</span><span class="token operator">=</span>PLAIN <span class="token assign-left variable">compression</span><span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例2：</strong> 创建包含一组对齐序列的元数据模板</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create schema template t2 aligned <span class="token punctuation">(</span>lat FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>Gorilla, lon FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>Gorilla<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，物理量 <code>lat</code> 和 <code>lon</code> 是对齐的。</p><h3 id="挂载元数据模板" tabindex="-1"><a class="header-anchor" href="#挂载元数据模板"><span>挂载元数据模板</span></a></h3><p><strong>为了更好地适配未来版本的更新及各模块的协作，我们强烈建议您将模板设置在存储组及存储组下层的节点中。</strong></p><p>挂载元数据模板的 SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> schema template t1 to root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>挂载好元数据模板后，即可进行数据的写入。例如存储组为 root.sg1，模板 t1 被挂载到了节点 root.sg1.d1，那么可直接向时间序列（如 root.sg1.d1.temperature 和 root.sg1.d1.status）写入时间序列数据，该时间序列已可被当作正常创建的序列使用。</p><p><strong>注意</strong>：在插入数据之前，模板定义的时间序列不会被创建。可以使用如下SQL语句在插入数据前创建时间序列：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> create timeseries of schema template on root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例：</strong> 执行以下语句</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> schema template t1 to root.sg1.d1
<span class="token builtin class-name">set</span> schema template t2 to root.sg1.d2
create timeseries of schema template on root.sg1.d1
create timeseries of schema template on root.sg1.d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看此时的时间序列：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
<span class="token operator">|</span>             timeseries<span class="token operator">|</span><span class="token builtin class-name">alias</span><span class="token operator">|</span>storage group<span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span>tags<span class="token operator">|</span>attributes<span class="token operator">|</span>deadband<span class="token operator">|</span>deadband parameters<span class="token operator">|</span>
+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
<span class="token operator">|</span>root.sg1.d1.temperature<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span>     RLE<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
<span class="token operator">|</span>     root.sg1.d1.status<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span> BOOLEAN<span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
<span class="token operator">|</span>        root.sg1.d2.lon<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span> GORILLA<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
<span class="token operator">|</span>        root.sg1.d2.lat<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span> GORILLA<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span>
+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看此时的设备：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">show</span> devices root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>+---------------+---------+
<span class="token operator">|</span>        devices<span class="token operator">|</span>isAligned<span class="token operator">|</span>
+---------------+---------+
<span class="token operator">|</span>    root.sg1.d1<span class="token operator">|</span>    <span class="token boolean">false</span><span class="token operator">|</span>
<span class="token operator">|</span>    root.sg1.d2<span class="token operator">|</span>     <span class="token boolean">true</span><span class="token operator">|</span>
+---------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看元数据模板" tabindex="-1"><a class="header-anchor" href="#查看元数据模板"><span>查看元数据模板</span></a></h3><ul><li>查看所有元数据模板</li></ul><p>SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show schema templates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>+-------------+
<span class="token operator">|</span>template name<span class="token operator">|</span>
+-------------+
<span class="token operator">|</span>           t2<span class="token operator">|</span>
<span class="token operator">|</span>           t1<span class="token operator">|</span>
+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看某个元数据模板下的物理量</li></ul><p>SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show nodes <span class="token keyword">in</span> schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>+-----------+--------+--------+-----------+
<span class="token operator">|</span>child nodes<span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span>
+-----------+--------+--------+-----------+
<span class="token operator">|</span>temperature<span class="token operator">|</span>   FLOAT<span class="token operator">|</span>     RLE<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>
<span class="token operator">|</span>     status<span class="token operator">|</span> BOOLEAN<span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>
+-----------+--------+--------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看挂载了某个元数据模板的路径前缀</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show paths <span class="token builtin class-name">set</span> schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>+-----------+
<span class="token operator">|</span>child paths<span class="token operator">|</span>
+-----------+
<span class="token operator">|</span>root.sg1.d1<span class="token operator">|</span>
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看使用了某个元数据模板（即序列已创建）的路径前缀</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> show paths using schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>+-----------+
<span class="token operator">|</span>child paths<span class="token operator">|</span>
+-----------+
<span class="token operator">|</span>root.sg1.d1<span class="token operator">|</span>
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解除元数据模板" tabindex="-1"><a class="header-anchor" href="#解除元数据模板"><span>解除元数据模板</span></a></h3><p>对于挂载了元数据模板的节点或其孩子节点，如果：1）曾按模板中的序列写入了数据，或2）使用了 <code>create timeseries of schema template</code>，则在使用以下命令之前，不能够卸载或删除元数据模板：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> deactivate schema template t1 from root.sg.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意</strong>：这一操作会删除对应节点下按照模板中的序列写入的数据。</p><h3 id="卸载元数据模板" tabindex="-1"><a class="header-anchor" href="#卸载元数据模板"><span>卸载元数据模板</span></a></h3><p>卸载元数据模板的 SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">unset</span> schema template t1 from root.sg1.d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除元数据模板" tabindex="-1"><a class="header-anchor" href="#删除元数据模板"><span>删除元数据模板</span></a></h3><p>删除元数据模板的 SQL 语句如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> drop schema template t1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意</strong>：不能删除尚未卸载的模板。</p>`,56),l=[o];function p(r,i){return s(),e("div",null,l)}const c=a(t,[["render",p],["__file","Template.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Operate-Metadata/Template.html","title":"","lang":"zh-CN","frontmatter":{"description":"元数据模板 IoTDB 支持元数据模板功能，实现同类型不同实体的物理量元数据共享，减少元数据内存占用，同时简化同类型实体的管理。 注：以下语句中的 schema 关键字可以省略。 创建元数据模板 创建元数据模板的 SQL 语法如下： 示例1： 创建包含两个非对齐序列的元数据模板 示例2： 创建包含一组对齐序列的元数据模板 其中，物理量 lat 和 lo...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Operate-Metadata/Template.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Operate-Metadata/Template.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"元数据模板 IoTDB 支持元数据模板功能，实现同类型不同实体的物理量元数据共享，减少元数据内存占用，同时简化同类型实体的管理。 注：以下语句中的 schema 关键字可以省略。 创建元数据模板 创建元数据模板的 SQL 语法如下： 示例1： 创建包含两个非对齐序列的元数据模板 示例2： 创建包含一组对齐序列的元数据模板 其中，物理量 lat 和 lo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"元数据模板","slug":"元数据模板","link":"#元数据模板","children":[{"level":3,"title":"创建元数据模板","slug":"创建元数据模板","link":"#创建元数据模板","children":[]},{"level":3,"title":"挂载元数据模板","slug":"挂载元数据模板","link":"#挂载元数据模板","children":[]},{"level":3,"title":"查看元数据模板","slug":"查看元数据模板","link":"#查看元数据模板","children":[]},{"level":3,"title":"解除元数据模板","slug":"解除元数据模板","link":"#解除元数据模板","children":[]},{"level":3,"title":"卸载元数据模板","slug":"卸载元数据模板","link":"#卸载元数据模板","children":[]},{"level":3,"title":"删除元数据模板","slug":"删除元数据模板","link":"#删除元数据模板","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.22,"words":966},"filePathRelative":"zh/UserGuide/V0.13.x/Operate-Metadata/Template.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,u as data};
