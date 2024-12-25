# has

判断是否包含元素

## 函数签名
```typescript
static has(arr: Array, val: any): boolean
```

## 描述
判断数组中是否包含指定的元素。这是一个静态方法，使用严格相等（===）进行比较。

## 参数
- `arr`: Array
  - 要搜索的数组
- `val`: any
  - 要查找的值

## 返回值
- 类型：`boolean`
- 描述：如果数组包含指定元素返回true，否则返回false

## 示例
```javascript
let arr = [1, 2, 3, 4, 5];
let hasThree = cx.array.has(arr, 3);
// hasThree 是 true
let hasSix = cx.array.has(arr, 6);
// hasSix 是 false
``` 