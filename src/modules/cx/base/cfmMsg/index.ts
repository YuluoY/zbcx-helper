import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module cfmMsg
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const cfmMsgConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "cfmMsg",
  kind: MODULE_KINDS.FUNCTION,
  detail: "cfmMsg(message: string): Promise",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "message",
      type: "string",
      detail: "消息文本",
      required: true
    }],
  returnType: {
    type: "Promise",
    detail: "Promise",
    documentation: "交互回调，ok执行resolve，cancel执行reject"
  }
};
