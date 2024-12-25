# derepeatByKeys

根据多个键值去重

## 函数签名
```typescript
static derepeatByKeys(arr: Array, keys: string[]): Object
```

## 描述
根据对象中的多个键值对数组进行去重。这是一个静态方法，会保留所有指定键值组合的第一次出现，删除后续的重复项。

## 参数
- `arr`: Array
  - 要去重的数组
- `keys`: string[]
  - 用于去重的键名数组

## 返回值
- 类型：`Object`
- 描述：返回 this

## 示例
```javascript
let arr = [
  {id: 1, type: 'A', name: 'a'},
  {id: 1, type: 'B', name: 'b'},
  {id: 1, type: 'A', name: 'c'}
];
cx.array.derepeatByKeys(arr, ['id', 'type']);
``` 