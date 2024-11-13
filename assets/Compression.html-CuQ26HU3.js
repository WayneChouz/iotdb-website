import{_ as i,c as r,b as a,d as t,e as o,a as n,w as p,r as m,o as l}from"./app-B280G6gL.js";const c={};function d(h,e){const s=m("RouteLink");return l(),r("div",null,[e[3]||(e[3]=a('<h1 id="compression" tabindex="-1"><a class="header-anchor" href="#compression"><span>Compression</span></a></h1><p>When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually available only for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.</p><h2 id="basic-compression-methods" tabindex="-1"><a class="header-anchor" href="#basic-compression-methods"><span>Basic Compression Methods</span></a></h2><p>IoTDB allows you to specify the compression method of the column when creating a time series, and supports the following compression methods:</p><ul><li><p>UNCOMPRESSED</p></li><li><p>SNAPPY</p></li><li><p>LZ4</p></li><li><p>GZIP</p></li></ul>',5)),t("p",null,[e[1]||(e[1]=o("The specified syntax for compression is detailed in ")),n(s,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:p(()=>e[0]||(e[0]=[o("Create Timeseries Statement")])),_:1}),e[2]||(e[2]=o("."))]),e[4]||(e[4]=t("h2",{id:"compression-ratio-statistics",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#compression-ratio-statistics"},[t("span",null,"Compression Ratio Statistics")])],-1)),e[5]||(e[5]=t("p",{memtable_flush_time:""},"Compression ratio statistics file: data/system/storage_groups/compression_ratio/Ratio-{ratio_sum}-",-1)),e[6]||(e[6]=t("ul",null,[t("li",null,"ratio_sum: sum of memtable compression ratios"),t("li",null,"memtable_flush_time: memtable flush times")],-1)),e[7]||(e[7]=t("p",null,[o("The average compression ratio can be calculated by "),t("code",null,"ratio_sum / memtable_flush_time")],-1))])}const f=i(c,[["render",d],["__file","Compression.html.vue"]]),g=JSON.parse('{"path":"/UserGuide/V0.13.x/Data-Concept/Compression.html","title":"Compression","lang":"en-US","frontmatter":{"description":"Compression When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Data-Concept/Compression.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Data-Concept/Compression.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Compression"}],["meta",{"property":"og:description","content":"Compression When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Compression\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Basic Compression Methods","slug":"basic-compression-methods","link":"#basic-compression-methods","children":[]},{"level":2,"title":"Compression Ratio Statistics","slug":"compression-ratio-statistics","link":"#compression-ratio-statistics","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1,"words":300},"filePathRelative":"UserGuide/V0.13.x/Data-Concept/Compression.md","localizedDate":"July 10, 2023","autoDesc":true}');export{f as comp,g as data};
