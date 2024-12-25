/**
 * 计算属性值
 * @module AttBase.calcAtt
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const calcAttConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "calcAtt",
  kind: MODULE_KINDS.FUNCTION,
  detail: "计算属性值",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { calcAttConfig };
module.exports = { calcAttConfig }; 