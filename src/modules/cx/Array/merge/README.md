# merge

合并数组

## 函数签名
```typescript
static merge(arr: Array, arr2: Array): Object
```

## 描述
将两个数组合并成一个数组。这是一个静态方法，会修改第一个数组。

## 参数
- `arr`: Array
  - 目标数组，将被修改
- `arr2`: Array
  - 源数组，其元素将被合并到目标数组

## 返回值
- 类型：`Object`
- 描述：返回 this

## 示例
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4, 5];
cx.array.merge(arr1, arr2);
// arr1 现在是 [1, 2, 3, 4, 5]
// arr2 保持不变
```