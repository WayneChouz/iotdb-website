(window.webpackJsonp=window.webpackJsonp||[]).push([[438],{844:function(t,e,a){"use strict";a.r(e);var r=a(19),v=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"tsfile-hierarchy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-hierarchy"}},[t._v("#")]),t._v(" TsFile Hierarchy")]),t._v(" "),e("p",[t._v("Here is a brief introduction of the structure of a TsFile file.")]),t._v(" "),e("h1",{attrs:{id:"variable-storage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variable-storage"}},[t._v("#")]),t._v(" Variable Storage")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Big Endian")]),t._v("\n​")]),t._v(" "),e("ul",[e("li",[t._v("For Example, the "),e("code",[t._v("int")]),t._v(" "),e("code",[t._v("0x8")]),t._v(" will be stored as "),e("code",[t._v("00 00 00 08")]),t._v(", not "),e("code",[t._v("08 00 00 00")])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("String with Variable Length")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("The format is "),e("code",[t._v("int size")]),t._v(" plus "),e("code",[t._v("String literal")]),t._v(". Size can be zero.")])]),t._v(" "),e("li",[e("p",[t._v("Size equals the number of bytes this string will take, and it may not equal to the length of the string.")])]),t._v(" "),e("li",[e("p",[t._v('For example "sensor_1" will be stored as '),e("code",[t._v("00 00 00 08")]),t._v(' plus the encoding(ASCII) of "sensor_1".')])]),t._v(" "),e("li",[e("p",[t._v('Note that for the "Magic String"(file signature) "TsFilev0.8.0", the size(12) and encoding(ASCII)\nis fixed so there is no need to put the size before this string literal.')])])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Data Type Hardcode")])]),t._v(" "),e("ul",[e("li",[t._v("0: BOOLEAN")]),t._v(" "),e("li",[t._v("1: INT32 ("),e("code",[t._v("int")]),t._v(")")]),t._v(" "),e("li",[t._v("2: INT64 ("),e("code",[t._v("long")]),t._v(")")]),t._v(" "),e("li",[t._v("3: FLOAT")]),t._v(" "),e("li",[t._v("4: DOUBLE")]),t._v(" "),e("li",[t._v("5: TEXT ("),e("code",[t._v("String")]),t._v(")")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Encoding Type Hardcode")])]),t._v(" "),e("ul",[e("li",[t._v("0: PLAIN")]),t._v(" "),e("li",[t._v("1: PLAIN_DICTIONARY")]),t._v(" "),e("li",[t._v("2: RLE")]),t._v(" "),e("li",[t._v("3: DIFF")]),t._v(" "),e("li",[t._v("4: TS_2DIFF")]),t._v(" "),e("li",[t._v("5: BITMAP")]),t._v(" "),e("li",[t._v("6: GORILLA")]),t._v(" "),e("li",[t._v("7: REGULAR")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Compressing Type Hardcode")])]),t._v(" "),e("ul",[e("li",[t._v("0: UNCOMPRESSED")]),t._v(" "),e("li",[t._v("1: SNAPPY")])])])]),t._v(" "),e("h1",{attrs:{id:"tsfile-overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-overview"}},[t._v("#")]),t._v(" TsFile Overview")]),t._v(" "),e("p",[t._v("Here is a graph about the TsFile structure.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/40447846/61616997-6fad1300-ac9c-11e9-9c17-46785ebfbc88.png",alt:"TsFile Breakdown"}})]),t._v(" "),e("h1",{attrs:{id:"magic-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#magic-string"}},[t._v("#")]),t._v(" Magic String")]),t._v(" "),e("p",[t._v("There is a 12 bytes magic string:")]),t._v(" "),e("p",[e("code",[t._v("TsFilev0.8.0")])]),t._v(" "),e("p",[t._v("It is in both the beginning and end of a TsFile file as signature.")]),t._v(" "),e("h1",{attrs:{id:"data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),e("p",[t._v("The content of a TsFile file can be divided as two parts: data and metadata. There is a byte "),e("code",[t._v("0x02")]),t._v(" as the marker between\ndata and metadata.")]),t._v(" "),e("p",[t._v("The data section is an array of "),e("code",[t._v("ChunkGroup")]),t._v(", each ChuckGroup represents a "),e("em",[t._v("device")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"chuckgroup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chuckgroup"}},[t._v("#")]),t._v(" ChuckGroup")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("ChunkGroup")]),t._v(" has an array of "),e("code",[t._v("Chunk")]),t._v(", a following byte "),e("code",[t._v("0x00")]),t._v(" as the marker, and a "),e("code",[t._v("ChunkFooter")]),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"chunk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunk"}},[t._v("#")]),t._v(" Chunk")]),t._v(" "),e("p",[t._v("A "),e("code",[t._v("Chunk")]),t._v(" represents a "),e("em",[t._v("sensor")]),t._v(". There is a byte "),e("code",[t._v("0x01")]),t._v(" as the marker, following a "),e("code",[t._v("ChunkHeader")]),t._v(" and an array of "),e("code",[t._v("Page")]),t._v(".")]),t._v(" "),e("h5",{attrs:{id:"chunkheader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkheader"}},[t._v("#")]),t._v(" ChunkHeader")]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",[t._v("Member Description")]),e("th",[t._v("Member Type")])]),t._v(" "),e("tr",[e("td",[t._v("The name of this sensor(measurementID)")]),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Size of this chunk")]),e("td",[t._v("int")])]),t._v(" "),e("tr",[e("td",[t._v("Data type of this chuck")]),e("td",[t._v("short")])]),t._v(" "),e("tr",[e("td",[t._v("Number of pages")]),e("td",[t._v("int")])]),t._v(" "),e("tr",[e("td",[t._v("Compression Type")]),e("td",[t._v("short")])]),t._v(" "),e("tr",[e("td",[t._v("Encoding Type")]),e("td",[t._v("short")])]),t._v(" "),e("tr",[e("td",[t._v("Max Tombstone Time")]),e("td",[t._v("long")])])])]),t._v(" "),e("h5",{attrs:{id:"page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[t._v("#")]),t._v(" Page")]),t._v(" "),e("p",[t._v("A "),e("code",[t._v("Page")]),t._v(" represents some data in a "),e("code",[t._v("Chunk")]),t._v(". It contains a "),e("code",[t._v("PageHeader")]),t._v(" and the actual data (The encoded time-value pair).")]),t._v(" "),e("p",[t._v("PageHeader Structure")]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",[t._v("Member Description")]),e("th",[t._v("Member Type")])]),t._v(" "),e("tr",[e("td",[t._v("Data size before compressing")]),e("td",[t._v("int")])]),t._v(" "),e("tr",[e("td",[t._v("Data size after compressing(if use SNAPPY)")]),e("td",[t._v("int")])]),t._v(" "),e("tr",[e("td",[t._v("Number of values")]),e("td",[t._v("int")])]),t._v(" "),e("tr",[e("td",[t._v("Minimum time stamp")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("Maximum time stamp")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("Minimum value of the page")]),e("td",[t._v("Type of the page")])]),t._v(" "),e("tr",[e("td",[t._v("Maximum value of the page")]),e("td",[t._v("Type of the page")])]),t._v(" "),e("tr",[e("td",[t._v("First value of the page")]),e("td",[t._v("Type of the page")])]),t._v(" "),e("tr",[e("td",[t._v("Last value of the page")]),e("td",[t._v("Type of the page")])]),t._v(" "),e("tr",[e("td",[t._v("Sum of the Page")]),e("td",[t._v("double")])])])]),t._v(" "),e("h5",{attrs:{id:"chunkgroupfooter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupfooter"}},[t._v("#")]),t._v(" ChunkGroupFooter")]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",[t._v("Member Description")]),e("th",[t._v("Member Type")])]),t._v(" "),e("tr",[e("td",[t._v("Deviceid")]),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Data size of the ChunkGroup")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("Number of chunks")]),e("td",[t._v("int")])])])]),t._v(" "),e("h1",{attrs:{id:"metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[t._v("#")]),t._v(" Metadata")]),t._v(" "),e("h2",{attrs:{id:"tsdevicemetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsdevicemetadata"}},[t._v("#")]),t._v(" TsDeviceMetaData")]),t._v(" "),e("p",[t._v("The first part of metadata is "),e("code",[t._v("TsDeviceMetaData")])]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",[t._v("Member Description")]),e("th",[t._v("Member Type")])]),t._v(" "),e("tr",[e("td",[t._v("Start time")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("End time")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("Number of chunk groups")]),e("td",[t._v("int")])])])]),t._v(" "),e("p",[t._v("Then there is an array of "),e("code",[t._v("ChunkGroupMetaData")]),t._v(" after "),e("code",[t._v("TsDeviceMetaData")])]),t._v(" "),e("h2",{attrs:{id:"chunkgroupmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupmetadata"}},[t._v("#")]),t._v(" ChunkGroupMetaData")]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",[t._v("Member Description")]),e("th",[t._v("Member Type")])]),t._v(" "),e("tr",[e("td",[t._v("Deviceid")]),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Start offset of the ChunkGroup")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("End offset of the ChunkGroup")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("Version")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("Number of ChunkMetaData")]),e("td",[t._v("int")])])])]),t._v(" "),e("p",[t._v("Then there is an array of "),e("code",[t._v("ChunkMetadata")]),t._v(" for each "),e("code",[t._v("ChunkGroupMetadata")])]),t._v(" "),e("h4",{attrs:{id:"chunkmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkmetadata"}},[t._v("#")]),t._v(" ChunkMetaData")]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",[t._v("Member Description")]),e("th",[t._v("Member Type")])]),t._v(" "),e("tr",[e("td",[t._v("Measurementid")]),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Start offset of ChunkHeader")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("Number of data points")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("Start time")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("End time")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("Data type")]),e("td",[t._v("short")])]),t._v(" "),e("tr",[e("td",[t._v("Number of statistics")]),e("td",[t._v("int")])]),t._v(" "),e("tr",[e("td",[t._v("The statistics of this chunk")]),e("td",[t._v("TsDigest")])])])]),t._v(" "),e("h5",{attrs:{id:"tsdigest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsdigest"}},[t._v("#")]),t._v(" TsDigest")]),t._v(" "),e("p",[t._v("There are five statistics: "),e("code",[t._v("min, last, sum, first, max")])]),t._v(" "),e("p",[t._v("The storage format is a name-value pair. The name is a string (remember the length is before the literal).")]),t._v(" "),e("p",[t._v("But for the value, there is also a size integer before the data even if it is not string. For example, if the "),e("code",[t._v("min")]),t._v(' is 3, then it will be\nstored as 3 "min" 4 3 in the TsFile.')]),t._v(" "),e("h3",{attrs:{id:"file-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#file-metadata"}},[t._v("#")]),t._v(" File Metadata")]),t._v(" "),e("p",[t._v("After the array of "),e("code",[t._v("ChunkGroupMetadata")]),t._v(", here is the last part of the metadata.")]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",[t._v("Member Description")]),e("th",[t._v("Member Type")])]),t._v(" "),e("tr",[e("td",[t._v("Number of Devices")]),e("td",[t._v("int")])]),t._v(" "),e("tr",[e("td",[t._v("Array of DeviceIndexMetadata")]),e("td",[t._v("DeviceIndexMetadata")])]),t._v(" "),e("tr",[e("td",[t._v("Number of Measurements")]),e("td",[t._v("int")])]),t._v(" "),e("tr",[e("td",[t._v("Array of Measurement name and schema")]),e("td",[t._v("String, MeasurementSchema pair")])]),t._v(" "),e("tr",[e("td",[t._v("Current Version(3 for now)")]),e("td",[t._v("int")])]),t._v(" "),e("tr",[e("td",[t._v("Author byte")]),e("td",[t._v("byte")])]),t._v(" "),e("tr",[e("td",[t._v("Author(if author byte is 0x01)")]),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("File Metadata size(not including itself)")]),e("td",[t._v("int")])])])]),t._v(" "),e("h4",{attrs:{id:"deviceindexmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deviceindexmetadata"}},[t._v("#")]),t._v(" DeviceIndexMetadata")]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",[t._v("Member Description")]),e("th",[t._v("Member Type")])]),t._v(" "),e("tr",[e("td",[t._v("Deviceid")]),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Start offset of ChunkGroupMetaData(Or TsDeviceMetaData if it's the first one)")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("length")]),e("td",[t._v("int")])]),t._v(" "),e("tr",[e("td",[t._v("Start time")]),e("td",[t._v("long")])]),t._v(" "),e("tr",[e("td",[t._v("End time")]),e("td",[t._v("long")])])])]),t._v(" "),e("h4",{attrs:{id:"measurementschema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#measurementschema"}},[t._v("#")]),t._v(" MeasurementSchema")]),t._v(" "),e("center",[e("table",{staticStyle:{"text-align":"center"}},[e("tr",[e("th",[t._v("Member Description")]),e("th",[t._v("Member Type")])]),t._v(" "),e("tr",[e("td",[t._v("Measurementid")]),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Data type")]),e("td",[t._v("short")])]),t._v(" "),e("tr",[e("td",[t._v("Encoding")]),e("td",[t._v("short")])]),t._v(" "),e("tr",[e("td",[t._v("Compressor")]),e("td",[t._v("short")])]),t._v(" "),e("tr",[e("td",[t._v("Size of props")]),e("td",[t._v("int")])])])]),t._v(" "),e("p",[t._v("If size of props is greater than 0, there is an array of <String, String> pair as properties of this measurement.")]),t._v(" "),e("p",[t._v('Such as "max_point_number""2".')]),t._v(" "),e("h1",{attrs:{id:"done"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#done"}},[t._v("#")]),t._v(" Done")]),t._v(" "),e("p",[t._v("After the "),e("code",[t._v("FileMetaData")]),t._v(", there will be another Magic String and you have finished the journey of discovering TsFile!")]),t._v(" "),e("p",[t._v("You can also use /tsfile/example/TsFileSequenceRead to read and validate a TsFile.")])],1)}),[],!1,null,null,null);e.default=v.exports}}]);