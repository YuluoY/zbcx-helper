判断val是否为函数类型，是时返回true，否则false。

**说明**: 
- 使用typeof运算符判断类型是否为'function'
- 返回布尔值表示是否为函数类型

Example:
```javascript
// 基本使用
cx.base.isFunc(function(){})  // 返回 true
cx.base.isFunc(() => {})      // 返回 true
cx.base.isFunc(null)          // 返回 false
cx.base.isFunc({})            // 返回 false
```