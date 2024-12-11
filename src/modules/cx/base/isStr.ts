/**
 * 自动生成的TypeScript配置文件
 * @module isStr
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const isStrConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isStr",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isStr(val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "判断val是否为字符串类型，是时返回true，否则false。\n\n**说明**: \n- 使用typeof运算符判断类型是否为'string'\n- 返回布尔值表示是否为字符串类型\n\nExample:\n```javascript\n// 基本使用\ncx.base.isStr('hello')        // 返回 true\ncx.base.isStr('')             // 返回 true\ncx.base.isStr(123)            // 返回 false\ncx.base.isStr(null)           // 返回 false\ncx.base.isStr(undefined)      // 返回 false\n```"
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
    documentation: "如果val是字符串类型返回true，否则返回false"
  }
};
