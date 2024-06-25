import{_ as e,o as t,c as n,e as o}from"./app-vSSc7VXH.js";const a={},i=o('<h1 id="environmental-requirement" tabindex="-1"><a class="header-anchor" href="#environmental-requirement"><span>Environmental Requirement</span></a></h1><p>To use IoTDB, you need to have:</p><ul><li>Java &gt;= 1.8 (1.8, 11 to 17 have been verified. Please make sure the environment path has been set.)</li><li>Maven &gt;= 3.6 (if you want to install IoTDB by compiling the source code)</li><li>Set the max open files num as 65535 to avoid &quot;too many open files&quot; problem.</li><li>(Optional) Set the somaxconn as 65535 to avoid &quot;connection reset&quot; error when the system is under high load.</li></ul><blockquote><p><strong># Linux</strong> <br><code>sudo sysctl -w net.core.somaxconn=65535</code> <br><strong># FreeBSD 或 Darwin</strong> <br><code>sudo sysctl -w kern.ipc.somaxconn=65535</code></p></blockquote>',4),r=[i];function m(s,l){return t(),n("div",null,r)}const u=e(a,[["render",m],["__file","Environmental-Requirement.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V1.2.x/Deployment-and-Maintenance/Environmental-Requirement.html","title":"Environmental Requirement","lang":"en-US","frontmatter":{"description":"Environmental Requirement To use IoTDB, you need to have: Java >= 1.8 (1.8, 11 to 17 have been verified. Please make sure the environment path has been set.) Maven >= 3.6 (if yo...","head":[["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/Deployment-and-Maintenance/Environmental-Requirement.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Environmental Requirement"}],["meta",{"property":"og:description","content":"Environmental Requirement To use IoTDB, you need to have: Java >= 1.8 (1.8, 11 to 17 have been verified. Please make sure the environment path has been set.) Maven >= 3.6 (if yo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-01T06:02:08.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-01T06:02:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Environmental Requirement\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-01T06:02:08.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1690869728000,"contributors":[{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"UserGuide/V1.2.x/Deployment-and-Maintenance/Environmental-Requirement.md","localizedDate":"July 10, 2023","autoDesc":true}');export{u as comp,p as data};
