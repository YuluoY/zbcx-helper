批量执行多个操作。

Example:
```javascript
// 批量执行多个操作
const results = await cx.svr.data.batch(101, 1, [
  { type: 'add', data: { name: '测试1', code: 'test1' } },
  { type: 'update', data: { id: 1, name: '新名称' } },
  { type: 'del', data: { id: 2 } }
])
```