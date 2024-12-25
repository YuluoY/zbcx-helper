# logout

登录后服务 - 退出系统

## 方法签名
```typescript
static logout() => Promise
```

## 返回值
Promise 对象，返回数据结构 {ret:0}

## 功能描述
登录后服务 - 退出系统。

## 示例
```typescript
await cx.svr.login.logout();
``` 