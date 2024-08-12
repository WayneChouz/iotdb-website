import{_ as a,r as o,o as n,c as i,b as d,d as t,a as r,w as c,e}from"./app-XaimuxhO.js";const s={},p=e('<h2 id="编码方式" tabindex="-1"><a class="header-anchor" href="#编码方式"><span>编码方式</span></a></h2><h3 id="基本编码方式" tabindex="-1"><a class="header-anchor" href="#基本编码方式"><span>基本编码方式</span></a></h3><p>为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少 I/O 操作的数据量从而提高性能。IoTDB 支持多种针对不同类型的数据的编码方法：</p><ul><li>PLAIN 编码（PLAIN）</li></ul><p>PLAIN 编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩的时间效率较高，但空间存储效率较低。</p><ul><li>二阶差分编码（TS_2DIFF）</li></ul><p>二阶差分编码，比较适合编码单调递增或者递减的序列数据，不适合编码波动较大的数据。</p><ul><li>游程编码（RLE）</li></ul><p>游程编码，比较适合存储某些数值连续出现的序列，不适合编码大部分情况下前后值不一样的序列数据。</p>',9),I=e(`<blockquote><p>游程编码（RLE）和二阶差分编码（TS_2DIFF）对 float 和 double 的编码是有精度限制的，默认保留 2 位小数。推荐使用 GORILLA。</p></blockquote><ul><li>GORILLA 编码（GORILLA）</li></ul><p>GORILLA 编码是一种无损编码，它比较适合编码前后值比较接近的数值序列，不适合编码前后波动较大的数据。</p><p>当前系统中存在两个版本的 GORILLA 编码实现，推荐使用<code>GORILLA</code>，不推荐使用<code>GORILLA_V1</code>（已过时）。</p><p>使用限制：使用 Gorilla 编码 INT32 数据时，需要保证序列中不存在值为<code>Integer.MIN_VALUE</code>的数据点；使用 Gorilla 编码 INT64 数据时，需要保证序列中不存在值为<code>Long.MIN_VALUE</code>的数据点。</p><ul><li>字典编码 （DICTIONARY）</li></ul><p>字典编码是一种无损编码。它适合编码基数小的数据（即数据去重后唯一值数量小）。不推荐用于基数大的数据。</p><ul><li>频域编码 （FREQ）</li></ul><p>频域编码是一种有损编码，它基于变换编码的思想，将时序数据变换为频域，仅保留部分高能量的频域分量，以少许的精度损失为代价大幅提高空间效率。该编码适合于频域能量分布较为集中的数据（特别是具有明显周期性的数据），不适合能量分布均匀的数据（如白噪声）。</p><blockquote><p>频域编码在配置文件中包括两个参数：<code>freq_snr</code>指定了编码的信噪比（与标准均方根误差的关系为$NRMSE=10^{-SNR/20}$），该参数增大会同时降低压缩比和精度损失，请根据实际应用的需要进行设置；<code>freq_block_size</code>指定了编码进行时频域变换的分组大小，推荐不对默认值进行修改。参数影响的实验结果和分析详见设计文档。</p></blockquote><ul><li>ZIGZAG 编码</li></ul><p>ZigZag编码将有符号整型映射到无符号整型，适合比较小的整数。</p><ul><li>CHIMP</li></ul><p>CHIMP 是一种无损编码。它是一种新的流式浮点数据压缩算法，可以节省存储空间。这个编码适用于前后值比较接近的数值序列，对波动小和随机噪声少的序列数据更加友好。</p><p>使用限制：如果对 INT32 类型数据使用 CHIMP 编码，需要确保数据点中没有 <code>Integer.MIN_VALUE</code>。 如果对 INT64 类型数据使用 CHIMP 编码，需要确保数据点中没有 <code>Long.MIN_VALUE</code>。</p><h3 id="数据类型与编码的对应关系" tabindex="-1"><a class="header-anchor" href="#数据类型与编码的对应关系"><span>数据类型与编码的对应关系</span></a></h3><p>前文介绍的五种编码适用于不同的数据类型，若对应关系错误，则无法正确创建时间序列。数据类型与支持其编码的编码方式对应关系总结如下表所示。</p><table><thead><tr><th style="text-align:left;">数据类型</th><th style="text-align:left;">支持的编码</th></tr></thead><tbody><tr><td style="text-align:left;">BOOLEAN</td><td style="text-align:left;">PLAIN, RLE</td></tr><tr><td style="text-align:left;">INT32</td><td style="text-align:left;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ, ZIGZAG</td></tr><tr><td style="text-align:left;">INT64</td><td style="text-align:left;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ, ZIGZAG</td></tr><tr><td style="text-align:left;">FLOAT</td><td style="text-align:left;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ</td></tr><tr><td style="text-align:left;">DOUBLE</td><td style="text-align:left;">PLAIN, RLE, TS_2DIFF, GORILLA, FREQ</td></tr><tr><td style="text-align:left;">TEXT</td><td style="text-align:left;">PLAIN, DICTIONARY</td></tr></tbody></table><p>当用户输入的数据类型与编码方式不对应时，系统会提示错误。如下所示，二阶差分编码不支持布尔类型：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF
Msg: 507: encoding TS_2DIFF does not support BOOLEAN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function L(u,h){const l=o("RouteLink");return n(),i("div",null,[p,d("p",null,[t("游程编码也可用于对浮点数进行编码，但在创建时间序列的时候需指定保留小数位数（MAX_POINT_NUMBER，具体指定方式参见本文 "),r(l,{to:"/zh/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:c(()=>[t("SQL 参考文档")]),_:1}),t("）。比较适合存储某些浮点数值连续出现的序列数据，不适合存储对小数点后精度要求较高以及前后波动较大的序列数据。")]),I])}const m=a(s,[["render",L],["__file","Encoding.html.vue"]]),A=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Data-Concept/Encoding.html","title":"","lang":"zh-CN","frontmatter":{"description":"编码方式 基本编码方式 为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少 I/O 操作的数据量从而提高性能。IoTDB 支持多种针对不同类型的数据的编码方法： PLAIN 编码（PLAIN） PLAIN 编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩的时间效率较...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Data-Concept/Encoding.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Data-Concept/Encoding.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"编码方式 基本编码方式 为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少 I/O 操作的数据量从而提高性能。IoTDB 支持多种针对不同类型的数据的编码方法： PLAIN 编码（PLAIN） PLAIN 编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩的时间效率较..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"编码方式","slug":"编码方式","link":"#编码方式","children":[{"level":3,"title":"基本编码方式","slug":"基本编码方式","link":"#基本编码方式","children":[]},{"level":3,"title":"数据类型与编码的对应关系","slug":"数据类型与编码的对应关系","link":"#数据类型与编码的对应关系","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.15,"words":1246},"filePathRelative":"zh/UserGuide/V1.1.x/Data-Concept/Encoding.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,A as data};
