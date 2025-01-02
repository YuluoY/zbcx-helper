# 文件卡片列表

`cx-file-list-card` 文件卡片列表（基于文件系统）

## 基础用法

```vue
<template>
  <cx-file-list-card
    :size="'default'"
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
    :card-com="'cx-file-card'"
    @row-click="(selected) => {}"
    @selection-change="(selection) => {}"
    @row-remove="(selected) => {}"
  />
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| files | 文件信息列表（文件系统） | Array | | |
| plugs | 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 | String | | File |
| auth | 授权信息 | AuthFile | | |
| multiple | 是否多选模式 | Boolean | | false |
| exp-values | 条件计算对象 | String / cx.dc.IDcValuesBase | | cx.dc.FileValues |
| card-com | 文档卡片组件名 | String | | cx-file-card |

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
| row-click | 点击 | (selected: any) => void | 当前选择项 |
| selection-change | 多选发生变化 | (selection: any[]) => void | 多选数组 |
| row-remove | 删除某行（UI层删除） | (selected: any) => void | 当前选择项 |

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

/** 文件卡片列表组件Props */
export interface FileListCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 文件信息列表（文件系统） */
  files: any[];
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  plugs?: string;
  /** 授权信息 */
  auth?: AuthFile;
  /** 是否多选模式 */
  multiple?: boolean;
  /** 条件计算对象 */
  expValues?: string | any;
  /** 文档卡片组件名 */
  cardCom?: string;
  /** 点击 */
  onRowClick?: (selected: any) => void;
  /** 多选发生变化 */
  onSelectionChange?: (selection: any[]) => void;
  /** 删除某行（UI层删除） */
  onRowRemove?: (selected: any) => void;
} 