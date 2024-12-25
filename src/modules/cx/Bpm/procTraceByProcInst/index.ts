/**
 * 通过流程实例获取流程追踪
 * @module Bpm.procTraceByProcInst
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const procTraceByProcInstConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "procTraceByProcInst",
  kind: MODULE_KINDS.FUNCTION,
  detail: "通过流程实例获取流程追踪",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { procTraceByProcInstConfig };
module.exports = { procTraceByProcInstConfig }; 