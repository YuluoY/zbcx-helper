/**
 * 获取缓存的属性
 * @module att/getCacheAtt
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getCacheAttConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getCacheAtt",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取缓存的属性",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getCacheAttConfig };
module.exports = { getCacheAttConfig }; 