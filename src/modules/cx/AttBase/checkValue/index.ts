/**
 * 检查属性值
 * @module AttBase.checkValue
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const checkValueConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "checkValue",
  kind: MODULE_KINDS.FUNCTION,
  detail: "检查属性值",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { checkValueConfig };
module.exports = { checkValueConfig }; 