# 登录

`cx-login` 登录组件,主要应用于系统的登录页面

## 基础用法

普通登录页，设置`addVerify="fasle"`，表示关闭图形验证。（`tips`:前后端需要统一关闭）

## 配置验证码登录用法

设置`addVerify="true"`，开启图形验证。可以通过`login.config.addVerify`配置是否展示图形验证码。图形验证码包括数字图片验证码块、滑块验证码等。（`tips`:前后端需要统一开启）

## 配置数字图形验证码登录用法

1. 设置设置`addVerify="true"`，开启图形验证
2. 设置types，增加name为`AccGraphic`的对象
3. 注意：params的`addForget`表示是否添加忘记密码按钮

## 配置滑块验证码登录用法

1. 设置`addVerify="true"`，开启图形验证
2. 设置types，增加name为`AccSlider`的对象
3. 注意：params的`addForget`表示是否添加忘记密码按钮

## 配置手机验证码登录用法

设置types，增加name为`PhoneNum`的对象

## 配置tab页切换登录方式用法

设置types，通过增加多个对象的方式，增加不同方式的登录页。例如：可以设置图形验证码、手机号验证码登录

## 配置手机号、邮箱、登录用户名、密码加密用法

1. 配置`encodeUser`函数，可对手机号，邮箱等用户信息进行加密，配置成`undefined`表示不加密。
2. 配置`encodeLogin`函数，可对登录的用户名、密码等进行加密，配置成`undefined`表示不加密。
3. 配置`decodeLogin`函数，可对登录的用户名、密码等进行解密，配置成`undefined`表示不解密。
4. 配置了加密函数，就一定需要配置解密函数。

## 登录页与忘记密码组合页面用法

登录页与忘记密码一起使用示例。

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
/** 登录组件配置参数 */
export interface LoginConfig {
  /** 是否增加图形验证 */
  addVerify?: boolean;
  /** 手机号，邮箱等用户信息加密函数 */
  encodeUser?: (key: string) => string;
  /** 登录信息加密函数 */
  encodeLogin?: (key: string) => string;
  /** 登录信息解密函数 */
  decodeLogin?: (key: string) => string;
}

/** 登录类型参数 */
export interface LoginTypeParams {
  /** 是否添加忘记密码按钮 */
  addForget?: boolean;
}

/** 登录类型配置 */
export interface LoginType {
  /** 登录类型名称 */
  name: 'AccGraphic' | 'AccSlider' | 'PhoneNum';
  /** 登录类型标签 */
  label: string;
  /** 登录类型参数 */
  params?: LoginTypeParams;
}

/** 登录组件完整配置 */
export interface LoginProps {
  /** 配置参数 */
  config: LoginConfig;
  /** 登录类型列表 */
  types: LoginType[];
} 