# url

取服务对应的网址

## 方法签名
```typescript
static url() => String
```

## 返回值
String: 服务网址

## 功能描述
获取GRPC服务对应的网址。

## 示例
```typescript
const serviceUrl = cx.svr.grpc.url();
``` 