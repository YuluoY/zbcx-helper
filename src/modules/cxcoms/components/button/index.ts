/**
 * CxButton 组件配置
 * @module button
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';

const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "cx-button",
  kind: MODULE_KINDS.EVENT,
  detail: "<cx-button>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "智博创享按钮组件。\n\n" +
           "**示例**:\n" +
           "```html\n" +
           "<cx-button type=\"primary\">按钮</cx-button>\n" +
           "```\n\n" +
           "**type 属性说明**:\n" +
           "- primary: 主要按钮\n" +
           "- success: 成功按钮\n" +
           "- warning: 警告按钮\n" +
           "- danger: 危险按钮\n" +
           "- info: 信息按钮"
  },
  children: {
    type: {
      type: MODULE_KINDS.PROPERTY,
      label: "type",
      kind: MODULE_KINDS.PROPERTY,
      detail: "按钮类型",
      documentation: {
        kind: DOCUMENTATION.MARKDOWN,
        value: "按钮类型：primary/success/warning/danger/info"
      }
    }
  }
};

export { indexConfig };
module.exports = { indexConfig }; 