/**
 * 获取数组元素
 * @module array/gets
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getsConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "gets",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取数组元素",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getsConfig };
module.exports = { getsConfig };
