/**
 * 自动生成的TypeScript配置文件
 * @module getBill
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const getBillConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "getBill",
  kind: MODULE_KINDS.FUNCTION,
  detail: "getBill(major: number, minor: number, data: {id: number}): Promise<object>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "获取单据数据。\n\nExample:\n```javascript\n// 获取指定ID的单据数据\nconst bill = await cx.svr.data.getBill(101, 1, {\n  id: 1001\n})\n```"
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
        id: {
          type: "number",
          detail: "单据ID",
          required: true
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<object>",
    documentation: "返回单据数���对象，包含主表和子表数据"
  }
};
