import{_ as o,r as i,o as c,c as l,b as n,d as a,a as e,e as t}from"./app-nVIpYHtH.js";const p={},r=n("h1",{id:"installation-by-docker",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installation-by-docker"},[n("span",null,"Installation by Docker")])],-1),d={href:"https://hub.docker.com/r/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),k=t(`<h2 id="have-a-try" tabindex="-1"><a class="header-anchor" href="#have-a-try"><span>Have a try</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># get IoTDB official image</span>
<span class="token function">docker</span> pull apache/iotdb:1.3.0-standalone
<span class="token comment"># create docker bridge network</span>
<span class="token function">docker</span> network create <span class="token parameter variable">--driver</span><span class="token operator">=</span>bridge <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">172.18</span>.0.0/16 <span class="token parameter variable">--gateway</span><span class="token operator">=</span><span class="token number">172.18</span>.0.1 iotdb
<span class="token comment"># create docker container</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">--hostname</span> iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">--network</span> iotdb <span class="token punctuation">\\</span>
              <span class="token parameter variable">--ip</span> <span class="token number">172.18</span>.0.6 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-p</span> <span class="token number">6667</span>:6667 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_internal_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_seed_config_node</span><span class="token operator">=</span>iotdb-service:10710 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_internal_port</span><span class="token operator">=</span><span class="token number">10710</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_consensus_port</span><span class="token operator">=</span><span class="token number">10720</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_rpc_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_internal_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_seed_config_node</span><span class="token operator">=</span>iotdb-service:10710 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_mpp_data_exchange_port</span><span class="token operator">=</span><span class="token number">10740</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_schema_region_consensus_port</span><span class="token operator">=</span><span class="token number">10750</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_data_region_consensus_port</span><span class="token operator">=</span><span class="token number">10760</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_rpc_port</span><span class="token operator">=</span><span class="token number">6667</span> <span class="token punctuation">\\</span>
              apache/iotdb:1.3.0-standalone              
<span class="token comment"># execute SQL</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-ti</span> iotdb-service /iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> iotdb-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>External access：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># &lt;IP Address/hostname&gt; is the real IP or domain address rather than the one in docker network, could be 127.0.0.1 within the computer.</span>
<span class="token variable">$IOTDB_HOME</span>/sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>IP Address/hostname<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token number">6667</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice：The confignode service would fail when restarting this container if the IP Adress of the container has been changed.</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose-standalone.yml</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">iotdb-service</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.3.0<span class="token punctuation">-</span>standalone
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>service
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>service
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6667:6667&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> cn_internal_address=iotdb<span class="token punctuation">-</span>service
      <span class="token punctuation">-</span> cn_internal_port=10710
      <span class="token punctuation">-</span> cn_consensus_port=10720
      <span class="token punctuation">-</span> cn_seed_config_node=iotdb<span class="token punctuation">-</span>service<span class="token punctuation">:</span><span class="token number">10710</span>
      <span class="token punctuation">-</span> dn_rpc_address=iotdb<span class="token punctuation">-</span>service
      <span class="token punctuation">-</span> dn_internal_address=iotdb<span class="token punctuation">-</span>service
      <span class="token punctuation">-</span> dn_rpc_port=6667
      <span class="token punctuation">-</span> dn_mpp_data_exchange_port=10740
      <span class="token punctuation">-</span> dn_schema_region_consensus_port=10750
      <span class="token punctuation">-</span> dn_data_region_consensus_port=10760
      <span class="token punctuation">-</span> dn_seed_config_node=iotdb<span class="token punctuation">-</span>service<span class="token punctuation">:</span><span class="token number">10710</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/iotdb/data
        <span class="token punctuation">-</span> ./logs<span class="token punctuation">:</span>/iotdb/logs
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">iotdb</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.18.0.6

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">iotdb</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you&#39;d like to limit the memory of IoTDB, follow these steps:</p>`,7),m=n("li",null,[a("Add another configuration of volumes: "),n("code",null,"./iotdb-conf:/iotdb/conf"),a(" and then start the IoTDB docker container. Thus, there are some configuration files in directory of iotdb-conf.")],-1),v={href:"http://confignode-env.sh",target:"_blank",rel:"noopener noreferrer"},b={href:"http://datanode-env.sh",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"deploy-cluster",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#deploy-cluster"},[n("span",null,"deploy cluster")])],-1),_=n("br",null,null,-1),g={href:"https://github.com/apache/iotdb/tree/master/docker/src/main/DockerCompose/docker-compose-cluster-1c2d.yml",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>Suppose that there are three computers of iotdb-1, iotdb-2 and iotdb-3. We called them nodes.<br> Here is the docker-compose file of iotdb-2, as the sample:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">iotdb-confignode</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.3.0<span class="token punctuation">-</span>confignode
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>confignode
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> cn_internal_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span>
      <span class="token punctuation">-</span> cn_seed_config_node=iotdb<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">10710</span>
      <span class="token punctuation">-</span> cn_internal_port=10710
      <span class="token punctuation">-</span> cn_consensus_port=10720
      <span class="token punctuation">-</span> schema_replication_factor=3
      <span class="token punctuation">-</span> schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
      <span class="token punctuation">-</span> config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
      <span class="token punctuation">-</span> data_replication_factor=3
      <span class="token punctuation">-</span> data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./data/confignode<span class="token punctuation">:</span>/iotdb/data
      <span class="token punctuation">-</span> ./logs/confignode<span class="token punctuation">:</span>/iotdb/logs
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>

  <span class="token key atrule">iotdb-datanode</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.3.0<span class="token punctuation">-</span>datanode
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>datanode
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> dn_rpc_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span>
      <span class="token punctuation">-</span> dn_internal_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span>
      <span class="token punctuation">-</span> dn_seed_config_node=iotdb<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">10710</span>
      <span class="token punctuation">-</span> data_replication_factor=3
      <span class="token punctuation">-</span> dn_rpc_port=6667
      <span class="token punctuation">-</span> dn_mpp_data_exchange_port=10740
      <span class="token punctuation">-</span> dn_schema_region_consensus_port=10750
      <span class="token punctuation">-</span> dn_data_region_consensus_port=10760
      <span class="token punctuation">-</span> data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus
       <span class="token punctuation">-</span> schema_replication_factor=3
      <span class="token punctuation">-</span> schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
      <span class="token punctuation">-</span> config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./data/datanode<span class="token punctuation">:</span>/iotdb/data/
      <span class="token punctuation">-</span> ./logs/datanode<span class="token punctuation">:</span>/iotdb/logs/
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice：</p><ol><li>The <code>cn_seed_config_node</code> and <code>dn_seed_config_node</code> of three nodes must the same and they are the first starting node of <code>iotdb-1</code> with the <code>cn_internal_port</code> of 10710。</li><li>In this docker-compose file，<code>iotdb-2</code> should be replace with the real IP or hostname of each node to generate docker compose files in the other nodes.</li><li>The services would talk with each other, so they need map the /etc/hosts file or add the <code>extra_hosts</code> to the docker compose file.</li><li>We must start the IoTDB services of <code>iotdb-1</code> first at the first time of starting.</li><li>Stop and remove all the IoTDB services and clean up the <code>data</code> and <code>logs</code> directories of the 3 nodes，then start the cluster again.</li></ol><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>All configuration files are in the directory of <code>conf</code>.<br> The elements of environment in docker-compose file is the configurations of IoTDB.<br> If you&#39;d changed the configurations files in conf, please map the directory of <code>conf</code> in docker-compose file.</p><h3 id="log-level" tabindex="-1"><a class="header-anchor" href="#log-level"><span>log level</span></a></h3><p>The conf directory contains log configuration files, namely logback-confignode.xml and logback-datanode.xml.</p><h3 id="memory-set" tabindex="-1"><a class="header-anchor" href="#memory-set"><span>memory set</span></a></h3>`,9),y={href:"http://confignode-env.sh",target:"_blank",rel:"noopener noreferrer"},D={href:"http://datanode-env.sh",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"ON_HEAP_MEMORY=8G, OFF_HEAP_MEMORY=2G",-1),T=t('<h2 id="upgrade-iotdb" tabindex="-1"><a class="header-anchor" href="#upgrade-iotdb"><span>upgrade IoTDB</span></a></h2><ol><li>Downloads the newer IoTDB docker image from docker hub</li><li>Update the image of docker-compose file</li><li>Stop the IoTDB docker containers with the commands of docker stop and docker rm.</li><li>Start IoTDB with <code>docker-compose -f docker-compose-standalone.yml up -d</code></li></ol><h2 id="boot-automatically" tabindex="-1"><a class="header-anchor" href="#boot-automatically"><span>boot automatically</span></a></h2><ol><li>Add <code>restart: always</code> to every service of IoTDB in docker-compose file</li><li>Set docker service to boot automatically<br> e.g. in CentOS: <code>systemctl enable docker</code></li></ol>',4);function x(w,B){const s=i("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[a("Apache IoTDB' Docker image is released on "),n("a",d,[a("https://hub.docker.com/r/apache/iotdb"),e(s)]),u,a(" Add environments of docker to update the configurations of Apache IoTDB.")]),k,n("ol",null,[m,n("li",null,[a("Change the memory configurations in "),n("a",v,[a("confignode-env.sh"),e(s)]),a(" and "),n("a",b,[a("datanode-env.sh"),e(s)]),a(" of iotdb-conf, and then restart the IoTDB docker container again.")])]),h,n("p",null,[a("Until now, we support host and overlay networks but haven't supported bridge networks on multiple computers."),_,a(" Overlay networks see "),n("a",g,[a("1C2D"),e(s)]),a(" and here are the configurations and operation steps to start an IoTDB cluster with docker using host networks。")]),f,n("p",null,[a("The conf directory contains memory configuration files, namely "),n("a",y,[a("confignode-env.sh"),e(s)]),a(" and "),n("a",D,[a("datanode-env.sh"),e(s)]),a(". JVM heap size uses ON_HEAP_MEMORY and JVM direct memroy uses OFF_HEAP_MEMORY. e.g. "),I]),T])}const M=o(p,[["render",x],["__file","Docker-Install.html.vue"]]),C=JSON.parse(`{"path":"/UserGuide/latest/Deployment-and-Maintenance/Docker-Install.html","title":"Installation by Docker","lang":"en-US","frontmatter":{"description":"Installation by Docker Apache IoTDB' Docker image is released on https://hub.docker.com/r/apache/iotdb Add environments of docker to update the configurations of Apache IoTDB. H...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Docker-Install.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Docker-Install.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Installation by Docker"}],["meta",{"property":"og:description","content":"Installation by Docker Apache IoTDB' Docker image is released on https://hub.docker.com/r/apache/iotdb Add environments of docker to update the configurations of Apache IoTDB. H..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-18T04:24:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T04:24:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Installation by Docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T04:24:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Have a try","slug":"have-a-try","link":"#have-a-try","children":[]},{"level":2,"title":"deploy cluster","slug":"deploy-cluster","link":"#deploy-cluster","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"log level","slug":"log-level","link":"#log-level","children":[]},{"level":3,"title":"memory set","slug":"memory-set","link":"#memory-set","children":[]}]},{"level":2,"title":"upgrade IoTDB","slug":"upgrade-iotdb","link":"#upgrade-iotdb","children":[]},{"level":2,"title":"boot automatically","slug":"boot-automatically","link":"#boot-automatically","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1710735844000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"changxue2022","email":"115675618+changxue2022@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.91,"words":874},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/Docker-Install.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{M as comp,C as data};
