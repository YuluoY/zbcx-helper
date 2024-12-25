/**
 * 服务器交互模块
 * @module svr
 */

import type { ModuleConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';
import { indexConfig as dataConfig } from './Data';

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "svr",
  kind: MODULE_KINDS.VARIABLE,
  detail: "服务器交互模块",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "提供与服务器交互的功能模块。"
  },
  children: {
    data: dataConfig
  }
};

export { indexConfig };
module.exports = { indexConfig };
