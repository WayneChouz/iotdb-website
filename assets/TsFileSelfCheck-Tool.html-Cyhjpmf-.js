import{_ as e,o as a,c as t,e as s}from"./app-BZ7vU6A9.js";const i={},n=s(`<h1 id="tsfile-自检工具" tabindex="-1"><a class="header-anchor" href="#tsfile-自检工具"><span>TsFile 自检工具</span></a></h1><p>IoTDB Server 提供了 TsFile 自检工具，目前该工具可以检查 TsFile 文件中的基本格式、TimeseriesMetadata 的正确性以及 TsFile 中各部分存储的 Statistics 的正确性和一致性。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>第一步：创建一个 TsFileSelfCheckTool 类的对象。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">TsFileSelfCheckTool</span> tool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TsFileSelfCheckTool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步：调用自检工具的 check 方法。第一个参数 path 是要检测的 TsFile 的路径。第二个参数是是否只检测 TsFile 开头和结尾的 Magic String 和 Version Number。</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>tool<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>check 方法的返回值有四种。</li><li>返回值为 0 表示 TsFile 自检无错。</li><li>返回值为 -1 表示 TsFile 存在 Statistics 不一致问题。具体会有两种异常，一种是 TimeSeriesMetadata 的 Statistics 与其后面的 ChunkMetadata 的聚合统计的 Statistics 不一致。另一种是 ChunkMetadata 的 Statistics 与其索引的 Chunk 中的 Page 聚合统计的 Statistics 不一致。</li><li>返回值为 -2 表示 TsFile 版本不兼容。</li><li>返回值为 -3 表示给定路径不存在 TsFile 文件。</li></ul>`,8),l=[n];function o(c,r){return a(),t("div",null,l)}const d=e(i,[["render",o],["__file","TsFileSelfCheck-Tool.html.vue"]]),T=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Maintenance-Tools/TsFileSelfCheck-Tool.html","title":"TsFile 自检工具","lang":"zh-CN","frontmatter":{"description":"TsFile 自检工具 IoTDB Server 提供了 TsFile 自检工具，目前该工具可以检查 TsFile 文件中的基本格式、TimeseriesMetadata 的正确性以及 TsFile 中各部分存储的 Statistics 的正确性和一致性。 使用 第一步：创建一个 TsFileSelfCheckTool 类的对象。 第二步：调用自检工具...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Maintenance-Tools/TsFileSelfCheck-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Maintenance-Tools/TsFileSelfCheck-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"TsFile 自检工具"}],["meta",{"property":"og:description","content":"TsFile 自检工具 IoTDB Server 提供了 TsFile 自检工具，目前该工具可以检查 TsFile 文件中的基本格式、TimeseriesMetadata 的正确性以及 TsFile 中各部分存储的 Statistics 的正确性和一致性。 使用 第一步：创建一个 TsFileSelfCheckTool 类的对象。 第二步：调用自检工具..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TsFile 自检工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.23,"words":368},"filePathRelative":"zh/UserGuide/V1.0.x/Maintenance-Tools/TsFileSelfCheck-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,T as data};
