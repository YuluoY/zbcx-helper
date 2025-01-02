# Header-卡片对话框

`cx-header-carddlg` Header-卡片对话框

# 功能说明
  1) 封装组件 Header
  2) 支持最小化，关闭

## 基础用法

```vue
<style lang="scss" scoped></style>

<template>
  <cx-header-carddlg
    :title="title"
    :foldable="foldable"
    :minable="minable"
    :folded="folded"
    :minimized="minimized"
    @fold-change="onFoldChange"
    @min-change="onMinChange"
    @close="onClose"/>
</template>

<script>
export default {
  data()
  {
    return {
      title: '测试标题',
      foldable: true,
      minable: true,
      folded: false,
      minimized: false
    }
  },
  methods: {
    onFoldChange()
    {
      this.folded = !this.folded
    },
    onMinChange()
    {
      this.minimized = !this.minimized
    },
    onClose()
    {}
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
| minable | 是否可最小化 | Boolean | | false |
| closable | 是否可以关闭 | Boolean | | false |
| folded | 折叠状态 | Boolean | | false |
| minimized | 是否最小化 | Boolean | | false |
| header | 传递给 cx-header 组件的 v-bind 参数 | Object | | {} |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| fold-change | 折叠状态发生了变化 | function() | |
| min-change | 最小化状态发生了变化 | function() | |
| close | 关闭 | function() | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 标题之前 | |
| title | 标题 | |
| append | 标题之后 | |

## 样式

基本样式: cx-header.header-carddlg

折叠样式: cx-header.header-carddlg.folded

## 类型定义

```ts
export interface HeaderCarddlgProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 标题 */
  title?: string;
  /** 是否可折叠 */
  foldable?: boolean;
  /** 是否可最小化 */
  minable?: boolean;
  /** 是否可以关闭 */
  closable?: boolean;
  /** 折叠状态 */
  folded?: boolean;
  /** 是否最小化 */
  minimized?: boolean;
  /** 传递给 cx-header 组件的 v-bind 参数 */
  header?: Record<string, any>;
}
```
