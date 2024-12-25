/**
 * 追加数组
 * @module array/appendArr
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const appendArrConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "appendArr",
  kind: MODULE_KINDS.FUNCTION,
  detail: "追加数组",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { appendArrConfig };
module.exports = { appendArrConfig };
