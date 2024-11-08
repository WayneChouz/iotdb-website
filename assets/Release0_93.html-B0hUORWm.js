import{_ as t,c as a,b as o,o as n}from"./app-ED5DzO24.js";const i={};function r(s,e){return n(),a("div",null,e[0]||(e[0]=[o('<h1 id="some-notes-on-release-0-9-3-and-upcoming-0-10-0" tabindex="-1"><a class="header-anchor" href="#some-notes-on-release-0-9-3-and-upcoming-0-10-0"><span>Some Notes on Release 0.9.3 and upcoming 0.10.0</span></a></h1><p><em>Note:</em> This Blog Post was initially written by <a href="mailto:qjl16@mails.tsinghua.edu.cn" target="_blank" rel="noopener noreferrer">Jialin Qiao</a> and has been published here: <a href="https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0-XekXbA" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0-XekXbA</a>.<br> This Text was translated with <a href="www.DeepL.com/Translator">DeepL</a> and slightly corrected by <a href="mailto:jfeinauer@pragmaticminds.de" target="_blank" rel="noopener noreferrer">Julian Feinauer</a>.</p><h2 id="notes-on-0-9-3" tabindex="-1"><a class="header-anchor" href="#notes-on-0-9-3"><span>Notes on 0.9.3</span></a></h2><p>It&#39;s been a long time since I&#39;ve written an article, I&#39;ve been working on development and took advantage of this release to write a bit now. The Release 0.9.3 is a minor release with no changes in file structure or RPC and can be upgraded painlessly. In fact, shortly after 0.9.2 was released, a serious bug was found, so the IoTDB Community decided to Release 0.9.3 shortly after.</p><p>Let me say a few general things.</p><p>The official website of IoTDB has gotten a big upgrade in the last few months, with a much more beautiful interface than before! You can have a look at: <a href="http://iotdb.apache.org/" target="_blank" rel="noopener noreferrer">http://iotdb.apache.org/</a>.</p><p>The official website has also added Chinese and English design documents, although not yet complete, but basically all the big modules are documented in both languages and the IoTDB Community highly welcomes suggestions how to improve or contributions that do so:</p><p>English: <a href="http://iotdb.apache.org/SystemDesign/Architecture/Architecture.html" target="_blank" rel="noopener noreferrer">http://iotdb.apache.org/SystemDesign/Architecture/Architecture.html</a><br> Chinese: <a href="http://iotdb.apache.org/zh/SystemDesign/Architecture/Architecture.html" target="_blank" rel="noopener noreferrer">http://iotdb.apache.org/zh/SystemDesign/Architecture/Architecture.html</a></p><p>The Release 0.9.3 is a minor/bugfix release in the 0.9 release series that mainly fixes one serious bug: if the wrong metadata operation is performed, such as deleting a non-existent database, the metadata is empty after server restart. This is caused by the metadata module beeing nulled when the metadata log was redone. The fix is to skip the wrong metadata log. In the preparation of version 0.10, we take an execution before logging approach and do not log errors again.</p><p>The <a href="https://github.com/apache/iotdb/issues" target="_blank" rel="noopener noreferrer">issue module</a> is open on Github, so you can ask questions about bugs or new requirements, and we will answer them promptly.</p><h2 id="fixes-in-0-9-3" tabindex="-1"><a class="header-anchor" href="#fixes-in-0-9-3"><span>Fixes in 0.9.3</span></a></h2><ul><li>[IOTDB-531] Fix the bug that JDBC UTL does not support domain names</li><li>[IOTDB-563] Fix pentaho cannot be downloaded</li><li>[IOTDB-608] Error metadata log skipped on reboot</li><li>[IOTDB-634] Fixes data merge issues when setting the underlying file system to HDFS</li><li>[IOTDB-636] Fix Grafana connector not using correct time granularity</li><li>[IOTDB-528] Adding a downsampling method for the Grafana connector</li><li>[IOTDB-635] When Grafana uses the wrong aggregation for a data type, modify to the generic aggregation function last retry</li><li>Remove the official website about loading external TsFile documentation (this feature is version 0.10, not yet released)</li></ul><p>To download and use the new Version of IoTDB go to: <a href="https://downloads.apache.org/incubator/iotdb/0.9.3-incubating/apache-iotdb-0.9.3-incubating-bin.zip" target="_blank" rel="noopener noreferrer">https://downloads.apache.org/incubator/iotdb/0.9.3-incubating/apache-iotdb-0.9.3-incubating-bin.zip</a></p><p>User documentation for this release can be found under: <a href="http://iotdb.apache.org/UserGuide/Master/0-Get%20Started/1-QuickStart_apache.html" target="_blank" rel="noopener noreferrer">http://iotdb.apache.org/UserGuide/Master/0-Get Started/1-QuickStart_apache.html</a></p><p>The github repository has a well-established example module that contains sample code for each of the other modules.</p><h2 id="some-previews-about-upcoming-release-0-10-0" tabindex="-1"><a class="header-anchor" href="#some-previews-about-upcoming-release-0-10-0"><span>Some previews About upcoming release 0.10.0</span></a></h2><p>The release manual for version 0.9.3 is shorter because many features and improvements were put into version 0.10.0, including query engine upgrades, TsFile structure upgrades, cache optimization, tags, property management, and more. The file structure of 0.10.0 has been fixed and the upgrade tool is almost complete, 0.10.0 will be released soon.</p>',17)]))}const h=t(i,[["render",r],["__file","Release0_93.html.vue"]]),p=JSON.parse('{"path":"/Blog/Release0_93.html","title":"Some Notes on Release 0.9.3 and upcoming 0.10.0","lang":"en-US","frontmatter":{"description":"Some Notes on Release 0.9.3 and upcoming 0.10.0 Note: This Blog Post was initially written by Jialin Qiao and has been published here: https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/Blog/Release0_93.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Some Notes on Release 0.9.3 and upcoming 0.10.0"}],["meta",{"property":"og:description","content":"Some Notes on Release 0.9.3 and upcoming 0.10.0 Note: This Blog Post was initially written by Jialin Qiao and has been published here: https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-23T07:57:49.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-23T07:57:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Some Notes on Release 0.9.3 and upcoming 0.10.0\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T07:57:49.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Notes on 0.9.3","slug":"notes-on-0-9-3","link":"#notes-on-0-9-3","children":[]},{"level":2,"title":"Fixes in 0.9.3","slug":"fixes-in-0-9-3","link":"#fixes-in-0-9-3","children":[]},{"level":2,"title":"Some previews About upcoming release 0.10.0","slug":"some-previews-about-upcoming-release-0-10-0","link":"#some-previews-about-upcoming-release-0-10-0","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1727078269000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.12,"words":635},"filePathRelative":"Blog/Release0_93.md","localizedDate":"July 10, 2023","autoDesc":true}');export{h as comp,p as data};
