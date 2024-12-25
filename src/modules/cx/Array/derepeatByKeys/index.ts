/**
 * 按多个键值去重
 * @module array/derepeatByKeys
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const derepeatByKeysConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "derepeatByKeys",
  kind: MODULE_KINDS.FUNCTION,
  detail: "按多个键值去重",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { derepeatByKeysConfig };
module.exports = { derepeatByKeysConfig };
