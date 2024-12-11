import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module compareVersions
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const compareVersionsConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "compareVersions",
  kind: MODULE_KINDS.FUNCTION,
  detail: "compareVersions(v1: string | number, v2: string | number): number",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "v1",
      type: "string | number",
      detail: "第一个版本值，如：'1.1.2' 或数值",
      required: true
    }, {
      label: "v2",
      type: "string | number",
      detail: "第二个版本值",
      required: true
    }],
  returnType: {
    type: "number",
    detail: "number",
    documentation: "判断的值，0是相等，1是v1大于v2，-1是v1小于v2"
  }
};
