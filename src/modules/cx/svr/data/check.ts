/**
 * 自动生成的TypeScript配置文件
 * @module check
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const checkConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "check",
  kind: MODULE_KINDS.FUNCTION,
  detail: "check(major: number, minor: number, data: {field: string, value: any}): Promise<boolean>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "检查字段值是否存在。\n\nExample:\n```javascript\n// 检查code字段值是否已存在\nconst exists = await cx.svr.data.check(101, 1, {\n  field: 'code',\n  value: 'test001'\n})\n```"
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
      detail: "检查参数",
      required: true,
      properties: {
        field: {
          type: "string",
          detail: "要检查的字段名",
          required: true
        },
        value: {
          type: "any",
          detail: "要���查的字段值",
          required: true
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<boolean>",
    documentation: "返回字段值是否存在，true表示存在，false表示不存在"
  }
};
