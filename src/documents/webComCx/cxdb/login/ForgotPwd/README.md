# 忘记密码

`cx-forgot-pwd` 忘记密码组件,主要应用于系统的忘记密码页面

## 基础用法

忘记密码页面。注意：`types`数组子项对应找回方式下拉选择项。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **config** | 传递给组件的参数 | `Object` |||

## config 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ----- | ----- |
| **types** | 传入数据数组 | Array | 支持的验证类型（1-手机号验证，2-邮箱验证）| [`cx.consts.LOGIN_MAIL`, `cx.consts.LOGIN_CELL`] |
| encodeUser | 手机号，邮箱等用户信息加密函数 | Function |||
| encodeLogin | 登录信息加密函数 | Function |||
| decodeLogin | 登录信息解密函数 | Function |||

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ---- | ---- | ----- |
| success | 忘记密码成功回调 | (form) | form:返回用户选择的找回方式、新密码 |

## 类型定义

```ts
/** 忘记密码组件配置参数 */
export interface ForgotPwdConfig {
  /** 支持的验证类型（1-手机号验证，2-邮箱验证） */
  types: number[];
  /** 手机号，邮箱等用户信息加密函数 */
  encodeUser?: (key: string) => string;
  /** 登录信息加密函数 */
  encodeLogin?: (key: string) => string;
  /** 登录信息解密函数 */
  decodeLogin?: (key: string) => string;
}

/** 忘记密码组件Props */
export interface ForgotPwdProps {
  /** 配置参数 */
  config: ForgotPwdConfig;
} 