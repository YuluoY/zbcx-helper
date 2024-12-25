# getXlsHeader

获取表头

## 方法签名
```typescript
static getXlsHeader(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `filename` (String): 文件路径名

## 返回值
Promise 对象，返回sheet页数据序列，结构 {ret: 0, data: [{sheet1名: {A: 列名1, B: 列名2, ...}}, ...]}

## 功能描述
获取Excel表格中的表头信息。

## 示例
```typescript
await cx.svr.imp.getXlsHeader({ 
  filename: 'path/to/excel.xlsx'
});
``` 