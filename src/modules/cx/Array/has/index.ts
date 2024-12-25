/**
 * 判断数组是否包含元素
 * @module array/has
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const hasConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "has",
  kind: MODULE_KINDS.FUNCTION,
  detail: "判断数组是否包含元素",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { hasConfig };
module.exports = { hasConfig };
