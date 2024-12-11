/**
 * get 函数配置
 * @module get
 */

import type { FunctionConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';

export const getConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "get",
  kind: MODULE_KINDS.FUNCTION,
  detail: "get(key, storage?) → {Object}",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "根据键获取对应的值\n\n" +
           "**示例**:\n" +
           "```javascript\n" +
           "// 从localStorage获取数据\n" +
           "const data = cx.localCache.get('userInfo');\n\n" +
           "// 从sessionStorage获取数据\n" +
           "const tempData = cx.localCache.get('tempData', 'sessionStorage');\n" +
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
      label: "storage",
      type: "string",
      detail: "存储类型，值是localStorage 或 sessionStorage",
      required: false
    }
  ],
  returnType: {
    type: "Object",
    detail: "Object",
    documentation: "返回值"
  }
}; 