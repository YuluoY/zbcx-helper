根据ID查询单条数据（不含子表数据）。

Example:
```javascript
// 查询指定ID的数据（不含子表）
const item = await cx.svr.data.queryId0(101, 1, {
  id: 1001
})
```