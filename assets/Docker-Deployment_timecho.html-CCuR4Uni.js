import{_ as e,o as i,c as a,e as n}from"./app-BZ7vU6A9.js";const t={},s=n(`<h1 id="docker-deployment" tabindex="-1"><a class="header-anchor" href="#docker-deployment"><span>Docker Deployment</span></a></h1><h2 id="environmental-preparation" tabindex="-1"><a class="header-anchor" href="#environmental-preparation"><span>Environmental Preparation</span></a></h2><h3 id="docker-installation" tabindex="-1"><a class="header-anchor" href="#docker-installation"><span>Docker Installation</span></a></h3><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>#Taking Ubuntu as an example, other operating systems can search for installation methods themselves
#step1: Install some necessary system tools
sudo apt-get update
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
#step2: Install GPG certificate
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
#step3: Write software source information
sudo add-apt-repository &quot;deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable&quot;
#step4: Update and install Docker CE
sudo apt-get -y update
sudo apt-get -y install docker-ce
#step5: Set Docker to start automatically upon startup
sudo systemctl enable docker
#step6： Verify if Docker installation is successful
docker --version  #Display version information, indicating successful installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose-installation" tabindex="-1"><a class="header-anchor" href="#docker-compose-installation"><span>Docker-compose Installation</span></a></h3><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>#Installation command
curl -L &quot;https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)&quot; -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s  /usr/local/bin/docker-compose  /usr/bin/docker-compose
#Verify if the installation was successful
docker-compose --version  #Displaying version information indicates successful installation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="install-the-dmidecode-plugin" tabindex="-1"><a class="header-anchor" href="#install-the-dmidecode-plugin"><span>Install The Dmidecode Plugin</span></a></h3><p>By default, Linux servers should already be installed. If not, you can use the following command to install them.</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>sudo apt-get install dmidecode 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After installing dmidecode, search for the installation path: <code>wherever dmidecode</code>. Assuming the result is <code>/usr/sbin/dmidecode</code>, remember this path as it will be used in the later docker compose yml file.</p><h3 id="get-container-image-of-iotdb" tabindex="-1"><a class="header-anchor" href="#get-container-image-of-iotdb"><span>Get Container Image Of IoTDB</span></a></h3><p>You can contact business or technical support to obtain container images for IoTDB Enterprise Edition.</p><h2 id="stand-alone-deployment" tabindex="-1"><a class="header-anchor" href="#stand-alone-deployment"><span>Stand-Alone Deployment</span></a></h2><p>This section demonstrates how to deploy a standalone Docker version of 1C1D.</p><h3 id="load-image-file" tabindex="-1"><a class="header-anchor" href="#load-image-file"><span>Load Image File</span></a></h3><p>For example, the container image file name of IoTDB obtained here is: <code>iotdb-enterprise-1.3.2-3-standalone-docker.tar.gz</code></p><p>Load image:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker load -i iotdb-enterprise-1.3.2.3-standalone-docker.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>View image:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/单机-查看镜像.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="create-docker-bridge-network" tabindex="-1"><a class="header-anchor" href="#create-docker-bridge-network"><span>Create Docker Bridge Network</span></a></h3><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker network create --driver=bridge --subnet=172.18.0.0/16 --gateway=172.18.0.1  iotdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="write-the-yml-file-for-docker-compose" tabindex="-1"><a class="header-anchor" href="#write-the-yml-file-for-docker-compose"><span>Write The Yml File For docker-compose</span></a></h3><p>Here we take the example of consolidating the IoTDB installation directory and yml files in the/docker iotdb folder:</p><p>The file directory structure is:<code>/docker-iotdb/iotdb</code>, <code>/docker-iotdb/docker-compose-standalone.yml </code></p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker-iotdb：
├── iotdb  #Iotdb installation directory
│── docker-compose-standalone.yml #YML file for standalone Docker Composer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The complete docker-compose-standalone.yml content is as follows:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>version: &quot;3&quot;
services:
  iotdb-service:
    image: iotdb-enterprise:1.3.2.3-standalone #The image used
    hostname: iotdb
    container_name: iotdb
    restart: always       
    ports:
      - &quot;6667:6667&quot;
    environment:
      - cn_internal_address=iotdb
      - cn_internal_port=10710
      - cn_consensus_port=10720
      - cn_seed_config_node=iotdb:10710
      - dn_rpc_address=iotdb
      - dn_internal_address=iotdb
      - dn_rpc_port=6667
      - dn_internal_port=10730
      - dn_mpp_data_exchange_port=10740
      - dn_schema_region_consensus_port=10750
      - dn_data_region_consensus_port=10760
      - dn_seed_config_node=iotdb:10710
    privileged: true
    volumes:
        - ./iotdb/activation:/iotdb/activation
        - ./iotdb/data:/iotdb/data
        - ./iotdb/logs:/iotdb/logs
        - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro
        - /dev/mem:/dev/mem:ro
    networks:
      iotdb:
        ipv4_address: 172.18.0.6
networks:
  iotdb:
    external: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="first-launch" tabindex="-1"><a class="header-anchor" href="#first-launch"><span>First Launch</span></a></h3><p>Use the following command to start:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>cd　/docker-iotdb
docker-compose -f docker-compose-standalone.yml up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Due to lack of activation, it is normal to exit directly upon initial startup. The initial startup is to obtain the machine code file for the subsequent activation process.</p><figure><img src="https://alioss.timecho.com/docs/img/单机-激活.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="apply-for-activation" tabindex="-1"><a class="header-anchor" href="#apply-for-activation"><span>Apply For Activation</span></a></h3><ul><li><p>After the first startup, a system_info file will be generated in the physical machine directory <code>/docker-iotdb/iotdb/activation</code>, and this file will be copied to the Timecho staff.</p><figure><img src="https://alioss.timecho.com/docs/img/单机-申请激活1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Received the license file returned by the staff, copy the license file to the <code>/docker iotdb/iotdb/activation</code> folder.</p><figure><img src="https://alioss.timecho.com/docs/img/单机-申请激活2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="restart-iotdb" tabindex="-1"><a class="header-anchor" href="#restart-iotdb"><span>Restart IoTDB</span></a></h3><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker-compose  -f docker-compose-standalone.yml   up  -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/启动iotdb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="validate-deployment" tabindex="-1"><a class="header-anchor" href="#validate-deployment"><span>Validate Deployment</span></a></h3><ul><li><p>Viewing the log, the following words indicate successful startup</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker logs -f iotdb-datanode #View log command
2024-07-19 12:02:32,608 [main] INFO  o.a.i.db.service.DataNode:231 - Congratulations, IoTDB DataNode is set up successfully. Now, enjoy yourself!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/单机-验证部署1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Enter the container to view the service running status and activation information</p><p>View the launched container</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/单机-验证部署2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Enter the container, log in to the database through CLI, and use the <code>show cluster</code> command to view the service status and activation status</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker exec -it iotdb   /bin/bash        #Entering the container
./start-cli.sh -h iotdb                  #Log in to the database
IoTDB&gt; show cluster                      #View status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can see that all services are running and the activation status shows as activated.</p><figure><img src="https://alioss.timecho.com/docs/img/单机-验证部署3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="map-conf-directory-optional" tabindex="-1"><a class="header-anchor" href="#map-conf-directory-optional"><span>Map/conf Directory (optional)</span></a></h3><p>If you want to directly modify the configuration file in the physical machine in the future, you can map the/conf folder in the container in three steps:</p><p>Step 1: Copy the/conf directory from the container to/docker-iotdb/iotdb/conf</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker cp iotdb:/iotdb/conf /docker-iotdb/iotdb/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Step 2: Add mappings in docker-compose-standalone.yml</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>    volumes:
        - ./iotdb/conf:/iotdb/conf   #Add mapping for this/conf folder
        - ./iotdb/activation:/iotdb/activation
        - ./iotdb/data:/iotdb/data
        - ./iotdb/logs:/iotdb/logs
        - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro
        - /dev/mem:/dev/mem:ro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step 3: Restart IoTDB</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker-compose  -f docker-compose-standalone.yml  up  -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cluster-deployment" tabindex="-1"><a class="header-anchor" href="#cluster-deployment"><span>Cluster Deployment</span></a></h2><p>This section describes how to manually deploy an instance that includes 3 Config Nodes and 3 Data Nodes, commonly known as a 3C3D cluster.</p><div align="center"><img src="https://alioss.timecho.com/docs/img/20240705141552.png" alt="" style="width:60%;"></div><p><strong>Note: The cluster version currently only supports host and overlay networks, and does not support bridge networks.</strong></p><p>Taking the host network as an example, we will demonstrate how to deploy a 3C3D cluster.</p><h3 id="set-host-name" tabindex="-1"><a class="header-anchor" href="#set-host-name"><span>Set Host Name</span></a></h3><p>Assuming there are currently three Linux servers, the IP addresses and service role assignments are as follows:</p><table><thead><tr><th>Node IP</th><th>Host Name</th><th>Service</th></tr></thead><tbody><tr><td>192.168.1.3</td><td>iotdb-1</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.4</td><td>iotdb-2</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.5</td><td>iotdb-3</td><td>ConfigNode、DataNode</td></tr></tbody></table><p>Configure the host names on three machines separately. To set the host names, configure <code>/etc/hosts</code> on the target server using the following command:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>echo &quot;192.168.1.3  iotdb-1&quot;  &gt;&gt; /etc/hosts
echo &quot;192.168.1.4  iotdb-2&quot;  &gt;&gt; /etc/hosts
echo &quot;192.168.1.5  iotdb-3&quot;  &gt;&gt; /etc/hosts 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="load-image-file-1" tabindex="-1"><a class="header-anchor" href="#load-image-file-1"><span>Load Image File</span></a></h3><p>For example, the container image file name obtained for IoTDB is: <code>iotdb-enterprise-1.3.23-standalone-docker.tar.gz</code></p><p>Execute the load image command on three servers separately:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker load -i iotdb-enterprise-1.3.2.3-standalone-docker.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>View image:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/镜像加载.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="write-the-yml-file-for-docker-compose-1" tabindex="-1"><a class="header-anchor" href="#write-the-yml-file-for-docker-compose-1"><span>Write The Yml File For Docker Compose</span></a></h3><p>Here we take the example of consolidating the IoTDB installation directory and yml files in the /docker-iotdb folder:</p><p>The file directory structure is:/docker-iotdb/iotdb, /docker-iotdb/confignode.yml，/docker-iotdb/datanode.yml</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker-iotdb：
├── confignode.yml #Yml file of confignode
├── datanode.yml   #Yml file of datanode
└── iotdb          #IoTDB installation directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>On each server, two yml files need to be written, namely confignnode. yml and datanode. yml. The example of yml is as follows:</p><p><strong>confignode.yml：</strong></p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>#confignode.yml
version: &quot;3&quot;
services:
  iotdb-confignode:
    image: iotdb-enterprise:1.3.2.3-standalone #The image used
    hostname: iotdb-1|iotdb-2|iotdb-3 #Choose from three options based on the actual situation
    container_name: iotdb-confignode
    command: [&quot;bash&quot;, &quot;-c&quot;, &quot;entrypoint.sh confignode&quot;]
    restart: always
    environment:
      - cn_internal_address=iotdb-1|iotdb-2|iotdb-3 #Choose from three options based on the actual situation
      - cn_internal_port=10710
      - cn_consensus_port=10720
      - cn_seed_config_node=iotdb-1:10710   #The default first node is the seed node
      - schema_replication_factor=3         #Number of metadata copies
      - data_replication_factor=2           #Number of data replicas
    privileged: true
    volumes:
      - ./iotdb/activation:/iotdb/activation
      - ./iotdb/data:/iotdb/data
      - ./iotdb/logs:/iotdb/logs
      - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro
      - /dev/mem:/dev/mem:ro
    network_mode: &quot;host&quot;    #Using the host network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>datanode.yml：</strong></p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>#datanode.yml
version: &quot;3&quot;
services:
  iotdb-datanode:
    image: iotdb-enterprise:1.3.2.3-standalone #The image used
    hostname: iotdb-1|iotdb-2|iotdb-3 #Choose from three options based on the actual situation
    container_name: iotdb-datanode
    command: [&quot;bash&quot;, &quot;-c&quot;, &quot;entrypoint.sh datanode&quot;]
    restart: always
    ports:
      - &quot;6667:6667&quot;
    privileged: true
    environment:
      - dn_rpc_address=iotdb-1|iotdb-2|iotdb-3 #Choose from three options based on the actual situation
      - dn_internal_address=iotdb-1|iotdb-2|iotdb-3 #Choose from three options based on the actual situation
      - dn_seed_config_node=iotdb-1:10710      #The default first node is the seed node
      - dn_rpc_port=6667
      - dn_internal_port=10730
      - dn_mpp_data_exchange_port=10740
      - dn_schema_region_consensus_port=10750
      - dn_data_region_consensus_port=10760
      - schema_replication_factor=3         #Number of metadata copies
      - data_replication_factor=2           #Number of data replicas
    volumes:
      - ./iotdb/activation:/iotdb/activation
      - ./iotdb/data:/iotdb/data
      - ./iotdb/logs:/iotdb/logs
      - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro
      - /dev/mem:/dev/mem:ro
    network_mode: &quot;host&quot;   #Using the host network
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="starting-confignode-for-the-first-time" tabindex="-1"><a class="header-anchor" href="#starting-confignode-for-the-first-time"><span>Starting Confignode For The First Time</span></a></h3><p>First, start configNodes on each of the three servers to obtain the machine code. Pay attention to the startup order, start the first iotdb-1 first, then start iotdb-2 and iotdb-3.</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>cd　/docker-iotdb
docker-compose -f confignode.yml up  -d #Background startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="apply-for-activation-1" tabindex="-1"><a class="header-anchor" href="#apply-for-activation-1"><span>Apply For Activation</span></a></h3><ul><li><p>After starting three confignodes for the first time, a system_info file will be generated in each physical machine directory <code>/docker-iotdb/iotdb/activation</code>, and the system_info files of the three servers will be copied to the Timecho staff;</p><figure><img src="https://alioss.timecho.com/docs/img/单机-申请激活1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Put the three license files into the <code>/docker iotdb/iotdb/activation</code> folder of the corresponding Configurable Node node;</p><figure><img src="https://alioss.timecho.com/docs/img/单机-申请激活2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>After the license is placed in the corresponding activation folder, confignode will be automatically activated without restarting confignode</p></li></ul><h3 id="start-datanode" tabindex="-1"><a class="header-anchor" href="#start-datanode"><span>Start Datanode</span></a></h3><p>Start datanodes on 3 servers separately</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>cd /docker-iotdb
docker-compose  -f  datanode.yml  up -d #Background startup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/集群版-dn启动.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="validate-deployment-1" tabindex="-1"><a class="header-anchor" href="#validate-deployment-1"><span>Validate Deployment</span></a></h3><ul><li><p>Viewing the logs, the following words indicate that the datanode has successfully started</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker logs -f iotdb-datanode #View log command
2024-07-20 16:50:48,937 [main] INFO  o.a.i.db.service.DataNode:231 - Congratulations, IoTDB DataNode is set up successfully. Now, enjoy yourself!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/dn启动.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Enter any container to view the service running status and activation information</p><p>View the launched container</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/查看容器.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Enter the container, log in to the database through CLI, and use the <code>show cluster</code> command to view the service status and activation status</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker exec -it iotdb-datanode /bin/bash #Entering the container
./start-cli.sh -h iotdb-1                #Log in to the database
IoTDB&gt; show cluster                      #View status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can see that all services are running and the activation status shows as activated.</p><figure><img src="https://alioss.timecho.com/docs/img/集群-激活.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="map-conf-directory-optional-1" tabindex="-1"><a class="header-anchor" href="#map-conf-directory-optional-1"><span>Map/conf Directory (optional)</span></a></h3><p>If you want to directly modify the configuration file in the physical machine in the future, you can map the/conf folder in the container in three steps:</p><p>Step 1: Copy the <code>/conf</code> directory from the container to <code>/docker-iotdb/iotdb/conf</code> on each of the three servers</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>docker cp iotdb-confignode:/iotdb/conf /docker-iotdb/iotdb/conf
or
docker cp iotdb-datanode:/iotdb/conf   /docker-iotdb/iotdb/conf 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step 2: Add <code>/conf</code> directory mapping in <code>confignode.yml</code> and <code>datanode. yml</code> on 3 servers</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>#confignode.yml
    volumes:
      - ./iotdb/conf:/iotdb/conf  #Add mapping for this /conf folder
      - ./iotdb/activation:/iotdb/activation
      - ./iotdb/data:/iotdb/data
      - ./iotdb/logs:/iotdb/logs
      - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro
      - /dev/mem:/dev/mem:ro

#datanode.yml
    volumes:
      - ./iotdb/conf:/iotdb/conf   #Add mapping for this /conf folder 
      - ./iotdb/activation:/iotdb/activation
      - ./iotdb/data:/iotdb/data
      - ./iotdb/logs:/iotdb/logs
      - /usr/sbin/dmidecode:/usr/sbin/dmidecode:ro
      - /dev/mem:/dev/mem:ro
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step 3: Restart IoTDB on 3 servers</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>cd /docker-iotdb
docker-compose  -f confignode.yml  up  -d
docker-compose  -f datanode.yml    up  -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,94),d=[s];function o(l,r){return i(),a("div",null,d)}const m=e(t,[["render",o],["__file","Docker-Deployment_timecho.html.vue"]]),u=JSON.parse('{"path":"/UserGuide/latest/Deployment-and-Maintenance/Docker-Deployment_timecho.html","title":"Docker Deployment","lang":"en-US","frontmatter":{"description":"Docker Deployment Environmental Preparation Docker Installation Docker-compose Installation Install The Dmidecode Plugin By default, Linux servers should already be installed. I...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Docker-Deployment_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Docker-Deployment_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Docker Deployment"}],["meta",{"property":"og:description","content":"Docker Deployment Environmental Preparation Docker Installation Docker-compose Installation Install The Dmidecode Plugin By default, Linux servers should already be installed. I..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E6%9F%A5%E7%9C%8B%E9%95%9C%E5%83%8F.PNG"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-15T06:41:58.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-15T06:41:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker Deployment\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E6%9F%A5%E7%9C%8B%E9%95%9C%E5%83%8F.PNG\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E6%BF%80%E6%B4%BB.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E7%94%B3%E8%AF%B7%E6%BF%80%E6%B4%BB1.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E7%94%B3%E8%AF%B7%E6%BF%80%E6%B4%BB2.png\\",\\"https://alioss.timecho.com/docs/img/%E5%90%AF%E5%8A%A8iotdb.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E9%AA%8C%E8%AF%81%E9%83%A8%E7%BD%B21.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E9%AA%8C%E8%AF%81%E9%83%A8%E7%BD%B22.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E9%AA%8C%E8%AF%81%E9%83%A8%E7%BD%B23.png\\",\\"https://alioss.timecho.com/docs/img/%E9%95%9C%E5%83%8F%E5%8A%A0%E8%BD%BD.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E7%94%B3%E8%AF%B7%E6%BF%80%E6%B4%BB1.png\\",\\"https://alioss.timecho.com/docs/img/%E5%8D%95%E6%9C%BA-%E7%94%B3%E8%AF%B7%E6%BF%80%E6%B4%BB2.png\\",\\"https://alioss.timecho.com/docs/img/%E9%9B%86%E7%BE%A4%E7%89%88-dn%E5%90%AF%E5%8A%A8.png\\",\\"https://alioss.timecho.com/docs/img/dn%E5%90%AF%E5%8A%A8.png\\",\\"https://alioss.timecho.com/docs/img/%E6%9F%A5%E7%9C%8B%E5%AE%B9%E5%99%A8.png\\",\\"https://alioss.timecho.com/docs/img/%E9%9B%86%E7%BE%A4-%E6%BF%80%E6%B4%BB.png\\"],\\"dateModified\\":\\"2024-08-15T06:41:58.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Environmental Preparation","slug":"environmental-preparation","link":"#environmental-preparation","children":[{"level":3,"title":"Docker Installation","slug":"docker-installation","link":"#docker-installation","children":[]},{"level":3,"title":"Docker-compose Installation","slug":"docker-compose-installation","link":"#docker-compose-installation","children":[]},{"level":3,"title":"Install The Dmidecode Plugin","slug":"install-the-dmidecode-plugin","link":"#install-the-dmidecode-plugin","children":[]},{"level":3,"title":"Get Container Image Of IoTDB","slug":"get-container-image-of-iotdb","link":"#get-container-image-of-iotdb","children":[]}]},{"level":2,"title":"Stand-Alone Deployment","slug":"stand-alone-deployment","link":"#stand-alone-deployment","children":[{"level":3,"title":"Load Image File","slug":"load-image-file","link":"#load-image-file","children":[]},{"level":3,"title":"Create Docker Bridge Network","slug":"create-docker-bridge-network","link":"#create-docker-bridge-network","children":[]},{"level":3,"title":"Write The Yml File For docker-compose","slug":"write-the-yml-file-for-docker-compose","link":"#write-the-yml-file-for-docker-compose","children":[]},{"level":3,"title":"First Launch","slug":"first-launch","link":"#first-launch","children":[]},{"level":3,"title":"Apply For Activation","slug":"apply-for-activation","link":"#apply-for-activation","children":[]},{"level":3,"title":"Restart IoTDB","slug":"restart-iotdb","link":"#restart-iotdb","children":[]},{"level":3,"title":"Validate Deployment","slug":"validate-deployment","link":"#validate-deployment","children":[]},{"level":3,"title":"Map/conf Directory (optional)","slug":"map-conf-directory-optional","link":"#map-conf-directory-optional","children":[]}]},{"level":2,"title":"Cluster Deployment","slug":"cluster-deployment","link":"#cluster-deployment","children":[{"level":3,"title":"Set Host Name","slug":"set-host-name","link":"#set-host-name","children":[]},{"level":3,"title":"Load Image File","slug":"load-image-file-1","link":"#load-image-file-1","children":[]},{"level":3,"title":"Write The Yml File For Docker Compose","slug":"write-the-yml-file-for-docker-compose-1","link":"#write-the-yml-file-for-docker-compose-1","children":[]},{"level":3,"title":"Starting Confignode For The First Time","slug":"starting-confignode-for-the-first-time","link":"#starting-confignode-for-the-first-time","children":[]},{"level":3,"title":"Apply For Activation","slug":"apply-for-activation-1","link":"#apply-for-activation-1","children":[]},{"level":3,"title":"Start Datanode","slug":"start-datanode","link":"#start-datanode","children":[]},{"level":3,"title":"Validate Deployment","slug":"validate-deployment-1","link":"#validate-deployment-1","children":[]},{"level":3,"title":"Map/conf Directory (optional)","slug":"map-conf-directory-optional-1","link":"#map-conf-directory-optional-1","children":[]}]}],"git":{"createdTime":1723190680000,"updatedTime":1723704118000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":3}]},"readingTime":{"minutes":6.85,"words":2055},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/Docker-Deployment_timecho.md","localizedDate":"August 9, 2024","autoDesc":true}');export{m as comp,u as data};
