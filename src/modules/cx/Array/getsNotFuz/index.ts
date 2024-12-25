/**
 * 模糊获取不匹配的数组元素
 * @module array/getsNotFuz
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const getsNotFuzConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getsNotFuz",
  kind: MODULE_KINDS.FUNCTION,
  detail: "模糊获取不匹配的数组元素",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { getsNotFuzConfig };
module.exports = { getsNotFuzConfig };
