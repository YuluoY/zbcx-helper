/**
 * 本地缓存模块
 * @module localCache
 */

import type { ModuleConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';
import { clearConfig } from './clear';
import { getConfig } from './get';
import { keyConfig } from './key';
import { removeConfig } from './remove';
import { setConfig } from './set';
import { setPrefixConfig } from './setPrefix';

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "localCache",
  kind: MODULE_KINDS.VARIABLE,
  detail: "本地缓存模块",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "cx.localCache 类 - 本地缓存对象。用于localStorage 和 sessionStorage存储"
  },
  children: {
    clear: clearConfig,
    get: getConfig,
    key: keyConfig,
    remove: removeConfig,
    set: setConfig,
    setPrefix: setPrefixConfig
  }
};

export { indexConfig };
module.exports = { indexConfig }; 