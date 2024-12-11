import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module newObj
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const newObjConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "newObj",
  kind: MODULE_KINDS.FUNCTION,
  detail: "newObj(objClass: String | Object): Object",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "objClass",
      type: "String | Object",
      detail: "对象类名",
      required: true
    }],
  returnType: {
    type: "object",
    detail: "Object",
    documentation: "返回创建的对象实例"
  }
};
