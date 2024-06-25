import{_ as e,o as n,c as s,e as a}from"./app-vSSc7VXH.js";const t={},i=a(`<h1 id="environment-requirements" tabindex="-1"><a class="header-anchor" href="#environment-requirements"><span>Environment Requirements</span></a></h1><h2 id="operating-system-requirements" tabindex="-1"><a class="header-anchor" href="#operating-system-requirements"><span>Operating System Requirements</span></a></h2><p>IoTDB supports operating systems such as Linux, Windows, and MacOS, while the enterprise version supports domestic CPUs such as Loongson, Phytium, and Kunpeng. It also supports domestic server operating systems such as Neokylin, KylinOS, UOS, and Linx.</p><h2 id="system-environment-preparation" tabindex="-1"><a class="header-anchor" href="#system-environment-preparation"><span>System Environment Preparation</span></a></h2><h3 id="important-reminder" tabindex="-1"><a class="header-anchor" href="#important-reminder"><span>Important Reminder</span></a></h3><p>Whether in Linux or Windows, please ensure that the installation path of IoTDB does not contain spaces or Chinese characters to avoid software running abnormally.</p><h3 id="environmental-preparation" tabindex="-1"><a class="header-anchor" href="#environmental-preparation"><span>Environmental Preparation</span></a></h3><p>To use IoTDB, the system environment needs to meet the following conditions (using the centos7 command as an example):</p><ol><li>Install Java runtime environment, Java version&gt;=1.8, please ensure that the jdk environment variable is set.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token comment"># Taking JDK-17 installation in Centos7 as an example:</span>
 <span class="token function">tar</span>  <span class="token parameter variable">-zxvf</span>  jdk-17_linux-x64_bin.tar     <span class="token comment"># Unzip JDK file</span>
 Vim  ~/.bashrc                           <span class="token comment"># Configure JDK environment</span>
 <span class="token punctuation">{</span>  <span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/lib/jvm/jdk-17.0.9
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>     
 <span class="token punctuation">}</span>  <span class="token comment"># Add JDK environment variables</span>
 <span class="token builtin class-name">source</span>  ~/.bashrc                        <span class="token comment"># Configuration environment takes effect</span>
 <span class="token function">java</span> <span class="token parameter variable">-version</span>                            <span class="token comment"># Check JDK environment</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Turn off system swap memory</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;vm.swappiness = 0&quot;</span><span class="token operator">&gt;&gt;</span> /etc/sysctl.conf
<span class="token comment"># Executing the swapoff - a and swapon - a commands together is to dump the data in swap back into memory and clear the data in swap.</span>
<span class="token comment"># Do not omit the swap business setting and only execute swap off - a; Otherwise, after restarting, swap will automatically open again, causing the operation to fail.</span>
swapoff <span class="token parameter variable">-a</span> <span class="token operator">&amp;&amp;</span> <span class="token function">swapon</span> <span class="token parameter variable">-a</span>
<span class="token comment"># Enable configuration to take effect without restarting.</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
<span class="token comment"># Check memory allocation, expected swap to be 0</span>
<span class="token function">free</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Set the maximum number of open files in the system to 65535 to avoid the error of &quot;too many open files&quot;.</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># View current restrictions</span>
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span>
<span class="token comment"># Temporary modifications</span>
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span> <span class="token number">65535</span>
<span class="token comment"># Permanent modification</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* soft nofile 65535&quot;</span> <span class="token operator">&gt;&gt;</span>  /etc/security/limits.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* hard nofile 65535&quot;</span> <span class="token operator">&gt;&gt;</span>  /etc/security/limits.conf
<span class="token comment"># After exiting the current terminal session, the expected display is 65535</span>
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>Turn off firewall</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># View firewall</span>
systemctl status firewalld
<span class="token comment"># Turn off firewall</span>
systemctl stop firewalld
<span class="token comment"># Permanently disable firewall</span>
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>Ensure that the required ports are not occupied</li></ol><ul><li><p>Check for cluster occupied ports: In the default configuration of the cluster, ConfigNode will occupy ports 10710 and 10720, while DataNode will occupy ports 6667, 10730, 10740, 10750, 1076090919091903000. Please ensure that these ports are not occupied. The inspection method is as follows:</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>lsof -i:6667  or  netstat -tunp | grep 6667
lsof -i:10710  or  netstat -tunp | grep 10710
lsof -i:10720  or  netstat -tunp | grep 10720
# If the command has output, it indicates that the port is already occupied.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Check for port occupancy by cluster deployment tool: When installing and deploying a cluster using the cluster management tool opskit, it is necessary to open the SSH remote connection service configuration and open port 22.</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>yum install openssh-server            # Install SSH service
systemctl start sshd                  # Enable Port 22           
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,18),r=[i];function o(l,p){return n(),s("div",null,r)}const m=e(t,[["render",o],["__file","Environment-Requirements.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html","title":"Environment Requirements","lang":"en-US","frontmatter":{"description":"Environment Requirements Operating System Requirements IoTDB supports operating systems such as Linux, Windows, and MacOS, while the enterprise version supports domestic CPUs su...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Environment Requirements"}],["meta",{"property":"og:description","content":"Environment Requirements Operating System Requirements IoTDB supports operating systems such as Linux, Windows, and MacOS, while the enterprise version supports domestic CPUs su..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-19T08:32:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-19T08:32:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Environment Requirements\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-19T08:32:02.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Operating System Requirements","slug":"operating-system-requirements","link":"#operating-system-requirements","children":[]},{"level":2,"title":"System Environment Preparation","slug":"system-environment-preparation","link":"#system-environment-preparation","children":[{"level":3,"title":"Important Reminder","slug":"important-reminder","link":"#important-reminder","children":[]},{"level":3,"title":"Environmental Preparation","slug":"environmental-preparation","link":"#environmental-preparation","children":[]}]}],"git":{"createdTime":1718785922000,"updatedTime":1718785922000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.92,"words":575},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.md","localizedDate":"June 19, 2024","autoDesc":true}');export{m as comp,d as data};
