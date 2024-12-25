/**
 * LRU缓存类
 * @module CacheLru
 */

import type { ModuleConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';
import { loadComponentDocs } from '../../../utils/docs';
import { setLimitConfig } from './setLimit';
import { putConfig } from './put';
import { removeConfig } from './remove';
import { getConfig } from './get';
import { popConfig } from './pop';
import { clearConfig } from './clear';

/**
 * LRU缓存类配置
 */
const prototypeConfig: ModuleConfigItem = {
  type: MODULE_KINDS.OBJECT,
  label: "prototype",
  kind: MODULE_KINDS.OBJECT,
  detail: "CacheLru实例方法",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "CacheLru类的实例方法"
  },
  children: {
    setLimit: setLimitConfig,
    put: putConfig,
    remove: removeConfig,
    get: getConfig,
    pop: popConfig,
    clear: clearConfig
  }
};

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.CLASS,
  label: "CacheLru",
  kind: MODULE_KINDS.CLASS,
  detail: "LRU缓存类",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {
    prototype: prototypeConfig
  }
};


export { indexConfig };
module.exports = { indexConfig }; 