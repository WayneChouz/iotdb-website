import{_ as e,o as t,c as a,e as s}from"./app-nVIpYHtH.js";const o={},n=s(`<h1 id="tsfileselfcheck-tool" tabindex="-1"><a class="header-anchor" href="#tsfileselfcheck-tool"><span>TsFileSelfCheck Tool</span></a></h1><p>IoTDB Server provides the TsFile self check tool. At present, the tool can check the basic format of the TsFile file, the correctness of TimeseriesMetadata, and the correctness and consistency of the Statistics stored in each part of the TsFile.</p><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use"><span>Use</span></a></h2><p>Step 1：Create an object instance of TsFileSelfCheckTool class.</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">TsFileSelfCheckTool</span> tool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TsFileSelfCheckTool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Step 2：Call the check method of the self check tool. The first parameter path is the path of the TsFile to be checked. The second parameter is whether to check only the Magic String and Version Number at the beginning and end of TsFile.</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code>tool<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>There are four return values of the check method.</li><li>The return value is 0, which means that the TsFile self check is error-free.</li><li>The return value is -1, which means that TsFile has inconsistencies in Statistics. There will be two specific exceptions, one is that the Statistics of TimeSeriesMetadata is inconsistent with the Statistics of the aggregated statistics of ChunkMetadata. The other is that the Statistics of ChunkMetadata is inconsistent with the Statistics of Page aggregation statistics in the Chunk indexed by it.</li><li>The return value is -2, which means that the TsFile version is not compatible.</li><li>The return value is -3, which means that the TsFile file does not exist in the given path.</li></ul>`,8),i=[n];function l(c,r){return t(),a("div",null,i)}const p=e(o,[["render",l],["__file","TsFileSelfCheck-Tool.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V0.13.x/Maintenance-Tools/TsFileSelfCheck-Tool.html","title":"TsFileSelfCheck Tool","lang":"en-US","frontmatter":{"description":"TsFileSelfCheck Tool IoTDB Server provides the TsFile self check tool. At present, the tool can check the basic format of the TsFile file, the correctness of TimeseriesMetadata,...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/TsFileSelfCheck-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/TsFileSelfCheck-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"TsFileSelfCheck Tool"}],["meta",{"property":"og:description","content":"TsFileSelfCheck Tool IoTDB Server provides the TsFile self check tool. At present, the tool can check the basic format of the TsFile file, the correctness of TimeseriesMetadata,..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TsFileSelfCheck Tool\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Use","slug":"use","link":"#use","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.12,"words":336},"filePathRelative":"UserGuide/V0.13.x/Maintenance-Tools/TsFileSelfCheck-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,d as data};
