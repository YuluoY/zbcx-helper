# 属性条件输入框

`cx-att-exp` 属性条件查询输入框组件，用于构建字段条件查询界面。

## 基础用法

构造 `flds` 字段序列，通过 `cx.AttBase` 对象的 `makeExp` 方法构造字段配置。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | UI规格 | String | large / default / small | default |
| flds | 字段信息数组 | Array | | |
| item-width | 输入框大小(像素为单位) | Number | | 125 |
| show-label | 是否显示标签 | Boolean | | false |

## FldExpCfg 属性

用 `cx.AttBase` 对象的 `makeExp` 方法构造。

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| colname | 列名 | String | | |
| title | 显示标题 | String | | |
| disporder | 显示顺序 | Number | | |
| type | 显示类型 | Number | | |
| options | 下拉选项 [{label: String, value: String}] | Array | | |
| refChange | 引用计数器 | Number | | |
| value | 字段值 | String | | |
| value1 | 字段值1，值域时用 | String | | |
| value2 | 字段值2，值域时用 | String | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ---- | ----- |
| fld-change | 字段值发生变化 | fld | fld 当前触发的字段对象 |
