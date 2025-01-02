# 列过滤

`cx-col-filter` 列过滤,主要应用于表格的列字段控制

## 基础用法

使用 `params` 属性传入组件参数，包括列配置数组、最小/最大选中个数等。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| **params** | 传递给组件的参数 | [`Object`](#params-属性) | | |

## params 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| name | 按钮名 | String | |this.$locBase('colFilter')|
| **cols** | 传入数据数组 | [`Array.<Object>`](#cols-字段信息) | | |
| min | 最少选中个数 | Number | | 3 |
| max | 最多选中个数 | Number | | 无限制 |
| draggable | 是否可拖拽 | Boolen | | false |

## cols 字段信息

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **colname** | 列名 | String | | |
| **title** | 显示标题 | String | | |
| disporder | 显示顺序 (< 1 不显示) | Number | | |
| visible | 是否选中 | Boolen | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| check-change | 选中发生变化 | (state, val) |  state:选中状态,val:选中对象 |
| drag-finish | 拖拽后监听 | `{cols, draggingNode, dropNode, dropType, event}` |  cols:拖拽调整顺序后的字段列表,draggingNode:拖拽节点,dropNode:完成节点,dropType:拖拽类型, event:事件| 