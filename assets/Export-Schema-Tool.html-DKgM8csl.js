import{_ as o,r,o as i,c as n,b as e,d as t,a as s,e as l}from"./app-BZ7vU6A9.js";const c={},d=l(`<h2 id="export-schema" tabindex="-1"><a class="header-anchor" href="#export-schema"><span>Export Schema</span></a></h2><p>The schema export operation exports the information about store group, timeseries, and schema template in the current IoTDB in the form of <code>mlog.bin</code> and <code>tlog.txt</code> to the specified directory.</p><p>The exported <code>mlog.bin</code> and <code>tlog.txt</code> files can be incrementally loaded into an IoTDB instance.</p><h3 id="export-schema-with-sql" tabindex="-1"><a class="header-anchor" href="#export-schema-with-sql"><span>Export Schema with SQL</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>EXPORT SCHEMA &#39;&lt;path/dir&gt;&#39; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="export-schema-with-script" tabindex="-1"><a class="header-anchor" href="#export-schema-with-script"><span>Export Schema with Script</span></a></h3><p>Linux/MacOS</p><blockquote><p>./exportSchema.sh -d /yourpath/data/system/schema -o /yourpath/targetDir</p></blockquote><p>Windows</p><blockquote><p>./exportSchema.bat-d /yourpath/data/system/schema -o /yourpath/targetDir</p></blockquote><p>Export destination directory on server need to be specified when exporting metadata using scripting. Note that the target directory path must be absolute path.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>usage: ExportSchema -o &lt;target directory path&gt; [-h &lt;host address&gt;] [-p &lt;port&gt;] [-u &lt;user&gt;] [-pw &lt;password&gt;] [-help]
 -o &lt;target directory path&gt;   Need to specify a absolute target directory
                              path on server（required)
 -h &lt;host address&gt;            Could specify a specify the IoTDB host
                              address, default is 127.0.0.1 (optional)
 -p &lt;port&gt;                    Could specify a specify the IoTDB port,
                              default is 6667 (optional)
 -u &lt;user&gt;                    Could specify the IoTDB user name, default
                              is root (optional)
 -pw &lt;password&gt;               Could specify the IoTDB password, default is
                              root (optional)
 -help,--help                 Display help information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h3><ul><li>Cannot find or load the main class ExportSchema <ul><li>It may be because the environment variable $IOTDB_HOME is not set, please set the environment variable and try again</li></ul></li><li>Encounter an error, because: File ... already exist. <ul><li>There is already a mlog.bin or tlog.txt file in the target directory, please check the target directory and try again</li></ul></li></ul><h3 id="load-schema" tabindex="-1"><a class="header-anchor" href="#load-schema"><span>Load Schema</span></a></h3>`,15),p={href:"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html",target:"_blank",rel:"noopener noreferrer"};function h(m,u){const a=r("ExternalLinkIcon");return i(),n("div",null,[d,e("p",null,[t("Please refer to "),e("a",p,[t("MLogLoad Tool"),s(a)])])])}const g=o(c,[["render",h],["__file","Export-Schema-Tool.html.vue"]]),b=JSON.parse('{"path":"/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html","title":"","lang":"en-US","frontmatter":{"description":"Export Schema The schema export operation exports the information about store group, timeseries, and schema template in the current IoTDB in the form of mlog.bin and tlog.txt to...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Export Schema The schema export operation exports the information about store group, timeseries, and schema template in the current IoTDB in the form of mlog.bin and tlog.txt to..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Export Schema","slug":"export-schema","link":"#export-schema","children":[{"level":3,"title":"Export Schema with SQL","slug":"export-schema-with-sql","link":"#export-schema-with-sql","children":[]},{"level":3,"title":"Export Schema with Script","slug":"export-schema-with-script","link":"#export-schema-with-script","children":[]},{"level":3,"title":"Q&A","slug":"q-a","link":"#q-a","children":[]},{"level":3,"title":"Load Schema","slug":"load-schema","link":"#load-schema","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.2,"words":361},"filePathRelative":"UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{g as comp,b as data};
