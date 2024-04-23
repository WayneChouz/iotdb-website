import{_ as o,r as l,o as i,c as n,b as e,d as t,a as r,e as s}from"./app-DrPcRZG6.js";const d={},c=s(`<h2 id="元数据导出操作" tabindex="-1"><a class="header-anchor" href="#元数据导出操作"><span>元数据导出操作</span></a></h2><p>元数据导出操作会以 mlog.bin 和 tlog.txt 的形式将当前 IoTDB 中的存储组、时间序列、元数据模板信息进行归档，并导出到指定目录中。</p><p>导出的 mlog.bin 和 tlog.txt 文件可以增量的方式加载到已有元数据的 IoTDB 实例中。</p><h3 id="使用-sql-方式导出元数据" tabindex="-1"><a class="header-anchor" href="#使用-sql-方式导出元数据"><span>使用 SQL 方式导出元数据</span></a></h3><p>元数据导出的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>EXPORT SCHEMA &#39;&lt;path/dir&gt;&#39; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用脚本方式导出元数据" tabindex="-1"><a class="header-anchor" href="#使用脚本方式导出元数据"><span>使用脚本方式导出元数据</span></a></h3><p>Linux/MacOS</p><blockquote><p>./exportSchema.sh -o /yourpath/targetDir -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><p>Windows</p><blockquote><p>./exportSchema.bat -o /yourpath/targetDir -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><p>使用脚本方式导出元数据时候，需要指定 IoTDB 元数据文件的导出目标目录（位于 IoTDB 服务器），注意导出目标目录必须为绝对路径。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>usage: ExportSchema -o &lt;target directory path&gt; [-h &lt;host address&gt;] [-p &lt;port&gt;] [-u &lt;user&gt;] [-pw &lt;password&gt;] [-help]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3><ul><li>找不到或无法加载主类 ExportSchema <ul><li>可能是由于未设置环境变量 $IOTDB_HOME，请设置环境变量之后重试</li></ul></li><li>Encounter an error, because: File ... already exist. <ul><li>目标目录下已有 mlog.bin 或者 tlog.txt 文件，请检查目标目录之后重试</li></ul></li></ul><h2 id="元数据加载操作" tabindex="-1"><a class="header-anchor" href="#元数据加载操作"><span>元数据加载操作</span></a></h2>`,16),p={href:"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html",target:"_blank",rel:"noopener noreferrer"};function h(u,m){const a=l("ExternalLinkIcon");return i(),n("div",null,[c,e("p",null,[t("参考 "),e("a",p,[t("MLog 加载工具"),r(a)])])])}const x=o(d,[["render",h],["__file","Export-Schema-Tool.html.vue"]]),v=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html","title":"","lang":"zh-CN","frontmatter":{"description":"元数据导出操作 元数据导出操作会以 mlog.bin 和 tlog.txt 的形式将当前 IoTDB 中的存储组、时间序列、元数据模板信息进行归档，并导出到指定目录中。 导出的 mlog.bin 和 tlog.txt 文件可以增量的方式加载到已有元数据的 IoTDB 实例中。 使用 SQL 方式导出元数据 元数据导出的 SQL 语句如下所示： 使用脚本...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"元数据导出操作 元数据导出操作会以 mlog.bin 和 tlog.txt 的形式将当前 IoTDB 中的存储组、时间序列、元数据模板信息进行归档，并导出到指定目录中。 导出的 mlog.bin 和 tlog.txt 文件可以增量的方式加载到已有元数据的 IoTDB 实例中。 使用 SQL 方式导出元数据 元数据导出的 SQL 语句如下所示： 使用脚本..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"元数据导出操作","slug":"元数据导出操作","link":"#元数据导出操作","children":[{"level":3,"title":"使用 SQL 方式导出元数据","slug":"使用-sql-方式导出元数据","link":"#使用-sql-方式导出元数据","children":[]},{"level":3,"title":"使用脚本方式导出元数据","slug":"使用脚本方式导出元数据","link":"#使用脚本方式导出元数据","children":[]},{"level":3,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}]},{"level":2,"title":"元数据加载操作","slug":"元数据加载操作","link":"#元数据加载操作","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.62,"words":485},"filePathRelative":"zh/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{x as comp,v as data};
