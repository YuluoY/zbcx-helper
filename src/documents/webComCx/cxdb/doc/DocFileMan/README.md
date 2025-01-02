# 文档文件管理

`cx-doc-file-man` 文档文件管理，基于cx_media表

## 基础用法

```vue
<template>
  <cx-doc-file-man
    :size="'default'"
    :exp="{
      args: []
    }"
    :plugs="'DocFile'"
    :exp-values="cx.dc.DcDocFileValues"
    :auth="{
      downloadable: true,
      uploadable: true,
      editable: true,
      removable: true,
      sharable: true
    }"
    :list-type="'list'"
    :doc-table-cfg="'DocFile'"
    :docrecyb-table-cfg="'DocRecyb'"
    :doc-card-com="'cx-doc-card'"
    :docrecyb-card-com="'cx-docrecyb-card'"
    @set-data="(data, file) => {}"
    @after-upload="(ret) => {}"
  >
    <template #preappend>
      <!-- 操作按钮之前的内容 -->
    </template>
    <template #append>
      <!-- 操作按钮之后的内容 -->
    </template>
  </cx-doc-file-man>
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| size | 尺寸 | String | small / default / large | default |
| exp | 查询条件(cx.svr.data.query() 查询条件) | QueryCfg | | |
| plugs | 配置插件名（cx_cmdtool 的 node）,多个用逗号分隔 | String | | DocFile |
| exp-values | 条件计算对象 | cx.dc.IDcValuesBase | | cx.dc.DcDocFileValues |
| auth | 授权信息 | AuthFile | | |
| list-type | 文件列表方式 | String | list / card / icon | list |
| set-data | 当上载文件的时候，根据文件设置cx_media 表其他信息 | Function | | |
| after-upload | 上载文件完成之后的处理 | Function | | |
| upload | 自定义的上载函数，设置这个函数，则上载由该函数完成 | Function | | |
| doc-table-cfg | 文档列表配置名（cx_tabcfg 的 name） | String | | DocFile |
| docrecyb-table-cfg | 文档回收站列表配置名（cx_tabcfg 的 name） | String | | DocRecyb |
| doc-card-com | 文档卡片组件 | String / Object | | cx-doc-card |
| docrecyb-card-com | 文档回收站卡片组件 | String / Object | | cx-docrecyb-card |

## QueryCfg 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | ---- | ---- | ----- | ----- |
| args | 条件表达式参数 | Array | | |
| orderby | 排序信息 | String | | |

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
/** 查询条件配置 */
interface QueryCfg {
  /** 条件表达式参数 */
  args: any[];
  /** 排序信息 */
  orderby?: string;
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

/** 文档文件管理组件Props */
interface DocFileManProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 查询条件(cx.svr.data.query() 查询条件) */
  exp?: QueryCfg;
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
  /** 文档列表配置名（cx_tabcfg 的 name） */
  docTableCfg?: string;
  /** 文档回收站列表配置名（cx_tabcfg 的 name） */
  docrecybTableCfg?: string;
  /** 文档卡片组件 */
  docCardCom?: string | object;
  /** 文档回收站卡片组件 */
  docrecybCardCom?: string | object;
} 
```