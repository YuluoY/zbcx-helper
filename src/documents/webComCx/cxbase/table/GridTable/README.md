# 网格表

`cx-grid-table` 以表的形式展示数据。

## 基础用法

使用 `table` 属性传入表格配置，包括数据列表、列配置等。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| table | 数据传递 | [GridTableCfg](#gridtablecfg-属性) | | |
| noIndex | 没有序号列 | Boolean | | false |
| indexElAtts | 序号列，elements/table组件的Table-column属性对象 | Object | | {} |
| indexFunc | 序号的构造函数，返回序号值；noIndex=true时生效 | Function | |  |

## GridTableCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| list | 数据 | Array | | |
| cols | 数据过滤函数 | [Array&lt;Column&gt;](#column-属性) | | |
| operCols | 操作列，空时不显示操作列 | [Array&lt;OperColumn&gt;](#opercolumn-属性) | | |
| operFix | 操作列固定位置，操作列显示时才生效 | String | left / right | right |
| multiple | 多选 | Boolean | | false |
| selectable | 是否可选，multiple=true下才生效 | (row, index) | | |
| dbClickEdit | 是否双击单元格激活编辑 | Boolean | | false |
| selectOnClick | 点击某一行时会触发 select 选择事件 | Boolean | | true |
| fitWidth | 是否按宽度自适应 | Boolean | | false |
| addable | 是否可以添加数据 | Boolean | | false |
| addNewRow | 如果可以添加新行事，添加新行 | (row) | | |
| filter | 数据过滤函数 | () | | |
| beforeDDVisible | 回调函数-下拉菜单展开之前 | () | | |
| elAtts | elements/table 组件的属性对象 | Object | | |
| elEvts | elements/table 组件的事件对象 | Object | | |

## Column 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| colname | 列名 | String | | |
| title | 列标题行显示 | String | | |
| disporder | 显示顺序 >0 才显示 | Number | | |
| align | 列对齐方式，空时 `el-table-column` 默认 left | String | left / center / right | left |
| width | 列宽，不传时自动均分 | String / Number | | |
| sortable | 是否排序 | Boolean | | false |
| overflowTooltip | 超出部分是否提示 | Boolean | | false |
| isEdit | 文本是否可编辑 | Boolean | | false |
| isCheckBox | checkbox是否可编辑 | Boolean | | false |
| isSwitch | Switch是否可编辑 | Boolean | | false |
| isSelect | 是否下拉选择 | Boolean | | false |
| isCascader | 是否级联选择 | Boolean | | false |
| selOptions | 下拉选项,用于 isSelect,isCascader, ({value, label}) | Array | | |
| isDate | 是否日期选择器 | Boolean | | false |
| dateFormat | 日期格式 | String | | |
| isDateTime | 是否日期时间选择器 | Boolean | | false |
| dateTimeFormat | 日期时间格式 | String | | |
| isHtml | 是否HTML文本 | Boolean | | false |
| component | 组件 | component | |  |
| params | params.format格式化命名，params.visual可视化命名 | Object | | |
| elAtts | elements/table组件的Table-column属性对象 | Object | | {} |

## OperColumn 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| colname | 列名 | String | | |
| title | 列标题行显示 | String | | |
| btns | 操作按钮 | Array | | |
| width | 列宽，不传时自动均分 | String / Number | | |
| max | 最大显示操作按钮的数量 | Number | | 3 |
| align | 参照 Column 属性 | | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| row-click | 点击行 | (row, column, event) | row 该行数据对象, column 点击的列 |
| row-dblclick | 双击行 | (row, column, event) | row 该行数据对象, column 点击的列 |
| cell-click | 点击单元格 | (row, column, cell, event) | row 该行数据对象, column 点击的列, cell 点击的单元格 |
| header-click | 点击头 | (column, event) | column 点击的列 |
| selection-change | 选择发生变化 | (selection) | row 该行数据对象 |
| sort-change | 排序发生变化 | ({ column, prop, order }) | olumn 点击的列 |
| cell-mouse-enter | 鼠标进入 | (row, column, cell, event) | row 该行数据对象, column 点击的列, cell 点击的单元格 |
| cell-mouse-leave | 鼠标离开 | (row, column, cell, event) | row 该行数据对象, column 点击的列, cell 点击的单元格 |
| plugin-click | 点击插件 | (plug, row) | row 该行数据对象 |
| edit-row | 编辑行切换 | (oldRowIndex, newRowIndex) | oldRowIndex 原始索引, newRowIndex 新的索引 |
| key-enter | 按下回车 | (event, scope) | scope 数据对象 |
| load-more | 加载更多 | (context) | context 组件 gridtable 对象 |
| row-contextmenu | 行右边键 | (row, column, event) | row 该行数据对象, column 点击的列 |
| change-select | 下拉选中值发生变化时触发 | (scop) | scop 数据对象 |
| change-check | check选中值发生变化时触发 | (scop) | scop 数据对象 |
| change-switch | switch选中值发生变化时触发 | (scop) | scop 数据对象 |
| visible-change | 下拉框出现/隐藏时触发 | (scop) | scop 是否可见 |

## 方法

| 名称 | 说明 | 参数 | 参数说明 | 返回说明 |
| --- | -----| ---- | ----- |----- |
| getElTable | 获取table对象 | | | |
| handleEdit | 编辑处理 | (scope, isDbClick) | scope:编辑对象，isDbClick:点击状态 | |
| keyRight | 消息响应函数-Right 弹起 | (event, scope) | sevent:事件信息，scope:单元格相关信息 | |
| keyLeft | 消息响应函数- Left 弹起 | (event, scope) | sevent:事件信息，scope:单元格相关信息 | |
| keyUp | 消息响应函数-Up 弹起 | (event, scope) | sevent:事件信息，scope:单元格相关信息 | |
| keyDown | 消息响应函数-Down 弹起 | (event, scope) | sevent:事件信息，scope:单元格相关信息 | |
| keyTab | 消息响应函数-Tab 弹起 | (event, scope) | sevent:事件信息，scope:单元格相关信息 | |
| focus | 设置编辑焦点 | (event, scope) | sevent:事件信息，scope:单元格相关信息 | | 