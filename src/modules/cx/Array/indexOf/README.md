# indexOf

获取元素索引

## 函数签名
```typescript
static indexOf(arr: Array, val: any): number
```

## 描述
获取指定元素在数组中的索引位置。这是一个静态方法，使用严格相等（===）进行比较。

## 参数
- `arr`: Array
  - 要搜索的数组
- `val`: any
  - 要查找的值

## 返回值
- 类型：`number`
- 描述：返回元素在数组中的索引位置，如果未找到则返回-1

## 示例
```javascript
let arr = ['a', 'b', 'c', 'd'];
let index = cx.array.indexOf(arr, 'c');
// index 是 2
let notFound = cx.array.indexOf(arr, 'e');
// notFound 是 -1
``` 