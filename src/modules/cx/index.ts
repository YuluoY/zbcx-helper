/**
 * 智博创享基础模块
 * @module cx
 */

import type { ModuleConfigItem } from '../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../constants';
import { indexConfig as baseConfig } from './base';
import { indexConfig as svrConfig } from './svr';
import { indexConfig as localCacheConfig } from './localCache';

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "cx",
  kind: MODULE_KINDS.VARIABLE,
  detail: "智博创享基础模块",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "提供智博创享系统的基础功能。"
  },
  children: {
    base: baseConfig,
    svr: svrConfig,
    localCache: localCacheConfig
  }
};

export { indexConfig };
module.exports = { indexConfig };
