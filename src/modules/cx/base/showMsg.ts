/**
 * 自动生成的TypeScript配置文件
 * @module showMsg
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const showMsgConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "showMsg",
  kind: MODULE_KINDS.FUNCTION,
  detail: "showMsg(message: String, type?: String)",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "显示信息。\n\n**说明**: \n- 用于显示各种类型的提示信息\n- type参数可以指定消息类型\n\nExample:\n```javascript\n// 基本使用\ncx.base.showMsg('操作成功')  // 显示普通提示信息\ncx.base.showMsg('操作成功', 'success')  // 显示成功提示\ncx.base.showMsg('请注意', 'warning')  // 显示警告提示\ncx.base.showMsg('提示信息', 'info')  // 显示信息提示\ncx.base.showMsg('出错了', 'error')  // 显示错误提示\n```"
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
