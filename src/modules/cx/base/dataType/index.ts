import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module dataType
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const dataTypeConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "dataType",
  kind: MODULE_KINDS.FUNCTION,
  detail: "dataType(typename: String): Number",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "typename",
      type: "string",
      detail: "类型名 (int / float / string / date / datetime / time / boolean / ..)",
      required: true
    }],
  returnType: {
    type: "number",
    detail: "Number",
    documentation: "cx.consts.DT_INT / REAL / STRING / DATE / DATETIME / BOOL / ..."
  }
};
