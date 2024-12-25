# getRpts

导出多报表

## 方法签名
```typescript
static getRpts(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `data` (Array.<Object>): 数据对象序列，每个数据项与getRpt参数一致

## 返回值
Promise 对象，返回请求对象

## 功能描述
导出多个报表数据。

## 示例
```typescript
await cx.svr.rpt.getRpts({
  data: [
    {
      sheetname: "报表1",
      header: ["字段1", "字段2"],
      data: [{ "字段1": "值1", "字段2": "值2" }]
    },
    {
      sheetname: "报表2",
      header: ["列1", "列2"],
      data: [{ "列1": "数据1", "列2": "数据2" }]
    }
  ]
});
``` 