/**
 * 按钮组件配置
 * @module button
 */

import { DOCUMENTATION } from '../../constants';

export const buttonConfig = {
  tag: 'cx-button',
  attributes: {
    type: {
      type: 'string',
      description: '按钮类型',
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      default: 'primary'
    },
    size: {
      type: 'string',
      description: '按钮大小',
      options: ['large', 'medium', 'small', 'mini'],
      default: 'medium'
    },
    disabled: {
      type: 'boolean',
      description: '是否禁用',
      default: false
    }
  },
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "智博创享按钮组件。\n\n" +
           "**属性**:\n" +
           "- type: string - 按钮类型，可选值：primary/success/warning/danger/info\n" +
           "- size: string - 按钮大小，可选值：large/medium/small/mini\n" +
           "- disabled: boolean - 是否禁用\n\n" +
           "**示例**:\n" +
           "```html\n" +
           "<cx-button type=\"primary\" size=\"medium\">按钮</cx-button>\n" +
           "```"
  }
}; 