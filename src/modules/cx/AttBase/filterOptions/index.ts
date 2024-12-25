/**
 * 过滤选项
 * @module AttBase.filterOptions
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const filterOptionsConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "filterOptions",
  kind: MODULE_KINDS.FUNCTION,
  detail: "过滤选项",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { filterOptionsConfig };
module.exports = { filterOptionsConfig }; 