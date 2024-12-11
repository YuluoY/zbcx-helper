import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module update
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const updateConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "update",
  kind: MODULE_KINDS.FUNCTION,
  detail: "update(major: number, minor: number, data: object): Promise<boolean>",
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
      detail: "更新数据对象",
      required: true,
      properties: {
        id: {
          type: "number",
          detail: "要更新的数据ID",
          required: true
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<boolean>",
    documentation: "返回是否更新成功"
  }
};
