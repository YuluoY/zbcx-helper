export const snippets = {
  "cx-toolbar-pop": {
    "prefix": "cx-toolbar-pop",
    "body": [
      "<cx-toolbar-pop",
      "  size=\"${1:default}\"",
      "  :eltooltip=\"${2:{}}\"",
      "  placement=\"${3:bottom}\"",
      "  type=\"${4:default}\"",
      "  :data=\"${5:[]}\"",
      "  @onclick=\"${6:handleClick}\"",
      ">",
      "  <template #default=\"{ pop }\">",
      "    ${7:<!-- 自定义统一的弹窗样式 -->}",
      "  </template>",
      "  <template #popName=\"{ pop }\">",
      "    ${8:<!-- 自定义不统一的弹窗样式 -->}",
      "  </template>",
      "</cx-toolbar-pop>"
    ],
    "description": "工具条弹出框组件"
  }
}; 