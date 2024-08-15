import{_ as r,r as a,o as c,c as u,b as t,d as e,a as l,w as n,e as s}from"./app-CHHFxD1F.js";const o={},E=t("h1",{id:"权限管理",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#权限管理"},[t("span",null,"权限管理")])],-1),g=t("p",null,"IoTDB 为用户提供了权限管理操作，从而为用户提供对于数据的权限管理功能，保障数据的安全。",-1),v=s(`<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><h3 id="用户" tabindex="-1"><a class="header-anchor" href="#用户"><span>用户</span></a></h3><p>用户即数据库的合法使用者。一个用户与一个唯一的用户名相对应，并且拥有密码作为身份验证的手段。一个人在使用数据库之前，必须先提供合法的（即存于数据库中的）用户名与密码，使得自己成为用户。</p><h3 id="权限" tabindex="-1"><a class="header-anchor" href="#权限"><span>权限</span></a></h3><p>数据库提供多种操作，并不是所有的用户都能执行所有操作。如果一个用户可以执行某项操作，则称该用户有执行该操作的权限。权限可分为数据管理权限（如对数据进行增删改查）以及权限管理权限（用户、角色的创建与删除，权限的赋予与撤销等）。数据管理权限往往需要一个路径来限定其生效范围，它的生效范围是以该路径对应的节点为根的一棵子树（具体请参考 IoTDB 的数据组织）。</p><blockquote><p>注意：在授予或移除权限时不允许使用路径通配符。</p></blockquote><p>以下示例是错误的用法：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln.**;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>正确用法应该为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="角色" tabindex="-1"><a class="header-anchor" href="#角色"><span>角色</span></a></h3><p>角色是若干权限的集合，并且有一个唯一的角色名作为标识符。用户通常和一个现实身份相对应（例如交通调度员），而一个现实身份可能对应着多个用户。这些具有相同现实身份的用户往往具有相同的一些权限。角色就是为了能对这样的权限进行统一的管理的抽象。</p><h3 id="默认用户及其具有的角色" tabindex="-1"><a class="header-anchor" href="#默认用户及其具有的角色"><span>默认用户及其具有的角色</span></a></h3><p>初始安装后的 IoTDB 中有一个默认用户：root，默认密码为 root。该用户为管理员用户，固定拥有所有权限，无法被赋予、撤销权限，也无法被删除。</p><h2 id="权限操作示例" tabindex="-1"><a class="header-anchor" href="#权限操作示例"><span>权限操作示例</span></a></h2>`,15),m={href:"https://github.com/thulab/iotdb/files/4438687/OtherMaterial-Sample.Data.txt",target:"_blank",rel:"noopener noreferrer"},x=s(`<h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3><p>使用 <code>CREATE USER &lt;userName&gt; &lt;password&gt;</code> 创建用户。我们可以为 ln 和 sgcc 集团创建两个用户角色，名为 ln_write_user, sgcc_write_user，密码均为 write_pwd。SQL 语句为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE USER ln_write_user &#39;write_pwd&#39;
CREATE USER sgcc_write_user &#39;write_pwd&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时使用展示用户的 SQL 语句：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以看到这两个已经被创建的用户，结果如下：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; CREATE USER ln_write_user &#39;write_pwd&#39;
Msg: The statement is executed successfully.
IoTDB&gt; CREATE USER sgcc_write_user &#39;write_pwd&#39;
Msg: The statement is executed successfully.
IoTDB&gt; LIST USER
+---------------+
|           user|
+---------------+
|  ln_write_user|
|           root|
|sgcc_write_user|
+---------------+
Total line number = 3
It costs 0.157s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="赋予用户权限" tabindex="-1"><a class="header-anchor" href="#赋予用户权限"><span>赋予用户权限</span></a></h3><p>此时，虽然两个用户已经创建，但是他们不具有任何权限，因此他们并不能对数据库进行操作，例如我们使用 ln_write_user 用户对数据库中的数据进行写入，SQL 语句为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，系统不允许用户进行此操作，会提示错误：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
Msg: 602: No permissions for this operation, please add privilege READ_TIMESERIES.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们分别赋予他们向对应存储组数据的写入权限，并再次尝试向对应的存储组进行数据写入。</p><p>我们 <code>GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;</code> 语句赋予用户权限，例如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
GRANT USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行状态如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; GRANT USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
Msg: The statement is executed successfully.
IoTDB&gt; GRANT USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
Msg: The statement is executed successfully.
IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="撤销用户权限" tabindex="-1"><a class="header-anchor" href="#撤销用户权限"><span>撤销用户权限</span></a></h3><p>授予用户权限后，我们可以使用 <code>REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;</code> 来撤销已授予的用户权限。 例如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>REVOKE USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
REVOKE USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行状态如下所示：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>REVOKE USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
Msg: The statement is executed successfully.
REVOKE USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
Msg: The statement is executed successfully.
INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
Msg: 602: No permissions for this operation, please add privilege READ_TIMESERIES.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-语句" tabindex="-1"><a class="header-anchor" href="#sql-语句"><span>SQL 语句</span></a></h3><p>与权限相关的语句包括：</p><ul><li>创建用户</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE USER &lt;userName&gt; &lt;password&gt;;  
Eg: IoTDB &gt; CREATE USER thulab &#39;passwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除用户</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>DROP USER &lt;userName&gt;;  
Eg: IoTDB &gt; DROP USER xiaoming;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建角色</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE ROLE &lt;roleName&gt;;  
Eg: IoTDB &gt; CREATE ROLE admin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除角色</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>DROP ROLE &lt;roleName&gt;;  
Eg: IoTDB &gt; DROP ROLE admin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予用户权限</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
Eg: IoTDB &gt; GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予角色权限</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
Eg: IoTDB &gt; GRANT ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予用户角色</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT &lt;roleName&gt; TO &lt;userName&gt;;  
Eg: IoTDB &gt; GRANT temprole TO tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销用户权限</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;   
Eg: IoTDB &gt; REVOKE USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销角色权限</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>REVOKE ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
Eg: IoTDB &gt; REVOKE ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销用户角色</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>REVOKE &lt;roleName&gt; FROM &lt;userName&gt;;
Eg: IoTDB &gt; REVOKE temprole FROM tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST USER
Eg: IoTDB &gt; LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST ROLE
Eg: IoTDB &gt; LIST ROLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出权限</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST PRIVILEGES USER  &lt;username&gt; ON &lt;path&gt;;    
Eg: IoTDB &gt; LIST PRIVILEGES USER sgcc_wirte_user ON root.sgcc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色权限</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST ROLE PRIVILEGES &lt;roleName&gt;
Eg: IoTDB &gt; LIST ROLE PRIVILEGES actor;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色在具体路径上的权限</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST PRIVILEGES ROLE &lt;roleName&gt; ON &lt;path&gt;;    
Eg: IoTDB &gt; LIST PRIVILEGES ROLE wirte_role ON root.sgcc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户权限</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST USER PRIVILEGES &lt;username&gt; ;   
Eg: IoTDB &gt; LIST USER PRIVILEGES tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户所有的角色</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST ALL ROLE OF USER &lt;username&gt; ;  
Eg: IoTDB &gt; LIST ALL ROLE OF USER tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出所有用户的角色</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST ALL USER OF ROLE &lt;roleName&gt;;
Eg: IoTDB &gt; LIST ALL USER OF ROLE roleuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更新密码</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
Eg: IoTDB &gt; ALTER USER tempuser SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他说明" tabindex="-1"><a class="header-anchor" href="#其他说明"><span>其他说明</span></a></h2><h3 id="用户、权限与角色的关系" tabindex="-1"><a class="header-anchor" href="#用户、权限与角色的关系"><span>用户、权限与角色的关系</span></a></h3><p>角色是权限的集合，而权限和角色都是用户的一种属性。即一个角色可以拥有若干权限。一个用户可以拥有若干角色与权限（称为用户自身权限）。</p><p>目前在 IoTDB 中并不存在相互冲突的权限，因此一个用户真正具有的权限是用户自身权限与其所有的角色的权限的并集。即要判定用户是否能执行某一项操作，就要看用户自身权限或用户的角色的所有权限中是否有一条允许了该操作。用户自身权限与其角色权限，他的多个角色的权限之间可能存在相同的权限，但这并不会产生影响。</p><p>需要注意的是：如果一个用户自身有某种权限（对应操作 A），而他的某个角色有相同的权限。那么如果仅从该用户撤销该权限无法达到禁止该用户执行操作 A 的目的，还需要从这个角色中也撤销对应的权限，或者从这个用户将该角色撤销。同样，如果仅从上述角色将权限撤销，也不能禁止该用户执行操作 A。</p><p>同时，对角色的修改会立即反映到所有拥有该角色的用户上，例如对角色增加某种权限将立即使所有拥有该角色的用户都拥有对应权限，删除某种权限也将使对应用户失去该权限（除非用户本身有该权限）。</p><h3 id="系统所含权限列表" tabindex="-1"><a class="header-anchor" href="#系统所含权限列表"><span>系统所含权限列表</span></a></h3><p><strong>系统所含权限列表</strong></p><table><thead><tr><th style="text-align:left;">权限名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">SET_STORAGE_GROUP</td><td style="text-align:left;">创建存储组。包含设置存储组的权限。路径相关</td></tr><tr><td style="text-align:left;">DELETE_STORAGE_GROUP</td><td style="text-align:left;">删除存储组。路径相关</td></tr><tr><td style="text-align:left;">CREATE_TIMESERIES</td><td style="text-align:left;">创建时间序列。路径相关</td></tr><tr><td style="text-align:left;">INSERT_TIMESERIES</td><td style="text-align:left;">插入数据。路径相关</td></tr><tr><td style="text-align:left;">READ_TIMESERIES</td><td style="text-align:left;">查询数据。路径相关</td></tr><tr><td style="text-align:left;">DELETE_TIMESERIES</td><td style="text-align:left;">删除数据或时间序列，解除模板。路径相关</td></tr><tr><td style="text-align:left;">DELETE_STORAGE_GROUP</td><td style="text-align:left;">删除存储组。路径相关</td></tr><tr><td style="text-align:left;">CREATE_USER</td><td style="text-align:left;">创建用户。路径无关</td></tr><tr><td style="text-align:left;">DELETE_USER</td><td style="text-align:left;">删除用户。路径无关</td></tr><tr><td style="text-align:left;">MODIFY_PASSWORD</td><td style="text-align:left;">修改所有用户的密码。路径无关。（没有该权限者仍然能够修改自己的密码。)</td></tr><tr><td style="text-align:left;">LIST_USER</td><td style="text-align:left;">列出所有用户，列出某用户权限，列出某用户具有的角色以及列出所有用户的角色四种操作的权限。路径无关</td></tr><tr><td style="text-align:left;">GRANT_USER_PRIVILEGE</td><td style="text-align:left;">赋予用户权限。路径无关</td></tr><tr><td style="text-align:left;">REVOKE_USER_PRIVILEGE</td><td style="text-align:left;">撤销用户权限。路径无关</td></tr><tr><td style="text-align:left;">GRANT_USER_ROLE</td><td style="text-align:left;">赋予用户角色。路径无关</td></tr><tr><td style="text-align:left;">REVOKE_USER_ROLE</td><td style="text-align:left;">撤销用户角色。路径无关</td></tr><tr><td style="text-align:left;">CREATE_ROLE</td><td style="text-align:left;">创建角色。路径无关</td></tr><tr><td style="text-align:left;">DELETE_ROLE</td><td style="text-align:left;">删除角色。路径无关</td></tr><tr><td style="text-align:left;">LIST_ROLE</td><td style="text-align:left;">列出所有角色，列出某角色拥有的权限，列出拥有某角色的所有用户三种操作的权限。路径无关</td></tr><tr><td style="text-align:left;">GRANT_ROLE_PRIVILEGE</td><td style="text-align:left;">赋予角色权限。路径无关</td></tr><tr><td style="text-align:left;">REVOKE_ROLE_PRIVILEGE</td><td style="text-align:left;">撤销角色权限。路径无关</td></tr><tr><td style="text-align:left;">CREATE_FUNCTION</td><td style="text-align:left;">注册 UDF。路径无关</td></tr><tr><td style="text-align:left;">DROP_FUNCTION</td><td style="text-align:left;">卸载 UDF。路径无关</td></tr><tr><td style="text-align:left;">CREATE_TRIGGER</td><td style="text-align:left;">创建触发器。路径相关</td></tr><tr><td style="text-align:left;">DROP_TRIGGER</td><td style="text-align:left;">卸载触发器。路径相关</td></tr><tr><td style="text-align:left;">START_TRIGGER</td><td style="text-align:left;">启动触发器。路径相关</td></tr><tr><td style="text-align:left;">STOP_TRIGGER</td><td style="text-align:left;">停止触发器。路径相关</td></tr><tr><td style="text-align:left;">CREATE_CONTINUOUS_QUERY</td><td style="text-align:left;">创建连续查询。路径无关</td></tr><tr><td style="text-align:left;">DROP_CONTINUOUS_QUERY</td><td style="text-align:left;">卸载连续查询。路径无关</td></tr><tr><td style="text-align:left;">UPDATE_TEMPLATE</td><td style="text-align:left;">创建、删除、修改模板。路径无关。</td></tr><tr><td style="text-align:left;">APPLY_TEMPLATE</td><td style="text-align:left;">挂载、卸载、激活模板。路径相关。</td></tr></tbody></table><h3 id="用户名限制" tabindex="-1"><a class="header-anchor" href="#用户名限制"><span>用户名限制</span></a></h3><p>IoTDB 规定用户名的字符长度不小于 4，其中用户名不能包含空格。</p><h3 id="密码限制" tabindex="-1"><a class="header-anchor" href="#密码限制"><span>密码限制</span></a></h3><p>IoTDB 规定密码的字符长度不小于 4，其中密码不能包含空格，密码默认采用 MD5 进行加密。</p><h3 id="角色名限制" tabindex="-1"><a class="header-anchor" href="#角色名限制"><span>角色名限制</span></a></h3><p>IoTDB 规定角色名的字符长度不小于 4，其中角色名不能包含空格。</p>`,77);function p(R,I){const i=a("RouteLink"),d=a("ExternalLinkIcon");return c(),u("div",null,[E,g,t("p",null,[e("我们将通过以下几个具体的例子为您示范基本的用户权限操作，详细的 SQL 语句及使用方式详情请参见本文 "),l(i,{to:"/zh/UserGuide/V0.13.x/Data-Concept/Data-Model-and-Terminology.html"},{default:n(()=>[e("数据模式与概念章节")]),_:1}),e("。同时，在 JAVA 编程环境中，您可以使用 "),l(i,{to:"/zh/UserGuide/V0.13.x/API/Programming-JDBC.html"},{default:n(()=>[e("JDBC API")]),_:1}),e(" 单条或批量执行权限管理类语句。")]),v,t("p",null,[e("根据本文中描述的 "),t("a",m,[e("样例数据"),l(d)]),e(" 内容，IoTDB 的样例数据可能同时属于 ln, sgcc 等不同发电集团，不同的发电集团不希望其他发电集团获取自己的数据库数据，因此我们需要将不同的数据在集团层进行权限隔离。")]),x])}const T=r(o,[["render",p],["__file","Administration.html.vue"]]),S=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Administration-Management/Administration.html","title":"权限管理","lang":"zh-CN","frontmatter":{"description":"权限管理 IoTDB 为用户提供了权限管理操作，从而为用户提供对于数据的权限管理功能，保障数据的安全。 我们将通过以下几个具体的例子为您示范基本的用户权限操作，详细的 SQL 语句及使用方式详情请参见本文 。同时，在 JAVA 编程环境中，您可以使用 单条或批量执行权限管理类语句。 基本概念 用户 用户即数据库的合法使用者。一个用户与一个唯一的用户名相...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Administration-Management/Administration.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Administration-Management/Administration.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"权限管理"}],["meta",{"property":"og:description","content":"权限管理 IoTDB 为用户提供了权限管理操作，从而为用户提供对于数据的权限管理功能，保障数据的安全。 我们将通过以下几个具体的例子为您示范基本的用户权限操作，详细的 SQL 语句及使用方式详情请参见本文 。同时，在 JAVA 编程环境中，您可以使用 单条或批量执行权限管理类语句。 基本概念 用户 用户即数据库的合法使用者。一个用户与一个唯一的用户名相..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"权限管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"用户","slug":"用户","link":"#用户","children":[]},{"level":3,"title":"权限","slug":"权限","link":"#权限","children":[]},{"level":3,"title":"角色","slug":"角色","link":"#角色","children":[]},{"level":3,"title":"默认用户及其具有的角色","slug":"默认用户及其具有的角色","link":"#默认用户及其具有的角色","children":[]}]},{"level":2,"title":"权限操作示例","slug":"权限操作示例","link":"#权限操作示例","children":[{"level":3,"title":"创建用户","slug":"创建用户","link":"#创建用户","children":[]},{"level":3,"title":"赋予用户权限","slug":"赋予用户权限","link":"#赋予用户权限","children":[]},{"level":3,"title":"撤销用户权限","slug":"撤销用户权限","link":"#撤销用户权限","children":[]},{"level":3,"title":"SQL 语句","slug":"sql-语句","link":"#sql-语句","children":[]}]},{"level":2,"title":"其他说明","slug":"其他说明","link":"#其他说明","children":[{"level":3,"title":"用户、权限与角色的关系","slug":"用户、权限与角色的关系","link":"#用户、权限与角色的关系","children":[]},{"level":3,"title":"系统所含权限列表","slug":"系统所含权限列表","link":"#系统所含权限列表","children":[]},{"level":3,"title":"用户名限制","slug":"用户名限制","link":"#用户名限制","children":[]},{"level":3,"title":"密码限制","slug":"密码限制","link":"#密码限制","children":[]},{"level":3,"title":"角色名限制","slug":"角色名限制","link":"#角色名限制","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":8.8,"words":2640},"filePathRelative":"zh/UserGuide/V0.13.x/Administration-Management/Administration.md","localizedDate":"2023年7月10日","autoDesc":true}');export{T as comp,S as data};
