import{_ as n,o as s,c as a,e}from"./app-vSSc7VXH.js";const t={},o=e('<h1 id="tsfile-resource-sketch-tool" tabindex="-1"><a class="header-anchor" href="#tsfile-resource-sketch-tool"><span>TsFile Resource Sketch Tool</span></a></h1><p>TsFile resource sketch tool is used to print the content of a TsFile resource file. The location is tools/tsfile/print-tsfile-resource-files.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><ul><li>For Windows:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-tsfile-resource-files.bat <span class="token operator">&lt;</span>path of the parent directory of the TsFile resource files, or path of a TsFile resource file<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>For Linux or MacOs:</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>./print-tsfile-resource-files.sh &lt;path of the parent directory of the TsFile resource files, or path of a TsFile resource file&gt; \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Use Windows in this example:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-tsfile-resource-files.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span>\n```````````````````````<span class="token variable"><span class="token variable">`</span>\nStarting Printing the TsFileResources\n<span class="token variable">`</span></span>```````````````````````\n<span class="token number">147</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.\n<span class="token number">230</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot <span class="token function">find</span> IOTDB_HOME or IOTDB_CONF environment variable when loading config <span class="token function">file</span> iotdb-common.properties, use default configuration\n<span class="token number">231</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn<span class="token string">&#39;t load the configuration iotdb-common.properties from any of the known sources.\n233  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot find IOTDB_HOME or IOTDB_CONF environment variable when loading config file iotdb-datanode.properties, use default configuration\n237  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn&#39;</span>t load the configuration iotdb-datanode.properties from any of the known sources.\nAnalyzing D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile <span class="token punctuation">..</span>.\n\nResource plan index range <span class="token punctuation">[</span><span class="token number">9223372036854775807</span>, -9223372036854775808<span class="token punctuation">]</span>\ndevice root.sg1.d1, start <span class="token function">time</span> <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span>, end <span class="token function">time</span> <span class="token number">99</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00:00.099+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\nAnalyzing the resource <span class="token function">file</span> folder D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span> finished.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-tsfile-resource-files.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile.resource\n```````````````````````<span class="token variable"><span class="token variable">`</span>\nStarting Printing the TsFileResources\n<span class="token variable">`</span></span>```````````````````````\n<span class="token number">178</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot <span class="token function">find</span> IOTDB_HOME or IOTDB_CONF environment variable when loading config <span class="token function">file</span> iotdb-common.properties, use default configuration\n<span class="token number">186</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.\n<span class="token number">187</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn<span class="token string">&#39;t load the configuration iotdb-common.properties from any of the known sources.\n188  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot find IOTDB_HOME or IOTDB_CONF environment variable when loading config file iotdb-datanode.properties, use default configuration\n192  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn&#39;</span>t load the configuration iotdb-datanode.properties from any of the known sources.\nAnalyzing D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile <span class="token punctuation">..</span>.\n\nResource plan index range <span class="token punctuation">[</span><span class="token number">9223372036854775807</span>, -9223372036854775808<span class="token punctuation">]</span>\ndevice root.sg1.d1, start <span class="token function">time</span> <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span>, end <span class="token function">time</span> <span class="token number">99</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00:00.099+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\nAnalyzing the resource <span class="token function">file</span> D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile.resource finished.\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11),i=[o];function p(c,l){return s(),a("div",null,i)}const r=n(t,[["render",p],["__file","TsFile-Resource-Sketch-Tool.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Resource-Sketch-Tool.html","title":"TsFile Resource Sketch Tool","lang":"en-US","frontmatter":{"description":"TsFile Resource Sketch Tool TsFile resource sketch tool is used to print the content of a TsFile resource file. The location is tools/tsfile/print-tsfile-resource-files. Usage F...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Resource-Sketch-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Resource-Sketch-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"TsFile Resource Sketch Tool"}],["meta",{"property":"og:description","content":"TsFile Resource Sketch Tool TsFile resource sketch tool is used to print the content of a TsFile resource file. The location is tools/tsfile/print-tsfile-resource-files. Usage F..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TsFile Resource Sketch Tool\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.84,"words":552},"filePathRelative":"UserGuide/V1.1.x/Maintenance-Tools/TsFile-Resource-Sketch-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{r as comp,d as data};
