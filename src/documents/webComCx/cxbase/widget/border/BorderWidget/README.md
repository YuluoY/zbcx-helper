# Border-小组件边框

`cx-border-widget` 实线、直角、带背景色。

## 基础用法

```vue
<style lang="scss" scoped>
.borderWidget{height: 2.5rem;}
</style>

<template>
  <cx-border-widget class="borderWidget" />
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| folded | 是否折叠 | Boolean | | false |
| border-style | 边框样式 | String | | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 默认插槽 | |

## 样式

基本样式: cx-border.widget

折叠样式: cx-border.widget.folded
