# 文档回收站数据表

`cx-docrecyb-list-table` 文档回收站列表管理（cx_docrecyb）进行管理

## 基础用法

```vue
<template>
  <cx-docrecyb-list-table
    :files="files"
    :table-cfg="'DocRecyb'"
    @row-remove="handleRemove"
  >
  </cx-docrecyb-list-table>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| files | 文件列表(cx_docrecyb 表) | Array | | |
| table-cfg | 表格配置名(cx_tabcfg 的 name) | String | | DocRecyb |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| row-remove | 删除某行（UI层删除） | (selected) | 当前选择项 |

## 类型定义

```ts
/** 文档回收站数据表组件Props */
export interface DocrecybListTableProps {
  /** 文件列表(cx_docrecyb 表) */
  files?: Array<any>;
  /** 表格配置名(cx_tabcfg 的 name) */
  tableCfg?: string;
} 