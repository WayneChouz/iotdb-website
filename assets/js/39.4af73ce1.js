(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{496:function(e,a,t){"use strict";t.r(a);var s=t(49),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"modification-handling-in-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modification-handling-in-query"}},[e._v("#")]),e._v(" Modification handling in query")]),e._v(" "),t("p",[e._v("Background:")]),e._v(" "),t("p",[e._v("Data deletion only record a mods file for disk data, the data is not really deleted. Therefore, we need to consider the modifications in query.")]),e._v(" "),t("p",[e._v("If a TsFile is influenced by deletion, a deletion operation will be recorded in its mods file. The log contains 3 parts: path, deleted time, version")]),e._v(" "),t("h2",{attrs:{id:"related-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#related-class"}},[e._v("#")]),e._v(" Related class")]),e._v(" "),t("p",[e._v("mods file: org.apache.iotdb.db.engine.modification.ModificationFile")]),e._v(" "),t("p",[e._v("deletion operation: org.apache.iotdb.db.engine.modification.Modification")]),e._v(" "),t("h2",{attrs:{id:"query-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-process"}},[e._v("#")]),e._v(" Query process")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7240743/78339324-deca5d80-75c6-11ea-8fa8-dbd94232b756.png",alt:""}})]),e._v(" "),t("p",[e._v("Each timeseries is treated independently in query process. For each timeseries, there are 5 levels: TsFileResource -> TimeseriesMetadata -> ChunkMetadata -> IPageReader -> BatchData")]),e._v(" "),t("ul",[t("li",[e._v("TsFileResource -> TimeseriesMetadata")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Set the statistics in TimeseriesMetadata unusable if the timeseries contains deletion operations \nFileLoaderUtils.loadTimeseriesMetadata()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[e._v("TimeseriesMetadata -> List<ChunkMetadata>")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// For each ChunkMetadata, find the largest timestamp in all deletion operations whose version is larger than it. Set deleted time to ChunkMetadata. \n// set the statistics in ChunkMetadata is unusable if it is affected by deletion\nFileLoaderUtils.loadChunkMetadataList()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("E.g., the got ChunkMetadatas are:")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7240743/78339335-e427a800-75c6-11ea-815f-16dc5b6ebfa3.png",alt:""}})]),e._v(" "),t("ul",[t("li",[e._v("ChunkMetadata -> List<IPageReader>")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// Skip the fully deleted page, set deleteAt into PageReader，Set the page statistics unusalbe if it is affected by deletion\nFileLoaderUtils.loadPageReaderList()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("ul",[t("li",[e._v("IPageReader -> BatchData")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// For disk page, skip the data points that be deleted and filterd out. For memory data, skip data points be filtered out.\nIPageReader.getAllSatisfiedPageData()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=i.exports}}]);