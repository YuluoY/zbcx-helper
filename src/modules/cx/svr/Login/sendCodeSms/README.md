# sendCodeSms

免登陆服务 - 发送手机验证码，基于cx_smsconfig配置表，type=1是验证码模式

## 方法签名
```typescript
static sendCodeSms() => Promise
```

## 参数说明
- `param.account` (String): 账号（如果数据库加密，则传加密之后的账号）
- `param.cell` (String): 手机号（明码）
- `params.*` (*): keyno对应模板temp1Parms字段中有变量时，变量作为key分别传值

## 返回值
Promise 对象，返回数据结构 {ret:0, data: []}

## 功能描述
免登陆服务 - 发送手机验证码，基于cx_smsconfig配置表，type=1是验证码模式。

## 示例
```typescript
await cx.svr.login.sendCodeSms({
  account: "encryptedAccount",
  cell: "13800138000",
  // 其他模板变量值
});
``` 