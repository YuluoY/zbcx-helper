# 登录相关常量

## LOGIN_ACCOUNT
账号密码登录。

## LOGIN_CELL
手机号登录。

## LOGIN_MAIL
邮箱登录。

## LOGIN_QQ
QQ登录。

## LOGIN_SCAN
扫码登录。

## LOGIN_WX
微信登录。

## 示例

```js
// 判断登录方式
switch (loginType) {
  case cx.consts.LOGIN_ACCOUNT:
    // 账号密码登录处理
    break;
  case cx.consts.LOGIN_CELL:
    // 手机号登录处理
    break;
  case cx.consts.LOGIN_MAIL:
    // 邮箱登录处理
    break;
  case cx.consts.LOGIN_QQ:
    // QQ登录处理
    break;
  case cx.consts.LOGIN_SCAN:
    // 扫码登录处理
    break;
  case cx.consts.LOGIN_WX:
    // 微信登录处理
    break;
}

// 检查是否支持扫码登录
if (supportedLoginTypes.includes(cx.consts.LOGIN_SCAN)) {
  // 显示扫码登录选项
}