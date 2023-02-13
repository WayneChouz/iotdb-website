(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{389:function(t,e,i){},408:function(t,e,i){"use strict";i(389)},415:function(t,e,i){"use strict";i.r(e);i(162);var a={name:"IoTDB",data:()=>({msg:"Welcome to Home Page",imgBlock:[{src:"/img/home-Slide1.png",des:"High-end equipment",detail:" In high-end manufacturing, there are many devices equipped with sensors collecting working status data.Meteorological stations, wind turbines are common high-end devices.These devices, if supports Java or Go (in development), can run TsFile to store data locally.In this way, TsFile can provide the ability to save data with high throughput, high compression ratio, and millisecond query.Together with TsFile-Sync tool, TsFiles can be transmitted to the data center."},{src:"/img/home-Slide2.png",des:"Local Controller",detail:"In the scene of factories, there are tens of devices under LAN network. IoTDB can be installed on a local controller server in the factory to receive data from those devices. The local controller server (normal PC or workstation) with IoTDB can provide the ability to persist data and query data with SQL-like interface. In addition, with TsFile-Sync tool, TsFiles on the local controller can be transmitted to the data center equipped with IoTDB instance in the cloud."},{src:"/img/home-Slide3.png",des:"Cloud Data Management",detail:"In the scene of high-speed networks (Internet of Vehicles, etc.), a car installed of sensors, can collect monitoring information (driving status, etc.) of itself at a certain frequency. Usually, these automotive devices have limited hardware configurations and are difficult to carry complex applications. Here, lightweight IoTDB(IoTDB Client) came into being. IoTDB's JDBC API can make data that can be sent through narrow-band IoT networks or 4G whichever is possible. In this way, devices and cloud are connected together."}],isHover:!1}),methods:{addRoutes1(){this.$router.push("/Download/")},addRoutes2(){this.$router.push("/UserGuide/Master/QuickStart/QuickStart.html")}}},o=(i(408),i(19)),n=Object(o.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{background:"linear-gradient(top,#A2A2A2,#fff)"}},[e("h2",{staticClass:"h2",staticStyle:{"font-size":"80px"}},[t._v("Apache IoTDB")]),t._v(" "),e("p",{staticClass:"project-name"},[t._v("Database for Internet of Things")]),t._v(" "),e("p",{staticStyle:{"font-size":"20px",margin:"50px 0 10px 0","text-align":"justify!important"}},[t._v("\n    Apache IoTDB (Database for Internet of Things) is an IoT native database with high performance\n    for data management and analysis, deployable on the edge and the cloud. Due to its light-weight architecture,\n    high performance and rich feature set together with its deep integration with Apache\n    Hadoop, Spark and Flink, Apache IoTDB can meet the requirements of massive\n    data storage, high-speed data ingestion and complex data analysis in the IoT\n    industrial fields.\n  ")]),t._v(" "),e("div",{staticStyle:{"margin-top":"40px","text-align":"center"}},[e("el-button",{staticStyle:{"font-size":"18px","letter-spacing":"0.03em","font-family":"'Arimo', sans-serif"},attrs:{type:"warning",round:""},on:{click:t.addRoutes1}},[t._v("Download")]),t._v(" "),e("el-button",{staticStyle:{"font-size":"18px","letter-spacing":"0.03em","font-family":"'Arimo', sans-serif"},attrs:{type:"info",round:""},on:{click:t.addRoutes2}},[t._v("QuickStart")])],1),t._v(" "),e("p",{staticClass:"home-title",staticStyle:{"font-size":"50px"}},[t._v("Scenarios")]),t._v(" "),e("div",{staticClass:"block"},[e("el-carousel",{attrs:{trigger:"click",height:"100vh","indicator-position":"none"}},t._l(t.imgBlock,(function(i,a){return e("el-carousel-item",{key:a,staticStyle:{"text-align":"center",height:"auto"}},[e("img",{staticStyle:{width:"80%",height:"auto"},attrs:{src:i.src}}),t._v(" "),e("h3",{staticStyle:{"font-size":"30px",color:"#fcac45","text-align":"center","line-height":"normal"}},[t._v(t._s(i.des))]),t._v(" "),e("p",{staticStyle:{"font-size":"18px","line-height":"22px",padding:"15px","text-align":"justify!important","font-weight":"bold"}},[t._v(t._s(i.detail))])])})),1)],1),t._v(" "),e("p",{staticClass:"home-title",staticStyle:{"font-size":"50px"}},[t._v("Main Features")]),t._v(" "),e("el-row",{staticStyle:{"margin-top":"50px"},attrs:{gutter:20}},[e("el-col",{staticStyle:{"text-align":"center","margin-bottom":"10px"},attrs:{xs:24,sm:24,md:12,lg:8}},[e("el-popover",{attrs:{placement:"top-start",title:"High-throughput read and write",width:"325",trigger:"hover",content:"Apache IoTDB can support high-speed write access for millions of low-power and intelligently networked devices. It also provides lightning read access for retrieving data."}},[e("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon1.png"}}),t._v(" "),e("p",[t._v("High-throughput read and write")])])],1)],1),t._v(" "),e("el-col",{staticStyle:{"text-align":"center","margin-bottom":"10px"},attrs:{xs:24,sm:24,md:12,lg:8}},[e("el-popover",{attrs:{placement:"top-start",title:"Efficient directory structure",width:"325",trigger:"hover",content:"Apache IoTDB can efficiently organize complex data structure from IoT devices and large size of timeseries data with fuzzy searching strategy for complex directory of timeseries data."}},[e("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon2.png"}}),t._v(" "),e("p",[t._v(" Efficient directory structure")])])],1)],1),t._v(" "),e("el-col",{staticStyle:{"text-align":"center","margin-bottom":"10px"},attrs:{xs:24,sm:24,md:12,lg:8}},[e("el-popover",{attrs:{placement:"top-start",title:"Rich query semantics",width:"325",trigger:"hover",content:"Apache IoTDB can support time alignment for timeseries data across devices and sensors, computation in timeseries field and abundant aggregation functions in time dimension."}},[e("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon3.png"}}),t._v(" "),e("p",[t._v("Rich query semantics")])])],1)],1),t._v(" "),e("el-col",{staticStyle:{"text-align":"center","margin-bottom":"10px"},attrs:{xs:24,sm:24,md:12,lg:8}},[e("el-popover",{attrs:{placement:"top-start",title:"Low cost on hardware",width:"325",trigger:"hover",content:"Apache IoTDB can reach a high compression ratio of disk storage (it costs less than $0.23 to store 1GB of data on hard disk)."}},[e("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon4.png"}}),t._v(" "),e("p",[t._v("Low cost on hardware")])])],1)],1),t._v(" "),e("el-col",{staticStyle:{"text-align":"center","margin-bottom":"10px"},attrs:{xs:24,sm:24,md:12,lg:8}},[e("el-popover",{attrs:{placement:"top-start",title:"Flexible deployment",width:"325",trigger:"hover",content:"Apache IoTDB can provide users one-click installation on the cloud, terminal tool on desktop and the bridge tool between cloud platform and on premise machine (Data Synchronization Tool)."}},[e("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon5.png"}}),t._v(" "),e("p",[t._v("Flexible deployment")])])],1)],1),t._v(" "),e("el-col",{staticStyle:{"text-align":"center","margin-bottom":"50px"},attrs:{xs:24,sm:24,md:12,lg:8}},[e("el-popover",{attrs:{placement:"top-start",title:"Intense integration with Open Source Ecosystem",width:"325",trigger:"hover",content:"Apache IoTDB can support analysis ecosystems, for example, Hadoop, Spark, Flink and Grafana （visualization tool）."}},[e("el-button",{staticStyle:{"text-align":"center",width:"100%"},attrs:{slot:"reference"},slot:"reference"},[e("img",{staticStyle:{width:"40px",height:"40px"},attrs:{src:"/img/home-icon6.png"}}),t._v(" "),e("p",{staticStyle:{"line-height":"5px"}},[t._v("Intense integration with ")]),t._v(" "),e("p",{staticStyle:{"line-height":"5px"}},[t._v("Open Source Ecosystem")])])],1)],1)],1),t._v(" "),e("span",{staticStyle:{margin:"10px"}})],1)}),[],!1,null,"31c1946b",null);e.default=n.exports}}]);