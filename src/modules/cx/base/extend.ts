/**
 * 自动生成的TypeScript配置文件
 * @module extend
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const extendConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "extend",
  kind: MODULE_KINDS.FUNCTION,
  detail: "extend(target: Object, ...args: Object): Object",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "目标对象(target)将承对象(args可以多个参数)。\n\n**说明**: \n- target为目标对象\n- args为可变参数，可以传入多个源对象\n\nExample:\n```javascript\n// 基本使用\nconst target = { a: 1 }\nconst source = { b: 2 }\ncx.base.extend(target, source)\n// target = { a: 1, b: 2 }\n\n// 多个源对象\nconst target = {}\nconst source1 = { a: 1 }\nconst source2 = { b: 2 }\ncx.base.extend(target, source1, source2)\n// target = { a: 1, b: 2 }\n```"
  },
  parameters: [{
      label: "target",
      type: "object",
      detail: "目标对象",
      required: true
    }, {
      label: "args",
      type: "object",
      detail: "可变参数",
      required: false,
      repeatable: true
    }],
  returnType: {
    type: "object",
    detail: "Object",
    documentation: "返回target"
  }
};
