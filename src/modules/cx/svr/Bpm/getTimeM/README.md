# getTimeM

取当前时间

## 方法签名
```typescript
static getTimeM() => Promise
```

## 返回值
Promise 对象，包含当前时间信息。

## 功能描述
获取系统的当前时间。

## 示例
```typescript
const currentTime = await cx.svr.bpm.getTimeM();
console.log(currentTime);
``` 