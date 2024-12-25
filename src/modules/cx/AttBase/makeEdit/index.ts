/**
 * 创建编辑器
 * @module AttBase.makeEdit
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const makeEditConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "makeEdit",
  kind: MODULE_KINDS.FUNCTION,
  detail: "创建编辑器",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { makeEditConfig };
module.exports = { makeEditConfig }; 