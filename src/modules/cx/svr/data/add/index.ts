import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module add
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const addConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "add",
  kind: MODULE_KINDS.FUNCTION,
  detail: "add(major: number, minor: number, data: object): Promise<number>",
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
      detail: "要添加的数据对象",
      required: true
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<number>",
    documentation: "返回新增数据的ID"
  }
};
