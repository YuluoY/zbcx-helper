import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module throttle
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const throttleConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "throttle",
  kind: MODULE_KINDS.FUNCTION,
  detail: "throttle(ctx: Object, func: Function, evtName?: String, delay?: Number)",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "ctx",
      type: "object",
      detail: "节流处理的上下文环境，一般是类对象",
      required: true
    }, {
      label: "func",
      type: MODULE_KINDS.FUNCTION,
      detail: "事件回调函数",
      required: true
    }, {
      label: "evtName",
      type: "string",
      detail: "事件标识，同一个ctx中对多个func的封装要传入不同的evtName",
      required: false,
      default: "def"
    }, {
      label: "delay",
      type: "number",
      detail: "节流间隔时间，单位毫秒",
      required: false,
      default: 500
    }],
  returnType: {
    type: MODULE_KINDS.FUNCTION,
    detail: "Function",
    documentation: "返回节流处理后的函数"
  }
};
