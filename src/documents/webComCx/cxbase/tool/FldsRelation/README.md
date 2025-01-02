# 两组字段映射配置

`cx-flds-relation` 两组字段映射配置

## 基础用法

使用 `jsonFlds` 和 `dbFlds` 属性传入两组需要映射的字段。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| size | UI规格 | String | | default |
| **`jsonFlds`** | 文件中的字段名集合,如：['时间', '名称', ...] | [`Array<String>`] | |  |
| **`dbFlds`** | 实体表的字段集合,格式同 | [`Array`](#字段信息) | |  |

## dbFlds 字段信息 <a id="字段信息"></a>

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ----- |
| colname | 列名 | String | | |
| namec | 显示标题 | String | | |
| nullable | 是否可为空 | Number | 0/1 |0 |
| disporder | 显示顺序 (< 1 不显示) | Number | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | :----- | ---- | ----- |
| change | 字段映射信息发生改变时 - Function(data) | | |