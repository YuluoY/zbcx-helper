# verifyAccount

免登陆服务 - 确认手机号/邮箱号是否存在cx_user表中

## 方法签名
```typescript
static verifyAccount() => Promise
```

## 参数说明
- `param.account` (String): 用户登录账号 / Email邮箱地址 / 手机号
- `param.type` (Number): 类型(LOGIN_ACCOUNT - 用户名， LOGIN_MAIL - 邮箱，LOGIN_CELL-手机号)

## 返回值
用户名

Type: Promise

## 功能描述
免登陆服务 - 确认手机号/邮箱号是否存在cx_user表中。

## 示例
```typescript
await cx.svr.login.verifyAccount({
  account: "example@email.com",
  type: "LOGIN_MAIL"
});
``` 