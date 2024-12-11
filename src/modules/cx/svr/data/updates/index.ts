import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module updates
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const updatesConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "updates",
  kind: MODULE_KINDS.FUNCTION,
  detail: "updates(major: number, minor: number, data: {items: Array<object>}): Promise<boolean>",
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
      detail: "批量更新参数",
      required: true,
      properties: {
        items: {
          type: "Array<object>",
          detail: "要更新的数据对象数组，每个对象必须包含id字段",
          required: true
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<boolean>",
    documentation: "返回是否全部更新成功"
  }
};
