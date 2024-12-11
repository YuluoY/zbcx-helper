/**
 * 自动生成的TypeScript配置文件
 * @module query
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const queryConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "query",
  kind: MODULE_KINDS.FUNCTION,
  detail: "query(major: number, minor: number, params: QueryParams): Promise<Array>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "执行数据库查询操作。\n\n参数说明：\n- major: 实体（主表）主类型\n- minor: 实体（主表）子类型\n- params: 查询参数对象，包含以下可选属性：\n  - _key: 表达式名字，对应sqlexp表name，该搜索库中exec字段配置条件语句\n  - vals: 替换sql中有 ? 变量，以separator分隔依次替换\n  - separator: vals的分隔符（字符串中可能有,可以设置特殊分隔符）\n  - args: 自定义SQL条件件对象数组 [[fld1,oper,val,连接符]]\n  - tables: 联合查询表名，如 a:b:cx_entity;c:cx_fld\n  - cols: 返回的列名，默认查询所有字段\n  - geometry: 是否返回空间数据\n  - geom: 范围查询 {type, coordinates}\n  - r: 基于geom的缓冲区半径\n  - orderby: 排序规则\n  - init: 分页标记\n  - pageno: 页码\n  - pagesize: 每页数据条数\n\n示例：\n```javascript\ncx.svr.data.query(101, 1, {\n  args: [['id', '>', 0], ['name', '=', '测试', 'AND']],\n  pagesize: '10'\n})\n```"
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
