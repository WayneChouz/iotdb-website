import{_ as e,o as t,c as i,e as o}from"./app-nVIpYHtH.js";const l={},s=o(`<h1 id="tsfile-split-tool" tabindex="-1"><a class="header-anchor" href="#tsfile-split-tool"><span>TsFile Split Tool</span></a></h1><p>IoTDB version 0.12 could produce large files, which leads to difficulties in maintenance. Therefore, since version 0.12.5 and 0.13, TsFile split tool is provided. The split tool can split the large TsFile into several small TsFile according to the configuration.</p><p>After building the server, the startup script of this tool will appear under the <code>server\\target\\iotdb-server-{version}\\tools\\tsfileToolSet</code> directory.</p><p>Command:</p><p>For Windows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>.\\split-tsfile-tool.bat &lt;path of your TsFile&gt; (-level &lt;LEVEL of the target files&gt;) (-size &lt;SIZE of the target files&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For Linux or MacOs:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>./split-tsfile-tool.sh &lt;path of your TsFile&gt; (-level &lt;LEVEL of the target files&gt;) (-size &lt;SIZE of the target files&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Note that if <code>-level</code> is not set, the default level of target files is 10; if <code>-size</code> is not set, the default size of target files is about 1GB. The unit of <code>-size</code> is byte.<br> For example, if the target files size is 100MB, and the level is 6, the command would be <code>./split-tsfile-tool.sh test.tsfile -level 6 -size 1048576000</code> (Linux or MacOs)</p></blockquote><p>Here are some configurations:</p><ol><li>The size of target files could be configured by the input param, which is 1GB by default. This configuration is also the target file size in compaction in 0.13. File size could determine whether the compaction is proceeded in 0.13, so this configuration could make sure there is no compaction after restarting.</li><li>The level of target files is determined by the input param, which is 10 by default. File level could determine whether the compaction is proceeded in 0.12, so this configuration could make sure there is no compaction after restarting.</li><li>The points number of chunk could be configured by <code>chunk_point_num_lower_bound_in_compaction</code>, which is 100 by default. This configuration is also the points number of target file in compaction in 0.13.</li></ol><p>Here are some more tips:</p><ol><li>TsFile split tool is offline maintenance tool. Before splitting a file, you should make sure the file to be split is closed (aka with <code>tsFile.resource</code>) and IoTDB is shut down. After splitting, restart IoTDB.</li><li>TsFile split tool doesn&#39;t support splitting TsFile with deletion interval (aka with <code>.mods</code> file) and with aligned timeseries.</li></ol>`,13),a=[s];function n(r,c){return t(),i("div",null,a)}const p=e(l,[["render",n],["__file","TsFile-Split-Tool.html.vue"]]),h=JSON.parse('{"path":"/UserGuide/V0.13.x/Maintenance-Tools/TsFile-Split-Tool.html","title":"TsFile Split Tool","lang":"en-US","frontmatter":{"description":"TsFile Split Tool IoTDB version 0.12 could produce large files, which leads to difficulties in maintenance. Therefore, since version 0.12.5 and 0.13, TsFile split tool is provid...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/TsFile-Split-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/TsFile-Split-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"TsFile Split Tool"}],["meta",{"property":"og:description","content":"TsFile Split Tool IoTDB version 0.12 could produce large files, which leads to difficulties in maintenance. Therefore, since version 0.12.5 and 0.13, TsFile split tool is provid..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TsFile Split Tool\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"UserGuide/V0.13.x/Maintenance-Tools/TsFile-Split-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,h as data};
