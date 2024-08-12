import{_ as i,r as l,o as r,c as d,b as t,d as e,a as n,e as o}from"./app-XaimuxhO.js";const s={},c=o('<h2 id="mlogload-tool" tabindex="-1"><a class="header-anchor" href="#mlogload-tool"><span>MLogLoad Tool</span></a></h2><h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h3><p>The MLogLoad tool is used to load the metadata from <code>mlog.bin</code> and tags and attributes from <code>tlog.txt</code> into the running IoTDB.<br> Metadata operation in <code>mlog.bin</code> will be replayed.<br> Metedata to be loaded that conflicts with metadata in the running IoTDB will be skipped.</p>',3),p=t("code",null,"mlog.bin",-1),h=t("code",null,"tlog.txt",-1),m={href:"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html",target:"_blank",rel:"noopener noreferrer"},u=o(`<h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use"><span>How to Use</span></a></h3><p>Linux/MacOS</p><blockquote><p>./mLogLoad.sh -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><p>Windows</p><blockquote><p>./mLogLoad.bat -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>usage: MLogLoad -mlog &lt;mlog file&gt; [-tlog &lt;tlog file&gt;] [-h &lt;receiver host&gt;]
       [-p &lt;receiver port&gt;] [-u &lt;user&gt;] [-pw &lt;password&gt;] [-help]
 -mlog &lt;mlog file&gt;    Need to specify a binary mlog.bin file to parse
                      (required)
 -tlog &lt;tlog file&gt;    Could specify a binary tlog.txt file to parse. Tags
                      and attributes will be ignored if not specified
                      (optional)
 -h &lt;receiver host&gt;   Could specify a specify the receiver host, default
                      is 127.0.0.1 (optional)
 -p &lt;receiver port&gt;   Could specify a specify the receiver port, default
                      is 6667 (optional)
 -u &lt;user&gt;            Could specify the user name, default is root
                      (optional)
 -pw &lt;password&gt;       Could specify the password, default is root
                      (optional)
 -help,--help         Display help information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: If tlog is not specified, the MLogLoad tool will ignore tags and attributes management.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><p>The purpose is to load the local metadata file <code>/yourpath/mlog.bin</code> into IoTDB instance running on server 192.168.0.101:6667.</p>`,9),g={href:"http://mLogLoad.sh",target:"_blank",rel:"noopener noreferrer"},b=o(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>./mLogLoad.sh -mlog &quot;/yourpath/mlog.bin&quot; -h 192.168.0.101 -p 6667 -u root -pw root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After waiting for the script execution to complete, you can check that the metadata in the IoTDB instance has been loaded correctly.</p><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a"><span>Q&amp;A</span></a></h3><ul><li>Cannot find or load the main class MLoadLoader <ul><li>It may be because the environment variable $IOTDB_HOME is not set, please set the environment variable and try again</li></ul></li></ul>`,4);function v(f,x){const a=l("ExternalLinkIcon");return r(),d("div",null,[c,t("p",null,[e("If there is already metadata in the running IoTDB, to avoid replaying the delete operation to affect the existing metadata, it needs to be loaded using "),p,e(" and "),h,e(" obtained from the "),t("a",m,[e("export metadata operation"),n(a)]),e(".")]),u,t("p",null,[e("Enter to the directory where "),t("a",g,[e("mLogLoad.sh"),n(a)]),e(" is located and execute the following statement:")]),b])}const y=i(s,[["render",v],["__file","MLogLoad-Tool.html.vue"]]),T=JSON.parse('{"path":"/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html","title":"","lang":"en-US","frontmatter":{"description":"MLogLoad Tool Introduction The MLogLoad tool is used to load the metadata from mlog.bin and tags and attributes from tlog.txt into the running IoTDB. Metadata operation in mlog....","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"MLogLoad Tool Introduction The MLogLoad tool is used to load the metadata from mlog.bin and tags and attributes from tlog.txt into the running IoTDB. Metadata operation in mlog...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"MLogLoad Tool","slug":"mlogload-tool","link":"#mlogload-tool","children":[{"level":3,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":3,"title":"How to Use","slug":"how-to-use","link":"#how-to-use","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]},{"level":3,"title":"Q&A","slug":"q-a","link":"#q-a","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.49,"words":448},"filePathRelative":"UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{y as comp,T as data};
