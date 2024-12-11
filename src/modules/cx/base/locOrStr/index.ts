import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module locOrStr
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const locOrStrConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "locOrStr",
  kind: MODULE_KINDS.FUNCTION,
  detail: "locOrStr(str: String): String",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "str",
      type: "string",
      detail: "字符串",
      required: true
    }],
  returnType: {
    type: "string",
    detail: "String",
    documentation: "返回本地化后的字符串"
  }
};
