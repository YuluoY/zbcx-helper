/**
 * 自动生成的TypeScript配置文件
 * @module strToBytes
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const strToBytesConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "strToBytes",
  kind: MODULE_KINDS.FUNCTION,
  detail: "strToBytes(str: String): Array<byte>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "字符串转字节数组。\n\n**说明**: \n- 将字符串转换为字节数组\n\nExample:\n```javascript\n// 基本使用\nconst bytes = cx.base.strToBytes('Hello')  // 返回字节数组\n```"
  },
  parameters: [{
      label: "str",
      type: "string",
      detail: "字符串",
      required: true
    }],
  returnType: {
    type: "Array<byte>",
    detail: "Array<byte>",
    documentation: "返回字节数组"
  }
};
