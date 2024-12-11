/**
 * 自动生成的TypeScript配置文件
 * @module isBoolean
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const isBooleanConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isBoolean",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isBoolean(val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "判断是否Boolean类型，是时返回true，否则false。\n\n**说明**: \n- 使用typeof运算符判断类型是否为'boolean'\n- 返回布尔值表示是否为Boolean类型\n\nExample:\n```javascript\n// 基本使用\ncx.base.isBoolean(true)     // 返回 true\ncx.base.isBoolean(false)    // 返回 true\ncx.base.isBoolean(1)        // 返回 false\ncx.base.isBoolean('true')   // 返回 false\ncx.base.isBoolean(null)     // 返回 false\n```"
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
    documentation: "如果val是Boolean类型返回true，否则返回false"
  }
};
