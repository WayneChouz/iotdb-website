import{_ as n,c as a,b as e,o as p}from"./app-i6u37es5.js";const t={};function o(l,s){return p(),a("div",null,s[0]||(s[0]=[e(`<h1 id="键值对" tabindex="-1"><a class="header-anchor" href="#键值对"><span>键值对</span></a></h1><p><strong>键值对的键和值可以被定义为标识符或者常量。</strong></p><p>下面将介绍键值对的使用场景。</p><ul><li>触发器中表示触发器属性的键值对。参考示例语句中 WITH 后的属性键值对。</li></ul><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 以字符串形式表示键值对</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">\`</span>alert-listener-sg1d1s1<span class="token punctuation">\`</span></span></span>
<span class="line"><span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span></span>
<span class="line"><span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1</span>
<span class="line"><span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;</span></span>
<span class="line"><span class="token keyword">WITH</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&#39;lo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string">&#39;hi&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;100.0&#39;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 以标识符和常量形式表示键值对</span></span>
<span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">\`</span>alert-listener-sg1d1s1<span class="token punctuation">\`</span></span></span>
<span class="line"><span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span></span>
<span class="line"><span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1</span>
<span class="line"><span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;</span></span>
<span class="line"><span class="token keyword">WITH</span> <span class="token punctuation">(</span></span>
<span class="line">  lo <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> </span>
<span class="line">  hi <span class="token operator">=</span> <span class="token number">100.0</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>时间序列中用于表示标签和属性的键值对。</li></ul><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 创建时间序列时设定标签和属性，用字符串来表示键值对。</span></span>
<span class="line"><span class="token keyword">CREATE</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">(</span>temprature<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">WITH</span> datatype <span class="token operator">=</span> <span class="token keyword">FLOAT</span><span class="token punctuation">,</span> encoding <span class="token operator">=</span> RLE<span class="token punctuation">,</span> compression <span class="token operator">=</span> SNAPPY<span class="token punctuation">,</span> <span class="token string">&#39;max_point_number&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;5&#39;</span></span>
<span class="line">TAGS<span class="token punctuation">(</span><span class="token string">&#39;tag1&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tag2&#39;</span><span class="token operator">=</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span> ATTRIBUTES<span class="token punctuation">(</span><span class="token string">&#39;attr1&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;attr2&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建时间序列时设定标签和属性，用标识符和常量来表示键值对。</span></span>
<span class="line"><span class="token keyword">CREATE</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">(</span>temprature<span class="token punctuation">)</span> </span>
<span class="line"><span class="token keyword">WITH</span> datatype <span class="token operator">=</span> <span class="token keyword">FLOAT</span><span class="token punctuation">,</span> encoding <span class="token operator">=</span> RLE<span class="token punctuation">,</span> compression <span class="token operator">=</span> SNAPPY<span class="token punctuation">,</span> max_point_number <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line">TAGS<span class="token punctuation">(</span>tag1 <span class="token operator">=</span> v1<span class="token punctuation">,</span> tag2 <span class="token operator">=</span> v2<span class="token punctuation">)</span> ATTRIBUTES<span class="token punctuation">(</span>attr1 <span class="token operator">=</span> v1<span class="token punctuation">,</span> attr2 <span class="token operator">=</span> v2<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 修改时间序列的标签和属性</span></span>
<span class="line"><span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">SET</span> <span class="token string">&#39;newTag1&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;newV1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;attr1&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;newV1&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">SET</span> newTag1 <span class="token operator">=</span> newV1<span class="token punctuation">,</span> attr1 <span class="token operator">=</span> newV1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 修改标签名</span></span>
<span class="line"><span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">RENAME</span> <span class="token string">&#39;tag1&#39;</span> <span class="token keyword">TO</span> <span class="token string">&#39;newTag1&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">RENAME</span> tag1 <span class="token keyword">TO</span> newTag1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 插入别名、标签、属性</span></span>
<span class="line"><span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 UPSERT </span>
<span class="line">ALIAS<span class="token operator">=</span><span class="token string">&#39;newAlias&#39;</span> TAGS<span class="token punctuation">(</span><span class="token string">&#39;tag2&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;newV2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tag3&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">)</span> ATTRIBUTES<span class="token punctuation">(</span><span class="token string">&#39;attr3&#39;</span> <span class="token operator">=</span><span class="token string">&#39;v3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;attr4&#39;</span><span class="token operator">=</span><span class="token string">&#39;v4&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 UPSERT </span>
<span class="line">ALIAS <span class="token operator">=</span> newAlias TAGS<span class="token punctuation">(</span>tag2 <span class="token operator">=</span> newV2<span class="token punctuation">,</span> tag3 <span class="token operator">=</span> v3<span class="token punctuation">)</span> ATTRIBUTES<span class="token punctuation">(</span>attr3 <span class="token operator">=</span> v3<span class="token punctuation">,</span> attr4 <span class="token operator">=</span> v4<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 添加新的标签</span></span>
<span class="line"><span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">ADD</span> TAGS <span class="token string">&#39;tag3&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tag4&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v4&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">ADD</span> TAGS tag3 <span class="token operator">=</span> v3<span class="token punctuation">,</span> tag4 <span class="token operator">=</span> v4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 添加新的属性</span></span>
<span class="line"><span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">ADD</span> ATTRIBUTES <span class="token string">&#39;attr3&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;attr4&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;v4&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">ALTER</span> timeseries root<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">ADD</span> ATTRIBUTES attr3 <span class="token operator">=</span> v3<span class="token punctuation">,</span> attr4 <span class="token operator">=</span> v4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 查询符合条件的时间序列信息</span></span>
<span class="line"><span class="token keyword">SHOW</span> timeseries root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> WHRER <span class="token string">&#39;unit&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;c&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">SHOW</span> timeseries root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> WHRER unit <span class="token operator">=</span> c</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建 Pipe 以及 PipeSink 时表示属性的键值对。</li></ul><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment"># 创建 PipeSink 时表示属性</span></span>
<span class="line"><span class="token keyword">CREATE</span> PIPESINK my_iotdb <span class="token keyword">AS</span> IoTDB <span class="token punctuation">(</span><span class="token string">&#39;ip&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;输入你的IP&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建 Pipe 时在 WITH 子句中表示属性</span></span>
<span class="line"><span class="token keyword">CREATE</span> PIPE my_pipe <span class="token keyword">TO</span> my_iotdb <span class="token keyword">FROM</span> </span>
<span class="line"><span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">from</span> root <span class="token keyword">WHERE</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span>yyyy<span class="token operator">-</span>mm<span class="token operator">-</span>dd HH:MM:SS<span class="token punctuation">)</span> <span class="token keyword">WITH</span> <span class="token string">&#39;SyncDelOp&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const c=n(t,[["render",o],["__file","KeyValue-Pair.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Syntax-Conventions/KeyValue-Pair.html","title":"键值对","lang":"zh-CN","frontmatter":{"description":"键值对 键值对的键和值可以被定义为标识符或者常量。 下面将介绍键值对的使用场景。 触发器中表示触发器属性的键值对。参考示例语句中 WITH 后的属性键值对。 时间序列中用于表示标签和属性的键值对。 创建 Pipe 以及 PipeSink 时表示属性的键值对。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Syntax-Conventions/KeyValue-Pair.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Syntax-Conventions/KeyValue-Pair.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"键值对"}],["meta",{"property":"og:description","content":"键值对 键值对的键和值可以被定义为标识符或者常量。 下面将介绍键值对的使用场景。 触发器中表示触发器属性的键值对。参考示例语句中 WITH 后的属性键值对。 时间序列中用于表示标签和属性的键值对。 创建 Pipe 以及 PipeSink 时表示属性的键值对。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"键值对\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.96,"words":588},"filePathRelative":"zh/UserGuide/V1.0.x/Syntax-Conventions/KeyValue-Pair.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,r as data};
