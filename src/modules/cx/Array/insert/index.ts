/**
 * 插入元素到数组
 * @module array/insert
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const insertConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "insert",
  kind: MODULE_KINDS.FUNCTION,
  detail: "插入元素到数组",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { insertConfig };
module.exports = { insertConfig };
