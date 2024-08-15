import{_ as a,r as i,o as n,c as d,b as t,d as e,a as s,w as r,e as o}from"./app-CHHFxD1F.js";const g={},c=o(`<h2 id="自动创建元数据" tabindex="-1"><a class="header-anchor" href="#自动创建元数据"><span>自动创建元数据</span></a></h2><p>自动创建元数据指的是根据写入数据的特征自动创建出用户未定义的时间序列，<br> 这既能解决海量序列场景下设备及测点难以提前预测与建模的难题，又能为用户提供开箱即用的写入体验。</p><h3 id="自动创建-database" tabindex="-1"><a class="header-anchor" href="#自动创建-database"><span>自动创建 database</span></a></h3><ul><li>enable_auto_create_schema</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">enable_auto_create_schema</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">是否开启自动创建元数据功能</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">boolean</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>default_storage_group_level</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">default_storage_group_level</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">指定 database 在时间序列所处的层级，默认为第 1 层（root为第 0 层）</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">int</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">1</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">仅允许在第一次启动服务前修改</td></tr></tbody></table><p>以下图为例：</p><ul><li><p>当 default_storage_group_level=1 时，将使用 root.turbine1 和 root.turbine2 作为 database。</p></li><li><p>当 default_storage_group_level=2 时，将使用 root.turbine1.d1、root.turbine1.d2、root.turbine2.d1 和 root.turbine2.d2 作为 database。</p></li></ul><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Auto-Create-MetaData/auto_create_sg_example.png" alt="auto create database example"><h3 id="自动创建序列的元数据-前端指定数据类型" tabindex="-1"><a class="header-anchor" href="#自动创建序列的元数据-前端指定数据类型"><span>自动创建序列的元数据（前端指定数据类型）</span></a></h3><ul><li><p>用户在写入时精确指定数据类型：</p><ul><li>Session中的insertTablet接口。</li><li>Session中带有TSDataType的insert接口。<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public void insertRecord(String deviceId, long time, List&lt;String&gt; measurements, List&lt;TSDataType&gt; types, Object... values);
public void insertRecords(List&lt;String&gt; deviceIds, List&lt;Long&gt; times, List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;TSDataType&gt;&gt; typesList, List&lt;List&lt;Object&gt;&gt; valuesList);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>......</li></ul></li><li><p>插入数据的同时自动创建序列，效率较高。</p></li></ul><h3 id="自动创建序列的元数据-类型推断" tabindex="-1"><a class="header-anchor" href="#自动创建序列的元数据-类型推断"><span>自动创建序列的元数据（类型推断）</span></a></h3><ul><li><p>在写入时直接传入字符串，数据库推断数据类型：</p><ul><li>CLI的insert命令。</li><li>Session中不带有TSDataType的insert接口。<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public void insertRecord(String deviceId, long time, List&lt;String&gt; measurements, List&lt;TSDataType&gt; types, List&lt;Object&gt; values);
public void insertRecords(List&lt;String&gt; deviceIds, List&lt;Long&gt; times, List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;String&gt;&gt; valuesList);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>......</li></ul></li><li><p>由于类型推断会增加写入时间，所以通过类型推断自动创建序列元数据的效率要低于通过前端指定数据类型自动创建序列元数据，建议用户在可行时先选用前端指定数据类型的方式自动创建序列的元数据。</p></li></ul><h4 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断"><span>类型推断</span></a></h4><table><thead><tr><th style="text-align:center;">数据(String)</th><th style="text-align:left;">字符串格式</th><th style="text-align:left;">iotdb-datanode.properties配置项</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">true</td><td style="text-align:left;">boolean</td><td style="text-align:left;">boolean_string_infer_type</td><td style="text-align:left;">BOOLEAN</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:left;">integer</td><td style="text-align:left;">integer_string_infer_type</td><td style="text-align:left;">FLOAT</td></tr><tr><td style="text-align:center;">17000000（大于 2^24 的整数）</td><td style="text-align:left;">integer</td><td style="text-align:left;">long_string_infer_type</td><td style="text-align:left;">DOUBLE</td></tr><tr><td style="text-align:center;">1.2</td><td style="text-align:left;">floating</td><td style="text-align:left;">floating_string_infer_type</td><td style="text-align:left;">FLOAT</td></tr><tr><td style="text-align:center;">NaN</td><td style="text-align:left;">nan</td><td style="text-align:left;">nan_string_infer_type</td><td style="text-align:left;">DOUBLE</td></tr><tr><td style="text-align:center;">&#39;I am text&#39;</td><td style="text-align:left;">text</td><td style="text-align:left;">无</td><td style="text-align:left;">无</td></tr></tbody></table><ul><li><p>可配置的数据类型包括：BOOLEAN, INT32, INT64, FLOAT, DOUBLE, TEXT</p></li><li><p>long_string_infer_type 配置项的目的是防止使用 FLOAT 推断 integer_string_infer_type 而造成精度缺失。</p></li></ul><h4 id="编码方式" tabindex="-1"><a class="header-anchor" href="#编码方式"><span>编码方式</span></a></h4><table><thead><tr><th style="text-align:left;">数据类型</th><th style="text-align:left;">iotdb-datanode.properties配置项</th><th style="text-align:left;">默认值</th></tr></thead><tbody><tr><td style="text-align:left;">BOOLEAN</td><td style="text-align:left;">default_boolean_encoding</td><td style="text-align:left;">RLE</td></tr><tr><td style="text-align:left;">INT32</td><td style="text-align:left;">default_int32_encoding</td><td style="text-align:left;">RLE</td></tr><tr><td style="text-align:left;">INT64</td><td style="text-align:left;">default_int64_encoding</td><td style="text-align:left;">RLE</td></tr><tr><td style="text-align:left;">FLOAT</td><td style="text-align:left;">default_float_encoding</td><td style="text-align:left;">GORILLA</td></tr><tr><td style="text-align:left;">DOUBLE</td><td style="text-align:left;">default_double_encoding</td><td style="text-align:left;">GORILLA</td></tr><tr><td style="text-align:left;">TEXT</td><td style="text-align:left;">default_text_encoding</td><td style="text-align:left;">PLAIN</td></tr></tbody></table>`,19),p=t("li",null,[t("p",null,"可配置的编码方式包括：PLAIN, RLE, TS_2DIFF, GORILLA, DICTIONARY")],-1);function u(h,x){const l=i("RouteLink");return n(),d("div",null,[c,t("ul",null,[p,t("li",null,[t("p",null,[e("数据类型与编码方式的对应关系详见 "),s(l,{to:"/zh/UserGuide/V1.1.x/Data-Concept/Encoding.html"},{default:r(()=>[e("编码方式")]),_:1}),e("。")])])])])}const f=a(g,[["render",u],["__file","Auto-Create-MetaData.html.vue"]]),_=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operate-Metadata/Auto-Create-MetaData.html","title":"","lang":"zh-CN","frontmatter":{"description":"自动创建元数据 自动创建元数据指的是根据写入数据的特征自动创建出用户未定义的时间序列， 这既能解决海量序列场景下设备及测点难以提前预测与建模的难题，又能为用户提供开箱即用的写入体验。 自动创建 database enable_auto_create_schema default_storage_group_level 以下图为例： 当 default_...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operate-Metadata/Auto-Create-MetaData.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operate-Metadata/Auto-Create-MetaData.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"自动创建元数据 自动创建元数据指的是根据写入数据的特征自动创建出用户未定义的时间序列， 这既能解决海量序列场景下设备及测点难以提前预测与建模的难题，又能为用户提供开箱即用的写入体验。 自动创建 database enable_auto_create_schema default_storage_group_level 以下图为例： 当 default_..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"自动创建元数据","slug":"自动创建元数据","link":"#自动创建元数据","children":[{"level":3,"title":"自动创建 database","slug":"自动创建-database","link":"#自动创建-database","children":[]},{"level":3,"title":"自动创建序列的元数据（前端指定数据类型）","slug":"自动创建序列的元数据-前端指定数据类型","link":"#自动创建序列的元数据-前端指定数据类型","children":[]},{"level":3,"title":"自动创建序列的元数据（类型推断）","slug":"自动创建序列的元数据-类型推断","link":"#自动创建序列的元数据-类型推断","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.78,"words":835},"filePathRelative":"zh/UserGuide/V1.1.x/Operate-Metadata/Auto-Create-MetaData.md","localizedDate":"2023年7月10日","autoDesc":true}');export{f as comp,_ as data};
