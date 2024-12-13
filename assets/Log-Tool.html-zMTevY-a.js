import{_ as t,c as o,b as i,o as a}from"./app-i6u37es5.js";const n={};function l(s,e){return a(),o("div",null,e[0]||(e[0]=[i('<h2 id="system-log" tabindex="-1"><a class="header-anchor" href="#system-log"><span>System log</span></a></h2><p>IoTDB allows users to configure IoTDB system logs (such as log output level) by modifying the log configuration file. The default location of the system log configuration file is in $IOTDB_HOME/conf folder.</p><p>The default log configuration file is named logback.xml. The user can modify the configuration of the system running log by adding or changing the xml tree node parameters. It should be noted that the configuration of the system log using the log configuration file does not take effect immediately after the modification, instead, it will take effect after restarting the system. The usage of logback.xml is just as usual.</p><p>At the same time, in order to facilitate the debugging of the system by the developers and DBAs, we provide several JMX interfaces to dynamically modify the log configuration, and configure the Log module of the system in real time without restarting the system.</p><h3 id="dynamic-system-log-configuration" tabindex="-1"><a class="header-anchor" href="#dynamic-system-log-configuration"><span>Dynamic System Log Configuration</span></a></h3><h4 id="connect-jmx" tabindex="-1"><a class="header-anchor" href="#connect-jmx"><span>Connect JMX</span></a></h4><p>Here we use JConsole to connect with JMX.</p><p>Start the JConsole, establish a new JMX connection with the IoTDB Server (you can select the local process or input the IP and PORT for remote connection, the default operation port of the IoTDB JMX service is 31999). Fig 4.1 shows the connection GUI of JConsole.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51577195-f94d7500-1ef3-11e9-999a-b4f67055d80e.png"><p>After connected, click <code>MBean</code> and find <code>ch.qos.logback.classic.default.ch.qos.logback.classic.jmx.JMXConfigurator</code>(As shown in fig 4.2).<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51577204-fe122900-1ef3-11e9-9e89-2eb1d46e24b8.png"></p><p>In the JMXConfigurator Window, there are 6 operations provided, as shown in fig 4.3. You can use these interfaces to perform operation.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51577216-09fdeb00-1ef4-11e9-9005-542ad7d9e9e0.png"><h4 id="interface-instruction" tabindex="-1"><a class="header-anchor" href="#interface-instruction"><span>Interface Instruction</span></a></h4><ul><li>reloadDefaultConfiguration</li></ul><p>This method is to reload the default logback configuration file. The user can modify the default configuration file first, and then call this method to reload the modified configuration file into the system to take effect.</p><ul><li>reloadByFileName</li></ul><p>This method loads a logback configuration file with the specified path and name, and then makes it take effect. This method accepts a parameter of type String named p1, which is the path to the configuration file that needs to be specified for loading.</p><ul><li>getLoggerEffectiveLevel</li></ul><p>This method is to obtain the current log level of the specified Logger. This method accepts a String type parameter named p1, which is the name of the specified Logger. This method returns the log level currently in effect for the specified Logger.</p><ul><li>getLoggerLevel</li></ul><p>This method is to obtain the log level of the specified Logger. This method accepts a String type parameter named p1, which is the name of the specified Logger. This method returns the log level of the specified Logger.<br> It should be noted that the difference between this method and the <code>getLoggerEffectiveLevel</code> method is that the method returns the log level that the specified Logger is set in the configuration file. If the user does not set the log level for the Logger, then return empty. According to Logger&#39;s log-level inheritance mechanism, a Logger&#39;s level is not explicitly set, it will inherit the log level settings from its nearest ancestor. At this point, calling the <code>getLoggerEffectiveLevel</code> method will return the log level in which the Logger is in effect; calling <code>getLoggerLevel</code> will return null.</p><ul><li>setLoggerLevel</li></ul><p>This method sets the log level of the specified Logger. The method accepts a parameter of type String named p1 and a parameter of type String named p2, specifying the name of the logger and the log level of the target, respectively.</p>',23)]))}const c=t(n,[["render",l],["__file","Log-Tool.html.vue"]]),h=JSON.parse('{"path":"/UserGuide/V1.0.x/Maintenance-Tools/Log-Tool.html","title":"","lang":"en-US","frontmatter":{"description":"System log IoTDB allows users to configure IoTDB system logs (such as log output level) by modifying the log configuration file. The default location of the system log configura...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Maintenance-Tools/Log-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Maintenance-Tools/Log-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"System log IoTDB allows users to configure IoTDB system logs (such as log output level) by modifying the log configuration file. The default location of the system log configura..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"System log","slug":"system-log","link":"#system-log","children":[{"level":3,"title":"Dynamic System Log Configuration","slug":"dynamic-system-log-configuration","link":"#dynamic-system-log-configuration","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.48,"words":744},"filePathRelative":"UserGuide/V1.0.x/Maintenance-Tools/Log-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,h as data};
