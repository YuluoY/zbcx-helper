/**
 * 自动生成的TypeScript配置文件
 * @module add
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const addConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "add",
  kind: MODULE_KINDS.FUNCTION,
  detail: "add(major: number, minor: number, data: object): Promise<number>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "添加单条数据。\n\nExample:\n```javascript\n// 添加单条数据\nconst id = await cx.svr.data.add(101, 1, {\n  name: '测试',\n  code: 'test'\n})\n```"
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
      detail: "要添加的数据对象",
      required: true
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<number>",
    documentation: "返回新增数据的ID"
  }
};
