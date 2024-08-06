import{_ as i,r as o,o as r,c as s,b as e,d as t,a as n,e as l}from"./app-DJKa25Tg.js";const d={},c=e("blockquote",null,[e("p",null,"Here are all files generated or used by IoTDB"),e("p",null,"Continuously Updating...")],-1),u=e("h1",{id:"stand-alone",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stand-alone"},[e("span",null,"Stand-alone")])],-1),h=e("h2",{id:"configuration-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration-files"},[e("span",null,"Configuration Files")])],-1),p=e("blockquote",null,[e("p",null,"under conf directory")],-1),f=e("li",null,"iotdb-engine.properties",-1),m=e("li",null,"logback.xml",-1),g={href:"http://iotdb-env.sh",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"jmx.access",-1),k=e("li",null,"jmx.password",-1),y=e("li",null,[t("iotdb-sync-client.properties "),e("ul",null,[e("li",null,"only sync tool use it")])],-1),_=l('<blockquote><p>under directory basedir/system/schema</p></blockquote><ol><li>system.properties <ul><li>record all immutable properties, will be checked when starting IoTDB to avoid system errors</li></ul></li></ol><h2 id="state-related-files" tabindex="-1"><a class="header-anchor" href="#state-related-files"><span>State Related Files</span></a></h2><h3 id="metadata-related-files" tabindex="-1"><a class="header-anchor" href="#metadata-related-files"><span>MetaData Related Files</span></a></h3><blockquote><p>under directory basedir/system/schema</p></blockquote><h4 id="meta" tabindex="-1"><a class="header-anchor" href="#meta"><span>Meta</span></a></h4><ol><li>mlog.bin <ul><li>record the meta operation</li></ul></li><li>mtree-1.snapshot <ul><li>snapshot of metadata</li></ul></li><li>mtree-1.snapshot.tmp <ul><li>temp file, to avoid damaging the snapshot when updating it</li></ul></li></ol><h4 id="tags-attributes" tabindex="-1"><a class="header-anchor" href="#tags-attributes"><span>Tags&amp;Attributes</span></a></h4><ol><li>tlog.txt <ul><li>store tags and attributes of each TimeSeries</li><li>about 700 bytes for each TimeSeries</li></ul></li></ol><h3 id="data-related-files" tabindex="-1"><a class="header-anchor" href="#data-related-files"><span>Data Related Files</span></a></h3><blockquote><p>under directory basedir/data/</p></blockquote><h4 id="wal" tabindex="-1"><a class="header-anchor" href="#wal"><span>WAL</span></a></h4><blockquote><p>under directory basedir/wal</p></blockquote><ol><li>{StorageGroupName}-{TsFileName}/wal1 <ul><li>every storage group has several wal files, and every memtable has one associated wal file before it is flushed into a TsFile</li></ul></li></ol><h4 id="tsfile" tabindex="-1"><a class="header-anchor" href="#tsfile"><span>TsFile</span></a></h4><blockquote><p>under directory data/sequence or unsequence/{StorageGroupName}/{TimePartitionId}/</p></blockquote><ol><li>{time}-{version}-{mergeCnt}.tsfile <ul><li>normal data file</li></ul></li><li>{TsFileName}.tsfile.mod <ul><li>modification file</li><li>record delete operation</li></ul></li></ol><h4 id="tsfileresource" tabindex="-1"><a class="header-anchor" href="#tsfileresource"><span>TsFileResource</span></a></h4><ol><li>{TsFileName}.tsfile.resource <ul><li>descriptor and statistic file of a TsFile</li></ul></li><li>{TsFileName}.tsfile.resource.temp <ul><li>temp file</li><li>avoid damaging the tsfile.resource when updating it</li></ul></li><li>{TsFileName}.tsfile.resource.closing <ul><li>close flag file, to mark a tsfile closing so during restarts we can continue to close it or reopen it</li></ul></li></ol><h4 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h4><blockquote><p>under directory basedir/system/storage_groups/{StorageGroupName}/{TimePartitionId} or upgrade</p></blockquote>',21),x=e("ol",null,[e("li",{version:""},[t("Version- "),e("ul",null,[e("li",null,"version file, record the max version in fileName of a storage group")])])],-1),v=l('<h4 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade"><span>Upgrade</span></a></h4><blockquote><p>under directory basedir/system/upgrade</p></blockquote><ol><li>upgrade.txt <ul><li>record which files have been upgraded</li></ul></li></ol><h4 id="merge" tabindex="-1"><a class="header-anchor" href="#merge"><span>Merge</span></a></h4><blockquote><p>under directory basedir/system/storage_groups/{StorageGroup}/</p></blockquote><ol><li>merge.mods <ul><li>modification file generated during a merge</li></ul></li><li>merge.log <ul><li>record the progress of a merge</li></ul></li><li>tsfile.merge <ul><li>temporary merge result file, an involved sequence tsfile may have one during a merge</li></ul></li></ol><h4 id="authority" tabindex="-1"><a class="header-anchor" href="#authority"><span>Authority</span></a></h4><blockquote><p>under directory basedir/system/users/<br> under directory basedir/system/roles/</p></blockquote><h4 id="compressratio" tabindex="-1"><a class="header-anchor" href="#compressratio"><span>CompressRatio</span></a></h4><blockquote><p>under directory basedir/system/compression_ration</p></blockquote>',10),S=e("ol",null,[e("li",{calTimes:""},[t("Ration-{compressionRatioSum}- "),e("ul",null,[e("li",null,"record compression ratio of each tsfile")])])],-1),F=l('<hr><h1 id="cluster-mode" tabindex="-1"><a class="header-anchor" href="#cluster-mode"><span>Cluster-Mode</span></a></h1><blockquote><p>Attention: the following files are newly added</p></blockquote><h2 id="configuration-files-1" tabindex="-1"><a class="header-anchor" href="#configuration-files-1"><span>Configuration Files</span></a></h2><ol><li>iotdb-cluster.properties</li></ol><h2 id="state-related-files-1" tabindex="-1"><a class="header-anchor" href="#state-related-files-1"><span>State Related Files</span></a></h2><blockquote><p>under directory basedir/</p></blockquote><ol><li>node_identifier <ul><li>the identifier of the local node in a cluster</li></ul></li><li>partitions <ul><li>partition table file, records the distribution of data</li></ul></li><li>{time}_{random}.task <ul><li>pullSnapshotTask file, record the slots and owners. When a node joins a cluster,<br> it will create pullSnapshotTask file to track which data to be pulled</li><li>under directory basedir/raft/{nodeIdentifier}/snapshot_task/</li></ul></li></ol><h2 id="raft-related-files" tabindex="-1"><a class="header-anchor" href="#raft-related-files"><span>Raft Related Files</span></a></h2><blockquote><p>under directory basedir/system/raftLog/{nodeIdentifier}/</p></blockquote><h3 id="raft-log" tabindex="-1"><a class="header-anchor" href="#raft-log"><span>Raft Log</span></a></h3>',11),q=e("ol",null,[e("li",{version:""},[t(".data- "),e("ul",null,[e("li",null,"raft committed logs, only save the latest 1000(configurable) committed logs")])])],-1),T=l('<h3 id="raft-meta" tabindex="-1"><a class="header-anchor" href="#raft-meta"><span>Raft Meta</span></a></h3><ol><li>logMeta <ul><li>raft meta, like hardState and Meta <ul><li>hardState: voteFor, term</li><li>Meta: commitLogTerm, commitLogIndex, lastLogTerm, lastLogIndex</li><li>...</li></ul></li></ul></li><li>logMeta.tmp <ul><li>temp file, to avoid damaging the logMeta when updating it</li></ul></li></ol><h3 id="raft-catch-up" tabindex="-1"><a class="header-anchor" href="#raft-catch-up"><span>Raft Catch Up</span></a></h3><blockquote><p>under directory basedir/remote/{nodeIdentifier}/{storageGroupName}/{partitionNum}/</p></blockquote><ol><li>{fileName}.tsfile <ul><li>remote TsFile, will be loaded during snapshot installation</li></ul></li><li>{fileName}.tsfile.mod <ul><li>remote TsFile modification file, will be loaded during snapshot installation</li></ul></li></ol>',5);function R(w,N){const a=o("ExternalLinkIcon");return r(),s("div",null,[c,u,h,p,e("ol",null,[f,m,e("li",null,[e("a",g,[t("iotdb-env.sh"),n(a)])]),b,k,y]),_,x,v,S,F,q,T])}const L=i(d,[["render",R],["__file","ServerFileList.html.vue"]]),I=JSON.parse('{"path":"/UserGuide/V0.13.x/QuickStart/ServerFileList.html","title":"Stand-alone","lang":"en-US","frontmatter":{"description":"Here are all files generated or used by IoTDB Continuously Updating... Stand-alone Configuration Files under conf directory iotdb-engine.properties logback.xml iotdb-env.sh jmx....","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/ServerFileList.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/ServerFileList.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Stand-alone"}],["meta",{"property":"og:description","content":"Here are all files generated or used by IoTDB Continuously Updating... Stand-alone Configuration Files under conf directory iotdb-engine.properties logback.xml iotdb-env.sh jmx...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Stand-alone\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Configuration Files","slug":"configuration-files","link":"#configuration-files","children":[]},{"level":2,"title":"State Related Files","slug":"state-related-files","link":"#state-related-files","children":[{"level":3,"title":"MetaData Related Files","slug":"metadata-related-files","link":"#metadata-related-files","children":[]},{"level":3,"title":"Data Related Files","slug":"data-related-files","link":"#data-related-files","children":[]}]},{"level":2,"title":"Configuration Files","slug":"configuration-files-1","link":"#configuration-files-1","children":[]},{"level":2,"title":"State Related Files","slug":"state-related-files-1","link":"#state-related-files-1","children":[]},{"level":2,"title":"Raft Related Files","slug":"raft-related-files","link":"#raft-related-files","children":[{"level":3,"title":"Raft Log","slug":"raft-log","link":"#raft-log","children":[]},{"level":3,"title":"Raft Meta","slug":"raft-meta","link":"#raft-meta","children":[]},{"level":3,"title":"Raft Catch Up","slug":"raft-catch-up","link":"#raft-catch-up","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.98,"words":594},"filePathRelative":"UserGuide/V0.13.x/QuickStart/ServerFileList.md","localizedDate":"July 10, 2023","autoDesc":true}');export{L as comp,I as data};
