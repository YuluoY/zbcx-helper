/**
 * 获取所有流程定义
 * @module Bpm.getProcsAll
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getProcsAllConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getProcsAll",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取所有流程定义",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getProcsAllConfig };
module.exports = { getProcsAllConfig }; 