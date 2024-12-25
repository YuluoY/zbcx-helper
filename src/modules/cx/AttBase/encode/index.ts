/**
 * 编码属性值
 * @module AttBase.encode
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const encodeConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "encode",
  kind: MODULE_KINDS.FUNCTION,
  detail: "编码属性值",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { encodeConfig };
module.exports = { encodeConfig }; 