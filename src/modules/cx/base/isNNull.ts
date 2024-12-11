/**
 * 自动生成的TypeScript配置文件
 * @module isNNull
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const isNNullConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isNNull",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isNNull(val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "判断val是否不为null，不是null时返回true，是null时返回false。\n\n**说明**: \n- 判断值是否不为null\n- 返回布尔值表示是否不为null\n\nExample:\n```javascript\n// 基本使用\ncx.base.isNNull({})           // 返回 true\ncx.base.isNNull([])           // 返回 true\ncx.base.isNNull('')           // 返回 true\ncx.base.isNNull(0)            // 返回 true\ncx.base.isNNull(null)         // 返回 false\ncx.base.isNNull(undefined)    // 返回 true\n```"
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
    documentation: "如果val不是null返回true，是null返回false"
  }
};
