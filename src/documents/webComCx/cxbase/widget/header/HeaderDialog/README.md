# Header-对话框

`cx-header-dialog` Header-对话框

# 功能说明
  1) 封装组件 Header
  2) 支持最小化，最大化，关闭

## 基础用法

```vue
<style lang="scss" scoped></style>

<template>
  <cx-header-dialog
    :title="title"
    :minable="minable"
    :maxable="maxable"
    :minimized="minimized"
    :maximized="maximized"
    @min-change="onMinChange"
    @max-change="onMaxChange"
    @close="onClose"/>
</template>

<script>
export default {
  data()
  {
    return {
      title: '测试标题',
      minable: true,
      maxable: true,
      minimized: false,
      maximized: false
    }
  },
  methods: {
    onMinChange()
    {
      this.minimized = !this.minimized
    },
    onMaxChange()
    {
      this.maximized = !this.maximized
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
| minable | 是否可最小化 | Boolean | | false |
| maxable | 是否可最大化 | Boolean | | false |
| closable | 是否可以关闭 | Boolean | | true |
| movable | 是否可移动 | Boolean | | true |
| foldable | 是否可移动 | Boolean | | false |
| minimized | 最小化状态 | Boolean | | false |
| maximized | 最大化状态 | Boolean | | false |
| folded | 折叠状态 | Boolean | | false |
| header | 传递给 cx-header 组件的 v-bind 参数 | Object | | {} |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| header-click | 点击标题头 | function(evt) | |
| min-change | 最小化状态发生了变化 | function() | |
| max-change | 最大化状态发生了变化 | function() | |
| close | 关闭 | function() | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| preappend | 标题之前 | |
| title | 标题 | |
| append | 标题之后 | |

## 样式

基本样式: cx-header.header-dialog
