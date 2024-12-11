/**
 * 自动生成的TypeScript配置文件
 * @module delete
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const deleteConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "delete",
  kind: MODULE_KINDS.FUNCTION,
  detail: "delete(major: number, minor: number, args: Array<Array<any>>, isMemory?: boolean): Promise<number>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "删除数据。\n\nExample:\n```javascript\n// 删除指定ID的数据\ncx.svr.data.delete(101, 1, [['id', '=', 1]])\n\n// 删除多个条件的数据\ncx.svr.data.delete(101, 1, [\n  ['type', '=', 2],\n  ['status', '=', 0, 'and']\n])\n```"
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
      label: "args",
      type: "Array<Array<any>>",
      detail: "删除条件数组 [[字段,操作符,值,连接符]], 操作符支持: =,>,<,>=,<=,like,in等",
      required: true
    }, {
      label: "isMemory",
      type: "boolean",
      detail: "是否仅删除内存中的数据，即不写入数据库",
      required: false
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<number>",
    documentation: "返回删除影响的行数"
  }
};
