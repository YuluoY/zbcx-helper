/**
 * 分割数组
 * @module array/splitArray
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const splitArrayConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "splitArray",
  kind: MODULE_KINDS.FUNCTION,
  detail: "分割数组",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { splitArrayConfig };
module.exports = { splitArrayConfig };
