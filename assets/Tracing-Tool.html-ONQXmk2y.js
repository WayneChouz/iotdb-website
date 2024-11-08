import{_ as n,c as a,b as s,o as i}from"./app-Cy-L1ril.js";const t={};function l(c,e){return i(),a("div",null,e[0]||(e[0]=[s(`<h2 id="查询性能追踪" tabindex="-1"><a class="header-anchor" href="#查询性能追踪"><span>查询性能追踪</span></a></h2><p>IoTDB 支持使用 <code>TRACING</code> 关键词对查询语句进行性能追踪。用户可以使用性能追踪工具来分析语句执行中存在的潜在性能问题。</p><p>性能追踪的结果包括：</p><ol><li>查询执行过程中各个阶段的累积耗时。</li><li>与查询性能分析相关的统计信息，包括查询的时间序列数、涉及访问的 Tsfile 文件数、需要扫描的 chunk 总数以及平均每个 chunk 包含的数据点个数、读取的 Page 总数以及其中乱序 Page 的个数。</li></ol><p>例如执行 <code>tracing select * from root</code>，输出结果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Tracing Activties:</span>
<span class="line">+------------------------------------------------------+------------+</span>
<span class="line">|                                              Activity|Elapsed Time|</span>
<span class="line">+------------------------------------------------------+------------+</span>
<span class="line">|Start to execute statement: tracing select * from root|           0|</span>
<span class="line">|                            Parse SQL to physical plan|           4|</span>
<span class="line">|                              Create and cache dataset|          16|</span>
<span class="line">|                              * Num of series paths: 3|            |</span>
<span class="line">|                       * Num of sequence files read: 2|            |</span>
<span class="line">|                     * Num of unsequence files read: 1|            |</span>
<span class="line">|        * Num of sequence chunks: 6, avg points: 100.0|            |</span>
<span class="line">|      * Num of unsequence chunks: 3, avg points: 100.0|            |</span>
<span class="line">|         * Num of Pages: 9, overlapped pages: 0 (0.0%)|            |</span>
<span class="line">|                                      Request complete|          20|</span>
<span class="line">+------------------------------------------------------+------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6)]))}const o=n(t,[["render",l],["__file","Tracing-Tool.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Query-Data/Tracing-Tool.html","title":"","lang":"zh-CN","frontmatter":{"description":"查询性能追踪 IoTDB 支持使用 TRACING 关键词对查询语句进行性能追踪。用户可以使用性能追踪工具来分析语句执行中存在的潜在性能问题。 性能追踪的结果包括： 查询执行过程中各个阶段的累积耗时。 与查询性能分析相关的统计信息，包括查询的时间序列数、涉及访问的 Tsfile 文件数、需要扫描的 chunk 总数以及平均每个 chunk 包含的数据点...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Tracing-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Tracing-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"查询性能追踪 IoTDB 支持使用 TRACING 关键词对查询语句进行性能追踪。用户可以使用性能追踪工具来分析语句执行中存在的潜在性能问题。 性能追踪的结果包括： 查询执行过程中各个阶段的累积耗时。 与查询性能分析相关的统计信息，包括查询的时间序列数、涉及访问的 Tsfile 文件数、需要扫描的 chunk 总数以及平均每个 chunk 包含的数据点..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"查询性能追踪","slug":"查询性能追踪","link":"#查询性能追踪","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.17,"words":351},"filePathRelative":"zh/UserGuide/V0.13.x/Query-Data/Tracing-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{o as comp,p as data};
