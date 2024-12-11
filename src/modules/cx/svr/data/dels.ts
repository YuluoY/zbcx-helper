/**
 * 自动生成的TypeScript配置文件
 * @module dels
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const delsConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "dels",
  kind: MODULE_KINDS.FUNCTION,
  detail: "dels(major: number, minor: number, data: {ids: Array<number>}): Promise<boolean>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "删除多条数据。\n\nExample:\n```javascript\n// 删除多个ID的数据\nconst success = await cx.svr.data.dels(101, 1, {\n  ids: [1001, 1002, 1003]\n})\n```"
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
