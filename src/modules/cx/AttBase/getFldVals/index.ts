/**
 * 获取字段值列表
 * @module AttBase.getFldVals
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getFldValsConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getFldVals",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取字段值列表",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getFldValsConfig };
module.exports = { getFldValsConfig }; 