/**
 * 自动生成的TypeScript配置文件
 * @module nextId
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const nextIdConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "nextId",
  kind: MODULE_KINDS.FUNCTION,
  detail: "nextId(): Number",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "产生一个新的ID。\n\nExample:\n```javascript\n// 基本使用\nconst id = cx.base.nextId()  // 返回一个新的ID\n```"
  },
  parameters: [],
  returnType: {
    type: "number",
    detail: "Number",
    documentation: "返回一个新的ID"
  }
};
