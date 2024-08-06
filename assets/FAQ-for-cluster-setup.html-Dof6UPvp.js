import{_ as d,r as i,o as s,c as l,b as e,d as a,a as t,e as o}from"./app-DJKa25Tg.js";const r={},c=o('<h2 id="分布式部署-faq" tabindex="-1"><a class="header-anchor" href="#分布式部署-faq"><span>分布式部署 FAQ</span></a></h2><h3 id="一、集群启停" tabindex="-1"><a class="header-anchor" href="#一、集群启停"><span>一、集群启停</span></a></h3><h4 id="_1-confignode初次启动失败-如何排查原因" tabindex="-1"><a class="header-anchor" href="#_1-confignode初次启动失败-如何排查原因"><span>1. ConfigNode初次启动失败，如何排查原因？</span></a></h4><ul><li>ConfigNode初次启动时确保已清空data/confignode目录</li><li>确保该ConfigNode使用到的&lt;IP+端口&gt;没有被占用，没有与已启动的ConfigNode使用到的&lt;IP+端口&gt;冲突</li><li>确保该ConfigNode的cn_target_confignode_list（指向存活的ConfigNode；如果该ConfigNode是启动的第一个ConfigNode，该值指向自身）配置正确</li><li>确保该ConfigNode的配置项（共识协议、副本数等）等与cn_target_confignode_list对应的ConfigNode集群一致</li></ul><h4 id="_2-confignode初次启动成功-show-cluster的结果里为何没有该节点" tabindex="-1"><a class="header-anchor" href="#_2-confignode初次启动成功-show-cluster的结果里为何没有该节点"><span>2. ConfigNode初次启动成功，show cluster的结果里为何没有该节点？</span></a></h4><ul><li>检查cn_target_confignode_list是否正确指向了正确的地址； 如果cn_target_confignode_list指向了自身，则会启动一个新的ConfigNode集群</li></ul><h4 id="_3-datanode初次启动失败-如何排查原因" tabindex="-1"><a class="header-anchor" href="#_3-datanode初次启动失败-如何排查原因"><span>3. DataNode初次启动失败，如何排查原因？</span></a></h4><ul><li>DataNode初次启动时确保已清空data/datanode目录。 如果启动结果为“Reject DataNode restart.”则表示启动时可能没有清空data/datanode目录</li><li>确保该DataNode使用到的&lt;IP+端口&gt;没有被占用，没有与已启动的DataNode使用到的&lt;IP+端口&gt;冲突</li><li>确保该DataNode的dn_target_confignode_list指向存活的ConfigNode</li></ul><h4 id="_4-移除datanode执行失败-如何排查" tabindex="-1"><a class="header-anchor" href="#_4-移除datanode执行失败-如何排查"><span>4. 移除DataNode执行失败，如何排查？</span></a></h4>',9),h=e("li",null,"检查remove-datanode脚本的参数是否正确，是否传入了正确的ip:port或正确的dataNodeId",-1),g=e("li",null,"只有集群可用节点数量 > max(元数据副本数量, 数据副本数量)时，移除操作才允许被执行",-1),f=e("li",null,"执行移除DataNode的过程会将该DataNode上的数据迁移到其他存活的DataNode，数据迁移以Region为粒度，如果某个Region迁移失败，则被移除的DataNode会一直处于Removing状态",-1),_=e("br",null,null,-1),p=e("br",null,null,-1),u=e("br",null,null,-1),N={href:"http://xn--IoTDBremove-datanode-f055at3i1sdn52bz2aw07gus4dzw4i.sh",target:"_blank",rel:"noopener noreferrer"},m=o('<h4 id="_5-挂掉的datanode是否支持移除" tabindex="-1"><a class="header-anchor" href="#_5-挂掉的datanode是否支持移除"><span>5. 挂掉的DataNode是否支持移除？</span></a></h4><ul><li>当前集群副本数量大于1时可以移除。 如果集群副本数量等于1，则不支持移除。 在下个版本会推出强制移除的命令</li></ul><h4 id="_6-从0-13升级到1-0需要注意什么" tabindex="-1"><a class="header-anchor" href="#_6-从0-13升级到1-0需要注意什么"><span>6. 从0.13升级到1.0需要注意什么？</span></a></h4><ul><li>0.13版本与1.0版本的文件目录结构是不同的，不能将0.13的data目录直接拷贝到1.0集群使用。如果需要将0.13的数据导入至1.0，可以使用LOAD功能</li><li>0.13版本的默认RPC地址是0.0.0.0，1.0版本的默认RPC地址是127.0.0.1</li></ul><h3 id="二、集群重启" tabindex="-1"><a class="header-anchor" href="#二、集群重启"><span>二、集群重启</span></a></h3><h4 id="_1-如何重启集群中的某个confignode" tabindex="-1"><a class="header-anchor" href="#_1-如何重启集群中的某个confignode"><span>1. 如何重启集群中的某个ConfigNode？</span></a></h4><ul><li>第一步：通过stop-confignode.sh或kill进程方式关闭ConfigNode进程</li><li>第二步：通过执行start-confignode.sh启动ConfigNode进程实现重启</li><li>下个版本IoTDB会提供一键重启的操作</li></ul><h4 id="_2-如何重启集群中的某个datanode" tabindex="-1"><a class="header-anchor" href="#_2-如何重启集群中的某个datanode"><span>2. 如何重启集群中的某个DataNode？</span></a></h4><ul><li>第一步：通过stop-datanode.sh或kill进程方式关闭DataNode进程</li><li>第二步：通过执行start-datanode.sh启动DataNode进程实现重启</li><li>下个版本IoTDB会提供一键重启的操作</li></ul><h4 id="_3-将某个confignode移除后-remove-confignode-能否再利用该confignode的data目录重启" tabindex="-1"><a class="header-anchor" href="#_3-将某个confignode移除后-remove-confignode-能否再利用该confignode的data目录重启"><span>3. 将某个ConfigNode移除后（remove-confignode），能否再利用该ConfigNode的data目录重启？</span></a></h4><ul><li>不能。会报错：Reject ConfigNode restart. Because there are no corresponding ConfigNode(whose nodeId=xx) in the cluster.</li></ul><h4 id="_4-将某个datanode移除后-remove-datanode-能否再利用该datanode的data目录重启" tabindex="-1"><a class="header-anchor" href="#_4-将某个datanode移除后-remove-datanode-能否再利用该datanode的data目录重启"><span>4. 将某个DataNode移除后（remove-datanode），能否再利用该DataNode的data目录重启？</span></a></h4><ul><li>不能正常重启，启动结果为“Reject DataNode restart. Because there are no corresponding DataNode(whose nodeId=xx) in the cluster. Possible solutions are as follows:...”</li></ul>',13),C={id:"_5-用户看到某个confignode-datanode变成了unknown状态-在没有kill对应进程的情况下-直接删除掉confignode-datanode对应的data目录-然后执行start-confignode-sh-start-datanode-sh-这种情况下能成功吗",tabindex:"-1"},D={class:"header-anchor",href:"#_5-用户看到某个confignode-datanode变成了unknown状态-在没有kill对应进程的情况下-直接删除掉confignode-datanode对应的data目录-然后执行start-confignode-sh-start-datanode-sh-这种情况下能成功吗"},x={href:"http://xn--start-confignode-p301a820q612chrvf.sh/start-datanode.sh%EF%BC%8C%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E4%B8%8B%E8%83%BD%E6%88%90%E5%8A%9F%E5%90%97",target:"_blank",rel:"noopener noreferrer"},b=o('<ul><li>无法启动成功，会报错端口已被占用</li></ul><h3 id="三、集群运维" tabindex="-1"><a class="header-anchor" href="#三、集群运维"><span>三、集群运维</span></a></h3><h4 id="_1-show-cluster执行失败-显示-please-check-server-status-如何排查" tabindex="-1"><a class="header-anchor" href="#_1-show-cluster执行失败-显示-please-check-server-status-如何排查"><span>1. Show cluster执行失败，显示“please check server status”，如何排查?</span></a></h4><ul><li>确保ConfigNode集群一半以上的节点处于存活状态</li><li>确保客户端连接的DataNode处于存活状态</li></ul><h4 id="_2-某一datanode节点的磁盘文件损坏-如何修复这个节点" tabindex="-1"><a class="header-anchor" href="#_2-某一datanode节点的磁盘文件损坏-如何修复这个节点"><span>2. 某一DataNode节点的磁盘文件损坏，如何修复这个节点?</span></a></h4><ul><li>当前只能通过remove-datanode的方式进行实现。remove-datanode执行的过程中会将该DataNode上的数据迁移至其他存活的DataNode节点（前提是集群设置的副本数大于1）</li><li>下个版本IoTDB会提供一键修复节点的功能</li></ul><h4 id="_3-如何降低confignode、datanode使用的内存" tabindex="-1"><a class="header-anchor" href="#_3-如何降低confignode、datanode使用的内存"><span>3. 如何降低ConfigNode、DataNode使用的内存？</span></a></h4><ul><li>在conf/confignode-env.sh、conf/datanode-env.sh文件可通过调整MAX_HEAP_SIZE、MAX_DIRECT_MEMORY_SIZE等选项可以调整ConfigNode、DataNode使用的最大堆内、堆外内存</li></ul>',8);function v(k,I){const n=i("ExternalLinkIcon");return s(),l("div",null,[c,e("ul",null,[h,g,f,e("li",null,[a("补充：处于Removing状态的节点，其节点上的Region也是Removing或Unknown状态，即不可用状态。 该Remvoing状态的节点也不会接受客户端的请求。"),_,a(" 如果要使Removing状态的节点变为可用，用户可以使用set system status to running 命令将该节点设置为Running状态；"),p,a(" 如果要使迁移失败的Region处于可用状态，可以使用migrate region from datanodeId1 to datanodeId2 命令将该不可用的Region迁移到其他存活的节点。"),u,e("a",N,[a("另外IoTDB后续也会提供remove-datanode.sh"),t(n)]),a(" -f命令，来强制移除节点（迁移失败的Region会直接丢弃）")])]),m,e("h4",C,[e("a",D,[e("span",null,[a("5. 用户看到某个ConfigNode/DataNode变成了Unknown状态，在没有kill对应进程的情况下，直接删除掉ConfigNode/DataNode对应的data目录，"),e("a",x,[a("然后执行start-confignode.sh/start-datanode.sh，这种情况下能成功吗"),t(n)]),a("?")])])]),b])}const R=d(r,[["render",v],["__file","FAQ-for-cluster-setup.html.vue"]]),E=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/FAQ/FAQ-for-cluster-setup.html","title":"","lang":"zh-CN","frontmatter":{"description":"分布式部署 FAQ 一、集群启停 1. ConfigNode初次启动失败，如何排查原因？ ConfigNode初次启动时确保已清空data/confignode目录 确保该ConfigNode使用到的<IP+端口>没有被占用，没有与已启动的ConfigNode使用到的<IP+端口>冲突 确保该ConfigNode的cn_target_confignod...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/FAQ/FAQ-for-cluster-setup.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/FAQ/FAQ-for-cluster-setup.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"分布式部署 FAQ 一、集群启停 1. ConfigNode初次启动失败，如何排查原因？ ConfigNode初次启动时确保已清空data/confignode目录 确保该ConfigNode使用到的<IP+端口>没有被占用，没有与已启动的ConfigNode使用到的<IP+端口>冲突 确保该ConfigNode的cn_target_confignod..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"分布式部署 FAQ","slug":"分布式部署-faq","link":"#分布式部署-faq","children":[{"level":3,"title":"一、集群启停","slug":"一、集群启停","link":"#一、集群启停","children":[]},{"level":3,"title":"二、集群重启","slug":"二、集群重启","link":"#二、集群重启","children":[]},{"level":3,"title":"三、集群运维","slug":"三、集群运维","link":"#三、集群运维","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.46,"words":1337},"filePathRelative":"zh/UserGuide/V1.1.x/FAQ/FAQ-for-cluster-setup.md","localizedDate":"2023年7月10日","autoDesc":true}');export{R as comp,E as data};
