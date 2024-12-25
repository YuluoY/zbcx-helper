## get

静态方法，用于发起 GET 请求。

### 语法

```typescript
static get(url: string, params?: Object, urlConf?: Object) → {Promise}
```

### 参数

- `url` (String): URL地址
- `params` (Object, 可选): 请求参数
  - 如果 url 中已通过 ? 配置参数,如 http://地址:端口/LoginSvr?key1=参数1, 相同参数, params 中优先级高
  - `args` (Array<SqlCons|BraSqlCons>, 可选): SQL条件
    - SqlCons 元素表达式: [列,操作符,值,连接符]
    - BraSqlCons 括号表达式: [连接符, 元子表达式1, ...]
    - 可多级嵌套
- `urlConf` (Object, 可选): 请求的配置数据

### 返回值

- (Promise): 返回一个 Promise 对象

### 描述

GET方式调用远程服务。可以通过 URL 直接传参,也可以通过 params 对象传参,如果有重复参数,params 中的优先级更高。支持复杂的 SQL 条件构造。 