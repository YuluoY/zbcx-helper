# clear

清空数组

## 函数签名
```typescript
static clear(arr: Array): Object
```

## 描述
清空数组中的所有元素。这是一个静态方法，会移除数组中的所有元素。

## 参数
- `arr`: Array
  - 要清空的数组

## 返回值
- 类型：`Object`
- 描述：返回 this

## 示例
```javascript
let arr = [1, 2, 3, 4, 5];
cx.array.clear(arr);
// arr 现在是 []
```