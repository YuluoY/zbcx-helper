# derepeat

数组去重

## 函数签名
```typescript
static derepeat(arr: Array): Object
```

## 描述
移除数组中的重复元素。这是一个静态方法，会保留每个元素的第一次出现，删除后续的重复项。

## 参数
- `arr`: Array
  - 要去重的数组

## 返回值
- 类型：`Object`
- 描述：返回 this

## 示例
```javascript
let arr = [1, 2, 2, 3, 3, 3, 4];
cx.array.derepeat(arr);
// arr 现在是 [1, 2, 3, 4]
```