import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module callProc
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const callProcConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "callProc",
  kind: MODULE_KINDS.FUNCTION,
  detail: "callProc(major: number, minor: number, data: {name: string, params?: Array<any>}): Promise<any>",
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
      detail: "存储过程调用参数",
      required: true,
      properties: {
        name: {
          type: "string",
          detail: "存储过程名称",
          required: true
        },
        params: {
          type: "Array<any>",
          detail: "存储过程参数数组",
          required: false
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<any>",
    documentation: "返回存储过程的执行结果"
  }
};
