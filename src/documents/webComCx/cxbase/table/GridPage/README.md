# 网格分页

`cx-grid-page` 分页条,常应用于表格下的分页信息

## 基础用法

使用 `page` 属性传入分页配置，包括总条数、每页条数等。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| **page** | 数据传递 | [`GridPageCfg`](#gridpagecfg-属性) | | |

## GridPageCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **total** | 总条数 | Number | | |
| **pageSize** | 每页条数 | Number | | |
| **pageSizes** | 每页条数下拉数组 | Array | | |
| layout | 分页控件内的组件组合布局，由逗号分隔 | String | sizes / prev / pager / next / jumper / -> / total / slot | total,sizes,prev,pager,next,jumper,slot |
| currentPage | 当前页数 | Number | | 1 |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ---- | --- | ----- |
| pagesize-change | 每页数据量发生变化 | (pageSize)| pageSize 每页显示数据量 |
| current-change | 当前页发生变化 | (currentPage) | currentPage 当前页码 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | | 