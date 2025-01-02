# 数据网格

`cx-data-grid` 以表格的形式展示数据,GridTable和GridPage组件的组合。

## 基础用法

使用 `datagrid` 属性传入表格配置，包括数据列表、列配置等。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| size| 尺寸 | String | large / default /small | default |
| **datagrid** | 数据传递 | [`DataGridCfg`](#datagridcfg-属性) | | |
| noIndex | 没有序号列 | Boolean | | false |
| idxSerial | 是否连续序号，false时各页从1开始，true是各页连续编号。noIndex=true时生效 | Boolean | | false |
| rmenus | 右边键插件 | Array | | |

## DataGridCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **table** | 表格对象，详情见[`cx-grid-table`](../GridTable/GridTable.md) | cx-grid-table | | |
| pages | 是否分页 | Boolean | | false |
| page | 分页对象，详情见[`cx-grid-page`](../GridPage/GridPage.md) | cx-grid-page | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| row-click | 点击行 | (row, column, event) | row 该行数据对象, column 点击的列 |
| row-dblclick | 双击行 | (row, column, event) | row 该行数据对象, column 点击的列 |
| cell-click | 点击单元格 | (row, column, cell, event) | row 该行数据对象, column 点击的列, cell 点击的单元格 |
| header-click | 点击头 | (column, event) | column 点击的列 |
| current-change | 点击行发生变化 | (currentRow, oldCurrentRow) | currentRow 当前行, oldCurrentRow 旧行 |
| selection-change | 选择发生变化 | (selection) | row 该行数据对象 |
| sort-change | 排序发生变化 | (prop, order, column) | order 排序 ASC/DESC, olumn 点击的列 |
| cell-mouse-enter | 鼠标进入 | (row, column, cell, event) | row 该行数据对象, column 点击的列, cell 点击的单元格 |
| cell-mouse-leave | 鼠标离开 | (row, column, cell, event) | row 该行数据对象, column 点击的列, cell 点击的单元格 |
| plugin-click | 点击插件 | (plug, row) | row 该行数据对象 |
| edit-row | 编辑行切换 | (oldRowIndex, newRowIndex) | oldRowIndex 原始索引, newRowIndex 新的索引 |
| key-enter | 按下回车 | (event, scope) | scope 数据对象 |
| load-more | 加载更多 | (context) | context 组件 gridtable 对象 |
| row-contextmenu | 行右边键 | (row, column, event) | row 该行数据对象, column 点击的列 |
| pagesize-change | 每页数据量发生变化 | (pagesize) | pagesize 每页显示数据量 |
| page-change | 当前页发生变化 | (currentPage) | currentPage 当前页码 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |

## 方法

| 名称 | 说明 | 参数 | 参数说明 | 返回说明 |
| --- | -----| ---- | ----- |----- |
| getTable | 取表格对象(cx-grid-table) | | | cx-grid-table |
| getPage | 取分页对象(cx-grid-page) | | | cx-grid-page |
| getRMenu | 取右边键对象 | | | cx-r-menu | 