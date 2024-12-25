# splitArray

分割数组

## 函数签名
```typescript
static splitArray(arr: Array, size: number): Array[]
```

## 描述
将一个数组分割成多个小数组。这是一个静态方法，每个小数组的长度为指定的大小。

## 参数
- `arr`: Array
  - 要分割的数组
- `size`: number
  - 每个小数组的大小

## 返回值
- 类型：`Array[]`
- 描述：返回分割后的数组集合

## 示例
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7];
let result = cx.array.splitArray(arr, 3);
// result 是 [[1, 2, 3], [4, 5, 6], [7]]
``` 