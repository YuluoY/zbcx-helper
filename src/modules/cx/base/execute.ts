/**
 * 自动生成的TypeScript配置文件
 * @module execute
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const executeConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "execute",
  kind: MODULE_KINDS.FUNCTION,
  detail: "execute(func: String, args: Array): *",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "字符串调用。\n\n**说明**: \n- func为函数字符串，可以'()'结尾，也可以没有'()' (如 'test' 或 'test()')\n- args为参数数组\n\nExample:\n```javascript\n// 基本使用\ncx.base.execute('Math.max', [1, 2, 3]) // 返回 3\n\n// 带括号的函数名\ncx.base.execute('Math.min()', [4, 5, 6]) // 返回 4\n\n// 自定义函数\nfunction test(a, b) { return a + b }\ncx.base.execute('test', [1, 2]) // 返回 3\n```"
  },
  parameters: [{
      label: "func",
      type: "string",
      detail: "函数字符串，可以'()'结尾，也可以没有'()' (如 'test' 或 'test()')",
      required: true
    }, {
      label: "args",
      type: "Array",
      detail: "参数数组",
      required: true
    }],
  returnType: {
    type: "*",
    detail: "*",
    documentation: "函数执行的返回值"
  }
};
