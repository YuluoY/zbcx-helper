/**
 * 自动生成的TypeScript配置文件
 * @module isDate
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const isDateConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isDate",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isDate(val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "判断val是否为日期类型，是时返回true，否则false。\n\n**说明**: \n- 判断对象是否为Date实例\n- 返回布尔值表示是否为日期类型\n\nExample:\n```javascript\n// 基本使用\ncx.base.isDate(new Date())     // 返回 true\ncx.base.isDate('2023-01-01')   // 返回 false\ncx.base.isDate(1234567890)     // 返回 false\ncx.base.isDate(null)           // 返回 false\n```"
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
    documentation: "如果val是日期类型返回true，否则返回false"
  }
};
