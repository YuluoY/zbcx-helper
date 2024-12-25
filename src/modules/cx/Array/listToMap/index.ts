/**
 * 将数组转换为Map
 * @module array/listToMap
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const listToMapConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "listToMap",
  kind: MODULE_KINDS.FUNCTION,
  detail: "将数组转换为Map",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { listToMapConfig };
module.exports = { listToMapConfig };
