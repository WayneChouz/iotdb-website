import{_ as e,o as t,c as a,e as i}from"./app-CIPkfidu.js";const r={},o=i(`<h1 id="tiered-storage" tabindex="-1"><a class="header-anchor" href="#tiered-storage"><span>Tiered Storage</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>The Tiered storage functionality allows users to define multiple layers of storage, spanning across multiple types of storage media (Memory mapped directory, SSD, rotational hard discs or cloud storage). While memory and cloud storage is usually singular, the local file system storages can consist of multiple directories joined together into one tier. Meanwhile, users can classify data based on its hot or cold nature and store data of different categories in specified &quot;tier&quot;. Currently, IoTDB supports the classification of hot and cold data through TTL (Time to live / age) of data. When the data in one tier does not meet the TTL rules defined in the current tier, the data will be automatically migrated to the next tier.</p><h2 id="parameter-definition" tabindex="-1"><a class="header-anchor" href="#parameter-definition"><span>Parameter Definition</span></a></h2><p>To enable tiered storage in IoTDB, you need to configure the following aspects:</p><ol><li>configure the data catalogue and divide the data catalogue into different tiers</li><li>configure the TTL of the data managed in each tier to distinguish between hot and cold data categories managed in different tiers.</li><li>configure the minimum remaining storage space ratio for each tier so that when the storage space of the tier triggers the threshold, the data of the tier will be automatically migrated to the next tier (optional).</li></ol><p>The specific parameter definitions and their descriptions are as follows.</p><table><thead><tr><th>Configuration</th><th>Default</th><th>Description</th><th>Constraint</th></tr></thead><tbody><tr><td>dn_data_dirs</td><td>None</td><td>specify different storage directories and divide the storage directories into tiers</td><td>Each level of storage uses a semicolon to separate, and commas to separate within a single level; cloud (OBJECT_STORAGE) configuration can only be used as the last level of storage and the first level can&#39;t be used as cloud storage; a cloud object at most; the remote storage directory is denoted by OBJECT_STORAGE</td></tr><tr><td>default_ttl_in_ms</td><td>None</td><td>Define the maximum age of data for which each tier is responsible</td><td>Each level of storage is separated by a semicolon; the number of levels should match the number of levels defined by dn_data_dirs；&quot;-1&quot; means &quot;unlimited&quot;.</td></tr><tr><td>dn_default_space_move_thresholds</td><td>0.15</td><td>Define the minimum remaining space ratio for each tier data catalogue; when the remaining space is less than this ratio, the data will be automatically migrated to the next tier; when the remaining storage space of the last tier falls below this threshold, the system will be set to READ_ONLY</td><td>Each level of storage is separated by a semicolon; the number of levels should match the number of levels defined by dn_data_dirs</td></tr><tr><td>object_storage_type</td><td>AWS_S3</td><td>Cloud Storage Type</td><td>IoTDB currently only supports AWS S3 as a remote storage type, and this parameter can&#39;t be modified</td></tr><tr><td>object_storage_bucket</td><td>None</td><td>Name of cloud storage bucket</td><td>Bucket definition in AWS S3; no need to configure if remote storage is not used</td></tr><tr><td>object_storage_endpoiont</td><td></td><td>endpoint of cloud storage</td><td>endpoint of AWS S3；If remote storage is not used, no configuration required</td></tr><tr><td>object_storage_access_key</td><td></td><td>Authentication information stored in the cloud: key</td><td>AWS S3 credential key；If remote storage is not used, no configuration required</td></tr><tr><td>object_storage_access_secret</td><td></td><td>Authentication information stored in the cloud: secret</td><td>AWS S3 credential secret；If remote storage is not used, no configuration required</td></tr><tr><td>remote_tsfile_cache_dirs</td><td>data/datanode/data/cache</td><td>Cache directory stored locally in the cloud</td><td>If remote storage is not used, no configuration required</td></tr><tr><td>remote_tsfile_cache_page_size_in_kb</td><td>20480</td><td>Block size of locally cached files stored in the cloud</td><td>If remote storage is not used, no configuration required</td></tr><tr><td>remote_tsfile_cache_max_disk_usage_in_mb</td><td>51200</td><td>Maximum Disk Occupancy Size for Cloud Storage Local Cache</td><td>If remote storage is not used, no configuration required</td></tr></tbody></table><h2 id="local-tiered-storag-configuration-example" tabindex="-1"><a class="header-anchor" href="#local-tiered-storag-configuration-example"><span>local tiered storag configuration example</span></a></h2><p>The following is an example of a local two-level storage configuration.</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>//Required configuration items
dn_data_dirs=/data1/data;/data2/data,/data3/data;
default_ttl_in_ms=86400000;-1
dn_default_space_move_thresholds=0.2;0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, two levels of storage are configured, specifically:</p><table><thead><tr><th><strong>tier</strong></th><th><strong>data path</strong></th><th><strong>data range</strong></th><th><strong>threshold for minimum remaining disk space</strong></th></tr></thead><tbody><tr><td>tier 1</td><td>path 1：/data1/data</td><td>data for last 1 day</td><td>20%</td></tr><tr><td>tier 2</td><td>path 2：/data2/data path 2：/data3/data</td><td>data from 1 day ago</td><td>10%</td></tr></tbody></table><h2 id="remote-tiered-storag-configuration-example" tabindex="-1"><a class="header-anchor" href="#remote-tiered-storag-configuration-example"><span>remote tiered storag configuration example</span></a></h2><p>The following takes three-level storage as an example:</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript" data-title="JavaScript"><pre class="language-JavaScript"><code>//Required configuration items
dn_data_dirs=/data1/data;/data2/data,/data3/data;OBJECT_STORAGE
default_ttl_in_ms=86400000;864000000;-1
dn_default_space_move_thresholds=0.2;0.15;0.1
object_storage_name=AWS_S3
object_storage_bucket=iotdb
object_storage_endpoiont=&lt;your_endpoint&gt;
object_storage_access_key=&lt;your_access_key&gt;
object_storage_access_secret=&lt;your_access_secret&gt;

// Optional configuration items
remote_tsfile_cache_dirs=data/datanode/data/cache
remote_tsfile_cache_page_size_in_kb=20971520
remote_tsfile_cache_max_disk_usage_in_mb=53687091200
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this example, a total of three levels of storage are configured, specifically:</p><table><thead><tr><th><strong>tier</strong></th><th><strong>data path</strong></th><th><strong>data range</strong></th><th><strong>threshold for minimum remaining disk space</strong></th></tr></thead><tbody><tr><td>tier1</td><td>path 1：/data1/data</td><td>data for last 1 day</td><td>20%</td></tr><tr><td>tier2</td><td>path 1：/data2/data path 2：/data3/data</td><td>data from past 1 day to past 10 days</td><td>15%</td></tr><tr><td>tier3</td><td>Remote AWS S3 Storage</td><td>data from 1 day ago</td><td>10%</td></tr></tbody></table>`,18),d=[o];function n(s,l){return t(),a("div",null,d)}const h=e(r,[["render",n],["__file","Tiered-Storage_timecho.html.vue"]]),m=JSON.parse('{"path":"/UserGuide/latest/User-Manual/Tiered-Storage_timecho.html","title":"Tiered Storage","lang":"en-US","frontmatter":{"description":"Tiered Storage Overview The Tiered storage functionality allows users to define multiple layers of storage, spanning across multiple types of storage media (Memory mapped direct...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Tiered-Storage_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Tiered-Storage_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Tiered Storage"}],["meta",{"property":"og:description","content":"Tiered Storage Overview The Tiered storage functionality allows users to define multiple layers of storage, spanning across multiple types of storage media (Memory mapped direct..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-18T07:32:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-18T07:32:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Tiered Storage\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-18T07:32:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Parameter Definition","slug":"parameter-definition","link":"#parameter-definition","children":[]},{"level":2,"title":"local tiered storag configuration example","slug":"local-tiered-storag-configuration-example","link":"#local-tiered-storag-configuration-example","children":[]},{"level":2,"title":"remote tiered storag configuration example","slug":"remote-tiered-storag-configuration-example","link":"#remote-tiered-storag-configuration-example","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1705563153000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.92,"words":876},"filePathRelative":"UserGuide/latest/User-Manual/Tiered-Storage_timecho.md","localizedDate":"July 10, 2023","autoDesc":true}');export{h as comp,m as data};
