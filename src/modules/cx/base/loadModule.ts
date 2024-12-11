/**
 * 自动生成的TypeScript配置文件
 * @module loadModule
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const loadModuleConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "loadModule",
  kind: MODULE_KINDS.FUNCTION,
  detail: "loadModule(url: String): Promise<ModuleRecord>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "加载指定URL的模块。\n\n**说明**: \n- 通过URL加载JavaScript模块\n- 返回Promise对象，resolve时返回加载的模块记录\n\nExample:\n```javascript\n// 基本使用\nawait cx.base.loadModule('/path/to/module.js')\n\n// 处理加载错误\ntry {\n  await cx.base.loadModule('/invalid/path.js')\n} catch (err) {\n  console.error('模块加载失败:', err)\n}\n```"
  },
  parameters: [{
      label: "url",
      type: "string",
      detail: "模块的URL地址",
      required: true
    }],
  returnType: {
    type: "Promise<ModuleRecord>",
    detail: "Promise<ModuleRecord>",
    documentation: "返回Promise对象，resolve时返回加载的模块记录"
  }
};
