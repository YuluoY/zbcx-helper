初始化系统数据。

Example:
```javascript
// 初始化指定类型的系统数据
const success = await cx.svr.data.initSys(101, 1, {
  type: 'basic'
})
```