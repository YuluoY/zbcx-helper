/**
 * 自动生成的TypeScript配置文件
 * @module querySql
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const querySqlConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "querySql",
  kind: MODULE_KINDS.FUNCTION,
  detail: "querySql(major: number, minor: number, data: {sql: string, args?: Array<any>}): Promise<Array<object>>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "执行SQL查询。\n\nExample:\n```javascript\n// 简单SQL查询\nconst list = await cx.svr.data.querySql(101, 1, {\n  sql: 'SELECT * FROM t_user WHERE status = 1'\n})\n\n// 带参数的SQL查询\nconst list = await cx.svr.data.querySql(101, 1, {\n  sql: 'SELECT * FROM t_user WHERE status = ? AND type IN (?)',\n  args: [1, '1,2,3']\n})\n```"
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
        sql: {
          type: "string",
          detail: "SQL查询语句",
          required: true
        },
        args: {
          type: "Array<any>",
          detail: "SQL参数数组",
          required: false
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<Array<object>>",
    documentation: "返回查询结果数组"
  }
};
