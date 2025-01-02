# 图标

`cx-icon` Icon 组件，用于在页面中添加图标。

# 功能说明

用于同时支持类形式、文件路径形式图标。类和路径根据是否有.xx的后缀名区分,因此设置图标尺寸时要同时配置width和font-size属性

## 基础用法

```vue
<template>
  <cx-icon icon="cx-fi ic-department" />
</template>

<script></script>

<style lang="scss" scoped></style>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| icon | 图标 | String | | |

## 样式

基本样式: cx-icon
