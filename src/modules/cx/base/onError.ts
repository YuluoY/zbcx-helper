/**
 * 自动生成的TypeScript配置文件
 * @module onError
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const onErrorConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "onError",
  kind: MODULE_KINDS.FUNCTION,
  detail: "onError(ret: Object)",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "错误处理。出现错误时调用。\n\nExample:\n```javascript\n// 基本使用\ncx.base.onError({ message: '发生错误' })\n```"
  },
  parameters: [{
      label: "ret",
      type: "object",
      detail: "错误对象或自定义错误信息",
      required: true
    }],
  returnType: {
    type: "void",
    detail: "void",
    documentation: "无返回值"
  }
};
