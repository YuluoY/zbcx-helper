/**
 * 自动生成的TypeScript配置文件
 * @module isNull
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const isNullConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isNull",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isNull(val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "判断val是否为null，是null时返回true，不是null时返回false。\n\n**说明**: \n- 判断值是否为null\n- 返回布尔值表示是否为null\n\nExample:\n```javascript\n// 基本使用\ncx.base.isNull(null)          // 返回 true\ncx.base.isNull(undefined)     // 返回 false\ncx.base.isNull({})            // 返回 false\ncx.base.isNull([])            // 返回 false\ncx.base.isNull('')            // 返回 false\ncx.base.isNull(0)             // 返回 false\n```"
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
    documentation: "如果val是null返回true，不是null返回false"
  }
};
