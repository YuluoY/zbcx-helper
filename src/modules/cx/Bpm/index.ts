/**
 * 业务流程管理
 * @module Bpm
 */

import type { ModuleConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';
import { loadComponentDocs } from '../../../utils/docs';
import { startByProcConfig } from './startByProc';
import { startWithTmplConfig } from './startWithTmpl';
import { procTraceByTaskConfig } from './procTraceByTask';
import { procProgressByTaskConfig } from './procProgressByTask';
import { procTraceByProcInstConfig } from './procTraceByProcInst';
import { getProcKeyConfig } from './getProcKey';
import { getProcsAllConfig } from './getProcsAll';
import { procProgressByProcInstConfig } from './procProgressByProcInst';
import { assignToConfig } from './assignTo';
import { commentApplyConfig } from './commentApply';

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "Bpm",
  kind: MODULE_KINDS.VARIABLE,
  detail: "业务流程管理",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {
    startByProc: startByProcConfig,
    startWithTmpl: startWithTmplConfig,
    procTraceByTask: procTraceByTaskConfig,
    procProgressByTask: procProgressByTaskConfig,
    procTraceByProcInst: procTraceByProcInstConfig,
    getProcKey: getProcKeyConfig,
    getProcsAll: getProcsAllConfig,
    procProgressByProcInst: procProgressByProcInstConfig,
    assignTo: assignToConfig,
    commentApply: commentApplyConfig
  }
};

export { indexConfig };
module.exports = { indexConfig }; 