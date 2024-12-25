/**
 * 获取不匹配的数组元素
 * @module array/getsNot
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getsNotConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getsNot",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取不匹配的数组元素",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getsNotConfig };
module.exports = { getsNotConfig };
