添加单条数据。

Example:
```javascript
// 添加单条数据
const id = await cx.svr.data.add(101, 1, {
  name: '测试',
  code: 'test'
})
```