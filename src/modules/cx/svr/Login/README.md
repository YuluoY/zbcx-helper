# Login

登录服务类

## 类名
cx.svr.login

## 功能说明
提供用户登录、注册、密码管理、验证码发送等相关服务。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| bindAccount | 绑定账号/解绑账号 | [查看详情](./bindAccount/README.md) |
| bindCodeMail | 绑定账号-发送邮箱验证码 | [查看详情](./bindCodeMail/README.md) |
| bindCodeSms | 绑定账号-发送手机验证码 | [查看详情](./bindCodeSms/README.md) |
| genCaptcha | 生成图形验证码 | [查看详情](./genCaptcha/README.md) |
| getChildOrgans | 获取子部门信息 | [查看详情](./getChildOrgans/README.md) |
| login | 用户登录 | [查看详情](./login/README.md) |
| loginLog | 取用户登录日志 | [查看详情](./loginLog/README.md) |
| logout | 退出系统 | [查看详情](./logout/README.md) |
| md5 | 获取字符串的MD5码 | [查看详情](./md5/README.md) |
| operLog | 用户登录增删改等操作日志 | [查看详情](./operLog/README.md) |
| register | 用户注册 | [查看详情](./register/README.md) |
| sendCodeMail | 发送邮箱验证码 | [查看详情](./sendCodeMail/README.md) |
| sendCodeSms | 发送手机验证码 | [查看详情](./sendCodeSms/README.md) |
| sendSmsBatch | 批量发送手机验证码 | [查看详情](./sendSmsBatch/README.md) |
| setDefPsw | 重置用户密码 | [查看详情](./setDefPsw/README.md) |
| setPsw | 修改密码 | [查看详情](./setPsw/README.md) |
| setPswByCode | 根据验证码修改密码 | [查看详情](./setPswByCode/README.md) |
| url | 取服务对应的网址 | [查看详情](./url/README.md) |
| verifyAccount | 确认账号是否存在 | [查看详情](./verifyAccount/README.md) |

## 使用示例
```typescript
// 用户登录
await cx.svr.login.login({
  account: "username",
  password: "password123",
  time: cx.datetime.now().getTime(),
  type: "LOGIN_ACCOUNT"
});

// 发送验证码
await cx.svr.login.sendCodeMail({
  account: "example@email.com",
  email: "example@email.com"
});

// 修改密码
await cx.svr.login.setPsw({
  oldpassword: "oldEncryptedPassword",
  newpassword: "newEncryptedPassword"
});

// 退出登录
await cx.svr.login.logout();
``` 