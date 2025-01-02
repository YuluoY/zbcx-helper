# 动态表单

`cx-form-dyna` 动态表单带附件(Form 模式)。

## 功能说明
1. 支持 基本表单展示
2. 支持 表单带附件

## 特殊说明
1. 基本用法与cx-form-att相同    
2. 使用附件功能时，需在urlmap配置websocket和syscache配置urlmap

## 基础用法

```vue
<template>
  <cx-form-dyna
    :attr="{
      grps: [],
      flds: [],
      colNum: 2,
      mode: 0,
      editable: false,
      borderCom: 'cx-border-group',
      headerCom: 'cx-header-group',
      attCom: 'cx-att-form',
      beforeValbtn: (fld, params) => {},
      afterValbtn: (fld, flds, params) => {}
    }"
    :attach="{
      saveto: false,
      uploadable: true,
      editable: false,
      removable: false,
      downloadable: true,
      dir: {},
      setData: () => {}
    }"
    :upload="{
      accept: '',
      multiple: false,
      limit: 0,
      uploadType: 'ws'
    }"
    :doc="{
      major: 0,
      minor: 0,
      entityid: 0,
      task: '',
      bustype: ''
    }"
    :params="{}"
    :cmdbar="false"
    cmdCom="cx-cmd-bar"
    :cmds="[]"
    @values-change="(fld, changed) => {}"
    @doc-add="(doc) => {}"
    @doc-remove="(doc) => {}"
  />
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ------| ----- |
| attr | 属性设置 | `Object.<attr>` | | |
| attach | 附件设置 | `Object.<attach>` | | |
| upload | 上载设置 | `Object.<upload>` | | |
| doc | 文件列表配置 | `Object.<doc>` | | |
| params | 其他参数| `Object.<params>` | | |
| cmdbar | 命令行 | Boolean | | |

## attr 属性
> 属性设置

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| major | 指定主类型（如果该表单跟某个表关联）（major+minor+id / att 二选一） | Number | | |
| minor | 指定子类型（如果该表单跟某个表关联）（major+minor+id / att 二选一） | Number | | |
| id | 指定实体ID（如果该表单跟某个表关联）（major+minor+id / att 二选一） | Number | | |
| grps | 分组信息 | `Array.<grps>` | | |
| flds | 字段列表 | `Array.<flds>` | | |
| att | 属性（如果该表单跟某个表关联）（major+minor+id / att 二选一） | `Object.<att>` | | |
| col-num | 列数量 | Number | (1 / 2 / 3 / ...) | 2 |
| mode | 编辑/浏览模式 | Number | 浏览：cx.consts.MODE_VIEW，编辑：cx.consts.MODE_EDIT | cx.consts.MODE_VIEW |
| editable | 是否可以切换到编辑模式 | Boolean | | false |
| decode | 是否需要对数据进行解密 | Boolean | | |
| border-com | Border 组件名（边框和底纹）(详情见cx-form-grp) | String | | cx-border-group |
| header-com | Header 组件名（标题头(详情见cx-form-grp)） | String | | cx-header-group |
| att-com | 属性组件名(详情见cx-form-grp) | String | | cx-att-form |
| before-valbtn | ValButton 插件调用之前的回调函数 - function(fld, params) | Function | | |
| after-valbtn | ValButton 插件调用之后的回调函数 - function(fld, flds, params) | Function | | |

## Grp 属性
> 分组属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| name | 分组命名 | String | | |
| title | 分组标题 | String | | |

## Fld 属性

> 用 [cx.AttBase.makeInput](http://192.168.2.229:81/api/zbcx_cx/4.2/cx.AttBase.html#makeInput) 方法构造。

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| colname | 列名 | String | | |
| title | 显示标题 | String | | |
| isnum | 是否数值类型 | Boolean | | |
| type | 显示类型[cx.consts.DISP] | Number | | |
| disporder | 显示顺序 | Number | | |
| required | 是否必填 | Boolean | | |
| value | 字段值 | String | | |
| _value | 预览展示值 | String | | |
| grp | 分组命名,对应的是组里面的命名，（如果 grps 有数组，grp 不在grps里面的，会单独分到一个其他组里面） | String | | |
| rows | 显示行数 | Number | | 1 |
| defval | 默认值 | String | | |
| options | 下拉选项 - [{label: String, value: String}] | Array | | |
| config | 配置信息 - (ValButton, SelDyna, SelDepPos) | Object | | |
| params | 参数 | Object | | |
| valid | 验证信息（详情见valid属性） | `Valid` | | |
| editable | 是否可编辑 | Boolean | | |

## Valid 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| minlen | 最小长度 | Number | | |
| maxlen | 最大长度 | Number | | |
| len | 固定长度 | Number | | |
| min | 最小值 | Number | | |
| max | 最大值 | Number | | |
| pattern | 正则表达式 | Pattern | | |
| func | 函数验证 | String | | |

## attach 属性
> 附件设置， 直接v-bind绑定到cx-doc-list-ws组件

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ----- | ----- | ----- |
| saveto | 存储位置 | Boolean | | |
| uploadable | 允许上载 | Boolean | | true |
| editable | 允许编辑 | Boolean | | |
| removable | 允许删除 | Boolean | | |
| downloadable | 允许下载 | Boolean | | true |
| dir | 下载地址 | `Object.<dir>` | | |
| setData | 上载的时候设置数据 | Function | | |

## upload 属性
> 上载设置, 直接v-bind绑定到el-upload组件

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| accept | 支持的文件类型 | String | | |
| multiple | 支持多选 | Boolean | | |
| limit | 上载文件数量 | Number | | |
| uploadType | 上传协议类型 (ws/http)| String |ws/http |ws|

## doc 属性
> 文件列表配置

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| major | 主类型 | Number | | |
| minor | 子类型 | Number | | |
| entityid | 实体ID | Number | | |
| task | 流程结点 | String | | |
| bustype | 流程中的业务类型 | String | | |

## cmdbar 属性
> 命令行

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| cmdCom | 命令行组件 | String | | |
| cmds | 按钮数组 | `Array.<btn>` | | |

## btn 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| name | 命名 | String | | |
| title | 标题 | String | | |
| icon | 图标 | String | | |
| type | 按钮类型 | String | | |
| disabled | 按钮是否禁用 | Boolean | | |
| onClick | 点击执行函数 | Function | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| values-change | 字段值发生变化 | (fld, changed) | fld 当前触发的字段对象， changed 字段值是否改变 |
| doc-add | 添加附件 | (doc) | doc 附件信息 |
| doc-remove | 移除附件 | (doc) | doc 附件信息 |

## 类型定义

```ts
/** 验证信息 */
export interface Valid {
  /** 最小长度 */
  minlen?: number;
  /** 最大长度 */
  maxlen?: number;
  /** 固定长度 */
  len?: number;
  /** 最小值 */
  min?: number;
  /** 最大值 */
  max?: number;
  /** 正则表达式 */
  pattern?: RegExp;
  /** 函数验证 */
  func?: string;
}

/** 分组属性 */
export interface Grp {
  /** 分组命名 */
  name: string;
  /** 分组标题 */
  title: string;
}

/** 字段信息 */
export interface Fld {
  /** 列名 */
  colname: string;
  /** 显示标题 */
  title: string;
  /** 是否数值类型 */
  isnum: boolean;
  /** 显示类型[cx.consts.DISP] */
  type: number;
  /** 显示顺序 */
  disporder: number;
  /** 是否必填 */
  required: boolean;
  /** 字段值 */
  value: string;
  /** 预览展示值 */
  _value: string;
  /** 分组命名,对应的是组里面的命名，（如果 grps 有数组，grp 不在grps里面的，会单独分到一个其他组里面） */
  grp: string;
  /** 显示行数 */
  rows: number;
  /** 默认值 */
  defval: string;
  /** 下拉选项 - [{label: String, value: String}] */
  options?: Array<{ label: string; value: string }>;
  /** 配置信息 - (ValButton, SelDyna, SelDepPos) */
  config?: Record<string, any>;
  /** 参数 */
  params?: Record<string, any>;
  /** 验证信息（详情见valid属性） */
  valid?: Valid;
  /** 是否可编辑 */
  editable: boolean;
}

/** 按钮属性 */
export interface Btn {
  /** 命名 */
  name: string;
  /** 标题 */
  title: string;
  /** 图标 */
  icon?: string;
  /** 按钮类型 */
  type?: string;
  /** 按钮是否禁用 */
  disabled?: boolean;
  /** 点击执行函数 */
  onClick?: () => void;
}

/** 附件设置 */
export interface Attach {
  /** 存储位置 */
  saveto?: boolean;
  /** 允许上载 */
  uploadable?: boolean;
  /** 允许编辑 */
  editable?: boolean;
  /** 允许删除 */
  removable?: boolean;
  /** 允许下载 */
  downloadable?: boolean;
  /** 下载地址 */
  dir?: Record<string, any>;
  /** 上载的时候设置数据 */
  setData?: () => void;
}

/** 上载设置 */
export interface Upload {
  /** 支持的文件类型 */
  accept?: string;
  /** 支持多选 */
  multiple?: boolean;
  /** 上载文件数量 */
  limit?: number;
  /** 上传协议类型 (ws/http) */
  uploadType?: 'ws' | 'http';
}

/** 文件列表配置 */
export interface Doc {
  /** 主类型 */
  major?: number;
  /** 子类型 */
  minor?: number;
  /** 实体ID */
  entityid?: number;
  /** 流程结点 */
  task?: string;
  /** 流程中的业务类型 */
  bustype?: string;
}

/** 属性设置 */
export interface Attr {
  /** 指定主类型（如果该表单跟某个表关联）（major+minor+id / att 二选一） */
  major?: number;
  /** 指定子类型（如果该表单跟某个表关联）（major+minor+id / att 二选一） */
  minor?: number;
  /** 指定实体ID（如果该表单跟某个表关联）（major+minor+id / att 二选一） */
  id?: number;
  /** 分组信息 */
  grps?: Array<Grp>;
  /** 字段列表 */
  flds?: Array<Fld>;
  /** 属性（如果该表单跟某个表关联）（major+minor+id / att 二选一） */
  att?: Record<string, any>;
  /** 列数量 */
  colNum?: number;
  /** 编辑/浏览模式 */
  mode?: number;
  /** 是否可以切换到编辑模式 */
  editable?: boolean;
  /** 是否需要对数据进行解密 */
  decode?: boolean;
  /** Border 组件名（边框和底纹）(详情见cx-form-grp) */
  borderCom?: string;
  /** Header 组件名（标题头(详情见cx-form-grp)） */
  headerCom?: string;
  /** 属性组件名(详情见cx-form-grp) */
  attCom?: string;
  /** ValButton 插件调用之前的回调函数 - function(fld, params) */
  beforeValbtn?: (fld: any, params: any) => void;
  /** ValButton 插件调用之后的回调函数 - function(fld, flds, params) */
  afterValbtn?: (fld: any, flds: any, params: any) => void;
}

/** 动态表单组件Props */
export interface FormDynaProps {
  /** 属性设置 */
  attr?: Attr;
  /** 附件设置 */
  attach?: Attach;
  /** 上载设置 */
  upload?: Upload;
  /** 文件列表配置 */
  doc?: Doc;
  /** 其他参数 */
  params?: Record<string, any>;
  /** 命令行 */
  cmdbar?: boolean;
  /** 命令行组件 */
  cmdCom?: string;
  /** 按钮数组 */
  cmds?: Array<Btn>;
  /** 字段值发生变化 */
  onValuesChange?: (fld: Fld, changed: boolean) => void;
  /** 添加附件 */
  onDocAdd?: (doc: any) => void;
  /** 移除附件 */
  onDocRemove?: (doc: any) => void;
} 