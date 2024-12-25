/**
 * 获取显示值
 * @module AttBase.getDisp
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getDispConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getDisp",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取显示值",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getDispConfig };
module.exports = { getDispConfig }; 