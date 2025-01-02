# 文件管理

`cx-file-man` 文件管理（基于文件系统）

## 基础用法

```vue
<template>
  <cx-file-man
    :size="'default'"
    :tree-com="'cx-dir-tree'"
    :tree-node="''"
    :tree-vals="{}"
    :tree-handler="cx.dc.DocTreeHandler"
    :tree-atts="{ selectFirst: true }"
    :tree-width="'1.75rem'"
    :file-plugs="'File'"
    :file-exp-values="cx.dc.FileValues"
    :list-type="'list'"
    :set-data="(data, file) => {}"
    :after-upload="(ret) => {}"
    :upload="() => {}"
    :file-card-com="'cx-file-card'"
  >
    <template #dirtree-default="{ data }">
      <!-- 目录树-插槽 -->
    </template>
    <template #dirfile-preappend>
      <!-- 目录文件组件-操作按钮之前 -->
    </template>
    <template #dirfile-append>
      <!-- 目录文件组件-操作按钮之后 -->
    </template>
  </cx-file-man>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| tree-com | 树组件 | String / Object | | cx-dir-tree |
| tree-node | 树结点配置（cx_resdir 配置的 node 名） | String | | |
| tree-vals | 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 | Object | | |
| tree-handler | 树控件处理对象 | cx.dc.ITreeHandler | | cx.dc.DocTreeHandler |
| tree-atts | 传递给 el-tree 的属性 | Object | | `{ selectFirst: true }` |
| tree-width | 目录树宽度 | String | | 1.75rem |
| file-plugs | 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 | String | | File |
| file-exp-values | 条件计算对象 | String / cx.dc.IDcValuesBase | | cx.dc.FileValues |
| list-type | 文件列表方式 | String | list / card / icon | list |
| set-data | 当上载文件的时候，根据文件设置cx_media 表其他信息 | Function | | |
| after-upload | 上载文件完成之后的处理 | Function | | |
| upload | 自定义的上载函数，设置这个函数，则上载由该函数完成 | Function | | |
| file-card-com | 文档卡片组件 | String / Object | | cx-file-card |

## 插槽

| 名称 | 描述 | 参数 |
| -----| --- | ---- |
| dirtree-default | 目录树-插槽 | data |
| dirfile-preappend | 目录文件组件-操作按钮之前 | |
| dirfile-append | 目录文件组件-操作按钮之后 | |

## 类型定义

```ts
/** 文件管理组件Props */
export interface FileManProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 树组件 */
  treeCom?: string | Record<string, any>;
  /** 树结点配置（cx_resdir 配置的 node 名） */
  treeNode: string;
  /** 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 */
  treeVals?: Record<string, any>;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAtts?: Record<string, any>;
  /** 目录树宽度 */
  treeWidth?: string;
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  filePlugs?: string;
  /** 条件计算对象 */
  fileExpValues?: string | any;
  /** 文件列表方式 */
  listType?: 'list' | 'card' | 'icon';
  /** 当上载文件的时候，根据文件设置cx_media 表其他信息 */
  setData?: (data: any, file: any) => void;
  /** 上载文件完成之后的处理 */
  afterUpload?: (ret: any) => void;
  /** 自定义的上载函数，设置这个函数，则上载由该函数完成 */
  upload?: () => void;
  /** 文档卡片组件 */
  fileCardCom?: string | Record<string, any>;
} 