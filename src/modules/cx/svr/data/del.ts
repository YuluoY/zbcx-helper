/**
 * 自动生成的TypeScript配置文件
 * @module del
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const delConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "del",
  kind: MODULE_KINDS.FUNCTION,
  detail: "del(major: number, minor: number, data: {id: number}): Promise<boolean>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "删除单条数据。\n\nExample:\n```javascript\n// 删除指定ID的数据\nconst success = await cx.svr.data.del(101, 1, {\n  id: 1001\n})\n```"
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
        id: {
          type: "number",
          detail: "要删除的数据ID",
          required: true
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<boolean>",
    documentation: "返回是否删��成功"
  }
};
