防抖事件触发，在一定时间内只执行最后一次。

**说明**: 
- ctx用于存储防抖状态的上下文环境
- 同一个ctx中多个func防抖时需要传入不同的evtName
- delay默认为500毫秒
- evtName默认为'def'

Example:
```javascript
// 基本用法
class MyComponent {
  constructor() {
    this.handleInput = cx.base.debounce(this, this.onInput)
  }
  
  onInput(e) {
    console.log('input value:', e.target.value)
  }
}

// 多个防抖函数
class MyComponent {
  constructor() {
    this.handleInput = cx.base.debounce(this, this.onInput, 'input', 300)
    this.handleScroll = cx.base.debounce(this, this.onScroll, 'scroll', 100)
  }
}
```