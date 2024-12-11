判断是否Boolean类型，是时返回true，否则false。

**说明**: 
- 使用typeof运算符判断类型是否为'boolean'
- 返回布尔值表示是否为Boolean类型

Example:
```javascript
// 基本使用
cx.base.isBoolean(true)     // 返回 true
cx.base.isBoolean(false)    // 返回 true
cx.base.isBoolean(1)        // 返回 false
cx.base.isBoolean('true')   // 返回 false
cx.base.isBoolean(null)     // 返回 false
```