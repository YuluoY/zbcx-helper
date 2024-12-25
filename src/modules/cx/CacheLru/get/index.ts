/**
 * 获取缓存项
 * @module CacheLru.prototype.get
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "get",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取缓存项",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getConfig };
module.exports = { getConfig }; 