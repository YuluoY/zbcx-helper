字符串调用。

**说明**: 
- func为函数字符串，可以'()'结尾，也可以没有'()' (如 'test' 或 'test()')
- args为参数数组

Example:
```javascript
// 基本使用
cx.base.execute('Math.max', [1, 2, 3]) // 返回 3

// 带括号的函数名
cx.base.execute('Math.min()', [4, 5, 6]) // 返回 4

// 自定义函数
function test(a, b) { return a + b }
cx.base.execute('test', [1, 2]) // 返回 3
```