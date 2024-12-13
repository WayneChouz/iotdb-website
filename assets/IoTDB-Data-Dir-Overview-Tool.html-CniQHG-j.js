import{_ as s,c as n,b as e,o}from"./app-i6u37es5.js";const t={};function p(r,a){return o(),n("div",null,a[0]||(a[0]=[e('<h1 id="iotdb-data-directory-overview-tool" tabindex="-1"><a class="header-anchor" href="#iotdb-data-directory-overview-tool"><span>IoTDB Data Directory Overview Tool</span></a></h1><p>IoTDB data directory overview tool is used to print an overview of the IoTDB data directory structure. The location is tools/tsfile/print-iotdb-data-dir.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><ul><li>For Windows:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">.<span class="token punctuation">\\</span>print-iotdb-data-dir.bat <span class="token operator">&lt;</span>IoTDB data folder path, separated by commas <span class="token keyword">if</span> there are multiple folders<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>storage path of the output overview file<span class="token operator">&gt;</span><span class="token punctuation">)</span> </span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>For Linux or MacOs:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./print-iotdb-data-dir.sh <span class="token operator">&lt;</span>IoTDB data folder path, separated by commas <span class="token keyword">if</span> there are multiple folders<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>storage path of the output overview file<span class="token operator">&gt;</span><span class="token punctuation">)</span> </span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Note: if the storage path of the output overview file is not set, the default relative path &quot;IoTDB_data_dir_overview.txt&quot; will be used.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Use Windows in this example:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">.<span class="token punctuation">\\</span>print-iotdb-data-dir.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data</span>\n<span class="line">```````````````````````<span class="token variable"><span class="token variable">`</span></span>\n<span class="line">Starting Printing the IoTDB Data Directory Overview</span>\n<span class="line"><span class="token variable">`</span></span>```````````````````````</span>\n<span class="line">output save path:IoTDB_data_dir_overview.txt</span>\n<span class="line">data <span class="token function">dir</span> num:1</span>\n<span class="line"><span class="token number">143</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.</span>\n<span class="line"><span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span></span>\n<span class="line"><span class="token operator">|</span>D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data</span>\n<span class="line"><span class="token operator">|</span>--sequence</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--1</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect1</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--2</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect2</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--3</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect3</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--4</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect4</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--5</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect5</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--6</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>--root.sg1</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0</span>\n<span class="line"><span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--2760</span>\n<span class="line"><span class="token operator">|</span>--unsequence</span>\n<span class="line"><span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11)]))}const i=s(t,[["render",p],["__file","IoTDB-Data-Dir-Overview-Tool.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.0.x/Maintenance-Tools/IoTDB-Data-Dir-Overview-Tool.html","title":"IoTDB Data Directory Overview Tool","lang":"en-US","frontmatter":{"description":"IoTDB Data Directory Overview Tool IoTDB data directory overview tool is used to print an overview of the IoTDB data directory structure. The location is tools/tsfile/print-iotd...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Maintenance-Tools/IoTDB-Data-Dir-Overview-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Maintenance-Tools/IoTDB-Data-Dir-Overview-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"IoTDB Data Directory Overview Tool"}],["meta",{"property":"og:description","content":"IoTDB Data Directory Overview Tool IoTDB data directory overview tool is used to print an overview of the IoTDB data directory structure. The location is tools/tsfile/print-iotd..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IoTDB Data Directory Overview Tool\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":0.99,"words":297},"filePathRelative":"UserGuide/V1.0.x/Maintenance-Tools/IoTDB-Data-Dir-Overview-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{i as comp,c as data};
