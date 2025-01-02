# 工具条

`cx-legend` 图例工具

## 基础用法

使用 `datas` 属性传入图例数据，每个组由 Group 对象组成。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| datas | 组数据对象序列，每个组由[`Group`](#group-组数据说明)对象组成 | `Array.<Group>` | | |
| foldStyle | 折叠后组件显示样式，可指定位置序列 | String | | |
| foldable | 是否可折叠序列 | Boolean | | true |
| header | 图例组件head组件参数，见cx-header-carddlg | Object | | |

## Group 组数据说明

| 名称 | 说明 | 类型 | | 类型 |
| ----- | ----- | ----- |----- | ----- |
| title | 组标题 | String | | |
| data | 该组的数据由[`LgdData`](#lgddata-图例数据)对象组成 | `Array.<LgdData>` | | |
| inline | 组内图例是否同行显示 | Boolean | | *false* |
| children | 子组的数据序列 | `Array.<Group>` | | |
| com | 渲染每个LgdData数据的 组件对象或名字，默认使用内置 LgdData | `String\Component` | | *LgdData* |
| comAtts | 自定义组件的参数，v-bind设置 | Object | | |
| comEvts | 自定义组件的事件，v-on设置 | Object | | |

## LgdData 图例数据

| 名称 | 说明 | 类型 | | 类型 |
| ----- | ----- | ----- |----- | ----- |
| title | 图例标题 | String | | |
| img | 图例图标 | String | | |
| color | 图例颜色，优先级比img高 | String | | |
| colorPick | 颜色是否可选 | Boolean | | *false* |
| checkMode | 图例是否可选 | Boolean | | *false* |

## LgdData 默认组件事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | :----- | ----- | ----- |
| change-color | 修改颜色事件 | `(color, lgdData)` | color是新颜色，lgdData当前图例数据 |
| check | 勾选事件 | `(state, lgdData)` | state是新勾选状态，lgdData当前图例数据 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| body-preappend | 图例之前 | |
| body-append | 图例之后 | | 