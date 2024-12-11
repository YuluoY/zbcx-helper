/**
 * 自动生成的TypeScript配置文件
 * @module throttle
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const throttleConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "throttle",
  kind: MODULE_KINDS.FUNCTION,
  detail: "throttle(ctx: Object, func: Function, evtName?: String, delay?: Number)",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "节流，每隔一定时间内，触发一次。\n\n**说明**: \n- 用于限制函数的调用频率\n- ctx为节流处理的上下文环境\n- func为事件回调函数\n- evtName为事件标识，同一个ctx中对多个func的封装要传入不同的evtName\n- delay为节流间隔时间，单位毫秒，默认500ms\n\nExample:\n```javascript\n// 基本使用\nconst handler = cx.base.throttle(this, () => {\n  console.log('throttled function called')\n})\n\n// 指定事件名和延迟时间\nconst handler2 = cx.base.throttle(this, () => {\n  console.log('throttled with custom config')\n}, 'myEvent', 1000)\n```"
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
