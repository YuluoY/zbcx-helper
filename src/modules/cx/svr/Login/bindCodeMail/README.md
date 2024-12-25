# bindCodeMail

登录后服务 - 绑定账号 - 发送邮箱验证码

## 方法签名
```typescript
static bindCodeMail(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `account` (String): 账号（如果数据库加密，则传加密之后的账号）
  - `email` (String): 邮箱（明码）

## 返回值
Promise 对象，返回数据结构 {ret:0, data: []}

## 功能描述
登录后服务 - 绑定账号 - 发送邮箱验证码。

## 示例
```typescript
await cx.svr.login.bindCodeMail({
  account: "encryptedAccount",
  email: "example@email.com"
});
``` 