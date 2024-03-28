const e=JSON.parse('{"key":"v-12f23aa3","path":"/zh/UserGuide/latest/stage/Operators-Functions/String.html","title":"字符串处理","lang":"zh-CN","frontmatter":{"description":"STRING_CONTAINS 函数简介 本函数判断字符串中是否存在子串 s 函数名: STRING_CONTAINS 输入序列: 仅支持单个输入序列，类型为 TEXT。 参数: s: 待搜寻的字符串。; 输出序列: 输出单个序列，类型为 BOOLEAN。 使用示例 结果： STRING_MATCHES 函数简介 本函数判断字符串是否能够被正则表达式r...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/stage/Operators-Functions/String.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/stage/Operators-Functions/String.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"字符串处理"}],["meta",{"property":"og:description","content":"STRING_CONTAINS 函数简介 本函数判断字符串中是否存在子串 s 函数名: STRING_CONTAINS 输入序列: 仅支持单个输入序列，类型为 TEXT。 参数: s: 待搜寻的字符串。; 输出序列: 输出单个序列，类型为 BOOLEAN。 使用示例 结果： STRING_MATCHES 函数简介 本函数判断字符串是否能够被正则表达式r..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-28T06:33:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-28T06:33:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字符串处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-28T06:33:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"STRING_CONTAINS","slug":"string-contains","link":"#string-contains","children":[{"level":3,"title":"函数简介","slug":"函数简介","link":"#函数简介","children":[]},{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]}]},{"level":2,"title":"STRING_MATCHES","slug":"string-matches","link":"#string-matches","children":[{"level":3,"title":"函数简介","slug":"函数简介-1","link":"#函数简介-1","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-1","link":"#使用示例-1","children":[]}]},{"level":2,"title":"Length","slug":"length","link":"#length","children":[{"level":3,"title":"函数简介","slug":"函数简介-2","link":"#函数简介-2","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-2","link":"#使用示例-2","children":[]}]},{"level":2,"title":"Locate","slug":"locate","link":"#locate","children":[{"level":3,"title":"函数简介","slug":"函数简介-3","link":"#函数简介-3","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-3","link":"#使用示例-3","children":[]}]},{"level":2,"title":"StartsWith","slug":"startswith","link":"#startswith","children":[{"level":3,"title":"函数简介","slug":"函数简介-4","link":"#函数简介-4","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-4","link":"#使用示例-4","children":[]}]},{"level":2,"title":"EndsWith","slug":"endswith","link":"#endswith","children":[{"level":3,"title":"函数简介","slug":"函数简介-5","link":"#函数简介-5","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-5","link":"#使用示例-5","children":[]}]},{"level":2,"title":"Concat","slug":"concat","link":"#concat","children":[{"level":3,"title":"函数简介","slug":"函数简介-6","link":"#函数简介-6","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-6","link":"#使用示例-6","children":[]}]},{"level":2,"title":"Substring","slug":"substring","link":"#substring","children":[{"level":3,"title":"函数简介","slug":"函数简介-7","link":"#函数简介-7","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-7","link":"#使用示例-7","children":[]}]},{"level":2,"title":"Replace","slug":"replace","link":"#replace","children":[{"level":3,"title":"函数简介","slug":"函数简介-8","link":"#函数简介-8","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-8","link":"#使用示例-8","children":[]}]},{"level":2,"title":"Upper","slug":"upper","link":"#upper","children":[{"level":3,"title":"函数简介","slug":"函数简介-9","link":"#函数简介-9","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-9","link":"#使用示例-9","children":[]}]},{"level":2,"title":"Lower","slug":"lower","link":"#lower","children":[{"level":3,"title":"函数简介","slug":"函数简介-10","link":"#函数简介-10","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-10","link":"#使用示例-10","children":[]}]},{"level":2,"title":"Trim","slug":"trim","link":"#trim","children":[{"level":3,"title":"函数简介","slug":"函数简介-11","link":"#函数简介-11","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-11","link":"#使用示例-11","children":[]}]},{"level":2,"title":"StrCmp","slug":"strcmp","link":"#strcmp","children":[{"level":3,"title":"函数简介","slug":"函数简介-12","link":"#函数简介-12","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-12","link":"#使用示例-12","children":[]}]},{"level":2,"title":"StrReplace","slug":"strreplace","link":"#strreplace","children":[{"level":3,"title":"函数简介","slug":"函数简介-13","link":"#函数简介-13","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-13","link":"#使用示例-13","children":[]}]},{"level":2,"title":"RegexMatch","slug":"regexmatch","link":"#regexmatch","children":[{"level":3,"title":"函数简介","slug":"函数简介-14","link":"#函数简介-14","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-14","link":"#使用示例-14","children":[]}]},{"level":2,"title":"RegexReplace","slug":"regexreplace","link":"#regexreplace","children":[{"level":3,"title":"函数简介","slug":"函数简介-15","link":"#函数简介-15","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-15","link":"#使用示例-15","children":[]}]},{"level":2,"title":"RegexSplit","slug":"regexsplit","link":"#regexsplit","children":[{"level":3,"title":"函数简介","slug":"函数简介-16","link":"#函数简介-16","children":[]},{"level":3,"title":"使用示例","slug":"使用示例-16","link":"#使用示例-16","children":[]}]}],"git":{"createdTime":1711607596000,"updatedTime":1711607596000,"contributors":[{"name":"Haonan","email":"hhaonan@outlook.com","commits":1}]},"readingTime":{"minutes":13.19,"words":3958},"filePathRelative":"zh/UserGuide/latest/stage/Operators-Functions/String.md","localizedDate":"2024年3月28日","autoDesc":true}');export{e as data};
