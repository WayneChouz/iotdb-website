import{_ as n,r as s,o as r,c as o,b as e,d as i,a as t,e as a}from"./app-CIPkfidu.js";const d={},u=a('<h1 id="贡献指南" tabindex="-1"><a class="header-anchor" href="#贡献指南"><span>贡献指南</span></a></h1><h2 id="开发约定" tabindex="-1"><a class="header-anchor" href="#开发约定"><span>开发约定</span></a></h2><h3 id="代码格式化" tabindex="-1"><a class="header-anchor" href="#代码格式化"><span>代码格式化</span></a></h3>',3),c={href:"https://github.com/diffplug/spotless/tree/main/plugin-maven",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/google/google-java-format",target:"_blank",rel:"noopener noreferrer"},h=e("br",null,null,-1),m={href:"https://plugins.jetbrains.com/plugin/8527-google-java-format/versions/stable/83169",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/google/google-java-format#intellij-android-studio-and-other-jetbrains-ides",target:"_blank",rel:"noopener noreferrer"},b=e("br",null,null,-1),v=e("br",null,null,-1),_=e("br",null,null,-1),x=e("br",null,null,-1),f={href:"https://plugins.jetbrains.com/plugin/7642-save-actions",target:"_blank",rel:"noopener noreferrer"},k=e("br",null,null,-1),I=e("h3",{id:"编码风格",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编码风格"},[e("span",null,"编码风格")])],-1),T={href:"https://checkstyle.sourceforge.io/config_filefilters.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/apache/iotdb/blob/master/checkstyle.xml",target:"_blank",rel:"noopener noreferrer"},D=a('<p>您可以从该文件中查阅到所有的代码风格要求。当开发完成后，您可以使用 <code>mvn validate</code> 命令来检查您的代码是否符合代码风格的要求。</p><p>另外, 当您在集成开发环境开发时，可能会因为环境的默认代码风格配置导致和本项目的风格规则冲突。</p><p>在 IDEA 中，您可以通过如下步骤解决风格规则不一致的问题。</p><ul><li>禁用通配符引用 <ul><li>跳转至 Java 代码风格配置页面 (Preferences... -&gt; 编辑器 -&gt; 代码风格 -&gt; Java)。</li><li>切换到“导入”标签。</li><li>在“常规”部分，启用“使用单个类导入”选项。</li><li>将“将 import 与‘*’搭配使用的类计数”改成 999 或者一个比较大的值。</li><li>将“将静态 import 与‘*’搭配使用的名称计数”改成 999 或者一个比较大的值。</li></ul></li></ul><h2 id="贡献方式" tabindex="-1"><a class="header-anchor" href="#贡献方式"><span>贡献方式</span></a></h2><h3 id="参与投票" tabindex="-1"><a class="header-anchor" href="#参与投票"><span>参与投票</span></a></h3>',6),A=e("p",null,"1.给发布版本投票",-1),R={href:"https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"2.下载投票的版本/rc下所有内容",-1),j={href:"https://dist.apache.org/repos/dist/dev/iotdb/",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"3.导入发布经理的公钥",-1),B={href:"https://dist.apache.org/repos/dist/dev/iotdb/KEYS",target:"_blank",rel:"noopener noreferrer"},S=e("li",null,[e("p",null,"最下边有 Release Manager (RM) 的公钥")],-1),P=e("li",null,[e("p",null,"安装 gpg2")],-1),w=a(`<ul><li><p>第一种方法</p><ul><li><p>公钥的开头如下</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pub   rsa4096 2019-10-15 [SC]
    10F3B3F8A1201B79AA43F2E00FC7F131CAA00430
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或是</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>pub   rsa4096/28662AC6 2019-12-23 [SC]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>下载公钥</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>gpg2 --receive-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 （或 28662AC6)

或 （指定 keyserver) 
gpg2 --keyserver p80.pool.sks-keyservers.net --recv-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 （或 28662AC6)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>第二种方法</p><ul><li><p>把下方内容复制到一个文本文件中，文本名为 <code>key.asc</code></p><ul><li><p>内容如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: GnuPG v2
...
-----END PGP PUBLIC KEY BLOCK-----
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导入 RM 的公钥到自己电脑</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>gpg2 --import key.asc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul></li></ul>`,1),G=a(`<li><p>4.验证源码发布版</p><ul><li><p>验证是否有 NOTICE、LICENSE，以及内容是否正确。</p></li><li><p>验证 README、RELEASE_NOTES</p></li><li><p>验证 header</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mvn -B apache-rat:check
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>验证签名和哈希值</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>gpg2 --verify apache-iotdb-0.12.0-source-release.zip.asc apache-iotdb-0.12.0-source-release.zip

出现 Good Singnature 

shasum -a512 apache-iotdb-0.12.0-source-release.zip

和对应的 .sha512 对比，一样就可以。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>验证编译</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mvnw install

应该最后全 SUCCESS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>5.验证二进制发布版</p><ul><li><p>验证是否有 NOTICE、LICENSE，以及内容是否正确。</p></li><li><p>验证 README、RELEASE_NOTES</p></li><li><p>验证签名和哈希值</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>gpg2 --verify apache-iotdb-0.12.0-bin.zip.asc apache-iotdb-0.12.0-bin.zip

出现 Good Singnature 

shasum -a512 apache-iotdb-0.12.0-bin.zip

和对应的 .sha512 对比，一样就可以。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>验证是否能启动以及示例语句是否正确执行</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>nohup ./sbin/start-server.sh &gt;/dev/null 2&gt;&amp;1 &amp;

./sbin/start-cli.sh

CREATE DATABASE root.turbine;
CREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;
insert into root.turbine.d1(timestamp,s0) values(1,1);
insert into root.turbine.d1(timestamp,s0) values(2,2);
insert into root.turbine.d1(timestamp,s0) values(3,3);
select * from root.**;

打印如下内容：
+-----------------------------------+------------------+
|                               Time|root.turbine.d1.s0|
+-----------------------------------+------------------+
|      1970-01-01T08:00:00.001+08:00|               1.0|
|      1970-01-01T08:00:00.002+08:00|               2.0|
|      1970-01-01T08:00:00.003+08:00|               3.0|
+-----------------------------------+------------------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>6.回复邮件</p><p>验证通过之后可以发邮件了</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Hi,

+1 (PMC could binding)

The source release:
LICENSE and NOTICE [ok]
signatures and hashes [ok]
All files have ASF header [ok]
could compile from source: ./mvnw clean install [ok]

The binary distribution:
LICENSE and NOTICE [ok]
signatures and hashes [ok]
Could run with the following statements [ok]

CREATE DATABASE root.turbine;
CREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;
insert into root.turbine.d1(timestamp,s0) values(1,1);
insert into root.turbine.d1(timestamp,s0) values(2,2);
insert into root.turbine.d1(timestamp,s0) values(3,3);
select * from root.**;

Thanks,
xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),O=a('<h3 id="贡献代码" tabindex="-1"><a class="header-anchor" href="#贡献代码"><span>贡献代码</span></a></h3><h4 id="贡献流程" tabindex="-1"><a class="header-anchor" href="#贡献流程"><span>贡献流程：</span></a></h4><ul><li>Apache IoTDB 社区通过 JIRA 上的 issue 进行任务管理。<br> Issue 的完整生命周期：创建 issue -&gt; 认领 issue -&gt; 提交 pr -&gt; 审阅 pr -&gt; 合并 pr -&gt; 关闭 issue。</li></ul><h4 id="创建-issue" tabindex="-1"><a class="header-anchor" href="#创建-issue"><span>创建 issue ：</span></a></h4><ul><li>在 JIRA 上创建 issue 需要注意几个事项: <ul><li>1.命名：争取采用清晰易懂的名字，如支持一种新的聚合查询功能（avg）、优化原始数据查询性能等。Issue 的名字之后会作为发版的 release note。</li><li>2.描述：新功能、优化需要描述具体希望做什么。 Bug 反馈需要描述环境、负载、现象描述（异常日志）、影响版本等，最好有复现方法。</li></ul></li></ul><h4 id="认领-issue" tabindex="-1"><a class="header-anchor" href="#认领-issue"><span>认领 issue ：</span></a></h4><ul><li>在 JIRA 上认领 issue：分配给自己。建议添加一句评论：I&#39;m doing this。避免与其他贡献者重复开发。<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/upload/issue.png"><br> 注：如果发现自己无法认领issue，则是因为自己的账户权限不够。遇到此情况，请向 <a href="mailto:dev@iotdb.apache.org">dev@iotdb.apache.org</a> 邮件列表发送邮件，标题为： [application] apply for permission to assign issues to XXX， 其中XXX是自己的JIRA用户名。</li></ul><h4 id="提交pr" tabindex="-1"><a class="header-anchor" href="#提交pr"><span>提交PR</span></a></h4>',8),N={href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"},F=e("li",null,"提交 pr，通过 Travis-CI 测试和 Sonar 代码质量检测后，至少有一位以上 Committer 同意且代码无冲突，就可以合并了",-1),z={href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},J=e("p",null,"1.Fork仓库：",-1),L={href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"Fork",-1),X=a(`<p>2.配置 git 和提交修改</p><ul><li>第一步：将代码克隆到本地：</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone https://github.com/&lt;your_github_name&gt;/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意:请将 &lt;your_github_name&gt; 替换为您的 github 名字</strong></p><p>clone 完成后，origin 会默认指向 github 上的远程 fork 地址。</p><ul><li>第二步：将 apache/iotdb 添加为本地仓库的远程分支 upstream：</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>cd  iotdb
git remote add upstream https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第三步：检查远程仓库设置：</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git remote -v
origin https://github.com/&lt;your_github_name&gt;/iotdb.git (fetch)
origin    https://github.com/&lt;your_github_name&gt;/iotdb.git(push)
upstream  https://github.com/apache/iotdb.git (fetch)
upstream  https://github.com/apache/iotdb.git (push)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第四步：新建分支以便在分支上做修改：（假设新建的分支名为 fix）</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git checkout -b fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建完成后可进行代码更改。</p><ul><li>第五提交代码到远程分支：（此处以 fix 分支为例）</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git commit -a -m &quot;&lt;you_commit_message&gt;&quot;
git push origin fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,14),M={href:"https://www.atlassian.com/git/tutorials/setting-up-a-repository",target:"_blank",rel:"noopener noreferrer"},V=a("<p>3.Git 提交注意事项</p><ul><li><p>在 Git 上提交代码时需要注意：</p><ul><li><p>1.保持仓库的整洁：</p><ul><li><p>不要上传二进制文件，保证仓库的大小只因为代码字符串的改动而增大。</p></li><li><p>不要上传生成的代码。</p></li></ul></li><li><p>2.日志要有含义：</p><ul><li><p>题目用jira编号：[IOTDB-jira号]</p></li><li><p>题目用github的ISSUE编号：[ISSUE-issue号]</p><ul><li>内容里要写#XXXX用于关联</li></ul></li></ul></li></ul></li></ul>",2),H=e("p",null,"4.创建 PR",-1),Z=e("code",null,"New pull request",-1),K=e("code",null,"Create pull request",-1),Q={href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"},Y=e("br",null,null,-1),W={href:"https://help.github.com/categories/collaborating-with-issues-and-pull-requests/",target:"_blank",rel:"noopener noreferrer"},$=a(`<li><ol start="5"><li>冲突解决</li></ol><p>提交 PR 时的代码冲突一般是由于多人编辑同一个文件引起的，解决冲突主要通过以下步骤即可：</p><p>步骤一：切换至主分支</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>步骤二：同步远端主分支至本地</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git pull upstream master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>步骤三：切换回刚才的分支（假设分支名为 fix）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git checkout fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>步骤四：进行 rebase</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git rebase -i master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时会弹出修改记录的文件，一般直接保存即可。然后会提示哪些文件出现了冲突，此时可打开冲突文件对冲突部分进行修改，将提示的所有冲突文件的冲突都解决后，执行</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git add .
git rebase --continue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>依此往复，直至屏幕出现类似 <em>rebase successful</em> 字样即可，此时您可以进行往提交 PR 的分支进行更新：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git push -f origin fix
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1),ee=a("<li>2.需提交的内容： <ul><li><p>Issue 类型：New Feature</p><ul><li><p>1.提交中英文版本的用户手册和代码修改的 pr。</p><p>用户手册主要描述功能定义和使用方式，以便用户使用。用户手册建议包括：场景描述，配置方法，接口功能描述，使用示例。官网的用户手册内容放置在 apache/iotdb-docs 仓库 src 目录下，英文版放在 src/UserGuide ，中文版放在 src/zh/UserGuide 。<br> 如果需要更新用户手册，包括新增或删除文档和修改文档名，需要在 main 分支的 src/.vuepress/sidebar 中做相应修改。</p></li><li><p>2.提交单元测试UT或集成测试IT</p><p>需要增加单元测试UT 或集成测试IT，尽量覆盖多的用例。可以参考 xxTest（路径：iotdb/server/src/test/java/org/apache/iotdb/db/query/aggregation/）， xxIT（路径：iotdb/integration/src/test/java/org/apache/iotdb/db/integration/）。</p></li></ul></li><li><p>Issue 类型：Improvement</p><ul><li>提交代码和 UT，一般不需要修改用户手册。最好提交相关实验结果，其中包含量化的改进效果和带来的副作用。</li></ul></li><li><p>Issue 类型：Bug</p><ul><li>需要编写能够复现此 bug 的 单元测试 UT 或集成测试 IT。</li></ul></li></ul></li>",1),ie=a('<ul><li><p>3.代码管理</p><ul><li><p>a.分支管理：</p><ul><li><p>IoTDB 版本命名方式为：0.大版本.小版本。例如 0.12.4，12 就是大版本，4 是小版本。</p><p>master 分支作为当前主开发分支，对应下一个未发布的大版本，每个大版本发布时会切出一个单独的分支归档，如 0.12.x 系列版本的代码处于 rel/0.12 分支下。</p><p>后续如果发现并修复了某发布版本的 bug。对这些 bug 的修复都需要往大于等于该版本对应的归档分支提 pr。如一个关于 0.11.x 版本 bug 修复的 pr 需要同时向 rel/0.11、rel/0.12 和 master 分支提交。</p></li></ul></li><li><p>b.代码格式化:</p><ul><li>提交 PR 前需要使用 mvn spotless:apply 将代码格式化，再 commit，不然会导致 ci 代码格式化检查失败。</li></ul></li><li><p>c.注意事项:</p><ul><li>iotdb-datanode.properties 和 IoTDBConfig 默认值需要保持一致。</li><li>如果需要对配置参数进行改动。以下文件需要同时修改： <ol><li>配置文件：iotdb-core/datanode/src/assembly/resources/conf/iotdb-datanode.properties</li><li>代码：IoTDBDescriptor、IoTDBConfig</li><li>文档：apache/iotdb-docs/src/UserGuide/{version}/Reference/DataNode-Config-Manual.md、apache/iotdb-docs/src/zh/UserGuide/{version}/Reference/DataNode-Config-Manual.md<br> 如果你想要在 IT 和 UT 文件中对配置参数进行修改，你需要在 @Before 修饰的方法里修改，并且在 @After 修饰的方法里重置，来避免对其他测试的影响。合并模块的参数统一放在CompactionConfigRestorer 文件里。</li></ol></li></ul></li></ul></li><li><ol start="4"><li>PR 命名</li></ol><ul><li><p>命名方式：分支标签-Jira 标签-PR 名</p><p>示例： [To rel/0.12] [IoTDB-1907] implement customized sync process: sender</p></li><li><p>分支标签</p><p>如果是向非 master 分支提 pr，如 rel/0.13 分支，需要在 pr 名写上 [To rel/0.13]。如果是指向master分支，则不需要写分支标签。</p></li><li><p>Jira 标签</p><p>以 JIRA 号开头，如：[IOTDB-1907] implement customized sync process: sender。这样创建 PR 后，机器人会将 PR 链接自动链到对应 issue 上。</p><p>注：如果创建 PR 时忘记添加 JIRA 号，或 JIRA 号不规范，则 PR 不会被自动链接到 Jira 上，需要先改正 PR 命名，并手动将 PR 链接贴到 issue 页面（通过留言或链接框）。</p></li></ul></li><li><ol start="5"><li>PR 描述<br> 通常 PR 名无法涵盖所有改动，需要添加具体描述，改动了哪些内容。对于较难理解的地方给予一定的解释。</li></ol><p>修改 bug 的 pr 需要描述 bug 出现的原因，以及解决方法，另外还需要描述UT/IT测试用例添加的情况和负面效果的描述。</p></li><li><p>6.提交 PR 后</p><p>向邮件列表 <a href="mailto:dev@iotdb.apache.org">dev@iotdb.apache.org</a> 发送一封邮件，主要介绍 PR 的工作。重视每个审阅者的意见，一一回复，并对达成一致的建议进行修改。</p></li></ul><h4 id="审阅pr" tabindex="-1"><a class="header-anchor" href="#审阅pr"><span>审阅PR</span></a></h4><ul><li>注意事项： <ul><li><ol><li>PR命名是否规范，新功能和bug修复类型的pr是否带了JIRA 号。</li></ol></li><li><ol start="2"><li>PR 描述是否清晰。</li></ol></li><li><ol start="3"><li>功能测试用例或性能测试报告是否附上。</li></ol></li><li><ol start="4"><li>新功能是否有用户手册。</li></ol></li><li><ol start="5"><li>尽量不夹带其他问题的代码修改，将不相关的修改拆分到其他PR。</li></ol></li></ul></li><li>审阅流程： <ul><li>第一步： 点击 PR 的 Files changed<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/zh/development/howtocontributecode/01.png"></li><li>第二步：对于有问题的行，移动到左侧，会出现加号，点击加号，然后评论，点击 Start a review，此时，所有的 Review 意见都会暂存起来，别人看不到。<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/zh/development/howtocontributecode/02.png"></li><li>第三步： 所有评论加完后，需要点击 Review changes，选择你的意见，已经可以合并的选择 Approve，有 Bug 需要改的选择 Request changes 或者 Comment，不确定的选择 Comment。最后 Submit review 提交审阅意见，提 PR 的人才能看见此意见。<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/zh/development/howtocontributecode/03.png"></li></ul></li></ul><h4 id="合并pr" tabindex="-1"><a class="header-anchor" href="#合并pr"><span>合并PR</span></a></h4><ul><li><p>确认所有审阅意见均已回复且有1个以上 committer 的Approval。</p></li><li><p>选择 squash merge （当且仅当作者仅有一个提交记录，且记录的commitlog清晰，可选择rebase）。</p></li><li><p>到 JIRA 上关闭对应的 issue，标记修复或完成的版本【注意，解决或关闭 issue 都需要对 issue 添加 pr 或描述，通过 issue 要能够追踪这个任务的变动】。</p></li></ul><h3 id="贡献文档" tabindex="-1"><a class="header-anchor" href="#贡献文档"><span>贡献文档</span></a></h3><p>贡献用户手册和贡献代码的流程是一样的，只是修改的文件不同。<br> 用户手册的英文版放在 src/UserGuide , 中文版放在 src/zh/UserGuide 下。<br> 如果需要更新用户手册目录，包括新增或删除md文档、修改md文档名，需要在 main 分支的 src/.vuepress/sidebar 中做相应修改。</p><h3 id="新功能、bug-反馈、改进等" tabindex="-1"><a class="header-anchor" href="#新功能、bug-反馈、改进等"><span>新功能、Bug 反馈、改进等</span></a></h3><p>所有希望 IoTDB 做的功能或修的 bug，都可以在 Jira 上提 issue</p><p>可以选择 issue 类型：bug、improvement、new feature 等。新建的 issue 会自动向邮件列表中同步邮件，之后的讨论可在 jira 上留言，也可以在邮件列表进行。当问题解决后请关闭 issue。</p><h3 id="邮件讨论内容" tabindex="-1"><a class="header-anchor" href="#邮件讨论内容"><span>邮件讨论内容</span></a></h3><p>请使用英文进行讨论：</p><ul><li><p>第一次参与邮件列表可以简单介绍一下自己。（Hi, I&#39;m xxx ...)</p></li><li><p>开发功能前可以发邮件声明一下自己想做的任务。（Hi，I&#39;m working on issue IOTDB-XXX，My plan is ...）</p></li></ul><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3>',14),le=e("p",null,[i("无法下载 thrift-* 等文件："),e("br"),i(" 例如 "),e("code",null,"Could not get content org.apache.maven.wagon.TransferFailedException: Transfer failed for https://github.com/apache/iotdb-bin-resources/blob/main/compile-tools/thrift-0.14-ubuntu"),e("br"),i(" 这一般是网络问题，这时候需要手动下载上述文件：")],-1),te=e("p",null,"根据以下网址手动下载上述文件；",-1),ae={href:"https://github.com/apache/iotdb-bin-resources/blob/main/compile-tools/thrift-0.14-MacOS",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://github.com/apache/iotdb-bin-resources/blob/main/compile-tools/thrift-0.14-ubuntu",target:"_blank",rel:"noopener noreferrer"},se=e("li",null,[e("p",null,"将该文件拷贝到 thrift/target/tools/目录下")],-1),re=e("li",null,[e("p",null,"重新执行 maven 的编译命令")],-1),oe=e("p",null,"无法下载errorprone ：",-1),de=e("div",{class:"language-Failed line-numbers-mode","data-ext":"Failed","data-title":"Failed"},[e("pre",{class:"language-Failed"},[e("code",null,`-shaded:jar:9+181-r4173-1: Could not transfer artifact com.google.errorprone:javac-shaded:pom:9+181-r4173-1
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),ue=e("p",null,"解决方法：",-1),ce={href:"https://repo1.maven.org/maven2/com/google/errorprone/javac-shaded/9+181-r4173-1/javac-shaded-9+181-r4173-1.jar",target:"_blank",rel:"noopener noreferrer"},pe=e("li",null,"将jar包安装到本地私仓库 ： mvn install:install-file -DgroupId=com.google.errorprone -DartifactId=javac-shaded -Dversion=9+181-r4173-1 -Dpackaging=jar -Dfile=D:\\workspace\\iotdb-master\\docs\\javac-shaded-9+181-r4173-1.jar",-1),he=e("h2",{id:"常见资料",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常见资料"},[e("span",null,"常见资料")])],-1),me={href:"https://iotdb.apache.org/",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://github.com/apache/iotdb/tree/master",target:"_blank",rel:"noopener noreferrer"},be={href:"https://github.com/apache/iotdb-client-go",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://github.com/apache/iotdb-docs",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://github.com/apache/iotdb-bin-resources",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://iotdb.apache.org/zh/UserGuide/V1.1.x/QuickStart/QuickStart.html",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://cwiki.apache.org/confluence/display/IOTDB/Home",target:"_blank",rel:"noopener noreferrer"},Ie={href:"https://lists.apache.org/list.html?dev@iotdb.apache.org",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://ci-builds.apache.org/job/IoTDB/job/IoTDB-Pipe/job/master/",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://apacheiotdb.slack.com/join/shared_invite/zt-qvso1nj8-7715TpySZtZqmyG5qXQwpg#/shared-invite/email",target:"_blank",rel:"noopener noreferrer"};function De(Ae,Re){const l=s("ExternalLinkIcon");return r(),o("div",null,[u,e("p",null,[i("我们使用 "),e("a",c,[i("Spotless plugin"),t(l)]),i(" 和 "),e("a",p,[i("google-java-format"),t(l)]),i(" 格式化 Java 代码。你可以通过以下步骤将 IDE 配置为在保存时自动应用格式以 IDEA 为例）："),h,i(" 1.下载 "),e("a",m,[i("google-java-format-plugin v1.7.0.5"),t(l)]),i(", 安装到 IDEA(Preferences -> plugins -> search google-java-format),更详细的内容请查看"),e("a",g,[i("操作手册"),t(l)]),b,i(' 2.从磁盘安装 (Plugins -> little gear icon -> "Install plugin from disk" -> Navigate to downloaded zip file)'),v,i(" 3.开启插件，并保持默认的 GOOGLE 格式 (2-space indents)"),_,i(" 4.在 Spotless 没有升级到 18+之前，不要升级 google-java-format 插件"),x,i(" 5.安装 "),e("a",f,[i("Save Actions"),t(l)]),i(' 插件 , 并开启插件，打开 "Optimize imports" and "Reformat file" 选项。'),k,i(' 6.在“Save Actions”设置页面中，将 "File Path Inclusion" 设置为 .*.java, 避免在编辑的其他文件时候发生意外的重新格式化')]),I,e("p",null,[i("我们使用 "),e("a",T,[i("maven-checkstyle-plugin"),t(l)]),i("来保证所有的 Java 代码风格都遵循在项目根目录下的 "),e("a",E,[i("checkstyle.xml"),t(l)]),i(" 文件中定义的规则集.")]),D,e("ul",null,[e("li",null,[A,e("ul",null,[e("li",null,[i("非中文用户，请阅读 "),e("a",R,[i("https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release"),t(l)])])])]),e("li",null,[y,e("ul",null,[e("li",null,[e("a",j,[i("https://dist.apache.org/repos/dist/dev/iotdb/"),t(l)])])])]),e("li",null,[C,e("ul",null,[e("li",null,[e("p",null,[e("a",B,[i("https://dist.apache.org/repos/dist/dev/iotdb/KEYS"),t(l)])])]),S,P]),w]),G]),O,e("ul",null,[e("li",null,[i("1.如何提交代码 "),e("ul",null,[e("li",null,[i("贡献途径： "),e("ul",null,[e("li",null,[i("IoTDB 诚邀广大开发者参与开源项目构建，您可以查看 "),e("a",N,[i("issues"),t(l)]),i(" 并参与解决，或者做其他改善。")]),F])]),e("li",null,[i("PR指南： "),e("ul",null,[e("li",null,[i("在 Github 上面可以很方便地提交 "),e("a",z,[i("Pull Request (PR)"),t(l)]),i("，下面将以本网站项目 "),e("a",U,[i("apache/iotdb"),t(l)]),i(" 为例（如果是其他项目，请替换项目名 iotdb） "),e("ul",null,[e("li",null,[J,e("ul",null,[e("li",null,[i("进入 apache/iotdb 的 "),e("a",L,[i("github 页面"),t(l)]),i(" ，点击右上角按钮 "),q,i(" 进行 Fork")])])]),e("li",null,[X,e("p",null,[i("更多 git 使用方法请访问："),e("a",M,[i("git 使用"),t(l)])])]),e("li",null,[V,e("ul",null,[e("li",null,[H,e("p",null,[i("在浏览器切换到自己的 github 仓库页面，切换分支到提交的分支 <your_branch_name> ，依次点击 "),Z,i(" 和 "),K,i(" 按钮进行创建，如果您解决的是 "),e("a",Q,[i("issues"),t(l)]),i("，需要在开头加上 [IOTDB-xxx]。"),Y,i(" 至此，您的 PR 创建完成，更多关于 PR 请阅读 "),e("a",W,[i("collaborating-with-issues-and-pull-requests"),t(l)])])]),$])])])])])])])]),ee]),ie,e("ul",null,[e("li",null,[le,e("ul",null,[e("li",null,[te,e("ul",null,[e("li",null,[e("a",ae,[i("https://github.com/apache/iotdb-bin-resources/blob/main/compile-tools/thrift-0.14-MacOS"),t(l)])]),e("li",null,[e("a",ne,[i("https://github.com/apache/iotdb-bin-resources/blob/main/compile-tools/thrift-0.14-ubuntu"),t(l)])])])]),se,re])]),e("li",null,[oe,de,ue,e("ol",null,[e("li",null,[i("手动下载jar包： "),e("a",ce,[i("https://repo1.maven.org/maven2/com/google/errorprone/javac-shaded/9+181-r4173-1/javac-shaded-9+181-r4173-1.jar"),t(l)])]),pe])])]),he,e("ul",null,[e("li",null,[e("p",null,[i("IoTDB 官网："),e("a",me,[i("https://iotdb.apache.org/"),t(l)])])]),e("li",null,[e("p",null,[i("代码库："),e("a",ge,[i("https://github.com/apache/iotdb/tree/master"),t(l)])])]),e("li",null,[e("p",null,[i("Go语言的代码库："),e("a",be,[i("https://github.com/apache/iotdb-client-go"),t(l)])])]),e("li",null,[e("p",null,[i("文档库："),e("a",ve,[i("https://github.com/apache/iotdb-docs"),t(l)])])]),e("li",null,[e("p",null,[i("资源库（包含项目文件等）："),e("a",_e,[i("https://github.com/apache/iotdb-bin-resources"),t(l)])])]),e("li",null,[e("p",null,[i("快速上手："),e("a",xe,[i("https://iotdb.apache.org/zh/UserGuide/V1.1.x/QuickStart/QuickStart.html"),t(l)])])]),e("li",null,[e("p",null,[i("Jira 任务管理："),e("a",fe,[i("https://issues.apache.org/jira/projects/IOTDB/issues"),t(l)])])]),e("li",null,[e("p",null,[i("Wiki 文档管理："),e("a",ke,[i("https://cwiki.apache.org/confluence/display/IOTDB/Home"),t(l)])])]),e("li",null,[e("p",null,[i("邮件列表: "),e("a",Ie,[i("https://lists.apache.org/list.html?dev@iotdb.apache.org"),t(l)])])]),e("li",null,[e("p",null,[i("每日构建: "),e("a",Te,[i("https://ci-builds.apache.org/job/IoTDB/job/IoTDB-Pipe/job/master/"),t(l)])])]),e("li",null,[e("p",null,[i("Slack: "),e("a",Ee,[i("https://apacheiotdb.slack.com/join/shared_invite/zt-qvso1nj8-7715TpySZtZqmyG5qXQwpg#/shared-invite/email"),t(l)])])])])])}const je=n(d,[["render",De],["__file","Development-Guide.html.vue"]]),Ce=JSON.parse('{"path":"/zh/Community/Development-Guide.html","title":"贡献指南","lang":"zh-CN","frontmatter":{"description":"贡献指南 开发约定 代码格式化 我们使用 Spotless plugin 和 google-java-format 格式化 Java 代码。你可以通过以下步骤将 IDE 配置为在保存时自动应用格式以 IDEA 为例）： 1.下载 google-java-format-plugin v1.7.0.5, 安装到 IDEA(Preferences -> pl...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/Community/Development-Guide.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/Community/Development-Guide.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"贡献指南"}],["meta",{"property":"og:description","content":"贡献指南 开发约定 代码格式化 我们使用 Spotless plugin 和 google-java-format 格式化 Java 代码。你可以通过以下步骤将 IDE 配置为在保存时自动应用格式以 IDEA 为例）： 1.下载 google-java-format-plugin v1.7.0.5, 安装到 IDEA(Preferences -> pl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-16T07:42:59.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-16T07:42:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"贡献指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-16T07:42:59.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"开发约定","slug":"开发约定","link":"#开发约定","children":[{"level":3,"title":"代码格式化","slug":"代码格式化","link":"#代码格式化","children":[]},{"level":3,"title":"编码风格","slug":"编码风格","link":"#编码风格","children":[]}]},{"level":2,"title":"贡献方式","slug":"贡献方式","link":"#贡献方式","children":[{"level":3,"title":"参与投票","slug":"参与投票","link":"#参与投票","children":[]},{"level":3,"title":"贡献代码","slug":"贡献代码","link":"#贡献代码","children":[]},{"level":3,"title":"贡献文档","slug":"贡献文档","link":"#贡献文档","children":[]},{"level":3,"title":"新功能、Bug 反馈、改进等","slug":"新功能、bug-反馈、改进等","link":"#新功能、bug-反馈、改进等","children":[]},{"level":3,"title":"邮件讨论内容","slug":"邮件讨论内容","link":"#邮件讨论内容","children":[]},{"level":3,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}]},{"level":2,"title":"常见资料","slug":"常见资料","link":"#常见资料","children":[]}],"git":{"createdTime":1707271050000,"updatedTime":1721115779000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":1},{"name":"majialin117","email":"107627937+mal117@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":13.71,"words":4112},"filePathRelative":"zh/Community/Development-Guide.md","localizedDate":"2024年2月7日","autoDesc":true}');export{je as comp,Ce as data};
