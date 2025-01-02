# Header-卡片

`cx-header-card` Header-卡片

# 功能说明
 1) 封装组件 Header
 2) 支持可折叠

## 基础用法

```vue
<style lang="scss" scoped></style>

<template>
  <cx-header-card
    :title="title"
    :foldable="foldable"
    :folded="folded"
    @fold-change="onFoldChange"/>
</template>

<script>
export default {
  data()
  {
    return {
      title: '测试标题',
      foldable: true,
      folded: false
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
| foldable | 是否可折叠 | Boolean | | false |
| folded | 折叠状态 | Boolean | | false |
| header | 传递给 cx-header 组件的 v-bind 参数 | Object | | {} |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| fold-change | 折叠状态发生了变化 | function() | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 标题之前 | |
| title | 标题 | |
| append | 标题之后 | |

## 样式

基本样式: cx-header.header-card

折叠样式: cx-header.header-card.folded

## 类型定义

```ts
export interface HeaderCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 标题 */
  title?: string;
  /** 是否可折叠 */
  foldable?: boolean;
  /** 折叠状态 */
  folded?: boolean;
  /** 传递给 cx-header 组件的 v-bind 参数 */
  header?: Record<string, any>;
}
```
