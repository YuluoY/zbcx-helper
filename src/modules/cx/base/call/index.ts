import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module call
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const callConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "call",
  kind: MODULE_KINDS.FUNCTION,
  detail: "call(func: Function, ...argvs: string): *",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
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
