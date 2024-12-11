import { loadComponentDocs } from "../../../../utils/docs";

/**
 * remove 函数配置
 * @module remove
 */

import type { FunctionConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const removeConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "remove",
  kind: MODULE_KINDS.FUNCTION,
  detail: "remove(key, storage?) → {Object}",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname) +
           "**示例**:\n" +
           "```javascript\n" +
           "// 从localStorage删除数据\n" +
           "cx.localCache.remove('userInfo');\n\n" +
           "// 从sessionStorage删除数据\n" +
           "cx.localCache.remove('tempData', 'sessionStorage');\n" +
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
    documentation: "this"
  }
}; 