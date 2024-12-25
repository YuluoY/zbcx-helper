/**
 * 弹出缓存项
 * @module CacheLru.prototype.pop
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const popConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "pop",
  kind: MODULE_KINDS.FUNCTION,
  detail: "弹出缓存项",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { popConfig };
module.exports = { popConfig }; 