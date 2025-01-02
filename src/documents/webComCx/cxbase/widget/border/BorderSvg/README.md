# Border-SVG文件边框

`cx-border-svg` SVG 文件。

# 功能说明
   1) 采用 SVG 文件
   2) 采用样式: cx-border.svg

## 基础用法

```vue
<style lang="scss" scoped>
.borderSvg{height: 3rem;}
</style>

<template>
  <cx-border-svg class="borderSvg" :url="url"/>
</template>

<script>
export default {
  data()
  {
    return {
      url: '/static/img/ui/coms/border/01.svg'
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| folded | 是否折叠 | Boolean | | false |
| url | SVG 文件 URL | String | | |
| border-style | 列数量 | String | | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 默认插槽 | |

## 样式

基本样式: cx-border.svg

折叠样式: cx-border.svg.folded
