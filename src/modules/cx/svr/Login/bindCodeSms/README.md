# bindCodeSms

登录后服务 - 绑定账号 - 发送手机验证码

## 方法签名
```typescript
static bindCodeSms(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `account` (String): 账号（如果数据库加密，则传加密之后的账号）
  - `cell` (String): 手机号（明码）

## 返回值
Promise 对象，返回数据结构 {ret:0, data: []}

## 功能描述
登录后服务 - 绑定账号 - 发送手机验证码。

## 示例
```typescript
await cx.svr.login.bindCodeSms({
  account: "encryptedAccount",
  cell: "13800138000"
});
``` 