/**
 * 自动生成的TypeScript配置文件
 * @module getSequence
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const getSequenceConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getSequence",
  kind: MODULE_KINDS.FUNCTION,
  detail: "getSequence(major: number, minor: number, data: {field: string, format?: string}): Promise<string>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "获取序列号。\n\nExample:\n```javascript\n// 获取简单序列号\nconst seq1 = await cx.svr.data.getSequence(101, 1, {\n  field: 'code'\n})\n\n// 获取带格式的序列号\nconst seq2 = await cx.svr.data.getSequence(101, 1, {\n  field: 'code',\n  format: 'XS{YYYY}{MM}{DD}{0000}'\n})\n```"
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
      detail: "序列号参数",
      required: true,
      properties: {
        field: {
          type: "string",
          detail: "字段名",
          required: true
        },
        format: {
          type: "string",
          detail: "序列号格式，支持{YYYY}年、{MM}月、{DD}日、{0000}序号等占位符",
          required: false
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<string>",
    documentation: "返回生成的序列号"
  }
};
