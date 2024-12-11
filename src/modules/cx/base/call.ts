/**
 * 自动生成的TypeScript配置文件
 * @module call
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const callConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "call",
  kind: MODULE_KINDS.FUNCTION,
  detail: "call(func: Function, ...argvs: string): *",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "Function或Caller调用。\n\n**说明**: \n- 用于调用函数或Caller\n- 支持可变参数\n- 参数1为函数或Caller\n- 参数2开始为函数参数，参数个数不限\n\nExample:\n```javascript\n// 调用函数\nconst fn = (a, b) => a + b\ncx.base.call(fn, '1', '2') // 3\n\n// 调用Caller\nconst caller = {\n  method: function(x) { return x * 2 }\n}\ncx.base.call(caller.method, '5') // 10\n```"
  },
  parameters: [{
      label: "func",
      type: "Function",
      detail: "函数或者Caller",
      required: true
    }, {
      label: "argvs",
      type: "string",
      detail: "可变参数，参数1, 参数2, ..参数n",
      required: false,
      repeatable: true
    }],
  returnType: {
    type: "*",
    detail: "*",
    documentation: "返回函数调用的结果"
  }
};
