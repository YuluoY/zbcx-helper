添加多条数据（不自动生成ID）。

Example:
```javascript
// 添加多条数据，ID需要在data中指定
const ids = await cx.svr.data.addsNoId(101, 1, [
  { id: 1001, name: '测试1', code: 'test1' },
  { id: 1002, name: '测试2', code: 'test2' }
])
```