import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module batch
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const batchConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "batch",
  kind: MODULE_KINDS.FUNCTION,
  detail: "batch(major: number, minor: number, data: Array<{type: string, data: object}>): Promise<Array<any>>",
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
      type: "Array<object>",
      detail: "操作数组，每个操作包含type和data字段",
      required: true,
      properties: {
        type: {
          type: "string",
          detail: "操作类型，如：add、update、del等"
        },
        data: {
          type: "object",
          detail: "操作的数据对象"
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<Array<any>>",
    documentation: "返回每个操作的执行结果数组"
  }
};
