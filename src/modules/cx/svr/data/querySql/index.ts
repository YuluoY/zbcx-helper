import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module querySql
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const querySqlConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "querySql",
  kind: MODULE_KINDS.FUNCTION,
  detail: "querySql(major: number, minor: number, data: {sql: string, args?: Array<any>}): Promise<Array<object>>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "major",
      type: "number",
      detail: "实体（主表）主类型",
      required: true
    }, {
      label: "minor",
      type: "number",
      detail: "实体（主表）子类型",
      required: true
    }, {
      label: "data",
      type: "object",
      detail: "查询参数",
      required: true,
      properties: {
        sql: {
          type: "string",
          detail: "SQL查询语句",
          required: true
        },
        args: {
          type: "Array<any>",
          detail: "SQL参数数组",
          required: false
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<Array<object>>",
    documentation: "返回查询结果数组"
  }
};
