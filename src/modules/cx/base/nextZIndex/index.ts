import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module nextZIndex
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const nextZIndexConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "nextZIndex",
  kind: MODULE_KINDS.FUNCTION,
  detail: "nextZIndex(): Number",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [],
  returnType: {
    type: "number",
    detail: "Number",
    documentation: "返回一个新的z-index值"
  }
};
