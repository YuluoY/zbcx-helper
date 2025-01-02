# 文档列表卡片

`cx-doc-list-card` 文档卡片列表（基于cx_media表）

## 基础用法

```vue
<template>
  <cx-doc-list-card
    :files="files"
    :plugs="'DocFile'"
    :multiple="false"
    :auth="{
      downloadable: true,
      uploadable: true,
      editable: true,
      removable: true,
      sharable: true
    }"
    :exp-values="expValues"
    :card-com="'cx-doc-card'"
  >
  </cx-doc-list-card>
</template>

<script>
export default {
  data() {
    return {
      files: [],
      expValues: {}
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| **files** | 文件信息列表（cx_media） | Array | | |
| plugs | 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 | String | | DocFile |
| multiple | 是否多选模式 | Boolean | | false |
| auth | 授权信息 | AuthFile | | |
| exp-values | 条件计算对象 | cx.dc.IDcValuesBase | | cx.dc.DcDocFileValues |
| card-com | 文档卡片组件名 | String | | cx-doc-card |

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
| row-click | 点击 | (selected) | 当前选择项 |
| selection-change | 多选发生变化 | (selection) | 多选数组 |
| row-remove | 删除某行（UI层删除） | (selected) | 当前选择项 |

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

/** 文档列表卡片组件Props */
interface DocListCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 文件信息列表（cx_media） */
  files: any[];
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  plugs?: string;
  /** 是否多选模式 */
  multiple?: boolean;
  /** 授权信息 */
  auth?: AuthFile;
  /** 条件计算对象 */
  expValues?: any;
  /** 文档卡片组件名 */
  cardCom?: string;
}
```