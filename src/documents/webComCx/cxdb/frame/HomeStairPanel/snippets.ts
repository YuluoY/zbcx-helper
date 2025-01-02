export default [
  {
    name: '基础用法',
    template: `<template>
  <cx-home-stair-panel
    :menus="menus"
    :sysLogo="sysLogo"
    :attMenuPanel="attMenuPanel"
    :headerStyle="''"
    :headerCom="'cx-sysnav-stair'"
    :maxRunNum="3"
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
  </cx-home-stair-panel>
</template>`
  }
]; 