/**
 * set 函数配置
 * @module set
 */

import type { FunctionConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';

export const setConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "set",
  kind: MODULE_KINDS.FUNCTION,
  detail: "set(key, value, duration?, storage?) → {Object}",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "以键值存储\n\n" +
           "**示例**:\n" +
           "```javascript\n" +
           "// 永久存储在localStorage\n" +
           "cx.localCache.set('userInfo', { name: 'Tom', age: 18 });\n\n" +
           "// 存储在sessionStorage，有效期1小时\n" +
           "cx.localCache.set('tempData', { token: 'abc123' }, 3600, 'sessionStorage');\n\n" +
           "// 存储在localStorage，有效期30分钟\n" +
           "cx.localCache.set('authToken', 'xyz789', 1800);\n" +
           "```"
  },
  parameters: [
    {
      label: "key",
      type: "string",
      detail: "键",
      required: true
    },
    {
      label: "value",
      type: "Object",
      detail: "值",
      required: true
    },
    {
      label: "duration",
      type: "number",
      detail: "有效时长，单位为秒，不传则永久有效",
      required: false,
      default: 0
    },
    {
      label: "storage",
      type: "string",
      detail: "存储类型，值是localStorage 或 sessionStorage",
      required: false,
      default: "localStorage"
    }
  ],
  returnType: {
    type: "Object",
    detail: "Object",
    documentation: "this"
  }
}; 