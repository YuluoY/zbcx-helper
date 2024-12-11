import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module strToBytes
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const strToBytesConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "strToBytes",
  kind: MODULE_KINDS.FUNCTION,
  detail: "strToBytes(str: String): Array<byte>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
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
