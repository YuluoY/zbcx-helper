/**
 * 设置缓存容量限制
 * @module CacheLru.prototype.setLimit
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const setLimitConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "setLimit",
  kind: MODULE_KINDS.FUNCTION,
  detail: "设置缓存容量限制",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { setLimitConfig };
module.exports = { setLimitConfig }; 