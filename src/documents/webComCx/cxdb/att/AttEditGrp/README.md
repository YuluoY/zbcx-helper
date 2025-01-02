# 属性分组编辑

`cx-att-edit-grp` 分组的方式浏览/编辑属性-支持 cx 数据库配置

## 功能说明
1) 基于 Container 和 HeaderCard 组件进行扩展
2) 支持 更换 Border
3) 支持 更换 Header
4) 支持 更换 att-com
5) 支持 att / flds + fldVals / major + minor + id 多种方式
6) 组件自身支持存储到数据库

## 基础用法

基本的属性分组编辑功能。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ----- |
| size | 尺寸 | String | large / default /small | default |
| title | 标题 | String | | |
| **params** | 传递给组件的参数 | `Object` | | |

## params 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | --- | ----- | ---- | ----- |
| **major** | 实体主类型 (不传 major 和 minor 的时候，必须提供 flds/fldvals) | Number | | |
| **minor** | 实体子类型 (不传 major 和 minor 的时候，必须提供 flds/fldvals) | Number | | |
| att | 实体属性 (不传 att,则采用默认属性) | Object | | |
| **flds** | 字段列表 (fld 信息必须跟 cx_fld 表一致) | `Array` | | |
| fldVals | 字段取值表 (fldval 信息必须跟 cx_fldvalue 表一致) | Array | | |
| uneditables | 不可编辑的字段名列表 | Array | | |
| decode | 是否需要解码 | Boolean | | false |
| editable | 是否可编辑 | Boolean | | false |
| mode | 编辑/浏览模式, 0-浏览 1-编辑 2-编辑后对比 | Number | 0 / 1 / 2 | 0 |
| colNum | 列数量 | Number | 1 / 2 / 3 | 2 |
| attCom | 属性组件名 | String | | cx-att-tab |
| borderCom | Border 组件名（边框和底纹）| String | | cx-border-regular |
| headerCom | Header 组件名（标题头）| String | | cx-header-attgrp |
| header | 组件 Header 的参数 (请参考具体的组件传递) | Object | | |
| content | 组件 Content 的参数 (请参考具体的组件传递) | Object | | |
| update | 保存数据 - function(att), 返回 Promise. (如果不传该参数，组件自己保存数据，并调用 beforeUpd 和 afterUpd) | Function | | |
| beforeUpd | 修改数据之前 - function(att)，成功返回 true, 否则函数内部自己报错 | Function | | |
| afterUpd | 修改数据之后 - function(att) | Function | | |
| before-valbtn | ValButton 插件调用之前的回调函数 - function(fld, params) | Function | | |
| after-valbtn | ValButton 插件调用之后的回调函数 - function(fld, flds, params) | Function | | |

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
| valid | 校验 | `Object` | | |
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

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| --- | ---- | ---- | ----- |
| fld-change | 字段值发生变化 | (fld, changed) | |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| header-preappend | 标题之前 | |
| header-append | 标题之后 | |
| header-title | 标题附加 | |

## 类型定义

```ts
/** 验证信息 */
interface ValidInfo {
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
interface FieldInfo {
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
  isnum?: 0 | 1;
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

/** 属性分组编辑组件参数 */
interface AttEditGrpParams {
  /** 实体主类型 (不传 major 和 minor 的时候，必须提供 flds/fldvals) */
  major?: number;
  /** 实体子类型 (不传 major 和 minor 的时候，必须提供 flds/fldvals) */
  minor?: number;
  /** 实体属性 (不传 att,则采用默认属性) */
  att?: object;
  /** 字段列表 (fld 信息必须跟 cx_fld 表一致) */
  flds?: FieldInfo[];
  /** 字段取值表 (fldval 信息必须跟 cx_fldvalue 表一致) */
  fldVals?: any[];
  /** 不可编辑的字段名列表 */
  uneditables?: string[];
  /** 是否需要解码 */
  decode?: boolean;
  /** 是否可编辑 */
  editable?: boolean;
  /** 编辑/浏览模式, 0-浏览 1-编辑 2-编辑后对比 */
  mode?: 0 | 1 | 2;
  /** 列数量 */
  colNum?: 1 | 2 | 3;
  /** 属性组件名 */
  attCom?: string;
  /** Border 组件名（边框和底纹）*/
  borderCom?: string;
  /** Header 组件名（标题头）*/
  headerCom?: string;
  /** 组件 Header 的参数 */
  header?: object;
  /** 组件 Content 的参数 */
  content?: object;
  /** 保存数据 - function(att), 返回 Promise */
  update?: (att: object) => Promise<any>;
  /** 修改数据之前 - function(att)，成功返回 true */
  beforeUpd?: (att: object) => boolean;
  /** 修改数据之后 - function(att) */
  afterUpd?: (att: object) => void;
  /** ValButton 插件调用之前的回调函数 */
  beforeValbtn?: (fld: FieldInfo, params: any) => void;
  /** ValButton 插件调用之后的回调函数 */
  afterValbtn?: (fld: FieldInfo, flds: FieldInfo[], params: any) => void;
}

/** 属性分组编辑组件Props */
interface AttEditGrpProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 标题 */
  title?: string;
  /** 传递给组件的参数 */
  params: AttEditGrpParams;
} 