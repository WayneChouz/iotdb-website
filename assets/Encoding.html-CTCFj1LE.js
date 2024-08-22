import{_ as o,r as a,o as l,c as r,b as i,d as t,a as c,w as d,e}from"./app-BZ7vU6A9.js";const p={},s=e('<h1 id="编码方式" tabindex="-1"><a class="header-anchor" href="#编码方式"><span>编码方式</span></a></h1><h2 id="基本编码方式" tabindex="-1"><a class="header-anchor" href="#基本编码方式"><span>基本编码方式</span></a></h2><p>为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少 I/O 操作的数据量从而提高性能。IoTDB 支持多种针对不同类型的数据的编码方法：</p><ul><li>PLAIN 编码（PLAIN）</li></ul><p>PLAIN 编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩的时间效率较高，但空间存储效率较低。</p><ul><li>二阶差分编码（TS_2DIFF）</li></ul><p>二阶差分编码，比较适合编码单调递增或者递减的序列数据，不适合编码波动较大的数据。</p><ul><li>游程编码（RLE）</li></ul><p>游程编码，比较适合存储某些数值连续出现的序列，不适合编码大部分情况下前后值不一样的序列数据。</p>',9),I=e('<blockquote><p>游程编码（RLE）和二阶差分编码（TS_2DIFF）对 float 和 double 的编码是有精度限制的，默认保留 2 位小数。推荐使用 GORILLA。</p></blockquote><ul><li>GORILLA 编码（GORILLA）</li></ul><p>GORILLA 编码是一种无损编码，它比较适合编码前后值比较接近的数值序列，不适合编码前后波动较大的数据。</p><p>当前系统中存在两个版本的 GORILLA 编码实现，推荐使用<code>GORILLA</code>，不推荐使用<code>GORILLA_V1</code>（已过时）。</p><p>使用限制：使用 Gorilla 编码 INT32 数据时，需要保证序列中不存在值为<code>Integer.MIN_VALUE</code>的数据点；使用 Gorilla 编码 INT64 数据时，需要保证序列中不存在值为<code>Long.MIN_VALUE</code>的数据点。</p><ul><li>字典编码 （DICTIONARY）</li></ul><p>字典编码是一种无损编码。它适合编码基数小的数据（即数据去重后唯一值数量小）。不推荐用于基数大的数据。</p><ul><li>频域编码 （FREQ）</li></ul><p>频域编码是一种有损编码，它将时序数据变换为频域，仅保留部分高能量的频域分量。该编码适合于具有明显周期性的数据。</p><blockquote><p>频域编码在配置文件中包括两个参数：<code>freq_snr</code>指定了编码的信噪比，该参数增大会同时降低压缩比和精度损失；<code>freq_block_size</code>指定了编码进行时频域变换的分组大小，推荐不对默认值进行修改。参数影响的实验结果和分析详见设计文档。</p></blockquote><ul><li>ZIGZAG 编码</li></ul><p>ZigZag编码将有符号整型映射到无符号整型，适合比较小的整数。</p><h2 id="数据类型与编码的对应关系" tabindex="-1"><a class="header-anchor" href="#数据类型与编码的对应关系"><span>数据类型与编码的对应关系</span></a></h2><p>前文介绍的五种编码适用于不同的数据类型，若对应关系错误，则无法正确创建时间序列。数据类型与支持其编码的编码方式对应关系总结如表格 2-3。</p><div style="text-align:center;"><p><strong>表格 2-3 数据类型与支持其编码的对应关系</strong></p><table><thead><tr><th style="text-align:center;">数据类型</th><th style="text-align:center;">支持的编码</th></tr></thead><tbody><tr><td style="text-align:center;">BOOLEAN</td><td style="text-align:center;">PLAIN, RLE</td></tr><tr><td style="text-align:center;">INT32</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ, ZIGZAG</td></tr><tr><td style="text-align:center;">INT64</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ, ZIGZAG</td></tr><tr><td style="text-align:center;">FLOAT</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ</td></tr><tr><td style="text-align:center;">DOUBLE</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ</td></tr><tr><td style="text-align:center;">TEXT</td><td style="text-align:center;">PLAIN, DICTIONARY</td></tr></tbody></table></div>',15);function L(h,g){const n=a("RouteLink");return l(),r("div",null,[s,i("p",null,[t("游程编码也可用于对浮点数进行编码，但在创建时间序列的时候需指定保留小数位数（MAX_POINT_NUMBER，具体指定方式参见本文 "),c(n,{to:"/zh/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:d(()=>[t("SQL 参考文档")]),_:1}),t("）。比较适合存储某些浮点数值连续出现的序列数据，不适合存储对小数点后精度要求较高以及前后波动较大的序列数据。")]),I])}const m=o(p,[["render",L],["__file","Encoding.html.vue"]]),A=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Data-Concept/Encoding.html","title":"编码方式","lang":"zh-CN","frontmatter":{"description":"编码方式 基本编码方式 为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少 I/O 操作的数据量从而提高性能。IoTDB 支持多种针对不同类型的数据的编码方法： PLAIN 编码（PLAIN） PLAIN 编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩的时间效率较...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Data-Concept/Encoding.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Data-Concept/Encoding.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"编码方式"}],["meta",{"property":"og:description","content":"编码方式 基本编码方式 为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少 I/O 操作的数据量从而提高性能。IoTDB 支持多种针对不同类型的数据的编码方法： PLAIN 编码（PLAIN） PLAIN 编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩的时间效率较..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编码方式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基本编码方式","slug":"基本编码方式","link":"#基本编码方式","children":[]},{"level":2,"title":"数据类型与编码的对应关系","slug":"数据类型与编码的对应关系","link":"#数据类型与编码的对应关系","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.33,"words":999},"filePathRelative":"zh/UserGuide/V1.0.x/Data-Concept/Encoding.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,A as data};
