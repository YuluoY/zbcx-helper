判断val(对象或属性)是否存在obj(数组或对象)中。

**说明**: 
- obj可以是数组或对象
- val是要查找的对象
- 返回true表示存在，false表示不存在

Example:
```javascript
// 数组包含判断
const arr = [1, 2, 3]
cx.base.contains(arr, 2) // true

// 对象属性判断
const obj = { name: 'test', value: 100 }
cx.base.contains(obj, 'name') // true

// 对象值判断
const items = [{ id: 1 }, { id: 2 }]
cx.base.contains(items, { id: 1 }) // true
```