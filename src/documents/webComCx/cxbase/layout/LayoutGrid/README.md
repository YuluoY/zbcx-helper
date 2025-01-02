# 网格布局

`cx-layout-grid` 组件grid布局，可以自定义宽高和比例。

## 功能说明

主要用于复杂特殊情况下的界面布局使用。

依赖 vue3-grid-layout-next 组件

## 基础用法

使用 `layout` 属性定义栅格布局，每个栅格项需要指定唯一的 `i` 标识和对应的 `slotName`。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | 尺寸 | String | large / default / small | default |
| layout | 栅格的初始布局 | Array | | |
| colNum | 定义栅格系统的列数,其值需为自然数 | Number | | 12 |
| rowHeight | 每行的高度，单位像素 | Number | | 150 |
| margin | 定义栅格中的元素边距值。必须是包含两个 Number的数组，数组中第一个元素表示水平边距，第二个表示垂直边距，单位为像素 | Array | | [10, 10] |
| draggable | 标识栅格中的元素是否可拖拽 | Boolean | | false |
| resizable | 标识栅格中的元素是否可调整大小 | Boolean | | false |

## layout 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| i | 栅格中元素的ID, 必须唯一 | String | | |
| x | 标识栅格元素位于第几列 | Number | | |
| y | 标识栅格元素位于第几行 | Number | | |
| w | 标识栅格元素的初始宽度 | Number | | |
| h | 标识栅格元素的初始高度 | Number | | |
| slotName | 每个栅格的具名插槽 | String | | |
