import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module showErrMsg
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const showErrMsgConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "showErrMsg",
  kind: MODULE_KINDS.FUNCTION,
  detail: "showErrMsg(message: String)",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "message",
      type: "string",
      detail: "错误文本",
      required: true
    }],
  returnType: {
    type: "void",
    detail: "void",
    documentation: "无返回值"
  }
};
