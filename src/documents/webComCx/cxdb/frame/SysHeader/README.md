# SysHeader 系统头部导航

头部一级菜单，包含系统logo、用户信息等。

## 基础用法

```vue
<template>
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
</template>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| sysLogo | String | - | 头部系统logo路径 |
| attUserDrop | Object | - | 用户下拉cx-user-dropdown组件参数 |
| attUserDrop.filterMenus | Function(items) | - | 过滤下拉选项，返回过滤后结果 |

## Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| logo-click | 系统logo点击事件 | - |
| logout | 系统退出 | - |
| help | 帮助 | - |

## Slots

| 插槽名 | 说明 |
|--------|------|
| menu | 嵌入菜单的插槽区域 |
| pre-util | 右侧工具前插槽区域 |
| aft-util | 右侧工具后插槽区域 |

## 类型定义

```ts
interface SysHeaderProps {
  /** 头部系统logo路径 */
  sysLogo?: string;

  /** 用户下拉cx-user-dropdown组件参数 */
  attUserDrop?: {
    /** 过滤下拉选项，返回过滤后结果 */
    filterMenus?: (items: any[]) => any[];
    [key: string]: any;
  };
} 
```