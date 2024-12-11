/**
 * 自动生成的TypeScript配置文件
 * @module deepCopy
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const deepCopyConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "deepCopy",
  kind: MODULE_KINDS.FUNCTION,
  detail: "deepCopy(target: Object, ...argvs: Object): Object",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "深拷贝对象(args可以多个参数)到目标对象(target)，只有数组和对象会递归深拷贝。\n\n**说明**: \n- target为目标对象\n- argvs为可变参数，可以传入多个源对象\n- 只对数组和对象进行递归深拷贝\n\nExample:\n```javascript\n// 基本深拷贝\nconst target = { a: 1 }\nconst source = { b: 2, c: { d: 3 } }\ncx.base.deepCopy(target, source)\n// target = { a: 1, b: 2, c: { d: 3 } }\n\n// 多个源对象\nconst target = {}\nconst source1 = { a: 1 }\nconst source2 = { b: 2 }\nconst source3 = { c: [1, 2, 3] }\ncx.base.deepCopy(target, source1, source2, source3)\n// target = { a: 1, b: 2, c: [1, 2, 3] }\n```"
  },
  parameters: [{
      label: "target",
      type: "object",
      detail: "目标对象",
      required: true
    }, {
      label: "argvs",
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
