# setDefPsw

登录后服务 - 重置用户密码，改为创建用户时的内置默认密码

## 方法签名
```typescript
static setDefPsw(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `userid` (Number): 用户ID

## 返回值
Promise 对象，返回数据结构 {ret:0}

## 功能描述
登录后服务 - 重置用户密码，改为创建用户时的内置默认密码。

## 示例
```typescript
await cx.svr.login.setDefPsw({
  userid: 123
});
``` 