export const snippets = {
  "cx-user-dropdown": {
    "prefix": "cx-user-dropdown",
    "body": [
      "<cx-user-dropdown",
      "  size=\"${1:default}\"",
      "  username=\"${2:用户名}\"",
      "  trigger=\"${3:click}\"",
      "  childPlacement=\"${4:left}\"",
      "  :filter-menu=\"${5:filterMenu}\"",
      "  :extra-menus=\"[",
      "    {",
      "      name: '${6:menu1}',",
      "      title: '${7:菜单1}',",
      "      icon: '${8:cx-fi ic-setting}',",
      "      divided: '${9:true}',",
      "      click: ${10:() => {}}",
      "    }",
      "  ]\"",
      "  @show-userinfo=\"${11:onShowUserInfo}\"",
      "  @sys-config=\"${12:onSysConfig}\"",
      "  @pswEdit=\"${13:onPswEdit}\"",
      "  @help=\"${14:onHelp}\"",
      "  @exit=\"${15:onExit}\"",
      "  @locale-change=\"${16:onLocaleChange}\"",
      "  @theme-change=\"${17:onThemeChange}\"",
      "  @size-change=\"${18:onSizeChange}\"",
      "/>"
    ],
    "description": "用户自定义快捷菜单"
  }
}; 