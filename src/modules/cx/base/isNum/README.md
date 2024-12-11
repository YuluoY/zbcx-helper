判断val是否为数字类型，是时返回true，否则false。

**说明**: 
- 使用typeof运算符判断类型是否为'number'
- 返回布尔值表示是否为数字类型

Example:
```javascript
// 基本使用
cx.base.isNum(123)           // 返回 true
cx.base.isNum(3.14)          // 返回 true
cx.base.isNum('123')         // 返回 false
cx.base.isNum(null)          // 返回 false
cx.base.isNum(NaN)           // 返回 true
```