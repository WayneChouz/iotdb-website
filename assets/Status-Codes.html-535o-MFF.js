import{_ as t,o as e,c as l,a as d,f as i}from"./app-dNeAgOFp.js";const a={},n=i(`<h1 id="status-codes" tabindex="-1"><a class="header-anchor" href="#status-codes" aria-hidden="true">#</a> Status Codes</h1><p>A sample solution as IoTDB requires registering the time series first before writing data is:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try {
    writeData();
} catch (SQLException e) {
  // the most case is that the time series does not exist
  if (e.getMessage().contains(&quot;exist&quot;)) {
      //However, using the content of the error message is not so efficient
      registerTimeSeries();
      //write data once again
      writeData();
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With Status Code, instead of writing codes like <code>if (e.getErrorMessage().contains(&quot;exist&quot;))</code>, we can simply use <code>e.getErrorCode() == TSStatusCode.TIME_SERIES_NOT_EXIST_ERROR.getStatusCode()</code>.</p><p>Here is a list of Status Code and related message:</p><table><thead><tr><th style="text-align:left;">Status Code</th><th style="text-align:left;">Status Type</th><th style="text-align:left;">Meanings</th></tr></thead><tbody><tr><td style="text-align:left;">200</td><td style="text-align:left;">SUCCESS_STATUS</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">201</td><td style="text-align:left;">INCOMPATIBLE_VERSION</td><td style="text-align:left;">Incompatible version</td></tr><tr><td style="text-align:left;">202</td><td style="text-align:left;">CONFIGURATION_ERROR</td><td style="text-align:left;">Configuration error</td></tr><tr><td style="text-align:left;">203</td><td style="text-align:left;">START_UP_ERROR</td><td style="text-align:left;">Meet error while starting</td></tr><tr><td style="text-align:left;">204</td><td style="text-align:left;">SHUT_DOWN_ERROR</td><td style="text-align:left;">Meet error while shutdown</td></tr><tr><td style="text-align:left;">300</td><td style="text-align:left;">UNSUPPORTED_OPERATION</td><td style="text-align:left;">Unsupported operation</td></tr><tr><td style="text-align:left;">301</td><td style="text-align:left;">EXECUTE_STATEMENT_ERROR</td><td style="text-align:left;">Execute statement error</td></tr><tr><td style="text-align:left;">302</td><td style="text-align:left;">MULTIPLE_ERROR</td><td style="text-align:left;">Meet error when executing multiple statements</td></tr><tr><td style="text-align:left;">303</td><td style="text-align:left;">ILLEGAL_PARAMETER</td><td style="text-align:left;">Parameter is illegal</td></tr><tr><td style="text-align:left;">304</td><td style="text-align:left;">OVERLAP_WITH_EXISTING_TASK</td><td style="text-align:left;">Current task has some conflict with existing tasks</td></tr><tr><td style="text-align:left;">305</td><td style="text-align:left;">INTERNAL_SERVER_ERROR</td><td style="text-align:left;">Internal server error</td></tr><tr><td style="text-align:left;">306</td><td style="text-align:left;">DISPATCH_ERROR</td><td style="text-align:left;">Meet error while dispatching</td></tr><tr><td style="text-align:left;">400</td><td style="text-align:left;">REDIRECTION_RECOMMEND</td><td style="text-align:left;">Recommend Client redirection</td></tr><tr><td style="text-align:left;">500</td><td style="text-align:left;">DATABASE_NOT_EXIST</td><td style="text-align:left;">Database does not exist</td></tr><tr><td style="text-align:left;">501</td><td style="text-align:left;">DATABASE_ALREADY_EXISTS</td><td style="text-align:left;">Database already exist</td></tr><tr><td style="text-align:left;">502</td><td style="text-align:left;">SERIES_OVERFLOW</td><td style="text-align:left;">Series number exceeds the threshold</td></tr><tr><td style="text-align:left;">503</td><td style="text-align:left;">TIMESERIES_ALREADY_EXIST</td><td style="text-align:left;">Timeseries already exists</td></tr><tr><td style="text-align:left;">504</td><td style="text-align:left;">TIMESERIES_IN_BLACK_LIST</td><td style="text-align:left;">Timeseries is being deleted</td></tr><tr><td style="text-align:left;">505</td><td style="text-align:left;">ALIAS_ALREADY_EXIST</td><td style="text-align:left;">Alias already exists</td></tr><tr><td style="text-align:left;">506</td><td style="text-align:left;">PATH_ALREADY_EXIST</td><td style="text-align:left;">Path already exists</td></tr><tr><td style="text-align:left;">507</td><td style="text-align:left;">METADATA_ERROR</td><td style="text-align:left;">Meet error when dealing with metadata</td></tr><tr><td style="text-align:left;">508</td><td style="text-align:left;">PATH_NOT_EXIST</td><td style="text-align:left;">Path does not exist</td></tr><tr><td style="text-align:left;">509</td><td style="text-align:left;">ILLEGAL_PATH</td><td style="text-align:left;">Illegal path</td></tr><tr><td style="text-align:left;">510</td><td style="text-align:left;">CREATE_TEMPLATE_ERROR</td><td style="text-align:left;">Create schema template error</td></tr><tr><td style="text-align:left;">511</td><td style="text-align:left;">DUPLICATED_TEMPLATE</td><td style="text-align:left;">Schema template is duplicated</td></tr><tr><td style="text-align:left;">512</td><td style="text-align:left;">UNDEFINED_TEMPLATE</td><td style="text-align:left;">Schema template is not defined</td></tr><tr><td style="text-align:left;">513</td><td style="text-align:left;">TEMPLATE_NOT_SET</td><td style="text-align:left;">Schema template is not set</td></tr><tr><td style="text-align:left;">514</td><td style="text-align:left;">DIFFERENT_TEMPLATE</td><td style="text-align:left;">Template is not consistent</td></tr><tr><td style="text-align:left;">515</td><td style="text-align:left;">TEMPLATE_IS_IN_USE</td><td style="text-align:left;">Template is in use</td></tr><tr><td style="text-align:left;">516</td><td style="text-align:left;">TEMPLATE_INCOMPATIBLE</td><td style="text-align:left;">Template is not compatible</td></tr><tr><td style="text-align:left;">517</td><td style="text-align:left;">SEGMENT_NOT_FOUND</td><td style="text-align:left;">Segment not found</td></tr><tr><td style="text-align:left;">518</td><td style="text-align:left;">PAGE_OUT_OF_SPACE</td><td style="text-align:left;">No enough space on schema page</td></tr><tr><td style="text-align:left;">519</td><td style="text-align:left;">RECORD_DUPLICATED</td><td style="text-align:left;">Record is duplicated</td></tr><tr><td style="text-align:left;">520</td><td style="text-align:left;">SEGMENT_OUT_OF_SPACE</td><td style="text-align:left;">No enough space on schema segment</td></tr><tr><td style="text-align:left;">521</td><td style="text-align:left;">SCHEMA_FILE_NOT_EXISTS</td><td style="text-align:left;">SchemaFile does not exist</td></tr><tr><td style="text-align:left;">522</td><td style="text-align:left;">OVERSIZE_RECORD</td><td style="text-align:left;">Size of record exceeds the threshold of page of SchemaFile</td></tr><tr><td style="text-align:left;">523</td><td style="text-align:left;">SCHEMA_FILE_REDO_LOG_BROKEN</td><td style="text-align:left;">SchemaFile redo log has broken</td></tr><tr><td style="text-align:left;">524</td><td style="text-align:left;">TEMPLATE_NOT_ACTIVATED</td><td style="text-align:left;">Schema template is not activated</td></tr><tr><td style="text-align:left;">600</td><td style="text-align:left;">SYSTEM_READ_ONLY</td><td style="text-align:left;">IoTDB system is read only</td></tr><tr><td style="text-align:left;">601</td><td style="text-align:left;">STORAGE_ENGINE_ERROR</td><td style="text-align:left;">Storage engine related error</td></tr><tr><td style="text-align:left;">602</td><td style="text-align:left;">STORAGE_ENGINE_NOT_READY</td><td style="text-align:left;">The storage engine is in recovery, not ready fore accepting read/write operation</td></tr><tr><td style="text-align:left;">603</td><td style="text-align:left;">DATAREGION_PROCESS_ERROR</td><td style="text-align:left;">DataRegion related error</td></tr><tr><td style="text-align:left;">604</td><td style="text-align:left;">TSFILE_PROCESSOR_ERROR</td><td style="text-align:left;">TsFile processor related error</td></tr><tr><td style="text-align:left;">605</td><td style="text-align:left;">WRITE_PROCESS_ERROR</td><td style="text-align:left;">Writing data related error</td></tr><tr><td style="text-align:left;">606</td><td style="text-align:left;">WRITE_PROCESS_REJECT</td><td style="text-align:left;">Writing data rejected error</td></tr><tr><td style="text-align:left;">607</td><td style="text-align:left;">OUT_OF_TTL</td><td style="text-align:left;">Insertion time is less than TTL time bound</td></tr><tr><td style="text-align:left;">608</td><td style="text-align:left;">COMPACTION_ERROR</td><td style="text-align:left;">Meet error while merging</td></tr><tr><td style="text-align:left;">609</td><td style="text-align:left;">ALIGNED_TIMESERIES_ERROR</td><td style="text-align:left;">Meet error in aligned timeseries</td></tr><tr><td style="text-align:left;">610</td><td style="text-align:left;">WAL_ERROR</td><td style="text-align:left;">WAL error</td></tr><tr><td style="text-align:left;">611</td><td style="text-align:left;">DISK_SPACE_INSUFFICIENT</td><td style="text-align:left;">Disk space is insufficient</td></tr><tr><td style="text-align:left;">700</td><td style="text-align:left;">SQL_PARSE_ERROR</td><td style="text-align:left;">Meet error while parsing SQL</td></tr><tr><td style="text-align:left;">701</td><td style="text-align:left;">SEMANTIC_ERROR</td><td style="text-align:left;">SQL semantic error</td></tr><tr><td style="text-align:left;">702</td><td style="text-align:left;">GENERATE_TIME_ZONE_ERROR</td><td style="text-align:left;">Meet error while generating time zone</td></tr><tr><td style="text-align:left;">703</td><td style="text-align:left;">SET_TIME_ZONE_ERROR</td><td style="text-align:left;">Meet error while setting time zone</td></tr><tr><td style="text-align:left;">704</td><td style="text-align:left;">QUERY_NOT_ALLOWED</td><td style="text-align:left;">Query statements are not allowed error</td></tr><tr><td style="text-align:left;">705</td><td style="text-align:left;">LOGICAL_OPERATOR_ERROR</td><td style="text-align:left;">Logical operator related error</td></tr><tr><td style="text-align:left;">706</td><td style="text-align:left;">LOGICAL_OPTIMIZE_ERROR</td><td style="text-align:left;">Logical optimize related error</td></tr><tr><td style="text-align:left;">707</td><td style="text-align:left;">UNSUPPORTED_FILL_TYPE</td><td style="text-align:left;">Unsupported fill type related error</td></tr><tr><td style="text-align:left;">708</td><td style="text-align:left;">QUERY_PROCESS_ERROR</td><td style="text-align:left;">Query process related error</td></tr><tr><td style="text-align:left;">709</td><td style="text-align:left;">MPP_MEMORY_NOT_ENOUGH</td><td style="text-align:left;">Not enough memory for task execution in MPP</td></tr><tr><td style="text-align:left;">710</td><td style="text-align:left;">CLOSE_OPERATION_ERROR</td><td style="text-align:left;">Meet error in close operation</td></tr><tr><td style="text-align:left;">711</td><td style="text-align:left;">TSBLOCK_SERIALIZE_ERROR</td><td style="text-align:left;">TsBlock serialization error</td></tr><tr><td style="text-align:left;">712</td><td style="text-align:left;">INTERNAL_REQUEST_TIME_OUT</td><td style="text-align:left;">MPP Operation timeout</td></tr><tr><td style="text-align:left;">713</td><td style="text-align:left;">INTERNAL_REQUEST_RETRY_ERROR</td><td style="text-align:left;">Internal operation retry failed</td></tr><tr><td style="text-align:left;">714</td><td style="text-align:left;">NO_SUCH_QUERY</td><td style="text-align:left;">Cannot find target query</td></tr><tr><td style="text-align:left;">715</td><td style="text-align:left;">QUERY_WAS_KILLED</td><td style="text-align:left;">Query was killed when execute</td></tr><tr><td style="text-align:left;">800</td><td style="text-align:left;">UNINITIALIZED_AUTH_ERROR</td><td style="text-align:left;">Failed to initialize auth module</td></tr><tr><td style="text-align:left;">801</td><td style="text-align:left;">WRONG_LOGIN_PASSWORD</td><td style="text-align:left;">Username or password is wrong</td></tr><tr><td style="text-align:left;">802</td><td style="text-align:left;">NOT_LOGIN</td><td style="text-align:left;">Not login</td></tr><tr><td style="text-align:left;">803</td><td style="text-align:left;">NO_PERMISSION</td><td style="text-align:left;">No permisstion to operate</td></tr><tr><td style="text-align:left;">804</td><td style="text-align:left;">USER_NOT_EXIST</td><td style="text-align:left;">User not exists</td></tr><tr><td style="text-align:left;">805</td><td style="text-align:left;">USER_ALREADY_EXIST</td><td style="text-align:left;">User already exists</td></tr><tr><td style="text-align:left;">806</td><td style="text-align:left;">USER_ALREADY_HAS_ROLE</td><td style="text-align:left;">User already has target role</td></tr><tr><td style="text-align:left;">807</td><td style="text-align:left;">USER_NOT_HAS_ROLE</td><td style="text-align:left;">User not has target role</td></tr><tr><td style="text-align:left;">808</td><td style="text-align:left;">ROLE_NOT_EXIST</td><td style="text-align:left;">Role not exists</td></tr><tr><td style="text-align:left;">809</td><td style="text-align:left;">ROLE_ALREADY_EXIST</td><td style="text-align:left;">Role already exists</td></tr><tr><td style="text-align:left;">810</td><td style="text-align:left;">ALREADY_HAS_PRIVILEGE</td><td style="text-align:left;">Already has privilege</td></tr><tr><td style="text-align:left;">811</td><td style="text-align:left;">NOT_HAS_PRIVILEGE</td><td style="text-align:left;">Not has privilege</td></tr><tr><td style="text-align:left;">812</td><td style="text-align:left;">CLEAR_PERMISSION_CACHE_ERROR</td><td style="text-align:left;">Failed to clear permission cache</td></tr><tr><td style="text-align:left;">813</td><td style="text-align:left;">UNKNOWN_AUTH_PRIVILEGE</td><td style="text-align:left;">Unknown auth privilege</td></tr><tr><td style="text-align:left;">814</td><td style="text-align:left;">UNSUPPORTED_AUTH_OPERATION</td><td style="text-align:left;">Unsupported auth operation</td></tr><tr><td style="text-align:left;">815</td><td style="text-align:left;">AUTH_IO_EXCEPTION</td><td style="text-align:left;">IO Exception in auth module</td></tr><tr><td style="text-align:left;">900</td><td style="text-align:left;">MIGRATE_REGION_ERROR</td><td style="text-align:left;">Error when migrate region</td></tr><tr><td style="text-align:left;">901</td><td style="text-align:left;">CREATE_REGION_ERROR</td><td style="text-align:left;">Create region error</td></tr><tr><td style="text-align:left;">902</td><td style="text-align:left;">DELETE_REGION_ERROR</td><td style="text-align:left;">Delete region error</td></tr><tr><td style="text-align:left;">903</td><td style="text-align:left;">PARTITION_CACHE_UPDATE_ERROR</td><td style="text-align:left;">Update partition cache failed</td></tr><tr><td style="text-align:left;">904</td><td style="text-align:left;">CONSENSUS_NOT_INITIALIZED</td><td style="text-align:left;">Consensus is not initialized and cannot provide service</td></tr><tr><td style="text-align:left;">905</td><td style="text-align:left;">REGION_LEADER_CHANGE_ERROR</td><td style="text-align:left;">Region leader migration failed</td></tr><tr><td style="text-align:left;">906</td><td style="text-align:left;">NO_AVAILABLE_REGION_GROUP</td><td style="text-align:left;">Cannot find an available region group</td></tr><tr><td style="text-align:left;">907</td><td style="text-align:left;">LACK_DATA_PARTITION_ALLOCATION</td><td style="text-align:left;">Lacked some data partition allocation result in the response</td></tr><tr><td style="text-align:left;">1000</td><td style="text-align:left;">DATANODE_ALREADY_REGISTERED</td><td style="text-align:left;">DataNode already registered in cluster</td></tr><tr><td style="text-align:left;">1001</td><td style="text-align:left;">NO_ENOUGH_DATANODE</td><td style="text-align:left;">The number of DataNode is not enough, cannot remove DataNode or create enough replication</td></tr><tr><td style="text-align:left;">1002</td><td style="text-align:left;">ADD_CONFIGNODE_ERROR</td><td style="text-align:left;">Add ConfigNode error</td></tr><tr><td style="text-align:left;">1003</td><td style="text-align:left;">REMOVE_CONFIGNODE_ERROR</td><td style="text-align:left;">Remove ConfigNode error</td></tr><tr><td style="text-align:left;">1004</td><td style="text-align:left;">DATANODE_NOT_EXIST</td><td style="text-align:left;">DataNode not exist error</td></tr><tr><td style="text-align:left;">1005</td><td style="text-align:left;">DATANODE_STOP_ERROR</td><td style="text-align:left;">DataNode stop error</td></tr><tr><td style="text-align:left;">1006</td><td style="text-align:left;">REMOVE_DATANODE_ERROR</td><td style="text-align:left;">Remove datanode failed</td></tr><tr><td style="text-align:left;">1007</td><td style="text-align:left;">REGISTER_DATANODE_WITH_WRONG_ID</td><td style="text-align:left;">The DataNode to be registered has incorrect register id</td></tr><tr><td style="text-align:left;">1008</td><td style="text-align:left;">CAN_NOT_CONNECT_DATANODE</td><td style="text-align:left;">Can not connect to DataNode</td></tr><tr><td style="text-align:left;">1100</td><td style="text-align:left;">LOAD_FILE_ERROR</td><td style="text-align:left;">Meet error while loading file</td></tr><tr><td style="text-align:left;">1101</td><td style="text-align:left;">LOAD_PIECE_OF_TSFILE_ERROR</td><td style="text-align:left;">Error when load a piece of TsFile when loading</td></tr><tr><td style="text-align:left;">1102</td><td style="text-align:left;">DESERIALIZE_PIECE_OF_TSFILE_ERROR</td><td style="text-align:left;">Error when deserialize a piece of TsFile</td></tr><tr><td style="text-align:left;">1103</td><td style="text-align:left;">SYNC_CONNECTION_ERROR</td><td style="text-align:left;">Sync connection error</td></tr><tr><td style="text-align:left;">1104</td><td style="text-align:left;">SYNC_FILE_REDIRECTION_ERROR</td><td style="text-align:left;">Sync TsFile redirection error</td></tr><tr><td style="text-align:left;">1105</td><td style="text-align:left;">SYNC_FILE_ERROR</td><td style="text-align:left;">Sync TsFile error</td></tr><tr><td style="text-align:left;">1106</td><td style="text-align:left;">CREATE_PIPE_SINK_ERROR</td><td style="text-align:left;">Failed to create a PIPE sink</td></tr><tr><td style="text-align:left;">1107</td><td style="text-align:left;">PIPE_ERROR</td><td style="text-align:left;">PIPE error</td></tr><tr><td style="text-align:left;">1108</td><td style="text-align:left;">PIPESERVER_ERROR</td><td style="text-align:left;">PIPE server error</td></tr><tr><td style="text-align:left;">1109</td><td style="text-align:left;">VERIFY_METADATA_ERROR</td><td style="text-align:left;">Meet error in validate timeseries schema</td></tr><tr><td style="text-align:left;">1200</td><td style="text-align:left;">UDF_LOAD_CLASS_ERROR</td><td style="text-align:left;">Error when loading UDF class</td></tr><tr><td style="text-align:left;">1201</td><td style="text-align:left;">UDF_DOWNLOAD_ERROR</td><td style="text-align:left;">DataNode cannot download UDF from ConfigNode</td></tr><tr><td style="text-align:left;">1202</td><td style="text-align:left;">CREATE_UDF_ON_DATANODE_ERROR</td><td style="text-align:left;">Error when create UDF on DataNode</td></tr><tr><td style="text-align:left;">1203</td><td style="text-align:left;">DROP_UDF_ON_DATANODE_ERROR</td><td style="text-align:left;">Error when drop a UDF on DataNode</td></tr><tr><td style="text-align:left;">1300</td><td style="text-align:left;">CREATE_TRIGGER_ERROR</td><td style="text-align:left;">ConfigNode create trigger error</td></tr><tr><td style="text-align:left;">1301</td><td style="text-align:left;">DROP_TRIGGER_ERROR</td><td style="text-align:left;">ConfigNode delete Trigger error</td></tr><tr><td style="text-align:left;">1302</td><td style="text-align:left;">TRIGGER_FIRE_ERROR</td><td style="text-align:left;">Error when firing trigger</td></tr><tr><td style="text-align:left;">1303</td><td style="text-align:left;">TRIGGER_LOAD_CLASS_ERROR</td><td style="text-align:left;">Error when load class of trigger</td></tr><tr><td style="text-align:left;">1304</td><td style="text-align:left;">TRIGGER_DOWNLOAD_ERROR</td><td style="text-align:left;">Error when download trigger from ConfigNode</td></tr><tr><td style="text-align:left;">1305</td><td style="text-align:left;">CREATE_TRIGGER_INSTANCE_ERROR</td><td style="text-align:left;">Error when create trigger instance</td></tr><tr><td style="text-align:left;">1306</td><td style="text-align:left;">ACTIVE_TRIGGER_INSTANCE_ERROR</td><td style="text-align:left;">Error when activate trigger instance</td></tr><tr><td style="text-align:left;">1307</td><td style="text-align:left;">DROP_TRIGGER_INSTANCE_ERROR</td><td style="text-align:left;">Error when drop trigger instance</td></tr><tr><td style="text-align:left;">1308</td><td style="text-align:left;">UPDATE_TRIGGER_LOCATION_ERROR</td><td style="text-align:left;">Error when move stateful trigger to new datanode</td></tr><tr><td style="text-align:left;">1400</td><td style="text-align:left;">NO_SUCH_CQ</td><td style="text-align:left;">CQ task does not exist</td></tr><tr><td style="text-align:left;">1401</td><td style="text-align:left;">CQ_ALREADY_ACTIVE</td><td style="text-align:left;">CQ is already active</td></tr><tr><td style="text-align:left;">1402</td><td style="text-align:left;">CQ_AlREADY_EXIST</td><td style="text-align:left;">CQ is already exist</td></tr><tr><td style="text-align:left;">1403</td><td style="text-align:left;">CQ_UPDATE_LAST_EXEC_TIME_ERROR</td><td style="text-align:left;">CQ update last execution time failed</td></tr></tbody></table><blockquote><p>All exceptions are refactored in the latest version by extracting uniform message into exception classes. Different error codes are added to all exceptions. When an exception is caught and a higher-level exception is thrown, the error code will keep and pass so that users will know the detailed error reason.<br> A base exception class &quot;ProcessException&quot; is also added to be extended by all exceptions.</p></blockquote>`,7);function r(s,g){return e(),l("div",null,[d(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),n])}const x=t(a,[["render",r],["__file","Status-Codes.html.vue"]]);export{x as default};
