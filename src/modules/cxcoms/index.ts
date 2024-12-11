/**
 * 智博创享组件库
 * @module cxcoms
 */

import type { ModuleConfigItem } from '../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../constants';
import { indexConfig as buttonConfig } from './components/button';

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "cxcoms",
  kind: MODULE_KINDS.MODULE,
  detail: "智博创享组件库",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "提供智博创享系统的UI组件库。"
  },
  children: {
    button: buttonConfig
  }
};

export { indexConfig };
module.exports = { indexConfig }; 