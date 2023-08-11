import{_ as n,r as o,o as s,c as a,a as r,d as e,e as t,b as d,w as c,f as l}from"./app-91105029.js";const h={},u=l(`<h1 id="encoding-and-compression" tabindex="-1"><a class="header-anchor" href="#encoding-and-compression" aria-hidden="true">#</a> Encoding and Compression</h1><h2 id="encoding-methods" tabindex="-1"><a class="header-anchor" href="#encoding-methods" aria-hidden="true">#</a> Encoding Methods</h2><p>To improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the process of writing and reading data, the amount of data involved in the I/O operations can be reduced to improve performance. IoTDB supports the following encoding methods for different data types:</p><ul><li>PLAIN</li></ul><p>PLAIN encoding, the default encoding mode, i.e, no encoding, supports multiple data types. It has high compression and decompression efficiency while suffering from low space storage efficiency.</p><ul><li>TS_2DIFF</li></ul><p>Second-order differential encoding is more suitable for encoding monotonically increasing or decreasing sequence data, and is not recommended for sequence data with large fluctuations.</p><ul><li>RLE</li></ul><p>Run-length encoding is suitable for storing sequence with continuous values, and is not recommended for sequence data with most of the time different values.</p><p>Run-length encoding can also be used to encode floating-point numbers, while it is necessary to specify reserved decimal digits (MAX_POINT_NUMBER) when creating time series. It is more suitable to store sequence data where floating-point values appear continuously, monotonously increasing or decreasing, and it is not suitable for storing sequence data with high precision requirements after the decimal point or with large fluctuations.</p><blockquote><p>TS_2DIFF and RLE have precision limit for data type of float and double. By default, two decimal places are reserved. GORILLA is recommended.</p></blockquote><ul><li>GORILLA</li></ul><p>GORILLA encoding is lossless. It is more suitable for numerical sequence with similar values and is not recommended for sequence data with large fluctuations.</p><p>Currently, there are two versions of GORILLA encoding implementation, it is recommended to use <code>GORILLA</code> instead of <code>GORILLA_V1</code> (deprecated).</p><p>Usage restrictions: When using GORILLA to encode INT32 data, you need to ensure that there is no data point with the value <code>Integer.MIN_VALUE</code> in the sequence. When using GORILLA to encode INT64 data, you need to ensure that there is no data point with the value <code>Long.MIN_VALUE</code> in the sequence.</p><ul><li>DICTIONARY</li></ul><p>DICTIONARY encoding is lossless. It is suitable for TEXT data with low cardinality (i.e. low number of distinct values). It is not recommended to use it for high-cardinality data.</p><ul><li>ZIGZAG</li></ul><p>ZIGZAG encoding maps signed integers to unsigned integers so that numbers with a small absolute value (for instance, -1) have a small variant encoded value too. It does this in a way that &quot;zig-zags&quot; back and forth through the positive and negative integers.</p><ul><li>CHIMP</li></ul><p>CHIMP encoding is lossless. It is the state-of-the-art compression algorithm for streaming floating point data, providing impressive savings compared to earlier approaches. It is suitable for any numerical sequence with similar values and works best for sequence data without large fluctuations and/or random noise.</p><p>Usage restrictions: When using CHIMP to encode INT32 data, you need to ensure that there is no data point with the value <code>Integer.MIN_VALUE</code> in the sequence. When using CHIMP to encode INT64 data, you need to ensure that there is no data point with the value <code>Long.MIN_VALUE</code> in the sequence.</p><ul><li>SPRINTZ</li></ul><p>SPRINTZ coding is a type of lossless data compression technique that involves predicting the original time series data, applying Zigzag encoding, bit-packing encoding, and run-length encoding. SPRINTZ encoding is effective for time series data with small absolute differences between values. However, it may not be as effective for time series data with large differences between values, indicating large fluctuation.</p><ul><li>RLBE</li></ul><p>RLBE is a lossless encoding that combines the ideas of differential encoding, bit-packing encoding, run-length encoding, Fibonacci encoding and concatenation. RLBE encoding is suitable for time series data with increasing and small increment value, and is not suitable for time series data with large fluctuation.</p><h3 id="correspondence-between-data-type-and-encoding" tabindex="-1"><a class="header-anchor" href="#correspondence-between-data-type-and-encoding" aria-hidden="true">#</a> Correspondence between data type and encoding</h3><p>The five encodings described in the previous sections are applicable to different data types. If the correspondence is wrong, the time series cannot be created correctly.</p><p>The correspondence between the data type and its supported encodings is summarized in the Table below.</p><table><thead><tr><th style="text-align:center;">Data Type</th><th style="text-align:center;">Supported Encoding</th></tr></thead><tbody><tr><td style="text-align:center;">BOOLEAN</td><td style="text-align:center;">PLAIN, RLE</td></tr><tr><td style="text-align:center;">INT32</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, ZIGZAG, CHIMP, SPRINTZ, RLBE</td></tr><tr><td style="text-align:center;">INT64</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, ZIGZAG, CHIMP, SPRINTZ, RLBE</td></tr><tr><td style="text-align:center;">FLOAT</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, CHIMP, SPRINTZ, RLBE</td></tr><tr><td style="text-align:center;">DOUBLE</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA, CHIMP, SPRINTZ, RLBE</td></tr><tr><td style="text-align:center;">TEXT</td><td style="text-align:center;">PLAIN, DICTIONARY</td></tr></tbody></table><p>When the data type specified by the user does not correspond to the encoding method, the system will prompt an error.</p><p>As shown below, the second-order difference encoding does not support the Boolean type:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF
Msg: 507: encoding TS_2DIFF does not support BOOLEAN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compression" tabindex="-1"><a class="header-anchor" href="#compression" aria-hidden="true">#</a> Compression</h2><p>When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually available only for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.</p><h3 id="basic-compression-methods" tabindex="-1"><a class="header-anchor" href="#basic-compression-methods" aria-hidden="true">#</a> Basic Compression Methods</h3><p>IoTDB allows you to specify the compression method of the column when creating a time series, and supports the following compression methods:</p><ul><li><p>UNCOMPRESSED</p></li><li><p>SNAPPY</p></li><li><p>LZ4</p></li><li><p>GZIP</p></li><li><p>ZSTD</p></li><li><p>LZMA2</p></li></ul>`,38),p=e("h3",{id:"compression-ratio-statistics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compression-ratio-statistics","aria-hidden":"true"},"#"),t(" Compression Ratio Statistics")],-1),m=e("p",{memtable_flush_time:""},"Compression ratio statistics file: data/system/compression_ratio/Ratio-{ratio_sum}-",-1),g=e("ul",null,[e("li",null,"ratio_sum: sum of memtable compression ratios"),e("li",null,"memtable_flush_time: memtable flush times")],-1),f=e("p",null,[t("The average compression ratio can be calculated by "),e("code",null,"ratio_sum / memtable_flush_time")],-1);function I(y,b){const i=o("RouterLink");return s(),a("div",null,[r(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),u,e("p",null,[t("The specified syntax for compression is detailed in "),d(i,{to:"/UserGuide/V1.2.x/Reference/SQL-Reference.html"},{default:c(()=>[t("Create Timeseries Statement")]),_:1}),t(".")]),p,m,g,f])}const w=n(h,[["render",I],["__file","Encoding-and-Compression.html.vue"]]);export{w as default};
