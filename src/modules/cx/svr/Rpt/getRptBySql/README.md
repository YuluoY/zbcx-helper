# getRptBySql

利用usersql导出报表

## 方法签名
```typescript
static getRptBySql(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `header` (String): 导出列名序列
  - `_key` (String): usersql名
  - `vals` (String): sql中参数值

## 返回值
Promise 对象，返回请求对象

## 功能描述
通过usersql导出报表数据。

## 示例
```typescript
await cx.svr.rpt.getRptBySql({
  header: "列1,列2,列3",
  _key: "myQuery",
  vals: "param1,param2"
});
``` 