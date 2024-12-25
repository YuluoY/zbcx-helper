/**
 * 获取默认值
 * @module AttBase.getDefVal
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getDefValConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getDefVal",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取默认值",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getDefValConfig };
module.exports = { getDefValConfig }; 