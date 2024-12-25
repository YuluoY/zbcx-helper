## urlGet

静态方法，用于构造 GET 请求的 URL。

### 语法

```typescript
static urlGet(url: string, cmd: string, params: Object) → {String}
```

### 参数

- `url` (String): 基本URL
- `cmd` (String): 命令
- `params` (Object): 其他参数

### 返回值

- (String): 返回构造好的 GET 请求 URL

### 描述

根据基本 URL、命令和参数构造完整的 GET 请求 URL。这个方法会将所有参数正确地编码并拼接到 URL 中。 