## locCfg

静态方法，用于根据词条配置串获取多语言词条。

### 语法

```typescript
static locCfg(locCfg: Object, att: Object) → {String}
```

### 参数

- `locCfg` (Object): 词条配置
  - `loc` (String, 可选): 多语言词条(loc 与 defval 至少需要配一个, 字段名用 {} 标记, 如: fld.{table}.{colname})
  - `defval` (String, 可选): 默认值(loc 与 defval 至少需要配一个, 字段名用 {} 标记, 如: {namec})
- `att` (Object): 属性

### 返回值

- (String): 词表字符串

### 描述

根据词条配置串取多语言词条。支持通过配置获取复杂的多语言词条。 