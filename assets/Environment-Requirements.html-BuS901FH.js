import{_ as n,o as s,c as a,e}from"./app-XaimuxhO.js";const t={},i=e(`<h1 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求"><span>环境要求</span></a></h1><h2 id="操作系统要求" tabindex="-1"><a class="header-anchor" href="#操作系统要求"><span>操作系统要求</span></a></h2><p>IoTDB 支持 Linux、Windows、MacOS 等操作系统，同时企业版支持龙芯、飞腾、鲲鹏等国产 CPU，支持中标麒麟、银河麒麟、统信、凝思等国产服务器操作系统。</p><h2 id="系统环境准备" tabindex="-1"><a class="header-anchor" href="#系统环境准备"><span>系统环境准备</span></a></h2><h3 id="重要提示" tabindex="-1"><a class="header-anchor" href="#重要提示"><span>重要提示</span></a></h3><p>无论是在 linux 还是 windows 中，请确保 IoTDB 的安装路径中不含空格和中文，避免软件运行异常。</p><h3 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h3><p>要使用 IoTDB，需要系统环境具备以下条件（以 centos7 命令为例）：</p><ol><li>安装 Java 运行环境 ，Java 版本 &gt;= 1.8，请确保已设置 jdk 环境变量。 V1.3.2.2 及之上版本推荐直接部署JDK17，老版本JDK部分场景下性能有问题，且datanode会出现stop不掉的问题。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> <span class="token comment">#下面以在centos7，使用JDK-17安装为例：</span>
 <span class="token function">tar</span>  <span class="token parameter variable">-zxvf</span>  jdk-17_linux-x64_bin.tar     <span class="token comment">#解压JDK文件</span>
 Vim  ~/.bashrc                           <span class="token comment">#配置JDK环境</span>
 <span class="token punctuation">{</span>  <span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/usr/lib/jvm/jdk-17.0.9
    <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>     
 <span class="token punctuation">}</span>  <span class="token comment">#添加JDK环境变量</span>
 <span class="token builtin class-name">source</span>  ~/.bashrc                        <span class="token comment">#配置环境生效</span>
 <span class="token function">java</span> <span class="token parameter variable">-version</span>                            <span class="token comment">#检查JDK环境</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>关闭系统 swap 内存</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;vm.swappiness = 0&quot;</span><span class="token operator">&gt;&gt;</span> /etc/sysctl.conf
<span class="token comment"># 一起执行 swapoff -a 和 swapon -a 命令是为了将 swap 里的数据转储回内存，并清空 swap 里的数据。</span>
<span class="token comment"># 不可省略 swappiness 设置而只执行 swapoff -a；否则，重启后 swap 会再次自动打开，使得操作失效。</span>
swapoff <span class="token parameter variable">-a</span> <span class="token operator">&amp;&amp;</span> <span class="token function">swapon</span> <span class="token parameter variable">-a</span>
<span class="token comment"># 在不重启的情况下使配置生效。</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
<span class="token comment"># 检查内存分配，预期 swap 为 0</span>
<span class="token function">free</span> <span class="token parameter variable">-m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>设置系统最大打开文件数为 65535，以避免出现 &quot;太多的打开文件 &quot;的错误。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#查看当前限制</span>
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span>
<span class="token comment"># 临时修改</span>
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span> <span class="token number">65535</span>
<span class="token comment"># 永久修改</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* soft nofile 65535&quot;</span> <span class="token operator">&gt;&gt;</span>  /etc/security/limits.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;* hard nofile 65535&quot;</span> <span class="token operator">&gt;&gt;</span>  /etc/security/limits.conf
<span class="token comment">#退出当前终端会话后查看，预期显示65535</span>
<span class="token builtin class-name">ulimit</span> <span class="token parameter variable">-n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>关闭防火墙</li></ol><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看防火墙</span>
systemctl status firewalld
<span class="token comment"># 关闭防火墙</span>
systemctl stop firewalld
<span class="token comment"># 永久关闭防火墙</span>
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>保证所需端口不被占用</li></ol><ul><li><p>集群占用端口的检查：在集群默认配置中，ConfigNode 会占用端口 10710 和 10720，DataNode 会占用端口 6667、10730、10740、10750 、10760，9090， 9190， 3000 请确保这些端口未被占用。检查方式如下：</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>lsof -i:6667  或  netstat -tunp | grep 6667
lsof -i:10710  或  netstat -tunp | grep 10710
lsof -i:10720  或  netstat -tunp | grep 10720
#如果命令有输出，则表示该端口已被占用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>集群部署工具占用端口的检查：使用集群管理工具 opskit 安装部署集群时，需打开 SSH 远程连接服务配置，并开放 22 号端口。</p><div class="language-Bash line-numbers-mode" data-ext="Bash" data-title="Bash"><pre class="language-Bash"><code>yum install openssh-server            #安装ssh服务
systemctl start sshd                  #启用22号端口           
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul>`,18),l=[i];function o(c,r){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","Environment-Requirements.html.vue"]]),m=JSON.parse('{"path":"/zh/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html","title":"环境要求","lang":"zh-CN","frontmatter":{"description":"环境要求 操作系统要求 IoTDB 支持 Linux、Windows、MacOS 等操作系统，同时企业版支持龙芯、飞腾、鲲鹏等国产 CPU，支持中标麒麟、银河麒麟、统信、凝思等国产服务器操作系统。 系统环境准备 重要提示 无论是在 linux 还是 windows 中，请确保 IoTDB 的安装路径中不含空格和中文，避免软件运行异常。 环境准备 要使用...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"环境要求"}],["meta",{"property":"og:description","content":"环境要求 操作系统要求 IoTDB 支持 Linux、Windows、MacOS 等操作系统，同时企业版支持龙芯、飞腾、鲲鹏等国产 CPU，支持中标麒麟、银河麒麟、统信、凝思等国产服务器操作系统。 系统环境准备 重要提示 无论是在 linux 还是 windows 中，请确保 IoTDB 的安装路径中不含空格和中文，避免软件运行异常。 环境准备 要使用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-19T10:37:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-19T10:37:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"环境要求\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-19T10:37:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"操作系统要求","slug":"操作系统要求","link":"#操作系统要求","children":[]},{"level":2,"title":"系统环境准备","slug":"系统环境准备","link":"#系统环境准备","children":[{"level":3,"title":"重要提示","slug":"重要提示","link":"#重要提示","children":[]},{"level":3,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[]}]}],"git":{"createdTime":1718785922000,"updatedTime":1721385430000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.55,"words":765},"filePathRelative":"zh/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.md","localizedDate":"2024年6月19日","autoDesc":true}');export{d as comp,m as data};
