## loadBinary

静态方法，用于以二进制方式加载资源。

### 语法

```typescript
static loadBinary(url: string) → {Promise}
```

### 参数

- `url` (String): URL地址

### 返回值

- (Promise): 返回一个 Promise 对象

### 描述

GET方式调用远程服务，用于加载二进制数据。适用于下载文件、图片等二进制资源。 