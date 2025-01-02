# 自定义属性编辑

`cx-att-cust` 自定义属性编辑/浏览

## 基础用法

```vue
<template>
  <cx-att-cust
    :size="'default'"
    :params="{
      major: 98,
      minor: 151,
      refFlds: [],
      flds: [
        {
          colname: 'COMMENT_',
          title: '意见',
          value: '',
          type: 1,
          editable: true,
          required: true,
          rows: 2,
          disporder: 1
        }
      ],
      editable: true,
      mode: 1,
      colNum: 2,
      attCom: 'cx-att-form'
    }"
    @values-change="(fld, changed) => {}"
  />
</template>
```

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| params | 传递给组件的参数 | Object | | |

## params 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ----- | ----- | ----- |
| major | 实体主类型 (不传 major 和 minor 的时候，必须提供 flds/fldvals) | Number | | |
| minor | 实体子类型 (不传 major 和 minor 的时候，必须提供 flds/fldvals) | Number | | |
| refFlds | 参照字段,结构同 cx.AttBase 对象的 makeInput 返回结果 | Array | | |
| flds | 自定义字段,结构同 cx.AttBase 对象的 makeInput 返回结果 | Array | | |
| editable | 是否可编辑 | Boolean | | false |
| mode | 编辑/浏览模式 | Number | 0-浏览 / 1-编辑 | 0 |
| colNum | 列数量 | Number | 1 / 2 / 3 | 2 |
| attCom | 属性组件名 | String | | cx-att-form |
| before-valbtn | ValButton 插件调用之前的回调函数 - function(fld, params) | Function | | |
| after-valbtn | ValButton 插件调用之后的回调函数 - function(fld, flds, params) | Function | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ---- | --- | ----- |
| values-change | 字段值发生变化 | (fld, changed) | |

## flds/refFlds 字段信息

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ----- |
| colname | 列名 | String | | |
| value | 值 | String | | |
| disporder | 显示顺序 (< 1 不显示) | Number | | |
| type | 显示类型 | Number | | |
| title | 显示标题 | String | | |
| isnum | 是否数值型 | Number | 0 / 1 | |
| required | 是否必填 | Boolean | | |
| rows | 显示行数 | Number | | |
| grp | 分组 | String | | |
| valid | 校验 | Object | | |
| refChange | 引用计数(内部字段) | Number | | 0 |
| disped | 是否显示出来(内部字段) | Boolean | | |

## valid 验证信息

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| minlen | 最小长度 | Number | | |
| maxlen | 最大长度 | Number | | |
| len | 长度 | Number | | |
| min | 最小值 | String | | |
| max | 最大值 | String | | |
| pattern | 正则表达式 | Pattern | | |
| func | 函数验证 | String | | |

## 类型定义

```ts
/** 验证信息 */
export interface ValidInfo {
  /** 最小长度 */
  minlen?: number;
  /** 最大长度 */
  maxlen?: number;
  /** 长度 */
  len?: number;
  /** 最小值 */
  min?: string;
  /** 最大值 */
  max?: string;
  /** 正则表达式 */
  pattern?: RegExp;
  /** 函数验证 */
  func?: string;
}

/** 字段信息 */
export interface FieldInfo {
  /** 列名 */
  colname: string;
  /** 值 */
  value?: string;
  /** 显示顺序 (< 1 不显示) */
  disporder?: number;
  /** 显示类型 */
  type?: number;
  /** 显示标题 */
  title?: string;
  /** 是否数值型 */
  isnum?: number;
  /** 是否必填 */
  required?: boolean;
  /** 显示行数 */
  rows?: number;
  /** 分组 */
  grp?: string;
  /** 校验 */
  valid?: ValidInfo;
  /** 引用计数(内部字段) */
  refChange?: number;
  /** 是否显示出来(内部字段) */
  disped?: boolean;
}

/** 组件参数 */
export interface AttCustParams {
  /** 实体主类型 */
  major?: number;
  /** 实体子类型 */
  minor?: number;
  /** 参照字段 */
  refFlds?: FieldInfo[];
  /** 自定义字段 */
  flds?: FieldInfo[];
  /** 是否可编辑 */
  editable?: boolean;
  /** 编辑/浏览模式 */
  mode?: number;
  /** 列数量 */
  colNum?: number;
  /** 属性组件名 */
  attCom?: string;
  /** ValButton 插件调用之前的回调函数 */
  beforeValbtn?: (fld: FieldInfo, params: any) => void;
  /** ValButton 插件调用之后的回调函数 */
  afterValbtn?: (fld: FieldInfo, flds: FieldInfo[], params: any) => void;
}

/** 自定义属性编辑组件Props */
export interface AttCustProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 传递给组件的参数 */
  params?: AttCustParams;
} 