/**
 * 属性值变更处理
 * @module AttBase.changed
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const changedConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "changed",
  kind: MODULE_KINDS.FUNCTION,
  detail: "属性值变更处理",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { changedConfig };
module.exports = { changedConfig }; 