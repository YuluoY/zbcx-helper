批量更新数据。

Example:
```javascript
// 批量更新多条数据
const success = await cx.svr.data.updates(101, 1, {
  items: [
    { id: 1001, name: '名称1', status: 2 },
    { id: 1002, name: '名称2', status: 3 }
  ]
})
```