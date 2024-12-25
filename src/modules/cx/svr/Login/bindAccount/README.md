# bindAccount

登录后服务 - 绑定账号/解绑账号

## 方法签名
```typescript
static bindAccount(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `account` (Number, optional): 邮箱号or手机号
  - `code` (String, optional): 验证码
  - `type` (Number, optional): 类型（2为邮箱 3为手机号）

## 返回值
Promise 对象，返回数据结构 {ret:0, data: []}

## 功能描述
登录后服务 - 绑定账号/解绑账号。

## 示例
```typescript
await cx.svr.login.bindAccount({
  account: "example@email.com",
  code: "123456",
  type: 2
});
``` 