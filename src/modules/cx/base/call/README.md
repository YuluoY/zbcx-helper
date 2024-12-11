Function或Caller调用。

**说明**: 
- 用于调用函数或Caller
- 支持可变参数
- 参数1为函数或Caller
- 参数2开始为函数参数，参数个数不限

Example:
```javascript
// 调用函数
const fn = (a, b) => a + b
cx.base.call(fn, '1', '2') // 3

// 调用Caller
const caller = {
  method: function(x) { return x * 2 }
}
cx.base.call(caller.method, '5') // 10
```