/**
 * 通过任务获取流程追踪
 * @module Bpm.procTraceByTask
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const procTraceByTaskConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "procTraceByTask",
  kind: MODULE_KINDS.FUNCTION,
  detail: "通过任务获取流程追踪",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { procTraceByTaskConfig };
module.exports = { procTraceByTaskConfig }; 