调用存储过程。

Example:
```javascript
// 调用存储过程
const result = await cx.svr.data.callProc(101, 1, {
  name: 'proc_name',
  params: ['param1', 2, true]
})
```