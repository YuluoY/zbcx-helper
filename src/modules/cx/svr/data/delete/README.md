删除数据。

Example:
```javascript
// 删除指定ID的数据
cx.svr.data.delete(101, 1, [['id', '=', 1]])

// 删除多个条件的数据
cx.svr.data.delete(101, 1, [
  ['type', '=', 2],
  ['status', '=', 0, 'and']
])
```