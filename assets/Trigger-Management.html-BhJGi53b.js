import{_ as a,c as s,b as t,o as n}from"./app-Cy-L1ril.js";const r={};function i(l,e){return n(),s("div",null,e[0]||(e[0]=[t(`<h1 id="triggers-management" tabindex="-1"><a class="header-anchor" href="#triggers-management"><span>Triggers Management</span></a></h1><p>You can create and drop a trigger through an SQL statement, and you can also query all registered triggers through an SQL statement.</p><p><strong>We recommend that you stop insertion while creating triggers.</strong></p><h2 id="create-trigger" tabindex="-1"><a class="header-anchor" href="#create-trigger"><span>Create Trigger</span></a></h2><p>Triggers can be registered on arbitrary path patterns. The time series registered with the trigger will be listened to by the trigger. When there is data change on the series, the corresponding fire method in the trigger will be called.</p><p>Registering a trigger can be done as follows:</p><ol><li>Implement a Trigger class as described in the How to implement a Trigger chapter, assuming the class&#39;s full class name is <code>org.apache.iotdb.trigger.ClusterAlertingExample</code></li><li>Package the project into a JAR package.</li><li>Register the trigger with an SQL statement. During the creation process, the <code>validate</code> and <code>onCreate</code> interfaces of the trigger will only be called once. For details, please refer to the chapter of How to implement a Trigger.</li></ol><p>The complete SQL syntax is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment">// Create Trigger</span></span>
<span class="line">createTrigger</span>
<span class="line">    : <span class="token keyword">CREATE</span> triggerType <span class="token keyword">TRIGGER</span> triggerName<span class="token operator">=</span>identifier triggerEventClause <span class="token keyword">ON</span> pathPattern <span class="token keyword">AS</span> className<span class="token operator">=</span>STRING_LITERAL uriClause? triggerAttributeClause?</span>
<span class="line">    <span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">triggerType</span>
<span class="line">    : STATELESS <span class="token operator">|</span> STATEFUL</span>
<span class="line">    <span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">triggerEventClause</span>
<span class="line">    : <span class="token punctuation">(</span>BEFORE <span class="token operator">|</span> <span class="token keyword">AFTER</span><span class="token punctuation">)</span> <span class="token keyword">INSERT</span></span>
<span class="line">    <span class="token punctuation">;</span></span>
<span class="line">        </span>
<span class="line">uriClause</span>
<span class="line">    : <span class="token keyword">USING</span> URI uri</span>
<span class="line">    <span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">uri</span>
<span class="line">    : STRING_LITERAL</span>
<span class="line">    <span class="token punctuation">;</span></span>
<span class="line">    </span>
<span class="line">triggerAttributeClause</span>
<span class="line">    : <span class="token keyword">WITH</span> LR_BRACKET triggerAttribute <span class="token punctuation">(</span>COMMA triggerAttribute<span class="token punctuation">)</span><span class="token operator">*</span> RR_BRACKET</span>
<span class="line">    <span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">triggerAttribute</span>
<span class="line">    : <span class="token keyword">key</span><span class="token operator">=</span>attributeKey operator_eq <span class="token keyword">value</span><span class="token operator">=</span>attributeValue</span>
<span class="line">    <span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Below is the explanation for the SQL syntax:</p><ul><li>triggerName: The trigger ID, which is globally unique and used to distinguish different triggers, is case-sensitive.</li><li>triggerType: Trigger types are divided into two categories, STATELESS and STATEFUL.</li><li>triggerEventClause: when the trigger fires, BEFORE INSERT and AFTER INSERT are supported now.</li><li>pathPattern：The path pattern the trigger listens on, can contain wildcards * and **.</li><li>className：The class name of the Trigger class.</li><li>jarLocation: Optional. When this option is not specified, by default, we consider that the DBA has placed the JAR package required to create the trigger in the trigger_root_dir directory (configuration item, default is IOTDB_HOME/ext/trigger) of each DataNode node. When this option is specified, we will download and distribute the file resource corresponding to the URI to the trigger_root_dir/install directory of each DataNode.</li><li>triggerAttributeClause: It is used to specify the parameters that need to be set when the trigger instance is created. This part is optional in the SQL syntax.</li></ul><p>Here is an example SQL statement to help you understand:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> STATELESS <span class="token keyword">TRIGGER</span> triggerTest</span>
<span class="line">BEFORE <span class="token keyword">INSERT</span></span>
<span class="line"><span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span></span>
<span class="line"><span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.trigger.ClusterAlertingExample&#39;</span></span>
<span class="line"><span class="token keyword">USING</span> URI <span class="token string">&#39;/jar/ClusterAlertingExample.jar&#39;</span></span>
<span class="line"><span class="token keyword">WITH</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">&quot;name&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;trigger&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;limit&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;100&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above SQL statement creates a trigger named triggerTest:</p><ul><li>The trigger is stateless.</li><li>Fires before insertion.</li><li>Listens on path pattern <a href="http://root.sg" target="_blank" rel="noopener noreferrer">root.sg</a>.**</li><li>The implemented trigger class is named <code>org.apache.iotdb.trigger.ClusterAlertingExample</code></li><li>The JAR package URI is <a href="http://jar/ClusterAlertingExample.jar" target="_blank" rel="noopener noreferrer">http://jar/ClusterAlertingExample.jar</a></li><li>When creating the trigger instance, two parameters, name and limit, are passed in.</li></ul><h2 id="drop-trigger" tabindex="-1"><a class="header-anchor" href="#drop-trigger"><span>Drop Trigger</span></a></h2><p>The trigger can be dropped by specifying the trigger ID. During the process of dropping the trigger, the <code>onDrop</code> interface of the trigger will be called only once.</p><p>The SQL syntax is:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token comment">// Drop Trigger</span></span>
<span class="line">dropTrigger</span>
<span class="line">  : <span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> triggerName<span class="token operator">=</span>identifier</span>
<span class="line"><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here is an example statement:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DROP</span> <span class="token keyword">TRIGGER</span> triggerTest1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The above statement will drop the trigger with ID triggerTest1.</p><h2 id="show-trigger" tabindex="-1"><a class="header-anchor" href="#show-trigger"><span>Show Trigger</span></a></h2><p>You can query information about triggers that exist in the cluster through an SQL statement.</p><p>The SQL syntax is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> TRIGGERS</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The result set format of this statement is as follows:</p><table><thead><tr><th>TriggerName</th><th>Event</th><th>Type</th><th>State</th><th>PathPattern</th><th>ClassName</th><th>NodeId</th></tr></thead><tbody><tr><td>triggerTest1</td><td>BEFORE_INSERT / AFTER_INSERT</td><td>STATELESS / STATEFUL</td><td>INACTIVE / ACTIVE / DROPPING / TRANSFFERING</td><td>root.**</td><td>org.apache.iotdb.trigger.TriggerExample</td><td>ALL(STATELESS) / DATA_NODE_ID(STATEFUL)</td></tr></tbody></table><h2 id="trigger-state" tabindex="-1"><a class="header-anchor" href="#trigger-state"><span>Trigger State</span></a></h2><p>During the process of creating and dropping triggers in the cluster, we maintain the states of the triggers. The following is a description of these states:</p><table><thead><tr><th>State</th><th>Description</th><th>Is it recommended to insert data?</th></tr></thead><tbody><tr><td>INACTIVE</td><td>The intermediate state of executing <code>CREATE TRIGGER</code>, the cluster has just recorded the trigger information on the ConfigNode, and the trigger has not been activated on any DataNode.</td><td>NO</td></tr><tr><td>ACTIVE</td><td>Status after successful execution of <code>CREATE TRIGGE</code>, the trigger is available on all DataNodes in the cluster.</td><td>YES</td></tr><tr><td>DROPPING</td><td>Intermediate state of executing <code>DROP TRIGGER</code>, the cluster is in the process of dropping the trigger.</td><td>NO</td></tr><tr><td>TRANSFERRING</td><td>The cluster is migrating the location of this trigger instance.</td><td>NO</td></tr></tbody></table>`,31)]))}const p=a(r,[["render",i],["__file","Trigger-Management.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.0.x/Trigger/Trigger-Management.html","title":"Triggers Management","lang":"en-US","frontmatter":{"description":"Triggers Management You can create and drop a trigger through an SQL statement, and you can also query all registered triggers through an SQL statement. We recommend that you st...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Trigger/Trigger-Management.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Trigger/Trigger-Management.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Triggers Management"}],["meta",{"property":"og:description","content":"Triggers Management You can create and drop a trigger through an SQL statement, and you can also query all registered triggers through an SQL statement. We recommend that you st..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Triggers Management\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Create Trigger","slug":"create-trigger","link":"#create-trigger","children":[]},{"level":2,"title":"Drop Trigger","slug":"drop-trigger","link":"#drop-trigger","children":[]},{"level":2,"title":"Show Trigger","slug":"show-trigger","link":"#show-trigger","children":[]},{"level":2,"title":"Trigger State","slug":"trigger-state","link":"#trigger-state","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.65,"words":796},"filePathRelative":"UserGuide/V1.0.x/Trigger/Trigger-Management.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,d as data};
