/**
 * 自动生成的TypeScript配置文件
 * @module bytesToStr
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const bytesToStrConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "bytesToStr",
  kind: MODULE_KINDS.FUNCTION,
  detail: "bytesToStr(bytes: string): Array<byte>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "字节数组转字符串。\n\n**说明**: \n- 将字节数组转换为字符串\n- 输入为字符串格式的字节数据\n- 返回字节数组\n\nExample:\n```javascript\n// 将字节字符串转换为字节数组\nconst byteArray = cx.base.bytesToStr('48656C6C6F') // 返回字节数组\n```"
  },
  parameters: [{
      label: "bytes",
      type: "string",
      detail: "字节数组",
      required: true
    }],
  returnType: {
    type: "Array<byte>",
    detail: "Array<byte>",
    documentation: "返回字节数组"
  }
};
