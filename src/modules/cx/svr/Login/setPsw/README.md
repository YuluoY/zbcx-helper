# setPsw

登录后服务 - 修改密码，syscfg表配置了enKey后，新旧密码都要用cx.security.encrypt.encrypt加密

## 方法签名
```typescript
static setPsw(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `oldpassword` (String): 旧密码
  - `newpassword` (String): 新密码

## 返回值
Promise 对象，返回数据结构 {ret:0}

## 功能描述
登录后服务 - 修改密码，syscfg表配置了enKey后，新旧密码都要用cx.security.encrypt.encrypt加密。

## 示例
```typescript
await cx.svr.login.setPsw({
  oldpassword: "encryptedOldPassword",
  newpassword: "encryptedNewPassword"
});
``` 