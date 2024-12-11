添加多条数据（JSON字符串格式）。

Example:
```javascript
// 添加多条数据
const ids = await cx.svr.data.addsJson(101, 1, JSON.stringify([
  { name: '测试1', code: 'test1' },
  { name: '测试2', code: 'test2' }
]))
```