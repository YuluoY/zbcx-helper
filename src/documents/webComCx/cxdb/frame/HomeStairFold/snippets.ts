export default [
  {
    name: '基础用法',
    template: `<template>
  <cx-home-stair-fold
    :menus="menus"
    :plugDef="plugDef"
    :sysLogo="sysLogo"
    :attMenuStair="attMenuStair"
    :attMenuFold="attMenuFold"
    :headerStyle="''"
    :headerCom="'cx-sys-header'"
    :attUserDrop="{}"
    @logo-click="onLogoClick"
    @logout="onLogout"
    @help="onHelp"
  >
    <template #pre-util>
      <!-- 右侧工具前插槽区域 -->
    </template>
    <template #aft-util>
      <!-- 右侧工具后插槽区域 -->
    </template>
  </cx-home-stair-fold>
</template>`
  }
]; 