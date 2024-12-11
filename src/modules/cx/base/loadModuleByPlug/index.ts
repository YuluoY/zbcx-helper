import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module loadModuleByPlug
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const loadModuleByPlugConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "loadModuleByPlug",
  kind: MODULE_KINDS.FUNCTION,
  detail: "loadModuleByPlug(plugName: String): Promise<{Object|null}>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
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
