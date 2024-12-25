# update

更新数组

## 函数签名
```typescript
static update(arr: Array, index: number, element: any): Object
```

## 描述
更新数组中指定索引位置的元素。这是一个静态方法，会修改原数组。

## 参数
- `arr`: Array
  - 目标数组
- `index`: number
  - 要更新的元素索引
- `element`: any
  - 新的元素值

## 返回值
- 类型：`Object`
- 描述：返回 this

## 示例
```javascript
let arr = ['a', 'b', 'c', 'd'];
cx.array.update(arr, 1, 'x');
// arr 现在是 ['a', 'x', 'c', 'd']
```