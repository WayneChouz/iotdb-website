import{_ as s,r as n,o as d,c as r,b as e,d as a,a as l,w as i,e as o}from"./app-XaimuxhO.js";const c={},u=e("h2",{id:"数据文件存储",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据文件存储"},[e("span",null,"数据文件存储")])],-1),h=e("p",null,"本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。",-1),p=e("p",null,"IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。",-1),m=e("h3",{id:"数据文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据文件"},[e("span",null,"数据文件")])],-1),_=e("blockquote",null,[e("p",null,"在 basedir/data/目录下")],-1),b=o('<h4 id="tsfile" tabindex="-1"><a class="header-anchor" href="#tsfile"><span>TsFile</span></a></h4><blockquote><p>在 basedir/data/sequence or unsequence/{DatabaseName}/{DataRegionId}/{TimePartitionId}/目录下</p></blockquote><ol><li>{time}-{version}-{inner_compaction_count}-{cross_compaction_count}.tsfile <ul><li>数据文件</li></ul></li><li>{TsFileName}.tsfile.mod <ul><li>更新文件，主要记录删除操作</li></ul></li></ol><h4 id="tsfileresource" tabindex="-1"><a class="header-anchor" href="#tsfileresource"><span>TsFileResource</span></a></h4><ol><li>{TsFileName}.tsfile.resource <ul><li>TsFile 的概要与索引文件</li></ul></li></ol><h4 id="与合并相关的数据文件" tabindex="-1"><a class="header-anchor" href="#与合并相关的数据文件"><span>与合并相关的数据文件</span></a></h4><blockquote><p>在 basedir/data/sequence or unsequence/{DatabaseName}/目录下</p></blockquote><ol><li>后缀为<code>.cross </code> 或者 <code>.inner</code><ul><li>合并过程中产生的临时文件</li></ul></li><li>后缀为<code>.inner-compaction.log</code> 或者 <code>.cross-compaction.log</code><ul><li>记录合并进展的日志文件</li></ul></li><li>后缀为<code>.compaction.mods</code><ul><li>记录合并过程中发生的删除等操作</li></ul></li><li>后缀为<code>.meta</code>的文件 <ul><li>合并过程生成的元数据临时文件</li></ul></li></ol><h3 id="系统文件" tabindex="-1"><a class="header-anchor" href="#系统文件"><span>系统文件</span></a></h3>',9),f=o('<h4 id="元数据相关文件" tabindex="-1"><a class="header-anchor" href="#元数据相关文件"><span>元数据相关文件</span></a></h4><blockquote><p>在 basedir/system/schema 目录下</p></blockquote><h5 id="元数据" tabindex="-1"><a class="header-anchor" href="#元数据"><span>元数据</span></a></h5><ol><li>mlog.bin <ul><li>记录的是元数据操作</li></ul></li><li>mtree-1.snapshot <ul><li>元数据快照</li></ul></li><li>mtree-1.snapshot.tmp <ul><li>临时文件，防止快照更新时，损坏旧快照文件</li></ul></li></ol><h5 id="标签和属性" tabindex="-1"><a class="header-anchor" href="#标签和属性"><span>标签和属性</span></a></h5><ol><li>tlog.txt <ul><li>存储每个时序的标签和属性</li><li>默认情况下每个时序 700 字节</li></ul></li></ol><h4 id="其他系统文件" tabindex="-1"><a class="header-anchor" href="#其他系统文件"><span>其他系统文件</span></a></h4><h5 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>Version</span></a></h5><blockquote><p>在 basedir/system/database/{DatabaseName}/{TimePartitionId} or upgrade 目录下</p></blockquote>',9),g=e("ol",null,[e("li",{version:""},[a("Version- "),e("ul",null,[e("li",null,"版本号文件，使用文件名来记录当前最大的版本号")])])],-1),T=o('<h5 id="upgrade" tabindex="-1"><a class="header-anchor" href="#upgrade"><span>Upgrade</span></a></h5><blockquote><p>在 basedir/system/upgrade 目录下</p></blockquote><ol><li>upgrade.txt <ul><li>记录升级进度</li></ul></li></ol><h5 id="authority" tabindex="-1"><a class="header-anchor" href="#authority"><span>Authority</span></a></h5><blockquote><p>在 basedir/system/users/目录下是用户信息<br> 在 basedir/system/roles/目录下是角色信息</p></blockquote><h5 id="compressratio" tabindex="-1"><a class="header-anchor" href="#compressratio"><span>CompressRatio</span></a></h5><blockquote><p>在 basedir/system/compression_ration 目录下</p></blockquote>',7),x=e("ol",null,[e("li",{calTimes:""},[a("Ration-{compressionRatioSum}- "),e("ul",null,[e("li",null,"记录每个文件的压缩率")])])],-1),k=e("h3",{id:"写前日志文件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#写前日志文件"},[e("span",null,"写前日志文件")])],-1),D=e("code",null,"wal_dir",-1),y=o(`<blockquote><p>在 basedir/wal 目录下</p></blockquote><ol><li>{DatabaseName}-{TsFileName}/wal1 <ul><li>每个 memtable 会对应一个 wal 文件</li></ul></li></ol><h3 id="数据存储目录设置举例" tabindex="-1"><a class="header-anchor" href="#数据存储目录设置举例"><span>数据存储目录设置举例</span></a></h3><p>接下来我们将举一个数据目录配置的例子，来具体说明如何配置数据的存储目录。</p><p>IoTDB 涉及到的所有数据目录路径有：data_dirs, multi_dir_strategy, system_dir 和 wal_dir，它们分别涉及的是 IoTDB 的数据文件、数据文件多目录存储策略、系统文件以及写前日志文件。您可以选择输入路径自行配置，也可以不进行任何操作使用系统默认的配置项。</p><p>以下我们给出一个用户对五个目录都进行自行配置的例子。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>dn_system_dir = $IOTDB_HOME/data/datanode/system
dn_data_dirs = /data1/datanode/data, /data2/datanode/data, /data3/datanode/data 
dn_multi_dir_strategy=MaxDiskUsableSpaceFirstStrategy
dn_wal_dir= $IOTDB_HOME/data/datanode/wal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照上述配置，系统会：</p><ul><li>将 TsFile 存储在路径 /data1/datanode/data、路径 /data2/datanode/data 和路径 /data3/datanode/data 中。且对这三个路径的选择策略是：<code>优先选择磁盘剩余空间最大的目录</code>，即在每次数据持久化到磁盘时系统会自动选择磁盘剩余空间最大的一个目录将数据进行写入</li><li>将系统文件存储在$IOTDB_HOME/data/datanode/data</li><li>将写前日志文件存储在$IOTDB_HOME/data/datanode/wal</li></ul>`,9);function v(B,I){const t=n("RouteLink");return d(),r("div",null,[u,h,p,m,_,e("p",null,[a("数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 "),l(t,{to:"/zh/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:i(()=>[a("data_dirs 配置项")]),_:1}),a(" 进行配置。")]),e("p",null,[a("为了更好的支持用户对于磁盘空间扩展等存储需求，IoTDB 为 TsFile 的存储配置增加了多文件目录的存储方式，用户可自主配置多个存储路径作为数据的持久化位置（详情见 "),l(t,{to:"/zh/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:i(()=>[a("data_dirs 配置项")]),_:1}),a("），并可以指定或自定义目录选择策略（详情见 "),l(t,{to:"/zh/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:i(()=>[a("multi_dir_strategy 配置项")]),_:1}),a("）。")]),b,e("p",null,[a("系统 Schema 文件，存储了数据文件的元数据信息。可通过 system_dir 配置项进行配置（详情见 "),l(t,{to:"/zh/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:i(()=>[a("system_dir 配置项")]),_:1}),a("）。")]),f,g,T,x,k,e("p",null,[a("写前日志文件存储了系统的写前日志。可通过"),D,a("配置项进行配置（详情见 "),l(t,{to:"/zh/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:i(()=>[a("wal_dir 配置项")]),_:1}),a("）。")]),y])}const N=s(c,[["render",v],["__file","Files.html.vue"]]),F=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/QuickStart/Files.html","title":"","lang":"zh-CN","frontmatter":{"description":"数据文件存储 本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。 IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。 数据文件 在 basedir/data/目录下 数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 进行配置。 为了更好的支...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/QuickStart/Files.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/QuickStart/Files.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"数据文件存储 本节将介绍 IoTDB 的数据存储方式，便于您对 IoTDB 的数据管理有一个直观的了解。 IoTDB 需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。 数据文件 在 basedir/data/目录下 数据文件存储了用户写入 IoTDB 系统的所有数据。包含 TsFile 文件和其他文件，可通过 进行配置。 为了更好的支..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据文件存储","slug":"数据文件存储","link":"#数据文件存储","children":[{"level":3,"title":"数据文件","slug":"数据文件","link":"#数据文件","children":[]},{"level":3,"title":"系统文件","slug":"系统文件","link":"#系统文件","children":[]},{"level":3,"title":"写前日志文件","slug":"写前日志文件","link":"#写前日志文件","children":[]},{"level":3,"title":"数据存储目录设置举例","slug":"数据存储目录设置举例","link":"#数据存储目录设置举例","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.53,"words":1058},"filePathRelative":"zh/UserGuide/V1.1.x/QuickStart/Files.md","localizedDate":"2023年7月10日","autoDesc":true}');export{N as comp,F as data};
