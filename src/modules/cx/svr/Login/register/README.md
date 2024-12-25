# register

免登陆服务 - 用户注册

## 方法签名
```typescript
static register(major: Number, minor: Number, att: Object) => Promise
```

## 参数说明
- `major` (Number): 用户表主类型，一般用 cx.consts.SYSTAB 表
- `minor` (Number): 用户表子类型，一般用 cx.consts.TAB_USER 表
- `att` (Object): 注册的用户属性对象，属性见user表。内部每个key的值只能是简单类型
  - `password` (String): 注册的密码，syscfg表配置enKey后，要用cx.security.encrypt.encrypt加密

## 返回值
Promise 对象，返回数据结构 {ret:0}

## 功能描述
免登陆服务 - 用户注册。

## 示例
```typescript
await cx.svr.login.register(1, 1, {
  password: "encryptedPassword",
  // 其他user表相关属性
});
``` 