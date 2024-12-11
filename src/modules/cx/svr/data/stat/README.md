统计数据。

Example:
```javascript
// 简单统计
const stats = await cx.svr.data.stat(101, 1, {
  fields: ['COUNT(*) as count', 'SUM(amount) as total']
})

// 带条件和分组的统计
const stats = await cx.svr.data.stat(101, 1, {
  args: [['status', '=', 1]],
  fields: ['type', 'COUNT(*) as count', 'SUM(amount) as total'],
  groupby: 'type'
})
```