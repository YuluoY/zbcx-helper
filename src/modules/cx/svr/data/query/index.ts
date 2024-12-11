import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module query
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const queryConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "query",
  kind: MODULE_KINDS.FUNCTION,
  detail: "query(major: number, minor: number, params: QueryParams): Promise<Array>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [
    {
      label: "major",
      type: "number",
      detail: "实体（主表）主类型",
      required: true
    },
    {
      label: "minor",
      type: "number",
      detail: "实体（主表）子类型",
      required: true
    },
    {
      label: "params",
      type: "object",
      detail: "查询参数",
      required: true,
      properties: {
        _key: {
          type: "string",
          detail: "表达式名字，对应sqlexp表name"
        },
        vals: {
          type: "string",
          detail: "替换sql中的?变量"
        },
        separator: {
          type: "string",
          detail: "vals的分隔符"
        },
        args: {
          type: "array",
          detail: "SQL条件数组 [[字段,操作符,值,连接符]]"
        },
        tables: {
          type: "string",
          detail: "联合查询表名"
        },
        cols: {
          type: "string",
          detail: "返回的列名"
        },
        geometry: {
          type: "number",
          detail: "是否返回空间数据"
        },
        geom: {
          type: "object",
          detail: "范围查询"
        },
        r: {
          type: "number",
          detail: "缓冲区半径"
        },
        orderby: {
          type: "string",
          detail: "排序规则"
        },
        init: {
          type: "string",
          detail: "分页标记"
        },
        pageno: {
          type: "string",
          detail: "页码"
        },
        pagesize: {
          type: "string",
          detail: "每页数据条数"
        }
      }
    }
  ],
  returnType: {
    type: "Promise",
    detail: "Promise<Array>",
    documentation: "返回查询结果数组"
  }
};
