import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module loadModule
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const loadModuleConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "loadModule",
  kind: MODULE_KINDS.FUNCTION,
  detail: "loadModule(url: String): Promise<ModuleRecord>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
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
