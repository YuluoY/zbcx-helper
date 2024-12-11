import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module contains
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const containsConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "contains",
  kind: MODULE_KINDS.FUNCTION,
  detail: "contains(obj: Object | Array, val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "obj",
      type: "Object | Array",
      detail: "要搜索的对象或数组",
      required: true
    }, {
      label: "val",
      type: "object",
      detail: "要查找的对象或属性",
      required: true
    }],
  returnType: {
    type: "boolean",
    detail: "Boolean",
    documentation: "如果存在返回true，否则返回false"
  }
};
