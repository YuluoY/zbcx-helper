/**
 * 自动生成的TypeScript配置文件
 * @module isFunc
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const isFuncConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isFunc",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isFunc(val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "判断val是否为函数类型，是时返回true，否则false。\n\n**说明**: \n- 使用typeof运算符判断类型是否为'function'\n- 返回布尔值表示是否为函数类型\n\nExample:\n```javascript\n// 基本使用\ncx.base.isFunc(function(){})  // 返回 true\ncx.base.isFunc(() => {})      // 返回 true\ncx.base.isFunc(null)          // 返回 false\ncx.base.isFunc({})            // 返回 false\n```"
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
    documentation: "如果val是函数类型返回true，否则返回false"
  }
};
