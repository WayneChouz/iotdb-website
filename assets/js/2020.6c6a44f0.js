(window.webpackJsonp=window.webpackJsonp||[]).push([[2020],{2341:function(t,a,r){"use strict";r.r(a);var e=r(1),i=Object(e.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"日志可视化工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#日志可视化工具"}},[t._v("#")]),t._v(" 日志可视化工具")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E5%8F%AF%E8%A7%86%E5%8C%96%E5%B7%A5%E5%85%B7LogVisualizer"}},[t._v("日志可视化工具LogVisualizer")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BB%8B%E7%BB%8D"}},[t._v("介绍")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"}},[t._v("准备工作")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95%EF%BC%88%E5%9B%BE%E5%BD%A2%E7%95%8C%E9%9D%A2%EF%BC%89"}},[t._v("使用方法(图形界面)")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#%E5%90%AF%E5%8A%A8%E5%9B%BE%E5%BD%A2%E7%95%8C%E9%9D%A2"}},[t._v("启动图形界面")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E9%80%89%E6%8B%A9%E6%97%A5%E5%BF%97%E6%96%87%E4%BB%B6"}},[t._v("选择日志文件")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E9%80%89%E6%8B%A9%E8%A7%A3%E6%9E%90%E5%99%A8%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"}},[t._v("选择解析器配置文件")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E8%BD%BD%E5%85%A5%E6%97%A5%E5%BF%97"}},[t._v("载入日志")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E6%96%B0%E5%BB%BA%E5%8F%AF%E8%A7%86%E5%8C%96%E8%AE%A1%E5%88%92"}},[t._v("新建可视化计划")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E7%BC%96%E8%BE%91%E5%8F%AF%E8%A7%86%E5%8C%96%E8%AE%A1%E5%88%92"}},[t._v("编辑可视化计划")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E5%88%A0%E9%99%A4%E5%8F%AF%E8%A7%86%E5%8C%96%E8%AE%A1%E5%88%92"}},[t._v("删除可视化计划")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E6%89%A7%E8%A1%8C%E5%8F%AF%E8%A7%86%E5%8C%96%E8%AE%A1%E5%88%92"}},[t._v("执行可视化计划")])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95(%E5%91%BD%E4%BB%A4%E8%A1%8C)"}},[t._v("使用方法（命令行）")])])]),t._v(" "),r("h1",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("和众多其他系统软件一样，IoTDB在运行时会产生大量各种各样的日志。debug和trace级别的日志可以帮助\n开发者掌握IoTDB的运行时状态，找出潜在的或是尚不明确的bug。而info级别的日志可以用来判断系统的健康程度，\n并且可以为系统调优提供一个指导方向。一旦出现warn时甚至error级别的日志，就代表了系统正处于一个危险的\n状态或者是发生了某种异常（往往是某种bug或者黑客攻击），系统管理员可以通过分析这些日志及时对系统调整，\n避免系统走向崩溃，或是在系统崩溃后找寻系统崩溃的原因。")]),t._v(" "),r("p",[t._v("鉴于日志对于监控系统的运行状态具有重大意义，许多学术界和工业界的专家都致力于研究如何对日志进行挖崛来\n提取其中的有价值的信息。传统的日志分析需要对系统和日志高度熟悉的人对日志进行有针对性的仔细阅读与分析\n才能发现日志背后的价值。通常，由不同数据源(例如Java中不同的类)产生的日志混合在若干个文件中，只有经验\n丰富的开发或运维人员才能快速地从海量的日志中找到想要的日志，而那些资历尚浅的人则需要花费大量的时间\n阅读和排除无用的日志才能最终找到他们所希望的日志。并且,日志的形式通常是包含了一些系统状态量的字符串，\n对于人类来说，要从这些字符串中发现其背后的趋势显然没有通过图表和统计信息等其他形式来得容易。")]),t._v(" "),r("p",[t._v("为了方便开发和运维人员了解日志背后的系统状态的变化，以及将它们进行对比分析，我们推出了一个简易的日志\n可视化工具LogVisualizer。在用户通过正则表达式指定了日志中他们所感兴趣的变量后，LogVisualizer将自动\n抽取这些变量，按照对应日志的产生时间为这些变量生成时间序列，并以折线图的形式绘制这些变量的变化，以\n方便后续的比较和分析。同时，LogVisualizer还会对这些时间序列进行统计，找出其中的最大值、最小值、平均值、\n日志条数等信息，使得用户能有一个总体性的认识。")]),t._v(" "),r("h1",{attrs:{id:"准备工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[t._v("#")]),t._v(" 准备工作")]),t._v(" "),r("p",[t._v("在使用LogVisualizer之前，您需要对其进行构建。LogVisualizer被集成到server模块作为一个系统工具，因此您\n可以通过构建server模块来同时构建LogVisualizer。您可以使用以下命令：")]),t._v(" "),r("blockquote",[r("p",[t._v("mvn clean package -pl server -DskipTests")])]),t._v(" "),r("p",[t._v("之后您能在这个目录下找到LogVisualizer的启动脚本：\n"),r("code",[t._v("server/target/iotdb-server-{project-version}/tools/logVisualize")])]),t._v(" "),r("p",[t._v("如果您想要掌握本工具的一些进阶使用方法，您需要对正则表达式（特别是Java风格的正则表达式）有一些基本的\n了解。您只有在熟悉正则表达式以后才能新建可视化计划或者对已有的计划进行修改。如果您对正则表达式一无所知，\n我们也提供了一些预设的可视化计划供您使用，但这些可视化计划仅限于分析IoTDB。")]),t._v(" "),r("h1",{attrs:{id:"使用方法（图形界面）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用方法（图形界面）"}},[t._v("#")]),t._v(" 使用方法（图形界面）")]),t._v(" "),r("h2",{attrs:{id:"启动图形界面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动图形界面"}},[t._v("#")]),t._v(" 启动图形界面")]),t._v(" "),r("p",[t._v("您可以通过脚本"),r("code",[t._v("log-visualizer-gui.sh")]),t._v(" (在Windows下为"),r("code",[t._v("log-visualizer-gui.bat")]),t._v(")来启动LogVisualizer.\n这将会启动一个如下图所示的图形界面:")]),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/main_panel.png?raw=true"}}),t._v(" "),r("h2",{attrs:{id:"选择日志文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择日志文件"}},[t._v("#")]),t._v(" 选择日志文件")]),t._v(" "),r("p",[t._v("首先，您需要点击图示的按钮选择一个含有待可视化日志的文件或者一个仅包含该类文件的文件夹。注意：我们\n目前仅支持单行日志，多行日志无法被正确解析而会被忽略。")]),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/select_log_file.png?raw=true"}}),t._v(" "),r("h2",{attrs:{id:"选择解析器配置文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#选择解析器配置文件"}},[t._v("#")]),t._v(" 选择解析器配置文件")]),t._v(" "),r("p",[t._v("然后，您还需要选择一个解析器配置文件，该文件将告诉LogVisualizer如何解析日志。对于IoTDB产生的日志，我们在\n"),r("code",[t._v("server/src/assembly/resources/tools/logVisualize/default.log.pattern")]),t._v("里提供了一个例子。如果您需要\n解析的日志与IoTDB的日志具有相同的格式，您可以直接使用该文件。否则，您需要仔细阅读该样例文件，并根据\n您的日志结构进行相应的修改。")]),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/select_log_parser_property.png?raw=true"}}),t._v(" "),r("h2",{attrs:{id:"载入日志"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#载入日志"}},[t._v("#")]),t._v(" 载入日志")]),t._v(" "),r("p",[t._v("之后，点击"),r("code",[t._v("Load logs")]),t._v("按钮来让LogVisualizer准备对这些日志进行解析。如果准备成功，按钮上方将显示\n"),r("code",[t._v("Logs are successfully loaded")]),t._v("。否则将会弹出一个对话框提示错误，您需要根据错误内容进行相应处理。")]),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/load_logs.png?raw=true"}}),t._v(" "),r("h2",{attrs:{id:"加载可视化计划"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#加载可视化计划"}},[t._v("#")]),t._v(" 加载可视化计划")]),t._v(" "),r("p",[t._v("接下来，您可以选择加载磁盘上已有的可视化计划或者新建计划。要加载已有的计划，只需要点击 "),r("code",[t._v("Load plans")]),t._v("\n按钮，并在弹出的对话框中选择想要加载的计划文件或者包含计划文件的文件夹。注意，如果选择文件夹，该文件\n夹必须只包含计划文件。")]),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/load_plan.png?raw=true"}}),t._v(" "),r("h2",{attrs:{id:"新建可视化计划"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新建可视化计划"}},[t._v("#")]),t._v(" 新建可视化计划")]),t._v(" "),r("p",[t._v("现在，我们将展示如何使用图形界面创建一个新的可视化计划，您也可以参考已有的计划文件，使用文本编辑器编写。\n首先点击"),r("code",[t._v("Create plan")]),t._v("按钮并选择存放新计划的文件，新计划将出现在左边的列表。选择的文件名将作为新计划的\n名称，该名称不能与已有的计划重复。")]),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/create_plan.png?raw=true"}}),t._v(" "),r("h2",{attrs:{id:"编辑可视化计划"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编辑可视化计划"}},[t._v("#")]),t._v(" 编辑可视化计划")]),t._v(" "),r("p",[t._v("在创建了一个新的计划以后，您可以在右边的面板中对其进行编辑。我们在 "),r("code",[t._v("server/src/assembly/resources/tools/logVisualize/plans/flushTimeConsumption.plan.example")]),t._v("\n提供了一个样例来帮助您理解计划的每一个字段的含义以及应该如何设置它们，我们强烈推荐您仔细阅读该样例。\n您也可以编辑其他已经加载了的计划。编辑结束后请务必点击"),r("code",[t._v("Save plan")]),t._v("按钮来保存您的修改。在下图的例子中，\n我们给出了如何设计一个计划让它能对任务的完成时间进行可视化，并将任务按照其类别进行分组。")]),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/edit_plan.png?raw=true"}}),t._v(" "),r("h2",{attrs:{id:"删除可视化计划"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除可视化计划"}},[t._v("#")]),t._v(" 删除可视化计划")]),t._v(" "),r("p",[t._v("如果您不再想使用某个计划，您可以选中它并点击"),r("code",[t._v("Delete plan")]),t._v("按钮。这将永久地把该计划从磁盘上移除。")]),t._v(" "),r("h2",{attrs:{id:"执行可视化计划"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行可视化计划"}},[t._v("#")]),t._v(" 执行可视化计划")]),t._v(" "),r("p",[t._v("最后，选中一个计划并点击"),r("code",[t._v("Execute plan")]),t._v("就可以执行该计划。请确保您之前已经加载了日志。计划执行以后，\n主界面上将会多出两个页面，第一个页面包含了若干个时间序列图，每一个对应了计划里的一个分组并且包含了\n计划中的所有测点（measurement），第二个页面包含了对每一组的日志的每个测点的统计信息。当您结束对一个\n页面的浏览以后，您可以点击页面右上角的按钮将其关闭。")]),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/execute_plan.png?raw=true"}}),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/plot.png?raw=true"}}),t._v(" "),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/statistics.png?raw=true"}}),t._v(" "),r("h1",{attrs:{id:"使用方法-命令行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用方法-命令行"}},[t._v("#")]),t._v(" 使用方法(命令行)")]),t._v(" "),r("p",[t._v("我们也提供了LogVisualizer的命令行版本，您可以通过"),r("code",[t._v("log-visualizer-cmd.sh")]),t._v(" (或 "),r("code",[t._v("log-visualizer-cmd.bat")]),t._v(")\n来使用。使用时必须输入四个参数，它们是："),r("code",[t._v("日志文件的路径")]),t._v("，"),r("code",[t._v("解析器配置文件的路径")]),t._v("，"),r("code",[t._v("可视化计划的路径")]),t._v("，\n"),r("code",[t._v("结果输出路径")]),t._v("。运行该脚本，LogVisualizer将根据参数读取日志和可视化计划，执行每一个可视化计划，并将\n每一个计划的结果存储到输出路径的一个子文件夹下。\n例如:")]),t._v(" "),r("blockquote",[r("p",[t._v("./log-visualizer-cmd.sh all.log default.log.pattern planB.plan results")])])])}],!1,null,null,null);a.default=i.exports}}]);