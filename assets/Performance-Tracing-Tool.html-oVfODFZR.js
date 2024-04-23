import{_ as e,o as t,c as a,e as n}from"./app-DrPcRZG6.js";const o={},r=n(`<h2 id="performance-tracing-tool" tabindex="-1"><a class="header-anchor" href="#performance-tracing-tool"><span>Performance Tracing Tool</span></a></h2><blockquote><p>Note: TRACING ON/OFF hasn&#39;t been supported yet.</p></blockquote><p>IoTDB supports the use of the <code>TRACING</code> clause to enable performance tracing of executed statements. Users can use the performance tracing tool to analyze potential performance problems in some statements.</p><p>Traceable statement: <code>SELECT</code> only.</p><p>The current performance analysis includes the following contents:</p><ol><li>The elapsed time of each stage of the execution process.</li><li>Statistics related to performance analysis. For query statements, it includes the number of time series queried, the number of Tsfile files accessed, the total number of chunks to be scanned, and the average number of data points contained in the chunk, the total number of pages read, and the number of overlapped pages.</li></ol><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><p>For example, execute <code>tracing select * from root</code>, will display the following contents:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Tracing Activties:
+------------------------------------------------------+------------+
|                                              Activity|Elapsed Time|
+------------------------------------------------------+------------+
|Start to execute statement: tracing select * from root|           0|
|                            Parse SQL to physical plan|           4|
|                              Create and cache dataset|          16|
|                              * Num of series paths: 3|            |
|                       * Num of sequence files read: 2|            |
|                     * Num of unsequence files read: 1|            |
|        * Num of sequence chunks: 6, avg points: 100.0|            |
|      * Num of unsequence chunks: 3, avg points: 100.0|            |
|         * Num of Pages: 9, overlapped pages: 0 (0.0%)|            |
|                                      Request complete|          20|
+------------------------------------------------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),s=[r];function i(c,l){return t(),a("div",null,s)}const m=e(o,[["render",i],["__file","Performance-Tracing-Tool.html.vue"]]),p=JSON.parse(`{"path":"/UserGuide/V0.13.x/Query-Data/Performance-Tracing-Tool.html","title":"","lang":"en-US","frontmatter":{"description":"Performance Tracing Tool Note: TRACING ON/OFF hasn't been supported yet. IoTDB supports the use of the TRACING clause to enable performance tracing of executed statements. Users...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Performance-Tracing-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Performance-Tracing-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Performance Tracing Tool Note: TRACING ON/OFF hasn't been supported yet. IoTDB supports the use of the TRACING clause to enable performance tracing of executed statements. Users..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Performance Tracing Tool","slug":"performance-tracing-tool","link":"#performance-tracing-tool","children":[{"level":3,"title":"Example","slug":"example","link":"#example","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.05,"words":314},"filePathRelative":"UserGuide/V0.13.x/Query-Data/Performance-Tracing-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{m as comp,p as data};
