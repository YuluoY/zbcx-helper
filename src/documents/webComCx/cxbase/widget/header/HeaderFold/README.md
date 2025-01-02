# Header-折叠

`cx-header-fold` Header-折叠

# 功能说明
1) 封装组件 Header

## 基础用法

```vue
<style lang="scss" scoped></style>

<template>
  <cx-header-fold :title="title" :folded="folded" @fold-change="onFoldChange" />
</template>

<script>
export default {
  data()
  {
    return {
      title: '测试标题',
      folded: true
    }
  },
  methods: {
    onFoldChange()
    {
      this.folded = !this.folded
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
| folded | 折叠状态 | Boolean | | true |
| header | 传递给 cx-header 组件的 v-bind 参数 | Object | | {} |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| fold-change | 点击折叠状态 | function() | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 标题之前 | |
| title | 标题 | |
| append | 标题之后 | |

## 样式

基本样式: cx-header.header-fold
