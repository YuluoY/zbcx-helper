# 文档附件

`cx-doc-attach` 文档附件（文档，基于cx_media表）

## 基础用法

```vue
<template>
  <cx-doc-attach :params="params"></cx-doc-attach>
</template>

<script>
export default {
  data() {
    return {
      params: {
        major: 32,
        minor: 12,
        entityId: 1,
        listType: 'list',
        auth: {
          downloadable: true,
          uploadable: true,
          editable: true,
          removable: true,
          sharable: true
        }
      }
    }
  }
}
</script>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| **major** | 实体主类型 | Number | | |
| **minor** | 实体子类型 | Number | | |
| **entity-id** | 实体ID | Number | | |
| plugs | 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 | String | | DocFile |
| exp-values | 条件计算对象 | String / cx.dc.IDcValuesBase | | cx.dc.DocFileValues |
| auth | 授权信息 | AuthFile | | |
| list-type | 文件列表方式 | String | list / card / icon | list |
| set-data | 当上载文件的时候，根据文件设置cx_media 表其他信息 | (data,file) | | |
| after-upload | 上载文件完成之后的处理 | (ret) | | |
| upload | 自定义的上载函数，设置这个函数，则上载由该函数完成 | () | | |
| doc-table-cfg | 文档列表配置名（cx_tabcfg 的 name） | String | | DocFile |
| docrecyb-table-cfg | 文档回收站列表配置名（cx_tabcfg 的 name） | String | | DocRecyb |
| doc-card-com | 文档卡片组件 | String / Object | | cx-doc-card |
| docrecyb-card-com | 文档回收站卡片组件 | String / Object | | cx-docrecyb-card |

## AuthFile 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| downloadable | 是否可下载文档 | Boolean | | true |
| uploadable | 是否可上载文档 | Boolean | | true |
| editable | 是否可编辑文档 | Boolean | | true |
| removable | 是否可删除文档 | Boolean | | true |
| sharable | 是否可分享文档 | Boolean | | true |

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

/** 文档附件组件参数 */
export interface DocAttachParams {
  /** 实体主类型 */
  major: number;
  /** 实体子类型 */
  minor: number;
  /** 实体ID */
  entityId: number;
  /** 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 */
  plugs?: string;
  /** 条件计算对象 */
  expValues?: string | any;
  /** 授权信息 */
  auth?: AuthFile;
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
  /** 文档回收站列表配置名（cx_tabcfg 的 name） */
  docrecybTableCfg?: string;
  /** 文档卡片组件 */
  docCardCom?: string | object;
  /** 文档回收站卡片组件 */
  docrecybCardCom?: string | object;
}

/** 文档附件组件Props */
export interface DocAttachProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 传递给组件的参数 */
  params: DocAttachParams;
} 