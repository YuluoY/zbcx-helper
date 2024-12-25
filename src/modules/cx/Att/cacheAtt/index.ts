/**
 * 缓存属性
 * @module att/cacheAtt
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const cacheAttConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "cacheAtt",
  kind: MODULE_KINDS.FUNCTION,
  detail: "缓存属性",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { cacheAttConfig };
module.exports = { cacheAttConfig }; 