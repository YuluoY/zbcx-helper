import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module reload
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const reloadConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "reload",
  kind: MODULE_KINDS.FUNCTION,
  detail: "reload(major: number, minor: number, data: {id: number}): Promise<object>",
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
      detail: "重载参数",
      required: true,
      properties: {
        id: {
          type: "number",
          detail: "要重新加载的数据ID",
          required: true
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<object>",
    documentation: "返回重新加载的数据对象"
  }
};
