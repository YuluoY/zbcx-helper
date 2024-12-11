/**
 * 自动生成的TypeScript配置文件
 * @module isArr
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const isArrConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isArr",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isArr(val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "判断val是否为数组，是返回true，不是返回false。\n\n**说明**: \n- 使用Array.isArray()进行判断\n- 返回布尔值表示是否为数组\n\nExample:\n```javascript\n// 基本使用\ncx.base.isArr([1, 2, 3])  // 返回 true\ncx.base.isArr('array')    // 返回 false\ncx.base.isArr({})         // 返回 false\ncx.base.isArr(null)       // 返回 false\n```"
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
    documentation: "如果val是数组返回true，否则返回false"
  }
};
