/**
 * 自动生成的TypeScript配置文件
 * @module url
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const urlConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "url",
  kind: MODULE_KINDS.FUNCTION,
  detail: "url(): Promise<string>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "获取服务器URL地址。\n\nExample:\n```javascript\n// 获取服务器URL\nconst serverUrl = await cx.svr.data.url()\n```"
  },
  parameters: [],
  returnType: {
    type: "Promise",
    detail: "Promise<string>",
    documentation: "返回服务器的URL地址"
  }
};
