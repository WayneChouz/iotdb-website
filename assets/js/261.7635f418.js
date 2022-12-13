(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{663:function(e,t,o){"use strict";o.r(t);var a=o(19),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"load-external-tsfile-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-external-tsfile-tool"}},[e._v("#")]),e._v(" Load External TsFile Tool")]),e._v(" "),t("h1",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("The load external tsfile tool allows users to load tsfiles, delete a tsfile, or move a tsfile to target directory from the running Apache IoTDB instance.")]),e._v(" "),t("h1",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("The user sends specified commands to the Apache IoTDB system through the Cli tool or JDBC to use the tool.")]),e._v(" "),t("h2",{attrs:{id:"load-tsfiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-tsfiles"}},[e._v("#")]),e._v(" load tsfiles")]),e._v(" "),t("p",[e._v("The command to load tsfiles is "),t("code",[e._v('load "<path/dir>" [true/false] [storage group level]')]),e._v(".")]),e._v(" "),t("p",[e._v("This command has two usages:")]),e._v(" "),t("ol",[t("li",[e._v("Load a single tsfile by specifying a file path (absolute path).")])]),e._v(" "),t("p",[e._v("The second parameter indicates the path of the tsfile to be loaded and the name of the tsfile needs to conform to the tsfile naming convention, that is, "),t("code",[e._v("{systemTime}-{versionNum}-{mergeNum} .tsfile")]),e._v(". The third and fourth parameters are optional. When the metadata corresponding to the timeseries in the tsfile to be loaded does not exist, you can choose whether to create the schema automatically. If the third parameter is true, the schema will be created automatically. If the thrid parameter is false, the schema will not be created. By default, the schema will be created. When the storage group corresponding to the tsfile does not exist, the user can set the level of storage group through the fourth parameter. By default, it'll use the storage group level which is set in "),t("code",[e._v("iotdb-engine.properties")]),e._v(".\nIf the "),t("code",[e._v(".resource")]),e._v(" file corresponding to the file exists, it will be loaded into the data directory and engine of the Apache IoTDB. Otherwise, the corresponding "),t("code",[e._v(".resource")]),e._v(" file will be regenerated from the tsfile file.")]),e._v(" "),t("p",[e._v("Examples:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('load "/Users/Desktop/data/1575028885956-101-0.tsfile"')])]),e._v(" "),t("li",[t("code",[e._v('load "/Users/Desktop/data/1575028885956-101-0.tsfile" false')])]),e._v(" "),t("li",[t("code",[e._v('load "/Users/Desktop/data/1575028885956-101-0.tsfile" true')])]),e._v(" "),t("li",[t("code",[e._v('load "/Users/Desktop/data/1575028885956-101-0.tsfile" true 1')])])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Load a batch of files by specifying a folder path (absolute path).")])]),e._v(" "),t("p",[e._v("The second parameter indicates the path of the tsfile to be loaded and the name of the tsfiles need to conform to the tsfile naming convention, that is, "),t("code",[e._v("{systemTime}-{versionNum}-{mergeNum} .tsfile")]),e._v(". The third and fourth parameters are optional. When the metadata corresponding to the time series in the tsfile to be loaded does not exist, you can choose whether to create the schema automatically. If the third parameter is true, the schema will be created automatically. If the third parameter is false, the schema will not be created. By default, the schema will be created. When the storage group corresponding to tsfile does not exist, the user can set the level of storage group through the fourth parameter. By default, it'll use the storage group level which is set in "),t("code",[e._v("iotdb-engine.properties")]),e._v(".\nIf the "),t("code",[e._v(".resource")]),e._v(" file corresponding to the file  exists, they will be loaded into the data directory and engine of the Apache IoTDB. Otherwise, the corresponding"),t("code",[e._v(".resource")]),e._v(" files will be regenerated from the tsfile sfile.")]),e._v(" "),t("p",[e._v("Examples:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('load "/Users/Desktop/data"')])]),e._v(" "),t("li",[t("code",[e._v('load "/Users/Desktop/data" false')])]),e._v(" "),t("li",[t("code",[e._v('load "/Users/Desktop/data" true')])]),e._v(" "),t("li",[t("code",[e._v('load "/Users/Desktop/data" true 1')])])]),e._v(" "),t("h2",{attrs:{id:"remove-a-tsfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-tsfile"}},[e._v("#")]),e._v(" remove a tsfile")]),e._v(" "),t("p",[e._v("The command to delete a tsfile is: "),t("code",[e._v('remove "<path>"')]),e._v(".")]),e._v(" "),t("p",[e._v("This command deletes a tsfile by specifying the file path. The specific implementation is to delete the tsfile and its corresponding "),t("code",[e._v(".resource")]),e._v(" and"),t("code",[e._v(".modification")]),e._v(" files.")]),e._v(" "),t("p",[e._v("Examples:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('remove "root.vehicle/1575028885956-101-0.tsfile"')])]),e._v(" "),t("li",[t("code",[e._v('remove "1575028885956-101-0.tsfile"')])])]),e._v(" "),t("h2",{attrs:{id:"move-a-tsfile-to-a-target-directory"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#move-a-tsfile-to-a-target-directory"}},[e._v("#")]),e._v(" move a tsfile to a target directory")]),e._v(" "),t("p",[e._v("The command to move a tsfile to ta arget directory is: "),t("code",[e._v('move "<path>" "<dir>"')]),e._v(".")]),e._v(" "),t("p",[e._v("This command moves a tsfile to a target directory by specifying tsfile path and the target directory(absolute path). The specific implementation is to remove the tsfile from the engine and move the tsfile file and its corresponding "),t("code",[e._v(".resource")]),e._v(" file to the target directory.")]),e._v(" "),t("p",[e._v("Examples:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('move "root.vehicle/1575029224130-101-0.tsfile" "/data/data/tmp"')])]),e._v(" "),t("li",[t("code",[e._v('move "1575029224130-101-0.tsfile" "/data/data/tmp"')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);