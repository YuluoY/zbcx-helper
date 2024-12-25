/**
 * 遍历数组
 * @module array/forEach
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const forEachConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "forEach",
  kind: MODULE_KINDS.FUNCTION,
  detail: "遍历数组",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { forEachConfig };
module.exports = { forEachConfig };
