import{_ as s,c as a,b as p,o as t}from"./app-i6u37es5.js";const e={};function c(o,n){return t(),a("div",null,n[0]||(n[0]=[p(`<h1 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka"><span>Kafka</span></a></h1><p><a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">Apache Kafka</a> 是一个开源的分布式事件流平台，被数千家公司用于高性能数据管道、流分析、数据集成和关键任务应用。</p><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><h3 id="kafka-生产者生产数据-java-代码示例" tabindex="-1"><a class="header-anchor" href="#kafka-生产者生产数据-java-代码示例"><span>kafka 生产者生产数据 Java 代码示例</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line">    <span class="token class-name">Properties</span> props <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;bootstrap.servers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:9092&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;key.serializer&quot;</span><span class="token punctuation">,</span> <span class="token class-name">StringSerializer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;value.serializer&quot;</span><span class="token punctuation">,</span> <span class="token class-name">StringSerializer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">KafkaProducer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> producer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KafkaProducer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token keyword">new</span> <span class="token class-name">ProducerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span></span>
<span class="line">            <span class="token string">&quot;Kafka-Test&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.kafka,&quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;,value,INT32,100&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    producer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kafka-消费者接收数据-java-代码示例" tabindex="-1"><a class="header-anchor" href="#kafka-消费者接收数据-java-代码示例"><span>kafka 消费者接收数据 Java 代码示例</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line">    <span class="token class-name">Properties</span> props <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;bootstrap.servers&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;127.0.0.1:9092&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;key.deserializer&quot;</span><span class="token punctuation">,</span> <span class="token class-name">StringDeserializer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;value.deserializer&quot;</span><span class="token punctuation">,</span> <span class="token class-name">StringDeserializer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;auto.offset.reset&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;earliest&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    props<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;group.id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Kafka-Test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">KafkaConsumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> kafkaConsumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KafkaConsumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    kafkaConsumer<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">singleton</span><span class="token punctuation">(</span><span class="token string">&quot;Kafka-Test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">ConsumerRecords</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> records <span class="token operator">=</span> kafkaConsumer<span class="token punctuation">.</span><span class="token function">poll</span><span class="token punctuation">(</span><span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">ofSeconds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存入-iotdb-服务器的-java-代码示例" tabindex="-1"><a class="header-anchor" href="#存入-iotdb-服务器的-java-代码示例"><span>存入 IoTDB 服务器的 Java 代码示例</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line">    <span class="token class-name">SessionPool</span> pool <span class="token operator">=</span></span>
<span class="line">        <span class="token keyword">new</span> <span class="token class-name">SessionPool<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">host</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">port</span><span class="token punctuation">(</span><span class="token number">6667</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">maxSize</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> datas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>records<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ConsumerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> record <span class="token operator">:</span> records<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      datas<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span>        </span>
<span class="line">    <span class="token keyword">int</span> size <span class="token operator">=</span> datas<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> deviceIds <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> times <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> measurementsList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">TSDataType</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> typesList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> valuesList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> data <span class="token operator">:</span> datas<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dataArray <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token class-name">String</span> device <span class="token operator">=</span> dataArray<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">long</span> time <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">parseLong</span><span class="token punctuation">(</span>dataArray<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> measurements <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>dataArray<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TSDataType</span><span class="token punctuation">&gt;</span></span> types <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> type <span class="token operator">:</span> dataArray<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        types<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">TSDataType</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> values <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> valuesStr <span class="token operator">=</span> dataArray<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> valuesStr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">switch</span> <span class="token punctuation">(</span>types<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token constant">INT64</span><span class="token operator">:</span></span>
<span class="line">            values<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">parseLong</span><span class="token punctuation">(</span>valuesStr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token constant">DOUBLE</span><span class="token operator">:</span></span>
<span class="line">            values<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span>valuesStr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token constant">INT32</span><span class="token operator">:</span></span>
<span class="line">            values<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>valuesStr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token constant">TEXT</span><span class="token operator">:</span></span>
<span class="line">            values<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>valuesStr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token constant">FLOAT</span><span class="token operator">:</span></span>
<span class="line">            values<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>valuesStr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">case</span> <span class="token constant">BOOLEAN</span><span class="token operator">:</span></span>
<span class="line">            values<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token function">parseBoolean</span><span class="token punctuation">(</span>valuesStr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      deviceIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>device<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      times<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      measurementsList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>measurements<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      typesList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>types<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      valuesList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    pool<span class="token punctuation">.</span><span class="token function">insertRecords</span><span class="token punctuation">(</span>deviceIds<span class="token punctuation">,</span> times<span class="token punctuation">,</span> measurementsList<span class="token punctuation">,</span> typesList<span class="token punctuation">,</span> valuesList<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const i=s(e,[["render",c],["__file","Programming-Kafka.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/API/Programming-Kafka.html","title":"Kafka","lang":"zh-CN","frontmatter":{"description":"Kafka Apache Kafka 是一个开源的分布式事件流平台，被数千家公司用于高性能数据管道、流分析、数据集成和关键任务应用。 示例代码 kafka 生产者生产数据 Java 代码示例 kafka 消费者接收数据 Java 代码示例 存入 IoTDB 服务器的 Java 代码示例","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/API/Programming-Kafka.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/API/Programming-Kafka.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Kafka"}],["meta",{"property":"og:description","content":"Kafka Apache Kafka 是一个开源的分布式事件流平台，被数千家公司用于高性能数据管道、流分析、数据集成和关键任务应用。 示例代码 kafka 生产者生产数据 Java 代码示例 kafka 消费者接收数据 Java 代码示例 存入 IoTDB 服务器的 Java 代码示例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kafka\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[{"level":3,"title":"kafka 生产者生产数据 Java 代码示例","slug":"kafka-生产者生产数据-java-代码示例","link":"#kafka-生产者生产数据-java-代码示例","children":[]},{"level":3,"title":"kafka 消费者接收数据 Java 代码示例","slug":"kafka-消费者接收数据-java-代码示例","link":"#kafka-消费者接收数据-java-代码示例","children":[]},{"level":3,"title":"存入 IoTDB 服务器的 Java 代码示例","slug":"存入-iotdb-服务器的-java-代码示例","link":"#存入-iotdb-服务器的-java-代码示例","children":[]}]}],"git":{"createdTime":1690886819000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.53,"words":458},"filePathRelative":"zh/UserGuide/V1.3.0-2/API/Programming-Kafka.md","localizedDate":"2023年8月1日","autoDesc":true}');export{i as comp,u as data};
