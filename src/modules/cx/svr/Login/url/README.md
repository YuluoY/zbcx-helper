# url

取服务对应的网址

## 方法签名
```typescript
static url(bAuth?: Boolean) => String
```

## 参数说明
- `bAuth` (Boolean, optional): 是否需要授权访问，默认值为false

## 返回值
服务网址

Type: String

## 功能描述
取服务对应的网址。

## 示例
```typescript
const serviceUrl = cx.svr.login.url(true); // 获取需要授权的服务网址
const publicUrl = cx.svr.login.url(); // 获取公开的服务网址
``` 