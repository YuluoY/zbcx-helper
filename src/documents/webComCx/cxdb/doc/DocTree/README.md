# 文档目录树

`cx-doc-tree` 文档目录树(基于cx_docdir)

## 基础用法

```vue
<template>
  <cx-doc-tree
    :size="'default'"
    :node="'DocTree'"
    :vals="{}"
    :lazy="true"
    :auth="{
      addable: true,
      editable: true,
      removable: true
    }"
    :tree-handler="new cx.dc.DocTreeHandler()"
    :tree-atts="{ selectFirst: true }"
  >
    <template #default="data">
      <!-- 默认插槽内容 -->
    </template>
  </cx-doc-tree>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| node | 树结点配置（cx_resdir 配置的 node 名） | String | | |
| vals | 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 | Object | | |
| lazy | 是否懒加载模式 | Boolean | | true |
| auth | 授权信息 | AuthDir | | |
| tree-handler | 树控件处理对象 | cx.dc.ITreeHandler | | cx.dc.DocTreeHandler |
| tree-atts | 传递给 el-tree 的属性 | Object | | { selectFirst: true } |

## AuthDir 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| addable | 是否可增加目录 | Boolean | | true |
| editable | 是否可编辑目录 | Boolean | | true |
| removable | 是否可删除目录 | Boolean | | true |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 默认插槽 | data |

## 类型定义

```ts
/** 目录授权信息 */
export interface AuthDir {
  /** 是否可增加目录 */
  addable?: boolean;
  /** 是否可编辑目录 */
  editable?: boolean;
  /** 是否可删除目录 */
  removable?: boolean;
}

/** 文档目录树组件Props */
export interface DocTreeProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 树结点配置（cx_resdir 配置的 node 名） */
  node: string;
  /** 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 */
  vals?: Record<string, any>;
  /** 是否懒加载模式 */
  lazy?: boolean;
  /** 授权信息 */
  auth?: AuthDir;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAtts?: object;
} 