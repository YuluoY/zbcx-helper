# 文档列表（基于 WebSocket）

`cx-doc-list-ws` 附件列表（基于 WebSocket）

## 基础用法

```vue
<template>
  <cx-doc-list-ws
    :dir="dir"
    :saveto="saveto"
    :viewable="true"
    :downloadable="true"
    :editable="false"
    :removable="true"
    :uploadable="true"
  >
  </cx-doc-list-ws>
</template>

<script>
export default {
  data() {
    return {
      dir: 'uploadfile:',
      saveto: 'FileSys'
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| viewable | 是否可以浏览 | Boolean | | true |
| downloadable | 是否可以下载 | Boolean | | true |
| editable | 是否可以编辑 | Boolean | | false |
| removable | 是否可以删除 | Boolean | | true |
| uploadable | 是否可以上载 | Boolean | | true |
| workflow | 流程环节 | String | | |
| bustype | 文件的业务类型，对应cx_media表的bustype字段 | String | | |
| saveto | 文件存储（取值: FileSys - 文件系统, Doc - 存media表及后端确定存放方式（file / fastdfs / miniio）） | String | | FileSys |
| dir | 存储的相对路径（当 saveto = FileSys 时生效，如果不设置，系统自动分配路径）（当 saveto = FileSys时，路径前面可以带文件系统根目录，不带则指向临时文件夹,如: data: tttt/, data: , :tttt/, : ,都是合法的） | String | | |
| set-data | 设置参数 - function(data, file) | Function | | |
| upload-attrs | 自定义传入el-upload组件的原生参数对象 | Object | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| doc-click | 点击文件 | (doc) | 当前选择项 |
| doc-view | 浏览文件 | (doc) | 当前选择项 |
| doc-download | 下载文件 | (doc) | 当前选择项 |
| doc-edit | 编辑文件 | (doc) | 当前选择项 |
| doc-remove | 删除文件 | (doc) | 当前选择项 |
| doc-add | 增加文件 | (doc) | 当前选择项 |

## 类型定义

```ts
/** 文档列表组件Props */
export interface DocListWsProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 是否可以浏览 */
  viewable?: boolean;
  /** 是否可以下载 */
  downloadable?: boolean;
  /** 是否可以编辑 */
  editable?: boolean;
  /** 是否可以删除 */
  removable?: boolean;
  /** 是否可以上载 */
  uploadable?: boolean;
  /** 流程环节 */
  workflow?: string;
  /** 文件的业务类型，对应cx_media表的bustype字段 */
  bustype?: string;
  /** 文件存储（取值: FileSys - 文件系统, Doc - 存media表及后端确定存放方式（file / fastdfs / miniio）） */
  saveto?: string;
  /** 存储的相对路径（当 saveto = FileSys 时生效，如果不设置，系统自动分配路径）（当 saveto = FileSys时，路径前面可以带文件系统根目录，不带则指向临时文件夹,如: data: tttt/, data: , :tttt/, : ,都是合法的） */
  dir?: string;
  /** 设置参数 - function(data, file) */
  setData?: (data: any, file: any) => void;
  /** 自定义传入el-upload组件的原生参数对象 */
  uploadAttrs?: object;
}
```