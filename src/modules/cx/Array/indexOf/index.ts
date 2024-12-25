/**
 * 获取元素在数组中的索引
 * @module array/indexOf
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const indexOfConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "indexOf",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取元素在数组中的索引",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { indexOfConfig };
module.exports = { indexOfConfig };
