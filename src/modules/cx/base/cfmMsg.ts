/**
 * 自动生成的TypeScript配置文件
 * @module cfmMsg
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const cfmMsgConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "cfmMsg",
  kind: MODULE_KINDS.FUNCTION,
  detail: "cfmMsg(message: string): Promise",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "确认信息。\n\n**说明**: \n- 显示确认对话框\n- 返回Promise对象\n- ok执行resolve\n- cancel执行reject\n\nExample:\n```javascript\n// 基本用法\ntry {\n  await cx.base.cfmMsg('确认删除这条记录吗？')\n  // 用户点击了确认\n  await deleteRecord()\n} catch {\n  // 用户点击了取消\n  console.log('用户取消了操作')\n}\n\n// 链式调用\ncx.base.cfmMsg('是否继续？')\n  .then(() => {\n    // 用户点击了确认\n    console.log('继续操作')\n  })\n  .catch(() => {\n    // 用户点击了取消\n    console.log('取消操作')\n  })\n```"
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
