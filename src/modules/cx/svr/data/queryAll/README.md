查询所有数据（不分页）。

Example:
```javascript
// 查询所有数据
const list = await cx.svr.data.queryAll(101, 1)

// 带条件查询
const list = await cx.svr.data.queryAll(101, 1, {
  args: [['status', '=', 1], ['type', 'in', '1,2,3', 'and']],
  orderby: 'id DESC'
})
```