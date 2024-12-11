/**
 * 自动生成的TypeScript配置文件
 * @module initSys
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const initSysConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "initSys",
  kind: MODULE_KINDS.FUNCTION,
  detail: "initSys(major: number, minor: number, data: {type: string}): Promise<boolean>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "初始化系统数据。\n\nExample:\n```javascript\n// 初始化指定类型的系统数据\nconst success = await cx.svr.data.initSys(101, 1, {\n  type: 'basic'\n})\n```"
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
      detail: "初始化参数",
      required: true,
      properties: {
        type: {
          type: "string",
          detail: "初始化类型",
          required: true
        }
      }
    }],
  returnType: {
    type: "Promise",
    detail: "Promise<boolean>",
    documentation: "返回是否初始化成功"
  }
};
