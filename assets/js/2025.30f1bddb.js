(window.webpackJsonp=window.webpackJsonp||[]).push([[2025],{2346:function(e,s,a){"use strict";a.r(s);var t=a(1),n=Object(t.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"mapreduce-tsfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapreduce-tsfile"}},[e._v("#")]),e._v(" MapReduce TsFile")]),e._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[e._v("#")]),e._v(" 概要")]),e._v(" "),a("ul",[a("li",[e._v("TsFile的Hadoop连接器使用手册\n"),a("ul",[a("li",[e._v("什么是TsFile的Hadoop连接器")]),e._v(" "),a("li",[e._v("系统环境要求")]),e._v(" "),a("li",[e._v("数据类型对应关系")]),e._v(" "),a("li",[e._v("关于TSFInputFormat的说明")]),e._v(" "),a("li",[e._v("使用示例\n"),a("ul",[a("li",[e._v("读示例: 求和")]),e._v(" "),a("li",[e._v("写示例: 计算平均数并写入Tsfile中")])])])])])]),e._v(" "),a("h1",{attrs:{id:"tsfile的hadoop连接器使用手册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tsfile的hadoop连接器使用手册"}},[e._v("#")]),e._v(" TsFile的Hadoop连接器使用手册")]),e._v(" "),a("h2",{attrs:{id:"什么是tsfile的hadoop连接器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是tsfile的hadoop连接器"}},[e._v("#")]),e._v(" 什么是TsFile的Hadoop连接器")]),e._v(" "),a("p",[e._v("TsFile的Hadoop连接器实现了对Hadoop读取外部Tsfile类型的文件格式的支持。让用户可以使用Hadoop的map、reduce等操作对Tsfile文件进行读取、写入和查询。")]),e._v(" "),a("p",[e._v("有了这个连接器，用户可以")]),e._v(" "),a("ul",[a("li",[e._v("将单个Tsfile文件加载进Hadoop，不论文件是存储在本地文件系统或者是HDFS中")]),e._v(" "),a("li",[e._v("将某个特定目录下的所有文件加载进Hadoop，不论文件是存储在本地文件系统或者是HDFS中")]),e._v(" "),a("li",[e._v("将Hadoop处理完后的结果以Tsfile的格式保存")])]),e._v(" "),a("h2",{attrs:{id:"系统环境要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统环境要求"}},[e._v("#")]),e._v(" 系统环境要求")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Hadoop 版本")]),e._v(" "),a("th",[e._v("Java 版本")]),e._v(" "),a("th",[e._v("TsFile 版本")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("2.7.3")])]),e._v(" "),a("td",[a("code",[e._v("1.8")])]),e._v(" "),a("td",[a("code",[e._v("0.9.1")])])])])]),e._v(" "),a("blockquote",[a("p",[e._v("注意：关于如何下载和使用Tsfile, 请参考以下链接: https://github.com/apache/incubator-iotdb/tree/master/tsfile.")])]),e._v(" "),a("h2",{attrs:{id:"数据类型对应关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型对应关系"}},[e._v("#")]),e._v(" 数据类型对应关系")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("TsFile 数据类型")]),e._v(" "),a("th",[e._v("Hadoop writable")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("BOOLEAN")]),e._v(" "),a("td",[e._v("BooleanWritable")])]),e._v(" "),a("tr",[a("td",[e._v("INT32")]),e._v(" "),a("td",[e._v("IntWritable")])]),e._v(" "),a("tr",[a("td",[e._v("INT64")]),e._v(" "),a("td",[e._v("LongWritable")])]),e._v(" "),a("tr",[a("td",[e._v("FLOAT")]),e._v(" "),a("td",[e._v("FloatWritable")])]),e._v(" "),a("tr",[a("td",[e._v("DOUBLE")]),e._v(" "),a("td",[e._v("DoubleWritable")])]),e._v(" "),a("tr",[a("td",[e._v("TEXT")]),e._v(" "),a("td",[e._v("Text")])])])]),e._v(" "),a("h2",{attrs:{id:"关于tsfinputformat的说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于tsfinputformat的说明"}},[e._v("#")]),e._v(" 关于TSFInputFormat的说明")]),e._v(" "),a("p",[e._v("TSFInputFormat继承了Hadoop中FileInputFormat类，重写了其中切片的方法。")]),e._v(" "),a("p",[e._v("目前的切片方法是根据每个ChunkGroup的中点的offset是否属于Hadoop所切片的startOffset和endOffset之间，来判断是否将该ChunkGroup放入此切片。")]),e._v(" "),a("p",[e._v("TSFInputFormat将tsfile中的数据以多个"),a("code",[e._v("MapWritable")]),e._v("记录的形式返回给用户。")]),e._v(" "),a("p",[e._v("假设我们想要从Tsfile中获得名为"),a("code",[e._v("d1")]),e._v("的设备的数据，该设备有三个传感器，名称分别为"),a("code",[e._v("s1")]),e._v(", "),a("code",[e._v("s2")]),e._v(", "),a("code",[e._v("s3")]),e._v("。")]),e._v(" "),a("p",[a("code",[e._v("s1")]),e._v("的类型是"),a("code",[e._v("BOOLEAN")]),e._v(", "),a("code",[e._v("s2")]),e._v("的类型是 "),a("code",[e._v("DOUBLE")]),e._v(", "),a("code",[e._v("s3")]),e._v("的类型是"),a("code",[e._v("TEXT")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("MapWritable")]),e._v("的结构如下所示：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n    "time_stamp": 10000000,\n    "device_id":  d1,\n    "s1":         true,\n    "s2":         3.14,\n    "s3":         "middle"\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("在Hadoop的Map job中，你可以采用如下方法获得你想要的任何值")]),e._v(" "),a("p",[a("code",[e._v('mapwritable.get(new Text("s1"))')])]),e._v(" "),a("blockquote",[a("p",[e._v("注意: "),a("code",[e._v("MapWritable")]),e._v("中所有的键值类型都是"),a("code",[e._v("Text")]),e._v("。")])]),e._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[e._v("#")]),e._v(" 使用示例")]),e._v(" "),a("h3",{attrs:{id:"读示例-求和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读示例-求和"}},[e._v("#")]),e._v(" 读示例: 求和")]),e._v(" "),a("p",[e._v("首先，我们需要在TSFInputFormat中配置我们需要哪些数据")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    // configure reading time enable\n    TSFInputFormat.setReadTime(job, true); \n    // configure reading deviceId enable\n    TSFInputFormat.setReadDeviceId(job, true); \n    // configure reading which deltaObjectIds\n    String[] deviceIds = {"device_1"};\n    TSFInputFormat.setReadDeviceIds(job, deltaObjectIds);\n    // configure reading which measurementIds\n    String[] measurementIds = {"sensor_1", "sensor_2", "sensor_3"};\n    TSFInputFormat.setReadMeasurementIds(job, measurementIds);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("然后，必须指定mapper和reducer输出的键和值类型")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    // set inputformat and outputformat\n    job.setInputFormatClass(TSFInputFormat.class);\n    // set mapper output key and value\n    job.setMapOutputKeyClass(Text.class);\n    job.setMapOutputValueClass(DoubleWritable.class);\n    // set reducer output key and value\n    job.setOutputKeyClass(Text.class);\n    job.setOutputValueClass(DoubleWritable.class);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("接着，就可以编写包含具体的处理数据逻辑的"),a("code",[e._v("mapper")]),e._v("和"),a("code",[e._v("reducer")]),e._v("类了。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('  public static class TSMapper extends Mapper<NullWritable, MapWritable, Text, DoubleWritable> {\n\n    @Override\n    protected void map(NullWritable key, MapWritable value,\n        Mapper<NullWritable, MapWritable, Text, DoubleWritable>.Context context)\n        throws IOException, InterruptedException {\n\n      Text deltaObjectId = (Text) value.get(new Text("device_id"));\n      context.write(deltaObjectId, (DoubleWritable) value.get(new Text("sensor_3")));\n    }\n  }\n\n  public static class TSReducer extends Reducer<Text, DoubleWritable, Text, DoubleWritable> {\n\n    @Override\n    protected void reduce(Text key, Iterable<DoubleWritable> values,\n        Reducer<Text, DoubleWritable, Text, DoubleWritable>.Context context)\n        throws IOException, InterruptedException {\n\n      double sum = 0;\n      for (DoubleWritable value : values) {\n        sum = sum + value.get();\n      }\n      context.write(key, new DoubleWritable(sum));\n    }\n  }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br")])]),a("blockquote",[a("p",[e._v("注意: 完整的代码示例可以在如下链接中找到：https://github.com/apache/incubator-iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb/hadoop/tsfile/TSFMRReadExample.java")])]),e._v(" "),a("h3",{attrs:{id:"写示例-计算平均数并写入tsfile中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写示例-计算平均数并写入tsfile中"}},[e._v("#")]),e._v(" 写示例: 计算平均数并写入Tsfile中")]),e._v(" "),a("p",[e._v("除了"),a("code",[e._v("OutputFormatClass")]),e._v("，剩下的配置代码跟上面的读示例是一样的")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("   job.setOutputFormatClass(TSFOutputFormat.class);\n   // set reducer output key and value\n   job.setOutputKeyClass(NullWritable.class);\n   job.setOutputValueClass(HDFSTSRecord.class);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("然后，是包含具体的处理数据逻辑的"),a("code",[e._v("mapper")]),e._v("和"),a("code",[e._v("reducer")]),e._v("类。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    public static class TSMapper extends Mapper<NullWritable, MapWritable, Text, MapWritable> {\n\n        @Override\n        protected void map(NullWritable key, MapWritable value,\n                           Mapper<NullWritable, MapWritable, Text, MapWritable>.Context context)\n                throws IOException, InterruptedException {\n\n            Text deltaObjectId = (Text) value.get(new Text("device_id"));\n            long timestamp = ((LongWritable)value.get(new Text("timestamp"))).get();\n            if (timestamp % 100000 == 0) {\n                context.write(deltaObjectId, new MapWritable(value));\n            }\n        }\n    }\n\n    /**\n     * This reducer calculate the average value.\n     */\n    public static class TSReducer extends Reducer<Text, MapWritable, NullWritable, HDFSTSRecord> {\n\n        @Override\n        protected void reduce(Text key, Iterable<MapWritable> values,\n                              Reducer<Text, MapWritable, NullWritable, HDFSTSRecord>.Context context) throws IOException, InterruptedException {\n            long sensor1_value_sum = 0;\n            long sensor2_value_sum = 0;\n            double sensor3_value_sum = 0;\n            long num = 0;\n            for (MapWritable value : values) {\n                num++;\n                sensor1_value_sum += ((LongWritable)value.get(new Text("sensor_1"))).get();\n                sensor2_value_sum += ((LongWritable)value.get(new Text("sensor_2"))).get();\n                sensor3_value_sum += ((DoubleWritable)value.get(new Text("sensor_3"))).get();\n            }\n            HDFSTSRecord tsRecord = new HDFSTSRecord(1L, key.toString());\n            DataPoint dPoint1 = new LongDataPoint("sensor_1", sensor1_value_sum / num);\n            DataPoint dPoint2 = new LongDataPoint("sensor_2", sensor2_value_sum / num);\n            DataPoint dPoint3 = new DoubleDataPoint("sensor_3", sensor3_value_sum / num);\n            tsRecord.addTuple(dPoint1);\n            tsRecord.addTuple(dPoint2);\n            tsRecord.addTuple(dPoint3);\n            context.write(NullWritable.get(), tsRecord);\n        }\n    }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br")])]),a("blockquote",[a("p",[e._v("注意: 完整的代码示例可以在如下链接中找到：https://github.com/apache/incubator-iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb/hadoop/tsfile/TSMRWriteExample.java")])])])}],!1,null,null,null);s.default=n.exports}}]);