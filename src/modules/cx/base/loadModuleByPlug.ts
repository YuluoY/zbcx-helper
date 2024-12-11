/**
 * 自动生成的TypeScript配置文件
 * @module loadModuleByPlug
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const loadModuleByPlugConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "loadModuleByPlug",
  kind: MODULE_KINDS.FUNCTION,
  detail: "loadModuleByPlug(plugName: String): Promise<{Object|null}>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "根据插件加载模块插件。如名称以ModulePlug结尾则加载子节点。转为wx时去掉\n\n**说明**: \n- 根据插件名加载对应的模块\n- 返回Promise对象，resolve时返回加载的模块\n\nExample:\n```javascript\n// 基本使用\nconst module = await cx.base.loadModuleByPlug('myPlugin')\n```"
  },
  parameters: [{
      label: "plugName",
      type: "string",
      detail: "插件名",
      required: true
    }],
  returnType: {
    type: "Promise<{Object|null}>",
    detail: "Promise<{Object|null}>",
    documentation: "异步返回对象，返回模块对象或null"
  }
};
