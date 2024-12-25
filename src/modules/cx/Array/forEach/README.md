# forEach

遍历数组

## 函数签名
```typescript
static forEach(arr: Array, callback: Function, context?: Object): void
```

## 描述
对数组中的每个元素执行指定的回调函数。这是一个静态方法，可以指定回调函数的执行上下文。

## 参数
- `arr`: Array
  - 要遍历的数组
- `callback`: Function
  - 回调函数，格式为 function(item, index, array)
- `context`: Object (可选)
  - 回调函数执行时的上下文对象

## 返回值
- 类型：`void`
- 描述：无返回值

## 示例
```javascript
let arr = [1, 2, 3];
cx.array.forEach(arr, function(item, index) {
  console.log(`Index ${index}: ${item}`);
});
``` 