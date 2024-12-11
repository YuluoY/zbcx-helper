import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module queryId
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const queryIdConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "queryId",
  kind: MODULE_KINDS.FUNCTION,
  detail: "queryId(major: number, minor: number, data: {id: number}): Promise<object>",
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
        id: {
          type: "number",
          detail: "要查询的数据ID",
          required: true
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<object>",
    documentation: "��回查询到的数据对象，如果未找到返回null"
  }
};
