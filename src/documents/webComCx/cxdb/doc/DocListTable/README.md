# 文档列表管理

`cx-doc-list-table` 文档列表管理（基于cx_media表）

## 基础用法

```vue
<template>
  <cx-doc-list-table
    :files="files"
    :auth="{
      downloadable: true,
      uploadable: true,
      editable: true,
      removable: true,
      sharable: true
    }"
    :multiple="false"
    :table-cfg="'DocFile'"
  >
  </cx-doc-list-table>
</template>

<script>
export default {
  data() {
    return {
      files: []
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **files** | 文件列表(cx_media 表) | Array | | |
| auth | 授权信息 | AuthFile | | |
| multiple | 是否支持多选 | Boolean | | false |
| table-cfg | 表格配置名(cx_tabcfg 的 name) | String | | DocFile |

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
| row-click | 点击行 | (row, column, event) | row 该行数据对象, column 点击的列 |
| selection-change | 选择发生变化 | (selection) | row 该行数据对象 |
| sort-change | 排序发生变化 | ({ column, prop, order }) | olumn 点击的列 |
| row-remove | 删除某行（UI层删除） | (selected) | 当前选择项 |

## 类型定义

```ts
/** 文件授权信息 */
export interface AuthFile {
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

/** 文档列表管理组件Props */
export interface DocListTableProps {
  /** 文件列表(cx_media 表) */
  files: any[];
  /** 授权信息 */
  auth?: AuthFile;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 表格配置名(cx_tabcfg 的 name) */
  tableCfg?: string;
}
</code_block_to_apply_changes_from> 