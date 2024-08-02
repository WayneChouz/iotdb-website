import{_ as i,r as s,o as n,c as r,b as e,d as t,a,w as l}from"./app-CVD6HEOl.js";const c={},d=e("h1",{id:"批量数据导入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#批量数据导入"},[e("span",null,"批量数据导入")])],-1),h=e("p",null,"针对于不同场景，IoTDB 为用户提供多种批量导入数据的操作方式，本章节向大家介绍最为常用的两种方式为 CSV文本形式的导入 和 TsFile文件形式的导入。",-1),p=e("h2",{id:"tsfile批量导入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tsfile批量导入"},[e("span",null,"TsFile批量导入")])],-1),T=e("h2",{id:"csv批量导入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#csv批量导入"},[e("span",null,"CSV批量导入")])],-1);function m(u,_){const o=s("RouteLink");return n(),r("div",null,[d,h,p,e("p",null,[t("TsFile 是在 IoTDB 中使用的时间序列的文件格式，您可以通过CLI等工具直接将存有时间序列的一个或多个 TsFile 文件导入到另外一个正在运行的IoTDB实例中。具体操作方式请参考"),a(o,{to:"/zh/UserGuide/V1.0.x/Maintenance-Tools/Load-Tsfile.html"},{default:l(()=>[t("TsFile 导入工具")]),_:1}),t("，"),a(o,{to:"/zh/UserGuide/V1.0.x/Maintenance-Tools/TsFile-Load-Export-Tool.html"},{default:l(()=>[t("TsFile 导出工具")]),_:1}),t("。")]),T,e("p",null,[t("CSV 是以纯文本形式存储表格数据，您可以在CSV文件中写入多条格式化的数据，并批量的将这些数据导入到 IoTDB 中，在导入数据之前，建议在IoTDB中创建好对应的元数据信息。如果忘记创建元数据也不要担心，IoTDB 可以自动将CSV中数据推断为其对应的数据类型，前提是你每一列的数据类型必须唯一。除单个文件外，此工具还支持以文件夹的形式导入多个 CSV 文件，并且支持设置如时间精度等优化参数。具体操作方式请参考 "),a(o,{to:"/zh/UserGuide/V1.0.x/Maintenance-Tools/CSV-Tool.html"},{default:l(()=>[t("CSV 导入导出工具")]),_:1}),t("。")])])}const V=i(c,[["render",m],["__file","Batch-Load-Tool.html.vue"]]),B=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Write-Data/Batch-Load-Tool.html","title":"批量数据导入","lang":"zh-CN","frontmatter":{"description":"批量数据导入 针对于不同场景，IoTDB 为用户提供多种批量导入数据的操作方式，本章节向大家介绍最为常用的两种方式为 CSV文本形式的导入 和 TsFile文件形式的导入。 TsFile批量导入 TsFile 是在 IoTDB 中使用的时间序列的文件格式，您可以通过CLI等工具直接将存有时间序列的一个或多个 TsFile 文件导入到另外一个正在运行的I...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Write-Data/Batch-Load-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Write-Data/Batch-Load-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"批量数据导入"}],["meta",{"property":"og:description","content":"批量数据导入 针对于不同场景，IoTDB 为用户提供多种批量导入数据的操作方式，本章节向大家介绍最为常用的两种方式为 CSV文本形式的导入 和 TsFile文件形式的导入。 TsFile批量导入 TsFile 是在 IoTDB 中使用的时间序列的文件格式，您可以通过CLI等工具直接将存有时间序列的一个或多个 TsFile 文件导入到另外一个正在运行的I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"批量数据导入\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"TsFile批量导入","slug":"tsfile批量导入","link":"#tsfile批量导入","children":[]},{"level":2,"title":"CSV批量导入","slug":"csv批量导入","link":"#csv批量导入","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.53,"words":459},"filePathRelative":"zh/UserGuide/V1.0.x/Write-Data/Batch-Load-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{V as comp,B as data};
