import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module dels
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const delsConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "dels",
  kind: MODULE_KINDS.FUNCTION,
  detail: "dels(major: number, minor: number, data: {ids: Array<number>}): Promise<boolean>",
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
      detail: "删除参数",
      required: true,
      properties: {
        ids: {
          type: "Array<number>",
          detail: "要删除的数据ID数组",
          required: true
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<boolean>",
    documentation: "返回是否全部删除成功"
  }
};
