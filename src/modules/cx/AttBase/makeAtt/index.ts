/**
 * 创建属性
 * @module AttBase.makeAtt
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const makeAttConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "makeAtt",
  kind: MODULE_KINDS.FUNCTION,
  detail: "创建属性",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { makeAttConfig };
module.exports = { makeAttConfig }; 