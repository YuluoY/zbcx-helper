# 属性条件输入搜索

`cx-exp-input` 属性条件输入搜索组件，用于构建字段条件查询搜索界面。

## 基础用法

构造 `flds` 字段序列，通过 `cx.AttBase` 对象的 `makeExp` 方法构造字段配置。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | UI规格 | String | large / default / small | default |
| flds | 字段信息数组 | Array | | |
| item-width | 输入框大小(像素为单位) | Number | | 125 |
| show-label | 是否显示标签 | Boolean | | false |
| show-more | 是否显示more | Boolean | | true |
| clearable | 是否可清除 | Boolean | | true |

## FldExpCfg 属性

用 `cx.AttBase` 对象的 `makeExp` 方法构造。详见 `cx-att-exp` 组件文档。

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ---- | ----- |
| fld-change | 字段值发生变化 | (state, val) | state:选中状态,val:选中对象 |
| exp-search | 按条件搜索 | | |
| exp-clear | 清除条件 | | |
| exp-more | 更多条件 | | |