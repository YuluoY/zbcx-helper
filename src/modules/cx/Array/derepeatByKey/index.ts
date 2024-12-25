/**
 * 按键值去重
 * @module array/derepeatByKey
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const derepeatByKeyConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "derepeatByKey",
  kind: MODULE_KINDS.FUNCTION,
  detail: "按键值去重",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { derepeatByKeyConfig };
module.exports = { derepeatByKeyConfig };
