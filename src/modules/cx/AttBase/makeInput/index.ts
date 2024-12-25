/**
 * 创建输入框
 * @module AttBase.makeInput
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const makeInputConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "makeInput",
  kind: MODULE_KINDS.FUNCTION,
  detail: "创建输入框",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { makeInputConfig };
module.exports = { makeInputConfig }; 