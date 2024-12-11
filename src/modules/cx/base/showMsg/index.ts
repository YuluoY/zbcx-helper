import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module showMsg
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const showMsgConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "showMsg",
  kind: MODULE_KINDS.FUNCTION,
  detail: "showMsg(message: String, type?: String)",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "message",
      type: "string",
      detail: "消息文本",
      required: true
    }, {
      label: "type",
      type: "string",
      detail: "类型(success/warning/info/error)",
      required: false
    }],
  returnType: {
    type: "void",
    detail: "void",
    documentation: "无返回值"
  }
};
