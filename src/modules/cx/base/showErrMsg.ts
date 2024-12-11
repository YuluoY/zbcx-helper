/**
 * 自动生成的TypeScript配置文件
 * @module showErrMsg
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const showErrMsgConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "showErrMsg",
  kind: MODULE_KINDS.FUNCTION,
  detail: "showErrMsg(message: String)",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "显示错误信息。\n\nExample:\n```javascript\n// 基本使用\ncx.base.showErrMsg('操作失败')  // 显示错误信息\n```"
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
