import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module watch
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const watchConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "watch",
  kind: MODULE_KINDS.FUNCTION,
  detail: "watch(isReady: Function, callBack: Function, opts?: Object)",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "isReady",
      type: MODULE_KINDS.FUNCTION,
      detail: "是否满足条件的判断函数",
      required: true
    }, {
      label: "callBack",
      type: MODULE_KINDS.FUNCTION,
      detail: "满足条件后的回调函数",
      required: true
    }, {
      label: "opts",
      type: "object",
      detail: "满足条件后的回调函数",
      required: false,
      properties: {
        time: {
          type: "number",
          description: "间隔时间(ms)",
          default: 400,
          optional: true
        },
        maxTime: {
          type: "number",
          description: "最大监听时长(ms), 0时一直监听到正常响应",
          default: 10000,
          optional: true
        },
        outBack: {
          type: MODULE_KINDS.FUNCTION,
          description: "超时回调",
          optional: true
        }
      }
    }],
  returnType: {
    type: "void",
    detail: "void",
    documentation: "无返回值"
  }
};
