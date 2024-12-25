/**
 * 将数组转换为字符串
 * @module array/toString
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const toStringConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "toString",
  kind: MODULE_KINDS.FUNCTION,
  detail: "将数组转换为字符串",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { toStringConfig };
module.exports = { toStringConfig };
