# removeElement

移除指定元素

## 函数签名
```typescript
static removeElement(arr: Array, element: any): Object
```

## 描述
从数组中移除指定的元素。这是一个静态方法，会修改原数组，使用严格相等（===）进行比较。

## 参数
- `arr`: Array
  - 目标数组
- `element`: any
  - 要移除的元素

## 返回值
- 类型：`Object`
- 描述：返回 this

## 示例
```javascript
let arr = ['a', 'b', 'c', 'b', 'd'];
cx.array.removeElement(arr, 'b');
// arr 现在是 ['a', 'c', 'b', 'd']
// 注意：只移除第一个匹配的元素
```