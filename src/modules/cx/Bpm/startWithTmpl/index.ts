/**
 * 通过模板启动流程
 * @module Bpm.startWithTmpl
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const startWithTmplConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "startWithTmpl",
  kind: MODULE_KINDS.FUNCTION,
  detail: "通过模板启动流程",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { startWithTmplConfig };
module.exports = { startWithTmplConfig }; 