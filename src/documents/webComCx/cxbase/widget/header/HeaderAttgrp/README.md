# Header-属性分组

`cx-header-attgrp` Header-属性分组

# 功能说明
 1) 封装组件 Header
 2) 支持可折叠

## 基础用法

```vue
<style lang="scss" scoped></style>

<template>
  <div>
    <cx-header-attgrp title="测试标题" mode="0" editable />
    <cx-header-attgrp title="测试标题" mode="1" editable changed />
  </div>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| title | 标题 | String | | |
| editable | 是否可编辑 | Boolean | | false |
| mode | 展现模式 | Number | 0 - 浏览模式, 1-编辑模式 | 0 |
| changed | 是否改变 | Boolean | | false |
| header | 传递给 Header 组件的 v-bind 参数 | Object | | {} |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| mode-change | 模式发生了变化 | function() | |
| edit-save | 编辑保存 | function() | |
| edit-cancel | 编辑取消 | function() | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 标题之前 | |
| title | 标题 | |
| append | 标题之后 | |

## 样式

基本样式: cx-header.header-attgrp
