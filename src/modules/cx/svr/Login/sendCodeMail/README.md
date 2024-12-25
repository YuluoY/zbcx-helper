# sendCodeMail

免登陆服务 - 发送邮箱验证码(新版，使用Redis校验，配合verifyMailCode验证)

## 方法签名
```typescript
static sendCodeMail() => Promise
```

## 参数说明
- `param.account` (String): 账号（如果数据库加密，则传加密之后的账号）
- `param.email` (String): 邮箱（明码）

## 返回值
Promise 对象

## 功能描述
免登陆服务 - 发送邮箱验证码(新版，使用Redis校验，配合verifyMailCode验证)。

## 示例
```typescript
await cx.svr.login.sendCodeMail({
  account: "encryptedAccount",
  email: "example@email.com"
});
``` 