/**
 * 解码属性值
 * @module AttBase.decode
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const decodeConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "decode",
  kind: MODULE_KINDS.FUNCTION,
  detail: "解码属性值",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { decodeConfig };
module.exports = { decodeConfig }; 