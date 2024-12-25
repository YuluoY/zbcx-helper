# loginLog

登录后服务 - 取用户登录日志

## 方法签名
```typescript
static loginLog(params: Object) => Promise|Promise
```

## 参数说明
- `params` (Object): 参数
  - `init` (Number): 分页标记（不传该参数不分页），（传递本参数：0/1 首次调用为0，非第一次为1）
  - `pageno` (Number): 页码(1开始)
  - `pagesize` (Number): 每页数据条数
  - `userid` (Number, optional): 用户id
  - `organid` (Number, optional): 部门id
  - `start` (String, optional): 起始登录时间，如 2022-11-01
  - `end` (String, optional): 终止登录时间

## 返回值
Promise 对象，返回数据结构 {ret:0, data: []}

## 功能描述
登录后服务 - 取用户登录日志。

## 示例
```typescript
await cx.svr.login.loginLog({
  init: 0,
  pageno: 1,
  pagesize: 10,
  userid: 123,
  start: "2023-01-01",
  end: "2023-12-31"
});
``` 