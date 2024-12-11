/**
 * 自动生成的TypeScript配置文件
 * @module refreshPage
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const refreshPageConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "refreshPage",
  kind: MODULE_KINDS.FUNCTION,
  detail: "refreshPage()",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "刷新当前页面。\n\nExample:\n```javascript\n// 基本使用\ncx.base.refreshPage()  // 刷新当前页面\n```"
  },
  parameters: [],
  returnType: {
    type: "void",
    detail: "void",
    documentation: "无返回值"
  }
};
