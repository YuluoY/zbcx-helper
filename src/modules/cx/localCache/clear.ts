/**
 * clear 函数配置
 * @module clear
 */

import type { FunctionConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';

export const clearConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "clear",
  kind: MODULE_KINDS.FUNCTION,
  detail: "clear() → {Object}",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "清除所有\n\n" +
           "**返回值**:\n" +
           "- Object - this\n\n" +
           "**示例**:\n" +
           "```javascript\n" +
           "// 清除所有缓存数据\n" +
           "cx.localCache.clear();\n" +
           "```"
  }
}; 