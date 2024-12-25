# allAuthEtt

取全部表达式授权信息

## 方法签名
```typescript
static allAuthEtt() => Promise
```

## 返回值
Promise 对象，包含所有表达式授权信息。

## 功能描述
获取系统中所有的表达式授权信息。

## 示例
```typescript
const authInfo = await cx.svr.auth.allAuthEtt();
console.log(authInfo);
``` 