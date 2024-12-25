/**
 * 初始化字段
 * @module AttBase.initFlds
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const initFldsConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "initFlds",
  kind: MODULE_KINDS.FUNCTION,
  detail: "初始化字段",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { initFldsConfig };
module.exports = { initFldsConfig }; 