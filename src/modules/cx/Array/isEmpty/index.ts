/**
 * 判断数组是否为空
 * @module array/isEmpty
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const isEmptyConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isEmpty",
  kind: MODULE_KINDS.FUNCTION,
  detail: "判断数组是否为空",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { isEmptyConfig };
module.exports = { isEmptyConfig };
