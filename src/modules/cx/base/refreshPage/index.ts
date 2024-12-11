import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module refreshPage
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const refreshPageConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "refreshPage",
  kind: MODULE_KINDS.FUNCTION,
  detail: "refreshPage()",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [],
  returnType: {
    type: "void",
    detail: "void",
    documentation: "无返回值"
  }
};
