import { loadComponentDocs } from "../../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module version
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../../constants";

export const versionConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "version",
  kind: MODULE_KINDS.FUNCTION,
  detail: "version(): Promise<string>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [],
  returnType: {
    type: "Promise",
    detail: "Promise<string>",
    documentation: "返回服务器的版本号"
  }
};
