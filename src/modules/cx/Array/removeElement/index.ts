/**
 * 移除指定元素
 * @module array/removeElement
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const removeElementConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "removeElement",
  kind: MODULE_KINDS.FUNCTION,
  detail: "移除指定元素",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { removeElementConfig };
module.exports = { removeElementConfig };
