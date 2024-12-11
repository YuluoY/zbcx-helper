删除单条数据。

Example:
```javascript
// 删除指定ID的数据
const success = await cx.svr.data.del(101, 1, {
  id: 1001
})
```