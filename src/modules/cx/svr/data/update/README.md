更新单条数据。

Example:
```javascript
// 更新数据
const success = await cx.svr.data.update(101, 1, {
  id: 1001,
  name: '新名称',
  status: 2
})
```