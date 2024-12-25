## locProc

静态方法，用于获取 cx.proc.* 字词表符串。

### 语法

```typescript
static locProc(key: String, defVal: String, ...argvs) → {String}
```

### 参数

- `key` (String): 字符串key
- `defVal` (String): 默认值
- `argvs` (*): 变参，要被替换的目标字符串

### 返回值

- (String): 词表字符串

### 描述

取 cx.proc.* 字词表符串。用于获取流程相关的多语言词条，支持变量替换。 