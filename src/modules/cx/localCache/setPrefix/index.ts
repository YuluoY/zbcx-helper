import { loadComponentDocs } from "../../../../utils/docs";

/**
 * setPrefix 函数配置
 * @module setPrefix
 */

import type { FunctionConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const setPrefixConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "setPrefix",
  kind: MODULE_KINDS.FUNCTION,
  detail: "setPrefix(prefix)",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname) +
           "**示例**:\n" +
           "```javascript\n" +
           "// 设置存储键的前缀为 'app_'\n" +
           "cx.localCache.setPrefix('app_');\n\n" +
           "// 之后的存储操作会自动添加前缀\n" +
           "cx.localCache.set('userInfo', data); // 实际存储的键为 'app_userInfo'\n" +
           "cx.localCache.get('userInfo');       // 实际获取的键为 'app_userInfo'\n" +
           "```"
  },
  parameters: [
    {
      label: "prefix",
      type: "string",
      detail: "前缀",
      required: true
    }
  ]
}; 