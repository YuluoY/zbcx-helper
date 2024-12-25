/**
 * 创建表达式
 * @module AttBase.makeExp
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const makeExpConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "makeExp",
  kind: MODULE_KINDS.FUNCTION,
  detail: "创建表达式",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { makeExpConfig };
module.exports = { makeExpConfig }; 