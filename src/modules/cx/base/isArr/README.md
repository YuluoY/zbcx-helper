判断val是否为数组，是返回true，不是返回false。

**说明**: 
- 使用Array.isArray()进行判断
- 返回布尔值表示是否为数组

Example:
```javascript
// 基本使用
cx.base.isArr([1, 2, 3])  // 返回 true
cx.base.isArr('array')    // 返回 false
cx.base.isArr({})         // 返回 false
cx.base.isArr(null)       // 返回 false
```