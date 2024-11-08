import{_ as n,c as s,b as a,o as i}from"./app-ED5DzO24.js";const t={};function l(o,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="telegraf" tabindex="-1"><a class="header-anchor" href="#telegraf"><span>Telegraf</span></a></h1><p>Telegraf is an open-source agent that facilitates the collection, processing, and transmission of metric data. Developed by InfluxData.<br> Telegraf includes the following features:</p><ul><li>Plugin Architecture: Telegraf&#39;s strength lies in its extensive plugin ecosystem. It supports a wide range of input, output, and processor plugins, allowing seamless integration with various data sources and destinations.</li><li>Data Collection: Telegraf excels in collecting metrics from diverse sources, such as system metrics, logs, databases, and more. Its versatility makes it suitable for monitoring applications, infrastructure, and IoT devices.</li><li>Output Destinations: Once collected, data can be sent to various output destinations, including popular databases like InfluxDB. This flexibility makes Telegraf adaptable to different monitoring and analytics setups.</li><li>Ease of Configuration: Telegraf&#39;s configuration is done using TOML files. This simplicity allows users to define inputs, outputs, and processors with ease, making customization straightforward.</li><li>Community and Support: Being open-source, Telegraf benefits from an active community. Users can contribute plugins, report issues, and seek assistance through forums and documentation.</li></ul><h1 id="telegraf-iotdb-output-plugin" tabindex="-1"><a class="header-anchor" href="#telegraf-iotdb-output-plugin"><span>Telegraf IoTDB Output Plugin</span></a></h1><p>This output plugin saves Telegraf metrics to an Apache IoTDB backend, supporting session connection and data insertion.</p><h2 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span>Precautions</span></a></h2><ol><li>Before using this plugin, please configure the IP address, port number, username, password and other information of the database server, as well as some data type conversion, time unit and other configurations.</li><li>The path should follow the rule in Chapter &#39;Syntax Rule&#39;</li><li>See <a href="https://github.com/influxdata/telegraf/tree/master/plugins/outputs/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/influxdata/telegraf/tree/master/plugins/outputs/iotdb</a> for how to configure this plugin.</li></ol><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Here is an example that demonstrates how to collect cpu data from Telegraf into IoTDB.</p><ol><li>generate the configuration file by telegraf</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">telegraf --sample-config --input-filter cpu --output-filter iotdb &gt; cpu_iotdb.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>modify the default cpu inputs plugin configuration</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Read metrics about cpu usage</span>
<span class="line">[[inputs.cpu]]</span>
<span class="line">  ## Whether to report per-cpu stats or not</span>
<span class="line">  percpu = true</span>
<span class="line">  ## Whether to report total system cpu stats or not</span>
<span class="line">  totalcpu = true</span>
<span class="line">  ## If true, collect raw CPU time metrics</span>
<span class="line">  collect_cpu_time = false</span>
<span class="line">  ## If true, compute and report the sum of all non-idle CPU states</span>
<span class="line">  report_active = false</span>
<span class="line">  ## If true and the info is available then add core_id and physical_id tags</span>
<span class="line">  core_tags = false</span>
<span class="line">  name_override = &quot;root.demo.telgraf.cpu&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>modify the IoTDB outputs plugin configuration</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Save metrics to an IoTDB Database</span>
<span class="line">[[outputs.iotdb]]</span>
<span class="line">  ## Configuration of IoTDB server connection</span>
<span class="line">  host = &quot;127.0.0.1&quot;</span>
<span class="line">  # port = &quot;6667&quot;</span>
<span class="line"></span>
<span class="line">  ## Configuration of authentication</span>
<span class="line">  # user = &quot;root&quot;</span>
<span class="line">  # password = &quot;root&quot;</span>
<span class="line"></span>
<span class="line">  ## Timeout to open a new session.</span>
<span class="line">  ## A value of zero means no timeout.</span>
<span class="line">  # timeout = &quot;5s&quot;</span>
<span class="line"></span>
<span class="line">  ## Configuration of type conversion for 64-bit unsigned int</span>
<span class="line">  ## IoTDB currently DOES NOT support unsigned integers (version 13.x).</span>
<span class="line">  ## 32-bit unsigned integers are safely converted into 64-bit signed integers by the plugin,</span>
<span class="line">  ## however, this is not true for 64-bit values in general as overflows may occur.</span>
<span class="line">  ## The following setting allows to specify the handling of 64-bit unsigned integers.</span>
<span class="line">  ## Available values are:</span>
<span class="line">  ##   - &quot;int64&quot;       --  convert to 64-bit signed integers and accept overflows</span>
<span class="line">  ##   - &quot;int64_clip&quot;  --  convert to 64-bit signed integers and clip the values on overflow to 9,223,372,036,854,775,807</span>
<span class="line">  ##   - &quot;text&quot;        --  convert to the string representation of the value</span>
<span class="line">  # uint64_conversion = &quot;int64_clip&quot;</span>
<span class="line"></span>
<span class="line">  ## Configuration of TimeStamp</span>
<span class="line">  ## TimeStamp is always saved in 64bits int. timestamp_precision specifies the unit of timestamp.</span>
<span class="line">  ## Available value:</span>
<span class="line">  ## &quot;second&quot;, &quot;millisecond&quot;, &quot;microsecond&quot;, &quot;nanosecond&quot;(default)</span>
<span class="line">  timestamp_precision = &quot;millisecond&quot;</span>
<span class="line"></span>
<span class="line">  ## Handling of tags</span>
<span class="line">  ## Tags are not fully supported by IoTDB.</span>
<span class="line">  ## A guide with suggestions on how to handle tags can be found here:</span>
<span class="line">  ##     https://iotdb.apache.org/UserGuide/Master/API/InfluxDB-Protocol.html</span>
<span class="line">  ##</span>
<span class="line">  ## Available values are:</span>
<span class="line">  ##   - &quot;fields&quot;     --  convert tags to fields in the measurement</span>
<span class="line">  ##   - &quot;device_id&quot;  --  attach tags to the device ID</span>
<span class="line">  ##</span>
<span class="line">  ## For Example, a metric named &quot;root.sg.device&quot; with the tags \`tag1: &quot;private&quot;\`  and  \`tag2: &quot;working&quot;\` and</span>
<span class="line">  ##  fields \`s1: 100\`  and \`s2: &quot;hello&quot;\` will result in the following representations in IoTDB</span>
<span class="line">  ##   - &quot;fields&quot;     --  root.sg.device, s1=100, s2=&quot;hello&quot;, tag1=&quot;private&quot;, tag2=&quot;working&quot;</span>
<span class="line">  ##   - &quot;device_id&quot;  --  root.sg.device.private.working, s1=100, s2=&quot;hello&quot;</span>
<span class="line">  convert_tags_to = &quot;fields&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>run telegraf with this configuration file, after some time, the data can be found in IoTDB</li></ol>`,16)]))}const c=n(t,[["render",l],["__file","Telegraf-IoTDB.html.vue"]]),u=JSON.parse('{"path":"/UserGuide/latest/Ecosystem-Integration/Telegraf-IoTDB.html","title":"Telegraf","lang":"en-US","frontmatter":{"description":"Telegraf Telegraf is an open-source agent that facilitates the collection, processing, and transmission of metric data. Developed by InfluxData. Telegraf includes the following ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Ecosystem-Integration/Telegraf-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Ecosystem-Integration/Telegraf-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Telegraf"}],["meta",{"property":"og:description","content":"Telegraf Telegraf is an open-source agent that facilitates the collection, processing, and transmission of metric data. Developed by InfluxData. Telegraf includes the following ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-12T04:20:54.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-12T04:20:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Telegraf\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-12T04:20:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Precautions","slug":"precautions","link":"#precautions","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"git":{"createdTime":1701948574000,"updatedTime":1723436454000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.5,"words":749},"filePathRelative":"UserGuide/latest/Ecosystem-Integration/Telegraf-IoTDB.md","localizedDate":"December 7, 2023","autoDesc":true}');export{c as comp,u as data};
