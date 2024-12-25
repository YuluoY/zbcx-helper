# urlGet

取 GET 服务对应的 URL

## 方法签名
```typescript
static urlGet() => String
```

## 返回值
String，包含 GET 服务的 URL。

## 功能描述
获取 GET 服务对应的 URL。

## 示例
```typescript
const getServiceUrl = cx.svr.bpm.urlGet();
console.log(getServiceUrl);
``` 