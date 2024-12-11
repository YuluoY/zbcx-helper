/**
 * 自动生成的TypeScript配置文件
 * @module stat
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const statConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "stat",
  kind: MODULE_KINDS.FUNCTION,
  detail: "stat(major: number, minor: number, data: {args?: Array<Array<any>>, fields: Array<string>, groupby?: string}): Promise<Array<object>>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "统计数据。\n\nExample:\n```javascript\n// 简单统计\nconst stats = await cx.svr.data.stat(101, 1, {\n  fields: ['COUNT(*) as count', 'SUM(amount) as total']\n})\n\n// 带条件和分组的统计\nconst stats = await cx.svr.data.stat(101, 1, {\n  args: [['status', '=', 1]],\n  fields: ['type', 'COUNT(*) as count', 'SUM(amount) as total'],\n  groupby: 'type'\n})\n```"
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
      detail: "统计参数",
      required: true,
      properties: {
        args: {
          type: "Array<Array<any>>",
          detail: "查询条件数组 [[字段,操作符,值,连接符]]",
          required: false
        },
        fields: {
          type: "Array<string>",
          detail: "统计字段数组，支持SQL聚合函数",
          required: true
        },
        groupby: {
          type: "string",
          detail: "分组字段，如：'type, status'",
          required: false
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<Array<object>>",
    documentation: "返回统计结果数组"
  }
};
