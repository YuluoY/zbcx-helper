/**
 * 属性工厂
 * @module AttFactory
 */

import type { ModuleConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';
import { loadComponentDocs } from '../../../utils/docs';
import { byMajMinConfig } from './byMajMin';

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "AttFactory",
  kind: MODULE_KINDS.VARIABLE,
  detail: "属性工厂",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {
    byMajMin: byMajMinConfig
  }
};

export { indexConfig };
module.exports = { indexConfig }; 