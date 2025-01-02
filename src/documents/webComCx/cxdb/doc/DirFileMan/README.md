# 目录下的文件管理

`cx-dir-file-man` 目录下的文件管理（基于文件系统）

## 基础用法

```vue
<template>
  <cx-dir-file-man
    :size="'default'"
    :dir="'directory/path'"
    :plugs="'File'"
    :exp-values="cx.dc.FileValues"
    :auth="{
      downloadable: true,
      uploadable: true,
      editable: true,
      removable: true,
      sharable: true
    }"
    :list-type="'list'"
    :file-card-com="'cx-file-card'"
    @set-data="(data, file) => {}"
    @after-upload="(ret) => {}"
  >
    <template #preappend>
      <!-- 操作按钮之前的内容 -->
    </template>
    <template #append>
      <!-- 操作按钮之后的内容 -->
    </template>
  </cx-dir-file-man>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| dir | 目录名 | String | | |
| plugs | 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 | String | | File |
| exp-values | 条件计算对象 | Object | | cx.dc.FileValues |
| auth | 授权信息 | Object | | |
| list-type | 文件列表方式 | String | list / card / icon | list |
| set-data | 当上载文件的时候，根据文件设置cx_media 表其他信息 | Function | | |
| after-upload | 上载文件完成之后的处理 | Function | | |
| upload | 自定义的上载函数，设置这个函数，则上载由该函数完成 | Function | | |
| file-card-com | 文件卡片组件 | String | | cx-file-card |

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
| preappend | 操作按钮之前 | |
| append | 操作按钮之后 | |

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

/** 目录下的文件管理组件Props */
interface DirFileManProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 目录名 */
  dir: string;
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  plugs?: string;
  /** 条件计算对象 */
  expValues?: any;
  /** 授权信息 */
  auth?: AuthFile;
  /** 文件列表方式 */
  listType?: 'list' | 'card' | 'icon';
  /** 当上载文件的时候，根据文件设置cx_media 表其他信息 */
  setData?: Function;
  /** 上载文件完成之后的处理 */
  afterUpload?: Function;
  /** 自定义的上载函数，设置这个函数，则上载由该函数完成 */
  upload?: Function;
  /** 文件卡片组件 */
  fileCardCom?: string;
} 
```