# 多目录文件树

`cx-dirs-tree` 多目录文件树(文件系统)

## 基础用法

```vue
<template>
  <cx-dirs-tree
    :dirs="dirs"
    :size="'default'"
    :plug="'FileDir'"
    :root-label="rootLabel"
    :draggable="false"
    :tree-values="treeValues"
    :tree-handler="treeHandler"
    :tree-atts="{ selectFirst: true, expandRoot: true }"
  >
    <template #default="data"></template>
  </cx-dirs-tree>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| dirs | 目录数组 | Array<DirCfg> | | |
| plug | 插件配置结点（cx_cmdtool 配置的 node 名） | String | | FileDir |
| root-label | 根目录标题，如果设置该属性，则产生一个根结点，否则直接用目录作为根节点 | String | | |
| draggable | 是否可以拖拽目录 | Boolean | | false |
| tree-values | 条件计算提供值的对象 | String / cx.dc.IValuesBase | | cx.dc.FileDirValues |
| tree-handler | 树控件处理对象 | cx.dc.ITreeHandler | | new cx.dc.DirsTreeHandler() |
| tree-atts | 传递给 el-tree 的属性 | Object | | { selectFirst: true, expandRoot: true } |

## DirCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| dir | 目录（详见cx.svr.file 对目录） | String | | |
| params | 参数 | DirParams | | |

## DirParams 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| root-label | 根目录名 | String | | |
| auth-dir | 目录权限信息 | AuthDir | | |
| auth-file | 文件权限信息 | AuthFile | | |

## AuthDir 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| addable | 是否可增加目录 | Boolean | | true |
| editable | 是否可编辑目录 | Boolean | | true |
| removable | 是否可删除目录 | Boolean | | true |

## AuthFile 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| downloadable | 是否可下载文档 | Boolean | | true |
| uploadable | 是否可上载文档 | Boolean | | true |
| editable | 是否可编辑文档 | Boolean | | true |
| removable | 是否可删除文档 | Boolean | | true |
| sharable | 是否可分享文档 | Boolean | | true |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 默认插槽 | data |

## 类型定义

```ts
/** 目录授权信息 */
interface AuthDir {
  /** 是否可增加目录 */
  addable?: boolean;
  /** 是否可编辑目录 */
  editable?: boolean;
  /** 是否可删除目录 */
  removable?: boolean;
}

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

/** 目录参数配置 */
interface DirParams {
  /** 根目录名 */
  rootLabel: string;
  /** 目录权限信息 */
  authDir?: AuthDir;
  /** 文件权限信息 */
  authFile?: AuthFile;
}

/** 目录配置 */
interface DirCfg {
  /** 目录（详见cx.svr.file 对目录） */
  dir: string;
  /** 参数 */
  params: DirParams;
}

/** 多目录文件树组件Props */
interface DirsTreeProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 目录数组 */
  dirs?: Array<DirCfg>;
  /** 插件配置结点（cx_cmdtool 配置的 node 名） */
  plug?: string;
  /** 根目录标题，如果设置该属性，则产生一个根结点，否则直接用目录作为根节点 */
  rootLabel?: string;
  /** 是否可以拖拽目录 */
  draggable?: boolean;
  /** 条件计算提供值的对象 */
  treeValues?: any;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAtts?: object;
} 
```