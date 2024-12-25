/**
 * 智博创享基础模块
 * @module cx
 */

import type { ModuleConfigItem } from '../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../constants';
import { indexConfig as baseConfig } from './Base';
import { indexConfig as svrConfig } from './Svr';
import { indexConfig as localCacheConfig } from './LocalCache';
import { indexConfig as arrayConfig } from './Array';
import { indexConfig as attConfig } from './Att';
import { indexConfig as attBaseConfig } from './AttBase';
import { indexConfig as attFactoryConfig } from './AttFactory';
import { indexConfig as bpmConfig } from './Bpm';
import { indexConfig as cacheLruConfig } from './CacheLru';

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
    localCache: localCacheConfig,
    array: arrayConfig,
    att: attConfig,
    AttBase: attBaseConfig,
    AttFactory: attFactoryConfig,
    Bpm: bpmConfig,
    CacheLru: cacheLruConfig
  }
};

export { indexConfig };
module.exports = { indexConfig };
