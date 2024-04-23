import{_ as s,r as n,o as i,c as d,b as l,d as e,a,w as o,e as r}from"./app-DrPcRZG6.js";const g={},c=r(`<h1 id="storage-group-management" tabindex="-1"><a class="header-anchor" href="#storage-group-management"><span>Storage Group Management</span></a></h1><h2 id="create-storage-group" tabindex="-1"><a class="header-anchor" href="#create-storage-group"><span>Create Storage Group</span></a></h2><p>According to the storage model we can set up the corresponding storage group. Two SQL statements are supported for creating storage groups, as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB &gt; set storage group to root.ln
IoTDB &gt; create storage group root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>We can thus create two storage groups using the above two SQL statements.</p><p>It is worth noting that when the path itself or the parent/child layer of the path is already set as a storage group, the path is then not allowed to be set as a storage group. For example, it is not feasible to set <code>root.ln.wf01</code> as a storage group when two storage groups <code>root.ln</code> and <code>root.sgcc</code> exist. The system gives the corresponding error prompt as shown below:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; set storage group to root.ln.wf01
Msg: 300: root.ln has already been set to storage group.
IoTDB&gt; create storage group root.ln.wf01
Msg: 300: root.ln has already been set to storage group.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The LayerName of storage group can only be characters, numbers, underscores and hyphens.</p><p>Besides, if deploy on Windows system, the LayerName is case-insensitive, which means it&#39;s not allowed to set storage groups <code>root.ln</code> and <code>root.LN</code> at the same time.</p><h2 id="show-storage-group" tabindex="-1"><a class="header-anchor" href="#show-storage-group"><span>Show Storage Group</span></a></h2>`,10),p=r(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; show storage group
IoTDB&gt; show storage group root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+-------------+
|storage group|
+-------------+
|    root.sgcc|
|      root.ln|
+-------------+
Total line number = 2
It costs 0.060s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-storage-group" tabindex="-1"><a class="header-anchor" href="#delete-storage-group"><span>Delete Storage Group</span></a></h2><p>User can use the <code>DELETE STORAGE GROUP &lt;PathPattern&gt;</code> statement to delete all storage groups matching the pathPattern. Please note the data in the storage group will also be deleted.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB &gt; DELETE STORAGE GROUP root.ln
IoTDB &gt; DELETE STORAGE GROUP root.sgcc
// delete all data, all timeseries and all storage groups
IoTDB &gt; DELETE STORAGE GROUP root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function u(h,m){const t=n("RouteLink");return i(),d("div",null,[c,l("p",null,[e("After creating the storage group, we can use the "),a(t,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:o(()=>[e("SHOW STORAGE GROUP")]),_:1}),e(" statement and "),a(t,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:o(()=>[e("SHOW STORAGE GROUP <PathPattern>")]),_:1}),e(" to view the storage groups. The SQL statements are as follows:")]),p])}const b=s(g,[["render",u],["__file","Storage-Group.html.vue"]]),x=JSON.parse('{"path":"/UserGuide/V0.13.x/Operate-Metadata/Storage-Group.html","title":"Storage Group Management","lang":"en-US","frontmatter":{"description":"Storage Group Management Create Storage Group According to the storage model we can set up the corresponding storage group. Two SQL statements are supported for creating storage...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Operate-Metadata/Storage-Group.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Operate-Metadata/Storage-Group.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Storage Group Management"}],["meta",{"property":"og:description","content":"Storage Group Management Create Storage Group According to the storage model we can set up the corresponding storage group. Two SQL statements are supported for creating storage..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Storage Group Management\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Create Storage Group","slug":"create-storage-group","link":"#create-storage-group","children":[]},{"level":2,"title":"Show Storage Group","slug":"show-storage-group","link":"#show-storage-group","children":[]},{"level":2,"title":"Delete Storage Group","slug":"delete-storage-group","link":"#delete-storage-group","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.42,"words":425},"filePathRelative":"UserGuide/V0.13.x/Operate-Metadata/Storage-Group.md","localizedDate":"July 10, 2023","autoDesc":true}');export{b as comp,x as data};
