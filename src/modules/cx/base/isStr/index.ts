import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module isStr
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const isStrConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "isStr",
  kind: MODULE_KINDS.FUNCTION,
  detail: "isStr(val: Object): Boolean",
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
    documentation: "如果val是字符串类型返回true，否则返回false"
  }
};
