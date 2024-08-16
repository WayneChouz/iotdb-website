import{_ as e,o as t,c as n,e as o}from"./app-CIPkfidu.js";const i={},a=o('<h1 id="encoding" tabindex="-1"><a class="header-anchor" href="#encoding"><span>Encoding</span></a></h1><h2 id="encoding-methods" tabindex="-1"><a class="header-anchor" href="#encoding-methods"><span>Encoding Methods</span></a></h2><p>To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the process of writing and reading data, the amount of data involved in the I/O operations can be reduced to improve performance. IoTDB supports the following encoding methods for different data types:</p><ul><li>PLAIN</li></ul><p>PLAIN encoding, the default encoding mode, i.e, no encoding, supports multiple data types. It has high compression and decompression efficiency while suffering from low space storage efficiency.</p><ul><li>TS_2DIFF</li></ul><p>Second-order differential encoding is more suitable for encoding monotonically increasing or decreasing sequence data, and is not recommended for sequence data with large fluctuations.</p><ul><li>RLE</li></ul><p>Run-length encoding is suitable for storing sequence with continuous values, and is not recommended for sequence data with most of the time different values.</p><p>Run-length encoding can also be used to encode floating-point numbers, while it is necessary to specify reserved decimal digits (MAX_POINT_NUMBER) when creating time series. It is more suitable to store sequence data where floating-point values appear continuously, monotonously increasing or decreasing, and it is not suitable for storing sequence data with high precision requirements after the decimal point or with large fluctuations.</p><blockquote><p>TS_2DIFF and RLE have precision limit for data type of float and double. By default, two decimal places are reserved. GORILLA is recommended.</p></blockquote><ul><li>GORILLA</li></ul><p>GORILLA encoding is lossless. It is more suitable for numerical sequence with similar values and is not recommended for sequence data with large fluctuations.</p><p>Currently, there are two versions of GORILLA encoding implementation, it is recommended to use <code>GORILLA</code> instead of <code>GORILLA_V1</code> (deprecated).</p><p>Usage restrictions: When using GORILLA to encode INT32 data, you need to ensure that there is no data point with the value <code>Integer.MIN_VALUE</code> in the sequence. When using GORILLA to encode INT64 data, you need to ensure that there is no data point with the value <code>Long.MIN_VALUE</code> in the sequence.</p><ul><li>DICTIONARY</li></ul><p>DICTIONARY encoding is lossless. It is suitable for TEXT data with low cardinality (i.e. low number of distinct values). It is not recommended to use it for high-cardinality data.</p><h2 id="correspondence-between-data-type-and-encoding" tabindex="-1"><a class="header-anchor" href="#correspondence-between-data-type-and-encoding"><span>Correspondence between data type and encoding</span></a></h2><p>The five encodings described in the previous sections are applicable to different data types. If the correspondence is wrong, the time series cannot be created correctly. The correspondence between the data type and its supported encodings is summarized in the Table below.</p><div style="text-align:center;"><p><strong>The correspondence between the data type and its supported encodings</strong></p><table><thead><tr><th style="text-align:center;">Data Type</th><th style="text-align:center;">Supported Encoding</th></tr></thead><tbody><tr><td style="text-align:center;">BOOLEAN</td><td style="text-align:center;">PLAIN, RLE</td></tr><tr><td style="text-align:center;">INT32</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA</td></tr><tr><td style="text-align:center;">INT64</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA</td></tr><tr><td style="text-align:center;">FLOAT</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA</td></tr><tr><td style="text-align:center;">DOUBLE</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA</td></tr><tr><td style="text-align:center;">TEXT</td><td style="text-align:center;">PLAIN, DICTIONARY</td></tr></tbody></table></div>',20),d=[a];function r(s,c){return t(),n("div",null,d)}const p=e(i,[["render",r],["__file","Encoding.html.vue"]]),g=JSON.parse('{"path":"/UserGuide/V0.13.x/Data-Concept/Encoding.html","title":"Encoding","lang":"en-US","frontmatter":{"description":"Encoding Encoding Methods To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the p...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Data-Concept/Encoding.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Data-Concept/Encoding.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Encoding"}],["meta",{"property":"og:description","content":"Encoding Encoding Methods To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the p..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Encoding\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Encoding Methods","slug":"encoding-methods","link":"#encoding-methods","children":[]},{"level":2,"title":"Correspondence between data type and encoding","slug":"correspondence-between-data-type-and-encoding","link":"#correspondence-between-data-type-and-encoding","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.88,"words":565},"filePathRelative":"UserGuide/V0.13.x/Data-Concept/Encoding.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,g as data};
