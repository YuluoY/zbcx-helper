/**
 * 更新数组元素
 * @module array/update
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const updateConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "update",
  kind: MODULE_KINDS.FUNCTION,
  detail: "更新数组元素",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { updateConfig };
module.exports = { updateConfig };
