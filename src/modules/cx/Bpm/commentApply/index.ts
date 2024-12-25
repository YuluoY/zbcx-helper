/**
 * 添加审批意见
 * @module Bpm.commentApply
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const commentApplyConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "commentApply",
  kind: MODULE_KINDS.FUNCTION,
  detail: "添加审批意见",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { commentApplyConfig };
module.exports = { commentApplyConfig }; 