# 属性编辑

`cx-att-edit` 浏览/编辑属性（支持cx数据库配置）

## 基础用法

普通登录页，设置`addVerify="fasle"`，表示关闭图形验证。（`tips`:前后端需要统一关闭）

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **config** | 传递给组件的参数 | `Object` |||

## config 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **config** | 配置参数 | `Object` |||
| **types** | 传入数据数组 | `Array` |||

## config/config 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **`addVerify`** | 是否开启图形验证 | Boolean | true / false ||
| encodeUser | 手机号，邮箱等用户信息加密函数 | Function || key => cx.security.encrypt.encrypt(key, $app.SYS_ENKEY) |
| encodeLogin | 登录信息加密函数 | Function || key => cx.security.encrypt.encrypt(key, $app.SYS_ENKEY) |
| decodeLogin | 登录信息解密函数 | Function || key => cx.security.encrypt.decrypt(key, $app.SYS_ENKEY) |

## config/types 字段信息

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| name | 登录方式 | String | AccGraphic / AccSlider / PhoneNum ||
| label | 登录方式标签 | String |||
| params | 参数 | Object |||

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

/** 属性编辑组件参数 */
interface AttEditParams {
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
  /** 编辑/浏览模式 */
  mode?: 0 | 1;
  /** 列数量 */
  colNum?: 1 | 2 | 3;
  /** 属性组件名 */
  attCom?: string;
  /** ValButton 插件调用之前的回调函数 */
  beforeValbtn?: (fld: FieldInfo, params: any) => void;
  /** ValButton 插件调用之后的回调函数 */
  afterValbtn?: (fld: FieldInfo, flds: FieldInfo[], params: any) => void;
}

/** 属性编辑组件Props */
interface AttEditProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 传递给组件的参数 */
  params: AttEditParams;
} 
```