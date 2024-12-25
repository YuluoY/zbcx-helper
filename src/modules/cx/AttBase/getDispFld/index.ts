/**
 * 获取显示字段
 * @module AttBase.getDispFld
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getDispFldConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getDispFld",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取显示字段",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getDispFldConfig };
module.exports = { getDispFldConfig }; 