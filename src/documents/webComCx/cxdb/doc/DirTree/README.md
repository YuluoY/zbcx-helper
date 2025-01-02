# 文件目录树

`cx-dir-tree` 目录文件树(文件系统)

## 基础用法

```vue
<template>
  <cx-dir-tree
    :size="'default'"
    :node="''"
    :vals="{}"
    :draggable="false"
    :tree-handler="new cx.dc.DirTreeHandler()"
    :tree-atts="{ selectFirst: true }"
  >
    <template #default="{ data }">
      <!-- 默认插槽 -->
    </template>
  </cx-dir-tree>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| node | 树结点配置（cx_resdir 配置的 node 名） | String | | |
| vals | 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 | Object | | |
| draggable | 是否可以拖拽目录 | Boolean | | false |
| tree-handler | 树控件处理对象 | cx.dc.ITreeHandler | | new cx.dc.DirTreeHandler() |
| tree-atts | 传递给 el-tree 的属性 | Object | | { selectFirst: true } |

## 插槽

| 名称 | 描述 | 参数 |
| -----| --- | ---- |
| default | 默认插槽 | data |

## 类型定义

```ts
/** 文件目录树组件Props */
export interface DirTreeProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 树结点配置（cx_resdir 配置的 node 名） */
  node: string;
  /** 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 */
  vals: Record<string, any>;
  /** 是否可以拖拽目录 */
  draggable?: boolean;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAtts?: Record<string, any>;
} 
```