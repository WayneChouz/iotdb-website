import{_ as d,r as a,o,c as u,b as t,d as e,a as i,w as n,e as l}from"./app-DJKa25Tg.js";const g={},c=t("h1",{id:"administration-management",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#administration-management"},[t("span",null,"Administration Management")])],-1),p=t("p",null,"IoTDB provides users with account privilege management operations, so as to ensure data security.",-1),v=t("br",null,null,-1),m=l(`<h2 id="basic-concepts" tabindex="-1"><a class="header-anchor" href="#basic-concepts"><span>Basic Concepts</span></a></h2><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user"><span>User</span></a></h3><p>The user is the legal user of the database. A user corresponds to a unique username and has a password as a means of authentication. Before using a database, a person must first provide a legitimate username and password to make himself/herself a user.</p><h3 id="privilege" tabindex="-1"><a class="header-anchor" href="#privilege"><span>Privilege</span></a></h3><p>The database provides a variety of operations, and not all users can perform all operations. If a user can perform an operation, the user is said to have the privilege to perform the operation. privileges are divided into data management privilege (such as adding, deleting and modifying data) and authority management privilege (such as creation and deletion of users and roles, granting and revoking of privileges, etc.). Data management privilege often needs a path to limit its effective range, which is a subtree rooted at the path&#39;s corresponding node.</p><blockquote><p>Note: the path wildcard is not allowed in granting or revoking privileges .</p></blockquote><p>The following example is the wrong usage:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln.**;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The correct usage should be:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="role" tabindex="-1"><a class="header-anchor" href="#role"><span>Role</span></a></h3><p>A role is a set of privileges and has a unique role name as an identifier. A user usually corresponds to a real identity (such as a traffic dispatcher), while a real identity may correspond to multiple users. These users with the same real identity tend to have the same privileges. Roles are abstractions that can unify the management of such privileges.</p><h3 id="default-user" tabindex="-1"><a class="header-anchor" href="#default-user"><span>Default User</span></a></h3><p>There is a default user in IoTDB after the initial installation: root, and the default password is root. This user is an administrator user, who cannot be deleted and has all the privileges. Neither can new privileges be granted to the root user nor can privileges owned by the root user be deleted.</p><h2 id="privilege-management-operation-examples" tabindex="-1"><a class="header-anchor" href="#privilege-management-operation-examples"><span>Privilege Management Operation Examples</span></a></h2>`,15),h={href:"https://github.com/thulab/iotdb/files/4438687/OtherMaterial-Sample.Data.txt",target:"_blank",rel:"noopener noreferrer"},E=l(`<h3 id="create-user" tabindex="-1"><a class="header-anchor" href="#create-user"><span>Create User</span></a></h3><p>We use <code>CREATE USER &lt;userName&gt; &lt;password&gt;</code> to create users. For example, we can create two users for ln and sgcc groups, named ln_write_user and sgcc_write_user, with both passwords being write_pwd. The SQL statement is:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE USER ln_write_user &#39;write_pwd&#39;
CREATE USER sgcc_write_user &#39;write_pwd&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use the following SQL statement to show the user:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>As can be seen from the result shown below, the two users have been created:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>+---------------+
|           user|
+---------------+
|  ln_write_user|
|           root|
|sgcc_write_user|
+---------------+
Total line number = 3
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grant-user-privilege" tabindex="-1"><a class="header-anchor" href="#grant-user-privilege"><span>Grant User Privilege</span></a></h3><p>At this point, although two users have been created, they do not have any privileges, so they can not operate on the database. For example, we use ln_write_user to write data in the database, the SQL statement is:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The SQL statement will not be executed and the corresponding error prompt is given as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Msg: 602: No permissions for this operation, please add privilege READ_TIMESERIES.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Now, we grant the two users write privileges to the corresponding storage groups, and try to write data again.</p><p>We use <code>GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;</code> to grant user privileges. For example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
GRANT USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>IoTDB&gt; GRANT USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
Msg: The statement is executed successfully.
IoTDB&gt; GRANT USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
Msg: The statement is executed successfully.
IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
Msg: The statement is executed successfully.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="revoker-user-privilege" tabindex="-1"><a class="header-anchor" href="#revoker-user-privilege"><span>Revoker User Privilege</span></a></h3><p>After granting user privileges, we could use <code>REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;</code> to revoke the granted user privileges. For example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>REVOKE USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
REVOKE USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>REVOKE USER ln_write_user PRIVILEGES INSERT_TIMESERIES on root.ln
Msg: The statement is executed successfully.
REVOKE USER sgcc_write_user PRIVILEGES INSERT_TIMESERIES on root.sgcc
Msg: The statement is executed successfully.
INSERT INTO root.ln.wf01.wt01(timestamp, status) values(1509465600000, true)
Msg: 602: No permissions for this operation, please add privilege READ_TIMESERIES.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-statements" tabindex="-1"><a class="header-anchor" href="#sql-statements"><span>SQL Statements</span></a></h3><p>Here are all related SQL statements:</p><ul><li>Create User</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE USER &lt;userName&gt; &lt;password&gt;;  
Eg: IoTDB &gt; CREATE USER thulab &#39;pwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete User</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>DROP USER &lt;userName&gt;;  
Eg: IoTDB &gt; DROP USER xiaoming;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Role</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE ROLE &lt;roleName&gt;;  
Eg: IoTDB &gt; CREATE ROLE admin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete Role</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>DROP ROLE &lt;roleName&gt;;  
Eg: IoTDB &gt; DROP ROLE admin;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant User Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
Eg: IoTDB &gt; GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant Role Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
Eg: IoTDB &gt; GRANT ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant User Role</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>GRANT &lt;roleName&gt; TO &lt;userName&gt;;  
Eg: IoTDB &gt; GRANT temprole TO tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke User Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;   
Eg: IoTDB &gt; REVOKE USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke Role Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>REVOKE ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  
Eg: IoTDB &gt; REVOKE ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke Role From User</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>REVOKE &lt;roleName&gt; FROM &lt;userName&gt;;
Eg: IoTDB &gt; REVOKE temprole FROM tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Users</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST USER
Eg: IoTDB &gt; LIST USER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Roles</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST ROLE
Eg: IoTDB &gt; LIST ROLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST PRIVILEGES USER  &lt;username&gt; ON &lt;path&gt;;    
Eg: IoTDB &gt; LIST PRIVILEGES USER sgcc_wirte_user ON root.sgcc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Roles</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST ROLE PRIVILEGES &lt;roleName&gt;
Eg: IoTDB &gt; LIST ROLE PRIVILEGES actor;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Roles(On Specific Path)</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST PRIVILEGES ROLE &lt;roleName&gt; ON &lt;path&gt;;    
Eg: IoTDB &gt; LIST PRIVILEGES ROLE wirte_role ON root.sgcc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Users</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST USER PRIVILEGES &lt;username&gt; ;   
Eg: IoTDB &gt; LIST USER PRIVILEGES tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Roles of User</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST ALL ROLE OF USER &lt;username&gt; ;  
Eg: IoTDB &gt; LIST ALL ROLE OF USER tempuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Users of Role</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>LIST ALL USER OF ROLE &lt;roleName&gt;;
Eg: IoTDB &gt; LIST ALL USER OF ROLE roleuser;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Alter Password</li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
Eg: IoTDB &gt; ALTER USER tempuser SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="other-instructions" tabindex="-1"><a class="header-anchor" href="#other-instructions"><span>Other Instructions</span></a></h2><h3 id="the-relationship-among-users-privileges-and-roles" tabindex="-1"><a class="header-anchor" href="#the-relationship-among-users-privileges-and-roles"><span>The Relationship among Users, Privileges and Roles</span></a></h3><p>A Role is a set of privileges, and privileges and roles are both attributes of users. That is, a role can have several privileges and a user can have several roles and privileges (called the user&#39;s own privileges).</p><p>At present, there is no conflicting privilege in IoTDB, so the real privileges of a user is the union of the user&#39;s own privileges and the privileges of the user&#39;s roles. That is to say, to determine whether a user can perform an operation, it depends on whether one of the user&#39;s own privileges or the privileges of the user&#39;s roles permits the operation. The user&#39;s own privileges and privileges of the user&#39;s roles may overlap, but it does not matter.</p><p>It should be noted that if users have a privilege (corresponding to operation A) themselves and their roles contain the same privilege, then revoking the privilege from the users themselves alone can not prohibit the users from performing operation A, since it is necessary to revoke the privilege from the role, or revoke the role from the user. Similarly, revoking the privilege from the users&#39;s roles alone can not prohibit the users from performing operation A.</p><p>At the same time, changes to roles are immediately reflected on all users who own the roles. For example, adding certain privileges to roles will immediately give all users who own the roles corresponding privileges, and deleting certain privileges will also deprive the corresponding users of the privileges (unless the users themselves have the privileges).</p><h3 id="list-of-privileges-included-in-the-system" tabindex="-1"><a class="header-anchor" href="#list-of-privileges-included-in-the-system"><span>List of Privileges Included in the System</span></a></h3><p><strong>List of privileges Included in the System</strong></p><table><thead><tr><th style="text-align:left;">privilege Name</th><th style="text-align:left;">Interpretation</th></tr></thead><tbody><tr><td style="text-align:left;">SET_STORAGE_GROUP</td><td style="text-align:left;">set storage groups; path dependent</td></tr><tr><td style="text-align:left;">DELETE_STORAGE_GROUP</td><td style="text-align:left;">delete storage groups; path dependent</td></tr><tr><td style="text-align:left;">CREATE_TIMESERIES</td><td style="text-align:left;">create timeseries; path dependent</td></tr><tr><td style="text-align:left;">INSERT_TIMESERIES</td><td style="text-align:left;">insert data; path dependent</td></tr><tr><td style="text-align:left;">READ_TIMESERIES</td><td style="text-align:left;">query data; path dependent</td></tr><tr><td style="text-align:left;">DELETE_TIMESERIES</td><td style="text-align:left;">delete data or timeseries, deactivate template; path dependent</td></tr><tr><td style="text-align:left;">DELETE_STORAGE_GROUP</td><td style="text-align:left;">delete storage groups; path dependent</td></tr><tr><td style="text-align:left;">CREATE_USER</td><td style="text-align:left;">create users; path independent</td></tr><tr><td style="text-align:left;">DELETE_USER</td><td style="text-align:left;">delete users; path independent</td></tr><tr><td style="text-align:left;">MODIFY_PASSWORD</td><td style="text-align:left;">modify passwords for all users; path independent; (Those who do not have this privilege can still change their own asswords. )</td></tr><tr><td style="text-align:left;">LIST_USER</td><td style="text-align:left;">list all users; list a user&#39;s privileges; list a user&#39;s roles; list users of role with four kinds of operation privileges; path independent</td></tr><tr><td style="text-align:left;">GRANT_USER_PRIVILEGE</td><td style="text-align:left;">grant user privileges; path independent</td></tr><tr><td style="text-align:left;">REVOKE_USER_PRIVILEGE</td><td style="text-align:left;">revoke user privileges; path independent</td></tr><tr><td style="text-align:left;">GRANT_USER_ROLE</td><td style="text-align:left;">grant user roles; path independent</td></tr><tr><td style="text-align:left;">REVOKE_USER_ROLE</td><td style="text-align:left;">revoke user roles; path independent</td></tr><tr><td style="text-align:left;">CREATE_ROLE</td><td style="text-align:left;">create roles; path independent</td></tr><tr><td style="text-align:left;">DELETE_ROLE</td><td style="text-align:left;">delete roles; path independent</td></tr><tr><td style="text-align:left;">LIST_ROLE</td><td style="text-align:left;">list all roles; list the privileges of a role; list the three kinds of operation privileges of all users owning a role; path independent</td></tr><tr><td style="text-align:left;">GRANT_ROLE_PRIVILEGE</td><td style="text-align:left;">grant role privileges; path independent</td></tr><tr><td style="text-align:left;">REVOKE_ROLE_PRIVILEGE</td><td style="text-align:left;">revoke role privileges; path independent</td></tr><tr><td style="text-align:left;">CREATE_FUNCTION</td><td style="text-align:left;">register UDFs; path independent</td></tr><tr><td style="text-align:left;">DROP_FUNCTION</td><td style="text-align:left;">deregister UDFs; path independent</td></tr><tr><td style="text-align:left;">CREATE_TRIGGER</td><td style="text-align:left;">create triggers; path dependent</td></tr><tr><td style="text-align:left;">DROP_TRIGGER</td><td style="text-align:left;">drop triggers; path dependent</td></tr><tr><td style="text-align:left;">START_TRIGGER</td><td style="text-align:left;">start triggers; path dependent</td></tr><tr><td style="text-align:left;">STOP_TRIGGER</td><td style="text-align:left;">stop triggers; path dependent</td></tr><tr><td style="text-align:left;">CREATE_CONTINUOUS_QUERY</td><td style="text-align:left;">create continuous queries; path independent</td></tr><tr><td style="text-align:left;">DROP_CONTINUOUS_QUERY</td><td style="text-align:left;">drop continuous queries; path independent</td></tr><tr><td style="text-align:left;">UPDATE_TEMPLATE</td><td style="text-align:left;">create, drop, append and prune schema template; path independent</td></tr><tr><td style="text-align:left;">APPLY_TEMPLATE</td><td style="text-align:left;">set, unset and activate schema template; path dependent</td></tr></tbody></table><h3 id="username-restrictions" tabindex="-1"><a class="header-anchor" href="#username-restrictions"><span>Username Restrictions</span></a></h3><p>IoTDB specifies that the character length of a username should not be less than 4, and the username cannot contain spaces.</p><h3 id="password-restrictions" tabindex="-1"><a class="header-anchor" href="#password-restrictions"><span>Password Restrictions</span></a></h3><p>IoTDB specifies that the character length of a password should have no less than 4 character length, and no spaces. The password is encrypted with MD5.</p><h3 id="role-name-restrictions" tabindex="-1"><a class="header-anchor" href="#role-name-restrictions"><span>Role Name Restrictions</span></a></h3><p>IoTDB specifies that the character length of a role name should have no less than 4 character length, and no spaces.</p>`,77);function x(R,f){const s=a("RouteLink"),r=a("ExternalLinkIcon");return o(),u("div",null,[c,p,t("p",null,[e("We will show you basic user privilege management operations through the following specific examples. Detailed SQL syntax and usage details can be found in "),i(s,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:n(()=>[e("SQL Documentation")]),_:1}),e("."),v,e(" At the same time, in the JAVA programming environment, you can use the "),i(s,{to:"/UserGuide/V0.13.x/API/Programming-JDBC.html"},{default:n(()=>[e("Java JDBC")]),_:1}),e(" to execute privilege management statements in a single or batch mode.")]),m,t("p",null,[e("According to the "),t("a",h,[e("sample data"),i(r)]),e(", the sample data of IoTDB might belong to different power generation groups such as ln, sgcc, etc. Different power generation groups do not want others to obtain their own database data, so we need to have data privilege isolated at the group layer.")]),E])}const I=d(g,[["render",x],["__file","Administration.html.vue"]]),T=JSON.parse('{"path":"/UserGuide/V0.13.x/Administration-Management/Administration.html","title":"Administration Management","lang":"en-US","frontmatter":{"description":"Administration Management IoTDB provides users with account privilege management operations, so as to ensure data security. We will show you basic user privilege management oper...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Administration-Management/Administration.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Administration-Management/Administration.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Administration Management"}],["meta",{"property":"og:description","content":"Administration Management IoTDB provides users with account privilege management operations, so as to ensure data security. We will show you basic user privilege management oper..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Administration Management\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Basic Concepts","slug":"basic-concepts","link":"#basic-concepts","children":[{"level":3,"title":"User","slug":"user","link":"#user","children":[]},{"level":3,"title":"Privilege","slug":"privilege","link":"#privilege","children":[]},{"level":3,"title":"Role","slug":"role","link":"#role","children":[]},{"level":3,"title":"Default User","slug":"default-user","link":"#default-user","children":[]}]},{"level":2,"title":"Privilege Management Operation Examples","slug":"privilege-management-operation-examples","link":"#privilege-management-operation-examples","children":[{"level":3,"title":"Create User","slug":"create-user","link":"#create-user","children":[]},{"level":3,"title":"Grant User Privilege","slug":"grant-user-privilege","link":"#grant-user-privilege","children":[]},{"level":3,"title":"Revoker User Privilege","slug":"revoker-user-privilege","link":"#revoker-user-privilege","children":[]},{"level":3,"title":"SQL Statements","slug":"sql-statements","link":"#sql-statements","children":[]}]},{"level":2,"title":"Other Instructions","slug":"other-instructions","link":"#other-instructions","children":[{"level":3,"title":"The Relationship among Users, Privileges and Roles","slug":"the-relationship-among-users-privileges-and-roles","link":"#the-relationship-among-users-privileges-and-roles","children":[]},{"level":3,"title":"List of Privileges Included in the System","slug":"list-of-privileges-included-in-the-system","link":"#list-of-privileges-included-in-the-system","children":[]},{"level":3,"title":"Username Restrictions","slug":"username-restrictions","link":"#username-restrictions","children":[]},{"level":3,"title":"Password Restrictions","slug":"password-restrictions","link":"#password-restrictions","children":[]},{"level":3,"title":"Role Name Restrictions","slug":"role-name-restrictions","link":"#role-name-restrictions","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.04,"words":1811},"filePathRelative":"UserGuide/V0.13.x/Administration-Management/Administration.md","localizedDate":"July 10, 2023","autoDesc":true}');export{I as comp,T as data};
