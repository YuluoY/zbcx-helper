import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module extend
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const extendConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "extend",
  kind: MODULE_KINDS.FUNCTION,
  detail: "extend(target: Object, ...args: Object): Object",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
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
