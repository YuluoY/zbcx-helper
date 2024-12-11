根据ID查询单条数据。

Example:
```javascript
// 查询指定ID的数据
const item = await cx.svr.data.queryId(101, 1, {
  id: 1001
})
```