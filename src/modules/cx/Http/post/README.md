## post

静态方法，用于发起 POST 请求。

### 语法

```typescript
static post(url: string, params: Object, urlConf?: Object) → {Promise}
```

### 参数

- `url` (String): URL地址
- `params` (Object): 请求参数
  - `args` (Array<SqlCons|BraSqlCons>, 可选): SQL条件
    - SqlCons 元素表达式: [列,操作符,值,连接符]
    - BraSqlCons 括号表达式: [连接符, 元子表达式1, ...]
    - 可多级嵌套
- `urlConf` (Object, 可选): 请求的配置数据

### 返回值

- (Promise): 返回一个 Promise 对象

### 描述

POST方式调用远程服务。通过 params 对象传递请求参数，支持复杂的 SQL 条件构造。适用于需要传递大量数据或敏感数据的场景。 