import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module debounce
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const debounceConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "debounce",
  kind: MODULE_KINDS.FUNCTION,
  detail: "debounce(ctx: Object, func: Function, evtName?: string, delay?: number): Function",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "ctx",
      type: "object",
      detail: "防抖处理的上下文环境，一般是类对象",
      required: true
    }, {
      label: "func",
      type: MODULE_KINDS.FUNCTION,
      detail: "事件回调函数",
      required: true
    }, {
      label: "evtName",
      type: "string",
      detail: "事件标识，同个ctx中多个func防抖时要传入不同evtName",
      required: false,
      default: "def"
    }, {
      label: "delay",
      type: "number",
      detail: "防抖间隔时间，单位毫秒",
      required: false,
      default: 500
    }],
  returnType: {
    type: MODULE_KINDS.FUNCTION,
    detail: "Function",
    documentation: "返回新的防抖函数"
  }
};
