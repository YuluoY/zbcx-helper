# setPswByCode

免登陆服务 - 根据验证码修改密码

## 方法签名
```typescript
static setPswByCode() => Promise
```

## 参数说明
- `params.account` (String): 账号
- `param.password` (Number): 密码
- `param.type` (Number): 类型（LOGIN_MAIL/2-邮箱验证码，LOGIN_CELL/3-手机验证码）
- `param.code` (String): 验证码

## 返回值
用户名

Type: Promise

## 功能描述
免登陆服务 - 根据验证码修改密码。

## 示例
```typescript
await cx.svr.login.setPswByCode({
  account: "example@email.com",
  password: "newPassword123",
  type: 2,
  code: "123456"
});
``` 