/**
 * 自动生成的TypeScript配置文件
 * @module isNum
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const isNumConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isNum",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isNum(val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "判断val是否为数字类型，是时返回true，否则false。\n\n**说明**: \n- 使用typeof运算符判断类型是否为'number'\n- 返回布尔值表示是否为数字类型\n\nExample:\n```javascript\n// 基本使用\ncx.base.isNum(123)           // 返回 true\ncx.base.isNum(3.14)          // 返回 true\ncx.base.isNum('123')         // 返回 false\ncx.base.isNum(null)          // 返回 false\ncx.base.isNum(NaN)           // 返回 true\n```"
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
    documentation: "如果val是数字类型返回true，否则返回false"
  }
};
