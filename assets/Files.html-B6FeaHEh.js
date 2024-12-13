import{_ as r,c as n,d as t,e as a,a as s,w as l,b as o,r as d,o as u}from"./app-i6u37es5.js";const p={};function f(m,e){const i=d("RouteLink");return u(),n("div",null,[e[24]||(e[24]=t("h1",{id:"files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#files"},[t("span",null,"Files")])],-1)),e[25]||(e[25]=t("p",null,"In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data management.",-1)),e[26]||(e[26]=t("p",null,"The data in IoTDB is divided into three categories, namely data files, system files, and pre-write log files.",-1)),e[27]||(e[27]=t("h2",{id:"data-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#data-files"},[t("span",null,"Data Files")])],-1)),e[28]||(e[28]=t("blockquote",null,[t("p",null,"under directory basedir/data/")],-1)),t("p",null,[e[3]||(e[3]=a("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the ")),e[4]||(e[4]=t("code",null,"data_dirs",-1)),e[5]||(e[5]=a(" configuration item (see ")),s(i,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:l(()=>e[0]||(e[0]=[a("file layer")])),_:1}),e[6]||(e[6]=a(" for details). Other files can be configured through ")),s(i,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:l(()=>e[1]||(e[1]=[a("data_dirs")])),_:1}),e[7]||(e[7]=a(" configuration item (see ")),s(i,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:l(()=>e[2]||(e[2]=[a("Engine Layer")])),_:1}),e[8]||(e[8]=a(" for details)."))]),t("p",null,[e[11]||(e[11]=a("In order to support users' storage requirements such as disk space expansion better, IoTDB supports multiple file directories storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see ")),s(i,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:l(()=>e[9]||(e[9]=[a("data_dirs")])),_:1}),e[12]||(e[12]=a(" configuration item), and you can specify or customize the directory selection strategy (see ")),s(i,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:l(()=>e[10]||(e[10]=[a("multi_dir_strategy")])),_:1}),e[13]||(e[13]=a(" configuration item for details)."))]),e[29]||(e[29]=o('<h3 id="tsfile" tabindex="-1"><a class="header-anchor" href="#tsfile"><span>TsFile</span></a></h3><blockquote><p>under directory data/sequence or unsequence/{DatabaseName}/{DataRegionId}/{TimePartitionId}/</p></blockquote><ol><li>{time}-{version}-{inner_compaction_count}-{cross_compaction_count}.tsfile <ul><li>normal data file</li></ul></li><li>{TsFileName}.tsfile.mod <ul><li>modification file</li><li>record delete operation</li></ul></li></ol><h3 id="tsfileresource" tabindex="-1"><a class="header-anchor" href="#tsfileresource"><span>TsFileResource</span></a></h3><ol><li>{TsFileName}.tsfile.resource <ul><li>descriptor and statistic file of a TsFile</li></ul></li></ol><h3 id="与合并相关的数据文件" tabindex="-1"><a class="header-anchor" href="#与合并相关的数据文件"><span>与合并相关的数据文件</span></a></h3><blockquote><p>under directory basedir/data/sequence or unsequence/{DatabaseName}/</p></blockquote><ol><li>file suffixe with <code>.cross </code> or <code>.inner</code><ul><li>temporary files of metadata generated in a compaction task</li></ul></li><li>file suffixe with <code>.inner-compaction.log</code> or <code>.cross-compaction.log</code><ul><li>record the progress of a compaction task</li></ul></li><li>file suffixe with <code>.compaction.mods</code><ul><li>modification file generated during a compaction task</li></ul></li><li>file suffixe with <code>.meta</code><ul><li>temporary files of metadata generated during a merge</li></ul></li></ol><h2 id="system-files" tabindex="-1"><a class="header-anchor" href="#system-files"><span>System files</span></a></h2>',9)),t("p",null,[e[15]||(e[15]=a("System files include schema files, which store metadata information of data in IoTDB. It can be configured through the ")),e[16]||(e[16]=t("code",null,"base_dir",-1)),e[17]||(e[17]=a(" configuration item (see ")),s(i,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:l(()=>e[14]||(e[14]=[a("System Layer")])),_:1}),e[18]||(e[18]=a(" for details)."))]),e[30]||(e[30]=o('<h3 id="metadata-related-files" tabindex="-1"><a class="header-anchor" href="#metadata-related-files"><span>MetaData Related Files</span></a></h3><blockquote><p>under directory basedir/system/schema</p></blockquote><h4 id="meta" tabindex="-1"><a class="header-anchor" href="#meta"><span>Meta</span></a></h4><ol><li>mlog.bin <ul><li>record the meta operation</li></ul></li><li>mtree-1.snapshot <ul><li>snapshot of metadata</li></ul></li><li>mtree-1.snapshot.tmp <ul><li>temp file, to avoid damaging the snapshot when updating it</li></ul></li></ol><h4 id="tags-attributes" tabindex="-1"><a class="header-anchor" href="#tags-attributes"><span>Tags&amp;Attributes</span></a></h4><ol><li>tlog.txt <ul><li>store tags and attributes of each TimeSeries</li><li>about 700 bytes for each TimeSeries</li></ul></li></ol><h3 id="other-system-files" tabindex="-1"><a class="header-anchor" href="#other-system-files"><span>Other System Files</span></a></h3><h4 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h4><blockquote><p>under directory basedir/system/database/{DatabaseName}/{TimePartitionId} or upgrade</p></blockquote>',9)),e[31]||(e[31]=t("ol",null,[t("li",{version:""},[a("Version- "),t("ul",null,[t("li",null,"version file, record the max version in fileName of a storage group")])])],-1)),e[32]||(e[32]=o('<h4 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade"><span>Upgrade</span></a></h4><blockquote><p>under directory basedir/system/upgrade</p></blockquote><ol><li>upgrade.txt <ul><li>record which files have been upgraded</li></ul></li></ol><h4 id="authority" tabindex="-1"><a class="header-anchor" href="#authority"><span>Authority</span></a></h4><blockquote><p>under directory basedir/system/users/<br> under directory basedir/system/roles/</p></blockquote><h4 id="compressratio" tabindex="-1"><a class="header-anchor" href="#compressratio"><span>CompressRatio</span></a></h4><blockquote><p>under directory basedir/system/compression_ration</p></blockquote>',7)),e[33]||(e[33]=t("ol",null,[t("li",{calTimes:""},[a("Ration-{compressionRatioSum}- "),t("ul",null,[t("li",null,"record compression ratio of each tsfile")])])],-1)),e[34]||(e[34]=t("h2",{id:"pre-write-log-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pre-write-log-files"},[t("span",null,"Pre-write Log Files")])],-1)),t("p",null,[e[20]||(e[20]=a("Pre-write log files store WAL files. It can be configured through the ")),e[21]||(e[21]=t("code",null,"wal_dir",-1)),e[22]||(e[22]=a(" configuration item (see ")),s(i,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:l(()=>e[19]||(e[19]=[a("System Layer")])),_:1}),e[23]||(e[23]=a(" for details)."))]),e[35]||(e[35]=o(`<blockquote><p>under directory basedir/wal</p></blockquote><ol><li>{DatabaseName}-{TsFileName}/wal1 <ul><li>every storage group has several wal files, and every memtable has one associated wal file before it is flushed into a TsFile</li></ul></li></ol><h2 id="example-of-setting-data-storage-directory" tabindex="-1"><a class="header-anchor" href="#example-of-setting-data-storage-directory"><span>Example of Setting Data storage Directory</span></a></h2><p>For a clearer understanding of configuring the data storage directory, we will give an example in this section.</p><p>The data directory path included in storage directory setting are: base_dir, data_dirs, multi_dir_strategy, and wal_dir, which refer to system files, data folders, storage strategy, and pre-write log files.</p><p>An example of the configuration items are as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">dn_system_dir = $IOTDB_HOME/data/datanode/system</span>
<span class="line">dn_data_dirs = /data1/datanode/data, /data2/datanode/data, /data3/datanode/data </span>
<span class="line">dn_multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy</span>
<span class="line">dn_wal_dir= $IOTDB_HOME/data/datanode/wal</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After setting the configuration, the system will:</p><ul><li>Save all system files in $IOTDB_HOME/data/datanode/system</li><li>Save TsFile in /data1/datanode/data, /data2/datanode/data, /data3/datanode/data. And the choosing strategy is <code>MaxDiskUsableSpaceFirstStrategy</code>, when data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.</li><li>Save WAL data in $IOTDB_HOME/data/datanode/wal</li><li></li></ul>`,9))])}const c=r(p,[["render",f],["__file","Files.html.vue"]]),h=JSON.parse(`{"path":"/UserGuide/V1.0.x/QuickStart/Files.html","title":"Files","lang":"en-US","frontmatter":{"description":"Files In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/QuickStart/Files.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/QuickStart/Files.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Files"}],["meta",{"property":"og:description","content":"Files In IoTDB, there are many kinds of data needed to be stored. This section introduces IoTDB's data storage strategy to provide you an explicit understanding of IoTDB's data ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Files\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Data Files","slug":"data-files","link":"#data-files","children":[{"level":3,"title":"TsFile","slug":"tsfile","link":"#tsfile","children":[]},{"level":3,"title":"TsFileResource","slug":"tsfileresource","link":"#tsfileresource","children":[]},{"level":3,"title":"与合并相关的数据文件","slug":"与合并相关的数据文件","link":"#与合并相关的数据文件","children":[]}]},{"level":2,"title":"System files","slug":"system-files","link":"#system-files","children":[{"level":3,"title":"MetaData Related Files","slug":"metadata-related-files","link":"#metadata-related-files","children":[]},{"level":3,"title":"Other System Files","slug":"other-system-files","link":"#other-system-files","children":[]}]},{"level":2,"title":"Pre-write Log Files","slug":"pre-write-log-files","link":"#pre-write-log-files","children":[]},{"level":2,"title":"Example of Setting Data storage Directory","slug":"example-of-setting-data-storage-directory","link":"#example-of-setting-data-storage-directory","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.43,"words":728},"filePathRelative":"UserGuide/V1.0.x/QuickStart/Files.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{c as comp,h as data};
