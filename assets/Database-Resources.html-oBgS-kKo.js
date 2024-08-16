import{_ as t,o as e,c as a,e as r}from"./app-CIPkfidu.js";const o={},d=r('<h1 id="database-resources" tabindex="-1"><a class="header-anchor" href="#database-resources"><span>Database Resources</span></a></h1><h2 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu"><span>CPU</span></a></h2><table style="text-align:center;"><tr><th rowspan="2">Number of timeseries (frequency&lt;=1HZ)</th><th rowspan="2">CPU</th><th colspan="3">Number of nodes</th></tr><tr><th>standalone mode</th><th>Double active</th><th>Distributed</th></tr><tr><td>Within 100000</td><td>2core-4core</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Within 300000</td><td>4core-8core</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Within 500000</td><td>8core-26core</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Within 1000000</td><td>16core-32core</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Within 2000000</td><td>32core-48core</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Within 10000000</td><td>48core</td><td>1</td><td>2</td><td>Please contact Timecho Business for consultation</td></tr><tr><td>Over 10000000</td><td colspan="4">Please contact Timecho Business for consultation</td></tr></table><h2 id="memory" tabindex="-1"><a class="header-anchor" href="#memory"><span>Memory</span></a></h2><table style="text-align:center;"><tr><th rowspan="2">Number of timeseries (frequency&lt;=1HZ)</th><th rowspan="2">Memory</th><th colspan="3">Number of nodes</th></tr><tr><th>standalone mode</th><th>Double active</th><th>Distributed</th></tr><tr><td>Within 100000</td><td>4G-8G</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Within 300000</td><td>12G-32G</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Within 500000</td><td>24G-48G</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Within 1000000</td><td>32G-96G</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Within 2000000</td><td>64G-128G</td><td>1</td><td>2</td><td>3</td></tr><tr><td>Within 10000000</td><td>128G</td><td>1</td><td>2</td><td>Please contact Timecho Business for consultation</td></tr><tr><td>Over 10000000</td><td colspan="4">Please contact Timecho Business for consultation</td></tr></table><h2 id="storage-disk" tabindex="-1"><a class="header-anchor" href="#storage-disk"><span>Storage (Disk)</span></a></h2><h3 id="storage-space" tabindex="-1"><a class="header-anchor" href="#storage-space"><span>Storage space</span></a></h3><p>Calculation formula: Number of measurement points * Sampling frequency (Hz) * Size of each data point (Byte, different data types may vary, see table below) * Storage time (seconds) * Number of copies (usually 1 copy for a single node and 2 copies for a cluster) ÷ Compression ratio (can be estimated at 5-10 times, but may be higher in actual situations)</p><table style="text-align:center;"><tr><th colspan="4">Data point size calculation</th></tr><tr><th>data type</th><th>Timestamp (Bytes)</th><th> Value (Bytes)</th><th> Total size of data points (in bytes) </th></tr><tr><td>Boolean</td><td>8</td><td>1</td><td>9</td></tr><tr><td> INT32/FLOAT</td><td>8</td><td>4</td><td>12</td></tr><tr><td>INT64/DOUBLE</td><td>8</td><td>8</td><td>16</td></tr><tr><td>TEXT</td><td>8</td><td>The average is a</td><td>8+a</td></tr></table><p>Example: 1000 devices, each with 100 measurement points, a total of 100000 sequences, INT32 type. Sampling frequency 1Hz (once per second), storage for 1 year, 3 copies.</p><ul><li>Complete calculation formula: 1000 devices * 100 measurement points * 12 bytes per data point * 86400 seconds per day * 365 days per year * 3 copies/10 compression ratio=11T</li><li>Simplified calculation formula: 1000 * 100 * 12 * 86400 * 365 * 3/10=11T</li></ul><h3 id="storage-configuration" tabindex="-1"><a class="header-anchor" href="#storage-configuration"><span>Storage Configuration</span></a></h3><p>If the number of nodes is over 10000000 or the query load is high, it is recommended to configure SSD</p><h2 id="other-instructions" tabindex="-1"><a class="header-anchor" href="#other-instructions"><span>Other instructions</span></a></h2><p>IoTDB has the ability to scale up clusters in seconds, and expanding node data does not require migration. Therefore, you do not need to worry about the limited cluster capacity estimated based on existing data. In the future, you can add new nodes to the cluster when you need to scale up.</p>',15),s=[d];function n(i,c){return e(),a("div",null,s)}const h=t(o,[["render",n],["__file","Database-Resources.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/latest/Deployment-and-Maintenance/Database-Resources.html","title":"Database Resources","lang":"en-US","frontmatter":{"description":"Database Resources CPU Memory Storage (Disk) Storage space Calculation formula: Number of measurement points * Sampling frequency (Hz) * Size of each data point (Byte, different...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Database-Resources.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Database-Resources.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Database Resources"}],["meta",{"property":"og:description","content":"Database Resources CPU Memory Storage (Disk) Storage space Calculation formula: Number of measurement points * Sampling frequency (Hz) * Size of each data point (Byte, different..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-12T09:05:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-12T09:05:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Database Resources\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-12T09:05:40.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CPU","slug":"cpu","link":"#cpu","children":[]},{"level":2,"title":"Memory","slug":"memory","link":"#memory","children":[]},{"level":2,"title":"Storage (Disk)","slug":"storage-disk","link":"#storage-disk","children":[{"level":3,"title":"Storage space","slug":"storage-space","link":"#storage-space","children":[]},{"level":3,"title":"Storage Configuration","slug":"storage-configuration","link":"#storage-configuration","children":[]}]},{"level":2,"title":"Other instructions","slug":"other-instructions","link":"#other-instructions","children":[]}],"git":{"createdTime":1718194804000,"updatedTime":1723453540000,"contributors":[{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":4}]},"readingTime":{"minutes":2.57,"words":771},"filePathRelative":"UserGuide/latest/Deployment-and-Maintenance/Database-Resources.md","localizedDate":"June 12, 2024","autoDesc":true}');export{h as comp,p as data};
