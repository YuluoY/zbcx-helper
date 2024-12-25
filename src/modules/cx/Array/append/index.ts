/**
 * 追加元素
 * @module array/append
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const appendConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "append",
  kind: MODULE_KINDS.FUNCTION,
  detail: "添加多个元素到数组",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { appendConfig };
module.exports = { appendConfig }; 