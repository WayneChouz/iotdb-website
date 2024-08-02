import{_ as e,o,c as t,e as a}from"./app-CVD6HEOl.js";const i={},l=a('<h2 id="系统日志" tabindex="-1"><a class="header-anchor" href="#系统日志"><span>系统日志</span></a></h2><p>IoTDB 支持用户通过修改日志配置文件的方式对 IoTDB 系统日志（如日志输出级别等）进行配置，系统日志配置文件默认位置在$IOTDB_HOME/conf 文件夹下。</p><p>默认的日志配置文件名为 logback.xml。用户可以通过增加或更改其中的 xml 树型节点参数对系统运行日志的相关配置进行修改。需要注意的是，使用日志配置文件配置系统日志并不会在修改后立即生效，而是在重启系统后生效。详细配置说明参看本文日志文件配置说明。</p><p>同时，为了方便在系统运行过程中运维人员对系统的调试，我们为系统运维人员提供了动态修改日志配置的 JMX 接口，能够在系统不重启的前提下实时对系统的 Log 模块进行配置。详细使用方法参看动态系统日志配置说明）。</p><h3 id="动态系统日志配置说明" tabindex="-1"><a class="header-anchor" href="#动态系统日志配置说明"><span>动态系统日志配置说明</span></a></h3><h4 id="连接-jmx" tabindex="-1"><a class="header-anchor" href="#连接-jmx"><span>连接 JMX</span></a></h4><p>本节以 Jconsole 为例介绍连接 JMX 并进入动态系统日志配置模块的方法。启动 Jconsole 控制页面，在新建连接处建立与 IoTDB Server 的 JMX 连接（可以选择本地进程或给定 IoTDB 的 IP 及 PORT 进行远程连接，IoTDB 的 JMX 服务默认运行端口为 31999），如下图使用远程进程连接 Localhost 下运行在 31999 端口的 IoTDB JMX 服务。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51577195-f94d7500-1ef3-11e9-999a-b4f67055d80e.png"><p>连接到 JMX 后，您可以通过 MBean 选项卡找到名为<code>ch.qos.logback.classic</code>的<code>MBean</code>，如下图所示。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51577204-fe122900-1ef3-11e9-9e89-2eb1d46e24b8.png"><p>在<code>ch.qos.logback.classic</code>的 MBean 操作（Operations）选项中，可以看到当前动态系统日志配置支持的 6 种接口，您可以通过使用相应的方法，来执行相应的操作，操作页面如图。</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/51577216-09fdeb00-1ef4-11e9-9005-542ad7d9e9e0.png"><h4 id="动态系统日志接口说明" tabindex="-1"><a class="header-anchor" href="#动态系统日志接口说明"><span>动态系统日志接口说明</span></a></h4><ul><li>reloadDefaultConfiguration 接口</li></ul><p>该方法为重新加载默认的 logback 配置文件，用户可以先对默认的配置文件进行修改，然后调用该方法将修改后的配置文件重新加载到系统中，使其生效。</p><ul><li>reloadByFileName 接口</li></ul><p>该方法为加载一个指定路径的 logback 配置文件，并使其生效。该方法接受一个名为 p1 的 String 类型的参数，该参数为需要指定加载的配置文件路径。</p><ul><li>getLoggerEffectiveLevel 接口</li></ul><p>该方法为获取指定 Logger 当前生效的日志级别。该方法接受一个名为 p1 的 String 类型的参数，该参数为指定 Logger 的名称。该方法返回指定 Logger 当前生效的日志级别。</p><ul><li>getLoggerLevel 接口</li></ul><p>该方法为获取指定 Logger 的日志级别。该方法接受一个名为 p1 的 String 类型的参数，该参数为指定 Logger 的名称。该方法返回指定 Logger 的日志级别。</p><p>需要注意的是，该方法与<code>getLoggerEffectiveLevel</code>方法的区别在于，该方法返回的是指定 Logger 在配置文件中被设定的日志级别，如果用户没有对该 Logger 进行日志级别的设定，则返回空。按照 Logback 的日志级别继承机制，如果一个 Logger 没有被显示地设定日志级别，其将会从其最近的祖先继承日志级别的设定。这时，调用<code>getLoggerEffectiveLevel</code>方法将返回该 Logger 生效的日志级别；而调用本节所述方法，将返回空。</p><ul><li>setLoggerLevel 接口</li></ul><p>该方法为设置指定 Logger 的日志级别。该方法接受一个名为 p1 的 String 类型的参数和一个名为 p2 的 String 类型的参数，分别指定 Logger 的名称和目标的日志等级。</p>',24),r=[l];function c(n,g){return o(),t("div",null,r)}const p=e(i,[["render",c],["__file","Log-Tool.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Maintenance-Tools/Log-Tool.html","title":"","lang":"zh-CN","frontmatter":{"description":"系统日志 IoTDB 支持用户通过修改日志配置文件的方式对 IoTDB 系统日志（如日志输出级别等）进行配置，系统日志配置文件默认位置在$IOTDB_HOME/conf 文件夹下。 默认的日志配置文件名为 logback.xml。用户可以通过增加或更改其中的 xml 树型节点参数对系统运行日志的相关配置进行修改。需要注意的是，使用日志配置文件配置系统日...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Log-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/Log-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"系统日志 IoTDB 支持用户通过修改日志配置文件的方式对 IoTDB 系统日志（如日志输出级别等）进行配置，系统日志配置文件默认位置在$IOTDB_HOME/conf 文件夹下。 默认的日志配置文件名为 logback.xml。用户可以通过增加或更改其中的 xml 树型节点参数对系统运行日志的相关配置进行修改。需要注意的是，使用日志配置文件配置系统日..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"系统日志","slug":"系统日志","link":"#系统日志","children":[{"level":3,"title":"动态系统日志配置说明","slug":"动态系统日志配置说明","link":"#动态系统日志配置说明","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.72,"words":1116},"filePathRelative":"zh/UserGuide/V0.13.x/Maintenance-Tools/Log-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,d as data};
