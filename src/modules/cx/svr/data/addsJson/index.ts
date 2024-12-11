import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module addsJson
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const addsJsonConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "addsJson",
  kind: MODULE_KINDS.FUNCTION,
  detail: "addsJson(major: number, minor: number, data: string): Promise<Array<number>>",
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
      type: "string",
      detail: "要添加的数据对象数组的JSON字符串",
      required: true
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<Array<number>>",
    documentation: "返回新增数据的ID数组"
  }
};
