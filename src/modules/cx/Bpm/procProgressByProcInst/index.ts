/**
 * 通过流程实例获取流程进度
 * @module Bpm.procProgressByProcInst
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const procProgressByProcInstConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "procProgressByProcInst",
  kind: MODULE_KINDS.FUNCTION,
  detail: "通过流程实例获取流程进度",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { procProgressByProcInstConfig };
module.exports = { procProgressByProcInstConfig }; 