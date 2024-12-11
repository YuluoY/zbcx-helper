import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module isNull
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const isNullConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isNull",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isNull(val: Object): Boolean",
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
    documentation: "如果val是null返回true，不是null返回false"
  }
};
