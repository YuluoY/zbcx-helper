# Border-常规边框

`cx-border-regular` 实线、圆角、底色、阴影。

## 基础用法

```vue
<style lang='scss' scoped>
.borderDemo{width: 2rem;height: 2rem;margin: .2rem;}
</style>

<template>
  <article class="borderDemo">
    <cx-border-regular :folded="folded" :border-style="borderStyle" >
      <template #default>边框与底纹常规</template>
    </cx-border-regular>
  </article>
</template>

<script>
export default
{
  data()
  {
    return {
      folded: { folded: true },
      borderStyle:
      {
        border: '0.1rem solid red',
        borderRadius: '0.2rem'
      }
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
| border-style | 边框样式 | String | | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 默认插槽 | |

## 样式

基本样式: cx-border.regular

折叠样式: cx-border.regular.folded
