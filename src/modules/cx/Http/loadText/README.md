## loadText

静态方法，用于以文本方式加载资源。

### 语法

```typescript
static loadText(url: string) → {Promise}
```

### 参数

- `url` (String): URL地址

### 返回值

- (Promise): 返回一个 Promise 对象

### 描述

GET方式调用远程服务，用于加载文本数据。适用于获取文本文件、JSON、XML等文本格式的资源。 