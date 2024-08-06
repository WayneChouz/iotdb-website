import{_ as i,r,o as l,c,b as t,d as e,a as o,w as u,e as s}from"./app-DJKa25Tg.js";const p={},d=s('<h1 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h1><p>The storage group is specified by the user display.<br> Use the statement &quot;SET STORAGE GROUP TO&quot; to specify the storage group.<br> Each storage group has a corresponding StorageGroupProcessor.</p><p>To ensure eventually consistency, a insert lock (exclusive lock) is used to synchronize each insert request in each storage group.<br> So the server side parallelism of data ingestion is equal to the number of storage group.</p><h1 id="problem" tabindex="-1"><a class="header-anchor" href="#problem"><span>Problem</span></a></h1><p>From background, we can infer that the parallelism of data ingestion of IoTDB is max(num of client, server side parallelism), which equals to max(num of client, num of storage group)</p><p>The concept of storage group usually is related to real world entity such as factory, location, country and so on.<br> The number of storage groups may be small which makes the parallelism of data ingestion of IoTDB insufficient. We can&#39;t jump out of this dilemma even we start hundreds of client for ingestion.</p><h1 id="solution" tabindex="-1"><a class="header-anchor" href="#solution"><span>Solution</span></a></h1><p>Our idea is to group devices into buckets and change the granularity of synchronization from storage group level to device buckets level.</p>',8),g=t("br",null,null,-1),h={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},m={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},f=s(`<h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h1><p>To use virtual storage group, you can set this config below:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>virtual_storage_group_num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Recommended value is [virtual storage group number] = [CPU core number] / [user-defined storage group number]</p>`,4);function b(_,y){const a=r("ExternalLinkIcon"),n=r("RouteLink");return l(),c("div",null,[d,t("p",null,[e("In detail, we use hash to group different devices into buckets called virtual storage group."),g,e(` For example, one device called "root.sg.d"(assume it's storage group is "`),t("a",h,[e("root.sg"),o(a)]),e('") is belonged to virtual storage group "'),t("a",m,[e("root.sg"),o(a)]),e('.[hash("root.sg.d") mod num_of_virtual_storage_group]"')]),f,t("p",null,[e("For more information, you can refer to "),o(n,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:u(()=>[e("this page")]),_:1}),e(".")])])}const x=i(p,[["render",b],["__file","VirtualStorageGroup.html.vue"]]),T=JSON.parse('{"path":"/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.html","title":"Background","lang":"en-US","frontmatter":{"description":"Background The storage group is specified by the user display. Use the statement \\"SET STORAGE GROUP TO\\" to specify the storage group. Each storage group has a corresponding Stor...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Background"}],["meta",{"property":"og:description","content":"Background The storage group is specified by the user display. Use the statement \\"SET STORAGE GROUP TO\\" to specify the storage group. Each storage group has a corresponding Stor..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Background\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.23,"words":369},"filePathRelative":"UserGuide/V0.13.x/Data-Modeling/VirtualStorageGroup.md","localizedDate":"July 10, 2023","autoDesc":true}');export{x as comp,T as data};
