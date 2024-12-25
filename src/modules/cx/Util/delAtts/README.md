# delAtts

删除对象里面的属性。

## 语法

```javascript
delAtts(dest, obj) → {Object}
```

## 参数

- `dest` (Object): 目标对象
- `obj` (Object): 待删除的属性

## 返回值

- Object: 删除属性后的对象

## 描述

从目标对象中删除指定的属性。

## 示例

```javascript
const newObj = cx.util.delAtts(dest, obj);
console.log('新对象:', newObj);
```

## 注意事项

- 此方法为静态方法，可以直接调用 