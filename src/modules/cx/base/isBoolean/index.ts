import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module isBoolean
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const isBooleanConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isBoolean",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isBoolean(val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
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
    documentation: "如果val是Boolean类型返回true，否则返回false"
  }
};
