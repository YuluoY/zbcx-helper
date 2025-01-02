# 文件数据表

`cx-file-list-table` 文件列表管理（基于文件系统）

## 基础用法

```vue
<template>
  <cx-file-list-table
    :files="[]"
    :plugs="'File'"
    :auth="{
      downloadable: true,
      uploadable: true,
      editable: true,
      removable: true,
      sharable: true
    }"
    :multiple="false"
    :exp-values="cx.dc.FileValues"
    @row-click="(row, column, event) => {}"
    @selection-change="(selection) => {}"
    @sort-change="({ column, prop, order }) => {}"
    @row-remove="(selected) => {}"
  />
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| files | 文件列表（文件系统） | Array | | |
| plugs | 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 | String | | File |
| auth | 授权信息 | AuthFile | | |
| multiple | 是否支持多选 | Boolean | | false |
| exp-values | 条件计算对象 | String / cx.dc.IDcValuesBase | | cx.dc.FileValues |

## AuthFile 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| downloadable | 是否可下载文档 | Boolean | | true |
| uploadable | 是否可上载文档 | Boolean | | true |
| editable | 是否可编辑文档 | Boolean | | true |
| removable | 是否可删除文档 | Boolean | | true |
| sharable | 是否可分享文档 | Boolean | | true |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| row-click | 点击行 | (row, column, event) => void | row 该行数据对象, column 点击的列 |
| selection-change | 选择发生变化 | (selection) => void | row 该行数据对象 |
| sort-change | 排序发生变化 | ({ column, prop, order }) => void | column 点击的列 |
| row-remove | 删除某行（UI层删除） | (selected) => void | 当前选择项 |

## 类型定义

```ts
/** 文件授权信息 */
interface AuthFile {
  /** 是否可下载文档 */
  downloadable?: boolean;
  /** 是否可上载文档 */
  uploadable?: boolean;
  /** 是否可编辑文档 */
  editable?: boolean;
  /** 是否可删除文档 */
  removable?: boolean;
  /** 是否可分享文档 */
  sharable?: boolean;
}

/** 文件数据表组件Props */
interface FileListTableProps {
  /** 文件列表（文件系统） */
  files: any[];
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  plugs?: string;
  /** 授权信息 */
  auth?: AuthFile;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 条件计算对象 */
  expValues?: string | any;
  /** 点击行 */
  onRowClick?: (row: any, column: any, event: any) => void;
  /** 选择发生变化 */
  onSelectionChange?: (selection: any[]) => void;
  /** 排序发生变化 */
  onSortChange?: (params: { column: any; prop: string; order: string }) => void;
  /** 删除某行（UI层删除） */
  onRowRemove?: (selected: any) => void;
} 
```