import{_ as i,r as s,o as d,c as h,a as r,d as e,e as t,b as a,f as n}from"./app-dNeAgOFp.js";const l={},c=n('<h1 id="faq-for-cluster-setup" tabindex="-1"><a class="header-anchor" href="#faq-for-cluster-setup" aria-hidden="true">#</a> FAQ for Cluster Setup</h1><h2 id="_1-cluster-startup-and-stop" tabindex="-1"><a class="header-anchor" href="#_1-cluster-startup-and-stop" aria-hidden="true">#</a> 1. Cluster StartUp and Stop</h2><h3 id="_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_1-failed-to-start-confignode-for-the-first-time-how-to-find-the-reason" aria-hidden="true">#</a> 1). Failed to start ConfigNode for the first time, how to find the reason?</h3><ul><li>Make sure that the data/confignode directory is cleared when start ConfigNode for the first time.</li><li>Make sure that the &lt;IP+Port&gt; used by ConfigNode is not occupied, and the &lt;IP+Port&gt; is also not conflicted with other ConfigNodes.</li><li>Make sure that the <code>cn_target_confignode_list</code> is configured correctly, which points to the alive ConfigNode. And if the ConfigNode is started for the first time, make sure that <code>cn_target_confignode_list</code> points to itself.</li><li>Make sure that the configuration(consensus protocol and replica number) of the started ConfigNode is accord with the <code>cn_target_confignode_list</code> ConfigNode.</li></ul><h3 id="_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster" tabindex="-1"><a class="header-anchor" href="#_2-confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster" aria-hidden="true">#</a> 2). ConfigNode is started successfully, but why the node doesn&#39;t appear in the results of <code>show cluster</code>?</h3><ul><li>Examine whether the <code>cn_target_confignode_list</code> points to the correct address. If <code>cn_target_confignode_list</code> points to itself, a new ConfigNode cluster is started.</li></ul><h3 id="_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_3-failed-to-start-datanode-for-the-first-time-how-to-find-the-reason" aria-hidden="true">#</a> 3). Failed to start DataNode for the first time, how to find the reason?</h3><ul><li>Make sure that the data/datanode directory is cleared when start DataNode for the first time. If the start result is “Reject DataNode restart.”, maybe the data/datanode directory is not cleared.</li><li>Make sure that the &lt;IP+Port&gt; used by DataNode is not occupied, and the &lt;IP+Port&gt; is also not conflicted with other DataNodes.</li><li>Make sure that the <code>dn_target_confignode_list</code> points to the alive ConfigNode.</li></ul><h3 id="_4-failed-to-remove-datanode-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#_4-failed-to-remove-datanode-how-to-find-the-reason" aria-hidden="true">#</a> 4). Failed to remove DataNode, how to find the reason?</h3>',9),f={href:"http://remove-datanode.sh",target:"_blank",rel:"noopener noreferrer"},u=n("<li>Only when the number of available DataNodes in the cluster is greater than max(schema_replication_factor, data_replication_factor), removing operation can be executed.</li><li>Removing DataNode will migrate the data from the removing DataNode to other alive DataNodes. Data migration is based on Region, if some regions are migrated failed, the removing DataNode will always in the status of <code>Removing</code>.</li><li>If the DataNode is in the status of <code>Removing</code>, the regions in the removing DataNode will also in the status of <code>Removing</code> or <code>Unknown</code>, which are unavailable status. Besides, the removing DataNode will not receive new write requests from client.<br> And users can use the command <code>set system status to running</code> to make the status of DataNode from Removing to Running;<br> If users want to make the Regions from Removing to available status, command <code>migrate region from datanodeId1 to datanodeId2</code> can take effect, this command can migrate the regions to other alive DataNodes.<br> Besides, IoTDB will publish <code>remove-datanode.sh -f</code> command in the next version, which can remove DataNodes forced (The failed migrated regions will be discarded).</li>",3),g=n('<h3 id="_5-whether-the-down-datanode-can-be-removed" tabindex="-1"><a class="header-anchor" href="#_5-whether-the-down-datanode-can-be-removed" aria-hidden="true">#</a> 5). Whether the down DataNode can be removed?</h3><ul><li>The down DataNode can be removed only when the replica factor of schema and data is greater than 1.<br> Besides, IoTDB will publish <code>remove-datanode.sh -f</code> function in the next version.</li></ul><h3 id="_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0" tabindex="-1"><a class="header-anchor" href="#_6-what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0" aria-hidden="true">#</a> 6).What should be paid attention to when upgrading from 0.13 to 1.0?</h3><ul><li>The file structure between 0.13 and 1.0 is different, we can&#39;t copy the data directory from 0.13 to 1.0 to use directly.<br> If you want to load the data from 0.13 to 1.0, you can use the LOAD function.</li><li>The default RPC address of 0.13 is <code>0.0.0.0</code>, but the default RPC address of 1.0 is <code>127.0.0.1</code>.</li></ul><h2 id="_2-cluster-restart" tabindex="-1"><a class="header-anchor" href="#_2-cluster-restart" aria-hidden="true">#</a> 2. Cluster Restart</h2><h3 id="_1-how-to-restart-any-confignode-in-the-cluster" tabindex="-1"><a class="header-anchor" href="#_1-how-to-restart-any-confignode-in-the-cluster" aria-hidden="true">#</a> 1). How to restart any ConfigNode in the cluster?</h3>',6),_={href:"http://stop-confignode.sh",target:"_blank",rel:"noopener noreferrer"},w={href:"http://start-confignode.sh",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"_2-how-to-restart-any-datanode-in-the-cluster",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-how-to-restart-any-datanode-in-the-cluster","aria-hidden":"true"},"#"),t(" 2). How to restart any DataNode in the cluster?")],-1),p={href:"http://stop-datanode.sh",target:"_blank",rel:"noopener noreferrer"},b={href:"http://start-datanode.sh",target:"_blank",rel:"noopener noreferrer"},N=e("h3",{id:"_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed","aria-hidden":"true"},"#"),t(" 3). If it's possible to restart ConfigNode using the old data directory when it's removed?")],-1),v=e("ul",null,[e("li",null,`Can't. The running result will be "Reject ConfigNode restart. Because there are no corresponding ConfigNode(whose nodeId=xx) in the cluster".`)],-1),y=e("h3",{id:"_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed","aria-hidden":"true"},"#"),t(" 4). If it's possible to restart DataNode using the old data directory when it's removed?")],-1),x=e("ul",null,[e("li",null,`Can't. The running result will be "Reject DataNode restart. Because there are no corresponding DataNode(whose nodeId=xx) in the cluster. Possible solutions are as follows:...".`)],-1),k={id:"_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid",tabindex:"-1"},D=e("a",{class:"header-anchor",href:"#_5-can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid","aria-hidden":"true"},"#",-1),C={href:"http://start-confignode.sh/start-datanode.sh",target:"_blank",rel:"noopener noreferrer"},I=n('<ul><li>Can&#39;t. The running result will be &quot;The port is already occupied&quot;.</li></ul><h2 id="_3-cluster-maintenance" tabindex="-1"><a class="header-anchor" href="#_3-cluster-maintenance" aria-hidden="true">#</a> 3. Cluster Maintenance</h2><h3 id="_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown" tabindex="-1"><a class="header-anchor" href="#_1-how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown" aria-hidden="true">#</a> 1). How to find the reason when Show cluster failed, and error logs like &quot;please check server status&quot; are shown?</h3><ul><li>Make sure that more than one half ConfigNodes are alive.</li><li>Make sure that the DataNode connected by the client is alive.</li></ul><h3 id="_2-how-to-fix-one-datanode-when-the-disk-file-is-broken" tabindex="-1"><a class="header-anchor" href="#_2-how-to-fix-one-datanode-when-the-disk-file-is-broken" aria-hidden="true">#</a> 2). How to fix one DataNode when the disk file is broken?</h3>',5),S={href:"http://remove-datanode.sh",target:"_blank",rel:"noopener noreferrer"},R=e("li",null,"IoTDB will publish Node-Fix tools in the next version.",-1),T=e("h3",{id:"_3-how-to-decrease-the-memory-usage-of-confignode-datanode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-how-to-decrease-the-memory-usage-of-confignode-datanode","aria-hidden":"true"},"#"),t(" 3). How to decrease the memory usage of ConfigNode/DataNode?")],-1),A=e("ul",null,[e("li",null,"Adjust the MAX_HEAP_SIZE、MAX_DIRECT_MEMORY_SIZE options in conf/confignode-env.sh and conf/datanode-env.sh.")],-1);function P(E,F){const o=s("ExternalLinkIcon");return d(),h("div",null,[r(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),r(" TOC "),c,e("ul",null,[e("li",null,[t("Examine whether the parameter of "),e("a",f,[t("remove-datanode.sh"),a(o)]),t(" is correct, only rpcIp:rpcPort and dataNodeId are correct parameter.")]),u]),g,e("ul",null,[e("li",null,[t("First step: stop the process by "),e("a",_,[t("stop-confignode.sh"),a(o)]),t(" or kill PID of ConfigNode.")]),e("li",null,[t("Second step: execute "),e("a",w,[t("start-confignode.sh"),a(o)]),t(" to restart ConfigNode.")])]),m,e("ul",null,[e("li",null,[t("First step: stop the process by "),e("a",p,[t("stop-datanode.sh"),a(o)]),t(" or kill PID of DataNode.")]),e("li",null,[t("Second step: execute "),e("a",b,[t("start-datanode.sh"),a(o)]),t(" to restart DataNode.")])]),N,v,y,x,e("h3",k,[D,t(" 5). Can we execute "),e("a",C,[t("start-confignode.sh/start-datanode.sh"),a(o)]),t(" successfully when delete the data directory of given ConfigNode/DataNode without killing the PID?")]),I,e("ul",null,[e("li",null,[t("We can use "),e("a",S,[t("remove-datanode.sh"),a(o)]),t(" to fix it. Remove-datanode will migrate the data in the removing DataNode to other alive DataNodes.")]),R]),T,A])}const B=i(l,[["render",P],["__file","FAQ-for-cluster-setup.html.vue"]]);export{B as default};
