# getRpt

导出单报表

## 方法签名
```typescript
static getRpt(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `sheetname` (String): sheet页名称
  - `header` (Array.<String>): 标头自动名序列
  - `data` (Array.<Object>): 数据对象

## 返回值
Promise 对象，返回请求对象

## 功能描述
导出单个报表数据。

## 示例
```typescript
await cx.svr.rpt.getRpt({
  sheetname: "单报表",
  header: [
    "fld1",
    "fld2",
    "fld3"
  ],
  data: [
    {
      "fld1": "a1",
      "fld2": "b1",
      "fld3": "c1"
    }
  ]
});
``` 