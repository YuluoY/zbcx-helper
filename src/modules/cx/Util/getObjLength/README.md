# getObjLength

取对象长度。

## 语法

```javascript
getObjLength(obj) → {Number}
```

## 参数

- `obj` (Object): 对象

## 返回值

- Number: 对象的长度

## 描述

获取对象的长度。

## 示例

```javascript
const length = cx.util.getObjLength({a: 1, b: 2});
console.log('对象长度:', length);
```

## 注意事项

- 此方法为静态方法，可以直接调用 