获取单据数据。

Example:
```javascript
// 获取指定ID的单据数据
const bill = await cx.svr.data.getBill(101, 1, {
  id: 1001
})
```