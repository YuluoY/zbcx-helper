/**
 * 移除缓存项
 * @module CacheLru.prototype.remove
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const removeConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "remove",
  kind: MODULE_KINDS.FUNCTION,
  detail: "移除缓存项",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { removeConfig };
module.exports = { removeConfig }; 