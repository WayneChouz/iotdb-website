import{_ as r,r as o,o as l,c as n,b as t,d as e,a as i,w as s,e as d}from"./app-DJKa25Tg.js";const c={},u=t("h2",{id:"files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#files"},[t("span",null,"Files")])],-1),h=t("p",null,"In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data management.",-1),f=t("p",null,"The data in IoTDB is divided into three categories, namely data files, system files, and pre-write log files.",-1),g=t("h3",{id:"data-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#data-files"},[t("span",null,"Data Files")])],-1),m=t("code",null,"data_dirs",-1),p=t("h3",{id:"system-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#system-files"},[t("span",null,"System files")])],-1),_=t("code",null,"base_dir",-1),y=t("h3",{id:"pre-write-log-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pre-write-log-files"},[t("span",null,"Pre-write Log Files")])],-1),x=t("code",null,"wal_dir",-1),T=d(`<h3 id="example-of-setting-data-storage-directory" tabindex="-1"><a class="header-anchor" href="#example-of-setting-data-storage-directory"><span>Example of Setting Data storage Directory</span></a></h3><p>For a clearer understanding of configuring the data storage directory, we will give an example in this section.</p><p>The data directory path included in storage directory setting are: base_dir, data_dirs, multi_dir_strategy, and wal_dir, which refer to system files, data folders, storage strategy, and pre-write log files.</p><p>An example of the configuration items are as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>base_dir = $IOTDB_HOME/data
data_dirs = /data1/data, /data2/data, /data3/data 
multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy
wal_dir= $IOTDB_HOME/data/wal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After setting the configuration, the system will:</p><ul><li>Save all system files in $IOTDB_HOME/data</li><li>Save TsFile in /data1/data, /data2/data, /data3/data. And the choosing strategy is <code>MaxDiskUsableSpaceFirstStrategy</code>, when data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.</li><li>Save WAL data in $IOTDB_HOME/data/wal</li></ul>`,7);function w(b,v){const a=o("RouteLink");return l(),n("div",null,[u,h,f,g,t("p",null,[e("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the "),m,e(" configuration item (see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("file layer")]),_:1}),e(" for details). Other files can be configured through "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("data_dirs")]),_:1}),e(" configuration item (see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("Engine Layer")]),_:1}),e(" for details).")]),t("p",null,[e("In order to support users' storage requirements such as disk space expansion better, IoTDB supports multiple file directories storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("data_dirs")]),_:1}),e(" configuration item), and you can specify or customize the directory selection strategy (see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("multi_dir_strategy")]),_:1}),e(" configuration item for details).")]),p,t("p",null,[e("System files include schema files, which store metadata information of data in IoTDB. It can be configured through the "),_,e(" configuration item (see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("System Layer")]),_:1}),e(" for details).")]),y,t("p",null,[e("Pre-write log files store WAL files. It can be configured through the "),x,e(" configuration item (see "),i(a,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:s(()=>[e("System Layer")]),_:1}),e(" for details).")]),T])}const I=r(c,[["render",w],["__file","Files.html.vue"]]),k=JSON.parse(`{"path":"/UserGuide/V0.13.x/QuickStart/Files.html","title":"","lang":"en-US","frontmatter":{"description":"Files In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/Files.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/Files.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Files In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Files","slug":"files","link":"#files","children":[{"level":3,"title":"Data Files","slug":"data-files","link":"#data-files","children":[]},{"level":3,"title":"System files","slug":"system-files","link":"#system-files","children":[]},{"level":3,"title":"Pre-write Log Files","slug":"pre-write-log-files","link":"#pre-write-log-files","children":[]},{"level":3,"title":"Example of Setting Data storage Directory","slug":"example-of-setting-data-storage-directory","link":"#example-of-setting-data-storage-directory","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.55,"words":466},"filePathRelative":"UserGuide/V0.13.x/QuickStart/Files.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{I as comp,k as data};
