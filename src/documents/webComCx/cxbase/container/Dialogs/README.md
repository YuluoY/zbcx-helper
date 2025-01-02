# 对话框容器

`cx-dialogs` 对话框插件容器，无 ui 展示，用于挂载对话框。

_注意：_ 对话位置相对父容器定位，获取父容器：根据父插件的 `refs.rootEle` 获取根元素；根是dom对象时直接使用，是组件时用 `refsRoot.$el` 获取dom对象，默认用 `body`。

## 基础用法

```vue
<template>
  <cx-layout ref="rootEle" style="width: 100vw;height: 100vh;">
    <cx-region region="north" height=".7rem">
      <cx-menu-stair class="demo-menupanel" :menus="menus" @menu-click="onMenuClick"></cx-menu-stair>
    </cx-region>
    <cx-region region="center">
      <router-view></router-view>
      <cx-dialogs :plugName="plugName"></cx-dialogs>
      <cx-dyna-coms :plugName="plugName"></cx-dyna-coms>
    </cx-region>
  </cx-layout>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| **plugName** | 所属插件名，IPlugBase 中定义了 plugName 变量 | String | | |

## 类型定义

```ts
export interface DialogsProps {
  // 所属插件名，IPlugBase 中定义了 plugName 变量
  plugName: string;
}
``` 