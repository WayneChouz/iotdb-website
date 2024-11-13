import{_ as o,c as s,b as n,d as t,e as l,a,w as r,r as d,o as p}from"./app-B280G6gL.js";const I={};function u(L,e){const i=d("RouteLink");return p(),s("div",null,[e[12]||(e[12]=n('<h1 id="编码和压缩" tabindex="-1"><a class="header-anchor" href="#编码和压缩"><span>编码和压缩</span></a></h1><h2 id="编码方式" tabindex="-1"><a class="header-anchor" href="#编码方式"><span>编码方式</span></a></h2><h3 id="基本编码方式" tabindex="-1"><a class="header-anchor" href="#基本编码方式"><span>基本编码方式</span></a></h3><p>为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少 I/O 操作的数据量从而提高性能。IoTDB 支持多种针对不同类型的数据的编码方法：</p>',4)),t("ol",null,[e[6]||(e[6]=t("li",null,[t("p",null,"PLAIN 编码（PLAIN）"),t("p",null,"PLAIN 编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩的时间效率较高，但空间存储效率较低。")],-1)),e[7]||(e[7]=t("li",null,[t("p",null,"二阶差分编码（TS_2DIFF）"),t("p",null,"二阶差分编码，比较适合编码单调递增或者递减的序列数据，不适合编码波动较大的数据。")],-1)),t("li",null,[e[3]||(e[3]=t("p",null,"游程编码（RLE）",-1)),e[4]||(e[4]=t("p",null,"游程编码，比较适合存储某些数值连续出现的序列，不适合编码大部分情况下前后值不一样的序列数据。",-1)),t("p",null,[e[1]||(e[1]=l("游程编码也可用于对浮点数进行编码，但在创建时间序列的时候需指定保留小数位数（MAX_POINT_NUMBER，具体指定方式参见本文 ")),a(i,{to:"/zh/UserGuide/V1.3.0-2/SQL-Manual/SQL-Manual.html"},{default:r(()=>e[0]||(e[0]=[l("SQL 参考文档")])),_:1}),e[2]||(e[2]=l("）。比较适合存储某些浮点数值连续出现的序列数据，不适合存储对小数点后精度要求较高以及前后波动较大的序列数据。"))]),e[5]||(e[5]=t("blockquote",null,[t("p",null,"游程编码（RLE）和二阶差分编码（TS_2DIFF）对 float 和 double 的编码是有精度限制的，默认保留 2 位小数。推荐使用 GORILLA。")],-1))]),e[8]||(e[8]=n("<li><p>GORILLA 编码（GORILLA）</p><p>GORILLA 编码是一种无损编码，它比较适合编码前后值比较接近的数值序列，不适合编码前后波动较大的数据。</p><p>当前系统中存在两个版本的 GORILLA 编码实现，推荐使用<code>GORILLA</code>，不推荐使用<code>GORILLA_V1</code>（已过时）。</p><p>使用限制：使用 Gorilla 编码 INT32 数据时，需要保证序列中不存在值为<code>Integer.MIN_VALUE</code>的数据点；使用 Gorilla 编码 INT64 数据时，需要保证序列中不存在值为<code>Long.MIN_VALUE</code>的数据点。</p></li><li><p>字典编码 （DICTIONARY）</p><p>字典编码是一种无损编码。它适合编码基数小的数据（即数据去重后唯一值数量小）。不推荐用于基数大的数据。</p></li><li><p>ZIGZAG 编码</p><p>ZigZag编码将有符号整型映射到无符号整型，适合比较小的整数。</p></li><li><p>CHIMP 编码</p><p>CHIMP 是一种无损编码。它是一种新的流式浮点数据压缩算法，可以节省存储空间。这个编码适用于前后值比较接近的数值序列，对波动小和随机噪声少的序列数据更加友好。</p><p>使用限制：如果对 INT32 类型数据使用 CHIMP 编码，需要确保数据点中没有 <code>Integer.MIN_VALUE</code>。 如果对 INT64 类型数据使用 CHIMP 编码，需要确保数据点中没有 <code>Long.MIN_VALUE</code>。</p></li><li><p>SPRINTZ 编码</p><p>SPRINTZ编码是一种无损编码，将原始时序数据分别进行预测、Zigzag编码、位填充和游程编码。SPRINTZ编码适合差分值的绝对值较小（即波动较小）的时序数据，不适合差分值较大（即波动较大）的时序数据。</p></li><li><p>RLBE 编码</p><p>RLBE编码是一种无损编码，将差分编码，位填充编码，游程长度，斐波那契编码和拼接等编码思想结合到一起。RLBE编码适合递增且递增值较小的时序数据，不适合波动较大的时序数据。</p></li>",6))]),e[13]||(e[13]=n(`<h3 id="数据类型与编码的对应关系" tabindex="-1"><a class="header-anchor" href="#数据类型与编码的对应关系"><span>数据类型与编码的对应关系</span></a></h3><p>前文介绍的五种编码适用于不同的数据类型，若对应关系错误，则无法正确创建时间序列。数据类型与支持其编码的编码方式对应关系总结如下表所示。</p><table><thead><tr><th style="text-align:center;">数据类型</th><th style="text-align:center;">支持的编码</th></tr></thead><tbody><tr><td style="text-align:center;">BOOLEAN</td><td style="text-align:center;">PLAIN, RLE</td></tr><tr><td style="text-align:center;">INT32</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, ZIGZAG, CHIMP, SPRINTZ, RLBE</td></tr><tr><td style="text-align:center;">INT64</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, ZIGZAG, CHIMP, SPRINTZ, RLBE</td></tr><tr><td style="text-align:center;">FLOAT</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, CHIMP, SPRINTZ, RLBE</td></tr><tr><td style="text-align:center;">DOUBLE</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, CHIMP, SPRINTZ, RLBE</td></tr><tr><td style="text-align:center;">TEXT</td><td style="text-align:center;">PLAIN, DICTIONARY</td></tr></tbody></table><p>当用户输入的数据类型与编码方式不对应时，系统会提示错误。如下所示，二阶差分编码不支持布尔类型：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF</span>
<span class="line">Msg: 507: encoding TS_2DIFF does not support BOOLEAN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="压缩方式" tabindex="-1"><a class="header-anchor" href="#压缩方式"><span>压缩方式</span></a></h2><p>当时间序列写入并按照指定的类型编码为二进制数据后，IoTDB 会使用压缩技术对该数据进行压缩，进一步提升空间存储效率。虽然编码和压缩都旨在提升存储效率，但编码技术通常只适合特定的数据类型（如二阶差分编码只适合与 INT32 或者 INT64 编码，存储浮点数需要先将他们乘以 10m 以转换为整数），然后将它们转换为二进制流。压缩方式（SNAPPY）针对二进制流进行压缩，因此压缩方式的使用不再受数据类型的限制。</p><h3 id="基本压缩方式" tabindex="-1"><a class="header-anchor" href="#基本压缩方式"><span>基本压缩方式</span></a></h3><p>IoTDB 允许在创建一个时间序列的时候指定该列的压缩方式。现阶段 IoTDB 支持以下几种压缩方式：</p><ul><li>UNCOMPRESSED（不压缩）</li><li>SNAPPY 压缩</li><li>LZ4 压缩</li><li>GZIP 压缩</li><li>ZSTD 压缩</li><li>LZMA2 压缩</li></ul>`,10)),t("p",null,[e[10]||(e[10]=l("压缩方式的指定语法详见本文 ")),a(i,{to:"/zh/UserGuide/V1.3.0-2/SQL-Manual/SQL-Manual.html"},{default:r(()=>e[9]||(e[9]=[l("SQL 参考文档")])),_:1}),e[11]||(e[11]=l("。"))]),e[14]||(e[14]=t("h3",{id:"压缩比统计信息",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#压缩比统计信息"},[t("span",null,"压缩比统计信息")])],-1)),e[15]||(e[15]=t("p",null,"压缩比统计信息文件：data/datanode/system/compression_ratio",-1)),e[16]||(e[16]=t("ul",null,[t("li",null,"ratio_sum: memtable压缩比的总和"),t("li",null,"memtable_flush_time: memtable刷盘的总次数")],-1)),e[17]||(e[17]=t("p",null,[l("通过 "),t("code",null,"ratio_sum / memtable_flush_time"),l(" 可以计算出平均压缩比")],-1))])}const g=o(I,[["render",u],["__file","Encoding-and-Compression.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/Basic-Concept/Encoding-and-Compression.html","title":"编码和压缩","lang":"zh-CN","frontmatter":{"description":"编码和压缩 编码方式 基本编码方式 为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少 I/O 操作的数据量从而提高性能。IoTDB 支持多种针对不同类型的数据的编码方法： PLAIN 编码（PLAIN） PLAIN 编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Basic-Concept/Encoding-and-Compression.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Basic-Concept/Encoding-and-Compression.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"编码和压缩"}],["meta",{"property":"og:description","content":"编码和压缩 编码方式 基本编码方式 为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少 I/O 操作的数据量从而提高性能。IoTDB 支持多种针对不同类型的数据的编码方法： PLAIN 编码（PLAIN） PLAIN 编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编码和压缩\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"编码方式","slug":"编码方式","link":"#编码方式","children":[{"level":3,"title":"基本编码方式","slug":"基本编码方式","link":"#基本编码方式","children":[]},{"level":3,"title":"数据类型与编码的对应关系","slug":"数据类型与编码的对应关系","link":"#数据类型与编码的对应关系","children":[]}]},{"level":2,"title":"压缩方式","slug":"压缩方式","link":"#压缩方式","children":[{"level":3,"title":"基本压缩方式","slug":"基本压缩方式","link":"#基本压缩方式","children":[]},{"level":3,"title":"压缩比统计信息","slug":"压缩比统计信息","link":"#压缩比统计信息","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.98,"words":1493},"filePathRelative":"zh/UserGuide/V1.3.0-2/Basic-Concept/Encoding-and-Compression.md","localizedDate":"2023年7月10日","autoDesc":true}');export{g as comp,c as data};
