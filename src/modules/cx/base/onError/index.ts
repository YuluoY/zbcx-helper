import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module onError
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const onErrorConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "onError",
  kind: MODULE_KINDS.FUNCTION,
  detail: "onError(ret: Object)",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
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
