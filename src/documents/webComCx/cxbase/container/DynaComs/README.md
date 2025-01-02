# 动态组件容器

`cx-dyna-coms` 动态组件容器，把插件以组件的形式运行到容器中。

一个插件页面可以有多个动态组件容器，通过name区分，数据库从配置container时格式：`父插件名.动态组件名`, 其中 _动态组件名_ 缺省是 `default`。

## 基础用法

```vue
<template>
  <div class="leftDynCom">
    <cx-dyna-coms :plugName="plugName"></cx-dyna-coms>
  </div>
  <div class="rightDynCom">
    <cx-dyna-coms :plugName="plugName" name="right" :isSingle="true"></cx-dyna-coms>
  </div>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| **plugName** | 所属插件名，IPlugBase 中定义了 plugName 变量 | String | | |
| name | 动态组件容器名，类似命名插槽支持多个动态组件容器 | String | | default |
| isSingle | 是否单实例模式，容器中只能同时运行一个组件（运行新组件先删除旧组件） | Boolean | | false |

## 类型定义

```ts
export interface DynaComsProps {
  // 所属插件名，IPlugBase 中定义了 plugName 变量
  plugName: string;
  // 动态组件容器名，类似命名插槽支持多个动态组件容器
  name?: string;
  // 是否单实例模式，容器中只能同时运行一个组件（运行新组件先删除旧组件）
  isSingle?: boolean;
}
``` 