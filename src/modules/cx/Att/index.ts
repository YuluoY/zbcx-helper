/**
 * 属性操作工具类
 * @module att
 */

import type { ModuleConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';
import { loadComponentDocs } from '../../../utils/docs';
import { cacheAttConfig } from './cacheAtt';
import { getCacheAttConfig } from './getCacheAtt';

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "att",
  kind: MODULE_KINDS.VARIABLE,
  detail: "属性操作工具类",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {
    cacheAtt: cacheAttConfig,
    getCacheAtt: getCacheAttConfig
  }
};

export { indexConfig };
module.exports = { indexConfig }; 