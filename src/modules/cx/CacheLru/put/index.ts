/**
 * 添加缓存项
 * @module CacheLru.prototype.put
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const putConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "put",
  kind: MODULE_KINDS.FUNCTION,
  detail: "添加缓存项",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { putConfig };
module.exports = { putConfig }; 