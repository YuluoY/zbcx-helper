判断val是否为字符串类型，是时返回true，否则false。

**说明**: 
- 使用typeof运算符判断类型是否为'string'
- 返回布尔值表示是否为字符串类型

Example:
```javascript
// 基本使用
cx.base.isStr('hello')        // 返回 true
cx.base.isStr('')             // 返回 true
cx.base.isStr(123)            // 返回 false
cx.base.isStr(null)           // 返回 false
cx.base.isStr(undefined)      // 返回 false
```