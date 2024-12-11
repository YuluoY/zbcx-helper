/**
 * 数据操作模块
 * @module data
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { queryConfig } from './query';
import { updateConfig } from './update';
import { deleteConfig } from './delete';
import { addConfig } from './add';
import { addsJsonConfig } from './addsJson';
import { addsNoIdConfig } from './addsNoId';
import { batchConfig } from './batch';
import { callProcConfig } from './callProc';
import { checkConfig } from './check';
import { delConfig } from './del';
import { delsConfig } from './dels';
import { getBillConfig } from './getBill';
import { getSequenceConfig } from './getSequence';
import { initSysConfig } from './initSys';
import { queryAllConfig } from './queryAll';
import { queryIdConfig } from './queryId';
import { queryId0Config } from './queryId0';
import { querySqlConfig } from './querySql';
import { reloadConfig } from './reload';
import { statConfig } from './stat';
import { updatesConfig } from './updates';
import { urlConfig } from './url';
import { versionConfig } from './version';

// 导出配��
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "data",
  kind: MODULE_KINDS.VARIABLE,
  detail: "数据操作模块",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "提供数据库操作相关功能。"
  },
  children: {
    query: queryConfig,
    update: updateConfig,
    delete: deleteConfig,
    add: addConfig,
    addsJson: addsJsonConfig,
    addsNoId: addsNoIdConfig,
    batch: batchConfig,
    callProc: callProcConfig,
    check: checkConfig,
    del: delConfig,
    dels: delsConfig,
    getBill: getBillConfig,
    getSequence: getSequenceConfig,
    initSys: initSysConfig,
    queryAll: queryAllConfig,
    queryId: queryIdConfig,
    queryId0: queryId0Config,
    querySql: querySqlConfig,
    reload: reloadConfig,
    stat: statConfig,
    updates: updatesConfig,
    url: urlConfig,
    version: versionConfig
  }
};

export { indexConfig };
module.exports = { indexConfig };
