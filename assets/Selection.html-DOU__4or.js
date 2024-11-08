import{_ as s,c as e,b as t,o as a}from"./app-ED5DzO24.js";const o={};function l(p,n){return a(),e("div",null,n[0]||(n[0]=[t(`<h3 id="选择函数" tabindex="-1"><a class="header-anchor" href="#选择函数"><span>选择函数</span></a></h3><p>目前 IoTDB 支持如下选择函数：</p><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>TOP_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: 最多选择的数据点数，必须大于 0 小于等于 1000</td><td>与输入序列的实际类型一致</td><td>返回某时间序列中值最大的<code>k</code>个数据点。若多于<code>k</code>个数据点的值并列最大，则返回时间戳最小的数据点。</td></tr><tr><td>BOTTOM_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: 最多选择的数据点数，必须大于 0 小于等于 1000</td><td>与输入序列的实际类型一致</td><td>返回某时间序列中值最小的<code>k</code>个数据点。若多于<code>k</code>个数据点的值并列最小，则返回时间戳最小的数据点。</td></tr></tbody></table><p>例如：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> top_k<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> bottom_k<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d2 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">12</span><span class="token operator">-</span><span class="token number">10</span>T20:<span class="token number">36</span>:<span class="token number">15.530</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------+------------------------------+---------------------------------+</span>
<span class="line">|                         Time|      root.sg1.d2.s1|top_k(root.sg1.d2.s1, &quot;k&quot;=&quot;2&quot;)|bottom_k(root.sg1.d2.s1, &quot;k&quot;=&quot;2&quot;)|</span>
<span class="line">+-----------------------------+--------------------+------------------------------+---------------------------------+</span>
<span class="line">|2020-12-10T20:36:15.531+08:00| 1531604122307244742|           1531604122307244742|                             null|</span>
<span class="line">|2020-12-10T20:36:15.532+08:00|-7426070874923281101|                          null|                             null|</span>
<span class="line">|2020-12-10T20:36:15.533+08:00|-7162825364312197604|          -7162825364312197604|                             null|</span>
<span class="line">|2020-12-10T20:36:15.534+08:00|-8581625725655917595|                          null|             -8581625725655917595|</span>
<span class="line">|2020-12-10T20:36:15.535+08:00|-7667364751255535391|                          null|             -7667364751255535391|</span>
<span class="line">+-----------------------------+--------------------+------------------------------+---------------------------------+</span>
<span class="line">Total line number = 5</span>
<span class="line">It costs 0.006s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const c=s(o,[["render",l],["__file","Selection.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operators-Functions/Selection.html","title":"","lang":"zh-CN","frontmatter":{"description":"选择函数 目前 IoTDB 支持如下选择函数： 例如： 结果：","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Selection.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Selection.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"选择函数 目前 IoTDB 支持如下选择函数： 例如： 结果："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"选择函数","slug":"选择函数","link":"#选择函数","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.39,"words":418},"filePathRelative":"zh/UserGuide/V1.1.x/Operators-Functions/Selection.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,r as data};
