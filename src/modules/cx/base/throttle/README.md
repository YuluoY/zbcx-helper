节流，每隔一定时间内，触发一次。

**说明**: 
- 用于限制函数的调用频率
- ctx为节流处理的上下文环境
- func为事件回调函数
- evtName为事件标识，同一个ctx中对多个func的封装要传入不同的evtName
- delay为节流间隔时间，单位毫秒，默认500ms

Example:
```javascript
// 基本使用
const handler = cx.base.throttle(this, () => {
  console.log('throttled function called')
})

// 指定事件名和延迟时间
const handler2 = cx.base.throttle(this, () => {
  console.log('throttled with custom config')
}, 'myEvent', 1000)
```