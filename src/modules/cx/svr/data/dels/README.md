删除多条数据。

Example:
```javascript
// 删除多个ID的数据
const success = await cx.svr.data.dels(101, 1, {
  ids: [1001, 1002, 1003]
})
```