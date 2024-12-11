判断val是否不为null，不是null时返回true，是null时返回false。

**说明**: 
- 判断值是否不为null
- 返回布尔值表示是否不为null

Example:
```javascript
// 基本使用
cx.base.isNNull({})           // 返回 true
cx.base.isNNull([])           // 返回 true
cx.base.isNNull('')           // 返回 true
cx.base.isNNull(0)            // 返回 true
cx.base.isNNull(null)         // 返回 false
cx.base.isNNull(undefined)    // 返回 true
```