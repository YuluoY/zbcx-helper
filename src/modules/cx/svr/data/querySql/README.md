执行SQL查询。

Example:
```javascript
// 简单SQL查询
const list = await cx.svr.data.querySql(101, 1, {
  sql: 'SELECT * FROM t_user WHERE status = 1'
})

// 带参数的SQL查询
const list = await cx.svr.data.querySql(101, 1, {
  sql: 'SELECT * FROM t_user WHERE status = ? AND type IN (?)',
  args: [1, '1,2,3']
})
```