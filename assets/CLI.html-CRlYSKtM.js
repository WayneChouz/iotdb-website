import{_ as o,r as i,o as l,c as r,b as a,d as e,a as n,e as t}from"./app-vSSc7VXH.js";const p={},c=t(`<h1 id="command-line-interface-cli" tabindex="-1"><a class="header-anchor" href="#command-line-interface-cli"><span>Command Line Interface (CLI)</span></a></h1><p>IoTDB provides Cli/shell tools for users to interact with IoTDB server in command lines. This document shows how Cli/shell tool works and the meaning of its parameters.</p><blockquote><p>Note: In this document, $IOTDB_HOME represents the path of the IoTDB installation directory.</p></blockquote><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><p>If you use the source code version of IoTDB, then under the root path of IoTDB, execute:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> mvn clean package <span class="token parameter variable">-pl</span> iotdb-client/cli <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After build, the IoTDB Cli will be in the folder &quot;cli/target/iotdb-cli-{project.version}&quot;.</p><p>If you download the binary version, then the Cli can be used directly in sbin folder.</p><h2 id="running" tabindex="-1"><a class="header-anchor" href="#running"><span>Running</span></a></h2><h3 id="running-cli" tabindex="-1"><a class="header-anchor" href="#running-cli"><span>Running Cli</span></a></h3><p>After installation, there is a default user in IoTDB: <code>root</code>, and the<br> default password is <code>root</code>. Users can use this username to try IoTDB Cli/Shell tool. The cli startup script is the <code>start-cli</code> file under the $IOTDB_HOME/bin folder. When starting the script, you need to specify the IP and PORT. (Make sure the IoTDB cluster is running properly when you use Cli/Shell tool to connect to it.)</p><p>Here is an example where the cluster is started locally and the user has not changed the running port. The default rpc port is<br> 6667 <br><br> If you need to connect to the remote DataNode or changes<br> the rpc port number of the DataNode running, set the specific IP and RPC PORT at -h and -p.<br><br> You also can set your own environment variable at the front of the start script (&quot;/sbin/start-cli.sh&quot; for linux and &quot;/sbin/start-cli.bat&quot; for windows)</p><p>The Linux and MacOS system startup commands are as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The Windows system startup commands are as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> sbin<span class="token punctuation">\\</span>start-cli.bat <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After operating these commands, the cli can be started successfully. The successful status will be as follows:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code> _____       _________  ______   ______
|_   _|     |  _   _  ||_   _ \`.|_   _ \\
  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |
  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.
 _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) |
|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version &lt;version&gt;


Successfully login at 127.0.0.1:6667
IoTDB&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enter <code>quit</code> or <code>exit</code> can exit Cli.</p><h3 id="cli-parameters" tabindex="-1"><a class="header-anchor" href="#cli-parameters"><span>Cli Parameters</span></a></h3><table><thead><tr><th style="text-align:left;">Parameter name</th><th style="text-align:left;">Parameter type</th><th style="text-align:left;">Required</th><th style="text-align:left;">Description</th><th style="text-align:left;">Example</th></tr></thead><tbody><tr><td style="text-align:left;">-disableISO8601</td><td style="text-align:left;">No parameters</td><td style="text-align:left;">No</td><td style="text-align:left;">If this parameter is set, IoTDB will print the timestamp in digital form</td><td style="text-align:left;">-disableISO8601</td></tr><tr><td style="text-align:left;">-h &lt;<code>host</code>&gt;</td><td style="text-align:left;">string, no quotation marks</td><td style="text-align:left;">Yes</td><td style="text-align:left;">The IP address of the IoTDB server</td><td style="text-align:left;">-h 10.129.187.21</td></tr><tr><td style="text-align:left;">-help</td><td style="text-align:left;">No parameters</td><td style="text-align:left;">No</td><td style="text-align:left;">Print help information for IoTDB</td><td style="text-align:left;">-help</td></tr><tr><td style="text-align:left;">-p &lt;<code>rpcPort</code>&gt;</td><td style="text-align:left;">int</td><td style="text-align:left;">Yes</td><td style="text-align:left;">The rpc port number of the IoTDB server. IoTDB runs on rpc port 6667 by default</td><td style="text-align:left;">-p 6667</td></tr><tr><td style="text-align:left;">-pw &lt;<code>password</code>&gt;</td><td style="text-align:left;">string, no quotation marks</td><td style="text-align:left;">No</td><td style="text-align:left;">The password used for IoTDB to connect to the server. If no password is entered, IoTDB will ask for password in Cli command</td><td style="text-align:left;">-pw root</td></tr><tr><td style="text-align:left;">-u &lt;<code>username</code>&gt;</td><td style="text-align:left;">string, no quotation marks</td><td style="text-align:left;">Yes</td><td style="text-align:left;">User name used for IoTDB to connect the server</td><td style="text-align:left;">-u root</td></tr><tr><td style="text-align:left;">-maxPRC &lt;<code>maxPrintRowCount</code>&gt;</td><td style="text-align:left;">int</td><td style="text-align:left;">No</td><td style="text-align:left;">Set the maximum number of rows that IoTDB returns</td><td style="text-align:left;">-maxPRC 10</td></tr><tr><td style="text-align:left;">-e &lt;<code>execute</code>&gt;</td><td style="text-align:left;">string</td><td style="text-align:left;">No</td><td style="text-align:left;">manipulate IoTDB in batches without entering cli input mode</td><td style="text-align:left;">-e &quot;show databases&quot;</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;">empty</td><td style="text-align:left;">No</td><td style="text-align:left;">If the server enables <code>rpc_thrift_compression_enable=true</code>, then cli must use <code>-c</code></td><td style="text-align:left;">-c</td></tr></tbody></table><p>Following is a cli command which connects the host with IP<br> 10.129.187.21, rpc port 6667, username &quot;root&quot;, password &quot;root&quot;, and prints the timestamp in digital form. The maximum number of lines displayed on the IoTDB command line is 10.</p><p>The Linux and MacOS system startup commands are as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">10.129</span>.187.21 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-disableISO8601</span> <span class="token parameter variable">-maxPRC</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The Windows system startup commands are as follows:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> sbin<span class="token punctuation">\\</span>start-cli.bat <span class="token parameter variable">-h</span> <span class="token number">10.129</span>.187.21 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-disableISO8601</span> <span class="token parameter variable">-maxPRC</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="cli-special-command" tabindex="-1"><a class="header-anchor" href="#cli-special-command"><span>CLI Special Command</span></a></h3><p>Special commands of Cli are below.</p><table><thead><tr><th style="text-align:left;">Command</th><th style="text-align:left;">Description / Example</th></tr></thead><tbody><tr><td style="text-align:left;"><code>set time_display_type=xxx</code></td><td style="text-align:left;">eg. long, default, ISO8601, yyyy-MM-dd HH:mm:ss</td></tr><tr><td style="text-align:left;"><code>show time_display_type</code></td><td style="text-align:left;">show time display type</td></tr><tr><td style="text-align:left;"><code>set time_zone=xxx</code></td><td style="text-align:left;">eg. +08:00, Asia/Shanghai</td></tr><tr><td style="text-align:left;"><code>show time_zone</code></td><td style="text-align:left;">show cli time zone</td></tr><tr><td style="text-align:left;"><code>set fetch_size=xxx</code></td><td style="text-align:left;">set fetch size when querying data from server</td></tr><tr><td style="text-align:left;"><code>show fetch_size</code></td><td style="text-align:left;">show fetch size</td></tr><tr><td style="text-align:left;"><code>set max_display_num=xxx</code></td><td style="text-align:left;">set max lines for cli to output, -1 equals to unlimited</td></tr><tr><td style="text-align:left;"><code>help</code></td><td style="text-align:left;">Get hints for CLI special commands</td></tr><tr><td style="text-align:left;"><code>exit/quit</code></td><td style="text-align:left;">Exit CLI</td></tr></tbody></table><h3 id="note-on-using-the-cli-with-openid-connect-auth-enabled-on-server-side" tabindex="-1"><a class="header-anchor" href="#note-on-using-the-cli-with-openid-connect-auth-enabled-on-server-side"><span>Note on using the CLI with OpenID Connect Auth enabled on Server side</span></a></h3><p>Openid connect (oidc) uses keycloack as the authority authentication service of oidc service</p><h4 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>configuration</span></a></h4><p>The configuration is located in iotdb-common.properties , set the author_provider_class is org.apache.iotdb.commons.auth.authorizer.OpenIdAuthorizer Openid service is enabled, and the default value is org.apache.iotdb.db.auth.authorizer.LocalFileAuthorizer Indicates that the openid service is not enabled.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>authorizer_provider_class=org.apache.iotdb.commons.auth.authorizer.OpenIdAuthorizer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,34),d={realmsName:""},m={href:"http://ip",target:"_blank",rel:"noopener noreferrer"},u=t(`<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>openID_url=http://127.0.0.1:8080/realms/iotdb/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="keycloack-configuration" tabindex="-1"><a class="header-anchor" href="#keycloack-configuration"><span>keycloack configuration</span></a></h4><p>1、Download the keycloack file (This tutorial is version 21.1.0) and start keycloack in keycloack/bin</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span>cd bin
Shell <span class="token operator">&gt;</span>./kc.sh start-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h={href:"https://ip",target:"_blank",rel:"noopener noreferrer"},b=a("br",null,null,-1),g=a("img",{src:"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/login_keycloak.png?raw=true",alt:"avatar",loading:"lazy"},null,-1),v=t(`<p>3、Click administration console<br><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/AdministrationConsole.png?raw=true" alt="avatar" loading="lazy"></p><p>4、In the master menu on the left, click Create realm and enter Realm name to create a new realm<br><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_Realm_1.jpg?raw=true" alt="avatar" loading="lazy"></p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_Realm_2.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>5、Click the menu clients on the left to create clients</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/client.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>6、Click user on the left menu to create user</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/user.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>7、Click the newly created user ID, click the credentials navigation, enter the password and close the temporary option. The configuration of keycloud is completed</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/pwd.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>8、To create a role, click Roles on the left menu and then click the Create Role button to add a role</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role1.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>9、 Enter <code>iotdb_admin</code> in the Role Name and click the save button. Tip: <code>iotdb_admin</code> here cannot be any other name, otherwise even after successful login, you will not have permission to use iotdb&#39;s query, insert, create database, add users, roles and other functions</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role2.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>10、Click on the User menu on the left and then click on the user in the user list to add the <code>iotdb_admin</code> role we just created for that user</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role3.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>11、 Select Role Mappings, select the <code>iotdb_admin</code> role in Assign Role</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role4.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role5.jpg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>Tip: If the user role is adjusted, you need to regenerate the token and log in to iotdb again to take effect</p><p>The above steps provide a way for keycloak to log into iotdb. For more ways, please refer to keycloak configuration</p><p>If OIDC is enabled on server side then no username / passwort is needed but a valid Access Token from the OIDC Provider.<br> So as username you use the token and the password has to be empty, e.g.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token number">10.129</span>.187.21 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> <span class="token punctuation">{</span>my-access-token<span class="token punctuation">}</span> <span class="token parameter variable">-pw</span> <span class="token string">&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Among them, you need to replace {my access token} (note, including {}) with your token, that is, the value corresponding to access_token. The password is empty and needs to be confirmed again.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/iotdbpw.jpeg?raw=true" alt="avatar" tabindex="0" loading="lazy"><figcaption>avatar</figcaption></figure><p>How to get the token is dependent on your OpenID Connect setup and not covered here.<br> In the simplest case you can get this via the command line with the <code>passwort-grant</code>.<br> For example, if you use keycloack as OIDC and you have a realm with a client <code>iotdb</code> defined as public you could use<br> the following <code>curl</code> command to fetch a token (replace all <code>{}</code> with appropriate values).</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST <span class="token string">&quot;https://{your-keycloack-server}/realms/{your-realm}/protocol/openid-connect/token&quot;</span> <span class="token punctuation">\\</span>                                                                                                                      
 <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/x-www-form-urlencoded&quot;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> <span class="token string">&quot;username={username}&quot;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> <span class="token string">&quot;password={password}&quot;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> <span class="token string">&#39;grant_type=password&#39;</span> <span class="token punctuation">\\</span>
 <span class="token parameter variable">-d</span> <span class="token string">&quot;client_id=iotdb-client&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The response looks something like</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;access_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMS1XbTBvelE1TzBtUUg4LVNKYXAyWmNONE1tdWNXd25RV0tZeFpKNG93In0.eyJleHAiOjE1OTAzOTgwNzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNjA0ZmYxMDctN2NiNy00NTRmLWIwYmQtY2M2ZDQwMjFiNGU4IiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzJlNDcxLWM3NzItNGIzMy04ZGE2LTZmZThhY2RhMDA3MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsibG9jYWxob3N0OjgwODAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJpb3RkYl9hZG1pbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.nwbrJkWdCNjzFrTDwKNuV5h9dDMg5ytRKGOXmFIajpfsbOutJytjWTCB2WpA8E1YI3KM6gU6Jx7cd7u0oPo5syHhfCz119n_wBiDnyTZkFOAPsx0M2z20kvBLN9k36_VfuCMFUeddJjO31MeLTmxB0UKg2VkxdczmzMH3pnalhxqpnWWk3GnrRrhAf2sZog0foH4Ae3Ks0lYtYzaWK_Yo7E4Px42-gJpohy3JevOC44aJ4auzJR1RBj9LUbgcRinkBy0JLi6XXiYznSC2V485CSBHW3sseXn7pSXQADhnmGQrLfFGO5ZljmPO18eFJaimdjvgSChsrlSEmTDDsoo5Q&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;expires_in&quot;</span><span class="token operator">:</span><span class="token number">300</span><span class="token punctuation">,</span><span class="token property">&quot;refresh_expires_in&quot;</span><span class="token operator">:</span><span class="token number">1800</span><span class="token punctuation">,</span><span class="token property">&quot;refresh_token&quot;</span><span class="token operator">:</span><span class="token string">&quot;eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhMzZlMGU0NC02MWNmLTQ5NmMtOGRlZi03NTkwNjQ5MzQzMjEifQ.eyJleHAiOjE1OTAzOTk1NzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNmMxNTBiY2EtYmE5NC00NTgxLWEwODEtYjI2YzhhMmI5YmZmIiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwic3ViIjoiYmEzMmU0NzEtYzc3Mi00YjMzLThkYTYtNmZlOGFjZGEwMDczIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSJ9.ayNpXdNX28qahodX1zowrMGiUCw2AodlHBQFqr8Ui7c&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;token_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;bearer&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;not-before-policy&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;session_state&quot;</span><span class="token operator">:</span><span class="token string">&quot;060d2862-14ed-42fe-baf7-8d1f784657f1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;scope&quot;</span><span class="token operator">:</span><span class="token string">&quot;email profile&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The interesting part here is the access token with the key <code>access_token</code>.<br> This has to be passed as username (with parameter <code>-u</code>) and empty password to the CLI.</p><h3 id="batch-operation-of-cli" tabindex="-1"><a class="header-anchor" href="#batch-operation-of-cli"><span>Batch Operation of Cli</span></a></h3><p>-e parameter is designed for the Cli/shell tool in the situation where you would like to manipulate IoTDB in batches through scripts. By using the -e parameter, you can operate IoTDB without entering the cli&#39;s input mode.</p><p>In order to avoid confusion between statements and other parameters, the current version only supports the -e parameter as the last parameter.</p><p>The usage of -e parameter for Cli/shell is as follows:</p><p>The Linux and MacOS system commands:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token punctuation">{</span>host<span class="token punctuation">}</span> <span class="token parameter variable">-p</span> <span class="token punctuation">{</span>rpcPort<span class="token punctuation">}</span> <span class="token parameter variable">-u</span> <span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token parameter variable">-pw</span> <span class="token punctuation">{</span>password<span class="token punctuation">}</span> <span class="token parameter variable">-e</span> <span class="token punctuation">{</span>sql <span class="token keyword">for</span> iotdb<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The Windows system commands:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>Shell <span class="token operator">&gt;</span> sbin<span class="token punctuation">\\</span>start-cli.bat <span class="token parameter variable">-h</span> <span class="token punctuation">{</span>host<span class="token punctuation">}</span> <span class="token parameter variable">-p</span> <span class="token punctuation">{</span>rpcPort<span class="token punctuation">}</span> <span class="token parameter variable">-u</span> <span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token parameter variable">-pw</span> <span class="token punctuation">{</span>password<span class="token punctuation">}</span> <span class="token parameter variable">-e</span> <span class="token punctuation">{</span>sql <span class="token keyword">for</span> iotdb<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In the Windows environment, the SQL statement of the -e parameter needs to use <code>\`\`</code> to replace <code>&quot; &quot;</code></p><p>In order to better explain the use of -e parameter, take following as an example(On linux system).</p><p>Suppose you want to create a database root.demo to a newly launched IoTDB, create a timeseries root.demo.s1 and insert three data points into it. With -e parameter, you could write a shell like this:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># !/bin/bash</span>

<span class="token assign-left variable">host</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1
<span class="token assign-left variable">rpcPort</span><span class="token operator">=</span><span class="token number">6667</span>
<span class="token assign-left variable">user</span><span class="token operator">=</span>root
<span class="token assign-left variable">pass</span><span class="token operator">=</span>root

<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;create database root.demo&quot;</span>
<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;create timeseries root.demo.s1 WITH DATATYPE=INT32, ENCODING=RLE&quot;</span>
<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;insert into root.demo(timestamp,s1) values(1,10)&quot;</span>
<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;insert into root.demo(timestamp,s1) values(2,11)&quot;</span>
<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;insert into root.demo(timestamp,s1) values(3,12)&quot;</span>
<span class="token function">bash</span> ./sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token variable">\${host}</span> <span class="token parameter variable">-p</span> <span class="token variable">\${rpcPort}</span> <span class="token parameter variable">-u</span> <span class="token variable">\${user}</span> <span class="token parameter variable">-pw</span> <span class="token variable">\${pass}</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;select s1 from root.demo&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The results are shown in the figure, which are consistent with the Cli and jdbc operations.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code> Shell <span class="token operator">&gt;</span> <span class="token function">bash</span> ./shell.sh 
+-----------------------------+------------+
<span class="token operator">|</span>                         Time<span class="token operator">|</span>root.demo.s1<span class="token operator">|</span>
+-----------------------------+------------+
<span class="token operator">|</span><span class="token number">1970</span>-01-01T08:00:00.001+08:00<span class="token operator">|</span>          <span class="token number">10</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">1970</span>-01-01T08:00:00.002+08:00<span class="token operator">|</span>          <span class="token number">11</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">1970</span>-01-01T08:00:00.003+08:00<span class="token operator">|</span>          <span class="token number">12</span><span class="token operator">|</span>
+-----------------------------+------------+
Total line number <span class="token operator">=</span> <span class="token number">3</span>
It costs <span class="token number">0</span>.267s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It should be noted that the use of the -e parameter in shell scripts requires attention to the escaping of special characters.</p>`,44);function k(f,I){const s=i("ExternalLinkIcon");return l(),r("div",null,[c,a("p",d,[e("If the openid service is turned on, openid_URL is required,openID_url value is "),a("a",m,[e("http://ip"),n(s)]),e(":port/realms/")]),u,a("p",null,[e("2、use url("),a("a",h,[e("https://ip"),n(s)]),e(":port) login keycloack, the first login needs to create a user"),b,g]),v])}const w=o(p,[["render",k],["__file","CLI.html.vue"]]),x=JSON.parse('{"path":"/UserGuide/latest/Tools-System/CLI.html","title":"Command Line Interface (CLI)","lang":"en-US","frontmatter":{"description":"Command Line Interface (CLI) IoTDB provides Cli/shell tools for users to interact with IoTDB server in command lines. This document shows how Cli/shell tool works and the meanin...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Tools-System/CLI.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Tools-System/CLI.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Command Line Interface (CLI)"}],["meta",{"property":"og:description","content":"Command Line Interface (CLI) IoTDB provides Cli/shell tools for users to interact with IoTDB server in command lines. This document shows how Cli/shell tool works and the meanin..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/login_keycloak.png?raw=true"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-17T06:56:46.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-17T06:56:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Command Line Interface (CLI)\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/login_keycloak.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/AdministrationConsole.png?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_Realm_1.jpg?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_Realm_2.jpg?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/client.jpg?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/user.jpg?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/pwd.jpg?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role1.jpg?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role2.jpg?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role3.jpg?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role4.jpg?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/add_role5.jpg?raw=true\\",\\"https://alioss.timecho.com/docs/img/UserGuide/CLI/Command-Line-Interface/iotdbpw.jpeg?raw=true\\"],\\"dateModified\\":\\"2024-01-17T06:56:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Running","slug":"running","link":"#running","children":[{"level":3,"title":"Running Cli","slug":"running-cli","link":"#running-cli","children":[]},{"level":3,"title":"Cli Parameters","slug":"cli-parameters","link":"#cli-parameters","children":[]},{"level":3,"title":"CLI Special Command","slug":"cli-special-command","link":"#cli-special-command","children":[]},{"level":3,"title":"Note on using the CLI with OpenID Connect Auth enabled on Server side","slug":"note-on-using-the-cli-with-openid-connect-auth-enabled-on-server-side","link":"#note-on-using-the-cli-with-openid-connect-auth-enabled-on-server-side","children":[]},{"level":3,"title":"Batch Operation of Cli","slug":"batch-operation-of-cli","link":"#batch-operation-of-cli","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1705474606000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":6.31,"words":1893},"filePathRelative":"UserGuide/latest/Tools-System/CLI.md","localizedDate":"July 10, 2023","autoDesc":true}');export{w as comp,x as data};
