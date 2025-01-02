# 布局

`cx-layout` 布局组件用例，布置页面。一个布局中只能横 或 纵 轴向分布，不同轴向布局可嵌套完成。

## 基础用法

使用 `region` 完成纵向布局，`center` 部分会自动撑满。

## 嵌套布局

使用 `layout` 嵌套完成复杂布局，并用 `padding` 开启内间距。

## 布局卡片化

使用 `region` 的 `gutter` 属性给各区域留编辑。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default / small | default |
| padding | 是否需要增加 padding | Boolean | — | false |
| fit-content | 是否根据内容自动伸缩，该模式下 layout 和子 region 无滚动条 | Boolean | — | false |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |
