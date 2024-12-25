# insertAt

在指定位置插入元素

## 函数签名
```typescript
static insertAt(arr: Array, obj: any, idx: number): Object
```

## 描述
把对象增加到数组中的指定位置。这是一个静态方法，会修改原数组。

## 参数
- `arr`: Array
  - 目标数组
- `obj`: any
  - 要插入的对象
- `idx`: number
  - 要插入的位置索引

## 返回值
- 类型：`Object`
- 描述：返回 this

## 示例
```javascript
let arr = [1, 2, 4, 5];
cx.array.insertAt(arr, 3, 2);
// arr 现在是 [1, 2, 3, 4, 5]
```