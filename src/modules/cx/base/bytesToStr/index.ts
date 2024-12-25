import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module bytesToStr
 */

import { FunctionConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const bytesToStrConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "bytesToStr",
  kind: MODULE_KINDS.FUNCTION,
  detail: "bytesToStr(bytes: string): Array<byte>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
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
