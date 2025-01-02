# 多目录文件管理

`cx-files-man` 多目录文件管理（基于文件系统）

## 基础用法

```vue
<template>
  <cx-files-man
    :size="'default'"
    :tree-com="'cx-dirs-tree'"
    :dirs="[
      {
        dir: '',
        params: {
          rootLabel: '',
          authDir: {
            addable: true,
            editable: true,
            removable: true
          },
          authFile: {
            downloadable: true,
            uploadable: true,
            editable: true,
            removable: true,
            sharable: true
          }
        }
      }
    ]"
    :tree-plug="'FileDir'"
    :root-label="''"
    :draggable="false"
    :tree-values="cx.dc.FileDirValues"
    :tree-handler="new cx.dc.DirsTreeHandler()"
    :tree-attrs="{ selectFirst: true, expandRoot: true }"
    :file-plugs="'File'"
    :file-exp-values="cx.dc.FileValues"
    :list-type="'list'"
    :file-card-com="'cx-file-card'"
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
  </cx-files-man>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| tree-com | 树组件 | String / Object | | cx-dirs-tree |
| dirs | 目录数组 | `Array.<DirCfg>` | | |
| tree-plug | 插件配置结点（cx_cmdtool 配置的 node 名） | String | | FileDir |
| root-label | 根目录标题，如果设置该属性，则产生一个根结点，否则直接用目录作为根节点 | String | | |
| draggable | 是否可以拖拽目录 | Boolean | | false |
| tree-values | 条件计算提供值的对象 | String / cx.dc.IValuesBase | | cx.dc.FileDirValues |
| tree-handler | 树控件处理对象 | cx.dc.ITreeHandler | | new cx.dc.DirsTreeHandler() |
| tree-attrs | 传递给 el-tree 的属性 | Object | | { selectFirst: true, expandRoot: true } |
| file-plugs | 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 | String | | File |
| file-exp-values | 条件计算对象 | String / cx.dc.IDcValuesBase | | cx.dc.FileValues |
| list-type | 文件列表方式 | String | list / card / icon | list |
| set-data | 当上载文件的时候，根据文件设置cx_media 表其他信息 | (data: any, file: any) => void | | |
| after-upload | 上载文件完成之后的处理 | (ret: any) => void | | |
| upload | 自定义的上载函数，设置这个函数，则上载由该函数完成 | () => void | | |
| file-card-com | 文档卡片组件 | String / Object | | cx-file-card |

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

/** 目录参数 */
export interface DirParams {
  /** 根目录名 */
  rootLabel: string;
  /** 目录权限信息 */
  authDir?: AuthDir;
  /** 文件权限信息 */
  authFile?: AuthFile;
}

/** 目录配置 */
export interface DirCfg {
  /** 目录（详见cx.svr.file 对目录） */
  dir: string;
  /** 参数 */
  params: DirParams;
}

/** 多目录文件管理组件Props */
export interface FilesManProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 树组件 */
  treeCom?: string | object;
  /** 目录数组 */
  dirs: DirCfg[];
  /** 插件配置结点（cx_cmdtool 配置的 node 名） */
  treePlug?: string;
  /** 根目录标题，如果设置该属性，则产生一个根结点，否则直接用目录作为根节点 */
  rootLabel?: string;
  /** 是否可以拖拽目录 */
  draggable?: boolean;
  /** 条件计算提供值的对象 */
  treeValues?: string | any;
  /** 树控件处理对象 */
  treeHandler?: any;
  /** 传递给 el-tree 的属性 */
  treeAttrs?: object;
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
  fileCardCom?: string | object;
}
</template> 