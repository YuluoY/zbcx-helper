import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module isFunc
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const isFuncConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isFunc",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isFunc(val: Object): Boolean",
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
    documentation: "如果val是函数类型返回true，否则返回false"
  }
};
