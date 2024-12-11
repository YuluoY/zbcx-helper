/**
 * 自动生成的TypeScript配置文件
 * @module updates
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const updatesConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "updates",
  kind: MODULE_KINDS.FUNCTION,
  detail: "updates(major: number, minor: number, data: {items: Array<object>}): Promise<boolean>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "批量更新数据。\n\nExample:\n```javascript\n// 批量更新多条数据\nconst success = await cx.svr.data.updates(101, 1, {\n  items: [\n    { id: 1001, name: '名称1', status: 2 },\n    { id: 1002, name: '名称2', status: 3 }\n  ]\n})\n```"
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
      detail: "批量更新参数",
      required: true,
      properties: {
        items: {
          type: "Array<object>",
          detail: "要更新的数据对象数组，每个对象必须包含id字段",
          required: true
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<boolean>",
    documentation: "返回是否全部更新成功"
  }
};
