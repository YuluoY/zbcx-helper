import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module getSequence
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const getSequenceConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getSequence",
  kind: MODULE_KINDS.FUNCTION,
  detail: "getSequence(major: number, minor: number, data: {field: string, format?: string}): Promise<string>",
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
      detail: "序列号参数",
      required: true,
      properties: {
        field: {
          type: "string",
          detail: "字段名",
          required: true
        },
        format: {
          type: "string",
          detail: "序列号格式，支持{YYYY}年、{MM}月、{DD}日、{0000}序号等占位符",
          required: false
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<string>",
    documentation: "返回生成的序列号"
  }
};
