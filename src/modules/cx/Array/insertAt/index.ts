/**
 * 在指定位置插入元素
 * @module array/insertAt
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const insertAtConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "insertAt",
  kind: MODULE_KINDS.FUNCTION,
  detail: "在指定位置插入元素",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { insertAtConfig };
module.exports = { insertAtConfig };