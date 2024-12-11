目标对象(target)将承对象(args可以多个参数)。

**说明**: 
- target为目标对象
- args为可变参数，可以传入多个源对象

Example:
```javascript
// 基本使用
const target = { a: 1 }
const source = { b: 2 }
cx.base.extend(target, source)
// target = { a: 1, b: 2 }

// 多个源对象
const target = {}
const source1 = { a: 1 }
const source2 = { b: 2 }
cx.base.extend(target, source1, source2)
// target = { a: 1, b: 2 }
```