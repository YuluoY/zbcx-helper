/**
 * 合并数组
 * @module array/merge
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const mergeConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "merge",
  kind: MODULE_KINDS.FUNCTION,
  detail: "合并数组",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { mergeConfig };
module.exports = { mergeConfig };