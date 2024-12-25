# operLog

登录后服务 - 用户登录增删改等操作日志

## 方法签名
```typescript
static operLog(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `init` (Number): 分页标记（不传该参数不分页），（传递本参数：0/1 首次调用为0，非第一次为1）
  - `pageno` (Number): 页码(1开始)
  - `pagesize` (Number): 每页数据条数
  - `userid` (Number, optional): 用户id
  - `opertype` (Number, optional): 操作类型，与 operlog 表opertype值一致
  - `entityatt` (String, optional): 操作属性，与 operlog 表entityatt值like查询

## 返回值
Promise 对象，返回数据结构 {ret:0, data: []}

## 功能描述
登录后服务 - 用户登录增删改等操作日志。

## 示例
```typescript
await cx.svr.login.operLog({
  init: 0,
  pageno: 1,
  pagesize: 10,
  userid: 123,
  opertype: 1,
  entityatt: "login"
});
``` 