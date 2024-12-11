检查字段值是否存在。

Example:
```javascript
// 检查code字段值是否已存在
const exists = await cx.svr.data.check(101, 1, {
  field: 'code',
  value: 'test001'
})
```