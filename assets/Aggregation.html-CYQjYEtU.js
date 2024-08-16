import{_ as t,o as e,c as d,e as r}from"./app-CIPkfidu.js";const o={},a=r('<h1 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数"><span>聚合函数</span></a></h1><p>聚合函数是多对一函数。它们对一组值进行聚合计算，得到单个聚合结果。</p><p>除了 <code>COUNT()</code> 之外，其他所有聚合函数都忽略空值，并在没有输入行或所有值为空时返回空值。 例如，<code>SUM()</code> 返回 null 而不是零，而 <code>AVG()</code> 在计数中不包括 null 值。</p><p>IoTDB 支持的聚合函数如下：</p><table><thead><tr><th>函数名</th><th>功能描述</th><th>允许的输入类型</th><th>输出类型</th></tr></thead><tbody><tr><td>SUM</td><td>求和。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>DOUBLE</td></tr><tr><td>COUNT</td><td>计算数据点数。</td><td>所有类型</td><td>INT</td></tr><tr><td>AVG</td><td>求平均值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>DOUBLE</td></tr><tr><td>EXTREME</td><td>求具有最大绝对值的值。如果正值和负值的最大绝对值相等，则返回正值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>与输入类型一致</td></tr><tr><td>MAX_VALUE</td><td>求最大值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>与输入类型一致</td></tr><tr><td>MIN_VALUE</td><td>求最小值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>与输入类型一致</td></tr><tr><td>FIRST_VALUE</td><td>求时间戳最小的值。</td><td>所有类型</td><td>与输入类型一致</td></tr><tr><td>LAST_VALUE</td><td>求时间戳最大的值。</td><td>所有类型</td><td>与输入类型一致</td></tr><tr><td>MAX_TIME</td><td>求最大时间戳。</td><td>所有类型</td><td>Timestamp</td></tr><tr><td>MIN_TIME</td><td>求最小时间戳。</td><td>所有类型</td><td>Timestamp</td></tr></tbody></table>',5),n=[a];function i(c,p){return e(),d("div",null,n)}const l=t(o,[["render",i],["__file","Aggregation.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Operators-Functions/Aggregation.html","title":"聚合函数","lang":"zh-CN","frontmatter":{"description":"聚合函数 聚合函数是多对一函数。它们对一组值进行聚合计算，得到单个聚合结果。 除了 COUNT() 之外，其他所有聚合函数都忽略空值，并在没有输入行或所有值为空时返回空值。 例如，SUM() 返回 null 而不是零，而 AVG() 在计数中不包括 null 值。 IoTDB 支持的聚合函数如下：","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Operators-Functions/Aggregation.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operators-Functions/Aggregation.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"聚合函数"}],["meta",{"property":"og:description","content":"聚合函数 聚合函数是多对一函数。它们对一组值进行聚合计算，得到单个聚合结果。 除了 COUNT() 之外，其他所有聚合函数都忽略空值，并在没有输入行或所有值为空时返回空值。 例如，SUM() 返回 null 而不是零，而 AVG() 在计数中不包括 null 值。 IoTDB 支持的聚合函数如下："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"聚合函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.34,"words":401},"filePathRelative":"zh/UserGuide/V1.0.x/Operators-Functions/Aggregation.md","localizedDate":"2023年7月10日","autoDesc":true}');export{l as comp,h as data};
