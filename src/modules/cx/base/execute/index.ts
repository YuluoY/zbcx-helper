import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module execute
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const executeConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "execute",
  kind: MODULE_KINDS.FUNCTION,
  detail: "execute(func: String, args: Array): *",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
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
