import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module queryAll
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const queryAllConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "queryAll",
  kind: MODULE_KINDS.FUNCTION,
  detail: "queryAll(major: number, minor: number, data: {args?: Array<Array<any>>, orderby?: string}): Promise<Array<object>>",
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
        args: {
          type: "Array<Array<any>>",
          detail: "查询条件数组 [[字段,操作符,值,连接符]], 操作符支持: =,>,<,>=,<=,like,in等",
          required: false
        },
        orderby: {
          type: "string",
          detail: "排序规则，如：'id DESC, name ASC'",
          required: false
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<Array<object>>",
    documentation: "返回所有符合条件的数据数组"
  }
};
