/**
 * 自动生成的TypeScript配置文件
 * @module isObj
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const isObjConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isObj",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isObj(val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "判断val是否为对象类型，是时返回true，否则false。\n\n**说明**: \n- 使用typeof运算符判断类型是否为'object'\n- null虽然也是'object'类型，但会返回false\n- 数组虽然也是'object'类型，但会返回false\n\nExample:\n```javascript\n// 基本使用\ncx.base.isObj({})             // 返回 true\ncx.base.isObj(new Object())   // 返回 true\ncx.base.isObj([])             // 返回 false\ncx.base.isObj(null)           // 返回 false\ncx.base.isObj(123)            // 返回 false\n```"
  },
  parameters: [{
      label: "val",
      type: "object",
      detail: "要判断的值",
      required: true
    }],
  returnType: {
    type: "boolean",
    detail: "Boolean",
    documentation: "如果val是对象类型返回true，否则返回false"
  }
};
