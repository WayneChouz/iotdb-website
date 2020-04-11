(window.webpackJsonp=window.webpackJsonp||[]).push([[1132],{1453:function(a,e,s){"use strict";s.r(e);var t=s(1),n=Object(t.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"降采样查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#降采样查询"}},[a._v("#")]),a._v(" 降采样查询")]),a._v(" "),s("ul",[s("li",[a._v("org.apache.iotdb.db.query.dataset.groupby.GroupByEngineDataSet")])]),a._v(" "),s("p",[a._v("降采样查询的结果集都会继承 "),s("code",[a._v("GroupByEngineDataSet")]),a._v("，该类包含如下字段：")]),a._v(" "),s("ul",[s("li",[a._v("protected long queryId")]),a._v(" "),s("li",[a._v("private long interval")]),a._v(" "),s("li",[a._v("private long slidingStep")])]),a._v(" "),s("p",[a._v("以下两个字段针对整个查询，时间段为左闭右开，即 "),s("code",[a._v("[startTime, endTime)")]),a._v("：")]),a._v(" "),s("ul",[s("li",[a._v("private long startTime")]),a._v(" "),s("li",[a._v("private long endTime")])]),a._v(" "),s("p",[a._v("以下字段针对当前分段，时间段为左闭右开，即 "),s("code",[a._v("[curStartTime, curEndTime)")])]),a._v(" "),s("ul",[s("li",[a._v("protected long curStartTime;")]),a._v(" "),s("li",[a._v("protected long curEndTime;")]),a._v(" "),s("li",[a._v("private int usedIndex;")]),a._v(" "),s("li",[a._v("protected boolean hasCachedTimeInterval;")])]),a._v(" "),s("p",[s("code",[a._v("GroupByEngineDataSet")]),a._v(" 的核心方法很容易，首先根据是否有缓存的时间段判断是否有下一分段，有则返回 "),s("code",[a._v("true")]),a._v("；如果没有就计算分段开始时间，将 "),s("code",[a._v("usedIndex")]),a._v(" 增加1。如果分段开始时间已经超过了查询结束时间，返回 "),s("code",[a._v("false")]),a._v("，否则计算查询结束时间，将 "),s("code",[a._v("hasCachedTimeInterval")]),a._v(" 置为"),s("code",[a._v("true")]),a._v("，并返回 "),s("code",[a._v("true")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("protected boolean hasNextWithoutConstraint() {\n  if (hasCachedTimeInterval) {\n    return true;\n  }\n\n  curStartTime = usedIndex * slidingStep + startTime;\n  usedIndex++;\n  if (curStartTime < endTime) {\n    hasCachedTimeInterval = true;\n    curEndTime = Math.min(curStartTime + interval, endTime);\n    return true;\n  } else {\n    return false;\n  }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h2",{attrs:{id:"不带值过滤条件的降采样查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不带值过滤条件的降采样查询"}},[a._v("#")]),a._v(" 不带值过滤条件的降采样查询")]),a._v(" "),s("p",[a._v("不带值过滤条件的降采样查询逻辑主要在 "),s("code",[a._v("GroupByWithoutValueFilterDataSet")]),a._v(" 类中，该类继承了 "),s("code",[a._v("GroupByEngineDataSet")]),a._v("。")]),a._v(" "),s("p",[a._v("该类有如下关键字段：")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("private Map<Path, GroupByExecutor> pathExecutors 针对于相同 "),s("code",[a._v("Path")]),a._v(" 的聚合函数进行归类，并封装成 "),s("code",[a._v("GroupByExecutor")]),a._v(" ,\n"),s("code",[a._v("GroupByExecutor")]),a._v(" 封装了每个 "),s("code",[a._v("Path")]),a._v(" 的数据计算逻辑和方法，在后面介绍")])]),a._v(" "),s("li",[s("p",[a._v("private TimeRange timeRange 将每次计算的时间区间封装成对象，用于判断 "),s("code",[a._v("Statistics")]),a._v(" 是否可以直接参与计算")])]),a._v(" "),s("li",[s("p",[a._v("private Filter timeFilter   将用户定义的查询区间生成为 "),s("code",[a._v("Filter")]),a._v(" 对象，用来过滤可用的"),s("code",[a._v("文件")]),a._v("、"),s("code",[a._v("chunk")]),a._v("、"),s("code",[a._v("page")])])])]),a._v(" "),s("p",[a._v("首先，在初始化 "),s("code",[a._v("initGroupBy()")]),a._v(" 方法中，根据表达式计算出 "),s("code",[a._v("timeFilter")]),a._v("，并为每个 "),s("code",[a._v("path")]),a._v(" 生成 "),s("code",[a._v("GroupByExecutor")]),a._v(" 。")]),a._v(" "),s("p",[s("code",[a._v("nextWithoutConstraint()")]),a._v(" 方法通过调用 "),s("code",[a._v("GroupByExecutor.calcResult()")]),a._v(" 方法计算出每个 "),s("code",[a._v("Path")]),a._v(" 内的所有聚合方法的聚合值 "),s("code",[a._v("aggregateResults")]),a._v("。\n以下方法用于将结果列表转化为 RowRecord，需要注意列表中没有结果时， RowRecord 中添加 "),s("code",[a._v("null")]),a._v("：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("for (AggregateResult res : fields) {\n  if (res == null) {\n    record.addField(null);\n    continue;\n  }\n  record.addField(res.getResult(), res.getResultDataType());\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h3",{attrs:{id:"groupbyexecutor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#groupbyexecutor"}},[a._v("#")]),a._v(" GroupByExecutor")]),a._v(" "),s("p",[a._v("封装了相同 path 下的所有聚合函数的计算方法，该类有如下关键字段：")]),a._v(" "),s("ul",[s("li",[a._v("private IAggregateReader reader 读取当前 "),s("code",[a._v("Path")]),a._v(" 数据用到的 "),s("code",[a._v("SeriesAggregateReader")])]),a._v(" "),s("li",[a._v("private BatchData preCachedData 每次从 "),s("code",[a._v("Reader")]),a._v(" 读取的数据是一批，很有可能会超过当前的时间段，那么这个 "),s("code",[a._v("BatchData")]),a._v(" 就会被缓存留给下一次使用")]),a._v(" "),s("li",[a._v("private List<Pair<AggregateResult, Integer>> results 存储了当前 "),s("code",[a._v("Path")]),a._v(" 里所有的聚合方法，\n例如："),s("code",[a._v("select count(a),sum(a),avg(b)")]),a._v(" ，"),s("code",[a._v("count")]),a._v(" 和 "),s("code",[a._v("sum")]),a._v(" 方法就被存到一起。\n右侧的 "),s("code",[a._v("Integer")]),a._v(" 用于结果集转化为RowRecord之前，需要将其顺序还原为用户查询的顺序。")])]),a._v(" "),s("h4",{attrs:{id:"主要方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要方法"}},[a._v("#")]),a._v(" 主要方法")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("//从 reader 中读取数据，并计算，该类的主方法。\nprivate List<Pair<AggregateResult, Integer>> calcResult() throws IOException, QueryProcessException;\n\n//添加当前 path 的聚合操作\nprivate void addAggregateResult(AggregateResult aggrResult, int index);\n\n//判断当前 path 是否已经完成了所有的聚合计算\nprivate boolean isEndCalc();\n\n//从上次计算没有使用完缓存的 BatchData 中计算结果\nprivate boolean calcFromCacheData() throws IOException;\n\n//使用 BatchData 计算\nprivate void calcFromBatch(BatchData batchData) throws IOException;\n\n//使用 Page 或 Chunk 的 Statistics 信息直接计算结果\nprivate void calcFromStatistics(Statistics statistics) throws QueryProcessException;\n\n//清空所有计算结果\nprivate void resetAggregateResults();\n\n//遍历并计算 page 中的数据\nprivate boolean readAndCalcFromPage() throws IOException, QueryProcessException;\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])]),s("p",[s("code",[a._v("GroupByExecutor")]),a._v(" 中因为相同 "),s("code",[a._v("path")]),a._v(" 的不同聚合函数使用的数据是相同的，所以在入口方法 "),s("code",[a._v("calcResult")]),a._v(" 中负责读取该 "),s("code",[a._v("Path")]),a._v(" 的所有数据,\n取出来的数据再调用 "),s("code",[a._v("calcFromBatch")]),a._v(" 方法完成遍历所有聚合函数对 "),s("code",[a._v("BatchData")]),a._v(" 的计算。")]),a._v(" "),s("p",[s("code",[a._v("calcResult")]),a._v(" 方法返回当前 Path 下的所有AggregateResult，以及当前聚合值在用户查询顺序里的位置，其主要逻辑：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("//把上次遗留的数据先做计算，如果能直接获得结果就结束计算\nif (calcFromCacheData()) {\n    return results;\n}\n\n//因为一个chunk是包含多个page的，那么必须先使用完当前chunk的page，再打开下一个chunk\nif (readAndCalcFromPage()) {\n    return results;\n}\n\n//遗留的数据如果计算完了就要打开新的chunk继续计算\nwhile (reader.hasNextChunk()) {\n    Statistics chunkStatistics = reader.currentChunkStatistics();\n      // 判断能否使用 Statistics，并执行计算\n       ....\n      // 跳过当前chunk\n      reader.skipCurrentChunk();\n      // 如果已经获取到了所有结果就结束计算\n      if (isEndCalc()) {\n        return true;\n      }\n      continue;\n    }\n    //如果不能使用 chunkStatistics 就需要使用page数据计算\n    if (readAndCalcFromPage()) {\n      return results;\n    }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br")])]),s("p",[s("code",[a._v("readAndCalcFromPage")]),a._v(" 方法是从当前打开的chunk中获取page的数据，并计算聚合结果。当完成所有计算时返回 true，否则返回 false。主要逻辑：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("while (reader.hasNextPage()) {\n    Statistics pageStatistics = reader.currentPageStatistics();\n    //只有page与其它page不相交时，才能使用 pageStatistics\n    if (pageStatistics != null) {\n        // 判断能否使用 Statistics，并执行计算\n        ....\n        // 跳过当前page\n        reader.skipCurrentPage();\n        // 如果已经获取到了所有结果就结束计算\n        if (isEndCalc()) {\n          return true;\n        }\n        continue;\n      }\n    }\n    // 不能使用 Statistics 时，只能取出所有数据进行计算\n    BatchData batchData = reader.nextPage();\n    if (batchData == null || !batchData.hasCurrent()) {\n      continue;\n    }\n    // 如果刚打开的page就超过时间范围，缓存取出来的数据并直接结束计算\n    if (batchData.currentTime() >= curEndTime) {\n      preCachedData = batchData;\n      return true;\n    }\n    //执行计算\n    calcFromBatch(batchData);\n    ...\n}\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br")])]),s("p",[s("code",[a._v("calcFromBatch")]),a._v(" 方法是对于取出的BatchData数据，遍历所有聚合函数进行计算，主要逻辑为：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("for (Pair<AggregateResult, Integer> result : results) {\n    //如果某个函数已经完成了计算，就不在进行计算了，比如最小值这种计算\n    if (result.left.isCalculatedAggregationResult()) {\n      continue;\n    }\n    // 执行计算\n    ....\n}\n//判断当前的 batchdata 里的数据是否还能被下次使用，如果能则加到缓存中\nif (batchData.getMaxTimestamp() >= curEndTime) {\n    preCachedData = batchData;\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("h2",{attrs:{id:"带值过滤条件的聚合查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#带值过滤条件的聚合查询"}},[a._v("#")]),a._v(" 带值过滤条件的聚合查询")]),a._v(" "),s("p",[a._v("带值过滤条件的降采样查询逻辑主要在 "),s("code",[a._v("GroupByWithValueFilterDataSet")]),a._v(" 类中，该类继承了 "),s("code",[a._v("GroupByEngineDataSet")]),a._v("。")]),a._v(" "),s("p",[a._v("该类有如下关键字段：")]),a._v(" "),s("ul",[s("li",[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("private List<IReaderByTimestamp> allDataReaderList\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("private GroupByPlan groupByPlan")])]),a._v(" "),s("li",[s("p",[a._v("private TimeGenerator timestampGenerator")])]),a._v(" "),s("li",[s("p",[a._v("private long timestamp 用于为下一个 group by 分区缓存 timestamp")])]),a._v(" "),s("li",[s("p",[a._v("private boolean hasCachedTimestamp 用于判断是否有为下一个 group by 分区缓存 timestamp")])]),a._v(" "),s("li",[s("p",[a._v("private int timeStampFetchSize 是 group by 计算 batch 的大小")])])]),a._v(" "),s("p",[a._v("首先，在初始化 "),s("code",[a._v("initGroupBy()")]),a._v(" 方法中，根据表达式创建 "),s("code",[a._v("timestampGenerator")]),a._v("；然后为每一个时间序列创建一个 "),s("code",[a._v("SeriesReaderByTimestamp")]),a._v("，放到 "),s("code",[a._v("allDataReaderList")]),a._v("列表中")]),a._v(" "),s("p",[a._v("初始化完成后，调用 "),s("code",[a._v("nextWithoutConstraint()")]),a._v(" 方法更新结果。如果有为下一个 group by 分区缓存 timestamp，且时间符合要求，则将其加入 "),s("code",[a._v("timestampArray")]),a._v(" 中，否则直接返回 "),s("code",[a._v("aggregateResultList")]),a._v(" 结果；在没有为下一个 group by 分区缓存 timestamp 的情况下，使用 "),s("code",[a._v("timestampGenerator")]),a._v(" 进行遍历：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("while (timestampGenerator.hasNext()) {\n  // 调用 constructTimeArrayForOneCal() 方法，得到 timestamp 列表\n  timeArrayLength = constructTimeArrayForOneCal(timestampArray, timeArrayLength);\n\n  // 调用 updateResultUsingTimestamps() 方法，使用 timestamp 列表计算聚合结果\n  for (int i = 0; i < paths.size(); i++) {\n    aggregateResultList.get(i).updateResultUsingTimestamps(\n        timestampArray, timeArrayLength, allDataReaderList.get(i));\n  }\n\n  timeArrayLength = 0;\n  // 判断是否到结束\n  if (timestamp >= curEndTime) {\n    hasCachedTimestamp = true;\n    break;\n  }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("p",[a._v("其中的 "),s("code",[a._v("constructTimeArrayForOneCal()")]),a._v(" 方法遍历 timestampGenerator 构建 timestamp 列表：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("for (int cnt = 1; cnt < timeStampFetchSize && timestampGenerator.hasNext(); cnt++) {\n  timestamp = timestampGenerator.next();\n  if (timestamp < curEndTime) {\n    timestampArray[timeArrayLength++] = timestamp;\n  } else {\n    hasCachedTimestamp = true;\n    break;\n  }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])])])}],!1,null,null,null);e.default=n.exports}}]);