import{_ as t,c as o,b as l,d as e,e as i,o as s}from"./app-CYbL30xh.js";const r={};function n(c,a){return s(),o("div",null,a[0]||(a[0]=[l('<blockquote><p>下面是 IoTDB 生成或使用的文件</p><p>持续更新中。..</p></blockquote><h2 id="单机模式" tabindex="-1"><a class="header-anchor" href="#单机模式"><span>单机模式</span></a></h2><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h3><blockquote><p>conf 目录下</p></blockquote><ol><li>iotdb-datanode.properties</li><li>logback.xml</li><li><a href="http://datanode-env.sh" target="_blank" rel="noopener noreferrer">datanode-env.sh</a></li><li>jmx.access</li><li>jmx.password</li><li>iotdb-sync-client.properties <ul><li>只有 Sync 工具会使用</li></ul></li></ol><blockquote><p>在 basedir/system/schema 目录下</p></blockquote><ol><li>system.properties <ul><li>记录的是所有不能变动的配置，启动时会检查，防止系统错误</li></ul></li></ol><h3 id="状态相关的文件" tabindex="-1"><a class="header-anchor" href="#状态相关的文件"><span>状态相关的文件</span></a></h3><h4 id="元数据相关文件" tabindex="-1"><a class="header-anchor" href="#元数据相关文件"><span>元数据相关文件</span></a></h4><blockquote><p>在 basedir/system/schema 目录下</p></blockquote><h5 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h5><ol><li>mlog.bin <ul><li>记录的是元数据操作</li></ul></li><li>mtree-1.snapshot <ul><li>元数据快照</li></ul></li><li>mtree-1.snapshot.tmp <ul><li>临时文件，防止快照更新时，损坏旧快照文件</li></ul></li></ol><h5 id="标签和属性" tabindex="-1"><a class="header-anchor" href="#标签和属性"><span>标签和属性</span></a></h5><ol><li>tlog.txt <ul><li>存储每个时序的标签和属性</li><li>默认情况下每个时序 700 字节</li></ul></li></ol><h4 id="数据相关文件" tabindex="-1"><a class="header-anchor" href="#数据相关文件"><span>数据相关文件</span></a></h4><blockquote><p>在 basedir/data/目录下</p></blockquote><h5 id="wal" tabindex="-1"><a class="header-anchor" href="#wal"><span>WAL</span></a></h5><blockquote><p>在 basedir/wal 目录下</p></blockquote><ol><li>{StroageName}-{TsFileName}/wal1 <ul><li>每个 memtable 会对应一个 wal 文件</li></ul></li></ol><h5 id="tsfile" tabindex="-1"><a class="header-anchor" href="#tsfile"><span>TsFile</span></a></h5><blockquote><p>在 basedir/data/sequence or unsequence/{DatabaseName}/{DataRegionId}/{TimePartitionId}/目录下</p></blockquote><ol><li>{time}-{version}-{mergeCnt}.tsfile <ul><li>数据文件</li></ul></li><li>{TsFileName}.tsfile.mod <ul><li>更新文件，主要记录删除操作</li></ul></li></ol><h5 id="tsfileresource" tabindex="-1"><a class="header-anchor" href="#tsfileresource"><span>TsFileResource</span></a></h5><ol><li>{TsFileName}.tsfile.resource <ul><li>TsFile 的概要与索引文件</li></ul></li><li>{TsFileName}.tsfile.resource.temp <ul><li>临时文件，用于避免更新 tsfile.resource 时损坏 tsfile.resource</li></ul></li><li>{TsFileName}.tsfile.resource.closing <ul><li>关闭标记文件，用于标记 TsFile 处于关闭状态，重启后可以据此选择是关闭或继续写入该文件</li></ul></li></ol><h5 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h5><blockquote><p>在 basedir/system/databases/{DatabaseName}/{DataRegionId}/{TimePartitionId} or upgrade 目录下</p></blockquote>',26),e("ol",null,[e("li",{version:""},[i("Version- "),e("ul",null,[e("li",null,"版本号文件，使用文件名来记录当前最大的版本号")])])],-1),l('<h5 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade"><span>Upgrade</span></a></h5><blockquote><p>在 basedir/system/upgrade 目录下</p></blockquote><ol><li>upgrade.txt <ul><li>记录升级进度</li></ul></li></ol><h5 id="merge" tabindex="-1"><a class="header-anchor" href="#merge"><span>Merge</span></a></h5><blockquote><p>在 basedir/system/databases/{DatabaseName}/目录下</p></blockquote><ol><li>merge.mods <ul><li>记录合并过程中发生的删除等操作</li></ul></li><li>merge.log <ul><li>记录合并进展</li></ul></li><li>tsfile.merge <ul><li>临时文件，每个顺序文件在合并时会产生一个对应的 merge 文件，用于存放临时数据</li></ul></li></ol><h5 id="authority" tabindex="-1"><a class="header-anchor" href="#authority"><span>Authority</span></a></h5><blockquote><p>在 basedir/system/users/目录下是用户信息<br> 在 basedir/system/roles/目录下是角色信息</p></blockquote><h5 id="compressratio" tabindex="-1"><a class="header-anchor" href="#compressratio"><span>CompressRatio</span></a></h5><blockquote><p>在 basedir/system/compression_ration 目录下</p></blockquote>',10),e("ol",null,[e("li",{calTimes:""},[i("Ration-{compressionRatioSum}- "),e("ul",null,[e("li",null,"记录每个文件的压缩率")])])],-1)]))}const p=t(r,[["render",n],["__file","ServerFileList.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/QuickStart/ServerFileList.html","title":"","lang":"zh-CN","frontmatter":{"description":"下面是 IoTDB 生成或使用的文件 持续更新中。.. 单机模式 配置文件 conf 目录下 iotdb-datanode.properties logback.xml datanode-env.sh jmx.access jmx.password iotdb-sync-client.properties 只有 Sync 工具会使用 在 basedir...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/QuickStart/ServerFileList.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/QuickStart/ServerFileList.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"下面是 IoTDB 生成或使用的文件 持续更新中。.. 单机模式 配置文件 conf 目录下 iotdb-datanode.properties logback.xml datanode-env.sh jmx.access jmx.password iotdb-sync-client.properties 只有 Sync 工具会使用 在 basedir..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"单机模式","slug":"单机模式","link":"#单机模式","children":[{"level":3,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":3,"title":"状态相关的文件","slug":"状态相关的文件","link":"#状态相关的文件","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.98,"words":594},"filePathRelative":"zh/UserGuide/V1.1.x/QuickStart/ServerFileList.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,h as data};
