/**
 * 模糊获取数组元素
 * @module array/getsFuz
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getsFuzConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getsFuz",
  kind: MODULE_KINDS.FUNCTION,
  detail: "模糊获取数组元素",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getsFuzConfig };
module.exports = { getsFuzConfig };
