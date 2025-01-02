# HomeStairPanel 面板菜单系统首页

面板菜单首页，头部用menupanel菜单。

## 基础用法

```vue
<template>
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
</template>
```

## Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| sysLogo | String | - | 头部系统logo路径 |
| headerStyle | String | - | 头部的样式 |
| headerCom | String / Component | cx-sysnav-stair | 头部组件 |
| menus | Array | - | 菜单数据对象，结构见 menufold |
| attMenuPanel | Object | - | menuspanel组件的参数对象 |
| maxRunNum | Number | 3 | 最多在运行状态插件数,超出按队列销毁 |

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
interface HomeStairPanelProps {
  /** 头部系统logo路径 */
  sysLogo?: string;
  /** 头部的样式 */
  headerStyle?: string;
  /** 头部组件 */
  headerCom?: string | Component;
  /** 菜单数据对象，结构见 menufold */
  menus?: any[];
  /** menuspanel组件的参数对象 */
  attMenuPanel?: Record<string, any>;
  /** 最多在运行状态插件数,超出按队列销毁 */
  maxRunNum?: number;
} 
```