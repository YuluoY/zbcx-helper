/**
 * 获取默认值表达式
 * @module AttBase.getDefValExp
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getDefValExpConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getDefValExp",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取默认值表达式",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getDefValExpConfig };
module.exports = { getDefValExpConfig }; 