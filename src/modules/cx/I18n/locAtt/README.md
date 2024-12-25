## locAtt

静态方法，用于根据主类型/子类型/属性获取系统表的词条。

### 语法

```typescript
static locAtt(major: Number, minor: Number, att: Object) → {String}
```

### 参数

- `major` (Number): 主类型
- `minor` (Number): 子类型
- `att` (Object): 属性

### 返回值

- (String): 词表字符串

### 描述

根据主类型/子类型/属性取系统表的词条。用于获取系统表中特定属性的多语言翻译。 