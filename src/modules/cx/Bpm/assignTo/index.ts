/**
 * 任务分配
 * @module Bpm.assignTo
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const assignToConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "assignTo",
  kind: MODULE_KINDS.FUNCTION,
  detail: "任务分配",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { assignToConfig };
module.exports = { assignToConfig }; 