export const snippets = {
  "cx-menu-stair": {
    "prefix": "cx-menu-stair",
    "body": [
      "<cx-menu-stair",
      "  size=\"${1:default}\"",
      "  :menus=\"${2:[]}\"",
      "  :def-active=\"${3:{}}\"",
      "  mode=\"${4:horizontal}\"",
      "  border-position=\"${5:bottom}\"",
      "  :inverse=\"${6:false}\"",
      "  @menu-click=\"${7:handleMenuClick}\"",
      "  @menu-mouseover=\"${8:handleMenuMouseover}\"",
      "  @menu-mouseout=\"${9:handleMenuMouseout}\"",
      "  @menu-contextmenu=\"${10:handleMenuContextmenu}\"",
      ">",
      "  <template #menu-suffix=\"{ menu }\">",
      "    ${11:<!-- 菜单后缀内容 -->}",
      "  </template>",
      "</cx-menu-stair>"
    ],
    "description": "一级菜单组件"
  }
}; 