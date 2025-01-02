# 文档管理

`cx-doc-man` 文档管理（文档，基于cx_docdir, cx_media, cx_docrecyb 表）

## 基础用法

```vue
<template>
  <cx-doc-man
    :size="'default'"
    :tree-com="'cx-doc-tree'"
    :tree-node="'DocDir'"
    :tree-vals="{}"
    :lazy="true"
    :tree-handler="cx.dc.DocTreeHandler"
    :tree-atts="{ selectFirst: true }"
    :tree-width="'1.75rem'"
    :doc-plugs="'DocFile'"
    :doc-exp-values="cx.dc.DocFileValues"
    :list-type="'list'"
    :doc-table-cfg="'DocFile'"
    :docrecyb-table-cfg="'DocRecyb'"
    :doc-card-com="'cx-doc-card'"
    :docrecyb-card-com="'cx-docrecyb-card'"
    @set-data="(data, file) => {}"
    @after-upload="(ret) => {}"
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
  </cx-doc-man>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| tree-com | 树组件 | String / Object | | cx-doc-tree |
| tree-node | 树结点配置（cx_resdir 配置的 node 名） | String | | |
| tree-vals | 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 | Object | | |
| lazy | 是否懒加载模式 | Boolean | | true |
| tree-handler | 树控件处理对象 | cx.dc.ITreeHandler | | cx.dc.DocTreeHandler |
| tree-attrs | 传递给 el-tree 的属性 | Object | | { selectFirst: true } |
| tree-width | 目录树宽度 | String | | 1.75rem |
| doc-plugs | 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 | String | | DocFile |
| doc-exp-values | 条件计算对象 | cx.dc.IDcValuesBase | | cx.dc.DocFileValues |
| list-type | 文件列表方式 | String | list / card / icon | list |
| set-data | 当上载文件的时候，根据文件设置cx_media 表其他信息 | (data: any, file: any) => void | | |
| after-upload | 上载文件完成之后的处理 | (ret: any) => void | | |
| upload | 自定义的上载函数，设置这个函数，则上载由该函数完成 | () => void | | |
| doc-table-cfg | 文档列表配置名（cx_tabcfg 的 name） | String | | DocFile |
| docrecyb-table-cfg | 回收站文档列表配置名（cx_tabcfg 的 name） | String | | DocRecyb |
| doc-card-com | 文档卡片组件 | String / Object | | cx-doc-card |
| docrecyb-card-com | 文档回收站卡片组件 | String / Object | | cx-docrecyb-card |
| auth-dir | 目录授权信息 | AuthDir | | |
| auth-file | 文件授权信息 | AuthFile | | |

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
| dirtree-default | 目录树-插槽 | data |
| dirfile-preappend | 目录文件组件-操作按钮之前 | |
| dirfile-append | 目录文件组件-操作按钮之后 | |

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

/** 文档管理组件Props */
export interface DocManProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 树组件 */
  treeCom?: string | object;
  /** 树结点配置（cx_resdir 配置的 node 名） */
  treeNode: string;
  /** 针对树结点配置的每一个结点，查询时需要的参数，按 name 给值 */
  treeVals: object;
  /** 是否懒加载模式 */
  lazy?: boolean;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAttrs?: object;
  /** 目录树宽度 */
  treeWidth?: string;
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  docPlugs?: string;
  /** 条件计算对象 */
  docExpValues?: any;
  /** 文件列表方式 */
  listType?: 'list' | 'card' | 'icon';
  /** 当上载文件的时候，根据文件设置cx_media 表其他信息 */
  setData?: (data: any, file: any) => void;
  /** 上载文件完成之后的处理 */
  afterUpload?: (ret: any) => void;
  /** 自定义的上载函数，设置这个函数，则上载由该函数完成 */
  upload?: () => void;
  /** 文档列表配置名（cx_tabcfg 的 name） */
  docTableCfg?: string;
  /** 回收站文档列表配置名（cx_tabcfg 的 name） */
  docrecybTableCfg?: string;
  /** 文档卡片组件 */
  docCardCom?: string | object;
  /** 文档回收站卡片组件 */
  docrecybCardCom?: string | object;
  /** 目录授权信息 */
  authDir?: AuthDir;
  /** 文件授权信息 */
  authFile?: AuthFile;
} 