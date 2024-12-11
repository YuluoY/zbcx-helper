/**
 * 自动生成的TypeScript配置文件
 * @module compareVersions
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const compareVersionsConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "compareVersions",
  kind: MODULE_KINDS.FUNCTION,
  detail: "compareVersions(v1: string | number, v2: string | number): number",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "比较v1和v2两个版本的大小。\n\n**说明**: \n- 支持字符串或数值类型的版本号\n- 返回值说明：\n  - 0: 表示相等\n  - 1: 表示v1大于v2\n  - -1: 表示v1小于v2\n\nExample:\n```javascript\n// 字符串版本号比较\ncx.base.compareVersions('1.1.2', '1.1.1') // 1\ncx.base.compareVersions('1.1.2', '1.1.2') // 0\ncx.base.compareVersions('1.1.2', '1.2.0') // -1\n\n// 数值版本号比较\ncx.base.compareVersions(1.12, 1.2) // -1\n```"
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
