判断val是否为对象类型，是时返回true，否则false。

**说明**: 
- 使用typeof运算符判断类型是否为'object'
- null虽然也是'object'类型，但会返回false
- 数组虽然也是'object'类型，但会返回false

Example:
```javascript
// 基本使用
cx.base.isObj({})             // 返回 true
cx.base.isObj(new Object())   // 返回 true
cx.base.isObj([])             // 返回 false
cx.base.isObj(null)           // 返回 false
cx.base.isObj(123)            // 返回 false
```