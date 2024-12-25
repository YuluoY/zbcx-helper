# md5

免登陆服务 - 获取字符串的MD5码

## 方法签名
```typescript
static md5(code: String) => Promise
```

## 参数说明
- `code` (String): 字符串

## 返回值
Promise 对象

## 功能描述
免登陆服务 - 获取字符串的MD5码。

## 示例
```typescript
await cx.svr.login.md5("test-string");
``` 