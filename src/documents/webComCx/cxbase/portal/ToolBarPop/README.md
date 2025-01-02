# 工具条弹出框

`cx-toolbar-pop` 工具条弹出框组件。

## 基础用法

使用 `data` 传递工具条数据，通过 `type` 控制弹出框样式。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ----- | -- | ------- |
| size | 尺寸 | String | large / default / small | default |
| eltooltip | el-tooltip原生属性 | Object | | |
| placement | Tooltip 组件出现的位置（同el-tooltip的placement属性） | String | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | bottom |
| type | 弹出框样式（默认模板/自定义） | String | default / custom | default |
| **data** | 数据 | Array<DataItem> | | |

## DataItem 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ---------- | ------- | ------ | ------ |
| **url** | 图标路径 | String | | |
| **title** | 图标标题 | String | | |
| **disabled** | 禁用弹出框 | Boolean | true / false | false |
| **pop** | 弹出框信息 | PopConfig | | |

## PopConfig 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ---------- | ------- | ------ | ------ |
| **name** | 弹出框名称(自定义样式，且样式不统一时使用) | String | | |
| **style** | 弹出框外框样式(默认样式时使用) | String | | |
| **title** | 弹出框顶部标题(默认样式时使用) | String | | |
| **info** | 弹出框中部高亮信息(默认样式时使用) | String | | |
| **src** | 弹出框中部图片路径(默认样式时使用) | String | | |
| **detail** | 弹出框底部小字信息(默认样式时使用) | String | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| onclick | 点击图标 | att | 返回当前点击的对象 |

## 插槽

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ---- | ---- | -------- |
| pop.name | 自定义不统一的弹窗样式 | pop | |
| default | 自定义统一的弹窗样式 | pop | |
