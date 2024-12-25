/**
 * 数组去重
 * @module array/derepeat
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const derepeatConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "derepeat",
  kind: MODULE_KINDS.FUNCTION,
  detail: "数组去重",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { derepeatConfig };
module.exports = { derepeatConfig };
