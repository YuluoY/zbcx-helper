# HomeStairFold 厂字形系统首页

厂字形系统首页组件,包含头部和菜单。

## 基础用法

```vue
<template>
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
</template>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| sysLogo | String | - | 头部系统logo路径 |
| headerStyle | String | - | 头部的样式 |
| headerCom | String / Component | cx-sys-header | 头部组件 |
| attUserDrop | Object | - | 用户下拉cx-user-dropdown组件参数，见cx-sys-header组件 |
| menus | Array | - | 菜单数据对象，结构见 menufold |
| plugDef | Object | - | 所在的插件对象 |
| attMenuStair | Object | - | menustair组件的参数对象 |
| attMenuFold | Object | - | menufold组件的参数对象 |

## Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| logo-click | 系统logo点击事件 | - |
| logout | 系统退出 | - |
| help | 帮助 | - |

## Slots

| 插槽名 | 说明 |
|--------|------|
| pre-util | 右侧工具前插槽区域 |
| aft-util | 右侧工具后插槽区域 |

## 类型定义

```ts
export interface HomeStairFoldProps {
  /** 头部系统logo路径 */
  sysLogo?: string;
  /** 头部的样式 */
  headerStyle?: string;
  /** 头部组件 */
  headerCom?: string | Component;
  /** 用户下拉cx-user-dropdown组件参数，见cx-sys-header组件 */
  attUserDrop?: Record<string, any>;
  /** 菜单数据对象，结构见 menufold */
  menus?: any[];
  /** 所在的插件对象 */
  plugDef?: Record<string, any>;
  /** menustair组件的参数对象 */
  attMenuStair?: Record<string, any>;
  /** menufold组件的参数对象 */
  attMenuFold?: Record<string, any>;
} 