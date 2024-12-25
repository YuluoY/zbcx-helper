# appendArr

添加数组中的元素到数组

## 函数签名
```typescript
static appendArr(arr: Array, src: Array): Object
```

## 描述
将源数组中的所有元素添加到目标数组中。这是一个静态方法，用于合并两个数组。

## 参数
- `arr`: Array
  - 目标数组
- `src`: Array
  - 源数组，其中的元素将被添加到目标数组

## 返回值
- 类型：`Object`
- 描述：返回 this

## 示例
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4, 5];
cx.array.appendArr(arr1, arr2);
// arr1 现在是 [1, 2, 3, 4, 5]
``` 