# Border-自定义形状

`cx-border-shape` 边框和底纹（自定义边框形状）。

# 功能说明

 功能说明:
   1) 支持定制边框
   2) 支持边框内填充
   3) 采用样式: .cx-border .shape

## 基础用法

```vue
<style lang="scss" scoped>
.borderShape{height: 3rem;}
</style>

<template>
  <cx-border-shape class="borderShape" :shape="shape"/>
</template>

<script>
export default {
  methods: {
    shape(width, height)
    {
      const rw = 12
      const sw = 50
      return (
        `M0 ${
          rw //起点
        } l${rw} ${
          -rw //左上 /
        } l${width - (rw << 1)} 0` + //上   --
        ` l${rw} ${
          rw //右上 \
        } l0 ${
          sw //右上 |
        } l${-rw} ${
          rw //右上 /
        } l0 ${
          height - ((rw << 2) + (sw << 1)) //右   |
        } l${rw} ${
          rw //右下 \
        } l0 ${
          sw //右下 |
        } l${-rw} ${
          rw //右下 /
        } l${-(width - (rw << 1))} 0` + //下   --
        ` l${-rw} ${
          -rw //左下 \
        } l0 ${
          -sw //左下 |
        } l${rw} ${
          -rw //左下 /
        } l0 ${
          -(height - ((rw << 2) + (sw << 1))) //左   |
        } l${-rw} ${
          -rw //左上 \
        } l0 ${-sw}`
      ) //左上 |
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| shape | 绘制函数 - function(width, height, borderRadius, borderRounds) | Function | | |
| border-radius | 圆角半径 | Number | | 8 |
| border-rounds | 依次标识每个角是否圆角(顺序： 左上、右上、右下、左下) | `Array.<Number>` | 0 / 1 | `[0,0,0,0]` |
| folded | 是否折叠 | Boolean | | false |
| border-style | 列数量 | String | | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 默认插槽 | |

## 样式

基本样式: cx-border.shape

折叠样式: cx-border.shape.folded
