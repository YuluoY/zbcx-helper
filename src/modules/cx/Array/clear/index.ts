/**
 * 清空数组
 * @module array/clear
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const clearConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "clear",
  kind: MODULE_KINDS.FUNCTION,
  detail: "清空数组",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { clearConfig };
module.exports = { clearConfig };
