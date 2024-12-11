/**
 * 自动生成的TypeScript配置文件
 * @module locOrStr
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const locOrStrConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "locOrStr",
  kind: MODULE_KINDS.FUNCTION,
  detail: "locOrStr(str: String): String",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "字符串一个字符串是否是语言包中的项。如果是则返回语言包中的值，否则返回原值。\n\nExample:\n```javascript\n// 基本使用\ncx.base.locOrStr('test')  // 如果'test'在语言包中存在，返回对应的翻译，否则返回'test'\n```"
  },
  parameters: [{
      label: "str",
      type: "string",
      detail: "字符串",
      required: true
    }],
  returnType: {
    type: "string",
    detail: "String",
    documentation: "返回本地化后的字符串"
  }
};
