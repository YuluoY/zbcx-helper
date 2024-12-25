/**
 * 获取流程定义键
 * @module Bpm.getProcKey
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getProcKeyConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getProcKey",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取流程定义键",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getProcKeyConfig };
module.exports = { getProcKeyConfig }; 