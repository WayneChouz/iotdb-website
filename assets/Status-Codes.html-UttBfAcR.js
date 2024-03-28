import{_ as t,o as e,c as l,a as d,f as i}from"./app-dNeAgOFp.js";const n={},r=i(`<h1 id="status-codes" tabindex="-1"><a class="header-anchor" href="#status-codes" aria-hidden="true">#</a> Status Codes</h1><p><strong>Status Code</strong> is introduced in the latest version. A sample solution as IoTDB requires registering the time series first before writing data is:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>try {
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With Status Code, instead of writing codes like <code>if (e.getErrorMessage().contains(&quot;exist&quot;))</code>, we can simply use <code>e.getErrorCode() == TSStatusCode.TIME_SERIES_NOT_EXIST_ERROR.getStatusCode()</code>.</p><p>Here is a list of Status Code and related message:</p><table><thead><tr><th style="text-align:left;">Status Code</th><th style="text-align:left;">Status Type</th><th style="text-align:left;">Meanings</th></tr></thead><tbody><tr><td style="text-align:left;">200</td><td style="text-align:left;">SUCCESS_STATUS</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">201</td><td style="text-align:left;">STILL_EXECUTING_STATUS</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">202</td><td style="text-align:left;">INVALID_HANDLE_STATUS</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">203</td><td style="text-align:left;">INCOMPATIBLE_VERSION</td><td style="text-align:left;">Incompatible version</td></tr><tr><td style="text-align:left;">298</td><td style="text-align:left;">NODE_DELETE_FAILED_ERROR</td><td style="text-align:left;">Failed while deleting node</td></tr><tr><td style="text-align:left;">299</td><td style="text-align:left;">ALIAS_ALREADY_EXIST_ERROR</td><td style="text-align:left;">Alias already exists</td></tr><tr><td style="text-align:left;">300</td><td style="text-align:left;">PATH_ALREADY_EXIST_ERROR</td><td style="text-align:left;">Path already exists</td></tr><tr><td style="text-align:left;">301</td><td style="text-align:left;">PATH_NOT_EXIST_ERROR</td><td style="text-align:left;">Path does not exist</td></tr><tr><td style="text-align:left;">302</td><td style="text-align:left;">UNSUPPORTED_FETCH_METADATA_OPERATION_ERROR</td><td style="text-align:left;">Unsupported fetch metadata operation</td></tr><tr><td style="text-align:left;">303</td><td style="text-align:left;">METADATA_ERROR</td><td style="text-align:left;">Meet error when dealing with metadata</td></tr><tr><td style="text-align:left;">305</td><td style="text-align:left;">OUT_OF_TTL_ERROR</td><td style="text-align:left;">Insertion time is less than TTL time bound</td></tr><tr><td style="text-align:left;">306</td><td style="text-align:left;">CONFIG_ADJUSTER</td><td style="text-align:left;">IoTDB system load is too large</td></tr><tr><td style="text-align:left;">307</td><td style="text-align:left;">MERGE_ERROR</td><td style="text-align:left;">Meet error while merging</td></tr><tr><td style="text-align:left;">308</td><td style="text-align:left;">SYSTEM_CHECK_ERROR</td><td style="text-align:left;">Meet error while system checking</td></tr><tr><td style="text-align:left;">309</td><td style="text-align:left;">SYNC_DEVICE_OWNER_CONFLICT_ERROR</td><td style="text-align:left;">Sync device owners conflict</td></tr><tr><td style="text-align:left;">310</td><td style="text-align:left;">SYNC_CONNECTION_EXCEPTION</td><td style="text-align:left;">Meet error while sync connecting</td></tr><tr><td style="text-align:left;">311</td><td style="text-align:left;">STORAGE_GROUP_PROCESSOR_ERROR</td><td style="text-align:left;">Storage group processor related error</td></tr><tr><td style="text-align:left;">312</td><td style="text-align:left;">STORAGE_GROUP_ERROR</td><td style="text-align:left;">Storage group related error</td></tr><tr><td style="text-align:left;">313</td><td style="text-align:left;">STORAGE_ENGINE_ERROR</td><td style="text-align:left;">Storage engine related error</td></tr><tr><td style="text-align:left;">314</td><td style="text-align:left;">TSFILE_PROCESSOR_ERROR</td><td style="text-align:left;">TsFile processor related error</td></tr><tr><td style="text-align:left;">315</td><td style="text-align:left;">PATH_ILLEGAL</td><td style="text-align:left;">Illegal path</td></tr><tr><td style="text-align:left;">316</td><td style="text-align:left;">LOAD_FILE_ERROR</td><td style="text-align:left;">Meet error while loading file</td></tr><tr><td style="text-align:left;">317</td><td style="text-align:left;">STORAGE_GROUP_NOT_READY</td><td style="text-align:left;">The storage group is in recovery mode, not ready fore accepting read/write operation</td></tr><tr><td style="text-align:left;">400</td><td style="text-align:left;">EXECUTE_STATEMENT_ERROR</td><td style="text-align:left;">Execute statement error</td></tr><tr><td style="text-align:left;">401</td><td style="text-align:left;">SQL_PARSE_ERROR</td><td style="text-align:left;">Meet error while parsing SQL</td></tr><tr><td style="text-align:left;">402</td><td style="text-align:left;">GENERATE_TIME_ZONE_ERROR</td><td style="text-align:left;">Meet error while generating time zone</td></tr><tr><td style="text-align:left;">403</td><td style="text-align:left;">SET_TIME_ZONE_ERROR</td><td style="text-align:left;">Meet error while setting time zone</td></tr><tr><td style="text-align:left;">404</td><td style="text-align:left;">NOT_STORAGE_GROUP_ERROR</td><td style="text-align:left;">Operating object is not a storage group</td></tr><tr><td style="text-align:left;">405</td><td style="text-align:left;">QUERY_NOT_ALLOWED</td><td style="text-align:left;">Query statements are not allowed error</td></tr><tr><td style="text-align:left;">406</td><td style="text-align:left;">AST_FORMAT_ERROR</td><td style="text-align:left;">AST format related error</td></tr><tr><td style="text-align:left;">407</td><td style="text-align:left;">LOGICAL_OPERATOR_ERROR</td><td style="text-align:left;">Logical operator related error</td></tr><tr><td style="text-align:left;">408</td><td style="text-align:left;">LOGICAL_OPTIMIZE_ERROR</td><td style="text-align:left;">Logical optimize related error</td></tr><tr><td style="text-align:left;">409</td><td style="text-align:left;">UNSUPPORTED_FILL_TYPE_ERROR</td><td style="text-align:left;">Unsupported fill type related error</td></tr><tr><td style="text-align:left;">410</td><td style="text-align:left;">PATH_ERROR</td><td style="text-align:left;">Path related error</td></tr><tr><td style="text-align:left;">411</td><td style="text-align:left;">QUERY_PROCESS_ERROR</td><td style="text-align:left;">Query process related error</td></tr><tr><td style="text-align:left;">412</td><td style="text-align:left;">WRITE_PROCESS_ERROR</td><td style="text-align:left;">Writing data related error</td></tr><tr><td style="text-align:left;">413</td><td style="text-align:left;">WRITE_PROCESS_REJECT</td><td style="text-align:left;">Writing data rejected error</td></tr><tr><td style="text-align:left;">414</td><td style="text-align:left;">QUERY_ID_NOT_EXIST</td><td style="text-align:left;">Kill query with non existent queryId</td></tr><tr><td style="text-align:left;">500</td><td style="text-align:left;">INTERNAL_SERVER_ERROR</td><td style="text-align:left;">Internal server error</td></tr><tr><td style="text-align:left;">501</td><td style="text-align:left;">CLOSE_OPERATION_ERROR</td><td style="text-align:left;">Meet error in close operation</td></tr><tr><td style="text-align:left;">502</td><td style="text-align:left;">READ_ONLY_SYSTEM_ERROR</td><td style="text-align:left;">Operating system is read only</td></tr><tr><td style="text-align:left;">503</td><td style="text-align:left;">DISK_SPACE_INSUFFICIENT_ERROR</td><td style="text-align:left;">Disk space is insufficient</td></tr><tr><td style="text-align:left;">504</td><td style="text-align:left;">START_UP_ERROR</td><td style="text-align:left;">Meet error while starting up</td></tr><tr><td style="text-align:left;">505</td><td style="text-align:left;">SHUT_DOWN_ERROR</td><td style="text-align:left;">Meet error while shutdown</td></tr><tr><td style="text-align:left;">506</td><td style="text-align:left;">MULTIPLE_ERROR</td><td style="text-align:left;">Meet error when executing multiple statements</td></tr><tr><td style="text-align:left;">600</td><td style="text-align:left;">WRONG_LOGIN_PASSWORD_ERROR</td><td style="text-align:left;">Username or password is wrong</td></tr><tr><td style="text-align:left;">601</td><td style="text-align:left;">NOT_LOGIN_ERROR</td><td style="text-align:left;">Has not logged in</td></tr><tr><td style="text-align:left;">602</td><td style="text-align:left;">NO_PERMISSION_ERROR</td><td style="text-align:left;">No permissions for this operation, please add privilege</td></tr><tr><td style="text-align:left;">603</td><td style="text-align:left;">UNINITIALIZED_AUTH_ERROR</td><td style="text-align:left;">Uninitialized authorizer</td></tr><tr><td style="text-align:left;">700</td><td style="text-align:left;">PARTITION_NOT_READY</td><td style="text-align:left;">Partition table not ready</td></tr><tr><td style="text-align:left;">701</td><td style="text-align:left;">TIME_OUT</td><td style="text-align:left;">Operation timeout</td></tr><tr><td style="text-align:left;">702</td><td style="text-align:left;">NO_LEADER</td><td style="text-align:left;">No leader</td></tr><tr><td style="text-align:left;">703</td><td style="text-align:left;">UNSUPPORTED_OPERATION</td><td style="text-align:left;">Unsupported operation</td></tr><tr><td style="text-align:left;">704</td><td style="text-align:left;">NODE_READ_ONLY</td><td style="text-align:left;">Node read only</td></tr><tr><td style="text-align:left;">705</td><td style="text-align:left;">CONSISTENCY_FAILURE</td><td style="text-align:left;">Consistency check failure</td></tr><tr><td style="text-align:left;">706</td><td style="text-align:left;">NO_CONNECTION</td><td style="text-align:left;">Can not get connection error</td></tr><tr><td style="text-align:left;">707</td><td style="text-align:left;">NEED_REDIRECTION</td><td style="text-align:left;">Need direction</td></tr><tr><td style="text-align:left;">800</td><td style="text-align:left;">CONFIG_ERROR</td><td style="text-align:left;">Configuration error</td></tr></tbody></table><blockquote><p>All exceptions are refactored in latest version by extracting uniform message into exception classes. Different error codes are added to all exceptions. When an exception is caught and a higher-level exception is thrown, the error code will keep and pass so that users will know the detailed error reason.<br> A base exception class &quot;ProcessException&quot; is also added to be extended by all exceptions.</p></blockquote>`,7);function s(a,g){return e(),l("div",null,[d(`

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

`),r])}const f=t(n,[["render",s],["__file","Status-Codes.html.vue"]]);export{f as default};
