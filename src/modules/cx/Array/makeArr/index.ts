/**
 * 创建数组
 * @module array/makeArr
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const makeArrConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "makeArr",
  kind: MODULE_KINDS.FUNCTION,
  detail: "创建数组",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { makeArrConfig };
module.exports = { makeArrConfig };
