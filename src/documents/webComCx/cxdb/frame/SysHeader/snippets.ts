export default [
  {
    name: '基础用法',
    template: `<template>
  <cx-sys-header 
    :sys-logo="sysLogo" 
    :style="headerStyle"
    :attUserDrop="attUserDrop"
    @logo-click="onLogoClick"
    @logout="onLogout"
    @help="onHelp"
  >
    <template #menu>
      <cx-menu-stair 
        v-bind="attMenuStair" 
        :size="size" 
        :menus="menus" 
        :defActive="activeStairMenu" 
        @menu-click="onMenuClick"
      />
    </template>
    <template #pre-util>
      <!-- 右侧工具前插槽区域 -->
    </template>
    <template #aft-util>
      <!-- 右侧工具后插槽区域 -->
    </template>
  </cx-sys-header>
</template>`
  }
]; 