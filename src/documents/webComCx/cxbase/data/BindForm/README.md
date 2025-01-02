# 账号绑定表单

`cx-bind-form` 可进行手机号和邮箱号的绑定与解绑。

## 基础用法

使用 `type` 指定绑定类型（邮箱/手机号），通过 `bindAtt` 配置绑定参数，`sendCode` 和 `getRules` 提供验证码发送和规则校验功能。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ------ |
| **type** | 尺寸 | Number | cx.consts.LOGIN_MAIL / cx.consts.LOGIN_CELL | |
| **bindAtt** | 绑定参数 | Object | | |
| **sendCode** | 发送验证码函数 | Function | | |
| **getRules** | 获取规则校验函数 | Function | | |

## bindAtt 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ------ |
| **isbind** | 是否是绑定模式 | Boolean | true / false | |
| **name** | 绑定名称 | String | | |
| **info** | 用户信息 | Object | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ---- | ---- | ---- |
| on-sucess | 绑定/解绑成功回调 | (ret) | 返回结果 | 