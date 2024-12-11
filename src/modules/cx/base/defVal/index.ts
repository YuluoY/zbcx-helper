import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module defVal
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const defValConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "defVal",
  kind: MODULE_KINDS.FUNCTION,
  detail: "defVal(value: Object, defValue: Object): Object",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "value",
      type: "object",
      detail: "值",
      required: true
    }, {
      label: "defValue",
      type: "object",
      detail: "缺省值",
      required: true
    }],
  returnType: {
    type: "object",
    detail: "Object",
    documentation: "如果value未定义则返回defValue，否则返回value"
  }
};
