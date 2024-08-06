import{_ as r,r as s,o as i,c as d,b as e,d as t,a,e as n}from"./app-DJKa25Tg.js";const l={},h=n('<h1 id="faq-for-cluster-setup" tabindex="-1"><a class="header-anchor" href="#faq-for-cluster-setup"><span>FAQ for Cluster Setup</span></a></h1><h2 id="_1-cluster-startup-and-stop" tabindex="-1"><a class="header-anchor" href="#_1-cluster-startup-and-stop"><span>1. Cluster StartUp and Stop</span></a></h2><h3 id="_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason"><span>1). Failed to start ConfigNode for the first time, how to find the reason?</span></a></h3><ul><li>Make sure that the data/confignode directory is cleared when start ConfigNode for the first time.</li><li>Make sure that the &lt;IP+Port&gt; used by ConfigNode is not occupied, and the &lt;IP+Port&gt; is also not conflicted with other ConfigNodes.</li><li>Make sure that the <code>cn_target_confignode_list</code> is configured correctly, which points to the alive ConfigNode. And if the ConfigNode is started for the first time, make sure that <code>cn_target_confignode_list</code> points to itself.</li><li>Make sure that the configuration(consensus protocol and replica number) of the started ConfigNode is accord with the <code>cn_target_confignode_list</code> ConfigNode.</li></ul><h3 id="_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster" tabindex="-1"><a class="header-anchor" href="#_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster"><span>2). ConfigNode is started successfully, but why the node doesn&#39;t appear in the results of <code>show cluster</code>?</span></a></h3><ul><li>Examine whether the <code>cn_target_confignode_list</code> points to the correct address. If <code>cn_target_confignode_list</code> points to itself, a new ConfigNode cluster is started.</li></ul><h3 id="_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason"><span>3). Failed to start DataNode for the first time, how to find the reason?</span></a></h3><ul><li>Make sure that the data/datanode directory is cleared when start DataNode for the first time. If the start result is “Reject DataNode restart.”, maybe the data/datanode directory is not cleared.</li><li>Make sure that the &lt;IP+Port&gt; used by DataNode is not occupied, and the &lt;IP+Port&gt; is also not conflicted with other DataNodes.</li><li>Make sure that the <code>dn_target_confignode_list</code> points to the alive ConfigNode.</li></ul><h3 id="_4-failed-to-remove-datanode-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_4-failed-to-remove-datanode-how-to-find-the-reason"><span>4). Failed to remove DataNode, how to find the reason?</span></a></h3>',9),c={href:"http://remove-datanode.sh",target:"_blank",rel:"noopener noreferrer"},f=n("<li>Only when the number of available DataNodes in the cluster is greater than max(schema_replication_factor, data_replication_factor), removing operation can be executed.</li><li>Removing DataNode will migrate the data from the removing DataNode to other alive DataNodes. Data migration is based on Region, if some regions are migrated failed, the removing DataNode will always in the status of <code>Removing</code>.</li><li>If the DataNode is in the status of <code>Removing</code>, the regions in the removing DataNode will also in the status of <code>Removing</code> or <code>Unknown</code>, which are unavailable status. Besides, the removing DataNode will not receive new write requests from client.<br> And users can use the command <code>set system status to running</code> to make the status of DataNode from Removing to Running;<br> If users want to make the Regions from Removing to available status, command <code>migrate region from datanodeId1 to datanodeId2</code> can take effect, this command can migrate the regions to other alive DataNodes.<br> Besides, IoTDB will publish <code>remove-datanode.sh -f</code> command in the next version, which can remove DataNodes forced (The failed migrated regions will be discarded).</li>",3),u=n('<h3 id="_5-whether-the-down-datanode-can-be-removed" tabindex="-1"><a class="header-anchor" href="#_5-whether-the-down-datanode-can-be-removed"><span>5). Whether the down DataNode can be removed?</span></a></h3><ul><li>The down DataNode can be removed only when the replica factor of schema and data is greater than 1.<br> Besides, IoTDB will publish <code>remove-datanode.sh -f</code> function in the next version.</li></ul><h3 id="_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0" tabindex="-1"><a class="header-anchor" href="#_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0"><span>6).What should be paid attention to when upgrading from 0.13 to 1.0?</span></a></h3><ul><li>The file structure between 0.13 and 1.0 is different, we can&#39;t copy the data directory from 0.13 to 1.0 to use directly.<br> If you want to load the data from 0.13 to 1.0, you can use the LOAD function.</li><li>The default RPC address of 0.13 is <code>0.0.0.0</code>, but the default RPC address of 1.0 is <code>127.0.0.1</code>.</li></ul><h2 id="_2-cluster-restart" tabindex="-1"><a class="header-anchor" href="#_2-cluster-restart"><span>2. Cluster Restart</span></a></h2><h3 id="_1-how-to-restart-any-confignode-in-the-cluster" tabindex="-1"><a class="header-anchor" href="#_1-how-to-restart-any-confignode-in-the-cluster"><span>1). How to restart any ConfigNode in the cluster?</span></a></h3>',6),g={href:"http://stop-confignode.sh",target:"_blank",rel:"noopener noreferrer"},p={href:"http://start-confignode.sh",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"_2-how-to-restart-any-datanode-in-the-cluster",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-how-to-restart-any-datanode-in-the-cluster"},[e("span",null,"2). How to restart any DataNode in the cluster?")])],-1),_={href:"http://stop-datanode.sh",target:"_blank",rel:"noopener noreferrer"},m={href:"http://start-datanode.sh",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed"},[e("span",null,"3). If it's possible to restart ConfigNode using the old data directory when it's removed?")])],-1),v=e("ul",null,[e("li",null,`Can't. The running result will be "Reject ConfigNode restart. Because there are no corresponding ConfigNode(whose nodeId=xx) in the cluster".`)],-1),y=e("h3",{id:"_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed"},[e("span",null,"4). If it's possible to restart DataNode using the old data directory when it's removed?")])],-1),k=e("ul",null,[e("li",null,`Can't. The running result will be "Reject DataNode restart. Because there are no corresponding DataNode(whose nodeId=xx) in the cluster. Possible solutions are as follows:...".`)],-1),N={id:"_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid",tabindex:"-1"},x={class:"header-anchor",href:"#_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid"},C={href:"http://start-confignode.sh/start-datanode.sh",target:"_blank",rel:"noopener noreferrer"},D=n('<ul><li>Can&#39;t. The running result will be &quot;The port is already occupied&quot;.</li></ul><h2 id="_3-cluster-maintenance" tabindex="-1"><a class="header-anchor" href="#_3-cluster-maintenance"><span>3. Cluster Maintenance</span></a></h2><h3 id="_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown" tabindex="-1"><a class="header-anchor" href="#_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown"><span>1). How to find the reason when Show cluster failed, and error logs like &quot;please check server status&quot; are shown?</span></a></h3><ul><li>Make sure that more than one half ConfigNodes are alive.</li><li>Make sure that the DataNode connected by the client is alive.</li></ul><h3 id="_2-how-to-fix-one-datanode-when-the-disk-file-is-broken" tabindex="-1"><a class="header-anchor" href="#_2-how-to-fix-one-datanode-when-the-disk-file-is-broken"><span>2). How to fix one DataNode when the disk file is broken?</span></a></h3>',5),I={href:"http://remove-datanode.sh",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,"IoTDB will publish Node-Fix tools in the next version.",-1),S=e("h3",{id:"_3-how-to-decrease-the-memory-usage-of-confignode-datanode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-how-to-decrease-the-memory-usage-of-confignode-datanode"},[e("span",null,"3). How to decrease the memory usage of ConfigNode/DataNode?")])],-1),A=e("ul",null,[e("li",null,"Adjust the MAX_HEAP_SIZE、MAX_DIRECT_MEMORY_SIZE options in conf/confignode-env.sh and conf/datanode-env.sh.")],-1);function R(T,M){const o=s("ExternalLinkIcon");return i(),d("div",null,[h,e("ul",null,[e("li",null,[t("Examine whether the parameter of "),e("a",c,[t("remove-datanode.sh"),a(o)]),t(" is correct, only rpcIp:rpcPort and dataNodeId are correct parameter.")]),f]),u,e("ul",null,[e("li",null,[t("First step: stop the process by "),e("a",g,[t("stop-confignode.sh"),a(o)]),t(" or kill PID of ConfigNode.")]),e("li",null,[t("Second step: execute "),e("a",p,[t("start-confignode.sh"),a(o)]),t(" to restart ConfigNode.")])]),w,e("ul",null,[e("li",null,[t("First step: stop the process by "),e("a",_,[t("stop-datanode.sh"),a(o)]),t(" or kill PID of DataNode.")]),e("li",null,[t("Second step: execute "),e("a",m,[t("start-datanode.sh"),a(o)]),t(" to restart DataNode.")])]),b,v,y,k,e("h3",N,[e("a",x,[e("span",null,[t("5). Can we execute "),e("a",C,[t("start-confignode.sh/start-datanode.sh"),a(o)]),t(" successfully when delete the data directory of given ConfigNode/DataNode without killing the PID?")])])]),D,e("ul",null,[e("li",null,[t("We can use "),e("a",I,[t("remove-datanode.sh"),a(o)]),t(" to fix it. Remove-datanode will migrate the data in the removing DataNode to other alive DataNodes.")]),F]),S,A])}const Q=r(l,[["render",R],["__file","FAQ-for-cluster-setup.html.vue"]]),B=JSON.parse(`{"path":"/UserGuide/V1.1.x/FAQ/FAQ-for-cluster-setup.html","title":"FAQ for Cluster Setup","lang":"en-US","frontmatter":{"description":"FAQ for Cluster Setup 1. Cluster StartUp and Stop 1). Failed to start ConfigNode for the first time, how to find the reason? Make sure that the data/confignode directory is clea...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/FAQ/FAQ-for-cluster-setup.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/FAQ/FAQ-for-cluster-setup.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"FAQ for Cluster Setup"}],["meta",{"property":"og:description","content":"FAQ for Cluster Setup 1. Cluster StartUp and Stop 1). Failed to start ConfigNode for the first time, how to find the reason? Make sure that the data/confignode directory is clea..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FAQ for Cluster Setup\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. Cluster StartUp and Stop","slug":"_1-cluster-startup-and-stop","link":"#_1-cluster-startup-and-stop","children":[{"level":3,"title":"1). Failed to start ConfigNode for the first time, how to find the reason?","slug":"_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason","link":"#_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason","children":[]},{"level":3,"title":"2). ConfigNode is started successfully, but why the node doesn't appear in the results of show cluster?","slug":"_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster","link":"#_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster","children":[]},{"level":3,"title":"3). Failed to start DataNode for the first time, how to find the reason?","slug":"_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason","link":"#_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason","children":[]},{"level":3,"title":"4). Failed to remove DataNode, how to find the reason?","slug":"_4-failed-to-remove-datanode-how-to-find-the-reason","link":"#_4-failed-to-remove-datanode-how-to-find-the-reason","children":[]},{"level":3,"title":"5). Whether the down DataNode can be removed?","slug":"_5-whether-the-down-datanode-can-be-removed","link":"#_5-whether-the-down-datanode-can-be-removed","children":[]},{"level":3,"title":"6).What should be paid attention to when upgrading from 0.13 to 1.0?","slug":"_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0","link":"#_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0","children":[]}]},{"level":2,"title":"2. Cluster Restart","slug":"_2-cluster-restart","link":"#_2-cluster-restart","children":[{"level":3,"title":"1). How to restart any ConfigNode in the cluster?","slug":"_1-how-to-restart-any-confignode-in-the-cluster","link":"#_1-how-to-restart-any-confignode-in-the-cluster","children":[]},{"level":3,"title":"2). How to restart any DataNode in the cluster?","slug":"_2-how-to-restart-any-datanode-in-the-cluster","link":"#_2-how-to-restart-any-datanode-in-the-cluster","children":[]},{"level":3,"title":"3). If it's possible to restart ConfigNode using the old data directory when it's removed?","slug":"_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed","link":"#_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed","children":[]},{"level":3,"title":"4). If it's possible to restart DataNode using the old data directory when it's removed?","slug":"_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed","link":"#_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed","children":[]},{"level":3,"title":"5). Can we execute start-confignode.sh/start-datanode.sh successfully when delete the data directory of given ConfigNode/DataNode without killing the PID?","slug":"_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid","link":"#_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid","children":[]}]},{"level":2,"title":"3. Cluster Maintenance","slug":"_3-cluster-maintenance","link":"#_3-cluster-maintenance","children":[{"level":3,"title":"1). How to find the reason when Show cluster failed, and error logs like \\"please check server status\\" are shown?","slug":"_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown","link":"#_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown","children":[]},{"level":3,"title":"2). How to fix one DataNode when the disk file is broken?","slug":"_2-how-to-fix-one-datanode-when-the-disk-file-is-broken","link":"#_2-how-to-fix-one-datanode-when-the-disk-file-is-broken","children":[]},{"level":3,"title":"3). How to decrease the memory usage of ConfigNode/DataNode?","slug":"_3-how-to-decrease-the-memory-usage-of-confignode-datanode","link":"#_3-how-to-decrease-the-memory-usage-of-confignode-datanode","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.19,"words":958},"filePathRelative":"UserGuide/V1.1.x/FAQ/FAQ-for-cluster-setup.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{Q as comp,B as data};
