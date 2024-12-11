/**
 * key 函数配置
 * @module key
 */

import type { FunctionConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';

export const keyConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "key",
  kind: MODULE_KINDS.FUNCTION,
  detail: "key(key) → {String}",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "键名\n\n" +
           "**示例**:\n" +
           "```javascript\n" +
           "// 获取格式化后的键名\n" +
           "const formattedKey = cx.localCache.key('userInfo');\n" +
           "// 如果设置了前缀 'app_'，返回 'app_userInfo'\n" +
           "```"
  },
  parameters: [
    {
      label: "key",
      type: "string",
      detail: "键",
      required: true
    }
  ],
  returnType: {
    type: "String",
    detail: "String",
    documentation: "格式化后的键名"
  }
}; 