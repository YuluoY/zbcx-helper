# 头部栏

`cx-header` Header。

# 功能说明
  1) 支持图标、文字
  2) 支持 左 / 中 / 右 三种对齐方式
  3) 支持 preappend, title, append 三个插槽
  4) 支持 图标，标题的样式定制

## 基础用法

```vue
<style lang="scss" scoped></style>

<template>
  <cx-header align="left" title="测试标题" />
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| align | 对齐方式 | String | left / center / right | left |
| title | 标题 | String | | |
| icon | 图标 | String | | |
| title-style | 标题样式 | String | | |
| icon-style | 图标样式 | String | | |
| folded | 折叠状态 | Boolean | | false |
| movable | 是否可移动 | Boolean | | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| header-click | 点击 Header | function(evt) | |
| title-click | 点击 标题 | function(evt) | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 标题之前 | |
| append | 标题之后 | |
| title | 标题 | |

## 样式

基本样式: cx-header
