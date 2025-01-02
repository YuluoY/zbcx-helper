# 分组表单

`cx-form-grp` 分组表单

## 基础用法

```vue
<template>
  <cx-form-grp
    :size="'default'"
    :flds="[]"
    :col-num="1"
    :mode="0"
    :inline="true"
    :border-com="'cx-border-group'"
    :border="{}"
    :header-com="'cx-header-group'"
    :header="{}"
    :att-com="'cx-att-form'"
    :content="{}"
    :before-valbtn="(fld, params) => {}"
    :after-valbtn="(fld, flds, params) => {}"
    @values-change="(fld, changed) => {}"
  />
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| flds | 字段信息数组 | `Array.<Fld>` | | |
| col-num | 列数量 | Number | 1 / 2 / 3 | 1 |
| mode | 模式 | Number | 0-浏览 1-编辑 2-编辑之后做对比 | 0 |
| inline | 模式 | Boolean | 行内表单模式 | true |
| border-com | 边框组件 | String | 见Border相关组件 | cx-border-group |
| border | 组件 Border 的参数（请参考具体的组件传递）| Object | | | 
| header-com | 头部组件 | String | 见Header相关组件 | cx-header-group |
| header | 组件 Header 的参数（请参考具体的组件传递）| Object | | |
| att-com | 内容组件(该功能使用参数传递存在问题，如有需要，请直接使用传递组件) | String | 见Content具体组件 | cx-att-form |
| content | 组件 content 的参数（请参考具体的组件传递）| Object | | |
| before-valbtn | ValButton 插件调用之前的回调函数 - function(fld, params) | Function | | |
| after-valbtn | ValButton 插件调用之后的回调函数 - function(fld, flds, params) | Function | | |

## Fld 属性

> 用 [cx.AttBase.makeInput](http://192.168.2.229:81/api/zbcx_cx/4.2/cx.AttBase.html#makeInput) 方法构造。

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| colname | 列名 | String | | |
| title | 显示标题 | String | | |
| value | 字段值 | String | | |
| _value | 预览展示值 | String | | |
| disporder | 显示顺序 | Number | | |
| type | 显示类型[cx.consts.DISP] | Number | | |
| isnum | 是否数值类型 | Boolean | | |
| editable | 是否可编辑 | Boolean | | |
| required | 是否必填 | Boolean | | |
| rows | 文本显示行数 | Number | | |
| options | 下拉选项 - [{label: String, value: String}] | Array | | |
| config | 配置信息 - (ValButton, SelDyna, SelDepPos) | Object | | |
| refChange | 引用计数器 | Number | | |
| valid | 验证信息 | `Valid` | | |

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

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | ---- | ----- |
| values-change | 字段值发生变化 | (fld, changed) | fld 当前触发的字段对象， changed 字段值是否改变 |

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

/** 字段信息 */
export interface Fld {
  /** 列名 */
  colname: string;
  /** 显示标题 */
  title: string;
  /** 字段值 */
  value: string;
  /** 预览展示值 */
  _value: string;
  /** 显示顺序 */
  disporder: number;
  /** 显示类型[cx.consts.DISP] */
  type: number;
  /** 是否数值类型 */
  isnum: boolean;
  /** 是否可编辑 */
  editable: boolean;
  /** 是否必填 */
  required: boolean;
  /** 文本显示行数 */
  rows: number;
  /** 下拉选项 - [{label: String, value: String}] */
  options?: Array<{ label: string; value: string }>;
  /** 配置信息 - (ValButton, SelDyna, SelDepPos) */
  config?: Record<string, any>;
  /** 引用计数器 */
  refChange: number;
  /** 验证信息 */
  valid?: Valid;
}

/** 分组表单组件Props */
export interface FormGrpProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 字段信息数组 */
  flds: Array<Fld>;
  /** 列数量 */
  colNum?: 1 | 2 | 3;
  /** 模式 0-浏览 1-编辑 2-编辑之后做对比 */
  mode?: 0 | 1 | 2;
  /** 行内表单模式 */
  inline?: boolean;
  /** 边框组件 */
  borderCom?: string;
  /** 组件 Border 的参数（请参考具体的组件传递） */
  border?: Record<string, any>;
  /** 头部组件 */
  headerCom?: string;
  /** 组件 Header 的参数（请参考具体的组件传递） */
  header?: Record<string, any>;
  /** 内容组件(该功能使用参数传递存在问题，如有需要，请直接使用传递组件) */
  attCom?: string;
  /** 组件 content 的参数（请参考具体的组件传递） */
  content?: Record<string, any>;
  /** ValButton 插件调用之前的回调函数 - function(fld, params) */
  beforeValbtn?: (fld: any, params: any) => void;
  /** ValButton 插件调用之后的回调函数 - function(fld, flds, params) */
  afterValbtn?: (fld: any, flds: any, params: any) => void;
  /** 字段值发生变化 */
  onValuesChange?: (fld: Fld, changed: boolean) => void;
} 