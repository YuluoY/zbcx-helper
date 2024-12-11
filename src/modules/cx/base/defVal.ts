/**
 * 自动生成的TypeScript配置文件
 * @module defVal
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const defValConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "defVal",
  kind: MODULE_KINDS.FUNCTION,
  detail: "defVal(value: Object, defValue: Object): Object",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "如果给出的值为未定义，则给出缺省值。\n\n**说明**: \n- 当value未定义时返回defValue\n- 当value已定义时返回value\n\nExample:\n```javascript\n// 基本使用\ncx.base.defVal(undefined, 1) // 返回 1\ncx.base.defVal(null, 2)      // 返回 null\ncx.base.defVal(0, 3)         // 返回 0\ncx.base.defVal('', 4)        // 返回 ''\n```"
  },
  parameters: [{
      label: "value",
      type: "object",
      detail: "值",
      required: true
    }, {
      label: "defValue",
      type: "object",
      detail: "缺省值",
      required: true
    }],
  returnType: {
    type: "object",
    detail: "Object",
    documentation: "如果value未定义则返回defValue，否则返回value"
  }
};
