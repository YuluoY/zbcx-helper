/**
 * 通过任务获取流程进度
 * @module Bpm.procProgressByTask
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const procProgressByTaskConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "procProgressByTask",
  kind: MODULE_KINDS.FUNCTION,
  detail: "通过任务获取流程进度",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { procProgressByTaskConfig };
module.exports = { procProgressByTaskConfig }; 