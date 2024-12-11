重新加载单条数据。

Example:
```javascript
// 重新加载指定ID的数据
const item = await cx.svr.data.reload(101, 1, {
  id: 1001
})
```