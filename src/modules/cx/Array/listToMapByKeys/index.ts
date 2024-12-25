/**
 * 按键值将数组转换为Map
 * @module array/listToMapByKeys
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const listToMapByKeysConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "listToMapByKeys",
  kind: MODULE_KINDS.FUNCTION,
  detail: "按键值将数组转换为Map",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { listToMapByKeysConfig };
module.exports = { listToMapByKeysConfig };
