# Http

HTTP 请求工具类，提供了各种 HTTP 请求方法。

## 方法

### 静态方法

- [get](get/README.md) - GET方式调用
- [getAuth](getAuth/README.md) - 获取授权信息
- [init](init/README.md) - 初始化
- [loadBinary](loadBinary/README.md) - GET方式调用
- [loadText](loadText/README.md) - GET方式调用
- [post](post/README.md) - POST方式调用
- [setAuth](setAuth/README.md) - 设置授权信息
- [urlGet](urlGet/README.md) - 获取 GET 方式URL

## init

静态方法，用于初始化 HTTP 服务。

### 语法

```typescript
static init()
```

### 描述

初始化 HTTP 服务的配置和状态。在使用其他 HTTP 方法之前应该先调用此方法。 