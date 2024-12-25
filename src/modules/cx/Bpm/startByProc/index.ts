/**
 * 通过流程定义启动流程
 * @module Bpm.startByProc
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const startByProcConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "startByProc",
  kind: MODULE_KINDS.FUNCTION,
  detail: "通过流程定义启动流程",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { startByProcConfig };
module.exports = { startByProcConfig }; 