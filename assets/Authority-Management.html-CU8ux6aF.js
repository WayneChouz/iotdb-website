import{_ as s,r as a,o as E,c,b as e,d as t,a as d,w as n,e as l}from"./app-BZ7vU6A9.js";const o={},u=e("h1",{id:"权限管理",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#权限管理"},[e("span",null,"权限管理")])],-1),R=e("br",null,null,-1),v=l('<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><h3 id="用户" tabindex="-1"><a class="header-anchor" href="#用户"><span>用户</span></a></h3><p>用户即数据库的合法使用者。一个用户与一个唯一的用户名相对应，并且拥有密码作为身份验证的手段。一个人在使用数据库之前，必须先提供合法的（即存于数据库中的）用户名与密码，作为用户成功登录。</p><h3 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h3>',4),S=l(`<h3 id="角色" tabindex="-1"><a class="header-anchor" href="#角色"><span>角色</span></a></h3><p>角色是若干权限的集合，并且有一个唯一的角色名作为标识符。角色通常和一个现实身份相对应（例如交通调度员），而一个现实身份可能对应着多个用户。这些具有相同现实身份的用户往往具有相同的一些权限，角色就是为了能对这样的权限进行统一的管理的抽象。</p><h3 id="默认用户与角色" tabindex="-1"><a class="header-anchor" href="#默认用户与角色"><span>默认用户与角色</span></a></h3><p>安装初始化后的 IoTDB 中有一个默认用户：root，默认密码为 root。该用户为管理员用户，固定拥有所有权限，无法被赋予、撤销权限，也无法被删除，数据库内仅有一个管理员用户。</p><p>一个新创建的用户或角色不具备任何权限。</p><h2 id="用户定义" tabindex="-1"><a class="header-anchor" href="#用户定义"><span>用户定义</span></a></h2><p>拥有 MANAGE_USER、MANAGE_ROLE 的用户或者管理员可以创建用户或者角色，需要满足以下约束：</p><h3 id="用户名限制" tabindex="-1"><a class="header-anchor" href="#用户名限制"><span>用户名限制</span></a></h3><p>4~32个字符，支持使用英文大小写字母、数字、特殊字符（<code>!@#$%^&amp;*()_+-=</code>）</p><p>用户无法创建和管理员用户同名的用户。</p><h3 id="密码限制" tabindex="-1"><a class="header-anchor" href="#密码限制"><span>密码限制</span></a></h3><p>4~32个字符，可使用大写小写字母、数字、特殊字符（<code>!@#$%^&amp;*()_+-=</code>），密码默认采用 MD5 进行加密。</p><h3 id="角色名限制" tabindex="-1"><a class="header-anchor" href="#角色名限制"><span>角色名限制</span></a></h3><p>4~32个字符，支持使用英文大小写字母、数字、特殊字符（<code>!@#$%^&amp;*()_+-=</code>）</p><p>用户无法创建和管理员用户同名的角色。</p><h2 id="权限管理-1" tabindex="-1"><a class="header-anchor" href="#权限管理-1"><span>权限管理</span></a></h2><p>IoTDB 主要有两类权限：序列权限、全局权限。</p><h3 id="序列权限" tabindex="-1"><a class="header-anchor" href="#序列权限"><span>序列权限</span></a></h3><p>序列权限约束了用户访问数据的范围与方式，支持对绝对路径与前缀匹配路径授权，可对timeseries 粒度生效。</p><p>下表描述了这类权限的种类与范围：</p><table><thead><tr><th>权限名称</th><th>描述</th></tr></thead><tbody><tr><td>READ_DATA</td><td>允许读取授权路径下的序列数据。</td></tr><tr><td>WRITE_DATA</td><td>允许读取授权路径下的序列数据。<br>允许插入、删除授权路径下的的序列数据。<br>允许在授权路径下导入、加载数据，在导入数据时，需要拥有对应路径的 WRITE_DATA 权限，在自动创建数据库与序列时，需要有 MANAGE_DATABASE 与 WRITE_SCHEMA 权限。</td></tr><tr><td>READ_SCHEMA</td><td>允许获取授权路径下元数据树的详细信息：<br>包括：路径下的数据库、子路径、子节点、设备、序列、模版、视图等。</td></tr><tr><td>WRITE_SCHEMA</td><td>允许获取授权路径下元数据树的详细信息。<br>允许在授权路径下对序列、模版、视图等进行创建、删除、修改操作。<br>在创建或修改 view 的时候，会检查 view 路径的 WRITE_SCHEMA 权限、数据源的 READ_SCHEMA 权限。<br>在对 view 进行查询、插入时，会检查 view 路径的 READ_DATA 权限、WRITE_DATA 权限。<br>允许在授权路径下设置、取消、查看TTL。<br> 允许在授权路径下挂载或者接触挂载模板。</td></tr></tbody></table><h3 id="全局权限" tabindex="-1"><a class="header-anchor" href="#全局权限"><span>全局权限</span></a></h3><p>全局权限约束了用户使用的数据库功能、限制了用户执行改变系统状态与任务状态的命令，用户获得全局授权后，可对数据库进行管理。</p><p>下表描述了系统权限的种类：</p><table><thead><tr><th style="text-align:center;">权限名称</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:center;">MANAGE_DATABASE</td><td style="text-align:left;">- 允许用户创建、删除数据库.</td></tr><tr><td style="text-align:center;">MANAGE_USER</td><td style="text-align:left;">- 允许用户创建、删除、修改、查看用户。</td></tr><tr><td style="text-align:center;">MANAGE_ROLE</td><td style="text-align:left;">- 允许用户创建、删除、查看角色。 <br> 允许用户将角色授予给其他用户,或取消其他用户的角色。</td></tr><tr><td style="text-align:center;">USE_TRIGGER</td><td style="text-align:left;">- 允许用户创建、删除、查看触发器。<br>与触发器的数据源权限检查相独立。</td></tr><tr><td style="text-align:center;">USE_UDF</td><td style="text-align:left;">- 允许用户创建、删除、查看用户自定义函数。<br>与自定义函数的数据源权限检查相独立。</td></tr><tr><td style="text-align:center;">USE_CQ</td><td style="text-align:left;">- 允许用户创建、开始、停止、删除、查看管道。<br>允许用户创建、删除、查看管道插件。<br>与管道的数据源权限检查相独立。</td></tr><tr><td style="text-align:center;">USE_PIPE</td><td style="text-align:left;">- 允许用户注册、开始、停止、卸载、查询流处理任务。<br>- 允许用户注册、卸载、查询注册流处理任务插件。</td></tr><tr><td style="text-align:center;">EXTEND_TEMPLATE</td><td style="text-align:left;">- 允许自动扩展模板。</td></tr><tr><td style="text-align:center;">MAINTAIN</td><td style="text-align:left;">- 允许用户查询、取消查询。 <br> 允许用户查看变量。 <br> 允许用户查看集群状态。</td></tr><tr><td style="text-align:center;">USE_MODEL</td><td style="text-align:left;">- 允许用户创建、删除、查询深度学习模型</td></tr></tbody></table><p>关于模板权限：</p><ol><li>模板的创建、删除、修改、查询、挂载、卸载仅允许管理员操作。</li><li>激活模板需要拥有激活路径的 WRITE_SCHEMA 权限</li><li>若开启了自动创建，在向挂载了模板的不存在路径写入时，数据库会自动扩展模板并写入数据，因此需要有 EXTEND_TEMPLATE 权限与写入序列的 WRITE_DATA 权限。</li><li>解除模板，需要拥有挂载模板路径的 WRITE_SCHEMA 权限。</li><li>查询使用了某个元数据模板的路径，需要有路径的 READ_SCHEMA 权限，否则将返回为空。</li></ol><h3 id="权限授予与取消" tabindex="-1"><a class="header-anchor" href="#权限授予与取消"><span>权限授予与取消</span></a></h3><p>在 IoTDB 中，用户可以由三种途径获得权限：</p><ol><li>由超级管理员授予，超级管理员可以控制其他用户的权限。</li><li>由允许权限授权的用户授予，该用户获得权限时被指定了 grant option 关键字。</li><li>由超级管理员或者有 MANAGE_ROLE 的用户授予某个角色进而获取权限。</li></ol><p>取消用户的权限，可以由以下几种途径：</p><ol><li>由超级管理员取消用户的权限。</li><li>由允许权限授权的用户取消权限，该用户获得权限时被指定了 grant option 关键字。</li><li>由超级管理员或者MANAGE_ROLE 的用户取消用户的某个角色进而取消权限。</li></ol><ul><li>在授权时，必须指定路径。全局权限需要指定为 root.**, 而序列相关权限必须为绝对路径或者以双通配符结尾的前缀路径。</li><li>当授予角色权限时，可以为该权限指定 with grant option 关键字，意味着用户可以转授其授权路径上的权限，也可以取消其他用户的授权路径上的权限。例如用户 A 在被授予<code>集团1.公司1.**</code>的读权限时制定了 grant option 关键字，那么 A 可以将<code>集团1.公司1</code>以下的任意节点、序列的读权限转授给他人， 同样也可以取消其他用户 <code>集团1.公司1</code> 下任意节点的读权限。</li><li>在取消授权时，取消授权语句会与用户所有的权限路径进行匹配，将匹配到的权限路径进行清理，例如用户A 具有 <code>集团1.公司1.工厂1 </code>的读权限， 在取消 <code>集团1.公司1.** </code>的读权限时，会清除用户A 的 <code>集团1.公司1.工厂1</code> 的读权限。</li></ul><h2 id="鉴权" tabindex="-1"><a class="header-anchor" href="#鉴权"><span>鉴权</span></a></h2><p>用户权限主要由三部分组成：权限生效范围（路径）， 权限类型， with grant option 标记：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>userTest1 : 
    root.t1.**  -  read_schema, read_data     -    with grant option
    root.**     -  write_schema, write_data   -    with grant option 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个用户都有一个这样的权限访问列表，标识他们获得的所有权限，可以通过 <code>LIST PRIVILEGES OF USER &lt;username&gt;</code> 查看他们的权限。</p><p>在对一个路径进行鉴权时，数据库会进行路径与权限的匹配。例如检查 <code>root.t1.t2</code> 的 read_schema 权限时，首先会与权限访问列表的 <code>root.t1.**</code>进行匹配，匹配成功，则检查该路径是否包含待鉴权的权限，否则继续下一条路径-权限的匹配，直到匹配成功或者匹配结束。</p><p>在进行多路径鉴权时，对于多路径查询任务，数据库只会将有权限的数据呈现出来，无权限的数据不会包含在结果中；对于多路径写入任务，数据库要求必须所有的目标序列都获得了对应的权限，才能进行写入。</p><p>请注意，下面的操作需要检查多重权限</p><ol><li>开启了自动创建序列功能，在用户将数据插入到不存在的序列中时，不仅需要对应序列的写入权限，还需要序列的元数据修改权限。</li><li>执行 select into 语句时，需要检查源序列的读权限与目标序列的写权限。需要注意的是源序列数据可能因为权限不足而仅能获取部分数据，目标序列写入权限不足时会报错终止任务。</li><li>View 权限与数据源的权限是独立的，向 view 执行读写操作仅会检查 view 的权限，而不再对源路径进行权限校验。</li></ol><h2 id="功能语法与示例" tabindex="-1"><a class="header-anchor" href="#功能语法与示例"><span>功能语法与示例</span></a></h2><p>IoTDB 提供了组合权限，方便用户授权：</p><table><thead><tr><th>权限名称</th><th>权限范围</th></tr></thead><tbody><tr><td>ALL</td><td>所有权限</td></tr><tr><td>READ</td><td>READ_SCHEMA、READ_DATA</td></tr><tr><td>WRITE</td><td>WRITE_SCHEMA、WRITE_DATA</td></tr></tbody></table><p>组合权限并不是一种具体的权限，而是一种简写方式，与直接书写对应的权限名称没有差异。</p><p>下面将通过一系列具体的用例展示权限语句的用法，非管理员执行下列语句需要提前获取权限，所需的权限标记在操作描述后。</p><h3 id="用户与角色相关" tabindex="-1"><a class="header-anchor" href="#用户与角色相关"><span>用户与角色相关</span></a></h3><ul><li>创建用户（需 MANAGE_USER 权限)</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>CREATE USER &lt;userName&gt; &lt;password&gt;
eg: CREATE USER user1 &#39;passwd&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除用户 (需 MANEGE_USER 权限)</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>DROP USER &lt;userName&gt;
eg: DROP USER user1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建角色 (需 MANAGE_ROLE 权限)</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>CREATE ROLE &lt;roleName&gt;
eg: CREATE ROLE role1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除角色 (需 MANAGE_ROLE 权限)</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>DROP ROLE &lt;roleName&gt;
eg: DROP ROLE role1   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予用户角色 (需 MANAGE_ROLE 权限)</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>GRANT ROLE &lt;ROLENAME&gt; TO &lt;USERNAME&gt;
eg: GRANT ROLE admin TO user1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>移除用户角色 (需 MANAGE_ROLE 权限)</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>REVOKE ROLE &lt;ROLENAME&gt; FROM &lt;USER&gt;
eg: REVOKE ROLE admin FROM user1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出所有用户 (需 MANEGE_USER 权限)</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>列出所有角色 (需 MANAGE_ROLE 权限)</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>LIST ROLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>列出指定角色下所有用户 (需 MANEGE_USER 权限)</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>LIST USER OF ROLE &lt;roleName&gt;
eg: LIST USER OF ROLE roleuser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出指定用户下所有角色</li></ul><p>用户可以列出自己的角色，但列出其他用户的角色需要拥有 MANAGE_ROLE 权限。</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>LIST ROLE OF USER &lt;username&gt; 
eg: LIST ROLE OF USER tempuser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户所有权限</li></ul><p>用户可以列出自己的权限信息，但列出其他用户的权限需要拥有 MANAGE_USER 权限。</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>LIST PRIVILEGES OF USER &lt;username&gt;;
eg: LIST PRIVILEGES OF USER tempuser;
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色所有权限</li></ul><p>用户可以列出自己具有的角色的权限信息，列出其他角色的权限需要有 MANAGE_ROLE 权限。</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>LIST PRIVILEGES OF ROLE &lt;roleName&gt;;
eg: LIST PRIVILEGES OF ROLE actor;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更新密码</li></ul><p>用户可以更新自己的密码，但更新其他用户密码需要具备MANAGE_USER 权限。</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
eg: ALTER USER tempuser SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="授权与取消授权" tabindex="-1"><a class="header-anchor" href="#授权与取消授权"><span>授权与取消授权</span></a></h3><p>用户使用授权语句对赋予其他用户权限，语法如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>GRANT &lt;PRIVILEGES&gt; ON &lt;PATHS&gt; TO ROLE/USER &lt;NAME&gt; [WITH GRANT OPTION]；
eg: GRANT READ ON root.** TO ROLE role1;
eg: GRANT READ_DATA, WRITE_DATA ON root.t1.** TO USER user1;
eg: GRANT READ_DATA, WRITE_DATA ON root.t1.**,root.t2.** TO USER user1;
eg: GRANT MANAGE_ROLE ON root.** TO USER user1 WITH GRANT OPTION;
eg: GRANT ALL ON root.** TO USER user1 WITH GRANT OPTION;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户使用取消授权语句可以将其他的权限取消，语法如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>REVOKE &lt;PRIVILEGES&gt; ON &lt;PATHS&gt; FROM ROLE/USER &lt;NAME&gt;;
eg: REVOKE READ ON root.** FROM ROLE role1;
eg: REVOKE READ_DATA, WRITE_DATA ON root.t1.** FROM USER user1;
eg: REVOKE READ_DATA, WRITE_DATA ON root.t1.**, root.t2.** FROM USER user1;
eg: REVOKE MANAGE_ROLE ON root.** FROM USER user1;
eg: REVOKE ALL ON ROOT.** FROM USER user1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>非管理员用户执行授权/取消授权语句时，需要对&lt;PATHS&gt; 有&lt;PRIVILEGES&gt; 权限，并且该权限是被标记带有 WITH GRANT OPTION 的。</strong></p></li><li><p>在授予取消全局权限时，或者语句中包含全局权限时(ALL 展开会包含全局权限），须指定 path 为 root.**。 例如，以下授权/取消授权语句是合法的：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>GRANT MANAGE_USER ON root.** TO USER user1;
GRANT MANAGE_ROLE ON root.** TO ROLE role1  WITH GRANT OPTION;
GRANT ALL ON  root.** TO role role1  WITH GRANT OPTION;
REVOKE MANAGE_USER ON root.** FROM USER user1;
REVOKE MANAGE_ROLE ON root.** FROM ROLE role1;
REVOKE ALL ON root.** FROM ROLE role1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的语句是非法的：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>GRANT READ, MANAGE_ROLE ON root.t1.** TO USER user1;
GRANT ALL ON root.t1.t2 TO USER user1 WITH GRANT OPTION;
REVOKE ALL ON root.t1.t2 FROM USER user1;
REVOKE READ, MANAGE_ROLE ON root.t1.t2 FROM ROLE ROLE1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>&lt;PATH&gt; 必须为全路径或者以双通配符结尾的匹配路径，以下路径是合法的:</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>root.**
root.t1.t2.**
root.t1.t2.t3 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下的路径是非法的：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>root.t1.*
root.t1.**.t2
root.t1*.t2.t3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>`,84),p={href:"https://github.com/thulab/iotdb/files/4438687/OtherMaterial-Sample.Data.txt",target:"_blank",rel:"noopener noreferrer"},A=l(`<h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3><p>使用 <code>CREATE USER &lt;userName&gt; &lt;password&gt;</code> 创建用户。例如，我们可以使用具有所有权限的root用户为 ln 和 sgcc 集团创建两个用户角色，名为 ln_write_user, sgcc_write_user，密码均为 write_pwd。建议使用反引号(\`)包裹用户名。SQL 语句为：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>CREATE USER \`ln_write_user\` &#39;write_pwd&#39;
CREATE USER \`sgcc_write_user\` &#39;write_pwd&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时使用展示用户的 SQL 语句：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以看到这两个已经被创建的用户，结果如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>IoTDB&gt; CREATE USER \`ln_write_user\` &#39;write_pwd&#39;
Msg: The statement is executed successfully.
IoTDB&gt; CREATE USER \`sgcc_write_user\` &#39;write_pwd&#39;
Msg: The statement is executed successfully.
IoTDB&gt; LIST USER;
+---------------+
|           user|
+---------------+
|  ln_write_user|
|           root|
|sgcc_write_user|
+---------------+
Total line number = 3
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="赋予用户权限" tabindex="-1"><a class="header-anchor" href="#赋予用户权限"><span>赋予用户权限</span></a></h3><p>此时，虽然两个用户已经创建，但是他们不具有任何权限，因此他们并不能对数据库进行操作，例如我们使用 ln_write_user 用户对数据库中的数据进行写入，SQL 语句为：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，系统不允许用户进行此操作，会提示错误：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
Msg: 803: No permissions for this operation, please add privilege WRITE_DATA on [root.ln.wf01.wt01.status]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们用 root 用户分别赋予他们向对应路径的写入权限.</p><p>我们使用 <code>GRANT &lt;PRIVILEGES&gt; ON &lt;PATHS&gt; TO USER &lt;username&gt;</code> 语句赋予用户权限,例如：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>GRANT WRITE_DATA ON root.ln.** TO USER \`ln_write_user\`
GRANT WRITE_DATA ON root.sgcc1.**, root.sgcc2.** TO USER \`sgcc_write_user\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行状态如下所示：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>IoTDB&gt; GRANT WRITE_DATA ON root.ln.** TO USER \`ln_write_user\`
Msg: The statement is executed successfully.
IoTDB&gt; GRANT WRITE_DATA ON root.sgcc1.**, root.sgcc2.** TO USER \`sgcc_write_user\`
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着使用ln_write_user再尝试写入数据</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销用户权限" tabindex="-1"><a class="header-anchor" href="#撤销用户权限"><span>撤销用户权限</span></a></h3><p>授予用户权限后，我们可以使用 <code>REVOKE &lt;PRIVILEGES&gt; ON &lt;PATHS&gt; FROM USER &lt;USERNAME&gt;</code>来撤销已经授予用户的权限。例如，用root用户撤销ln_write_user和sgcc_write_user的权限：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>REVOKE WRITE_DATA ON root.ln.** FROM USER \`ln_write_user\`
REVOKE WRITE_DATA ON root.sgcc1.**, root.sgcc2.** FROM USER \`sgcc_write_user\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行状态如下所示：</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>IoTDB&gt; REVOKE WRITE_DATA ON root.ln.** FROM USER \`ln_write_user\`
Msg: The statement is executed successfully.
IoTDB&gt; REVOKE WRITE_DATA ON root.sgcc1.**, root.sgcc2.** FROM USER \`sgcc_write_user\`
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>撤销权限后，ln_write_user就没有向root.ln.**写入数据的权限了。</p><div class="language-SQL line-numbers-mode" data-ext="SQL" data-title="SQL"><pre class="language-SQL"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
Msg: 803: No permissions for this operation, please add privilege WRITE_DATA on [root.ln.wf01.wt01.status]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明"><span>其他说明</span></a></h2><p>角色是权限的集合，而权限和角色都是用户的一种属性。即一个角色可以拥有若干权限。一个用户可以拥有若干角色与权限（称为用户自身权限）。</p><p>目前在 IoTDB 中并不存在相互冲突的权限，因此一个用户真正具有的权限是用户自身权限与其所有的角色的权限的并集。即要判定用户是否能执行某一项操作，就要看用户自身权限或用户的角色的所有权限中是否有一条允许了该操作。用户自身权限与其角色权限，他的多个角色的权限之间可能存在相同的权限，但这并不会产生影响。</p><p>需要注意的是：如果一个用户自身有某种权限（对应操作 A），而他的某个角色有相同的权限。那么如果仅从该用户撤销该权限无法达到禁止该用户执行操作 A 的目的，还需要从这个角色中也撤销对应的权限，或者从这个用户将该角色撤销。同样，如果仅从上述角色将权限撤销，也不能禁止该用户执行操作 A。</p><p>同时，对角色的修改会立即反映到所有拥有该角色的用户上，例如对角色增加某种权限将立即使所有拥有该角色的用户都拥有对应权限，删除某种权限也将使对应用户失去该权限（除非用户本身有该权限）。</p><h2 id="升级说明" tabindex="-1"><a class="header-anchor" href="#升级说明"><span>升级说明</span></a></h2><p>在 1.3 版本前，权限类型较多，在这一版实现中，权限类型做了精简，并且添加了对权限路径的约束。</p><p>数据库 1.3 版本的权限路径必须为全路径或者以双通配符结尾的匹配路径，在系统升级时，会自动转换不合法的权限路径和权限类型。<br> 路径上首个非法节点会被替换为<code>**</code>, 不在支持的权限类型也会映射到当前系统支持的权限上。</p><p>例如：</p><table><thead><tr><th>权限类型</th><th>权限路径</th><th>映射之后的权限类型</th><th>权限路径</th></tr></thead><tbody><tr><td>CREATE_DATBASE</td><td>root.db.t1.*</td><td>MANAGE_DATABASE</td><td>root.**</td></tr><tr><td>INSERT_TIMESERIES</td><td>root.db.t2.*.t3</td><td>WRITE_DATA</td><td>root.db.t2.**</td></tr><tr><td>CREATE_TIMESERIES</td><td>root.db.t2*c.t3</td><td>WRITE_SCHEMA</td><td>root.db.**</td></tr><tr><td>LIST_ROLE</td><td>root.**</td><td>(忽略)</td><td></td></tr></tbody></table><p>新旧版本的权限类型对照可以参照下面的表格（--IGNORE 表示新版本忽略该权限）：</p><table><thead><tr><th>权限名称</th><th>是否路径相关</th><th>新权限名称</th><th>是否路径相关</th></tr></thead><tbody><tr><td>CREATE_DATABASE</td><td>是</td><td>MANAGE_DATABASE</td><td>否</td></tr><tr><td>INSERT_TIMESERIES</td><td>是</td><td>WRITE_DATA</td><td>是</td></tr><tr><td>UPDATE_TIMESERIES</td><td>是</td><td>WRITE_DATA</td><td>是</td></tr><tr><td>READ_TIMESERIES</td><td>是</td><td>READ_DATA</td><td>是</td></tr><tr><td>CREATE_TIMESERIES</td><td>是</td><td>WRITE_SCHEMA</td><td>是</td></tr><tr><td>DELETE_TIMESERIES</td><td>是</td><td>WRITE_SCHEMA</td><td>是</td></tr><tr><td>CREATE_USER</td><td>否</td><td>MANAGE_USER</td><td>否</td></tr><tr><td>DELETE_USER</td><td>否</td><td>MANAGE_USER</td><td>否</td></tr><tr><td>MODIFY_PASSWORD</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>LIST_USER</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>GRANT_USER_PRIVILEGE</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>REVOKE_USER_PRIVILEGE</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>GRANT_USER_ROLE</td><td>否</td><td>MANAGE_ROLE</td><td>否</td></tr><tr><td>REVOKE_USER_ROLE</td><td>否</td><td>MANAGE_ROLE</td><td>否</td></tr><tr><td>CREATE_ROLE</td><td>否</td><td>MANAGE_ROLE</td><td>否</td></tr><tr><td>DELETE_ROLE</td><td>否</td><td>MANAGE_ROLE</td><td>否</td></tr><tr><td>LIST_ROLE</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>GRANT_ROLE_PRIVILEGE</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>REVOKE_ROLE_PRIVILEGE</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>CREATE_FUNCTION</td><td>否</td><td>USE_UDF</td><td>否</td></tr><tr><td>DROP_FUNCTION</td><td>否</td><td>USE_UDF</td><td>否</td></tr><tr><td>CREATE_TRIGGER</td><td>是</td><td>USE_TRIGGER</td><td>否</td></tr><tr><td>DROP_TRIGGER</td><td>是</td><td>USE_TRIGGER</td><td>否</td></tr><tr><td>START_TRIGGER</td><td>是</td><td>USE_TRIGGER</td><td>否</td></tr><tr><td>STOP_TRIGGER</td><td>是</td><td>USE_TRIGGER</td><td>否</td></tr><tr><td>CREATE_CONTINUOUS_QUERY</td><td>否</td><td>USE_CQ</td><td>否</td></tr><tr><td>DROP_CONTINUOUS_QUERY</td><td>否</td><td>USE_CQ</td><td>否</td></tr><tr><td>ALL</td><td>否</td><td>All privilegs</td><td></td></tr><tr><td>DELETE_DATABASE</td><td>是</td><td>MANAGE_DATABASE</td><td>否</td></tr><tr><td>ALTER_TIMESERIES</td><td>是</td><td>WRITE_SCHEMA</td><td>是</td></tr><tr><td>UPDATE_TEMPLATE</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>READ_TEMPLATE</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>APPLY_TEMPLATE</td><td>是</td><td>WRITE_SCHEMA</td><td>是</td></tr><tr><td>READ_TEMPLATE_APPLICATION</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>SHOW_CONTINUOUS_QUERIES</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>CREATE_PIPEPLUGIN</td><td>否</td><td>USE_PIPE</td><td>否</td></tr><tr><td>DROP_PIPEPLUGINS</td><td>否</td><td>USE_PIPE</td><td>否</td></tr><tr><td>SHOW_PIPEPLUGINS</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>CREATE_PIPE</td><td>否</td><td>USE_PIPE</td><td>否</td></tr><tr><td>START_PIPE</td><td>否</td><td>USE_PIPE</td><td>否</td></tr><tr><td>STOP_PIPE</td><td>否</td><td>USE_PIPE</td><td>否</td></tr><tr><td>DROP_PIPE</td><td>否</td><td>USE_PIPE</td><td>否</td></tr><tr><td>SHOW_PIPES</td><td>否</td><td>-- IGNORE</td><td></td></tr><tr><td>CREATE_VIEW</td><td>是</td><td>WRITE_SCHEMA</td><td>是</td></tr><tr><td>ALTER_VIEW</td><td>是</td><td>WRITE_SCHEMA</td><td>是</td></tr><tr><td>RENAME_VIEW</td><td>是</td><td>WRITE_SCHEMA</td><td>是</td></tr><tr><td>DELETE_VIEW</td><td>是</td><td>WRITE_SCHEMA</td><td>是</td></tr></tbody></table>`,38);function g(m,T){const i=a("RouteLink"),r=a("ExternalLinkIcon");return E(),c("div",null,[u,e("p",null,[t("IoTDB 为用户提供了权限管理操作，为用户提供对数据与集群系统的权限管理功能，保障数据与系统安全。"),R,t(" 本篇介绍IoTDB 中权限模块的基本概念、用户定义、权限管理、鉴权逻辑与功能用例。在 JAVA 编程环境中，您可以使用 "),d(i,{to:"/zh/UserGuide/latest/API/Programming-JDBC.html"},{default:n(()=>[t("JDBC API")]),_:1}),t(" 单条或批量执行权限管理类语句。")]),v,e("p",null,[t("数据库提供多种操作，但并非所有的用户都能执行所有操作。如果一个用户可以执行某项操作，则称该用户有执行该操作的权限。权限通常需要一个路径来限定其生效范围，可以使用"),d(i,{to:"/zh/UserGuide/latest/Basic-Concept/Data-Model-and-Terminology.html"},{default:n(()=>[t("路径模式")]),_:1}),t("灵活管理权限。")]),S,e("p",null,[t("根据本文中描述的 "),e("a",p,[t("样例数据"),d(r)]),t(" 内容，IoTDB 的样例数据可能同时属于 ln, sgcc 等不同发电集团，不同的发电集团不希望其他发电集团获取自己的数据库数据，因此我们需要将不同的数据在集团层进行权限隔离。")]),A])}const _=s(o,[["render",g],["__file","Authority-Management.html.vue"]]),L=JSON.parse('{"path":"/zh/UserGuide/latest/User-Manual/Authority-Management.html","title":"权限管理","lang":"zh-CN","frontmatter":{"description":"权限管理 IoTDB 为用户提供了权限管理操作，为用户提供对数据与集群系统的权限管理功能，保障数据与系统安全。 本篇介绍IoTDB 中权限模块的基本概念、用户定义、权限管理、鉴权逻辑与功能用例。在 JAVA 编程环境中，您可以使用 单条或批量执行权限管理类语句。 基本概念 用户 用户即数据库的合法使用者。一个用户与一个唯一的用户名相对应，并且拥有密码作...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Authority-Management.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Authority-Management.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"权限管理"}],["meta",{"property":"og:description","content":"权限管理 IoTDB 为用户提供了权限管理操作，为用户提供对数据与集群系统的权限管理功能，保障数据与系统安全。 本篇介绍IoTDB 中权限模块的基本概念、用户定义、权限管理、鉴权逻辑与功能用例。在 JAVA 编程环境中，您可以使用 单条或批量执行权限管理类语句。 基本概念 用户 用户即数据库的合法使用者。一个用户与一个唯一的用户名相对应，并且拥有密码作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-21T03:49:53.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-21T03:49:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"权限管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-21T03:49:53.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"用户","slug":"用户","link":"#用户","children":[]},{"level":3,"title":"权限","slug":"权限","link":"#权限","children":[]},{"level":3,"title":"角色","slug":"角色","link":"#角色","children":[]},{"level":3,"title":"默认用户与角色","slug":"默认用户与角色","link":"#默认用户与角色","children":[]}]},{"level":2,"title":"用户定义","slug":"用户定义","link":"#用户定义","children":[{"level":3,"title":"用户名限制","slug":"用户名限制","link":"#用户名限制","children":[]},{"level":3,"title":"密码限制","slug":"密码限制","link":"#密码限制","children":[]},{"level":3,"title":"角色名限制","slug":"角色名限制","link":"#角色名限制","children":[]}]},{"level":2,"title":"权限管理","slug":"权限管理-1","link":"#权限管理-1","children":[{"level":3,"title":"序列权限","slug":"序列权限","link":"#序列权限","children":[]},{"level":3,"title":"全局权限","slug":"全局权限","link":"#全局权限","children":[]},{"level":3,"title":"权限授予与取消","slug":"权限授予与取消","link":"#权限授予与取消","children":[]}]},{"level":2,"title":"鉴权","slug":"鉴权","link":"#鉴权","children":[]},{"level":2,"title":"功能语法与示例","slug":"功能语法与示例","link":"#功能语法与示例","children":[{"level":3,"title":"用户与角色相关","slug":"用户与角色相关","link":"#用户与角色相关","children":[]},{"level":3,"title":"授权与取消授权","slug":"授权与取消授权","link":"#授权与取消授权","children":[]}]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":3,"title":"赋予用户权限","slug":"赋予用户权限","link":"#赋予用户权限","children":[]},{"level":3,"title":"撤销用户权限","slug":"撤销用户权限","link":"#撤销用户权限","children":[]}]},{"level":2,"title":"其他说明","slug":"其他说明","link":"#其他说明","children":[]},{"level":2,"title":"升级说明","slug":"升级说明","link":"#升级说明","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1724212193000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":2},{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":16.45,"words":4936},"filePathRelative":"zh/UserGuide/latest/User-Manual/Authority-Management.md","localizedDate":"2023年7月10日","autoDesc":true}');export{_ as comp,L as data};
