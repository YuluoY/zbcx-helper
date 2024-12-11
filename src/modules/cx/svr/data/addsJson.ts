/**
 * 自动生成的TypeScript配置文件
 * @module addsJson
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const addsJsonConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "addsJson",
  kind: MODULE_KINDS.FUNCTION,
  detail: "addsJson(major: number, minor: number, data: string): Promise<Array<number>>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "添加多条数据（JSON字符串格式）。\n\nExample:\n```javascript\n// 添加多条数据\nconst ids = await cx.svr.data.addsJson(101, 1, JSON.stringify([\n  { name: '测试1', code: 'test1' },\n  { name: '测试2', code: 'test2' }\n]))\n```"
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
      type: "string",
      detail: "要添加的数据对象数组的JSON字符串",
      required: true
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<Array<number>>",
    documentation: "返回新增数据的ID数组"
  }
};
