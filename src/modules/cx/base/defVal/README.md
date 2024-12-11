如果给出的值为未定义，则给出缺省值。

**说明**: 
- 当value未定义时返回defValue
- 当value已定义时返回value

Example:
```javascript
// 基本使用
cx.base.defVal(undefined, 1) // 返回 1
cx.base.defVal(null, 2)      // 返回 null
cx.base.defVal(0, 3)         // 返回 0
cx.base.defVal('', 4)        // 返回 ''
```