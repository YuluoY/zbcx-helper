/**
 * 自动生成的TypeScript配置文件
 * @module addsNoId
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const addsNoIdConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "addsNoId",
  kind: MODULE_KINDS.FUNCTION,
  detail: "addsNoId(major: number, minor: number, data: Array<object>): Promise<Array<number>>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "添加多条数据（不自动生成ID）。\n\nExample:\n```javascript\n// 添加多条数据，ID需要在data中指定\nconst ids = await cx.svr.data.addsNoId(101, 1, [\n  { id: 1001, name: '测试1', code: 'test1' },\n  { id: 1002, name: '测试2', code: 'test2' }\n])\n```"
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
      type: "Array<object>",
      detail: "要添加的数据对象数组，每个对象需要包含id字段",
      required: true
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<Array<number>>",
    documentation: "返回新增数据的ID数组"
  }
};
