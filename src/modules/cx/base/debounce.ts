/**
 * 自动生成的TypeScript配置文件
 * @module debounce
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const debounceConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "debounce",
  kind: MODULE_KINDS.FUNCTION,
  detail: "debounce(ctx: Object, func: Function, evtName?: string, delay?: number): Function",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "防抖事件触发，在一定时间内只执行最后一次。\n\n**说明**: \n- ctx用于存储防抖状态的上下文环境\n- 同一个ctx中多个func防抖时需要传入不同的evtName\n- delay默认为500毫秒\n- evtName默认为'def'\n\nExample:\n```javascript\n// 基本用法\nclass MyComponent {\n  constructor() {\n    this.handleInput = cx.base.debounce(this, this.onInput)\n  }\n  \n  onInput(e) {\n    console.log('input value:', e.target.value)\n  }\n}\n\n// 多个防抖函数\nclass MyComponent {\n  constructor() {\n    this.handleInput = cx.base.debounce(this, this.onInput, 'input', 300)\n    this.handleScroll = cx.base.debounce(this, this.onScroll, 'scroll', 100)\n  }\n}\n```"
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
