import{_ as i,r as l,o as n,c as d,b as t,d as e,a as s,w as r,e as o}from"./app-BZ7vU6A9.js";const c={},g=o(`<h1 id="auto-create-metadata" tabindex="-1"><a class="header-anchor" href="#auto-create-metadata"><span>Auto create metadata</span></a></h1><p>Automatically creating schema means creating time series based on the characteristics of written data in case time series haven&#39;t defined by users themselves.<br> This function can not only solve the problem that entities and measurements are difficult to predict and model in advance under massive time series scenarios,<br> but also provide users with an out-of-the-box writing experience.</p><h2 id="auto-create-database-metadata" tabindex="-1"><a class="header-anchor" href="#auto-create-database-metadata"><span>Auto create database metadata</span></a></h2><ul><li>enable_auto_create_schema</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">enable_auto_create_schema</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">whether creating schema automatically is enabled</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">boolean</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">After restarting system</td></tr></tbody></table><ul><li>default_storage_group_level</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">default_storage_group_level</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Specify which level database is in the time series, the default level is 1 (root is on level 0)</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><p>Illustrated as the following figure:</p><ul><li><p>When default_storage_group_level=1, root.turbine1 and root.turbine2 will be created as database.</p></li><li><p>When default_storage_group_level=2, root.turbine1.d1, root.turbine1.d2, root.turbine2.d1 and root.turbine2.d2 will be created as database.</p></li></ul><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Auto-Create-MetaData/auto_create_sg_example.png?raw=true" alt="auto create database example"><h2 id="auto-create-time-series-metadata-specify-data-type-in-the-frontend" tabindex="-1"><a class="header-anchor" href="#auto-create-time-series-metadata-specify-data-type-in-the-frontend"><span>Auto create time series metadata(specify data type in the frontend)</span></a></h2><ul><li><p>Users should specify data type when writing:</p><ul><li>insertTablet method in Session module.</li><li>insert method using TSDataType in Session module.<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public void insertRecord(String deviceId, long time, List&lt;String&gt; measurements, List&lt;TSDataType&gt; types, Object... values);
public void insertRecords(List&lt;String&gt; deviceIds, List&lt;Long&gt; times, List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;TSDataType&gt;&gt; typesList, List&lt;List&lt;Object&gt;&gt; valuesList);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>......</li></ul></li><li><p>Efficient, time series are auto created when inserting data.</p></li></ul><h2 id="auto-create-time-series-metadata-infer-data-type-in-the-backend" tabindex="-1"><a class="header-anchor" href="#auto-create-time-series-metadata-infer-data-type-in-the-backend"><span>Auto create time series metadata(infer data type in the backend)</span></a></h2><ul><li><p>Just pass string, and the database will infer the data type:</p><ul><li>insert command in CLI module.</li><li>insert method without using TSDataType in Session module.<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public void insertRecord(String deviceId, long time, List&lt;String&gt; measurements, List&lt;TSDataType&gt; types, List&lt;Object&gt; values);
public void insertRecords(List&lt;String&gt; deviceIds, List&lt;Long&gt; times, List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;String&gt;&gt; valuesList);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>......</li></ul></li><li><p>Since type inference will increase the writing time, the efficiency of auto creating time series metadata through type inference is lower than that of auto creating time series metadata through specifying data type. We recommend users choose specifying data type in the frontend when possible.</p></li></ul><h3 id="type-inference" tabindex="-1"><a class="header-anchor" href="#type-inference"><span>Type inference</span></a></h3><table><thead><tr><th style="text-align:center;">Data(String Format)</th><th style="text-align:left;">Format Type</th><th style="text-align:left;">iotdb-datanode.properties</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:center;">true</td><td style="text-align:left;">boolean</td><td style="text-align:left;">boolean_string_infer_type</td><td style="text-align:left;">BOOLEAN</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:left;">integer</td><td style="text-align:left;">integer_string_infer_type</td><td style="text-align:left;">FLOAT</td></tr><tr><td style="text-align:center;">17000000（integer &gt; 2^24）</td><td style="text-align:left;">integer</td><td style="text-align:left;">long_string_infer_type</td><td style="text-align:left;">DOUBLE</td></tr><tr><td style="text-align:center;">1.2</td><td style="text-align:left;">floating</td><td style="text-align:left;">floating_string_infer_type</td><td style="text-align:left;">FLOAT</td></tr><tr><td style="text-align:center;">NaN</td><td style="text-align:left;">nan</td><td style="text-align:left;">nan_string_infer_type</td><td style="text-align:left;">DOUBLE</td></tr><tr><td style="text-align:center;">&#39;I am text&#39;</td><td style="text-align:left;">text</td><td style="text-align:left;">x</td><td style="text-align:left;">x</td></tr></tbody></table><ul><li><p>Data types can be configured as BOOLEAN, INT32, INT64, FLOAT, DOUBLE, TEXT.</p></li><li><p>long_string_infer_type is used to avoid precision loss caused by using integer_string_infer_type=FLOAT to infer num &gt; 2^24.</p></li></ul><h3 id="encoding-type" tabindex="-1"><a class="header-anchor" href="#encoding-type"><span>Encoding Type</span></a></h3><table><thead><tr><th style="text-align:left;">Data Type</th><th style="text-align:left;">iotdb-datanode.properties</th><th style="text-align:left;">Default</th></tr></thead><tbody><tr><td style="text-align:left;">BOOLEAN</td><td style="text-align:left;">default_boolean_encoding</td><td style="text-align:left;">RLE</td></tr><tr><td style="text-align:left;">INT32</td><td style="text-align:left;">default_int32_encoding</td><td style="text-align:left;">RLE</td></tr><tr><td style="text-align:left;">INT64</td><td style="text-align:left;">default_int64_encoding</td><td style="text-align:left;">RLE</td></tr><tr><td style="text-align:left;">FLOAT</td><td style="text-align:left;">default_float_encoding</td><td style="text-align:left;">GORILLA</td></tr><tr><td style="text-align:left;">DOUBLE</td><td style="text-align:left;">default_double_encoding</td><td style="text-align:left;">GORILLA</td></tr><tr><td style="text-align:left;">TEXT</td><td style="text-align:left;">default_text_encoding</td><td style="text-align:left;">PLAIN</td></tr></tbody></table>`,19),u=t("li",null,[t("p",null,"Encoding types can be configured as PLAIN, RLE, TS_2DIFF, GORILLA, DICTIONARY.")],-1);function p(h,y){const a=l("RouteLink");return n(),d("div",null,[g,t("ul",null,[u,t("li",null,[t("p",null,[e("The corresponding relationship between data types and encoding types is detailed in "),s(a,{to:"/UserGuide/V1.1.x/Data-Concept/Encoding.html"},{default:r(()=>[e("Encoding")]),_:1}),e(".")])])])])}const f=i(c,[["render",p],["__file","Auto-Create-MetaData.html.vue"]]),x=JSON.parse(`{"path":"/UserGuide/V1.1.x/Operate-Metadata/Auto-Create-MetaData.html","title":"Auto create metadata","lang":"en-US","frontmatter":{"description":"Auto create metadata Automatically creating schema means creating time series based on the characteristics of written data in case time series haven't defined by users themselve...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operate-Metadata/Auto-Create-MetaData.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operate-Metadata/Auto-Create-MetaData.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Auto create metadata"}],["meta",{"property":"og:description","content":"Auto create metadata Automatically creating schema means creating time series based on the characteristics of written data in case time series haven't defined by users themselve..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Auto create metadata\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Auto create database metadata","slug":"auto-create-database-metadata","link":"#auto-create-database-metadata","children":[]},{"level":2,"title":"Auto create time series metadata(specify data type in the frontend)","slug":"auto-create-time-series-metadata-specify-data-type-in-the-frontend","link":"#auto-create-time-series-metadata-specify-data-type-in-the-frontend","children":[]},{"level":2,"title":"Auto create time series metadata(infer data type in the backend)","slug":"auto-create-time-series-metadata-infer-data-type-in-the-backend","link":"#auto-create-time-series-metadata-infer-data-type-in-the-backend","children":[{"level":3,"title":"Type inference","slug":"type-inference","link":"#type-inference","children":[]},{"level":3,"title":"Encoding Type","slug":"encoding-type","link":"#encoding-type","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.15,"words":646},"filePathRelative":"UserGuide/V1.1.x/Operate-Metadata/Auto-Create-MetaData.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{f as comp,x as data};
