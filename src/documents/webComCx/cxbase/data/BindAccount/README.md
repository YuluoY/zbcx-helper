# 账号绑定

`cx-bind-account` 账户安全绑定/解绑组件。

## 基础用法

使用 `bindVals` 属性配置绑定参数，包括名称、字段名、图片路径等信息。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ------ |
| **bindVals** | 绑定参数 | Array.<BindVal> | | |

## bindVals 字段信息

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ------ |
| **name** | 绑定名称 | String | | |
| **colname** | cx_user用户表绑定字段名称 | String | 'qq' / 'email' | |
| **imgSrc** | 绑定图片路径 | String | 'static/userinfo/email.png' | |
| **value** | cx_user用户表的绑定的字段名对应的字段值 | String | | |
| **valueShow** | 页面显示的值 | String | | |
| **userobj** | cx_user用户表表数据 | Object | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ---- | --- | -------- |
| on-sucess | 绑定or解绑成功回调 | (ret) | ret 该行数据对象 | 