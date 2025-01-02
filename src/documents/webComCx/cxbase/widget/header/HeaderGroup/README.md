# Header-分组

`cx-header-group` Header-分组

# 功能说明
  1) 封装组件 Header

## 基础用法

```vue
<style lang="scss" scoped></style>

<template>
  <cx-header-group :title="title" />
</template>

<script>
export default {
  data()
  {
    return {
      title: '测试标题'
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| title | 标题 | String | | |
| header | 传递给 cx-header 组件的 v-bind 参数 | Object | | {} |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 标题之前 | |
| title | 标题 | |
| append | 标题之后 | |

## 样式

基本样式: cx-header.header-group
