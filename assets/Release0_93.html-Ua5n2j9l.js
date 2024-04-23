import{_ as n,r as i,o as s,c as r,b as e,d as t,a,e as l}from"./app-DrPcRZG6.js";const h={},c=e("h1",{id:"some-notes-on-release-0-9-3-and-upcoming-0-10-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#some-notes-on-release-0-9-3-and-upcoming-0-10-0"},[e("span",null,"Some Notes on Release 0.9.3 and upcoming 0.10.0")])],-1),d=e("em",null,"Note:",-1),p=e("a",{href:"mailto:qjl16@mails.tsinghua.edu.cn"},"Jialin Qiao",-1),u={href:"https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0-XekXbA",target:"_blank",rel:"noopener noreferrer"},m=e("br",null,null,-1),g=e("a",{href:"www.DeepL.com/Translator"},"DeepL",-1),b=e("a",{href:"mailto:jfeinauer@pragmaticminds.de"},"Julian Feinauer",-1),f=e("h2",{id:"notes-on-0-9-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-on-0-9-3"},[e("span",null,"Notes on 0.9.3")])],-1),_=e("p",null,"It's been a long time since I've written an article, I've been working on development and took advantage of this release to write a bit now. The Release 0.9.3 is a minor release with no changes in file structure or RPC and can be upgraded painlessly. In fact, shortly after 0.9.2 was released, a serious bug was found, so the IoTDB Community decided to Release 0.9.3 shortly after.",-1),w=e("p",null,"Let me say a few general things.",-1),y={href:"http://iotdb.apache.org/",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"The official website has also added Chinese and English design documents, although not yet complete, but basically all the big modules are documented in both languages and the IoTDB Community highly welcomes suggestions how to improve or contributions that do so:",-1),x={href:"http://iotdb.apache.org/SystemDesign/Architecture/Architecture.html",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),v={href:"http://iotdb.apache.org/zh/SystemDesign/Architecture/Architecture.html",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,"The Release 0.9.3 is a minor/bugfix release in the 0.9 release series that mainly fixes one serious bug: if the wrong metadata operation is performed, such as deleting a non-existent database, the metadata is empty after server restart. This is caused by the metadata module beeing nulled when the metadata log was redone. The fix is to skip the wrong metadata log. In the preparation of version 0.10, we take an execution before logging approach and do not log errors again.",-1),R={href:"https://github.com/apache/iotdb/issues",target:"_blank",rel:"noopener noreferrer"},B=l('<h2 id="fixes-in-0-9-3" tabindex="-1"><a class="header-anchor" href="#fixes-in-0-9-3"><span>Fixes in 0.9.3</span></a></h2><ul><li>[IOTDB-531] Fix the bug that JDBC UTL does not support domain names</li><li>[IOTDB-563] Fix pentaho cannot be downloaded</li><li>[IOTDB-608] Error metadata log skipped on reboot</li><li>[IOTDB-634] Fixes data merge issues when setting the underlying file system to HDFS</li><li>[IOTDB-636] Fix Grafana connector not using correct time granularity</li><li>[IOTDB-528] Adding a downsampling method for the Grafana connector</li><li>[IOTDB-635] When Grafana uses the wrong aggregation for a data type, modify to the generic aggregation function last retry</li><li>Remove the official website about loading external TsFile documentation (this feature is version 0.10, not yet released)</li></ul>',2),S={href:"https://downloads.apache.org/incubator/iotdb/0.9.3-incubating/apache-iotdb-0.9.3-incubating-bin.zip",target:"_blank",rel:"noopener noreferrer"},I={href:"http://iotdb.apache.org/UserGuide/Master/0-Get%20Started/1-QuickStart.html",target:"_blank",rel:"noopener noreferrer"},U=e("p",null,"The github repository has a well-established example module that contains sample code for each of the other modules.",-1),q=e("h2",{id:"some-previews-about-upcoming-release-0-10-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#some-previews-about-upcoming-release-0-10-0"},[e("span",null,"Some previews About upcoming release 0.10.0")])],-1),N=e("p",null,"The release manual for version 0.9.3 is shorter because many features and improvements were put into version 0.10.0, including query engine upgrades, TsFile structure upgrades, cache optimization, tags, property management, and more. The file structure of 0.10.0 has been fixed and the upgrade tool is almost complete, 0.10.0 will be released soon.",-1);function A(F,Q){const o=i("ExternalLinkIcon");return s(),r("div",null,[c,e("p",null,[d,t(" This Blog Post was initially written by "),p,t(" and has been published here: "),e("a",u,[t("https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0-XekXbA"),a(o)]),t("."),m,t(" This Text was translated with "),g,t(" and slightly corrected by "),b,t(".")]),f,_,w,e("p",null,[t("The official website of IoTDB has gotten a big upgrade in the last few months, with a much more beautiful interface than before! You can have a look at: "),e("a",y,[t("http://iotdb.apache.org/"),a(o)]),t(".")]),T,e("p",null,[t("English: "),e("a",x,[t("http://iotdb.apache.org/SystemDesign/Architecture/Architecture.html"),a(o)]),k,t(" Chinese: "),e("a",v,[t("http://iotdb.apache.org/zh/SystemDesign/Architecture/Architecture.html"),a(o)])]),D,e("p",null,[t("The "),e("a",R,[t("issue module"),a(o)]),t(" is open on Github, so you can ask questions about bugs or new requirements, and we will answer them promptly.")]),B,e("p",null,[t("To download and use the new Version of IoTDB go to: "),e("a",S,[t("https://downloads.apache.org/incubator/iotdb/0.9.3-incubating/apache-iotdb-0.9.3-incubating-bin.zip"),a(o)])]),e("p",null,[t("User documentation for this release can be found under: "),e("a",I,[t("http://iotdb.apache.org/UserGuide/Master/0-Get Started/1-QuickStart.html"),a(o)])]),U,q,N])}const G=n(h,[["render",A],["__file","Release0_93.html.vue"]]),O=JSON.parse('{"path":"/Blog/Release0_93.html","title":"Some Notes on Release 0.9.3 and upcoming 0.10.0","lang":"en-US","frontmatter":{"description":"Some Notes on Release 0.9.3 and upcoming 0.10.0 Note: This Blog Post was initially written by Jialin Qiao and has been published here: https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/Blog/Release0_93.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Some Notes on Release 0.9.3 and upcoming 0.10.0"}],["meta",{"property":"og:description","content":"Some Notes on Release 0.9.3 and upcoming 0.10.0 Note: This Blog Post was initially written by Jialin Qiao and has been published here: https://mp.weixin.qq.com/s/MUoUsoRRDUqkQb0..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Some Notes on Release 0.9.3 and upcoming 0.10.0\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Notes on 0.9.3","slug":"notes-on-0-9-3","link":"#notes-on-0-9-3","children":[]},{"level":2,"title":"Fixes in 0.9.3","slug":"fixes-in-0-9-3","link":"#fixes-in-0-9-3","children":[]},{"level":2,"title":"Some previews About upcoming release 0.10.0","slug":"some-previews-about-upcoming-release-0-10-0","link":"#some-previews-about-upcoming-release-0-10-0","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.12,"words":635},"filePathRelative":"Blog/Release0_93.md","localizedDate":"July 10, 2023","autoDesc":true}');export{G as comp,O as data};
